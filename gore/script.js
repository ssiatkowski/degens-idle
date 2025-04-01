// Initial state – note the first upgrade costs 0.
let state = {
    aiSlop: 0,
    slopPerClick: 1,
    gorePoints: 0,
    climatePoints: 0,
    rebirthPoints: 0,         // Cosmic Rebirth points (prestige layer 3)
    // enlightenment is the final state—handled via modal, not stored here
    upgradeLevel: 0,
    upgradeCost: 0
  };
  
  // Update the UI display.
  function updateDisplay() {
    document.getElementById("aiSlopDisplay").textContent = Math.floor(state.aiSlop);
    document.getElementById("gorePointsDisplay").textContent = state.gorePoints;
    document.getElementById("climatePointsDisplay").textContent = state.climatePoints;
    document.getElementById("rebirthPointsDisplay").textContent = state.rebirthPoints;
    document.getElementById("upgradeLevelDisplay").textContent = state.upgradeLevel;
    document.getElementById("upgradeCostDisplay").textContent = state.upgradeCost;
    updatePrestigeButtons();
    
    // Optionally, add a visual cue on the upgrade button when affordable.
    const upgradeButton = document.getElementById("upgradeButton");
    if (state.aiSlop >= state.upgradeCost) {
      upgradeButton.classList.add("affordable");
    } else {
      upgradeButton.classList.remove("affordable");
    }
  }
  
  // Update the prestige buttons with cost info and available quantity.
  function updatePrestigeButtons() {
    // Prestige: Al Gore – cost is 1000 AI Slop per 1 Gore Point.
    const prestigeGoreButton = document.getElementById("prestigeGoreButton");
    const gorePurchasable = Math.floor(state.aiSlop / 1000);
    prestigeGoreButton.innerHTML =
      "Prestige: Al Gore<br>(Cost: 1000 AI Slop; You can get " + gorePurchasable + ")";
    if (state.aiSlop >= 1000) {
      prestigeGoreButton.style.backgroundColor = "#0a0"; // Green when affordable
    } else {
      prestigeGoreButton.style.backgroundColor = "#800"; // Default color
    }
    
    // Prestige: Climate Reset – cost is 10 Gore Points per 1 Climate Point.
    const prestigeClimateButton = document.getElementById("prestigeClimateButton");
    const climatePurchasable = Math.floor(state.gorePoints / 10);
    prestigeClimateButton.innerHTML =
      "Prestige: Climate Reset<br>(Cost: 10 Gore Points; You can get " + climatePurchasable + ")";
    if (state.gorePoints >= 10) {
      prestigeClimateButton.style.backgroundColor = "#0a0";
    } else {
      prestigeClimateButton.style.backgroundColor = "#800";
    }
    
    // Prestige: Cosmic Rebirth – cost is 100 Climate Points per 1 Rebirth Point.
    const prestigeRebirthButton = document.getElementById("prestigeRebirthButton");
    const rebirthPurchasable = Math.floor(state.climatePoints / 100);
    prestigeRebirthButton.innerHTML =
      "Prestige: Cosmic Rebirth<br>(Cost: 100 Climate Points; You can get " + rebirthPurchasable + ")";
    if (state.climatePoints >= 100) {
      prestigeRebirthButton.style.backgroundColor = "#0a0";
    } else {
      prestigeRebirthButton.style.backgroundColor = "#800";
    }
    
    // Enlightenment – costs 69420 Cosmic Rebirth points.
    const prestigeEnlightenmentButton = document.getElementById("prestigeEnlightenmentButton");
    if (state.rebirthPoints >= 69420) {
      prestigeEnlightenmentButton.innerHTML = "Enlightenment<br>(Ready: Costs 69420 Cosmic Rebirth)";
      prestigeEnlightenmentButton.style.backgroundColor = "#00aaff";
      prestigeEnlightenmentButton.style.boxShadow = "0 0 10px #00aaff";
    } else {
      prestigeEnlightenmentButton.innerHTML =
        "Enlightenment<br>(Cost: 69420 Cosmic Rebirth; You have " + state.rebirthPoints + ")";
      prestigeEnlightenmentButton.style.backgroundColor = "#555";
      prestigeEnlightenmentButton.style.boxShadow = "none";
    }
    // Ensure Enlightenment text remains white.
    prestigeEnlightenmentButton.style.color = "#fff";
  }
  
  
  // Custom tooltip function (shows a message at the bottom for 5 seconds).
  function showCustomTooltip(message) {
    const tooltip = document.getElementById("customTooltip");
    tooltip.innerHTML = message;
    tooltip.style.opacity = 1;
    if (tooltip.timeoutId) clearTimeout(tooltip.timeoutId);
    tooltip.timeoutId = setTimeout(() => {
      tooltip.style.opacity = 0;
    }, 5000);
  }
  
  // Generate AI Slop every tick (production is boosted by prestige currencies).
  function generateSlop() {
    let goreMultiplier = 1 + state.gorePoints * 0.15;
    let climateMultiplier = 1 + state.climatePoints * 0.5;
    state.aiSlop += state.slopPerClick * goreMultiplier * climateMultiplier;
    state.gorePoints += state.rebirthPoints;
    updateDisplay();
  }
  
  // Buy an upgrade. The first upgrade is free (cost = 0) and increases slop per tick.
  function buyUpgrade() {
    if (state.aiSlop >= state.upgradeCost) {
      state.aiSlop -= state.upgradeCost;
      state.upgradeLevel++;
      state.slopPerClick += 1;
      if (state.upgradeCost === 0) {
        state.upgradeCost = 10;
      } else {
        state.upgradeCost = Math.floor(state.upgradeCost * 1.5);
      }
      updateDisplay();
      showCustomTooltip("Upgrade purchased! Slop per Tick increased.");
    } else {
      showCustomTooltip("Not enough AI Slop to buy an upgrade!");
    }
  }
    
  // Prestige Layer 1: Al Gore Prestige.
  // Requires at least 1000 AI Slop; each 1000 AI Slop gives 1 Gore Point.
  function prestigeAlGore() {
    if (state.aiSlop >= 1000) {
      let newGore = Math.floor(state.aiSlop / 1000);
      state.gorePoints += newGore;
      // Reset progress.
      state.aiSlop = 0;
      state.slopPerClick = 1;
      state.upgradeLevel = 0;
      state.upgradeCost = 0;
      updateDisplay();
      showCustomTooltip("Prestiged to Al Gore! Gained " + newGore + " Gore Point" + (newGore > 1 ? "s" : "") + ".");
    } else {
      showCustomTooltip("You need at least 1000 AI Slop to prestige to Al Gore.");
    }
  }
    
  // Prestige Layer 2: Climate Reset.
  // Requires at least 10 Gore Points; each 10 Gore Points gives 1 Climate Point.
  function prestigeClimate() {
    if (state.gorePoints >= 10) {
      let newClimate = Math.floor(state.gorePoints / 10);
      state.climatePoints += newClimate;
      // Reset progress.
      state.aiSlop = 0;
      state.gorePoints -= newClimate * 10;
      state.slopPerClick = 1;
      state.upgradeLevel = 0;
      state.upgradeCost = 0;
      updateDisplay();
      showCustomTooltip("Climate Reset! Gained " + newClimate + " Climate Point" + (newClimate > 1 ? "s" : "") + ".");
    } else {
      showCustomTooltip("You need at least 10 Gore Points to trigger a Climate Reset.");
    }
  }
    
  // Prestige Layer 3: Cosmic Rebirth.
  // Requires at least 100 Climate Points; each 100 Climate Points gives 1 Cosmic Rebirth point.
  function prestigeCosmicRebirth() {
    if (state.climatePoints >= 100) {
      let newRebirth = Math.floor(state.climatePoints / 100);
      state.rebirthPoints += newRebirth;
      // Reset progress.
      state.aiSlop = 0;
      state.gorePoints = 0;
      state.climatePoints = 0;
      state.slopPerClick = 1;
      state.upgradeLevel = 0;
      state.upgradeCost = 0;
      updateDisplay();
      showCustomTooltip("Cosmic Rebirth achieved! Gained " + newRebirth + " Rebirth Point" + (newRebirth > 1 ? "s" : "") + ".");
    } else {
      showCustomTooltip("You need at least 100 Climate Points to prestige to Cosmic Rebirth.");
    }
  }
    
  // Final Prestige: Enlightenment.
  // Costs 1000 Cosmic Rebirth points. When affordable and clicked, it ends the game by showing a final modal.
  function prestigeEnlightenment() {
    if (state.rebirthPoints >= 69420) {
      // End the game.
      showFinalEnlightenmentModal();
    } else {
      showCustomTooltip("You need at least 69420 Cosmic Rebirth points to achieve Enlightenment.");
    }
  }
    
  // Show final enlightenment modal.
  function showFinalEnlightenmentModal() {
    const modal = document.getElementById("finalModal");
    modal.style.display = "block";
  }
    
  // Close final modal on button click.
  document.getElementById("finalModalClose").addEventListener("click", () => {
    document.getElementById("finalModal").style.display = "none";
  });
    
  // Run the game loop every 25ms.
  setInterval(generateSlop, 25);
    
  // Attach event listeners.
  document.getElementById("upgradeButton").addEventListener("click", buyUpgrade);
  document.getElementById("prestigeGoreButton").addEventListener("click", prestigeAlGore);
  document.getElementById("prestigeClimateButton").addEventListener("click", prestigeClimate);
  document.getElementById("prestigeRebirthButton").addEventListener("click", prestigeCosmicRebirth);
  document.getElementById("prestigeEnlightenmentButton").addEventListener("click", prestigeEnlightenment);
    
  // Initial display update.
  updateDisplay();
  