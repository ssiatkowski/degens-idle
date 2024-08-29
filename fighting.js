const enemyStats = {
    "Training Dummy": {
        health: 100,
        minDamage: 1,
        maxDamage: 8,
        attackSpeed: 1,
        defense: 0,
        critChance: 0,
        critDamage: 1
    },
    "Agent Smith": {
        health: 300,
        minDamage: 5,
        maxDamage: 15,
        attackSpeed: 3,
        defense: 5,
        critChance: 0,
        critDamage: 1
    },
    "Shao Kahn": {
        health: 600,
        minDamage: 5,
        maxDamage: 25,
        attackSpeed: 3,
        defense: 16,
        critChance: 0.2,
        critDamage: 2
    },
    "Darth Vader": {
        health: 2800,
        minDamage: 8,
        maxDamage: 48,
        attackSpeed: 4,
        defense: 28,
        critChance: 0,
        critDamage: 1
    },
    "Isshin": {
        health: 4000,
        minDamage: 5,
        maxDamage: 12,
        attackSpeed: 45,
        defense: 300,
        critChance: 0.08,
        critDamage: 15
    },
    "Sauron": {
        health: 350000,
        minDamage: 30,
        maxDamage: 50,
        attackSpeed: 7,
        defense: 15000,
        critChance: 0.03,
        critDamage: 100
    },
    "Kratos": {
        health: 5e8,
        minDamage: 1,
        maxDamage: 2,
        attackSpeed: 30,
        defense: 3e6,
        critChance: 0,
        critDamage: 1
    },
    "Deadpool": {
        health: 6.9e8,
        minDamage: 69,
        maxDamage: 69,
        attackSpeed: 6.9,
        defense: 6.9e7,
        critChance: 0.69,
        critDamage: 1.69
    }
};

let playerAttackSpeed = 2;

// Variables to store player and enemy stats
let playerHealth, playerDefense, playerMinDamage, playerMaxDamage, playerCritChance, playerCritDamage;
let enemyHealth, enemyDefense, enemyMinDamage, enemyMaxDamage, enemyCritChance, enemyCritDamage, enemyAttackSpeed;
let playerMaxHealth, enemyMaxHealth, currEnemyName;
let playerInterval, enemyInterval;

let playerMinDamageMult = 0.25;
let playerMaxDamageMult = 1.75;
let playerHealthMult = 1;

let deadpoolRevives = 0;

let firstAttackOfBattle = false;

// Function to initialize and start the mini-game
function startFightGame(enemyName, enemyImg) {
    return new Promise((resolve) => {
        // Clear the fight log at the start of the fight
        const fightLog = document.getElementById('fightLog');
        fightLog.innerHTML = ''; // Clear previous fight logs

        // Add player and enemy images dynamically
        const playerImageContainer = document.getElementById('playerImageContainer');
        const enemyImageContainer = document.getElementById('enemyImageContainer');

        // Clear any previous images
        playerImageContainer.innerHTML = '';
        enemyImageContainer.innerHTML = '';

        // Create player image element
        const playerImage = document.createElement('img');
        playerImage.src = 'imgs/textures/character.png'; // Dynamic player image source
        playerImage.alt = "Player Image";
        playerImageContainer.appendChild(playerImage);

        // Create enemy image element
        const enemyImage = document.createElement('img');
        enemyImage.src = enemyImg; // Dynamic enemy image source
        enemyImage.alt = "Enemy Image";
        enemyImageContainer.appendChild(enemyImage);

        const sebosLuck = purchasedUpgrades.some(upgrade => upgrade.name === "Sebo's Luck");

        firstAttackOfBattle = primeImpactSkill ? true : false;

        // Get player stats from resources with rounding up
        playerHealth = Math.ceil((copium ** (1/20)) * playerHealthMult);
        playerMaxHealth = playerHealth;
        playerDefense = Math.ceil((delusion ** (1/12)) / 500);
        playerCritChance = Math.min(Math.ceil(trollPoints ** (1/50)) / 100, 0.9);
        playerCritChance = sebosLuck ? playerCritChance + 0.05 : playerCritChance;
        playerCritDamage = 1 + Math.min(Math.ceil(trollPoints ** (1/25)) / 100, 99);

        playerMinDamage = Math.floor(power * playerMinDamageMult);
        playerMaxDamage = Math.ceil(power * playerMaxDamageMult);

        currEnemyName = enemyName;

        const enemy = enemyStats[enemyName];

        // Set enemy stats using values from the enemyStats object
        enemyHealth = enemy.health;
        enemyMaxHealth = enemyHealth;
        enemyMinDamage = enemy.minDamage;
        enemyMaxDamage = enemy.maxDamage;
        enemyDefense = enemy.defense;
        enemyCritChance = enemy.critChance;
        enemyCritDamage = enemy.critDamage;
        enemyAttackSpeed = enemy.attackSpeed;

        // Populate player and enemy stats in the UI
        document.getElementById('playerHealthStat').innerText = formatNumber(playerHealth);
        document.getElementById('playerDamageStat').innerText = `${formatNumber(playerMinDamage)} - ${formatNumber(playerMaxDamage)}`;
        document.getElementById('playerAttackSpeedStat').innerText = formatNumber(playerAttackSpeed);
        document.getElementById('playerDefenseStat').innerText = formatNumber(playerDefense);
        document.getElementById('playerCritChanceStat').innerText = formatNumber(playerCritChance * 100) + '%';
        document.getElementById('playerCritDamageStat').innerText = formatNumber(playerCritDamage * 100) + '%';

        document.getElementById('enemyHealthStat').innerText = formatNumber(enemyHealth);
        document.getElementById('enemyDamageStat').innerText = `${formatNumber(enemyMinDamage)} - ${formatNumber(enemyMaxDamage)}`;
        document.getElementById('enemyAttackSpeedStat').innerText = formatNumber(enemyAttackSpeed);
        document.getElementById('enemyDefenseStat').innerText = formatNumber(enemyDefense);
        document.getElementById('enemyCritChanceStat').innerText = formatNumber(enemyCritChance * 100) + '%';
        document.getElementById('enemyCritDamageStat').innerText = formatNumber(enemyCritDamage * 100) + '%';

        // Update health bars
        updateHealthBars();

        fightEnded = false; // Reset the flag when the fight starts

        // Show the fighting overlay
        document.getElementById('fightingOverlay').style.display = 'flex';

        // Add event listener for the forfeit button
        const forfeitButton = document.getElementById('forfeitButton');
        if (forfeitButton) {
            forfeitButton.disabled = false;
        }
        forfeitButton.onclick = (event) => {
            event.stopPropagation(); // Prevent the click from propagating to the document
            logFight("<span style='color: red;'>You forfeited the fight!</span>");
            fightEnded = true; // Set the flag to true when forfeiting
            clearIntervals(); // Stop the game intervals
            forfeitButton.disabled = true; // Disable the forfeit button to prevent multiple clicks
            resolve(false); // Resolve the promise with a loss
            endFight(true); // Pass true to indicate the player forfeited
        };

        // Start the fight loop
        fightLoop(resolve);
    });
}

function fightLoop(resolve) {
    const playerAttackInterval = 5000 / playerAttackSpeed ; // Player attacks every 2 seconds (fixed)
    const enemyAttackInterval = 5000 / enemyAttackSpeed; // Calculate interval from attack speed

    // Player attack loop
    playerInterval = setInterval(() => {
        if (fightEnded) return; // Stop if the fight has ended

        attackEnemy();

        // Check if the enemy is defeated
        if (enemyHealth <= 0) {
            fightEnded = true; // Set flag to true to indicate the fight has ended
            clearIntervals(); // Stop both intervals
            resolve(true); // Resolve the promise with a win
            endFight(); // End the fight visuals
        }
    }, playerAttackInterval);

    // Enemy attack loop
    enemyInterval = setInterval(() => {
        if (fightEnded) return; // Stop if the fight has ended

        attackPlayer();

        // Check if the player is defeated
        if (playerHealth <= 0) {
            fightEnded = true; // Set flag to true to indicate the fight has ended
            clearIntervals(); // Stop both intervals
            resolve(false); // Resolve the promise with a loss
            endFight(); // End the fight visuals
        }
    }, enemyAttackInterval);
}

// Function to clear both game intervals
function clearIntervals() {
    clearInterval(playerInterval);
    clearInterval(enemyInterval);
}

// Function to update the health bars
function updateHealthBars() {
    // Calculate the percentage of health remaining
    const playerHealthPercent = Math.max((playerHealth / playerMaxHealth) * 100, 0);
    const enemyHealthPercent = Math.max((enemyHealth / enemyMaxHealth) * 100, 0);

    // Update the player's health bar
    const playerHealthBar = document.getElementById('playerHealthBar');
    playerHealthBar.style.width = playerHealthPercent + '%';

    // Update the enemy's health bar
    const enemyHealthBar = document.getElementById('enemyHealthBar');
    enemyHealthBar.style.width = enemyHealthPercent + '%';

    // Display the current health number (one decimal place) on the health bar
    document.querySelector('#playerHealthBar').innerHTML = `<div class="health-number">${formatNumber(Math.max(playerHealth,0).toFixed(0))}</div>`;
    document.querySelector('#enemyHealthBar').innerHTML = `<div class="health-number">${formatNumber(Math.max(enemyHealth,0).toFixed(0))}</div>`;
}

// Function to handle player attacking the enemy
function attackEnemy() {
    const isCritical = Math.random() < playerCritChance;
    const baseDamage = Math.floor(Math.random() * (playerMaxDamage - playerMinDamage + 1)) + playerMinDamage;
    let damage = 0;

    if (currEnemyName === "Deadpool") {
        
        if (firstAttackOfBattle){
            if (!isCritical) {
                damage = baseDamage;
                logFight(`<span style='color: #FBCEB1;'>Prime Impact:</span> You attack ${currEnemyName} for ${formatNumber(Math.max(damage, 0))} damage!`);
            } else {
                damage = Math.ceil(baseDamage * playerCritDamage);
                logFight(`<span style='color: #FBCEB1;'>Prime Impact:</span> <span style='color: #ADD8E6;'>You land a critical hit on ${currEnemyName} for ${formatNumber(Math.max(damage, 0))} damage!</span>`);
            }
            firstAttackOfBattle = false;
        } else {
            if (!isCritical) {
                // Deadpool dodges all non-critical attacks
                logFight(`<span style='color: yellow;'>${currEnemyName} effortlessly dodges your non-critical attack! (100% chance)</span>`);
                return; // Deadpool dodged, so the attack ends here
            } else {
                // Deadpool dodges 69% of critical attacks
                if (Math.random() < 0.69) {
                    logFight(`<span style='color: orange;'>${currEnemyName} dodges your critical attack! (69% chance)</span>`);
                    return; // Deadpool dodged, so the attack ends here
                }
                // If Deadpool doesn't dodge, calculate critical damage
                damage = Math.ceil(baseDamage * playerCritDamage) - enemyDefense;
                logFight(`<span style='color: #ADD8E6;'>You land a critical hit on ${currEnemyName} for ${formatNumber(Math.max(damage, 0))} damage!</span>`);
            }
        }

        enemyHealth -= Math.max(damage, 0);

        // 99% chance to restore Deadpool's health initially, decreasing after 69 revives
        if (enemyHealth <= 0) {
            if (deadpoolRevives < 69) {
                enemyHealth = enemyMaxHealth;
                deadpoolRevives += 1;
                logFight(`<span style='color: green;'>${currEnemyName} dies and regenerates back to full health! (${deadpoolRevives} revives and counting)</span>`);
            } else {
                // After 69 revives, calculate the revival chance
                const revivalChance = 0.99 * Math.pow(0.99, deadpoolRevives - 69);
                
                if (Math.random() < revivalChance) {
                    enemyHealth = enemyMaxHealth;
                    deadpoolRevives += 1;
                    logFight(`<span style='color: #AAFF00;'>${currEnemyName} dies and regenerates back to full health! (${deadpoolRevives} revives - you feel like he's killable now!)</span>`);
                } else {
                    logFight(`<span style='color: #39FF14;'>${currEnemyName} finally stays dead after ${deadpoolRevives} revives!</span>`);
                }
            }
        }
    else if (firstAttackOfBattle){
        if (!isCritical) {
            damage = baseDamage;
            logFight(`<span style='color: #FBCEB1;'>Prime Impact:</span> You attack ${currEnemyName} for ${formatNumber(Math.max(damage, 0))} damage!`);
        } else {
            damage = Math.ceil(baseDamage * playerCritDamage);
            logFight(`<span style='color: #FBCEB1;'>Prime Impact:</span> <span style='color: #ADD8E6;'>You land a critical hit on ${currEnemyName} for ${formatNumber(Math.max(damage, 0))} damage!</span>`);
        }
        enemyHealth -= Math.max(damage, 0);
        firstAttackOfBattle = false;
    }
    } else if (currEnemyName === "Sauron") {
        damage = Math.floor((baseDamage - enemyDefense) / 10); // Sauron absorbs 90% of damage and is immune to critical hits
        logFight(`You attack ${currEnemyName} for ${formatNumber(Math.max(damage, 0))} damage. (Sauron absorbs 90% of damage and is immune to critical hits)`);

        enemyHealth -= Math.max(damage, 0);
    } else {
        if (!isCritical) {
            damage = baseDamage - enemyDefense;
            logFight(`You attack ${currEnemyName} for ${formatNumber(Math.max(damage, 0))} damage!`);
        } else {
            damage = Math.ceil(baseDamage * playerCritDamage) - enemyDefense;
            logFight(`<span style='color: #ADD8E6;'>You land a critical hit on ${currEnemyName} for ${formatNumber(Math.max(damage, 0))} damage!</span>`);
        }

        enemyHealth -= Math.max(damage, 0);
    }

    // Check if Nexus Lifeline skill is active
    if (nexusLifelineSkill === true) {
        const healAmount = Math.floor(playerMaxHealth * 0.02);
        playerHealth = playerHealth + healAmount;
        logFight(`<span style='color: teal;'>You channel Nexus Lifeline to heal yourself for ${formatNumber(healAmount)}.</span>`);
    }


    updateHealthBars();
}


// Function to handle enemy attacking the player
function attackPlayer() {
    const isCritical = Math.random() < enemyCritChance;
    const baseDamage = Math.floor(Math.random() * (enemyMaxDamage - enemyMinDamage + 1)) + enemyMinDamage;
    let damage = 0;

    if (currEnemyName === "Kratos") {
        damage = baseDamage - playerDefense;
        enemyMinDamage = enemyMinDamage * 1.1;
        enemyMaxDamage = enemyMaxDamage * 1.1;
        logFight(`${currEnemyName} attacks you for ${formatNumber(Math.max(damage, 0))} damage. Kratos continues his combo and his damage grows!`);
        document.getElementById('enemyDamageStat').innerText = `${formatNumber(Math.floor(enemyMinDamage))} - ${formatNumber(Math.ceil(enemyMaxDamage))}`;
    } else if (currEnemyName === "Deadpool") {
        if (!isCritical) {
            damage = baseDamage - playerDefense;
            logFight(`${currEnemyName} attacks you for ${formatNumber(Math.max(damage, 0))} damage!`);
        } else {
            // Check for extra critical hit
            if (Math.random() < 0.069) {
                damage = Math.ceil(baseDamage * enemyCritDamage * 1.69) - playerDefense;
                damage = Math.max(damage, 69);
                logFight(`<span style='color: red;'>${currEnemyName} lands an EXTRA critical hit for ${formatNumber(Math.max(damage, 0))} damage! (6.9% chance on crit)</span>`);
            // Deadpool lands a critical hit
            } else {
                damage = Math.ceil(baseDamage * enemyCritDamage) - playerDefense;
                damage = Math.max(damage, 6.9);
                logFight(`<span style='color: orange;'>${currEnemyName} lands a critical hit for ${formatNumber(Math.max(damage, 0))} damage!</span>`);
            }
        }
    } else {
        if (!isCritical) {
            damage = baseDamage - playerDefense;
            logFight(`${currEnemyName} attacks you for ${formatNumber(Math.max(damage, 0))} damage!`);
        } else {
            damage = Math.ceil(baseDamage * enemyCritDamage) - playerDefense;
            logFight(`<span style='color: orange;'>${currEnemyName} lands a critical hit for ${formatNumber(Math.max(damage, 0))} damage!</span>`);
        }
    }

    playerHealth -= Math.max(damage, 0);
    updateHealthBars();
}


// Function to log fight actions
function logFight(message) {
    if (fightEnded) return; // Do not log any more messages if the fight has ended

    const fightLog = document.getElementById('fightLog');
    fightLog.innerHTML += `<p>${message}</p>`;
    fightLog.scrollTop = fightLog.scrollHeight; // Scroll to bottom
}

// Function to handle the end of the fight
function endFight(isForfeit = false) {
    fightEnded = true; // Set the flag to true when the fight ends
    clearIntervals(); // Ensure the intervals are stopped

    // Disable the forfeit button
    const forfeitButton = document.getElementById('forfeitButton');
    if (forfeitButton) {
        forfeitButton.disabled = true;
    }

    // Check if the Exit button already exists to prevent duplicates
    if (!document.querySelector('.exit-button')) {
        // Create an Exit button
        const exitButton = document.createElement('button');
        exitButton.innerText = 'Exit';
        exitButton.classList.add('exit-button');
        const fightingOverlay = document.getElementById('fightingOverlay');
        fightingOverlay.appendChild(exitButton);

        // Add event listener to the Exit button to close the fighting overlay
        exitButton.addEventListener('click', () => {
            fightingOverlay.style.display = 'none';
            fightingOverlay.removeChild(exitButton); // Remove the Exit button
            document.removeEventListener('click', handleClickAnywhereOutsideFightLog); // Remove the listener
        });
    }

    // Define the function to handle clicks outside the fight log
    function handleClickAnywhereOutsideFightLog(event) {
        const fightLog = document.getElementById('fightLog');
        if (!fightLog.contains(event.target)) {
            const fightingOverlay = document.getElementById('fightingOverlay');
            fightingOverlay.style.display = 'none';
            const exitButton = document.querySelector('.exit-button');
            if (exitButton) {
                fightingOverlay.removeChild(exitButton); // Remove the Exit button
            }
            document.removeEventListener('click', handleClickAnywhereOutsideFightLog); // Remove the listener
        }
    }

    // Add event listener for any click outside the fight log to close the overlay
    document.addEventListener('click', handleClickAnywhereOutsideFightLog);

    if (isForfeit) {
        // Player forfeited, so they lose and the enemy is taunting
        overlayWinnerLoserText("Loser", "Taunting");
    } else if (playerHealth > 0) {
        logFight("<span style='color: green;'>You are the Winner!</span>");
        overlayWinnerLoserText("Winner", "Dead");
    } else {
        logFight(`<span style='color: red;'>${currEnemyName} is the Winner!</span>`);
        overlayWinnerLoserText("Loser", "Taunting");
    }
}


// Function to overlay Winner/Loser or Taunting/Dead text on the respective images
function overlayWinnerLoserText(playerResult, enemyResult) {
    const playerImageContainer = document.getElementById('playerImageContainer');
    const enemyImageContainer = document.getElementById('enemyImageContainer');

    // Create and style the Player result text elements
    const playerResultText = document.createElement('div');
    playerResultText.innerText = playerResult;
    playerResultText.classList.add('result-text', playerResult === 'Winner' ? 'winner-text' : 'loser-text');
    playerImageContainer.appendChild(playerResultText);

    // Create and style the Enemy result text elements
    const enemyResultText = document.createElement('div');
    if (enemyResult === 'Taunting') {
        enemyResultText.innerText = 'Taunting';
        enemyResultText.classList.add('result-text', 'taunting-text');
    } else {
        enemyResultText.innerText = 'Dead';
        enemyResultText.classList.add('result-text', 'dead-text');
    }
    enemyImageContainer.appendChild(enemyResultText);
}
