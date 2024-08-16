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