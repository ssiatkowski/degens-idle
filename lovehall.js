
const loveHallSkills = [
  // 2.828x Level - Bell's Inequality for quantum entangled particle correlation
  {
    name: "Delusion Surge",
    cost: 0.3,
    description: "39x Delusion gain.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 1,
    onUnlock: (duringLoad) => {
      delusionSurgeMultiplier = 39;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      delusionSurgeMultiplier = 1;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },
  {
    name: "Copium Surge",
    cost: 0.3,
    description: "39x Copium gain.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 1,
    onUnlock: (duringLoad) => {
      copiumSurgeMultiplier = 39;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      copiumSurgeMultiplier = 1;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },

  {
    name: "Twenty-Fivefold Ascension",
    cost: 1.3,
    description: "Gain up to 25 God-Mode levels per Ascension.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 2,
    onUnlock: () => {
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Triple Ascension'), true);
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Quadruple Ascension'), true);
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Tenfold Ascension'), true);
      numAscensionUpgrades = Math.max(numAscensionUpgrades, 25);
    },
    onRespec: () => {
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Triple Ascension'), false);
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Quadruple Ascension'), false);
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Tenfold Ascension'), false);
      numAscensionUpgrades = 2;
    },
  },
  {
    name: "Twenty-Fivefold Transcendence",
    cost: 1.3,
    description: "Gain up to 25 PU God-Mode levels per Transcendence.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 2,
    onUnlock: () => {
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Septuple Transcendence'), true);
      numPUAscensionUpgrades = Math.max(numPUAscensionUpgrades, 25);
    },
    onRespec: () => {
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Septuple Transcendence'), false);
      numPUAscensionUpgrades = 2;
    },

  },

  {
    name: "Achievement Boost",
    cost: 1.9,
    description: "Achievement Multiplier x2. (Achievement Boosts stack)",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 3,
    onUnlock: (duringLoad) => {
      achievementBoostValue *= 2;
      calculateAchievementMultiplier();
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      achievementBoostValue = 0.01;
      calculateAchievementMultiplier();
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },
  {
    name: "Cosmic Embrace",
    cost: 1.9,
    description: "Gain +2 Love Points every embrace.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 3,
    onUnlock: () => {
      embraceExtraLovePoints += 2;
    },
    onRespec: () => {
      embraceExtraLovePoints = 0;
    },
  },

  {
    name: "Epistemic Engine",
    cost: 3.3,
    description: "Start Embrace with Knowledge Generation skill unlocked.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 4,
    onUnlock: () => {
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Knowledge Generation'), true);
    },
    onRespec: () => {
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Knowledge Generation'), false);
    },
  },
  {
    name: "Pulse of Affection",
    cost: 3.3,
    description:
      "Additive 0.33% extra base Love Points for every Hall of Love skill unlocked.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 4,
    onUnlock: () => {
      pulseOfAffectionSkill = true;
    },
    onRespec: () => {
      pulseOfAffectionSkill = false;
    },
  },

  {
    name: "Altruistic Embrace",
    cost: 3.8,
    description:
      "Starting at Altruism, multiplicative x1.25 base Love Points earned per meditation.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 5,
    onUnlock: () => {
      altruisticEmbraceSkill = true;
    },
    onRespec: () => {
      altruisticEmbraceSkill = false;
    },
  },
  {
    name: "Master of Bargains",
    cost: 3.8,
    description:
      "Improve Trade Ratios skill for basic resources from 5:1 to 3:1.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 5,
    onUnlock: () => {
      masterOfBargainsSkill = true;
    },
    onRespec: () => {
      masterOfBargainsSkill = false;
    },
  },

  {
    name: "Serenity Flow",
    cost: 7,
    description: "Hopium gain is multiplied by square root of Serenity.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 6,
    onUnlock: (duringLoad) => {
      serenityFlowSkill = true;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      serenityFlowSkill = false;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },
  {
    name: "Serene Boost 2",
    cost: 7,
    description: "5x Serenity gain. (Serenity Boosts stack)",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 6,
    requirement: "Serene Boost 1",
    onUnlock: (duringLoad) => {
      serenityBoostMultiplier *= 5;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      serenityBoostMultiplier = 1;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },

  {
    name: "Illusion of Power",
    cost: 10,
    description:
      "Lower auto-fight power threshold by 10x each for ascended / transcended upgrades.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 7,
    requirement: "Overwhelming Mercy",
    onUnlock: () => {
      illusionOfPowerSkill = true;
    },
    onRespec: () => {
      illusionOfPowerSkill = false;
    },
  },
  {
    name: "Early Accelerant",
    cost: 10,
    description:
      "10x multiplier to first 6 resources, degrades by 2% with each purchased upgrade.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 7,
    onUnlock: () => {
      earlyAccelerantSkill = true;
    },
    onRespec: () => {
      earlyAccelerantSkill = false;
    },
  },

  {
    name: "Power Infusion",
    cost: 30,
    description: "4x Power gain.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 8,
    onUnlock: (duringLoad) => {
      powerInfusionMultiplier = 4;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      powerInfusionMultiplier = 1;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },
  {
    name: "Soulbound Embrace",
    cost: 30,
    description: "Gain +8 Love Points every embrace.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 8,
    requirement: "Cosmic Embrace",
    onUnlock: () => {
      embraceExtraLovePoints += 8;
    },
    onRespec: () => {
      embraceExtraLovePoints = 0;
    },
  },

  {
    name: "Hopeful Soft Cap",
    cost: 50,
    description: "Mini Games Soft Cap uses resource or Hopium (greater)",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 9,
    requirement: "Raise That Soft Cap",
    onUnlock: () => {
      hopefulSoftCapSkill = true;
    },
    onRespec: () => {
      hopefulSoftCapSkill = false;
    },
  },
  {
    name: "Fertile Scarcity",
    cost: 50,
    description: "Cosmic Drought sets Stellar Harvest to 250x (instead of 1x)",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 9,
    requirement: "Stellar Meditation",
    onUnlock: () => {
      fertileScarcitySkill = true;
    },
    onRespec: () => {
      fertileScarcitySkill = false;
    },
  },

  {
    name: "Inverse Prestige",
    cost: 60,
    description:
      "Prestige is now based on the highest of your first four resources",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 10,
    onUnlock: () => {
      inversePrestigeSkill = true;
    },
    onRespec: () => {
      inversePrestigeSkill = false;
    },
  },
  {
    name: "Positive Markers",
    cost: 60,
    description:
      "Buy markers stay unlocked and turned on through Infinite Embrace",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 10,
    onUnlock: () => {
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Buy Markers'), true);
      positiveMarkersSkill = true;
    },
    onRespec: () => {
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Buy Markers'), false);
      positiveMarkersSkill = false;
    },
    
  },

  {
    name: "Achievement Boost 2",
    cost: 100,
    description: "Achievement Multiplier x2. (Achievement Boosts stack)",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 11,
    requirement: "Achievement Boost",
    onUnlock: (duringLoad) => {
      achievementBoostValue *= 2;
      calculateAchievementMultiplier();
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      achievementBoostValue = 0.01;
      calculateAchievementMultiplier();
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },
  {
    name: "Tunneled Ascension",
    cost: 100,
    description: "Transcending an upgrade also Ascends it.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 11,
    onUnlock: () => {
      tunneledAscensionSkill = true;
    },
    onRespec: () => {
      tunneledAscensionSkill = false;
    },
  },

  {
    name: "Achievement Hypercharge",
    cost: 308,
    description:
      "Achievement multiplier becomes multiplicative instead of additive (Best Skill)",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 12,
    onUnlock: (duringLoad) => {
      achievementHyperchargeSkill = true;
      calculateAchievementMultiplier();
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      achievementHyperchargeSkill = false;
      calculateAchievementMultiplier();
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },
  {
    name: "Perfect PU God-Mode",
    cost: 308,
    description: "Make PU God-Mode perfect with diminishing returns at 99.2%.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 12,
    onUnlock: (duringLoad) => {
      perfectPUGodModeSkill = true;
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Much Less Diminishing Parallel God-Mode'), true);
      puGodMultiplier = calculatePUGodModeMultiplier(puGodLevel);
      if (!duringLoad) {
        updateMultipliersDisplay();
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      perfectPUGodModeSkill = false;
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Much Less Diminishing Parallel God-Mode'), false);
      puGodMultiplier = calculatePUGodModeMultiplier(puGodLevel);
      if (!duringLoad) {
        updateMultipliersDisplay();
        updateEffectiveMultipliers();
      }
    },
  },

  {
    name: "Stoic Embrace",
    cost: 420,
    description: "Starting at Stoicism, Altruistic Embrace bonus increased from 1.25x to 1.5x",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 13,
    requirement: "Resonance of Love",
    onUnlock: () => {
      stoicEmbraceSkill = true;
    },
    onRespec: () => {
      stoicEmbraceSkill = false;
    },
  },
  {
    name: "Transcendent Embrace",
    cost: 420,
    description: "Gain +42 Love Points every embrace.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 13,
    requirement: "Soulbound Embrace",
    onUnlock: () => {
      embraceExtraLovePoints += 42;
    },
    onRespec: () => {
      embraceExtraLovePoints = 0;
    },
  },

  {
    name: "Infinite Collapse",
    cost: 5000,
    description: "Automatically apply Big Crunch mult without resetting.",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 14,
    requirement: "Perpetual Collapse",
    onUnlock: () => {
      infiniteCollapseSkill = true;
    },
    onRespec: () => {
      infiniteCollapseSkill = false;
    },
  },
  {
    name: "Zen of the Stars",
    cost: 5000,
    description: "Improve Stellar Meditation to x1.5",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 14,
    requirement: "Fertile Scarcity",
    onUnlock: () => {
      zenOfTheStarsSkill = true;
    },
    onRespec: () => {
      zenOfTheStarsSkill = false;
    },
  },

  {
    name: "Serene Boost 3",
    cost: 150000000,
    description: "2x Serenity gain. (Serenity Boosts stack)",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 15,
    requirement: "Serene Boost 2",
    onUnlock: (duringLoad) => {
      serenityBoostMultiplier *= 2;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      serenityBoostMultiplier = 1;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },

  {
    name: "Knowledge Infusion 2",
    cost: 150000000,
    description: "9x more Knowledge gain. (Knowledge Infusions stack)",
    unlocked: false,
    level: "Quantum Harmony (2.8x)",
    pair: 15,
    requirement: "Knowledge Infusion",
    onUnlock: (duringLoad) => {
      knowledgeInfusionMultiplier *= 9;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      knowledgeInfusionMultiplier = 1;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },

  // 27x Level - dimensions in string theory
  {
    name: "Yacht Money Surge",
    cost: 0.05,
    description: "26x Yacht Money gain.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 21,
    onUnlock: (duringLoad) => {
      yachtMoneySurgeMultiplier = 26;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      yachtMoneySurgeMultiplier = 1;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },
  {
    name: "Troll Points Surge",
    cost: 0.05,
    description: "26x Troll Points gain.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 21,
    onUnlock: (duringLoad) => {
      trollPointsSurgeMultiplier = 26;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      trollPointsSurgeMultiplier = 1;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },

  {
    name: "Serene Boost 1",
    cost: 0.12,
    description: "2x Serenity gain. (Serene Boosts stack)",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 22,
    onUnlock: (duringLoad) => {
      serenityBoostMultiplier *= 2;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      serenityBoostMultiplier = 1;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },
  {
    name: "Celestial Precision",
    cost: 0.12,
    description: "Improves Astral Precision to power+50%",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 22,
    onUnlock: () => {
      celestialPrecisionSkill = true;
    },
    onRespec: () => {
      celestialPrecisionSkill = false;
    },
  },

  {
    name: "Knowledge Infusion",
    cost: 0.4,
    description: "9x Knowledge gain.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 23,
    onUnlock: (duringLoad) => {
      knowledgeInfusionMultiplier *= 9;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      knowledgeInfusionMultiplier = 1;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },
  {
    name: "Basic Resource Boost",
    cost: 0.4,
    description: "9x gain to first 4 resources.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 23,
    onUnlock: (duringLoad) => {
      basicResourceBoost = 9;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      basicResourceBoost = 1;
      if (!duringLoad) {
        updateEffectiveMultipliers();
      }
    },
  },

  {
    name: "Hall of Knowledge Auto-Buy",
    cost: 1.5,
    description: "Automatically buy upgrades from the Hall of Knowledge.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 25,
    onUnlock: () => {
      purchaseLibrarySkillsInterval = setInterval(purchaseLibrarySkills, 1000);
    },
    onRespec: () => {
      clearInterval(purchaseLibrarySkillsInterval);
    },
  },
  {
    name: "Hall of Power Auto-Buy",
    cost: 1.5,
    description: "Automatically buy upgrades from the Hall of Power.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 25,
    onUnlock: () => {
      purchasePowerHallSkillsInterval = setInterval(purchasePowerHallSkills, 1000);
    },
    onRespec: () => {
      clearInterval(purchasePowerHallSkillsInterval);
    },
  },

  {
    name: "Gaming Addict",
    cost: 2.1,
    description: "Improves Mini Gamer skill to reduce cooldowns by 75%.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 26,
    onUnlock: () => {
      gamingAddictSkill = true;
      unlockMiniGames();
    },
    onRespec: () => {
      gamingAddictSkill = false;
      unlockMiniGames();
    },
  },
  {
    name: "First-Wave Automation",
    cost: 2.1,
    description: `Hall of Knowledge automation skills are ${formatNumber(
      1e10
    )}x cheaper`,
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 26,
    onUnlock: () => {
      divideLibrarySkillCost('Autobuy Upgrades', 1e10);
      divideLibrarySkillCost('Perpetual Prestige', 1e10);
      divideLibrarySkillCost('Eternal Ascension', 1e10);
      divideLibrarySkillCost('Quantum Symphony', 1e10);
    },
    onRespec: () => {
      // TODO would be nicer to reset skill costswithout hardcoding them
      librarySkills.find(skill => skill.name === 'Autobuy Upgrades').cost = 3e21;
      librarySkills.find(skill => skill.name === 'Perpetual Prestige').cost = 1e24;
      librarySkills.find(skill => skill.name === 'Eternal Ascension').cost = 1e28;
      librarySkills.find(skill => skill.name === 'Quantum Symphony').cost = 1e40;
    },
  },

  {
    name: "Overwhelming Mercy",
    cost: 2.7,
    description:
      "Spare opponents who are far weaker than you. (Automate Battles)",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 27,
    requirement: "Celestial Precision",
    onUnlock: () => {
      autoFightSkill = true;
    },
    onRespec: () => {
      autoFightSkill = false;
    },
  },
  {
    name: "Hopium Fix",
    cost: 2.7,
    description: "Fix Hopium in the same way Delusion is cured.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 27,
    onUnlock: (duringLoad) => {
      document.getElementById('toggleHopiumLabel').classList.remove('hidden');
      // Check the state of hopium and update the switch position accordingly
      const toggleHopium = document.getElementById('toggleHopium');
      toggleHopium.checked = true;
      hopiumPerSecond = Math.abs(hopiumPerSecond);
      if (!duringLoad){
          updateEffectiveMultipliers();
          updateDisplay();
      }
    },
    onRespec: () => {
      document.getElementById('toggleHopiumLabel').classList.add('hidden');
    },
  },

  {
    name: "Steady Focus",
    cost: 4,
    description: "Reduce meditation focus lost per ball by 1. (min 1)",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 28,
    onUnlock: () => {
      steadyFocusSkill = true;
    },
    onRespec: () => {
      steadyFocusSkill = false;
    },
  },
  {
    name: "Second-Wave Automation",
    cost: 4,
    description: `Keep Hall of Knowledge automation skills unlocked and preserve settings on Embrace.`,
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 28,
    requirement: "First-Wave Automation",
    onUnlock: () => {
      secondWaveAutomationSkill = true;
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Autobuy Upgrades'), true);
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Perpetual Prestige'), true);
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Eternal Ascension'), true);
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Quantum Symphony'), true);
    },
    onRespec: () => {
      secondWaveAutomationSkill = false;
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Autobuy Upgrades'), false);
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Perpetual Prestige'), false);
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Eternal Ascension'), false);
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Quantum Symphony'), false);
    },
  },

  {
    name: "Master of Elements",
    cost: 5,
    description: "Reduce Meditation Wind Speed by 50%",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 29,
    onUnlock: () => {
      masterOfElementsSkill = true;
    },
    onRespec: () => {
      masterOfElementsSkill = false;
    },
  },
  {
    name: "Space Continuum Stretch",
    cost: 5,
    description: "Increase Meditation Arena Size by 10%",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 29,
    onUnlock: () => {
      spaceContinuumStretchSkill = true;
    },
    onRespec: () => {
      spaceContinuumStretchSkill = false;
    },
  },

  {
    name: "Enlightened Prestige",
    cost: 10,
    description: "Prestige Base skill increases from 1.75 base to 1.775 base.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 30,
    onUnlock: () => {
      enlightenedPrestigeSkill = true;
    },
    onRespec: () => {
      enlightenedPrestigeSkill = false;
    },
  },
  {
    name: "Hopeful Beginning",
    cost: 10,
    description: "Start with 1M Hopium after any prestige layer.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 30,
    onUnlock: () => {
      hopefulBeginningSkill = true;
    },
    onRespec: () => {
      hopefulBeginningSkill = false;
    },
  },

  {
    name: "Serenity Gain (Copium)",
    cost: 20,
    description: "Serenity gain is multiplied by log2(Copium)/33.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 31,
    onUnlock: (duringLoad) => {
      serenityGainCopium = true;
      if(!duringLoad){
          updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      serenityGainCopium = false;
      if(!duringLoad){
          updateEffectiveMultipliers();
      }
    },
  },
  {
    name: "Serenity Gain (Delusion)",
    cost: 20,
    description: "Serenity gain is multiplied by log2(Delusion)/33.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 31,
    onUnlock: (duringLoad) => {
      serenityGainDelusion = true;
      if(!duringLoad){
          updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      serenityGainDelusion = false;
      if(!duringLoad){
          updateEffectiveMultipliers();
      }
    },
  },

  {
    name: "Serenity Gain (Yacht Money)",
    cost: 20,
    description: "Serenity gain is multiplied by log2(Yacht Money)/33.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 32,
    onUnlock: (duringLoad) => {
      serenityGainYachtMoney = true;
      if(!duringLoad){
          updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      serenityGainYachtMoney = false;
      if(!duringLoad){
          updateEffectiveMultipliers();
      }

    },
  },
  {
    name: "Serenity Gain (Troll Points)",
    cost: 20,
    description: "Serenity gain is multiplied by log2(Troll Points)/33.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 32,
    onUnlock: (duringLoad) => {
      serenityGainTrollPoints = true;
      if(!duringLoad){
          updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      serenityGainTrollPoints = false;
      if(!duringLoad){
          updateEffectiveMultipliers();
      }
    },
  },

  {
    name: "Master of Time",
    cost: 333,
    description: "Unlock ability to start/stop Time Warp.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 33,
    onUnlock: () => {
      masterOfTimeSkill = true;
    },
    onRespec: () => {
      masterOfTimeSkill = false;
    },
  },
  {
    name: "Love Size Matters",
    cost: 333,
    description:
      "Copium and Yacht Money are multiplied by ( {largest embrace} ^ 1.5 ) / 100.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 33,
    onUnlock: () => {
      loveSizeMattersSkill = true;
    },
    onRespec: () => {
      loveSizeMattersSkill = false;
    },
  },

  {
    name: "Love is Everything",
    cost: 740,
    description: "First 4 resource gains are multiplied by log 1.1 (Serenity).",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 34,
    onUnlock: () => {
      loveIsEverythingSkill = true;
    },
    onRespec: () => {
      loveIsEverythingSkill = false;
    },
  },
  {
    name: "Ethereal Reflection",
    cost: 740,
    description:
      "Auto Meditation no longer requires ascension / transcendence.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 34,
    requirement: "Intrinsic Meditation",
    onUnlock: () => {
      etherealReflectionSkill = true;
    },
    onRespec: () => {
      etherealReflectionSkill = false;
    },
    
  },

  {
    name: "Serene Extortion",
    cost: 3703.7,
    description: "Increase mini game skip reward from 10% to 20%",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 35,
    requirement: "Love is Everything",
    onUnlock: () => {
      sereneExtortionSkill = true;
    },
    onRespec: () => {
      sereneExtortionSkill = false;
    },
  },
  {
    name: "Pricy Tranquility",
    cost: 3703.7,
    description:
      "Setting for 'Quick Mini Game Skip` to make skip the default and no pop ups",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 35,
    requirement: "The Ultimate Fix",
    onUnlock: () => {
      pricyTranquilitySkill = true;
    },
    onRespec: () => {
      pricyTranquilitySkill = false;
      enableQuickModeMiniGameSkip = false;
    },
  },

  {
    name: "Oversurged Power 2",
    cost: 15555555.556,
    description: "Increase Power Surge skill multiplier from 2x to 4x.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 36,
    onUnlock: () => {
      oversurgedPower *= 2;
    },
    onRespec: () => {
      oversurgedPower = 1;
    },
  },
  {
    name: "Grandmaster of Bargains",
    cost: 15555555.556,
    description:
      "Further improve Trade Ratios skill for basic resources from 3:1 to 2:1.",
    unlocked: false,
    level: "Dimensional Shift (27x)",
    pair: 36,
    onUnlock: () => {
      grandMasterOfBargainsSkill = true;
    },
    onRespec: () => {
      grandMasterOfBargainsSkill = false;
    },
  },

  // 42x Level - the meaning of life
  {
    name: "Fortified Defenses",
    cost: 0.04,
    description: "Vitality Matrix is now 10x stronger.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 41,
    onUnlock: () => {
      fortifiedDefensesSkill = true;
    },
    onRespec: () => {
      fortifiedDefensesSkill = false;
    },
  },
  {
    name: "Study Accelerator",
    cost: 0.04,
    description: "Meditation duration decreased by 0.5 seconds.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 41,
    onUnlock: () => {
      studyAcceleratorReduction = 0.5;
    },
    onRespec: () => {
      studyAcceleratorReduction = 0;
    },
  },

  {
    name: "Deadpool Embrace",
    cost: 0.12,
    description: "Deadpool revives do not reset on Infinite Embrace.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 42,
    onUnlock: () => {
      deadpoolRevivesSkill = true;
    },
    onRespec: () => {
      deadpoolRevivesSkill = false;
    },
  },
  {
    name: "Rewarding Victories",
    cost: 0.12,
    description: "Battle upgrades give +50% rewards.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 42,
    onUnlock: () => {
      rewardingVictoriesSkill = true;
    },
    onRespec: () => {
      rewardingVictoriesSkill = false;
    },
  },

  {
    name: "Quantum Fortress",
    cost: 0.25,
    description: "Make Quantum Bastion 2.5x more powerful.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 43,
    requirement: "Fortified Defenses",
    onUnlock: () => {
      quantumFortressSkill = true;
    },
    onRespec: () => {
      quantumFortressSkill = false;
    },
  },
  {
    name: "Chrono Magnetizer",
    cost: 0.25,
    description: "Make Arcane Magnetizer 2x faster.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 43,
    onUnlock: () => {
      chronoMagnetizerSkill = true;
      if (autobuyIntervalId !== null) {
          clearInterval(autobuyIntervalId);
          autobuyIntervalId = setInterval(autobuyUpgrades, 125);
      }
    },
    onRespec: () => {
      chronoMagnetizerSkill = false;
      if (autobuyIntervalId !== null) {
          clearInterval(autobuyIntervalId);
      }
    },
  },

  {
    name: "Crunch Knowledge",
    cost: 0.3,
    description:
      "Big Crunch extra knowledge mult is now ^(2/3) instead of ^(1/2).",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 44,
    onUnlock: (duringLoad) => {
      crunchKnowledgeSkill = true;
      if(!duringLoad){
          updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      crunchKnowledgeSkill = false;
      if(!duringLoad){
          updateEffectiveMultipliers();
      }
    },
  },
  {
    name: "Stellar Meditation",
    cost: 0.3,
    description:
      "Multiplicative x1.1 to first 7 resources after each successful meditation.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 44,
    onUnlock: () => {
      stellarMeditationSkill = true;
    },
    onRespec: () => {
      stellarMeditationSkill = false;
    },
  },

  {
    name: "Oversurged Power",
    cost: 0.6,
    description: "Power Surge Skill is 2x as powerful.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 45,
    onUnlock: () => {
      oversurgedPower *= 2;
    },
    onRespec: () => {
      oversurgedPower = 1;
    },
  },
  {
    name: "Overcompressed Power",
    cost: 0.6,
    description: "Compressed / Condensed Power Skills are 3x as powerful.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 45,
    onUnlock: () => {
      overcompressedPower = 3;
    },
    onRespec: () => {
      overcompressedPower = 1;
    },
  },

  {
    name: "Raise That Soft Cap",
    cost: 1.1,
    description: "Increase mini games soft cap to 24 hours",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 46,
    onUnlock: () => {
      miniGamesSoftCapHrs = Math.max(miniGamesSoftCapHrs, 24);
    },
    onRespec: () => {
      miniGamesSoftCapHrs = 10;
    },
  },
  {
    name: "Rewarding Meditations",
    cost: 1.1,
    description: "Meditations give +50% rewards",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 46,
    requirement: "Rewarding Victories",
    onUnlock: () => {
      rewardingMeditationsSkill = true;
    },
    onRespec: () => {
      rewardingMeditationsSkill = false;
    },
  },

  {
    name: "Infinite Prestige",
    cost: 4.2,
    description: "Automatically apply Prestige Mult without resetting.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 47,
    onUnlock: () => {
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Perpetual Prestige'), true);
      infinitePrestigeSkill = true;
    },
    onRespec: () => {
      unlockLibrarySkill(librarySkills.find(skill => skill.name === 'Perpetual Prestige'), false);
      infinitePrestigeSkill = false;
    },
  },
  {
    name: "Hopium Trade",
    cost: 4.2,
    description:
      "Trade Hopium for any of the first 4 resources at a 1:1 ratio.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 47,
    requirement: "Master of Bargains",
    onUnlock: () => {
      hopiumTradeSkill = true;
      addHopiumToFromResource();
    },
    onRespec: () => {
      hopiumTradeSkill = false;
      removeHopiumFromFromResource();
    },
  },

  {
    name: "Tranquility Overdrive",
    cost: 5.3,
    description:
      "Purchasing non-meditation upgrades no longer consumes serenity.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 48,
    requirement: "Rewarding Meditations",
    onUnlock: () => {
      tranquilityOverdriveSkill = true;
    },
    onRespec: () => {
      tranquilityOverdriveSkill = false;
    },
  },
  {
    name: "Time Flux",
    cost: 5.3,
    description: "Time Warp maximum time increased to 12 minutes.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 48,
    onUnlock: () => {
      if(!balanceHallSkills.get("Temporal Dominion").unlocked){
        warpTimeMax = 60 * 60 * 12;
      }
    },
    onRespec: () => {
      if(!balanceHallSkills.get("Temporal Dominion").unlocked){
        warpTimeMax = 60 * 60 * 6;
      }
    },
  },

  {
    name: "Perpetual Collapse",
    cost: 7,
    description: "Auto Big Crunch (default 25x)",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 49,
    requirement: null,
    onUnlock: () => {
        if (autoBigCrunchThreshold === null) {
            autoBigCrunchThreshold = 25;
        }
    },
    onRespec: () => {
        autoBigCrunchThreshold = null;
    }
  },
  {
    name: "Beacon of Seven Suns",
    cost: 7,
    description:
      "Multiplicative 7% bonus to Copium and Hopium for every Hall of Love skill.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 49,
    onUnlock: () => {
      beaconOfSevenSunsSkill = true;
    },
    onRespec: () => {
      beaconOfSevenSunsSkill = false;
    },
  },

  {
    name: "Resonance of Love",
    cost: 15,
    description: "Multiply Serenity by log2 of current Love Points.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 50,
    requirement: "Altruistic Embrace",
    onUnlock: (duringLoad) => {
      resonanceOfLoveSkill = true;
      if(!duringLoad){
          updateEffectiveMultipliers();
      }
    },
    onRespec: (duringLoad) => {
      resonanceOfLoveSkill = false;
      if(!duringLoad){
          updateEffectiveMultipliers();
      }
    },
  },
  {
    name: "Equilibrium of Hope",
    cost: 15,
    description: "Unlock option to automatically trade 1% Hopium for each lower resource.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 50,
    requirement: "Hopium Trade",
    onUnlock: () => {
      equilibriumOfHopeSkill = true;
      autoTradeHopium();
    },
    onRespec: () => {
      equilibriumOfHopeSkill = false;
    },
  },

  {
    name: "Temporal Drag",
    cost: 21,
    description: "During meditation, decrease ball velocity by 25%.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 51,
    requirement: "Master of Elements",
    onUnlock: () => {
      temporalDragReduction = 0.75;
    },
    onRespec: () => {
      temporalDragReduction = 1;
    },
  },
  {
    name: "Look Past Distractions",
    cost: 21,
    description: "During meditation, decrease # of balls by 1.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 51,
    onUnlock: () => {
      lookPastDistractions = 1;
    },
    onRespec: () => {
      lookPastDistractions = 0;
    },
  },

  {
    name: "Faith-Fueled Knowledge",
    cost: 30,
    description:
      "Multiplier to knowledge based on log10 of current Hopium / 10.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 52,
    onUnlock: () => {
      faithFueledKnowledgeSkill = true;
    },
    onRespec: () => {
      faithFueledKnowledgeSkill = false;
    },
  },
  {
    name: "Event Horizon Boost",
    cost: 30,
    description: "Increase Big Crunch base from 2 to 2.1.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 52,
    onUnlock: () => {
      eventHorizonBoostSkill = true;
    },
    onRespec: () => {
      eventHorizonBoostSkill = false;
    },
  },

  {
    name: "Intrinsic Meditation",
    cost: 35,
    description:
      "Auto complete meditations that are ascended & transcended after meeting Serenity threshold.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 53,
    requirement: "Illusion of Power",
    onUnlock: () => {
      autoMeditateSkill = true;
    },
    onRespec: () => {
      autoMeditateSkill = false;
    },
  },
  {
    name: "The Ultimate Fix",
    cost: 35,
    description: "Fix the 3 remaining basic resources.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 53,
    requirement: "Hopium Fix",
    onUnlock: (duringLoad) => {
      document.getElementById('toggleCopiumLabel').classList.remove('hidden');
      document.getElementById('toggleCopium').checked = true;
      copiumPerSecond = Math.abs(copiumPerSecond);
      document.getElementById('toggleYachtMoneyLabel').classList.remove('hidden');
      document.getElementById('toggleYachtMoney').checked = true;
      yachtMoneyPerSecond = Math.abs(yachtMoneyPerSecond);
      document.getElementById('toggleTrollPointsLabel').classList.remove('hidden');
      document.getElementById('toggleTrollPoints').checked = true;
      trollPointsPerSecond = Math.abs(trollPointsPerSecond);
      if (!duringLoad){
          updateEffectiveMultipliers();
          updateDisplay();
      }
    },
    onRespec: () => {
      document.getElementById('toggleCopiumLabel').classList.add('hidden');
      document.getElementById('toggleYachtMoneyLabel').classList.add('hidden');
      document.getElementById('toggleTrollPointsLabel').classList.add('hidden');
    },
  },

  {
    name: "Tears of Joy",
    cost: 10000000,
    description: "Remove diminishing returns from Knowledge and Power.",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 54,
    onUnlock: () => {
      tearsOfJoySkill = true;
    },
    onRespec: () => {
      tearsOfJoySkill = false;
    },
  },
  {
    name: "Min-Maxing Love",
    cost: 10000000,
    description: "Increase Serenity gain by 25%",
    unlocked: false,
    level: "Cosmic Truth (42x)",
    pair: 54,
    onUnlock: () => {
      minMaxingLoveSkill = true;
    },
    onRespec: () => {
      minMaxingLoveSkill = false;
    },
  },
];

let totalLoveHallSkillsCost = 0;

loveHallSkills.forEach(skill => {
    skill.originalCost = skill.cost; // Set original cost during initialization
    totalLoveHallSkillsCost += 0.5 * (skill.cost + skill.cost * getLevelMultiplier(skill.level));
});


const loveHallSkillsContainer = document.getElementById('loveHallSkills');
const lovePointsDisplay = document.getElementById('lovePointsDisplay'); // Placeholder for Love Points display

function unlockLoveHallSkill(skill, duringLoad = false) {
    skill.unlocked = true;
    const skillDiv = document.querySelector(`.lovepair-skill[data-skill-name="${skill.name}"]`);

    if (skillDiv) {
        skillDiv.classList.remove('locked', 'affordable');
        skillDiv.classList.add('purchased');
        skillDiv.innerHTML = `
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        `;

        // Find the other skill in the pair and increase its cost
        const pairSkills = loveHallSkills.filter(s => s.pair === skill.pair && s.name !== skill.name);
        const pairSkill = pairSkills[0];
        
        if (!pairSkill.unlocked) {
            const levelMultiplier = getLevelMultiplier(skill.level);
            pairSkill.cost *= levelMultiplier;
            
            // Update the display of the cost for the other skill
            const pairSkillDiv = document.querySelector(`.lovepair-skill[data-skill-name="${pairSkill.name}"] .skill-cost`);
            if (pairSkillDiv) {
                pairSkillDiv.textContent = `Cost: ${formatNumber(pairSkill.cost)} Love Points`;
            }
            
            // Change the glowing link to red if the other skill is not unlocked
            const skillRow = skillDiv.closest('.lovehall-skill-row');
            if (skillRow) {
                skillRow.style.setProperty('--glowing-line-color', '#ff3333'); // Red glow
            }
        } else {
            // Both skills in the pair are unlocked, set the link to pink
            const skillRow = skillDiv.closest('.lovehall-skill-row');
            if (skillRow) {
                skillRow.style.setProperty('--glowing-line-color', '#ff66b2'); // Pink glow
            }
        }

        // Call the onUnlock function if it exists
        if (skill.onUnlock) {
            skill.onUnlock(duringLoad);
        }        

        if (beaconOfSevenSunsSkill || pulseOfAffectionSkill) {
            const unlockedSkillsCount = loveHallSkills.filter(skill => skill.unlocked).length;
            if(beaconOfSevenSunsSkill) beaconOfSevenSunsMult = 1.07 ** unlockedSkillsCount;
            if(pulseOfAffectionSkill) pulseOfAffectionMult = 1 + (0.0033 * unlockedSkillsCount);
        }
        
    }
}

function getLevelMultiplier(level) {
    switch (level) {
        case 'Quantum Harmony (2.8x)': return 2.8;
        case 'Dimensional Shift (27x)': return 27;
        case 'Cosmic Truth (42x)': return 42;
        default: return 1;
    }
}

function updateLoveHallSkillDisplay() {
    loveHallSkills.forEach(skill => {
        const skillDiv = document.querySelector(`.lovepair-skill[data-skill-name="${skill.name}"]`);
        if (skillDiv) {
            const pairSkills = loveHallSkills.filter(s => s.pair === skill.pair);
            const pairUnlockedCount = pairSkills.filter(s => s.unlocked).length;
            const skillRow = skillDiv.closest('.lovehall-skill-row');

            // Set the link color based on the number of unlocked skills in the pair
            if (skillRow) {
                if (pairUnlockedCount === 0) {
                    skillRow.style.setProperty('--glowing-line-color', '#ffffff'); // White if none are purchased
                } else if (pairUnlockedCount === 1) {
                    skillRow.style.setProperty('--glowing-line-color', '#ff3333'); // Red if one is purchased
                } else if (pairUnlockedCount === 2) {
                    skillRow.style.setProperty('--glowing-line-color', '#ff66b2'); // Pink if both are purchased
                }
            }

            let descriptionText = skill.description;
            if (skill.requirement && !loveHallSkills.find(s => s.name === skill.requirement).unlocked) {
                descriptionText = `<span style="color: #B22222;">Requires: ${skill.requirement}</span>`;
            }

            const descriptionParagraph = skillDiv.querySelector('p:nth-of-type(2)');
            if (descriptionParagraph) {
                if (!skill.unlocked) {
                    skillDiv.classList.add('locked');
                    skillDiv.classList.remove('purchased');
                    if (lovePoints >= skill.cost) {
                        skillDiv.classList.add('affordable');
                    } else {
                        skillDiv.classList.remove('affordable');
                    }
                    descriptionParagraph.innerHTML = descriptionText;
                } else {
                    skillDiv.classList.add('purchased');
                    skillDiv.classList.remove('locked', 'affordable');
                    descriptionParagraph.textContent = skill.description;
                }
            }
        }
    });

    // Update Love Points display
    if (lovePointsDisplay) {
        const lovePointsGained = calculateLovePointsGained(); // Get the love points gained value
        const lovePointsDisplayText = `Love Points: ${formatNumber(lovePoints)}`;

        // Check if canInfiniteEmbrace() and show (+Y = (sum(X+Y)) if true
        if (canInfiniteEmbrace()) {
            if (lovePoints > 1e6) {
              lovePointsDisplay.innerHTML = `${lovePointsDisplayText} <span style="color: gray;">(Soft Capped - Largest Embrace = ${formatNumber(largestEmbrace)})</span>`;
            } else {
              const totalLovePoints = lovePoints + lovePointsGained; // Calculate the sum of X and Y
              lovePointsDisplay.innerHTML = `${lovePointsDisplayText} <span style="color: gray;">(+${formatNumber(lovePointsGained)} = ${formatNumber(totalLovePoints)})</span>`;
            }
        } else {
            lovePointsDisplay.textContent = lovePointsDisplayText;
        }
    }

}



function initializeLoveHallSkills() {
    const skillLevels = {};
    loveHallSkills.forEach(skill => {
        if (!skillLevels[skill.level]) {
            skillLevels[skill.level] = [];
        }
        skillLevels[skill.level].push(skill);
    });

    loveHallSkillsContainer.innerHTML = ''; // Clear the container

    Object.keys(skillLevels).forEach(level => {
        const skillColumnDiv = document.createElement('div');
        skillColumnDiv.classList.add('lovehall-skill-column');

        const skillColumnLabel = document.createElement('div');
        skillColumnLabel.classList.add('lovehall-skill-column-label');
        skillColumnLabel.textContent = `${level}`;
        skillColumnDiv.appendChild(skillColumnLabel);

        const skillPairs = {};
        skillLevels[level].forEach(skill => {
            if (!skillPairs[skill.pair]) {
                skillPairs[skill.pair] = [];
            }
            skillPairs[skill.pair].push(skill);
        });

        Object.keys(skillPairs).forEach(pair => {
            const skillRow = document.createElement('div');
            skillRow.classList.add('lovehall-skill-row');

            skillPairs[pair].forEach(skill => {
                const skillDiv = document.createElement('div');
                skillDiv.classList.add('lovepair-skill');
                skillDiv.setAttribute('data-skill-name', skill.name);

                let descriptionText = skill.description;
                if (skill.requirement && !loveHallSkills.find(s => s.name === skill.requirement).unlocked) {
                    descriptionText = `<strong>Requires ${skill.requirement}</strong>`;
                }

                skillDiv.innerHTML = `
                    <h3>${skill.name}</h3>  <!-- Name always visible -->
                    <p class="skill-cost">Cost: ${formatNumber(skill.cost)} Love Points</p>
                    <p>${descriptionText}</p>
                `;

                if (!skill.unlocked) {
                    skillDiv.classList.add('locked');
                    if (lovePoints >= skill.cost) {
                        skillDiv.classList.add('affordable');
                    } else if (lovePoints + calculateLovePointsGained() >= skill.cost) {
                        skillDiv.classList.add('potentiallyAffordable');
                    }
                } else {
                    skillDiv.classList.add('purchased');
                }

                skillDiv.addEventListener('click', async (event) => {
                    event.stopPropagation(); // Prevent the click from reaching the outside click listener
                    // Check if the skill has a requirement and if that requirement is unlocked
                    if (skill.requirement && !loveHallSkills.find(s => s.name === skill.requirement).unlocked) {
                        showStatusMessage(skillDiv, 'Missing Prerequisite Skill', false);
                        return;
                    }

                    if (!skill.unlocked && lovePoints >= skill.cost) {
                        if (messageShownUpgrades.has(`Actual Life Advice`)) {
                          lovePoints -= skill.cost;
                          unlockLoveHallSkill(skill);
                          updateLoveHallSkillDisplay(); // Update after unlocking
                        } else {
                          // Show the confirmation modal only if the requirement is met
                          const result = await showMessageModal(
                              'Confirm Love Skill Unlock',
                              `Do you want to unlock ${skill.name} for ${formatNumber(skill.cost)} Love Points? Remember - the paired skill will increase in cost!`,
                              true,
                              false
                          );
                          if (result) {
                              lovePoints -= skill.cost;
                              unlockLoveHallSkill(skill);
                              saveGameState(); // Assuming this saves the game state
                              updateLoveHallSkillDisplay(); // Update after unlocking
                          }
                        }
                    } else if (lovePoints < skill.cost) {
                        showStatusMessage(skillDiv, 'Insufficient Love Points to unlock this skill.', false);
                    }
                });

                skillRow.appendChild(skillDiv);
            });

            skillColumnDiv.appendChild(skillRow);
        });

        loveHallSkillsContainer.appendChild(skillColumnDiv);
    });
}



function outsideLoveHallClickListener(event) {
  const loveHallContent = document.querySelector('.lovehall-overlay-content');
  if (!loveHallContent.contains(event.target)) {
      closeLoveHall();
  }
}

let openLoveHallTimestamp = 0;
let openPowerHallTimestamp = 0;
let openLibraryHallTimestamp = 0;

function checkFastCommuter() {
    if (openLoveHallTimestamp > 0 && openPowerHallTimestamp > 0 && openLibraryHallTimestamp > 0) {
        // Get the maximum and minimum timestamps
        let earliestTimestamp = Math.min(openLoveHallTimestamp, openPowerHallTimestamp, openLibraryHallTimestamp);
        let latestTimestamp = Math.max(openLoveHallTimestamp, openPowerHallTimestamp, openLibraryHallTimestamp);
        
        // Check if the difference is within 4 seconds
        if ((latestTimestamp - earliestTimestamp) <= 4) {
            unlockAchievement('Fast Commuter');
        }
    }
}

function openLoveHall() {
    const loveHallOverlay = document.getElementById('loveHallOverlay');
    loveHallOverlay.style.display = 'flex';

    // Set the Respec button text dynamically based on available free respecs
    const respecButton = document.getElementById('respecButton');
    if (loveHallSkills.filter(skill => skill.unlocked).length > 0) {
      respecButton.style.display = 'inline-block';
    }
    respecButton.textContent = `Respec and Restart Embrace (${numLoveHallFreeRespecs})`;
    
    if(crunchTimer < 3.1){
        unlockAchievement('Eager to Love');
    }

    openLoveHallTimestamp = crunchTimer; 
    checkFastCommuter();

    initializeLoveHallSkills();
    updateLoveHallSkillDisplay();

    if (!achievementsMap.get('Do as dev #3 says').isUnlocked && purchasedUpgradesSet.has('Degens Idle Dev #3')){
      hallVisitsSequence += 'L';
      checkHallVisitsSequence();
    }

    // Add a temporary event listener to close the overlay when clicking outside of it
    setTimeout(() => {
        document.addEventListener('click', outsideLoveHallClickListener);
    }, 0);
}

function closeLoveHall() {
    const loveHallOverlay = document.getElementById('loveHallOverlay');
    loveHallOverlay.style.display = 'none';
    document.removeEventListener('click', outsideLoveHallClickListener);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loveHallButton').addEventListener('click', () => {
        openLoveHall();
    });

    document.getElementById('closeLoveHallButton').addEventListener('click', () => {
        closeLoveHall();
    });

    document.getElementById('closeLoveHallOverlay').addEventListener('click', () => {
        closeLoveHall();
    });
});

document.getElementById('respecButton').addEventListener('click', async () => {
    let confirmationMessage = '';

    // Check if free respecs are available
    if (numLoveHallFreeRespecs > 0) {
        confirmationMessage = `
            You have <strong>${numLoveHallFreeRespecs}</strong> free respec(s) remaining. Respeccing will reset all your skills in the Hall of Love and refund all Love Points spent. After respec, your progress will be reset via Infinite Embrace.
            <br><br>
            Are you sure you want to Respec and Restart the Embrace?
        `;
    } else {
        confirmationMessage = `
            You have no free respecs remaining. Respeccing will cost 10% of your total Love Points earned.
            <br><br>
            Are you sure you want to Respec and Restart the Embrace?
        `;
    }

    // Show the modal for confirmation
    const confirmed = await showMessageModal('Respec Confirmation', confirmationMessage, true);

    if (confirmed) {
        // Call respecSkills to reset the skills and handle the cost
        respecSkills();

        // Restart the Embrace immediately
        infiniteEmbrace(true, true);
    }
});


let purchaseLibrarySkillsInterval;

function purchaseLibrarySkills() {
    if (purchasedUpgradesSet.has('The Library')) {

        let allSkillsUnlocked = true; // Track if all skills are unlocked

        librarySkills.forEach(skill => {
            // If the skill is not yet unlocked and we can afford it
            if (!skill.unlocked && knowledge >= skill.cost) {
                // Subtract the cost from knowledge
                knowledge -= skill.cost;

                // Unlock the skill by calling the provided function
                unlockLibrarySkill(skill, true);
                console.log(`Purchased: ${skill.name}`);

                // Show popup notification for the auto-purchased skill with light brown color
                showPopupTooltip(`Auto-Purchased Library Skill: ${skill.name}`, '#6F4E37'); // Light brown (tan)

                // Mark the skill as unlocked after purchasing
                skill.unlocked = true;
            }

            // If any skill is not yet unlocked, set allSkillsUnlocked to false
            if (!skill.unlocked) {
                allSkillsUnlocked = false;
            }
        });

        // If all skills are unlocked, clear the interval to stop checking
        if (allSkillsUnlocked) {
            clearInterval(purchaseLibrarySkillsInterval);
            console.log("All skills unlocked! Stopping the purchase loop.");
        }
    }
}

let purchasePowerHallSkillsInterval;

function purchasePowerHallSkills() {
    
    
    if (librarySkills.find(skill => skill.name === 'Map to Hall of Power')) {
        
        let allSkillsUnlocked = true; // Track if all skills are unlocked

        powerHallSkills.forEach(skill => {
            // If the skill is not yet unlocked and we can afford it
            if (!skill.unlocked && power >= skill.cost) {
                // Subtract the cost from knowledge
                power -= skill.cost;

                // Unlock the skill by calling the provided function
                unlockPowerHallSkill(skill, true);
                console.log(`Purchased: ${skill.name}`);

                showPopupTooltip(`Auto-Purchased Power Hall Skill: ${skill.name}`, '#8B8000');

                // Mark the skill as unlocked after purchasing
                skill.unlocked = true;
            }

            // If any skill is not yet unlocked, set allSkillsUnlocked to false
            if (!skill.unlocked) {
                allSkillsUnlocked = false;
            }
        });

        // If all skills are unlocked, clear the interval to stop checking
        if (allSkillsUnlocked) {
            clearInterval(purchasePowerHallSkillsInterval);
            console.log("All Power Hall skills unlocked! Stopping the purchase loop.");
        }
    }
}

// Function to dynamically add 'Hopium' as an option to the 'fromResource' dropdown
function addHopiumToFromResource() {
    const fromResourceDropdown = document.getElementById('fromResource');
    
    // Check if 'Hopium' is already in the dropdown to avoid duplicates
    let hopiumOptionExists = false;
    for (let i = 0; i < fromResourceDropdown.options.length; i++) {
        if (fromResourceDropdown.options[i].value === 'hopium') {
            hopiumOptionExists = true;
            break;
        }
    }
    
    // If 'Hopium' is not present, add it as an option
    if (!hopiumOptionExists) {
        const hopiumOption = document.createElement('option');
        hopiumOption.value = 'hopium';
        hopiumOption.text = 'Hopium';
        fromResourceDropdown.appendChild(hopiumOption); // Add Hopium to the dropdown
        console.log('Hopium added to From Resource options.');
    }
}

// Function to remove 'Hopium' from the 'fromResource' dropdown if needed
function removeHopiumFromFromResource() {
    const fromResourceDropdown = document.getElementById('fromResource');
    const hopiumOption = Array.from(fromResourceDropdown.options).find(option => option.value === 'hopium');
    
    if (hopiumOption) {
        fromResourceDropdown.removeChild(hopiumOption);
        console.log('Hopium removed from From Resource options.');
    }
}