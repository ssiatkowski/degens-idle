const CURRENT_GAME_VERSION = "v0.02";

(function() {
  /****************************************
   * DEFINITIONS: Skills affecting knowledge, copium, delusion
   ****************************************/
  const knowledgeSkills = ["tinkering", "intellect", "hacking"];
  const powerSkills     = ["combat", "endurance"];
  const copiumSkills    = ["endurance", "alchemy", "mechanics"];
  const delusionSkills  = ["charisma", "perception", "aiMastery", "negotiation", "omniscience"];

  /****************************************
   * INITIAL STATE
   ****************************************/
  function getInitialGameState() {
    return {
      energy: 100,
      startingEnergy: 100,
      copium: 0,
      delusion: 0,
      resources: {},
      knowledge: 0,
      power: 0,
      knowledgeUnlocked: false,
      powerUnlocked: false,
      copiumUnlocked: false,
      delusionUnlocked: false,
      // Note: Default boost values are now 1.
      skills: {
        endurance:   { level: 1, xp: 0, visible: true,  energyDrain: 2,   progressBoost: 1, drainBoost: 1, xpGainFactor: 1 },
        tinkering:   { level: 1, xp: 0, visible: true,  energyDrain: 2.5, progressBoost: 1, drainBoost: 1, xpGainFactor: 1 },
        charisma:    { level: 1, xp: 0, visible: true,  energyDrain: 1.5, progressBoost: 1, drainBoost: 1, xpGainFactor: 1 },
        alchemy:     { level: 1, xp: 0, visible: true,  energyDrain: 10,  progressBoost: 1, drainBoost: 1, xpGainFactor: 1 },
        travel:      { level: 1, xp: 0, visible: false,  energyDrain: 1,   progressBoost: 1, drainBoost: 1, xpGainFactor: 1.5 },
        intellect:   { level: 1, xp: 0, visible: false, energyDrain: 3,   progressBoost: 1, drainBoost: 1, xpGainFactor: 0.5 },
        perception:  { level: 1, xp: 0, visible: false, energyDrain: 2,   progressBoost: 1, drainBoost: 1, xpGainFactor: 0.3 },
        mechanics:   { level: 1, xp: 0, visible: false, energyDrain: 5,   progressBoost: 1, drainBoost: 1, xpGainFactor: 0.1 },
        combat:      { level: 1, xp: 0, visible: false, energyDrain: 20,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.01 },
        hacking:     { level: 1, xp: 0, visible: false, energyDrain: 7,   progressBoost: 1, drainBoost: 1, xpGainFactor: 0.01 },
        cybernetics: { level: 1, xp: 0, visible: false, energyDrain: 12,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.03 },
        negotiation: { level: 1, xp: 0, visible: false, energyDrain: 20,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.01 },
        aiMastery:   { level: 1, xp: 0, visible: false, energyDrain: 15,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.001 },
        quantum:     { level: 1, xp: 0, visible: false, energyDrain: 50,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.0001 },
        omniscience: { level: 1, xp: 0, visible: false, energyDrain: 100, progressBoost: 1, drainBoost: 1, xpGainFactor: 0.00001 }
      },
      perks: {},
      numEnergyResets: 0,
      numCopiumResets: 0,
      numDelusionResets: 0,
      numCyberneticArmors: 0,
      cyberneticArmorTaskRunning: false,
      zoneFullCompletes: {},
      autoRun: false,
      automationMode: "zone",
      gameVersion: CURRENT_GAME_VERSION
    };
  }

  /****************************************
   * GLOBALS & SETTINGS
   ****************************************/
  let gameState = getInitialGameState();
  let currentZoneIndex = 0;
  let currentTasks = [];
  const tickDuration   = 100;
  const xpScale        = 0.001; // XP per tick
  const skillXpScaling = 1.02;
  const perkDescriptions = {
    brewmaster:             "Alchemy is 25% faster.",
    healthy_living:         "Reduce energy drain by 25%.",
    completionist:          "Automatically continue tasks until max reps.",
    basic_mech:             "Increases starting Energy by 25.",
    double_timer:           "Allows running two tasks simultaneously.",
    energetic_bliss:        "Doubles progress while energy is above 80%.",
    workaholic:             "All XP gains increased by 50%.",
    copium_reactor:         "Get +5 starting Energy for each Copium reset.",
    gacha_machine:          "25% chance to produce double resources.",
    futuristic_wrench:      "Mechanics is 5x faster.",
    luck_of_the_irish:      "1% chance to produce 77x resources.",
    simulation_engine:      "Unlock ability to automate zones after fully completing 10 times.",
    rex:                    "25x increased charisma XP gain.",
    copious_alchemist:      "Reduce Copium gain by 50%.",
    hoverboard:             "Increase travel speed by 200%.",
    reinforcement_learning: "4x increased AI Mastery XP gain.",
  };

  /****************************************
   * RESOURCE ACTIONS & RENDERING
   ****************************************/
  const resourceActions = {
    "energy_elixir": {
      onConsume: amt => { gameState.energy += 3 * amt; updateEnergyDisplay(); updateTasksHoverInfo(); },
      tooltip: "Click to gain +3 Energy per Energy Elixir.<br>Right-click or Hold to consume all."
    },
    "magnifying_glass": {
      onConsume: amt => { gameState.skills["perception"].progressBoost += 0.05 * amt; updateSkillDisplay(); updateTasksHoverInfo(); },
      tooltip: "Click to boost Perception by 5% per Magnifying Glass.<br>Right-click or Hold to consume all."
    },
    "goggles": {
      onConsume: amt => { gameState.skills["alchemy"].drainBoost += 0.05 * amt; updateSkillDisplay(); updateTasksHoverInfo();},
      tooltip: "Click to reduce Alchemy energy drain by 5% per Goggles.<br>Right-click or Hold to consume all."
    },
    "cybernetic_potion": {
      onConsume: amt => { gameState.skills["cybernetics"].drainBoost += 0.2 * amt; updateSkillDisplay(); updateTasksHoverInfo(); },
      tooltip: "Click to reduce Cybernetics energy drain by 20% per Cybernetic Potion.<br>Right-click or Hold to consume all."
    },
    "cybernetic_armor": {
      onConsume: amt => { gameState.numCyberneticArmors += amt; updateTasksHoverInfo();  updateTasksHoverInfo();},
      tooltip: "Click to reduce energy drain by 75% for next task.<br>Stacks with number of tasks, not drain on single task.<br>Right-click or Hold to consume all."
    },
    "amphetamine_pill": {
      onConsume: amt => {
        gameState.skills["tinkering"].progressBoost += 0.1 * amt;
        gameState.skills["hacking"].progressBoost += 0.1 * amt;
        updateSkillDisplay();
        updateTasksHoverInfo();
      },
      tooltip: "Click to boost Tinkering and Hacking by 10% per Amphetamine Pill.<br>Right-click or Hold to consume all."
    },
    "steroids": {
      onConsume: amt => {
        gameState.skills["endurance"].drainBoost += 0.1 * amt;
        gameState.skills["combat"].drainBoost += 0.1 * amt;
        updateSkillDisplay();
        updateTasksHoverInfo();
      },
      tooltip: "Click to reduce Endurance and Combat energy drain by 10% per Steroid.<br>Right-click or Hold to consume all."
    },
    "touchable_grass": {
      onConsume: amt => {
        gameState.copium = Math.max(gameState.copium - 100 * amt, 0);
        updateCopiumDisplay();
      },
      tooltip: "Click to reduce Copium by 100 per Touchable Grass.<br>Right-click or Hold to consume all."
    },
    "cool_sunglasses": {
      onConsume: amt => {
        gameState.skills["hacking"].progressBoost += 1 * amt;
        updateSkillDisplay();
        updateTasksHoverInfo();
      },
      tooltip: "Click to boost Hacking by 100% per Cool Sunglasses.<br>Right-click or Hold to consume all."
    },
    "omega_resonator": {
      onConsume: amt => {
        gameState.skills["combat"].progressBoost += 0.2 * amt;
        updateSkillDisplay();
        updateTasksHoverInfo();
      },
      tooltip: "Click to boost Combat speed by 20% per Omega Resonator.<br>Right-click or Hold to consume all."
    },
    "shiny_helmet": {
      onConsume: amt => {
        gameState.skills["combat"].drainBoost += 1 * amt;
        updateSkillDisplay();
        updateTasksHoverInfo();
      },
      tooltip: "Click to reduce Combat energy drain by 100% per Shiny Helmet.<br>Right-click or Hold to consume all."
    },
    "karate_belt": {
      onConsume: amt => {
        gameState.skills["negotiation"].progressBoost += 1 * amt;
        updateSkillDisplay();
        updateTasksHoverInfo();
      },
      tooltip: "Click to boost Negotiation by 100% per Karate Belt.<br>Right-click or Hold to consume all."
    },
    "random_crystal": {
      onConsume: amt => {
        for (let i = 0; i < amt; i++) {
          // Get all visible skills
          const visibleSkills = Object.keys(gameState.skills).filter(sName => gameState.skills[sName].visible);
          // Choose a random visible skill
          const randomSkillName = visibleSkills[Math.floor(Math.random() * visibleSkills.length)];
          const skill = gameState.skills[randomSkillName];
          // Calculate XP needed to reach next level:
          const requiredXP = Math.pow(skillXpScaling, skill.level - 1);
          const xpNeeded = requiredXP - skill.xp;
          // Level up the skill by giving it the needed XP
          addXP(randomSkillName, xpNeeded);
        }
        updateSkillDisplay();
        updateTasksHoverInfo();
      },
      tooltip: "Click to level a random skill to next level for each Random Crystal.<br>Right-click or Hold to consume all."
    },
    "one_ring": {
      onConsume: amt => {
        gameState.skills["quantum"].progressBoost += 5 * amt;
        updateSkillDisplay();
        updateTasksHoverInfo();
      },
      tooltip: "Click to boost Quantum by 500% per One Ring.<br>Right-click or Hold to consume all."
    },

  };
  function consumeResource(name, amt) {
    if (!gameState.resources[name] || gameState.resources[name] < amt) return;
    gameState.resources[name] -= amt;
    showMessage(`Consumed ${amt} ${name}.`);
    renderResources();
  }
  function addResource(name, amt) {
    if (!gameState.resources[name]) gameState.resources[name] = 0;
    gameState.resources[name] += amt;
    renderResources();
  }
  function renderResources() {
    const grid = document.getElementById("resourcesGrid");
    if (!grid) return;
    grid.innerHTML = "";
    Object.keys(gameState.resources).forEach(rName => {
      const count = gameState.resources[rName] || 0;
      if (count <= 0) return;
      const div = document.createElement("div");
      div.className = "resource-item";
      
      // Create the image and prevent selection/dragging.
      const img = document.createElement("img");
      img.src = "images/" + rName + ".jpg";
      img.alt = rName;
      img.style.pointerEvents = "none";
      img.style.userSelect = "none";          // Prevent text selection.
      img.setAttribute("draggable", "false");  // Prevent dragging.
      
      const cnt = document.createElement("div");
      cnt.className = "resource-count";
      cnt.textContent = count;
      
      // Set tooltip text.
      div.setAttribute("data-tooltip", (resourceActions[rName] && resourceActions[rName].tooltip)
        ? resourceActions[rName].tooltip
        : "Click to consume 1 unit. Right-click or Hold to consume all.");
  
      // Left-click: consume 1 unit.
      div.addEventListener("click", () => {
        if (gameState.resources[rName] > 0) {
          consumeResource(rName, 1);
          if (resourceActions[rName] && resourceActions[rName].onConsume) {
            resourceActions[rName].onConsume(1);
            if (gameState.resources[rName] == 0) {
              hideTooltip();
            }
          }
        }
      });
  
      // Right-click: consume all.
      div.addEventListener("contextmenu", e => {
        e.preventDefault();
        if (gameState.resources[rName] > 0) {
          const amt = gameState.resources[rName];
          consumeResource(rName, amt);
          if (resourceActions[rName] && resourceActions[rName].onConsume) {
            resourceActions[rName].onConsume(amt);
            hideTooltip();
          }
        }
      });
  
      // Mobile: long press (0.8 second) consumes all.
      let touchTimeout;
      div.addEventListener("touchstart", e => {
        touchTimeout = setTimeout(() => {
          if (gameState.resources[rName] > 0) {
            const amt = gameState.resources[rName];
            consumeResource(rName, amt);
            if (resourceActions[rName] && resourceActions[rName].onConsume) {
              resourceActions[rName].onConsume(amt);
              hideTooltip();
            }
          }
        }, 800);
      });
      div.addEventListener("touchend", e => { clearTimeout(touchTimeout); touchTimeout = null; });
      div.addEventListener("touchcancel", e => { clearTimeout(touchTimeout); touchTimeout = null; });
  
      div.appendChild(img);
      div.appendChild(cnt);
      grid.appendChild(div);
    });
  }

  /****************************************
   * LOAD / SAVE / PERK INIT
   ****************************************/
  function gatherAllPerks() {
    const perkSet = new Set();
    zones.forEach(zone => {
      zone.tasks.forEach(task => { if (task.perk) perkSet.add(task.perk); });
    });
    perkSet.forEach(pk => { if (!gameState.perks.hasOwnProperty(pk)) gameState.perks[pk] = false; });
  }
  function saveGameProgress() {
    const zonesProgress = zones.map(z => z.tasks.map(t => t.count));
    const data = { gameState, currentZoneIndex, zonesProgress };
    localStorage.setItem("degensAdventureProgress", JSON.stringify(data));
  }
  function loadGameProgress() {
    const saved = localStorage.getItem("degensAdventureProgress");
    if (!saved) return;
    try {
      const data = JSON.parse(saved);
      if (data.gameState) gameState = data.gameState;
      if (typeof data.currentZoneIndex === "number") currentZoneIndex = data.currentZoneIndex;
      if (data.zonesProgress && Array.isArray(data.zonesProgress)) {
        data.zonesProgress.forEach((taskCounts, iZone) => {
          if (zones[iZone] && Array.isArray(taskCounts)) {
            zones[iZone].tasks.forEach((task, j) => { task.count = taskCounts[j] || 0; });
          }
        });
      }
    } catch(e) { console.error("Error loading:", e); }
  }

  /****************************************
   * UTILITY FUNCTIONS
   ****************************************/
  function formatPerkName(str) {
    return str.split("_").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
  }
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  function showMessage(msg) {
    const el = document.getElementById("message");
    if (!el) return;
    el.textContent = msg;
    setTimeout(() => { if (el.textContent === msg) el.textContent = ""; }, 3000);
  }
  /****************************************
   * ENERGY & COPIUM DISPLAY FUNCTIONS
   ****************************************/

  function updateEnergyDisplay() {
    const val = Math.max(0, gameState.energy);
    const energyText = document.getElementById("energyText");
    if (energyText) {
      energyText.textContent = val.toFixed(0);
    }
    const energyBarFill = document.getElementById("energyBarFill");
    if (energyBarFill) {
      energyBarFill.style.width = (val * 100 / gameState.startingEnergy) + "%";
      // Existing energetic_bliss glow (if desired)
      if (gameState.perks["energetic_bliss"] && gameState.energy > (gameState.startingEnergy * 0.8)) {
        energyBarFill.classList.add("glowing");
        energyBarFill.classList.remove("energy-low");
        energyBarFill.setAttribute("data-tooltip",
          "Energy drains based on each skill used.<br>Stacks multiplicatively.<br><br>Energetic Bliss is active!"
        );
      } else if (gameState.energy < gameState.startingEnergy * 0.1) {
        energyBarFill.classList.remove("glowing");
        energyBarFill.classList.add("energy-low");
        energyBarFill.setAttribute("data-tooltip",
          "Energy drains based on each skill used.<br>Stacks multiplicatively.<br><br>Energy is critically low!"
        );
      } else {
        energyBarFill.classList.remove("glowing");
        energyBarFill.classList.remove("energy-low");
        energyBarFill.setAttribute("data-tooltip",
          "Energy drains based on each skill used.<br>Stacks multiplicatively."
        );
      }
    }
  }
  
  function updateCopiumDisplay() {
    const val = Math.max(0, gameState.copium);
    const copiumText = document.getElementById("copiumText");
    if (copiumText) {
      copiumText.textContent = val.toFixed(0);
    }
    const copiumBarFill = document.getElementById("copiumBarFill");
    if (copiumBarFill) {
      copiumBarFill.style.width = (val / 90) + "%";
      // Add high-copium glow if copium is above 8000
      if (gameState.copium > 8000) {
        copiumBarFill.classList.add("copium-high");
        const copiumBarElem = document.getElementById("copiumBarFill");
        if (copiumBarElem) {
          copiumBarElem.setAttribute("data-tooltip",
            "Copium builds up from tasks with<br>" + copiumSkills.join(", ") +
            ".<br><br>If it exceeds 9000, your game will reset<br>with all resources and half your knowledge lost!"
          );
        }
      } else {
        copiumBarFill.classList.remove("copium-high");
        const copiumBarElem = document.getElementById("copiumBarFill");
        if (copiumBarElem) {
          copiumBarElem.setAttribute("data-tooltip",
            "Copium builds up from tasks with<br>" + copiumSkills.join(", ") +
            ".<br><br>If it exceeds 9000, your game will reset<br>with all resources and half your knowledge lost!" +
            "<br><br>Copium is critically high!"
          );
        }
      }
    }
  }
  
  /****************************************
   * SKILLS & XP FUNCTIONS
   ****************************************/
  function addXP(skillName, rawXP) {
    if (rawXP <= 0) return;
    const skill = gameState.skills[skillName];
    if (!skill) return;
    // Reveal hidden skills on first use.
    if (!skill.visible) {
      skill.visible = true;
      renderSkills();
    }
    if (gameState.knowledgeUnlocked && knowledgeSkills.includes(skillName)) {
      rawXP *= (1 + 0.001 * gameState.knowledge);
    }
    if (gameState.perks["rex"] && skillName === "charisma") {
      rawXP *= 25;
    }
    if (gameState.perks["reinforcement_learning"] && skillName === "aiMastery") {
      rawXP *= 4;
    }
    skill.xp += rawXP * skill.xpGainFactor;
    let required = Math.pow(skillXpScaling, skill.level - 1);
    while (skill.xp >= required) {
      skill.xp -= required;
      skill.level++;
      showMessage(capitalize(skillName) + " leveled up to " + skill.level + "!");
      required = Math.pow(skillXpScaling, skill.level - 1);
    }
    updateSkillDisplay();
  }
  function updateSkillDisplay() {
    document.querySelectorAll(".skill").forEach(el => {
      const sName = el.getAttribute("data-skill");
      const sData = gameState.skills[sName];
      if (!sData) return;
      const xpTot = Math.pow(skillXpScaling, sData.level - 1);
      let pct = (sData.xp / xpTot) * 100;
      if (pct > 100) pct = 100;
      const barFill = el.querySelector(".skill-bar-fill");
      if (barFill) barFill.style.width = pct + "%";
      const levelSpan = el.querySelector(".skill-level");
      if (levelSpan) levelSpan.textContent = formatNumber(sData.level);
      let baseMult = Math.pow(1.01, sData.level);
      if (sName === "alchemy" && gameState.perks.brewmaster) baseMult *= 1.25;
      if (sName === "mechanics" && gameState.perks.futuristic_wrench) baseMult *= 5;
      if (sName === "travel" && gameState.perks.hoverboard) baseMult *= 3;
      baseMult *= (sData.progressBoost);
      el.setAttribute("data-tooltip", `${capitalize(sName)} (Level: ${formatNumber(sData.level)})<br>
                                      XP: ${formatNumber(sData.xp)} / ${formatNumber(xpTot)}<br>
                                      Speed: x${formatNumber(baseMult)}<br>
                                      Energy Drain: ${formatNumber(sData.energyDrain / (sData.drainBoost || 1))}x`);
    });
  }
  function renderSkills() {
    const container = document.getElementById("skills");
    if (!container) return;
    container.innerHTML = "";
    Object.keys(gameState.skills).forEach(sName => {
      const s = gameState.skills[sName];
      if (s.visible) {
        const div = document.createElement("div");
        div.className = "skill";
        div.setAttribute("data-skill", sName);
        // Static display: show only the skill name and level.
        div.innerHTML = `<div class="skill-name">${capitalize(sName)}<br>(Level: <span class="skill-level">${formatNumber(s.level)}</span>)</div>
                         <div class="skill-bar"><div class="skill-bar-fill"></div></div>`;
        container.appendChild(div);
      }
    });
    updateSkillDisplay();
  }

  /****************************************
   * HOVER TOOLTIP SYSTEM
   ****************************************/
  let tooltipEl = null;
  let tooltipTimeout = null; // Used to auto-hide the tooltip
  
  function updateTooltipPosition(e) {
    // Position the tooltip 10px to the right and 10px below the pointer.
    let x = e.pageX + 10,
        y = e.pageY + 10;
    const tooltipWidth = tooltipEl.offsetWidth,
          tooltipHeight = tooltipEl.offsetHeight;
    if (x + tooltipWidth > window.innerWidth) {
      x = e.pageX - tooltipWidth - 10;
    }
    if (y + tooltipHeight > window.innerHeight) {
      y = e.pageY - tooltipHeight - 10;
    }
    tooltipEl.style.left = x + "px";
    tooltipEl.style.top = y + "px";
  }
  
  function showTooltip(e, text, duration = 2500) {
    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.className = "custom-tooltip";
      document.body.appendChild(tooltipEl);
    }
    tooltipEl.innerHTML = text;
    updateTooltipPosition(e);
    tooltipEl.style.opacity = 1;
    
    // Clear any existing auto-hide timer and set a new one.
    clearTimeout(tooltipTimeout);
    tooltipTimeout = setTimeout(() => {
      hideTooltip();
    }, duration);
  }
  
  function hideTooltip() {
    if (tooltipEl) {
      tooltipEl.style.opacity = 0;
    }
    clearTimeout(tooltipTimeout);
  }
  
  // For both PC (mouse events) and mobile (touch events):
  document.addEventListener("mouseover", e => {
    if (e.target.hasAttribute("data-tooltip")) {
      showTooltip(e, e.target.getAttribute("data-tooltip"));
    }
  });
  
  document.addEventListener("mousemove", e => {
    // While moving the mouse, update the tooltip position if it's visible.
    if (tooltipEl && tooltipEl.style.opacity === "1") {
      updateTooltipPosition(e);
    }
  });
  
  document.addEventListener("mouseout", e => {
    if (e.target.hasAttribute("data-tooltip")) {
      hideTooltip();
    }
  });
  
  document.addEventListener("touchstart", e => {
    const target = e.target;
    if (target && target.hasAttribute("data-tooltip")) {
      showTooltip(e, target.getAttribute("data-tooltip"));
    }
  });
  
  document.addEventListener("touchend", e => {
    hideTooltip();
  });
  
  document.addEventListener("touchcancel", e => {
    hideTooltip();
  });
  

  /****************************************
   * FORMULAS: COMBINED MULTIPLIERS & ENERGY DRAINS
   ****************************************/
  function getCombinedMultiplier(task) {
    let mult = 1;
    if (Array.isArray(task.skills)) {
      task.skills.forEach(sName => {
        const sk = gameState.skills[sName];
        if (sk) {
          let sm = Math.pow(1.01, sk.level);
          if (sName === "alchemy" && gameState.perks["brewmaster"]) sm *= 1.25;
          if (sName === "mechanics" && gameState.perks["futuristic_wrench"]) sm *= 5;
          if (sName === "travel" && gameState.perks["hoverboard"]) sm *= 3;
          if (gameState.powerUnlocked && powerSkills.includes(sName)) sm *= (1 + 0.01 * gameState.power);
          sm *= (sk.progressBoost || 1);
          mult *= sm;
        }
      });
    }
    if (gameState.perks["energetic_bliss"] && gameState.energy > (gameState.startingEnergy * 0.8)) {
      mult *= 2;
    }
    return mult;
  }
  function getCombinedEnergyDrain(task, zoneIndex) {
    let baseDrain = 0.05;
    if (Array.isArray(task.skills)) {
      task.skills.forEach(sName => {
        if (gameState.skills[sName]) {
          baseDrain *= gameState.skills[sName].energyDrain / (gameState.skills[sName].drainBoost || 1);
        }
      });
    }
    baseDrain *= Math.pow(1.1, zoneIndex - 1);
    baseDrain = baseDrain * (gameState.perks["healthy_living"] ? 0.75 : 1)
    if (task.drainMult !== undefined) {
      baseDrain *= task.drainMult;
    }
    return baseDrain;
  }

  /****************************************
   * RESTART & GAME OVER FUNCTIONS
   ****************************************/
  function resetGame(reason) {
    if (reason === "energyLoss") {
      Object.keys(gameState.resources).forEach(rName => {
        gameState.resources[rName] = Math.ceil(gameState.resources[rName] / 2);
      });
      gameState.numEnergyResets++;
    } else if (reason === "copiumOverflow") {
      gameState.resources = {};
      gameState.knowledge = Math.floor(gameState.knowledge / 2);
      gameState.copium = 0;
      if (gameState.perks["copium_reactor"]) gameState.startingEnergy += 5;
      gameState.numCopiumResets++;
    }
    zones.forEach(z => z.tasks.forEach(t => t.count = 0));
    Object.keys(gameState.skills).forEach(sName => {
      gameState.skills[sName].progressBoost = 1;
      gameState.skills[sName].drainBoost = 1;
    });
    gameState.energy = gameState.startingEnergy;
    currentZoneIndex = 0;
    currentTasks = [];
    gameState.autoRun = false;
    gameState.cyberneticArmorTaskRunning = false;
    saveGameProgress();
    updateEnergyDisplay();
    updateCopiumDisplay();
    renderSkills();
    updateSkillDisplay();
    renderResources();
    displayZone();
  }
  function handleGameOver() {
    const energyScreen = document.getElementById("gameOverScreenEnergy");
    energyScreen.style.display = "flex";
    const energyContent = document.getElementById("gameOverContentEnergy");
    let resetMsg = energyContent.querySelector("#energyResetMsg");
    if (!resetMsg) {
      resetMsg = document.createElement("p");
      resetMsg.id = "energyResetMsg";
      energyContent.appendChild(resetMsg);
    }
    resetMsg.textContent = "This is your " + (gameState.numEnergyResets + 1) + getOrdinalSuffix(gameState.numEnergyResets + 1) + " Energy reset.";
  }
  function handleCopiumOverflow() {
    const copiumScreen = document.getElementById("gameOverScreenCopium");
    copiumScreen.style.display = "flex";
    const copiumContent = document.getElementById("gameOverContentCopium");
    let resetMsg = copiumContent.querySelector("#copiumResetMsg");
    if (!resetMsg) {
      resetMsg = document.createElement("p");
      resetMsg.id = "copiumResetMsg";
      copiumContent.appendChild(resetMsg);
    }
    resetMsg.textContent = "This is your " + (gameState.numCopiumResets + 1) + getOrdinalSuffix(gameState.numCopiumResets + 1) + " Copium reset.";
  }

  /****************************************
   * TASK TOGGLING FUNCTIONS
   ****************************************/
  function toggleTask(zoneIndex, taskIndex, button, progressFill, repContainer) {
    // Determine the maximum allowed active tasks.
    const maxSlots = gameState.perks["double_timer"] ? 2 : 1;
    
    // Find if the task already exists in currentTasks.
    const existing = currentTasks.find(t => t.zoneIndex === zoneIndex && t.taskIndex === taskIndex);
    
    if (existing) {
      // The task is already in currentTasks.
      if (existing.paused) {
        // The task is paused and the player is trying to resume it.
        // Check the number of active (non-paused) tasks.
        const activeCount = currentTasks.filter(t => !t.paused).length;
        if (activeCount >= maxSlots) {
          showMessage("You cannot resume this task because you're already running the maximum number of tasks!");
          return;
        }
        // Resume the task.
        existing.paused = false;
        button.classList.add("active");
        // If this task uses a boss image, update the zone image.
        if (existing.task.boss_image) {
          document.getElementById("zoneImage").src = existing.task.boss_image;
        }
      } else {
        // The task is active and the player wants to pause it.
        existing.paused = true;
        button.classList.remove("active");
        // If pausing leaves no active boss task, revert the zone image.
        if (!currentTasks.some(t => !t.paused && t.task.boss_image)) {
          document.getElementById("zoneImage").src = zones[zoneIndex].img;
        }
      }
    } else {
      // This is a new task.
      const activeCount = currentTasks.filter(t => !t.paused).length;
      if (activeCount >= maxSlots) {
        showMessage("You cannot start another task right now!");
        return;
      }
      startTask(zoneIndex, taskIndex, button, progressFill, repContainer);
      // If the new task has a boss image, update the zone image.
      const task = zones[zoneIndex].tasks[taskIndex];
      if (task.boss_image) {
        document.getElementById("zoneImage").src = task.boss_image;
      }
    }
  }
  
  function startTask(zoneIndex, taskIndex, button, progressFill, repContainer) {
    const zone = zones[zoneIndex];
    const task = zone.tasks[taskIndex];
    if (task.count >= task.maxReps) {
      showMessage("That task is already completed.");
      return;
    }
    const data = {
      zoneIndex,
      taskIndex,
      task,
      button,
      progressFill,
      repContainer,
      progress: 0,
      totalDuration: task.baseTime,
      paused: false
    };
    button.classList.add("active");
    currentTasks.push(data);
  }
  function updateRepContainer(repContainer, task) {
    repContainer.innerHTML = "";
    for (let i = 1; i <= task.maxReps; i++) {
      const div = document.createElement("div");
      div.className = "rep-indicator";
      if (i <= task.count) div.classList.add("completed");
      repContainer.appendChild(div);
    }
  }

  /****************************************
   * DISPLAYING ZONES & TASKS
   ****************************************/
  function displayZone() {
    const zone = zones[currentZoneIndex];
    if (zone.id >= 5 && !gameState.knowledgeUnlocked) {
      gameState.knowledgeUnlocked = true;
      showKnowledgeModal();
    }
    if (zone.id >= 6 && !gameState.copiumUnlocked) {
      gameState.copiumUnlocked = true;
      showCopiumModal();
    }
    if (zone.id >= 11 && !gameState.powerUnlocked) {
      gameState.powerUnlocked = true;
      showPowerModal();
    }
    document.getElementById("zoneName").textContent = `Zone ${zone.id}: ${zone.name}`;
    const zImg = document.getElementById("zoneImage");
    if (zImg && zone.img) {
      zImg.src = zone.img;
      zImg.alt = zone.name;
    }
    const tasksContainer = document.getElementById("tasks");
    if (!tasksContainer) return;
    tasksContainer.innerHTML = "";
    zone.tasks.forEach((task, idx) => {
      // Always render tasks so the button remains available.
      const div = document.createElement("div");
      div.className = "task";
      div.setAttribute("data-zone-index", currentZoneIndex);
      div.setAttribute("data-task-index", idx);
      if (task.mandatory) div.classList.add("mandatory-task");
      if (task.type === "Travel") div.classList.add("travel-task");
      const cDiv = document.createElement("div");
      cDiv.className = "task-control";
      const btn = document.createElement("button");
      btn.style.width = "50%";
      if (task.perk && !gameState.perks[task.perk]) {
        btn.innerHTML = `${task.name} <span class="perk-star">★</span>`;
      } else {
        btn.textContent = task.name;
      }
      // If the task has a boss_image, give the button a red tint.
      if (task.boss_image) {
        btn.style.backgroundColor = "rgba(255, 40, 0, 0.5)"; // Adjust the alpha as needed.
      }
      // If the task yields a resource, add its icon.
      if (task.resource) {
        const rIcon = document.createElement("img");
        rIcon.src = "images/" + task.resource + ".jpg";
        rIcon.alt = task.resource;
        rIcon.className = "resource-icon";
        rIcon.style.pointerEvents = "none";
        btn.appendChild(rIcon);
      } else if (task.resources && Array.isArray(task.resources)) {
        task.resources.forEach(rName => {
          const rIcon = document.createElement("img");
          rIcon.src = "images/" + rName + ".jpg";
          rIcon.alt = rName;
          rIcon.className = "resource-icon";
          rIcon.style.pointerEvents = "none";
          btn.appendChild(rIcon);
        });
      }
      updateTasksHoverInfo();
      if (task.type === "Travel" && !isTravelAvailable(zone)) btn.disabled = true;
      const progressFill = document.createElement("div");
      progressFill.className = "current-progress-fill";
      progressFill.style.width = "0%";
      const progressBar = document.createElement("div");
      progressBar.className = "current-progress-bar";
      progressBar.appendChild(progressFill);
      const repContainer = document.createElement("div");
      repContainer.className = "rep-container";
      repContainer.style.width = "50%";
      if (task.type !== "Travel") {
        for (let i = 1; i <= task.maxReps; i++) {
          const rep = document.createElement("div");
          rep.className = "rep-indicator";
          if (i <= task.count) rep.classList.add("completed");
          repContainer.appendChild(rep);
        }
      }
      btn.addEventListener("click", () => { toggleTask(currentZoneIndex, idx, btn, progressFill, repContainer); });
      cDiv.appendChild(btn);
      cDiv.appendChild(repContainer);
      div.appendChild(cDiv);
      div.appendChild(progressBar);
      // Add a paragraph below the progress bar showing the "Uses:" info.
      const usesP = document.createElement("p");
      let usesColor = (task.skills.length === 1) ? "green" :
                      (task.skills.length === 2) ? "#9aad32" :
                      (task.skills.length === 3) ? "orange" : "red";
      const capitalizedSkills = task.skills.map(s => capitalize(s)).join(", ");
      usesP.innerHTML = `<span style="color:${usesColor};">Uses: ${capitalizedSkills}</span>`;
      div.appendChild(usesP);
      tasksContainer.appendChild(div);
    });
    renderPerks();
    showKnowledgeIfUnlocked();
    showPowerIfUnlocked();
    // --- New Code for Simulation Engine Automation ---
    const zoneAutomationEl = document.getElementById("zoneAutomation");
    // Only display the automation UI if the simulation_engine perk is unlocked.
    if (gameState.perks["simulation_engine"]) {
      // Ensure the current zone's full completion count exists (default to 0 if not).
      if (typeof gameState.zoneFullCompletes[currentZoneIndex] !== "number") {
        gameState.zoneFullCompletes[currentZoneIndex] = 0;
      }
      if (gameState.zoneFullCompletes[currentZoneIndex] >= 10) {
        zoneAutomationEl.innerHTML = "";
        
        // Create a label "Automate:" before the buttons.
        const label = document.createElement("span");
        label.textContent = "Automate: ";
        zoneAutomationEl.appendChild(label);
        
        // Create "Zone" button.
        const zoneBtn = document.createElement("button");
        zoneBtn.textContent = "Zone";
        zoneBtn.addEventListener("click", () => {
          if (gameState.autoRun){
            gameState.autoRun = false;
            showMessage("Automation disabled.");
          } else {
            gameState.autoRun = true;
            gameState.automationMode = "zone";
            showMessage("Automation set to Zone mode.");
          }
        });
        zoneAutomationEl.appendChild(zoneBtn);
        
        // Create "All" button.
        const allBtn = document.createElement("button");
        allBtn.textContent = "All";
        allBtn.addEventListener("click", () => {
          if (gameState.autoRun){
            gameState.autoRun = false;
            showMessage("Automation disabled.");
          } else {
            gameState.autoRun = true;
            gameState.automationMode = "all";
            showMessage("Automation set to All mode.");
          }
        });
        zoneAutomationEl.appendChild(allBtn);
      } else {
        // Show the counter as "X/10" if not eligible for automation.
        zoneAutomationEl.textContent = "Full Completes: " + gameState.zoneFullCompletes[currentZoneIndex] + "/10";
      }
    } else {
      // If simulation_engine perk is not unlocked, clear the automation display.
      zoneAutomationEl.innerHTML = "";
    }

  }

  // Helper: compute the raw base multiplier (without energetic_bliss)
  function getBaseMultiplier(task) {
    let mult = 1;
    if (Array.isArray(task.skills)) {
      task.skills.forEach(sName => {
        const sk = gameState.skills[sName];
        if (sk) {
          let sm = Math.pow(1.01, sk.level);
          if (sName === "alchemy" && gameState.perks["brewmaster"]) sm *= 1.25;
          if (sName === "mechanics" && gameState.perks["futuristic_wrench"]) sm *= 5;
          if (sName === "travel" && gameState.perks["hoverboard"]) sm *= 3;
          if (gameState.powerUnlocked && powerSkills.includes(sName)) sm *= (1 + 0.01 * gameState.power);
          sm *= (sk.progressBoost || 1);
          mult *= sm;
        }
      });
    }
    return mult;
  }
  
  // Analytic estimate of total energy drained to complete a task,
  // using a two-phase model (bonus multiplier then base multiplier).
  function estimateEnergyDrain(task, zone) {
    const tick = tickDuration;
    
    // Compute effective drain per tick (includes drainMult and drainBoost):
    let D = getCombinedEnergyDrain(task, zone.id);
    if (task.drainMult !== undefined) {
      D *= task.drainMult;
    }
    if (gameState.numCyberneticArmors > 0) {
      D *= 0.25;
    }
    
    const threshold = gameState.startingEnergy * 0.8;
    const energy = gameState.energy;
    
    // Phase 1 multiplier: bonus active
    const M_bonus = getCombinedMultiplier(task);
    // Phase 2 multiplier: base multiplier only (no energetic_bliss)
    const M_base = getBaseMultiplier(task);
    
    // t1: number of ticks during which energy remains above threshold.
    // (If energy is already at or below threshold, t1 = 0.)
    const t1 = energy > threshold ? (energy - threshold) / D : 0;
    // Progress made during phase 1:
    const progressPhase1 = t1 * tick * M_bonus;
    
    let ticksNeeded;
    if (progressPhase1 >= task.baseTime) {
      // The bonus phase alone would complete the task.
      ticksNeeded = task.baseTime / (tick * M_bonus);
    } else {
      // After phase 1, the remaining progress must be done at base multiplier.
      const remainingProgress = task.baseTime - progressPhase1;
      const t2 = remainingProgress / (tick * M_base);
      ticksNeeded = t1 + t2;
    }
    
    // Total estimated energy drain is drain per tick multiplied by the total ticks.
    return D * Math.max(1, ticksNeeded);
  }


  
  function updateTasksHoverInfo() {
    const zone = zones[currentZoneIndex];
    zone.tasks.forEach((task, idx) => {
      const taskDiv = document.querySelector(`.task[data-zone-index="${currentZoneIndex}"][data-task-index="${idx}"]`);
      if (!taskDiv) return;
      const btn = taskDiv.querySelector("button");
      if (!btn) return;
      
      // --- Energy Estimation ---
      const estimatedEnergy = estimateEnergyDrain(task, zone);
      
      // --- XP Calculation (unchanged) ---
      const usedSkills = task.skills;
      const numSkills = usedSkills.length || 1;
      let baseXP = (task.baseTime * xpScale) / numSkills;
      if (gameState.perks["workaholic"]) baseXP *= 1.5;
      let xpText = "";
      usedSkills.forEach(sName => {
        let skillXP = baseXP;
        const skill = gameState.skills[sName];
        if (skill) {
          skillXP *= skill.xpGainFactor;
        }
        if (gameState.knowledgeUnlocked && knowledgeSkills.includes(sName)) {
          skillXP *= (1 + 0.001 * gameState.knowledge);
        }
        if (gameState.perks["rex"] && sName === "charisma") {
          skillXP *= 25;
        }
        if (gameState.perks["reinforcement_learning"] && sName === "aiMastery") {
          skillXP *= 4;
        }
        xpText += `<br>${capitalize(sName)}: ` + formatNumber(skillXP) + " XP";
      });
      
      // --- Extra Info ---
      let extraInfo = "";
      if (gameState.knowledgeUnlocked && usedSkills.some(s => knowledgeSkills.includes(s))) {
        extraInfo += `<br><br><span style="color:rgb(141, 26, 191)">Knowledge Gain on Completion: ${formatNumber(zone.id)}</span>`;
      }
      if (gameState.copiumUnlocked && usedSkills.some(s => copiumSkills.includes(s))) {
        let copiumGain = 10 * zone.id;
        if (gameState.perks["copious_alchemist"]) {
          copiumGain *= 0.5;
        }
        extraInfo += `<br><br><span style="color:#dbd834">Copium Gain per Task: ${formatNumber(copiumGain)}</span>`;
      }
      if (gameState.powerUnlocked && task.boss_image) {
        extraInfo += `<br><br><span style="color:rgb(222, 34, 191)">Power Gain on Completion: ${formatNumber(zone.id)}</span>`;
      }
      
      // --- Update Tooltip ---
      btn.setAttribute("data-tooltip", 
        task.description +
        `<br><br><span style="color:gray">Estimated Energy Needed${task.maxReps > 1 ? " per task" : ""}: ` +
        formatNumber(estimatedEnergy) +
        `<br><br>Estimated XP Gains${task.maxReps > 1 ? " per task" : ""}:${xpText}</span>` +
        extraInfo
      );
    });
  }
  
  
  function nextZone() {
    currentZoneIndex++;
    if (gameState.autoRun && gameState.automationMode === "all") {
      // In "All" mode, if the new zone also qualifies, keep autoRun true.
      if (typeof gameState.zoneFullCompletes[currentZoneIndex] === "number" &&
          gameState.zoneFullCompletes[currentZoneIndex] >= 10) {
        gameState.autoRun = true;
      } else {
        gameState.autoRun = false;
      }
    } else {
      // In "Zone" mode (or if no automation mode set), turn autoRun off.
      gameState.autoRun = false;
    }
    if (currentZoneIndex < zones.length) displayZone();
    else {
      const scenario = document.getElementById("scenarioText");
      if (scenario) scenario.innerHTML = "<h2>Congratulations! You have completed the adventure!</h2>";
      const tasksEl = document.getElementById("tasks");
      if (tasksEl) tasksEl.innerHTML = "";
    }
  }
  

  /****************************************
   * PERKS RENDER & MODALS
   ****************************************/
  function renderPerks() {
    const grid = document.querySelector("#perksContainer .perks-grid");
    if (!grid) return;
    grid.innerHTML = "";
    Object.keys(gameState.perks).forEach(pKey => {
      const div = document.createElement("div");
      const icon = document.createElement("img");
      icon.src = "images/" + pKey + ".jpg";
      icon.alt = formatPerkName(pKey);
      icon.style.pointerEvents = "none";
      if (gameState.perks[pKey]) {
        div.setAttribute("data-tooltip", formatPerkName(pKey) + ":<br>" + (perkDescriptions[pKey] || "An unknown perk."));
        div.className = "perk-item unlocked";
      } else {
        div.setAttribute("data-tooltip", formatPerkName(pKey) + ": Unlock perk to see description.");
        div.className = "perk-item locked";
      }
      div.appendChild(icon);
      grid.appendChild(div);
    });
  }
  function showKnowledgeModal() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "knowledgeModal";
    const content = document.createElement("div");
    content.className = "modal-content";
    const p = document.createElement("p");
    p.innerHTML = "Knowledge unlocked! +0.1% XP per level for:<br>" + knowledgeSkills.join("<br>");
    content.appendChild(p);
    const btn = document.createElement("button");
    btn.textContent = "Ok!";
    btn.addEventListener("click", () => { modal.parentNode && modal.parentNode.removeChild(modal); });
    content.appendChild(btn);
    modal.appendChild(content);
    document.body.appendChild(modal);
  }
  function showCopiumModal() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "copiumModal";
    const content = document.createElement("div");
    content.className = "modal-content";
    const p = document.createElement("p");
    p.innerHTML = "Copium unlocked!<br>Tasks using skills below now yield Copium:<br>-" + copiumSkills.join("<br>-") +
      "<br><br>If it exceeds 9000, you reset with all resources and half your knowledge lost!";
    content.appendChild(p);
    const btn = document.createElement("button");
    btn.textContent = "Got It";
    btn.addEventListener("click", () => { modal.parentNode && modal.parentNode.removeChild(modal); });
    content.appendChild(btn);
    modal.appendChild(content);
    document.body.appendChild(modal);
    showCopiumBar();
  }
  function showPowerModal() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "powerModal";
    const content = document.createElement("div");
    content.className = "modal-content";
    const p = document.createElement("p");
    p.innerHTML = "Power unlocked!<br>Boss wins grant levels based on zone." +
                  "<br><br>Power boosts speed of Combat and Endurance!";
    content.appendChild(p);
    const btn = document.createElement("button");
    btn.textContent = "Roger That";
    btn.addEventListener("click", () => { modal.parentNode && modal.parentNode.removeChild(modal); });
    content.appendChild(btn);
    modal.appendChild(content);
    document.body.appendChild(modal);
  }
  function showCopiumBar() {
    const cBar = document.getElementById("copiumBarContainer");
    if (cBar) cBar.style.display = "grid";
    updateCopiumDisplay();
  }

  /****************************************
   * SETTINGS & FULL RESTART
   ****************************************/
  function createSettingsButton() {
    const sImg = document.getElementById("settingsImage");
    if (!sImg) return;
    sImg.style.cursor = "pointer";
    sImg.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.id = "settingsModal";
      modal.className = "modal";
      const content = document.createElement("div");
      content.className = "modal-content";
      
      // Arrange buttons vertically
      content.style.display = "flex";
      content.style.flexDirection = "column";
      content.style.gap = "10px";
      
      // Cheat Codes Button (new)
      const cheatBtn = document.createElement("button");
      cheatBtn.textContent = "Cheat Codes";
      cheatBtn.addEventListener("click", () => {
        showCheatCodeModal();
      });
      content.appendChild(cheatBtn);
      
      // FULL RESTART Button (red) with confirmation dialog
      const restartAll = document.createElement("button");
      restartAll.textContent = "FULL RESTART";
      restartAll.style.backgroundColor = "#e74c3c"; // red
      restartAll.addEventListener("click", () => {
        if (confirm("Are you sure you want to FULL RESTART? This cannot be undone.")) {
          localStorage.removeItem("degensAdventureProgress");
          fullRestart();
          modal.remove();
        }
      });
      content.appendChild(restartAll);
      
      // Back Button (green)
      const backBtn = document.createElement("button");
      backBtn.textContent = "Back";
      backBtn.style.backgroundColor = "#27ae60"; // green
      backBtn.addEventListener("click", () => { modal.remove(); });
      content.appendChild(backBtn);
      
      modal.appendChild(content);
      document.body.appendChild(modal);
    });
  }
  
  createSettingsButton();
  function fullRestart() {
    gameState = getInitialGameState();
    zones.forEach(z => z.tasks.forEach(t => t.count = 0));
    currentZoneIndex = 0;
    currentTasks = [];
    document.getElementById("copiumBarContainer").style.display = "none";
    updateEnergyDisplay();
    renderSkills();
    updateSkillDisplay();
    renderResources();
    gatherAllPerks();
    const kUpg = document.getElementById("knowledgeUpgValue");
    if (kUpg) kUpg.parentElement.style.display = "none";
    const pUpg = document.getElementById("powerUpgValue");
    if (pUpg) pUpg.parentElement.style.display = "none";
    displayZone();
    document.getElementById("versionBanner").style.display = "none";
  }
  document.getElementById("restartButtonEnergy").addEventListener("click", () => {
    document.getElementById("gameOverScreenEnergy").style.display = "none";
    resetGame("energyLoss");
  });
  document.getElementById("restartButtonCopium").addEventListener("click", () => {
    document.getElementById("gameOverScreenCopium").style.display = "none";
    resetGame("copiumOverflow");
  });

  function showCheatCodeModal() {
    const modal = document.createElement("div");
    modal.id = "cheatCodeModal";
    modal.className = "modal";
    const content = document.createElement("div");
    content.className = "modal-content";
    
    // Vertical layout for cheat code modal
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.gap = "10px";
    
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter Cheat Code";
    content.appendChild(input);
    
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.addEventListener("click", () => {
      processCheatCode(input.value.trim());
      modal.remove();
    });
    content.appendChild(submitBtn);
    
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.style.backgroundColor = "#27ae60"; // green
    cancelBtn.addEventListener("click", () => { modal.remove(); });
    content.appendChild(cancelBtn);
    
    modal.appendChild(content);
    document.body.appendChild(modal);
  }

  function processCheatCode(code) {
    if (code === "BetterStart") {
      // For endurance, tinkering, charisma, and alchemy: ensure level is at least 250
      ["endurance", "tinkering", "charisma", "alchemy"].forEach(skillName => {
        if (gameState.skills[skillName].level < 250) {
          gameState.skills[skillName].level = 250;
          gameState.skills[skillName].xp = 0; // Optionally reset XP
        }
      });
      // For travel: ensure level is at least 200
      if (gameState.skills["travel"].level < 200) {
        gameState.skills["travel"].level = 200;
        gameState.skills["travel"].xp = 0; // Optionally reset XP
      }
      showConfirmationModal("Cheat Code Activated: BetterStart");
      renderSkills();
      updateSkillDisplay();
    } else if (code === "WhatAboutOtherSkills") {
      // For endurance, tinkering, charisma, and alchemy: ensure level is at least 250
      ["intellect", "perception", "mechanics"].forEach(skillName => {
        if (gameState.skills[skillName].level < 150) {
          gameState.skills[skillName].level = 150;
          gameState.skills[skillName].xp = 0; // Optionally reset XP
        }
      });
      showConfirmationModal("Cheat Code Activated: WhatAboutOtherSkills");
      renderSkills();
      updateSkillDisplay();
    } else {
      showConfirmationModal("Invalid Cheat Code");
    }
  }  
  
  function showConfirmationModal(message) {
    const modal = document.createElement("div");
    modal.className = "modal";
    const content = document.createElement("div");
    content.className = "modal-content";
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.gap = "10px";
    
    const msgP = document.createElement("p");
    msgP.textContent = message;
    content.appendChild(msgP);
    
    const okBtn = document.createElement("button");
    okBtn.textContent = "OK";
    okBtn.style.backgroundColor = "#27ae60"; // green button
    okBtn.addEventListener("click", () => {
      modal.remove();
    });
    content.appendChild(okBtn);
    
    modal.appendChild(content);
    document.body.appendChild(modal);
  }
  
  /****************************************
   * MAIN GAME LOOP
   ****************************************/
  function gameLoop() {
    if (currentTasks.length === 0 && !gameState.autoRun) return;
    currentTasks.forEach((tData, idx) => {
      if (tData.paused) return;
      const oldProgress = tData.progress;
      const zone = zones[tData.zoneIndex];
      let speedMult = getCombinedMultiplier(tData.task);
      tData.progress += tickDuration * speedMult;
      if (tData.progress > tData.totalDuration) tData.progress = tData.totalDuration;
      const delta = tData.progress - oldProgress;
      let drain = getCombinedEnergyDrain(tData.task, tData.zoneIndex);
      if (!gameState.cyberneticArmorTaskRunning && gameState.numCyberneticArmors > 0) {
        gameState.cyberneticArmorTaskRunning = true;
        gameState.numCyberneticArmors--;
      }
      if (gameState.cyberneticArmorTaskRunning) {
        drain *= 0.25;
      }
      gameState.energy -= drain;
      updateEnergyDisplay();
      if (gameState.energy <= 0) {
        gameState.energy = 0;
        updateEnergyDisplay();
        gameState.autoRun = false;
        currentTasks = [];
        handleGameOver();
        return;
      }
      const baseXP = delta * xpScale;
      const usedSkills = tData.task.skills || [];
      let xpEach = baseXP / (usedSkills.length || 1);
      if (gameState.perks["workaholic"]) xpEach *= 1.5;
      usedSkills.forEach(sName => { addXP(sName, xpEach); });
      const pct = (tData.progress / tData.totalDuration) * 100;
      tData.progressFill.style.width = Math.min(pct, 100) + "%";
      if (tData.progress >= tData.totalDuration) {
        const task = zone.tasks[tData.taskIndex];
        if (task.count < task.maxReps) task.count++;
        if (task.resources && Array.isArray(task.resources)) {
          if (gameState.perks["luck_of_the_irish"] && Math.random() < 0.01) {
            task.resources.forEach(r => addResource(r, 77));
          } else if (gameState.perks["gacha_machine"] && Math.random() < 0.25) {
            task.resources.forEach(r => addResource(r, 2));
          } else {
            task.resources.forEach(r => addResource(r, 1));
          }
        }
        if (gameState.copiumUnlocked && usedSkills.some(s => copiumSkills.includes(s))) {
          gameState.copium += (10 * zone.id) * (gameState.perks["copious_alchemist"] ? 0.5 : 1);
          if (gameState.copium > 9000) { 
            currentTasks = []; 
            gameState.autoRun = false;
            handleCopiumOverflow(); 
            return; 
          }
          updateCopiumDisplay();
        }
        updateRepContainer(tData.repContainer, task);
        if (task.mandatory && task.count >= task.maxReps && isTravelAvailable(zone)) {
          enableTravelButtons(tData.zoneIndex);
        }
        if (task.type === "Travel") {
          // Check if all non-Travel tasks in this zone are complete.
          const nonTravelTasks = zone.tasks.filter(t => t.type !== "Travel");
          const allNonTravelComplete = nonTravelTasks.every(t => t.count >= t.maxReps);
          if (allNonTravelComplete) {
            // Increment the full completion counter in gameState.
            gameState.zoneFullCompletes[tData.zoneIndex] = (gameState.zoneFullCompletes[tData.zoneIndex] || 0) + 1;
          }
          showMessage("Travel complete: " + task.name);
          tData.button.classList.remove("active");
          removeTaskFromCurrent(tData);
          nextZone();
          displayZone();
        }
         else {
          // Non-Travel tasks:
          if (task.count >= task.maxReps) {
            // Hide the task if it has reached max repetitions.
            hideTooltip();
            tData.button.parentElement.parentElement.style.display = "none";
            removeTaskFromCurrent(tData);
          } else {
            // If not yet at max, then:
            if (gameState.perks["completionist"]) {
              // With Completionist, automatically reset progress.
              showMessage(`Repetition complete: ${task.name} (${task.count}/${task.maxReps})`);
              tData.progress = 0;
              tData.progressFill.style.width = "0%";
            } else {
              // Without Completionist, stop running after one repetition.
              showMessage(`Repetition complete: ${task.name} (${task.count}/${task.maxReps}). Click to run again.`);
              removeTaskFromCurrent(tData);
            }
            gameState.cyberneticArmorTaskRunning = false;
          }
        }
        if (task.count >= task.maxReps &&
            gameState.knowledgeUnlocked &&
            usedSkills.some(s => knowledgeSkills.includes(s))) {
          gameState.knowledge += zone.id;
          showKnowledgeIfUnlocked();
        }
        if (task.count >= task.maxReps &&
            gameState.powerUnlocked &&
            task.boss_image) {
          gameState.power += zone.id;
          showPowerIfUnlocked();
        }
        if (task.perk && !gameState.perks[task.perk] && task.count >= task.maxReps) {
          gameState.perks[task.perk] = true;
          if (task.perk === "basic_mech") gameState.startingEnergy += 25;
          showMessage("Perk unlocked: " + formatPerkName(task.perk));
          renderPerks();
        }
        updateTasksHoverInfo();
      }
    });
    // After processing tasks, update the zone image based on any active boss.
    const zoneImage = document.getElementById("zoneImage");
    // Look for any active task that has a boss_image attribute.
    const activeBossTask = currentTasks.find(t => !t.paused && t.task.boss_image);
    if (activeBossTask) {
      zoneImage.src = activeBossTask.task.boss_image;
    } else {
      // Revert to the zone's default image.
      zoneImage.src = zones[currentZoneIndex].img;
    }
    // AUTOMATE: If autoRun is enabled and no tasks are running, start one.
    if (gameState.autoRun && currentTasks.length === 0) {
      const maxSlots = gameState.perks["double_timer"] ? 2 : 1;
      // Keep starting tasks until we've filled all available slots
      while (currentTasks.filter(t => !t.paused).length < maxSlots) {
        let taskStarted = false;
        const zone = zones[currentZoneIndex];
        // Loop over tasks in the current zone.
        for (let idx = 0; idx < zone.tasks.length; idx++) {
          const task = zone.tasks[idx];
          // Only auto-run tasks that are not complete and not already running.
          if (task.count < task.maxReps && 
              !currentTasks.some(t => t.zoneIndex === currentZoneIndex && t.taskIndex === idx)) {
            // Find the corresponding DOM elements.
            const taskDiv = document.querySelector(`.task[data-zone-index="${currentZoneIndex}"][data-task-index="${idx}"]`);
            if (taskDiv) {
              const btn = taskDiv.querySelector("button");
              const progressFill = taskDiv.querySelector(".current-progress-fill");
              const repContainer = taskDiv.querySelector(".rep-container");
              if (btn && progressFill && repContainer) {
                startTask(currentZoneIndex, idx, btn, progressFill, repContainer);
                taskStarted = true;
                break; // After starting one task, break to re-check the available slot count.
              }
            }
          }
        }
        if (!taskStarted) break; // No available tasks to auto-start.
      }
    }

    saveGameProgress();
  }
  setInterval(gameLoop, tickDuration);

  /****************************************
   * TRAVEL AVAILABILITY HELPERS
   ****************************************/
  function isTravelAvailable(zone) {
    const mandatory = zone.tasks.filter(t => t.type === "Training" && t.mandatory);
    return (mandatory.length === 0) || mandatory.every(t => t.count >= t.maxReps);
  }
  function enableTravelButtons(zoneIndex) {
    const zone = zones[zoneIndex];
    if (!isTravelAvailable(zone)) return;
    zone.tasks.forEach((t, i) => {
      if (t.type === "Travel") {
        const btn = document.querySelector(`.task[data-zone-index="${zoneIndex}"][data-task-index="${i}"] button`);
        if (btn) btn.disabled = false;
      }
    });
  }
  function removeTaskFromCurrent(tData) {
    const idx = currentTasks.indexOf(tData);
    if (idx >= 0) currentTasks.splice(idx, 1);
  }
  function showKnowledgeIfUnlocked() {
    const knowledgeUpg = document.getElementById("knowledgeUpgValue");
    if (!knowledgeUpg) return;
    if (gameState.knowledgeUnlocked) {
      knowledgeUpg.parentElement.style.display = "inline-block";
      knowledgeUpg.textContent = gameState.knowledge;
      const tooltipStr = "Knowledge increases XP gain by <b>" + formatNumber(gameState.knowledge * 0.1) +
                         "%</b> for these skills:<br>- " + knowledgeSkills.join("<br>- ");
      knowledgeUpg.parentElement.setAttribute("data-tooltip", tooltipStr);
    }
  }
  function showPowerIfUnlocked() {
    const powerUpg = document.getElementById("powerUpgValue");
    if (!powerUpg) return;
    if (gameState.powerUnlocked) {
      powerUpg.parentElement.style.display = "inline-block";
      powerUpg.textContent = gameState.power;
      const tooltipStr = "Power increases speed by <b>" + formatNumber(gameState.power * 0.1) +
                         "%</b><br>for Combat and Endurance.";
      powerUpg.parentElement.setAttribute("data-tooltip", tooltipStr);
    }
  }

  /****************************************
   * INIT
   ****************************************/
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gameOverScreenEnergy").style.display = "none";
    document.getElementById("gameOverScreenCopium").style.display = "none";
    const kUpg = document.getElementById("knowledgeUpgValue");
    if (kUpg) kUpg.parentElement.style.display = "none";
    loadGameProgress();
    gatherAllPerks();
    renderSkills();
    updateEnergyDisplay();
    if (gameState.copiumUnlocked) showCopiumBar();
    updateSkillDisplay();
    renderResources();
    displayZone();
    // Version check: if the saved game version doesn't match, show the banner.
    if (gameState.gameVersion !== CURRENT_GAME_VERSION) {
      const banner = document.getElementById("versionBanner");
      if (banner) {
        banner.style.display = "block";
        banner.innerHTML = "New major update was released and your save is out of date. This will cause issues with current content. Full Restart through settings is advised.";
      } else {
        banner.style.display = "none";
      }
    }
  });

  // Expose gameState for debugging.
  window.getGameState = () => gameState;
})();
