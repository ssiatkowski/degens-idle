

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

let lovePoints = 0;

let numUnlockedAchievements = 0;
let achievementMultiplier = 1;

let cosmicGamekeeperMultiplier = 1;
let cosmicGamekeeperSkill = false;

let achievementBoostValue = 0.01;
let achievementHyperchargeSkill = false;

let numberFormatType = 0;

let embraceExtraLovePoints = 0;

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
let purchasedUpgrades = []; // Array for maintaining order and accessing properties
let purchasedUpgradesSet = new Set(); // Set for fast lookups
let availableUpgrades = [];

let godModeLevel = 0;
let godModeMultiplier = 1;
let puGodLevel = 0;
let puGodMultiplier = 1;
let bigCrunchPower = 1e-7;
let bigCrunchMultiplier = 1;

let totalMultiplier = 1;

let powerSurgeMultiplier = 1;

let copiumSurgeMultiplier = 1;
let delusionSurgeMultiplier = 1;
let yachtMoneySurgeMultiplier = 1;
let trollPointsSurgeMultiplier = 1;
let serenityBoostMultiplier = 1;
let powerInfusionMultiplier = 1;
let knowledgeInfusionMultiplier = 1;
let basicResourceBoost = 1;
let pulseOfAffectionSkill = false;
let pulseOfAffectionMult = 1;

let altruisticEmbraceSkill = false;
let masterOfBargainsSkill = false;

let currentNumberFormat = 'Mixed';

let firstTimePrestigeButtonAvailable = true; // Default to true, will be updated based on saved state

let modalQueue = [];
let isModalOpen = false;

let cookieClickMultiplier = 10;
let cookieAutoClicker = false;
let knowledgeGenerationSkill = false;
let prestigeBaseValue = 1.5;
let twoDimensionalAscensionSkill = false;
let linearAscensionSkill = false;
let multibuyUpgradesButtonsUnlocked = false;
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
let perfectGodModeSkill = false;

let serenityFlowSkill = false;
let perfectPUGodModeSkill = false;
let rewardingVictoriesSkill = false;
let rewardingMeditationsSkill = false;
let quantumFortressSkill = false;
let chronoMagnetizerSkill = false;
let fortifiedDefensesSkill = false;
let studyAcceleratorReduction = 0;
let deadpoolRevivesSkill = false;
let celestialPrecisionSkill = false;
let gamingAddictSkill = false;
let secondWaveAutomationSkill = false;
let steadyFocusSkill = false;
let masterOfElementsSkill = false;
let spaceContinuumStretchSkill = false;
let enlightenedPrestigeSkill = false;
let hopefulBeginningSkill = false;
let autoFightSkill = false;
let autoFightEnabled = false;
let infinitePrestigeSkill = false;
let crunchKnowledgeSkill = false;
let stellarMeditationSkill = false;
let oversurgedPower = 1;
let overcompressedPower = 1;
let hopefulSoftCapSkill = false;
let fertileScarcitySkill = false;
let inversePrestigeSkill = false;
let positiveMarkersSkill = false;
let tunneledAscensionSkill = false;
let illusionOfPowerSkill = false;
let earlyAccelerantSkill = false;
let earlyAccelerantMult = 1;

let serenityGainCopium = false;
let serenityGainDelusion = false;
let serenityGainYachtMoney = false;
let serenityGainTrollPoints = false;
let resonanceOfLoveSkill = false;
let hopiumTradeSkill = false;
let tranquilityOverdriveSkill = false;
let autoTradeHopiumIntervalId = null;
let equilibriumOfHopeSkill = false;
let temporalDragReduction = 1;
let lookPastDistractions = 0;
let faithFueledKnowledgeSkill = false;
let eventHorizonBoostSkill = false;

let autoBigCrunchThreshold = null
let beaconOfSevenSunsSkill = false;
let beaconOfSevenSunsMult = 1;

let serenityUnlocked = false;
let loveHallUnlocked = false;

let compressedBigCrunchMult = 1;

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
let nexusLifelineSkill = false;
let gravityWellSkill = false;
let temporalFluxSkill = false;
let primeImpactSkill = false;
let powerIsPowerSkill = false;
let voidStabilizerSkill = false;
let temporalGuardSkill = false;
let astralEdgeSkill = false;
let mysticReboundSkill = false;
let quantumBastionSkill = false;

let makeLoveNotWar = true;
let numBattleGimmicks = 0;

let nebulaOverdriveSkill = false;
let stellarHarvestSkill = false;
let celestialCollectorSkill = false;
let stellarHarvestMult = 1;
let stellarCookieSkill = false;

let stellarMeditationMult = 1;

let currentTimeouts = [];  // Array to store all active timeout IDs
let cookieIntervalId;

// Initialize switchStates to false for every upgrade
let switchStates = Object.fromEntries(upgrades.map(upgrade => [upgrade.name, null]));
let defaultBuyMarkerState = false;

let crunchTimer = 9999;
let embraceTimer = 9999;

let numLoveHallFreeRespecs; // Global variable for free respecs

const warpButton = document.getElementById('warpTimeButton');
let accumulatedWarpTime = 0;
let warpTimeMax = 60 * 60 * 6;
let warpTimeActive = false;
let warpTimeDuration = 0; // X minutes of warp
let warpTimeRemaining = 0; // Track remaining warp time
let warpTimeInterval = null;

let enableQuickMode = false;
let enableButtonAnimations = true;

// Global object to manage prevent event occuring at the same time
let eventProgression = {
    inProgress: false,
    startedBy: null
}

function calculateBaseKnowledge() {
    return knowledgePerSecond * totalMultiplier * (crunchKnowledgeSkill ? bigCrunchMultiplier**(2/3) : bigCrunchMultiplier**(1/2)) * knowledgeInfusionMultiplier * ((faithFueledKnowledgeSkill && hopium > 1e10) ? Math.log10(hopium)/10 : 1);
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
    let basePower = (moneyIsPowerTooSkill ?
        (Math.max(knowledge, 0) ** (1/3) / 1e12) * (1 + (Math.max(yachtMoney, 0) ** (1/30) / 100))
        : Math.max(knowledge, 0) ** (1/3) / 1e12)
        * powerSurgeMultiplier * devMultiplier * stellarHarvestMult * stellarMeditationMult * achievementMultiplier * powerInfusionMultiplier * cosmicGamekeeperMultiplier;

    if (powerIsPowerSkill) {
        basePower *= 1.1 ** (powerHallSkills.filter(skill => skill.unlocked).length);
    }

    return basePower;
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

    effectiveCopiumPerSecond = copiumPerSecond * totalMultiplier * amplifierMultiplier * copiumSurgeMultiplier * basicResourceBoost * beaconOfSevenSunsMult;
    effectiveDelusionPerSecond = delusionPerSecond * totalMultiplier * amplifierMultiplier * delusionSurgeMultiplier * basicResourceBoost;
    effectiveYachtMoneyPerSecond = yachtMoneyPerSecond * totalMultiplier * amplifierMultiplier * yachtMoneySurgeMultiplier * basicResourceBoost;
    effectiveTrollPointsPerSecond = trollPointsPerSecond * totalMultiplier * amplifierMultiplier * trollPointsSurgeMultiplier * basicResourceBoost;

    effectiveHopiumPerSecond = hopiumPerSecond * totalMultiplier * beaconOfSevenSunsMult;
    if (serenityFlowSkill && serenity > 1) {
        effectiveHopiumPerSecond *= Math.sqrt(serenity);
    }

    effectiveKnowledgePerSecond = calculateEffectiveKnowledge();

    if (powerUnlocked){
        effectivePowerPerSecond = calculateEffectivePower();
    }

    effectiveSerenityPerSecond = serenityPerSecond * achievementMultiplier * serenityBoostMultiplier * cosmicGamekeeperMultiplier;

    // Define an array of objects for the resources and their corresponding flags
    const serenityGainResources = [
        { gainFlag: serenityGainCopium, value: copium },
        { gainFlag: serenityGainDelusion, value: delusion },
        { gainFlag: serenityGainYachtMoney, value: yachtMoney },
        { gainFlag: serenityGainTrollPoints, value: trollPoints }
    ];

    // Loop through each resource and apply the multiplier if the gain flag is true
    serenityGainResources.forEach(resource => {
        if (resource.gainFlag) {
            effectiveSerenityPerSecond *= resource.value <= 0 ? 1 : Math.max(1, Math.log2(resource.value) / 33);
        }
    });

    if (resonanceOfLoveSkill){
        effectiveSerenityPerSecond *= Math.max(1, Math.log2(lovePoints));
    }

}

let cookieClicks = 0;

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
            knowledge += Math.max(cookieClickMultiplier * totalMultiplier, effectiveKnowledgePerSecond/4);
        }
    }
    else {
        copium += cookieClickMultiplier * totalMultiplier;
        delusion += cookieClickMultiplier * totalMultiplier;
        yachtMoney += cookieClickMultiplier * totalMultiplier;
        trollPoints += cookieClickMultiplier * totalMultiplier;
    }
    cookieClicks++;
    if(cookieClicks >= 500 && cookieClicks <= 505){
        unlockAchievement('Fatigued Finger');
    }
    updateDisplay();
}

// Initialize fidgetClicks as an object to track each resource
let fidgetClicks = {
    copium: false,
    delusion: false,
    yachtMoney: false,
    trollPoints: false
};

let collectClicks = {
    copium: 0,
    delusion: 0,
    yachtMoney: 0,
    trollPoints: 0
};

// Function to collect a specific resource and update the game state
function collectResource(resource) {
    // Increase the appropriate resource by the totalMultiplier
    if (resource === 'copium') copium += totalMultiplier;
    if (resource === 'delusion') delusion += totalMultiplier;
    if (resource === 'yachtMoney') yachtMoney += totalMultiplier;
    if (resource === 'trollPoints') trollPoints += totalMultiplier;

    // Track the resource click if cookieKnowledgeable is true
    if (cookieKnowledgeable) {
        fidgetClicks[resource] = true;
        if (fidgetClicks.copium && fidgetClicks.delusion && fidgetClicks.yachtMoney && fidgetClicks.trollPoints) {
            unlockAchievement('Fidget Clicks');
        }
    }

    collectClicks[resource]++;
    if (collectClicks.copium > 9 && collectClicks.delusion > 9 && collectClicks.yachtMoney > 9 && collectClicks.trollPoints > 9) {
        unlockAchievement('Collect Clicks');
    }

    // Update the display to reflect the new resource values
    updateDisplay();
}



// Function to load the game state from local storage
function loadGameState() {

    console.log('Loading game state...');

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

    lovePoints = parseFloat(localStorage.getItem('lovePoints')) || 0;

    // Retrieve and parse the prestige values from local storage, defaulting to 0 or 1 if not found
    prestiges = parseInt(localStorage.getItem('prestiges')) || 0;
    epsMultiplier = parseFloat(localStorage.getItem('epsMultiplier')) || 1;
    prestigeRequirement = parseFloat(localStorage.getItem('prestigeRequirement')) || 1000;

    // Retrieve and parse the big crunch values from local storage, defaulting to 1e-7 or 1 if not found
    bigCrunchPower = parseFloat(localStorage.getItem('bigCrunchPower')) || 1e-7;
    bigCrunchMultiplier = parseFloat(localStorage.getItem('bigCrunchMultiplier')) || 1;

    crunchTimer = parseFloat(localStorage.getItem('crunchTimer')) || 9999;
    embraceTimer = parseFloat(localStorage.getItem('embraceTimer')) || 9999;

    // Load the first time prestige button available flag
    firstTimePrestigeButtonAvailable = JSON.parse(localStorage.getItem('firstTimePrestigeButtonAvailable')) || true;

    transcendenceUnlocked = JSON.parse(localStorage.getItem('transcendenceUnlocked')) || false;
    if (transcendenceUnlocked) { document.getElementById('pu-god-display').style.display = 'block'; }

    // Workaround to allow loading 0
    autoPrestigeThreshold = !isNaN(parseFloat(localStorage.getItem('autoPrestigeThreshold'))) ? parseFloat(localStorage.getItem('autoPrestigeThreshold')) : null;
    autoAscendThreshold = !isNaN(parseFloat(localStorage.getItem('autoAscendThreshold'))) ? parseFloat(localStorage.getItem('autoAscendThreshold')) : null;
    autoTranscendThreshold = !isNaN(parseFloat(localStorage.getItem('autoTranscendThreshold'))) ? parseFloat(localStorage.getItem('autoTranscendThreshold')) : null;
    autoBigCrunchThreshold = !isNaN(parseFloat(localStorage.getItem('autoBigCrunchThreshold'))) ? parseFloat(localStorage.getItem('autoBigCrunchThreshold')) : null;

    // Retrieve quick mode
    enableQuickMode = localStorage.getItem('enableQuickMode') === 'true';

    // Retrieve animation preferences
    manageButtonAnimations(localStorage.getItem('enableButtonAnimations') == null ? true : localStorage.getItem('enableButtonAnimations') === 'true');

    defaultBuyMarkerState = localStorage.getItem('defaultBuyMarkerState') === 'true';

    // read multibuyUpgradesButtonsUnlocked from localstorage
    multibuyUpgradesButtonsUnlocked = JSON.parse(localStorage.getItem('multibuyUpgradesButtonsUnlocked')) || false;
    if (multibuyUpgradesButtonsUnlocked){
        initializeBuyButtons();
    }

    deadpoolRevives = parseFloat(localStorage.getItem('deadpoolRevives')) || 0;

    forgetfulnessCounter = parseFloat(localStorage.getItem('forgetfulnessCounter')) || 0;

    numMathPortals = parseFloat(localStorage.getItem('numMathPortals')) || 0;
    numSpeedTaps = parseFloat(localStorage.getItem('numSpeedTaps')) || 0;
    numCookedRabbits = parseFloat(localStorage.getItem('numCookedRabbits')) || 0;
    numMemorizedDots = parseFloat(localStorage.getItem('numMemorizedDots')) || 0;
    numUnluckyBoxes = parseFloat(localStorage.getItem('numUnluckyBoxes')) || 0;
    numLuckyBoxes = parseFloat(localStorage.getItem('numLuckyBoxes')) || 0;
    numSoftCaps = parseFloat(localStorage.getItem('numSoftCaps')) || 0;

    numLoveHallFreeRespecs = localStorage.getItem('numLoveHallFreeRespecs') !== null ? parseFloat(localStorage.getItem('numLoveHallFreeRespecs')) : 1;

    accumulatedWarpTime = localStorage.getItem('accumulatedWarpTime') !== null ? parseFloat(localStorage.getItem('accumulatedWarpTime')) : 0;
    warpTimeRemaining = localStorage.getItem('warpTimeRemaining') !== null ? parseFloat(localStorage.getItem('warpTimeRemaining')) : 0;
    // If there's any remaining warp time, continue warp
    if (warpTimeRemaining > 0) {
        resumeWarpTime(warpTimeRemaining);
    }

    consecutiveClicks = parseInt(localStorage.getItem('consecutiveClicks')) || 0;
    lastClickedBoxIndex = parseInt(localStorage.getItem('lastClickedBoxIndex')) || 0;

    serenityUnlocked = JSON.parse(localStorage.getItem('serenityUnlocked')) || false;
    document.getElementById('serenity-container').style.display = serenityUnlocked ? 'block' : 'none';

    loveHallUnlocked = JSON.parse(localStorage.getItem('loveHallUnlocked')) || false;
    // fix for some users experiencing error
    let loveHallButton = document.getElementById('loveHallButton');
    if (loveHallButton) {
        loveHallButton.style.display = loveHallUnlocked ? 'flex' : 'none';
    }

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

    // Calculate the god mode level and multiplier
    godModeLevel = upgrades.filter(upgrade => upgrade.isGodMode).length;
    godModeMultiplier = calculateGodModeMultiplier(godModeLevel);
    puGodLevel = upgrades.filter(upgrade => upgrade.isPUGodMode).length;
    puGodMultiplier = calculatePUGodModeMultiplier(puGodLevel);

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

    if (JSON.parse(localStorage.getItem('timeWarpButtonVisible'))) {
        warpButton.style.display = 'block';
    }

    const savedAchievements = JSON.parse(localStorage.getItem('achievements')) || [];
    if (Array.isArray(savedAchievements)) {
        savedAchievements.forEach(savedAchievement => {
            if (savedAchievement.isUnlocked) {
                unlockAchievement(savedAchievement.name, true); // Use the unlockAchievement function with duringLoad set to true
            }
        });
    }

    const savedLoveHallSkills = JSON.parse(localStorage.getItem('loveHallSkills')) || [];
    if (Array.isArray(savedLoveHallSkills)) {
        savedLoveHallSkills.forEach(savedSkill => {
            const skill = loveHallSkills.find(s => s.name === savedSkill.name);
            if (skill) {
                skill.unlocked = savedSkill.unlocked;
                if (skill.unlocked) {
                    unlockLoveHallSkill(skill, true); // Call with duringLoad set to true
                    console.log(`unlockLoveHallSkill(${skill.name})`);
                }
            }
        });
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

    // Retrieve and parse the purchased upgrades from local storage, defaulting to an empty array if not found
    const savedPurchasedUpgrades = JSON.parse(localStorage.getItem('purchasedUpgrades')) || [];

    // Map the saved purchased upgrade names to the actual upgrade objects
    purchasedUpgrades = savedPurchasedUpgrades.map(savedUpgradeName => upgrades.find(up => up.name === savedUpgradeName)).filter(Boolean);

    // Create a Set to track purchased upgrade names for fast lookups
    purchasedUpgradesSet = new Set(savedPurchasedUpgrades);

    // Filter out the available upgrades that have been purchased
    availableUpgrades = upgrades.filter(upgrade => !purchasedUpgradesSet.has(upgrade.name));

    upgrades.forEach(upgrade => {
        const storedState = JSON.parse(localStorage.getItem(`switchState-${upgrade.name}`));
        switchStates[upgrade.name] = storedState === null ? null : storedState; // Preserve true, false, or null
    });


    // Reapply the purchased upgrades and handle any special cases (e.g., "Cookie Clicker")
    purchasedUpgrades.forEach(upgrade => {
        if (upgrade) {
            addPurchasedUpgrade(upgrade.img, upgrade.name, upgrade.earnings, upgrade.isGodMode, upgrade.isPUGodMode, upgrade.message, upgrade.isFight, upgrade.isMeditation);
            if (upgrade.name === "Cookie Clicker") {
                document.getElementById('cookieButton').style.display = 'block';
            }
        }
    });

    // load the state of the createBackupOnImportCheckbox and set the checkbox per the value
    const createBackupOnImportCheckbox = document.getElementById('createBackupOnImportCheckbox');
    createBackupOnImportCheckbox.checked = JSON.parse(localStorage.getItem('createBackupOnImportCheckbox')) || false;

    updateTradeRatio();
    updateTradeButtonText();

    //if(buyMarkersSkill){ enableAllBuyMarkers() };

    if (stellarMeditationSkill) {
        stellarMeditationMult = calculateStellarMeditationMultiplier();
    }
    autoFightEnabled = JSON.parse(localStorage.getItem('autoFightEnabled')) || false;

    if (fertileScarcitySkill && purchasedUpgradesSet.has('Cosmic Drought')) {
        stellarHarvestMult = 250;
        updateMultipliersDisplay();
    }

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


    console.log('Saving game state...');

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

    localStorage.setItem('lovePoints', lovePoints);

    // Save the prestige values to local storage
    localStorage.setItem('prestiges', prestiges);
    localStorage.setItem('epsMultiplier', epsMultiplier);
    localStorage.setItem('prestigeRequirement', prestigeRequirement);

    // Save the big crunch values to local storage
    localStorage.setItem('bigCrunchPower', bigCrunchPower);
    localStorage.setItem('bigCrunchMultiplier', bigCrunchMultiplier);

    // Save the current time as the last interaction time
    localStorage.setItem('lastInteraction', Date.now());

    // Save current crunch timer
    localStorage.setItem('crunchTimer', crunchTimer);
    localStorage.setItem('embraceTimer', embraceTimer);

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
    localStorage.setItem('timeWarpButtonVisible', warpButton.style.display === 'block');
    localStorage.setItem('cookieClickMultiplier', cookieClickMultiplier);

    localStorage.setItem('transcendenceUnlocked', transcendenceUnlocked);

    localStorage.setItem('autoPrestigeThreshold', autoPrestigeThreshold);
    localStorage.setItem('autoAscendThreshold', autoAscendThreshold);
    localStorage.setItem('autoTranscendThreshold', autoTranscendThreshold);
    localStorage.setItem('autoBigCrunchThreshold', autoBigCrunchThreshold);

    localStorage.setItem('enableQuickMode', enableQuickMode);
    localStorage.setItem('enableButtonAnimations', enableButtonAnimations);

    localStorage.setItem('defaultBuyMarkerState', defaultBuyMarkerState);

    localStorage.setItem('deadpoolRevives', deadpoolRevives);

    localStorage.setItem('currentNumberFormat', JSON.stringify(currentNumberFormat));

    localStorage.setItem('numLoveHallFreeRespecs', numLoveHallFreeRespecs);

    localStorage.setItem('accumulatedWarpTime', accumulatedWarpTime);
    localStorage.setItem('warpTimeRemaining', warpTimeRemaining); // Save remaining warp time
 

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

    // Save unlocked love hall skills
    if (Array.isArray(loveHallSkills)) {
        const unlockedLoveHallSkills = loveHallSkills.filter(skill => skill.unlocked);
        localStorage.setItem('loveHallSkills', JSON.stringify(unlockedLoveHallSkills));
    }

    // Save unlocked achievements
    const unlockedAchievements = [];
    achievementsMap.forEach(achievement => {
        if (achievement.isUnlocked) {
            unlockedAchievements.push({ name: achievement.name, isUnlocked: achievement.isUnlocked });
        }
    });
    localStorage.setItem('achievements', JSON.stringify(unlockedAchievements));


    Object.keys(switchStates).forEach(upgradeName => {
        localStorage.setItem(`switchState-${upgradeName}`, JSON.stringify(switchStates[upgradeName]));
    });

    //save the state of createBackupOnImportCheckbox checkbox
    localStorage.setItem('createBackupOnImportCheckbox', document.getElementById('createBackupOnImportCheckbox').checked)

}




// Function to hide tooltip
function hideTooltip() {
    const tooltip = document.getElementById('upgradeTooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}

// Function to show tooltip
function showTooltip(event, earnings, isGodMode, isPUGodMode, isFight, isMeditation, hoverOverwrite) {
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
                    ${formatCostOrEarnings(earnings, isGodMode, isPUGodMode, isFight, isMeditation)} <!-- Formatted earnings -->
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
        unlockAchievement('Clarity');
        knowledgePerSecond = 0.000001
        effectiveKnowledgePerSecond = calculateEffectiveKnowledge();

        if (!knowledgeGenerationSkill) {
            showMessageModal('The Age of Knowledge', `As you cross the threshold of -1 trillion delusion, the dense fog of confusion and distorted thoughts begins to lift. A sense of clarity pierces through the haze, revealing a world beyond the familiar chaos. The swirling mists part to unveil a luminous realm, shimmering with the light of hidden truths. For the first time, you feel a profound shift within, as the once insurmountable delusion gives way to the dawning of true knowledge. This newfound awareness pulses with a quiet intensity, each revelation a stepping stone towards deeper understanding. Your journey through the labyrinth of the mind has led to this pivotal moment, where the pursuit of enlightenment begins. Your mind expands, absorbing the essence of ancient wisdom and universal secrets, setting the stage for a transformative quest that transcends the ordinary limits of perception.`, false, false);
        }
    }

    crunchTimer += 0.5;
    embraceTimer += 0.5;
    if (accumulatedWarpTime < warpTimeMax) accumulatedWarpTime += 0.5;

    updateDisplay();
}

async function restartPrestige(){

    const confirmTitle = "Are You Sure You Want to Restart this Prestige?"
    const confirmMessage = `<p>Hold on a second, brave player! You're about to reset your prestige, which will take you all the way back to the beginning (before buying any upgrades).</p>
                            <p>Your precious prestige progress? It’s going back to square one, but your multiplier will remain intact.</p>
                            <p><strong>Warning:</strong> This action will reset everything you've earned in this prestige cycle, except for your multiplier. Once you confirm, there's no undoing it. All those hard-earned upgrades? They’ll be gone!</p>
                            <p>If you’re certain this is the right move—maybe because your upgrade path took a wrong turn—then go ahead and hit that button. Otherwise, maybe pause and think it over. 😅</p>`;
    if (await showMessageModal(confirmTitle, confirmMessage, true, false)) {
        // Call restartGame with isPrestige flag set to true
        unlockAchievement('Do-Over');
        prestigeRequirement = calculateMinResource();
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

function clearAllTimeouts() {
    // Iterate over the array and clear each timeout
    currentTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
    // Clear the array after canceling all timeouts
    currentTimeouts = [];
}


async function restartGame(isPrestige = false, forceRestart = false, isInfiniteEmbrace = false) {
    const confirmTitle1 = "Are You Sure You Want to Restart?";
    const confirmMessage1 = `<p>Whoa there, brave soul! You're about to hit the big red button and restart your game. Are you sure you want to do this?</p>
                            <p>Think of all those hard-earned upgrades and epic moments... gone in a flash! But hey, who needs progress when you can start over, right?</p>
                            <p><strong>Warning:</strong> This action cannot be undone. Like, seriously, once you click it, there’s no going back. Poof! All gone!</p>
                            <p>If you're absolutely, positively, without a doubt sure, then go ahead and click that button. Otherwise, maybe just take a deep breath and step away from the keyboard for a second. 😅</p>`;
    const confirmTitle2 = "You Didn't Ask for It, But I'll Give You One More Try";
    const confirmMessage2 = `<p>This time, for real. So, you’re really, really sure you want to restart? Like, absolutely sure?</p>
                            <p>All your progress will be history. Forever. Gone. Like that sandwich you left in the fridge. Are you sure you’re ready for that kind of commitment?</p>
                            <p>This is your last chance to turn back! Once you click this button, there’s no going back. Just like trying to un-toast toast.</p>
                            <p>If you’re still certain, then hit the button below. Otherwise, maybe rethink this whole restarting thing. 😅</p>`;

    let restartConfirm = false;
    
    // Only show the confirmation dialogs if neither forceRestart nor isPrestige is true
    if (!forceRestart && !isPrestige) {
        // Only show the second confirmation if the first one is true
        if (await showMessageModal(confirmTitle1, confirmMessage1, true, false)) {
            restartConfirm = await showMessageModal(confirmTitle2, confirmMessage2, true, false);

            if (!restartConfirm) {
                unlockAchievement('Crisis Averted');
            }
        }
    }
    
    // If forceRestart, isPrestige, or both confirmations are true, proceed with reset
    if (forceRestart || isPrestige || restartConfirm) {
         // Reset all resources and earnings per second
        copium = 0;
        copiumPerSecond = 0;
        delusion = 0;
        delusionPerSecond = 0;
        yachtMoney = 0;
        yachtMoneyPerSecond = 0;
        trollPoints = 0;
        trollPointsPerSecond = 0;
        hopium = hopefulBeginningSkill ? 1000000 : 0;
        hopiumPerSecond = 0;
        knowledge = 0;
        knowledgePerSecond = 0;
        power = 0;
        powerPerSecond = 0;
        effectivePowerPerSecond = 0;
        serenity = 0;
        serenityPerSecond = 0;

        // Reset ascends and multipliers if it's a full restart or Infinite Embrace
        if (!isPrestige || isInfiniteEmbrace) {

            if (!isInfiniteEmbrace) {

                lovePoints = 0;

                // Reset love hall skills
                loveHallSkills.forEach(skill => {
                    skill.unlocked = false;
                });


                // Hide the cookie button
                document.getElementById('cookieButton').style.display = 'none';

                // love hall skill flags
                copiumSurgeMultiplier = 1;
                delusionSurgeMultiplier = 1;
                yachtMoneySurgeMultiplier = 1;
                trollPointsSurgeMultiplier = 1;
                serenityBoostMultiplier = 1;
                powerInfusionMultiplier = 1;
                knowledgeInfusionMultiplier = 1;
                basicResourceBoost = 1;
                pulseOfAffectionSkill = false;
                pulseOfAffectionMult = 1;

                altruisticEmbraceSkill = false;
                masterOfBargainsSkill = false;
                
                serenityFlowSkill = false;
                perfectPUGodModeSkill = false;
                rewardingVictoriesSkill = false;
                rewardingMeditationsSkill = false;
                quantumFortressSkill = false;
                chronoMagnetizerSkill = false;
                fortifiedDefensesSkill = false;
                studyAcceleratorReduction = 0;
                deadpoolRevivesSkill = false;
                celestialPrecisionSkill = false;
                gamingAddictSkill = false;
                secondWaveAutomationSkill = false;
                steadyFocusSkill = false;
                masterOfElementsSkill = false;
                spaceContinuumStretchSkill = false;
                enlightenedPrestigeSkill = false;
                hopefulBeginningSkill = false;
                hopium = 0;
                autoFightSkill = false;
                autoFightEnabled = false;
                infinitePrestigeSkill = false;
                crunchKnowledgeSkill = false;
                stellarMeditationSkill = false;
                oversurgedPower = 1;
                overcompressedPower = 1;
                hopefulSoftCapSkill = false;
                fertileScarcitySkill = false;
                inversePrestigeSkill = false;
                positiveMarkersSkill = false;
                tunneledAscensionSkill = false;
                illusionOfPowerSkill = false;
                earlyAccelerantSkill = false;
                earlyAccelerantMult = 1;

                serenityGainCopium = false;
                serenityGainDelusion = false;
                serenityGainYachtMoney = false;
                serenityGainTrollPoints = false;
                resonanceOfLoveSkill = false;
                hopiumTradeSkill = false;
                tranquilityOverdriveSkill = false;
                equilibriumOfHopeSkill = false;
                temporalDragReduction = 1;
                lookPastDistractions = 0;
                faithFueledKnowledgeSkill = false;
                eventHorizonBoostSkill = false;

                autoBigCrunchThreshold = null
                beaconOfSevenSunsSkill = false;
                beaconOfSevenSunsMult = 1;

                accumulatedWarpTime = 0;
                endWarpTime();
                warpButton.style.display = 'none';

                loveHallUnlocked = false;
                document.getElementById('loveHallButton').style.display = 'none';

                // Clear all intervals and reset progress bars and buttons
                clearAllIntervals();

                Object.keys(miniGameTimeouts).forEach(gameType => {
                    // Clear the cooldown start time from localStorage
                    localStorage.removeItem(`${gameType}CooldownStart`);

                    // Reset cooldown state and appearance
                    cooldowns[gameType] = false;
                    resetButtonAndProgress(gameType,);
                });

                // Reset achievements
                achievementsMap.forEach(achievement => {
                    achievement.isUnlocked = false;
                });
                renderAchievements(); // Re-render the achievements grid
                achievementMultiplier = 1;
                achievementBoostValue = 0.01;
                achievementHyperchargeSkill = false;

                numLoveHallFreeRespecs = 1;

                cosmicGamekeeperMultiplier = 1;
                cosmicGamekeeperSkill = false;

                embraceExtraLovePoints = 0;

                deadpoolRevives = 0;

                tongueTwisterState = 0;

                document.getElementById('buySeenButton').classList.add('hidden');
                document.getElementById('buyMaxButton').classList.add('hidden');
                document.getElementById('toggleHopiumLabel').classList.add('hidden');

                clearInterval(purchaseLibrarySkillsInterval);
                clearInterval(purchasePowerHallSkillsInterval);

                removeHopiumFromFromResource();

                localStorage.clear();
            }
            prestiges = 0;
            epsMultiplier = 1;
            prestigeRequirement = 1000;

            godModeLevel = 0;
            godModeMultiplier = 1;
            puGodLevel = 0;
            puGodMultiplier = 1;
            bigCrunchPower = 1e-7;
            bigCrunchMultiplier = 1;

            // Reset the isGodMode property for all upgrades
            upgrades.forEach(upgrade => {
                upgrade.isGodMode = false;
                upgrade.isPUGodMode = false;
            });

            document.getElementById('power-container').style.display = 'none';
            document.getElementById('serenity-container').style.display = 'none';

            resetLibrarySkills();
            resetPowerHallSkills();

            cookieClickMultiplier = 10;
            // Hide the delusion toggle switch
            document.getElementById('toggleDelusionLabel').classList.add('hidden');

            cookieAutoClicker = false;
            knowledgeGenerationSkill = false;
            prestigeBaseValue = 1.5;
            twoDimensionalAscensionSkill = false;
            linearAscensionSkill = false;
            multibuyUpgradesButtonsUnlocked = false;
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
            perfectGodModeSkill = false;

            if (!secondWaveAutomationSkill){
                autoPrestigeThreshold = null;
                autoAscendThreshold = null;
                autoTranscendThreshold = null;
                autobuyUpgradesSkill = false;
            }

            compressedBigCrunchMult = 1;

            upgradeAmplifierSkill = false;
            fasterAutobuyerskill = false;
            nexusLifelineSkill = false;
            temporalFluxSkill = false;
            primeImpactSkill = false;
            powerIsPowerSkill = false;
            nebulaOverdriveSkill = false;
            stellarHarvestSkill = false;
            celestialCollectorSkill = false;
            gravityWellSkill = false;
            voidStabilizerSkill = false;
            temporalGuardSkill = false;
            astralEdgeSkill = false;
            mysticReboundSkill = false;
            quantumBastionSkill = false;
            stellarCookieSkill = false;

            transcendenceUnlocked = false;

            if (!deadpoolRevivesSkill) {deadpoolRevives = 0;}

            playerAttackSpeed = 2;
            powerSurgeMultiplier = 1;

            playerMinDamageMult = 0.25;
            playerMaxDamageMult = 1.75;

            playerHealthMult = 1;

            powerUnlocked = false;
            document.getElementById('power-container').style.display = 'none';

            serenityUnlocked = false;
            document.getElementById('serenity-container').style.display = 'none';
            localStorage.setItem('serenityUnlocked', 'false');

            if (!positiveMarkersSkill) {
                switchStates = Object.fromEntries(upgrades.map(upgrade => [upgrade.name, null]));
                defaultBuyMarkerState = false;
            }

            document.getElementById('pu-god-display').style.display = 'none';
            document.getElementById('big-crunch-display').style.display = 'none';
            document.getElementById('powerHallButton').style.display = 'none';

            clearInterval(autobuyIntervalId);
            autobuyIntervalId = null;

            clearInterval(autoTradeHopiumIntervalId);
            autoTradeHopiumIntervalId = null;
        }

        clearAllTimeouts();
        clearInterval(cookieIntervalId)

        const cookieButtonVisible = JSON.parse(localStorage.getItem('cookieButtonVisible'));
        if (cookieButtonVisible && cookieAutoClicker) {
            const cookieButton = document.getElementById('cookieButton');

            // Add the spinning class to trigger the animation
            cookieButton.classList.add('spinning');

            cookieIntervalId = setInterval(() => {
                cookieCollectAllResources();
            }, 100); // 100 milliseconds = 0.1 seconds

            const thisCookieIntervalId = cookieIntervalId;

            // Stop the interval after 15 seconds
            const timeoutId = setTimeout(() => {
                if (thisCookieIntervalId === cookieIntervalId) {
                    clearInterval(thisCookieIntervalId);

                    // Remove the spinning class to stop the animation
                    cookieButton.classList.remove('spinning');
                }

            }, 15000); // 15000 milliseconds = 15 seconds

            currentTimeouts.push(timeoutId);
        }

        // Clear purchased upgrades
        purchasedUpgrades = [];
        purchasedUpgradesSet.clear();
        const purchasedList = document.getElementById('purchasedList');
        Events.wipe(purchasedList);
        purchasedList.innerHTML = '';

        // Restore all upgrades
        availableUpgrades = upgrades.slice(); // Reset available upgrades to the original state

        makeLoveNotWar = true;
        numBattleGimmicks = 0;

        stellarHarvestMult = 1;
        stellarMeditationMult = 1;
        updateMultipliersDisplay();

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
    } else if (fromResource === 'hopium') {
        tradeRatioDisplay.textContent = 'Trade ratio is 1:1'; // Hopium has a 1:1 trade ratio
    } else if (toResource === 'hopium') {
        tradeRatioDisplay.textContent = 'Only Copium can convert to Hopium';
    } else {
        if (improvedTradeRatio){
            if (masterOfBargainsSkill){
                tradeRatioDisplay.textContent = 'Trade ratio is 3:1';
            } else {
                tradeRatioDisplay.textContent = 'Trade ratio is 5:1';
            }
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

// Variables to track attempts to trade Delusion, Troll Points, and Yacht Money for Hopium
let attemptedDelusionTrade = false;
let attemptedTrollPointsTrade = false;
let attemptedYachtMoneyTrade = false;

// Function to handle trading resources with the new hopium logic
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

    if(tradeAmountInput == '100%'){
        unlockAchievement('All In');
    }

    // Calculate the trade amount using the parseFormattedNumber function
    const tradeAmount = parseFormattedNumber(tradeAmountInput, currentAmount);

    const tradeButton = document.getElementById('tradeButton');

    // Check if the same resource is selected for both from and to
    if (fromResource === toResource) {
        if (fromResource === 'hopium' && toResource === 'hopium') {
            unlockAchievement('Zero-Sum Game');
        }
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
    } else if (fromResource === 'hopium') {
        // Hopium has a 1:1 trade ratio with any other resource
        if (resourceAmount[fromResource] < tradeAmount) {
            showStatusMessage(tradeButton, `Not enough ${fromResource} to trade.`, false);
            return;
        }
        resourceAmount[fromResource] -= tradeAmount;
        resourceAmount[toResource] += tradeAmount; // 1:1 trade ratio for hopium
        showStatusMessage(tradeButton, `Traded ${formatNumber(tradeAmount)} ${fromResource} for ${formatNumber(tradeAmount)} ${toResource}.`, true);
    } else if (toResource === 'hopium') {
        showStatusMessage(tradeButton, "Only Copium can convert to Hopium.", false);
        // Track attempts to trade Delusion, Troll Points, and Yacht Money for Hopium
        if (fromResource === 'delusion') {
            attemptedDelusionTrade = true;
        } else if (fromResource === 'trollPoints') {
            attemptedTrollPointsTrade = true;
        } else if (fromResource === 'yachtMoney') {
            attemptedYachtMoneyTrade = true;
        }
        // Check if all three resources have been attempted for Hopium trade
        if (attemptedDelusionTrade && attemptedTrollPointsTrade && attemptedYachtMoneyTrade) {
            unlockAchievement('No Means No');
        }
        return;
    } else {
        // General trade case for other resources
        if (resourceAmount[fromResource] < tradeAmount) {
            showStatusMessage(tradeButton, `Not enough ${fromResource} to trade.`, false);
            return;
        }
        resourceAmount[fromResource] -= tradeAmount;
        if (improvedTradeRatio) {
            if (masterOfBargainsSkill){
                resourceAmount[toResource] += tradeAmount / 3;
                showStatusMessage(tradeButton, `Traded ${formatNumber(tradeAmount)} ${fromResource} for ${formatNumber(tradeAmount / 3)} ${toResource}.`, true);
            } else {
                resourceAmount[toResource] += tradeAmount / 5;
                showStatusMessage(tradeButton, `Traded ${formatNumber(tradeAmount)} ${fromResource} for ${formatNumber(tradeAmount / 5)} ${toResource}.`, true);
            }
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

    unlockAchievement('Trade Resources');

    // Update the display to reflect the new resource values
    updateDisplay();
}


// Function to trade 10% of the available resource
function tradeTenPercent() {
    tradeResources("10%"); // Pass "10%" to the tradeResources function
}

function autoTradeHopium() {
    if (isEventInProgress()) return;

    if (hopiumTradeSkill && equilibriumOfHopeSkill && autoTradeHopiumIntervalId === null) {
        autoTradeHopiumIntervalId = setInterval(() => {
            // Get 1% of the current hopium
            const hopiumTradeAmount = hopium * 0.01;

            // Check each resource and trade 1% hopium if it is lower
            if (copium < hopium) {
                copium += hopiumTradeAmount;
                hopium -= hopiumTradeAmount;
            }
            if (delusion < hopium) {
                delusion += hopiumTradeAmount;
                hopium -= hopiumTradeAmount;
            }
            if (yachtMoney < hopium) {
                yachtMoney += hopiumTradeAmount;
                hopium -= hopiumTradeAmount;
            }
            if (trollPoints < hopium) {
                trollPoints += hopiumTradeAmount;
                hopium -= hopiumTradeAmount;
            }

            // Update the display or any other relevant functions
            updateDisplay();

        }, 2000); // Every 2 seconds
    }
}


// const formatSignificant = new Intl.NumberFormat("en-US", { maximumFractionDigits: 3 });
const formatFraction = new Intl.NumberFormat("en-US", { maximumSignificantDigits: 4 });
const formatScientific = new Intl.NumberFormat("en-US", { maximumFractionDigits: 3, notation: "scientific" });
const formatEngineering = new Intl.NumberFormat("en-US", { maximumFractionDigits: 3, notation: "engineering" });

const PREFIXES = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc", "UDc", "DDc",
    "TDc", "QaDc", "QiDc", "SxDc", "SpDc", "ODc", "NDc", "Vg", "UVg", "DVg", "TVg",
    "QaVg", "QiVg", "SxVg", "SpVg", "OVg", "NVg", "Tg", "UTg", "DTg", "TTg", "QaTg",
    "QiTg", "SxTg", "SpTg", "OTg", "NTg", "Qd", "UQd", "DQd", "TQd", "QaQd", "QiQd",
    "SxQd", "SpQd", "OQd", "NQd", "Qt", "UQt", "DQt", "TQt", "QaQt", "QiQt", "SxQt",
    "SpQt", "OQt", "NQt", "Se", "USe", "DSe", "TSe", "QaSe", "QiSe", "SxSe", "SpSe",
    "OSe", "NSe", "St", "USt", "DSt", "TSt", "QaSt", "QiSt", "SxSt", "SpSt", "OSt",
    "NSt", "Og", "UOg", "DOg", "TOg", "QaOg", "QiOg", "SxOg", "SpOg", "OOg", "NOg",
    "Nn", "UNn", "DNn", "TNn", "QaNn", "QiNn", "SxNn", "SpNn", "ONn", "NNn", "Ce"];

function formatNumIntl(num, formatType = 0) {
    // fortmatTpe: 0 = suffixes, 1 = scientific, 2 = engineering
    const absNum = Math.abs(num);
    if (num === 0) return "0";
    else if (absNum < 1000 && (absNum > 0.001 || formatType == 0)) return formatFraction.format(num);
    else if (formatType == 1) return formatScientific.format(num).toLowerCase();
    else if (formatType == 2) return formatEngineering.format(num).toLowerCase();

    const exponent = Math.floor(Math.log10(absNum) / 3);
    const digits = formatFraction.format(num / 10 ** (3 * exponent));

    return digits + PREFIXES[exponent];
}

function formatNumber(num) {
    let formattedNum;

    switch(currentNumberFormat) {
        case 'Mixed':
            if(Math.abs(num) < 1e36){
                formattedNum = formatNumIntl(num, 0);
            } else {
                formattedNum = formatNumIntl(num, 1);
            }
            break;
        case 'Scientific':
            formattedNum = formatNumIntl(num, 1);
            break;
        case 'Suffixes':
            formattedNum = formatNumIntl(num, 0);
            break;
        case 'Engineering':
            formattedNum = formatNumIntl(num, 2);
            break;
    }

    // Return the formatted number, wrapped in a span tag with red color if the number is negative
    if (num < 0) {
        return `<span style="color: red;">${formattedNum}</span>`;
    } else {
        return formattedNum;
    }
}

function getOrdinalSuffix(n) {
    const s = ["th", "st", "nd", "rd"],
          v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
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
    updateTranscendButton();
    updateAscendButton();
    updateBigCrunchButton();
    updateInfiniteEmbraceButton();
    updateUpgradeButtons();
    updateNumUpgrades();
    updateWarpTime();
}

function updateMultipliersDisplay() {

    earlyAccelerantMult = earlyAccelerantSkill ? 1 + (9 * Math.pow(0.975, purchasedUpgrades.length)) : 1;

    totalMultiplier = epsMultiplier * godModeMultiplier * puGodMultiplier * bigCrunchMultiplier * achievementMultiplier * devMultiplier * stellarHarvestMult * stellarMeditationMult * cosmicGamekeeperMultiplier * earlyAccelerantMult

    document.getElementById('prestige-multiplier').textContent = `Prestige: x${formatNumber(epsMultiplier)} mult`;
    document.getElementById('god-mode-display').textContent = `God-Mode Level ${godModeLevel} (x${formatNumber(godModeMultiplier)} mult)`;
    document.getElementById('pu-god-display').textContent = `PU God Level ${puGodLevel} (x${formatNumber(puGodMultiplier)} mult)`;
    document.getElementById('big-crunch-display').textContent = `Big Crunch Power ${formatNumber(bigCrunchPower)} (x${formatNumber(bigCrunchMultiplier)} mult + KPSx${formatNumber(crunchKnowledgeSkill ? bigCrunchMultiplier**(2/3) : bigCrunchMultiplier**(1/2))})`;

    updateStellarHarvestDisplay();
}

function unhidePower() {
    document.getElementById('power-container').style.display = 'block';
    powerUnlocked = true;
}

function unhideSerenity() {
    document.getElementById('serenity-container').style.display = 'block';
    serenityUnlocked = true;
    localStorage.setItem('serenityUnlocked', 'true');
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

function unlockHallofLove() {
    unlockAchievement('Love Shop');
    document.getElementById('loveHallButton').style.display = 'flex';
    loveHallUnlocked = true;
    localStorage.setItem('loveHallUnlocked', 'true');
}

// Function to calculate the prestige multiplier based on the lowest of the first four resources
function calculatePrestigeMultiplier() {
    const minResource = inversePrestigeSkill
                        ? Math.max(copium, delusion, yachtMoney, trollPoints)
                        : Math.min(copium, delusion, yachtMoney, trollPoints);
    return prestigeBaseValue ** (Math.log10(minResource / 1000) + 1);
}

// Inverse of calculatePrestigeMultiplier
function calculateMinResource() {
    return Math.max(1000 * 10 ** ((Math.log10(epsMultiplier) / Math.log10(prestigeBaseValue)) - 1), 1000);
}

// Check if the player can prestige
function canPrestige() {
    const minResource = inversePrestigeSkill
                        ? Math.max(copium, delusion, yachtMoney, trollPoints)
                        : Math.min(copium, delusion, yachtMoney, trollPoints);
    return minResource > prestigeRequirement;
}

async function prestige(skipConfirms = false) {

    // Either skipConfirms
    skipConfirms |= enableQuickMode;
    if (canPrestige()  && !isEventInProgress()) {
        const newPrestigeMult = calculatePrestigeMultiplier();
        const newPrestigeReq = inversePrestigeSkill
                                ? Math.max(copium, delusion, yachtMoney, trollPoints)
                                : Math.min(copium, delusion, yachtMoney, trollPoints);
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
        if (confirmed && canPrestige()) {
            if ((newPrestigeMult / epsMultiplier) > 9000){
                unlockAchievement('Over 9000');
            }
            if (!skipConfirms) { unlockAchievement('First Prestige'); }
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
        if (infinitePrestigeSkill) {
            const newPrestigeMult = calculatePrestigeMultiplier();
            const newPrestigeReq = inversePrestigeSkill
                                    ? Math.max(copium, delusion, yachtMoney, trollPoints)
                                    : Math.min(copium, delusion, yachtMoney, trollPoints);

            epsMultiplier = newPrestigeMult;
            prestigeRequirement = newPrestigeReq;
            prestigeButton.style.display = 'none';
            updateMultipliersDisplay();
            updateEffectiveMultipliers();
        }
        else {
            if (firstTimePrestigeButtonAvailable && godModeLevel < 3 && bigCrunchMultiplier < 2 && lovePoints == 0) {
                showMessageModal('Prestige Unlocked: Rise Stronger!', 'Congratulations! You have unlocked the first of many prestige layers. This one is straightforward, but it represents something much greater: the beginning of a journey filled with deeper challenges and complexity.<br><br>Prestige isn’t just a reset—it’s a testament to your resilience, symbolizing the strength to rise again, stronger and wiser. While this first step may seem simple, future layers will add layers of strategy and depth that will truly test your skills.<br><br>By choosing Prestige, you’re not just starting over; you’re gaining a powerful multiplier that will enhance everything you do. Each click, each resource, and every upgrade will be boosted, setting the stage for even greater achievements.<br><br>Are you ready to embrace this opportunity? To rebuild with newfound strength and surpass your past progress? Prestige now, and begin your ascent to greatness once more!');
                firstTimePrestigeButtonAvailable = false; // Set the flag to false after showing the message
                saveGameState(); // Save the game state to persist the flag
            }
            const newMultiplier = calculatePrestigeMultiplier();
            prestigeButton.textContent = `PRESTIGE (x${formatNumber(newMultiplier / epsMultiplier)} MULT)`;
            prestigeButton.style.display = 'block';
            // Check if auto-prestige should be triggered
            if (autoPrestigeThreshold !== null && autoPrestigeThreshold >= 1 && (newMultiplier / epsMultiplier) > autoPrestigeThreshold  && !isEventInProgress()) {
                showPopupTooltip(`Auto-Prestiged for x${formatNumber(newMultiplier / epsMultiplier)}`, color='#DAA520')
                prestige(true); // Trigger auto-prestige
            }
        }
    } else {
        prestigeButton.style.display = 'none';
    }
}

function canAscend() {
    return purchasedUpgradesSet.has("Ascension") &&
           purchasedUpgrades.some(upgrade => !upgrade.isGodMode);
}

function canTranscend() {
    return purchasedUpgradesSet.has("Transcendence") &&
           purchasedUpgrades.some(upgrade => !upgrade.isPUGodMode);
}


function canBigCrunch() {
    return power * compressedBigCrunchMult > bigCrunchPower;
}

function canInfiniteEmbrace() {
    return loveHallUnlocked && serenity > 1000 && purchasedUpgradesSet.has("Yin and Yang");
}

function calculateGodModeMultiplier(gmLevlel = godModeLevel) {
    let productX = 1; // Initialize the product to 1 for the first element
    const diminishFactor = perfectGodModeSkill ? 0.992 : (lessDiminishingGodModeSkill ? 0.985 : 0.975);
    for (let i = 0; i < gmLevlel; i++) {
        let xi = 1 + 0.25 * Math.pow(diminishFactor, i); // Calculate xi
        productX *= xi; // Multiply the current xi to the cumulative product
    }
    return productX
}

function calculatePUGodModeMultiplier(gmLevlel = puGodLevel) {
    let productX = 1; // Initialize the product to 1 for the first element
    const diminishFactor = perfectPUGodModeSkill ? 0.992 : (lessDiminishingPUGodModeSkill ? 0.990 : 0.975)
    for (let i = 0; i < gmLevlel; i++) {
        let xi = 1 + 0.25 * Math.pow(diminishFactor, i); // Calculate xi
        productX *= xi; // Multiply the current xi to the cumulative product
    }
    return productX
}

function calculateBigCrunchMultiplier(bcPower = bigCrunchPower) {
    return Math.pow(eventHorizonBoostSkill ? 2.1: 2, Math.log10(bcPower / 1e-7));
}

function calculateLovePointsGained() {
    let baseLovePointsGained = Math.max(0, Math.log10(serenity) * pulseOfAffectionMult);

    if (altruisticEmbraceSkill){
        let meditationCount = purchasedUpgrades.filter(upgrade => upgrade.isMeditation && upgrade.name !== "Yin and Yang" && upgrade.name !== "Existentialism").length;
        baseLovePointsGained *= 1.25 ** meditationCount;
    }

    return baseLovePointsGained + embraceExtraLovePoints;
}


// Function to calculate the ascension eps multiplier
function calculateAscensionEpsMult() {
    if (linearAscensionSkill) {
        return Math.max(epsMultiplier / 2, 1);
    }

    const exponent = twoDimensionalAscensionSkill ? 2 / 3 : 1 / 3;
    return Math.max(epsMultiplier ** exponent, 1);
}


let ascendInProgress = false;
let tongueTwisterState = 0;

async function ascend(skipConfirms = false) {
    skipConfirms |= enableQuickMode;

    // If we can Ascend, and no other event is occuring and we successfully trigger a startEvent
    if (canAscend() && !isEventInProgress() && startEvent("ascend")) {
        let confirmed = true;
        let selectedUpgrades = null;
        if (!skipConfirms) {
            const upgradeText = numAscensionUpgrades > 1
                ? `select up to ${numAscensionUpgrades} upgrades to enhance and increase your God-Mode multiplier proportionally to how many upgrades you select`
                : "select an upgrade to enhance which will make its gains 10x stronger and also increase your God-Mode multiplier (global 1.25x stacking but diminishing multiplier)";
            selectedUpgrades = await showMessageModal(
                'God-Mode Ascension',
                `Raising your God-Mode level requires temporarily folding three dimensions in the space around you to a single point, which will unfortunately reduce your Prestige multiplier to its cube root.<br><br>
                You can ${upgradeText}.`,
                true,
                true
            );
        } else {
            // Auto Select up to numAscensionUpgrades or autoAscendThreshold
            selectedUpgrades = purchasedUpgrades.filter(upgrade => !upgrade.isGodMode).slice(0, autoAscendThreshold > 0 ? autoAscendThreshold : numAscensionUpgrades);
        }

        if (selectedUpgrades) {

            selectedUpgrades.forEach(upgrade => {
                upgrade.isGodMode = true;
            });

            godModeLevel = upgrades.filter(upgrade => upgrade.isGodMode).length;
            godModeMultiplier = calculateGodModeMultiplier(godModeLevel);

            epsMultiplier = calculateAscensionEpsMult();
            prestigeRequirement = calculateMinResource();

            let suppressAscendPopup = false;

            if (tongueTwisterState === 3 && selectedUpgrades.some(upgrade => upgrade.name === 'Ascension')) {
                unlockAchievement('Tongue Twister');
                suppressAscendPopup = true;
            }
            if (tongueTwisterState === 1 && selectedUpgrades.some(upgrade => upgrade.name === 'Transcendence')) {
                tongueTwisterState = 2;
            }

            if (!skipConfirms) {
                showMessageModal('Ascension Successful!', `<strong>You have entered God-Mode Level ${godModeLevel}.</strong><br> Your multiplier God-Mode is now x${formatNumber(godModeMultiplier)}, your prestige multiplier is x${formatNumber(epsMultiplier)}, and your chosen upgrades are 10x stronger.`);

                if (!achievementsMap.get('First Ascension').isUnlocked) {
                    unlockAchievement('First Ascension');
                    suppressAscendPopup = true;
                }
            }

            restartGame(true); // Use the existing restartGame function with prestige mode
            // Save game state after ascending
            saveGameState();

            if (!suppressAscendPopup) {
                showPopupTooltip(`Ascended ${selectedUpgrades.length} Upgrades`, color='#00008B')
            }

        }

        // Trigger stop event after process complete
        setTimeout(() => {
            stopEvent("ascend");
        }, 300);
    }
}


async function transcend(skipConfirms = false) {
    skipConfirms |= enableQuickMode;

    // If we can Transcend, and no other event is occuring and we successfully trigger a startEvent
    if (canTranscend() && !isEventInProgress() && startEvent("transcend")) {

        let selectedUpgrades = null;
        if (!skipConfirms) {
            const upgradeText = `select up to ${numPUAscensionUpgrades} upgrades to enhance and increase your Parallel Universe God-Mode multiplier accordingly`;
            selectedUpgrades = await showMessageModal(
                'Parallel Universe God-Mode Ascension',
                `Accessing this new dimension requires temporarily aligning your universe with a parallel one, which will unfortunately reduce your Prestige multiplier the same way that Ascending in your Universe would.<br><br>
                On the bright side, your Parallel Universe God-Mode multiplier will increase - and it works multiplicatively with your God-Mode multiplie!<br><br>
                Additionally, you can ${upgradeText}.`,
                true,
                true,
                false,
                true
            );
        } else {
            // Auto Select up to numPUAscensionUpgrades or autoTranscendThreshold
            selectedUpgrades = purchasedUpgrades.filter(upgrade => !upgrade.isPUGodMode).slice(0, autoTranscendThreshold > 0 ? autoTranscendThreshold : numPUAscensionUpgrades);
        }

        if (selectedUpgrades) {
            selectedUpgrades.forEach(upgrade => {
                upgrade.isPUGodMode = true;
                if(tunneledAscensionSkill){
                    upgrade.isGodMode = true;
                }
            });

            puGodLevel = upgrades.filter(upgrade => upgrade.isPUGodMode).length;
            puGodMultiplier = calculatePUGodModeMultiplier(puGodLevel);

            let suppressAscendPopup = false;

            if (tongueTwisterState === 0 && selectedUpgrades.some(upgrade => upgrade.name === 'Transcendence')) {
                tongueTwisterState = 1;
                if (tunneledAscensionSkill) {
                    tongueTwisterState = 2;
                }
            } else if (tongueTwisterState === 2 && selectedUpgrades.some(upgrade => upgrade.name === 'Ascension')) {
                tongueTwisterState = 3;
                if (tunneledAscensionSkill) {
                    unlockAchievement('Tongue Twister');
                    suppressAscendPopup = true;
                }
            }

            if(tunneledAscensionSkill){
                const gmLevelsGained = upgrades.filter(upgrade => upgrade.isGodMode).length - godModeLevel;
                if (gmLevelsGained == 5 && selectedUpgrades.length == 24){
                    unlockAchievement('Laerdal Tunnel');
                    suppressAscendPopup = true;
                }
                godModeLevel = upgrades.filter(upgrade => upgrade.isGodMode).length;
                godModeMultiplier = calculateGodModeMultiplier(godModeLevel);
            }

            epsMultiplier = calculateAscensionEpsMult();
            prestigeRequirement = calculateMinResource();

            if (!skipConfirms) {
                showMessageModal('Transcendence Successful!', `<strong>You have entered Parallel Universe God-Mode Level ${puGodLevel}.</strong><br> Your Parallel Universe God-Mode multiplier is now x${formatNumber(puGodMultiplier)}, your prestige multiplier is x${formatNumber(epsMultiplier)}, and your chosen upgrades are 10x stronger.`);

                unlockAchievement('Transcend');

                //if length of selectedupgrades is 1
                if (selectedUpgrades.length == 1) {
                    unlockAchievement('Slow and Steady');
                    suppressAscendPopup = true;
                }
            }

            restartGame(true); // Use the existing restartGame function with prestige mode
            // Save game state after transcending
            saveGameState();

            if(!suppressAscendPopup) {
                showPopupTooltip(`Transcended ${selectedUpgrades.length} Upgrades`, color='#702963')
            }

        }
        // Trigger stop event after process complete
        setTimeout(() => {
            stopEvent("transcend");
        }, 300);
    }
}



async function bigCrunch(skipConfirms = false) {
    skipConfirms |= enableQuickMode;

    // If we can BigCrunch, and no other event is occuring and we successfully trigger a startEvent
    if (canBigCrunch() && !isEventInProgress() && startEvent("bigcrunch")) {
        let confirmed = true;

        // If skipConfirms is false, show the confirmation modal
        if (!skipConfirms) {
            confirmed = await showMessageModal(
                'Big Crunch Confirmation',
                `Are you sure you want to prestige? You will reset all resources, prestiges, and god-mode levels, but your Big Crunch Multiplier will increase <strong>from ${formatNumber(bigCrunchMultiplier)} to ${formatNumber(calculateBigCrunchMultiplier(power * compressedBigCrunchMult))}</strong>.<br> Big crunch multiplier stacks with all your other multipliers, plus additionally affects your Knowledge generation! (Your Big Crunch Power will lock in at the current Power level)`,
                true
            );
        }

        if (confirmed && canBigCrunch()) {
            // Capture the screen and animate the compression
            await animateBigCrunchEffect();

            bigCrunchPower = power * compressedBigCrunchMult;
            if((calculateBigCrunchMultiplier() / bigCrunchMultiplier) < 1.1){
                unlockAchievement('The Tiniest Crunch');
            }
            bigCrunchMultiplier = calculateBigCrunchMultiplier();

            // Call restartGame with isPrestige flag set to true
            restartGame(true);

            epsMultiplier = 1;
            prestigeRequirement = 1000;
            godModeLevel = 0;
            godModeMultiplier = 1;
            puGodLevel = 0;
            puGodMultiplier = 1;

            if (crunchTimer < 120) {
                unlockAchievement('Fast Cruncher');
            }

            crunchTimer = 0;

            upgrades.forEach(upgrade => {
                upgrade.isGodMode = false;
                upgrade.isPUGodMode = false;
            });

            tongueTwisterState = 0;

            unlockAchievement('Big Crunch');
            if(compressedBigCrunchMult == 30){
                unlockAchievement('Condensed Crunch');
            }

            // Save game state after prestige
            updateMultipliersDisplay();
            saveGameState();

            // Animate the expansion back to full screen
            animateBigCrunchExpansion();
        }
        // Trigger stop event after process complete (greater delay to match the crunch animation)
        setTimeout(() => {
            stopEvent("bigcrunch");
        }, 2000);
    }
}

// Compression effect (Big Crunch)
async function animateBigCrunchEffect() {
    return new Promise((resolve) => {
        const body = document.body;
        body.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
        body.style.transform = "scale(0)"; // Shrink the screen to 0 size

        setTimeout(() => {
            resolve();  // Continue after the animation is complete
        }, 1000); // 1-second duration for the compression effect
    });
}

// Expansion effect after restart
function animateBigCrunchExpansion() {
    const body = document.body;
    body.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
    body.style.transform = "scale(1)"; // Restore to full size

    setTimeout(() => {
        // Clean up any additional effects or restart logic
        body.style.transition = "";
        body.style.transform = "";
        body.style.opacity = "";
    }, 1000); // 1-second duration for the expansion effect
}


// Compression effect (shrink the heart image)
async function animateInfiniteEmbraceEffect() {
    return new Promise((resolve) => {
        const heartMask = document.createElement('div');
        heartMask.classList.add('heart-mask');  // Add the heart mask class

        // Create the heart image element
        const heartImage = document.createElement('img');
        heartImage.src = './imgs/textures/embrace_heart.png';  // Ensure the path is correct
        heartMask.appendChild(heartImage);

        // Append the heart mask to the body
        document.body.appendChild(heartMask);

        // Calculate the ratio of width/height or height/width, whichever is larger
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const scaleFactor = Math.max(screenWidth / screenHeight, screenHeight / screenWidth);

        // Slightly increase the size based on the ratio
        const adjustedScale = 1.1 * scaleFactor;  // Increase by 10% for a slightly larger size

        // Shrink the heart after a brief delay
        setTimeout(() => {
            heartImage.style.transform = `scale(${adjustedScale})`;  // Shrink the heart to a dynamic size
        }, 50);  // Start shrinking after a small delay

        setTimeout(() => {
            resolve();  // Continue after the animation is complete
        }, 3000);  // 3-second duration for the shrinking effect
    });
}

// Expansion effect (reverse the animation and grow the heart image)
function animateInfiniteEmbraceExpansion() {
    const heartImage = document.querySelector('.heart-mask img');  // Select the heart image inside the mask

    if (heartImage) {
        heartImage.style.transform = 'scale(50)';  // Expand the heart back to its large size

        setTimeout(() => {
            // Remove the mask element after the expansion is complete
            heartImage.parentElement.remove();
            window.location.reload();
        }, 3000);  // 1.5-second duration for the expansion effect
    }
}




async function infiniteEmbrace(skipConfirms = false, lovePointsOverwrite = false) {
    skipConfirms |= enableQuickMode;

    // If we can Infinite Embrace, and no other event is occuring and we successfully trigger a startEvent
    if ((lovePointsOverwrite || canInfiniteEmbrace()) && !isEventInProgress() && startEvent("infiniteEmbrace")) {
        let confirmed = true;

        if (!skipConfirms) {
            confirmed = await showMessageModal(
                'Infinite Embrace Confirmation',
                `
                Infinite Embrace is a profound act of injecting more love into the multiverse, ensuring that your next incarnation will be more pleasant and harmonious. By embracing the universe with infinite love, you enhance the very fabric of existence, bringing more warmth and joy to every future cycle.
                <br><br>
                In order to complete this sacred ritual, all progress will be reset, including prestiges, god modes, big crunches, the Hall of Knowledge, and the Hall of Power. The only things that remain intact are your achievements and the everlasting Love Points you have gathered.
                <br><br>
                You will gain <strong>Love Points, increasing from ${formatNumber(lovePoints)} to ${formatNumber(lovePoints + calculateLovePointsGained())}</strong>. These Love Points can be spent at the Hall of Love, which will remain unlocked across all Infinite Embraces.
                <br><br>
                Remember: you never lose your Love Points. They will continue to accumulate across all cycles, fueling your journey through the multiverse.
                <br><br>
                Are you sure you want to activate Infinite Embrace and reset your progress to inject love into the multiverse?
                `,
                true
            );
        }

        if (confirmed) {
            // Capture the screen and animate the Infinite Embrace effect
            await animateInfiniteEmbraceEffect();

            if (!lovePointsOverwrite) {
                lovePoints += calculateLovePointsGained();
                if (serenity < 2000) {
                    unlockAchievement('Gentle Embrace');
                } else if (calculateLovePointsGained() > 25) {
                    unlockAchievement('Massive Embrace');
                }
                
                if (embraceTimer < 180) {
                    unlockAchievement('Fast Embracer');
                }
            }

            // Call restartGame with isPrestige flag set to true
            restartGame(true, false, true);


            embraceTimer = 0;

            unlockAchievement('Infinite Embrace');

            // Save game state after prestige
            numLoveHallFreeRespecs = localStorage.getItem('numLoveHallFreeRespecs') !== null ? parseFloat(localStorage.getItem('numLoveHallFreeRespecs')) : 1;
            updateMultipliersDisplay();
            saveGameState();

            // Animate the expansion back to full screen
            animateInfiniteEmbraceExpansion();
        }

        // Trigger stop event after process complete (even greater delay to match the embrace animation)
        setTimeout(() => {
            stopEvent("infiniteEmbrace");
        }, 3000);
    }
}

async function respecSkills() {
    loveHallSkills.forEach(skill => {
        if (skill.unlocked) {
            const pairSkill = loveHallSkills.find(s => s.pair === skill.pair && s.name !== skill.name);
            const levelMultiplier = getLevelMultiplier(skill.level);

            // If both skills in the pair are unlocked
            if (pairSkill && pairSkill.unlocked) {
                // Refund original cost for the first skill
                lovePoints += skill.originalCost;
                
                // Refund the increased cost for the paired skill (multiplied cost)
                lovePoints += pairSkill.originalCost * levelMultiplier;
                
                // Reset both skills
                pairSkill.unlocked = false; // Reset the paired skill
            } else {
                // Refund original cost if only this skill is unlocked
                lovePoints += skill.originalCost;
            }

            skill.unlocked = false; // Reset current skill
        }
    });

    if (numLoveHallFreeRespecs > 0) {
        numLoveHallFreeRespecs--;
        localStorage.setItem('numLoveHallFreeRespecs', numLoveHallFreeRespecs);
        await showMessageModal(
            'Respec Successful',
            `Skills reset! Love Points refunded. Free respecs remaining: ${numLoveHallFreeRespecs}.`,
            false
        );
    } else {
        // Charge 10% of total Love Points for respec
        const respecCost = lovePoints * 0.1;
        lovePoints -= respecCost;

        unlockAchievement('Pay to Win');

        await showMessageModal(
            'Respec Successful',
            `Skills reset with a cost of 10% Love Points. ${formatNumber(respecCost)} Love Points deducted.`,
            false
        );
    }
}





function updateAscendButton() {
    const ascendButton = document.getElementById('ascendButton');
    if (canAscend()) {
        ascendButton.style.display = 'block';
        // Check if autoAscendThreshold is set and not null

        if (autoAscendThreshold !== null && autoAscendThreshold !== 0) {
            // Count the number of purchased upgrades that do not have isGodMode
            const nonGodModeUpgrades = purchasedUpgrades.filter(upgrade => !upgrade.isGodMode).length;

            // If the number of non-GodMode upgrades meets or exceeds the threshold, auto-ascend
            if (nonGodModeUpgrades >= autoAscendThreshold) {
                ascend(true);
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
        if (autoTranscendThreshold !== null && autoTranscendThreshold !== 0) {
            // Count the number of purchased upgrades that do not have isPUGodMode
            const nonPUGodModeUpgrades = purchasedUpgrades.filter(upgrade => !upgrade.isPUGodMode).length;

            // If the number of non-PUGodMode upgrades meets or exceeds the threshold, auto-transcend
            if (nonPUGodModeUpgrades >= autoTranscendThreshold) {
                transcend(true);
            }
        }
    } else {
        transcendButton.style.display = 'none';
    }
}


function updateBigCrunchButton() {
    const bigCrunchButton = document.getElementById('bigCrunchButton');
    if (bigCrunchUnlocked && canBigCrunch()) {
        const newMultiplier = calculateBigCrunchMultiplier(power*compressedBigCrunchMult);
        bigCrunchButton.textContent = `BIG CRUNCH (x${formatNumber((newMultiplier / bigCrunchMultiplier))} MULT)`;
        bigCrunchButton.style.display = 'block';
        // Check if auto-crunch should be triggered
        if (autoBigCrunchThreshold !== null && autoBigCrunchThreshold >= 1 && (newMultiplier / bigCrunchMultiplier) > autoBigCrunchThreshold && !isEventInProgress()) {
            showPopupTooltip(`Auto-Crunched for x${formatNumber(newMultiplier / bigCrunchMultiplier)}`, color='#FF4433')
            bigCrunch(true); // Trigger auto-prestige
        }
    } else {
        bigCrunchButton.style.display = 'none';
    }
}

function updateInfiniteEmbraceButton() {
    const infiniteEmbraceButton = document.getElementById('infiniteEmbraceButton');
    if (canInfiniteEmbrace()) {
        infiniteEmbraceButton.textContent = `INFINITE EMBRACE (+${formatNumber(calculateLovePointsGained())} LP)`;
        infiniteEmbraceButton.style.display = 'block';
    } else {
        infiniteEmbraceButton.style.display = 'none';
    }
}

// Function to update Warp Time visuals and progress
function updateWarpTime() {
    if ((warpButton.style.display) == 'none') return;

    const overlayCircle = document.querySelector('.overlay-circle');

    // Calculate the progress in percentage of max warp time
    const progressPercentage = Math.min((accumulatedWarpTime / warpTimeMax) * 100, 100);

    // Convert the progress into degrees for the conic-gradient
    const progressDegree = (progressPercentage / 100) * 360;

    // Reverse the conic-gradient to reveal the image clockwise
    overlayCircle.style.backgroundImage = `conic-gradient(transparent ${progressDegree}deg, rgba(0, 0, 0, 0.9) ${progressDegree}deg 360deg)`;

    const warpTimeTooltip = document.querySelector('#warpTimeButton .cookieTooltip');
    if (warpTimeActive) {
        warpTimeTooltip.innerHTML = `${warpTimeRemaining>60 ? `${Math.floor(warpTimeRemaining / 60)} minute${warpTimeRemaining < 120 ? '' : 's'}<br>` : ''}${warpTimeRemaining % 60} second${warpTimeRemaining > 1 ? 's' : ''}`;
    } else if (accumulatedWarpTime < 3600) {
        warpTimeTooltip.innerHTML = `Time Warp<br>Not Ready`;
    } else {
        warpTimeTooltip.innerHTML = `Activate<br><strong>${Math.floor(accumulatedWarpTime / 3600)} minute${accumulatedWarpTime < 7200 ? '' : 's'}</strong> of<br>Warp Time`;
    }

    // Add/remove 'affordable' class based on accumulatedWarpTime
    if (accumulatedWarpTime >= 3600) {
        warpButton.classList.add('affordable');
        warpButton.classList.remove('not-affordable');
    } else {
        warpButton.classList.add('not-affordable');
        warpButton.classList.remove('affordable');
    }
}

// Warp Time Activation logic remains the same
warpButton.addEventListener("click", function () {

    console.log('Warp Button Clicked')
    if (warpTimeActive || accumulatedWarpTime < 3600) return;

    warpTimeActive = true;
    const fullHours = Math.floor(accumulatedWarpTime / 3600); // Only use full hours
    warpTimeRemaining = fullHours * 60; // Warp for X minutes
    accumulatedWarpTime -= fullHours * 3600; // Decrement full hour increments

    // Speed up resource generation for the warp time duration
    clearInterval(resourceGenerationInterval);
    resourceGenerationInterval = setInterval(generateResources, 50); // Faster generation
    warpTimeInterval = setInterval(updateWarpTimeRemaining, 1000); // Track remaining time every second

    // Disable button during warp
    warpButton.disabled = true;
    warpButton.classList.remove("affordable");
    warpButton.classList.add("spinning");
});

// Update warp time remaining and save state
function updateWarpTimeRemaining() {
    warpTimeRemaining--; // Decrease remaining time by 1 second

    // If warp time has ended, stop the interval
    if (warpTimeRemaining <= 0) {
        endWarpTime();
    } 
}

// End Warp Time logic
function endWarpTime() {
    clearInterval(warpTimeInterval);
    clearInterval(resourceGenerationInterval);

    // Restore the original resource generation interval
    resourceGenerationInterval = setInterval(generateResources, 500); // Back to normal speed
    warpTimeActive = false;
    warpTimeRemaining = 0; // Reset warp time remaining

    warpButton.classList.remove("spinning");

    // Re-enable the button after warp ends
    warpButton.disabled = false;

    // Update UI elements
    updateWarpTime();
}

// Resume Warp Time after reload
function resumeWarpTime(remainingTime) {
    warpTimeActive = true;
    warpTimeRemaining = remainingTime;

    // Speed up resource generation and start warp timer
    clearInterval(resourceGenerationInterval);
    resourceGenerationInterval = setInterval(generateResources, 50);
    warpTimeInterval = setInterval(updateWarpTimeRemaining, 1000);

    // Disable button during warp
    warpButton.disabled = true;
    warpButton.classList.remove("affordable");
    warpButton.classList.add("spinning");
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

    if (elapsedSeconds > 60 * 60 * 24){
        unlockAchievement('Take a Break');
    }

    crunchTimer += elapsedSeconds;
    embraceTimer += elapsedSeconds;
    accumulatedWarpTime = Math.min (accumulatedWarpTime + elapsedSeconds, warpTimeMax);

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

    if (powerUnlocked && basePowerPerSecond > 0) {

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

function calculateStellarMeditationMultiplier() {
    return 1.1 ** purchasedUpgrades.filter(upgrade => upgrade.isMeditation).length;
}


// Function to encode a name for safe usage in URLs or storage
function encodeName(name) {
    return encodeURIComponent(name);
}

// Function to decode an encoded name back to its original form
function decodeName(encodedName) {
    return decodeURIComponent(encodedName);
}

let forgetfulnessCounter = 0;

// Function to handle the purchase of an upgrade
async function buyUpgrade(encodedUpgradeName, callUpdatesAfterBuying = true, skipEventCheck = false) {
    // If a fight is in progress, don't allow buying another upgrade
    if (isEventInProgress() && !skipEventCheck) return;

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
    const { cost, earnings, img, name, message, miniPrestigeMultiplier, isFight, isMeditation } = upgrade;

    // Check if the player has enough resources to purchase the upgrade
    if (isAffordable(cost)) {
        // Deduct the cost from the player's resources
        copium -= cost.copium || 0;
        delusion -= cost.delusion || 0;
        yachtMoney -= cost.yachtMoney || 0;
        trollPoints -= cost.trollPoints || 0;
        hopium -= cost.hopium || 0;
        knowledge -= cost.knowledge || 0;
        power = (nebulaOverdriveSkill && !isFight && !isMeditation) ? power : power - cost.power || 0;
        serenity = (tranquilityOverdriveSkill && !isFight && !isMeditation) ? serenity : serenity - cost.serenity || 0;

        // Special case for the "Antimatter Dimension" upgrade
        if (isFight) {

            if (name === 'Vegeta' && !purchasedUpgradesSet.has("Cosmetic Surgery")) {
                if (autoFightConditionCheck(upgrade)){
                    unlockAchievement('Ugly by Choice')
                } else {
                    throttle(() => showMessageModal('Hmph', `After all your time and effort tracking down Vegeta, you finally confront him, only to hear, "Hmph, you're too ugly to fight," as he flies off without a second thought. Frustrated and defeated, you realize you might need to find another way to make yourself more visually impressive—something that even Vegeta can't ignore.`), 2000)();
                    forgetfulnessCounter++;
                    localStorage.setItem('forgetfulnessCounter', forgetfulnessCounter);
                    if (forgetfulnessCounter >= 15) {
                        unlockAchievement('Delusion Causes Forgetfulness');
                    }
                    return;
                }
            }

            let canManualFight = !(autoFightSkill && autoFightEnabled) || power < (illusionOfPowerSkill ? (upgrade.isGodMode && upgrade.isPUGodMode ? upgrade.autoBattlePower / 100 : (upgrade.isGodMode || upgrade.isPUGodMode ? upgrade.autoBattlePower / 10 : upgrade.autoBattlePower)) : upgrade.autoBattlePower);

            if (canManualFight && !isEventInProgress() && startEvent("bossfight")) {

                makeLoveNotWar = false;

                const fightResult = await startFightGame(name, img);
                stopEvent("bossfight"); // Reset the flag after the fight ends

                if (!fightResult) {
                    showMessageModal('You Lost', `Defeat isn’t the end, ${name} just tested your limits. Get back up and come back stronger!`);
                    saveGameState();
                    return;
                }
            }
        }

        if (isMeditation && !isEventInProgress() && startEvent("meditation")) {
            const meditationResult = await startMeditationGame(name, img);
            stopEvent("meditation"); // Reset the flag after the fight ends

            if (!meditationResult) {
                showMessageModal('You Lost', `Meditating on ${name} proved too challenging, and your concentration slipped. But deeper focus is within your grasp—return when your mind is at peace, and you'll surely overcome this challenge.`);
                saveGameState();
                return;
            }

            if (stellarMeditationSkill) {
                stellarMeditationMult *= 1.1;
            }
        }

        // Increase the per second earnings for each resource, apply God Mode multiplier if applicable
        const multiplier = (upgrade.isGodMode && upgrade.isPUGodMode) ? 100 :
            (upgrade.isGodMode || upgrade.isPUGodMode) ? 10 : 1;
        const battleMultiplier = ((upgrade.isFight && rewardingVictoriesSkill) || (upgrade.isMeditation && rewardingMeditationsSkill)) ? 1.4 : 1;
        copiumPerSecond += (earnings.copiumPerSecond || 0) * multiplier * battleMultiplier;
        yachtMoneyPerSecond += (earnings.yachtMoneyPerSecond || 0) * multiplier * battleMultiplier;
        trollPointsPerSecond += (earnings.trollPointsPerSecond || 0) * multiplier * battleMultiplier;
        knowledgePerSecond += (earnings.knowledgePerSecond || 0) * multiplier * battleMultiplier;
        serenityPerSecond += (earnings.serenityPerSecond || 0) * multiplier * battleMultiplier;

        // Handle delusion per second based on the toggle state
        if (document.getElementById('toggleDelusionLabel').classList.contains('hidden')) {
            // If the toggleDelusion is hidden, add delusion per second normally
            delusionPerSecond += (earnings.delusionPerSecond || 0) * multiplier * battleMultiplier;
        } else {
            // If the toggleDelusion is not hidden, adjust delusion per second based on the toggle state
            const toggleDelusion = document.getElementById('toggleDelusion').checked;
            const delusionChange = Math.abs(earnings.delusionPerSecond || 0) * multiplier * battleMultiplier;
            delusionPerSecond += toggleDelusion ? delusionChange : -delusionChange;
        }

        // Handle hopium per second based on the toggle state
        if (document.getElementById('toggleHopiumLabel').classList.contains('hidden')) {
            // If the toggleHopium is hidden, add hopium per second normally
            hopiumPerSecond += (earnings.hopiumPerSecond || 0) * multiplier * battleMultiplier;
        } else {
            // If the toggleHopium is not hidden, adjust hopium per second based on the toggle state
            const toggleHopium = document.getElementById('toggleHopium').checked;
            const hopiumChange = Math.abs(earnings.hopiumPerSecond || 0) * multiplier * battleMultiplier;
            hopiumPerSecond += toggleHopium ? hopiumChange : -hopiumChange;
        }

        // Add the purchased upgrade to the display
        addPurchasedUpgrade(img, name, earnings, upgrade.isGodMode, upgrade.isPUGodMode, upgrade.message, upgrade.isFight, upgrade.isMeditation);
        // Remove the upgrade from the available upgrades list
        availableUpgrades.splice(availableUpgrades.indexOf(upgrade), 1);

        // Add the upgrade to the purchased upgrades list
        purchasedUpgrades.push(upgrade); // Add to array for order and property access
        purchasedUpgradesSet.add(upgrade.name); // Add to set for fast lookups


        // Check if the upgrade has an associated achievement and unlock it
        if (upgrade.achievement) {
            unlockAchievement(upgrade.achievement);
        }

        // Special case for unlocking the "Cookie Clicker" upgrade
        if (name === "Cookie Clicker") {
            document.getElementById('cookieButton').style.display = 'block';
        }

        if (name === "Time Warp") {
            warpButton.style.display = 'block';
        }

        // Special case for unlocking the "Transcendence" upgrade
        if (name === "Transcendence") {
            unlockTranscendence();
        }

        // Special case for unlocking the "Sebo's Luck" upgrade
        if (name === "Sebo's Luck") {
            yachtMoney += 1e65;
        }

        if (name == "Cosmic Drought") {
            if (stellarCookieSkill) {
                clearInterval(cookieIntervalId)
                document.getElementById('cookieButton');
                cookieButton.classList.remove('spinning');
            }
            clearAllTimeouts();
            stellarHarvestMult = fertileScarcitySkill ? 250 : 1;
            updateMultipliersDisplay();
            unlockAchievement('Cosmic Drought');
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

        // if (name === 'Skepticism') {
        //     pass
        // }

        // Apply a mini prestige multiplier if the upgrade has one
        if (miniPrestigeMultiplier) {
            epsMultiplier *= miniPrestigeMultiplier;
        }

        if (name == 'Good Guy Sasuke') {
            if (!purchasedUpgradesSet.has("Cosmetic Surgery")) {
                unlockAchievement('Stay Ugly');
            }
        } else if (name == 'Channel inner Tyson') {
            if (!purchasedUpgradesSet.has('So what do I do here?')) {
                unlockAchievement('Going in Blind');
            }
        } else if (name == 'Job Application #3') {
            if (!purchasedUpgradesSet.has('Job Application') && !purchasedUpgradesSet.has('Job Application #2')) {
                unlockAchievement('Reject Rejection');
            }
        } else if (name == 'Soothing Realization') {
            if (!purchasedUpgradesSet.has('Cookie Clicker') && !purchasedUpgradesSet.has('NGU Idle') && !purchasedUpgradesSet.has('Melvor Idle') && !purchasedUpgradesSet.has('Antimatter Dimensions') && !purchasedUpgradesSet.has('Increlution')) {
                unlockAchievement('Degens Idle Purist');
            }
        } else if (name == 'Spend That Money') {
            if (!purchasedUpgradesSet.has("Sebo's Luck")) {
                unlockAchievement('Take Out a Loan');
            }
        } else if (name == 'Ok to be selfish?') {
            if (purchasedUpgrades[purchasedUpgrades.length - 2].name == 'Food + Cats = Profit?') {
                console.log('Found Cat');
                unlockAchievement('Feed the Cat');
            }
        } else if (name == 'Perfection doesn\'t exi...') {
            unhideSerenity();
            unlockAchievement('Serenity');
        }

        if (callUpdatesAfterBuying) {
            if (name == 'Degens Idle Dev') {
                if (!purchasedUpgradesSet.has("Hunt for Hussein")) {
                    unlockAchievement('Big Brain Move');
                }
            } else if (name == 'Vegeta') {
                if (delusion > 0 && hopium < 0) {
                    unlockAchievement('Raw Power');
                }
            } else if (name == 'Agent Smith') {
                if (power >= 1e11) {
                    unlockAchievement('Overkill Much?');
                }
            } else if (name == 'Love Shop') {
                unlockHallofLove();
            } else if (name == 'Training Dummy' && crunchTimer < 15.1) {
                unlockAchievement('Eager to Train');
            } else if (name == 'Hotkeys' && window.innerWidth <= 768 && autoFightSkill) {
                unlockAchievement('Hotkey Master');
            }

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
    if (!isEventInProgress() && startEvent("buyAllUpgrades")) {
        let purchasedCount = 0; // Initialize a counter for the purchased upgrades

        let topUpgrades = availableUpgrades.slice(0, limit);

        if(limit === 8 || !buyMarkersSkill){
            const truncateIndex = topUpgrades.findIndex(upgrade => upgrade.isKey);
            // Truncate the list if any key upgrade is found
            if (truncateIndex !== -1) {
                topUpgrades = topUpgrades.slice(0, truncateIndex + 1);
            }
        }

        let firstFightUpgrade = true;

        topUpgrades.forEach(upgrade => {
            if (buyMarkersSkill) {
                const isAffordableUpgrade = isAffordable(upgrade.cost);

                if (isAffordableUpgrade && autoFightConditionCheck(upgrade) && firstFightUpgrade) {
                    buyUpgrade(encodeName(upgrade.name), false, true);
                    purchasedCount++;
                    incrementStellarHarvest();
                    if(upgrade.name == 'Saitama' && makeLoveNotWar){
                        unlockAchievement('Make Love, Not War');
                    }
                }
                else if ((isAffordableUpgrade && switchStates[upgrade.name])) {
                    buyUpgrade(encodeName(upgrade.name), false, true);
                    purchasedCount++;
                }

            } else {
                if (isAffordable(upgrade.cost) && !upgrade.isFight && !upgrade.isMeditation) {
                    buyUpgrade(encodeName(upgrade.name), false, true);
                    purchasedCount++; // Increment counter when an upgrade is bought
                }
            }

            if (upgrade.isFight) {firstFightUpgrade = false;}

        });

        if (purchasedCount > 0) {
            updateUpgradeList();
            updateMultipliersDisplay();
            updateEffectiveMultipliers();
            updateDisplay();
            saveGameState();
            showStatusMessage(pressedButton, `Purchased ${purchasedCount} upgrade(s).`, true, timeout=1000);
        } else {
            showStatusMessage(pressedButton, 'No upgrades were purchased.', false, timeout=500);
        }
        stopEvent("buyAllUpgrades");
    }
}


function autoFightConditionCheck(upgrade) {
    return autoFightSkill && autoFightEnabled && power > (illusionOfPowerSkill ? (upgrade.isGodMode && upgrade.isPUGodMode ? upgrade.autoBattlePower / 100 : (upgrade.isGodMode || upgrade.isPUGodMode ? upgrade.autoBattlePower / 10 : upgrade.autoBattlePower)) : upgrade.autoBattlePower);
}


// Function to format the cost or earnings of an upgrade for display
function formatCostOrEarnings(costOrEarnings, isGodMode = false, isPUGodMode = false, isFight = false, isMeditation = false) {
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
            let adjustedValue = (isGodMode && isPUGodMode) ? value * 100 :
                      (isGodMode || isPUGodMode) ? value * 10 : value;
            if ((rewardingVictoriesSkill && isFight) || (rewardingMeditationsSkill && isMeditation)) {
                adjustedValue *= 1.4;
            }
            result += `<p>${displayName}: ${formatNumber(adjustedValue)}</p>`; // Format as HTML paragraph
        }
    }
    return result;
}

// Define the cheat sequence in terms of toggle names and states
const devCheatSequence = [
    { name: 'Degens Idle Dev', state: false },
    { name: 'Degens Idle Dev #2', state: false },
    { name: 'Degens Idle Dev', state: true },
    { name: 'Degens Idle Dev', state: false },
    { name: 'Degens Idle Dev', state: true },
    { name: 'Degens Idle Dev #2', state: true },
    { name: 'Degens Idle Dev #2', state: false },
    { name: 'Degens Idle Dev', state: false },
    { name: 'Degens Idle Dev #2', state: true },
    { name: 'Degens Idle Dev', state: true }
];

// Track the current sequence
let currentCheatSequence = [];

function addPurchasedUpgrade(img, name, earnings, isGodMode = false, isPUGodMode = false, message = null, isFight = false, isMeditation = false) {
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
                ${formatCostOrEarnings(earnings, isGodMode, isPUGodMode, isFight, isMeditation)}
            </div>
        </div>
    `;

    if (!multibuyUpgradesButtonsUnlocked && name === `Proceed with Caution`){
        multibuyUpgradesButtonsUnlocked = true;
        // save multibuyUpgradesButtonsUnlocked to localStorage
        localStorage.setItem('multibuyUpgradesButtonsUnlocked', 'true');
        initializeBuyButtons();
    }

    purchasedList.prepend(upgradeElement);

    const toggleSwitch = document.getElementById(`toggle-${name}`);

    if (toggleSwitch && !isFight && !isMeditation) { // Only add event listeners if it's not a fight upgrade

        Events.addListeners(toggleSwitch, 'togglers', {
            click: (event) => {
                event.stopPropagation();
            },
            change: (event) => {
                if (!achievementsMap.get('Developer Options').isUnlocked) {
                    const currentToggle = { name: name, state: event.target.checked };
                    // Check if the current toggle matches the next item in the cheat sequence
                    if (devCheatSequence[currentCheatSequence.length] &&
                        devCheatSequence[currentCheatSequence.length].name === currentToggle.name &&
                        devCheatSequence[currentCheatSequence.length].state === currentToggle.state) {
                        // If correct, add to the sequence
                        currentCheatSequence.push(currentToggle);

                        // If the sequence is complete, trigger the cheat code
                        if (currentCheatSequence.length === devCheatSequence.length) {
                            unlockAchievement('Developer Options');
                            currentCheatSequence = []; // Reset sequence after activation
                        }
                    } else {
                        // Reset the sequence if the toggle doesn't match
                        currentCheatSequence = [];
                    }
                }
                // Update the toggle state in the global variable
                switchStates[name] = event.target.checked;
            }
        });
    }

    if (message) {
        upgradeElement.classList.add('clickable');
        Events.addListener(upgradeElement, 'click', (event) => {
            if (event.target.closest('.switch')) {
                return; // Do nothing if the click originated from the switch
            }

            if (message.startsWith('imgs/modal_imgs/')) {
                showMessageModal(name, '', false, false, message);
                if (name == `What is DEGENS?`) {
                    let admireTimeoutId = setTimeout(() => {
                        unlockAchievement('Admire The Acronym');
                    }, 15000);

                    // Delay the event listener for a moment to avoid canceling the timeout by the same initial click
                    setTimeout(() => {
                        document.addEventListener('click', function cancelTimeout() {
                            clearTimeout(admireTimeoutId);
                            document.removeEventListener('click', cancelTimeout); // Remove the event listener to prevent multiple cancellations
                        });
                    }, 50); // Slight delay to ensure the first click doesn't cancel the timeout
                }
            } else {
                if (name == `Clickable`){
                    unlockAchievement('Click the Clicker');
                }

                showMessageModal(name, message);
            }
        });
    }

    if (buyMarkersSkill && !isFight && !isMeditation) {
        if (toggleSwitch) {
            // Use defaultBuyMarkerState if switchStates[name] is null
            toggleSwitch.checked = switchStates[name] !== null ? switchStates[name] : defaultBuyMarkerState;
            switchStates[name] = toggleSwitch.checked;
            toggleSwitch.parentElement.style.display = 'block';
        }
    } else {
        if (toggleSwitch) {
            toggleSwitch.parentElement.style.display = 'none';
        }
    }

}


function enableAllBuyMarkers() {

    purchasedUpgrades.forEach(upgrade => {
        const name = upgrade.name;

        // Load the switch state from local storage
        let savedSwitchState = switchStates[name] !== null ? switchStates[name] : defaultBuyMarkerState;
        const toggleSwitch = document.getElementById(`toggle-${name}`);
        if (toggleSwitch && !upgrade.isFight && !upgrade.isMeditation) {
            toggleSwitch.checked = savedSwitchState;
            toggleSwitch.parentElement.style.display = 'block'; // Make the switch visible

            // Add event listener for the switch
            Events.addListeners(toggleSwitch, 'togglers', {
                click: (event) => {
                    event.stopPropagation();
                },
                change: (event) => {
                    const state = event.target.checked ? 'On' : 'Off';
                    console.log(`Switch for upgrade ${name} set to ${state}`);
                    // Update the switch state in the global variable
                    switchStates[name] = event.target.checked;
                },
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

function autobuyUpgrades() {
    if (!isEventInProgress() && startEvent("autobuyUpgrades")) {

        let topUpgrades = availableUpgrades.slice(0, 16);
        let upgradeBought = false;
        let firstFightUpgrade = true;

        for (let i = 0; i < topUpgrades.length; i++) {
            const upgrade = topUpgrades[i];
            const isAffordableUpgrade = isAffordable(upgrade.cost);

            // Buy the upgrade if either condition is met:
            // 1. It is affordable and switchState is true
            // 2. It is affordable and autoFightSkill is true with sufficient power
            if (isAffordableUpgrade && autoFightConditionCheck(upgrade) && firstFightUpgrade) {
                buyUpgrade(encodeName(upgrade.name), false, true);
                upgradeBought = true;
                incrementStellarHarvest();
                if(upgrade.name == 'Saitama' && makeLoveNotWar){
                    unlockAchievement('Make Love, Not War');
                }
            }
            else if ((isAffordableUpgrade && switchStates[upgrade.name])) {
                buyUpgrade(encodeName(upgrade.name), false, true);
                upgradeBought = true;
            }

            if (upgrade.isFight) {firstFightUpgrade = false;}

            // Check if it's a key upgrade and stop further key upgrade processing if buyMarkersSkill is false
            if (!buyMarkersSkill && upgrade.isKey) {
                break; // Break out of the loop after processing one key upgrade
            }
        }

        // If at least one upgrade was bought, update everything
        if (upgradeBought) {
            updateUpgradeList();
            updateMultipliersDisplay();
            updateEffectiveMultipliers();
            updateDisplay();
        }

        stopEvent("autobuyUpgrades");
    }
}

let decisionTimerId = null;

// Function to update the upgrade list display
function updateUpgradeList() {
    // Limit the display to the top 8 upgrades
    let topUpgrades = availableUpgrades.slice(0, 8);

    // Find the first occurrence of any key upgrade in the list
    const truncateIndex = topUpgrades.findIndex(upgrade => upgrade.isKey);

    // Truncate the list if any key upgrade is found
    if (truncateIndex !== -1) {
        topUpgrades = topUpgrades.slice(0, truncateIndex + 1);
    }

    const upgradeList = document.getElementById('upgradeList');
    Events.wipe(upgradeList);
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
    upgradeList.querySelectorAll('[data-upgrade-name]').forEach(button => {
        Events.addListener(button, 'click', throttle(() => {
            const encodedName = button.getAttribute('data-upgrade-name');
            buyUpgrade(encodedName); // Handle the upgrade purchase
            hideTooltip();
        }, 500)); // 500ms delay
    });

    // Update the upgrade buttons to highlight affordable ones
    updateUpgradeButtons();


    // Check if both 'Decisions, decisions...' and 'More Decisions...' are in the topUpgrades
    if (topUpgrades.some(upgrade => upgrade.name === 'More Decisions...') && topUpgrades.some(upgrade => upgrade.name === 'Decisions, decisions...')) {
        if (decisionTimerId === null) { // Only start the timer if it hasn't started yet
            decisionTimerId = setTimeout(() => {
                // Check if both upgrades are still in the list after 5 minutes
                const currentUpgrades = availableUpgrades.slice(0, 8);
                const stillHasDecisions = currentUpgrades.some(upgrade => upgrade.name === 'Decisions, decisions...');
                const stillHasMoreDecisions = currentUpgrades.some(upgrade => upgrade.name === 'More Decisions...');

                if (stillHasDecisions && stillHasMoreDecisions) {
                    unlockAchievement('Decisively Indecisive'); // Unlock the achievement
                }

                decisionTimerId = null; // Reset the timer ID
            }, 5 * 60 * 1000); // 5 minutes in milliseconds
        }
    }
}


// Function to handle touch and mouse events for tooltips
function attachTooltipEvents(button, upgrade) {
    const showTooltipEvent = (event) => {
        event.preventDefault(); // Prevent default behavior (like text selection)
        showTooltip(event, upgrade.earnings, upgrade.isGodMode, upgrade.isPUGodMode, upgrade.isFight, upgrade.isMeditation, upgrade.hoverOverwrite);
    }
    const moveTooltipEvent = (event) => {
        event.preventDefault(); // Prevent default behavior (like text selection)
        const tooltip = document.getElementById('upgradeTooltip');
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    };

    Events.addListeners(button, 'tooltip', {
        mouseover: showTooltipEvent,
        mousemove: moveTooltipEvent,
        mouseout: (event) => {
            event.preventDefault(); // Prevent default behavior (like text selection)
            hideTooltip();
        },
        touchstart: (event) => {
            showTooltipEvent(event);
            button.touchStartX = event.touches[0].clientX;
            button.touchStartY = event.touches[0].clientY;
        },
        touchmove: moveTooltipEvent,
        touchend: (event) => {
            hideTooltip();
            const touchEndX = event.changedTouches[0].clientX;
            const touchEndY = event.changedTouches[0].clientY;
            const rect = button.getBoundingClientRect();
            if (touchEndX >= rect.left && touchEndX <= rect.right && touchEndY >= rect.top && touchEndY <= rect.bottom) {
                button.click(); // Simulate a click event if touchend is within the button
            }
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

// Function to update the display of amount of upgrades boughts
function updateNumUpgrades() {
    let numNormalUpgrades = purchasedUpgrades.filter(up => !up.isGodMode && !up.isPUGodMode).length;
    let numGodModeUpgrades = purchasedUpgrades.filter(up => up.isGodMode && !up.isPUGodMode).length;
    let numPUGodModeUpgrades = purchasedUpgrades.filter(up => !up.isGodMode && up.isPUGodMode).length;
    let numDoubleGodModeUpgrades = purchasedUpgrades.filter(up => up.isGodMode && up.isPUGodMode).length;

    let numPurchaseDisplay = document.getElementById('numPurchasedNormalUpgrades');
    let numGodModeDisplay = document.getElementById('numPurchasedGodModeUpgrades');
    let numPUGodModeDisplay = document.getElementById('numPurchasedPUGodModeUpgrades');
    let numDoubleGodModeDisplay = document.getElementById('numPurchasedDoubleGodModeUpgrades');

    let numSepOne = document.getElementById('numPurchasedSepOne');
    let numSepTwo = document.getElementById('numPurchasedSepTwo');
    let numSepThree = document.getElementById('numPurchasedSepThree');

    // Show parenthesis if any upgrade has been bought
    if( numNormalUpgrades > 0 || numGodModeUpgrades > 0 || numPUGodModeUpgrades > 0 || numDoubleGodModeUpgrades > 0) {
        document.getElementById('numPurchasedUpgradesStart').style.display = "block";
        document.getElementById('numPurchasedUpgradesEnd').style.display = "block";
    } else {
        document.getElementById('numPurchasedUpgradesStart').style.display = "none";
        document.getElementById('numPurchasedUpgradesEnd').style.display = "none";
    }

    // Upgrades separator handler
    if (numNormalUpgrades > 0 && (numGodModeUpgrades > 0 || numPUGodModeUpgrades > 0 || numDoubleGodModeUpgrades > 0)) {
        numSepOne.style.display = "block";
    } else {
        numSepOne.style.display = "none";
    }

    if (numGodModeUpgrades > 0 && (numPUGodModeUpgrades > 0 || numDoubleGodModeUpgrades > 0)) {
        numSepTwo.style.display = "block";
    } else {
        numSepTwo.style.display = "none";
    }

    if (numPUGodModeUpgrades > 0 && numDoubleGodModeUpgrades > 0) {
        numSepThree.style.display = "block";
    } else {
        numSepThree.style.display = "none";
    }

    // Show amount of normal purchased upgrades
    if (numNormalUpgrades > 0) {
        numPurchaseDisplay.textContent = numNormalUpgrades;
        numPurchaseDisplay.style.display = "block";
    } else {
        numPurchaseDisplay.style.display = "none";
    }

    // Show amount of god mode purchased upgrades
    if (numGodModeUpgrades > 0) {
        numGodModeDisplay.textContent = numGodModeUpgrades;
        numGodModeDisplay.style.display = "block";
    } else {
        numGodModeDisplay.style.display = "none";
    }

    // Show amount of pu god mode purchased upgrades
    if (numPUGodModeUpgrades > 0) {
        numPUGodModeDisplay.textContent = numPUGodModeUpgrades;
        numPUGodModeDisplay.style.display = "block";
    } else {
        numPUGodModeDisplay.style.display = "none";
    }

    // Show amount of double god mode purchased upgrades
    if (numDoubleGodModeUpgrades > 0) {
        numDoubleGodModeDisplay.textContent = numDoubleGodModeUpgrades;
        numDoubleGodModeDisplay.style.display = "block";
    } else {
        numDoubleGodModeDisplay.style.display = "none";
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

// Update the Stellar Harvest text display based on the multiplier
function updateStellarHarvestDisplay() {
    const stellarHarvestDisplay = document.getElementById('stellar-harvest-display');
    if (stellarHarvestMult > 1) {
        stellarHarvestDisplay.style.display = 'block';
        stellarHarvestDisplay.textContent = `Stellar Harvest Mult x${formatNumber(stellarHarvestMult)}`;
    } else {
        stellarHarvestDisplay.style.display = 'none';
    }
}

function incrementStellarHarvest() {
    // Stellar Harvest Skill effect
    if (stellarHarvestSkill && !purchasedUpgradesSet.has('Cosmic Drought')) {
        const multiplier = celestialCollectorSkill ? 1.5: 1.3;
        const duration = celestialCollectorSkill ? 600000 : 180000; // 10 minutes (600,000 ms) or 3 minute (180,000 ms)

        if (stellarHarvestMult == 1 && stellarCookieSkill){
            clearInterval(cookieIntervalId);
            const cookieButton = document.getElementById('cookieButton');
            cookieButton.classList.remove('spinning');
            cookieButton.classList.add('spinning');
            cookieIntervalId = setInterval(() => {
                cookieCollectAllResources();
            }, 100); // 100 milliseconds = 0.1 seconds
        }

        stellarHarvestMult *= multiplier;
        updateMultipliersDisplay();
        updateEffectiveMultipliers();
        //TODO: use global tooltip instead

        if(stellarHarvestMult > 50){
            unlockAchievement('Stellar Harvester');
        }

        // Set a timeout to reset the multiplier after the specified duration
        const timeoutId = setTimeout(() => {
            stellarHarvestMult = Math.max(stellarHarvestMult / multiplier, 1);
            updateMultipliersDisplay();
            updateEffectiveMultipliers();

            if (stellarHarvestMult == 1 && stellarCookieSkill){
                const cookieButton = document.getElementById('cookieButton');
                cookieButton.classList.remove('spinning');
                clearInterval(cookieIntervalId);
            }
            //TODO: use global tooltip to show it decreased
        }, duration);

        // Store the timeout ID in the array
        currentTimeouts.push(timeoutId);
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
        .slice(0, 400)
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

let resourceGenerationInterval;
let isDevGameLoop = false;  // Track whether the dev option is enabled
function toggleDevMode(intervalTime) {
    isDevGameLoop = !isDevGameLoop;  // Toggle the dev mode flag

    if (isDevGameLoop) {
        // Set the interval to 50ms in dev mode
        clearInterval(resourceGenerationInterval);
        // Set a new interval with the given time
        resourceGenerationInterval = setInterval(generateResources, intervalTime);
        console.log(`Dev mode enabled: Interval set to ${intervalTime}ms.`);
    } else {
        // Reset the interval back to 500ms when dev mode is off
        clearInterval(resourceGenerationInterval);
        // Set a new interval with the given time
        resourceGenerationInterval = setInterval(generateResources, 500);
        console.log("Dev mode disabled: Interval reset to 500ms.");
    }
}

let prevPrestigeThreshold = 100;

// Global object to track key presses
let keysPressed = {
    m: false,
    s: false,
    a: false,
    t: false,
    b: false,
    p: false,
    f: false // Add 'f' for autoFightSkill
};

// Define the hotkey handler function
function hotkeyHandler(event) {
    if (event.shiftKey && event.altKey && true) {
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
            case '$':
                toggleDevMode(50);
                break;
            case '%':
                toggleDevMode(5);
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
    } else {
        switch (event.key.toLowerCase()) {
            case 'm':
                if (multibuyUpgradesButtonsUnlocked) {
                    buyAllUpgrades(100, document.getElementById('buyMaxButton'));
                    keysPressed.m = true; // Mark 'm' key as pressed
                }
                break;
            case 's':
                if (multibuyUpgradesButtonsUnlocked) {
                    buyAllUpgrades(8, document.getElementById('buyMaxButton'));
                    keysPressed.s = true; // Mark 's' key as pressed
                }
                break;
            case 'a':
                if (autoAscendThreshold !== null) {
                    if (autoAscendThreshold > 0) {
                        autoAscendThreshold = 0;
                        showPopupTooltip('Auto Ascend Disabled');
                    } else {
                        autoAscendThreshold = numAscensionUpgrades;
                        showPopupTooltip('Auto Ascend Set to Max');
                    }
                    keysPressed.a = true; // Mark 'a' key as pressed
                }
                break;
            case 't':
                if (autoTranscendThreshold !== null) {
                    if (autoTranscendThreshold > 0) {
                        autoTranscendThreshold = 0;
                        showPopupTooltip('Auto Transcend Disabled');
                    } else {
                        autoTranscendThreshold = numPUAscensionUpgrades;
                        showPopupTooltip('Auto Transcend Set to Max');
                    }
                    keysPressed.t = true; // Mark 't' key as pressed
                }
                break;
            case 'b':
                if (autobuyUpgradesSkill) {
                    if (autobuyIntervalId !== null) {
                        clearInterval(autobuyIntervalId);
                        autobuyIntervalId = null;
                        showPopupTooltip('Auto Buy Upgrades Disabled');
                    } else {
                        autobuyIntervalId = setInterval(autobuyUpgrades, chronoMagnetizerSkill && fasterAutobuyerskill ? 125 : (fasterAutobuyerskill ? 250 : 1500));
                        showPopupTooltip('Auto Buy Upgrades Enabled');
                    }
                    keysPressed.b = true; // Mark 'b' key as pressed
                }
                break;
            case 'p':
                if (prevPrestigeThreshold !== null) {
                    if (autoPrestigeThreshold == 0) {
                        autoPrestigeThreshold = prevPrestigeThreshold;
                        showPopupTooltip(`Auto Prestige Enabled (${formatNumber(autoPrestigeThreshold)})`);
                    } else {
                        prevPrestigeThreshold = autoPrestigeThreshold;
                        autoPrestigeThreshold = 0;
                        showPopupTooltip('Auto Prestige Disabled');
                    }
                    keysPressed.p = true; // Mark 'p' key as pressed
                }
                break;
            case 'f':
                if (autoFightSkill) {
                    if (autoFightEnabled) {
                        autoFightEnabled = false;
                        showPopupTooltip('Auto Fight Disabled');
                    } else {
                        autoFightEnabled = true;
                        showPopupTooltip('Auto Fight Enabled');
                    }
                    localStorage.setItem('autoFightEnabled', autoFightEnabled);
                    keysPressed.f = true; // Mark 'f' key as pressed
                }
                break;
            case 'z': // Open Prestige, if quick mode enable trigger it directly whithout confirmations
                prestige();
                break;
            case 'x': // Open Ascend, if quick mode enable trick the game to perform an auto ascend even if automation not unlocked
                ascend();
                break;
            case 'c': // Open Transcend, if quick mode enable trick the game to perform an auto transcend even if automation not unlocked
                transcend();
                break;
            case 'v': // Open Big Crunch, if quick mode enable trigger it directly whithout confirmations
                bigCrunch();
                break;
            case 'n': // Open Embrace
                infiniteEmbrace();
                break;
            case ' ': // Select first x upgrades
                if(document.getElementsByClassName("select-first-button").length == 1) {
                    document.getElementsByClassName("select-first-button")[0].click();
                    event.preventDefault();
                }
                break;
        }

        checkHotkeyAchievement();
    }
}

function checkHotkeyAchievement() {
    // Check if all keys have been pressed and are enabled
    const allKeysPressed = Object.values(keysPressed).every(value => value === true);
    if (allKeysPressed) {
        unlockAchievement('Hotkey Master');
    }
}

// Get the input element
const tradeInput = document.getElementById('tradeAmount');

// Disable the hotkey handler when the input is focused
tradeInput.addEventListener('focus', () => {
    document.removeEventListener('keydown', hotkeyHandler);
});

// Re-enable the hotkey handler when the input loses focus
tradeInput.addEventListener('blur', () => {
    document.addEventListener('keydown', hotkeyHandler);
});

// Initially add the hotkey listener
document.addEventListener('keydown', hotkeyHandler);


function showMessageModal(title, message, isConfirm = false, isUpgradeSelection = false, imageName = null, isTranscend = false, preventOutsideClose = false) {
    return new Promise((resolve, reject) => {

        modalQueue.push({ title, message, isConfirm, isUpgradeSelection, imageName, isTranscend, preventOutsideClose, resolve, reject });
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

    const { title, message, isConfirm, isUpgradeSelection, imageName, isTranscend, preventOutsideClose, resolve } = modalQueue.shift();

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

    // Apply or remove the modal-embrace class
    if (title === "Infinite Embrace Confirmation" || title === 'Confirm Love Skill Unlock') {
        modalContent.classList.add('modal-embrace');
    } else {
        modalContent.classList.remove('modal-embrace');
    }

    // Existing logic for other titles
    if (title === "Are You Sure You Want to Restart?" || title === "You Didn't Ask for It, But I'll Give You One More Try" || (title === 'Respec Confirmation' && message.includes('10%'))) {
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
        Events.wipe(ascendUpgradeList);
        ascendUpgradeList.innerHTML = '';

        let selectedUpgrades = [];

        const maxSelectableUpgrades = isTranscend ? numPUAscensionUpgrades : numAscensionUpgrades;

        // Calculate the number of valid upgrades to select
        const validUpgradesCount = purchasedUpgrades.filter(upgrade => {
            return isTranscend ? !upgrade.isPUGodMode : !upgrade.isGodMode;
        }).length;

        const numToSelect = Math.min(maxSelectableUpgrades, validUpgradesCount);

        // Remove the existing button if it already exists
        const existingButton = document.querySelector('.select-first-button');
        if (existingButton) {
            existingButton.remove();
        }

        if (numToSelect > 1) {
            // Create the new button
            const selectFirstButton = document.createElement('button');
            selectFirstButton.textContent = `Select First ${numToSelect}`;
            selectFirstButton.className = 'modal-button select-first-button';

            // Handle clicking the new button
            selectFirstButton.onclick = () => {
                // Deselect all previously selected upgrades
                selectedUpgrades = [];
                document.querySelectorAll('.ascend-upgrade-item.selected').forEach(item => {
                    item.classList.remove('selected');
                });

                // Select the first `numToSelect` valid upgrades
                let count = 0;
                purchasedUpgrades.forEach((upgrade) => {
                    const condition = isTranscend ? !upgrade.isPUGodMode : !upgrade.isGodMode;
                    if (condition && count < numToSelect) {
                        const upgradeItem = document.querySelector(`.ascend-upgrade-item[data-upgrade-name="${upgrade.name}"]`);
                        if (upgradeItem) {
                            upgradeItem.classList.add('selected');
                            selectedUpgrades.push(upgrade);
                            count++;
                        }
                    }
                });
            };

            // Insert the new button above the upgrade list
            ascendUpgradeSelection.insertBefore(selectFirstButton, ascendUpgradeList);
        }

        purchasedUpgrades.forEach((upgrade) => {
            const condition = isTranscend ? !upgrade.isPUGodMode : !upgrade.isGodMode;
            if (condition) {
                const upgradeItem = document.createElement('div');
                upgradeItem.className = 'ascend-upgrade-item';
                upgradeItem.textContent = upgrade.name;
                upgradeItem.upgrade = upgrade;
                upgradeItem.setAttribute('data-upgrade-name', upgrade.name);
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
            } else {
                showStatusMessage(modalConfirmButton, `Select at least 1 upgrade`, false, timeout=1000);
            }
        };

        modalCancelButton.onclick = () => closeModal(null);
        closeButton.onclick = () => closeModal(null);
    } else if (isConfirm) {
        modalCloseButton.style.display = 'none';
        modalConfirmButtons.style.display = 'flex';
        ascendUpgradeSelection.style.display = 'none';

        modalConfirmButton.onclick = () => closeModal(true);
        modalCancelButton.onclick = () => closeModal(false);

        closeButton.onclick = () => closeModal(false);
    } else {
        modalCloseButton.style.display = 'block';
        modalConfirmButtons.style.display = 'none';
        ascendUpgradeSelection.style.display = 'none';

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

let currentPopupTooltipTimeoutId = null;

function showPopupTooltip(message, color = 'gray', durationSeconds = 2) {
    const tooltip = document.getElementById('popup-tooltip');
    tooltip.textContent = message;
    tooltip.style.backgroundColor = color;
    tooltip.classList.add('visible-popup-tooltip');
    tooltip.classList.remove('hidden-popup-tooltip');

    // Clear any existing timeout to avoid closing the current tooltip prematurely
    if (currentPopupTooltipTimeoutId) {
        clearTimeout(currentPopupTooltipTimeoutId);
    }

    // Set a new timeout and store its ID
    currentPopupTooltipTimeoutId = setTimeout(() => {
        tooltip.classList.remove('visible-popup-tooltip');
        tooltip.classList.add('hidden-popup-tooltip');
        currentPopupTooltipTimeoutId = null; // Clear the timeout ID after it completes
    }, durationSeconds * 1000);
}


const resourceToolTips = new Map();
function closeResourceToolTip(name) {
    const tip = resourceToolTips.get(name)
    if (tip) {
        tip.remove(); // remove from dom
        resourceToolTips.delete(tip);
    }
}

document.querySelectorAll('.resource-value').forEach(function (element) {
    const resourceId = element.id;  // Directly use element.id

    element.addEventListener('mouseenter', function (event) {
        // close any open tips before opening the new one
        for (const openTip of resourceToolTips.keys()) {
            closeResourceToolTip(openTip);
        }

        const tip = document.createElement('div');
        tip.className = 'resource-gain-tooltip';
        tip.innerHTML = calculateTooltip(resourceId);  // Get tooltip content

        document.body.appendChild(tip);
        resourceToolTips.set(resourceId, tip);

        const rect = element.getBoundingClientRect();
        tip.style.top = `${rect.bottom + window.scrollY + 28}px`;  // Add a slight margin below
        tip.style.left = `${rect.left + (rect.width / 2)}px`;
    });

    // Hide tooltip when moving away
    element.addEventListener('mouseleave', function () {
        closeResourceToolTip(resourceId);
    });

    // For mobile: Hide tooltip when tapping elsewhere on the screen
    document.addEventListener('touchstart', function () {
        closeResourceToolTip(resourceId);
    });
});





function calculateTooltip(resourceId) {
    let tooltip = '';
    let baseValue, basePerSecond;

    switch (resourceId) {
        case 'copium':
            baseValue = 'Copium';
            basePerSecond = copiumPerSecond;
            break;
        case 'delusion':
            baseValue = 'Delusion';
            basePerSecond = delusionPerSecond;
            break;
        case 'yachtMoney':
            baseValue = 'Yacht Money';
            basePerSecond = yachtMoneyPerSecond;
            break;
        case 'trollPoints':
            baseValue = 'Troll Points';
            basePerSecond = trollPointsPerSecond;
            break;
        case 'hopium':
            baseValue = 'Hopium';
            basePerSecond = hopiumPerSecond;
            break;
        case 'knowledge':
            baseValue = 'Knowledge';
            basePerSecond = knowledgePerSecond;
            break;
        case 'power':
            baseValue = 'Power';
            basePerSecond = (Math.max(knowledge, 0) ** (1 / 3)) / 1e12;
            break;
        case 'serenity':
            baseValue = 'Serenity';
            basePerSecond = serenityPerSecond;
            break;
        default:
            return 'Gain calculation based on upgrades and boosts.';
    }

    if (resourceId !== 'power'){
        // Base gain display
        tooltip += `<b>${formatNumber(basePerSecond)}</b> (Base ${baseValue} Gain)</b><br>`;
    }

    // Power-specific multipliers
    if (resourceId === 'power') {

        // Base gain display
        tooltip += `<b>${formatNumber(basePerSecond)}</b> (${baseValue} Gain from Knowledge)</b><br>`;

        // Money is Power multiplier
        if (moneyIsPowerTooSkill) {
            let moneyIsPowerMultiplier = (1 + (Math.max(yachtMoney, 0) ** (1 / 30)) / 100);
            tooltip += `<span style="color:#FFA500">x${formatNumber(moneyIsPowerMultiplier)} (Money is Power)</span><br>`;
        }

        // Power Surge Multiplier
        if (powerSurgeMultiplier !== 1) {
            tooltip += `<span style="color:#FF4500">x${formatNumber(powerSurgeMultiplier)} (Power Surge)</span><br>`;  // Dark Orange
        }

        // Power is Power multiplier
        if (powerIsPowerSkill) {
            let powerIsPowerMultiplier = 1.1 ** (powerHallSkills.filter(skill => skill.unlocked).length);
            tooltip += `<span style="color:#8A2BE2">x${formatNumber(powerIsPowerMultiplier)} (Power is Power)</span><br>`;  // BlueViolet
        }
    }

    // Non-Power resources: apply general multipliers
    if (resourceId !== 'power' && resourceId !== 'serenity') {
        if (epsMultiplier !== 1) {
            tooltip += `<span style="color:#FFD700">x${formatNumber(epsMultiplier)} (Prestige)</span><br>`;
        }
        if (godModeMultiplier !== 1) {
            tooltip += `<span style="color:#1E90FF">x${formatNumber(godModeMultiplier)} (God-Mode)</span><br>`;
        }
        if (puGodMultiplier !== 1) {
            tooltip += `<span style="color:#BA55D3">x${formatNumber(puGodMultiplier)} (PU God)</span><br>`;
        }
        if (bigCrunchMultiplier !== 1) {
            tooltip += `<span style="color:#FF6347">x${formatNumber(bigCrunchMultiplier)} (Big Crunch)</span><br>`;
        }
        if (earlyAccelerantMult !== 1) {
            tooltip += `<span style="color:#F8C8DC">x${formatNumber(earlyAccelerantMult)} (Early Accelerant)</span><br>`;
        }
    }

    // Special Big Crunch Extra for Knowledge (darker red)
    if (bigCrunchMultiplier !== 1 && resourceId === 'knowledge') {
        const bigCrunchExtra = crunchKnowledgeSkill ? bigCrunchMultiplier**(2/3) : bigCrunchMultiplier**(1/2);  // Big Crunch Extra
        tooltip += `<span style="color:#B22222">x${formatNumber(bigCrunchExtra)} (Big Crunch Extra)</span><br>`;  // Darker Red
    }

    // Achievement Multiplier (for all resources, including Power and Serenity)
    if (achievementMultiplier !== 1) {
        tooltip += `<span style="color:#008080">x${formatNumber(achievementMultiplier)} (Achievements)</span><br>`;
    }

    // Mini Game Multiplier
    if (cosmicGamekeeperMultiplier !== 1) {
        tooltip += `<span style="color:#90EE90">x${formatNumber(cosmicGamekeeperMultiplier)} (Mini Games)</span><br>`;
    }


    // Stellar Harvest Multiplier (for all resources, including Power, but not Serenity)
    if (resourceId !== 'serenity' && stellarHarvestMult !== 1) {
        tooltip += `<span style="color:#32CD32">x${formatNumber(stellarHarvestMult)} (Stellar Harvest)</span><br>`;
    }

    // Stellar Harvest Multiplier (for all resources, including Power, but not Serenity)
    if (stellarMeditationMult !== 1) {
        tooltip += `<span style="color:#ADD8E6">x${formatNumber(stellarMeditationMult)} (Stellar Meditation)</span><br>`;
    }


    // Only show the amplifier multiplier if it's not Hopium, Knowledge, Power, or Serenity
    if (resourceId !== 'hopium' && resourceId !== 'knowledge' && resourceId !== 'power' && resourceId !== 'serenity') {
        if (upgradeAmplifierSkill) {
            tooltip += `<span style="color:#CD853F">x${formatNumber(purchasedUpgrades.length)} (Upgrade Amplifier)</span><br>`;
        }
        if (basicResourceBoost !== 1) {
            tooltip += `<span style="color:#FF00FF">x${formatNumber(basicResourceBoost)} (Basic Resource Boost)</span><br>`;
        }
    }

    // Copium-specific multiplier
    if (resourceId === 'copium') {
        if (copiumSurgeMultiplier !== 1) {
            tooltip += `<span style="color:#9F2B68">x${formatNumber(copiumSurgeMultiplier)} (Copium Surge)</span><br>`;
        }
        if (beaconOfSevenSunsSkill) {
            tooltip += `<span style="color:#FFA500">x${formatNumber(beaconOfSevenSunsMult)} (Beacon of Seven Suns)</span><br>`;
        }
    }

    // Delusion-specific multiplier
    if (resourceId === 'delusion') {
        if (delusionSurgeMultiplier !== 1) {
            tooltip += `<span style="color:#9F2B68">x${formatNumber(delusionSurgeMultiplier)} (Delusion Surge)</span><br>`;
        }
    }

    // Yacht Money-specific multiplier
    if (resourceId === 'yachtMoney') {
        if (yachtMoneySurgeMultiplier !== 1) {
            tooltip += `<span style="color:#9F2B68">x${formatNumber(yachtMoneySurgeMultiplier)} (Yacht Money Surge)</span><br>`;
        }
    }

    // Troll Points-specific multiplier
    if (resourceId === 'trollPoints') {
        if (trollPointsSurgeMultiplier !== 1) {
            tooltip += `<span style="color:#9F2B68">x${formatNumber(trollPointsSurgeMultiplier)} (Troll Points Surge)</span><br>`;
        }
    }

    if (resourceId === 'hopium') {
        if (beaconOfSevenSunsSkill) {
            tooltip += `<span style="color:#FFA500">x${formatNumber(beaconOfSevenSunsMult)} (Beacon of Seven Suns)</span><br>`;
        }
        if (serenityFlowSkill && serenity > 1) {
            tooltip += `<span style="color:#00BFFF">x${formatNumber(Math.sqrt(serenity))} (Serenity Flow)</span><br>`;
        }
    }

    if (resourceId === 'serenity') {
        if (serenityBoostMultiplier !== 1) {
            tooltip += `<span style="color:#9F2B68">x${formatNumber(serenityBoostMultiplier)} (Serenity Boost)</span><br>`;
        }

        // Define an array of objects for the resources and their corresponding tooltips
        const serenityGainResources = [
            { gainFlag: serenityGainCopium, value: copium, label: 'Copium' },
            { gainFlag: serenityGainDelusion, value: delusion, label: 'Delusion' },
            { gainFlag: serenityGainYachtMoney, value: yachtMoney, label: 'Yacht Money' },
            { gainFlag: serenityGainTrollPoints, value: trollPoints, label: 'Troll Points' }
        ];

        // Loop through each resource and add tooltips for the ones that apply
        serenityGainResources.forEach(resource => {
            const multiplier = Math.max(1, Math.log2(resource.value) / 33);
            if (resource.gainFlag && multiplier > 1) {
                tooltip += `<span style="color:#E97451">x${formatNumber(multiplier)} (Serenity Gain from ${resource.label})</span><br>`;
            }
        });

        const loveMult = Math.max(1, Math.log2(lovePoints))
        if (resonanceOfLoveSkill && loveMult > 1){
            tooltip += `<span style="color:#DE3163">x${formatNumber(loveMult)} (Resonance of Love)</span><br>`;
        }
    }

    if (resourceId === 'knowledge') {
        if (knowledgeInfusionMultiplier !== 1) {
            tooltip += `<span style="color:#9F2B68">x${formatNumber(knowledgeInfusionMultiplier)} (Knowledge Infusion)</span><br>`;
        }
        
        if (faithFueledKnowledgeSkill && hopium > 1e10) {
            tooltip += `<span style="color:#E1C16E">x${formatNumber(Math.log10(hopium)/10)} (Faith Fueled)</span><br>`;
        }

        // Diminishing multiplier for Knowledge
        const diminishingMultiplier = calculateEffectiveKnowledge() / calculateBaseKnowledge();
        if (diminishingMultiplier < 1) {
            tooltip += `<span style="color:#DC143C">x${formatNumber(diminishingMultiplier)} (Diminishing Returns)</span><br>`;
        }
    }

    if (resourceId === 'power') {
        if (powerInfusionMultiplier !== 1) {
            tooltip += `<span style="color:#9F2B68">x${formatNumber(powerInfusionMultiplier)} (Power Infusion)</span><br>`;
        }
        // Diminishing multiplier for Power
        const diminishingMultiplier = calculateEffectivePower() / calculateBasePower();
        if (diminishingMultiplier < 1) {
            tooltip += `<span style="color:#DC143C">x${formatNumber(diminishingMultiplier)} (Diminishing Returns)</span><br>`;  // Crimson Red
        }
    }

    return tooltip;
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        if (!inThrottle) {
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Global function to start en event
function startEvent(startedBy) {
    // Guard to prevent starting multiple event
    if (eventProgression.inProgress) {
        console.error(`${startedBy} try to start an event but an event started by ${eventProgression.startedBy} was already in progress`);
        return false;
    }

    eventProgression.inProgress = true;
    eventProgression.startedBy = startedBy;
    return true;
}

// Global function to stop en event
function stopEvent(startedBy) {
    // Guard to prevent another event ending en event it didn't triggered
    if (eventProgression.startedBy != startedBy) {
        console.error(`${startedBy} try to stop an event triggered by ${eventProgression.startedBy}`);
        return false;
    }

    eventProgression.inProgress = false;
    eventProgression.startedBy = null;
    return true;
}

function isEventInProgress() {
    return eventProgression.inProgress;
}

function manageButtonAnimations(enabled) {
    enableButtonAnimations = enabled;
    document.querySelector(':root').style.setProperty("--glowing-animation-duration", enabled ? "2s" : "0s")
}

let delusionToggleTimes = [];
let hopiumToggleTimes = [];

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
    document.getElementById('cookieButton').addEventListener('click', throttle(cookieCollectAllResources, 70));

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
    document.getElementById('restartButton').addEventListener('click', () => restartGame(false, false));
    document.getElementById('restartPrestige').addEventListener('click', () => restartPrestige());


    // Add event listener for the ascend button with throttling
    document.getElementById('prestigeButton').addEventListener('click', () => throttle(prestige(), 500));

    // Add event listener for the ascend button with throttling
    document.getElementById('ascendButton').addEventListener('click', () => throttle(ascend(), 500));

    // Add event listener for the transcend button with throttling
    document.getElementById('transcendButton').addEventListener('click', () => throttle(transcend(), 500));

    // Add event listener for the transcend button with throttling
    document.getElementById('bigCrunchButton').addEventListener('click', () => throttle(bigCrunch(), 500));

    // Add event listener for the transcend button with throttling
    document.getElementById('infiniteEmbraceButton').addEventListener('click', () => throttle(infiniteEmbrace(), 500));

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
        if (!achievementsMap.get(`Can't Fix Crazy`).isUnlocked){
            // Remove timestamps that are older than 10 seconds
            while (delusionToggleTimes.length > 0 && delusionToggleTimes[0] < crunchTimer - 10) {
                delusionToggleTimes.shift(); // Remove the oldest timestamp
            }
            // Add the current execution timestamp
            delusionToggleTimes.push(crunchTimer);
            // Check if there are at least 10 executions within the last 10 seconds
            if (delusionToggleTimes.length >= 10) {
                unlockAchievement(`Can't Fix Crazy`);
                delusionToggleTimes.length = 0;
            }
        }

        updateEffectiveMultipliers();
        updateDisplay(); // Update the display to reflect the change
    });

    document.getElementById('toggleHopium').addEventListener('change', function() {
        const isPositive = this.checked;
        if (isPositive) {
            hopiumPerSecond = Math.abs(hopiumPerSecond);
        } else {
            hopiumPerSecond = -Math.abs(hopiumPerSecond);
        }
        if (!achievementsMap.get(`Can't Fix Pessimism`).isUnlocked){
            // Remove timestamps that are older than 10 seconds
            while (hopiumToggleTimes.length > 0 && hopiumToggleTimes[0] < crunchTimer - 10) {
                hopiumToggleTimes.shift(); // Remove the oldest timestamp
            }
            // Add the current execution timestamp
            hopiumToggleTimes.push(crunchTimer);
            // Check if there are at least 10 executions within the last 10 seconds
            if (hopiumToggleTimes.length >= 10) {
                unlockAchievement(`Can't Fix Pessimism`);
                hopiumToggleTimes.length = 0;
            }
        }
        updateEffectiveMultipliers();
        updateDisplay(); // Update the display to reflect the change
    });

    // workaround because this needs to be called before initializing skills (to set correct format for skill costs),
    // but loadGameState has to be called after (to enable previously bought skills)
    currentNumberFormat = JSON.parse(localStorage.getItem('currentNumberFormat')) || 'Mixed';
    document.getElementById('numberFormatButton').textContent = `Number Format: ${currentNumberFormat}`;

    document.getElementById('enableQuickMode').addEventListener('change', function() {
        enableQuickMode = this.checked;
    });

    document.getElementById('enableButtonAnimations').addEventListener('change', function() {
        if(this.checked){
            unlockAchievement('Animation Aficionado');
        }
        manageButtonAnimations(this.checked);
    });

    // Library Skills -- has to happen before loadGameState!
    initializeSkills();

    // Power Skills
    initializePowerHallSkills();

    // Love Sklls
    initializeLoveHallSkills();

    // Load the game state from local storage
    loadGameState();

    updateMultipliersDisplay();
    // Initialize effective multipliers
    updateEffectiveMultipliers();
    // Unlock mini-games based on the current game state
    unlockMiniGames();
    // Set an interval to generate resources every second
    resourceGenerationInterval = setInterval(generateResources, 500);
    // Update the list of available upgrades
    updateUpgradeList();
    // Update the display with the current game state
    updateDisplay();
    // Save the game state when the window is about to be unloaded
    window.addEventListener('beforeunload', saveGameState);

    let spentLovePoints = 0;
    loveHallSkills.forEach(skill => {
        if (skill.unlocked) {
            const pairSkill = loveHallSkills.find(s => s.pair === skill.pair && s.name !== skill.name);
            const levelMultiplier = getLevelMultiplier(skill.level);

            // If both skills in the pair are unlocked
            if (pairSkill && pairSkill.unlocked) {
                // Refund original cost for the first skill
                spentLovePoints += 0.5 * skill.originalCost;
                
                // Refund the increased cost for the paired skill (multiplied cost)
                spentLovePoints += 0.5 * pairSkill.originalCost * levelMultiplier;
                
            } else {
                // Refund original cost if only this skill is unlocked
                spentLovePoints += skill.originalCost;
            }
        }
    });
    if (spentLovePoints + lovePoints > totalLoveHallSkillsCost + 2500){
        
        lovePoints -= ((spentLovePoints + lovePoints) - (totalLoveHallSkillsCost + 2500));
        showMessageModal('The Journey Continues',
            "You've reached an impressive milestone! With all Hall of Love skills unlocked and over 2500 Love Points stockpiled, you're among the few who have completed all current content. To maintain a balanced gameplay experience as we prepare future updates, Love Points are currently capped at 2500. "
            + "In the meantime, feel free to go achievement hunting if you're missing any, or join us on Discord to share your feedback and stay connected with the community. "
            + "Congratulations on your progress, and thank you for being part of this incredible journey—there's more exciting content on the horizon!"
        );
    }

});
