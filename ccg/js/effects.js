// js/effects.js

window.EFFECT_NAMES = {
    minCardsPerPoke:      "Min Cards per Poke",
    maxCardsPerPoke:      "Max Cards per Poke",
    currencyPerPoke:      "Currency / Poke",
    currencyPerSec:       "Currency / Sec",
    rarityOddsDivider:    "Rarity Odds Divider",
    cooldownDivider:      "Cooldown Divider",
    cooldownSkipChance:   "Cooldown Skip Chance",
    merchantNumCards: "Merchant # Cards",
    merchantCooldownReduction: "Merchant Cooldown Reduction",
    extraMerchantRarityScaling: "Extra Merchant Rarity Scaling",
  };
  
  const EFFECT_SCALES = {
    cooldownDivider: 1.5,
    minCardsPerPoke: 1.75,
    maxCardsPerPoke: 1.75,
    rarityOddsDivider: 1.25,
    // in future you can add more types here...
  };

  function computeCardEffects(c) {
    const effs = {};
    if (!c.baseEffects || c.tier === 0) return effs;
  
    c.baseEffects.forEach(def => {
      const scale = EFFECT_SCALES[def.type] ?? 2;
      const multiplier = Math.pow(scale, c.tier - 1);
  
      switch (def.type) {
        case "minCardsPerPoke":
        case "maxCardsPerPoke": {
          const total = def.value * c.level * multiplier;
          effs[def.type] = (effs[def.type] || 0) + total;
          break;
        }
  
        case "currencyPerPoke":
        case "currencyPerSec": {
          const total = def.value * c.level * multiplier;
          const key   = `${def.type}.${def.currency}`;
          effs[key]   = (effs[key] || 0) + total;
          break;
        }
  
        case "rarityOddsDivider": {
          // Start with a base divider
          let baseDivider = 0.0025;
          const total = baseDivider * c.level * multiplier;
   
          // Cap the total at 4  (divider of 5)
          const cappedTotal = Math.min(total, 4);
   
          // Store the effect with the correct key format
          const key = `rarityOddsDivider.${def.realm}.${def.rarity}`;
          effs[key] = (effs[key] || 0) + cappedTotal;
          break;
      }
  
        case "cooldownDivider": {
          const total = Math.min(def.value * c.level * multiplier, 1);  // Cap individual card contribution at 1
          effs.cooldownDivider = (effs.cooldownDivider || 0) + total;
          break;
        }
  
        default:
          console.warn("Unknown effect type:", def.type);
      }
    });
  
    return effs;
  }
  
  function applyEffectsDelta(deltaMap, sign = +1) {
    const E = state.effects;

    Object.entries(deltaMap).forEach(([k, v]) => {
        const parts = k.split(".");

        switch (parts[0]) {
            case "minCardsPerPoke":
            case "maxCardsPerPoke":
                E[parts[0]] = (E[parts[0]] || 0) + sign * v;
                break;

            case "cooldownDivider":
                E[parts[0]] = (E[parts[0]] || 0) + sign * v;
                break;

            case "currencyPerPoke":
            case "currencyPerSec": {
                const cur = parts[1];
                E[parts[0]][cur] = (E[parts[0]][cur] || 0) + sign * v;
                break;
            }

            case "rarityOddsDivider": {
              const realmId = parts[1];
              const rarity  = parts[2];
              // ensure the realm exists
              if (!realmMap[realmId]) {
                console.error(`Realm ${realmId} not found`);
                break;
              }
              const weights = realmMap[realmId].rarityWeights;
              const current = weights[rarity] ?? 0;
      
              // new correct logic:
              if (sign > 0) {
                
                const minVal  = RARITY_ODDS_MIN[rarity] || 0;
                weights[rarity] = Math.max(minVal, current / (1 + v));
              } else {
                weights[rarity] = current * (1 + v);
              }
              break;
              }

            default:
                console.warn("Unknown effect key:", parts[0]);
        }
    });
}