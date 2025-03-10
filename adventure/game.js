CURRENT_GAME_VERSION = "v0.2";

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
      serenity: 0,
      knowledgeUnlocked: false,
      powerUnlocked: false,
      copiumUnlocked: false,
      delusionUnlocked: false,
      serenityUnlocked: false,
      prestigeAvailable: false,
      secondSectionUnlocked: false,
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
      zoneFullCompletes: {},
      autoRun: false,
      automationMode: "zone",
      gameVersion: CURRENT_GAME_VERSION,
      soundEnabled: true,
      musicEnabled: true,
      soundVolume: 0.5,
      automationOverrides : {},

      serenityUnlockables: {},
      serenityInfinite: {},

      highestCompletedZone: 0,
      bestCompletedZone: 0,
      resetsForHighestZone: 1e100,
      resetsForBestZone: 1e100,

      //resource related      
      resourcesUsed: {},
      numCyberneticArmors: 0,
      cyberneticArmorTaskRunning: false,
      numCosmicShards: 0,
      cosmicShardTaskRunning: false,
      numCelestialBlossoms: 0,

      //serenity upgrades related
      delusionEnjoyerMultiplier: 1,
      entropyShieldMultiplier: 1,
      powerGainMultiplier: 1,
      autoConsumeResources: false,
      elixirEnergy: 3,
      startingLevel: 1,
      serenityGainZoneExponent: 3,
    };
  }

  /****************************************
   * GLOBALS & SETTINGS
   ****************************************/
  let gameState = getInitialGameState();
  let currentZoneIndex = 0;
  let currentTasks = [];
  let runTickDuration   = 100;
  let effTickDuration   = 100;
  let xpScale        = 0.001; // XP per tick
  let skillXpScaling = 1.02;
  let baseEnergyDrain = 0.05;
  let growthMiracleApplied = false;
  let resourceConsumeMode = "one";

  let perkZoneMapping = {};
  zones.forEach(zone => {
    zone.tasks.forEach(task => {
      if (task.perk && perkZoneMapping[task.perk] === undefined) {
        perkZoneMapping[task.perk] = zone.id;
      }
    });
  });

  // Helper to consume resources from gameState
  function consumeResource(name, amt) {
    if (!gameState.resources[name] || gameState.resources[name] < amt) return;
    gameState.resources[name] -= amt;
    // Record resource usage (if not "infinity_gauntlet")
    if (name !== "infinity_gauntlet") {
      gameState.resourcesUsed[name] = true;
    }
    // Instead of re-rendering everything, update only this resource.
    updateResourceDisplay(name);
  }
  
  function addResource(name, amt) {
    if (!gameState.resources[name]) {
      gameState.resources[name] = 0;
      let autoBtn = document.getElementById("autoConsumeBtn");
      if (autoBtn) {
        autoBtn.setAttribute("data-tooltip", "Auto-use all resources except:<br>" + 
          Array.from(EXCLUDED_AUTO_RESOURCES)
            .filter(r => gameState.resources.hasOwnProperty(r))
            .map(r => formatStringForDisplay(r))
            .join("<br>"));
      }
    }
    gameState.resources[name] += amt;
    // Instead of full re-render, update only this resource.
    updateResourceDisplay(name);
  }
  

  function updateResourceDisplay(name) {
    const grid = document.getElementById("resourcesGrid");
    if (!grid) return;
    const currentCount = gameState.resources[name] || 0;
    // If count is 0, remove any existing element.
    if (currentCount <= 0) {
      const existing = grid.querySelector(`.resource-item[data-resource="${name}"]`);
      if (existing) {
        existing.remove();
      }
      return;
    }
    // Check if an element for this resource already exists.
    let resourceDiv = grid.querySelector(`.resource-item[data-resource="${name}"]`);
    if (resourceDiv) {
      // Just update the count.
      const cnt = resourceDiv.querySelector(".resource-count");
      if (cnt) {
        cnt.textContent = currentCount;
      }
    } else {
      // It doesn't exist—create a new resource element and append it to the bottom.
      const div = document.createElement("div");
      div.className = "resource-item";
      div.dataset.resource = name;
      div.setAttribute("data-tooltip", 
        formatStringForDisplay(name) + ":<br>" + (resourceActions[name]?.tooltip || "Tap to consume resource.")
      );
      
      // Create the resource icon.
      const img = document.createElement("img");
      img.src = "images/resources/" + name + ".jpg";
      img.alt = name;
      img.style.pointerEvents = "none";
      img.style.userSelect = "none";
      img.setAttribute("draggable", "false");
      
      // Create the count element.
      const cnt = document.createElement("div");
      cnt.className = "resource-count";
      cnt.textContent = currentCount;
      
      // Attach event listeners.
      if (isMobile) {
        div.addEventListener("click", () => {
          if (gameState.resources[name] > 0) {
            if (resourceConsumeMode === "all") {
              const amt = gameState.resources[name];
              consumeResource(name, amt);
              if (resourceActions[name]?.onConsume) {
                resourceActions[name].onConsume(gameState, amt);
              }
            } else {
              consumeResource(name, 1);
              if (resourceActions[name]?.onConsume) {
                resourceActions[name].onConsume(gameState, 1);
              }
            }
            updateSkillMultipliers();
            hideTooltip();
          }
        });
        let touchTimeout;
        div.addEventListener("touchstart", () => {
          touchTimeout = setTimeout(() => { showTooltip(div); }, 500);
        });
        div.addEventListener("touchend", () => {
          clearTimeout(touchTimeout);
          hideTooltip();
        });
        div.addEventListener("touchcancel", () => {
          clearTimeout(touchTimeout);
          hideTooltip();
        });
      } else {
        div.addEventListener("click", () => {
          if (gameState.resources[name] > 0) {
            consumeResource(name, 1);
            if (resourceActions[name]?.onConsume) {
              resourceActions[name].onConsume(gameState, 1);
            }
            if (gameState.resources[name] === 0) hideTooltip();
          }
        });
        div.addEventListener("contextmenu", e => {
          e.preventDefault();
          if (gameState.resources[name] > 0) {
            const amt = gameState.resources[name];
            consumeResource(name, amt);
            if (resourceActions[name]?.onConsume) {
              resourceActions[name].onConsume(gameState, amt);
            }
            hideTooltip();
          }
        });
      }
      
      div.appendChild(img);
      div.appendChild(cnt);
      grid.appendChild(div); // Appends at the bottom.
    }
  }
  
  
  
  function renderResources() {
    const resourcesContainer = document.getElementById("resourcesContainer");
    const grid = document.getElementById("resourcesGrid");
    if (!resourcesContainer || !grid) return;

    grid.innerHTML = "";

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
      // NEW: tag this element with the resource name.
      div.dataset.resource = rName;
      div.setAttribute("data-tooltip", formatStringForDisplay(rName) + ":<br>" + (resourceActions[rName]?.tooltip || "Tap to consume resource."));
      
      // Resource icon
      const img = document.createElement("img");
      img.src = "images/resources/" + rName + ".jpg";
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

  function getZonePerkOrder() {
    const perkList = [];
    zones.forEach(zone => {
      zone.tasks.forEach(task => {
        if (task.perk && !perkList.includes(task.perk)) {
          perkList.push(task.perk);
        }
      });
    });
    return perkList;
  }

  function getPerkGroup(perkKey) {
    const isUnlocked = gameState.perks[perkKey] !== false;
    const isToggleable = toggleablePerks.includes(perkKey);
  
    if (isUnlocked && isToggleable) return 0; // unlocked & toggleable
    if (isUnlocked)               return 1; // unlocked but not toggleable
    return 2; // locked
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

  function copySave() {
    const saveData = localStorage.getItem("degensAdventureProgress");
    if (!saveData) {
      showMessage("No save data found");
      return;
    }
    // Simple obfuscation using Base64. Replace this with a stronger encryption if desired.
    const encrypted = btoa(saveData);
    // Copy to clipboard using the Clipboard API
    navigator.clipboard.writeText(encrypted).then(() => {
      showMessage("Save copied to clipboard");
    }).catch(err => {
      showMessage("Error copying save: " + err);
    });
  }
  
  function pasteSave() {
    // Read text from clipboard
    navigator.clipboard.readText().then(text => {
      if (!text) {
        showMessage("Clipboard is empty");
        return;
      }
      try {
        // Attempt to decode the save data
        const decrypted = atob(text);
        // Parse the JSON and check for gameState
        const data = JSON.parse(decrypted);
        if (!data.gameState) {
          throw new Error("Missing gameState");
        }
        // Show a custom confirmation modal instead of confirm()
        showPasteConfirmationModal(() => {
          // On user confirmation:
          localStorage.setItem("degensAdventureProgress", decrypted);
          showMessage("Save loaded!");
          location.reload();
        });
      } catch (e) {
        showMessage("Invalid save data");
      }
    }).catch(err => {
      showMessage("Error reading clipboard: " + err);
    });
  }
  

  function computeSerenityTotalValue() {
    let total = gameState.serenity; // Base serenity
  
    // Sum the cost of purchased unlockable upgrades.
    if (typeof SERENITY_UPGRADES !== "undefined" && SERENITY_UPGRADES.unlockables) {
      for (const section in SERENITY_UPGRADES.unlockables) {
        const upgrades = SERENITY_UPGRADES.unlockables[section];
        for (const upgName in upgrades) {
          if (gameState.serenityUnlockables[upgName]) {
            total += upgrades[upgName].cost;
          }
        }
      }
    }
  
    // Sum the total cost spent on infinite upgrades.
    if (typeof SERENITY_UPGRADES !== "undefined" && SERENITY_UPGRADES.infinite) {
      for (const section in SERENITY_UPGRADES.infinite) {
        const upgrades = SERENITY_UPGRADES.infinite[section];
        for (const upgName in upgrades) {
          const details = upgrades[upgName];
          const level = gameState.serenityInfinite[upgName] || 0;
          if (level > 0) {
            if (details.scaling !== 1) {
              total += details.initialCost * (Math.pow(details.scaling, level) - 1) / (details.scaling - 1);
            } else {
              total += details.initialCost * level;
            }
          }
        }
      }
    }
  
    return total;
  }
  
  
  // A helper to show a custom “Load this save?” modal
  function showPasteConfirmationModal(onConfirm) {
    // Create the modal overlay
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "pasteSaveModal";
    
    // Create the content container
    const content = document.createElement("div");
    content.className = "modal-content";
  
    // Add a message
    const msgP = document.createElement("p");
    msgP.textContent = "Load this save? (Page will refresh after loading)";
    content.appendChild(msgP);
  
    // OK Button
    const okBtn = document.createElement("button");
    okBtn.textContent = "OK";
    okBtn.style.backgroundColor = "#27ae60"; // green, for example
    okBtn.addEventListener("click", () => {
      onConfirm();
      modal.remove();
    });
    content.appendChild(okBtn);
  
    // Cancel Button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.style.backgroundColor = "#e74c3c"; // red, for example
    cancelBtn.addEventListener("click", () => {
      modal.remove();
    });
    content.appendChild(cancelBtn);
  
    modal.appendChild(content);
    document.body.appendChild(modal);
  }
  
  function showRestartConfirmationModal(onConfirm) {
    // Create the modal overlay
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "restartConfirmModal";
    
    // Create the content container
    const content = document.createElement("div");
    content.className = "modal-content";
    
    // Add a message
    const msgP = document.createElement("p");
    msgP.textContent = "Are you sure you want to FULL RESTART? This cannot be undone.";
    content.appendChild(msgP);
    
    // OK Button
    const okBtn = document.createElement("button");
    okBtn.textContent = "OK";
    okBtn.style.backgroundColor = "#27ae60"; // green
    okBtn.addEventListener("click", () => {
      onConfirm();
      modal.remove();
    });
    content.appendChild(okBtn);
    
    // Cancel Button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.style.backgroundColor = "#e74c3c"; // red
    cancelBtn.addEventListener("click", () => modal.remove());
    content.appendChild(cancelBtn);
    
    modal.appendChild(content);
    document.body.appendChild(modal);
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
    const container = document.getElementById("message");
    if (!container) return;
    
    // Create a new message element.
    const messageElement = document.createElement("div");
    messageElement.className = "message-item";
    // Use innerHTML so HTML content is rendered.
    messageElement.innerHTML = msg;
    
    // Insert the new message at the top of the container.
    container.insertBefore(messageElement, container.firstChild);
    
    // Ensure there are at most 5 messages.
    while (container.children.length > 5) {
      container.removeChild(container.lastElementChild);
    }
    
    // If the message contains the perk class, use a 10s timeout; otherwise, 5s.
    const timeoutDuration = msg.includes("perk-unlock-message") ? 10000 : 5000;
    setTimeout(() => {
      if (messageElement.parentNode) {
        container.removeChild(messageElement);
      }
    }, timeoutDuration);
  }
  
  

  /****************************************
   * ENERGY & COPIUM DISPLAY FUNCTIONS
   ****************************************/
  function updateEnergyDisplay() {
    const val = Math.max(0, gameState.energy);
    const energyText = document.getElementById("energyText");
    if (energyText) {
      if (val < 10 && val > 0) {
        energyText.textContent = val.toFixed(1);
      } else {
        energyText.textContent = val.toFixed(0);
      }
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
          `.<br><br>If it exceeds 9000, your game will reset<br>with all${gameState.serenityInfinite["Resource Saver"] > 0 ? " but " + gameState.serenityInfinite["Resource Saver"]: ""} Resources and ${gameState.perks["knowledge_preserver"] ? "10% of" : "half"} your Knowledge lost!` +
          `<br>But you will permanently gain ${gameState.perks["copium_reactor"] ? 6 : 2} starting energy.`
        );
      } else {
        copiumBarFill.classList.remove("copium-high");
        copiumBarFill.setAttribute("data-tooltip",
          "Copium builds up from tasks with<br>" + copiumSkills.join(", ") +
          `.<br><br>If it exceeds 9000, your game will reset<br>with all${gameState.serenityInfinite["Resource Saver"] > 0 ? " but " + gameState.serenityInfinite["Resource Saver"]: ""} Resources and ${gameState.perks["knowledge_preserver"] ? "10% of" : "half"} your Knowledge lost!` +
          `<br>But you will permanently gain ${gameState.perks["copium_reactor"] ? 6 : 2} starting energy.`
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
          `.<br><br>If it exceeds 9000, your game will reset<br>with 20% of your Power lost!${gameState.serenityUnlockables["Delusion Enjoyer"] ? "<br><br>Multiplies knowledge gain by " + gameState.delusionEnjoyerMultiplier * 100 + "%"  : ""}`
        );
      } else {
        delusionBarFill.classList.remove("delusion-high");
        delusionBarFill.setAttribute("data-tooltip",
          "Delusion builds up from tasks with<br>" + delusionSkills.join(", ") +
          `.<br><br>If it exceeds 9000, your game will reset<br>with 20% of your Power lost!${gameState.serenityUnlockables["Delusion Enjoyer"] ? "<br><br>Multiplies knowledge gain by " + gameState.delusionEnjoyerMultiplier * 100 + "%"  : ""}`
        );
      }
    }
  }

  /****************************************
   * SKILLS & XP FUNCTIONS
   ****************************************/
  function addXP(skillName, rawXP, prePendMessage, suppressMessage, overwriteXP) {
    // Set default values if not provided
    prePendMessage = (typeof prePendMessage !== "undefined") ? prePendMessage : "";
    suppressMessage = (typeof suppressMessage !== "undefined") ? suppressMessage : false;
    overwriteXP = (typeof overwriteXP !== "undefined") ? overwriteXP : -1;
  
    if (rawXP <= 0 && overwriteXP === -1) return;
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
      rawXP *= 5;
    }
  
    if (overwriteXP === -1) {
      skill.xp += rawXP * skill.xpGainFactor;
      if(gameState.perks["quantum_harmony"] && skillName !== "quantum"){
        addXP("quantum", rawXP * skill.xpGainFactor * 0.01, "Quantum Harmony: ");
      }
    } else {
      skill.xp += overwriteXP;
    }
  
    let required = Math.pow(skillXpScaling, skill.level - 1);
    const visibleSkills = Object.keys(gameState.skills).filter(sName => gameState.skills[sName].visible && sName !== "cybernetics");
  
    while (skill.xp >= required) {
      skill.xp -= required;
      skill.level++;
  
      if (gameState.perks.cyber_boost && skillName === "cybernetics") {
        // Choose a random visible skill (excluding cybernetics)
        const randomSkillName = visibleSkills[Math.floor(Math.random() * visibleSkills.length)];
        const randomSkill = gameState.skills[randomSkillName];
        addXP(
          randomSkillName,
          0,
          "Cyber Boost: ",
          false,
          Math.pow(skillXpScaling, randomSkill.level - 1) - randomSkill.xp
        );
      }
      updateSkillMultipliers();
  
      var message = formatStringForDisplay(skillName) + " leveled up to " + skill.level;
  
      if (skill.level % 100 === 0 && false) { // TODO: Only show color after upgrade unlocked.
        if (gameState.soundEnabled) {
          levelUpSound.play();
        }
        showMessage(prePendMessage + '<span style="color: rgb(63, 202, 212);">' + message + '</span>');
      } else {
        if (!suppressMessage) {
          showMessage(prePendMessage + message);
        }
      }
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
      if (sName === "travel" && gameState.perks.hoverboard) baseMult *= 4;
      if (sName === "combat" && gameState.perks.universal_alloy) baseMult *= Math.max(1, gameState.serenity ** (1/2));
      baseMult *= (sData.progressBoost);
      let baseDrain = sData.energyDrain / (sData.drainBoost || 1);
      if (sName === "hacking" && gameState.perks.noob_haxor) baseDrain *= 0.9;
      if (sName === "mechanics" && gameState.perks.futuristic_wrench) baseDrain /= 3;
      if (sName === "charisma" && gameState.perks.kung_fu_zen) baseDrain *= 0.72;
      if (sName === "quantum" && gameState.perks.neural_matrix) baseDrain *= 0.6;
      if (sName === "combat" && gameState.perks.forge_fervor) baseDrain *= 1/3;
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
      el.closest(".upgrade-display") ||
      el.closest("#zoneAutomation") ||
      el.id === "autoConsumeBtn"
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
        baseMult *= 4;
      }
      if (gameState.powerUnlocked && powerSkills.includes(sName)) {
        baseMult *= (1 + (gameState.perks.urban_warfare ? 0.03 : 0.01) * gameState.power);
      }
      
      if (sName === "combat" && gameState.perks.universal_alloy) baseMult *= Math.max(1, gameState.serenity ** (1/2));
      
      // Store the precomputed value.
      sk.precomputedMultiplier = baseMult;
      
      // Precompute energy drain factor.
      let drainFactor = sk.energyDrain / (sk.drainBoost || 1);
      if (sName === "mechanics" && gameState.perks.futuristic_wrench) drainFactor /= 3;
      if (sName === "charisma" && gameState.perks.kung_fu_zen) drainFactor *= 0.72;
      if (sName === "quantum" && gameState.perks.neural_matrix) drainFactor *= 0.6;
      if (sName === "hacking" && gameState.perks.noob_haxor) drainFactor *= 0.9;
      if (sName === "combat" && gameState.perks.forge_fervor) drainFactor *= 1/3;
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
    if (task.speedMult !== undefined) {
      mult *= task.speedMult;
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
      applyResourceSaver();
      if (gameState.perks["knowledge_preserver"]) {
        gameState.knowledge = Math.floor(gameState.knowledge * 0.9);
      } else {
        gameState.knowledge = Math.floor(gameState.knowledge / 2);
      }
      gameState.copium = 0;
      gameState.startingEnergy += gameState.perks["copium_reactor"] ? 6 : 2;
      gameState.numCopiumResets++;
    } else if (reason === "delusionOverflow") {
      gameState.power = Math.floor(gameState.power * 0.8);
      gameState.delusion = 0;
      gameState.numDelusionResets++;
    } else if (reason === "prestige") {
      gameState.startingEnergy = 100;
      gameState.copium = 0;
      gameState.delusion = 0;
      gameState.knowledge = 0;
      gameState.power = 0;
      gameState.prestigeAvailable = false;
      Object.keys(gameState.skills).forEach(sName => {
        gameState.skills[sName].level = gameState.startingLevel;
        gameState.skills[sName].xp = 0;
      });
      zones.forEach(zone => {
        zone.tasks.forEach(task => {
          if (task.originalMaxReps !== undefined) {
            task.maxReps = task.originalMaxReps;
            delete task.originalMaxReps;
          }
        });
      });
      growthMiracleApplied = false;
      gameState.resources = {};
      gameState.perks = {};
      gatherAllPerks();
      applyPerks();
      gameState.numEnergyResets = 0;
      gameState.numCopiumResets = 0;
      gameState.numDelusionResets = 0;
      gameState.highestCompletedZone = 0;
      gameState.bestCompletedZone = 0;
      gameState.resetsForBestZone = 1e100;
      if (!gameState.serenityUnlockables["Instant Simulation"]) {
        Object.keys(gameState.automationOverrides).forEach(key => {
          gameState.automationOverrides[key] = true;
        });
      }
      applySerenityUpgrades();
      if(!gameState.serenityUnlockables["Instant Simulation"]) {
        gameState.zoneFullCompletes = {};
      }
      else {
        zones.forEach((zone, i) => {
          const current = gameState.zoneFullCompletes[i] || 0;
          if (current >= 10) {
            gameState.zoneFullCompletes[i] = 10;
          } else {
            gameState.zoneFullCompletes[i] = 0;
          }
        });
      }
    } else if (reason === "contentComplete") {
      gameState.resources = {};
    };
    zones.forEach(z => z.tasks.forEach(t => t.count = 0));
    Object.keys(gameState.skills).forEach(sName => {
      gameState.skills[sName].progressBoost = 1;
      gameState.skills[sName].drainBoost = 1;
    });
    gameState.resourcesUsed = {};
    gameState.energy = gameState.startingEnergy;
    currentZoneIndex = 0;
    currentTasks = [];
    gameState.autoRun = false;
    gameState.cyberneticArmorTaskRunning = false;
    gameState.numCyberneticArmors = 0;
    gameState.cosmicShardTaskRunning = false;
    gameState.numCosmicShards = 0;
    gameState.numCelestialBlossoms = 0;
    if (gameState.serenityUnlockables["Delusion Enjoyer"]) {
      gameState.delusionEnjoyerMultiplier = Math.max(1, gameState.delusion / 100);
    }
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
    // Get or create the overlay container.
    let energyScreen = document.getElementById("gameOverScreenEnergy");
    if (!energyScreen) {
      energyScreen = document.createElement("div");
      energyScreen.id = "gameOverScreenEnergy";
      document.body.appendChild(energyScreen);
    }
    // Reinitialize its inner HTML so that the expected content is always there.
    energyScreen.innerHTML = `
      <div id="gameOverContentEnergy">
        <h2>Game Over</h2>
        <p>You ran out of energy.</p>
        <p>You lose half your resources.</p>
        <button id="restartButtonEnergy">Restart</button>
      </div>
    `;
    // Attach the restart button listener
    energyScreen.querySelector("#restartButtonEnergy").addEventListener("click", () => {
      energyScreen.style.display = "none";
      resetGame("energyLoss");
    });
    // Now update the reset message.
    const energyContent = energyScreen.querySelector("#gameOverContentEnergy");
    let resetMsg = energyContent.querySelector("#energyResetMsg");
    if (!resetMsg) {
      resetMsg = document.createElement("p");
      resetMsg.id = "energyResetMsg";
      energyContent.appendChild(resetMsg);
    }
    resetMsg.textContent =
      "This is your " +
      (gameState.numEnergyResets + 1) +
      getOrdinalSuffix(gameState.numEnergyResets + 1) +
      " Energy reset.";
    energyScreen.style.display = "flex";
    if (gameState.soundEnabled) energyGameOverSound.play();
  }
  

  function handleCopiumOverflow() {
    let copiumScreen = document.getElementById("gameOverScreenCopium");
    if (!copiumScreen) {
      copiumScreen = document.createElement("div");
      copiumScreen.id = "gameOverScreenCopium";
      document.body.appendChild(copiumScreen);
    }
    copiumScreen.innerHTML = `
      <div id="gameOverContentCopium">
        <h2>Game Over</h2>
        <p>It's over 9000! Your copium that is.</p>
        <p>You lose all your resources and ${gameState.perks["knowledge_preserver"] ? "10% of" : "half"} your knowledge.</p>
        <p>But you permanently gain ${gameState.perks["copium_reactor"] ? 6 : 2} starting energy.</p>
        <button id="restartButtonCopium">Restart</button>
      </div>
    `;
    copiumScreen.querySelector("#restartButtonCopium").addEventListener("click", () => {
      copiumScreen.style.display = "none";
      resetGame("copiumOverflow");
    });
    const copiumContent = copiumScreen.querySelector("#gameOverContentCopium");
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
    copiumScreen.style.display = "flex";
    if (gameState.soundEnabled) copiumGameOverSound.play();
  }
  
  

  function handleDelusionOverflow() {
    let delusionScreen = document.getElementById("gameOverScreenDelusion");
    if (!delusionScreen) {
      delusionScreen = document.createElement("div");
      delusionScreen.id = "gameOverScreenDelusion";
      document.body.appendChild(delusionScreen);
    }
    delusionScreen.innerHTML = `
      <div id="gameOverContentDelusion">
        <h2>Game Over</h2>
        <p>Your delusion is over 9000!</p>
        <p>You lose 20% of your Power.</p>
        <button id="restartButtonDelusion">Restart</button>
      </div>
    `;
    delusionScreen.querySelector("#restartButtonDelusion").addEventListener("click", () => {
      delusionScreen.style.display = "none";
      resetGame("delusionOverflow");
    });
    const delusionContent = delusionScreen.querySelector("#gameOverContentDelusion");
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
    delusionScreen.style.display = "flex";
    if (gameState.soundEnabled) delusionGameOverSound.play();
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
          showMessage("You cannot start another task right now");
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
        gameState.cyberneticArmorTaskRunning = false;
        gameState.cosmicShardTaskRunning = false;
        if (!currentTasks.some(t => !t.paused && t.task.boss_image)) {
          document.getElementById("zoneImage").src = zones[zoneIndex].img;
        }
      }
    } else {
      // Start new task
      const activeCount = currentTasks.filter(t => !t.paused).length;
      if (activeCount >= maxSlots) {
        showMessage("You cannot start another task right now");
        return;
      }
      startTask(zoneIndex, taskIndex, button, progressFill, repContainer);
      const task = zones[zoneIndex].tasks[taskIndex];
      if (task.boss_image) {
        document.getElementById("zoneImage").src = task.boss_image;
        if (gameState.soundEnabled && !gameState.autoRun) task.sound.play();
        else if (!gameState.autoRun && zoneIndex < 9) showMessage("Sound Effects are recommended for boss fights. Just for fun!");
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
      if (task.count >= task.maxReps) return;
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
        div.classList.add("boss-task");
      }
      
      // If the task yields a resource, add its icon
      if (task.resources && Array.isArray(task.resources)) {
        task.resources.forEach(rName => {
          const rIcon = document.createElement("img");
          rIcon.src = "images/resources/" + rName + ".jpg";
          rIcon.alt = rName;
          rIcon.className = "resource-icon";
          rIcon.style.pointerEvents = "none";
          btn.appendChild(rIcon);
        });
      }

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

      if (gameState.perks["simulation_engine"] && gameState.zoneFullCompletes[currentZoneIndex] >= 10) {
        const key = `${currentZoneIndex}-${idx}`;
        // Ensure a default value is set if none exists:
        if (gameState.automationOverrides[key] === undefined) {
          gameState.automationOverrides[key] = false;
        }
        // Update the button’s appearance based on the override:
        updateTaskAutomationUI(btn, key);
        
        // For mobile: long-press (1s) toggles automation.
        let longPressTriggered = false;
        let touchTimeout;
        btn.addEventListener("touchstart", (e) => {
          longPressTriggered = false;
          touchTimeout = setTimeout(() => {
            longPressTriggered = true;
            toggleTaskAutomation(key, btn, task);
          }, 1000);
        });
        btn.addEventListener("touchend", (e) => {
          clearTimeout(touchTimeout);
          if (longPressTriggered) {
            e.preventDefault();
            e.stopPropagation();
          }
        });
        btn.addEventListener("touchcancel", () => clearTimeout(touchTimeout));

        btn.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          toggleTaskAutomation(key, btn, task);
          return false;
        });
      } else {
        // For desktop: right-click toggles automation.
        btn.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          return false;
        });
      }
      


      btn.addEventListener("click", () => {
        if (gameState.musicEnabled && bgMusic.paused) {
          bgMusic.play().catch(() => {});
        }
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

    updateTasksHoverInfo();
    renderPerks();
    showKnowledgeIfUnlocked();
    showPowerIfUnlocked();
    showSerenityIfUnlocked();

    // Simulation Engine automation
    const zoneAutomationEl = document.getElementById("zoneAutomation");
    if (gameState.perks["self_operating_gadget"]) {
      if (typeof gameState.zoneFullCompletes[currentZoneIndex] !== "number") {
        gameState.zoneFullCompletes[currentZoneIndex] = 0;
      }
      if (gameState.zoneFullCompletes[currentZoneIndex] >= 10) {
        zoneAutomationEl.innerHTML = "";
        const label = document.createElement("span");
        label.textContent = "Automate: ";
        zoneAutomationEl.appendChild(label);

        // Create both buttons first:
        const zoneBtn = document.createElement("button");
        zoneBtn.textContent = "Zone";
        zoneBtn.setAttribute("data-automation", "zone");
        zoneBtn.setAttribute("data-tooltip", "Run all tasks in current zone.");
        
        const allBtn = document.createElement("button");
        allBtn.textContent = "All";
        allBtn.setAttribute("data-automation", "all");
        allBtn.setAttribute("data-tooltip", "Run all tasks in automated zones.");

        if (gameState.perks.simulation_engine) {
          zoneBtn.setAttribute("data-tooltip", `Run selected tasks in current zone.<br>${isMobile ? "Long press a task to toggle automation." : "Right click a task to toggle automation."}`);
          allBtn.setAttribute("data-tooltip", `Run selected tasks in automated zones.<br>${isMobile ? "Long press a task to toggle automation." : "Right click a task to toggle automation."}`);
        }

        // Attach listeners:
        zoneBtn.addEventListener("click", () => {
          if (gameState.autoRun) {
            gameState.autoRun = false;
            showMessage("Automation disabled.");
          } else {
            gameState.autoRun = true;
            gameState.automationMode = "zone";
            showMessage("Automation set to Zone mode");
          }
          updateAutomationButtonStyles(zoneBtn, allBtn);
        });
        allBtn.addEventListener("click", () => {
          if (gameState.autoRun) {
            gameState.autoRun = false;
            showMessage("Automation disabled");
          } else {
            gameState.autoRun = true;
            gameState.automationMode = "all";
            showMessage("Automation set to All mode");
          }
          updateAutomationButtonStyles(zoneBtn, allBtn);
        });

        zoneAutomationEl.appendChild(zoneBtn);
        zoneAutomationEl.appendChild(allBtn);
        
        // Set their initial appearance based on gameState.
        updateAutomationButtonStyles(zoneBtn, allBtn);
      } else {
        zoneAutomationEl.innerHTML =
          "Full Completes:<br>" + gameState.zoneFullCompletes[currentZoneIndex] + " / 10";
      }
    } else {
      zoneAutomationEl.innerHTML = "";
    }
  }

  function updateAutomationButtonStyles() {
    const zoneBtn = document.querySelector("#zoneAutomation button[data-automation='zone']");
    const allBtn = document.querySelector("#zoneAutomation button[data-automation='all']");
    if (!zoneBtn || !allBtn) return; // buttons not in DOM
    if (gameState.autoRun) {
      if (gameState.automationMode === "zone") {
        zoneBtn.classList.add("active");
        allBtn.classList.remove("active");
      } else if (gameState.automationMode === "all") {
        allBtn.classList.add("active");
        zoneBtn.classList.remove("active");
      }
    } else {
      zoneBtn.classList.remove("active");
      allBtn.classList.remove("active");
    }
  }
  function toggleTaskAutomation(key, btn, task) {
    // Toggle the stored value:
    gameState.automationOverrides[key] = !gameState.automationOverrides[key];
    updateTaskAutomationUI(btn, key);
    showMessage(`Automation ${gameState.automationOverrides[key] ? "enabled" : "disabled"} for ${task.name}`);
  }
  

  function updateTaskAutomationUI(btn, key) {
    if (gameState.automationOverrides[key]) {
      // If automation is enabled, remove the big gray X overlay
      btn.classList.remove('big-x');
    } else {
      // If automation is disabled, add the big gray X overlay
      btn.classList.add('big-x');
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
    if (task.speedMult !== undefined) {
      mult *= task.speedMult;
    }
    return mult;
  }
  
  // Analytic estimate of total energy drained to complete a task,
  // using a two-phase model (bonus multiplier then base multiplier).
  function estimateEnergyDrain(task, zone) {
    const tick = effTickDuration;
    
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
    return D * Math.max((gameState.perks["immunity_device"] ? 0.25 : 1) * gameState.entropyShieldMultiplier, ticksNeeded);
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
      if (gameState.perks["kung_fu_zen"]) baseXP *= 1.28;
      let levelText = "";
      usedSkills.forEach(sName => {
        let gainedXP = baseXP;
        const skill = gameState.skills[sName];
        if (skill) {
          // Apply multipliers
          gainedXP *= skill.xpGainFactor;
          if (gameState.knowledgeUnlocked && knowledgeSkills.includes(sName)) {
            gainedXP *= (1 + 0.001 * gameState.knowledge);
          }
          if (gameState.perks["rex"] && sName === "charisma") {
            gainedXP *= 25;
          }
          if (gameState.perks["reinforcement_learning"] && sName === "aiMastery") {
            gainedXP *= 5;
          }
          if (gameState.numCosmicShards > 0) {
            gainedXP *= 5;
          }
          if (task.xpMult !== undefined) {
            gainedXP *= task.xpMult;
          }
          
          // Get current XP and required XP for the next level.
          let currentXP = skill.xp;
          let currentLevel = skill.level;
          let required = Math.pow(skillXpScaling, currentLevel - 1);
          let xpNeeded = required - currentXP;
          
          if (gainedXP < xpNeeded) {
            // Calculate percentage of level gained
            let percentage = (gainedXP / required) * 100;
            if (percentage < 0.01) {
              levelText += `<br>${formatStringForDisplay(sName)}: <0.01% of a level`;
            } else {
              levelText += `<br>${formatStringForDisplay(sName)}: ${formatNumber(percentage)}% of a level`;
            }
          } else {
            // If enough XP to level up, simulate how many full levels would be gained.
            let levelsGained = 0;
            let xpRemaining = gainedXP;
            let simLevel = currentLevel;
            let simXP = currentXP;
            while (xpRemaining >= (Math.pow(skillXpScaling, simLevel - 1) - simXP)) {
              let needed = Math.pow(skillXpScaling, simLevel - 1) - simXP;
              xpRemaining -= needed;
              levelsGained++;
              simLevel++;
              simXP = 0;
            }
            levelText += `<br>${formatStringForDisplay(sName)}: <span style="color:rgb(${Math.max(128 - levelsGained * 10, 0)}, ${Math.min(128 + levelsGained * 10, 255)}, ${Math.min(128 + levelsGained * 10, 255)})">+${levelsGained} level${levelsGained == 1 ? "" : "s"}</span>`;
          }
        }
      });
      
      
      // --- Extra Info ---
      let extraInfo = "";
      if (gameState.knowledgeUnlocked && usedSkills.some(s => knowledgeSkills.includes(s))) {
        extraInfo += `<br><br><span style="color:rgb(40, 210, 117)">Knowledge Gain on Completion: ${formatNumber(zone.id * gameState.delusionEnjoyerMultiplier)}</span>`;
      }
      if (gameState.copiumUnlocked && usedSkills.some(s => copiumSkills.includes(s))) {
        let copiumGain = 10 * zone.id;
        if (gameState.perks["copious_alchemist"] && gameState.perks["copious_alchemist"] !== "disabled") {
          copiumGain *= (gameState.serenityUnlockables["Copiouser Alchemist"] ? 0.2 : 0.4);
        }
        copiumGain = Math.max(copiumGain - gameState.numCelestialBlossoms, 0);
        extraInfo += `<br><br><span style="color:#dbd834">Copium Gain for next Task: ${formatNumber(copiumGain)}</span>`;
      }
      if (gameState.powerUnlocked && task.boss_image) {
        extraInfo += `<br><br><span style="color:rgb(222, 34, 191)">Power Gain on Completion: ${formatNumber((zone.id - 3) * gameState.powerGainMultiplier)}</span>`;
      }
      if (gameState.delusionUnlocked && usedSkills.some(s => delusionSkills.includes(s))) {
        extraInfo += `<br><br><span style="color:#9b59b6">Delusion Gain for next Task: 0 - ${formatNumber(zone.id * 100)} (random, skewed to low)</span>`;
      }
      // --- New: Drain Multiplier Info ---
      if (task.drainMult !== undefined || task.speedMult !== undefined || task.xpMult !== undefined) {
        extraInfo += `<br>`
        if (task.drainMult !== undefined) {
          extraInfo += `<br><span style="color:gray;">Task Drain Multiplier: ${formatNumber(task.drainMult)}</span>`;
        }
        if (task.speedMult !== undefined) {
          extraInfo += `<br><span style="color:gray;">Task Speed Multiplier: ${formatNumber(task.speedMult)}</span>`;
        }
        if (task.xpMult !== undefined) {
          extraInfo += `<br><span style="color:gray;">Task XP Multiplier: ${formatNumber(task.xpMult)}</span>`;
        }
      }
      
      // --- Real Time Duration Estimate ---
      const combinedMult = getCombinedMultiplier(task);
      const estimatedTicks = task.baseTime / (effTickDuration * combinedMult);
      let timeInfo = "";
      if (estimatedTicks < 1) {
        timeInfo = `<br><br><span style="color:gray;">Estimated Time${task.maxReps > 1 ? " for next task" : ""}: 1 tick</span>`;
      } else {
        const estimatedRealTimeMs = estimatedTicks * runTickDuration;
        const estimatedRealTimeSeconds = estimatedRealTimeMs / 1000;
        if (estimatedRealTimeSeconds < 60) {
          timeInfo = `<br><br><span style="color:gray;">Estimated Time${task.maxReps > 1 ? " for next task" : ""}: ${estimatedRealTimeSeconds.toFixed(1)} s</span>`;
        } else {
          const minutes = Math.floor(estimatedRealTimeSeconds / 60);
          const seconds = Math.floor(estimatedRealTimeSeconds % 60);
          timeInfo = `<br><br><span style="color:rgb(136, 72, 0);">Estimated Time${task.maxReps > 1 ? " for next task" : ""}: ${minutes} m ${seconds} s</span>`;
        }
      }
  
      const energyColorOffset = (estimatedEnergy / gameState.energy) * 60;
      
      btn.setAttribute("data-tooltip", 
        task.description +
        `<br><br><span style="color:gray">Estimated Energy Needed${task.maxReps > 1 ? " for next task" : ""}: <span style="color:rgb(${Math.min(128 + energyColorOffset, 255)}, ${Math.max(128 - energyColorOffset, 0)}, ${Math.max(128 - energyColorOffset, 0)})">${formatNumber(estimatedEnergy)}</span>` +
        `<br><br>Estimated Levels Gained${task.maxReps > 1 ? " for next task" : ""}:${levelText}</span>` +
        timeInfo +
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
        showMessage("Automation ended.");
        if (gameState.soundEnabled) {
          automationEndSound.play();
        }
      }
    } else {
      // In "Zone" mode (or if no automation mode set), turn autoRun off.
      gameState.autoRun = false;
    }
    if (currentZoneIndex < zones.length) displayZone();
    else {
      showEndOfContentModal();
    }
    saveGameProgress();
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
      knowledgeUpg.textContent = formatNumber(gameState.knowledge);
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
      powerUpg.textContent = formatNumber(gameState.power);
      const tooltipStr = "Power increases speed by <b>" +
        formatNumber((gameState.perks.urban_warfare ? 3 : 1) * gameState.power) +
        "%</b><br>for " + powerSkills.join(", ") + ".";
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
    } else {
      knowledgeSkills = ["tinkering", "intellect", "hacking"];
      showKnowledgeIfUnlocked();
    }
    if(gameState.perks.master_of_ai) {
      if (gameState.perks.master_of_ai === "disabled") {
        delusionSkills = ["charisma", "perception", "aiMastery", "negotiation"];
      } else {
        delusionSkills = ["charisma", "perception", "negotiation"];
      }
      updateDelusionDisplay();
    } else {
      delusionSkills = ["charisma", "perception", "aiMastery", "negotiation"];
      updateDelusionDisplay();
    }
    if(gameState.perks.mechanical_genius) {
      if (gameState.perks.mechanical_genius === "disabled") {
        copiumSkills = ["endurance", "alchemy", "mechanics"];
      } else {
        copiumSkills = ["endurance", "alchemy"];
      }
      updateCopiumDisplay();
    } else {
      copiumSkills = ["endurance", "alchemy", "mechanics"];
      updateCopiumDisplay();
    }
    if(gameState.perks.quantum_teleportation) {
      powerSkills = ["combat", "endurance", "travel"];
      showPowerIfUnlocked();
    } else {
      powerSkills = ["combat", "endurance"];
      showPowerIfUnlocked();
    }
    if (gameState.perks.growth_miracle && !growthMiracleApplied) {
      zones.forEach(zone => {
        zone.tasks.forEach(task => {
          if (task.resources && Array.isArray(task.resources) && task.resources.length > 0) {
            // Save the original value if not already saved.
            if (task.originalMaxReps === undefined) {
              task.originalMaxReps = task.maxReps;
            }
            task.maxReps = Math.floor(1.5 * task.originalMaxReps);
          }
        });
      });
      growthMiracleApplied = true;
    }    
  }
  
  // Modify your renderPerks function:
  function renderPerks() {
    const grid = document.querySelector("#perksContainer .perks-grid");
    if (!grid) return;
    grid.innerHTML = "";
  
    // 1) Build the zone order array once (or store it globally).
    const zoneOrder = getZonePerkOrder();
  
    // 2) Grab all perk keys from gameState.
    const perkKeys = Object.keys(gameState.perks);
  
    // 3) Sort them using a custom function.
    perkKeys.sort((a, b) => {
      // Compare by group first
      const groupA = getPerkGroup(a);
      const groupB = getPerkGroup(b);
      if (groupA !== groupB) return groupA - groupB;
  
      // If same group, compare by index in zoneOrder
      let idxA = zoneOrder.indexOf(a);
      let idxB = zoneOrder.indexOf(b);
  
      // If a perk doesn't appear in zoneOrder for some reason, push it to the end
      if (idxA < 0) idxA = 999999;
      if (idxB < 0) idxB = 999999;
  
      return idxA - idxB;
    });
  
    // 4) Now perkKeys is in the desired order. Then build the DOM.
    perkKeys.forEach(pKey => {
      const div = document.createElement("div");
      const icon = document.createElement("img");
      icon.src = "images/perks/" + pKey + ".jpg";
      const pStr = formatStringForDisplay(pKey);
      icon.alt = pStr;
      icon.style.pointerEvents = "none";
  
      // Determine locked/unlocked/toggleable classes & tooltips
      if (gameState.perks[pKey] !== false) {
        // unlocked
        if (toggleablePerks.includes(pKey)) {
          // toggleable
          if (gameState.perks[pKey] === "disabled") {
            div.className = "perk-item unlocked disabled";
          } else {
            div.className = "perk-item unlocked toggleable-enabled";
          }
          // On click, toggle it
          div.addEventListener("click", () => {
            gameState.perks[pKey] = (gameState.perks[pKey] === "disabled") ? true : "disabled";
            applyPerks();
            renderPerks();
            updateTasksHoverInfo();
          });
          div.setAttribute("data-tooltip",
            pStr + ":<br>" +
            (perkDescriptions[pKey] + "<br>Click to Toggle this perk." || "An unknown perk.")
          );
        } else {
          // unlocked but not toggleable
          div.className = "perk-item unlocked";
          div.setAttribute("data-tooltip", pStr + ":<br>" + (perkDescriptions[pKey] || "An unknown perk."));
        }
      } else {
        // locked
        div.className = "perk-item locked";
        const zoneNum = perkZoneMapping[pKey] || "?";
        div.setAttribute("data-tooltip", pStr + ": Unlock perk on Zone " + zoneNum + ".");
      }
  
      div.appendChild(icon);
      grid.appendChild(div);
    });
  }
  
  
  

  function showKnowledgeModal() {
    hideTooltip();
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "knowledgeModal";
    
    const content = document.createElement("div");
    content.className = "modal-content";
    
    const formattedSkills = knowledgeSkills.map(s => formatStringForDisplay(s)).join("<br>");
    content.innerHTML = `
      <h2>Knowledge Unlocked!</h2>
      <p>
        You now gain +0.1% XP per level for the following skills:<br>
        ${formattedSkills}
      </p>
    `;
    
    const btn = document.createElement("button");
    btn.textContent = "OK";
    btn.addEventListener("click", () => modal.remove());
    content.appendChild(btn);
    
    modal.appendChild(content);
    document.body.appendChild(modal);

    showKnowledgeIfUnlocked();
  }
  
  function showCopiumModal() {
    hideTooltip();
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "copiumModal";
    
    const content = document.createElement("div");
    content.className = "modal-content";
    
    const formattedSkills = copiumSkills.map(s => formatStringForDisplay(s)).join("<br>");
    content.innerHTML = `
      <h2>Copium Unlocked!</h2>
      <p>
        Tasks using the following skills now yield Copium:<br>
        ${formattedSkills}
      </p>
      <p>
        If it exceeds 9000, you will reset with all Resources and half your Knowledge lost!<br>
        But you will permanently gain +2 starting energy.
      </p>
    `;
    
    const btn = document.createElement("button");
    btn.textContent = "Got It";
    btn.addEventListener("click", () => modal.remove());
    content.appendChild(btn);
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    showCopiumBar();
  }
  
  function showPowerModal() {
    hideTooltip();
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "powerModal";
    
    const content = document.createElement("div");
    content.className = "modal-content";
    
    content.innerHTML = `
      <h2>Power Unlocked!</h2>
      <p>
        Boss wins now grant power (zone - 3).<br>
        Power increases the speed of Combat and Endurance.
      </p>
    `;
    
    const btn = document.createElement("button");
    btn.textContent = "Roger That";
    btn.addEventListener("click", () => modal.remove());
    content.appendChild(btn);
    
    modal.appendChild(content);
    document.body.appendChild(modal);

    showPowerIfUnlocked();
  }
  
  function showDelusionModal() {
    hideTooltip();
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "delusionModal";
    
    const content = document.createElement("div");
    content.className = "modal-content";
    
    const formattedSkills = delusionSkills.map(s => formatStringForDisplay(s)).join("<br>");
    content.innerHTML = `
      <h2>Delusion Unlocked!</h2>
      <p>
        Tasks using the following skills now yield Delusion:<br>
        ${formattedSkills}
      </p>
      <p>
        If it exceeds 9000, you will reset with 20% of your Power lost.
      </p>
    `;
    
    const btn = document.createElement("button");
    btn.textContent = "Ouch!";
    btn.addEventListener("click", () => modal.remove());
    content.appendChild(btn);
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    showDelusionBar();
  }

  function applySerenityUnlockable(upgName) {
    switch (upgName) {
      case "Complete Workaholic":
        if (!gameState.perks["workaholic"] || !gameState.perks["completionist"]) {
          gameState.perks["completionist"] = true;
          gameState.perks["workaholic"] = true;
          renderPerks();
        }
        break;
      case "Delusion Enjoyer":
        gameState.delusionEnjoyerMultiplier = Math.max(1, gameState.delusion / 100);
        break;
      case "Resource Consumer":
        gameState.autoConsumeResources = true;
        showAutoConsumeButton();  // Make the Auto-Use button appear.
        break;
      case "Instant Simulation":
        if (!gameState.perks["simulation_engine"]) {
          gameState.perks["self_operating_gadget"] = true;
          gameState.perks["simulation_engine"] = true;
          renderPerks();
        }
        break;
      case "Stronger Mech":
        perkDescriptions.basic_mech = "Increases starting Energy by 100.";
        // Effect is applied elsewhere.
        break;
      case "Smarter Automation":
        // Effect is applied elsewhere.
        break;
      case "Copiouser Alchemist":
        perkDescriptions.copious_alchemist = "Reduce Copium gain by 80%.";
        break;
      case "Gacha Overdrive":
        perkDescriptions.gacha_machine = "25% chance to produce triple resources.";
        break;
      default:
        console.log(`No effect defined for unlockable: ${upgName}`);
        break;
    }
  }
  
  function applySerenityInfinite(upgName) {
    const level = gameState.serenityInfinite[upgName] || 0;
    if (level <= 0) return;
    switch (upgName) {
      case "Wisdom Seeker":
        xpScale = 0.001 * (1 + 0.5 * level);
        break;
      case "Entropy Shield":
        gameState.entropyShieldMultiplier = Math.pow(0.98, level);
        break;
      case "Resource Saver":
        // Effect is applied elsewhere.
        break;
      case "Power Doubler":
        gameState.powerGainMultiplier = Math.pow(2, level);
        break;
      case "Better Elixirs":
        gameState.elixirEnergy = 3 + level;
        resourceActions["energy_elixir"].tooltip = "Click to gain +" + gameState.elixirEnergy + " Energy.<br>" + (("ontouchstart" in window || navigator.maxTouchPoints > 0) ? "Use above switch to consume all." : "Right-click to consume all.");
        break;
      case "Starting Level":
        gameState.startingLevel = 1 + level;
        Object.keys(gameState.skills).forEach(sName => {
          gameState.skills[sName].level = Math.max(gameState.skills[sName].level, gameState.startingLevel);
        });
        updateSkillDisplay();
        updateTasksHoverInfo();
        break;
      case "Game Speed":
        setRunTickDuration(100 * Math.pow(0.99, level));
        break;
      case "Zone Pusher":
        gameState.serenityGainZoneExponent = 3 + (level * 0.1);
        break;
      default:
        console.log(`No effect defined for infinite upgrade: ${upgName}`);
        break;
    }
  }
  
  function applySerenityUpgrades() {
    // Process all unlockable upgrades.
    Object.keys(gameState.serenityUnlockables).forEach(upgName => {
      if (gameState.serenityUnlockables[upgName]) {
        applySerenityUnlockable(upgName);
      }
    });
    // Process all infinite upgrades.
    Object.keys(gameState.serenityInfinite).forEach(upgName => {
      if (gameState.serenityInfinite[upgName] > 0) {
        applySerenityInfinite(upgName);
      }
    });
  }

  // Helper function to apply Resource Saver
  function applyResourceSaver() {
    // The total number of resource units to keep is the current level of Resource Saver.
    const keepCount = gameState.serenityInfinite["Resource Saver"] || 0;
    if (keepCount <= 0) {
      gameState.resources = {};
      return;
    }
    // Build an array where each resource appears once per unit available.
    let resourcePool = [];
    Object.keys(gameState.resources).forEach(name => {
      // Only consider resources with a positive count.
      const count = gameState.resources[name];
      for (let i = 0; i < count; i++) {
        resourcePool.push(name);
      }
    });
    
    // Randomly select keepCount items from the resourcePool without replacement.
    let keptResources = {};
    for (let i = 0; i < keepCount; i++) {
      if (resourcePool.length === 0) break;
      const idx = Math.floor(Math.random() * resourcePool.length);
      const resName = resourcePool[idx];
      if (!keptResources[resName]) {
        keptResources[resName] = 0;
      }
      keptResources[resName]++;
      // Remove this unit from the pool.
      resourcePool.splice(idx, 1);
    }
    gameState.resources = keptResources;
  }

  function showAutoConsumeButton() {
    const resourcesContainer = document.getElementById("resourcesContainer");
    if (!resourcesContainer) return;
    
    // Check if the button already exists.
    let autoBtn = document.getElementById("autoConsumeBtn");
    if (!autoBtn) {
      // Create the button.
      autoBtn = document.createElement("button");
      autoBtn.id = "autoConsumeBtn";
      autoBtn.textContent = "Auto-Use";
      // Reuse the same CSS class as your zone automation buttons.
      autoBtn.className = "resource-automation-btn";
  
      autoBtn.setAttribute("data-tooltip", "Auto-use all resources except:<br>" + 
        Array.from(EXCLUDED_AUTO_RESOURCES)
          .filter(r => gameState.resources.hasOwnProperty(r))
          .map(r => formatStringForDisplay(r))
          .join("<br>")
      );
      
      // Center the button horizontally and add margin on mobile.
      if (isMobile) {
        autoBtn.style.display = "block";
        autoBtn.style.margin = "0 auto";
        autoBtn.style.marginBottom = "12px";
      }
  
      // Insert the button right after the <h3>Resources</h3> header.
      const header = resourcesContainer.querySelector("h3");
      if (header && header.nextSibling) {
        header.parentNode.insertBefore(autoBtn, header.nextSibling);
      } else {
        resourcesContainer.appendChild(autoBtn);
      }
      
      // Initialize the auto-consume flag.
      gameState.autoConsumeEnabled = false;
      
      // Toggle auto-consume mode on click.
      autoBtn.addEventListener("click", () => {
        gameState.autoConsumeEnabled = !gameState.autoConsumeEnabled;
        if (gameState.autoConsumeEnabled) {
          autoBtn.classList.add("active");
          showMessage("Resource Auto-Use enabled");
        } else {
          autoBtn.classList.remove("active");
          showMessage("Resource Auto-Use disabled");
        }
      });
    }
  }
  
  

  

  // When a Prestige task finishes, unlock Serenity.
  function showSerenityUnlockedModal() {
    hideTooltip();
    // Mark Serenity as unlocked.
    gameState.serenityUnlocked = true;
    // Update the Serenity button display.
    showSerenityIfUnlocked();

    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "serenityUnlockedModal";
    
    const content = document.createElement("div");
    content.className = "modal-content prestige-modal";
    
    content.innerHTML = `
      <h2>Serenity Unlocked!</h2>
      <p>
        Prestige complete! Serenity is now unlocked.<br>
      </p>
      <p>
        Click the Serenity button (top right) to access the Prestige menu and purchase upgrades.
      </p>
    `;
    
    const btn = document.createElement("button");
    btn.textContent = "Awesome!";
    btn.addEventListener("click", () => {
      modal.remove();
    });
    
    content.appendChild(btn);
    modal.appendChild(content);
    document.body.appendChild(modal);
  }

  function showSerenityIfUnlocked() {
    const serenityUpg = document.getElementById("serenityUpgDiv");
    if (!serenityUpg) return;
    if (gameState.serenityUnlocked) {
      serenityUpg.style.display = "inline-block";
      // Calculate potential serenity gain on prestige:
      const serenityGainPotential = ((gameState.bestCompletedZone ** gameState.serenityGainZoneExponent) / gameState.resetsForBestZone) * (gameState.perks.inspired_glow ? 1.25 : 1);
      // Set the inner HTML: first line shows current Serenity, second line (in gray) shows potential gain.
      serenityUpg.innerHTML = `Serenity: ${formatNumber(gameState.serenity)}`
      serenityUpg.innerHTML += `<br><span style="color:rgb(200, 200, 200); font-size: 0.9em;">+(${formatNumber(serenityGainPotential)})</span>`;
      serenityUpg.setAttribute("data-tooltip", "Click to access the Prestige menu.");
      // Replace the element to remove any duplicate listeners, then add a click listener.
      const newSerenityUpg = serenityUpg.cloneNode(true);
      newSerenityUpg.addEventListener("click", showSerenityPrestigeModal);
      serenityUpg.parentNode.replaceChild(newSerenityUpg, serenityUpg);
    }
  }
  
  // calculat somewhere else and just display here
  function getCurrentInfiniteEffect(upgName, level) {
    switch (upgName) {
      case "Wisdom Seeker":
        return `Current Effect: ${formatNumber(level * 50)}%`;
      case "Entropy Shield":
        return `Current Effect: ${formatNumber(gameState.entropyShieldMultiplier * 100)}%`;
      case "Resource Saver":
        // For example, calculate the percentage of resources retained.
        return `Current Effect: ${formatNumber(level)}`;
      case "Power Doubler":
        // For example, you might calculate the effective boss power multiplier.
        return `Current Effect: ${formatNumber(gameState.powerGainMultiplier)}x`;
      case "Better Elixirs":
        return `Current Effect: +${formatNumber(gameState.elixirEnergy)}`;
      case "Starting Level":
        return `Current Effect: ${formatNumber(gameState.startingLevel)}`;
      case "Game Speed":
        return `Current Effect: Tick speed: ${formatNumber(runTickDuration)}ms`;
      case "Zone Pusher":
        return `Current Effect: ^${formatNumber(gameState.serenityGainZoneExponent)}`;
      default:
        return "Current Effect: (to be calculated)";
    }
  }
  
  function showSerenityPrestigeModal() {
    hideTooltip();
  
    const serenityGainPotential = ((gameState.bestCompletedZone ** gameState.serenityGainZoneExponent) / gameState.resetsForBestZone) *
      (gameState.perks.inspired_glow ? 1.25 : 1);
  
    // Calculate total resets from energy, copium, and delusion resets.
    const totalResets = gameState.numEnergyResets + gameState.numCopiumResets + gameState.numDelusionResets;
    // Calculate next zone potential using (highestCompletedZone + 1) divided by total resets.
    const nextZonePotential = (((gameState.highestCompletedZone + 1) ** gameState.serenityGainZoneExponent) / totalResets) *
      (gameState.perks.inspired_glow ? 1.25 : 1);
  
    // Check if the modal already exists.
    let modal = document.getElementById("serenityModal");
    let content;
    if (!modal) {
      modal = document.createElement("div");
      modal.className = "modal";
      modal.id = "serenityModal";
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.remove();
        }
      });
      document.body.appendChild(modal);
  
      content = document.createElement("div");
      content.className = "modal-content prestige-modal prestige-modal-blueborder";
      content.style.maxHeight = "80vh";
      content.style.overflowY = "auto";
      modal.appendChild(content);
    } else {
      content = modal.querySelector(".modal-content");
    }
  
    // Save the current scroll position.
    const currentScroll = content.scrollTop;
  
    // Build header.
    let html = `
      <div class="modal-header-centered">
        <h2>Prestige</h2>
      </div>
      <div class="serenity-info-container">
        <p>
          <strong>Serenity:</strong> ${formatNumber(gameState.serenity)}
          <span style="color: gray; font-size: 0.9em;">(+${formatNumber(serenityGainPotential)})</span>
        </p>
        <p style="color: gray; margin-top: -10px;">
          Serenity Gain = (<strong>Best Full Zone</strong> ^ ${gameState.serenityGainZoneExponent} / <strong>Total Resets</strong>)${gameState.perks.inspired_glow ? " * 1.25" : ""}
        </p>
      </div>
      <p style="font-size: 0.9em; margin-top: 5px;">
        Best Zone Completed: ${gameState.bestCompletedZone} | 
        Resets on Completion: ${gameState.resetsForBestZone == 1e100 ? "N/A" : gameState.resetsForBestZone}<br>
        <span style="color: gray;">
          Highest Zone Completed: ${gameState.highestCompletedZone} | Next Zone Potential Serenity: 
          <span style="color: ${nextZonePotential > serenityGainPotential ? "green" : "gray"};">${formatNumber(nextZonePotential)}</span>
        </span><br><br>
        Current Resets:<br>
        Energy: ${gameState.numEnergyResets} | Copium: ${gameState.numCopiumResets} | Delusion: ${gameState.numDelusionResets}
      </p>
      <div class="serenity-buttons-container">
        <button class="prestige-task-button" ${!gameState.prestigeAvailable ? "disabled data-tooltip='Prestige becomes available after completing a prestige task.'" : ""}>Prestige</button>
        <button class="exit-btn">Exit</button>
      </div>
    `;
    content.innerHTML = html;
  
    // Attach event listeners to the Prestige and Exit buttons.
    const prestigeBtn = content.querySelector(".prestige-task-button");
    if (prestigeBtn && gameState.prestigeAvailable) {
      prestigeBtn.addEventListener("click", () => {
        showPrestigeConfirmationModal(serenityGainPotential);
      });
    }
    const exitBtn = content.querySelector(".exit-btn");
    if (exitBtn) {
      exitBtn.addEventListener("click", () => modal.remove());
    }
  
    // Append each upgrade section.
    for (const sectionName of Object.keys(SERENITY_UPGRADES.unlockables)) {
      // Determine if this section should be locked.
      const sectionLocked = (sectionName === "Embrace Stillness" && !gameState.secondSectionUnlocked);
  
      // Create a container for the section.
      let sectionDiv = document.createElement("div");
      sectionDiv.className = "serenity-section";
      const sectionTitle = document.createElement("h3");
      sectionTitle.textContent = sectionName;
      sectionDiv.appendChild(sectionTitle);
  
      // Create a row container.
      let row = document.createElement("div");
      row.className = "serenity-section-row";
  
      // Left column: Unlockables.
      let leftCol = document.createElement("div");
      leftCol.className = "serenity-upgrades-col";
      const leftTitle = document.createElement("h4");
      leftTitle.textContent = "Unlockables";
      leftCol.appendChild(leftTitle);
      let leftGrid = document.createElement("div");
      leftGrid.className = "serenity-upgrade-grid";
  
      const unlockables = SERENITY_UPGRADES.unlockables[sectionName] || {};
      for (const [upgName, details] of Object.entries(unlockables)) {
        let slot = document.createElement("div");
        slot.className = "serenity-upgrade-slot";
  
        let nameDiv = document.createElement("div");
        nameDiv.className = "serenity-upgrade-name";
        nameDiv.textContent = upgName;
  
        let costDiv = document.createElement("div");
        costDiv.className = "serenity-upgrade-cost";
  
        if (gameState.serenityUnlockables[upgName]) {
          slot.classList.add("upgrade-slot-purchased");
        } else {
          if (sectionLocked) {
            slot.classList.add("upgrade-slot-locked");
            costDiv.textContent = `Cost: ${details.cost}`;
            slot.setAttribute("data-tooltip", (details.description || "") + "<br><br>This section is locked.");
          } else {
            if (gameState.serenity >= details.cost) {
              slot.classList.add("upgrade-slot-affordable");
            } else {
              slot.classList.add("upgrade-slot-locked");
            }
            costDiv.textContent = `Cost: ${details.cost}`;
            slot.addEventListener("click", () => {
              if (gameState.serenity >= details.cost) {
                const prevScroll = content.scrollTop;
                gameState.serenity -= details.cost;
                gameState.serenityUnlockables[upgName] = true;
                applySerenityUnlockable(upgName);
                showSerenityIfUnlocked();
                // Instead of removing the modal, update it:
                showSerenityPrestigeModal();
                content.scrollTop = prevScroll;
              }
            });
          }
        }
  
        if (!slot.hasAttribute("data-tooltip")) {
          let tooltipText = details.description || "";
          slot.setAttribute("data-tooltip", tooltipText);
        }
  
        slot.appendChild(nameDiv);
        if (!gameState.serenityUnlockables[upgName]) {
          slot.appendChild(costDiv);
        }
        leftGrid.appendChild(slot);
      }
      leftCol.appendChild(leftGrid);
  
      // Right column: Infinite Upgrades.
      let rightCol = document.createElement("div");
      rightCol.className = "serenity-upgrades-col";
      const rightTitle = document.createElement("h4");
      rightTitle.textContent = "Infinites";
      rightCol.appendChild(rightTitle);
      let rightGrid = document.createElement("div");
      rightGrid.className = "serenity-upgrade-grid";
  
      const infinite = SERENITY_UPGRADES.infinite[sectionName] || {};
      for (const [upgName, details] of Object.entries(infinite)) {
        let slot = document.createElement("div");
        slot.className = "serenity-upgrade-slot";
  
        const level = gameState.serenityInfinite[upgName] || 0;
        let nameDiv = document.createElement("div");
        nameDiv.className = "serenity-upgrade-name";
        nameDiv.innerHTML = `${upgName}`;
  
        const cost = details.initialCost * details.scaling ** level;
        let costDiv = document.createElement("div");
        costDiv.className = "serenity-upgrade-cost";
  
        if (cost > 0) {
          if (sectionLocked) {
            slot.classList.add("upgrade-slot-locked");
            costDiv.textContent = `Level: ${level}, Cost: ${formatNumber(cost)}`;
            slot.setAttribute("data-tooltip", (details.description || "") + "<br><br>This section is locked.");
          } else {
            if (gameState.serenity >= cost) {
              slot.classList.add("upgrade-slot-affordable");
            } else {
              slot.classList.add("upgrade-slot-locked");
            }
            costDiv.textContent = `Level: ${level}, Cost: ${formatNumber(cost)}`;
            slot.addEventListener("click", () => {
              if (cost > 0 && gameState.serenity >= cost) {
                const prevScroll = content.scrollTop;
                gameState.serenity -= cost;
                gameState.serenityInfinite[upgName] = level + 1;
                applySerenityInfinite(upgName);
                showSerenityIfUnlocked();
                showSerenityPrestigeModal();
                content.scrollTop = prevScroll;
              }
            });
          }
        } else {
          slot.classList.add("upgrade-slot-purchased");
        }
  
        let tooltipTextInfinite = details.description || "";
        if (sectionLocked) {
          tooltipTextInfinite += "<br><br>This section is locked.";
        } else {
          tooltipTextInfinite += `<br><br>${getCurrentInfiniteEffect(upgName, level)}`;
        }
        slot.setAttribute("data-tooltip", tooltipTextInfinite);
  
        slot.appendChild(nameDiv);
        if (cost > 0) slot.appendChild(costDiv);
  
        rightGrid.appendChild(slot);
      }
      rightCol.appendChild(rightGrid);
  
      row.appendChild(leftCol);
      row.appendChild(rightCol);
      sectionDiv.appendChild(row);
      content.appendChild(sectionDiv);
    }
  
    // Restore the previous scroll position.
    content.scrollTop = currentScroll;
  }
  
  
  
  
  
  

  // Example confirmation modal for actually prestiging
  function showPrestigeConfirmationModal(serenityGain) {
    const confirmModal = document.createElement("div");
    confirmModal.className = "modal";
    confirmModal.id = "prestigeConfirmModal";

    const content = document.createElement("div");
    content.className = "modal-content prestige-modal prestige-modal-blueborder";

    content.innerHTML = `
      <h2>Confirm Prestige</h2>
      <p>All progress will reset, but you gain +${formatNumber(serenityGain)} Serenity.</p>
    `;

    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Confirm";
    confirmBtn.className = "prestige-task-button";
    confirmBtn.style.fontWeight = "bold";
    confirmBtn.addEventListener("click", () => {
      // Add serenity, reset, close modal
      gameState.serenity += serenityGain;
      gameState.prestigeAvailable = false;
      resetGame("prestige");
      confirmModal.remove();
      // Also close the main serenity modal if it's still open
      const mainModal = document.getElementById("serenityModal");
      if (mainModal) mainModal.remove();
    });

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", () => confirmModal.remove());

    content.appendChild(confirmBtn);
    content.appendChild(cancelBtn);
    confirmModal.appendChild(content);
    document.body.appendChild(confirmModal);
  }

  
  
  // Call this function at load to initialize missing upgrades in gameState.
  function initializeSerenityUpgrades() {
    // For unlockable upgrades:
    if (!gameState.serenityUnlockables) {
      gameState.serenityUnlockables = {};
    }
    for (const section in SERENITY_UPGRADES.unlockables) {
      for (const upgName in SERENITY_UPGRADES.unlockables[section]) {
        if (!(upgName in gameState.serenityUnlockables)) {
          gameState.serenityUnlockables[upgName] = false;
        }
      }
    }
    
    // For infinite upgrades:
    if (!gameState.serenityInfinite) {
      gameState.serenityInfinite = {};
    }
    for (const section in SERENITY_UPGRADES.infinite) {
      for (const upgName in SERENITY_UPGRADES.infinite[section]) {
        if (!(upgName in gameState.serenityInfinite)) {
          gameState.serenityInfinite[upgName] = 0;
        }
      }
    }
  }

  
  function showEndOfContentModal() {
    hideTooltip();
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "endOfContentModal";
    
    const content = document.createElement("div");
    // Apply both modal-content and an "end-of-content-modal" modifier (for custom styling, if desired)
    content.className = "modal-content end-of-content-modal";
    
    content.innerHTML = `
      <h2>Congratulations!</h2>
      <p>
        You have completed all the current content! Your journey has been nothing short of extraordinary.
        Every challenge you faced and every decision you made has led you to this milestone.
      </p>
      <p>
        <strong>Energy Resets:</strong> ${gameState.numEnergyResets}<br>
        <strong>Copium Resets:</strong> ${gameState.numCopiumResets}<br>
        <strong>Delusion Resets:</strong> ${gameState.numDelusionResets}
      </p>
      <p>
        More content and challenges are on the horizon in future updates.
        In the meantime, you can explore <a href="https://www.degensidle.com/" target="_blank"><strong>Degens Idle</strong></a>
        and join our <a href="https://discordapp.com/channels/1268685194819538984/1337527757629816933" target="_blank">Discord Channel</a>
        to keep up with development!
      </p>
    `;
    
    const btnWrapper = document.createElement("div");
    btnWrapper.className = "prestige-btn-wrapper";
    
    const btn = document.createElement("button");
    btn.textContent = "Back to zone 1!";
    btn.addEventListener("click", () => {
      modal.remove();
      resetGame("contentComplete");
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
      content.style.display = "flex";
      content.style.flexDirection = "column";
      content.style.alignItems = "center";
      content.style.gap = "10px";

      // Audio Settings Controls
      const audioSettingsDiv = document.createElement("div");
      audioSettingsDiv.style.marginBottom = "10px";
      audioSettingsDiv.innerHTML = `
        <div>
          <label>
            <input type="checkbox" id="musicToggle" checked>
            Music
          </label>
          <label>
            <input type="checkbox" id="soundToggle" checked>
            Sound Effects
          </label>
        </div>
        <div>
          <label>
            Volume: <input type="range" id="volumeControl" min="0" max="1" step="0.01" value="0.5">
          </label>
        </div>
      `;
      content.insertBefore(audioSettingsDiv, content.firstChild);

      const musicToggle = audioSettingsDiv.querySelector("#musicToggle");
      const soundToggle = audioSettingsDiv.querySelector("#soundToggle");
      const volumeControl = audioSettingsDiv.querySelector("#volumeControl");

      // Set initial state from gameState
      musicToggle.checked = gameState.musicEnabled;
      soundToggle.checked = gameState.soundEnabled;
      volumeControl.value = gameState.soundVolume || 0.5;

      musicToggle.addEventListener("change", function() {
        // When music is toggled off, mute all sounds.
        // When toggled on, unmute and (optionally) restart bgMusic.
        const enabled = this.checked;
        gameState.musicEnabled = enabled;
        soundManager.setMute(!enabled);
        if (enabled && bgMusic.paused) {
          bgMusic.play().catch(() => {});
        } else {
          bgMusic.pause();
        }
      });

      soundToggle.addEventListener("change", function() {
        // Here you can choose to handle sound effects separately if desired.
        // For now, this example uses the same mute for all sounds.
        const enabled = this.checked;
        gameState.soundEnabled = enabled;
        soundManager.setMute(!enabled);
      });

      volumeControl.addEventListener("input", function() {
        const vol = parseFloat(this.value);
        gameState.soundVolume = vol;
        soundManager.setVolume(vol);
      });

      // Create a container for the save buttons
      const saveButtonsContainer = document.createElement("div");
      saveButtonsContainer.className = "save-buttons-container";

      // Create the Copy Save button
      const copySaveBtn = document.createElement("button");
      copySaveBtn.classList.add("btn-copy");
      copySaveBtn.innerHTML = `<img src="images/buttons/copy.png" alt="Copy"><span> Copy</span>`;
      copySaveBtn.setAttribute("data-tooltip", "Save your game progress to the clipboard.");
      copySaveBtn.addEventListener("click", copySave);
      saveButtonsContainer.appendChild(copySaveBtn);

      // Create the Paste Save button
      const pasteSaveBtn = document.createElement("button");
      pasteSaveBtn.classList.add("btn-paste");
      pasteSaveBtn.innerHTML = `<img src="images/buttons/paste.png" alt="Paste"><span> Paste</span>`;
      pasteSaveBtn.setAttribute("data-tooltip", "Paste a save string from your clipboard to load progress.<br>This will overwrite your current progress.");
      pasteSaveBtn.addEventListener("click", pasteSave);
      saveButtonsContainer.appendChild(pasteSaveBtn);

      // Create the Save to File button.
      const saveFileBtn = document.createElement("button");
      saveFileBtn.classList.add("btn-copy");
      saveFileBtn.innerHTML = `<img src="images/buttons/upload.png" alt="Save"><span> Save</span>`;
      saveFileBtn.setAttribute("data-tooltip", "Save your game progress to a file.");
      saveFileBtn.addEventListener("click", () => {
        // Ensure progress is saved.
        saveGameProgress();
        const saveData = localStorage.getItem("degensAdventureProgress");
        if (!saveData) {
          showMessage("No save data found");
          return;
        }
        // Compute file name.
        const totalSerenity = computeSerenityTotalValue();
        const perkCount = Object.keys(gameState.perks).filter(key => gameState.perks[key] !== false).length;
        let fileName = "Degens Adventure - ";
        if (totalSerenity > 0) {
          fileName += "Serenity_" + formatNumber(totalSerenity) + ", ";
        }
        fileName += "Perks_" + perkCount;
        // Create a blob and trigger the download.
        const blob = new Blob([saveData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName + ".json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
      saveButtonsContainer.appendChild(saveFileBtn);

      // Create the Load from File button.
      const loadFileBtn = document.createElement("button");
      loadFileBtn.classList.add("btn-paste");
      loadFileBtn.innerHTML = `<img src="images/buttons/download.png" alt="Load"><span> Load</span>`;
      loadFileBtn.setAttribute("data-tooltip", "Load game progress from a file.");
      loadFileBtn.addEventListener("click", () => {
        // Create a hidden file input.
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/json";
        input.addEventListener("change", (e) => {
          const file = e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (event) => {
            try {
              const data = event.target.result;
              // Optionally, you can show a confirmation modal before overwriting.
              showPasteConfirmationModal(() => {
                localStorage.setItem("degensAdventureProgress", data);
                showMessage("Save loaded from file!");
                location.reload();
              });
            } catch (err) {
              showMessage("Invalid save file");
            }
          };
          reader.readAsText(file);
        });
        input.click();
      });
      saveButtonsContainer.appendChild(loadFileBtn);

      // Append the container to your settings modal content
      content.appendChild(saveButtonsContainer);

  
      // 1) Cheat Codes (Orange)
      const cheatBtn = document.createElement("button");
      cheatBtn.classList.add("btn-orange");
      cheatBtn.textContent = "Cheat Codes";
      cheatBtn.setAttribute(
        "data-tooltip",
        "Cheat Codes (Development Only)<br>" +
        "This is intended only during development<br>" +
        "when an update forces Full Restarts<br>" +
        "to allow players to quickly resume progress.<br>" +
        "Cheat Codes add sub-optimal numbers of<br>" +
        "'Energy Restarts' to prevent breaking<br>" +
        "future prestige content.<br>" +
        "All current cheat codes can be found in Discord."
      );
      cheatBtn.addEventListener("click", () => {
        showCheatCodeModal();
      });
      content.appendChild(cheatBtn);

      // 2) FULL RESTART (Red)
      const restartAll = document.createElement("button");
      restartAll.classList.add("btn-red");
      restartAll.textContent = "FULL RESTART";
      restartAll.setAttribute(
        "data-tooltip",
        "Warning: This will reset all game progress.<br>" +
        "Since the only save mechanism is localStorage,<br>" +
        "all your progress will be lost."
      );
      restartAll.addEventListener("click", () => {
        showRestartConfirmationModal(() => {
          localStorage.removeItem("degensAdventureProgress");
          fullRestart();
          modal.remove(); // remove the settings modal as well, if desired
        });
      });
      content.appendChild(restartAll);


      // 3) Discord with image fill
      const discordBtn = document.createElement("button");
      discordBtn.classList.add("btn-discord");
      const discordImg = document.createElement("img");
      discordImg.src = "images/discord.svg";
      discordImg.alt = "Discord";
      discordImg.style.pointerEvents = "none";
      discordBtn.appendChild(discordImg);
      discordBtn.setAttribute(
        "data-tooltip",
        "The Degens Idle Discord<br>" +
        "Discussion for this game is in the<br>" +
        "#adventure-chat channel."
      );
      discordBtn.addEventListener("click", () => {
        window.open("https://discord.gg/kBc4hjQBRg", "_blank");
      });
      content.appendChild(discordBtn);

      /**
       * New Buy Me a Coffee button (Yellow).
       */
      const coffeeBtn = document.createElement("button");
      coffeeBtn.classList.add("btn-yellow");
      coffeeBtn.textContent = "Buy Me a Coffee";
      coffeeBtn.setAttribute(
        "data-tooltip",
        "If you enjoy Degens Adventure and want to see more,<br>feel free to support the developer!"
      );
      coffeeBtn.addEventListener("click", () => {
        window.open("https://buymeacoffee.com/ssiatkowski", "_blank");
      });
      content.appendChild(coffeeBtn);
  
      // 4) Degens Idle (Orange) with image fill and custom tooltip
      const degensIdleBtn = document.createElement("button");
      degensIdleBtn.classList.add("btn-degens");
      const degensIdleImg = document.createElement("img");
      degensIdleImg.src = "images/degens_idle.jpg";
      degensIdleImg.alt = "Degens Idle";
      degensIdleBtn.appendChild(degensIdleImg);
      degensIdleBtn.setAttribute(
        "data-tooltip",
        "Try <b>Degens Idle</b><br>" +
        "Experience a deeper, more balanced strategy-based incremental game!<br>" +
        "While Degens Adventure is still in its infancy,<br>" +
        "Degens Idle is much more mature and refined.<br>" +
        "It has undergone extensive revisions and community-driven optimizations,<br>" +
        "offering roughly 2 months of immersive gameplay,<br>" +
        "packed with surprises and robust prestige layers."
      );
      degensIdleBtn.addEventListener("click", () => {
        window.open("https://www.degensidle.com/", "_blank");
      });
      content.appendChild(degensIdleBtn);
  
      // 5) Back (Green)
      const backBtn = document.createElement("button");
      backBtn.classList.add("btn-green");
      backBtn.textContent = "Back";
      backBtn.addEventListener("click", () => {
        modal.remove();
      });
      content.appendChild(backBtn);
  
      modal.appendChild(content);
      document.body.appendChild(modal);
      
      modal.addEventListener("click", (e) => {
        // If the clicked element is the modal overlay (and not its inner content), close the modal.
        if (e.target === modal) {
          modal.remove();
        }
      });
    });
  }
  

  createSettingsButton();

  function fullRestart() {
    gameState = getInitialGameState();
    zones.forEach(z => z.tasks.forEach(t => t.count = 0));
    zones.forEach(z => {
      z.tasks.forEach(t => {
        // Restore original maxReps if they were modified by growth_miracle.
        if (t.originalMaxReps !== undefined) {
          t.maxReps = t.originalMaxReps;
          delete t.originalMaxReps;
        }
        t.count = 0;
      });
    });
    growthMiracleApplied = false;
    currentZoneIndex = 0;
    currentTasks = [];
    skillXpScaling = 1.02;
    xpScale = 0.001;
    setRunTickDuration(100);
    document.getElementById("copiumBarContainer").style.display = "none";
    document.getElementById("delusionBarContainer").style.display = "none";
    //if autoConsumeBtn exists set it to none
    if (document.getElementById("autoConsumeBtn")) document.getElementById("autoConsumeBtn").style.display = "none";
    initializeSerenityUpgrades();
    updateEnergyDisplay();
    renderResources();
    gatherAllPerks();
    updatePerksCount();
    applyPerks();
    updateSkillMultipliers();
    renderSkills();
    updateSkillDisplay();
    const kUpg = document.getElementById("knowledgeUpgDiv");
    if (kUpg) kUpg.style.display = "none";
    const pUpg = document.getElementById("powerUpgDiv");
    if (pUpg) pUpg.style.display = "none";
    const sUpg = document.getElementById("serenityUpgDiv");
    if (sUpg) sUpg.style.display = "none";
    displayZone();
    document.getElementById("versionBanner").style.display = "none";
  }

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
    if (code === "BetterStart" && gameState.serenity === 0) {
      gameState.skills["endurance"].level = Math.max(gameState.skills["endurance"].level, 250);
      gameState.skills["tinkering"].level = Math.max(gameState.skills["tinkering"].level, 200);
      gameState.skills["charisma"].level = Math.max(gameState.skills["charisma"].level, 250);
      gameState.skills["alchemy"].level = Math.max(gameState.skills["alchemy"].level, 250);
      gameState.skills["travel"].level = Math.max(gameState.skills["travel"].level, 150);
      gameState.numEnergyResets = Math.max(gameState.numEnergyResets, 60);
      showConfirmationModal("Cheat Code Activated: BetterStart");
      updateSkillMultipliers();
      renderSkills();
      updateSkillDisplay();
      updateTasksHoverInfo();
    } else if (code === "WhatAboutOtherSkills" && gameState.serenity === 0) {
      gameState.skills["endurance"].level = Math.max(gameState.skills["endurance"].level, 250);
      gameState.skills["tinkering"].level = Math.max(gameState.skills["tinkering"].level, 200);
      gameState.skills["charisma"].level = Math.max(gameState.skills["charisma"].level, 250);
      gameState.skills["alchemy"].level = Math.max(gameState.skills["alchemy"].level, 250);
      gameState.skills["travel"].level = Math.max(gameState.skills["travel"].level, 150);
      gameState.skills["intellect"].level = Math.max(gameState.skills["intellect"].level, 150);
      gameState.skills["perception"].level = Math.max(gameState.skills["perception"].level, 150);
      gameState.skills["mechanics"].level = Math.max(gameState.skills["mechanics"].level, 50);
      gameState.numEnergyResets = Math.max(gameState.numEnergyResets, 100);
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
    // Auto-Use resources if enabled:
    if (gameState.autoConsumeEnabled) {
      // Loop over resources and pick the first usable one.
      for (const resName in gameState.resources) {
        if (gameState.resources[resName] > 0 && !EXCLUDED_AUTO_RESOURCES.has(resName)) {
          // Consume all units of that resource.
          const amt = gameState.resources[resName];
          consumeResource(resName, amt);
          // Optionally trigger any onConsume action:
          if (resourceActions[resName] && typeof resourceActions[resName].onConsume === "function") {
            resourceActions[resName].onConsume(gameState, amt);
          }
          // Only process one resource per tick.
          break;
        }
      }
    }

    if (currentTasks.length === 0 && !gameState.autoRun) return;
    currentTasks.forEach((tData) => {
      if (tData.paused) return;
      const oldProgress = tData.progress;
      const zone = zones[tData.zoneIndex];
      tData.progress += effTickDuration * getCombinedMultiplier(tData.task);
      let singleTickSkill = false;
      if (tData.progress > tData.totalDuration) {
        tData.progress = tData.totalDuration;
        singleTickSkill = true;
      }
      const delta = tData.progress - oldProgress;
      let drain = getCombinedEnergyDrain(tData.task, tData.zoneIndex);
      if (!gameState.cyberneticArmorTaskRunning && gameState.numCyberneticArmors > 0) {
        gameState.cyberneticArmorTaskRunning = true;
        gameState.numCyberneticArmors--;
      }
      if (!gameState.cosmicShardTaskRunning && gameState.numCosmicShards > 0) {
        gameState.cosmicShardTaskRunning = true;
        gameState.numCosmicShards--;
      }
      if (gameState.cyberneticArmorTaskRunning) {
        drain *= 0.25;
      }
      if (singleTickSkill) {
        drain *= gameState.entropyShieldMultiplier;
        if (gameState.perks["immunity_device"]) drain *= 0.25;
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
      if (gameState.perks["kung_fu_zen"]) xpEach *= 1.28;
      if (gameState.cosmicShardTaskRunning) xpEach *= 5;
      if (tData.task.xpMult !== undefined) {
        xpEach *= tData.task.xpMult;
      }
      usedSkills.forEach(sName => {
        addXP(sName, xpEach);
      });
      const pct = (tData.progress / tData.totalDuration) * 100;
      tData.progressFill.style.width = Math.min(pct, 100) + "%";
      if (tData.progress >= tData.totalDuration) {
        const task = zone.tasks[tData.taskIndex];
        if (task.count < task.maxReps) task.count++;
        if (task.resources && Array.isArray(task.resources)) {
          if (gameState.perks["luck_of_the_irish"] && Math.random() < 0.07) {
            task.resources.forEach(r => addResource(r, 7));
          } else if (gameState.perks["gacha_machine"] && Math.random() < 0.25) {
            if (gameState.serenityUnlockables["Gacha Overdrive"]) {
              task.resources.forEach(r => addResource(r, 3));
            } else {
              task.resources.forEach(r => addResource(r, 2));
            }
          } else {
            task.resources.forEach(r => addResource(r, 1));
          }
        }
        if (gameState.copiumUnlocked && usedSkills.some(s => copiumSkills.includes(s))) {
          const copiousAlchemistMultiplier = 
            (gameState.perks["copious_alchemist"] && gameState.perks["copious_alchemist"] !== "disabled")
              ? (gameState.serenityUnlockables["Copiouser Alchemist"] ? 0.2 : 0.4)
              : 1;
          gameState.copium += Math.max((10 * zone.id) * copiousAlchemistMultiplier - gameState.numCelestialBlossoms, 0);

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
          
          if (gameState.serenityUnlockables["Delusion Enjoyer"] && randomMultiplier !== 0) {
            gameState.delusionEnjoyerMultiplier = Math.max(1, gameState.delusion / 100);
          }
          
          if (gameState.delusion > 9000) {
            currentTasks = [];
            gameState.autoRun = false;
            handleDelusionOverflow();
            return;
          }
          
          updateDelusionDisplay();
        }
        
        const repContainer = document.querySelector(
          `.task[data-zone-index="${tData.zoneIndex}"][data-task-index="${tData.taskIndex}"] .rep-container`
        );
        if (repContainer) {
          updateRepContainer(repContainer, task);
        }
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
            if (gameState.zoneFullCompletes[tData.zoneIndex] < 10) {
              showMessage(`Zone ${tData.zoneIndex + 1} completed ${gameState.zoneFullCompletes[tData.zoneIndex]}/10 times.`);
            }
            if (gameState.highestCompletedZone < tData.zoneIndex + 1) {
              gameState.highestCompletedZone = tData.zoneIndex + 1;
              gameState.resetsForHighestZone = Math.max(gameState.numEnergyResets + gameState.numCopiumResets + gameState.numDelusionResets, 1);
              if (gameState.bestCompletedZone ** gameState.serenityGainZoneExponent / gameState.resetsForBestZone < gameState.highestCompletedZone ** gameState.serenityGainZoneExponent / gameState.resetsForHighestZone) {
                gameState.bestCompletedZone = gameState.highestCompletedZone;
                gameState.resetsForBestZone = gameState.resetsForHighestZone;
                showMessage(`<span style="color: rgb(28, 106, 233);">New best fully compeleted: Zone ${gameState.bestCompletedZone} with ${gameState.resetsForBestZone} resets</span>`);
              } else {
                showMessage(`New highest fully compeleted: Zone ${gameState.highestCompletedZone} would yield less Serenity than previous best Zone ${gameState.bestCompletedZone}`);
              }
            }
          }
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
              if (gameState.serenityUnlockables["Delusion Enjoyer"]) {
                gameState.delusionEnjoyerMultiplier = Math.max(1, gameState.delusion / 100);
              }
              showMessage("Crypto Wallet: -25 Delusion");
              updateDelusionDisplay();
            }
            if (Math.random() < 0.025) {
              gameState.knowledge += 25;
              showMessage("Crypto Wallet: +25 Knowledge");
              showKnowledgeIfUnlocked();
            }
            if (Math.random() < 0.005) {
              showMessage("Crypto Wallet: +25 Power");
              gameState.power += 25;
              showPowerIfUnlocked();
            }
          }
          currentTasks = [];
          nextZone();
          displayZone();
        } else {
          // Non-Travel tasks
          if (task.count >= task.maxReps) {
            hideTooltip();
            tData.button.parentElement.parentElement.style.display = "none";
            removeTaskFromCurrent(tData);
          } else {
            if (gameState.perks["completionist"] && gameState.perks["completionist"] !== "disabled") {
              tData.progress = 0;
              tData.progressFill.style.width = "0%";
            } else {
              removeTaskFromCurrent(tData);
            }
            gameState.cyberneticArmorTaskRunning = false;
            gameState.cosmicShardTaskRunning = false;
          }
          if (!gameState.autoRun) saveGameProgress();
        }
        if (task.count >= task.maxReps && gameState.knowledgeUnlocked && usedSkills.some(s => knowledgeSkills.includes(s))) {
          gameState.knowledge += zone.id * gameState.delusionEnjoyerMultiplier;
          showKnowledgeIfUnlocked();
        }
        if (task.count >= task.maxReps && task.boss_image) {
          if (!gameState.powerUnlocked) {
            gameState.powerUnlocked = true;
            showPowerModal();
          }
          gameState.power += (zone.id - 3) * gameState.powerGainMultiplier;
          showMessage(`<span style="color: rgb(222, 34, 191);">${task.name.replace(/^[^ ]+ /, "")} defeated! +${(zone.id - 3) * gameState.powerGainMultiplier} Power</span>`);
          showPowerIfUnlocked();
        }
        if (task.perk && !gameState.perks[task.perk] && task.count >= task.maxReps) {
          gameState.perks[task.perk] = true;
          if (task.perk === "basic_mech") {
            if (gameState.serenityUnlockables["Stronger Mech"]) gameState.startingEnergy += 100;
            else gameState.startingEnergy += 25;
            updateEnergyDisplay();
          }
          if (task.perk === "simulation_engine") {
            if (!gameState.serenityUnlockables["Instant Simulation"]) {
              zones.forEach((zone, zIndex) => {
                zone.tasks.forEach((task, tIndex) => {
                  const key = `${zIndex}-${tIndex}`;
                  gameState.automationOverrides[key] = false;
                });
              });
            }
          }
          const perkKey = task.perk;
          const perkName = formatStringForDisplay(perkKey);
          const perkDesc = perkDescriptions[perkKey] || "No description available.";
          showMessage(
            `<div class="perk-unlock-message">
              <img src="images/perks/${perkKey}.jpg" alt="${perkName}">
              <div>
                <strong>${perkName} unlocked!</strong><br>
                ${perkDesc}
              </div>
            </div>`
          );
          if (task.perk === "urban_warfare") {
            showPowerIfUnlocked();
          }
          if (task.perk === "inspired_glow") {
            showSerenityIfUnlocked();
          }
          applyPerks();
          updateSkillMultipliers();
          renderPerks();
          updatePerksCount();
          updateSkillDisplay();
          if (gameState.soundEnabled) perkUnlockSound.play();
        }
        // If the task is a Prestige task and it’s now fully completed, show the prestige modal.
        if (task.type === "Prestige" && task.count >= task.maxReps) {
          if (task.name === "Embrace Stillness") {
            gameState.secondSectionUnlocked = true;
            showMessage("Second prestige section unlocked!");
          }
          if(!gameState.prestigeAvailable){
            showSerenityUnlockedModal();
            gameState.prestigeAvailable = true;
          }
        }
        updateTasksHoverInfo();
      }
    });

    // Update zone image if a boss is active
    const zoneImage = document.getElementById("zoneImage");
    let newSrc;
    const activeBossTask = currentTasks.find(t => !t.paused && t.task.boss_image);
    if (activeBossTask) {
      newSrc = activeBossTask.task.boss_image;
    } else {
      newSrc = zones[currentZoneIndex].img;
    }
    if (zoneImage.getAttribute("src") !== newSrc) {
      zoneImage.src = newSrc;
    }

    if (gameState.autoRun) {
      const maxSlots = gameState.perks["double_timer"] ? 2 : 1;
      if (currentTasks.filter(t => !t.paused).length < maxSlots) {
        let taskStarted = false;
        const zone = zones[currentZoneIndex];
        
        let candidateTasks = [];
        for (let idx = 0; idx < zone.tasks.length; idx++) {
          const task = zone.tasks[idx];
          const key = `${currentZoneIndex}-${idx}`;
          if (gameState.automationOverrides[key] === undefined) {
            gameState.automationOverrides[key] = true;
          }
          if (gameState.automationOverrides[key] === false) continue;
          
          if (task.type !== "Travel" &&
              task.count < task.maxReps &&
              !currentTasks.some(t => t.zoneIndex === currentZoneIndex && t.taskIndex === idx)) {
            candidateTasks.push({
              idx,
              // resourcePriority is 1 if the task has resources, 0 otherwise.
              resourcePriority: (task.resources && Array.isArray(task.resources) && task.resources.length > 0 && !task.boss_image) ? 1 : 0
            });
          }
        }
        
        if (candidateTasks.length > 0) {
          // If Smarter Automation is unlocked, sort candidates so that tasks with resources come first.
          if (gameState.serenityUnlockables["Smarter Automation"]) {
            candidateTasks.sort((a, b) => b.resourcePriority - a.resourcePriority);
          }
          const chosenIdx = candidateTasks[0].idx;
          const taskDiv = document.querySelector(`.task[data-zone-index="${currentZoneIndex}"][data-task-index="${chosenIdx}"]`);
          if (taskDiv) {
            const btn = taskDiv.querySelector("button");
            const progressFill = taskDiv.querySelector(".current-progress-fill");
            const repContainer = taskDiv.querySelector(".rep-container");
            if (btn && progressFill && repContainer) {
              startTask(currentZoneIndex, chosenIdx, btn, progressFill, repContainer);
              taskStarted = true;
            }
          }
        }
        
        // If no non‑Travel task was started and all non‑Travel and mandatory tasks are complete,
        // then try to start a Travel task.
        if (!taskStarted) {
          const nonTravelTasks = zone.tasks.filter((task, idx) =>
            task.type !== "Travel" &&
            (gameState.automationOverrides[`${currentZoneIndex}-${idx}`] !== false)
          );
          const allNonTravelCompleted = nonTravelTasks.every(task => task.count >= task.maxReps);
          const mandatoryTasks = zone.tasks.filter(task => task.mandatory);
          const allMandatoryCompleted = mandatoryTasks.every(task => task.count >= task.maxReps);
          
          if (allNonTravelCompleted && allMandatoryCompleted) {
            for (let idx = 0; idx < zone.tasks.length; idx++) {
              const task = zone.tasks[idx];
              const key = `${currentZoneIndex}-${idx}`;
              if (task.type === "Travel" &&
                  task.count < task.maxReps &&
                  (gameState.automationOverrides[key] !== false) &&
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
          }
        }
      }
    }
  }
  let gameLoopInterval = setInterval(gameLoop, runTickDuration);

  function setRunTickDuration(newDuration) {
    clearInterval(gameLoopInterval);
    runTickDuration = newDuration;
    gameLoopInterval = setInterval(gameLoop, runTickDuration);
  }

  /****************************************
   * INIT
   ****************************************/
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gameOverScreenEnergy").style.display = "none";
    document.getElementById("gameOverScreenCopium").style.display = "none";
    document.getElementById("gameOverScreenDelusion").style.display = "none";

    loadGameProgress();
    
    //TODO: remove - fixed for missing variables
    gameState.serenityUnlockables = gameState.serenityUnlockables || {};
    gameState.serenityInfinite = gameState.serenityInfinite || {};
    gameState.automationOverrides = gameState.automationOverrides || {};
    gameState.bestCompletedZone = gameState.bestCompletedZone || gameState.highestCompletedZone;
    gameState.resetsForBestZone = gameState.resetsForBestZone || gameState.resetsForHighestZone;
    gameState.numCosmicShards = gameState.numCosmicShards || 0;
    gameState.cosmicShardTaskRunning = gameState.cosmicShardTaskRunning || false;
    gameState.secondSectionUnlocked = gameState.secondSectionUnlocked || false;
    gameState.elixirEnergy = gameState.elixirEnergy || 3;
    gameState.startingLevel = gameState.startingLevel || 1;
    gameState.serenityGainZoneExponent = gameState.serenityGainZoneExponent || 3;

    applySerenityUpgrades();
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
    
    updateSkillMultipliers();
    updateSkillDisplay();
    renderResources();
    updatePerksCount();
    displayZone();
    initializeSerenityUpgrades();

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
  window.addResource = (name, amt) => addResource(name, amt);
  window.saveGameProgress = saveGameProgress;
  window.addXP = (skillName, rawXP, prePendMessage, suppressMessage, overwriteXP) => addXP(skillName, rawXP, prePendMessage, suppressMessage, overwriteXP);
  window.getSkillXpScaling = () => skillXpScaling;

  // Expose some functions for debugging
  window.getGameState = () => gameState;
  window.getXpScale = () => xpScale;
  window.setXpScale = (newScale) => xpScale = newScale;
  window.showSerenityUnlockedModal = () => showSerenityUnlockedModal();
  window.setRunTickDuration = (newTickDuration) => setRunTickDuration(newTickDuration);
  window.getRunTickDuration = () => runTickDuration;
  window.displayZone = () => displayZone();
})();
