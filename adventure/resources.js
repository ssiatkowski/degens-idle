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
    copium_reactor:         "Triple starting Energy gained for each Copium reset.",
    gacha_machine:          "25% chance to produce double resources.",
    futuristic_wrench:      "Mechanics drains 3x less energy.",
    luck_of_the_irish:      "7% chance to produce 7x resources.",
    simulation_engine:      `Improves automation to allow selecting individual tasks.<br>${isMobile ? "Long press a task to toggle automation." : "Right click a task to toggle automation."}`,
    rex:                    "25x increased charisma XP gain.",
    copious_alchemist:      "Reduce Copium gain by 60%.",
    hoverboard:             "Increase travel speed by 4x.",
    reinforcement_learning: "5x increased AI Mastery XP gain.",
    immunity_device:        "Reduce minimum energy drain by 75%.<br>This affects tasks that are completed in one tick.",
    quantum_vitalizer:      "Get Zone / 10 starting Energy for each Energy reset.<br>Ex: energy reset on zone 8 gives +0.8 starting energy.",
    knowledge_preserver:    "Reduce Knowledge loss on copium reset by 80%.",
    neural_matrix:          "Reduce Quantum energy drain by 40%.",
    sandstorm:              "Reduce all skill XP scaling from 2% to 1.9%.",
    wise_mechanic:          "Knowledge also levels with and boosts Mechanics.",
    urban_warfare:          "Triples effect of Power.",
    master_of_ai:           "Remove AI Mastery from Delusion accumulation.",
    crypto_wallet:          "Each time you travel:<br>5% chance to gain 25 Energy<br>5% chance to lose 25 Copium<br>5% chance to lose 25 Delusion<br>2% chance to gain 25 Knowledge<br>0.1% chance to gain 25 Power",
    last_stand:             "Reduce all energy drain by 20%.",
    mechanical_genius:      "Remove Copium gain related to Mechanics.",
    growth_miracle:         "Increase # of resource generating tasks by 50%.",
    inspired_glow:          "Serenity Gain on Prestige increased by 25%.",
    quantum_teleportation:  "Travel is now affected by Power.",
    quantum_harmony:        "Whenever another skill gains xp, Quantum gains 1% of that xp.",
    cyber_boost:            "Each time Cybernetics levels up,<br>another random skill also levels up.",
    universal_alloy:        "Multiply Combat speed by square root of current Serenity (unspent).",
    forge_fervor:           "Reduce Combat energy drain by 3x.",

  };

const toggleablePerks = ["completionist", "copious_alchemist", "master_of_ai", "mechanical_genius"];

/****************************************
 * RESOURCE ACTIONS & RENDERING
 ****************************************/
let resourceActions = {
  "energy_elixir": {
    onConsume: (gameState, amt) => { 
      gameState.energy += gameState.elixirEnergy * amt;
      updateEnergyDisplay();
      updateTasksHoverInfo();
      //if(gameState.soundEnabled && amt >= 25) gulpSound.play(); 
      showMessage(`Used ${amt} Energy Elixir${amt > 1 ? "s" : ""}.<br>Gained ${gameState.elixirEnergy * amt} Energy.`);
    },
    tooltip: "Click to gain +3 Energy.<br>" + (("ontouchstart" in window || navigator.maxTouchPoints > 0) ? "Use above switch to consume all." : "Right-click to consume all.")
  },
  "magnifying_glass": {
    onConsume: (gameState, amt) => { 
      gameState.skills["perception"].progressBoost += 0.05 * amt; 
      updateSkillMultipliers(); 
      updateSkillDisplay(); 
      updateTasksHoverInfo(); 
      showMessage(`Used ${amt} Magnifying Glass${amt > 1 ? "es" : ""}.<br>Boosted Perception by ${5 * amt}%.`);
    },
    tooltip: "Boosts Perception speed by 5%.<br>All resources only take effect after they are consumed<br>and last for all zones until a reset!"
  },
  "goggles": {
    onConsume: (gameState, amt) => { 
      gameState.skills["alchemy"].drainBoost += 0.07 * amt; 
      updateSkillMultipliers(); 
      updateSkillDisplay(); 
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Goggles.<br>Reduced Alchemy energy drain by ${7 * amt}%.`);
    },
    tooltip: "Reduces Alchemy energy drain by 7%"
  },
  "cybernetic_potion": {
    onConsume: (gameState, amt) => { 
      gameState.skills["cybernetics"].drainBoost += 0.2 * amt; 
      updateSkillMultipliers(); 
      updateSkillDisplay(); 
      updateTasksHoverInfo(); 
      showMessage(`Used ${amt} Cybernetic Potion${amt > 1 ? "s" : ""}.<br>Reduced Cybernetics energy drain by ${20 * amt}%.`);
    },
    tooltip: "Reduces Cybernetics energy drain by 20%."
  },
  "cybernetic_armor": {
    onConsume: (gameState, amt) => { 
      gameState.numCyberneticArmors += amt; 
      updateTasksHoverInfo();
      if(gameState.soundEnabled) reinforcementSound.play();
      showMessage(`Used ${amt} Cybernetic Armor${amt > 1 ? "s" : ""}.<br>Reduced energy drain by 75% for next ${amt > 1 ? amt + " tasks" : "task"}`);
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
      showMessage(`Used ${amt} Amphetamine Pill${amt > 1 ? "s" : ""}.<br>Reduced Tinkering and Hacking energy drain by ${5 * amt}%.`);
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
      showMessage(`Used ${amt} Steroids${amt > 1 ? "s" : ""}.<br>Reduced Endurance and Combat energy drain by ${10 * amt}%.`);
    },
    tooltip: "Reduces Endurance and Combat energy drain by 10%."
  },
  "touchable_grass": {
    onConsume: (gameState, amt) => {
      gameState.copium = Math.max(gameState.copium - 100 * amt, 0);
      updateCopiumDisplay();
      showMessage(`Used ${amt} Touchable Grass${amt > 1 ? "es" : ""}.<br>Reduced Copium by ${100 * amt}.`);
    },
    tooltip: "Reduces Copium by 100."
  },
  "cool_sunglasses": {
    onConsume: (gameState, amt) => {
      gameState.skills["hacking"].drainBoost += 1 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Cool Sunglasses.<br>Reduced Hacking energy drain by ${100 * amt}%.`);
    },
    tooltip: "Reduces Hacking energy drain by 100%.<br>And Makes you look cool."
  },
  "omega_resonator": {
    onConsume: (gameState, amt) => {
      gameState.skills["combat"].progressBoost += 0.2 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Omega Resonator${amt > 1 ? "s" : ""}.<br>Boosted Combat speed by ${20 * amt}%.`);
    },
    tooltip: "Boosts Combat speed by 20%."
  },
  "shiny_helmet": {
    onConsume: (gameState, amt) => {
      gameState.skills["combat"].drainBoost += 1 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Shiny Helmet${amt > 1 ? "s" : ""}.<br>Reduced Combat energy drain by ${100 * amt}%.`);
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
      showMessage(`Used ${amt} Karate Belt${amt > 1 ? "s" : ""}.<br>Boosted Charisma speed by ${25 * amt}%. Reduced Negotiation energy drain by ${100 * amt}%.`);
    },
    tooltip: "Boosts Charisma speed by 25%.<br>And reduces Negotiation energy drain by 100%.<br>By letting them know you are a ninja."
  },
  "random_crystal": {
    onConsume: (gameState, amt) => {
      // Object to track how many times each skill was leveled up
      let groupedSkills = {};
      // Get all visible skills
      const visibleSkills = Object.keys(gameState.skills).filter(sName => gameState.skills[sName].visible);

      for (let i = 0; i < amt; i++) {
        // Choose a random visible skill
        const randomSkillName = visibleSkills[Math.floor(Math.random() * visibleSkills.length)];
        const skill = gameState.skills[randomSkillName];

        addXP(randomSkillName, 0, "", true, Math.pow(getSkillXpScaling(), skill.level - 1) - skill.xp);

        // Group the level-up for this skill
        groupedSkills[randomSkillName] = (groupedSkills[randomSkillName] || 0) + 1;
      }

      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();

      saveGameProgress();

      // Build a list of messages for the grouped skills
      let messages = [];
      for (const skillName in groupedSkills) {
        const count = groupedSkills[skillName];
        const skill = gameState.skills[skillName];
        // If leveled up more than once, add the "+<count>" indicator
        if (count > 1) {
          messages.push(`${formatStringForDisplay(skillName)} +${count} (Lvl ${skill.level})`);
        } else {
          messages.push(`${formatStringForDisplay(skillName)} (Lvl ${skill.level})`);
        }
      }

      // Display a single aggregated message
      showMessage(`Used ${amt} Random Crystal${amt > 1 ? "s" : ""}. Leveled up:<br>${messages.join("<br>")}.`);
    },
    tooltip: "Levels up a random skill to next level."
  },

  "one_ring": {
    onConsume: (gameState, amt) => {
      gameState.skills["quantum"].progressBoost += 5 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} One Ring${amt > 1 ? "s" : ""}.<br>Boosted Quantum speed by ${500 * amt}%.`);
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
      showMessage(`Used ${amt} Katana${amt > 1 ? "s" : ""}.<br>Boosted Combat speed by ${10 * amt}%. Reduced Perception energy drain by ${300 * amt}%.`);
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
      showMessage(`Used ${amt} Blades of Chaos.<br>Reduced Combat and Quantum energy drain by ${25 * amt}%.`);
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
      showMessage(`Used ${amt} Sanity Cleanser${amt > 1 ? "s" : ""}.<br>Reduced Delusion by ${totalReduced}.`);
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
      showMessage(`Used ${amt} Augment Fuel${amt > 1 ? "s" : ""}.<br>Reduced Copium by ${totalCopiumReduced} and Delusion by ${totalDelusionReduced}.`);
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
      showMessage(`Used ${amt} Saiyan Armor${amt > 1 ? "s" : ""}.<br>Boosted Combat speed and reduced energy drain by ${75 * amt}%.`);
    },
    tooltip: "Reduces Combat energy drain and boosts Combat speed by 75%.<br>"
  },
  "hoverboard_fuel": {
    onConsume: (gameState, amt) => {
      gameState.skills["travel"].progressBoost += 0.1 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Hoverboard Fuel${amt > 1 ? "s" : ""}.<br>Boosted Travel speed by ${10 * amt}%.`);
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
      showMessage(`Used ${amt} Surveillance Core${amt > 1 ? "s" : ""}.<br>Reduced energy drain by ${50 * amt}% for Perception, Intellect, Hacking, and Cybernetics.`);
    },
    tooltip: "Reduces energy drain by 50%<br>for Perception, Intellect, Hacking, and Cybernetics.<br>And brings about a surveillance state."
  },
  "puzzle_piece": {  
      onConsume: (gameState, amt) => {
          gameState.skills["omniscience"].progressBoost += 0.02 * amt;
          updateSkillMultipliers();
          updateSkillDisplay();
          updateTasksHoverInfo();
          showMessage(`Used ${amt} Puzzle Piece${amt > 1 ? "s" : ""}.<br>Boosted Omniscience speed by ${2 * amt}%.`);
        },
        tooltip: "Boosts Omniscience speed by 2%."
  },
  "celestial_blossom": {
    onConsume: (gameState, amt) => {
      gameState.numCelestialBlossoms += amt;
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Celestial Blossom${amt > 1 ? "s" : ""}.<br>Reduced Copium gain by ${amt}.`);
    },
    tooltip: "Reduces Copium gain by 1."
  },
  "infinity_gauntlet": {
    onConsume: (gameState, amt) => {
      Object.keys(gameState.resources).forEach(resource => {
        if (gameState.resources[resource] > 0 && resource !== "infinity_gauntlet") {
          addResource(resource, amt);
        }
      });
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Infinity Gauntlet${amt > 1 ? "s" : ""}.<br>Gained +1 of every held resource.`);
    },
    tooltip: "Gain +1 of every resource you currently have."
  },
  "stardust": {
    onConsume: (gameState, amt) => {
      // Get an array of resource names, excluding "infinity_gauntlet" and "stardust"
      const usedResources = Object.keys(gameState.resourcesUsed).filter(r => r !== "infinity_gauntlet" && r !== "stardust");
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
      
      showMessage(messageLines.join("<br>"));
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
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      let msg = `Used ${amt} Lightsaber${amt > 1 ? "s" : ""}.<br>All skills' speed increased by ${3 * amt}%.`;
      if (extraSpawned > 0) {
        msg += `<br>${extraSpawned} extra lightsaber${extraSpawned !== 1 ? "s" : ""} spawned!`;
      }
      showMessage(msg);
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
        const visibleSkills = Object.keys(gameState.skills).filter(s => gameState.skills[s].visible);
        if (visibleSkills.length === 0) continue;
        
        // Choose a random skill.
        const randomSkillName = visibleSkills[Math.floor(Math.random() * visibleSkills.length)];
        
        // Randomly choose which attribute to affect: speed (progressBoost) or energy drain (drainBoost).
        const effectType = Math.random() < 0.5 ? "speed" : "drain";
        
        // Generate a random effect percentage between -25 and +125.
        let effectPercent = Math.floor(Math.random() * 151) - 25;
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
          color = displayEffectPercent < 0 ? "green" : "red";
        } else {
          color = displayEffectPercent >= 0 ? "green" : "red";
        }
        
        let coloredEffect = `<span style="color: ${color};">${sign}${displayEffectPercent}%</span>`;
        let effectDescription = effectType === "speed" ? "speed" : "energy drain";
        messageLines.push(`${formatStringForDisplay(skillName)} ${effectDescription} changed by ${coloredEffect}.`);
      }
      
      showMessage(messageLines.join("<br>"));
    },
    tooltip: "Unexpectedly affect speed or energy drain of a random skill<br>by anywhere from -25% to +150%."
  },
  "adamantium": {
    onConsume: (gameState, amt) => {
      updateSkillDisplay();
    },
    tooltip: "Not implemented yet."
  },
  "nano_component": {
    onConsume: (gameState, amt) => {
      gameState.skills["charisma"].progressBoost += 0.15 * amt;
      gameState.skills["tinkering"].progressBoost += 0.15 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Nano Component${amt > 1 ? "s" : ""}.<br>Boosted speed by ${15 * amt}% for Charisma and Tinkering.`);
    },
    tooltip: "Boosts speed by 15% for Charisma and Tinkering."
  },
  "cosmic_shard": {
    onConsume: (gameState, amt) => { 
      gameState.numCosmicShards += amt; 
      updateTasksHoverInfo();
      if(gameState.soundEnabled) experienceSound.play();
      showMessage(`Used ${amt} Cosmic Shard${amt > 1 ? "s" : ""}.<br>5x experience gain next ${amt > 1 ? amt + " tasks" : "task"}`);
    },
    tooltip: "Increases experience gain by 5x for next task (one square).<br>Any task ending or pausing task will remove the shard.<br>Multiple uses stack with # of tasks, not with xp gain."
  },
  "celestial_ore": {
    onConsume: (gameState, amt) => {
      gameState.skills['endurance'].drainBoost += 10 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
      showMessage(`Used ${amt} Celestial Ore${amt > 1 ? "s" : ""}.<br>Reduced Endurance energy drain by ${1000 * amt}%.`);
    },
    tooltip: "Reduces energy drain by 1000% for Endurance."
  }
};

const EXCLUDED_AUTO_RESOURCES = new Set(["cybernetic_armor", "infinity_gauntlet", "stardust", "cosmic_shard"]);

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
      "Copiouser Alchemist": {
        cost: 200,
        description: "Copious Alchemist reduces Copium drain by 80% instead of 60%."
      }
    },
    "Transcend Chaos (not available yet)": {
    },
    "Attain Equilibrium (not available yet)": {
    },
    "Become the Void (not available yet)": {
    }
  },

  infinite: {
    "Discover Serenity": {
      "Wisdom Seeker": { 
        initialCost: 2, 
        scaling: 1.125,
        description: "Increase all XP gains by 50% (additively)."
      },
      "Entropy Shield": { 
        initialCost: 1, 
        scaling: 1.6,
        description: "Reduce minimum energy drain by 2% (multiplicatively).<br>This affects tasks that are completed instantly."
      },
      "Resource Saver": { 
        initialCost: 0.1,
        scaling: 1.11,
        description: "On Copium reset, keep one random random resource per level."
      },
      "Power Doubler": {
        initialCost: 2,
        scaling: 3,
        description: "Multiply power gained from defeating bosses by 2x (multiplicatively)."
      }
    },

    "Embrace Stillness": {
      "Better Elixirs": {
        initialCost: 2,
        scaling: 2,
        description: "Increase effect of Energy Elixir by +1."
      },
      "Game Speed": {
        initialCost: 5,
        scaling: 3,
        description: "Reduce game tick duration by 1% (multiplicatively)."
      }
    },
    "Transcend Chaos (not available yet)": {
    },
    "Attain Equilibrium (not available yet)": {
    },
    "Become the Void (not available yet)": {
    }
  }
};
