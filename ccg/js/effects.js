// js/effects.js

window.EFFECT_NAMES = {
    minCardsPerPoke:    "Min Cards per Poke",
    maxCardsPerPoke:    "Max Cards per Poke",
    currencyPerPoke:    "Currency / Poke",
    currencyPerSec:     "Currency / Sec",
    rarityWeightBonus:  "Rarity Weight Bonus",
    rarityWeightMultiplier: "Rarity Weight Multiplier",
    cooldownDivider:    "Cooldown Divider",
};

function computeCardEffects(c) {
    // returns a map: { effectKey: totalValue }
    const effs = {};
    if (!c.baseEffects || c.tier === 0) return effs;
  
    // Per‐effect in baseEffects[]
    c.baseEffects.forEach(def => {
      let raw = def.value * c.level * Math.pow(2, c.tier - 1);
  
      switch (def.type) {
        case "minCardsPerPoke":
        case "maxCardsPerPoke":
        case "currencyPerPoke":
        case "currencyPerSec":
        case "cooldownDivider":
          const key = `${def.type}.${def.currency}`;
          effs[key] = (effs[key] || 0) + def.value * c.level * Math.pow(2, c.tier - 1);
          break;
  
        case "rarityWeightBonus":
          // keyed by realm & rarity
          const rwKey = `rarityWeightBonus.${def.realm}.${def.rarity}`;
          effs[rwKey] = (effs[rwKey] || 0) + def.value * c.level * Math.pow(2, c.tier - 1);
          break;

  
        default:
          console.warn("Unknown effect type:", def.type);
      }
    });
    return effs;
  }
  
  // Apply (or remove) a delta of effects into the global state
  function applyEffectsDelta(deltaMap, sign = +1) {
    const E = state.effects;
    Object.entries(deltaMap).forEach(([k, v]) => {
      const parts = k.split(".");
      switch (parts[0]) {
        case "minCardsPerPoke":
        case "maxCardsPerPoke":
        case "cooldownDivider":
          E[parts[0]] = (E[parts[0]] || 0) + sign * v;
          break;
  
        case "currencyPerPoke":
        case "currencyPerSec":
          const cur = parts[1];
          E[parts[0]][cur] = (E[parts[0]][cur] || 0) + sign * v;
          break;
  
        case "rarityWeightBonus":
          const realmId = parts[1], rarity = parts[2];
          realmMap[realmId].rarityWeights[rarity] =
            (realmMap[realmId].rarityWeights[rarity] || 0) + sign * v;
          break;
      }
    });
  }