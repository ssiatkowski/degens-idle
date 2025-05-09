import pandas as pd
import json

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

if __name__ == "__main__":
    csv_file = "cards.csv"
    js_file  = "cards.js"
    cards    = load_cards(csv_file)
    generate_js(cards, js_file)
    print(f"Generated {js_file} with {len(cards)} cards.")
