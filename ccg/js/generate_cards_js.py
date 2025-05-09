import pandas as pd
import json

# Ensure full DataFrame printing
pd.set_option('display.max_rows', None)
pd.set_option('display.max_columns', None)

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
                effect["realm"] = int(arg1) if arg1 else 0
                effect["rarity"] = arg2

            else:
                print(f"Unknown effect type: {etype} for card {row['id']}")
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


def generate_stats(cards):
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
            if eff["type"] in ("currencyPerPoke", "currencyPerSec"):
                rec["currency"] = eff["currency"]
                rec["value"] = eff["value"]
            elif eff["type"] == "rarityOddsDivider":
                rec["rarity_realm"] = eff["realm"]
                rec["rarity_value"] = eff["rarity"]
            records.append(rec)

    df = pd.DataFrame(records)

    # 1. Total counts of each effect
    total_effect_counts = df["effect_type"].value_counts() \
        .rename_axis("effect_type") \
        .reset_index(name="count")
    print("\n== Total effect counts ==")
    print(total_effect_counts)

    # 2. RarityOddsDivider counts by realm/rarity
    rod_df = df[df["effect_type"] == "rarityOddsDivider"].copy()
    # enforce rarity order
    rod_df["rarity_value"] = pd.Categorical(
        rod_df["rarity_value"], categories=RARITY_ORDER, ordered=True
    )
    rod_counts = rod_df.groupby(["rarity_realm", "rarity_value"]) \
        .size() \
        .reset_index(name="count") \
        .sort_values(["rarity_realm", "rarity_value"])
    print("\n== RarityOddsDivider counts by realm and rarity ==")
    print(rod_counts)

    # 3. Statistics per realm
    realm_stats = df.groupby(["card_realm", "effect_type"]) \
        .size() \
        .reset_index(name="count")
    print("\n== Statistics per realm ==")
    print(realm_stats)

    # 4. Statistics per currency (for currency effects)
    curr_df = df[df["effect_type"].isin(["currencyPerPoke", "currencyPerSec"])]
    curr_stats = curr_df.groupby(["currency", "effect_type"]) \
        ["value"].agg(["count", "sum", "mean"]) \
        .reset_index()
    print("\n== Statistics per currency ==")
    print(curr_stats)


if __name__ == "__main__":
    csv_file = "cards.csv"
    js_file = "cards.js"
    cards = load_cards(csv_file)
    generate_js(cards, js_file)
    print(f"Generated {js_file} with {len(cards)} cards.")
    generate_stats(cards)
