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
}

// Function to close the donation overlay
function closeDonation() {
    document.getElementById('donationOverlay').style.display = 'none';
}

// Function to handle clicks outside the overlay
function outsideClickListener(event) {
    const settingsContent = document.querySelector('.settings-overlay-content');
    
    if (!settingsContent.contains(event.target)) {
        closeSettings();
    }
}
// Function to export game state to a file
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
        prestiges,
        epsMultiplier,
        prestigeRequirement,
        godModeLevel,
        godModeMultiplier,
        firstTimePrestigeButtonAvailable,
        upgrades: upgrades.map(upgrade => ({
            name: upgrade.name,
            isGodMode: upgrade.isGodMode
        })),
        purchasedUpgrades: purchasedUpgrades.map(upgrade => upgrade.name),
        cookieButtonVisible: document.getElementById('cookieButton').style.display === 'block',
        cookieClickMultiplier,
        knowledgeUnlocked: knowledgeUnlocked,
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

// Function to import game state from a file
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
        prestiges = gameState.prestiges;
        epsMultiplier = gameState.epsMultiplier;
        prestigeRequirement = gameState.prestigeRequirement;
        godModeLevel = gameState.godModeLevel;
        godModeMultiplier = gameState.godModeMultiplier;
        firstTimePrestigeButtonAvailable = gameState.firstTimePrestigeButtonAvailable;
        
        upgrades.forEach(upgrade => {
            const savedUpgrade = gameState.upgrades.find(up => up.name === upgrade.name);
            if (savedUpgrade) {
                upgrade.isGodMode = savedUpgrade.isGodMode;
            }
        });

        purchasedUpgrades = gameState.purchasedUpgrades.map(name => upgrades.find(up => up.name === name)).filter(Boolean);
        availableUpgrades = upgrades.filter(upgrade => !purchasedUpgrades.includes(upgrade));

        if (gameState.cookieButtonVisible) {
            document.getElementById('cookieButton').style.display = 'block';
            cookieClickMultiplier = gameState.cookieClickMultiplier;
        } else {
            document.getElementById('cookieButton').style.display = 'none';
        }

        if (gameState.knowledgeUnlocked) {
            unhideKnowledge();
        }

        librarySkills.forEach(skill => {
            const savedSkill = gameState.librarySkills.find(s => s.name === skill.name);
            if (savedSkill) {
                skill.unlocked = savedSkill.unlocked;
                if (skill.unlocked) {
                    unlockLibrarySkill(skill, true);
                }
            }
        });

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

// Add event listener for Discord button
document.getElementById('discordButton').addEventListener('click', function() {
    window.open('https://discord.gg/7pejTdhY99', '_blank');
});

// Add event listeners for donation buttons
document.getElementById('donateSmallButton').addEventListener('click', function() {
    window.open('https://venmo.com/YourVenmoID?txn=pay&amount=5', '_blank'); // Replace with your Venmo link
});
document.getElementById('donateMediumButton').addEventListener('click', function() {
    window.open('https://venmo.com/YourVenmoID?txn=pay&amount=10', '_blank'); // Replace with your Venmo link
});
document.getElementById('donateLargeButton').addEventListener('click', function() {
    window.open('https://venmo.com/YourVenmoID?txn=pay&amount=20', '_blank'); // Replace with your Venmo link
});
