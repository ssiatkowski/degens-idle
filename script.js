

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

//cooldowns for mini games
let cooldowns = {
    copium: false,
    delusion: false,
    yachtMoney: false,
    trollPoints: false
};

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

let firstTimePrestigeButtonAvailable = true; // Default to true, will be updated based on saved state
let firstTimeCookieUnlock = true;

let modalQueue = [];
let isModalOpen = false;

let cookieClickMultiplier = 10;
let cookieAutoClicker = false;
let luckGameDelta = -75;
let knowledgeUnlocked = false;
let knowledgeGenerationSkill = false;
let prestigeBaseSkill = false;
let twoDimensionalAscensionSkill = false;
let multibuyUpgradesSkill = false;
let mathGameSkill = false;
let memoryGameSkill = false;
let speedGameSkill = false;
let powerUnlocked = false;
let buyMarkersSkill = false;
let bigCrunchUnlocked = false;
let moneyIsPowerTooSkill = false;
let lessDiminishingGodModeSkill = false;

let numAscensionUpgrades = 1;

let improvedTradeRatio = false;
let cookieBoost = false;

// Mini-game timeouts in milliseconds
const miniGameTimeouts = {
    speed: 8 * 60 * 1000,  // 10 minutes
    memory: 10 * 60 * 1000,  // 15 minutes
    math: 5 * 60 * 1000,    // 8 minutes
    luck: 4 * 60 * 1000     // 3 minutes
};

function updateEffectiveMultipliers() {
    effectiveCopiumPerSecond = copiumPerSecond * totalMultiplier;
    effectiveDelusionPerSecond = delusionPerSecond * totalMultiplier;
    effectiveYachtMoneyPerSecond = yachtMoneyPerSecond * totalMultiplier;
    effectiveTrollPointsPerSecond = trollPointsPerSecond * totalMultiplier;
    effectiveHopiumPerSecond = hopiumPerSecond * totalMultiplier;
    effectiveKnowledgePerSecond = knowledgePerSecond * totalMultiplier * (bigCrunchMultiplier**(1/2));
    // effectivePowerPerSecond = powerPerSecond * totalMultiplier;
    effectiveSerenityPerSecond = serenityPerSecond * totalMultiplier;
}


// Function to handle cookie click
function cookieCollectAllResources() {
    if (cookieBoost){
        copium += Math.max(cookieClickMultiplier * totalMultiplier, effectiveCopiumPerSecond/2);
        delusion += Math.max(cookieClickMultiplier * totalMultiplier, effectiveDelusionPerSecond/2);
        yachtMoney += Math.max(cookieClickMultiplier * totalMultiplier, effectiveYachtMoneyPerSecond/2);
        trollPoints += Math.max(cookieClickMultiplier * totalMultiplier, effectiveTrollPointsPerSecond/2);
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

    // Retrieve and parse all upgrades with the isGodMode property from local storage
    const savedUpgrades = JSON.parse(localStorage.getItem('upgrades')) || [];
    
    // Restore the isGodMode property for each upgrade
    upgrades.forEach(upgrade => {
        const savedUpgrade = savedUpgrades.find(up => up.name === upgrade.name);
        if (savedUpgrade) {
            upgrade.isGodMode = savedUpgrade.isGodMode;
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
            addPurchasedUpgrade(upgrade.img, upgrade.name, upgrade.earnings, upgrade.isGodMode, upgrade.message);
            if (upgrade.name === "Cookie Clicker") {
                document.getElementById('cookieButton').style.display = 'block';
                firstTimeCookieUnlock = false; // Indicate that the cookie button has been previously unlocked
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
    
    luckGameDelta = JSON.parse(localStorage.getItem('luckGameDelta')) || -75;

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

    // Check the state of delusion and update the switch position accordingly
    const toggleDelusion = document.getElementById('toggleDelusion');
    if (delusionPerSecond >= 0) {
        toggleDelusion.checked = true;
    } else {
        toggleDelusion.checked = false;
    }

    updateTradeRatio();

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
    unlockMiniGames();
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
        isGodMode: upgrade.isGodMode || false
    }))));
    
    // Save the purchased upgrades
    localStorage.setItem('purchasedUpgrades', JSON.stringify(purchasedUpgrades.map(upgrade => upgrade.name)));

    // Save the first time prestige button available flag
    localStorage.setItem('firstTimePrestigeButtonAvailable', firstTimePrestigeButtonAvailable);
    
    // Save the state of the Cookie Clicker button
    localStorage.setItem('cookieButtonVisible', document.getElementById('cookieButton').style.display === 'block');
    localStorage.setItem('cookieClickMultiplier', cookieClickMultiplier);

    localStorage.setItem('luckGameDelta', luckGameDelta);
    
    
    localStorage.setItem('knowledgeUnlocked', knowledgeUnlocked);

    // Save unlocked library skills
    if (Array.isArray(librarySkills)) {
        const unlockedLibrarySkills = librarySkills.filter(skill => skill.unlocked);
        localStorage.setItem('librarySkills', JSON.stringify(unlockedLibrarySkills));
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
function showTooltip(event, name, earnings, isGodMode, hoverOverwrite) {
    let tooltip = document.getElementById('upgradeTooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'upgradeTooltip';
        tooltip.className = 'upgradeTooltip';
        document.body.appendChild(tooltip);
    }

    const earningsClass = isGodMode ? 'godmode-earnings' : '';

    if (hoverOverwrite){
        tooltip.innerHTML = `
        <div>
            <div class="upgrade-earnings ${earningsClass}">
                ${hoverOverwrite} <!-- Formatted earnings -->
            </div>
        </div>
    `;
    }
    else {
        tooltip.innerHTML = `
            <div>
                <div class="upgrade-earnings ${earningsClass}">
                    ${formatCostOrEarnings(earnings)} <!-- Formatted earnings -->
                </div>
            </div>
        `;
    }
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
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
        effectivePowerPerSecond = moneyIsPowerTooSkill ? (knowledge ** (2/5) / 1e12) * (1 + (Math.max(yachtMoney,0) ** (2/5) / 1e12)) : knowledge ** (2/5) / 1e12
    }

    // Check if delusion drops below negative 1 trillion to start generating Knowledge
    if ((delusion < -1e12 || knowledgeGenerationSkill) && localStorage.getItem('knowledgeGenerationStarted') !== 'true') {
        knowledgePerSecond = 0.000001
        effectiveKnowledgePerSecond = knowledgePerSecond * totalMultiplier * (bigCrunchMultiplier**(1/2));
        localStorage.setItem('knowledgeGenerationStarted', 'true');

        if (!knowledgeGenerationSkill) {
            showMessageModal('The Age of Knowledge', `As you cross the threshold of -1 trillion delusion, the dense fog of confusion and distorted thoughts begins to lift. A sense of clarity pierces through the haze, revealing a world beyond the familiar chaos. The swirling mists part to unveil a luminous realm, shimmering with the light of hidden truths. For the first time, you feel a profound shift within, as the once insurmountable delusion gives way to the dawning of true knowledge. This newfound awareness pulses with a quiet intensity, each revelation a stepping stone towards deeper understanding. Your journey through the labyrinth of the mind has led to this pivotal moment, where the pursuit of enlightenment begins. Your mind expands, absorbing the essence of ancient wisdom and universal secrets, setting the stage for a transformative quest that transcends the ordinary limits of perception.`, false, false);
        }
    }

    updateDisplay();
}





// Function to play a mini-game of a given type
function playMiniGame(gameType) {
    // Check if the mini-game is on cooldown
    if (cooldowns[gameType]) return;

    // Get the button element for the mini-game
    const button = document.getElementById(`${gameType}Game`);
    button.disabled = true; // Disable the button at the start of the game
    button.classList.remove('affordable'); // Remove the 'affordable' class
    button.classList.add('disabled'); // Add the 'disabled' class to change its appearance

    // Convert mini-game timeouts from milliseconds to minutes for the message
    const cooldownMinutes = miniGameTimeouts[gameType] / (60 * 1000);
    const cooldownMessage = (gameType === 'memory' || gameType === 'math') ? 
        `In ${cooldownMinutes} minutes, you get to test your ${gameType} skills again.` : 
        `In ${cooldownMinutes} minutes, you get to test your ${gameType} again.`;

    // Speed mini-game logic
    if (gameType === 'speed') {
        let points = 0;
        let duration = Math.floor(Math.random() * 6) + 2; // Random duration between 2 and 7 seconds

        // Show the modal and start the game when the modal is closed
        showMessageModal('Speed Game', `Tap on the screen as many times as you can in ${duration} seconds!`, false, false).then(() => {
            // Function to handle clicks
            function clickHandler() {
                points++;
            }

            document.addEventListener('click', clickHandler); // Add click event listener
            document.addEventListener('touchstart', clickHandler); // Add touch event listener

            // End the game after the duration
            setTimeout(() => {
                document.removeEventListener('click', clickHandler); // Remove click event listener
                document.removeEventListener('touchstart', clickHandler); // Remove touch event listener
                
                let reward;
                let rewardPerClick;
                if (speedGameSkill) {
                    // Reward based on total number of clicks using the provided formula
                    reward = Math.max(Math.floor(Math.abs(copium) * ((points - 3) * 0.05)), 25);
                    rewardPerClick = reward / points;
                    showMessageModal('Speed Game Result', `You tapped ${points} times in ${duration} seconds. Each click was worth ${formatNumber(rewardPerClick)} copium. Your total click reward is ${formatNumber(reward)} copium!`, false, false);
                } else {
                    // Reward based on clicks per second
                    let clicksPerSecond = points / duration;
                    if (clicksPerSecond > 3) { // More than 3 clicks per second
                        reward = Math.max(Math.floor(Math.abs(copium) * ((clicksPerSecond - 3) * 0.05)), 25);
                        rewardPerClick = reward / points;
                        showMessageModal('Speed Game Result - Fast', `You tapped ${points} times in ${duration} seconds (${clicksPerSecond.toFixed(1)} taps per second). Each click was worth ${formatNumber(rewardPerClick)} copium. For being so fast you earned ${formatNumber(reward)} copium!`, false, false);
                    } else {
                        reward = -Math.max(Math.floor(Math.random() * Math.abs(copium) * 0.1), 10);
                        rewardPerClick = reward / points;
                        showMessageModal('Speed Game Result - Slow', `You tapped ${points} times in ${duration} seconds (${clicksPerSecond.toFixed(1)} taps per second). Each click was worth ${formatNumber(rewardPerClick)} copium. For being so slow you lost ${formatNumber(reward)} copium!`, false, false);
                    }
                }
                
                copium += reward;
                updateDisplay(); // Update the display
                startCooldown(gameType); // Start cooldown for the mini-game
            }, duration * 1000);
        });
    } else if (gameType === 'memory') {
        // Memory mini-game logic
        let sequenceLength = Math.floor(Math.random() * 6) + 3; // Random length between 3 and 8
        let sequence = '';
        for (let i = 0; i < sequenceLength; i++) {
            sequence += Math.floor(Math.random() * 10); // Random digit between 0 and 9
        }
        let maxTimeout = memoryGameSkill ? 15 : 40; // Set maximum timeout based on memoryGameSkill
        let timeout = Math.floor(Math.random() * (maxTimeout - 5 + 1)) + 5; // Random timeout between 5 and maxTimeout seconds
        showMessageModal('Memory Game', `Remember this sequence: ${sequence}`).then(() => {
            setTimeout(() => {
                showMessageModal('Memory Game', 'Enter the sequence:', false, false).then(userSequence => {
                    let correct = userSequence === sequence;
                    let baseReward = correct ? Math.max(Math.floor(Math.abs(delusion) * 0.5), 25) : -Math.max(Math.floor(Math.random() * Math.abs(delusion) * 0.1), 10);
                    let reward = memoryGameSkill ? baseReward * 2 : baseReward; // Double the reward if memoryGameSkill is true
                    // Adjust reward based on the toggleDelusion switch if it's visible
                    if (!document.getElementById('toggleDelusionLabel').classList.contains('hidden')) {
                        const toggleDelusion = document.getElementById('toggleDelusion').checked;
                        reward = Math.abs(reward) * (toggleDelusion ? 1 : -1);
                    }
                    delusion += reward;
                    showMessageModal('Memory Game Result', `You ${correct ? 'won' : 'lost'} and earned ${formatNumber(reward)} delusion!`);
                    updateDisplay(); // Update the display
                    startCooldown(gameType); // Start cooldown for the mini-game
                });
            }, timeout * 1000);
        });
    } else if (gameType === 'math') {
        // Math mini-game logic
        let num1 = Math.floor(Math.random() * 100) + 1;
        let num2 = Math.floor(Math.random() * 100) + 1;
        let num3 = Math.floor(Math.random() * 10) + 1;
        let operations = ['+', '-', '*', '/'];
        let op1 = operations[Math.floor(Math.random() * operations.length)];
        let op2 = operations[Math.floor(Math.random() * operations.length)];

        let question, correctAnswer;
        if (mathGameSkill) {
            // Only 2 numbers and 1 operation
            question = `${num1} ${op1} ${num2}`;
            correctAnswer = eval(question.replace('/', '* 1.0 /')); // Ensure floating point division
        } else {
            // Original question with 3 numbers and 2 operations
            question = `${num1} ${op1} ${num2} ${op2} ${num3}`;
            correctAnswer = eval(question.replace('/', '* 1.0 /')); // Ensure floating point division
        }

        showMessageModal('Math Game', `What is ${question}?  (answer within 0.5 is acceptable)`, false, false).then(answer => {
            let isCorrect = Math.abs(Number(answer) - correctAnswer) < 0.5;
            let reward;
            if (mathGameSkill) {
                reward = isCorrect ? Math.max(Math.floor(Math.abs(yachtMoney) * 0.75), 75) : -Math.max(Math.floor(Math.random() * Math.abs(yachtMoney) * 0.3), 30);
            } else {
                reward = isCorrect ? Math.max(Math.floor(Math.abs(yachtMoney) * 0.25), 25) : -Math.max(Math.floor(Math.random() * Math.abs(yachtMoney) * 0.1), 10);
            }
            yachtMoney += reward;
            showMessageModal('Math Game Result', `You guessed ${answer} and exact answer was ${correctAnswer}. You ${isCorrect ? 'won' : 'lost'} ${formatNumber(reward)} yachtMoney! ${cooldownMessage}`);
            updateDisplay(); // Update the display
            startCooldown(gameType); // Start cooldown for the mini-game
        });
    } else if (gameType === 'luck') {
        // Luck mini-game logic
        let result = (Math.random() * 200) + luckGameDelta; // Generates a random number (initially between -75 and +125%)
        let message = "";
        let reward = Math.floor(Math.abs(trollPoints) * (result / 100)); // Calculate reward based on the result percentage
        let gainLossMessage = reward >= 0 ? "gained" : "lost";
    
        if (result > 100) {
            message = "SUPER LUCKY!!! 🍀🍀🍀";
        } else if (result > 75) {
            message = "Very Lucky!!";
        } else if (result > 0) {
            message = "Lucky!";
        } else if (result > -40) {
            message = "Unlucky!";
        } else {
            message = "Extremely Unlucky 😞😞😞";
        }
    
        trollPoints += reward;
        showMessageModal('Luck Game Result', `You rolled ${result.toFixed(2)}%. ${message} You ${gainLossMessage} ${formatNumber(Math.abs(reward))} troll points! ${cooldownMessage}`);
        updateDisplay(); // Update the display
        startCooldown(gameType); // Start cooldown for the mini-game
    }
}


// Function to start the cooldown for a mini-game
function startCooldown(gameType) {
    const button = document.getElementById(`${gameType}Game`);
    const startTime = Date.now();
    localStorage.setItem(`${gameType}CooldownStart`, startTime);

    cooldowns[gameType] = true;
    if (button) {
        button.classList.remove('affordable');
        button.classList.add('disabled'); // Add a disabled class to change its appearance
        button.disabled = true;
    }

    setTimeout(() => {
        cooldowns[gameType] = false;
        if (button) {
            button.disabled = false;
            button.classList.remove('disabled');
            button.classList.add('affordable');
        }
    }, miniGameTimeouts[gameType]);
}

// Function to unlock mini-games based on cooldown status
function unlockMiniGames() {
    const now = Date.now();

    // Check each mini-game type
    Object.keys(miniGameTimeouts).forEach(gameType => {
        const startTime = localStorage.getItem(`${gameType}CooldownStart`);
        const button = document.getElementById(`${gameType}Game`);

        if (startTime) {
            const elapsed = now - parseInt(startTime, 10);
            if (elapsed >= miniGameTimeouts[gameType]) {
                // Cooldown has already passed
                if (button) {
                    cooldowns[gameType] = false;
                    button.disabled = false;
                    button.classList.remove('disabled');
                    button.classList.add('affordable');
                    button.style.display = 'block';
                }
            } else {
                // Start remaining cooldown
                const remainingCooldown = miniGameTimeouts[gameType] - elapsed;
                if (button) {
                    button.style.display = 'block';
                    button.disabled = true;
                    button.classList.add('disabled');
                    button.classList.remove('affordable');
                }
                setTimeout(() => {
                    if (button) {
                        cooldowns[gameType] = false;
                        button.disabled = false;
                        button.classList.remove('disabled');
                        button.classList.add('affordable');
                    }
                }, remainingCooldown);
            }
        } else {
            // No start time found, hide the button initially
            if (button) button.style.display = 'none';

            // Set timeout to show the button after the initial cooldown
            setTimeout(() => {
                if (button) {
                    button.style.display = 'block';
                    cooldowns[gameType] = false;
                    button.disabled = false;
                    button.classList.add('affordable');
                }
            }, miniGameTimeouts[gameType]);
        }
    });
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
        serenity = 0;
        serenityPerSecond = 0;

        localStorage.setItem('knowledgeGenerationStarted', 'false');

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
            
            firstTimeCookieUnlock = true;
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

            cookieClickMultiplier = 10;
            luckGameDelta = -75;
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
            numAscensionUpgrades = 1;
            buyMarkersSkill = false;
            improvedTradeRatio = false;
            cookieBoost = false;
            bigCrunchUnlocked = false;
            moneyIsPowerTooSkill = false;
            lessDiminishingGodModeSkill = false;

            powerUnlocked = false;
            document.getElementById('power-container').style.display = 'none';
            
            document.getElementById('big-crunch-display').style.display = 'none';

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

        // Save game state
        saveGameState();

        // Hide mini-game buttons initially
        document.getElementById('speedGame').style.display = 'none';
        document.getElementById('memoryGame').style.display = 'none';
        document.getElementById('mathGame').style.display = 'none';
        document.getElementById('luckGame').style.display = 'none';

        // Start unlock timeouts for mini-games
        unlockMiniGames();

        // Update display
        updateMultipliersDisplay();
        updateEffectiveMultipliers();
        updateUpgradeList();
        updateDisplay();
    }
}

let tradeStatusTimeout;

function showStatusMessage(pressedButton, message, isSuccess) {
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
    if (window.innerWidth <= 768) {  // Mobile devices
        overlay.style.position = 'absolute';
        overlay.style.top = `${rect.bottom + window.scrollY + 10}px`;  // Position below the pressed button
        overlay.style.left = `${rect.left + window.scrollX}px`;  // Align with the left of the pressed button
    } else {  // Desktop devices
        overlay.style.position = 'absolute';
        overlay.style.top = `${rect.top + window.scrollY}px`;  // Align with the top of the pressed button
        overlay.style.left = `${rect.right + window.scrollX + 10}px`;  // Position to the right of the pressed button
    }

    // Clear the previous timer if it exists
    if (tradeStatusTimeout) {
        clearTimeout(tradeStatusTimeout);
    }

    // Set a new timer to hide the overlay after 3 seconds
    tradeStatusTimeout = setTimeout(() => {
        overlay.style.display = 'none';
    }, 3000); // Hide after 3 seconds
}


// Function to update the displayed trade ratio based on selected resources
function updateTradeRatio() {
    const fromResource = document.getElementById('fromResource').value;
    const toResource = document.getElementById('toResource').value;
    const tradeRatioDisplay = document.getElementById('tradeRatioDisplay');

    // Special case for trading Copium to Hopium
    if (fromResource === 'copium' && toResource === 'hopium') {
        if (improvedTradeRatio){
            tradeRatioDisplay.textContent = 'Trade ratio is 4M:1';
        } else {
            tradeRatioDisplay.textContent = 'Trade ratio is 100M:1';
        }
    } else if (toResource === 'hopium') {
        tradeRatioDisplay.textContent = 'Only Copium can convert to Hopium';
    } else {
        if (improvedTradeRatio){
            tradeRatioDisplay.textContent = 'Trade ratio is 4:1';
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


function tradeResources() {
    const fromResource = document.getElementById('fromResource').value;
    const toResource = document.getElementById('toResource').value;
    const tradeAmountInput = document.getElementById('tradeAmount').value;

    // Object to store current amounts of each resource
    const resourceAmount = {
        copium: copium,
        delusion: delusion,
        yachtMoney: yachtMoney,
        trollPoints: trollPoints,
        hopium: hopium
    };

    const currentAmount = resourceAmount[fromResource];
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
            resourceAmount[toResource] += tradeAmount / 4000000;
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
            resourceAmount[toResource] += tradeAmount / 4;
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


function Commas(Num, Fixed) {
    return Num.toLocaleString("en-US",{minimumFractionDigits: Fixed, maximumFractionDigits: Fixed});
  }

function Bound(LOWER_BOUND = -Infinity, UPPER_BOUND = Infinity, DEFAULT_VALUE = 0, DATA = 0) {
    if (LOWER_BOUND > UPPER_BOUND) {throw new Error(`UPPER_BOUND is ${UPPER_BOUND} which is less than LOWER_BOUND which is ${LOWER_BOUND}`)}
    if (DEFAULT_VALUE < LOWER_BOUND || DEFAULT_VALUE > UPPER_BOUND) {
      throw new Error(`Math ain't mathing`)
    }
    if (DATA >= LOWER_BOUND && DATA <= UPPER_BOUND) return DATA
    return DEFAULT_VALUE
  }
function NumberScientific(Num, Fixed = 2, EXPONENT_LIMIT = 3) {
    let limitTillexpo = Bound(0, 9 , 4, EXPONENT_LIMIT), Exponent = Math.abs(Math.floor(Math.log10(Math.abs(Num))))
    if (Math.abs(Num) < 1 && Math.abs(Num) > 0) {
      return Exponent < limitTillexpo ? String(Num) : `${(Num*(10**Exponent)).toFixed(Fixed)}e${-Exponent}`
  }
    if (Math.abs(Num) < 10**limitTillexpo) {
      return Commas(Num, 2)
    }
    return `${(Num/(10**Exponent)).toFixed(Fixed)}e${Exponent}`
}
function NumberStandard(Num, Fixed = 2, EXPONENT_LIMIT = 3) {
  let limitTillexpo = Bound(0, 9, 3,EXPONENT_LIMIT), 
      Exponent = Math.floor(Math.log10(Math.abs(Num))/3),
      True_Exponent = Math.abs(Math.floor(Math.log10(Math.abs(Num))))
  let PREFIXES = ["", "K", "M", "B", "T", "Qa", "Qt", "Sx", "Sp", "Oc", "No", "Dc", "UDc", "DDc",
    "TDc", "QaDc", "QtDc", "SxDc", "SpDc", "ODc", "NDc", "Vg", "UVg", "DVg", "TVg",
    "QaVg", "QtVg", "SxVg", "SpVg", "OVg", "NVg", "Tg", "UTg", "DTg", "TTg", "QaTg",
    "QtTg", "SxTg", "SpTg", "OTg", "NTg", "Qd", "UQd", "DQd", "TQd", "QaQd", "QtQd",
    "SxQd", "SpQd", "OQd", "NQd", "Qi", "UQi", "DQi", "TQi", "QaQi", "QtQi", "SxQi",
    "SpQi", "OQi", "NQi", "Se", "USe", "DSe", "TSe", "QaSe", "QtSe", "SxSe", "SpSe",
    "OSe", "NSe", "St", "USt", "DSt", "TSt", "QaSt", "QtSt", "SxSt", "SpSt", "OSt",
    "NSt", "Og", "UOg", "DOg", "TOg", "QaOg", "QtOg", "SxOg", "SpOg", "OOg", "NOg",
    "Nn", "UNn", "DNn", "TNn", "QaNn", "QtNn", "SxNn", "SpNn", "ONn", "NNn", "Ce"]
  if (Math.abs(Num) < 1 && Math.abs(Num) > 0) {
      return True_Exponent < limitTillexpo ? String(Num) : `${(Num*(10**True_Exponent)).toFixed(Fixed)}e${-True_Exponent}`
  }
  if (Math.abs(Num) < 10**limitTillexpo) {
    return Commas(Num, 2)
  }
  return `${(Num/(1000**Exponent)).toFixed(Fixed)} ${PREFIXES[Exponent]}`
}
function NumberMixedScientific(Num,Fixed = 2, EXPONENT_LIMIT = 3) {
    if (Num < 1e36) {
      return NumberStandard(Num, Fixed, EXPONENT_LIMIT)
    } else {
      return NumberScientific(Num, Fixed, EXPONENT_LIMIT)
    }
}
function NumberFormat(Num = 0, Type = 0, Fixed) {
    switch(Type) {
      case 0:
        return NumberMixedScientific(Num, Fixed)
      case 1: 
        return NumberScientific(Num, Fixed)
      case 2:
        return NumberStandard(Num, Fixed)
    }
}


function customRound(number, digits) {
    const factor = Math.pow(10, digits);
    return Math.round(number * factor) / factor;
}

function formatNumber2(num) {
    return NumberFormat(num, numberFormatType, 3)
}

function formatNumber(num) {
    const suffixes = [
        { value: 1e33, symbol: "Dc" },    // Decillion
        { value: 1e30, symbol: "Nn" },    // Nonillion
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
    document.getElementById('copium').textContent = formatNumber(copium);
    document.getElementById('cps').textContent = formatNumber(effectiveCopiumPerSecond);
    document.getElementById('delusion').textContent = formatNumber(delusion);
    document.getElementById('dps').textContent = formatNumber(effectiveDelusionPerSecond);
    document.getElementById('yachtMoney').textContent = formatNumber(yachtMoney);
    document.getElementById('ymps').textContent = formatNumber(effectiveYachtMoneyPerSecond);
    document.getElementById('trollPoints').textContent = formatNumber(trollPoints);
    document.getElementById('tpps').textContent = formatNumber(effectiveTrollPointsPerSecond);
    document.getElementById('hopium').textContent = formatNumber(hopium);
    document.getElementById('hps').textContent = formatNumber(effectiveHopiumPerSecond);
    document.getElementById('knowledge').textContent = formatNumber(knowledge);
    document.getElementById('kps').textContent = formatNumber(effectiveKnowledgePerSecond);
    document.getElementById('power').textContent = formatNumber(power);
    document.getElementById('pps').textContent = formatNumber(effectivePowerPerSecond);
    document.getElementById('serenity').textContent = formatNumber(serenity);
    document.getElementById('sps').textContent = formatNumber(effectiveSerenityPerSecond);

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
    document.getElementById('big-crunch-display').textContent = `Big Crunch Power ${formatNumber(bigCrunchPower)} (x${formatNumber(bigCrunchMultiplier)} mult)`;
}

function unhideKnowledge() {
    document.getElementById('knowledge-container').style.display = 'block';
    localStorage.setItem('knowledgeUnlocked', 'true');
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
    updateDisplay()
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

async function prestige() {
    if (canPrestige()) {

        const confirmed = await showMessageModal(
            'Prestige Confirmation',
            `Are you sure you want to prestige? You will reset your progress and all resources, but your Prestige Multiplier will increase <strong>from ${formatNumber(epsMultiplier)} to ${formatNumber(calculatePrestigeMultiplier())}</strong>.<br>(Prestige multiplier is based on the lowest among your first four resources (Copium, Delusion, Yacht Money, and Troll Points). The higher the amount of your smallest resource, the greater your prestige multiplier!)`,
            true
        );

        if (confirmed) {
            epsMultiplier = calculatePrestigeMultiplier();
            prestigeRequirement = Math.min(copium, delusion, yachtMoney, trollPoints);
            
            // Call restartGame with isPrestige flag set to true
            restartGame(true);

            prestiges += 1;

            // Save game state after prestige
            saveGameState();

            showMessageModal('Prestige Successful!', `Your multiplier is now x${epsMultiplier.toFixed(2)}. All resources have been reset.`);
        }
    }
}

// Update the display of the prestige button
function updatePrestigeButton() {
    
    const prestigeButton = document.getElementById('prestigeButton');
    if (canPrestige()) {
        if (firstTimePrestigeButtonAvailable && godModeLevel < 3) {
            showMessageModal('Prestige Unlocked: Rise Stronger!', 'Congratulations, mighty player! You have unlocked the legendary path of Prestige. This powerful option allows you to reset your game progress, but with a game-changing twist: you gain a new multiplier that enhances everything you do.<br><br>Prestige represents more than just a reset. It symbolizes the resilience of the human spirit, the relentless pursuit of growth, and the ability to rise stronger after every fall. Just as life sometimes knocks you down, this journey will set you back temporarily. But with each Prestige, you come back more powerful, your abilities amplified, and your potential limitless.<br><br>Embrace the opportunity to start anew with greater strength. Every click, every resource gathered, and every upgrade purchased will now be boosted by your newfound multiplier. It\'s a fresh start, a chance to overcome challenges with enhanced vigor and wisdom.<br><br>Are you ready to embark on this transformative journey? To not only rebuild but to surpass your previous achievements? Prestige now, and let your ascent to greatness begin anew!');
            firstTimePrestigeButtonAvailable = false; // Set the flag to false after showing the message
            saveGameState(); // Save the game state to persist the flag
        }
        const newMultiplier = calculatePrestigeMultiplier();
        prestigeButton.textContent = `Prestige (x${(newMultiplier / epsMultiplier).toFixed(2)} multiplier)`;
        prestigeButton.style.display = 'block';
    } else {
        prestigeButton.style.display = 'none';
    }
}

function canAscend() {
    return purchasedUpgrades.some(upgrade => upgrade.name === "Ascension") &&
           purchasedUpgrades.some(upgrade => !upgrade.isGodMode);
}

function canTranscend() {
    return purchasedUpgrades.some(upgrade => upgrade.name === "Transcendence");
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

function calculateBigCrunchMultiplier(bcPower = bigCrunchPower) {
    return Math.pow(2, Math.log10(bcPower / 1e-7));
}

// Function to calculate the ascension eps multiplier
function calculateAscensionEpsMult() {
    const power = twoDimensionalAscensionSkill ? 2 / 3 : 1 / 3;
    return epsMultiplier ** power;
}

async function ascend() {
    const upgradeText = numAscensionUpgrades > 1
        ? `select up to ${numAscensionUpgrades} upgrades to enhance and increase your god mode multiplier accordingly`
        : "select an upgrade to enhance and increase your god mode multiplier";
    const selectedUpgrades = await showMessageModal(
        'God-Mode Ascension',
        `Are you sure you want to enter God-Mode level ${godModeLevel + 1}?<br><br>
        Raising the level of God-Mode requires temporarily folding three dimensions in the space around you to a single point, which will unfortunately reduce your Prestige multiplier to its cube root. Your Prestige multiplier will shrink from <strong>x${formatNumber(epsMultiplier)}</strong> to <strong>x${formatNumber(calculateAscensionEpsMult())}</strong><br><br>
        On the bright side, your God-Mode multiplier will increase from <strong>x${formatNumber(godModeMultiplier)}</strong> to <strong>x${formatNumber(calculateGodModeMultiplier(godModeLevel+1))}</strong>!<br><br>
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


async function transcend() {}

async function bigCrunch() {

    if (canBigCrunch()) {

        const confirmed = await showMessageModal(
            'Big Crunch Confirmation',
            `Are you sure you want to prestige? You will reset all resources, prestiges, and god-mode levels, but your Big Crunch Multiplier will increase <strong>from ${formatNumber(bigCrunchMultiplier)} to ${formatNumber(calculateBigCrunchMultiplier(power))}</strong>.<br> Big crunch multiplier stacks with all your other multipliers, plus additionally affects your Knowledge generation! (Your Big Crunch Power will lock in at the current power level)`,
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
    } else {
        ascendButton.style.display = 'none';
    }
}


function updateTranscendButton() {
    const transcendButton = document.getElementById('transcendButton');
    if (canTranscend()) {
        transcendButton.style.display = 'block';
    } else {
        transcendButton.style.display = 'none';
    }
}

function updateBigCrunchButton() {
    const bigCrunchButton = document.getElementById('bigCrunchButton');
    if (bigCrunchUnlocked && canBigCrunch()) {
        const newMultiplier = calculateBigCrunchMultiplier(power);
        bigCrunchButton.textContent = `Big Crunch (x${(newMultiplier / bigCrunchMultiplier).toFixed(2)} multiplier)`;
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
    knowledge += effectiveKnowledgePerSecond * elapsedSeconds;
    power += effectivePowerPerSecond * elapsedSeconds;
    serenity += effectiveSerenityPerSecond * elapsedSeconds;
}

// Function to encode a name for safe usage in URLs or storage
function encodeName(name) {
    return encodeURIComponent(name);
}

// Function to decode an encoded name back to its original form
function decodeName(encodedName) {
    return decodeURIComponent(encodedName);
}

// Function to handle the purchase of an upgrade
function buyUpgrade(encodedUpgradeName) {
    // Decode the upgrade name
    const upgradeName = decodeName(encodedUpgradeName);
    // Find the upgrade object by its name in the available upgrades list
    const upgrade = availableUpgrades.find(up => up.name === upgradeName);

    // If the upgrade is not found, log an error and return
    if (!upgrade) {
        console.error(`Upgrade not found: ${upgradeName}`);
        return;
    }

    // Destructure the upgrade object to get its properties
    const { cost, earnings, img, name, message, miniPrestigeMultiplier } = upgrade;

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

        // Increase the per second earnings for each resource, apply God Mode multiplier if applicable
        const multiplier = upgrade.isGodMode ? 10 : 1;
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
        addPurchasedUpgrade(img, name, earnings, upgrade.isGodMode, upgrade.message);
        // Remove the upgrade from the available upgrades list
        availableUpgrades.splice(availableUpgrades.indexOf(upgrade), 1);
        // Add the upgrade to the purchased upgrades list
        purchasedUpgrades.push(upgrade);

        // Special case for unlocking the "Cookie Clicker" upgrade
        if (name === "Cookie Clicker" && firstTimeCookieUnlock) {
            document.getElementById('cookieButton').style.display = 'block';
            firstTimeCookieUnlock = false;
        } else if (name === "Cookie Clicker") {
            document.getElementById('cookieButton').style.display = 'block';
        }

        // Check if the upgrade message has been shown before
        const messageShownUpgrades = JSON.parse(localStorage.getItem('messageShownUpgrades')) || [];
        const isFirstPurchase = !messageShownUpgrades.includes(name);

        // Show a message if the upgrade has one and it's the first purchase
        if (message && isFirstPurchase) {
            showMessageModal(name, message);
            messageShownUpgrades.push(name);
            localStorage.setItem('messageShownUpgrades', JSON.stringify(messageShownUpgrades));
        }

        // Special case for the "Antimatter Dimension" upgrade
        if (name === "Antimatter Dimensions") {
            unhideKnowledge();
        }

        // Special case for the "Still very stupid" upgrade
        if (name === "Transcendence") {
            showMessageModal('Sadly', "This marks the end of v0.81. Your journey through this existential tale is just beginning. You've been amassing power, but the true meaning of transcendence remains a mystery. How could it relate to ascension? Stay tuned, as another big update is just a few days away. If you can't wait, feel free to restart the game and embark on speed runs, or explore alternate strategies. What will you discover next on your path to enlightenment?");
        }

        // Apply a mini prestige multiplier if the upgrade has one
        if (miniPrestigeMultiplier) {
            epsMultiplier *= miniPrestigeMultiplier;
        }

        // Update the upgrade list and display
        updateUpgradeList();
        updateMultipliersDisplay();
        updateEffectiveMultipliers();
        updateDisplay();
        // Save the game state
        saveGameState();

    } else {
        // Show an alert if the player does not have enough resources
        if (!isModalOpen) {
            showMessageModal('Purchase Denied', 'Not enough resources to purchase this upgrade.').then(() => {
                isModalOpen = false;
            });
        }
    }
    // Update the upgrade buttons to reflect the current state
    updateUpgradeButtons();
}



// Function to handle the purchase of multiple upgrades
function buyAllUpgrades(limit, pressedButton) {
    let purchasedCount = 0; // Initialize a counter for the purchased upgrades
    
    availableUpgrades.slice(0, limit).forEach(upgrade => {
        if (buyMarkersSkill) {
            const switchElement = JSON.parse(localStorage.getItem(`switchState-${upgrade.name}`));
            if (switchElement && isAffordable(upgrade.cost)) {
                buyUpgrade(encodeName(upgrade.name), true);
                purchasedCount++; // Increment counter when an upgrade is bought
            }
        } else {
            if (isAffordable(upgrade.cost)) {
                buyUpgrade(encodeName(upgrade.name), true);
                purchasedCount++; // Increment counter when an upgrade is bought
            }
        }
    });
    
    if (purchasedCount > 0) {
        showStatusMessage(pressedButton, `Purchased ${purchasedCount} upgrade(s).`, true);
    } else {
        showStatusMessage(pressedButton, 'No upgrades were purchased.', false);
    }
}





// Function to format the cost or earnings of an upgrade for display
function formatCostOrEarnings(costOrEarnings, isGodMode = false) {
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
            const adjustedValue = isGodMode ? value * 10 : value;
            result += `<p>${displayName}: ${formatNumber(adjustedValue)}</p>`; // Format as HTML paragraph
        }
    }
    return result;
}


// Function to add a purchased upgrade to the display
function addPurchasedUpgrade(img, name, earnings, isGodMode = false, message = null) {
    const purchasedList = document.getElementById('purchasedList'); // Get the purchased list container
    const upgradeElement = document.createElement('div'); // Create a new div element
    upgradeElement.classList.add('purchased-upgrade'); // Add the 'purchased-upgrade' class

    // Add the God Mode class if applicable
    if (isGodMode) {
        upgradeElement.classList.add('purchased-upgrade-godmode');
    }

    // Set the inner HTML of the new div element
    upgradeElement.innerHTML = `
        <div class="upgrade-header">
            <label class="switch">
                <input type="checkbox" id="toggle-${name}">
                <span class="slider"></span>
            </label>
        </div>
        <img src="${img}" alt="${name}" class="upgrade-image"> <!-- Upgrade image -->
        <div>
            <p class="upgrade-name">${name}</p> <!-- Upgrade name -->
            <div class="upgrade-earnings">
                ${formatCostOrEarnings(earnings, isGodMode)} <!-- Formatted earnings -->
            </div>
        </div>
    `;

    purchasedList.prepend(upgradeElement); // Prepend to show the most recent first

    // Add event listener for the switch to stop propagation
    const toggleSwitch = document.getElementById(`toggle-${name}`);
    if (toggleSwitch) {
        toggleSwitch.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }

    // If the upgrade has a message, add the 'clickable' class and an onclick event
    if (message) {
        upgradeElement.classList.add('clickable');
        upgradeElement.addEventListener('click', (event) => {
            if (!toggleSwitch || !toggleSwitch.contains(event.target)) {
                showMessageModal(name, message, false, false);
            }
        });
    }

    if (buyMarkersSkill) {
        // Load the switch state from local storage
        const savedSwitchState = JSON.parse(localStorage.getItem(`switchState-${name}`)) || false;
        if (toggleSwitch) {
            toggleSwitch.checked = savedSwitchState;
            toggleSwitch.parentElement.style.display = 'block'; // Make the switch visible

            // Add event listener for the switch
            toggleSwitch.addEventListener('change', (event) => {
                const state = event.target.checked ? 'On' : 'Off';
                console.log(`Switch for upgrade ${name} set to ${state}`);
                // Save the switch state to local storage
                localStorage.setItem(`switchState-${name}`, JSON.stringify(event.target.checked));
            });
        }
    } else {
        // Ensure switch is hidden if buyMarkersSkill is false
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

            // Add event listener for the switch
            toggleSwitch.addEventListener('change', (event) => {
                const state = event.target.checked ? 'On' : 'Off';
                console.log(`Switch for upgrade ${name} set to ${state}`);
                // Save the switch state to local storage
                localStorage.setItem(`switchState-${name}`, JSON.stringify(event.target.checked));
            });

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


// Function to update the upgrade list display
function updateUpgradeList() {
    const upgradeList = document.getElementById('upgradeList');
    upgradeList.innerHTML = ''; // Clear the current upgrade list

    // Limit the display to the top 7 upgrades
    let topUpgrades = availableUpgrades.slice(0, 7);

    // Check if "The Finale" is in the list and truncate the list if found
    const finaleIndex = topUpgrades.findIndex(upgrade => upgrade.name === 'The Finale');
    if (finaleIndex !== -1) {
        topUpgrades = topUpgrades.slice(0, finaleIndex + 1);
    }

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
        showTooltip(event, upgrade.name, upgrade.earnings, upgrade.isGodMode, upgrade.hoverOverwrite);
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

    // Update each available upgrade button
    availableUpgrades.forEach(upgrade => {
        const encodedName = encodeName(upgrade.name);
        const button = document.querySelector(`button[data-upgrade-name="${encodedName}"]`);
        if (button) {
            // Check if the upgrade is affordable based on current resources
            if (isAffordable(upgrade.cost)) {
                foundAffordableUpgrade = true;
                if (upgrade.isGodMode) {
                    button.classList.add('affordable-godmode');
                    button.classList.remove('affordable');
                } else {
                    button.classList.add('affordable');
                    button.classList.remove('affordable-godmode');
                }
            } else {
                button.classList.remove('affordable', 'affordable-godmode');
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
            hoverOverwrite: "Purchase all the affordable visible upgrades"
        });
        buySeenButton.listenersAttached = true;
    }
    if (!buyMaxButton.listenersAttached) {
        attachTooltipEvents(buyMaxButton, {
            name: "Buy All",
            earnings: null,
            isGodMode: false,
            hoverOverwrite: "Purchase all upgrades (can be more than 7)"
        });
        buyMaxButton.listenersAttached = true;
    }
}



// Assuming showTooltip and hideTooltip functions are defined elsewhere




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
        .slice(0, 100)
        .filter(up => !up.isGodMode);

    // Combine purchased upgrades and top 7 available upgrades
    //const possibleUpgrades = purchasedUpgrades.concat(top7AvailableUpgrades);
    const randomUpgrade = top100AvailableUpgrades[Math.floor(Math.random() * top100AvailableUpgrades.length)];
    if (randomUpgrade) {
        randomUpgrade.isGodMode = true;
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

// Function to increase prestige multiplier and calculate min resource
function devIncreasePrestigeMultiplier() {
    epsMultiplier = epsMultiplier * 1.1;
    prestigeRequirement = calculateMinResource();
    updateMultipliersDisplay();
    updateEffectiveMultipliers();
    updateDisplay();
}

// Add event listener for the key combinations
document.addEventListener('keydown', (event) => {
    if (event.shiftKey) {
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
            case 'P':
                devIncreasePrestigeMultiplier();
                break;
        }
    }
});


function showMessageModal(title, message, isConfirm = false, isUpgradeSelection = false, imageName = null) {
    return new Promise((resolve, reject) => {
        modalQueue.push({ title, message, isConfirm, isUpgradeSelection, imageName, resolve, reject });
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
    const closeButton = document.getElementById('closeMessageModal');
    const modalCloseButton = document.getElementById('modalCloseButton');
    const modalConfirmButtons = document.getElementById('modalConfirmButtons');
    const modalConfirmButton = document.getElementById('modalConfirmButton');
    const modalCancelButton = document.getElementById('modalCancelButton');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalImage = document.getElementById('modalImage'); // Add an image element in your HTML
    const ascendUpgradeSelection = document.getElementById('ascendUpgradeSelection');
    const ascendUpgradeList = document.getElementById('ascendUpgradeList');
    const gameInputSection = document.getElementById('gameInputSection');
    const gameInput = document.getElementById('gameInput');
    const submitGameInputButton = document.getElementById('submitGameInputButton');


    const { title, message, isConfirm, isUpgradeSelection, imageName, resolve } = modalQueue.shift();

    modalTitle.textContent = title || '';
    modalMessage.innerHTML = message || '';

    if (imageName) {
        modalImage.src = imageName; // Set the image source
        modalImage.style.display = 'block'; // Ensure the image is visible
    } else {
        modalImage.style.display = 'none'; // Hide the image if none is provided
    }

    modal.style.display = 'block';

    const closeModal = (result) => {
        modal.style.display = 'none';        
        document.removeEventListener('keydown', keydownHandler); // Remove event listener
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
        else if (event.key === 'Enter' && (message.includes('Enter the sequence:') || message.includes('What is '))){
            closeModal(gameInput.value);
        }
    };

    document.addEventListener('keydown', keydownHandler);

    if (isConfirm && isUpgradeSelection) {
        modalCloseButton.style.display = 'none';
        modalConfirmButtons.style.display = 'flex';
        ascendUpgradeSelection.style.display = 'block';
        ascendUpgradeList.innerHTML = '';

        let selectedUpgrades = [];

        purchasedUpgrades.forEach((upgrade, index) => {
            if (!upgrade.isGodMode) {
                const upgradeItem = document.createElement('div');
                upgradeItem.className = 'ascend-upgrade-item';
                upgradeItem.textContent = upgrade.name;
                upgradeItem.upgrade = upgrade;
                upgradeItem.onclick = () => {
                    if (upgradeItem.classList.contains('selected')) {
                        upgradeItem.classList.remove('selected');
                        selectedUpgrades = selectedUpgrades.filter(up => up !== upgrade);
                    } else {
                        if (selectedUpgrades.length < numAscensionUpgrades) {
                            upgradeItem.classList.add('selected');
                            selectedUpgrades.push(upgrade);
                        } else {
                            showImmediateMessageModal(`Not so fast!`, `You can only select ${numAscensionUpgrades} upgrade${numAscensionUpgrades > 1 ? 's' : ''}.`);
                        }
                    }
                };
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
        window.onclick = (event) => {
            if (event.target == modal) {
                closeModal(null);
            }
        };
    } else if (isConfirm) {
        modalCloseButton.style.display = 'none';
        modalConfirmButtons.style.display = 'flex';
        ascendUpgradeSelection.style.display = 'none';
        gameInputSection.style.display = 'none';

        modalConfirmButton.onclick = () => closeModal(true);
        modalCancelButton.onclick = () => closeModal(false);

        closeButton.onclick = () => closeModal(false);
        window.onclick = (event) => {
            if (event.target == modal) {
                closeModal(false);
            }
        };
    } else if (message.includes('Enter the sequence:') || message.includes('What is ')) {
        modalCloseButton.style.display = 'none';
        modalConfirmButtons.style.display = 'none';
        ascendUpgradeSelection.style.display = 'none';
        gameInputSection.style.display = 'block';

        gameInput.value = '';
        submitGameInputButton.onclick = () => closeModal(gameInput.value);

        closeButton.onclick = () => closeModal(null);
        window.onclick = (event) => {
            if (event.target == modal) {
                closeModal(null);
            }
        };
    } else {
        modalCloseButton.style.display = 'block';
        modalConfirmButtons.style.display = 'none';
        ascendUpgradeSelection.style.display = 'none';
        gameInputSection.style.display = 'none';

        modalCloseButton.onclick = () => closeModal();
        closeButton.onclick = () => closeModal();

        window.onclick = (event) => {
            if (event.target == modal) {
                closeModal();
            }
        };
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






// Function to show the welcome modal
function showWelcomeModal() {
    if (!knowledgeUnlocked){
        return showMessageModal(
            'Welcome to Degens Idle',
            `
            <p><span style="color: #FFD700;">Pro tip: Reading through these message dialogs could seriously level up your game experience. Just saying!</span></p>
            <p>Step into a world where the dankest memes meet the depths of introspective contemplation. In Degens Idle, you’re not just collecting resources—you’re diving headfirst into a journey of existential discovery.</p>
            <p>Embrace the grind as you gather Copium, Delusion, Yacht Money, Troll Points, and the elusive Hopium. There will also be other knowns and unknowns lurking in the meme-iverse. Each click and upgrade is a step closer to understanding the universe of internet culture and your place within it.</p>
            <p>Are you ready to transcend the ordinary? To not only witness but harness the power of memes in their truest, most profound form? Every action you take will push you to ponder life’s greatest mysteries and your role in this meme-laden multiverse.</p>
            <h2>How to Play:</h2>
            <ul>
                <li><strong>Click & Upgrade:</strong> Start by clicking to gather Copium and other essential resources. Use them to unlock upgrades that boost your clicking power and resource generation, speeding up your progress.</li>
                <li><strong>Unlock & Explore:</strong> Venture into the meme-iverse to uncover hidden secrets. Every resource and upgrade opens doors to mysterious realms, revealing cryptic memes and powerful boosts that will deepen your journey into internet culture.</li>
                <li><strong>Ponder and Reflect:</strong> As you progress, consider the deeper meanings behind the memes. What messages do they convey? How do they reflect your role in this digital multiverse? The more you explore, the clearer the connections between memes, culture, and your journey in the game become.</li>
                <li><strong>Strategy Counts:</strong> With a solid strategy, you can be much more efficient in your progress, but remember, this is a single-player game—it’s not a race. Take your time, explore at your own pace, and savor every moment as you carve your own path to greatness.</li>
            </ul>

            `
        );
    }
}

function openLibrary() {
    const libraryUpgrade = purchasedUpgrades.find(upgrade => upgrade.name === "The Library");
    if (libraryUpgrade) {
        document.getElementById('libraryOverlay').style.display = 'flex';
    } else {
        showMessageModal('Access Denied', 'You are not worthy to enter the Hall of Knowledge. The ancient tomes and secrets within remain beyond your reach. Perhaps it is time to look inwards and seek understanding within yourself first. Only through inner reflection and growth will you gain the wisdom needed to unlock the secrets of this sacred place.');
    }
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
    // Add event listener for the restart buttons
    document.getElementById('restartButton').addEventListener('click', () => restartGame(false));
    document.getElementById('restartPrestige').addEventListener('click', () => restartPrestige());

    // Add event listener for the prestige button
    document.getElementById('prestigeButton').addEventListener('click', prestige);

    // Add event listener for the ascend button
    document.getElementById('ascendButton').addEventListener('click', ascend);

    // Add event listener for the transcend button
    document.getElementById('transcendButton').addEventListener('click', transcend);
    
    // Add event listener for the ascend button
    document.getElementById('bigCrunchButton').addEventListener('click', bigCrunch);

    // Add event listener for the buy all upgrades button
    document.getElementById('buySeenButton').addEventListener('click', function() { buyAllUpgrades(7, this);});
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

    // Library Skills -- has to happen before loadGameState!
    initializeSkills();

    // Load the game state from local storage 
    loadGameState();

    showWelcomeModal();

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
