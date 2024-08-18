// Function to open the settings overlay
function openSettings() {
    const settingsOverlay = document.getElementById('settingsOverlay');
    settingsOverlay.style.display = 'flex';
    
    // Add a temporary event listener to close the overlay when clicking outside of it
    setTimeout(() => {
        document.addEventListener('click', outsideClickListener);
    }, 0);
}

// Function to close the settings overlay
function closeSettings() {
    const settingsOverlay = document.getElementById('settingsOverlay');
    settingsOverlay.style.display = 'none';
    document.removeEventListener('click', outsideClickListener);
}

// Function to open the donation overlay
function openDonation() {
    document.getElementById('donationOverlay').style.display = 'flex';

    // Add a temporary event listener to close the overlay when clicking outside of it
    setTimeout(() => {
        document.addEventListener('click', outsideDonationClickListener);
    }, 0);
}

// Function to close the donation overlay
function closeDonation() {
    document.getElementById('donationOverlay').style.display = 'none';
    document.removeEventListener('click', outsideDonationClickListener);
}

// Function to handle clicks outside the overlay
function outsideClickListener(event) {
    const settingsContent = document.querySelector('.settings-overlay-content');
    
    if (!settingsContent.contains(event.target)) {
        closeSettings();
    }
}

// Function to handle clicks outside the overlay
function outsideDonationClickListener(event) {
    const donationContent = document.querySelector('.donation-overlay-content');
    
    if (!donationContent.contains(event.target)) {
        closeDonation();
    }
}

function exportSave() {
    const gameState = JSON.stringify({
        copium,
        copiumPerSecond,
        delusion,
        delusionPerSecond,
        yachtMoney,
        yachtMoneyPerSecond,
        trollPoints,
        trollPointsPerSecond,
        hopium,
        hopiumPerSecond,
        knowledge,
        knowledgePerSecond,
        power,
        powerPerSecond,
        serenity,
        serenityPerSecond,
        effectiveCopiumPerSecond,
        effectiveDelusionPerSecond,
        effectiveYachtMoneyPerSecond,
        effectiveTrollPointsPerSecond,
        effectiveHopiumPerSecond,
        effectiveKnowledgePerSecond,
        effectivePowerPerSecond,
        effectiveSerenityPerSecond,
        prestiges,
        epsMultiplier,
        prestigeRequirement,
        godModeLevel,
        godModeMultiplier,
        puGodLevel,
        puGodMultiplier,
        bigCrunchPower,
        bigCrunchMultiplier,
        totalMultiplier,
        firstTimePrestigeButtonAvailable,
        cookieClickMultiplier,
        cookieAutoClicker,
        knowledgeUnlocked,
        knowledgeGenerationSkill,
        prestigeBaseSkill,
        twoDimensionalAscensionSkill,
        multibuyUpgradesSkill,
        mathGameSkill,
        powerUnlocked,
        buyMarkersSkill,
        bigCrunchUnlocked,
        numAscensionUpgrades,
        improvedTradeRatio,
        cookieBoost,
        cooldowns,
        transcendenceUnlocked,              // Added
        numPUAscensionUpgrades,             // Added
        lessDiminishingGodModeSkill,        // Added
        lessDiminishingPUGodModeSkill,      // Added
        upgrades: upgrades.map(upgrade => ({
            name: upgrade.name,
            isGodMode: upgrade.isGodMode,
            isPUGodMode: upgrade.isPUGodMode // Added to store isPUGodMode
        })),
        purchasedUpgrades: purchasedUpgrades.map(upgrade => upgrade.name),
        cookieButtonVisible: document.getElementById('cookieButton').style.display === 'block',
        librarySkills: librarySkills.map(skill => ({
            name: skill.name,
            unlocked: skill.unlocked
        })),
        lastInteraction: Date.now()
    });

    const blob = new Blob([gameState], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'degens_idle_save.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}


function importSave(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const gameState = JSON.parse(e.target.result);

        copium = gameState.copium;
        copiumPerSecond = gameState.copiumPerSecond;
        delusion = gameState.delusion;
        delusionPerSecond = gameState.delusionPerSecond;
        yachtMoney = gameState.yachtMoney;
        yachtMoneyPerSecond = gameState.yachtMoneyPerSecond;
        trollPoints = gameState.trollPoints;
        trollPointsPerSecond = gameState.trollPointsPerSecond;
        hopium = gameState.hopium;
        hopiumPerSecond = gameState.hopiumPerSecond;
        knowledge = gameState.knowledge;
        knowledgePerSecond = gameState.knowledgePerSecond;
        power = gameState.power;
        powerPerSecond = gameState.powerPerSecond;
        serenity = gameState.serenity;
        serenityPerSecond = gameState.serenityPerSecond;
        effectiveCopiumPerSecond = gameState.effectiveCopiumPerSecond;
        effectiveDelusionPerSecond = gameState.effectiveDelusionPerSecond;
        effectiveYachtMoneyPerSecond = gameState.effectiveYachtMoneyPerSecond;
        effectiveTrollPointsPerSecond = gameState.effectiveTrollPointsPerSecond;
        effectiveHopiumPerSecond = gameState.effectiveHopiumPerSecond;
        effectiveKnowledgePerSecond = gameState.effectiveKnowledgePerSecond;
        effectivePowerPerSecond = gameState.effectivePowerPerSecond;
        effectiveSerenityPerSecond = gameState.effectiveSerenityPerSecond;
        prestiges = gameState.prestiges;
        epsMultiplier = gameState.epsMultiplier;
        prestigeRequirement = gameState.prestigeRequirement;
        godModeLevel = gameState.godModeLevel;
        godModeMultiplier = gameState.godModeMultiplier;
        puGodLevel = gameState.puGodLevel;
        puGodMultiplier = gameState.puGodMultiplier;
        bigCrunchPower = gameState.bigCrunchPower;
        bigCrunchMultiplier = gameState.bigCrunchMultiplier;
        totalMultiplier = gameState.totalMultiplier;
        firstTimePrestigeButtonAvailable = gameState.firstTimePrestigeButtonAvailable;
        cookieClickMultiplier = gameState.cookieClickMultiplier;
        cookieAutoClicker = gameState.cookieAutoClicker;
        knowledgeUnlocked = gameState.knowledgeUnlocked;
        knowledgeGenerationSkill = gameState.knowledgeGenerationSkill;
        prestigeBaseSkill = gameState.prestigeBaseSkill;
        twoDimensionalAscensionSkill = gameState.twoDimensionalAscensionSkill;
        multibuyUpgradesSkill = gameState.multibuyUpgradesSkill;
        mathGameSkill = gameState.mathGameSkill;
        powerUnlocked = gameState.powerUnlocked;
        buyMarkersSkill = gameState.buyMarkersSkill;
        bigCrunchUnlocked = gameState.bigCrunchUnlocked;
        numAscensionUpgrades = gameState.numAscensionUpgrades;
        improvedTradeRatio = gameState.improvedTradeRatio;
        cookieBoost = gameState.cookieBoost;
        cooldowns = gameState.cooldowns;
        transcendenceUnlocked = gameState.transcendenceUnlocked; // Added
        numPUAscensionUpgrades = gameState.numPUAscensionUpgrades; // Added
        lessDiminishingGodModeSkill = gameState.lessDiminishingGodModeSkill; // Added
        lessDiminishingPUGodModeSkill = gameState.lessDiminishingPUGodModeSkill; // Added

        upgrades.forEach(upgrade => {
            const savedUpgrade = gameState.upgrades.find(up => up.name === upgrade.name);
            if (savedUpgrade) {
                upgrade.isGodMode = savedUpgrade.isGodMode;
                upgrade.isPUGodMode = savedUpgrade.isPUGodMode; // Restore isPUGodMode state
            }
        });

        purchasedUpgrades = gameState.purchasedUpgrades.map(name => upgrades.find(up => up.name === name)).filter(Boolean);
        availableUpgrades = upgrades.filter(upgrade => !purchasedUpgrades.includes(upgrade));

        // Clear the purchased upgrades list before adding new ones
        document.getElementById('purchasedList').innerHTML = '';

        // Handle UI elements for upgrades
        purchasedUpgrades.forEach(upgrade => {
            if (upgrade) {
                addPurchasedUpgrade(upgrade.img, upgrade.name, upgrade.earnings, upgrade.isGodMode, upgrade.isPUGodMode, upgrade.message);
                if (upgrade.name === "Cookie Clicker") {
                    document.getElementById('cookieButton').style.display = 'block';
                }
            }
        });

        // Handle the Cookie Clicker button visibility
        const cookieButtonVisible = gameState.cookieButtonVisible;
        if (cookieButtonVisible) {
            document.getElementById('cookieButton').style.display = 'block';
            cookieClickMultiplier = gameState.cookieClickMultiplier;
            const cookieTooltip = document.querySelector('#cookieButton .cookieTooltip');
            if(cookieBoost){
                cookieTooltip.textContent = `Each cookie click generates the amount of Copium, Delusion, Yacht Money, and Troll Points that you earn in half a second.`;
            } else {
                cookieTooltip.textContent = `Each cookie click counts as ${cookieClickMultiplier} clicks on collect buttons for Copium, Delusion, Yacht Money, and Troll Points!`;
            }
        }

        // Check if Knowledge is unlocked and update UI
        if (gameState.knowledgeUnlocked) {
            unhideKnowledge();
        }

        // Handle library skills
        librarySkills.forEach(skill => {
            const savedSkill = gameState.librarySkills.find(s => s.name === skill.name);
            if (savedSkill) {
                skill.unlocked = savedSkill.unlocked;
                if (skill.unlocked) {
                    unlockLibrarySkill(skill, true);
                }
            }
        });

        // Check the state of delusion and update the switch position accordingly
        const toggleDelusion = document.getElementById('toggleDelusion');
        if (delusionPerSecond >= 0) {
            toggleDelusion.checked = true;
        } else {
            toggleDelusion.checked = false;
        }

        // Handle the Transcendence UI
        if (transcendenceUnlocked) {
            document.getElementById('pu-god-display').style.display = 'block';
        }

        // Update various UI elements based on loaded state
        updateTradeRatio();
        if(buyMarkersSkill){ 
            enableAllBuyMarkers(); 
        }

        updateMultipliersDisplay();
        updateEffectiveMultipliers();

        // Retrieve the last interaction time, defaulting to the current time if not found
        const lastInteraction = gameState.lastInteraction || Date.now();
        const now = Date.now();
        const elapsedSeconds = (now - lastInteraction) / 1000;

        // Generate idle resources based on the elapsed time
        generateIdleResources(elapsedSeconds);

        // Update the display and the upgrade list, and unlock any available mini-games
        updateDisplay();
        updateUpgradeList();
        unlockMiniGames();
    };

    reader.readAsText(file);
}





// Add event listeners for opening and closing the settings overlay
document.getElementById('settingsButton').addEventListener('click', openSettings);
document.getElementById('closeSettingsOverlay').addEventListener('click', closeSettings);
document.getElementById('closeSettingsButton').addEventListener('click', closeSettings);

// Add event listener for Donate button in settings overlay
document.getElementById('donateButton').addEventListener('click', openDonation);

// Add event listeners for closing the donation overlay
document.getElementById('closeDonationOverlay').addEventListener('click', closeDonation);
document.getElementById('closeDonationButton').addEventListener('click', closeDonation);

// Add event listener for Export Save button
document.getElementById('exportSaveButton').addEventListener('click', exportSave);

// Add event listener for Import Save button
document.getElementById('importSaveButton').addEventListener('click', function() {
    document.getElementById('importFileInput').click();
});

// Add event listener for file input change
document.getElementById('importFileInput').addEventListener('change', importSave);

// Add event listener for Import Save button
document.getElementById('howToPlayButton').addEventListener('click', function() {
    closeSettings();
    showWelcomeModal(true);
});


// Add event listener for Discord button
document.getElementById('discordButton').addEventListener('click', function() {
    window.open('https://discord.gg/7pejTdhY99', '_blank');
});

// Add event listeners for donation buttons
document.getElementById('donateSmallButton').addEventListener('click', function() {
    window.open('https://buymeacoffee.com/ssiatkowski', '_blank'); 
});
document.getElementById('donateMediumButton').addEventListener('click', function() {
    window.open('https://account.venmo.com/payment-link?audience=public&amount=7&note=Keep%20improving%20Degens%20Idle&recipients=%2CSebastian-Siatkowski&txn=pay', '_blank'); // Replace with your Venmo link
});
document.getElementById('donateLargeButton').addEventListener('click', function() {
    window.open('pigeon.html', '_blank'); 
});
// Add event listener for Feedback button
document.getElementById('feedbackButton').addEventListener('click', function() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfaQdxaBFCdT789rVTSvFuScEEzlu4rDabjFUX0zkCKinyvKA/viewform?usp=sf_link', '_blank');
});

function toggleAllBuyMarkers(targetState) {

    purchasedUpgrades.forEach(upgrade => {
        if (!upgrade.isFight) {
            const name = upgrade.name;
            // Load the switch state from local storage
            const toggleSwitch = document.getElementById(`toggle-${name}`);
            if (toggleSwitch) {
                toggleSwitch.checked = targetState;
                toggleSwitch.parentElement.style.display = 'block'; // Make the switch visible
            }
        }
    });

}


// Open the automation overlay
document.getElementById('automationButton').addEventListener('click', function() {
    const automationContent = document.getElementById('automationContent');
    const saveButton = document.getElementById('saveAutomationSettingsButton');

    // Clear any existing content in the automationContent section
    automationContent.innerHTML = '';

    // Check if all features are locked (none are unlocked)
    const allFeaturesLocked = !autobuyUpgradesSkill && autoPrestigeThreshold === null && !buyMarkersSkill;

    // If all features are locked, show the "unlock automation" message
    if (allFeaturesLocked) {
        automationContent.innerHTML = "<p>You must unlock automation features first.</p>";
        saveButton.style.display = 'none'; // Hide the save button
    } else {
        saveButton.style.display = 'inline-block';

        // Dynamically add the three-way toggle for Buy Markers if unlocked
        if (buyMarkersSkill) {
            const toggleHtml = `
                <div class="three-way-toggle-container" style="margin-bottom: 15px;">
                    <label for="toggleBuyMarkersSwitch" class="three-way-toggle-label">Toggle All Purchased Upgrades Buy Markers</label>
                    <div class="three-way-toggle">
                        <input type="radio" name="toggleBuyMarkers" id="toggleBuyMarkersNeutral" value="neutral" checked style="display: none;">
                        <input type="radio" name="toggleBuyMarkers" id="toggleBuyMarkersOff" value="off" style="display: none;">
                        <input type="radio" name="toggleBuyMarkers" id="toggleBuyMarkersOn" value="on" style="display: none;">
                        <div class="slider"></div>
                    </div>
                </div>
            `;
            automationContent.innerHTML += toggleHtml;

            // Delay the event listener attachment to ensure the elements are fully rendered
            setTimeout(() => {
                const toggleContainer = document.querySelector('.three-way-toggle-container .three-way-toggle');
                const slider = toggleContainer.querySelector('.slider');
                const toggleNeutral = document.getElementById('toggleBuyMarkersNeutral');
                const toggleOff = document.getElementById('toggleBuyMarkersOff');
                const toggleOn = document.getElementById('toggleBuyMarkersOn');

                // Add click listener to the entire toggle container
                toggleContainer.addEventListener('click', function() {
                    if (toggleNeutral.checked) {
                        toggleOff.checked = true;
                        slider.style.transform = 'translateX(0%)';
                        slider.style.backgroundColor = '#dc3545'; // Red color for off
                    } else if (toggleOff.checked) {
                        toggleOn.checked = true;
                        slider.style.transform = 'translateX(100%)';
                        slider.style.backgroundColor = '#28a745'; // Green color for on
                    } else if (toggleOn.checked) {
                        toggleNeutral.checked = true;
                        slider.style.transform = 'translateX(50%)';
                        slider.style.backgroundColor = 'white'; // Neutral color
                    }
                });

                // Debug: Log to confirm event listener is attached
                console.log("Three-way toggle event listener attached");
            }, 0); // You can adjust the timeout duration if needed
        }

        // Dynamically add Auto-Buy Upgrades setting if unlocked, with space and switch
        if (autobuyUpgradesSkill) {
            const autoBuyHtml = `
                <div style="margin-bottom: 15px;">
                    <label for="autoBuyUpgradesSwitch" style="margin-right: 10px;">Enable Auto-Buy Upgrades</label>
                    <label class="switch">
                        <input type="checkbox" id="autoBuyUpgradesSwitch">
                        <span class="slider"></span>
                    </label>
                </div>
            `;
            automationContent.innerHTML += autoBuyHtml;

            // Use a timeout to ensure the checkbox is fully rendered before setting its state
            setTimeout(() => {
                const autoBuyUpgradesSwitch = document.getElementById('autoBuyUpgradesSwitch');
                autoBuyUpgradesSwitch.checked = (autobuyIntervalId !== null);

                // Debug: Log the current checked state
                console.log("Checkbox checked state after timeout:", autoBuyUpgradesSwitch.checked);
            }, 0); // You can adjust the timeout duration if needed
        }

        // Dynamically add Auto-Prestige Threshold setting if available
        if (autoPrestigeThreshold !== null) {
            const autoPrestigeHtml = `
                <div style="margin-bottom: 15px;">
                    <label for="autoPrestigeThresholdInput">Auto Prestige Threshold:</label>
                    <input type="number" id="autoPrestigeThresholdInput" value="${autoPrestigeThreshold}" step="0.1">
                </div>
            `;
            automationContent.innerHTML += autoPrestigeHtml;
        }

        // Check if any feature is missing and at least one is unlocked
        const someFeaturesMissing = !autobuyUpgradesSkill || autoPrestigeThreshold === null || !buyMarkersSkill;
        const atLeastOneFeatureUnlocked = autobuyUpgradesSkill || autoPrestigeThreshold !== null || buyMarkersSkill;

        if (someFeaturesMissing && atLeastOneFeatureUnlocked) {
            automationContent.innerHTML += `
                <p style="margin-top: 20px; color: #ccc;">
                    You are still missing some automation features. Once unlocked, their settings will appear here.
                </p>`;
        }
    }

    document.getElementById('automationOverlay').style.display = 'flex';
});

// Save the automation settings and close the overlay
document.getElementById('saveAutomationSettingsButton').addEventListener('click', function() {
    // Auto Prestige Threshold
    if (autoPrestigeThreshold !== null) {
        const thresholdInput = document.getElementById('autoPrestigeThresholdInput').value;
        autoPrestigeThreshold = parseFloat(thresholdInput);

        if (isNaN(autoPrestigeThreshold) || autoPrestigeThreshold <= 0) {
            showImmediateMessageModal('Invalid Number', 'Please enter a valid positive number for the Auto Prestige Threshold.');
            return; // Prevent closing if there's an error
        }
    }

    // Handle auto-buy upgrades only if the skill is unlocked
    if (autobuyUpgradesSkill) {
        const autoBuyUpgradesSwitch = document.getElementById('autoBuyUpgradesSwitch');
        console.log("Auto-buy switch state at save:", autoBuyUpgradesSwitch.checked); // Debug log

        if (autoBuyUpgradesSwitch.checked) {
            // Enable auto-buy if it’s not already running
            if (autobuyIntervalId === null) {
                autobuyIntervalId = setInterval(autobuyUpgrades, 1500);
                console.log("Auto-buy started"); // Debug log
            }
        } else {
            // Disable auto-buy if the switch is unchecked
            if (autobuyIntervalId !== null) {
                clearInterval(autobuyIntervalId);
                autobuyIntervalId = null;
                console.log("Auto-buy stopped"); // Debug log
            }
        }
    }

    // Handle the three-way toggle for buy markers only if the skill is unlocked
    if (buyMarkersSkill) {
        const toggleBuyMarkersOff = document.getElementById('toggleBuyMarkersOff').checked;
        const toggleBuyMarkersOn = document.getElementById('toggleBuyMarkersOn').checked;

        // Call the appropriate function based on the toggle position
        if (toggleBuyMarkersOff) {
            toggleAllBuyMarkers(false);
        } else if (toggleBuyMarkersOn) {
            toggleAllBuyMarkers(true);
        } // Neutral does nothing, so no action needed
    }

    // Close the overlay
    document.getElementById('automationOverlay').style.display = 'none';
    showImmediateMessageModal('Automation Settings Saved', 'Your automation settings have been saved successfully.');
});



// Close the automation overlay (without closing the settings overlay)
document.getElementById('closeAutomationOverlay').addEventListener('click', function() {
    document.getElementById('automationOverlay').style.display = 'none';
});

// Handle the exit button to close the automation overlay
document.getElementById('exitAutomationOverlayButton').addEventListener('click', function() {
    document.getElementById('automationOverlay').style.display = 'none';
});


document.getElementById('numberFormatButton').addEventListener('click', function() {
    if (currentNumberFormat === "Mixed") {
        currentNumberFormat = "Scientific";
    } else if (currentNumberFormat === "Scientific") {
        currentNumberFormat = "Suffixes";
    } else {
        currentNumberFormat = "Mixed";
    }
    this.textContent = `Number Format: ${currentNumberFormat}`;
});