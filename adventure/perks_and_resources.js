const perkDescriptions = {
    brewmaster:             "Alchemy is 25% faster.",
    healthy_living:         "Reduce all energy drain by 25%.",
    completionist:          "Automatically continue tasks until max reps.",
    basic_mech:             "Increases starting Energy by 25.",
    double_timer:           "Allows running two tasks simultaneously.",
    noob_haxor:             "Reduce Hacking energy drain by 10%.",
    energetic_bliss:        "Doubles progress while energy is above 80%.",
    workaholic:             "All XP gains increased by 50%.",
    kung_fu_zen:            "All XP gains increased by 25%.<br>And decrease Charisma energy drain by 25%.",
    copium_reactor:         "Get +5 starting Energy for each Copium reset.",
    gacha_machine:          "25% chance to produce double resources.",
    futuristic_wrench:      "Mechanics drains 3x less energy.",
    luck_of_the_irish:      "1% chance to produce 77x resources.",
    simulation_engine:      "Unlock ability to automate zones after fully completing 10 times.",
    rex:                    "25x increased charisma XP gain.",
    copious_alchemist:      "Reduce Copium gain by 50%.",
    hoverboard:             "Increase travel speed by 200%.",
    reinforcement_learning: "5x increased AI Mastery XP gain.",
    immunity_device:        "Reduce minimum energy drain by 75%.",
    quantum_vitalizer:      "Get Zone/10 starting Energy for each Energy reset.",
    knowledge_preserver:    "Reduce Knowledge loss on copium reset by 80%.",
    neural_matrix:          "Reduce Quantum energy drain by 40%.",
    sandstorm:              "Reduce all skill XP scaling from 2% to 1.9%.",
    wise_mechanic:          "Knowledge also levels with and boosts Mechanics.",
    urban_warfare:          "Triples effect of Power.",
    master_of_ai:           "Remove AI Mastery from Delusion accumulation.",
    crypto_wallet:          "Each time you travel:<br>5% chance to gain 25 Energy<br>5% chance to lose 25 Copium<br>5% chance to lose 25 Delusion<br>2% chance to gain 25 Knowledge<br>0.1% chance to gain 25 Power",
    last_stand:             "Reduce all energy drain by 20%.",
  };

  /****************************************
   * RESOURCE ACTIONS & RENDERING
   ****************************************/
  const resourceActions = {
    "energy_elixir": {
      onConsume: (gameState, amt) => { gameState.energy += 3 * amt; updateEnergyDisplay(); updateTasksHoverInfo(); },
      tooltip: "Click to gain +3 Energy.<br>" + (("ontouchstart" in window || navigator.maxTouchPoints > 0) ? "Use above switch to consume all." : "Right-click to consume all.")
    },
    "magnifying_glass": {
      onConsume: (gameState, amt) => { gameState.skills["perception"].progressBoost += 0.05 * amt; updateSkillMultipliers(); updateSkillDisplay(); updateTasksHoverInfo(); },
      tooltip: "Boosts Perception speed by 5%.<br>All resources only take effect after they are consumed."
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
      onConsume: (gameState, amt) => { gameState.numCyberneticArmors += amt; updateTasksHoverInfo();},
      tooltip: "Reduces energy drain by 75% for next task."
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
          showMessage(formatStringForDisplay(randomSkillName) + " leveled up to " + skill.level + "!");
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
            gameState.copium = Math.max(gameState.copium - 1500, 0);
            updateCopiumDisplay();
          } else if (randVal > 0.3333){
            gameState.delusion = Math.max(gameState.delusion - 1500, 0);
            updateDelusionDisplay();
          } else {
            gameState.energy += 300;
            updateEnergyDisplay();
          }
        }
      },
      tooltip: "At random, either gain 300 Energy,<br>or reduce Copium by 1500<br>or reduce Delusion by 1500."
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
  };