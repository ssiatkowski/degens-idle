// js/effects.js

window.EFFECT_NAMES = {
    minCardsPerPoke:    "Min Cards per Poke",
    maxCardsPerPoke:    "Max Cards per Poke",
    currencyPerPoke:    "Currency / Poke",
    currencyPerSec:     "Currency / Sec",
    rarityWeightBonus:  "Rarity Weight Bonus",
    cooldownDivider:    "Cooldown Divider",
};

// js/effects.js

function computeCardEffects(c) {
    const effs = {};
    if (!c.baseEffects || c.tier === 0) return effs;
  
    c.baseEffects.forEach(def => {
      // pick the right per-tier multiplier
      const scale = def.type === "cooldownDivider" ? 1.5 : 2;
      const multiplier = Math.pow(scale, c.tier - 1);
      const total = def.value * c.level * multiplier;
  
      switch (def.type) {
        case "minCardsPerPoke":
        case "maxCardsPerPoke":
          // simple keys
          effs[def.type] = (effs[def.type] || 0) + total;
          break;
  
        case "currencyPerPoke":
        case "currencyPerSec":
          // currency effects still key by currency
          const curKey = `${def.type}.${def.currency}`;
          effs[curKey] = (effs[curKey] || 0) + total;
          break;
  
        case "rarityWeightBonus":
          // still 2^ scaling here
          const rwKey = `rarityWeightBonus.${def.realm}.${def.rarity}`;
          effs[rwKey] = (effs[rwKey] || 0) + total;
          break;
  
        case "cooldownDivider":
          // now using 1.5^ scaling
          effs.cooldownDivider = (effs.cooldownDivider || 0) + total;
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
            const prev = realmMap[realmId].rarityWeights[rarity] || 0;
            const updated = prev + sign * v;
            realmMap[realmId].rarityWeights[rarity] = Math.max(1, updated);
            break;
            
      }
    });
  }