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

        # parse up to 5 effects
        base_effects = []
        for i in range(1, 6):
            etype = row.get(f"effect{i}_type", "").strip()
            if not etype:
                continue
            # Prepare effect dict
            effect = {"type": etype}
            # depending on type, assign args
            if etype in ("minCardsPerPoke", "maxCardsPerPoke", "cooldownDivider"):
                # single value
                val = row.get(f"effect{i}_arg1", "")
                effect["value"] = float(val) if val else 0
            elif etype in ("currencyPerPoke", "currencyPerSec"):
                effect["currency"] = row.get(f"effect{i}_arg1", "")
                val = row.get(f"effect{i}_arg2", "")
                effect["value"] = float(val) if val else 0
            elif etype == "rarityWeightBonus":
                effect["realm"] = int(row.get(f"effect{i}_arg1", 0))
                effect["rarity"] = row.get(f"effect{i}_arg2", "")
                val = row.get(f"effect{i}_arg3", "")
                effect["value"] = float(val) if val else 0
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
    # Update paths as needed
    csv_file = "cards.csv"
    js_file = "cards.js"
    cards = load_cards(csv_file)
    generate_js(cards, js_file)
    print(f"Generated {js_file} with {len(cards)} cards.")