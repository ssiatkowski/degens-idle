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
        document.getElementById('playerHealthStat').innerText = playerHealth.toFixed(2);
        document.getElementById('playerPowerStat').innerText = playerPower.toFixed(2);
        document.getElementById('playerDefenseStat').innerText = playerDefense.toFixed(2);
        document.getElementById('playerCritChanceStat').innerText = (playerCritChance * 100).toFixed(2) + '%';
        document.getElementById('playerCritDamageStat').innerText = (playerCritDamage * 100).toFixed(2) + '%';

        document.getElementById('enemyHealthStat').innerText = enemyHealth.toFixed(2);
        document.getElementById('enemyPowerStat').innerText = enemyPower.toFixed(2);
        document.getElementById('enemyDefenseStat').innerText = enemyDefense.toFixed(2);
        document.getElementById('enemyCritChanceStat').innerText = (enemyCritChance * 100).toFixed(2) + '%';
        document.getElementById('enemyCritDamageStat').innerText = (enemyCritDamage * 100).toFixed(2) + '%';

        // Update health bars
        updateHealthBars();

        // Show the fighting overlay
        document.getElementById('fightingOverlay').style.display = 'flex';

        // Start the fight loop
        fightLoop(resolve);
    });
}


// Function to handle the fight loop
function fightLoop(resolve) {
    let isPlayerTurn = false;

    const interval = setInterval(() => {
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
}


// Function to handle player attacking the enemy
function attackEnemy() {
    let damage = playerPower - enemyDefense;
    const isCritical = Math.random() < playerCritChance;
    if (isCritical) {
        damage = playerPower * (1+playerCritDamage) - enemyDefense;
        logFight("You land a critical hit!");
    }

    enemyHealth -= Math.max(damage, 0);
    logFight(`You attack the ${currEnemyName} for ${formatNumber(Math.max(damage, 0))} damage!`);

    updateHealthBars();
}

// Function to handle enemy attacking the player
function attackPlayer() {
    let damage = Math.max(enemyPower - playerDefense, playerMaxHealth/50);
    const isCritical = Math.random() < enemyCritChance;
    if (isCritical) {
        damage *= 1 + enemyCritDamage;
        logFight(`${currEnemyName} lands a critical hit!`);
    }

    playerHealth -= Math.max(damage, 0);
    logFight(`${currEnemyName} attacks you for ${formatNumber(Math.max(damage, 0))} damage!`);

    updateHealthBars();
}

// Function to log fight actions
function logFight(message) {
    const fightLog = document.getElementById('fightLog');
    fightLog.innerHTML += `<p>${message}</p>`;
    fightLog.scrollTop = fightLog.scrollHeight; // Scroll to bottom
}


// Function to handle the end of the fight
function endFight() {

    // Hide the fighting overlay after a delay
    setTimeout(() => {
        document.getElementById('fightingOverlay').style.display = 'none';
    }, 2000);

    if (playerHealth <= 0) {
        logFight("<span style='color: red;'>You have been defeated!</span>");
        // Return false for a loss
        return false;
    } else {
        logFight(`<span style='color: green;'>${currEnemyName} has been defeated!</span>`);
        // Return true for a win
        return true;
    }
}