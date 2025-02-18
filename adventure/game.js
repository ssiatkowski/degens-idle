const CURRENT_GAME_VERSION = "v0.02";

(function() {
  /****************************************
   * DEFINITIONS: Skills affecting knowledge, copium, delusion
   ****************************************/
  let knowledgeSkills = ["tinkering", "intellect", "hacking"];
  let powerSkills     = ["combat", "endurance"];
  let copiumSkills    = ["endurance", "alchemy", "mechanics"];
  let delusionSkills  = ["charisma", "perception", "aiMastery", "negotiation"];

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
        travel:      { level: 1, xp: 0, visible: false, energyDrain: 1,   progressBoost: 1, drainBoost: 1, xpGainFactor: 1.5 },
        intellect:   { level: 1, xp: 0, visible: false, energyDrain: 3,   progressBoost: 1, drainBoost: 1, xpGainFactor: 0.5 },
        perception:  { level: 1, xp: 0, visible: false, energyDrain: 2,   progressBoost: 1, drainBoost: 1, xpGainFactor: 0.3 },
        mechanics:   { level: 1, xp: 0, visible: false, energyDrain: 6,   progressBoost: 1, drainBoost: 1, xpGainFactor: 0.1 },
        combat:      { level: 1, xp: 0, visible: false, energyDrain: 20,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.01 },
        hacking:     { level: 1, xp: 0, visible: false, energyDrain: 7,   progressBoost: 1, drainBoost: 1, xpGainFactor: 0.01 },
        cybernetics: { level: 1, xp: 0, visible: false, energyDrain: 12,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.03 },
        negotiation: { level: 1, xp: 0, visible: false, energyDrain: 20,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.01 },
        aiMastery:   { level: 1, xp: 0, visible: false, energyDrain: 15,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.001 },
        quantum:     { level: 1, xp: 0, visible: false, energyDrain: 25,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.0001 },
        omniscience: { level: 1, xp: 0, visible: false, energyDrain: 100, progressBoost: 1, drainBoost: 1, xpGainFactor: 1 }
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
  let xpScale        = 0.001; // XP per tick
  let skillXpScaling = 1.02;
  let baseEnergyDrain = 0.05;

  // Helper to consume resources from gameState
  function consumeResource(name, amt) {
    if (!gameState.resources[name] || gameState.resources[name] < amt) return;
    gameState.resources[name] -= amt;
    showMessage(`Consumed ${amt} ${formatStringForDisplay(name)}.`);
    renderResources();
  }

  // Helper to add resources
  function addResource(name, amt) {
    if (!gameState.resources[name]) gameState.resources[name] = 0;
    gameState.resources[name] += amt;
    renderResources();
  }

  let resourceConsumeMode = "one";

  // The main function to render resources & (on mobile) show the Use One / Use All toggle
  function renderResources() {
    const resourcesContainer = document.getElementById("resourcesContainer");
    const grid = document.getElementById("resourcesGrid");
    if (!resourcesContainer || !grid) return;

    grid.innerHTML = "";

    // Detect mobile devices.
    const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // For mobile, place a toggle switch right below the "Resources" header (i.e., in #resourcesContainer, above the grid).
    // We only want to create it once, so let's check if it's already there.
    if (isMobile) {
      let toggleContainer = document.getElementById("resourceToggle");
      if (!toggleContainer) {
        toggleContainer = document.createElement("div");
        toggleContainer.id = "resourceToggle";
        toggleContainer.style.display = "flex";
        toggleContainer.style.justifyContent = "center";
        toggleContainer.style.marginBottom = "10px";
        toggleContainer.style.gap = "10px";
        resourcesContainer.insertBefore(toggleContainer, grid);
        
        const useOneBtn = document.createElement("button");
        useOneBtn.textContent = "Use One";
        const useAllBtn = document.createElement("button");
        useAllBtn.textContent = "Use All";

        // Style the default state.
        useOneBtn.classList.add("active");

        useOneBtn.addEventListener("click", () => {
          resourceConsumeMode = "one";
          toggleContainer.dataset.consumeMode = "one";
          useOneBtn.classList.add("active");
          useAllBtn.classList.remove("active");
        });
        useAllBtn.addEventListener("click", () => {
          resourceConsumeMode = "all";
          toggleContainer.dataset.consumeMode = "all";
          useAllBtn.classList.add("active");
          useOneBtn.classList.remove("active");
        });
        

        toggleContainer.appendChild(useOneBtn);
        toggleContainer.appendChild(useAllBtn);
      }
    }

    // Render each resource item in the grid
    Object.keys(gameState.resources).forEach(rName => {
      const count = gameState.resources[rName] || 0;
      if (count <= 0) return;

      const div = document.createElement("div");
      div.className = "resource-item";
      div.setAttribute("data-tooltip", formatStringForDisplay(rName) + ":<br>" + resourceActions[rName]?.tooltip || "Tap to consume resource.");

      // Resource icon
      const img = document.createElement("img");
      img.src = "images/" + rName + ".jpg";
      img.alt = rName;
      img.style.pointerEvents = "none";
      img.style.userSelect = "none";
      img.setAttribute("draggable", "false");

      // Count text
      const cnt = document.createElement("div");
      cnt.className = "resource-count";
      cnt.textContent = count;

      // Mobile or Desktop consumption
      if (isMobile) {
        // Single tap uses 1 or all, depending on toggle
        div.addEventListener("click", () => {
          if (gameState.resources[rName] > 0) {
            if (resourceConsumeMode === "all") {
              const amt = gameState.resources[rName];
              consumeResource(rName, amt);
              if (resourceActions[rName]?.onConsume) {
                resourceActions[rName].onConsume(gameState, amt);
              }
            } else {
              consumeResource(rName, 1);
              if (resourceActions[rName]?.onConsume) {
                resourceActions[rName].onConsume(gameState, 1);
              }
            }
            updateSkillMultipliers();
            hideTooltip();
          }
        });

        // Long press => show tooltip for info
        let touchTimeout;
        div.addEventListener("touchstart", () => {
          touchTimeout = setTimeout(() => {
            showTooltip(div); // Show near the resource
          }, 500);
        });
        div.addEventListener("touchend", () => {
          clearTimeout(touchTimeout);
          touchTimeout = null;
          hideTooltip();
        });
        div.addEventListener("touchcancel", () => {
          clearTimeout(touchTimeout);
          touchTimeout = null;
          hideTooltip();
        });

      } else {
        // Desktop left-click => use 1
        div.addEventListener("click", () => {
          if (gameState.resources[rName] > 0) {
            consumeResource(rName, 1);
            if (resourceActions[rName]?.onConsume) {
              resourceActions[rName].onConsume(gameState, 1);
            }
            if (gameState.resources[rName] === 0) {
              hideTooltip();
            }
          }
        });

        // Desktop right-click => use all
        div.addEventListener("contextmenu", e => {
          e.preventDefault();
          if (gameState.resources[rName] > 0) {
            const amt = gameState.resources[rName];
            consumeResource(rName, amt);
            if (resourceActions[rName]?.onConsume) {
              resourceActions[rName].onConsume(gameState, amt);
            }
            hideTooltip();
          }
        });
      }

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
            zones[iZone].tasks.forEach((task, j) => {
              task.count = taskCounts[j] || 0;
            });
          }
        });
      }
    } catch(e) {
      console.error("Error loading:", e);
    }
  }

  /****************************************
   * UTILITY FUNCTIONS
   ****************************************/
  function formatStringForDisplay(str) {
    return str
      // Replace underscores with spaces.
      .replace(/_/g, ' ')
      // Split on one or more whitespace characters.
      .split(/\s+/)
      // Capitalize each word.
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      // Join the words with a single space.
      .join(' ');
  }
  function showMessage(msg) {
    const el = document.getElementById("message");
    if (!el) return;
    el.textContent = msg;
    setTimeout(() => {
      if (el.textContent === msg) el.textContent = "";
    }, 3000);
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
      // energetic_bliss glow
      if (gameState.perks["energetic_bliss"] && gameState.energy > (gameState.startingEnergy * 0.8)) {
        energyBarFill.classList.add("glowing");
        energyBarFill.classList.remove("energy-low");
        energyBarFill.setAttribute("data-tooltip",
          `Energy: ${formatNumber(gameState.energy)}/${formatNumber(gameState.startingEnergy)}<br>Energy drains based on each skill used.<br>Stacks multiplicatively.<br><br>Energetic Bliss is active!`
        );
      } else if (gameState.energy < gameState.startingEnergy * 0.1) {
        energyBarFill.classList.remove("glowing");
        energyBarFill.classList.add("energy-low");
        energyBarFill.setAttribute("data-tooltip",
          `Energy: ${formatNumber(gameState.energy)}/${formatNumber(gameState.startingEnergy)}<br>Energy drains based on each skill used.<br>Stacks multiplicatively.<br><br>Energy is critically low!`
        );
      } else {
        energyBarFill.classList.remove("glowing");
        energyBarFill.classList.remove("energy-low");
        energyBarFill.setAttribute("data-tooltip",
          `Energy: ${formatNumber(gameState.energy)}/${formatNumber(gameState.startingEnergy)}<br>Energy drains based on each skill used.<br>Stacks multiplicatively.`
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
        copiumBarFill.setAttribute("data-tooltip",
          "Copium builds up from tasks with<br>" + copiumSkills.join(", ") +
          `.<br><br>If it exceeds 9000, your game will reset<br>with all Resources and ${gameState.perks["knowledge_preserver"] ? "half" : "10% of"} your Knowledge lost!`
        );
      } else {
        copiumBarFill.classList.remove("copium-high");
        copiumBarFill.setAttribute("data-tooltip",
          "Copium builds up from tasks with<br>" + copiumSkills.join(", ") +
          `.<br><br>If it exceeds 9000, your game will reset<br>with all Resources and ${gameState.perks["knowledge_preserver"] ? "half" : "10% of"} your Knowledge lost!`
        );
      }
    }
  }

  function updateDelusionDisplay() {
    const val = Math.max(0, gameState.delusion);
    const delusionText = document.getElementById("delusionText");
    if (delusionText) {
      delusionText.textContent = val.toFixed(0);
    }
    const delusionBarFill = document.getElementById("delusionBarFill");
    if (delusionBarFill) {
      delusionBarFill.style.width = (val / 90) + "%";
      // Add high-delusion glow if delusion is above 8000
      if (gameState.delusion > 8000) {
        delusionBarFill.classList.add("delusion-high");
        delusionBarFill.setAttribute("data-tooltip",
          "Delusion builds up from tasks with<br>" + delusionSkills.join(", ") +
          ".<br><br>If it exceeds 9000, your game will reset<br>with 20% of your Power lost!"
        );
      } else {
        delusionBarFill.classList.remove("delusion-high");
        delusionBarFill.setAttribute("data-tooltip",
          "Delusion builds up from tasks with<br>" + delusionSkills.join(", ") +
          ".<br><br>If it exceeds 9000, your game will reset<br>with 20% of your Power lost!"
        );
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
    // Reveal hidden skills on first use
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
      rawXP *= 5;
    }
    skill.xp += rawXP * skill.xpGainFactor;
    let required = Math.pow(skillXpScaling, skill.level - 1);
    while (skill.xp >= required) {
      skill.xp -= required;
      skill.level++;
      updateSkillMultipliers();
      showMessage(formatStringForDisplay(skillName) + " leveled up to " + skill.level + "!");
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
      let baseMult = Math.pow(1.01, sData.level - 1);
      if (sName === "alchemy" && gameState.perks.brewmaster) baseMult *= 1.25;
      if (sName === "travel" && gameState.perks.hoverboard) baseMult *= 3;
      baseMult *= (sData.progressBoost);
      let baseDrain = sData.energyDrain / (sData.drainBoost || 1);
      if (sName === "hacking" && gameState.perks.noob_haxor) baseDrain *= 0.9;
      if (sName === "mechanics" && gameState.perks.futuristic_wrench) baseDrain /= 3;
      if (sName === "charisma" && gameState.perks.kung_fu_zen) baseDrain *= 0.75;
      if (sName === "quantum" && gameState.perks.neural_matrix) baseDrain *= 0.6;
      el.setAttribute("data-tooltip",
        `${formatStringForDisplay(sName)} (Level: ${formatNumber(sData.level)})<br>
         XP: ${formatNumber(sData.xp)} / ${formatNumber(xpTot)}<br>
         Speed: x${formatNumber(baseMult)}<br>
         Energy Drain: ${formatNumber(baseDrain)}x`
      );
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
        // Static display: show only the skill name and level
        div.innerHTML = `
          <div class="skill-name">
            ${formatStringForDisplay(sName)}<br>
            (<span class="skill-level">${formatNumber(s.level)}</span>)
          </div>
          <div class="skill-bar">
            <div class="skill-bar-fill"></div>
          </div>
        `;
        container.appendChild(div);
      }
    });
    updateSkillDisplay();
  }

  /****************************************
   * TOOLTIP SYSTEM
   ****************************************/
  let tooltipEl = null;

  function createTooltipEl() {
    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.className = "custom-tooltip";
      document.body.appendChild(tooltipEl);
    }
  }

  // Show the tooltip near the bounding box of `el`
  function showTooltip(el) {
    if (!el || !el.hasAttribute("data-tooltip")) return;
    createTooltipEl();
    const text = el.getAttribute("data-tooltip");
    tooltipEl.innerHTML = text;
    tooltipEl.style.opacity = 1;
  
    const rect = el.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    let x, y;
  
    // For resources, perks, and upgrades: tooltip to the left
    if (
      el.classList.contains("resource-item") ||
      el.classList.contains("perk-item") ||
      el.closest(".upgrade-display")
    ) {
      x = rect.left + scrollX - tooltipEl.offsetWidth - 6; // 6px gap to left
      y = rect.top + scrollY;
    }
    // For tasks: tooltip to the right (keep same behavior)
    else if (el.closest(".task")) {
      x = rect.right + scrollX + 6;
      y = rect.top + scrollY;
    }
    // For status bars and skills: tooltip below the element
    else if (el.closest(".status-bar") || el.classList.contains("skill")) {
      x = rect.left + scrollX;
      y = rect.bottom + scrollY + 6;
    }
    // Default fallback: below the element
    else {
      x = rect.left + scrollX;
      y = rect.bottom + scrollY + 6;
    }
    
    tooltipEl.style.left = x + "px";
    tooltipEl.style.top = y + "px";
  }
  
  

  function hideTooltip() {
    if (tooltipEl) {
      tooltipEl.style.opacity = 0;
    }
  }

  // We only need pointerover/pointerout globally:
  document.addEventListener("pointerover", (e) => {
    const target = e.target;
    if (target && target.hasAttribute("data-tooltip")) {
      showTooltip(target);
    }
  });
  document.addEventListener("pointerout", (e) => {
    const target = e.target;
    if (target && target.hasAttribute("data-tooltip")) {
      hideTooltip();
    }
  });

  /****************************************
   * FORMULAS: COMBINED MULTIPLIERS & ENERGY DRAINS
   ****************************************/
  function updateSkillMultipliers() {
    Object.keys(gameState.skills).forEach(sName => {
      const sk = gameState.skills[sName];
      
      // Precompute the base multiplier for the skill.
      let baseMult = Math.pow(1.01, sk.level - 1) * (sk.progressBoost || 1);
      
      // Apply perk effects.
      if (sName === "alchemy" && gameState.perks["brewmaster"]) {
        baseMult *= 1.25;
      }
      if (sName === "travel" && gameState.perks["hoverboard"]) {
        baseMult *= 3;
      }
      if (gameState.powerUnlocked && powerSkills.includes(sName)) {
        baseMult *= (1 + (gameState.perks.urban_warfare ? 0.03 : 0.01) * gameState.power);
      }
      
      // Store the precomputed value.
      sk.precomputedMultiplier = baseMult;
      
      // Precompute energy drain factor.
      let drainFactor = sk.energyDrain / (sk.drainBoost || 1);
      if (sName === "mechanics" && gameState.perks.futuristic_wrench) drainFactor /= 3;
      if (sName === "charisma" && gameState.perks.kung_fu_zen) drainFactor *= 0.75;
      if (sName === "quantum" && gameState.perks.neural_matrix) drainFactor *= 0.6;
      if (sName === "hacking" && gameState.perks.noob_haxor) drainFactor *= 0.9;
      sk.precomputedDrainFactor = drainFactor;
    });
  }
  function getCombinedMultiplier(task) {
    let mult = 1;
    if (Array.isArray(task.skills)) {
      task.skills.forEach(sName => {
        const sk = gameState.skills[sName];
        if (sk && sk.precomputedMultiplier) {
          mult *= sk.precomputedMultiplier;
        }
      });
    }
    if (gameState.perks["energetic_bliss"] && gameState.energy > (gameState.startingEnergy * 0.8)) {
      mult *= 2;
    }
    return mult;
  }
  
  function getCombinedEnergyDrain(task, zoneIndex) {
    let baseDrain = baseEnergyDrain;
    if (Array.isArray(task.skills)) {
      task.skills.forEach(sName => {
        const sk = gameState.skills[sName];
        if (sk && sk.precomputedDrainFactor) {
          baseDrain *= sk.precomputedDrainFactor;
        }
      });
    }
    baseDrain *= Math.pow(1.1, zoneIndex - 1);
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
      // lose half resources
      Object.keys(gameState.resources).forEach(rName => {
        gameState.resources[rName] = Math.ceil(gameState.resources[rName] / 2);
      });
      if (gameState.perks["quantum_vitalizer"]) {
        gameState.startingEnergy += (currentZoneIndex+1)/10;
      }
      gameState.numEnergyResets++;
    } else if (reason === "copiumOverflow") {
      // lose all resources, half knowledge
      gameState.resources = {};
      if (gameState.perks["knowledge_preserver"]) {
        gameState.knowledge = Math.floor(gameState.knowledge * 0.9);
      } else {
        gameState.knowledge = Math.floor(gameState.knowledge / 2);
      }
      gameState.copium = 0;
      if (gameState.perks["copium_reactor"]) {
        gameState.startingEnergy += 5;
      }
      gameState.numCopiumResets++;
    } else if (reason === "delusionOverflow") {
      gameState.power = Math.floor(gameState.power * 0.8);
      gameState.delusion = 0;
      gameState.numDelusionResets++;
    } else if (reason === "Prestige") {
      gameState.resources = {};
    };
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
    updateSkillMultipliers();
    saveGameProgress();
    updateEnergyDisplay();
    updateCopiumDisplay();
    updateDelusionDisplay();
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
    resetMsg.textContent = "This is your " +
      (gameState.numEnergyResets + 1) +
      getOrdinalSuffix(gameState.numEnergyResets + 1) +
      " Energy reset.";
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
    resetMsg.textContent = "This is your " +
      (gameState.numCopiumResets + 1) +
      getOrdinalSuffix(gameState.numCopiumResets + 1) +
      " Copium reset.";
  }

  function handleDelusionOverflow() {
    const delusionScreen = document.getElementById("gameOverScreenDelusion");
    delusionScreen.style.display = "flex";
    const delusionContent = document.getElementById("gameOverContentDelusion");
    let resetMsg = delusionContent.querySelector("#delusionResetMsg");
    if (!resetMsg) {
      resetMsg = document.createElement("p");
      resetMsg.id = "delusionResetMsg";
      delusionContent.appendChild(resetMsg);
    }
    resetMsg.textContent = "This is your " +
      (gameState.numDelusionResets + 1) +
      getOrdinalSuffix(gameState.numDelusionResets + 1) +
      " Delusion reset.";
  }

  /****************************************
   * TASK TOGGLING FUNCTIONS
   ****************************************/
  function toggleTask(zoneIndex, taskIndex, button, progressFill, repContainer) {
    const maxSlots = gameState.perks["double_timer"] ? 2 : 1;
    const existing = currentTasks.find(t => t.zoneIndex === zoneIndex && t.taskIndex === taskIndex);

    if (existing) {
      if (existing.paused) {
        // Resume
        const activeCount = currentTasks.filter(t => !t.paused).length;
        if (activeCount >= maxSlots) {
          showMessage("You cannot resume this task because you're already running the maximum number of tasks!");
          return;
        }
        existing.paused = false;
        button.classList.add("active");
        if (existing.task.boss_image) {
          document.getElementById("zoneImage").src = existing.task.boss_image;
        }
      } else {
        // Pause
        existing.paused = true;
        button.classList.remove("active");
        if (!currentTasks.some(t => !t.paused && t.task.boss_image)) {
          document.getElementById("zoneImage").src = zones[zoneIndex].img;
        }
      }
    } else {
      // Start new task
      const activeCount = currentTasks.filter(t => !t.paused).length;
      if (activeCount >= maxSlots) {
        showMessage("You cannot start another task right now!");
        return;
      }
      startTask(zoneIndex, taskIndex, button, progressFill, repContainer);
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
    if (zone.id >= 12 && !gameState.delusionUnlocked) {
      gameState.delusionUnlocked = true;
      showDelusionModal();
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
      const div = document.createElement("div");
      div.className = "task";
      div.setAttribute("data-zone-index", currentZoneIndex);
      div.setAttribute("data-task-index", idx);
      if (task.mandatory) div.classList.add("mandatory-task");
      if (task.type === "Travel") div.classList.add("travel-task");
      else if (task.type === "Prestige") { div.classList.add("prestige-task"); }

      const cDiv = document.createElement("div");
      cDiv.className = "task-control";
      const btn = document.createElement("button");
      btn.style.width = "50%";
      if (task.perk && !gameState.perks[task.perk]) {
        btn.innerHTML = `${task.name} <span class="perk-star">★</span>`;
      } else {
        btn.textContent = task.name;
      }
      // If the task has a boss_image, give the button a red tint
      if (task.boss_image) {
        btn.style.backgroundColor = "rgba(255, 40, 0, 0.5)";
      }
      
      // If the task yields a resource, add its icon
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
      if (task.type === "Travel" && !isTravelAvailable(zone)) {
        btn.disabled = true;
      }
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

      btn.addEventListener("click", () => {
        toggleTask(currentZoneIndex, idx, btn, progressFill, repContainer);
      });

      cDiv.appendChild(btn);
      cDiv.appendChild(repContainer);
      div.appendChild(cDiv);
      div.appendChild(progressBar);

      // "Uses:" info
      const usesP = document.createElement("p");
      let usesColor = (task.skills.length === 1) ? "green"
                     : (task.skills.length === 2) ? "#9aad32"
                     : (task.skills.length === 3) ? "orange"
                     : "red";
      const capitalizedSkills = task.skills.map(s => formatStringForDisplay(s)).join(", ");
      usesP.innerHTML = `<span style="color:${usesColor};">Uses: ${capitalizedSkills}</span>`;
      div.appendChild(usesP);

      tasksContainer.appendChild(div);
    });

    renderPerks();
    showKnowledgeIfUnlocked();
    showPowerIfUnlocked();

    // Simulation Engine automation
    const zoneAutomationEl = document.getElementById("zoneAutomation");
    if (gameState.perks["simulation_engine"]) {
      if (typeof gameState.zoneFullCompletes[currentZoneIndex] !== "number") {
        gameState.zoneFullCompletes[currentZoneIndex] = 0;
      }
      if (gameState.zoneFullCompletes[currentZoneIndex] >= 10) {
        zoneAutomationEl.innerHTML = "";
        const label = document.createElement("span");
        label.textContent = "Automate: ";
        zoneAutomationEl.appendChild(label);

        const zoneBtn = document.createElement("button");
        zoneBtn.textContent = "Zone";
        zoneBtn.addEventListener("click", () => {
          if (gameState.autoRun) {
            gameState.autoRun = false;
            showMessage("Automation disabled.");
          } else {
            gameState.autoRun = true;
            gameState.automationMode = "zone";
            showMessage("Automation set to Zone mode.");
          }
        });
        zoneAutomationEl.appendChild(zoneBtn);

        const allBtn = document.createElement("button");
        allBtn.textContent = "All";
        allBtn.addEventListener("click", () => {
          if (gameState.autoRun) {
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
        zoneAutomationEl.textContent =
          "Full Completes: " + gameState.zoneFullCompletes[currentZoneIndex] + "/10";
      }
    } else {
      zoneAutomationEl.innerHTML = "";
    }
  }

  // Helper: compute the raw base multiplier (without energetic_bliss)
  function getBaseMultiplier(task) {
    let mult = 1;
    if (Array.isArray(task.skills)) {
      task.skills.forEach(sName => {
        const sk = gameState.skills[sName];
        if (sk && sk.precomputedMultiplier) {
          mult *= sk.precomputedMultiplier;
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
    return D * Math.max(gameState.perks["immunity_device"] ? 0.25 : 1, ticksNeeded);
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
      if (gameState.perks["kung_fu_zen"]) baseXP *= 1.25;
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
          skillXP *= 5;
        }
        xpText += `<br>${formatStringForDisplay(sName)}: ` + formatNumber(skillXP) + " XP";
      });
      
      // --- Extra Info ---
      let extraInfo = "";
      if (gameState.knowledgeUnlocked && usedSkills.some(s => knowledgeSkills.includes(s))) {
        extraInfo += `<br><br><span style="color:rgb(40, 210, 117)">Knowledge Gain on Completion: ${formatNumber(zone.id)}</span>`;
      }
      if (gameState.copiumUnlocked && usedSkills.some(s => copiumSkills.includes(s))) {
        let copiumGain = 10 * zone.id;
        if (gameState.perks["copious_alchemist"]) {
          copiumGain *= 0.5;
        }
        extraInfo += `<br><br><span style="color:#dbd834">Copium Gain per Task: ${formatNumber(copiumGain)}</span>`;
      }
      if (gameState.powerUnlocked && task.boss_image) {
        extraInfo += `<br><br><span style="color:rgb(222, 34, 191)">Power Gain on Completion: ${formatNumber(zone.id - 3)}</span>`;
      }
      if (gameState.delusionUnlocked && usedSkills.some(s => delusionSkills.includes(s))) {
        extraInfo += `<br><br><span style="color:#9b59b6">Delusion Gain per Task: 0 - ${formatNumber(zone.id * 100)} (random, skewed to low)</span>`;
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

  function isTravelAvailable(zone) {
    const mandatory = zone.tasks.filter(t => t.mandatory);
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
      const tooltipStr = "Knowledge increases XP gain by <b>" +
        formatNumber(gameState.knowledge * 0.1) +
        "%</b><br>for " + knowledgeSkills.join(", ") + ".";
      knowledgeUpg.parentElement.setAttribute("data-tooltip", tooltipStr);
    }
  }

  function showPowerIfUnlocked() {
    const powerUpg = document.getElementById("powerUpgValue");
    if (!powerUpg) return;
    if (gameState.powerUnlocked) {
      powerUpg.parentElement.style.display = "inline-block";
      powerUpg.textContent = gameState.power;
      const tooltipStr = "Power increases speed by <b>" +
        formatNumber((gameState.perks.urban_warfare ? 3 : 1) * gameState.power) +
        "%</b><br>for Combat and Endurance.";
      powerUpg.parentElement.setAttribute("data-tooltip", tooltipStr);
    }
  }

  /****************************************
   * PERKS RENDER & MODALS
   ****************************************/

  function updatePerksCount() {
    const total = Object.keys(gameState.perks).length;
    const unlocked = Object.keys(gameState.perks).filter(key => gameState.perks[key]).length;
    const perkCount = document.getElementById("perkCount");
    if (perkCount) {
      perkCount.textContent = `(${unlocked}/${total})`;
    }
  }

  function applyPerks() {
    baseEnergyDrain = 0.05;
    if (gameState.perks.healthy_living) {
      baseEnergyDrain *= 0.75; // 25% reduction
    }
    if (gameState.perks.last_stand) {
      baseEnergyDrain *= 0.8;  // 20% reduction
    }
    if(gameState.perks.sandstorm) {
      skillXpScaling = 1.019;
    }
    if(gameState.perks.wise_mechanic) {
      knowledgeSkills = ["tinkering", "intellect", "hacking", "mechanics"];
      showKnowledgeIfUnlocked();
    }
    if(gameState.perks.master_of_ai) {
      delusionSkills = ["charisma", "perception", "negotiation"];
    }
  }
  
  function renderPerks() {
    const grid = document.querySelector("#perksContainer .perks-grid");
    if (!grid) return;
    grid.innerHTML = "";
    Object.keys(gameState.perks).forEach(pKey => {
      const div = document.createElement("div");
      const icon = document.createElement("img");
      icon.src = "images/" + pKey + ".jpg";
      const pStr = formatStringForDisplay(pKey);
      icon.alt = pStr;
      icon.style.pointerEvents = "none";
      if (gameState.perks[pKey]) {
        div.setAttribute("data-tooltip",
          pStr + ":<br>" + (perkDescriptions[pKey] || "An unknown perk.")
        );
        div.className = "perk-item unlocked";
      } else {
        div.setAttribute("data-tooltip",
          pStr + ": Unlock perk to see description."
        );
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
    btn.addEventListener("click", () => {
      modal.remove();
    });
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
    p.innerHTML =
      "Copium unlocked!<br>Tasks using skills below now yield Copium:<br>-" +
      copiumSkills.join("<br>-") +
      "<br><br>If it exceeds 9000, you reset with all Resources and half your Knowledge lost!";
    content.appendChild(p);
    const btn = document.createElement("button");
    btn.textContent = "Got It";
    btn.addEventListener("click", () => {
      modal.remove();
    });
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
    p.innerHTML =
      "Power unlocked!<br>Boss wins grant power (zone - 3)." +
      "<br><br>Power boosts speed of Combat and Endurance!";
    content.appendChild(p);
    const btn = document.createElement("button");
    btn.textContent = "Roger That";
    btn.addEventListener("click", () => {
      modal.remove();
    });
    content.appendChild(btn);
    modal.appendChild(content);
    document.body.appendChild(modal);
  }

  function showDelusionModal() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "delusionModal";
    const content = document.createElement("div");
    content.className = "modal-content";
    const p = document.createElement("p");
    p.innerHTML =
      "Delusion unlocked!<br>Tasks using skills below now yield Delusion:<br>-" +
      delusionSkills.join("<br>-") +
      "<br><br>If it exceeds 9000, you reset with 20% of Power lost!";
    content.appendChild(p);
    const btn = document.createElement("button");
    btn.textContent = "Ouch!";
    btn.addEventListener("click", () => {
      modal.remove();
    });
    content.appendChild(btn);
    modal.appendChild(content);
    document.body.appendChild(modal);
    showDelusionBar();
  }

  function showPrestigeModal() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "prestigeModal";
    
    const content = document.createElement("div");
    // Using your modal-content class and an additional class for custom Prestige styling
    content.className = "modal-content prestige-modal";
    
    content.innerHTML = `
      <h2>Congratulations!</h2>
      <p>
        You have completed all the current content! Your journey has been nothing short of extraordinary.
        Every challenge you faced, every strategic decision you made, and all the hard work you put in have led you to this moment.
        Your perseverance and brilliant strategies have paid off!
      </p>
      <p>
        <strong>Energy Resets:</strong> ${gameState.numEnergyResets}<br>
        <strong>Copium Resets:</strong> ${gameState.numCopiumResets}<br>
        <strong>Delusion Resets:</strong> ${gameState.numDelusionResets}
      </p>
      <p>
        This is where the prestige layer will be added in future versions, and many more zones await to be captured.
        In the meantime, visit <a href="https://www.degensidle.com/" target="_blank"><strong>Degens Idle</strong></a> – my more complete game – and know that I truly appreciate you playing this game.
        Also, join our <a href="https://discordapp.com/channels/1268685194819538984/1337527757629816933" target="_blank">Discord Channel</a> to follow development!
      </p>
    `;
    
    // Create a wrapper for the button so it can be centered via CSS
    const btnWrapper = document.createElement("div");
    btnWrapper.className = "prestige-btn-wrapper";
    
    const btn = document.createElement("button");
    btn.textContent = "Let me keep going!";
    btn.addEventListener("click", () => {
      modal.remove();
      resetGame("Prestige");
    });
    
    btnWrapper.appendChild(btn);
    content.appendChild(btnWrapper);
    modal.appendChild(content);
    document.body.appendChild(modal);
  }
  
  

  function showCopiumBar() {
    const cBar = document.getElementById("copiumBarContainer");
    if (cBar) {
      cBar.style.display = "grid";
    }
    updateCopiumDisplay();
  }

  function showDelusionBar() {
    const dBar = document.getElementById("delusionBarContainer");
    if (dBar) {
      dBar.style.display = "grid";
    }
    updateDelusionDisplay();
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

      // vertical layout
      content.style.display = "flex";
      content.style.flexDirection = "column";
      content.style.gap = "10px";

      // cheat codes
      const cheatBtn = document.createElement("button");
      cheatBtn.textContent = "Cheat Codes";
      cheatBtn.addEventListener("click", () => {
        showCheatCodeModal();
      });
      content.appendChild(cheatBtn);

      // full restart
      const restartAll = document.createElement("button");
      restartAll.textContent = "FULL RESTART";
      restartAll.style.backgroundColor = "#e74c3c";
      restartAll.addEventListener("click", () => {
        if (confirm("Are you sure you want to FULL RESTART? This cannot be undone.")) {
          localStorage.removeItem("degensAdventureProgress");
          fullRestart();
          modal.remove();
        }
      });
      content.appendChild(restartAll);

      // back
      const backBtn = document.createElement("button");
      backBtn.textContent = "Back";
      backBtn.style.backgroundColor = "#27ae60";
      backBtn.addEventListener("click", () => {
        modal.remove();
      });
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
    document.getElementById("delusionBarContainer").style.display = "none";
    updateEnergyDisplay();
    renderResources();
    gatherAllPerks();
    updateSkillMultipliers();
    renderSkills();
    updateSkillDisplay();
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

  document.getElementById("restartButtonDelusion").addEventListener("click", () => {
    document.getElementById("gameOverScreenDelusion").style.display = "none";
    resetGame("delusionOverflow");
  });

  function showCheatCodeModal() {
    const modal = document.createElement("div");
    modal.id = "cheatCodeModal";
    modal.className = "modal";
    const content = document.createElement("div");
    content.className = "modal-content";
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
    cancelBtn.style.backgroundColor = "#27ae60";
    cancelBtn.addEventListener("click", () => {
      modal.remove();
    });
    content.appendChild(cancelBtn);

    modal.appendChild(content);
    document.body.appendChild(modal);
  }

  function processCheatCode(code) {
    if (code === "BetterStart") {
      ["endurance", "tinkering", "charisma", "alchemy"].forEach(skillName => {
        if (gameState.skills[skillName].level < 250) {
          gameState.skills[skillName].level = 250;
          gameState.skills[skillName].xp = 0;
        }
      });
      if (gameState.skills["travel"].level < 200) {
        gameState.skills["travel"].level = 200;
        gameState.skills["travel"].xp = 0;
      }
      showConfirmationModal("Cheat Code Activated: BetterStart");
      updateSkillMultipliers();
      renderSkills();
      updateSkillDisplay();
      updateTasksHoverInfo();
    } else if (code === "WhatAboutOtherSkills") {
      ["intellect", "perception", "mechanics"].forEach(skillName => {
        if (gameState.skills[skillName].level < 150) {
          gameState.skills[skillName].level = 150;
          gameState.skills[skillName].xp = 0;
        }
      });
      showConfirmationModal("Cheat Code Activated: WhatAboutOtherSkills");
      updateSkillMultipliers();
      renderSkills();
      updateSkillDisplay();
      updateTasksHoverInfo();
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
    okBtn.style.backgroundColor = "#27ae60";
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
    currentTasks.forEach((tData) => {
      if (tData.paused) return;
      const oldProgress = tData.progress;
      const zone = zones[tData.zoneIndex];
      let speedMult = getCombinedMultiplier(tData.task);
      tData.progress += tickDuration * speedMult;
      let singleTickSkill = false;
      if (tData.progress > tData.totalDuration) {
        tData.progress = tData.totalDuration;
        if (gameState.perks["immunity_device"]) {
          singleTickSkill = true;
        }
      }
      const delta = tData.progress - oldProgress;
      let drain = getCombinedEnergyDrain(tData.task, tData.zoneIndex);
      if (!gameState.cyberneticArmorTaskRunning && gameState.numCyberneticArmors > 0) {
        gameState.cyberneticArmorTaskRunning = true;
        gameState.numCyberneticArmors--;
      }
      if (gameState.cyberneticArmorTaskRunning) {
        drain *= 0.25;
      }
      if (singleTickSkill) {
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
      if (gameState.perks["kung_fu_zen"]) xpEach *= 1.25;
      usedSkills.forEach(sName => {
        addXP(sName, xpEach);
      });
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
        if (gameState.delusionUnlocked && usedSkills.some(s => delusionSkills.includes(s))) {
          // Set the lambda parameter to control the steepness.
          // A larger lambda means the probability declines more quickly.
          const lambda = 0.5; // Experiment with this value to get your desired shape
          
          // Generate an exponential random value.
          let expValue = -Math.log(Math.random()) / lambda;
          
          // Clamp the value to a maximum of 100 to keep it in a similar range.
          expValue = Math.min(expValue, 100);
          
          // Convert to an integer multiplier from 0 to 99.
          const randomMultiplier = Math.floor(expValue);
          
          // Apply the multiplier as before.
          gameState.delusion += (randomMultiplier * zone.id);
          
          if (gameState.delusion > 9000) {
            currentTasks = [];
            gameState.autoRun = false;
            handleDelusionOverflow();
            return;
          }
          
          updateDelusionDisplay();
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
            // Full completion
            gameState.zoneFullCompletes[tData.zoneIndex] =
              (gameState.zoneFullCompletes[tData.zoneIndex] || 0) + 1;
          }
          showMessage(task.name + " completed");
          tData.button.classList.remove("active");
          removeTaskFromCurrent(tData);
          if (gameState.perks.crypto_wallet) {
            //  crypto_wallet:          "Each time you travel:<br>5% chance to gain 25 Energy<br>5% chance to lose 25 Copium<br>5% chance to lose 25 Delusion<br>2% chance to gain 25 Knowledge<br>0.1% chance to gain 25 Power",
            if (Math.random() < 0.05) {
              gameState.energy += 25;
              showMessage("Crypto Wallet: +25 Energy");
              updateEnergyDisplay();
            }
            if (Math.random() < 0.05) {
              gameState.copium = Math.max(gameState.copium - 25, 0);
              showMessage("Crypto Wallet: -25 Copium");
              updateCopiumDisplay();
            }
            if (Math.random() < 0.05) {
              gameState.delusion = Math.max(gameState.delusion - 25, 0);
              showMessage("Crypto Wallet: -25 Delusion");
              updateDelusionDisplay();
            }
            if (Math.random() < 0.02) {
              gameState.knowledge += 25;
              showMessage("Crypto Wallet: +25 Knowledge");
              showKnowledgeIfUnlocked();
            }
            if (Math.random() < 0.001) {
              showMessage("Crypto Wallet: +25 Power");
              gameState.power += 25;
              showPowerIfUnlocked();
            }
          }
          nextZone();
          displayZone();
        } else {
          // Non-Travel tasks
          if (task.count >= task.maxReps) {
            hideTooltip();
            tData.button.parentElement.parentElement.style.display = "none";
            removeTaskFromCurrent(tData);
          } else {
            if (gameState.perks["completionist"]) {
              tData.progress = 0;
              tData.progressFill.style.width = "0%";
            } else {
              removeTaskFromCurrent(tData);
            }
            gameState.cyberneticArmorTaskRunning = false;
          }
        }
        if (task.count >= task.maxReps && gameState.knowledgeUnlocked && usedSkills.some(s => knowledgeSkills.includes(s))) {
          gameState.knowledge += zone.id;
          showKnowledgeIfUnlocked();
        }
        if (task.count >= task.maxReps && task.boss_image) {
          if (!gameState.powerUnlocked) {
            gameState.powerUnlocked = true;
            showPowerModal();
          }
          gameState.power += (zone.id - 3);
          showPowerIfUnlocked();
        }
        if (task.perk && !gameState.perks[task.perk] && task.count >= task.maxReps) {
          gameState.perks[task.perk] = true;
          if (task.perk === "basic_mech") {
            gameState.startingEnergy += 25;
          }
          showMessage("Perk unlocked: " + formatStringForDisplay(task.perk));
          if (task.perk === "urban_warfare") {
            showPowerIfUnlocked();
          }
          applyPerks();
          updateSkillMultipliers();
          renderPerks();
          updatePerksCount();
          updateSkillDisplay();
        }
        // If the task is a Prestige task and it’s now fully completed, show the prestige modal.
        if (task.type === "Prestige" && task.count >= task.maxReps) {
          showPrestigeModal();
        }
        updateTasksHoverInfo();
      }
    });

    // Update zone image if a boss is active
    const zoneImage = document.getElementById("zoneImage");
    const activeBossTask = currentTasks.find(t => !t.paused && t.task.boss_image);
    if (activeBossTask) {
      zoneImage.src = activeBossTask.task.boss_image;
    } else {
      zoneImage.src = zones[currentZoneIndex].img;
    }

    // If autoRun is on, start new tasks if there are available task slots.
    if (gameState.autoRun) {
      const maxSlots = gameState.perks["double_timer"] ? 2 : 1;
      // Continue starting tasks while the number of active (not paused) tasks is less than maxSlots.
      while (currentTasks.filter(t => !t.paused).length < maxSlots) {
        let taskStarted = false;
        const zone = zones[currentZoneIndex];
        for (let idx = 0; idx < zone.tasks.length; idx++) {
          const task = zone.tasks[idx];
          if (task.count < task.maxReps &&
              !currentTasks.some(t => t.zoneIndex === currentZoneIndex && t.taskIndex === idx)) {
            const taskDiv = document.querySelector(`.task[data-zone-index="${currentZoneIndex}"][data-task-index="${idx}"]`);
            if (taskDiv) {
              const btn = taskDiv.querySelector("button");
              const progressFill = taskDiv.querySelector(".current-progress-fill");
              const repContainer = taskDiv.querySelector(".rep-container");
              if (btn && progressFill && repContainer) {
                startTask(currentZoneIndex, idx, btn, progressFill, repContainer);
                taskStarted = true;
                break;
              }
            }
          }
        }
        if (!taskStarted) break;
      }
    }
    saveGameProgress();
  }
  setInterval(gameLoop, tickDuration);

  /****************************************
   * INIT
   ****************************************/
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gameOverScreenEnergy").style.display = "none";
    document.getElementById("gameOverScreenCopium").style.display = "none";
    document.getElementById("gameOverScreenDelusion").style.display = "none";
    const kUpg = document.getElementById("knowledgeUpgValue");
    if (kUpg) kUpg.parentElement.style.display = "none";

    loadGameProgress();
    gatherAllPerks();
    renderPerks();
    applyPerks();
    renderSkills();
    updateEnergyDisplay();
    if (gameState.copiumUnlocked) {
      showCopiumBar();
    }
    if (gameState.delusionUnlocked) {
      showDelusionBar();
    }

    //REMOVE: temp fix for omniscience xpFactor to not require full restart
    gameState.skills.omniscience.xpGainFactor = 1;
    
    updateSkillMultipliers();
    updateSkillDisplay();
    renderResources();
    updatePerksCount();
    displayZone();

    // Version check
    if (gameState.gameVersion !== CURRENT_GAME_VERSION) {
      const banner = document.getElementById("versionBanner");
      if (banner) {
        banner.style.display = "block";
        banner.innerHTML =
          "New major update was released and your save is out of date. This may cause issues. Full Restart through settings is advised.";
      }
    }
  });

  // Expose functions for perks_and_resources.js
  window.updateSkillMultipliers = updateSkillMultipliers;
  window.updateSkillDisplay = updateSkillDisplay;
  window.updateTasksHoverInfo = updateTasksHoverInfo;
  window.updateEnergyDisplay = updateEnergyDisplay;
  window.updateCopiumDisplay = updateCopiumDisplay;
  window.updateDelusionDisplay = updateDelusionDisplay;
  window.showMessage = (msg) => showMessage(msg);
  window.formatStringForDisplay = (str) => formatStringForDisplay(str);

  // Expose some functions for debugging
  window.getGameState = () => gameState;
  window.getXpScale = () => xpScale;
  window.setXpScale = (newScale) => xpScale = newScale;
  window.showPrestigeModal = () => showPrestigeModal();
})();
