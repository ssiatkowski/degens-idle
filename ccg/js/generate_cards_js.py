import pandas as pd
import json
import sys

# ANSI‐color helper for terminal output
RED = "\033[91m"
RESET = "\033[0m"

RARITY_ORDER = [
    "junk", "basic", "decent", "fine", "rare",
    "epic", "legend", "mythic", "exotic", "divine"
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

        base_effects = []
        for i in range(1, 9):
            etype = row.get(f"effect{i}_type", "").strip()
            if not etype:
                continue
            effect = {"type": etype}
            arg1 = row.get(f"effect{i}_arg1", "").strip()
            arg2 = row.get(f"effect{i}_arg2", "").strip()

            if etype in ("minCardsPerPoke", "maxCardsPerPoke", "cooldownDivider"):
                pass
            elif etype in ("currencyPerPoke", "currencyPerSec"):
                effect["currency"] = arg1
                effect["value"] = float(arg2) if arg2 else 0
            elif etype == "rarityOddsDivider":
                effect["realm"] = int(arg1) if arg1 else None
                effect["rarity"] = arg2
            else:
                print(f"Unknown effect type: {etype} for card {row['id']}", file=sys.stderr)
                continue
            base_effects.append(effect)

        special_effects = []
        for i in range(1, 3):
            req_type = row.get(f"specialEffect{i}_req_type", "").strip()
            req_amount = row.get(f"specialEffect{i}_req_amount", "").strip()
            se_type = row.get(f"specialEffect{i}_type", "").strip()
            arg1 = row.get(f"specialEffect{i}_arg1", "").strip()
            arg2 = row.get(f"specialEffect{i}_arg2", "").strip()

            if not se_type:
                continue

            se = {
                "type": se_type,
                "requirement": {
                    "type": req_type,
                    "amount": int(req_amount) if req_amount.isdigit() else 0
                }
            }

            if se_type in ("merchantPriceReduction", "allGeneratorMultiplier"):
                se["value"] = float(arg1) if arg1 else 0
            elif se_type in ("flatCurrencyPerPoke", "flatCurrencyPerSecond",
                             "currencyPerPokeMultiplier", "currencyPerSecMultiplier"):
                se["currency"] = arg1
                se["value"] = float(arg2) if arg2 else 0
            else:
                print(f"Unknown special effect type: {se_type} for card {row['id']}", file=sys.stderr)
                continue

            special_effects.append(se)

        card["baseEffects"] = base_effects
        if special_effects:
            card["specialEffects"] = special_effects

        cards.append(card)

    return cards


def generate_js(cards, out_path):
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write("window.cards = ")
        json.dump(cards, f, indent=2, ensure_ascii=False)
        f.write(";")
    print(f"Generated {out_path} with {len(cards)} cards.")


def generate_stats(cards):
    realm_rarities = {}
    for card in cards:
        realm_rarities.setdefault(card["realm"], set()).add(card["rarity"])

    records = []
    for card in cards:
        for eff in card.get("baseEffects", []):
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

    print("\n== Total base effect counts ==")
    print(df["effect_type"].value_counts().rename_axis("effect_type").reset_index(name="count"))

    rod_df = df[df["effect_type"] == "rarityOddsDivider"].copy()

    def is_valid(row):
        rlm = row["rarity_realm"]
        rar = row["rarity_value"]
        return (rlm in realm_rarities) and (rar in realm_rarities[rlm])

    invalid = rod_df[~rod_df.apply(is_valid, axis=1)]
    valid = rod_df[rod_df.apply(is_valid, axis=1)]

    if not invalid.empty:
        print("\n== Invalid RarityOddsDivider entries ==")
        for _, row in invalid.iterrows():
            print(RED + f" card {row['card_id']} → realm {row['rarity_realm']}, rarity '{row['rarity_value']}'" + RESET)

    valid["rarity_value"] = pd.Categorical(valid["rarity_value"], categories=RARITY_ORDER, ordered=True)
    counts = valid.groupby(["rarity_realm", "rarity_value"]).size().reset_index(name="count")

    print("\n== RarityOddsDivider counts by realm and rarity ==")
    for realm in sorted(realm_rarities):
        print(f"\nRealm {realm}:")
        for rar in RARITY_ORDER:
            if rar in realm_rarities[realm]:
                row = counts[(counts["rarity_realm"] == realm) & (counts["rarity_value"] == rar)]
                cnt = int(row["count"]) if not row.empty else 0
                print(f"  {rar}: {cnt}")

    print("\n== Statistics per realm (base effects) ==")
    print(df.groupby(["card_realm", "effect_type"]).size().reset_index(name="count"))

    curr_df = df[df["effect_type"].isin(["currencyPerPoke", "currencyPerSec"])]
    curr_stats = curr_df.groupby(["currency", "effect_type"])["value"].agg(["count", "sum", "mean"]).reset_index()
    print("\n== Statistics per currency (base effects) ==")
    print(curr_stats)

    print("\n== Special Effects per Realm ==")
    for card in cards:
        for se in card.get("specialEffects", []):
            realm = card["realm"]
            req = se["requirement"]
            print(f"[Realm {realm}] Card {card['name']} ({card['id']}): {se['type']} — requires {req['type']} {req['amount']}")


if __name__ == "__main__":
    csv_file = "cards.csv"
    js_file = "cards.js"
    cards = load_cards(csv_file)
    generate_js(cards, js_file)
    generate_stats(cards)
