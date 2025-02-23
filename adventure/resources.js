const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

const perkDescriptions = {
    brewmaster:             "Alchemy is 25% faster.",
    healthy_living:         "Reduce all energy drain by 25%.",
    completionist:          "Automatically continue tasks until max reps.",
    basic_mech:             "Increases starting Energy by 25.",
    self_operating_gadget:  "Unlock ability to automate zones after fully completing 10 times.",
    double_timer:           "Allows running two tasks simultaneously.",
    noob_haxor:             "Reduce Hacking energy drain by 10%.",
    energetic_bliss:        "While energy is above 80%, task progress is doubled.",
    workaholic:             "All XP gains increased by 50%.",
    kung_fu_zen:            "All XP gains increased by 25%.<br>And decrease Charisma energy drain by 25%.",
    copium_reactor:         "Triple starting Energy gained for each Copium reset.",
    gacha_machine:          "25% chance to produce double resources.",
    futuristic_wrench:      "Mechanics drains 3x less energy.",
    luck_of_the_irish:      "7% chance to produce 7x resources.",
    simulation_engine:      `Improves automation to allow selecting individual tasks.<br>${isMobile ? "Long press a task to toggle automation." : "Right click a task to toggle automation."}`,
    rex:                    "25x increased charisma XP gain.",
    copious_alchemist:      "Reduce Copium gain by 50%.",
    hoverboard:             "Increase travel speed by 200%.",
    reinforcement_learning: "5x increased AI Mastery XP gain.",
    immunity_device:        "Reduce minimum energy drain by 75%.",
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
    inspired_glow:          "Serenity Gain on Prestige increased by 25%.<br>(not implemented yet)", //TODO: implement
    quantum_harmony:        "(not implemented yet)", //TODO: implement
  };

const toggleablePerks = ["completionist", "copious_alchemist", "master_of_ai", "mechanical_genius"];

/****************************************
 * RESOURCE ACTIONS & RENDERING
 ****************************************/
const resourceActions = {
  "energy_elixir": {
    onConsume: (gameState, amt) => { 
      gameState.energy += 3 * amt;
      updateEnergyDisplay();
      updateTasksHoverInfo();
      if(gameState.soundEnabled && amt >= 25) gulpSound.play(); 
    },
    tooltip: "Click to gain +3 Energy.<br>" + (("ontouchstart" in window || navigator.maxTouchPoints > 0) ? "Use above switch to consume all." : "Right-click to consume all.")
  },
  "magnifying_glass": {
    onConsume: (gameState, amt) => { gameState.skills["perception"].progressBoost += 0.05 * amt; updateSkillMultipliers(); updateSkillDisplay(); updateTasksHoverInfo(); },
    tooltip: "Boosts Perception speed by 5%.<br>All resources only take effect after they are consumed<br>and last for all zones until a reset!"
  },
  "goggles": {
    onConsume: (gameState, amt) => { gameState.skills["alchemy"].drainBoost += 0.07 * amt; updateSkillMultipliers(); updateSkillDisplay(); updateTasksHoverInfo();},
    tooltip: "Reduces Alchemy energy drain by 7%"
  },
  "cybernetic_potion": {
    onConsume: (gameState, amt) => { gameState.skills["cybernetics"].drainBoost += 0.2 * amt; updateSkillMultipliers(); updateSkillDisplay(); updateTasksHoverInfo(); },
    tooltip: "Reduces Cybernetics energy drain by 20%."
  },
  "cybernetic_armor": {
    onConsume: (gameState, amt) => { 
      gameState.numCyberneticArmors += amt; 
      updateTasksHoverInfo();
      if(gameState.soundEnabled) reinforcementSound.play();
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
    },
    tooltip: "Reduces Endurance and Combat energy drain by 10%."
  },
  "touchable_grass": {
    onConsume: (gameState, amt) => {
      gameState.copium = Math.max(gameState.copium - 100 * amt, 0);
      updateCopiumDisplay();
    },
    tooltip: "Reduces Copium by 100."
  },
  "cool_sunglasses": {
    onConsume: (gameState, amt) => {
      gameState.skills["hacking"].drainBoost += 1 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
    },
    tooltip: "Reduces Hacking energy drain by 100%.<br>And Makes you look cool."
  },
  "omega_resonator": {
    onConsume: (gameState, amt) => {
      gameState.skills["combat"].progressBoost += 0.2 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
    },
    tooltip: "Boosts Combat speed by 20%."
  },
  "shiny_helmet": {
    onConsume: (gameState, amt) => {
      gameState.skills["combat"].drainBoost += 1 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
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
    },
    tooltip: "Boosts Charisma speed by 25%.<br>And reduces Negotiation energy drain by 100%.<br>By letting them know you are a ninja."
  },
  "random_crystal": {
    onConsume: (gameState, amt) => {
      for (let i = 0; i < amt; i++) {
        // Get all visible skills
        const visibleSkills = Object.keys(gameState.skills).filter(sName => gameState.skills[sName].visible);
        // Choose a random visible skill
        const randomSkillName = visibleSkills[Math.floor(Math.random() * visibleSkills.length)];
        const skill = gameState.skills[randomSkillName];

        skill.xp = 0;
        skill.level++;
        showMessage(formatStringForDisplay(randomSkillName) + " leveled up to " + skill.level);
      }
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
    },
    tooltip: "Levels up a random skill to next level."
  },
  "one_ring": {
    onConsume: (gameState, amt) => {
      gameState.skills["quantum"].progressBoost += 5 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
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
    },
    tooltip: "Oddly enough, only boosts Combat speed by 10%.<br>But also reduces energy drain of Perception by 300%."
  },
  "blades_of_chaos": {
    onConsume: (gameState, amt) => {
      gameState.skills["combat"].drainBoost += 0.2 * amt;
      gameState.skills["quantum"].drainBoost += 0.2 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
    },
    tooltip: "Reduces Combat and Quantum energy drain by 25%.<br>While looking like a badass."
  },
  "sanity_cleanser": {
    onConsume: (gameState, amt) => {
      for (let i = 0; i < amt; i++) {
        gameState.delusion = Math.max(gameState.delusion - Math.floor(Math.random() * 200), 0);
      }
      updateDelusionDisplay();
    },
    tooltip: "Reduces Delusion by a random number between 1 and 200."
  },
  "augment_fuel": {
    onConsume: (gameState, amt) => {
      for (let i = 0; i < amt; i++) {
        if (Math.random() < 0.5) {
          gameState.copium = Math.max(gameState.copium - 75, 0);
          updateCopiumDisplay();
        } else {
          gameState.delusion = Math.max(gameState.delusion - 75, 0);
          updateDelusionDisplay();
        }
      }
    },
    tooltip: "At random, reduce Copium or Delusion by 75."
  },
  "beating_heart": {
    onConsume: (gameState, amt) => {
      for (let i = 0; i < amt; i++) {
        const randVal = Math.random();
        if (randVal > 0.6667) {
          gameState.copium = Math.max(gameState.copium - 1000, 0);
          updateCopiumDisplay();
        } else if (randVal > 0.3333){
          gameState.delusion = Math.max(gameState.delusion - 1000, 0);
          updateDelusionDisplay();
        } else {
          gameState.energy += 100;
          updateEnergyDisplay();
        }
      }
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
    },
    tooltip: "Reduces Combat energy drain and boosts Combat speed by 75%.<br>"
  },
  "hoverboard_fuel": {
    onConsume: (gameState, amt) => {
      gameState.skills["travel"].progressBoost += 0.1 * amt;
      updateSkillMultipliers();
      updateSkillDisplay();
      updateTasksHoverInfo();
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
    },
    tooltip: "Reduces energy drain by 50%<br>for Perception, Intellect, Hacking, and Cybernetics.<br>And brings about a surveillance state."
  },
  "puzzle_piece": {  
      onConsume: (gameState, amt) => {
          gameState.skills["omniscience"].progressBoost += 0.02 * amt;
          updateSkillMultipliers();
          updateSkillDisplay();
          updateTasksHoverInfo();
        },
        tooltip: "Boosts Omniscience speed by 2%."
  },
  "celestial_blossom": {
    onConsume: (gameState, amt) => {
      gameState.numCelestialBlossoms += amt;
      updateTasksHoverInfo();
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
    },
    tooltip: "Gain +1 of every resource you currently have."
  },
  "stardust": {
    onConsume: (gameState, amt) => {
      // Get an array of resource names, excluding "infinity_gauntlet"
      const usedResources = Object.keys(gameState.resourcesUsed).filter(r => r !== "infinity_gauntlet" && r !== "stardust");
      // For each stardust unit consumed...
      for (let i = 0; i < amt; i++) {
        if (usedResources.length > 0) {
          const randomIndex = Math.floor(Math.random() * usedResources.length);
          const randomResource = usedResources[randomIndex];
          addResource(randomResource, 1);
        }
      }
      saveGameProgress();
    },
    tooltip: "Create 1 of a random resource that you used this run.<br>Cannot create Infinity Gauntlet."
  },
  "lightsaber": {
    onConsume: (gameState, amt) => {
      updateSkillDisplay();
    },
    tooltip: "Not implemented yet."
  },
  "quantum_residue": {
    onConsume: (gameState, amt) => {
      updateSkillDisplay();
    },
    tooltip: "Not implemented yet."
  },
  "adamantium": {
    onConsume: (gameState, amt) => {
      updateSkillDisplay();
    },
    tooltip: "Not implemented yet."
  },
};

const EXCLUDED_AUTO_RESOURCES = new Set(["cybernetic_armor", "infinity_gauntlet"]);

const SERENITY_UPGRADES = {
  unlockables: {
    "Discover Serenity": {
      "Always a Workaholic": { 
        cost: 1,
        description: "On Prestige, start with workaholic unlocked."
      },
      "Delusion Enjoyer": {
        cost: 10,
        description: "Multiply Knowledge gain by percentage equal to current level of Delusion (min 100%)."
      },
      "Resource Consumer": { 
        cost: 100,
        description: "Adds toggle for auto consuming resources.<br>Only consumes resources that affect whole run."
      },
      "Instant Simulation": { 
        cost: 1000,
        description: "On Prestige, start with Simulation Engine unlocked<br>and all zones ready at 10 Full Clears."
      }
    },

    "Embrace Stillness (not available yet)": {
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
        initialCost: 1, 
        scaling: 1.2,
        description: "Increase all XP gains by 50% (additively)."
      },
      "Entropy Shield": { 
        initialCost: 1, 
        scaling: 2,
        description: "Reduce minimum energy drain by 2% (multiplicatively).<br>This affects tasks that are completed instantly."
      },
      "Resource Saver": { 
        initialCost: 1,
        scaling: 1.1,
        description: "On Copium reset, keep one random random resource per level."
      },
      "Power Doubler": {
        initialCost: 2,
        scaling: 5,
        description: "Multiply power gained from defeating bosses by 2x (multiplicatively)."
      }
    },

    "Embrace Stillness": {
    },
    "Transcend Chaos": {
    },
    "Attain Equilibrium": {
    },
    "Become the Void": {
    }
  }
};
