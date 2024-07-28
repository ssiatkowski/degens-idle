

let copium = 0;
let copiumPerSecond = 0;
let delusion = 0;
let delusionPerSecond = 0;
let yarmulkes = 0;
let yarmulkesPerSecond = 0;
let trollPoints = 0;
let trollPointsPerSecond = 0;
let hopium = 0;
let hopiumPerSecond = 0;
let cooldowns = {
    copium: false,
    delusion: false,
    yarmulkes: false,
    trollPoints: false
};

let prestiges = 0;
let epsMultiplier = 1;
let prestigeRequirement = 1000;
let purchasedUpgrades = [];

let firstTimeCookieUnlock = true;

let modalQueue = [];
let isModalOpen = false;

// Mini-game timeouts in milliseconds
const miniGameTimeouts = {
    speed: 10 * 60 * 1000,  // 10 minutes
    memory: 5 * 60 * 1000,  // 5 minutes
    math: 7 * 60 * 1000,    // 7 minutes
    luck: 3 * 60 * 1000     // 3 minutes
};


// Function to handle cookie click
function collectAllResources() {
    copium += 10 * epsMultiplier;
    delusion += 10 * epsMultiplier;
    yarmulkes += 10 * epsMultiplier;
    trollPoints += 10 * epsMultiplier;
    updateDisplay();
    saveGameState();
}

// Function to collect a specific resource and update the game state
function collectResource(resource) {
    // Increase the appropriate resource by the epsMultiplier
    if (resource === 'copium') copium += epsMultiplier;
    if (resource === 'delusion') delusion += epsMultiplier;
    if (resource === 'yarmulkes') yarmulkes += epsMultiplier;
    if (resource === 'trollPoints') trollPoints += epsMultiplier;
    
    // Update the display to reflect the new resource values
    updateDisplay();
    
    // Save the current game state to local storage
    saveGameState();
}

// Function to load the game state from local storage
function loadGameState() {
    // Retrieve and parse the resource values from local storage, defaulting to 0 if not found
    copium = parseFloat(localStorage.getItem('copium')) || 0;
    copiumPerSecond = parseFloat(localStorage.getItem('copiumPerSecond')) || 0;
    delusion = parseFloat(localStorage.getItem('delusion')) || 0;
    delusionPerSecond = parseFloat(localStorage.getItem('delusionPerSecond')) || 0;
    yarmulkes = parseFloat(localStorage.getItem('yarmulkes')) || 0;
    yarmulkesPerSecond = parseFloat(localStorage.getItem('yarmulkesPerSecond')) || 0;
    trollPoints = parseFloat(localStorage.getItem('trollPoints')) || 0;
    trollPointsPerSecond = parseFloat(localStorage.getItem('trollPointsPerSecond')) || 0;
    hopium = parseFloat(localStorage.getItem('hopium')) || 0;
    hopiumPerSecond = parseFloat(localStorage.getItem('hopiumPerSecond')) || 0;
    
    // Retrieve and parse the prestige values from local storage, defaulting to 0 or 1 if not found
    prestiges = parseInt(localStorage.getItem('prestiges')) || 0;
    epsMultiplier = parseFloat(localStorage.getItem('epsMultiplier')) || 1;
    prestigeRequirement = parseFloat(localStorage.getItem('prestigeRequirement')) || 1000;
    
    // Retrieve the last interaction time, defaulting to the current time if not found
    const lastInteraction = parseInt(localStorage.getItem('lastInteraction')) || Date.now();

    // Retrieve and parse the purchased upgrades from local storage, defaulting to an empty array if not found
    const savedPurchasedUpgrades = JSON.parse(localStorage.getItem('purchasedUpgrades')) || [];
    
    // Map the saved purchased upgrade names to the actual upgrade objects
    purchasedUpgrades = savedPurchasedUpgrades.map(upgradeName => upgrades.find(up => up.name === upgradeName));

    // Filter out the available upgrades that have not been purchased yet
    availableUpgrades = upgrades.filter(upgrade => !savedPurchasedUpgrades.includes(upgrade.name));

    // Reapply the purchased upgrades and handle any special cases (e.g., "Cookie Clicker")
    purchasedUpgrades.forEach(upgrade => {
        if (upgrade) {
            addPurchasedUpgrade(upgrade.img, upgrade.name, upgrade.earnings);
            if (upgrade.name === "Cookie Clicker") {
                document.getElementById('cookieButton').style.display = 'block';
                firstTimeCookieUnlock = false; // Indicate that the cookie button has been previously unlocked
            }
        }
    });

    // Calculate the elapsed time since the last interaction
    const now = Date.now();
    const elapsedSeconds = (now - lastInteraction) / 1000;
    
    // Generate idle resources based on the elapsed time
    generateIdleResources(elapsedSeconds);

    // Update the display and the upgrade list, and unlock any available mini-games
    updateDisplay();
    updateUpgradeList();
    unlockMiniGames();
}

// Function to save the current game state to local storage
function saveGameState() {
    // Save the resource values to local storage
    localStorage.setItem('copium', copium);
    localStorage.setItem('copiumPerSecond', copiumPerSecond);
    localStorage.setItem('delusion', delusion);
    localStorage.setItem('delusionPerSecond', delusionPerSecond);
    localStorage.setItem('yarmulkes', yarmulkes);
    localStorage.setItem('yarmulkesPerSecond', yarmulkesPerSecond);
    localStorage.setItem('trollPoints', trollPoints);
    localStorage.setItem('trollPointsPerSecond', trollPointsPerSecond);
    localStorage.setItem('hopium', hopium);
    localStorage.setItem('hopiumPerSecond', hopiumPerSecond);
    
    // Save the prestige values to local storage
    localStorage.setItem('prestiges', prestiges);
    localStorage.setItem('epsMultiplier', epsMultiplier);
    localStorage.setItem('prestigeRequirement', prestigeRequirement);
    
    // Save the current time as the last interaction time
    localStorage.setItem('lastInteraction', Date.now());
    
    // Save the purchased upgrades as a JSON string
    localStorage.setItem('purchasedUpgrades', JSON.stringify(purchasedUpgrades.map(upgrade => upgrade.name)));
}



// Generate resources based on elapsed time
function generateResources() {
    copium += copiumPerSecond * epsMultiplier;
    delusion += delusionPerSecond * epsMultiplier;
    yarmulkes += yarmulkesPerSecond * epsMultiplier;
    trollPoints += trollPointsPerSecond * epsMultiplier;
    hopium += hopiumPerSecond * epsMultiplier;
    updateDisplay();
    saveGameState();
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

    // Speed mini-game logic
    if (gameType === 'speed') {
        let points = 0;
        let duration = Math.floor(Math.random() * 8) + 1; // Random duration between 1 and 8 seconds
        showMessageModal(`Tap on the screen as many times as you can in ${duration} seconds!`);

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
            let clicksPerSecond = points / duration;
            let reward;
            if (clicksPerSecond > 3) { // More than 3 clicks per second
                reward = Math.max(Math.floor(copium * ((clicksPerSecond - 3) * 0.03)), 25);
                showMessageModal(`You tapped ${points} times in ${duration} seconds (${clicksPerSecond.toFixed(1)} taps per second). You won and earned ${reward.toFixed(2)} copium!`);
            } else {
                reward = -Math.max(Math.floor(Math.random() * Math.abs(copium) * 0.1), 10);
                showMessageModal(`You tapped ${points} times in ${duration} seconds (${clicksPerSecond.toFixed(1)} taps per second). You lost and earned ${reward.toFixed(2)} copium!`);
            }
            copium += reward;
            updateDisplay(); // Update the display
            startCooldown(gameType); // Start cooldown for the mini-game
        }, duration * 1000);
    } else if (gameType === 'memory') {
        // Memory mini-game logic
        let sequenceLength = Math.floor(Math.random() * 6) + 3; // Random length between 3 and 8
        let sequence = '';
        for (let i = 0; i < sequenceLength; i++) {
            sequence += Math.floor(Math.random() * 10); // Random digit between 0 and 9
        }
        let timeout = Math.floor(Math.random() * 48) + 3; // Random timeout between 3 and 50 seconds
        showMessageModal('Remember this sequence: ' + sequence);
        setTimeout(() => {
            let userSequence = prompt('Enter the sequence:');
            let correct = userSequence === sequence;
            let reward = correct ? Math.max(Math.floor(delusion * 0.5), 25) : -Math.max(Math.floor(Math.random() * Math.abs(delusion) * 0.1), 10);
            if (delusion < 0 && !correct) reward += 10;
            delusion += reward;
            showMessageModal(`You ${correct ? 'won' : 'lost'} and earned ${reward.toFixed(2)} delusion!`);
            updateDisplay(); // Update the display
            startCooldown(gameType); // Start cooldown for the mini-game
        }, timeout * 1000);
    } else if (gameType === 'math') {
        // Math mini-game logic
        let num1 = Math.floor(Math.random() * 100) + 1;
        let num2 = Math.floor(Math.random() * 100) + 1;
        let num3 = Math.floor(Math.random() * 10) + 1;
        let operations = ['+', '-', '*', '/'];
        let op1 = operations[Math.floor(Math.random() * operations.length)];
        let op2 = operations[Math.floor(Math.random() * operations.length)];

        let question = `${num1} ${op1} ${num2} ${op2} ${num3}`;
        let correctAnswer = eval(question.replace('/', '* 1.0 /')); // Ensure floating point division

        let answer = prompt(`What is ${question}?`);
        let reward = Math.abs(Number(answer) - correctAnswer) < 0.01 ? Math.max(Math.floor(yarmulkes * 0.25), 10) : -Math.max(Math.floor(Math.random() * Math.abs(yarmulkes) * 0.1), 10);
        if (yarmulkes < 0 && Math.abs(Number(answer) - correctAnswer) >= 0.01) reward += 10;
        yarmulkes += reward;
        showMessageModal(`You ${Math.abs(Number(answer) - correctAnswer) < 0.01 ? 'won' : 'lost'} and earned ${reward.toFixed(2)} yarmulkes!`);
        updateDisplay(); // Update the display
        startCooldown(gameType); // Start cooldown for the mini-game
    } else if (gameType === 'luck') {
        // Luck mini-game logic
        let reward = Math.floor(Math.random() * (trollPoints * 2 + 25)) - trollPoints;
        trollPoints += reward;
        showMessageModal(`You earned ${reward.toFixed(2)} troll points!`);
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



function restartGame() {
    if (confirm("Are you sure you want to restart the game? This will reset all your progress.")) {
        // Reset all resources and earnings per second
        copium = 0;
        copiumPerSecond = 0;
        delusion = 0;
        delusionPerSecond = 0;
        yarmulkes = 0;
        yarmulkesPerSecond = 0;
        trollPoints = 0;
        trollPointsPerSecond = 0;
        hopium = 0;
        hopiumPerSecond = 0;

        // Reset prestiges and multipliers
        prestiges = 0;
        epsMultiplier = 1;
        prestigeRequirement = 1000;

        // Clear purchased upgrades
        purchasedUpgrades = [];
        document.getElementById('purchasedList').innerHTML = '';

        // Restore all upgrades
        availableUpgrades = upgrades.slice(); // Reset available upgrades to the original state

        // Hide the cookie button
        document.getElementById('cookieButton').style.display = 'none';
        firstTimeCookieUnlock = true;

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
        updateDisplay();
        updateUpgradeList();
    }
}

// Function to update the displayed trade ratio based on selected resources
function updateTradeRatio() {
    const fromResource = document.getElementById('fromResource').value;
    const toResource = document.getElementById('toResource').value;
    const tradeRatioDisplay = document.getElementById('tradeRatioDisplay');

    // Special case for trading Copium to Hopium
    if (fromResource === 'copium' && toResource === 'hopium') {
        tradeRatioDisplay.textContent = 'Trade ratio is 100,000,000:1';
    } else if (toResource === 'hopium') {
        tradeRatioDisplay.textContent = 'Only Copium can convert to Hopium';
    } else {
        tradeRatioDisplay.textContent = 'Trade ratio is 5:1';
    }
}

// Function to handle trading resources between different types
function tradeResources() {
    const fromResource = document.getElementById('fromResource').value;
    const toResource = document.getElementById('toResource').value;
    const tradeAmount = parseInt(document.getElementById('tradeAmount').value);

    // Check if the same resource is selected for both from and to
    if (fromResource === toResource) {
        showMessageModal("Cannot trade the same resource.");
        return;
    }

    // Object to store current amounts of each resource
    const resourceAmount = {
        copium: copium,
        delusion: delusion,
        yarmulkes: yarmulkes,
        trollPoints: trollPoints,
        hopium: hopium
    };

    // Special trade case for converting Copium to Hopium
    if (fromResource === 'copium' && toResource === 'hopium') {
        if (resourceAmount[fromResource] < tradeAmount) {
            showMessageModal(`Not enough ${fromResource} to trade.`);
            return;
        }
        resourceAmount[fromResource] -= tradeAmount;
        resourceAmount[toResource] += tradeAmount / 100000000;
    } else if (toResource === 'hopium') {
        showMessageModal("Only Copium can convert to Hopium.");
        return;
    } else {
        // General trade case for other resources
        if (resourceAmount[fromResource] < tradeAmount) {
            showMessageModal(`Not enough ${fromResource} to trade.`);
            return;
        }
        resourceAmount[fromResource] -= tradeAmount;
        resourceAmount[toResource] += tradeAmount / 5;
    }

    // Update global resource variables
    copium = resourceAmount.copium;
    delusion = resourceAmount.delusion;
    yarmulkes = resourceAmount.yarmulkes;
    trollPoints = resourceAmount.trollPoints;
    hopium = resourceAmount.hopium;

    // Update the display to reflect the new resource values
    updateDisplay();
}


// Function to update the display with the current game state
function updateDisplay() {
    // Update the text content of each resource element
    document.getElementById('copium').textContent = copium.toFixed(2);
    document.getElementById('cps').textContent = (copiumPerSecond * epsMultiplier).toFixed(2);
    document.getElementById('delusion').textContent = delusion.toFixed(2);
    document.getElementById('dps').textContent = (delusionPerSecond * epsMultiplier).toFixed(2);
    document.getElementById('yarmulkes').textContent = yarmulkes.toFixed(2);
    document.getElementById('yps').textContent = (yarmulkesPerSecond * epsMultiplier).toFixed(2);
    document.getElementById('trollPoints').textContent = trollPoints.toFixed(2);
    document.getElementById('tpps').textContent = (trollPointsPerSecond * epsMultiplier).toFixed(2);
    document.getElementById('hopium').textContent = hopium.toFixed(2);
    document.getElementById('hps').textContent = (hopiumPerSecond * epsMultiplier).toFixed(2);

    // Update the prestige count and multiplier display
    document.getElementById('prestige-multiplier').textContent = `Prestige: x${epsMultiplier.toFixed(2)} mult`;

    updatePrestigeButton();

    // Update the upgrade buttons to reflect the current game state
    updateUpgradeButtons();
}


// Function to calculate the prestige multiplier based on the lowest of the first four resources
function calculatePrestigeMultiplier() {
    const minResource = Math.min(copium, delusion, yarmulkes, trollPoints);
    return 1.5 ** (Math.log10(minResource / 1000) + 1);
}

// Check if the player can prestige
function canPrestige() {
    const minResource = Math.min(copium, delusion, yarmulkes, trollPoints);
    return minResource >= prestigeRequirement;
}

// Function to handle the prestige action
function prestige() {
    if (canPrestige()) {
        epsMultiplier = calculatePrestigeMultiplier();
        prestigeRequirement = Math.min(copium, delusion, yarmulkes, trollPoints);
        copium = 0;
        delusion = 0;
        yarmulkes = 0;
        trollPoints = 0;
        hopium = 0;
        copiumPerSecond = 0;
        delusionPerSecond = 0;
        yarmulkesPerSecond = 0;
        trollPointsPerSecond = 0;
        hopiumPerSecond = 0;
        prestiges += 1;
        purchasedUpgrades = [];
        availableUpgrades = upgrades.slice();
        saveGameState();
        showMessageModal('Prestige Successful!', `Your multiplier is now x${epsMultiplier.toFixed(2)}. All resources have been reset.`);
        updateDisplay();
        updateUpgradeList();
    }
}

// Update the display of the prestige button
function updatePrestigeButton() {
    
    const prestigeButton = document.getElementById('prestigeButton');
    if (canPrestige()) {
        const newMultiplier = calculatePrestigeMultiplier();
        prestigeButton.textContent = `Prestige (x${(newMultiplier / epsMultiplier).toFixed(2)} multiplier)`;
        prestigeButton.style.display = 'block';
    } else {
        prestigeButton.style.display = 'none';
    }
}


// Function to generate idle resources based on the elapsed time
function generateIdleResources(elapsedSeconds) {
    // Increase resources based on their per second values, elapsed time, and the multiplier
    copium += copiumPerSecond * epsMultiplier * elapsedSeconds;
    delusion += delusionPerSecond * epsMultiplier * elapsedSeconds;
    yarmulkes += yarmulkesPerSecond * epsMultiplier * elapsedSeconds;
    trollPoints += trollPointsPerSecond * epsMultiplier * elapsedSeconds;
    hopium += hopiumPerSecond * epsMultiplier * elapsedSeconds;
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
    if ((cost.copium === 0 || copium >= cost.copium) &&
        (cost.delusion === 0 || delusion >= cost.delusion) &&
        (cost.yarmulkes === 0 || yarmulkes >= cost.yarmulkes) &&
        (cost.trollPoints === 0 || trollPoints >= cost.trollPoints) &&
        (cost.hopium === 0 || hopium >= cost.hopium)) {

        // Deduct the cost from the player's resources
        copium -= cost.copium;
        delusion -= cost.delusion;
        yarmulkes -= cost.yarmulkes;
        trollPoints -= cost.trollPoints;
        hopium -= cost.hopium;

        // Increase the per second earnings for each resource
        copiumPerSecond += earnings.copiumPerSecond || 0;
        delusionPerSecond += earnings.delusionPerSecond || 0;
        yarmulkesPerSecond += earnings.yarmulkesPerSecond || 0;
        trollPointsPerSecond += earnings.trollPointsPerSecond || 0;
        hopiumPerSecond += earnings.hopiumPerSecond || 0;

        // Add the purchased upgrade to the display
        addPurchasedUpgrade(img, name, earnings);
        // Remove the upgrade from the available upgrades list
        availableUpgrades.splice(availableUpgrades.indexOf(upgrade), 1);
        // Add the upgrade to the purchased upgrades list
        purchasedUpgrades.push(upgrade);
        // Update the upgrade list and display
        updateUpgradeList();
        updateDisplay();
        // Save the game state
        saveGameState();

        // Special case for unlocking the "Cookie Clicker" upgrade
        if (name === "Cookie Clicker" && firstTimeCookieUnlock) {
            document.getElementById('cookieButton').style.display = 'block';
            showMessageModal("In the vast world of idle games, one title stands as the beacon that lit the path for all others: Cookie Clicker. Launched in 2013, Cookie Clicker captivated millions with its simple yet endlessly engaging premise. The thrill of watching numbers grow, the joy of achieving milestones, and the addictiveness of endless clicking and upgrading—all these elements combined to create a phenomenon that transcended the gaming community.\n\nIn homage to this legendary game, you have now unlocked a cookie! Clicking this cookie will count as clicking each collect button 10 times! It will persist across Prestiges! Happy clicking!");
            firstTimeCookieUnlock = false;
        } else if (name === "Cookie Clicker") {
            document.getElementById('cookieButton').style.display = 'block';
        }

        // Show a message if the upgrade has one
        if (message) {
            showMessageModal(message);
        }

        // Special case for the "Hunt for Hussein" upgrade
        if (name === "Hunt for Hussein") {
            showMessageModal("This is the end of v0.4. You can sit here and watch your Hopium infinitely decrease. At this pace should have another big update within a couple days.");
        }

        // Apply a mini prestige multiplier if the upgrade has one
        if (miniPrestigeMultiplier) {
            epsMultiplier *= miniPrestigeMultiplier;
            showMessageModal(`Prestige multiplier changed to x${epsMultiplier.toFixed(2)}`);
        }
    } else {
        // Show an alert if the player does not have enough resources
        showMessageModal('Not enough resources to purchase this upgrade.');
    }
    // Update the upgrade buttons to reflect the current state
    updateUpgradeButtons();
}




// Function to format the cost or earnings of an upgrade for display
function formatCostOrEarnings(costOrEarnings) {
    // Abbreviations for resource per second values
    const abbreviations = {
        copiumPerSecond: 'CPS',
        delusionPerSecond: 'DPS',
        yarmulkesPerSecond: 'YPS',
        trollPointsPerSecond: 'TPS',
        hopiumPerSecond: 'HPS'
    };

    let result = '';
    // Iterate over each resource and its value in the costOrEarnings object
    for (const [resource, value] of Object.entries(costOrEarnings)) {
        // Only include non-zero values
        if (value !== 0) {
            // Get the display name using abbreviations or capitalize the resource name
            const displayName = abbreviations[resource] || resource.charAt(0).toUpperCase() + resource.slice(1);
            result += `<p>${displayName}: ${value}</p>`; // Format as HTML paragraph
        }
    }
    return result;
}

// Function to add a purchased upgrade to the display
function addPurchasedUpgrade(img, name, earnings) {
    const purchasedList = document.getElementById('purchasedList'); // Get the purchased list container
    const upgradeElement = document.createElement('div'); // Create a new div element
    upgradeElement.classList.add('purchased-upgrade'); // Add the 'purchased-upgrade' class

    // Set the inner HTML of the new div element
    upgradeElement.innerHTML = `
        <img src="${img}" alt="${name}"> <!-- Upgrade image -->
        <div>
            <p>${name}</p> <!-- Upgrade name -->
            <div class="upgrade-earnings">
                ${formatCostOrEarnings(earnings)} <!-- Formatted earnings -->
            </div>
        </div>
    `;
    purchasedList.prepend(upgradeElement); // Prepend to show the most recent first
}

// Function to get the total cost of an upgrade
function getTotalCost(upgrade) {
    // Sum up the costs of all resources in the upgrade
    return (upgrade.cost.copium || 0) + 
           (upgrade.cost.delusion || 0) + 
           (upgrade.cost.yarmulkes || 0) + 
           (upgrade.cost.trollPoints || 0);
}


// Function to update the upgrade list display
function updateUpgradeList() {
    const upgradeList = document.getElementById('upgradeList');
    upgradeList.innerHTML = ''; // Clear the current upgrade list

    // Sort available upgrades by their total cost
    const sortedUpgrades = availableUpgrades.slice().sort((a, b) => getTotalCost(a) - getTotalCost(b));

    // Limit the display to the top 7 upgrades
    const topUpgrades = sortedUpgrades.slice(0, 7);

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
        });
    });

    // Update the upgrade buttons to highlight affordable ones
    updateUpgradeButtons();
}

// Function to update the appearance of upgrade buttons based on affordability
function updateUpgradeButtons() {
    upgrades.forEach(upgrade => {
        const encodedName = encodeName(upgrade.name);
        const button = document.querySelector(`button[data-upgrade-name="${encodedName}"]`);
        if (button) {
            const { cost } = upgrade;
            // Check if the upgrade is affordable based on current resources
            const affordable = (cost.copium === 0 || copium >= cost.copium) &&
                               (cost.delusion === 0 || delusion >= cost.delusion) &&
                               (cost.yarmulkes === 0 || yarmulkes >= cost.yarmulkes) &&
                               (cost.trollPoints === 0 || trollPoints >= cost.trollPoints);
            // Add or remove the 'affordable' class based on affordability
            if (affordable) {
                button.classList.add('affordable');
            } else {
                button.classList.remove('affordable');
            }
        }
    });
}

// Variable to track the state of developer mode
let developerMode = false;

// Function to toggle developer mode on and off
function toggleDeveloperMode() {
    developerMode = !developerMode; // Toggle the developer mode state
    if (developerMode) {
        // Increase resource generation rates by 100x in developer mode
        copiumPerSecond *= 100;
        delusionPerSecond *= 100;
        yarmulkesPerSecond *= 100;
        trollPointsPerSecond *= 100;
        showMessageModal("Developer Mode Activated: Resource generation is now 100x faster!");
    } else {
        // Reset resource generation rates to normal
        copiumPerSecond /= 100;
        delusionPerSecond /= 100;
        yarmulkesPerSecond /= 100;
        trollPointsPerSecond /= 100;
        showMessageModal("Developer Mode Deactivated: Resource generation is back to normal.");
    }
    updateDisplay(); // Update the display to reflect the changes
}


// Add event listener for the key combination
document.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.key === 'D') {
        toggleDeveloperMode();
    }
});

// Function to show a message modal
function showMessageModal(title, message) {
    modalQueue.push({ title, message });
    if (!isModalOpen) {
        displayNextModal();
    }
}

// Function to display the next modal in the queue
function displayNextModal() {
    if (modalQueue.length === 0) {
        isModalOpen = false;
        return;
    }

    isModalOpen = true;
    const modal = document.getElementById('messageModal');
    const closeButton = document.getElementById('closeMessageModal');
    const modalCloseButton = document.getElementById('modalCloseButton');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');

    const { title, message } = modalQueue.shift();

    // Set the title and message
    modalTitle.textContent = title;
    modalMessage.textContent = message;

    // Show the modal
    modal.style.display = 'block';

    // Function to close the modal
    const closeModal = () => {
        modal.style.display = 'none';
        displayNextModal(); // Display the next modal in the queue
    };

    // When the user clicks on the close button or the close modal button, close the modal
    closeButton.onclick = closeModal;
    modalCloseButton.onclick = closeModal;

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    };
}

// Function to show the welcome modal
function showWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    const closeButton = document.getElementById('closeWelcomeModal');

    // Show the modal
    modal.style.display = 'block';

    // When the user clicks on the close button, close the modal
    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}


// Show the welcome modal when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    showWelcomeModal();
    // Other existing event listeners and initializations
});



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
    document.getElementById('cookieButton').addEventListener('click', collectAllResources);

    // Add event listeners for resource collection buttons
    document.getElementById('collectCopiumButton').addEventListener('click', () => { collectResource('copium'); });
    document.getElementById('collectDelusionButton').addEventListener('click', () => { collectResource('delusion'); });
    document.getElementById('collectYarmulkesButton').addEventListener('click', () => { collectResource('yarmulkes'); });
    document.getElementById('collectTrollPointsButton').addEventListener('click', () => { collectResource('trollPoints'); });

    // Add event listeners for mini-game buttons
    document.getElementById('speedGame').addEventListener('click', () => { playMiniGame('speed'); });
    document.getElementById('memoryGame').addEventListener('click', () => { playMiniGame('memory'); });
    document.getElementById('mathGame').addEventListener('click', () => { playMiniGame('math'); });
    document.getElementById('luckGame').addEventListener('click', () => { playMiniGame('luck'); });

    // Add event listener for the trade button
    document.getElementById('tradeButton').addEventListener('click', () => {
        tradeResources(); // Perform the trade
        saveGameState(); // Save the game state after trading
    });
    // Add event listener for the restart button
    document.getElementById('restartButton').addEventListener('click', restartGame);

    // Add event listener for the prestige button
    document.getElementById('prestigeButton').addEventListener('click', prestige);


    showWelcomeModal();

    // Load the game state from local storage
    loadGameState();
    // Unlock mini-games based on the current game state
    unlockMiniGames(); 
    // Set an interval to generate resources every second
    setInterval(generateResources, 1000);
    // Update the display with the current game state
    updateDisplay();
    // Update the list of available upgrades
    updateUpgradeList();
    // Save the game state when the window is about to be unloaded
    window.addEventListener('beforeunload', saveGameState);
});
