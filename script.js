

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

// Mini-game timeouts in milliseconds
const miniGameTimeouts = {
    speed: 10 * 60 * 1000,    // 10 minutes
    memory: 5 * 60 * 1000,   // 5 minutes
    math: 7 * 60 * 1000,  // 7 minutes
    luck: 3 * 60 * 1000 // 3 minutes
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

// Modified functions to include saveGameState
function collectResource(resource) {
    if (resource === 'copium') copium += epsMultiplier;
    if (resource === 'delusion') delusion += epsMultiplier;
    if (resource === 'yarmulkes') yarmulkes += epsMultiplier;
    if (resource === 'trollPoints') trollPoints += epsMultiplier;
    updateDisplay();
    saveGameState();
}

function loadGameState() {
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
    prestiges = parseInt(localStorage.getItem('prestiges')) || 0;
    epsMultiplier = parseFloat(localStorage.getItem('epsMultiplier')) || 1;
    prestigeRequirement = parseFloat(localStorage.getItem('prestigeRequirement')) || 1000;
    const lastInteraction = parseInt(localStorage.getItem('lastInteraction')) || Date.now();

    const savedPurchasedUpgrades = JSON.parse(localStorage.getItem('purchasedUpgrades')) || [];
    purchasedUpgrades = savedPurchasedUpgrades.map(upgradeName => upgrades.find(up => up.name === upgradeName));

    availableUpgrades = upgrades.filter(upgrade => !savedPurchasedUpgrades.includes(upgrade.name));

    purchasedUpgrades.forEach(upgrade => {
        if (upgrade) {
            addPurchasedUpgrade(upgrade.img, upgrade.name, upgrade.earnings);
            if (upgrade.name === "Cookie Clicker") {
                document.getElementById('cookieButton').style.display = 'block';
                firstTimeCookieUnlock = false; // Indicate that the cookie button has been previously unlocked
            }
        }
    });

    const now = Date.now();
    const elapsedSeconds = (now - lastInteraction) / 1000;
    generateIdleResources(elapsedSeconds);

    updateDisplay();
    updateUpgradeList();
    unlockMiniGames();
}






// Save game state to localStorage
function saveGameState() {
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
    localStorage.setItem('prestiges', prestiges);
    localStorage.setItem('epsMultiplier', epsMultiplier);
    localStorage.setItem('prestigeRequirement', prestigeRequirement);
    localStorage.setItem('lastInteraction', Date.now());
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



function playMiniGame(gameType) {
    if (cooldowns[gameType]) return;

    const button = document.getElementById(`${gameType}Game`);
    button.disabled = true; // Disable button at the start of the game
    button.classList.remove('affordable'); // Remove the green class
    button.classList.add('disabled'); // Add a disabled class to change its appearance

    if (gameType === 'speed') {
        // Speed game logic
        let points = 0;
        let duration = Math.floor(Math.random() * 8) + 1; // Random duration between 1 and 8 seconds
        alert(`Tap on the screen as many times as you can in ${duration} seconds!`);

        function clickHandler() {
            points++;
        }

        document.addEventListener('click', clickHandler);
        document.addEventListener('touchstart', clickHandler); // Add touch event listener

        setTimeout(() => {
            document.removeEventListener('click', clickHandler);
            document.removeEventListener('touchstart', clickHandler); // Remove touch event listener
            let clicksPerSecond = points / duration;
            let reward;
            if (clicksPerSecond > 3) { // More than 3 clicks per second
                reward = Math.max(Math.floor(copium * ((clicksPerSecond - 3) * 0.03)), 25);
                alert(`You tapped ${points} times in ${duration} seconds (${clicksPerSecond.toFixed(1)} taps per second). You won and earned ${reward.toFixed(2)} copium!`);
            } else {
                reward = -Math.max(Math.floor(Math.random() * Math.abs(copium) * 0.1), 10);
                alert(`You tapped ${points} times in ${duration} seconds (${clicksPerSecond.toFixed(1)} taps per second). You lost and earned ${reward.toFixed(2)} copium!`);
            }
            copium += reward;
            updateDisplay();
            startCooldown(gameType); // Start cooldown
        }, duration * 1000);
    } else if (gameType === 'memory') {
        // Memory game logic
        let sequenceLength = Math.floor(Math.random() * 6) + 3; // Random length between 3 and 8
        let sequence = '';
        for (let i = 0; i < sequenceLength; i++) {
            sequence += Math.floor(Math.random() * 10); // Random digit between 0 and 9
        }
        let timeout = Math.floor(Math.random() * 48) + 3; // Random timeout between 3 and 50 seconds
        alert('Remember this sequence: ' + sequence);
        setTimeout(() => {
            let userSequence = prompt('Enter the sequence:');
            let correct = userSequence === sequence;
            let reward = correct ? Math.max(Math.floor(delusion * 0.5), 25) : -Math.max(Math.floor(Math.random() * Math.abs(delusion) * 0.1), 10);
            if (delusion < 0 && !correct) reward += 10;
            delusion += reward;
            alert(`You ${correct ? 'won' : 'lost'} and earned ${reward.toFixed(2)} delusion!`);
            updateDisplay();
            startCooldown(gameType); // Start cooldown
        }, timeout * 1000);
    } else if (gameType === 'math') {
        // Math game logic
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
        alert(`You ${Math.abs(Number(answer) - correctAnswer) < 0.01 ? 'won' : 'lost'} and earned ${reward.toFixed(2)} yarmulkes!`);
        updateDisplay();
        startCooldown(gameType); // Start cooldown
    } else if (gameType === 'luck') {
        // Luck game logic
        let reward = Math.floor(Math.random() * (trollPoints * 2 + 25)) - trollPoints;
        trollPoints += reward;
        alert(`You earned ${reward.toFixed(2)} troll points!`);
        updateDisplay();
        startCooldown(gameType); // Start cooldown
    }
}

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

function unlockMiniGames() {
    const now = Date.now();

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




function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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

function updateTradeRatio() {
    const fromResource = document.getElementById('fromResource').value;
    const toResource = document.getElementById('toResource').value;
    const tradeRatioDisplay = document.getElementById('tradeRatioDisplay');

    if (fromResource === 'copium' && toResource === 'hopium') {
        tradeRatioDisplay.textContent = 'Trade ratio is 100,000,000:1';
    } else if (toResource === 'hopium') {
        tradeRatioDisplay.textContent = 'Only Copium can convert to Hopium';
    } else {
        tradeRatioDisplay.textContent = 'Trade ratio is 5:1';
    }
}


function tradeResources() {
    const fromResource = document.getElementById('fromResource').value;
    const toResource = document.getElementById('toResource').value;
    const tradeAmount = parseInt(document.getElementById('tradeAmount').value);

    if (fromResource === toResource) {
        alert("Cannot trade the same resource.");
        return;
    }

    const resourceAmount = {
        copium: copium,
        delusion: delusion,
        yarmulkes: yarmulkes,
        trollPoints: trollPoints,
        hopium: hopium
    };

    if (fromResource === 'copium' && toResource === 'hopium') {
        // Special trade case for Copium to Hopium
        if (resourceAmount[fromResource] < tradeAmount) {
            alert(`Not enough ${fromResource} to trade.`);
            return;
        }
        resourceAmount[fromResource] -= tradeAmount;
        resourceAmount[toResource] += tradeAmount / 100000000;
    } else if (toResource === 'hopium') {
        alert("Only Copium can convert to Hopium.");
        return;
    } else {
        if (resourceAmount[fromResource] < tradeAmount) {
            alert(`Not enough ${fromResource} to trade.`);
            return;
        }
        resourceAmount[fromResource] -= tradeAmount;
        resourceAmount[toResource] += tradeAmount / 5;
    }

    copium = resourceAmount.copium;
    delusion = resourceAmount.delusion;
    yarmulkes = resourceAmount.yarmulkes;
    trollPoints = resourceAmount.trollPoints;
    hopium = resourceAmount.hopium;

    updateDisplay();
}

function updateDisplay() {
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

    // Update prestige count and multiplier
    document.getElementById('prestiges').textContent = prestiges;
    document.getElementById('multiplier').textContent = `(x${epsMultiplier.toFixed(2)} multiplier on everything)`;

    // Show prestige button if eligible
    if (copium > prestigeRequirement && delusion > prestigeRequirement && yarmulkes > prestigeRequirement && trollPoints > prestigeRequirement) {
        document.getElementById('prestigeButton').style.display = 'block';
    } else {
        document.getElementById('prestigeButton').style.display = 'none';
    }

    updateUpgradeButtons();
}



function prestige() {
    prestiges++;
    epsMultiplier *= 1.5;
    prestigeRequirement *= 10; // Increase the requirement by 10x for the next prestige

    // Reset resources and earnings per second
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

    // Move purchased upgrades back to available upgrades
    purchasedUpgrades.forEach(upgrade => {
        if (!availableUpgrades.includes(upgrade)) {
            availableUpgrades.push(upgrade);
        }
    });
    purchasedUpgrades = [];
    document.getElementById('purchasedList').innerHTML = ''; // Clear the purchased upgrades list

    updateDisplay();
    updateUpgradeButtons();
    updateUpgradeList();
    alert(`Prestige activated! Current EPS multiplier: x${epsMultiplier.toFixed(2)}. Next prestige requirement: ${prestigeRequirement}`);
    saveGameState();
}






function generateIdleResources(elapsedSeconds) {
    copium += copiumPerSecond * epsMultiplier * elapsedSeconds;
    delusion += delusionPerSecond * epsMultiplier * elapsedSeconds;
    yarmulkes += yarmulkesPerSecond * epsMultiplier * elapsedSeconds;
    trollPoints += trollPointsPerSecond * epsMultiplier * elapsedSeconds;
    hopium += hopiumPerSecond * epsMultiplier * elapsedSeconds;
}

function encodeName(name) {
    return encodeURIComponent(name);
}

function decodeName(encodedName) {
    return decodeURIComponent(encodedName);
}

function buyUpgrade(encodedUpgradeName) {
    const upgradeName = decodeName(encodedUpgradeName);
    const upgrade = availableUpgrades.find(up => up.name === upgradeName);
    if (!upgrade) {
        console.error(`Upgrade not found: ${upgradeName}`);
        return;
    }

    const { cost, earnings, img, name, message, miniPrestigeMultiplier } = upgrade;

    if ((cost.copium === 0 || copium >= cost.copium) &&
        (cost.delusion === 0 || delusion >= cost.delusion) &&
        (cost.yarmulkes === 0 || yarmulkes >= cost.yarmulkes) &&
        (cost.trollPoints === 0 || trollPoints >= cost.trollPoints) &&
        (cost.hopium === 0 || hopium >= cost.hopium)) {

        copium -= cost.copium;
        delusion -= cost.delusion;
        yarmulkes -= cost.yarmulkes;
        trollPoints -= cost.trollPoints;
        hopium -= cost.hopium;

        copiumPerSecond += earnings.copiumPerSecond || 0;
        delusionPerSecond += earnings.delusionPerSecond || 0;
        yarmulkesPerSecond += earnings.yarmulkesPerSecond || 0;
        trollPointsPerSecond += earnings.trollPointsPerSecond || 0;
        hopiumPerSecond += earnings.hopiumPerSecond || 0;

        addPurchasedUpgrade(img, name, earnings);
        availableUpgrades.splice(availableUpgrades.indexOf(upgrade), 1); // Remove the purchased upgrade
        purchasedUpgrades.push(upgrade); // Track purchased upgrade
        updateUpgradeList();
        updateDisplay();
        saveGameState();

        if (name === "Cookie Clicker" && firstTimeCookieUnlock) {
            document.getElementById('cookieButton').style.display = 'block';
            alert("In the vast world of idle games, one title stands as the beacon that lit the path for all others: Cookie Clicker. Launched in 2013, Cookie Clicker captivated millions with its simple yet endlessly engaging premise. The thrill of watching numbers grow, the joy of achieving milestones, and the addictiveness of endless clicking and upgrading—all these elements combined to create a phenomenon that transcended the gaming community.\n\n In homage to this legendary game, you have now unlocked a cookie! Clicking this cookie will count as clicking each collect button 10 times! It will persist across Prestiges! Happy clicking!")
            firstTimeCookieUnlock = false;
        } else if (name === "Cookie Clicker") {
            document.getElementById('cookieButton').style.display = 'block';
        }

        if (message) {
            alert(message);
        }

        if (name === "Hunt for Hussein") {
            alert("This is the end of v0.4. You can sit here and watch your Hopium infinitely decrease. At this pace should have another big update within a couple days.")
        }

        if (miniPrestigeMultiplier) {
            epsMultiplier *= miniPrestigeMultiplier;
            alert(`Prestige multiplier changed to x${epsMultiplier.toFixed(2)}`);
        }
    } else {
        alert('Not enough resources to purchase this upgrade.');
    }
    updateUpgradeButtons(); // Update buttons after purchasing an upgrade
}



function formatCostOrEarnings(costOrEarnings) {
    const abbreviations = {
        copiumPerSecond: 'CPS',
        delusionPerSecond: 'DPS',
        yarmulkesPerSecond: 'YPS',
        trollPointsPerSecond: 'TPS',
        hopiumPerSecond: 'HPS'
    };

    let result = '';
    for (const [resource, value] of Object.entries(costOrEarnings)) {
        if (value !== 0) {
            const displayName = abbreviations[resource] || resource.charAt(0).toUpperCase() + resource.slice(1);
            result += `<p>${displayName}: ${value}</p>`;
        }
    }
    return result;
}


function addPurchasedUpgrade(img, name, earnings) {
    const purchasedList = document.getElementById('purchasedList');
    const upgradeElement = document.createElement('div');
    upgradeElement.classList.add('purchased-upgrade');

    upgradeElement.innerHTML = `
        <img src="${img}" alt="${name}">
        <div>
            <p>${name}</p>
            <div class="upgrade-earnings">
                ${formatCostOrEarnings(earnings)}
            </div>
        </div>
    `;
    purchasedList.prepend(upgradeElement); // Prepend to show the most recent first
}



function getTotalCost(upgrade) {
    return (upgrade.cost.copium || 0) + (upgrade.cost.delusion || 0) + (upgrade.cost.yarmulkes || 0) + (upgrade.cost.trollPoints || 0);
}

function updateUpgradeList() {
    const upgradeList = document.getElementById('upgradeList');
    upgradeList.innerHTML = '';

    // Sort available upgrades by total cost
    const sortedUpgrades = availableUpgrades.slice().sort((a, b) => getTotalCost(a) - getTotalCost(b));

    // Limit to top 7 upgrades
    const topUpgrades = sortedUpgrades.slice(0, 7);

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
        upgradeList.appendChild(upgradeElement);
    });

    // Attach event listeners to the new buttons
    document.querySelectorAll('[data-upgrade-name]').forEach(button => {
        button.addEventListener('click', () => {
            const encodedName = button.getAttribute('data-upgrade-name');
            buyUpgrade(encodedName);
        });
    });

    // Update the upgrade buttons to highlight affordable ones
    updateUpgradeButtons();
}




function updateUpgradeButtons() {
    upgrades.forEach(upgrade => {
        const encodedName = encodeName(upgrade.name);
        const button = document.querySelector(`button[data-upgrade-name="${encodedName}"]`);
        if (button) {
            const { cost } = upgrade;
            const affordable = (cost.copium === 0 || copium >= cost.copium) &&
                               (cost.delusion === 0 || delusion >= cost.delusion) &&
                               (cost.yarmulkes === 0 || yarmulkes >= cost.yarmulkes) &&
                               (cost.trollPoints === 0 || trollPoints >= cost.trollPoints);
            if (affordable) {
                button.classList.add('affordable');
            } else {
                button.classList.remove('affordable');
            }
        }
    });
}



let developerMode = false;

function toggleDeveloperMode() {
    developerMode = !developerMode;
    if (developerMode) {
        copiumPerSecond *= 100;
        delusionPerSecond *= 100;
        yarmulkesPerSecond *= 100;
        trollPointsPerSecond *= 100;
        alert("Developer Mode Activated: Resource generation is now 100x faster!");
    } else {
        copiumPerSecond /= 100;
        delusionPerSecond /= 100;
        yarmulkesPerSecond /= 100;
        trollPointsPerSecond /= 100;
        alert("Developer Mode Deactivated: Resource generation is back to normal.");
    }
    updateDisplay();
}

// Add event listener for the key combination
document.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.key === 'D') {
        toggleDeveloperMode();
    }
});


window.prestige = prestige;
window.updateDisplay = updateDisplay;
window.updateUpgradeButtons = updateUpgradeButtons;
window.updateUpgradeList = updateUpgradeList;
window.collectResource = collectResource;
window.generateResources = generateResources;
window.buyUpgrade = buyUpgrade;

document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for the cookie button
    document.getElementById('cookieButton').addEventListener('click', collectAllResources);

    // Existing event listeners
    document.getElementById('collectCopiumButton').addEventListener('click', () => { collectResource('copium'); });
    document.getElementById('collectDelusionButton').addEventListener('click', () => { collectResource('delusion'); });
    document.getElementById('collectYarmulkesButton').addEventListener('click', () => { collectResource('yarmulkes'); });
    document.getElementById('collectTrollPointsButton').addEventListener('click', () => { collectResource('trollPoints'); });

    // Add event listeners for mini-game buttons
    document.getElementById('speedGame').addEventListener('click', () => { playMiniGame('speed'); });
    document.getElementById('memoryGame').addEventListener('click', () => { playMiniGame('memory'); });
    document.getElementById('mathGame').addEventListener('click', () => { playMiniGame('math'); });
    document.getElementById('luckGame').addEventListener('click', () => { playMiniGame('luck'); });

    document.getElementById('tradeButton').addEventListener('click', () => {
        tradeResources();
        saveGameState();
    });

    document.getElementById('restartButton').addEventListener('click', restartGame);
    document.getElementById('prestigeButton').addEventListener('click', prestige);

    loadGameState();
    unlockMiniGames(); // Ensure mini-games are unlocked after loading the game state
    setInterval(generateResources, 1000);
    updateDisplay();
    updateUpgradeList();
    window.addEventListener('beforeunload', saveGameState);
});