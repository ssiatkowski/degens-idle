

let copium = 0;
let copiumPerSecond = 0;
let delusion = 0;
let delusionPerSecond = 0;
let yachtMoney = 0;
let yachtMoneyPerSecond = 0;
let trollPoints = 0;
let trollPointsPerSecond = 0;
let hopium = 0;
let hopiumPerSecond = 0;
let knowledge = 0;
let knowledgePerSecond = 0;
let power = 0;
let powerPerSecond = 0;
let serenity = 0;
let serenityPerSecond = 0;

let numberFormatType = 0;

let effectiveCopiumPerSecond = 0;
let effectiveDelusionPerSecond = 0;
let effectiveYachtMoneyPerSecond = 0;
let effectiveTrollPointsPerSecond = 0;
let effectiveHopiumPerSecond = 0;
let effectiveKnowledgePerSecond = 0;
let effectivePowerPerSecond = 0;
let effectiveSerenityPerSecond = 0;

let prestiges = 0;
let epsMultiplier = 1;
let prestigeRequirement = 1000;
let purchasedUpgrades = [];
let availableUpgrades = [];

let godModeLevel = 0;
let godModeMultiplier = 1;
let puGodLevel = 0;
let puGodMultiplier = 1;
let bigCrunchPower = 1e-7;
let bigCrunchMultiplier = 1;

let totalMultiplier = 1;

let powerSurgeMultiplier = 1;

let currentNumberFormat = 'Mixed';

let firstTimePrestigeButtonAvailable = true; // Default to true, will be updated based on saved state

let modalQueue = [];
let isModalOpen = false;

let cookieClickMultiplier = 10;
let cookieAutoClicker = false;
let knowledgeUnlocked = false;
let knowledgeGenerationSkill = false;
let prestigeBaseSkill = false;
let twoDimensionalAscensionSkill = false;
let multibuyUpgradesSkill = false;
let mathGameSkill = false;
let memoryGameSkill = false;
let speedGameSkill = false;
let luckGameSkill = false;
let miniGamerSkill = false;
let powerUnlocked = false;
let buyMarkersSkill = false;
let bigCrunchUnlocked = false;
let moneyIsPowerTooSkill = false;
let lessDiminishingGodModeSkill = false;
let lessDiminishingPUGodModeSkill = false;

let transcendenceUnlocked = false;

let autoPrestigeThreshold = null;
let autoAscendThreshold = null;
let autoTranscendThreshold = null;

let numAscensionUpgrades = 1;
let numPUAscensionUpgrades = 2;

let improvedTradeRatio = false;
let cookieBoost = false;
let cookieHopeful = false;
let cookieKnowledgeable = false;

// don't need to save - this gets called and set at load, then prevents to be reset on skill click
let autobuyIntervalId = null; // Store the interval ID here
let autobuyUpgradesSkill = false;

let upgradeAmplifierSkill = false;
let fasterAutobuyerskill = false;


function calculateBaseKnowledge() {
    return knowledgePerSecond * totalMultiplier * (bigCrunchMultiplier ** (1/2));
}

function calculateEffectiveKnowledge() {
    // Calculate the base knowledge generation
    const baseKnowledge = calculateBaseKnowledge();

    // If baseKnowledge is zero, return 0 to prevent division errors
    if (baseKnowledge === 0) {
        return 0;
    }

    const knowledgeGeneratedIn2Hours = baseKnowledge * 2 * 3600;  // Knowledge generated in 2 hours (2 * 3600 seconds)

    // Check how much knowledge the player currently has
    const extraKnowledge = Math.max(knowledge - knowledgeGeneratedIn2Hours, 0);

    // Calculate the diminishing multiplier, scaling as soon as it goes over 2 hours
    const diminishingMultiplier = Math.max(0.05, 0.95 ** (extraKnowledge / knowledgeGeneratedIn2Hours)); 

    // Return the effective knowledge considering the diminishing multiplier
    return baseKnowledge * diminishingMultiplier;
}

function calculateBasePower() {
    return (moneyIsPowerTooSkill ?
        (Math.max(knowledge, 0) ** (1/3) / 1e12) * (1 + (Math.max(yachtMoney, 0) ** (1/30) / 100)) 
        : Math.max(knowledge, 0) ** (1/3) / 1e12) 
        * powerSurgeMultiplier * devMultiplier;
}

function calculateEffectivePower() {
    // Calculate the base power generation
    const basePower = calculateBasePower()

    // If basePower is zero, return 0 to prevent division errors
    if (basePower === 0) {
        return 0;
    }

    const powerGeneratedIn2Hours = basePower * 2 * 3600;  // Power generated in 2 hours (2 * 3600 seconds)
    
    // Check how much power the player currently has
    const extraPower = Math.max(power - powerGeneratedIn2Hours, 0);

    // Calculate the diminishing multiplier, scaling as soon as it goes over 2 hours
    const diminishingMultiplier = Math.max(0.05, 0.95 ** (extraPower / powerGeneratedIn2Hours)); 

    // Return the effective power considering the diminishing multiplier
    return basePower * diminishingMultiplier;
}


function updateEffectiveMultipliers() {
    const amplifierMultiplier = upgradeAmplifierSkill ? purchasedUpgrades.length : 1;

    effectiveCopiumPerSecond = copiumPerSecond * totalMultiplier * amplifierMultiplier;
    effectiveDelusionPerSecond = delusionPerSecond * totalMultiplier * amplifierMultiplier;
    effectiveYachtMoneyPerSecond = yachtMoneyPerSecond * totalMultiplier * amplifierMultiplier;
    effectiveTrollPointsPerSecond = trollPointsPerSecond * totalMultiplier * amplifierMultiplier;

    effectiveHopiumPerSecond = hopiumPerSecond * totalMultiplier;
    effectiveKnowledgePerSecond = calculateEffectiveKnowledge();

    if (powerUnlocked){
        effectivePowerPerSecond = calculateEffectivePower();
    }

    effectiveSerenityPerSecond = serenityPerSecond * totalMultiplier;
}


// Function to handle cookie click
function cookieCollectAllResources() {
    if (cookieBoost){
        copium += Math.max(cookieClickMultiplier * totalMultiplier, effectiveCopiumPerSecond/2);
        delusion += Math.max(cookieClickMultiplier * totalMultiplier, effectiveDelusionPerSecond/2);
        yachtMoney += Math.max(cookieClickMultiplier * totalMultiplier, effectiveYachtMoneyPerSecond/2);
        trollPoints += Math.max(cookieClickMultiplier * totalMultiplier, effectiveTrollPointsPerSecond/2);
        if (cookieHopeful){
            hopium += Math.max(cookieClickMultiplier * totalMultiplier, effectiveHopiumPerSecond/2);
        }
        if (cookieKnowledgeable){
            knowledge += Math.max(cookieClickMultiplier * totalMultiplier, effectiveKnowledgePerSecond/2);
        }
    }
    else {
        copium += cookieClickMultiplier * totalMultiplier;
        delusion += cookieClickMultiplier * totalMultiplier;
        yachtMoney += cookieClickMultiplier * totalMultiplier;
        trollPoints += cookieClickMultiplier * totalMultiplier;
    }
    updateDisplay();
}

// Function to collect a specific resource and update the game state
function collectResource(resource) {
    // Increase the appropriate resource by the epsMultiplier
    if (resource === 'copium') copium += totalMultiplier;
    if (resource === 'delusion') delusion += totalMultiplier;
    if (resource === 'yachtMoney') yachtMoney += totalMultiplier;
    if (resource === 'trollPoints') trollPoints += totalMultiplier;
    
    // Update the display to reflect the new resource values
    updateDisplay();
}



// Function to load the game state from local storage
function loadGameState() {

    // Retrieve and parse the resource values from local storage, defaulting to 0 if not found
    copium = parseFloat(localStorage.getItem('copium')) || 0;
    copiumPerSecond = parseFloat(localStorage.getItem('copiumPerSecond')) || 0;
    delusion = parseFloat(localStorage.getItem('delusion')) || 0;
    delusionPerSecond = parseFloat(localStorage.getItem('delusionPerSecond')) || 0;
    yachtMoney = parseFloat(localStorage.getItem('yachtMoney')) || 0;
    yachtMoneyPerSecond = parseFloat(localStorage.getItem('yachtMoneyPerSecond')) || 0;
    trollPoints = parseFloat(localStorage.getItem('trollPoints')) || 0;
    trollPointsPerSecond = parseFloat(localStorage.getItem('trollPointsPerSecond')) || 0;
    hopium = parseFloat(localStorage.getItem('hopium')) || 0;
    hopiumPerSecond = parseFloat(localStorage.getItem('hopiumPerSecond')) || 0;
    knowledge = parseFloat(localStorage.getItem('knowledge')) || 0;
    knowledgePerSecond = parseFloat(localStorage.getItem('knowledgePerSecond')) || 0;
    power = parseFloat(localStorage.getItem('power')) || 0;
    powerPerSecond = parseFloat(localStorage.getItem('powerPerSecond')) || 0;
    serenity = parseFloat(localStorage.getItem('serenity')) || 0;
    serenityPerSecond = parseFloat(localStorage.getItem('serenityPerSecond')) || 0;

    // Retrieve and parse the prestige values from local storage, defaulting to 0 or 1 if not found
    prestiges = parseInt(localStorage.getItem('prestiges')) || 0;
    epsMultiplier = parseFloat(localStorage.getItem('epsMultiplier')) || 1;
    prestigeRequirement = parseFloat(localStorage.getItem('prestigeRequirement')) || 1000;

    // Retrieve and parse the god mode values from local storage, defaulting to 0 or 1 if not found
    godModeLevel = parseInt(localStorage.getItem('godModeLevel')) || 0;
    godModeMultiplier = parseFloat(localStorage.getItem('godModeMultiplier')) || 1;

    // Retrieve and parse the pu god values from local storage, defaulting to 0 or 1 if not found
    puGodLevel = parseInt(localStorage.getItem('puGodLevel')) || 0;
    puGodMultiplier = parseFloat(localStorage.getItem('puGodMultiplier')) || 1;

    // Retrieve and parse the big crunch values from local storage, defaulting to 1e-7 or 1 if not found
    bigCrunchPower = parseFloat(localStorage.getItem('bigCrunchPower')) || 1e-7;
    bigCrunchMultiplier = parseFloat(localStorage.getItem('bigCrunchMultiplier')) || 1;
    
    // Load the first time prestige button available flag
    firstTimePrestigeButtonAvailable = JSON.parse(localStorage.getItem('firstTimePrestigeButtonAvailable')) || true;

    transcendenceUnlocked = JSON.parse(localStorage.getItem('transcendenceUnlocked')) || false;
    if (transcendenceUnlocked) { document.getElementById('pu-god-display').style.display = 'block'; } 

    autoPrestigeThreshold = parseFloat(localStorage.getItem('autoPrestigeThreshold')) || null;

    autoAscendThreshold = parseFloat(localStorage.getItem('autoAscendThreshold')) || null;
    autoTranscendThreshold = parseFloat(localStorage.getItem('autoTranscendThreshold')) || null;

    deadpoolRevives = parseFloat(localStorage.getItem('deadpoolRevives')) || 0;
    
    // Retrieve and parse all upgrades with the isGodMode property from local storage
    const savedUpgrades = JSON.parse(localStorage.getItem('upgrades')) || [];
    
    // Restore the isGodMode property for each upgrade
    upgrades.forEach(upgrade => {
        const savedUpgrade = savedUpgrades.find(up => up.name === upgrade.name);
        if (savedUpgrade) {
            upgrade.isGodMode = savedUpgrade.isGodMode;
            upgrade.isPUGodMode = savedUpgrade.isPUGodMode;
        }
    });

    // Retrieve and parse the purchased upgrades from local storage, defaulting to an empty array if not found
    const savedPurchasedUpgrades = JSON.parse(localStorage.getItem('purchasedUpgrades')) || [];
    
    // Map the saved purchased upgrade names to the actual upgrade objects
    purchasedUpgrades = savedPurchasedUpgrades.map(savedUpgradeName => upgrades.find(up => up.name === savedUpgradeName)).filter(Boolean);

    // Filter out the available upgrades that have been purchased
    availableUpgrades = upgrades.filter(upgrade => !purchasedUpgrades.includes(upgrade));

    // Reapply the purchased upgrades and handle any special cases (e.g., "Cookie Clicker")
    purchasedUpgrades.forEach(upgrade => {
        if (upgrade) {
            addPurchasedUpgrade(upgrade.img, upgrade.name, upgrade.earnings, upgrade.isGodMode, upgrade.isPUGodMode, upgrade.message, upgrade.isFight);
            if (upgrade.name === "Cookie Clicker") {
                document.getElementById('cookieButton').style.display = 'block';
            }
        }
    });

    // Load the state of the Cookie Clicker button
    const cookieButtonVisible = JSON.parse(localStorage.getItem('cookieButtonVisible'));
    if (cookieButtonVisible) {
        document.getElementById('cookieButton').style.display = 'block';
        cookieClickMultiplier = JSON.parse(localStorage.getItem('cookieClickMultiplier')) || 10;
        const cookieTooltip = document.querySelector('#cookieButton .cookieTooltip');
        if(cookieBoost){
            cookieTooltip.textContent = `Each cookie click generates the amount of Copium, Delusion, Yacht Money, and Troll Points that you earn in half a second.`;
        } else {
            cookieTooltip.textContent = `Each cookie click counts as ${cookieClickMultiplier} clicks on collect buttons for Copium, Delusion, Yacht Money, and Troll Points!`;
        }
    }

    // Check if Knowledge is already unlocked
    if (localStorage.getItem('knowledgeUnlocked') === 'true') {
        unhideKnowledge();
    }

    // Load unlocked skills
    const savedLibrarySkills = JSON.parse(localStorage.getItem('librarySkills')) || [];
    if (Array.isArray(savedLibrarySkills)) {
        savedLibrarySkills.forEach(savedSkill => {
            const skill = librarySkills.find(s => s.name === savedSkill.name);
            if (skill) {
                skill.unlocked = savedSkill.unlocked;
                if (skill.unlocked) {
                    unlockLibrarySkill(skill, true); // Call with duringLoad set to true
                    console.log(`unlockLibrarySkill(${skill.name})`);
                }
            }
        });
    }
    const savedPowerHallSkills = JSON.parse(localStorage.getItem('powerHallSkills')) || [];
    if (Array.isArray(savedPowerHallSkills)) {
        savedPowerHallSkills.forEach(savedSkill => {
            const skill = powerHallSkills.find(s => s.name === savedSkill.name);
            if (skill) {
                skill.unlocked = savedSkill.unlocked;
                if (skill.unlocked) {
                    unlockPowerHallSkill(skill, true); // Call with duringLoad set to true
                    console.log(`unlockPowerHallSkill(${skill.name})`);
                }
            }
        });
    }

    // Check the state of delusion and update the switch position accordingly
    const toggleDelusion = document.getElementById('toggleDelusion');
    if (delusionPerSecond >= 0) {
        toggleDelusion.checked = true;
    } else {
        toggleDelusion.checked = false;
    }

    updateTradeRatio();
    updateTradeButtonText();

    if(buyMarkersSkill){ enableAllBuyMarkers() };

    // Retrieve the last interaction time, defaulting to the current time if not found
    const lastInteraction = parseInt(localStorage.getItem('lastInteraction')) || Date.now();
    // Calculate the elapsed time since the last interaction
    const now = Date.now();
    const elapsedSeconds = (now - lastInteraction) / 1000;
    
    updateMultipliersDisplay();
    updateEffectiveMultipliers();

    // Generate idle resources based on the elapsed time
    generateIdleResources(elapsedSeconds);

    // Update the display and the upgrade list, and unlock any available mini-games
    updateDisplay();
    updateUpgradeList();
}



function saveGameState() {
    // Save the resource values to local storage
    localStorage.setItem('copium', copium);
    localStorage.setItem('copiumPerSecond', copiumPerSecond);
    localStorage.setItem('delusion', delusion);
    localStorage.setItem('delusionPerSecond', delusionPerSecond);
    localStorage.setItem('yachtMoney', yachtMoney);
    localStorage.setItem('yachtMoneyPerSecond', yachtMoneyPerSecond);
    localStorage.setItem('trollPoints', trollPoints);
    localStorage.setItem('trollPointsPerSecond', trollPointsPerSecond);
    localStorage.setItem('hopium', hopium);
    localStorage.setItem('hopiumPerSecond', hopiumPerSecond);
    localStorage.setItem('knowledge', knowledge);
    localStorage.setItem('knowledgePerSecond', knowledgePerSecond);
    localStorage.setItem('power', power);
    localStorage.setItem('powerPerSecond', powerPerSecond);
    localStorage.setItem('serenity', serenity);
    localStorage.setItem('serenityPerSecond', serenityPerSecond);
    
    // Save the prestige values to local storage
    localStorage.setItem('prestiges', prestiges);
    localStorage.setItem('epsMultiplier', epsMultiplier);
    localStorage.setItem('prestigeRequirement', prestigeRequirement);
    
    // Save the god mode values to local storage
    localStorage.setItem('godModeLevel', godModeLevel);
    localStorage.setItem('godModeMultiplier', godModeMultiplier);

    // Save the god mode values to local storage
    localStorage.setItem('puGodLevel', puGodLevel);
    localStorage.setItem('puGodMultiplier', puGodMultiplier);

    // Save the big crunch values to local storage
    localStorage.setItem('bigCrunchPower', bigCrunchPower);
    localStorage.setItem('bigCrunchMultiplier', bigCrunchMultiplier);

    
    // Save the current time as the last interaction time
    localStorage.setItem('lastInteraction', Date.now());
    
    // Save all upgrades with the isGodMode property
    localStorage.setItem('upgrades', JSON.stringify(upgrades.map(upgrade => ({
        name: upgrade.name,
        isGodMode: upgrade.isGodMode || false,
        isPUGodMode: upgrade.isPUGodMode || false
    }))));
    
    // Save the purchased upgrades
    localStorage.setItem('purchasedUpgrades', JSON.stringify(purchasedUpgrades.map(upgrade => upgrade.name)));

    // Save the first time prestige button available flag
    localStorage.setItem('firstTimePrestigeButtonAvailable', firstTimePrestigeButtonAvailable);
    
    // Save the state of the Cookie Clicker button
    localStorage.setItem('cookieButtonVisible', document.getElementById('cookieButton').style.display === 'block');
    localStorage.setItem('cookieClickMultiplier', cookieClickMultiplier);

    localStorage.setItem('transcendenceUnlocked', transcendenceUnlocked);
    
    localStorage.setItem('knowledgeUnlocked', knowledgeUnlocked);

    localStorage.setItem('autoPrestigeThreshold', autoPrestigeThreshold);
    localStorage.setItem('autoAscendThreshold', autoAscendThreshold);
    localStorage.setItem('autoTranscendThreshold', autoTranscendThreshold);
    

    localStorage.setItem('deadpoolRevives', deadpoolRevives);
    
    localStorage.setItem('currentNumberFormat', JSON.stringify(currentNumberFormat));

    // Save unlocked library skills
    if (Array.isArray(librarySkills)) {
        const unlockedLibrarySkills = librarySkills.filter(skill => skill.unlocked);
        localStorage.setItem('librarySkills', JSON.stringify(unlockedLibrarySkills));
    }

    // Save unlocked power hall skills
    if (Array.isArray(powerHallSkills)) {
        const unlockedpowerHallSkills = powerHallSkills.filter(skill => skill.unlocked);
        localStorage.setItem('powerHallSkills', JSON.stringify(unlockedpowerHallSkills));
    }

    // Save the state of each switch
    purchasedUpgrades.forEach(upgrade => {
        const switchState = document.getElementById(`toggle-${upgrade.name}`).checked;
        localStorage.setItem(`switchState-${upgrade.name}`, JSON.stringify(switchState));
    });
}




// Function to hide tooltip
function hideTooltip() {
    const tooltip = document.getElementById('upgradeTooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}

// Function to show tooltip
function showTooltip(event, earnings, isGodMode, isPUGodMode, hoverOverwrite) {
    let tooltip = document.getElementById('upgradeTooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'upgradeTooltip';
        tooltip.className = 'upgradeTooltip';
        document.body.appendChild(tooltip);
    }

    let earningsClass = isGodMode ? 'godmode-earnings' : '';
    earningsClass = isPUGodMode ? 'pu-godmode-earnings' : earningsClass;

    if (hoverOverwrite) {
        tooltip.innerHTML = `
        <div>
            <div class="upgrade-earnings ${earningsClass}">
                ${hoverOverwrite} <!-- Formatted earnings -->
            </div>
        </div>
        `;
    } else {
        tooltip.innerHTML = `
            <div>
                <div class="upgrade-earnings ${earningsClass}">
                    ${formatCostOrEarnings(earnings, isGodMode, isPUGodMode)} <!-- Formatted earnings -->
                </div>
            </div>
        `;
    }

    // Show and position the tooltip initially
    tooltip.style.display = 'block';
    tooltip.style.position = 'absolute';

    if (window.innerWidth <= 768) {  // Mobile devices
        tooltip.style.left = `${event.touches[0].pageX + 40}px`;
        tooltip.style.top = `${event.touches[0].pageY + 40}px`;

        // Add event listener to update tooltip position while moving finger
        document.addEventListener('touchmove', moveTooltip, { passive: false });
    } else {  // Desktop devices
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    }
}

// Function to move the tooltip with finger
function moveTooltip(event) {
    const tooltip = document.getElementById('upgradeTooltip');
    if (tooltip) {
        tooltip.style.left = `${event.touches[0].pageX + 40}px`;
        tooltip.style.top = `${event.touches[0].pageY + 40}px`;
    }
}

// Function to remove the tooltip and the move listener
function removeTooltip() {
    const tooltip = document.getElementById('upgradeTooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
        document.removeEventListener('touchmove', moveTooltip); // Remove the event listener when the tooltip is hidden
    }
}



// Generate resources every interval
function generateResources() {
    copium += effectiveCopiumPerSecond / 2;
    delusion += effectiveDelusionPerSecond / 2;
    yachtMoney += effectiveYachtMoneyPerSecond / 2;
    trollPoints += effectiveTrollPointsPerSecond / 2;
    hopium += effectiveHopiumPerSecond / 2;
    knowledge += effectiveKnowledgePerSecond / 2;
    power += effectivePowerPerSecond / 2;
    serenity += effectiveSerenityPerSecond / 2;

    if (powerUnlocked){
        effectivePowerPerSecond = calculateEffectivePower();
    }

    // Check if delusion drops below negative 1 trillion to start generating Knowledge
    if ((delusion < -1e12 || knowledgeGenerationSkill) && knowledgePerSecond === 0) {
        knowledgePerSecond = 0.000001
        effectiveKnowledgePerSecond = calculateEffectiveKnowledge();

        if (!knowledgeGenerationSkill) {
            showMessageModal('The Age of Knowledge', `As you cross the threshold of -1 trillion delusion, the dense fog of confusion and distorted thoughts begins to lift. A sense of clarity pierces through the haze, revealing a world beyond the familiar chaos. The swirling mists part to unveil a luminous realm, shimmering with the light of hidden truths. For the first time, you feel a profound shift within, as the once insurmountable delusion gives way to the dawning of true knowledge. This newfound awareness pulses with a quiet intensity, each revelation a stepping stone towards deeper understanding. Your journey through the labyrinth of the mind has led to this pivotal moment, where the pursuit of enlightenment begins. Your mind expands, absorbing the essence of ancient wisdom and universal secrets, setting the stage for a transformative quest that transcends the ordinary limits of perception.`, false, false);
        }
    }

    updateDisplay();
}



async function restartPrestige(){
    
    const confirmTitle = "Are You Sure You Want to Restart this Prestige?"
    const confirmMessage = `<p>Whoa there, daring player! You're about to reset your prestige. Are you sure you want to go through with this?</p>
<p>Think of all those valuable prestige multipliers you've accumulated... all reset back to <strong>1</strong>! But hey, who needs progress when you can start over, right?</p>
<p><strong>Warning:</strong> This action will reset your prestige multiplier back to <strong>1</strong>. Seriously, once you click it, there's no going back. All those gains? Poof! Gone!</p>
<p>If you're absolutely sure that you need to reset because you messed up your upgrade buying, then go ahead and click that button. Otherwise, maybe just take a deep breath and reconsider. 😅</p>`;

    if (await showMessageModal(confirmTitle, confirmMessage, true, false)) {

        epsMultiplier = 1;
        prestigeRequirement = 1000;
        
        // Call restartGame with isPrestige flag set to true
        restartGame(true);
    }
}


// Helper function to reset button and progress bar appearance
function resetButtonAndProgress(gameType) {
    const button = document.getElementById(`${gameType}Game`);
    const progressBar = button.querySelector('.progress');

    // Reset button appearance
    button.disabled = true;
    button.classList.add('disabled');
    button.classList.remove('affordable');

    // Ensure the text color is reset to gray
    button.style.color = 'gray';

    // Set progress bar to zero width
    if (progressBar) {
        progressBar.style.width = '0%'; // Start the progress at 0
    }
}

// Helper function to clear all intervals
function clearAllIntervals() {
    Object.keys(miniGameIntervals).forEach(gameType => {
        clearInterval(miniGameIntervals[gameType]);
        delete miniGameIntervals[gameType];
    });
}



async function restartGame(isPrestige = false) {
    const confirmTitle1 = "Are You Sure You Want to Restart?"
    const confirmMessage1 = `<p>Whoa there, brave soul! You're about to hit the big red button and restart your game. Are you sure you want to do this?</p>
                            <p>Think of all those hard-earned upgrades and epic moments... gone in a flash! But hey, who needs progress when you can start over, right?</p>
                            <p><strong>Warning:</strong> This action cannot be undone. Like, seriously, once you click it, there’s no going back. Poof! All gone!</p>
                            <p>If you're absolutely, positively, without a doubt sure, then go ahead and click that button. Otherwise, maybe just take a deep breath and step away from the keyboard for a second. 😅</p>`;
    const confirmTitle2 = "You Didn't Ask for It, But I'll Give You One More Try"
    const confirmMessage2 = `<p>This time, for real. So, you’re really, really sure you want to restart? Like, absolutely sure?</p>
                            <p>All your progress will be history. Forever. Gone. Like that sandwich you left in the fridge. Are you sure you’re ready for that kind of commitment?</p>
                            <p>This is your last chance to turn back! Once you click this button, there’s no going back. Just like trying to un-toast toast.</p>
                            <p>If you’re still certain, then hit the button below. Otherwise, maybe rethink this whole restarting thing. 😅</p>`;
    
    if (isPrestige || (await showMessageModal(confirmTitle1, confirmMessage1, true, false) && await showMessageModal(confirmTitle2, confirmMessage2, true, false)) ) {
         // Reset all resources and earnings per second
        copium = 0;
        copiumPerSecond = 0;
        delusion = 0;
        delusionPerSecond = 0;
        yachtMoney = 0;
        yachtMoneyPerSecond = 0;
        trollPoints = 0;
        trollPointsPerSecond = 0;
        hopium = 0;
        hopiumPerSecond = 0;
        knowledge = 0;
        knowledgePerSecond = 0;
        power = 0;
        powerPerSecond = 0;
        effectivePowerPerSecond = 0;
        serenity = 0;
        serenityPerSecond = 0;

        // Reset ascends and multipliers if it's a full restart
        if (!isPrestige) {
            prestiges = 0;
            epsMultiplier = 1;
            prestigeRequirement = 1000;

            godModeLevel = 0;
            godModeMultiplier = 1;
            puGodLevel = 0;
            puGodMultiplier = 1;
            bigCrunchPower = 1e-7;
            bigCrunchMultiplier = 1;
            // Hide the cookie button
            document.getElementById('cookieButton').style.display = 'none';
            
            // Reset the isGodMode property for all upgrades
            upgrades.forEach(upgrade => {
                upgrade.isGodMode = false;
                upgrade.isPUGodMode = false;
            });

            document.getElementById('knowledge-container').style.display = 'none';
            knowledgeUnlocked = false;
            document.getElementById('power-container').style.display = 'none';
            document.getElementById('serenity-container').style.display = 'none';

            // Reset library skills
            librarySkills.forEach(skill => {
                skill.unlocked = false;
            });
            
            // Reset power hall skills
            powerHallSkills.forEach(skill => {
                skill.unlocked = false;
            });

            cookieClickMultiplier = 10;
            // Hide the delusion toggle switch
            document.getElementById('toggleDelusionLabel').classList.add('hidden');
            document.getElementById('buySeenButton').classList.add('hidden');
            document.getElementById('buyMaxButton').classList.add('hidden');

            knowledgeGenerationSkill = false;
            prestigeBaseSkill = false;
            twoDimensionalAscensionSkill = false;
            multibuyUpgradesSkill = false;
            mathGameSkill = false;
            memoryGameSkill = false;
            speedGameSkill = false;
            luckGameSkill = false;
            miniGamerSkill = false;
            numAscensionUpgrades = 1;
            numPUAscensionUpgrades = 2;
            buyMarkersSkill = false;
            improvedTradeRatio = false;
            cookieBoost = false;
            cookieHopeful = false;
            cookieKnowledgeable = false;
            moneyIsPowerTooSkill = false;
            lessDiminishingGodModeSkill = false;
            lessDiminishingPUGodModeSkill = false;
            autoPrestigeThreshold = null;
            autoAscendThreshold = null;
            autoTranscendThreshold = null;
            autobuyUpgradesSkill = false;

            upgradeAmplifierSkill = false;
            fasterAutobuyerskill = false;


            transcendenceUnlocked = false;

            playerAttackSpeed = 2;
            powerSurgeMultiplier = 1;

            playerMinDamageMult = 0.25;
            playerMaxDamageMult = 1.75;

            powerUnlocked = false;
            document.getElementById('power-container').style.display = 'none';
            
            document.getElementById('pu-god-display').style.display = 'none';
            document.getElementById('big-crunch-display').style.display = 'none';
            document.getElementById('powerHallButton').style.display = 'none';

            // Clear all intervals and reset progress bars and buttons
            clearAllIntervals();

            Object.keys(miniGameTimeouts).forEach(gameType => {
                // Clear the cooldown start time from localStorage
                localStorage.removeItem(`${gameType}CooldownStart`);

                // Reset cooldown state and appearance
                cooldowns[gameType] = false;
                resetButtonAndProgress(gameType,);
            });

            // Clear all local storage
            localStorage.clear();
        }


        const cookieButtonVisible = JSON.parse(localStorage.getItem('cookieButtonVisible'));
        if (cookieButtonVisible && cookieAutoClicker) {
            const intervalId = setInterval(() => {
                cookieCollectAllResources();
            }, 100); // 100 milliseconds = 0.1 seconds
        
            // Stop the interval after 15 seconds
            setTimeout(() => {
                clearInterval(intervalId);
            }, 15000); // 10000 milliseconds = 15 seconds
        }

        // Clear purchased upgrades
        purchasedUpgrades = [];
        document.getElementById('purchasedList').innerHTML = '';

        // Restore all upgrades
        availableUpgrades = upgrades.slice(); // Reset available upgrades to the original state


        // Start unlock timeouts for mini-games
        unlockMiniGames();

        // Save game state
        saveGameState();

        // Update display
        updateMultipliersDisplay();
        updateEffectiveMultipliers();
        updateUpgradeList();
        updateDisplay();
    }
}

let statusMessageTimeout;

function showStatusMessage(pressedButton, message, isSuccess, timeout=3000) {
    const overlay = document.getElementById('statusOverlay');
    overlay.textContent = message;
    overlay.className = 'status-overlay'; // Reset classes
    if (isSuccess) {
        overlay.classList.add('success');
    } else {
        overlay.classList.add('error');
    }
    overlay.style.display = 'block';
    
    const rect = pressedButton.getBoundingClientRect();

    // Adjust the positioning based on the device
    // if (window.innerWidth <= 768) {  // Mobile devices
    overlay.style.position = 'absolute';
    overlay.style.top = `${rect.bottom + window.scrollY + 5}px`;  // Position below the pressed button
    overlay.style.left = `${rect.left + window.scrollX}px`;  // Align with the left of the pressed button
    // } else {  // Desktop devices
    //     overlay.style.position = 'absolute';
    //     overlay.style.top = `${rect.top + window.scrollY}px`;  // Align with the top of the pressed button
    //     overlay.style.left = `${rect.right + window.scrollX + 10}px`;  // Position to the right of the pressed button
    // }

    // Clear the previous timer if it exists
    if (statusMessageTimeout) {
        clearTimeout(statusMessageTimeout);
    }

    // Set a new timer to hide the overlay after 3 seconds
    statusMessageTimeout = setTimeout(() => {
        overlay.style.display = 'none';
    }, timeout); // Hide after 3 seconds
}


// Function to update the displayed trade ratio based on selected resources
function updateTradeRatio() {
    const fromResource = document.getElementById('fromResource').value;
    const toResource = document.getElementById('toResource').value;
    const tradeRatioDisplay = document.getElementById('tradeRatioDisplay');

    // Special case for trading Copium to Hopium
    if (fromResource === 'copium' && toResource === 'hopium') {
        if (improvedTradeRatio){
            tradeRatioDisplay.textContent = 'Trade ratio is 5M:1';
        } else {
            tradeRatioDisplay.textContent = 'Trade ratio is 100M:1';
        }
    } else if (toResource === 'hopium') {
        tradeRatioDisplay.textContent = 'Only Copium can convert to Hopium';
    } else {
        if (improvedTradeRatio){
            tradeRatioDisplay.textContent = 'Trade ratio is 5:1';
        } else {
            tradeRatioDisplay.textContent = 'Trade ratio is 10:1';
        }
    }
}

function parseFormattedNumber(str, currentAmount = 0) {
    const suffixes = {
        k: 1e3,
        m: 1e6,
        b: 1e9,
        t: 1e12,
        qa: 1e15,
        qi: 1e18,
        sx: 1e21,
        sp: 1e24,
        oc: 1e27,
        nn: 1e30,
        dc: 1e33
    };

    const regex = /^(\d+(\.\d+)?)([a-zA-Z%]+|e[\+\-]?\d+)?$/i;
    const match = str.match(regex);

    if (match) {
        const [, num, , suffix] = match;
        if (suffix && suffix[0] === '%') {
            const percentage = parseFloat(num);
            if (percentage >= 0 && percentage <= 100) {
                return (percentage / 100) * currentAmount;
            }
            else {
                return NaN;
            }
        } else if (suffix && suffix[0].toLowerCase() === 'e') {
            return parseFloat(num + suffix);
        }
        const factor = suffix ? suffixes[suffix.toLowerCase()] || 1 : 1;
        return parseFloat(num) * factor;
    }
    return NaN;
}

// Function to update the trade button text based on entered trade amount
function updateTradeButtonText() {
    const tradeAmountInput = document.getElementById('tradeAmount').value;
    const tradeButton = document.getElementById('tradeButton');
    
    if (tradeAmountInput) {
        tradeButton.textContent = `Trade ${tradeAmountInput}`;
    } else {
        tradeButton.textContent = 'Trade';
    }
}

function tradeResources(tradeAmountInput = null) {
    const fromResource = document.getElementById('fromResource').value;
    const toResource = document.getElementById('toResource').value;

    // Object to store current amounts of each resource
    const resourceAmount = {
        copium: copium,
        delusion: delusion,
        yachtMoney: yachtMoney,
        trollPoints: trollPoints,
        hopium: hopium
    };

    const currentAmount = resourceAmount[fromResource];

    // If tradeAmountInput is null, use the value from the input field
    if (!tradeAmountInput) {
        tradeAmountInput = document.getElementById('tradeAmount').value;
    }

    // Calculate the trade amount using the parseFormattedNumber function
    const tradeAmount = parseFormattedNumber(tradeAmountInput, currentAmount);

    const tradeButton = document.getElementById('tradeButton');

    // Check if the same resource is selected for both from and to
    if (fromResource === toResource) {
        showStatusMessage(tradeButton, "Cannot trade the same resource.", false);
        return;
    }

    // Check if trade amount is valid
    if (isNaN(tradeAmount) || tradeAmount <= 0) {
        showStatusMessage(tradeButton, 'Please enter a valid trade amount.', false);
        return;
    }

    // Special trade case for converting Copium to Hopium
    if (fromResource === 'copium' && toResource === 'hopium') {
        if (resourceAmount[fromResource] < tradeAmount) {
            showStatusMessage(tradeButton, `Not enough ${fromResource} to trade.`, false);
            return;
        }
        resourceAmount[fromResource] -= tradeAmount;
        if (improvedTradeRatio) {
            resourceAmount[toResource] += tradeAmount / 5000000;
            showStatusMessage(tradeButton, `Traded ${formatNumber(tradeAmount)} ${fromResource} for ${formatNumber(tradeAmount / 4000000)} ${toResource}.`, true);
        } else {
            resourceAmount[toResource] += tradeAmount / 100000000;
            showStatusMessage(tradeButton, `Traded ${formatNumber(tradeAmount)} ${fromResource} for ${formatNumber(tradeAmount / 100000000)} ${toResource}.`, true);
        }
    } else if (toResource === 'hopium') {
        showStatusMessage(tradeButton, "Only Copium can convert to Hopium.", false);
        return;
    } else {
        // General trade case for other resources
        if (resourceAmount[fromResource] < tradeAmount) {
            showStatusMessage(tradeButton, `Not enough ${fromResource} to trade.`, false);
            return;
        }
        resourceAmount[fromResource] -= tradeAmount;
        if (improvedTradeRatio) {
            resourceAmount[toResource] += tradeAmount / 5;
            showStatusMessage(tradeButton, `Traded ${formatNumber(tradeAmount)} ${fromResource} for ${formatNumber(tradeAmount / 4)} ${toResource}.`, true);
        } else {
            resourceAmount[toResource] += tradeAmount / 10;
            showStatusMessage(tradeButton, `Traded ${formatNumber(tradeAmount)} ${fromResource} for ${formatNumber(tradeAmount / 10)} ${toResource}.`, true);
        }
    }

    // Update global resource variables
    copium = resourceAmount.copium;
    delusion = resourceAmount.delusion;
    yachtMoney = resourceAmount.yachtMoney;
    trollPoints = resourceAmount.trollPoints;
    hopium = resourceAmount.hopium;

    // Update the display to reflect the new resource values
    updateDisplay();
}

// Function to trade 10% of the available resource
function tradeTenPercent() {
    tradeResources("10%"); // Pass "10%" to the tradeResources function
}



// function Bound(LOWER_BOUND = -Infinity, UPPER_BOUND = Infinity, DEFAULT_VALUE = 0, DATA = 0) {
//     if (LOWER_BOUND > UPPER_BOUND) {throw new Error(`UPPER_BOUND is ${UPPER_BOUND} which is less than LOWER_BOUND which is ${LOWER_BOUND}`)}
//     if (DEFAULT_VALUE < LOWER_BOUND || DEFAULT_VALUE > UPPER_BOUND) {
//       throw new Error(`Math ain't mathing`)
//     }
//     if (DATA >= LOWER_BOUND && DATA <= UPPER_BOUND) return DATA
//     return DEFAULT_VALUE
//   }
//   function Rounding(Num) {
//     return String(Number(Num))
//   }
//   function NumberScientific(Num, Fixed = 2, EXPONENT_LIMIT = 3) {
//       let limitTillexpo = Bound(0, 9 , 4, EXPONENT_LIMIT), Exponent = Math.abs(Math.floor(Math.log10(Math.abs(Num)))), x = 0
//       if (Math.abs(Num) < 1 && Math.abs(Num) > 0) {
//         x = Num
//         return Exponent <= limitTillexpo ? Rounding(x.toPrecision(Bound(1,4,2,4-Exponent))) : `${Rounding((Num*(10**Exponent)).toPrecision(Fixed+1))}e${-Exponent}`
//     }
//     if (Math.abs(Num) < 10**limitTillexpo) {
//       x = Num
//       return Rounding(x.toPrecision(Bound(1,4,Fixed,Fixed+Exponent-2)))
//   }
//       return `${Rounding((Num/(10**Exponent)).toPrecision(Fixed+1))}e${Exponent}`
//   }
//   function NumberStandard(Num, Fixed = 2, EXPONENT_LIMIT = 3) {
//     let limitTillexpo = Bound(0, 9, 3,EXPONENT_LIMIT), 
//         x = 0,
//         Exponent = Math.floor(Math.log10(Math.abs(Num))/3),
//         True_Exponent = Math.abs(Math.floor(Math.log10(Math.abs(Num))))
//     let PREFIXES = ["", "K", "M", "B", "T", "Qa", "Qt", "Sx", "Sp", "Oc", "No", "Dc", "UDc", "DDc",
//       "TDc", "QaDc", "QtDc", "SxDc", "SpDc", "ODc", "NDc", "Vg", "UVg", "DVg", "TVg",
//       "QaVg", "QtVg", "SxVg", "SpVg", "OVg", "NVg", "Tg", "UTg", "DTg", "TTg", "QaTg",
//       "QtTg", "SxTg", "SpTg", "OTg", "NTg", "Qd", "UQd", "DQd", "TQd", "QaQd", "QtQd",
//       "SxQd", "SpQd", "OQd", "NQd", "Qi", "UQi", "DQi", "TQi", "QaQi", "QtQi", "SxQi",
//       "SpQi", "OQi", "NQi", "Se", "USe", "DSe", "TSe", "QaSe", "QtSe", "SxSe", "SpSe",
//       "OSe", "NSe", "St", "USt", "DSt", "TSt", "QaSt", "QtSt", "SxSt", "SpSt", "OSt",
//       "NSt", "Og", "UOg", "DOg", "TOg", "QaOg", "QtOg", "SxOg", "SpOg", "OOg", "NOg",
//       "Nn", "UNn", "DNn", "TNn", "QaNn", "QtNn", "SxNn", "SpNn", "ONn", "NNn", "Ce"]
//     if (Math.abs(Num) < 1 && Math.abs(Num) > 0) {
//         x = Num
//         return True_Exponent <= limitTillexpo ? Rounding(x.toPrecision(Bound(1,4,2,4-True_Exponent))) : `${Rounding((Num*(10**True_Exponent)).toPrecision(Fixed+1))}e${-True_Exponent}`
//     }
//     if (Math.abs(Num) < 10**limitTillexpo) {
//         x = Num
//         return Rounding(x.toPrecision(Bound(1,6,Fixed,Fixed+True_Exponent-2)))
//     }
//     return `${Rounding((Num/(1000**Exponent)).toPrecision(Fixed+1))}${PREFIXES[Exponent]}`
//   }

const formatSignificant = new Intl.NumberFormat("en-US", { maximumFractionDigits: 3 });
const formatFraction = new Intl.NumberFormat("en-US", { maximumSignificantDigits: 4 });
const formatScientific = new Intl.NumberFormat("en-US", { maximumFractionDigits: 3, notation: "scientific" });

const PREFIXES = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc", "UDc", "DDc",
    "TDc", "QaDc", "QiDc", "SxDc", "SpDc", "ODc", "NDc", "Vg", "UVg", "DVg", "TVg",
    "QaVg", "QiVg", "SxVg", "SpVg", "OVg", "NVg", "Tg", "UTg", "DTg", "TTg", "QaTg",
    "QiTg", "SxTg", "SpTg", "OTg", "NTg", "Qd", "UQd", "DQd", "TQd", "QaQd", "QiQd",
    "SxQd", "SpQd", "OQd", "NQd", "Qt", "UQt", "DQt", "TQt", "QaQt", "QiQt", "SxQt",
    "SpQt", "OQt", "NQt", "Se", "USe", "DSe", "TSe", "QaSe", "QiSe", "SxSe", "SpSe",
    "OSe", "NSe", "St", "USt", "DSt", "TSt", "QaSt", "QiSt", "SxSt", "SpSt", "OSt",
    "NSt", "Og", "UOg", "DOg", "TOg", "QaOg", "QiOg", "SxOg", "SpOg", "OOg", "NOg",
    "Nn", "UNn", "DNn", "TNn", "QaNn", "QiNn", "SxNn", "SpNn", "ONn", "NNn", "Ce"];

function formatNumIntl(num, isScientific = false) {
    const absNum = Math.abs(num);
    if (num === 0) return "0";
    else if (absNum >= 1 && absNum < 1000) return formatSignificant.format(num);
    else if (isScientific) return formatScientific.format(num).toLowerCase();
    else if (absNum < 1) return formatFraction.format(num);
    
    const exponent = Math.floor(Math.log10(absNum) / 3);
    const digits = formatSignificant.format(num / 10 ** (3 * exponent));
    
    return digits + PREFIXES[exponent];
}

function formatNumber(num) {
    let formattedNum;

    switch(currentNumberFormat) {
        case 'Mixed':
            if(Math.abs(num) < 1e36){
                formattedNum = formatNumIntl(num, false);
            } else {
                formattedNum = formatNumIntl(num, true);
            }
            break;
        case 'Scientific': 
            formattedNum = formatNumIntl(num, true);
            break;
        case 'Suffixes':
            formattedNum = formatNumIntl(num, false);
            break;
    }

    // Return the formatted number, wrapped in a span tag with red color if the number is negative
    if (num < 0) {
        return `<span style="color: red;">${formattedNum}</span>`;
    } else {
        return formattedNum;
    }
}


// function NumberMixedScientific(Num,Fixed = 2, EXPONENT_LIMIT = 3) {
//     if (Num < 1e36) {
//       return NumberStandard(Num, Fixed, EXPONENT_LIMIT)
//     } else {
//       return NumberScientific(Num, Fixed, EXPONENT_LIMIT)
//     }
// }
// function NumberFormat(Num = 0, Type = 0, Fixed) {
//     switch(Type) {
//       case 0:
//         return NumberMixedScientific(Num, Fixed)
//       case 1: 
//         return NumberScientific(Num, Fixed)
//       case 2:
//         return NumberStandard(Num, Fixed)
//     }
// }


function customRound(number, digits) {
    const factor = Math.pow(10, digits);
    return Math.round(number * factor) / factor;
}

// function formatNumber2(num) {
//     return NumberFormat(num, numberFormatType, 3)
// }

function formatNumber3(num) {
    const suffixes = [
        { value: 1e33, symbol: "Dc" },    // Decillion
        { value: 1e30, symbol: "No" },    // Nonillion
        { value: 1e27, symbol: "Oc" },    // Octillion
        { value: 1e24, symbol: "Sp" },    // Septillion
        { value: 1e21, symbol: "Sx" },    // Sextillion
        { value: 1e18, symbol: "Qi" },    // Quintillion
        { value: 1e15, symbol: "Qa" },    // Quadrillion
        { value: 1e12, symbol: "T" },     // Trillion
        { value: 1e9, symbol: "B" },      // Billion
        { value: 1e6, symbol: "M" },      // Million
        { value: 1e3, symbol: "K" }       // Thousand
    ];

    if (Math.abs(num) >= 1e36) {
        return num.toExponential(3);  // Switch to scientific notation for values >= 1e36
    } else if (Math.abs(num) > 0 && Math.abs(num) < 1) {
        return parseFloat(num.toPrecision(4)).toString();  // Limit to 3 significant digits and remove trailing zeros
    }

    for (let i = 0; i < suffixes.length; i++) {
        if (Math.abs(num) >= suffixes[i].value) {
            return customRound(num / suffixes[i].value, 3) + suffixes[i].symbol;
        }
    }


    return customRound(num, 3);
}


// Function to update the display with the current game state
function updateDisplay() {
    document.getElementById('copium').innerHTML = formatNumber(copium);
    document.getElementById('cps').innerHTML = formatNumber(effectiveCopiumPerSecond);
    document.getElementById('delusion').innerHTML = formatNumber(delusion);
    document.getElementById('dps').innerHTML = formatNumber(effectiveDelusionPerSecond);
    document.getElementById('yachtMoney').innerHTML = formatNumber(yachtMoney);
    document.getElementById('ymps').innerHTML = formatNumber(effectiveYachtMoneyPerSecond);
    document.getElementById('trollPoints').innerHTML = formatNumber(trollPoints);
    document.getElementById('tpps').innerHTML = formatNumber(effectiveTrollPointsPerSecond);
    document.getElementById('hopium').innerHTML = formatNumber(hopium);
    document.getElementById('hps').innerHTML = formatNumber(effectiveHopiumPerSecond);
    document.getElementById('knowledge').innerHTML = formatNumber(knowledge);
    document.getElementById('kps').innerHTML = formatNumber(effectiveKnowledgePerSecond);
    document.getElementById('power').innerHTML = formatNumber(power);
    document.getElementById('pps').innerHTML = formatNumber(effectivePowerPerSecond);
    document.getElementById('serenity').innerHTML = formatNumber(serenity);
    document.getElementById('sps').innerHTML = formatNumber(effectiveSerenityPerSecond);

    updatePrestigeButton();
    updateAscendButton();
    updateTranscendButton();
    updateBigCrunchButton();
    updateUpgradeButtons();
}

function updateMultipliersDisplay() {

    totalMultiplier = epsMultiplier * godModeMultiplier * puGodMultiplier * bigCrunchMultiplier * devMultiplier

    document.getElementById('prestige-multiplier').textContent = `Prestige: x${formatNumber(epsMultiplier)} mult`;
    document.getElementById('god-mode-display').textContent = `God-Mode Level ${godModeLevel} (x${formatNumber(godModeMultiplier)} mult)`;
    document.getElementById('pu-god-display').textContent = `PU God Level ${puGodLevel} (x${formatNumber(puGodMultiplier)} mult)`;
    document.getElementById('big-crunch-display').textContent = `Big Crunch Power ${formatNumber(bigCrunchPower)} (x${formatNumber(bigCrunchMultiplier)} mult + KPSx${formatNumber(bigCrunchMultiplier**(1/2))})`;
}

function unhideKnowledge() {
    document.getElementById('knowledge-container').style.display = 'block';
    knowledgeUnlocked = true;
}

function unhidePower() {
    document.getElementById('power-container').style.display = 'block';
    powerUnlocked = true;
}

function unhideSerenity() {
    document.getElementById('serenity-container').style.display = 'block';
}

function unlockBigCrunch() {
    bigCrunchUnlocked = true;
    document.getElementById('big-crunch-display').style.display = 'block';
    updateMultipliersDisplay();
    updateDisplay();
}

function unlockTranscendence() {
    transcendenceUnlocked = true;
    document.getElementById('pu-god-display').style.display = 'block';
}

function unlockHallofPower() {
    document.getElementById('powerHallButton').style.display = 'flex';
}


// Function to calculate the prestige multiplier based on the lowest of the first four resources
function calculatePrestigeMultiplier() {
    const base = prestigeBaseSkill ? 1.75 : 1.5;
    const minResource = Math.min(copium, delusion, yachtMoney, trollPoints);
    return base ** (Math.log10(minResource / 1000) + 1);
}

// Inverse of calculatePrestigeMultiplier
function calculateMinResource() {
    const base = prestigeBaseSkill ? 1.75 : 1.5;
    return Math.max(1000 * 10 ** ((Math.log10(epsMultiplier) / Math.log10(base)) - 1), 1000);
}

// Check if the player can prestige
function canPrestige() {
    const minResource = Math.min(copium, delusion, yachtMoney, trollPoints);
    return minResource >= prestigeRequirement;
}

async function prestige(skipConfirms = false) {
    if (canPrestige()) {
        const newPrestigeMult = calculatePrestigeMultiplier();
        const newPrestigeReq = Math.min(copium, delusion, yachtMoney, trollPoints);

        let confirmed = true; // Assume confirmation is true by default

        // If skipConfirms is false, show the confirmation modal
        if (!skipConfirms) {
            confirmed = await showMessageModal(
                'Prestige Confirmation',
                `<p>Are you sure you want to prestige? You will reset your progress and all resources, but your Prestige Multiplier will increase <strong>from ${formatNumber(epsMultiplier)} to ${formatNumber(newPrestigeMult)}</strong>.</p>
<p><span style="font-size: smaller;">(Prestige multiplier is based on the lowest among your first four resources (Copium, Delusion, Yacht Money, and Troll Points). The higher the amount of your smallest resource, the greater your prestige multiplier!)</span></p>`,
                true
            );
        }

        // If confirmed or skipConfirms is true, proceed with the prestige
        if (confirmed) {
            epsMultiplier = newPrestigeMult;
            prestigeRequirement = newPrestigeReq;
            
            // Call restartGame with isPrestige flag set to true
            restartGame(true);

            prestiges += 1;

            // Save game state after prestige
            saveGameState();

            // If skipConfirms is false and epsMultiplier is less than 5, show the success modal
            if (!skipConfirms && epsMultiplier < 5) {
                showMessageModal('Prestige Successful!', `Your multiplier is now x${formatNumber(epsMultiplier)}. All resources have been reset.`);
            }
        }
    }
}


// Update the display of the prestige button
function updatePrestigeButton() {
    
    const prestigeButton = document.getElementById('prestigeButton');
    if (canPrestige()) {
        if (firstTimePrestigeButtonAvailable && godModeLevel < 3 && bigCrunchMultiplier < 2) {
            showMessageModal('Prestige Unlocked: Rise Stronger!', 'Congratulations! You have unlocked the first of many prestige layers. This one is straightforward, but it represents something much greater: the beginning of a journey filled with deeper challenges and complexity.<br><br>Prestige isn’t just a reset—it’s a testament to your resilience, symbolizing the strength to rise again, stronger and wiser. While this first step may seem simple, future layers will add layers of strategy and depth that will truly test your skills.<br><br>By choosing Prestige, you’re not just starting over; you’re gaining a powerful multiplier that will enhance everything you do. Each click, each resource, and every upgrade will be boosted, setting the stage for even greater achievements.<br><br>Are you ready to embrace this opportunity? To rebuild with newfound strength and surpass your past progress? Prestige now, and begin your ascent to greatness once more!');
            firstTimePrestigeButtonAvailable = false; // Set the flag to false after showing the message
            saveGameState(); // Save the game state to persist the flag
        }
        const newMultiplier = calculatePrestigeMultiplier();
        prestigeButton.textContent = `PRESTIGE (x${formatNumber(newMultiplier / epsMultiplier)} MULT)`;
        prestigeButton.style.display = 'block';
        // Check if auto-prestige should be triggered
        if (autoPrestigeThreshold !== null && (newMultiplier / epsMultiplier) > autoPrestigeThreshold) {
            prestige(true); // Trigger auto-prestige
        }
    } else {
        prestigeButton.style.display = 'none';
    }
}

function canAscend() {
    return purchasedUpgrades.some(upgrade => upgrade.name === "Ascension") &&
           purchasedUpgrades.some(upgrade => !upgrade.isGodMode);
}

function canTranscend() {
    return purchasedUpgrades.some(upgrade => upgrade.name === "Transcendence") &&
            purchasedUpgrades.some(upgrade => !upgrade.isPUGodMode);
}

function canBigCrunch() {
    return power > bigCrunchPower;
}

function calculateGodModeMultiplier(gmLevlel = godModeLevel) {
    let productX = 1; // Initialize the product to 1 for the first element
    const diminishFactor = lessDiminishingGodModeSkill ? 0.985 : 0.975
    for (let i = 0; i < gmLevlel; i++) {
        let xi = 1 + 0.25 * Math.pow(diminishFactor, i); // Calculate xi
        productX *= xi; // Multiply the current xi to the cumulative product
    }
    return productX
}

function calculatePUGodModeMultiplier(gmLevlel = puGodLevel) {
    let productX = 1; // Initialize the product to 1 for the first element
    const diminishFactor = lessDiminishingPUGodModeSkill ? 0.990 : 0.975
    for (let i = 0; i < gmLevlel; i++) {
        let xi = 1 + 0.25 * Math.pow(diminishFactor, i); // Calculate xi
        productX *= xi; // Multiply the current xi to the cumulative product
    }
    return productX
}

function calculateBigCrunchMultiplier(bcPower = bigCrunchPower) {
    return Math.pow(2, Math.log10(bcPower / 1e-7));
}

// Function to calculate the ascension eps multiplier
function calculateAscensionEpsMult() {
    const exponent = twoDimensionalAscensionSkill ? 2 / 3 : 1 / 3;
    return epsMultiplier ** exponent;
}

async function ascend() {
    const upgradeText = numAscensionUpgrades > 1
        ? `select up to ${numAscensionUpgrades} upgrades to enhance and increase your god mode multiplier accordingly`
        : "select an upgrade to enhance and increase your god mode multiplier";
    const selectedUpgrades = await showMessageModal(
        'God-Mode Ascension',
        `Are you sure you want to enter God-Mode level ${godModeLevel + 1}?<br><br>
        Raising the level of God-Mode requires temporarily folding three dimensions in the space around you to a single point, which will unfortunately reduce your Prestige multiplier to its cube root. Your Prestige multiplier will shrink from <strong>x${formatNumber(epsMultiplier)}</strong> to <strong>x${formatNumber(calculateAscensionEpsMult())}</strong><br><br>
        On the bright side, your God-Mode multiplier will increase from <strong>x${formatNumber(godModeMultiplier)}</strong> to at least <strong>x${formatNumber(calculateGodModeMultiplier(godModeLevel+1))}</strong>!<br><br>
        Additionally, you can ${upgradeText}.`,
        true,
        true
    );

    if (selectedUpgrades) {
        const upgradesCount = selectedUpgrades.length;
        godModeLevel += upgradesCount;
        godModeMultiplier = calculateGodModeMultiplier(godModeLevel);

        selectedUpgrades.forEach(upgrade => {
            upgrade.isGodMode = true;
        });

        epsMultiplier = Math.max(calculateAscensionEpsMult(), 1);
        prestigeRequirement = calculateMinResource();
        
        showMessageModal('Ascension Successful!', `<strong>You have entered God-Mode Level ${godModeLevel}.</strong><br> Your multiplier God-Mode is now x${formatNumber(godModeMultiplier)}, your prestige multiplier is x${formatNumber(epsMultiplier)}, and your chosen upgrades are 10x stronger.`);        


        restartGame(true); // Use the existing restartGame function with prestige mode
        // Save game state after ascending
        saveGameState();
    }
}


async function transcend() {
    const upgradeText = `select up to ${numPUAscensionUpgrades} upgrades to enhance and increase your Parallel Universe God-Mode multiplier accordingly`;
    const firstTranscendText = puGodLevel < 1 ? `<span style="color: #FFD700;">Hey it's your intuition again. Transcending does not reset Big Crunch. But Big Crunch resets Transcends. It is recommended to get Big Crunch Multiplier at minimum above 10 (~0.00021 Big Crunch Power) before going down this path.</span><br><br>` : '';
    const selectedUpgrades = await showMessageModal(
        'Parallel Universe God-Mode Ascension',
        `Are you sure you want to enter Parallel Universe God-Mode level ${puGodLevel + 1}?<br><br>${firstTranscendText}
        Accessing this new dimension requires temporarily aligning your universe with a parallel one, which will unfortunately reduce your Prestige multiplier the same way that Ascending in your Universe would. Your Prestige multiplier will shrink from <strong>x${formatNumber(epsMultiplier)}</strong> to <strong>x${formatNumber(calculateAscensionEpsMult())}</strong><br><br>
        On the bright side, your Parallel Universe God-Mode multiplier will increase from <strong>x${formatNumber(puGodMultiplier)}</strong> to at least <strong>x${formatNumber(calculatePUGodModeMultiplier(puGodLevel+2))}</strong>!<br><br>
        Additionally, you can ${upgradeText}.`,
        true,
        true,
        false,
        true
    );

    if (selectedUpgrades) {
        const upgradesCount = selectedUpgrades.length;
        console.log(`Selected ${upgradesCount} upgrades`)
        puGodLevel += upgradesCount;
        puGodMultiplier = calculatePUGodModeMultiplier(puGodLevel);

        selectedUpgrades.forEach(upgrade => {
            upgrade.isPUGodMode = true;
        });

        epsMultiplier = Math.max(calculateAscensionEpsMult(), 1);
        prestigeRequirement = calculateMinResource();
        
        showMessageModal('Transcendence Successful!', `<strong>You have entered Parallel Universe God-Mode Level ${puGodLevel}.</strong><br> Your Parallel Universe God-Mode multiplier is now x${formatNumber(puGodMultiplier)}, your prestige multiplier is x${formatNumber(epsMultiplier)}, and your chosen upgrades are 10x stronger.`);        


        restartGame(true); // Use the existing restartGame function with prestige mode
        // Save game state after transcending
        saveGameState();
    }
}


async function bigCrunch() {

    if (canBigCrunch()) {

        let deadpoolHint = '';

        if (deadpoolRevives > 0 && !purchasedUpgrades.some(up => up.name === 'Deadpool')) {
            deadpoolHint = `<br><br><span style="color: #FFD700;">Your instincts hint that Big Crunch might also reset all of Deadpool's deaths...</span>`;
        }

        const confirmed = await showMessageModal(
            'Big Crunch Confirmation',
            `Are you sure you want to prestige? You will reset all resources, prestiges, and god-mode levels, but your Big Crunch Multiplier will increase <strong>from ${formatNumber(bigCrunchMultiplier)} to ${formatNumber(calculateBigCrunchMultiplier(power))}</strong>.<br> Big crunch multiplier stacks with all your other multipliers, plus additionally affects your Knowledge generation! (Your Big Crunch Power will lock in at the current Power level)` + deadpoolHint,
            true
        );

        if (confirmed) {
            bigCrunchPower = power;
            bigCrunchMultiplier = calculateBigCrunchMultiplier();
            
            // Call restartGame with isPrestige flag set to true
            restartGame(true);

            epsMultiplier = 1;
            prestigeRequirement = 1000;
            godModeLevel = 0;
            godModeMultiplier = 1;
            puGodLevel = 0;
            puGodMultiplier = 1;

            deadpoolRevives = 0;

            upgrades.forEach(upgrade => {
                upgrade.isGodMode = false;
                upgrade.isPUGodMode = false;
            });


            // Save game state after prestige
            updateMultipliersDisplay();
            saveGameState();

            showMessageModal('Big Crunch Successful!', `Your multiplier is now x${bigCrunchMultiplier.toFixed(2)}. All resources have been reset.`);
        }
    }
}

function updateAscendButton() {
    const ascendButton = document.getElementById('ascendButton');
    if (canAscend()) {
        ascendButton.style.display = 'block';
        // Check if autoAscendThreshold is set and not null

        if (autoAscendThreshold !== null) {
            // Count the number of purchased upgrades that do not have isGodMode
            const nonGodModeUpgrades = purchasedUpgrades.filter(upgrade => !upgrade.isGodMode).length;

            // If the number of non-GodMode upgrades meets or exceeds the threshold, auto-ascend
            if (nonGodModeUpgrades >= autoAscendThreshold) {
                // Get the upgrades to ascend with
                const selectedUpgrades = purchasedUpgrades.filter(upgrade => !upgrade.isGodMode).slice(0, autoAscendThreshold);

                // Perform the ascension using the selected upgrades
                const upgradesCount = selectedUpgrades.length;
                godModeLevel += upgradesCount;
                godModeMultiplier = calculateGodModeMultiplier(godModeLevel);

                selectedUpgrades.forEach(upgrade => {
                    upgrade.isGodMode = true;
                });

                epsMultiplier = Math.max(calculateAscensionEpsMult(), 1);
                prestigeRequirement = calculateMinResource();
                
                restartGame(true); // Use the existing restartGame function with prestige mode
                saveGameState(); // Save game state after ascending
            }
        }

    } else {
        ascendButton.style.display = 'none';
    }
}


function updateTranscendButton() {
    const transcendButton = document.getElementById('transcendButton');
    if (canTranscend()) {
        transcendButton.style.display = 'block';

        // Check if autoTranscendThreshold is set and not null
        if (autoTranscendThreshold !== null) {
            // Count the number of purchased upgrades that do not have isPUGodMode
            const nonPUGodModeUpgrades = purchasedUpgrades.filter(upgrade => !upgrade.isPUGodMode).length;

            // If the number of non-PUGodMode upgrades meets or exceeds the threshold, auto-transcend
            if (nonPUGodModeUpgrades >= autoTranscendThreshold) {
                // Get the upgrades to transcend with
                const selectedUpgrades = purchasedUpgrades.filter(upgrade => !upgrade.isPUGodMode).slice(0, autoTranscendThreshold);

                // Perform the transcendence using the selected upgrades
                const upgradesCount = selectedUpgrades.length;
                puGodLevel += upgradesCount;
                puGodMultiplier = calculatePUGodModeMultiplier(puGodLevel);

                selectedUpgrades.forEach(upgrade => {
                    upgrade.isPUGodMode = true;
                });

                epsMultiplier = Math.max(calculateAscensionEpsMult(), 1);
                prestigeRequirement = calculateMinResource();
                
                restartGame(true); // Use the existing restartGame function with prestige mode
                saveGameState(); // Save game state after transcending
            }
        }

    } else {
        transcendButton.style.display = 'none';
    }
}


function updateBigCrunchButton() {
    const bigCrunchButton = document.getElementById('bigCrunchButton');
    if (bigCrunchUnlocked && canBigCrunch()) {
        const newMultiplier = calculateBigCrunchMultiplier(power);
        bigCrunchButton.textContent = `BIG CRUNCH (x${formatNumber((newMultiplier / bigCrunchMultiplier))} MULT)`;
        bigCrunchButton.style.display = 'block';
    } else {
        bigCrunchButton.style.display = 'none';
    }
}


// Function to generate idle resources based on the elapsed time
function generateIdleResources(elapsedSeconds) {
    // Increase resources based on their effective per second values and the elapsed time
    copium += effectiveCopiumPerSecond * elapsedSeconds;
    delusion += effectiveDelusionPerSecond * elapsedSeconds;
    yachtMoney += effectiveYachtMoneyPerSecond * elapsedSeconds;
    trollPoints += effectiveTrollPointsPerSecond * elapsedSeconds;
    hopium += effectiveHopiumPerSecond * elapsedSeconds;
    serenity += effectiveSerenityPerSecond * elapsedSeconds;

    const baseKnowledgePerSecond = calculateBaseKnowledge();

    if (baseKnowledgePerSecond > 0) {

        const knowledgeGeneratedIn2Hours = baseKnowledgePerSecond * 2 * 3600;  // Knowledge generated in 2 hours (2 * 3600 seconds)

        // Calculate the current diminishing multiplier based on the initial hoarded knowledge
        const initialExtraKnowledge = Math.max(knowledge - knowledgeGeneratedIn2Hours, 0);
        const initialDiminishingMultiplier = Math.max(0.05, 0.95 ** (initialExtraKnowledge / knowledgeGeneratedIn2Hours));

        // Calculate the knowledge generation for the current state
        const initialKnowledgeGenerated = baseKnowledgePerSecond * initialDiminishingMultiplier * elapsedSeconds;

        // If the player hoards more knowledge, we adjust the multiplier accordingly for the remainder
        const finalExtraKnowledge = Math.max((knowledge + initialKnowledgeGenerated) - knowledgeGeneratedIn2Hours, 0);
        const finalDiminishingMultiplier = Math.max(0.05, 0.95 ** (finalExtraKnowledge / knowledgeGeneratedIn2Hours));

        // Calculate the average diminishing multiplier over the elapsed time
        const averageDiminishingMultiplier = (initialDiminishingMultiplier + finalDiminishingMultiplier) / 2;

        // Calculate total knowledge generated considering the average diminishing multiplier
        knowledge += baseKnowledgePerSecond * averageDiminishingMultiplier * elapsedSeconds;
    }

    const basePowerPerSecond = calculateBasePower();

    if (basePowerPerSecond > 0) {

        const powerGeneratedIn2Hours = basePowerPerSecond * 2 * 3600;  // Power generated in 2 hours (2 * 3600 seconds)

        // Calculate the current diminishing multiplier based on the initial hoarded power
        const initialExtraPower = Math.max(power - powerGeneratedIn2Hours, 0);
        const initialDiminishingMultiplier = Math.max(0.05, 0.95 ** (initialExtraPower / powerGeneratedIn2Hours));

        // Calculate the power generation for the current state
        const initialPowerGenerated = basePowerPerSecond * initialDiminishingMultiplier * elapsedSeconds;

        // If the player hoards more power, we adjust the multiplier accordingly for the remainder
        const finalExtraPower = Math.max((power + initialPowerGenerated) - powerGeneratedIn2Hours, 0);
        const finalDiminishingMultiplier = Math.max(0.05, 0.95 ** (finalExtraPower / powerGeneratedIn2Hours));

        // Calculate the average diminishing multiplier over the elapsed time
        const averageDiminishingMultiplier = (initialDiminishingMultiplier + finalDiminishingMultiplier) / 2;

        // Calculate total power generated considering the average diminishing multiplier
        power += basePowerPerSecond * averageDiminishingMultiplier * elapsedSeconds;

    }

}

// Function to encode a name for safe usage in URLs or storage
function encodeName(name) {
    return encodeURIComponent(name);
}

// Function to decode an encoded name back to its original form
function decodeName(encodedName) {
    return decodeURIComponent(encodedName);
}

let isFightInProgress = false; // Flag to prevent multiple fight triggers

// Function to handle the purchase of an upgrade
async function buyUpgrade(encodedUpgradeName, callUpdatesAfterBuying = true) {
    // If a fight is in progress, don't allow buying another upgrade
    if (isFightInProgress) return;

    // Decode the upgrade name
    const upgradeName = decodeName(encodedUpgradeName);
    // Find the upgrade object by its name in the available upgrades list
    const upgrade = availableUpgrades.find(up => up.name === upgradeName);

    // console.log(`buyUpgrade(${upgradeName})`);
    // If the upgrade is not found, log an error and return
    if (!upgrade) {
        console.error(`Upgrade not found: ${upgradeName}`);
        return;
    }

    // Destructure the upgrade object to get its properties
    const { cost, earnings, img, name, message, miniPrestigeMultiplier, isFight } = upgrade;

    // Check if the player has enough resources to purchase the upgrade
    if (isAffordable(cost)) {
        // Deduct the cost from the player's resources
        copium -= cost.copium || 0;
        delusion -= cost.delusion || 0;
        yachtMoney -= cost.yachtMoney || 0;
        trollPoints -= cost.trollPoints || 0;
        hopium -= cost.hopium || 0;
        knowledge -= cost.knowledge || 0;
        power -= cost.power || 0;
        serenity -= cost.serenity || 0;

        // Special case for the "Antimatter Dimension" upgrade
        if (isFight) {
            isFightInProgress = true; // Set the flag to prevent multiple fight triggers

            const fightResult = await startFightGame(name, img);
            isFightInProgress = false; // Reset the flag after the fight ends

            if (!fightResult) {
                showMessageModal('You Lost', `Defeat isn’t the end, ${name} just tested your limits. Get back up and come back stronger!`);
                saveGameState();
                return;
            }
        }

        // Increase the per second earnings for each resource, apply God Mode multiplier if applicable
        const multiplier = (upgrade.isGodMode && upgrade.isPUGodMode) ? 100 :
            (upgrade.isGodMode || upgrade.isPUGodMode) ? 10 : 1;
        copiumPerSecond += (earnings.copiumPerSecond || 0) * multiplier;
        yachtMoneyPerSecond += (earnings.yachtMoneyPerSecond || 0) * multiplier;
        trollPointsPerSecond += (earnings.trollPointsPerSecond || 0) * multiplier;
        hopiumPerSecond += (earnings.hopiumPerSecond || 0) * multiplier;
        knowledgePerSecond += (earnings.knowledgePerSecond || 0) * multiplier;
        serenityPerSecond += (earnings.serenityPerSecond || 0) * multiplier;

        // Handle delusion per second based on the toggle state
        if (document.getElementById('toggleDelusionLabel').classList.contains('hidden')) {
            // If the toggleDelusion is hidden, add delusion per second normally
            delusionPerSecond += (earnings.delusionPerSecond || 0) * multiplier;
        } else {
            // If the toggleDelusion is not hidden, adjust delusion per second based on the toggle state
            const toggleDelusion = document.getElementById('toggleDelusion').checked;
            const delusionChange = Math.abs(earnings.delusionPerSecond || 0) * multiplier;
            delusionPerSecond += toggleDelusion ? delusionChange : -delusionChange;
        }

        // Add the purchased upgrade to the display
        addPurchasedUpgrade(img, name, earnings, upgrade.isGodMode, upgrade.isPUGodMode, upgrade.message, upgrade.isFight);
        // Remove the upgrade from the available upgrades list
        availableUpgrades.splice(availableUpgrades.indexOf(upgrade), 1);
        // Add the upgrade to the purchased upgrades list
        purchasedUpgrades.push(upgrade);

        // Special case for unlocking the "Cookie Clicker" upgrade
        if (name === "Cookie Clicker") {
            document.getElementById('cookieButton').style.display = 'block';
        }

        // Special case for unlocking the "Transcendence" upgrade
        if (name === "Transcendence") {
            unlockTranscendence();
        }

        // Check if the upgrade message has been shown before
        const messageShownUpgrades = JSON.parse(localStorage.getItem('messageShownUpgrades')) || [];
        const isFirstPurchase = !messageShownUpgrades.includes(name);

        // Show a message if the upgrade has one and it's the first purchase
        if (message && isFirstPurchase) {
            if (message.startsWith('imgs/modal_imgs/')) {
                showMessageModal(name, '', false, false, message);
            } else {
                showMessageModal(name, message);
            }
            messageShownUpgrades.push(name);
            localStorage.setItem('messageShownUpgrades', JSON.stringify(messageShownUpgrades));
        }

        // Special case for the "Antimatter Dimension" upgrade
        if (name === "Antimatter Dimensions") {
            unhideKnowledge();
        }

        // Special case for the "Still very stupid" upgrade
        if (name === "Complex Skill Trees") {
            showMessageModal('Sadly', "This marks the end of v0.864, but your journey is just getting started! The Hall of Power is only the beginning, with new challenges and excitement in every update. How are you enjoying the battles? Are they keeping you on your toes? Your feedback is key to shaping the game.<br><br>While you wait for the next update (just days away!), why not restart, try new tactics, and uncover hidden secrets? Share your thoughts on the battles and Hall of Power on Discord or through the feedback form. Let’s keep this adventure going!");
        }

        // Apply a mini prestige multiplier if the upgrade has one
        if (miniPrestigeMultiplier) {
            epsMultiplier *= miniPrestigeMultiplier;
        }

        if (callUpdatesAfterBuying) {
            // Update the upgrade list and display
            updateUpgradeList();
            updateMultipliersDisplay();
            updateEffectiveMultipliers();
            updateDisplay();
            // Save the game state
            saveGameState();
        }

    } else {
        const button = document.querySelector(`button[data-upgrade-name="${encodedUpgradeName}"]`);
        showStatusMessage(button, 'Insufficient resources to purchase this upgrade.', false, 1000);
    }
}




// Function to handle the purchase of multiple upgrades
function buyAllUpgrades(limit, pressedButton) {
    let purchasedCount = 0; // Initialize a counter for the purchased upgrades
    
    availableUpgrades.slice(0, limit).forEach(upgrade => {
        if (buyMarkersSkill) {
            const switchElement = JSON.parse(localStorage.getItem(`switchState-${upgrade.name}`));
            if (switchElement && isAffordable(upgrade.cost)) {
                buyUpgrade(encodeName(upgrade.name), false);
                purchasedCount++; // Increment counter when an upgrade is bought
            }
        } else {
            if (isAffordable(upgrade.cost)) {
                buyUpgrade(encodeName(upgrade.name), false);
                purchasedCount++; // Increment counter when an upgrade is bought
            }
        }
    });
    
    if (purchasedCount > 0) {
        updateUpgradeList();
        updateMultipliersDisplay();
        updateEffectiveMultipliers();
        updateDisplay();
        saveGameState();
        showStatusMessage(pressedButton, `Purchased ${purchasedCount} upgrade(s).`, true, timeout=1000);
    } else {
        showStatusMessage(pressedButton, 'No upgrades were purchased.', false, timeout=1000);
    }
}





// Function to format the cost or earnings of an upgrade for display
function formatCostOrEarnings(costOrEarnings, isGodMode = false, isPUGodMode = false) {
    // Abbreviations for resource per second values
    const abbreviations = {
        copiumPerSecond: '<b>C</b>PS',
        delusionPerSecond: '<b>D</b>PS',
        yachtMoneyPerSecond: '<b>YM</b>PS',
        trollPointsPerSecond: '<b>TP</b>PS',
        hopiumPerSecond: '<b>H</b>PS',
        knowledgePerSecond: '<b>K</b>PS',
        powerPerSecond: '<b>P</b>PS',
        serenityPerSecond: '<b>S</b>PS'
    };

    let result = '';
    // Iterate over each resource and its value in the costOrEarnings object
    for (const [resource, value] of Object.entries(costOrEarnings)) {
        // Only include non-zero values
        if (value !== 0) {
            // Get the display name using abbreviations or capitalize the resource name
            const displayName = abbreviations[resource] || resource.charAt(0).toUpperCase() + resource.slice(1);
            const adjustedValue = (isGodMode && isPUGodMode) ? value * 100 : 
                      (isGodMode || isPUGodMode) ? value * 10 : value;
            result += `<p>${displayName}: ${formatNumber(adjustedValue)}</p>`; // Format as HTML paragraph
        }
    }
    return result;
}


function addPurchasedUpgrade(img, name, earnings, isGodMode = false, isPUGodMode = false, message = null, isFight = false) {
    const purchasedList = document.getElementById('purchasedList');
    const upgradeElement = document.createElement('div');
    upgradeElement.classList.add('purchased-upgrade');

    if (isGodMode && isPUGodMode) {
        upgradeElement.classList.add('purchased-upgrade-double-godmode');
    } else if (isGodMode) {
        upgradeElement.classList.add('purchased-upgrade-godmode');
    } else if (isPUGodMode) {
        upgradeElement.classList.add('purchased-upgrade-pu-godmode');
    }

    upgradeElement.innerHTML = `
        <div class="upgrade-header">
            <label class="switch">
                <input type="checkbox" id="toggle-${name}" ${isFight ? 'disabled' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        <img src="${img}" alt="${name}" class="upgrade-image">
        <div>
            <p class="upgrade-name">${name}</p>
            <div class="upgrade-earnings">
                ${formatCostOrEarnings(earnings, isGodMode, isPUGodMode)}
            </div>
        </div>
    `;

    purchasedList.prepend(upgradeElement);

    const toggleSwitch = document.getElementById(`toggle-${name}`);

    if (toggleSwitch && !isFight) { // Only add event listeners if it's not a fight upgrade
        toggleSwitch.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        toggleSwitch.addEventListener('change', (event) => {
            localStorage.setItem(`switchState-${name}`, JSON.stringify(event.target.checked));
            console.log('Switch clicked')
        });
    }

    if (message) {
        upgradeElement.classList.add('clickable');
        upgradeElement.addEventListener('click', (event) => {
            if (event.target.closest('.switch')) {
                return; // Do nothing if the click originated from the switch
            }

            if (message.startsWith('imgs/modal_imgs/')) {
                showMessageModal(name, '', false, false, message);
            } else {
                showMessageModal(name, message);
            }
        });
    }

    if (buyMarkersSkill) {
        const savedSwitchState = JSON.parse(localStorage.getItem(`switchState-${name}`)) || false;
        if (toggleSwitch) {
            toggleSwitch.checked = savedSwitchState;
            toggleSwitch.parentElement.style.display = 'block';
        }
    } else {
        const switchElement = document.getElementById(`toggle-${name}`);
        if (switchElement) {
            switchElement.parentElement.style.display = 'none';
        }
    }
}








function enableAllBuyMarkers(firstUnlock=false) {

    purchasedUpgrades.forEach(upgrade => {
        const name = upgrade.name;

        // Load the switch state from local storage
        let savedSwitchState = true;
        if (!firstUnlock) { savedSwitchState = JSON.parse(localStorage.getItem(`switchState-${name}`)) || false;}
        const toggleSwitch = document.getElementById(`toggle-${name}`);
        if (toggleSwitch) {
            toggleSwitch.checked = savedSwitchState;
            toggleSwitch.parentElement.style.display = 'block'; // Make the switch visible


            if(!upgrade.isFight){
                // Add event listener for the switch
                toggleSwitch.addEventListener('change', (event) => {
                    const state = event.target.checked ? 'On' : 'Off';
                    console.log(`Switch for upgrade ${name} set to ${state}`);
                    // Save the switch state to local storage
                    localStorage.setItem(`switchState-${name}`, JSON.stringify(event.target.checked));
                });
            }


            toggleSwitch.addEventListener('click', (event) => {
                event.stopPropagation();
            });
        }
    });

}

function isAffordable(cost) {
    // Check if the upgrade is affordable based on current resources
    return  (cost.copium === 0 || copium >= cost.copium) &&
            (cost.delusion === 0 || delusion >= cost.delusion) &&
            (cost.yachtMoney === 0 || yachtMoney >= cost.yachtMoney) &&
            (cost.trollPoints === 0 || trollPoints >= cost.trollPoints) &&
            (cost.hopium === 0 || hopium >= cost.hopium) &&
            (cost.knowledge === 0 || knowledge >= cost.knowledge) &&
            (cost.power === 0 || power >= cost.power) &&
            (cost.serenity === 0 || serenity >= cost.serenity);
}

function autobuyUpgrades(){
    
    let topUpgrades = availableUpgrades.slice(0, 8);

    let upgradeBought = false;
    topUpgrades.forEach(upgrade => {
        if(isAffordable(upgrade.cost) && JSON.parse(localStorage.getItem(`switchState-${upgrade.name}`))){
            buyUpgrade(encodeName(upgrade.name), false);
            upgradeBought = true;
        }
    })

    if (upgradeBought){
        updateUpgradeList();
        updateMultipliersDisplay();
        updateEffectiveMultipliers();
        updateDisplay();
        saveGameState();
    }

}


// List of upgrades that should trigger truncation
const keyUpgrades = ['The Finale', 'Agent Smith', 'Shao Kahn', 'Darth Vader', 'Isshin', 'Sauron','Kratos','Deadpool'];

// Function to update the upgrade list display
function updateUpgradeList() {
    // Limit the display to the top 8 upgrades
    let topUpgrades = availableUpgrades.slice(0, 8);

    // Find the first occurrence of any key upgrade in the list
    const truncateIndex = topUpgrades.findIndex(upgrade => keyUpgrades.includes(upgrade.name));

    // Truncate the list if any key upgrade is found
    if (truncateIndex !== -1) {
        topUpgrades = topUpgrades.slice(0, truncateIndex + 1);
    }

    const upgradeList = document.getElementById('upgradeList');
    upgradeList.innerHTML = ''; // Clear the current upgrade list


    // Create and append upgrade elements to the upgrade list
    topUpgrades.forEach(upgrade => {
        const encodedName = encodeName(upgrade.name);
        const upgradeElement = document.createElement('div');
        upgradeElement.classList.add('upgrade');
        upgradeElement.innerHTML = `
            <button data-upgrade-name="${encodedName}">${upgrade.name}</button>
            <div class="upgrade-cost">
                ${formatCostOrEarnings(upgrade.cost)}
            </div>
        `;
        upgradeList.appendChild(upgradeElement); // Append the upgrade element to the list
    });

    // Attach event listeners to the new upgrade buttons
    document.querySelectorAll('[data-upgrade-name]').forEach(button => {
        button.addEventListener('click', () => {
            const encodedName = button.getAttribute('data-upgrade-name');
            buyUpgrade(encodedName); // Handle the upgrade purchase
            hideTooltip();
        });
    });

    // Update the upgrade buttons to highlight affordable ones
    updateUpgradeButtons();
}

// Function to handle touch and mouse events for tooltips
function attachTooltipEvents(button, upgrade) {
    const showTooltipEvent = (event) => {
        event.preventDefault(); // Prevent default behavior (like text selection)
        showTooltip(event, upgrade.earnings, upgrade.isGodMode, upgrade.isPUGodMode, upgrade.hoverOverwrite);
    };
    const hideTooltipEvent = (event) => {
        event.preventDefault(); // Prevent default behavior (like text selection)
        hideTooltip();
    };
    const moveTooltipEvent = (event) => {
        event.preventDefault(); // Prevent default behavior (like text selection)
        const tooltip = document.getElementById('upgradeTooltip');
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    };

    button.addEventListener('mouseover', showTooltipEvent);
    button.addEventListener('mousemove', moveTooltipEvent);
    button.addEventListener('mouseout', hideTooltipEvent);
    button.addEventListener('touchstart', (event) => {
        showTooltipEvent(event);
        button.touchStartX = event.touches[0].clientX;
        button.touchStartY = event.touches[0].clientY;
    });
    button.addEventListener('touchmove', moveTooltipEvent);
    button.addEventListener('touchend', (event) => {
        hideTooltip();
        const touchEndX = event.changedTouches[0].clientX;
        const touchEndY = event.changedTouches[0].clientY;
        const rect = button.getBoundingClientRect();
        if (touchEndX >= rect.left && touchEndX <= rect.right && touchEndY >= rect.top && touchEndY <= rect.bottom) {
            button.click(); // Simulate a click event if touchend is within the button
        }
    });
}

// Function to update the appearance of upgrade buttons based on affordability
function updateUpgradeButtons() {
    let foundAffordableUpgrade = false;
    let topUpgrades = availableUpgrades.slice(0, 8);
    // Update each available upgrade button
    topUpgrades.forEach(upgrade => {
        const encodedName = encodeName(upgrade.name);
        const button = document.querySelector(`button[data-upgrade-name="${encodedName}"]`);
        if (button) {
            // Check if the upgrade is affordable based on current resources
            if (isAffordable(upgrade.cost)) {
                foundAffordableUpgrade = true;
                if (upgrade.isPUGodMode && upgrade.isGodMode) {
                    button.classList.add('affordable-double-godmode');
                    button.classList.remove('affordable', 'affordable-godmode', 'affordable-pu-godmode');
                } else if (upgrade.isPUGodMode) {
                    button.classList.add('affordable-pu-godmode');
                    button.classList.remove('affordable', 'affordable-godmode', 'affordable-double-godmode');
                } else if (upgrade.isGodMode) {
                    button.classList.add('affordable-godmode');
                    button.classList.remove('affordable', 'affordable-pu-godmode', 'affordable-double-godmode');
                } else {
                    button.classList.add('affordable');
                    button.classList.remove('affordable-godmode', 'affordable-pu-godmode', 'affordable-double-godmode');
                }
            } else {
                button.classList.remove('affordable', 'affordable-godmode', 'affordable-pu-godmode', 'affordable-double-godmode');
            }
            

            // Attach event listeners for tooltips
            attachTooltipEvents(button, upgrade);
        }
    });

    // Update buy buttons based on affordable upgrades
    const buySeenButton = document.getElementById('buySeenButton');
    const buyMaxButton = document.getElementById('buyMaxButton');
    if (foundAffordableUpgrade) {
        buySeenButton.classList.add('affordable');
        buyMaxButton.classList.add('affordable');
    } else {
        buySeenButton.classList.remove('affordable');
        buyMaxButton.classList.remove('affordable');
    }
}

// Attach tooltip and touch events for buy buttons
function initializeBuyButtons() {
    
    document.getElementById('buySeenButton').classList.remove('hidden');
    document.getElementById('buyMaxButton').classList.remove('hidden');

    const buySeenButton = document.getElementById('buySeenButton');
    const buyMaxButton = document.getElementById('buyMaxButton');

    if (!buySeenButton.listenersAttached) {
        attachTooltipEvents(buySeenButton, {
            name: "Buy Seen",
            earnings: null,
            isGodMode: false,
            isPUGodMode: false,
            hoverOverwrite: "Purchase all the 8 visible upgrades (S)"
        });
        buySeenButton.listenersAttached = true;
    }
    if (!buyMaxButton.listenersAttached) {
        attachTooltipEvents(buyMaxButton, {
            name: "Buy All",
            earnings: null,
            isGodMode: false,
            isPUGodMode: false,
            hoverOverwrite: "Purchase as many upgrade as you can afford (M)"
        });
        buyMaxButton.listenersAttached = true;
    }
}



// Developer mode multipliers
let devMultiplier = 1;

// Function to toggle developer mode multipliers
function toggleDevMultiplier(factor) {
    if (devMultiplier > 1) {
        devMultiplier = 1; // Reset to normal if already set to the factor
    } else {
        devMultiplier = factor; // Set to the new factor
    }
    updateMultipliersDisplay();
    updateEffectiveMultipliers();
    updateDisplay(); // Update the display to reflect the changes
}

// Function to ascend and select a random upgrade to set to godmode
async function devAscend() {
    const top100AvailableUpgrades = availableUpgrades
        .slice(0, 200)
        .filter(up => !up.isGodMode);

        const nextUpgrade = top100AvailableUpgrades[0];
        if (nextUpgrade) {
            nextUpgrade.isGodMode = true;
        godModeLevel += 1;
        godModeMultiplier = calculateGodModeMultiplier();
        epsMultiplier = calculateAscensionEpsMult();
        prestigeRequirement = calculateMinResource();
        restartGame(true);
        saveGameState();
        updateMultipliersDisplay();
        updateEffectiveMultipliers();
        updateDisplay();
    }
}

// Function to ascend and select a random upgrade to set to godmode
async function devTranscend() {
    const top100AvailableUpgrades = availableUpgrades
        .slice(0, 200)
        .filter(up => !up.isPUGodMode);

    const nextUpgrade = top100AvailableUpgrades[0];
    if (nextUpgrade) {
        nextUpgrade.isPUGodMode = true;
        puGodLevel += 1;
        puGodMultiplier = calculatePUGodModeMultiplier();
        epsMultiplier = calculateAscensionEpsMult();
        prestigeRequirement = calculateMinResource();
        restartGame(true);
        saveGameState();
        updateMultipliersDisplay();
        updateEffectiveMultipliers();
        updateDisplay();
    }
}

// Function to ascend and select a random upgrade to set to godmode
async function devCrunch() {

    bigCrunchPower = bigCrunchPower*1.1;
    bigCrunchMultiplier = calculateBigCrunchMultiplier();
    
    // Call restartGame with isPrestige flag set to true
    restartGame(true);

    // Save game state after prestige
    updateMultipliersDisplay();
    updateEffectiveMultipliers();
    updateDisplay();
    saveGameState();

}


// Function to increase prestige multiplier and calculate min resource
function devIncreasePrestigeMultiplier() {
    epsMultiplier = epsMultiplier * 1.25;
    prestigeRequirement = calculateMinResource();
    updateMultipliersDisplay();
    updateEffectiveMultipliers();
    updateDisplay();
}

// Add event listener for the key combinations
document.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.altKey) {
        switch (event.key) {
            case '!':
                toggleDevMultiplier(10);
                break;
            case '@':
                toggleDevMultiplier(100);
                break;
            case '#':
                toggleDevMultiplier(1000);
                break;
            case 'A':
                devAscend();
                break;
            case 'E':
                devTranscend();
                break;
            case 'C':
                devCrunch();
                break;
            case 'P':
                devIncreasePrestigeMultiplier();
                break;
        }
    }
    else {
        switch (event.key) {
            case 'm':
                if (multibuyUpgradesSkill){
                    buyAllUpgrades(100, document.getElementById('buyMaxButton'));
                }
                break;
            case 's':
                if (multibuyUpgradesSkill){
                    buyAllUpgrades(8, document.getElementById('buyMaxButton'));
                }
                break;
        }
    }
});


function showMessageModal(title, message, isConfirm = false, isUpgradeSelection = false, imageName = null, isTranscend = false, preventOutsideClose = false) {
    return new Promise((resolve, reject) => {
        const isRestartDialog = title === "Are You Sure You Want to Restart?" || title === "You Didn't Ask for It, But I'll Give You One More Try";

        modalQueue.push({ title, message, isConfirm, isUpgradeSelection, imageName, isTranscend, preventOutsideClose, resolve, reject, isRestartDialog });
        if (!isModalOpen) {
            displayNextModal();
        }
    });
}

function displayNextModal() {
    if (modalQueue.length === 0) {
        isModalOpen = false;
        return;
    }

    isModalOpen = true;
    const modal = document.getElementById('messageModal');
    const modalContent = modal.querySelector('.modal-content'); // Select the modal content box

    const { title, message, isConfirm, isUpgradeSelection, imageName, isTranscend, preventOutsideClose, resolve, isRestartDialog } = modalQueue.shift();

    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.getElementById('closeMessageModal');
    const modalConfirmButtons = document.getElementById('modalConfirmButtons');
    const modalConfirmButton = document.getElementById('modalConfirmButton');
    const modalCancelButton = document.getElementById('modalCancelButton');
    const modalCloseButton = document.getElementById('modalCloseButton');
    const ascendUpgradeSelection = document.getElementById('ascendUpgradeSelection');
    const ascendUpgradeList = document.getElementById('ascendUpgradeList');
    const gameInputSection = document.getElementById('gameInputSection');
    const gameInput = document.getElementById('gameInput');
    const submitGameInputButton = document.getElementById('submitGameInputButton');

    modalTitle.textContent = title || '';
    modalMessage.innerHTML = message || '';

    if (imageName) {
        modalImage.src = imageName;
        modalImage.style.display = 'block';
        // Adjust modal width based on image
        modalImage.onload = () => {
            if (!message) {
                const imageWidth = modalImage.offsetWidth;
                modalContent.style.width = `${imageWidth + 40}px`; // Add some padding
                modalContent.style.maxWidth = '100%'; // Ensure it fits within the viewport
            }
        };
    } else {
        modalImage.style.display = 'none';
    }

    modal.style.display = 'block';

    // Apply or remove the red background class
    if (isRestartDialog) {
        modalContent.classList.add('modal-restart');
    } else {
        modalContent.classList.remove('modal-restart');
    }

    const closeModal = (result) => {
        modal.style.display = 'none';
        document.removeEventListener('keydown', keydownHandler);
        window.removeEventListener('click', outsideClickHandler);
        displayNextModal();
        resolve(result);
    };

    const keydownHandler = (event) => {
        if (event.key === 'Escape') {
            closeModal(null);
        }
        if (event.key === 'Enter' && isConfirm) {
            if (isUpgradeSelection) {
                const selectedUpgrades = Array.from(ascendUpgradeList.querySelectorAll('.selected'));
                if (selectedUpgrades.length > 0) {
                    closeModal(selectedUpgrades.map(item => item.upgrade));
                }
            } else {
                closeModal(true);
            }
        } else if (event.key === 'Enter' && (message.includes('Enter the sequence:') || message.includes('What is '))) {
            closeModal(gameInput.value);
        }
    };

    document.addEventListener('keydown', keydownHandler);

    const outsideClickHandler = (event) => {
        if (!preventOutsideClose && event.target === modal) {
            closeModal(null);
        }
    };

    if (!preventOutsideClose) {
        window.addEventListener('click', outsideClickHandler);
    }

    // Handle the rest of the modal types without adding additional `window.onclick` listeners
    if (isConfirm && isUpgradeSelection) {
        modalCloseButton.style.display = 'none';
        modalConfirmButtons.style.display = 'flex';
        ascendUpgradeSelection.style.display = 'block';
        ascendUpgradeList.innerHTML = '';

        let selectedUpgrades = [];

        purchasedUpgrades.forEach((upgrade) => {
            const condition = isTranscend ? !upgrade.isPUGodMode : !upgrade.isGodMode;
            const maxSelectableUpgrades = isTranscend ? numPUAscensionUpgrades : numAscensionUpgrades;
            if (condition) {
                const upgradeItem = document.createElement('div');
                upgradeItem.className = 'ascend-upgrade-item';
                upgradeItem.textContent = upgrade.name;
                upgradeItem.upgrade = upgrade;
                if (upgrade.isGodMode) {
                    upgradeItem.classList.add('is-godmode');
                } else if (upgrade.isPUGodMode) {
                    upgradeItem.classList.add('is-pugodmode');
                }
                upgradeItem.onclick = () => {
                    if (upgradeItem.classList.contains('selected')) {
                        upgradeItem.classList.remove('selected');
                        selectedUpgrades = selectedUpgrades.filter(up => up !== upgrade);
                    } else {
                        if (selectedUpgrades.length < maxSelectableUpgrades) {
                            upgradeItem.classList.add('selected');
                            selectedUpgrades.push(upgrade);
                        } else {
                            showImmediateMessageModal(`Not so fast!`, `You can only select ${maxSelectableUpgrades} upgrade${maxSelectableUpgrades > 1 ? 's' : ''}.`);
                        }
                    }
                };

                attachTooltipEvents(upgradeItem, {
                    name: upgrade.name,
                    earnings: upgrade.earnings,
                    isGodMode: upgrade.isGodMode,
                    isPUGodMode: upgrade.isPUGodMode
                });

                ascendUpgradeList.appendChild(upgradeItem);
            }
        });

        modalConfirmButton.onclick = () => {
            if (selectedUpgrades.length > 0) {
                closeModal(selectedUpgrades);
            }
        };

        modalCancelButton.onclick = () => closeModal(null);
        closeButton.onclick = () => closeModal(null);
    } else if (isConfirm) {
        modalCloseButton.style.display = 'none';
        modalConfirmButtons.style.display = 'flex';
        ascendUpgradeSelection.style.display = 'none';
        gameInputSection.style.display = 'none';

        modalConfirmButton.onclick = () => closeModal(true);
        modalCancelButton.onclick = () => closeModal(false);

        closeButton.onclick = () => closeModal(false);
    } else if (message.includes('Enter the sequence:') || message.includes('What is ')) {
        modalCloseButton.style.display = 'none';
        modalConfirmButtons.style.display = 'none';
        ascendUpgradeSelection.style.display = 'none';
        gameInputSection.style.display = 'block';

        gameInput.value = '';
        gameInput.focus();
        submitGameInputButton.onclick = () => closeModal(gameInput.value);

        closeButton.onclick = () => closeModal(null);
    } else {
        modalCloseButton.style.display = 'block';
        modalConfirmButtons.style.display = 'none';
        ascendUpgradeSelection.style.display = 'none';
        gameInputSection.style.display = 'none';

        modalCloseButton.onclick = () => closeModal();
        closeButton.onclick = () => closeModal();
    }
}




function showImmediateMessageModal(title, message) {
    const immediateModal = document.getElementById('immediateMessageModal');
    const immediateModalTitle = document.getElementById('immediateModalTitle');
    const immediateModalMessage = document.getElementById('immediateModalMessage');
    const immediateModalCloseButton = document.getElementById('closeImmediateMessageModal');
    const immediateModalActionCloseButton = document.getElementById('immediateModalCloseButton');

    immediateModalTitle.textContent = title;
    immediateModalMessage.innerHTML = message;
    immediateModal.style.display = 'block';

    const closeImmediateModal = () => {
        immediateModal.style.display = 'none';
    };

    immediateModalCloseButton.onclick = closeImmediateModal;
    immediateModalActionCloseButton.onclick = closeImmediateModal;
    window.onclick = (event) => {
        if (event.target == immediateModal) {
            closeImmediateModal();
        }
    };
}



// Expose functions to the global scope for use in the HTML
window.prestige = prestige;
window.updateDisplay = updateDisplay;
window.updateUpgradeButtons = updateUpgradeButtons;
window.updateUpgradeList = updateUpgradeList;
window.collectResource = collectResource;
window.generateResources = generateResources;
window.buyUpgrade = buyUpgrade;

// Add event listeners after the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for the cookie button to collect all resources
    document.getElementById('cookieButton').addEventListener('click', cookieCollectAllResources);

    // Add event listeners for resource collection buttons
    document.getElementById('collectCopiumButton').addEventListener('click', () => { collectResource('copium'); });
    document.getElementById('collectDelusionButton').addEventListener('click', () => { collectResource('delusion'); });
    document.getElementById('collectYachtMoneyButton').addEventListener('click', () => { collectResource('yachtMoney'); });
    document.getElementById('collectTrollPointsButton').addEventListener('click', () => { collectResource('trollPoints'); });

    // Add event listeners for mini-game buttons
    document.getElementById('speedGame').addEventListener('click', () => { playMiniGame('speed'); });
    document.getElementById('memoryGame').addEventListener('click', () => { playMiniGame('memory'); });
    document.getElementById('mathGame').addEventListener('click', () => { playMiniGame('math'); });
    document.getElementById('luckGame').addEventListener('click', () => { playMiniGame('luck'); });

    // Add event listener for the trade button
    document.getElementById('tradeButton').addEventListener('click', () => { tradeResources(); });
    document.getElementById('tradeTenPercentButton').addEventListener('click', () => { tradeTenPercent(); });
    // Event listener to update the trade button text whenever the trade amount input changes
    document.getElementById('tradeAmount').addEventListener('input', updateTradeButtonText);
    
    // Add event listener for the restart buttons
    document.getElementById('restartButton').addEventListener('click', () => restartGame(false));
    document.getElementById('restartPrestige').addEventListener('click', () => restartPrestige());

    // Add event listener for the prestige button
    document.getElementById('prestigeButton').addEventListener('click', () => prestige());

    // Add event listener for the ascend button
    document.getElementById('ascendButton').addEventListener('click', ascend);

    // Add event listener for the transcend button
    document.getElementById('transcendButton').addEventListener('click', transcend);
    
    // Add event listener for the ascend button
    document.getElementById('bigCrunchButton').addEventListener('click', bigCrunch);

    // Add event listener for the buy all upgrades button
    document.getElementById('buySeenButton').addEventListener('click', function() { buyAllUpgrades(8, this);});
    document.getElementById('buyMaxButton').addEventListener('click', function() {buyAllUpgrades(100, this);});

    // Add this function to handle the toggle switch logic
    document.getElementById('toggleDelusion').addEventListener('change', function() {
        const isPositive = this.checked;
        if (isPositive) {
            delusionPerSecond = Math.abs(delusionPerSecond);
        } else {
            delusionPerSecond = -Math.abs(delusionPerSecond);
        }
        updateEffectiveMultipliers();
        updateDisplay(); // Update the display to reflect the change
    });

    // workaround because this needs to be called before initializing skills (to set correct format for skill costs), 
    // but loadGameState has to be called after (to enable previously bought skills)
    currentNumberFormat = JSON.parse(localStorage.getItem('currentNumberFormat')) || 'Mixed';
    document.getElementById('numberFormatButton').textContent = `Number Format: ${currentNumberFormat}`;

    // Library Skills -- has to happen before loadGameState!
    initializeSkills();

    // Power Skills
    initializePowerHallSkills();

    // Load the game state from local storage 
    loadGameState();

    updateMultipliersDisplay();
    // Initialize effective multipliers
    updateEffectiveMultipliers();
    // Unlock mini-games based on the current game state
    unlockMiniGames(); 
    // Set an interval to generate resources every second
    setInterval(generateResources, 500);
    // Update the list of available upgrades
    updateUpgradeList();
    // Update the display with the current game state
    updateDisplay();
    // Save the game state when the window is about to be unloaded
    window.addEventListener('beforeunload', saveGameState);
});
