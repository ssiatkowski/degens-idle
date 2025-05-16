// js/effects.js

window.EFFECT_NAMES = {
    minCardsPerPoke:      "Min Cards per Poke",
    maxCardsPerPoke:      "Max Cards per Poke",
    currencyPerPoke:      "Currency / Poke",
    currencyPerSec:       "Currency / Sec",
    rarityOddsDivider:    "Rarity Odds Divider",
    cooldownDivider:      "Cooldown Divider",
    cooldownSkipChance:   "Cooldown Skip Chance",
    merchantNumCards:     "Merchant # Cards",
    merchantCooldownReduction: "Merchant Cooldown Reduction",
    extraMerchantRarityScaling: "Extra Merchant Rarity Scaling",
  };

// Add special effect names
window.SPECIAL_EFFECT_NAMES = {
    merchantPriceDivider: "Merchant Price Divider",
    flatCurrencyPerPoke: "Currency per Poke",
    flatCurrencyPerSecond: "Currency per Second",
    currencyPerPokeMultiplier: "Currency per Poke Multiplier",
    currencyPerSecMultiplier: "Currency per Second Multiplier",
    allGeneratorMultiplier: "All Generator Multiplier",
    flatMaxCardsPerPoke: "Max Cards per Poke",
    flatMinCardsPerPoke: "Min Cards per Poke",
    flatCooldownDivider: "Cooldown Divider"
};
  
const EFFECT_SCALES = {
    minCardsPerPoke: 1.75,
    maxCardsPerPoke: 1.75,
    rarityOddsDivider: 1.25,
    // in future you can add more types here...
  };

  const EFFECTS_RARITY_VALUES = {
    junk: { 
      cooldownDividerBaseValue: 0.0005,  //cost scaling 5
      maxCardsPerPokeBaseValue: 0.01,
      minCardsPerPokeBaseValue: 0.005,
      oddsDividerCap: 2
    },
    basic: { 
      cooldownDividerBaseValue: 0.001,  //cost scaling 5
      maxCardsPerPokeBaseValue: 0.02,
      minCardsPerPokeBaseValue: 0.01,
      oddsDividerCap: 2.5
    },
    decent: { 
      cooldownDividerBaseValue: 0.002, //cost scaling 4.5
      maxCardsPerPokeBaseValue: 0.03,
      minCardsPerPokeBaseValue: 0.015,
      oddsDividerCap: 3
    },
    fine: { 
      cooldownDividerBaseValue: 0.003,  //cost scaling 4.5
      maxCardsPerPokeBaseValue: 0.04,
      minCardsPerPokeBaseValue: 0.02,
      oddsDividerCap: 4
    },
    rare: { 
      cooldownDividerBaseValue: 0.004,  //cost scaling 4
      maxCardsPerPokeBaseValue: 0.05,
      minCardsPerPokeBaseValue: 0.025,
      oddsDividerCap: 5
    },
    epic: { 
      cooldownDividerBaseValue: 0.005,  //cost scaling 4
      maxCardsPerPokeBaseValue: 0.06,
      minCardsPerPokeBaseValue: 0.03,
      oddsDividerCap: 6
    },
    legend: { 
      cooldownDividerBaseValue: 0.006, //cost scaling 3.5
      maxCardsPerPokeBaseValue: 0.07,
      minCardsPerPokeBaseValue: 0.035,
      oddsDividerCap: 7
    },
    mythic: { 
      cooldownDividerBaseValue: 0.007, //cost scaling 3.5
      maxCardsPerPokeBaseValue: 0.08,
      minCardsPerPokeBaseValue: 0.04,
      oddsDividerCap: 8
    },
    exotic: { 
      cooldownDividerBaseValue: 0.008, //cost scaling 3
      maxCardsPerPokeBaseValue: 0.09,
      minCardsPerPokeBaseValue: 0.045,
      oddsDividerCap: 9
    },
    divine: { 
      cooldownDividerBaseValue: 0.01, //cost scaling 3
      maxCardsPerPokeBaseValue: 0.1,
      minCardsPerPokeBaseValue: 0.5,
      oddsDividerCap: 10
    }
  };

// New function to check if special effect requirements are met
function isSpecialEffectRequirementMet(card, requirement) {
    if (requirement.type === "level") {
        return card.level >= requirement.amount;
    } else if (requirement.type === "tier") {
        return card.tier >= requirement.amount;
    }
    return false;
}

// New function to compute special effects
function computeSpecialEffects(c) {
    const effs = {};
    if (!c.specialEffects || c.specialEffects.length === 0) return effs;

    c.specialEffects.forEach(def => {
        if (!isSpecialEffectRequirementMet(c, def.requirement)) return;

        switch (def.type) {
            case "merchantPriceDivider":
                effs.merchantPriceDivider = (effs.merchantPriceDivider || 1) * def.value;
                break;

            case "flatCurrencyPerPoke":
                const pokeKey = `flatCurrencyPerPoke.${def.currency}`;
                effs[pokeKey] = (effs[pokeKey] || 0) + def.value;
                break;

            case "flatCurrencyPerSecond":
                const secKey = `flatCurrencyPerSecond.${def.currency}`;
                effs[secKey] = (effs[secKey] || 0) + def.value;
                break;

            case "currencyPerPokeMultiplier":
                const pokeMultKey = `currencyPerPokeMultiplier.${def.currency}`;
                effs[pokeMultKey] = (effs[pokeMultKey] || 1) * def.value;
                break;

            case "currencyPerSecMultiplier":
                const secMultKey = `currencyPerSecMultiplier.${def.currency}`;
                effs[secMultKey] = (effs[secMultKey] || 1) * def.value;
                break;

            case "allGeneratorMultiplier":
                effs.allGeneratorMultiplier = (effs.allGeneratorMultiplier || 1) * def.value;
                break;

            case "flatMaxCardsPerPoke":
                effs.flatMaxCardsPerPoke = (effs.flatMaxCardsPerPoke || 0) + def.value;
                break;

            case "flatMinCardsPerPoke":
                effs.flatMinCardsPerPoke = (effs.flatMinCardsPerPoke || 0) + def.value;
                break;

            case "flatCooldownDivider":
                effs.flatCooldownDivider = (effs.flatCooldownDivider || 0) + def.value;
                break;
        }
    });

    return effs;
}

function computeCardEffects(c) {
    const effs = {};
    if (!c.baseEffects || c.tier === 0) return effs;
  
    c.baseEffects.forEach(def => {
        const scale = EFFECT_SCALES[def.type] ?? 2;
        const multiplier = Math.pow(scale, c.tier - 1);
  
        switch (def.type) {
            case "minCardsPerPoke": {
                const baseValue = EFFECTS_RARITY_VALUES[c.rarity]?.minCardsPerPokeBaseValue || 0;
                const total = baseValue * c.level * multiplier;
                effs[def.type] = (effs[def.type] || 0) + total;
                break;
            }
  
            case "maxCardsPerPoke": {
                const baseValue = EFFECTS_RARITY_VALUES[c.rarity]?.maxCardsPerPokeBaseValue || 0;
                const total = baseValue * c.level * multiplier;
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
                let baseDivider = 0.01;
                const total = baseDivider * c.level * multiplier;
                const cap = EFFECTS_RARITY_VALUES[c.rarity]?.oddsDividerCap - 1;
                const cappedTotal = Math.min(total, cap);
                const key = `rarityOddsDivider.${def.realm}.${def.rarity}`;
                effs[key] = (effs[key] || 0) + cappedTotal;
                break;
            }
  
            case "cooldownDivider": {
                const baseValue = EFFECTS_RARITY_VALUES[c.rarity]?.cooldownDividerBaseValue || 0;
                const tierContribution = (c.tier * (c.tier + 1)) / 2;
                const total = baseValue * c.level * tierContribution;
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

            case "flatCurrencyPerPoke":
            case "flatCurrencyPerSecond": {
                const cur = parts[1];
                const targetType = parts[0] === "flatCurrencyPerPoke" ? "currencyPerPoke" : "currencyPerSec";
                E[targetType][cur] = (E[targetType][cur] || 0) + sign * v;
                break;
            }

            case "currencyPerPokeMultiplier":
            case "currencyPerSecMultiplier": {
                const cur = parts[1];
                const targetType = parts[0];
                if (sign > 0) {
                    E[targetType][cur] = (E[targetType][cur] || 1) * v;
                } else {
                    E[targetType][cur] = (E[targetType][cur] || 1) / v;
                }
                break;
            }

            case "merchantPriceDivider":
                if (sign > 0) {
                    E[parts[0]] = (E[parts[0]] || 1) * v;
                } else {
                    E[parts[0]] = (E[parts[0]] || 1) / v;
                }
                break;

            case "allGeneratorMultiplier":
                if (sign > 0) {
                    E[parts[0]] = (E[parts[0]] || 1) * v;
                } else {
                    E[parts[0]] = (E[parts[0]] || 1) / v;
                }
                updateGeneratorRates();
                break;

            case "flatMaxCardsPerPoke":
            case "flatMinCardsPerPoke":
            case "flatCooldownDivider": {
                const targetType = parts[0].replace('flat', '');
                const finalType = targetType.charAt(0).toLowerCase() + targetType.slice(1);
                E[finalType] = (E[finalType] || 0) + sign * v;
                break;
            }

            case "rarityOddsDivider": {
                const realmId = parts[1];
                const rarity  = parts[2];
                if (!realmMap[realmId]) {
                    console.error(`Realm ${realmId} not found`);
                    break;
                }
                const weights = realmMap[realmId].uncappedRarityWeights;
                const current = weights[rarity] ?? 0;
        
                if (sign > 0) {
                    weights[rarity] = current / (1 + v);
                } else {
                    weights[rarity] = current * (1 + v);
                }

                const realm = realmMap[realmId];
                const rarities = Object.keys(realm.rarityWeights).filter(r => realm.rarityWeights[r] > 0);
                rarities.sort((a, b) => {
                    const aIndex = window.rarities.indexOf(a);
                    const bIndex = window.rarities.indexOf(b);
                    return bIndex - aIndex;
                });

                let highestWeight = 0;
                for (let i = 0; i < rarities.length; i++) {
                    const currentRarity = rarities[i];
                    const uncapped = realm.uncappedRarityWeights[currentRarity];
                    
                    if (uncapped < highestWeight) {
                        realm.rarityWeights[currentRarity] = highestWeight;
                    } else {
                        realm.rarityWeights[currentRarity] = uncapped;
                        highestWeight = uncapped;
                    }
                }
                break;
            }

            default:
                console.warn("Unknown effect key:", parts[0]);
        }
    });
}