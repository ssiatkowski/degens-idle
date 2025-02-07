(function() {
  /****************************************
   * DEFINITIONS: Skills that affect knowledge, copium, delusion
   ****************************************/
  const knowledgeSkills = ["tinkering", "intellect", "hacking"];
  const copiumSkills = ["endurance", "alchemy", "travel", "mechanics", "combat"];
  const delusionSkills = ["charisma", "perception", "aiMastery", "negotiation", "omniscience"];

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
      // You can add copiumUnlocked, delusionUnlocked if you want to lock them behind certain zones
      copiumUnlocked: false,
      delusionUnlocked: false,
      skills: {
        endurance:   { level: 1, xp: 0, visible: true,  energyDrain: 2,   progressBoost: 1, drainBoost: 1 },
        tinkering:   { level: 1, xp: 0, visible: true,  energyDrain: 2.5, progressBoost: 1, drainBoost: 1 },
        charisma:    { level: 1, xp: 0, visible: true,  energyDrain: 1.5, progressBoost: 1, drainBoost: 1 },
        alchemy:     { level: 1, xp: 0, visible: true,  energyDrain: 10,   progressBoost: 1, drainBoost: 1 },
        travel:      { level: 1, xp: 0, visible: true,  energyDrain: 1,   progressBoost: 1, drainBoost: 1 },

        intellect:   { level: 1, xp: 0, visible: false, energyDrain: 3, progressBoost: 1, drainBoost: 1 },
        perception:  { level: 1, xp: 0, visible: false, energyDrain: 2, progressBoost: 1, drainBoost: 1 },
        mechanics:   { level: 1, xp: 0, visible: false, energyDrain: 5,   progressBoost: 1, drainBoost: 1 },
        combat:      { level: 1, xp: 0, visible: false, energyDrain: 20,   progressBoost: 1, drainBoost: 1 },
        hacking:     { level: 1, xp: 0, visible: false, energyDrain: 7,   progressBoost: 1, drainBoost: 1 },
        aiMastery:   { level: 1, xp: 0, visible: false, energyDrain: 15,   progressBoost: 1, drainBoost: 1 },
        negotiation: { level: 1, xp: 0, visible: false, energyDrain: 20,   progressBoost: 1, drainBoost: 1 },
        cybernetics: { level: 1, xp: 0, visible: false, energyDrain: 25,   progressBoost: 1, drainBoost: 1 },
        quantum:     { level: 1, xp: 0, visible: false, energyDrain: 50,  progressBoost: 1, drainBoost: 1 },
        omniscience: { level: 1, xp: 0, visible: false, energyDrain: 100, progressBoost: 1, drainBoost: 1 }
      },
      perks: {}
    };
  }

  /****************************************
   * GLOBALS & GAME SETTINGS
   ****************************************/
  let gameState = getInitialGameState();
  let currentZoneIndex = 0; 
  let currentTasks = [];  
  const tickDuration = 100;  
  const xpScale = 0.001;   // xp per tick
  const skillXpScaling = 1.02;
  const perkDescriptions = {
    completionist:   "Automatically continue tasks until max reps.",
    healthy_living:  "Reduce energy drain by 25%.",
    basic_mech:      "Increases starting Energy by 25.",
    double_timer:    "Allows running two tasks simultaneously.",
    energetic_bliss: "Doubles progress/XP if energy is above 50.",
    workaholic:      "All XP gains increased by 50%.",
    brewmaster:      "Alchemy is 25% faster."
  };

  /****************************************
   * RESOURCE ACTIONS
   ****************************************/
  const resourceActions = {
    "energy_elixir": {
      onConsume: function(amt) {
        // Each energy_elixir consumed gives +3 energy per unit.
        gameState.energy += 3 * amt;
        updateEnergyDisplay();
      },
      tooltip: "Click to gain +3 Energy per Energy Elixir. Right-click to consume all."
    },
    "magnifying_glass": {
      onConsume: function(amt) {
        gameState.skills["perception"].progressBoost += 0.05 * amt;
        updateSkillDisplay();
      },
      tooltip: "Click to boost Perception by 5% per Magnifying Glass. Right-click to consume all."
    },
    "goggles": {
      onConsume: function(amt) {
        gameState.skills["alchemy"].drainBoost += 0.05 * amt;
        updateSkillDisplay();
      },
      tooltip: "Click to reduce Alchemy energy drain by 5% per Goggles. Right-click to consume all."
    }
  };

  /****************************************
   * LOAD / SAVE / INIT PERKS
   ****************************************/
  function gatherAllPerks() {
    const perkSet = new Set();
    zones.forEach(zone => {
      zone.tasks.forEach(task => {
        if (task.perk) perkSet.add(task.perk);
      });
    });
    perkSet.forEach(pk => {
      if (!gameState.perks.hasOwnProperty(pk)) {
        gameState.perks[pk] = false;
      }
    });
  }
  function saveGameProgress() {
    const zonesProgress = zones.map(z => z.tasks.map(t => t.count));
    const data = {
      gameState,
      currentZoneIndex,
      zonesProgress,
    };
    localStorage.setItem("degensAdventureProgress", JSON.stringify(data));
  }
  function loadGameProgress() {
    const saved = localStorage.getItem("degensAdventureProgress");
    if (!saved) return;
    try {
      const data = JSON.parse(saved);
      if (data.gameState) gameState = data.gameState;
      if (typeof data.currentZoneIndex === "number") {
        currentZoneIndex = data.currentZoneIndex;
      }
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
   * UTILITY
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
    setTimeout(() => {
      if (el.textContent === msg) {
        el.textContent = "";
      }
    }, 3000);
  }

  /****************************************
   * ENERGY & UI
   ****************************************/
  function updateEnergyDisplay() {
    const val = Math.max(0, gameState.energy);
    const energyText = document.getElementById("energyText");
    if (energyText) {
      energyText.textContent = val.toFixed(0);
    }
    const energyFill = document.getElementById("energyBarFill");
    if (energyFill) {
      energyFill.style.width = (val * 100 / gameState.startingEnergy) + "%";
    }
  }

  function updateCopiumDisplay() {
    const val = Math.max(0, gameState.copium);
    const copiumText = document.getElementById("copiumText");
    if (copiumText) {
      copiumText.textContent = val.toFixed(0);
    }
    const copiumFill = document.getElementById("copiumBarFill");
    if (copiumFill) {
      copiumFill.style.width = (val / 90) + "%";
    }
  }

  /****************************************
   * RESOURCES
   ****************************************/
  function addResource(name, amt) {
    if (!gameState.resources[name]) {
      gameState.resources[name] = 0;
    }
    gameState.resources[name] += amt;
    renderResources();
  }
  function consumeResource(name, amt) {
    if (!gameState.resources[name] || gameState.resources[name] < amt) return;
    gameState.resources[name] -= amt;
    showMessage(`Consumed ${amt} ${name}.`);
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
      // Use custom tooltip if available; else, default.
      if (resourceActions[rName] && resourceActions[rName].tooltip) {
        div.setAttribute("data-tooltip", resourceActions[rName].tooltip);
      } else {
        div.setAttribute("data-tooltip", "Click to consume 1 unit. Right-click to consume all.");
      }
      // Left-click: consume 1 unit.
      div.addEventListener("click", () => {
        if (gameState.resources[rName] > 0) {
          consumeResource(rName, 1);
          if (resourceActions[rName] && resourceActions[rName].onConsume) {
            resourceActions[rName].onConsume(1);
          }
        }
      });
      // Right-click: consume all units.
      div.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        if (gameState.resources[rName] > 0) {
          const amt = gameState.resources[rName];
          consumeResource(rName, amt);
          if (resourceActions[rName] && resourceActions[rName].onConsume) {
            resourceActions[rName].onConsume(amt);
          }
        }
      });
      div.appendChild(img);
      div.appendChild(cnt);
      grid.appendChild(div);
    });
  }

  /****************************************
   * SKILLS & XP
   ****************************************/
  function addXP(skillName, rawXP) {
    if (rawXP <= 0) return;
    const skill = gameState.skills[skillName];
    if (!skill) return;
    // knowledge bonus if unlocked + skill in knowledgeSkills
    if (gameState.knowledgeUnlocked && knowledgeSkills.includes(skillName)) {
      rawXP *= (1 + 0.001 * gameState.knowledge);
    }
    skill.xp += rawXP;
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
    const skillEls = document.querySelectorAll(".skill");
    skillEls.forEach(el => {
      const sName = el.getAttribute("data-skill");
      const sData = gameState.skills[sName];
      if (!sData) return;
      const xpTot = Math.pow(skillXpScaling, sData.level - 1);
      let pct = (sData.xp / xpTot) * 100;
      if (pct > 100) pct = 100;
      el.querySelector(".skill-bar-fill").style.width = pct + "%";
      el.querySelector(".skill-level").textContent = formatNumber(sData.level);
      el.querySelector(".skill-xp").textContent = formatNumber(sData.xp);
      el.querySelector(".skill-xp-total").textContent = formatNumber(xpTot);
      let baseMult = Math.pow(1.01, sData.level);
      if (sName === "alchemy" && gameState.perks.brewmaster) {
        baseMult *= 1.25;
      }
      // For perception, include its progressBoost from the skill object.
      if (sName === "perception" && sData.progressBoost) {
        baseMult *= (sData.progressBoost);
      }
      let drainMsg = "";
      if (sName !== "travel") {
        drainMsg = `<br>Using this skill drains energy ${formatNumber(sData.energyDrain / sData.drainBoost)}x faster.`;
      }
      const tip = `${capitalize(sName)}: x${formatNumber(baseMult)} speed${drainMsg}`;
      el.setAttribute("data-tooltip", tip);
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
        div.innerHTML = `
          <div class="skill-name">${capitalize(sName)}</div>
          <div class="skill-bar"><div class="skill-bar-fill"></div></div>
          <div class="skill-info">
            Level: <span class="skill-level">1</span>
            <span class="skill-xp">0</span>/<span class="skill-xp-total">1</span>
          </div>
        `;
        container.appendChild(div);
      }
    });
    updateSkillDisplay();
  }

  /****************************************
   * HOVER TOOLTIP SYSTEM
   ****************************************/
  let tooltipEl = null;
  function showTooltip(e, text) {
    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.className = "custom-tooltip";
      document.body.appendChild(tooltipEl);
    }
    tooltipEl.innerHTML = text;
    tooltipEl.style.left = e.pageX + 10 + "px";
    tooltipEl.style.top = e.pageY + 10 + "px";
    tooltipEl.style.opacity = 1;
  }
  function hideTooltip() {
    if (tooltipEl) {
      tooltipEl.style.opacity = 0;
    }
  }
  document.addEventListener("mouseover", e => {
    if (e.target.hasAttribute("data-tooltip")) {
      showTooltip(e, e.target.getAttribute("data-tooltip"));
    }
  });
  document.addEventListener("mousemove", e => {
    if (tooltipEl && tooltipEl.style.opacity === "1") {
      tooltipEl.style.left = e.pageX + 10 + "px";
      tooltipEl.style.top = e.pageY + 10 + "px";
    }
  });
  document.addEventListener("mouseout", e => {
    if (e.target.hasAttribute("data-tooltip")) {
      hideTooltip();
    }
  });

  /****************************************
   * FORMULAS: COMBINED MULTIPLIERS & DRAINS
   ****************************************/
  function getCombinedMultiplier(task) {
    let mult = 1;
    if (Array.isArray(task.skills)) {
      task.skills.forEach(sName => {
        const sk = gameState.skills[sName];
        if (sk) {
          let sm = Math.pow(1.01, sk.level);
          if (sName === "alchemy" && gameState.perks["brewmaster"]) {
            sm *= 1.25;
          }
          sm *= (sk.progressBoost);
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
          baseDrain *= gameState.skills[sName].energyDrain / gameState.skills[sName].drainBoost;
        }
      });
    }
    return baseDrain;
  }

  /****************************************
   * RESTART (energy / copium)
   ****************************************/
  function resetGame(reason) {
    if (reason === "energyLoss") {
      // half resources
      Object.keys(gameState.resources).forEach(rName => {
        gameState.resources[rName] = Math.floor(gameState.resources[rName] / 2);
      });
    } else if (reason === "copiumOverflow") {
      // all resources lost
      gameState.resources = {};
      // lose half knowledge
      gameState.knowledge = Math.floor(gameState.knowledge / 2);
      gameState.copium = 0;
    }
  
    // do not reset perks or knowledgeUnlocked or copiumUnlocked
    zones.forEach(z => z.tasks.forEach(t => t.count = 0));
  
    // Reset all boosts in every skill to 0.
    Object.keys(gameState.skills).forEach(sName => {
      gameState.skills[sName].progressBoost = 1;
      gameState.skills[sName].drainBoost = 1;
    });
  
    gameState.energy = gameState.startingEnergy;
    currentZoneIndex = 0;
    currentTasks = [];
    saveGameProgress();
    updateEnergyDisplay();
    renderSkills();
    updateSkillDisplay();
    renderResources();
    displayZone();
  }
  
  function handleGameOver() {
    document.getElementById("gameOverScreenEnergy").style.display = "flex";
  }
  function handleCopiumOverflow() {
    document.getElementById("gameOverScreenCopium").style.display = "flex";
  }

  /****************************************
   * MAIN GAME LOOP
   ****************************************/
  function gameLoop() {
    if (currentTasks.length === 0) {
      return;
    }
    for (let i = 0; i < currentTasks.length; i++) {
      const tData = currentTasks[i];
      if (tData.paused) continue;
      const oldProgress = tData.progress;
      const zone = zones[tData.zoneIndex];
      let speedMult = getCombinedMultiplier(tData.task);
      if (gameState.perks["energetic_bliss"] && gameState.energy > (gameState.startingEnergy * 0.5)) {
        speedMult *= 2;
      }
      tData.progress += tickDuration * speedMult;
      if (tData.progress > tData.totalDuration) {
        tData.progress = tData.totalDuration;
      }
      const delta = tData.progress - oldProgress;
      let zoneDrain = Math.pow(1.1, zone.id - 1);
      let drain = getCombinedEnergyDrain(tData.task) * zoneDrain;
      if (gameState.perks["healthy_living"]) {
        drain *= 0.75;
      }
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
      if (gameState.perks["workaholic"]) {
        xpEach *= 1.5;
      }
      if (gameState.perks["energetic_bliss"] && gameState.energy > 50) {
        xpEach *= 2;
      }
      usedSkills.forEach(sName => {
        const sk = gameState.skills[sName];
        if (sk && !sk.visible) {
          sk.visible = true;
          renderSkills();
        }
        if (sk) {
          addXP(sName, xpEach);
        }
      });
      const pct = (tData.progress / tData.totalDuration) * 100;
      tData.progressFill.style.width = Math.min(pct, 100) + "%";
      if (tData.progress >= tData.totalDuration) {
        const task = zone.tasks[tData.taskIndex];
        if (task.count < task.maxReps) {
          task.count++;
        }
        if (task.resource) {
          addResource(task.resource, 1);
        } else if (task.resources && Array.isArray(task.resources)) {
          task.resources.forEach(r => addResource(r, 1));
        }
        if (gameState.copiumUnlocked) {
          const hasCopiumSkill = usedSkills.some(sName => copiumSkills.includes(sName));
          if (hasCopiumSkill) {
            gameState.copium += (10 * zone.id);
            if (gameState.copium > 9000) {
              handleCopiumOverflow();
              return;
            }
            updateCopiumDisplay();
          }
        }
        updateRepContainer(tData.repContainer, task);
        if (task.mandatory && task.count >= task.maxReps) {
          if (isTravelAvailable(zone)) {
            enableTravelButtons(tData.zoneIndex);
          }
        }
        if (task.type === "Travel") {
          showMessage("Travel complete: " + task.name);
          tData.button.classList.remove("active");
          removeTaskFromCurrent(tData);
          nextZone();
          displayZone();
        } else {
          if (task.count >= task.maxReps) {
            task.count = task.maxReps;
            tData.button.disabled = true;
          }
          if (!gameState.perks["completionist"]) {
            showMessage(`Repetition complete: ${task.name} (${task.count}/${task.maxReps})`);
            tData.button.classList.remove("active");
            removeTaskFromCurrent(tData);
          } else {
            if (task.count < task.maxReps) {
              showMessage(`Repetition complete: ${task.name} (${task.count}/${task.maxReps})`);
              tData.progress = 0;
              tData.progressFill.style.width = "0%";
            } else {
              showMessage("Task complete: " + task.name);
              tData.button.classList.remove("active");
              tData.button.disabled = true;
              removeTaskFromCurrent(tData);
            }
          }
        }
        if (task.count >= task.maxReps && gameState.knowledgeUnlocked) {
          const hasKnowledgeSkill = usedSkills.some(sName => knowledgeSkills.includes(sName));
          if (hasKnowledgeSkill) {
            gameState.knowledge++;
            showMessage(`+1 Knowledge (Total: ${gameState.knowledge})`);
            showKnowledgeIfUnlocked();
          }
        }
        if (task.perk && !gameState.perks[task.perk] && task.count >= task.maxReps) {
          gameState.perks[task.perk] = true;
          if(task.perk == "basic_mech") {
            gameState.startingEnergy += 25;
          }
          showMessage("Perk unlocked: " + formatPerkName(task.perk));
          renderPerks();
        }
      }
    }
    saveGameProgress();
  }
  setInterval(gameLoop, tickDuration);

  /****************************************
   * HELPER: isTravelAvailable, etc.
   ****************************************/
  function isTravelAvailable(zone) {
    const mandatory = zone.tasks.filter(t => t.type === "Training" && t.mandatory);
    if (mandatory.length === 0) return true;
    return mandatory.every(t => t.count >= t.maxReps);
  }
  function enableTravelButtons(zoneIndex) {
    const zone = zones[zoneIndex];
    if (!isTravelAvailable(zone)) return;
    zone.tasks.forEach((t, i) => {
      if (t.type === "Travel") {
        const sel = `.task[data-zone-index="${zoneIndex}"][data-task-index="${i}"] button`;
        const btn = document.querySelector(sel);
        if (btn) {
          btn.disabled = false;
        }
      }
    });
  }
  function removeTaskFromCurrent(tData) {
    const idx = currentTasks.indexOf(tData);
    if (idx >= 0) {
      currentTasks.splice(idx, 1);
    }
  }
  function showKnowledgeIfUnlocked() {
    const knowledgeUpg = document.getElementById("knowledgeUpgValue");
    if (!knowledgeUpg) return;
    if (gameState.knowledgeUnlocked) {
      knowledgeUpg.parentElement.style.display = "inline-block";
      knowledgeUpg.textContent = gameState.knowledge;
      const tooltipStr = "Knowledge increases XP gain by <b>" + formatNumber(gameState.knowledge * 0.1) + "%</b> for these skills:<br> -" 
                         + knowledgeSkills.join("<br>- ");
      knowledgeUpg.parentElement.setAttribute("data-tooltip", tooltipStr);
    }
  }

  /****************************************
   * TASK TOGGLING
   ****************************************/
  function toggleTask(zoneIndex, taskIndex, button, progressFill, repContainer) {
    const activeCount = currentTasks.filter(t => !t.paused).length;
    const existing = currentTasks.find(t => t.zoneIndex === zoneIndex && t.taskIndex === taskIndex);
    if (existing) {
      existing.paused = !existing.paused;
      if (existing.paused) {
        button.classList.remove("active");
      } else {
        button.classList.add("active");
      }
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
      if (i <= task.count) {
        div.classList.add("completed");
      }
      repContainer.appendChild(div);
    }
  }

  /****************************************
   * DISPLAYING ZONES
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
    const zName = document.getElementById("zoneName");
    if (zName) {
      zName.textContent = `Zone ${zone.id}: ${zone.name}`;
    }
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
      const cDiv = document.createElement("div");
      cDiv.className = "task-control";
      const btn = document.createElement("button");
      if (task.perk && !gameState.perks[task.perk]) {
        btn.innerHTML = `${task.name} <span class="perk-star">★</span>`;
      } else {
        btn.textContent = task.name;
      }
      btn.style.width = "50%";
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
      if (task.skills && task.skills.length > 0) {
        btn.setAttribute("data-tooltip", "Uses: " + task.skills.join(", "));
      }
      if (task.type === "Travel" && !isTravelAvailable(zone)) {
        btn.disabled = true;
      }
      if (task.type !== "Travel" && !gameState.perks["completionist"] && task.count >= task.maxReps) {
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
      const desc = document.createElement("p");
      desc.textContent = task.description;
      div.appendChild(desc);
      tasksContainer.appendChild(div);
    });
    renderPerks();
    showKnowledgeIfUnlocked();
  }
  function nextZone() {
    currentZoneIndex++;
    if (currentZoneIndex < zones.length) {
      displayZone();
    } else {
      const scenario = document.getElementById("scenarioText");
      if (scenario) scenario.innerHTML = "<h2>Congratulations! You have completed the adventure!</h2>";
      const tasksEl = document.getElementById("tasks");
      if (tasksEl) tasksEl.innerHTML = "";
    }
  }

  /****************************************
   * PERKS RENDER
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
        const desc = perkDescriptions[pKey] || "An unknown perk.";
        div.setAttribute("data-tooltip", formatPerkName(pKey) + ": " + desc);
        div.className = "perk-item unlocked";
      } else {
        const desc = "Unlock perk to see description.";
        div.setAttribute("data-tooltip", formatPerkName(pKey) + ": " + desc);
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
      if (modal.parentNode) modal.parentNode.removeChild(modal);
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
    p.innerHTML = "Copium unlocked!<br>Tasks using skills:<br>-" + copiumSkills.join("<br>-") +
      "<br>now yield Copium.<br>If it reaches >9000, you reset with half knowledge lost!";    
    content.appendChild(p);
    const btn = document.createElement("button");
    btn.textContent = "Got It";
    btn.addEventListener("click", () => {
      if (modal.parentNode) modal.parentNode.removeChild(modal);
    });
    content.appendChild(btn);
    modal.appendChild(content);
    document.body.appendChild(modal);
    showCopiumBar();
  }
  function showCopiumBar() {
    const cBar = document.getElementById("copiumBarContainer");
    if (cBar) cBar.style.display = "flex";
    const copiumBarElem = document.getElementById("copiumBarFill");
    if (copiumBarElem) {
      copiumBarElem.setAttribute("data-tooltip",
        "Copium builds up from tasks with " + copiumSkills.join(", ")
        + ". If it exceeds 9000, you reset with half knowledge lost!"
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
        if (modal.parentNode) modal.parentNode.removeChild(modal);
      });
      content.appendChild(restartAll);
      const backBtn = document.createElement("button");
      backBtn.textContent = "Go Back";
      backBtn.addEventListener("click", () => {
        if (modal.parentNode) modal.parentNode.removeChild(modal);
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
   * INIT
   ****************************************/
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gameOverScreenEnergy").style.display = "none";
    document.getElementById("gameOverScreenCopium").style.display = "none";
    const energyBarElem = document.getElementById("energyBarFill");
    if (energyBarElem) {
      energyBarElem.setAttribute("data-tooltip",
        "Energy drains depending on each skill used. Multiple skills multiply the drain. " +
        "A high-level multi-skill task can drain energy quickly!"
      );
    }
    const kUpg = document.getElementById("knowledgeUpgValue");
    if (kUpg) {
      kUpg.parentElement.style.display = "none";
    }
    loadGameProgress();
    gatherAllPerks();
    renderSkills();
    updateEnergyDisplay();
    if (gameState.copiumUnlocked) {
      showCopiumBar(); 
    }
    updateSkillDisplay();
    renderResources();
    displayZone();
  });

  // Expose gameState for debugging
  window.getGameState = () => gameState;
})();
