(function() {
  /****************************************
   * DEFINITIONS: Skills affecting knowledge, copium, delusion
   ****************************************/
  const knowledgeSkills = ["tinkering", "intellect", "hacking"];
  const copiumSkills    = ["endurance", "alchemy", "travel", "mechanics", "combat"];
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
      knowledgeUnlocked: false,
      copiumUnlocked: false,
      delusionUnlocked: false,
      // Note: Default boost values are now 1.
      skills: {
        endurance:   { level: 1, xp: 0, visible: true,  energyDrain: 2,   progressBoost: 1, drainBoost: 1, xpGainFactor: 1 },
        tinkering:   { level: 1, xp: 0, visible: true,  energyDrain: 2.5, progressBoost: 1, drainBoost: 1, xpGainFactor: 1 },
        charisma:    { level: 1, xp: 0, visible: true,  energyDrain: 1.5, progressBoost: 1, drainBoost: 1, xpGainFactor: 1 },
        alchemy:     { level: 1, xp: 0, visible: true,  energyDrain: 10,  progressBoost: 1, drainBoost: 1, xpGainFactor: 1 },
        travel:      { level: 1, xp: 0, visible: true,  energyDrain: 1,   progressBoost: 1, drainBoost: 1, xpGainFactor: 1.5 },
        intellect:   { level: 1, xp: 0, visible: false, energyDrain: 3,   progressBoost: 1, drainBoost: 1, xpGainFactor: 0.5 },
        perception:  { level: 1, xp: 0, visible: false, energyDrain: 2,   progressBoost: 1, drainBoost: 1, xpGainFactor: 0.3 },
        mechanics:   { level: 1, xp: 0, visible: false, energyDrain: 5,   progressBoost: 1, drainBoost: 1, xpGainFactor: 0.1 },
        combat:      { level: 1, xp: 0, visible: false, energyDrain: 20,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.2 },
        hacking:     { level: 1, xp: 0, visible: false, energyDrain: 7,   progressBoost: 1, drainBoost: 1, xpGainFactor: 0.01 },
        cybernetics: { level: 1, xp: 0, visible: false, energyDrain: 12,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.05 },
        negotiation: { level: 1, xp: 0, visible: false, energyDrain: 20,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.02 },
        aiMastery:   { level: 1, xp: 0, visible: false, energyDrain: 15,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.001 },
        quantum:     { level: 1, xp: 0, visible: false, energyDrain: 50,  progressBoost: 1, drainBoost: 1, xpGainFactor: 0.0001 },
        omniscience: { level: 1, xp: 0, visible: false, energyDrain: 100, progressBoost: 1, drainBoost: 1, xpGainFactor: 0.00001 }
      },
      perks: {},
      numEnergyResets: 0,
      numCopiumResets: 0,
      numDelusionResets: 0
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
    completionist:   "Automatically continue tasks until max reps.",
    healthy_living:  "Reduce energy drain by 25%.",
    basic_mech:      "Increases starting Energy by 25.",
    double_timer:    "Allows running two tasks simultaneously.",
    energetic_bliss: "Doubles progress while energy is above 50%.",
    workaholic:      "All XP gains increased by 50%.",
    brewmaster:      "Alchemy is 25% faster.",
    copium_reactor:  "Get +5 starting Energy for each Copium reset."
  };

  /****************************************
   * RESOURCE ACTIONS & RENDERING
   ****************************************/
  const resourceActions = {
    "energy_elixir": {
      onConsume: amt => { gameState.energy += 3 * amt; updateEnergyDisplay(); },
      tooltip: "Click to gain +3 Energy per Energy Elixir. Right-click to consume all."
    },
    "magnifying_glass": {
      onConsume: amt => { gameState.skills["perception"].progressBoost += 0.05 * amt; updateSkillDisplay(); },
      tooltip: "Click to boost Perception by 5% per Magnifying Glass. Right-click to consume all."
    },
    "goggles": {
      onConsume: amt => { gameState.skills["alchemy"].drainBoost += 0.05 * amt; updateSkillDisplay(); },
      tooltip: "Click to reduce Alchemy energy drain by 5% per Goggles. Right-click to consume all."
    },
    "cybernetic_potion": {
      onConsume: amt => { gameState.skills["cybernetics"].drainBoost += 0.2 * amt; updateSkillDisplay(); },
      tooltip: "Click to reduce Cybernetics energy drain by 20% per Cybernetic Potion. Right-click to consume all."
    }
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
      const img = document.createElement("img");
      img.src = "images/" + rName + ".jpg";
      img.alt = rName;
      img.style.pointerEvents = "none";
      const cnt = document.createElement("div");
      cnt.className = "resource-count";
      cnt.textContent = count;
      div.setAttribute("data-tooltip", (resourceActions[rName] && resourceActions[rName].tooltip) ? resourceActions[rName].tooltip : "Click to consume 1 unit. Right-click to consume all.");
      div.addEventListener("click", () => {
        if (gameState.resources[rName] > 0) {
          consumeResource(rName, 1);
          if (resourceActions[rName] && resourceActions[rName].onConsume) {
            resourceActions[rName].onConsume(1);
            hideTooltip();
          }
        }
      });
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
    document.getElementById("energyText").textContent = val.toFixed(0);
    document.getElementById("energyBarFill").style.width = (val * 100 / gameState.startingEnergy) + "%";
  }
  function updateCopiumDisplay() {
    const val = Math.max(0, gameState.copium);
    document.getElementById("copiumText").textContent = val.toFixed(0);
    document.getElementById("copiumBarFill").style.width = (val / 90) + "%";
  }

  /****************************************
   * SKILLS & XP FUNCTIONS
   ****************************************/
  function addXP(skillName, rawXP) {
    if (rawXP <= 0) return;
    const skill = gameState.skills[skillName];
    if (!skill) return;
    // If the skill was hidden, reveal it now and re-render skills.
    if (!skill.visible) {
      skill.visible = true;
      renderSkills();
    }
    if (gameState.knowledgeUnlocked && knowledgeSkills.includes(skillName)) {
      rawXP *= (1 + 0.001 * gameState.knowledge);
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
      if (sName === "perception" && sData.progressBoost) baseMult *= (1 + sData.progressBoost);
      let drainMsg = (sName !== "travel") ? `<br>Energy Drain: ${formatNumber(sData.energyDrain / (sData.drainBoost || 1))}x` : "";
      el.setAttribute("data-tooltip", `<strong>${capitalize(sName)} (Level: ${formatNumber(sData.level)})</strong><br>
                                      XP: ${formatNumber(sData.xp)} / ${formatNumber(xpTot)}<br>
                                      Speed: x${formatNumber(baseMult)}${drainMsg}`);
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
        // Static display: only skill name and level; XP details are in tooltip.
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
  function updateTooltipPosition(e) {
    let x = e.pageX + 10, y = e.pageY + 10;
    const tooltipWidth = tooltipEl.offsetWidth, tooltipHeight = tooltipEl.offsetHeight;
    if (x + tooltipWidth > window.innerWidth) x = e.pageX - tooltipWidth - 10;
    if (y + tooltipHeight > window.innerHeight) y = e.pageY - tooltipHeight - 10;
    tooltipEl.style.left = x + "px";
    tooltipEl.style.top = y + "px";
  }
  function showTooltip(e, text) {
    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.className = "custom-tooltip";
      document.body.appendChild(tooltipEl);
    }
    tooltipEl.innerHTML = text;
    updateTooltipPosition(e);
    tooltipEl.style.opacity = 1;
  }
  function hideTooltip() {
    if (tooltipEl) tooltipEl.style.opacity = 0;
  }
  document.addEventListener("mouseover", e => {
    if (e.target.hasAttribute("data-tooltip")) showTooltip(e, e.target.getAttribute("data-tooltip"));
  });
  document.addEventListener("mousemove", e => {
    if (tooltipEl && tooltipEl.style.opacity === "1") updateTooltipPosition(e);
  });
  document.addEventListener("mouseout", e => {
    if (e.target.hasAttribute("data-tooltip")) hideTooltip();
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
          sm *= (sk.progressBoost || 1);
          mult *= sm;
        }
      });
    }
    return mult;
  }
  function getCombinedEnergyDrain(task) {
    let baseDrain = 0.05;
    if (Array.isArray(task.skills)) {
      task.skills.forEach(sName => {
        if (gameState.skills[sName]) {
          baseDrain *= gameState.skills[sName].energyDrain / (gameState.skills[sName].drainBoost || 1);
        }
      });
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
    resetMsg.textContent = "This is your " + gameState.numEnergyResets + getOrdinalSuffix(gameState.numEnergyResets) + " Energy reset.";
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
    resetMsg.textContent = "This is your " + gameState.numCopiumResets + getOrdinalSuffix(gameState.numCopiumResets) + " Copium reset.";
  }

  /****************************************
   * TASK TOGGLING FUNCTIONS
   ****************************************/
  function toggleTask(zoneIndex, taskIndex, button, progressFill, repContainer) {
    const activeCount = currentTasks.filter(t => !t.paused).length;
    const existing = currentTasks.find(t => t.zoneIndex === zoneIndex && t.taskIndex === taskIndex);
    if (existing) {
      existing.paused = !existing.paused;
      button.classList.toggle("active", !existing.paused);
    } else {
      const maxSlots = gameState.perks["double_timer"] ? 2 : 1;
      if (activeCount >= maxSlots) {
        showMessage("You cannot start another task right now!");
        return;
      }
      startTask(zoneIndex, taskIndex, button, progressFill, repContainer);
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
    document.getElementById("zoneName").textContent = `Zone ${zone.id}: ${zone.name}`;
    const zImg = document.getElementById("zoneImage");
    if (zImg && zone.img) { zImg.src = zone.img; zImg.alt = zone.name; }
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
      // Set tooltip for the button with the task description only.
      btn.setAttribute("data-tooltip", task.description);
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
  }
  function nextZone() {
    currentZoneIndex++;
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
        div.setAttribute("data-tooltip", formatPerkName(pKey) + ": " + (perkDescriptions[pKey] || "An unknown perk."));
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
  function showCopiumBar() {
    const cBar = document.getElementById("copiumBarContainer");
    if (cBar) cBar.style.display = "grid";
    const copiumBarElem = document.getElementById("copiumBarFill");
    if (copiumBarElem) {
      copiumBarElem.setAttribute("data-tooltip",
        "Copium builds up from tasks with " + copiumSkills.join(", ") +
        ". If it exceeds 9000, you reset with half your knowledge lost!"
      );
    }
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
      const restartAll = document.createElement("button");
      restartAll.textContent = "FULL RESTART";
      restartAll.addEventListener("click", () => {
        localStorage.clear();
        fullRestart();
        modal.remove();
      });
      content.appendChild(restartAll);
      const backBtn = document.createElement("button");
      backBtn.textContent = "Go Back";
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
    displayZone();
  }
  document.getElementById("restartButtonEnergy").addEventListener("click", () => {
    document.getElementById("gameOverScreenEnergy").style.display = "none";
    resetGame("energyLoss");
  });
  document.getElementById("restartButtonCopium").addEventListener("click", () => {
    document.getElementById("gameOverScreenCopium").style.display = "none";
    resetGame("copiumOverflow");
  });

  /****************************************
   * MAIN GAME LOOP
   ****************************************/
  function gameLoop() {
    if (currentTasks.length === 0) return;
    currentTasks.forEach((tData, idx) => {
      if (tData.paused) return;
      const oldProgress = tData.progress;
      const zone = zones[tData.zoneIndex];
      let speedMult = getCombinedMultiplier(tData.task);
      if (gameState.perks["energetic_bliss"] && gameState.energy > (gameState.startingEnergy * 0.5)) {
        speedMult *= 2;
      }
      tData.progress += tickDuration * speedMult;
      if (tData.progress > tData.totalDuration) tData.progress = tData.totalDuration;
      const delta = tData.progress - oldProgress;
      const zoneDrain = Math.pow(1.1, zone.id - 1);
      const drain = getCombinedEnergyDrain(tData.task) * zoneDrain * (gameState.perks["healthy_living"] ? 0.75 : 1);
      gameState.energy -= drain;
      updateEnergyDisplay();
      if (gameState.energy <= 0) {
        gameState.energy = 0;
        updateEnergyDisplay();
        currentTasks = [];
        handleGameOver();
        return;
      }
      const baseXP = delta * xpScale;
      const usedSkills = tData.task.skills || [];
      let xpEach = baseXP / (usedSkills.length || 1);
      if (gameState.perks["workaholic"]) xpEach *= 1.5;
      if (gameState.perks["energetic_bliss"] && gameState.energy > 50) xpEach *= 2;
      usedSkills.forEach(sName => { addXP(sName, xpEach); });
      const pct = (tData.progress / tData.totalDuration) * 100;
      tData.progressFill.style.width = Math.min(pct, 100) + "%";
      if (tData.progress >= tData.totalDuration) {
        const task = zone.tasks[tData.taskIndex];
      
        // Increment the task count if not yet at max.
        if (task.count < task.maxReps) {
          task.count++;
        }
      
        // Produce resources.
        if (task.resource) {
          addResource(task.resource, 1);
        } else if (task.resources && Array.isArray(task.resources)) {
          task.resources.forEach(r => addResource(r, 1));
        }
      
        // Process copium.
        if (gameState.copiumUnlocked && usedSkills.some(s => copiumSkills.includes(s))) {
          gameState.copium += (10 * zone.id);
          if (gameState.copium > 9000) {
            currentTasks = [];
            handleCopiumOverflow();
            return;
          }
          updateCopiumDisplay();
        }
      
        updateRepContainer(tData.repContainer, task);
      
        // For mandatory tasks that unlock travel.
        if (task.mandatory && task.count >= task.maxReps && isTravelAvailable(zone)) {
          enableTravelButtons(tData.zoneIndex);
        }
      
        if (task.type === "Travel") {
          // Travel tasks: process as before.
          showMessage("Travel complete: " + task.name);
          tData.button.classList.remove("active");
          removeTaskFromCurrent(tData);
          nextZone();
          displayZone();
        } else {
          // Non-Travel tasks:
          if (task.count >= task.maxReps) {
            // Regardless of Completionist, if maximum count is reached, hide the task.
            hideTooltip();
            tData.button.parentElement.parentElement.style.display = "none";
            removeTaskFromCurrent(tData);
          } else {
            // Task not yet complete.
            if (gameState.perks["completionist"]) {
              // With Completionist, automatically reset progress for the next repetition.
              showMessage(`Repetition complete: ${task.name} (${task.count}/${task.maxReps})`);
              tData.progress = 0;
              tData.progressFill.style.width = "0%";
            } else {
              // Without Completionist, stop running after one repetition so the player must click to restart.
              showMessage(`Repetition complete: ${task.name} (${task.count}/${task.maxReps}). Click to run again.`);
              removeTaskFromCurrent(tData);
            }
          }
        }
      
        // Award knowledge only once when the task reaches max repetitions.
        if (task.count >= task.maxReps &&
            gameState.knowledgeUnlocked &&
            usedSkills.some(s => knowledgeSkills.includes(s))) {
          gameState.knowledge += zone.id;
          showMessage(`+1 Knowledge (Total: ${gameState.knowledge})`);
          showKnowledgeIfUnlocked();
        }
      
        // Unlock perk if applicable.
        if (task.perk && !gameState.perks[task.perk] && task.count >= task.maxReps) {
          gameState.perks[task.perk] = true;
          if (task.perk === "basic_mech") gameState.startingEnergy += 25;
          showMessage("Perk unlocked: " + formatPerkName(task.perk));
          renderPerks();
        }
      }      
    });
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

  /****************************************
   * INIT
   ****************************************/
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gameOverScreenEnergy").style.display = "none";
    document.getElementById("gameOverScreenCopium").style.display = "none";
    const energyBarElem = document.getElementById("energyBarFill");
    if (energyBarElem) {
      energyBarElem.setAttribute("data-tooltip",
        "Energy drains based on each skill used. Multiple skills multiply the drain. A high-level multi-skill task can drain energy quickly!"
      );
    }
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
  });

  // Expose gameState for debugging.
  window.getGameState = () => gameState;
})();
