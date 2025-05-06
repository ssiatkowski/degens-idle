// js/effects.js

window.EFFECT_NAMES = {
    minCardsPerPoke:      "Min Cards per Poke",
    maxCardsPerPoke:      "Max Cards per Poke",
    currencyPerPoke:      "Currency / Poke",
    currencyPerSec:       "Currency / Sec",
    rarityOddsReduction:  "Rarity Odds Reduction",
    cooldownDivider:      "Cooldown Divider",
    cooldownSkipChance:   "Cooldown Skip Chance",
    merchantCooldownReduction: "Merchant Cooldown Reduction",
    merchantRarityScaling: "Merchant Rarity Scaling",
  };
  
  const EFFECT_SCALES = {
    cooldownDivider: 1.5,
    minCardsPerPoke: 1.75,
    maxCardsPerPoke: 1.75,
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
  
        case "rarityOddsReduction": {
          const base  = RARITY_ODDS_BASE[def.rarity] || 0;
          const total = base * c.level * multiplier;
          const key   = `rarityOddsReduction.${def.realm}.${def.rarity}`;
          effs[key]   = (effs[key] || 0) + total;
          break;
        }
  
        case "cooldownDivider": {
          const total = Math.min(def.value * c.level * multiplier, 1);
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
          E[parts[0]] = Math.min((E[parts[0]] || 0) + sign * v, 1);
          break;
  
        case "currencyPerPoke":
        case "currencyPerSec": {
          const cur = parts[1];
          E[parts[0]][cur] = (E[parts[0]][cur] || 0) + sign * v;
          break;
        }
  
        case "rarityOddsReduction": {
          const realmId = parts[1];
          const rarity  = parts[2];
          const prev    = realmMap[realmId].rarityWeights[rarity] || 0;
          // always subtract for odds-reduction
          const updated = prev -  sign * v;
          const minVal  = RARITY_ODDS_MIN[rarity] || 0;
          realmMap[realmId].rarityWeights[rarity] = Math.max(minVal, updated);
          break;
        }
  
        default:
          console.warn("Unknown effect key:", parts[0]);
      }
    });
  }
  