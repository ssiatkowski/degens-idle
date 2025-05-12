import pandas as pd
import json
import sys

# ANSI‐color helper for terminal output
RED = "\033[91m"
RESET = "\033[0m"

# Define rarity order for proper sorting
RARITY_ORDER = [
    "junk", "basic", "decent", "fine", "rare",
    "epic", "legendary", "mythic", "exotic", "divine"
]


def load_cards(csv_path):
    df = pd.read_csv(csv_path, dtype=str).fillna('')

    cards = []
    for _, row in df.iterrows():
        card = {
            "id": row["id"],
            "name": row["name"],
            "realm": int(row["realm"]),
            "rarity": row["rarity"],
            "quantity": int(row["quantity"]),
            "tier": int(row["tier"]),
            "level": int(row["level"]),
            "levelScaling": float(row["levelScaling"]),
            "levelCost": {
                "currency": row["levelCost_currency"],
                "amount": float(row["levelCost_amount"])
            },
            "description": row["description"]
        }

        # parse up to 8 effects, each with 2 arguments
        base_effects = []
        for i in range(1, 9):
            etype = row.get(f"effect{i}_type", "").strip()
            if not etype:
                continue

            effect = {"type": etype}
            arg1 = row.get(f"effect{i}_arg1", "").strip()
            arg2 = row.get(f"effect{i}_arg2", "").strip()

            if etype in ("minCardsPerPoke", "maxCardsPerPoke", "cooldownDivider"):
                # These effects no longer need values
                pass

            elif etype in ("currencyPerPoke", "currencyPerSec"):
                # currency in arg1, numeric value in arg2
                effect["currency"] = arg1
                effect["value"] = float(arg2) if arg2 else 0

            elif etype == "rarityOddsDivider":
                # realm in arg1, rarity in arg2
                effect["realm"] = int(arg1) if arg1 else None
                effect["rarity"] = arg2

            else:
                print(f"Unknown effect type: {etype} for card {row['id']}", file=sys.stderr)
                continue

            base_effects.append(effect)

        card["baseEffects"] = base_effects
        cards.append(card)

    return cards


def generate_js(cards, out_path):
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write("window.cards = ")
        json.dump(cards, f, indent=2, ensure_ascii=False)
        f.write(";")
    print(f"Generated {out_path} with {len(cards)} cards.")


def generate_stats(cards):
    # --- build realm→rarities map ---
    realm_rarities = {}
    for card in cards:
        realm_rarities.setdefault(card["realm"], set()).add(card["rarity"])

    # flatten effects into a DataFrame
    records = []
    for card in cards:
        for eff in card["baseEffects"]:
            rec = {
                "card_id": card["id"],
                "card_name": card["name"],
                "card_realm": card["realm"],
                "card_rarity": card["rarity"],
                "effect_type": eff["type"]
            }
            if eff["type"] == "rarityOddsDivider":
                rec["rarity_realm"] = eff["realm"]
                rec["rarity_value"] = eff["rarity"]
            elif eff["type"] in ("currencyPerPoke", "currencyPerSec"):
                rec["currency"] = eff["currency"]
                rec["value"] = eff["value"]
            records.append(rec)
    df = pd.DataFrame(records)

    # 1. Total counts of each effect
    total_effect_counts = df["effect_type"].value_counts() \
        .rename_axis("effect_type") \
        .reset_index(name="count")
    print("\n== Total effect counts ==")
    print(total_effect_counts)

    # focus on rarityOddsDivider
    rod_df = df[df["effect_type"] == "rarityOddsDivider"].copy()

    # 2. find invalid references
    def is_valid(row):
        rlm = row["rarity_realm"]
        rar = row["rarity_value"]
        return (rlm in realm_rarities) and (rar in realm_rarities[rlm])

    invalid = rod_df[~rod_df.apply(is_valid, axis=1)]
    valid   = rod_df[ rod_df.apply(is_valid, axis=1)]

    if not invalid.empty:
        print("\n== Invalid RarityOddsDivider entries ==")
        for _, row in invalid.iterrows():
            txt = (f" card {row['card_id']} → realm {row['rarity_realm']}, "
                   f"rarity '{row['rarity_value']}'")
            print(RED + txt + RESET)

    # 3. valid counts, in the correct rarity order
    valid["rarity_value"] = pd.Categorical(
        valid["rarity_value"], categories=RARITY_ORDER, ordered=True
    )
    counts = valid.groupby(["rarity_realm", "rarity_value"]) \
                  .size().reset_index(name="count")

    print("\n== RarityOddsDivider counts by realm and rarity ==")
    for realm in sorted(realm_rarities):
        print(f"\nRealm {realm}:")
        for rar in RARITY_ORDER:
            if rar in realm_rarities[realm]:
                row = counts[
                    (counts["rarity_realm"] == realm) &
                    (counts["rarity_value"] == rar)
                ]
                cnt = int(row["count"]) if not row.empty else 0
                print(f"  {rar}: {cnt}")

    # 4. Statistics per realm (all effects)
    realm_stats = df.groupby(["card_realm", "effect_type"]) \
                    .size() \
                    .reset_index(name="count")
    print("\n== Statistics per realm ==")
    print(realm_stats)

    # 5. Statistics per currency (for currency effects)
    curr_df = df[df["effect_type"].isin(["currencyPerPoke", "currencyPerSec"])]
    curr_stats = curr_df.groupby(["currency", "effect_type"]) \
                        ["value"].agg(["count", "sum", "mean"]) \
                        .reset_index()
    print("\n== Statistics per currency ==")
    print(curr_stats)


if __name__ == "__main__":
    csv_file = "cards.csv"
    js_file = "cards.js"

    # load, write JS, and print stats
    cards = load_cards(csv_file)
    generate_js(cards, js_file)
    generate_stats(cards)
