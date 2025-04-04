const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

let perkDescriptions = {
    brewmaster:             "Alchemy is 25% faster.",
    healthy_living:         "Reduce all energy drain by 25%.",
    completionist:          "Automatically continue tasks until max reps.",
    basic_mech:             "Increases starting Energy by 25.",
    self_operating_gadget:  "Unlock ability to automate zones after fully completing 10 times.",
    double_timer:           "Allows running two tasks simultaneously.",
    noob_haxor:             "Reduce Hacking energy drain by 10%.",
    energetic_bliss:        "While energy is above 80%, task progress is doubled.",
    workaholic:             "All XP gains increased by 50%.",
    kung_fu_zen:            "All XP gains increased by 28%.<br>And decrease Charisma energy drain by 28%.",
    copium_reactor:         "Increase starting Energy gained for each Copium reset to +6.",
    gacha_machine:          "25% chance to produce double resources.",
    futuristic_wrench:      "Mechanics drains 3x less energy.",
    four_leaf_clover:       "7% chance to produce 7x resources.",
    simulation_engine:      `Improves automation to allow selecting individual tasks.<br>${isMobile ? "Long press a task to toggle automation." : "Right click a task to toggle automation."}`,
    rex:                    "25x increased charisma XP gain.",
    copious_alchemist:      "Reduce Copium gain by 60%.",
    hoverboard:             "Increase travel speed by 4x.",
    reinforcement_learning: "5x increased AI Mastery XP gain.",
    immunity_device:        "Reduce minimum energy drain by 75%.<br>This affects tasks that are completed in one tick.",
    quantum_vitalizer:      "Gain Zone / 10 starting Energy for each Energy reset.<br>Ex: energy reset on zone 8 gives +0.8 starting energy.",
    knowledge_preserver:    "Reduce Knowledge loss on copium reset by 80%.",
    neural_matrix:          "Reduce Quantum energy drain by 40%.",
    sandstorm:              "Reduce all skill XP scaling from 2% to 1.9%.",
    wise_mechanic:          "Knowledge also levels with and boosts Mechanics.",
    urban_warfare:          "Triples effect of Power.",
    master_of_ai:           "Remove AI Mastery from Delusion accumulation.",
    crypto_wallet:          "Each time you travel:<br>5% chance to gain 25 Energy<br>5% chance to lose 25 Copium<br>5% chance to lose 25 Delusion<br>2.5% chance to gain 25 Knowledge<br>0.5% chance to gain 25 Power",
    last_stand:             "Reduce all energy drain by 20%.",
    mechanical_genius:      "Remove Copium gain related to Mechanics.",
    growth_miracle:         "Increase # of resource generating tasks by 50%.",
    inspired_glow:          "Serenity Gain on Prestige increased by 50%.",
    quantum_teleportation:  "Travel is now affected by Power.",
    quantum_harmony:        "Whenever another skill gains xp, Quantum gains 1% of that xp.",
    cyber_boost:            "Each time Cybernetics levels up,<br>another random skill also levels up.",
    universal_alloy:        "Multiply Combat speed by cube root of unspent Serenity.",
    forge_fervor:           "Reduce Combat energy drain by 3x.",
    celestial_light:        "All XP gains increased by 2x.",
    neon_energy:            "Next time you prestige, start with +500 energy (first run only).",
    omega_stability:        "Omniscience is 50% faster.",
    expanse_echo:           "Make every game tick count as 20% more.",
    digital_dreams:         "When hacking levels up, 13% chance for tinkering to also level up.<br>When tinkering levels up, 13% chance for hacking to also level up.<br>(in theory can propagate infinitely)",
    stellar_dreams:         "Changes lambda parameter for delusion gain from 0.5 to 0.25.<br>This increases delusion gain.",
    spark_of_infinity:      "Knowledge also levels with and boosts Cybernetics.",
    spectral_glow:          "Each time you advance a zone,<br>25% chance to spawn a random resource used in this run.",
    time_glimpse:           "Time Fragment level up is improved from double to triple.",
    dimension_mastery:      "Increase starting Energy by 12345.",
    echo_of_nothing:        "Multiply Serenity gain by # unlocked perks.",
    nihilistic_beats:       "All XP gains increased by 4x.",
  };

const toggleablePerks = ["completionist", "double_timer", "copious_alchemist", "master_of_ai", "crypto_wallet", "mechanical_genius", "stellar_dreams", "spectral_glow"];

/****************************************
 * RESOURCE ACTIONS & RENDERING
 ****************************************/

let lightsaberReturns = 0;

let resourceActions = {
  "energy_elixir": {
    onConsume: (gameState, amt) => { 
      gameState.energy += gameState.elixirEnergy * amt;
      if (gameState.criticallyLowEnergyHit && gameState.energy >= gameState.startingEnergy) {
        unlockAchievement("Second Wind");
        gameState.criticallyLowEnergyHit = false;
      }
      updateEnergyDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Energy Elixir${amt > 1 ? "s" : ""}.<br>Gained ${gameState.elixirEnergy * amt} Energy.`, backgroundColors["resource"]);
    },
    tooltip: "Click to gain +3 Energy.<br>" + (("ontouchstart" in window || navigator.maxTouchPoints > 0) ? "Use above switch to consume all." : "Right-click to consume all.")
  },
  "magnifying_glass": {
    onConsume: (gameState, amt) => { 
      gameState.skills["perception"].progressBoost += 0.05 * amt; 
      updateSkillMultipliers(); 
      updateSkillDisplay(); 
      updateTasksHoverInfo(); 
      showMessage(`Used ${amt} Magnifying Glass${amt > 1 ? "es" : ""}.<br>Boosted Perception by ${5 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Boosts Perception speed by 5%.<br>All resources only take effect after they are consumed<br>and last for all zones until a reset!"
  },
  "goggles": {
    onConsume: (gameState, amt) => { 
      gameState.skills["alchemy"].drainBoost += 0.07 * amt; 
      updateSkillMultipliers(); 
      updateSkillDisplay(); 
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Goggles.<br>Reduced Alchemy energy drain by ${7 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces Alchemy energy drain by 7%"
  },
  "cybernetic_potion": {
    onConsume: (gameState, amt) => { 
      gameState.skills["cybernetics"].drainBoost += 0.2 * amt; 
      updateSkillMultipliers(); 
      updateSkillDisplay(); 
      updateTasksHoverInfo(); 
      showMessage(`Used ${amt} Cybernetic Potion${amt > 1 ? "s" : ""}.<br>Reduced Cybernetics energy drain by ${20 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces Cybernetics energy drain by 20%."
  },
  "cybernetic_armor": {
    onConsume: (gameState, amt) => { 
      gameState.numCyberneticArmors += amt; 
      updateTasksHoverInfo();
      if(gameState.soundEnabled) reinforcementSound.play();
      showMessage(`Used ${amt} Cybernetic Armor${amt > 1 ? "s" : ""}.<br>Reduced energy drain by 75% for next ${amt > 1 ? amt + " tasks" : "task"}`, backgroundColors["resource"]);
      updateActiveResourcesOverlay();
    },
    tooltip: "Reduces energy drain by 75% for next task (one square).<br>Any task ending or pausing task will remove the armor.<br>Multiple uses stack with # of tasks, not with drain."
  },
  "amphetamine_pill": {
    onConsume: (gameState, amt) => {
      gameState.skills["tinkering"].drainBoost += 0.05 * amt;
      gameState.skills["hacking"].drainBoost += 0.05 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Amphetamine Pill${amt > 1 ? "s" : ""}.<br>Reduced Tinkering and Hacking energy drain by ${5 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces Tinkering and Hacking energy drain by 5%."
  },
  "steroids": {
    onConsume: (gameState, amt) => {
      gameState.skills["endurance"].drainBoost += 0.1 * amt;
      gameState.skills["combat"].drainBoost += 0.1 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Steroids${amt > 1 ? "s" : ""}.<br>Reduced Endurance and Combat energy drain by ${10 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces Endurance and Combat energy drain by 10%."
  },
  "touchable_grass": {
    onConsume: (gameState, amt) => {
      gameState.copium = Math.max(gameState.copium - 100 * amt, 0);
      updateCopiumDisplay();
      showMessage(`Used ${amt} Touchable Grass${amt > 1 ? "es" : ""}.<br>Reduced Copium by ${100 * amt}.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces Copium by 100."
  },
  "cool_sunglasses": {
    onConsume: (gameState, amt) => {
      gameState.skills["hacking"].drainBoost += 1 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Cool Sunglasses.<br>Reduced Hacking energy drain by ${100 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces Hacking energy drain by 100%.<br>And Makes you look cool."
  },
  "omega_resonator": {
    onConsume: (gameState, amt) => {
      gameState.skills["combat"].progressBoost += 0.2 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Omega Resonator${amt > 1 ? "s" : ""}.<br>Boosted Combat speed by ${20 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Boosts Combat speed by 20%."
  },
  "shiny_helmet": {
    onConsume: (gameState, amt) => {
      gameState.skills["combat"].drainBoost += 1 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Shiny Helmet${amt > 1 ? "s" : ""}.<br>Reduced Combat energy drain by ${100 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces Combat energy drain by 100%.<br>And makes you look more shiny."
  },
  "karate_belt": {
    onConsume: (gameState, amt) => {
      gameState.skills["charisma"].progressBoost += 0.25 * amt;
      gameState.skills["negotiation"].drainBoost += 1 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Karate Belt${amt > 1 ? "s" : ""}.<br>Boosted Charisma speed by ${25 * amt}%. Reduced Negotiation energy drain by ${100 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Boosts Charisma speed by 25%.<br>And reduces Negotiation energy drain by 100%.<br>By letting them know you are a ninja."
  },
  "random_crystal": {
    onConsume: (gameState, amt) => {
      // Object to track how many levels each skill was leveled up by
      let groupedSkills = {};
      // Get all visible skills, excluding "totality" and "nihility"
      const visibleSkills = Object.keys(gameState.skills).filter(sName => 
        gameState.skills[sName].visible && sName !== "totality" && sName !== "nihility"
      );

      for (let i = 0; i < amt; i++) {
        // Choose a random visible skill
        const randomSkillName = visibleSkills[Math.floor(Math.random() * visibleSkills.length)];
        const skill = gameState.skills[randomSkillName];
        
        // Determine how many levels to add for this use.
        let levelsToAdd = gameState.randomCrystalLevels || 1;
        
        // For each level, force the level-up by adding enough XP.
        for (let j = 0; j < levelsToAdd; j++) {
          addXP(randomSkillName, 0, "", true, Math.pow(getSkillXpScaling(), skill.level - 1) - skill.xp);
        }
        
        // Group the total level increase for this skill.
        groupedSkills[randomSkillName] = (groupedSkills[randomSkillName] || 0) + levelsToAdd;
      }

      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      saveGameProgress();

      // Build a list of messages for the grouped skills.
      let messages = [];
      for (const skillName in groupedSkills) {
        const totalIncrease = groupedSkills[skillName];
        const skill = gameState.skills[skillName];
        messages.push(`${formatStringForDisplay(skillName)} +${totalIncrease} (Lvl ${skill.level})`);
      }

      showMessage(`Used ${amt} Random Crystal${amt > 1 ? "s" : ""}. Leveled up:<br>${messages.join("<br>")}.`, backgroundColors["resource"]);
    },
    tooltip: "Levels up a random skill to next level."
  },
  "one_ring": {
    onConsume: (gameState, amt) => {
      gameState.skills["quantum"].progressBoost += 5 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} One Ring${amt > 1 ? "s" : ""}.<br>Boosted Quantum speed by ${500 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Boosts Quantum speed by 500%.<br>And wards off potential mates."
  },
  "katana": {
    onConsume: (gameState, amt) => {
      gameState.skills["combat"].progressBoost += 0.1 * amt;
      gameState.skills["perception"].drainBoost += 3 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Katana${amt > 1 ? "s" : ""}.<br>Boosted Combat speed by ${10 * amt}%. Reduced Perception energy drain by ${300 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Oddly enough, only boosts Combat speed by 10%.<br>But also reduces energy drain of Perception by 300%."
  },
  "blades_of_chaos": {
    onConsume: (gameState, amt) => {
      gameState.skills["combat"].drainBoost += 0.25 * amt;
      gameState.skills["quantum"].drainBoost += 0.25 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Blades of Chaos.<br>Reduced Combat and Quantum energy drain by ${25 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces Combat and Quantum energy drain by 25%.<br>While looking like a badass."
  },
  "sanity_cleanser": {
    onConsume: (gameState, amt) => {
      let totalReduced = 0;
      for (let i = 0; i < amt; i++) {
        // Generate a random reduction between 1 and 200
        const reduction = Math.floor(Math.random() * 200) + 1;
        totalReduced += reduction;
        gameState.delusion = Math.max(gameState.delusion - reduction, 0);
      }
      updateDelusionDisplay();
      showMessage(`Used ${amt} Sanity Cleanser${amt > 1 ? "s" : ""}.<br>Reduced Delusion by ${totalReduced}.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces Delusion by a random number between 1 and 200."
  },
  "augment_fuel": {
    onConsume: (gameState, amt) => {
      let totalCopiumReduced = 0;
      let totalDelusionReduced = 0;

      for (let i = 0; i < amt; i++) {
        if (Math.random() < 0.5) {
          let before = gameState.copium;
          gameState.copium = Math.max(gameState.copium - 75, 0);
          totalCopiumReduced += (before - gameState.copium);
        } else {
          let before = gameState.delusion;
          gameState.delusion = Math.max(gameState.delusion - 75, 0);
          totalDelusionReduced += (before - gameState.delusion);
        }
      }
      
      updateCopiumDisplay();
      updateDelusionDisplay();
      showMessage(`Used ${amt} Augment Fuel${amt > 1 ? "s" : ""}.<br>Reduced Copium by ${totalCopiumReduced} and Delusion by ${totalDelusionReduced}.`, backgroundColors["resource"]);
    },
    tooltip: "At random, reduce Copium or Delusion by 75."
  },
  "beating_heart": {
    onConsume: (gameState, amt) => {
      let totalCopiumReduced = 0;
      let totalDelusionReduced = 0;
      let totalEnergyGained = 0;
      
      for (let i = 0; i < amt; i++) {
        const randVal = Math.random();
        if (randVal > 0.6667) {
          const before = gameState.copium;
          gameState.copium = Math.max(gameState.copium - 1000, 0);
          totalCopiumReduced += (before - gameState.copium);
        } else if (randVal > 0.3333) {
          const before = gameState.delusion;
          gameState.delusion = Math.max(gameState.delusion - 1000, 0);
          totalDelusionReduced += (before - gameState.delusion);
        } else {
          gameState.energy += 100;
          totalEnergyGained += 100;
        }
      }

      if (gameState.criticallyLowEnergyHit && gameState.energy >= gameState.startingEnergy) {
        unlockAchievement("Second Wind");
        gameState.criticallyLowEnergyHit = false;
      }
      
      updateCopiumDisplay();
      updateDelusionDisplay();
      updateEnergyDisplay();
      
      let messageLines = [`Used ${amt} Beating Heart${amt > 1 ? "s" : ""}.`];
      if (totalEnergyGained > 0) {
        messageLines.push(`Energy increased by ${totalEnergyGained}.`);
      }
      if (totalCopiumReduced > 0) {
        messageLines.push(`Copium reduced by ${totalCopiumReduced}.`);
      }
      if (totalDelusionReduced > 0) {
        messageLines.push(`Delusion reduced by ${totalDelusionReduced}.`);
      }
      
      showMessage(messageLines.join("<br>"));
    },
    tooltip: "At random, either gain 100 Energy,<br>or reduce Copium by 1000<br>or reduce Delusion by 1000."
  },
  "saiyan_armor": {
    onConsume: (gameState, amt) => {
      gameState.skills["combat"].progressBoost += 0.75 * amt;
      gameState.skills["combat"].drainBoost += 0.75 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Saiyan Armor${amt > 1 ? "s" : ""}.<br>Boosted Combat speed and reduced energy drain by ${75 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces Combat energy drain and boosts Combat speed by 75%.<br>"
  },
  "hoverboard_fuel": {
    onConsume: (gameState, amt) => {
      gameState.skills["travel"].progressBoost += 0.1 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Hoverboard Fuel${amt > 1 ? "s" : ""}.<br>Boosted Travel speed by ${10 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Boosts Travel speed by 10%."
  },
  "surveillance_core": {
    onConsume: (gameState, amt) => {
      gameState.skills["perception"].drainBoost += 0.5 * amt;
      gameState.skills["intellect"].drainBoost += 0.5 * amt;
      gameState.skills["hacking"].drainBoost += 0.5 * amt;
      gameState.skills["cybernetics"].drainBoost += 0.5 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Surveillance Core${amt > 1 ? "s" : ""}.<br>Reduced energy drain by ${50 * amt}% for Perception, Intellect, Hacking, and Cybernetics.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces energy drain by 50%<br>for Perception, Intellect, Hacking, and Cybernetics.<br>And brings about a surveillance state."
  },
  "puzzle_piece": {  
      onConsume: (gameState, amt) => {
          gameState.skills["omniscience"].progressBoost += 0.02 * amt;
          updateSkillMultipliers();
          updateSkillDisplay();
          updateTasksHoverInfo();
          showMessage(`Used ${amt} Puzzle Piece${amt > 1 ? "s" : ""}.<br>Boosted Omniscience speed by ${2 * amt}%.`, backgroundColors["resource"]);
        },
        tooltip: "Boosts Omniscience speed by 2%."
  },
  "celestial_blossom": {
    onConsume: (gameState, amt) => {
      gameState.numCelestialBlossoms += amt;
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Celestial Blossom${amt > 1 ? "s" : ""}.<br>Reduced Copium gain by ${amt}.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces Copium gain by 1."
  },
  "infinity_gauntlet": {
    onConsume: (gameState, amt) => {
      Object.keys(gameState.resources).forEach(resource => {
        if (gameState.resources[resource] > 0 && resource !== "infinity_gauntlet" && resource !== "random_crystal" && resource !== "googol" && resource !== "radiance" && resource !== "master_ball" && resource !== "rinnegan") {
          addResource(resource, amt);
        }
      });
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Infinity Gauntlet${amt > 1 ? "s" : ""}.<br>Gained +1 of held resources.`, backgroundColors["resource"]);
    },
    tooltip: "Gain +1 of every resource you currently have.<br>Very few resources cannot be created by Infinity Gauntlet."
  },
  "stardust": {
    onConsume: (gameState, amt) => {
      // Get an array of resource names, excluding "infinity_gauntlet" and "stardust"
      const usedResources = Object.keys(gameState.resourcesUsed).filter(r => r !== "infinity_gauntlet" && r !== "stardust" && r !== "radiance" && r !== "googol" && r !== "master_ball" && r !== "rinnegan");
      let resourceCounts = {};

      // For each Stardust unit consumed...
      for (let i = 0; i < amt; i++) {
        if (usedResources.length > 0) {
          const randomIndex = Math.floor(Math.random() * usedResources.length);
          const randomResource = usedResources[randomIndex];
          addResource(randomResource, 1);
          resourceCounts[randomResource] = (resourceCounts[randomResource] || 0) + 1;
        }
      }

      saveGameProgress();

      // Build an aggregated message
      let messageLines = [`Used ${amt} Stardust${amt > 1 ? "s" : ""}. Created:`];
      let createdResources = [];
      for (const resource in resourceCounts) {
        const count = resourceCounts[resource];
        createdResources.push(`${formatStringForDisplay(resource)}${count > 1 ? " x" + count : ""}`);
      }
      if (createdResources.length > 0) {
        messageLines.push(createdResources.join("<br>"));
      }
      
      showMessage(messageLines.join("<br>"), backgroundColors["resource"]);
    },
    tooltip: "Create 1 of a random resource that you used this run.<br>Cannot create Infinity Gauntlet."
  },
  "lightsaber": {
    onConsume: (gameState, amt) => {
      let extraSpawned = 0;
      for (let i = 0; i < amt; i++) {
        // Increase all skills' speed by 3% for each lightsaber consumed.
        Object.keys(gameState.skills).forEach(skill => {
          gameState.skills[skill].progressBoost += 0.03;
        });
        // 50% chance to spawn an extra lightsaber.
        if (Math.random() < 0.5) {
          addResource("lightsaber", 1);
          extraSpawned++;
        }
      }
      if (amt == 1 && extraSpawned == 1) {
        lightsaberReturns++;    
        if (lightsaberReturns >= 5) {
          unlockAchievement("Jedi Master")
        }    
      } else {
        lightsaberReturns = 0;
      }
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      let msg = `Used ${amt} Lightsaber${amt > 1 ? "s" : ""}.<br>All skills' speed increased by ${3 * amt}%.`;
      if (extraSpawned > 0) {
        msg += `<br>${extraSpawned} extra lightsaber${extraSpawned !== 1 ? "s" : ""} spawned!`;
      }
      showMessage(msg, backgroundColors["resource"]);
    },
    tooltip: "Boosts speed for all skills by 3% per use.<br>50% chance to spawn an extra Lightsaber."
  },
  "quantum_residue": {
    onConsume: (gameState, amt) => {
      // Group cumulative effects.
      // Key format: "skillName|effectType" where effectType is either "speed" or "drain"
      let effects = {};

      for (let i = 0; i < amt; i++) {
        // Get all visible skills.
        const visibleSkills = Object.keys(gameState.skills).filter(s => gameState.skills[s].visible && s !== "omniscience" && s !== "totality" && s !== "nihility");
        if (visibleSkills.length === 0) continue;
        
        // Choose a random skill.
        const randomSkillName = visibleSkills[Math.floor(Math.random() * visibleSkills.length)];
        
        // Randomly choose which attribute to affect: speed (progressBoost) or energy drain (drainBoost).
        const effectType = Math.random() < 0.5 ? "speed" : "drain";
        
        // Generate a random effect percentage between -10 and +50.
        let effectPercent = Math.floor(Math.random() * 61) - 10;
        let effectValue = effectPercent / 100;
        
        // Apply the effect.
        if (effectType === "speed") {
          gameState.skills[randomSkillName].progressBoost += effectValue;
        } else {
          gameState.skills[randomSkillName].drainBoost += effectValue;
        }
        
        // Group the effect.
        const key = randomSkillName + "|" + effectType;
        effects[key] = (effects[key] || 0) + effectValue;
      }
      
      updateSkillDisplay();
      
      // Build the aggregated message.
      let messageLines = [`Used ${amt} Quantum Residue${amt > 1 ? "s" : ""}.`];
      for (const key in effects) {
        const [skillName, effectType] = key.split("|");
        let totalEffect = effects[key]; // in decimal form
        let totalEffectPercent = Math.round(totalEffect * 100);
        
        // For energy drain, flip the sign when displaying.
        let displayEffectPercent = effectType === "drain" ? -totalEffectPercent : totalEffectPercent;
        
        // Determine sign.
        let sign = displayEffectPercent >= 0 ? "+" : "";
        
        // Determine color.
        // For speed: positive (increased speed) is good → green; negative is bad → red.
        // For energy drain: a negative display (i.e. reduced drain) is good → green; a positive display (increased drain) is bad → red.
        let color;
        if (effectType === "drain") {
          color = displayEffectPercent < 0 ? "#E0FFD0" : "#FFBFBF";
        } else {
          color = displayEffectPercent >= 0 ? "#E0FFD0" : "#FFBFBF";
        }
        
        let coloredEffect = `<span style="color: ${color};">${sign}${displayEffectPercent}%</span>`;
        let effectDescription = effectType === "speed" ? "speed" : "energy drain";
        messageLines.push(`${formatStringForDisplay(skillName)} ${effectDescription} changed by ${coloredEffect}.`);
      }
      
      showMessage(messageLines.join("<br>"), backgroundColors["resource"]);
    },
    tooltip: "Unexpectedly affect speed or energy drain of<br>a random skill by anywhere from -10% to +50%.<br>(cannot affect Omniscience, Totality, or Nihility)"
  },
"adamantium": {
  onConsume: (gameState, amt) => {
    let totalProgressBoostPercent = 0;
    let totalDrainBoostPercent = 0;
    for (let i = 0; i < amt; i++) {
      // Generate a random integer between 1 and 50 for each use.
      const progressBoostPercent = Math.floor(Math.random() * 50) + 1;
      const drainBoostPercent = Math.floor(Math.random() * 50) + 1;
      totalProgressBoostPercent += progressBoostPercent;
      totalDrainBoostPercent += drainBoostPercent;
    }
    // Convert the total percentages into decimal values.
    const progressBoost = totalProgressBoostPercent / 100;
    const drainBoost = totalDrainBoostPercent / 100;
    
    // Apply the boosts to the "tinkering" skill.
    gameState.skills["tinkering"].progressBoost += progressBoost;
    gameState.skills["tinkering"].drainBoost += drainBoost;
    
    updateSkillMultipliers();
    updateSkillDisplay();
    updateTasksHoverInfo();
    
    showMessage(`Used ${amt} Adamantium${amt > 1 ? "s" : ""}.<br>Boosted Tinkering progress by ${totalProgressBoostPercent}%<br>and reduced energy drain by ${totalDrainBoostPercent}%.`, backgroundColors["resource"]);
  },
  tooltip: "Boosts Tinkering progress and reduces its energy drain<br>by a random percentage (1%-50%) per use."
},
  "nano_component": {
    onConsume: (gameState, amt) => {
      gameState.skills["charisma"].progressBoost += 0.15 * amt;
      gameState.skills["tinkering"].progressBoost += 0.15 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Nano Component${amt > 1 ? "s" : ""}.<br>Boosted speed by ${15 * amt}% for Charisma and Tinkering.`, backgroundColors["resource"]);
    },
    tooltip: "Boosts speed by 15% for Charisma and Tinkering."
  },
  "cosmic_shard": {
    onConsume: (gameState, amt) => { 
      gameState.numCosmicShards += amt; 
      updateTasksHoverInfo();
      if(gameState.soundEnabled) experienceSound.play();
      showMessage(`Used ${amt} Cosmic Shard${amt > 1 ? "s" : ""}.<br>5x experience gain next ${amt > 1 ? amt + " tasks" : "task"}`, backgroundColors["resource"]);
      updateActiveResourcesOverlay();
    },
    tooltip: "Increases experience gain by 5x for next task (one square).<br>Any task ending or pausing task will remove the shard.<br>Multiple uses stack with # of tasks, not with xp gain."
  },
  "celestial_ore": {
    onConsume: (gameState, amt) => {
      gameState.skills['endurance'].drainBoost += 10 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Celestial Ore${amt > 1 ? "s" : ""}.<br>Reduced Endurance energy drain by ${1000 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces energy drain by 1000% for Endurance."
  },
  "atomic_particle": {
    onConsume: (gameState, amt) => {
      gameState.numAtomicParticles += amt;
      updateTasksHoverInfo();
      if(gameState.soundEnabled) atomicParticleSound.play();
      showMessage(`Used ${amt} Atomic Particle${amt > 1 ? "s" : ""}.<br>Double resource production next ${amt > 1 ? amt + " tasks" : "task"}`, backgroundColors["resource"]);
      updateActiveResourcesOverlay();
    },
    tooltip: "Doubles resource production next time a resource is produced.<br>Stacks with other multipliers.<br>Multiple uses stack with # of tasks, not with production."
  },
  "star_fragment": {
    onConsume: (gameState, amt) => {
      gameState.skills['charisma'].drainBoost += 0.25 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Star Fragment${amt > 1 ? "s" : ""}.<br>Reduced Charisma energy drain by ${25 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces energy drain by 25% for Charisma."
  },
  "hunger_shard": {
    onConsume: (gameState, amt) => { 
      gameState.energy += 300 * amt;
      if (gameState.criticallyLowEnergyHit && gameState.energy >= gameState.startingEnergy) {
        unlockAchievement("Second Wind");
        gameState.criticallyLowEnergyHit = false;
      }
      updateEnergyDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Hunger Shard${amt > 1 ? "s" : ""}.<br>Gained ${300 * amt} Energy.`, backgroundColors["resource"]);
    },
    tooltip: "Consume a nearby world and gain +300 Energy.<br>"
  },
  "data_bit": {
    onConsume: (gameState, amt) => {
      const skill = gameState.skills["cybernetics"];
      let lowered = 0;
      // Lower the Cybernetics level one per data_bit, but not below level 1.
      for (let i = 0; i < amt; i++) {
        if (skill.level > 1) {
          skill.level--;
          // Option: Reset XP so progress for that level is lost.
          skill.xp = 0;
          lowered++;
        }
      }
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Data Bit${amt > 1 ? "s" : ""}.<br>Lowered Cybernetics by ${lowered} level${lowered === 1 ? "" : "s"}.`, backgroundColors["resource"]);
    },
    tooltip: "Lowers Cybernetics level by 1 per Data Bit used."
  },
  "energy_core": {
    onConsume: (gameState, amt) => {
      gameState.energyCoreMultiplier += (gameState.energy / 5000) * amt;
      
      updateTasksHoverInfo();
      if (gameState.soundEnabled) {
        energyCoreSound.play();
      }
      
      showMessage(`Used ${amt} Energy Core${amt > 1 ? "s" : ""}.<br>
        Next battle XP gain multiplier is now ${formatNumber(gameState.energyCoreMultiplier)}x.`, backgroundColors["resource"]);
      updateActiveResourcesOverlay();
    },
    tooltip: "Increases next battle XP gain additively<br>by (current energy / 5000)x per Energy Core used."
  },
  "cyber_relic": {
    onConsume: (gameState, amt) => {
      const intellectSkill = gameState.skills["intellect"];
      const cyberSkill = gameState.skills["cybernetics"];
      
      // Increase progressBoost (speed) by 10% per relic for both Intellect and Cybernetics.
      intellectSkill.progressBoost += 0.10 * amt;
      cyberSkill.progressBoost += 0.10 * amt;
      
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      
      showMessage(`Used ${amt} Cyber Relic${amt > 1 ? "s" : ""}.<br>Boosted Intellect and Cybernetics speed by ${10 * amt}% each.`, backgroundColors["resource"]);
    },
    tooltip: "Boosts speed by 10% for Intellect and Cybernetics."
  },
  "data_cluster": {
    onConsume: (gameState, amt) => {
      // Object to track aggregated effects
      let effects = {
        hackingLevel: 0,
        perceptionLevel: 0,
        tinkeringLevel: 0,
        hackingDrain: 0,
        perceptionDrain: 0,
        tinkeringDrain: 0
      };

      for (let i = 0; i < amt; i++) {
        // Randomly select one of 6 effects (0 to 5)
        const rand = Math.floor(Math.random() * 6);
        switch (rand) {
          case 0:
            gameState.skills["hacking"].level++;
            effects.hackingLevel++;
            break;
          case 1:
            gameState.skills["perception"].level++;
            effects.perceptionLevel++;
            break;
          case 2:
            gameState.skills["tinkering"].level++;
            effects.tinkeringLevel++;
            break;
          case 3:
            gameState.skills["hacking"].drainBoost += 0.15;
            effects.hackingDrain++;
            break;
          case 4:
            gameState.skills["perception"].drainBoost += 0.15;
            effects.perceptionDrain++;
            break;
          case 5:
            gameState.skills["tinkering"].drainBoost += 0.15;
            effects.tinkeringDrain++;
            break;
        }
      }

      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();

      // Build an aggregated message summarizing the effects
      let messages = [];
      if (effects.hackingLevel > 0) {
        messages.push(`Hacking leveled up by ${effects.hackingLevel}`);
      }
      if (effects.perceptionLevel > 0) {
        messages.push(`Perception leveled up by ${effects.perceptionLevel}`);
      }
      if (effects.tinkeringLevel > 0) {
        messages.push(`Tinkering leveled up by ${effects.tinkeringLevel}`);
      }
      if (effects.hackingDrain > 0) {
        messages.push(`Hacking energy drain reduced by ${15 * effects.hackingDrain}%`);
      }
      if (effects.perceptionDrain > 0) {
        messages.push(`Perception energy drain reduced by ${15 * effects.perceptionDrain}%`);
      }
      if (effects.tinkeringDrain > 0) {
        messages.push(`Tinkering energy drain reduced by ${15 * effects.tinkeringDrain}%`);
      }

      let message = `Used ${amt} Data Cluster${amt > 1 ? "s" : ""}.`;
      if (messages.length > 0) {
        message += `<br>Effects:<br>${messages.join("<br>")}`;
      }
      showMessage(message, backgroundColors["resource"]);
    },
    tooltip: "Randomly either increases the level of Hacking, Perception, or Tinkering by 1,<br>or reduces the energy drain of Hacking, Perception, or Tinkering by 15% per use."
  },
  "cybernetic_implant": {
    onConsume: (gameState, amt) => {
      const energyIncrease = (gameState.skills["cybernetics"].level / 1024) * amt;
      gameState.startingEnergy += energyIncrease;
      gameState.totalCyberneticImplantEnergy += energyIncrease;
      if (gameState.totalCyberneticImplantEnergy > 100) {
        unlockAchievement("Cybernetic Overload");
      }
      
      updateEnergyDisplay();
      
      showMessage(`Used ${amt} Cybernetic Implant${amt > 1 ? "s" : ""}.<br>Increased Starting Energy by ${formatNumber(energyIncrease)}.`, backgroundColors["resource"]);
    },
    tooltip: "Increases Starting Energy by (Cybernetics level / 1024) per implant."
  },
  "cosmic_scroll": {
    onConsume: (gameState, amt) => {
      const knowledgeIncrease = gameState.highestCompletedZone ** 2 * amt;
      gameState.knowledge += knowledgeIncrease;
      updateTasksHoverInfo();
      showKnowledgeIfUnlocked();
      showMessage(`Used ${amt} Cosmic Scroll${amt > 1 ? "s" : ""}.<br>Increased Knowledge by ${knowledgeIncrease}.`, backgroundColors["resource"]);
    },
    tooltip: "Increases Knowledge by (Highest Fully Completed Zone ^ 2) per Cosmic Scroll used."
  },
  "kaiju_scale": {
    onConsume: (gameState, amt) => {
      if (gameState.skills["totality"]) {
        gameState.skills["totality"].drainBoost += 0.15 * amt;
        updateSkillMultipliers();
        updateSkillDisplay();
        updateTasksHoverInfo();
        showMessage(`Used ${amt} Kaiju Scale${amt > 1 ? "s" : ""}.<br>Reduced Totality energy drain by ${15 * amt}%.`, backgroundColors["resource"]);
      } else {
        showMessage("Totality skill not unlocked.");
      }
    },
    tooltip: "Reduces Totality energy drain by 15%."
  },
  "system_core": {
    onConsume: (gameState, amt) => {
      gameState.skills["aiMastery"].drainBoost += 0.5 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} System Core${amt > 1 ? "s" : ""}.<br>Reduced AI Mastery energy drain by ${50 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces AI Mastery energy drain by 50%."
  },
  "googol": {
    onConsume: (gameState, amt) => {
      // Object to record how much was added per resource.
      let addedTotals = {};
      
      for (let i = 0; i < amt; i++) {
        // Get a list of other resources that the player currently holds (>0), excluding "googol"
        const otherResources = Object.keys(gameState.resources)
          .filter(r => r !== "googol" && gameState.resources[r] > 0 && r !== "rinnegan");
        
        // If no other resource is found, skip this iteration.
        if (otherResources.length === 0) continue;
        
        // Randomly select one of the available resources.
        const randomResource = otherResources[Math.floor(Math.random() * otherResources.length)];
        
        // Add 10 to the chosen resource.
        addResource(randomResource, 10);
        
        // Record how much was added.
        addedTotals[randomResource] = (addedTotals[randomResource] || 0) + 10;
      }
      
      // If nothing was added, notify the player.
      if (Object.keys(addedTotals).length === 0) {
        showMessage("No other resources available to boost with Googol.");
        return;
      }
      
      // Build a summary message.
      let summary = [];
      for (const resource in addedTotals) {
        summary.push(`${formatStringForDisplay(resource)} +${addedTotals[resource]}`);
      }
      
      showMessage(`Used ${amt} Googol${amt > 1 ? "s" : ""}.<br>Added:<br>${summary.join("<br>")}`, backgroundColors["resource"]);
    },
    tooltip: "When consumed, for each Googol adds +10 to a random other resource you have.<br>Googol cannot be created by Infinity Gauntlet or Stardust.<br>Cannot have more than 1 digit of Googols."
  },
  "dream_fragment": {
    onConsume: (gameState, amt) => {
      // Calculate 0.2% of maxDelusion
      const delusionIncrement = 0.002 * gameState.maxDelusion;
      // The target delusion is 90% of maxDelusion.
      const targetDelusion = 0.9 * gameState.maxDelusion;
      
      const delusionBefore = gameState.delusion;

      // Loop through amt times:
      for (let i = 0; i < amt; i++) {
        if (gameState.delusion < targetDelusion) {
          gameState.delusion = Math.min(gameState.delusion + delusionIncrement, targetDelusion);
        } else {
          gameState.delusion = Math.max(gameState.delusion - delusionIncrement, targetDelusion);
        }
      }
      const totalAdjusted = Math.abs(gameState.delusion - delusionBefore);
      
      updateDelusionDisplay();
      showMessage(`Used ${amt} Dream Fragment${amt > 1 ? "s" : ""}.<br>Adjusted delusion towards 90% by ${formatNumber(totalAdjusted)}.`, backgroundColors["resource"]);
    },
    tooltip: "Moves delusion 0.2% of max delusion closer to 90% per fragment."
  },
  "radiance": {
    onConsume: (gameState, amt, currentTasks) => {
      const currentZoneIndex = getCurrentZoneIndex(); // Get the current zone index
      const zone = zones[currentZoneIndex]; // Get the current zone using the index

      let asymptoteTasks = false;

      zone.tasks.forEach((task, taskIndex) => {
        // Only progress tasks that are not finished and are visible
        if (task.count < task.maxReps) {
          // Check if the task is already in currentTasks; if not, add it
          const existingTaskData = currentTasks.find(t => t.zoneIndex === currentZoneIndex && t.taskIndex === taskIndex);

          const taskRunningAlready = existingTaskData && !existingTaskData.paused;

          if (!existingTaskData) {
            const taskDiv = document.querySelector(`.task[data-zone-index="${currentZoneIndex}"][data-task-index="${taskIndex}"]`);
            const button = taskDiv.querySelector("button");
            const progressFill = taskDiv.querySelector(".current-progress-fill");
            const repContainer = taskDiv.querySelector(".rep-container");

            // Add the task to currentTasks with initial progress set to 0
            startTask(currentZoneIndex, taskIndex, button, progressFill, repContainer);
          }

          // Now find the task data in currentTasks (it should be there now)
          const tData = currentTasks.find(t => t.zoneIndex === currentZoneIndex && t.taskIndex === taskIndex);

          if (tData && (tData.progress / task.baseTime) > 0.9) {
            asymptoteTasks++;
            if (asymptoteTasks >= 2) {
              unlockAchievement("Asymptote");
            }
          }

          if (tData) {
            const remainingProgress = task.baseTime - tData.progress; // Remaining progress to complete the task
            const progressIncrease = remainingProgress * 0.1; // 10% of the remaining progress
            tData.progress = Math.min(tData.progress + progressIncrease, task.baseTime); // Ensure progress doesn't exceed totalDuration

            // Update the visual progress fill
            const pct = (tData.progress / task.baseTime) * 100;
            tData.progressFill.style.width = Math.min(pct, 100) + "%";

            if (!taskRunningAlready) {
              // Pause the task before updating progress
              tData.paused = true;
              const taskDiv = document.querySelector(`.task[data-zone-index="${currentZoneIndex}"][data-task-index="${taskIndex}"]`);
              const button = taskDiv.querySelector("button");
              button.classList.remove("active");
            }
          }
        }
      });

      updateTasksHoverInfo(); // Update any necessary task hover info
      showMessage(`Used ${amt} Radiance${amt > 1 ? "s" : ""}.<br>Progressed all tasks by 10% of their remaining progress.`, backgroundColors["resource"]);

    },
    tooltip: "Progresses all tasks in the current zone by 10% of their remaining progress.<br>Radiance cannot be created by Infinity Gauntlet or Stardust."
  },
  "time_fragment": {
    onConsume: (gameState, amt) => {
      gameState.numTimeFraments += amt;
      if(gameState.soundEnabled) timeFragmentSound.play();
      showMessage(`Used ${amt} Time Fragment${amt > 1 ? "s" : ""}.<br>Double level gains on next ${amt > 1 ? amt + " level ups" : "level up"}`, backgroundColors["resource"]);
      updateActiveResourcesOverlay();
    },
    tooltip: "Doubles level gain on next level up.<br>Multiple uses stack with # of level ups, not with level gain."
  },
  "reality_fragment": {
    onConsume: (gameState, amt) => {
      gameState.skills["intellect"].drainBoost += 2 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Reality Fragment${amt > 1 ? "s" : ""}.<br>Increased Intellect energy drain by ${200 * amt}%.`, backgroundColors["resource"]);
    },
    tooltip: "Reduces Intellect energy drain by 200%."
  },
  "interdimensional_ore": {
    onConsume: (gameState, amt) => {
      const serenityGainPotential = ((gameState.bestCompletedZone ** gameState.serenityGainZoneExponent) / gameState.resetsForBestZone)
      gameState.serenity += serenityGainPotential * 0.025 * amt;
      showMessage(`Used ${amt} Dimensional Ore${amt > 1 ? "s" : ""}.<br>Gained ${formatNumber(serenityGainPotential * 0.025 * amt)} Serenity.`, backgroundColors["resource"]);
      showSerenityIfUnlocked();
    },
    tooltip: "Instantly gain 2.5% of base potential Serenity.<br>Does not include any multipliers."
  },
  "master_ball": {
    onConsume: (gameState, amt) => {
      gameState.numMasterBalls += amt;
      if(gameState.soundEnabled) masterBallSound.play();
      showMessage(`Used ${amt} Master Ball${amt > 1 ? "s" : ""}.<br>Will capture the next ${amt > 1 ? amt + " bosses" : "boss"} attunement${amt > 1 ? "s" : ""}.`, backgroundColors["resource"]);
      updateActiveResourcesOverlay();
    },
    tooltip: "Use to capture the attunement of the next boss you defeat.<br>Each boss is attuned to a different skill - attunements are now shown on hover info.<br>Capturing attunement will do the following:<br>1. Increase the skill's level by 1-10 (random).<br>2. Increase the skill's speed by 100%.<br><br>Cannot be created by Infinity Gauntlet or Stardust."
  },
  "rinnegan": {
    onConsume: (gameState, amt) => {
      // Play the rinnegan sound.
      if (gameState.soundEnabled) rinneganSound.play();
      // Save the original sound setting and then disable sound.
      const originalSoundSetting = gameState.soundEnabled;
      gameState.soundEnabled = false;

      // Loop over each held resource except rinnegan
      for (const resName in gameState.resources) {
        if (resName === "rinnegan") continue;
        const heldAmt = gameState.resources[resName];
        if (heldAmt > 0 && resourceActions[resName] && typeof resourceActions[resName].onConsume === "function") {
          resourceActions[resName].onConsume(gameState, 1);
        }
      }

      // Restore sound setting so future sounds will play normally.
      gameState.soundEnabled = originalSoundSetting;

      showMessage(`Used ${amt} Rinnegan${amt > 1 ? "s" : ""}.<br>Applied effects of every held resource.`, backgroundColors["resource"]);

      unlockAchievement("Rinnegan");

    },
    tooltip: "Use to apply the effects of 1 of every held resource.<br>Does not consume those resources."
  }



};

const EXCLUDED_AUTO_RESOURCES = new Set(["cybernetic_armor", "infinity_gauntlet", "stardust", "cosmic_shard","atomic_particle","energy_core","googol","radiance", "time_fragment", "master_ball", "rinnegan"]);

const achievements = [
  { name: "Bookworm", description: "Click all the buttons on main settings page.", img: "images/achievements/bookworm.jpg" },
  { name: "That Was Easy", description: "Advance to Zone 2.", img: "images/achievements/that_was_easy.jpg" },
  { name: "Toggler", description: "Toggle a perk to disable it.", img: "images/achievements/toggler.jpg" },
  { name: "Baby Steps", description: "Full clear Zone 3.", img: "images/achievements/baby_steps.jpg" },
  { name: "Take a Breather", description: "Pause a boss fight.", img: "images/achievements/take_a_breather.jpg" },
  { name: "Mano a Mano", description: "Defeat Agent Smith without using any resources.", img: "images/achievements/mano_a_mano.jpg" },
  { name: "Wasted Armor", description: "Use cybernetic armor to make an energy elixir.", img: "images/achievements/wasted_armor.jpg" },
  { name: "Certified Turtle", description: "Have at least 4 cybernetic armors left after energy reset.", img: "images/achievements/certified_turtle.jpg" },
  { name: "Stockpile", description: "Reach zone 10 without using any resources and holding over 100 resources.", img: "images/achievements/stockpile.jpg" },
  { name: "Postpone Inevitable", description: "Energy reset with over 8990 copium.", img: "images/achievements/postpone_inevitable.jpg" },
  { name: "Not Delusional", description: "Reach your max delusion value exactly.", img: "images/achievements/not_delusional.jpg" },
  { name: "Second Wind", description: "After hitting critically low energy, get back up above starting energy.", img: "images/achievements/second_wind.jpg" },
  { name: "First Prestige", description: "Complete your first Prestige.", img: "images/achievements/first_prestige.jpg" },
  { name: "Empty Pockets", description: "Reach Zone 15 without any resources (used or held).", img: "images/achievements/empty_pockets.jpg" },
  { name: "Mondo Cool", description: "Defeat Vegeta with 0 copium.", img: "images/achievements/mondo_cool.jpg" },
  { name: "Mega Push", description: "Copium reset with exactly 10 inifinity gauntlets and nothing else.", img: "images/achievements/mega_push.jpg" },
  { name: "Seven", description: "Prestige with zone 7 being your best zone.", img: "images/achievements/seven.jpg" },
  { name: "Cool Little Brother", description: "Defeat Big Brother after having only used sunglasses.", img: "images/achievements/cool_little_brother.jpg" },
  { name: "Jedi Master", description: "Using 1 lightsaber at a time, have it return 5 times in a row.", img: "images/achievements/jedi_master.jpg" },
  { name: "Lucky", description: "Produce at least 14 resources at once.", img: "images/achievements/lucky.jpg" },
  { name: "Take down the Doctor", description: "Defeat Doctor Manhattan while holding atomic particle (unused).", img: "images/achievements/take_down_the_doctor.jpg" },
  { name: "Amnesia", description: "Lose over 10K knowledge in a single copium reset.", img: "images/achievements/amnesia.jpg" },
  { name: "What XP?", description: "Defeat Chuck Norris after having used an energy core.", img: "images/achievements/what_xp.jpg" },
  { name: "Instant Expert", description: "Advanced Potion Making without having seen any of those potions.", img: "images/achievements/instant_expert.jpg" },
  { name: "Delusional", description: "Delusion reset at over 50K delusion.", img: "images/achievements/delusional.jpg" },
  { name: "Cybernetic Overload", description: "Gain over 100 starting energy from cybernetic implants in one run.", img: "images/achievements/cybernetic_overload.jpg" },
  { name: "Apothecary", description: "Hold over 200 Energy Elixirs in your inventory at once.", img: "images/achievements/apothecary.jpg" },
  { name: "Big Game Hunter", description: "Slay Godzilla without battling any previous bosses.", img: "images/achievements/big_game_hunter.jpg" },
  { name: "I'm Flying", description: "Reach zone 11 with zero energy resets.", img: "images/achievements/im_flying.jpg" },
  { name: "69 K?", description: "Gain at least 69k serenity in one prestige.", img: "images/achievements/69.jpg" },
  { name: "Googolplex", description: "Try to hold over 9 Googols in your inventory at once.", img: "images/achievements/googolplex.jpg" },
  { name: "Asymptote", description: "Use radiance when 2 unfinished tasks are above 90% complete.", img: "images/achievements/asymptote.jpg" },
  { name: "Attunement", description: "Unlock the Master Ball.", img: "images/achievements/attunement.jpg" },
  { name: "Rinnegan", description: "Use the power of Rinnegan.", img: "images/achievements/rinnegan.jpg" },
  { name: "420", description: "Prestige 420 times.", img: "images/achievements/420.jpg" },
];

const achievementsMap = new Map();
achievements.forEach(ach => achievementsMap.set(ach.name, ach));

const SERENITY_UPGRADES = {
  unlockables: {
    "Discover Serenity": {
      "Complete Workaholic": { 
        cost: 1,
        description: "On Prestige, start with completionist and workaholic perks unlocked."
      },
      "Delusion Enjoyer": {
        cost: 10,
        description: "Multiply Knowledge gain by percentage equal to current level of Delusion (min 100%)."
      },
      "Resource Consumer": { 
        cost: 25,
        description: "Adds toggle for auto consuming resources.<br>Only consumes resources that affect whole run."
      },
      "Instant Simulation": { 
        cost: 50,
        description: "On Prestige, start with Self Operating Gadget and Simulation Engine unlocked,<br>fully cleared zones and automation settings preserved."
      }
    },

    "Embrace Stillness": {
      "Stronger Mech": {
        cost: 75,
        description: "Basic Mech gives +100 energy instead of +25.<br>Must be purchased before getting perk."
      },
      "Smarter Automation": {
        cost: 100,
        description: "Automation order can now be fine tuned for each zone.<br>Enable automation for tasks in order you want them to run."
      },
      "Copiouser Alchemist": {
        cost: 200,
        description: "Copious Alchemist reduces Copium drain by 80% instead of 60%."
      },
      "Gacha Overdrive": {
        cost: 500,
        description: "Gacha Machine produces triple resources instead of double."
      }
    },

    "Transcend Chaos": { 
      "Resource Guru": {
        cost: 1000,
        description: "Add auto consume option that leaves 1 of every resource<br>and on Prestige, start with growth miracle perk unlocked."
      },
      "Cognitive Cache": {
        cost: 2500,
        description: "Unlock 4 automation profile slots.<br>Click to Load, Right Click to Save (Hold on Mobile)"
      },
      "Kung Fu Master": {
        cost: 5000,
        description: "On Prestige, start with kung fu zen perk unlocked."
      },
      "Repurpose Perks": {
        cost: 25000,
        description: "Divide all energy drain by (# perks unlocked / 10)."
      },
      "Experience Junkie": {
        cost: 50000,
        description: "Triple effect of Workaholic and Celestial Light perks."
      },
      "Satoshi's Wallet": {
        cost: 250000,
        description: "Improves Crypto Wallet:<br>" +
                    "• Energy: 25% chance to gain 50 Energy (<del>was 5% chance to gain 25 Energy</del>)<br>" +
                    "• Knowledge: 10% chance to gain 50 Knowledge (<del>was 2.5% chance to gain 25 Knowledge</del>)<br>" +
                    "• Power: 5% chance to gain 50 Power (<del>was 0.5% chance to gain 25 Power</del>)<br>" +
                    "• Serenity: 2.5% chance to stash 2.5% of base potential Serenity<br>" +
                    "• Data Bit: 1% chance to find 1-10 (random) Data Bits"
      }

    },

    "Attain Equilibrium (not available yet)": { //30
    },

    "Become the Void (not available yet)": { //32
    }
  },

  infinite: {
    "Discover Serenity": {
      "Wisdom Seeker": { 
        initialCost: 2, 
        scaling: 1.24,
        description: "Increase all XP gains by 50% (additively)."
      },
      "Entropy Shield": { 
        initialCost: 1, 
        scaling: 1.7,
        description: "Reduce minimum energy drain by 2% (asymptotically).<br>This affects tasks that are completed instantly."
      },
      "Resource Saver": { 
        initialCost: 0.1,
        scaling: 1.42,
        description: "On Copium reset, keep one random random resource per level."
      },
      "Power Doubler": {
        initialCost: 2,
        scaling: 3.5,
        description: "Multiply power gained from defeating bosses by 2x (multiplicatively)."
      }
    },

    "Embrace Stillness": {
      "Game Speed": {
        initialCost: 5,
        scaling: 1.3,
        description: "Reduce game tick duration by 1% (asymptotically)."
      },
      "Starting Level": {
        initialCost: 1.5,
        scaling: 2,
        description: "Increase starting level of ALL skills after Prestige by +1."
      },
      "Better Elixirs": {
        initialCost: 2,
        scaling: 3.25,
        description: "Increase effect of Energy Elixir by +1."
      },
      "Zone Pusher": {
        initialCost: 4,
        scaling: 3.5,
        description: "Increase exponent of zone in serenity gain function by +0.1."
      }
    },

    "Transcend Chaos": {
      "Delusion Immune": {
        initialCost: 50,
        scaling: 1.18,
        description: "Increase max Delusion by 1000."
      },
      "1337 H4X0R": {
        initialCost: 133.7,
        scaling: 1.337,
        description: "Improve Noob Haxor energy drain reduction by 1% (asymptotically)."
      },
      "Greater Reactor": {
        initialCost: 200,
        scaling: 1.84,
        description: "Increase copium reactor starting energy gain by +1."
      },
      "Serenity Infusion": {
        initialCost: 500,
        scaling: 2.5,
        description: "Multiplies serenity gain by +1% * (highest fully completed zone)."
      },
      "Fortune's Favor": {
        initialCost: 777,
        scaling: 7,
        description: "Improve four leaf clover perk by +1% chance and +1 resource."
      },
      "Crystal Collector": {
        initialCost: 1000,
        scaling: 10,
        description: "Random Crystal gives +1 more level."
      }

    },

    "Attain Equilibrium (not available yet)": {
    },

    "Become the Void (not available yet)": {
    }
  }
};
