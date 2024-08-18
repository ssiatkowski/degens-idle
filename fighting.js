const enemyStats = {
    "Training Dummy": {
        health: 100,
        power: 1,
        defense: 1,
        critChance: 0,
        critDamage: 0
    },
    "Agent Smith": {
        health: 300,
        power: 6,
        defense: 4,
        critChance: 0,
        critDamage: 0
    }
};

// Variables to store player and enemy stats
let playerHealth, playerDefense, playerPower, playerCritChance, playerCritDamage;
let enemyHealth, enemyPower, enemyDefense, enemyCritChance, enemyCritDamage;
let playerMaxHealth, enemyMaxHealth, currEnemyName;

// Function to initialize and start the mini-game
function startFightGame(enemyName, enemyImg) {
    return new Promise((resolve) => {
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

        // Get player stats from resources
        playerHealth = copium ** (1/40); // Example scaling, adjust as needed
        playerMaxHealth= playerHealth;
        playerDefense = delusion ** (1/50);
        playerPower = power;
        playerCritChance = Math.min(trollPoints ** (1/50) / 100, 0.9); // Example: 1% crit chance per 10 troll points
        playerCritDamage = Math.min(trollPoints ** (1/50) / 10, 99);  // Example: 50% more damage per 10 troll points

        currEnemyName = enemyName;

        const enemy = enemyStats[enemyName];

        // Set enemy stats using values from the enemyStats object
        enemyHealth = enemy.health;
        enemyMaxHealth = enemyHealth;
        enemyPower = enemy.power;
        enemyDefense = enemy.defense;
        enemyCritChance = enemy.critChance;
        enemyCritDamage = enemy.critDamage;

        // Populate player and enemy stats in the UI
        document.getElementById('playerHealthStat').innerText = playerHealth.toFixed(1);
        document.getElementById('playerPowerStat').innerText = playerPower.toFixed(1);
        document.getElementById('playerDefenseStat').innerText = playerDefense.toFixed(1);
        document.getElementById('playerCritChanceStat').innerText = (playerCritChance * 100).toFixed(2) + '%';
        document.getElementById('playerCritDamageStat').innerText = (playerCritDamage * 100).toFixed(2) + '%';

        document.getElementById('enemyHealthStat').innerText = enemyHealth.toFixed(1);
        document.getElementById('enemyPowerStat').innerText = enemyPower.toFixed(1);
        document.getElementById('enemyDefenseStat').innerText = enemyDefense.toFixed(1);
        document.getElementById('enemyCritChanceStat').innerText = (enemyCritChance * 100).toFixed(2) + '%';
        document.getElementById('enemyCritDamageStat').innerText = (enemyCritDamage * 100).toFixed(2) + '%';

        // Update health bars
        updateHealthBars();

        fightEnded = false; // Reset the flag when the fight starts

        // Show the fighting overlay
        document.getElementById('fightingOverlay').style.display = 'flex';

        // Add event listener for the forfeit button
        const forfeitButton = document.getElementById('forfeitButton');
        forfeitButton.onclick = () => {
            logFight("<span style='color: red;'>You forfeited the fight!</span>");
            fightEnded = true; // Set the flag to true when forfeiting
            resolve(false); // Resolve the promise with a loss
            endFight();
        };

        // Start the fight loop
        fightLoop(resolve);
    });
}

// Function to handle the fight loop
function fightLoop(resolve) {
    let isPlayerTurn = false;

    const interval = setInterval(() => {
        if (fightEnded) {
            clearInterval(interval); // Stop the loop if the fight has ended
            return;
        }

        if (isPlayerTurn) {
            attackEnemy();
        } else {
            attackPlayer();
        }

        // Check for end of fight
        if (playerHealth <= 0 || enemyHealth <= 0) {
            clearInterval(interval);
            resolve(endFight());
        }

        isPlayerTurn = !isPlayerTurn;
    }, 500); // 0.5 seconds per turn
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
    document.querySelector('#playerHealthBar').innerHTML = `<div class="health-number">${playerHealth.toFixed(2)}</div>`;
    document.querySelector('#enemyHealthBar').innerHTML = `<div class="health-number">${enemyHealth.toFixed(2)}</div>`;
}



// Function to handle player attacking the enemy
function attackEnemy() {
    let damage = playerPower - enemyDefense;
    const isCritical = Math.random() < playerCritChance;
    if (isCritical) {
        damage = playerPower * (1+playerCritDamage) - enemyDefense;
        logFight("<span style='color: purple;'>You land a critical hit!</span>");
    }

    enemyHealth -= Math.max(damage, 0);
    logFight(`You attack the ${currEnemyName} for ${Math.max(damage, 0).toFixed(2)} damage!`);

    updateHealthBars();
}

// Function to handle enemy attacking the player
function attackPlayer() {
    let damage = Math.max(enemyPower - playerDefense, playerMaxHealth/100);
    const isCritical = Math.random() < enemyCritChance;
    if (isCritical) {
        damage *= 1 + enemyCritDamage;
        logFight(`${currEnemyName} lands a critical hit!`);
    }

    playerHealth -= Math.max(damage, 0);
    logFight(`${currEnemyName} attacks you for ${Math.max(damage, 0).toFixed(2)} damage!`);

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
function endFight() {
    fightEnded = true; // Set the flag to true when the fight ends

    // Hide the fighting overlay after a delay
    setTimeout(() => {
        document.getElementById('fightingOverlay').style.display = 'none';
    }, 2000);

    if (playerHealth <= 0) {
        logFight("<span style='color: red;'>You have been defeated!</span>");
        return false; // Return false for a loss
    } else if (enemyHealth <= 0) {
        logFight(`<span style='color: green;'>${currEnemyName} has been defeated!</span>`);
        return true; // Return true for a win
    }
}