const enemyStats = {
    "Training Dummy": {
        health: 100,
        minDamage: 1,
        maxDamage: 8,
        attackSpeed: 1,
        defense: 0,
        critChance: 0,
        critDamage: 1,
        dodge: 0,
        nonCritDodge: 0,
        stun: 0,
        absorb: 0
    },
    "Agent Smith": {
        health: 300,
        minDamage: 5,
        maxDamage: 15,
        attackSpeed: 3,
        defense: 5,
        critChance: 0,
        critDamage: 1,
        dodge: 0.1,
        nonCritDodge: 0,
        stun: 0,
        absorb: 0
    },
    "Shao Kahn": {
        health: 600,
        minDamage: 5,
        maxDamage: 25,
        attackSpeed: 3,
        defense: 16,
        critChance: 0.2,
        critDamage: 2,
        dodge: 0,
        nonCritDodge: 0,
        stun: 0,
        absorb: 0
    },
    "Darth Vader": {
        health: 2800,
        minDamage: 8,
        maxDamage: 48,
        attackSpeed: 4,
        defense: 28,
        critChance: 0,
        critDamage: 1,
        dodge: 0,
        nonCritDodge: 0,
        stun: 0,
        absorb: 0.2
    },
    "Isshin": {
        health: 4000,
        minDamage: 5,
        maxDamage: 12,
        attackSpeed: 45,
        defense: 300,
        critChance: 0.08,
        critDamage: 15,
        dodge: 0,
        nonCritDodge: 0.3,
        stun: 0,
        absorb: 0
    },
    "Sauron": {
        health: 350000,
        minDamage: 30,
        maxDamage: 50,
        attackSpeed: 7,
        defense: 15000,
        critChance: 0.03,
        critDamage: 100,
        dodge: 0,
        nonCritDodge: 0,
        stun: 0,
        absorb: 0.9
    },
    "Kratos": {
        health: 5e8,
        minDamage: 1,
        maxDamage: 2,
        attackSpeed: 30,
        defense: 3e6,
        critChance: 0,
        critDamage: 1,
        dodge: 0,
        nonCritDodge: 0,
        stun: 0,
        absorb: 0
    },
    "Deadpool": {
        health: 6.9e8,
        minDamage: 69,
        maxDamage: 69,
        attackSpeed: 6.9,
        defense: 6.9e7,
        critChance: 0.69,
        critDamage: 1.69,
        dodge: 0.69,
        nonCritDodge: 1,
        stun: 0,
        absorb: 0
    },
    "Chuck Norris": {
        health: 4e11,
        minDamage: 100,
        maxDamage: 500,
        attackSpeed: 7,
        defense: 5e8,
        critChance: 0,
        critDamage: 1,
        dodge: 0.25,
        nonCritDodge: 0.75,
        stun: 0.5,
        absorb: 0.25
    },
    "Vegeta": {
        health: 1.5e12,
        minDamage: 100,
        maxDamage: 300,
        attackSpeed: 5,
        defense: 3e9,
        critChance: 0.1,
        critDamage: 1.5,
        dodge: 0,
        nonCritDodge: 0.1,
        stun: 0,
        absorb: 0,
        nextBoss: "Vegeta SS2",
    },
    "Vegeta SS2": {
        health: 3e12,
        minDamage: 200,
        maxDamage: 400,
        attackSpeed: 7,
        defense: 5e9,
        critChance: 0.1,
        critDamage: 1.75,
        dodge: 0,
        nonCritDodge: 0.2,
        stun: 0.1,
        absorb: 0,
        img: `imgs/vegeta_2.jpg`,
        nextBoss: "Vegeta SS3",
    },
    "Vegeta SS3": {
        health: 5e12,
        minDamage: 300,
        maxDamage: 500,
        attackSpeed: 9,
        defense: 1e10,
        critChance: 0.15,
        critDamage: 2,
        dodge: 0,
        nonCritDodge: 0.8,
        stun: 0.15,
        absorb: 0,
        img: `imgs/vegeta_3.jpg`,
        nextBoss: "Vegeta SS God",
    },
    "Vegeta SS God": {
        health: 7e12,
        minDamage: 800,
        maxDamage: 1100,
        attackSpeed: 11,
        defense: 0, //+ 1e8 * player defense, player defense = 0
        critChance: 0.15,
        critDamage: 2,
        dodge: 0,
        nonCritDodge: 0.8,
        stun: 0.2,
        absorb: 0,
        img: `imgs/vegeta_4.jpg`,
        nextBoss: "Vegeta SS Eternal",
    },
    "Vegeta SS Eternal": {
        health: 9e12,
        minDamage: 900,
        maxDamage: 1200,
        attackSpeed: 13,
        defense: 3e10, 
        critChance: 0.2,
        critDamage: 2.5,
        dodge: 0.2,
        nonCritDodge: 0.8,
        stun: 0.25,
        absorb: 0,
        img: `imgs/vegeta_5.jpg`,
    },
    "Kaguya": {
        health: 3e17,
        minDamage: 2000,
        maxDamage: 3000,
        attackSpeed: 30,
        defense: 5e14,
        critChance: 0.1,
        critDamage: 1.5,
        dodge: 0.2,
        nonCritDodge: 0.4,
        stun: 0,
        absorb: 0.666,
        img: 'imgs/kaguya.jpg'
    }
};


let playerAttackSpeed = 2;

// Variables to store player and enemy stats
let playerHealth, playerDefense, playerMinDamage, playerMaxDamage, playerCritChance, playerCritDamage;
let enemyHealth, enemyDefense, enemyMinDamage, enemyMaxDamage, enemyCritChance, enemyCritDamage, enemyAttackSpeed;
let enemyDodge, enemyNonCritDodge, enemyStunChance, enemyAbsorb;
let playerMaxHealth, enemyMaxHealth, currEnemyName, playerDefenseBase, playerCurrentAttackSpeed, playerBaseMaxDamage;
let playerInterval, enemyInterval;

let playerMinDamageMult = 0.25;
let playerMaxDamageMult = 1.75;
let playerHealthMult = 1;

let playerDodge = 0;
let playerDodgeBase = 0;
let playerNonCritDodge = 0;
let playerStunChance = 0;
let playerAbsorb = 0;
let playerAbsorbBase = 0;

let playerStunCount = 0;
let enemyStunCount = 0;
let playerAmaterasuStacks = 0;
let playerTsukuyomiStacks = 0;

let enemyGravityWellCount = 0;

let astralEdgeMult = 1;

let playerAttackCount = 0;

let playerTemporalFluxCount = 0;

let deadpoolRevives = 0;

let voidStabilizerActive = false;

let firstAttackOfBattle = false;

let kamuiActive = false;
let izanagiUsed = false;
let izanamiUsed = false;

let mysticReboundCount = 0;

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
        playerMaxHealth = Math.ceil((copium ** (1/20)) * playerHealthMult);
        playerHealth = playerMaxHealth;
        playerDefenseBase = delusion > 0 ? Math.ceil((delusion ** (1/12)) / 500) : 0;
        playerDefense = playerDefenseBase;
        playerCritChance = Math.min(Math.ceil(trollPoints ** (1/50)) / 100, 0.9);
        playerCritChance = sebosLuck ? playerCritChance + 0.05 : playerCritChance;
        playerCritDamage = 1 + Math.min(Math.ceil(trollPoints ** (1/25)) / 100, 99);

        playerCurrentAttackSpeed = playerAttackSpeed;

        playerMinDamage = Math.floor(power * playerMinDamageMult);
        playerBaseMaxDamage = Math.ceil(power * playerMaxDamageMult);
        playerMaxDamage = playerBaseMaxDamage;

        playerDodge = playerDodgeBase;

        playerStunCount = 0;
        playerTemporalFluxCount = 0;
        playerAmaterasuStacks = 0;
        playerTsukuyomiStacks = 0;

        playerAttackCount = 0;
        enemyGravityWellCount = 0;
        mysticReboundCount = 0;

        izanagiUsed = false;
        izanamiUsed = false;

        voidStabilizerActive = false;
        if (voidStabilizerSkill){
            voidStabilizerActive = true;
            playerAbsorb = playerAbsorbBase + 0.5;
        }

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
        enemyDodge = enemy.dodge;
        enemyNonCritDodge = enemy.nonCritDodge;
        enemyStunChance = enemy.stun;
        enemyAbsorb = enemy.absorb;

        enemyStunCount = 0;
        kamuiActive = false;
        
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

        if (currEnemyName === "Chuck Norris") {
            if (!purchasedUpgrades.some(upgrade => upgrade.name === "Training Dummy")) {
                enemyDefense /= 2;
                enemyHealth /= 2;
                enemyAbsorb = 0;
                document.getElementById('enemyDefenseStat').innerText = formatNumber(enemyDefense);
                document.getElementById('playerAbsorbStat').innerText = formatNumber(playerAbsorb * 100) + '%';
                logFight("<span style='color: green; font-size: 1.2em';>You catch Chuck Norris mid-session while he's pummeling the Training Dummy. Seizing the moment, you sneak up and deliver a wrenching gut shot right to his kidney. The impact is so brutal that it cuts his health and defense in half for the rest of the battle, and he is unable to absorb any damage.</span>");
            } else {
                logFight("<span style='color: red; font-size: 1.2em';>Chuck Norris has no distractions and is ready to fight you at full power.</span>");
            }
        }

        // Update health bars
        updateHealthBars();

        updateStatsUI();

        // Add a 0.5-second delay before starting the fight loop
        setTimeout(() => {
            fightLoop(resolve);
        }, 500); // 500 milliseconds = 0.5 seconds
    });
}

// Function to update UI stats
function updateStatsUI() {
    // Player Stats
    document.getElementById('playerHealthStat').innerText = formatNumber(playerMaxHealth);
    document.getElementById('playerDamageStat').innerText = `${formatNumber(playerMinDamage)} - ${formatNumber(playerMaxDamage)}`;
    document.getElementById('playerAttackSpeedStat').innerText = formatNumber(playerCurrentAttackSpeed);
    document.getElementById('playerDefenseStat').innerText = formatNumber(playerDefense);
    
    toggleStatDisplay('playerCritChanceContainer', playerCritChance > 0);
    document.getElementById('playerCritChanceStat').innerText = formatNumber(playerCritChance * 100) + '%';
    
    toggleStatDisplay('playerCritDamageContainer', playerCritChance > 0);
    document.getElementById('playerCritDamageStat').innerText = formatNumber(playerCritDamage * 100) + '%';
    
    toggleStatDisplay('playerDodgeContainer', (playerDodge > 0 || temporalFluxSkill));
    document.getElementById('playerDodgeStat').innerText = formatNumber(playerDodge * 100) + '%';
    
    toggleStatDisplay('playerNonCritDodgeContainer', playerNonCritDodge > 0);
    document.getElementById('playerNonCritDodgeStat').innerText = formatNumber(playerNonCritDodge * 100) + '%';
    
    toggleStatDisplay('playerStunContainer', playerStunChance > 0);
    document.getElementById('playerStunStat').innerText = formatNumber(playerStunChance * 100) + '%';
    
    toggleStatDisplay('playerAbsorbContainer', playerAbsorb > 0);
    document.getElementById('playerAbsorbStat').innerText = formatNumber(playerAbsorb * 100) + '%';
    
    // Enemy Stats
    document.getElementById('enemyHealthStat').innerText = formatNumber(enemyHealth);
    document.getElementById('enemyDamageStat').innerText = `${formatNumber(enemyMinDamage)} - ${formatNumber(enemyMaxDamage)}`;
    document.getElementById('enemyAttackSpeedStat').innerText = formatNumber(enemyAttackSpeed);
    document.getElementById('enemyDefenseStat').innerText = formatNumber(enemyDefense);

    toggleStatDisplay('enemyCritChanceContainer', enemyCritChance > 0);
    document.getElementById('enemyCritChanceStat').innerText = formatNumber(enemyCritChance * 100) + '%';
    
    toggleStatDisplay('enemyCritDamageContainer', enemyCritChance > 0);
    document.getElementById('enemyCritDamageStat').innerText = formatNumber(enemyCritDamage * 100) + '%';
    
    toggleStatDisplay('enemyDodgeContainer', enemyDodge > 0);
    document.getElementById('enemyDodgeStat').innerText = formatNumber(enemyDodge * 100) + '%';
    
    toggleStatDisplay('enemyNonCritDodgeContainer', enemyNonCritDodge > 0);
    document.getElementById('enemyNonCritDodgeStat').innerText = formatNumber(enemyNonCritDodge * 100) + '%';
    
    toggleStatDisplay('enemyStunContainer', enemyStunChance > 0);
    document.getElementById('enemyStunStat').innerText = formatNumber(enemyStunChance * 100) + '%';
    
    toggleStatDisplay('enemyAbsorbContainer', enemyAbsorb > 0);
    document.getElementById('enemyAbsorbStat').innerText = formatNumber(enemyAbsorb * 100) + '%';
}

function toggleStatDisplay(containerId, shouldDisplay) {
    const container = document.getElementById(containerId);
    container.style.display = shouldDisplay ? 'block' : 'none';
}


function fightLoop(resolve) {
    const playerAttackInterval = 5000 / playerCurrentAttackSpeed ; // Player attacks every 2 seconds (fixed)
    const enemyAttackInterval = 5000 / enemyAttackSpeed; // Calculate interval from attack speed

    // Player attack loop
    playerInterval = setInterval(() => {
        if (fightEnded) return; // Stop if the fight has ended

        attackEnemy(resolve);

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
function attackEnemy(resolve) {

    // Handle Amaterasu (before stun check)
    if (playerAmaterasuStacks > 0) {
        const amaterasuDamage = Math.floor(playerMaxHealth * 0.002 * playerAmaterasuStacks);
        playerHealth -= amaterasuDamage;
        logFight(`<span style='color: black;'>${playerAmaterasuStacks} stacks of Amaterasu burn you for ${formatNumber(amaterasuDamage)} damage!</span>`);
    }

    // Check if the player is stunned
    if (playerStunCount > 0) {
        if(quantumBastionSkill){
            logFight(`<span style='color: #FF4500;'>You are stunned and unable to move! Quantum Bastion is helping you recover quicker. (${playerStunCount} turn(s) remaining)</span>`);
            playerStunCount = Math.max(playerStunCount-2, 0);
        } else{
            logFight(`<span style='color: #FF4500;'>You are stunned and unable to move! (${playerStunCount} turn(s) remaining)</span>`);
            playerStunCount--;
        }
        return; // Skip the player's turn
    }

    // Handle Tsukuyomi (after stun check)
    if (playerTsukuyomiStacks > 0) {
        const selfDamage = Math.min(Math.max(Math.ceil((Math.random() * (playerMaxDamage - playerMinDamage + 1) + playerMinDamage - (playerDefense*1e11)) / 1e12), playerMaxHealth*0.01), playerMaxHealth*0.2);
        playerHealth -= selfDamage;
        logFight(`<span style='color: #9370DB;'>Tsukuyomi activates! You attack yourself for ${formatNumber(selfDamage)} damage!</span>`);
        playerTsukuyomiStacks--; // Remove one stack
        updateHealthBars();
        return; // Skip attacking the enemy, as the player attacked themselves
    }

    const isCritical = Math.random() < playerCritChance;
    const baseDamage = Math.floor(Math.random() * (playerMaxDamage - playerMinDamage + 1)) + playerMinDamage;
    let damage = 0;

    if (firstAttackOfBattle) {
        // Apply Prime Impact skill for the first attack - dodge checks are skipped
        if (!isCritical) {
            damage = baseDamage;
            logFight(`<span style='color: #FBCEB1;'>Prime Impact:</span> You attack ${currEnemyName} for ${formatNumber(Math.max(damage, 0))} damage!</span>`);
        } else {
            damage = Math.ceil(baseDamage * playerCritDamage);
            logFight(`<span style='color: #FBCEB1;'>Prime Impact:</span> <span style='color: #ADD8E6;'>You land a critical hit on ${currEnemyName} for ${formatNumber(Math.max(damage, 0))} damage!</span>`);
        }
        firstAttackOfBattle = false;
    } else {
        // Handle non-critical dodge mechanics (applies only if not a critical hit)
        if (!isCritical && Math.random() < enemyStats[currEnemyName].nonCritDodge) {
            logFight(`<span style='color: yellow;'>${currEnemyName} effortlessly dodges your non-critical attack!</span>`);
            return; // Enemy dodged, so the attack ends here
        }

        // Handle regular dodge mechanics (applies to both critical and non-critical hits)
        if (Math.random() < enemyStats[currEnemyName].dodge) {
            logFight(`<span style='color: orange;'>${currEnemyName} dodges your attack!</span>`);
            return; // Enemy dodged, so the attack ends here
        }

        // Handle regular dodge mechanics (applies to both critical and non-critical hits)
        if (kamuiActive && isCritical) {
            logFight(`<span style='color: orange;'>${currEnemyName} uses Kamui and dodges your critical attack!</span>`);
            kamuiActive = false;
            return; // Enemy dodged, so the attack ends here
        }

        // Calculate damage
        if (isCritical) {
            damage = Math.ceil(baseDamage * playerCritDamage) - enemyDefense;
            logFight(`<span style='color: #ADD8E6;'>You land a critical hit on ${currEnemyName} for ${formatNumber(Math.max(damage, 0))} damage!</span>`);
        } else {
            damage = baseDamage - enemyDefense;
            logFight(`You attack ${currEnemyName} for ${formatNumber(Math.max(damage, 0))} damage!`);
        }
    }

    // Handle Temporal Flux skill
    if (isCritical && temporalFluxSkill) {
        playerTemporalFluxCount++;
        playerDodge = Math.min(playerDodgeBase + (playerTemporalFluxCount * 0.1) + (mysticReboundCount > 0 ? 0.2 : 0), 1);
        document.getElementById('playerDodgeStat').innerText = formatNumber(playerDodge * 100) + '%';
        logFight(`<span style='color: #1E90FF;'>Temporal Flux activated! Dodge increased to ${formatNumber(playerDodge * 100)}%`);
    }

    // Handle absorb mechanics
    if(damage > 0){
        
        let ogDmg = damage;
        damage = Math.max(damage * (1 - enemyStats[currEnemyName].absorb), 0);
        if (enemyStats[currEnemyName].absorb > 0) {
            logFight(`<span style='color: #8A2BE2;'>${currEnemyName} absorbs ${formatNumber(ogDmg - damage)} of the damage!</span>`);
        }
    }

    // Apply damage to enemy health
    enemyHealth -= Math.max(damage, 0);

    if (damage > 0){
        playerAttackCount++;
        if (gravityWellSkill && (playerAttackCount % 5 == 0)){
            if (enemyGravityWellCount == 0){
                enemyMinDamage /= 2;
                document.getElementById('enemyDamageStat').innerText = `${formatNumber(enemyMinDamage)} - ${formatNumber(enemyMaxDamage)}`;
                logFight(`<span style='color: #ECFFDC;'>Gravity Well activated! ${currEnemyName}'s minimum damage is halved.</span>`);
            }
            enemyGravityWellCount += 3;
        }
    }

    // Check if Nexus Lifeline skill is active
    if (nexusLifelineSkill) {
        const healAmount = Math.floor(playerMaxHealth * 0.02);
        playerHealth = playerHealth + healAmount;
        logFight(`<span style='color: teal;'>You channel Nexus Lifeline to heal yourself for ${formatNumber(healAmount)}.</span>`);
    }

    // Handle Stun mechanics
    if (damage > 0 && Math.random() < playerStunChance) {
        enemyStunCount++;
        logFight(`<span style='color: #DFFF00;'>You stun ${currEnemyName}! (${enemyStunCount} turn(s) stunned)</span>`);
    }

    // Handle special case for Deadpool revives
    if (currEnemyName === "Deadpool" && enemyHealth <= 0) {
        if (deadpoolRevives < 69) {
            enemyHealth = enemyMaxHealth;
            deadpoolRevives += 1;
            logFight(`<span style='color: green;'>${currEnemyName} dies and regenerates back to full health! 
                (<span style='font-weight: bold; font-size: 1.4em;'>${deadpoolRevives}</span> revives and counting)</span>`);

            // Call updateHealthBars to ensure the health bar reflects the new health
            updateHealthBars();

            // Get the enemy health bar element and change its color to green
            const enemyHealthBar = document.getElementById('enemyHealthBar');
            if (enemyHealthBar) {
                enemyHealthBar.style.backgroundColor = '#39FF14'; // Bright green color
            }

            // After a short delay, revert the health bar color back to red
            setTimeout(() => {
                if (enemyHealthBar) {
                    enemyHealthBar.style.backgroundColor = '#f00'; // Red color
                }
            }, 150); // Slightly longer delay to ensure the flash is visible

        } else {
            // After 69 revives, calculate the revival chance
            const revivalChance = 0.99 * Math.pow(0.99, deadpoolRevives - 69);
            if (Math.random() < revivalChance) {
                enemyHealth = enemyMaxHealth;
                deadpoolRevives += 1;
                logFight(`<span style='color: #AAFF00;'>${currEnemyName} dies and regenerates back to full health! 
                    (<span style='font-weight: bold; font-size: 1.4em;'>${deadpoolRevives}</span> revives - you feel like he's killable now!)</span>`);

                // Call updateHealthBars to ensure the health bar reflects the new health
                updateHealthBars();

                // Get the enemy health bar element and change its color to green
                const enemyHealthBar = document.getElementById('enemyHealthBar');
                if (enemyHealthBar) {
                    enemyHealthBar.style.backgroundColor = '#39FF14'; // Bright green color
                }

                setTimeout(() => {
                    if (enemyHealthBar) {
                        enemyHealthBar.style.backgroundColor = '#f00';
                    }
                }, 150); // Slightly longer delay to ensure the flash is visible
            } else {
                logFight(`<span style='color: #39FF14;'>${currEnemyName} finally stays dead after 
                    <span style='font-weight: bold; font-size: 1.4em;'>${deadpoolRevives}</span> revives!</span>`);
            }
        }
    }

    // Handle special case for Vegeta with multiple forms
    if (enemyHealth <= 0 && enemyStats[currEnemyName].nextBoss) {

        // Clear the previous enemy attack interval and set a new one
        clearIntervals();

        currEnemyName = enemyStats[currEnemyName].nextBoss;

        const enemy = enemyStats[currEnemyName];

        // Set enemy stats using values from the enemyStats object
        enemyHealth = enemy.health;
        enemyMaxHealth = enemyHealth;
        enemyMinDamage = enemy.minDamage;
        enemyMaxDamage = enemy.maxDamage;
        enemyDefense = enemy.defense;
        enemyCritChance = enemy.critChance;
        enemyCritDamage = enemy.critDamage;
        enemyAttackSpeed = enemy.attackSpeed;
        enemyDodge = enemy.dodge;
        enemyNonCritDodge = enemy.nonCritDodge;
        enemyStunChance = enemy.stun;
        enemyAbsorb = enemy.absorb;

        enemyStunCount = 0;
        enemyGravityWellCount = 0;
        astralEdgeMult = 1;

        firstAttackOfBattle = primeImpactSkill ? true : false;

        logFight(`<span style='color: #FF4500; font-weight: bold; font-size: 1.5em;'>Vegeta has transformed into ${currEnemyName}!</span>`);

        // Special case for "Vegeta SS God"
        if (currEnemyName === "Vegeta SS God") {
            if (playerDefense > 0) {
                const absorbedDefense = playerDefense * 1e9;
                delusion = 0;
                enemyDefense += absorbedDefense;
                playerDefense = 0;

                logFight(`<span style='color: #FFD700; font-weight: bold; font-size: 1.3em;'>Vegeta SS God sees right through you, erasing all your delusions and absorbing all of your defensive powers! His defense skyrockets to ${formatNumber(absorbedDefense)}!</span>`);
            } else {
                playerDefenseBase = 1000;
                playerDefense = 1000; // Grant the player 1k defense
                logFight(`<span style='color: #00FF00; font-weight: bold; font-size: 1.3em;'>You outwitted Vegeta SS God! His attempt to absorb your defense fails, and instead, you gain 1,000 base defense!</span>`);
            }
        }

        // Special case for "Vegeta SS Eternal"
        if (currEnemyName === "Vegeta SS Eternal") {
            if (hopium < 0) {
                playerCurrentAttackSpeed *= 0.5; // Decrease attack speed by 50%
                logFight(`<span style='color: #FF4500; font-weight: bold; font-size: 1.3em;'>Vegeta SS Eternal senses your despair, and the extremely fucking powerful magnetic field around him slows your attacks by 50%!</span>`);
            } else {
                playerCurrentAttackSpeed *= 1.5; // Increase attack speed by 50%
                logFight(`<span style='color: #00FF00; font-weight: bold; font-size: 1.3em;'>Vegeta SS Eternal feels your hope, and the extremely fucking powerful magnetic field around him boosts your attack speed by 50%!</span>`);
            }
        }

        playerCurrentAttackSpeed
        updateStatsUI();

        // Update the enemy image
        const enemyImageContainer = document.getElementById('enemyImageContainer');
        enemyImageContainer.innerHTML = ''; // Clear previous image
        const enemyImage = document.createElement('img');
        enemyImage.src = enemy.img;
        enemyImage.alt = "Enemy Image";
        enemyImageContainer.appendChild(enemyImage);


        setTimeout(() => {
            fightLoop(resolve);
        }, 750);
    }

    if (currEnemyName === "Kaguya" && enemyHealth <= enemyMaxHealth) {

        if (izanagiUsed && !izanamiUsed && enemyHealth <= enemyMaxHealth) {
            
            // Clear the previous enemy attack interval and set a new one
            clearIntervals();

            // Kaguya uses Izanami, loses her right eye, goes blind, and stuns the player for 100 turns
            izanamiUsed = true;
            enemyHealth = enemyMaxHealth;
            playerStunCount += 100;
            enemyAttackSpeed *= 2.5;
            logFight(`<span style='color: #800020; font-weight: bold; font-size: 1.3em;'>Kaguya uses Izanami! She loses her right eye, goes blind, and stuns you for 100 turns and is enraged so her attack speed increases 2.5x! However, she can no longer land critical strikes or use Amaterasu/Tsukuyomi.</span>`);
    
            // Disable critical strikes because Kaguya is now blind
            enemyCritChance = 0;
            document.getElementById('enemyCritChanceStat').innerText = formatNumber(enemyCritChance * 100) + '%';
            document.getElementById('enemyAttackSpeedStat').innerText = formatNumber(enemyAttackSpeed);
            
            setTimeout(() => {
                fightLoop(resolve);
            }, 1000);
        }

        if (!izanagiUsed && enemyHealth <= 0) {
            
            // Clear the previous enemy attack interval and set a new one
            clearIntervals();

            // Kaguya uses Izanagi, loses her left eye, and sets her health to 10x maxHealth
            izanagiUsed = true;
            enemyHealth = enemyMaxHealth * 3;
            logFight(`<span style='color: #800020; font-weight: bold; font-size: 1.3em;'>Kaguya uses Izanagi! She loses her left eye and her health is restored to 3x her Max Health!</span>`);
    
            setTimeout(() => {
                fightLoop(resolve);
            }, 1000);
        }
        
    }
    


    // Update health bars
    updateHealthBars();
}





// Function to handle enemy attacking the player
function attackPlayer() {
    // Check if the enemy is stunned
    if (enemyStunCount > 0) {
        enemyStunCount--;
        logFight(`<span style='color: #DFFF00;'>${currEnemyName} is stunned and misses their turn! (${enemyStunCount} turn(s) remaining)</span>`);
        return; // Skip the enemy's turn
    }

    // Check if Mystic Rebound is active and decrement count
    if (mysticReboundSkill && mysticReboundCount > 0) {
        mysticReboundCount--;

        if (mysticReboundCount === 0) {
            playerDodge = Math.min(playerDodgeBase + (playerTemporalFluxCount * 0.1) + (mysticReboundCount > 0 ? 0.2 : 0), 1);
            document.getElementById('playerDodgeStat').innerText = formatNumber(playerDodge * 100) + '%';
            logFight(`<span style='color: #FF69B4;'>Mystic Rebound bonus has ended. Dodge chance returned to normal.</span>`);
        }
    }

    const isCritical = Math.random() < enemyCritChance;
    const baseDamage = Math.floor(Math.random() * (enemyMaxDamage - enemyMinDamage + 1)) + enemyMinDamage;
    let damage = 0;

    // Handle non-critical dodge mechanics (applies only if not a critical hit)
    if (!isCritical && Math.random() < playerNonCritDodge) {
        logFight(`<span style='color: #32CD32;'>You effortlessly dodge ${currEnemyName}'s non-critical attack!</span>`);
        if (playerTemporalFluxCount > 0) {
            playerTemporalFluxCount = 0;
            playerDodge = Math.min(playerDodgeBase + (playerTemporalFluxCount * 0.1) + (mysticReboundCount > 0 ? 0.2 : 0), 1);
            document.getElementById('playerDodgeStat').innerText = formatNumber(playerDodge * 100) + '%';
            logFight(`Temporal Flux ended. Dodge bonus removed.`);
        }
        if (temporalGuardSkill) {
            const newPlayerDefense = Math.min(playerDefense + (playerDefenseBase * 0.1), playerDefenseBase * 3);
            if (newPlayerDefense > playerDefense) {
                logFight(`<span style='color: #6082B6;'>Temporal Guard activated! Your defense increased by ${formatNumber(newPlayerDefense-playerDefense)}.</span>`);
            } else {
                logFight(`<span style='color: #6082B6;'>Temporal Guard activated, but your defense has already reached its maximum.</span>`);
            }
            playerDefense = newPlayerDefense;
            document.getElementById('playerDefenseStat').innerText = formatNumber(playerDefense);
        }
        return; // Player dodged, so the attack ends here
    }

    // Handle regular dodge mechanics (applies to both critical and non-critical hits)
    if (Math.random() < playerDodge) {
        logFight(`<span style='color: #7CFC00;'>You dodge ${currEnemyName}'s attack!</span>`);
        if (playerTemporalFluxCount > 0) {
            playerTemporalFluxCount = 0;
            playerDodge = Math.min(playerDodgeBase + (playerTemporalFluxCount * 0.1) + (mysticReboundCount > 0 ? 0.2 : 0), 1);
            document.getElementById('playerDodgeStat').innerText = formatNumber(playerDodge * 100) + '%';
            logFight(`Temporal Flux ended. Dodge bonus removed.`);
        }
        if (temporalGuardSkill) {
            const newPlayerDefense = Math.min(playerDefense + (playerDefenseBase * 0.1), playerDefenseBase * 3);
            if (newPlayerDefense > playerDefense) {
                logFight(`<span style='color: #6082B6;'>Temporal Guard activated! Your defense increased by ${formatNumber(newPlayerDefense-playerDefense)}.</span>`);
            } else {
                logFight(`<span style='color: #6082B6;'>Temporal Guard activated, but your defense has already reached its maximum.</span>`);
            }
            playerDefense = newPlayerDefense;
            document.getElementById('playerDefenseStat').innerText = formatNumber(playerDefense);
        }
        return; // Player dodged, so the attack ends here
    }

    if (currEnemyName === "Chuck Norris") {
        // Randomly determine Chuck Norris's move
        const rand = Math.random() * 100;
        if (rand < 10) { // 10% chance for Roundhouse Kick
            playerDefense *= 0.82;
            document.getElementById('playerDefenseStat').innerText = formatNumber(playerDefense);
            logFight(`<span style='color: #FF0000;'>Chuck Norris performs a Roundhouse Kick! Your defense is reduced by 18%.</span>`);
        } else if (rand < 25) { // 15% chance for Spinning Back Kick
            damage = baseDamage * 2 - playerDefense;
            logFight(`<span style='color: #FF4500;'>Chuck Norris performs a Spinning Back Kick! It deals double damage (${formatNumber(Math.max(damage, 0))}).</span>`);
        } else if (rand < 50) { // 25% chance for Straight Punches (regular attack)
            damage = baseDamage - playerDefense;
            logFight(`<span style='color: #FFA500;'>Chuck Norris delivers Straight Punches! You take regular damage (${formatNumber(Math.max(damage, 0))}).</span>`);
        } else if (rand < 65) { // 15% chance for Karate Chop
            playerMinDamage *= 0.64;
            document.getElementById('playerDamageStat').innerText = `${formatNumber(playerMinDamage)} - ${formatNumber(playerMaxDamage)}`;
            logFight(`<span style='color: #FF8C00;'>Chuck Norris uses a Karate Chop! Your minimum damage is reduced by 36%.</span>`);
        } else if (rand < 80) { // 15% chance for High Kick
            if (playerCritChance > 0) {
                playerCritChance = Math.max(playerCritChance - 0.025, 0); // Reduce crit chance by a flat 2%
                document.getElementById('playerCritChanceStat').innerText = formatNumber(playerCritChance * 100) + '%';
                logFight(`<span style='color: #FFD700;'>Chuck Norris performs a High Kick! Your critical hit chance is reduced by 2.5%.</span>`);
            } else{
                damage = baseDamage - playerDefense;
                logFight(`<span style='color: #FFA500;'>Chuck Norris delivers Straight Punches! You take regular damage (${formatNumber(Math.max(damage, 0))}).</span>`);
            }
        } else if (rand < 90) { // 10% chance for Grappling Move
            const grappleStunTurns = Math.floor(Math.random() * 4) + 2; // Random number between 2 and 5
            playerStunCount += grappleStunTurns;
            logFight(`<span style='color: #FF4500;'>Chuck Norris performs a Grappling Move, stunning you for ${grappleStunTurns} turn(s).</span>`);
        } else { // 10% chance for Jump Kick
            playerBaseMaxDamage *= 0.8;
            playerMaxDamage = Math.ceil(playerBaseMaxDamage * astralEdgeMult);
            document.getElementById('playerDamageStat').innerText = `${formatNumber(playerMinDamage)} - ${formatNumber(playerMaxDamage)}`;
            logFight(`<span style='color: #8B0000;'>Chuck Norris executes a Jump Kick! Your maximum attack damage is reduced by 20%.</span>`);
        }
    } else if (currEnemyName === "Kratos") {
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
            } else {
                // Deadpool lands a critical hit
                damage = Math.ceil(baseDamage * enemyCritDamage) - playerDefense;
                damage = Math.max(damage, 6.9);
                logFight(`<span style='color: orange;'>${currEnemyName} lands a critical hit for ${formatNumber(Math.max(damage, 0))} damage!</span>`);
            }
        }
    } else if (currEnemyName === "Kaguya") {
        // Independent chance for each attack
        const randChakraAbsorption = Math.random() < 0.015;
        const randTruthSeekerBall = Math.random() < 0.025;
        const randByakugan64Palms = Math.random() < 0.13;
        const randPlanetaryDevastation = Math.random() < 0.01;
        const randAmaterasu = Math.random() < 0.06;
        const randTsukuyomi = Math.random() < 0.03;
        const randSusanoo = Math.random() < 0.1;
        const randKamui = Math.random() < 0.04;
    
        if (randChakraAbsorption) { // Chakra Absorption
            power *= 0.9; // Reduce power by 10%
            playerMinDamage = Math.floor(power * playerMinDamageMult);
            playerBaseMaxDamage = Math.ceil(power * playerMaxDamageMult);
            playerMaxDamage = Math.ceil(playerBaseMaxDamage * astralEdgeMult);
            document.getElementById('playerDamageStat').innerText = `${formatNumber(playerMinDamage)} - ${formatNumber(playerMaxDamage)}`;
            logFight(`<span style='color: #FF0000;'>Kaguya uses Chakra Absorption! Your power is reduced by 10%, and damage recalculated.</span>`);
        }
        
        if (randTruthSeekerBall) { // Truth Seeker Ball
            copium *= 0.9; // Reduce copium by 10%
            delusion *= 0.9; // Reduce delusion by 10%
            playerDefense *= 0.9;
            playerMaxHealth = Math.ceil(Math.pow(copium, 1 / 20) * playerHealthMult);
            playerDefenseBase = delusion > 0 ? Math.ceil(Math.pow(delusion, 1 / 12) / 500) : 0;
            document.getElementById('playerHealthStat').innerText = formatNumber(playerMaxHealth);
            document.getElementById('playerDefenseStat').innerText = formatNumber(playerDefense);
            logFight(`<span style='color: #FF4500;'>Kaguya uses Truth Seeker Ball! Your copium, delusion, and defense are reduced by 10%, and max health and base defense recalculated.</span>`);
        }
        
        if (randByakugan64Palms) { // Byakugan 128 Palms
            let criticalHits = 0;
            for (let i = 0; i < 64; i++) {
                const isCrit = Math.random() < enemyCritChance;
                let attackDamage = Math.max(Math.ceil(baseDamage * (isCrit ? enemyCritDamage : 1)) - playerDefense, 0);
                attackDamage = Math.max(attackDamage, isCrit ? 20:1);
                damage += attackDamage;
                if (isCrit) criticalHits++;
            }
            logFight(`<span style='color: #FFA500;'>Kaguya unleashes Byakugan 64 Palms! ${criticalHits} critical hits out of 64 attacks, dealing a total of ${formatNumber(damage)} damage.</span>`);
        }
        
        if (randPlanetaryDevastation) { // Planetary Devastation
            playerStunCount += 5;
            logFight(`<span style='color: #8B0000;'>Kaguya uses Planetary Devastation! You are stunned for 10 turns.</span>`);
        }
        
        if (randAmaterasu && !izanamiUsed) { // Amaterasu
            playerAmaterasuStacks += 1;
            logFight(`<span style='color: black;'>Kaguya casts Amaterasu! You gain 1 Amaterasu stack, which will damage you each time you attack.</span>`);
        }
        
        if (randTsukuyomi && !izanamiUsed) { // Tsukuyomi
            playerTsukuyomiStacks += 1;
            logFight(`<span style='color: #9370DB;'>Kaguya uses Tsukuyomi! You gain 1 Tsukuyomi stack, causing you to attack yourself next turn.</span>`);
        }
        
        if (randSusanoo) { // Susanoo
            enemyDefense *= 1.02; // Increase Kaguya's defense by 2%
            document.getElementById('enemyDefenseStat').innerText = formatNumber(enemyDefense);
            logFight(`<span style='color: #4682B4;'>Kaguya activates Susanoo! Her defense increases by 2%.</span>`);
        }
        
        if (randKamui) { // Kamui
            kamuiActive = true; // Kaguya dodges the next critical attack
            logFight(`<span style='color: #8A2BE2;'>Kaguya uses Kamui! She will dodge the next critical attack.</span>`);
        }
    } else {
        // Calculate damage
        if (isCritical) {
            damage = Math.ceil(baseDamage * enemyCritDamage) - playerDefense;
            logFight(`<span style='color: orange;'>${currEnemyName} lands a critical hit for ${formatNumber(Math.max(damage, 0))} damage!</span>`);
        } else {
            damage = baseDamage - playerDefense;
            logFight(`${currEnemyName} attacks you for ${formatNumber(Math.max(damage, 0))} damage!`);
        }
    }

    if (playerAbsorb > 0 && damage > 0) {
        logFight(`<span style='color: #9370DB;'>You absorb ${formatNumber(damage * playerAbsorb)} of the damage!</span>`);
    }
    // Handle absorb mechanics
    damage = Math.max(damage * (1 - playerAbsorb), 0);

    // Apply damage to player health
    playerHealth -= Math.max(damage, 0);

    // Handle Mystic Rebound skill activation
    if (isCritical && mysticReboundSkill) {
        if (mysticReboundCount === 0) {
            logFight(`<span style='color: #FF69B4;'>Mystic Rebound bonus activated! Your dodge chance has increased.</span>`);
        }
        mysticReboundCount = 6;
        playerDodge = Math.min(playerDodgeBase + (playerTemporalFluxCount * 0.1) + (mysticReboundCount > 0 ? 0.2 : 0), 1);
        document.getElementById('playerDodgeStat').innerText = formatNumber(playerDodge * 100) + '%';
    }

    if (voidStabilizerActive && (playerHealth / playerMaxHealth) < 0.8){
        voidStabilizerActive = false;
        playerAbsorb = playerAbsorbBase;
        document.getElementById('playerAbsorbStat').innerText = formatNumber(playerAbsorb * 100) + '%';
    }

    if (enemyGravityWellCount > 0) {
        enemyGravityWellCount--;

        if (enemyGravityWellCount == 0) {
            enemyMinDamage *= 2;
            document.getElementById('enemyDamageStat').innerText = `${formatNumber(enemyMinDamage)} - ${formatNumber(enemyMaxDamage)}`;
            logFight(`<span style='color: #ECFFDC;'>The gravity well has dissipated, and ${currEnemyName}'s power returns!</span>`);
        }
    }

    // Handle Stun mechanics
    if (damage > 0 && Math.random() < enemyStunChance) {
        playerStunCount++;
        logFight(`<span style='color: #8B008B;'>${currEnemyName} stuns you! (${playerStunCount} turn(s) stunned)</span>`);
    }

    if (damage > 0 && astralEdgeSkill){
        astralEdgeMult = 1 + (((playerMaxHealth - playerHealth) / playerMaxHealth) / 2);
        playerMaxDamage = Math.ceil(playerBaseMaxDamage * astralEdgeMult);
        document.getElementById('playerDamageStat').innerText = `${formatNumber(playerMinDamage)} - ${formatNumber(playerMaxDamage)}`;
    }

    // Update health bars
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

    // Stellar Harvest Skill effect
    if (stellarHarvestSkill) {
        const multiplier = celestialCollectorSkill ? 1.5: 1.3;
        const duration = celestialCollectorSkill ? 600000 : 180000; // 10 minutes (600,000 ms) or 3 minute (180,000 ms)

        stellarHarvestMult *= multiplier;
        updateEffectiveMultipliers();
        updateStellarHarvestDisplay();
        //TODO: use global tooltip instead

        // Set a timeout to reset the multiplier after the specified duration
        const timeoutId = setTimeout(() => {
            stellarHarvestMult = Math.max(stellarHarvestMult / multiplier, 1);
            updateEffectiveMultipliers();
            updateStellarHarvestDisplay();
            //TODO: use global tooltip to show it decreased
        }, duration);

        // Store the timeout ID in the array
        currentTimeouts.push(timeoutId);
    }
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
