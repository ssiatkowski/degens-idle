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
        minDamage: 7,
        maxDamage: 15,
        attackSpeed: 3,
        defense: 8,
        critChance: 0,
        critDamage: 1,
        dodge: 0.1,
        nonCritDodge: 0,
        stun: 0,
        absorb: 0
    },
    "Shao Kahn": {
        health: 600,
        minDamage: 10,
        maxDamage: 25,
        attackSpeed: 3,
        defense: 30,
        critChance: 0.2,
        critDamage: 2,
        dodge: 0,
        nonCritDodge: 0,
        stun: 0,
        absorb: 0
    },
    "Darth Vader": {
        health: 3000,
        minDamage: 8,
        maxDamage: 88,
        attackSpeed: 4,
        defense: 400,
        critChance: 0,
        critDamage: 1,
        dodge: 0,
        nonCritDodge: 0,
        stun: 0,
        absorb: 0.3
    },
    "Isshin": {
        health: 6000,
        minDamage: 5,
        maxDamage: 12,
        attackSpeed: 45,
        defense: 500,
        critChance: 0.08,
        critDamage: 15,
        dodge: 0,
        nonCritDodge: 0.3,
        stun: 0,
        absorb: 0
    },
    "Sauron": {
        health: 450000,
        minDamage: 30,
        maxDamage: 50,
        attackSpeed: 7,
        defense: 20000,
        critChance: 0.03,
        critDamage: 100,
        dodge: 0,
        nonCritDodge: 0,
        stun: 0,
        absorb: 0.9
    },
    "Kratos": {
        health: 7e8,
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
        stun: 0.069,
        absorb: 0.069
    },
    "Chuck Norris": {
        health: 5e11,
        minDamage: 100,
        maxDamage: 500,
        attackSpeed: 7,
        defense: 1.5e9,
        critChance: 0,
        critDamage: 1,
        dodge: 0.25,
        nonCritDodge: 0.75,
        stun: 0.5,
        absorb: 0.25
    },
    "Vegeta": {
        health: 1.8e12,
        minDamage: 100,
        maxDamage: 300,
        attackSpeed: 5,
        defense: 6e9,
        critChance: 0.1,
        critDamage: 1.5,
        dodge: 0,
        nonCritDodge: 0.1,
        stun: 0,
        absorb: 0,
        nextBoss: "Vegeta SS2",
    },
    "Vegeta SS2": {
        health: 3.6e12,
        minDamage: 200,
        maxDamage: 400,
        attackSpeed: 7,
        defense: 9e9,
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
        health: 7e12,
        minDamage: 300,
        maxDamage: 500,
        attackSpeed: 9,
        defense: 1.4e10,
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
        health: 9e12,
        minDamage: 800,
        maxDamage: 1100,
        attackSpeed: 11,
        defense: 0,
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
        health: 1.5e13,
        minDamage: 900,
        maxDamage: 1200,
        attackSpeed: 13,
        defense: 8e10,
        critChance: 0.2,
        critDamage: 2.5,
        dodge: 0.2,
        nonCritDodge: 0.8,
        stun: 0.25,
        absorb: 0,
        img: `imgs/vegeta_5.jpg`,
    },
    "Kaguya": {
        health: 2.22e17,
        minDamage: 2000,
        maxDamage: 3300,
        attackSpeed: 22.2,
        defense: 4.2e15,
        critChance: 0.15,
        critDamage: 1.5,
        dodge: 0.2,
        nonCritDodge: 0.4,
        stun: 0,
        absorb: 0.666,
        img: 'imgs/kaguya.jpg'
    },
    "Saitama": {
        health: 2e22,
        minDamage: 0,
        maxDamage: 0,
        attackSpeed: 10,
        defense: 0,
        critChance: 0,
        critDamage: 1,
        dodge: 0,
        nonCritDodge: 0,
        stun: 0,
        absorb: 0,
        img: 'imgs/saitama.jpg'
    },
    "Your Ego": {
        health: 2.5e122,
        minDamage: 2e19,
        maxDamage: 2e21,
        attackSpeed: 20,
        defense: 0,
        critChance: 0,
        critDamage: 1,
        dodge: 0.15,
        nonCritDodge: 0,
        stun: 1,
        absorb: 0,
        img: 'imgs/your_ego.jpg'
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
let playerNonCritDodge = 0; // not used
let playerStunChance = 0;
let playerAbsorb = 0;
let playerAbsorbBase = 0;

let playerStunCount = 0;
let enemyStunCount = 0;
let playerAmaterasuStacks = 0;
let playerTsukuyomiStacks = 0;

let enemyGravityWellCount = 0;
let gravityWellQueue = [];

let astralEdgeMult = 1;

let playerAttackCount = 0;

let playerTemporalFluxCount = 0;

let deadpoolRevives = 0;
let vegetaAbsorbedDefense = 0;

let voidStabilizerActive = false;

let firstAttackOfBattle = false;

let kamuiActive = false;
let izanagiUsed = false;
let izanamiUsed = false;
let sasukeIsHelping = false;

let mysticReboundCount = 0;

let numCookedRabbits = 0;

let yourEgoWins = 0;

// Function to initialize and start the mini-game
function startFightGame(enemyName, enemyImg) {
    return new Promise((resolve) => {
        // Clear the fight log at the start of the fight
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

        const sebosLuck = purchasedUpgradesSet.has("Sebo's Luck");

        firstAttackOfBattle = primeImpactSkill ? true : false;

        // Get player stats from resources with rounding up
        playerMaxHealth = (balanceHallSkills.get("Singularity Wielder").unlocked ? Math.ceil((copium ** (1/13))) : Math.ceil((copium ** (1/20))) * playerHealthMult);
        playerHealth = playerMaxHealth;
        playerDefenseBase = delusion > 0 ? Math.ceil((delusion ** (1/12)) / 500) : 0;
        playerDefense = playerDefenseBase;
        playerCritChance = Math.min(Math.ceil(trollPoints ** (1/50)) / 100, 0.9);
        playerCritChance = sebosLuck ? playerCritChance + 0.05 : playerCritChance;
        playerCritDamage = 1 + Math.min(Math.ceil(trollPoints ** (1/25)) / 100, 99);

        if (playerCritChance >= 0.95){
            unlockAchievement('Guaranteed-ish');
        }

        playerCurrentAttackSpeed = playerAttackSpeed;

        playerMinDamage = Math.floor(power * playerMinDamageMult);
        playerBaseMaxDamage = Math.ceil(power * playerMaxDamageMult);
        playerMaxDamage = playerBaseMaxDamage;

        if (balanceHallSkills.get("Singularity Wielder").unlocked) {
            playerDodgeBase = Math.floor(Math.log10(serenity)) / 100
            playerStunChance = Math.floor(Math.log10(serenity)) / 100
        }

        playerDodge = playerDodgeBase;

        playerStunCount = 0;
        playerTemporalFluxCount = 0;
        playerAmaterasuStacks = 0;
        playerTsukuyomiStacks = 0;

        playerAttackCount = 0;
        enemyGravityWellCount = 0;
        gravityWellQueue = [];
        mysticReboundCount = 0;

        izanagiUsed = false;
        izanamiUsed = false;

        vegetaAbsorbedDefense = 0;

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
        isProgrammaticScroll = true;

        // Show the fighting overlay
        document.getElementById('fightingOverlay').style.display = 'flex';

        // Add event listener for the forfeit button
        const forfeitButton = document.getElementById('forfeitButton');
        if (forfeitButton) {
            forfeitButton.disabled = false;
            forfeitButton.style.display = 'block';
        }
        forfeitButton.onclick = (event) => {
            event.stopPropagation(); // Prevent the click from propagating to the document
            logFight("<span style='color: red;'>You forfeited the fight!</span>");
            forfeitButton.disabled = true; // Disable the forfeit button to prevent multiple clicks
            forfeitButton.style.display = 'none';
            resolve(false); // Resolve the promise with a loss
            endFight(true); // Pass true to indicate the player forfeited
        };

        if (currEnemyName === "Agent Smith") {
            if (!purchasedUpgradesSet.has("VR Life")) {
                playerDodge += 0.25;
                document.getElementById('playerDodgeStat').innerText = formatNumber(playerDodge * 100) + '%';
                unlockAchievement('Virtual Dodging');
                logFight("<span style='color: green; font-weight: bold; font-size: 1.3em';>You figure out this is a VR fight and casually increase your dodge chance by 25%.</span>");
                numBattleGimmicks.add('VR Dodging');
                noGimmicksUsed = false;
            }
        }else if (currEnemyName === "Darth Vader") {
            if (!purchasedUpgradesSet.has("Unlimited Power") && !purchasedUpgradesSet.has("Still very stupid")) {
                enemyStunCount = 6;
                enemyAbsorb = 0.1;
                document.getElementById('enemyAbsorbStat').innerText = formatNumber(enemyAbsorb * 100) + '%';
                unlockAchievement('Unlikely Duo');
                logFight("<span style='color: green; font-weight: bold; font-size: 1.3em';>Darth Vader tries to use the force to stun you but Qui-Gon Jinn protects you. Darth Sidious uses force lightning to stun Darth Vader for 6 turns and reduce his damage absorption to 10%.</span>");
                numBattleGimmicks.add('Qui-Gon Jinn');
                numBattleGimmicks.add('Sheev');
                noGimmicksUsed = false;
            } else if (!purchasedUpgradesSet.has("Still very stupid")) {
                unlockAchievement('Academic Grandmaster');
                logFight("<span style='color: green; font-weight: bold; font-size: 1.3em';>Darth Vader tries to use the force to stun you but Qui-Gon Jinn protects you. </span>");
                numBattleGimmicks.add('Qui-Gon Jinn');
                noGimmicksUsed = false;
            } else if (!purchasedUpgradesSet.has("Unlimited Power")) {
                enemyStunCount = 6;
                enemyAbsorb = 0.1;
                playerStunCount = 3;
                document.getElementById('enemyAbsorbStat').innerText = formatNumber(enemyAbsorb * 100) + '%';
                unlockAchievement('Sheev vs Anakin');
                logFight("<span style='color: green; font-weight: bold; font-size: 1.3em';>Darth Vader uses the force to stun you for 3 turns. Darth Sidious uses force lightning to stun Darth Vader for 6 turns and reduce his damage absorption to 10%.</span>");
                numBattleGimmicks.add('Sheev');
                noGimmicksUsed = false;
            } else {
                playerStunCount = 3;
                logFight("<span style='color: red; font-weight: bold; font-size: 1.3em';>Darth Vader uses the force to stun you for 3 turns. (if only you could get someone who could use the force to protect you) </span>");
            }
        } else if (currEnemyName === "Sauron" && !purchasedUpgradesSet.has("One Does Not Simply")) {
            playerBaseMaxDamage = playerBaseMaxDamage * 1.2;
            playerMaxDamage = playerBaseMaxDamage;
            document.getElementById('playerDamageStat').innerText = `${formatNumber(playerMinDamage)} - ${formatNumber(playerMaxDamage)}`;
            unlockAchievement('Morale Boost');
            logFight("<span style='color: green; font-weight: bold; font-size: 1.3em';>Though Boromir offers no special powers, his presence as a leader inspires you. His courage and determination lift your spirits, boosting your morale and increasing your max damage by 20%.</span>");
            numBattleGimmicks.add('Boromir');
            noGimmicksUsed = false;
        } else if (currEnemyName === "Chuck Norris") {
            if (!purchasedUpgradesSet.has("Training Dummy")) {
                enemyDefense /= 2;
                enemyHealth /= 2;
                enemyAbsorb = 0;
                document.getElementById('enemyDefenseStat').innerText = formatNumber(enemyDefense);
                document.getElementById('enemyAbsorbStat').innerText = formatNumber(enemyAbsorb * 100) + '%';
                unlockAchievement('Chuck Norris Kidney');
                logFight("<span style='color: green; font-weight: bold; font-size: 1.3em';>You catch Chuck Norris mid-session while he's pummeling the Training Dummy. Seizing the moment, you sneak up and deliver a wrenching gut shot right to his kidney. The impact is so brutal that it cuts his health and defense in half for the rest of the battle, and he is unable to absorb any damage.</span>");
                numBattleGimmicks.add('Training');
                noGimmicksUsed = false;
            } else {
                logFight("<span style='color: red; font-weight: bold; font-size: 1.3em';>Chuck Norris has no distractions and is ready to fight you at full power.</span>");
            }
        } else if (currEnemyName === "Vegeta" && !purchasedUpgradesSet.has("Helpful Vegeta")) {
            playerCritChance = Math.min((playerCritChance + 0.1), 1);
            document.getElementById('playerCritChanceStat').innerText = formatNumber(playerCritChance * 100) + '%';
            unlockAchievement('It Takes One to Know One');
            logFight("<span style='color: green; font-weight: bold; font-size: 1.3em';>In a strange time-travel twist, you face a vastly stronger future Vegeta, with a younger Vegeta by your side. Unable to match his future self’s power, young Vegeta offers crucial advice, raising your critical hit chance by 10% and giving you a chance against the overwhelming foe.</span>");
            numBattleGimmicks.add('Vegeta');
            noGimmicksUsed = false;
        } else if (currEnemyName === "Kaguya") {
            if (!purchasedUpgradesSet.has("Kung Fu Bunny")) {
                unlockAchievement('Wrong Sidekick');
                numCookedRabbits++;
                if (numCookedRabbits >= 25) {
                    unlockAchievement('The Great American Cookout');
                }
                localStorage.setItem('numCookedRabbits', numCookedRabbits);
                logFight(`<span style='color: yellow; font-size: 1.2em';>Kaguya notices the bunny beside you, clumsily performing kung fu moves. With a single glance, she pulverizes it, leaving nothing behind. That is ${numCookedRabbits} poor bunn${numCookedRabbits > 1 ? 'ies' : 'y'} you have caused to get fried.</span>`);
                numBattleGimmicks.add('Bunny');
                noGimmicksUsed = false;
                buyUpgrade(encodeName("Kung Fu Bunny"), true, true);
            }
            if (!purchasedUpgradesSet.has("Good Guy Sasuke")) {
                sasukeIsHelping = true; // Set Sasuke's help flag to true
                unlockAchievement('Sidekick');
                logFight("<span style='color: green; font-weight: bold; font-size: 1.3em';>Sasuke joins your side to stop Kaguya and save the multiverse. Although he is leagues below her, Sasuke will assist by partially countering some of her Sharingan powers with his own.</span>");
                numBattleGimmicks.add('Sasuke');
                noGimmicksUsed = false;
            } else {
                sasukeIsHelping = false;
                logFight("<span style='color: red; font-weight: bold; font-size: 1.3em';>You stand alone against the biggest evil the world has ever seen.</span>");
            }
            if (numBattleGimmicks.size >= 9) {
                unlockAchievement('Bells and Whistles');
            }
        }

        // Update health bars
        updateHealthBars();

        updateStatsUI();

        if (currEnemyName === "Saitama") {
            setTimeout(() => {
                logFight("<span style='color: #b3a125; font-size: 1.2em';>Saitama: Oh, hello there.</span>");
            }, 400);

            setTimeout(() => {
                logFight("<span style='color: #6b8ca4; font-size: 1.2em';>You: What? I can sense your power. You could have stopped her yourself, why didn’t you?</span>");
            }, 800);

            setTimeout(() => {
                logFight("<span style='color: #b3a125; font-size: 1.2em';>Saitama: It would have been boring.</span>");
            }, 1200);

            setTimeout(() => {
                logFight("<span style='color: #6b8ca4; font-size: 1.2em';>You: But you were going to let her destroy the multiverse?</span>");
            }, 1600);

            setTimeout(() => {
                logFight("<span style='color: #b3a125; font-size: 1.2em';>Saitama: There’s no meaning to existence anyway. Everything is boring.</span>");
            }, 2000);

            setTimeout(() => {
                logFight("<span style='color: #6b8ca4; font-size: 1.2em';>You: What the hell, man? Why so bleak?</span>");
            }, 2400);

            setTimeout(() => {
                logFight("<span style='color: #b3a125; font-size: 1.2em';>Saitama: I’m bored. I’m gonna go now.</span>");
            }, 2800);

            setTimeout(() => {
                logFight("<span style='color: #6b8ca4; font-size: 1.2em';>You: No! Stand and fight!</span>");
            }, 3200);

            setTimeout(() => {
                logFight("<span style='color: #b3a125; font-size: 1.2em';>Saitama: *yawns*</span>");
            }, 3600);
            // Start the fight loop
            // Add a 0.25-second delay before starting the fight loop
            setTimeout(() => {
                fightLoop(resolve);
            }, 4000); // 250 milliseconds = 0.25 seconds
        } else{
            // Start the fight loop
            if (currEnemyName === "Chuck Norris" || currEnemyName === "Kaguya" || currEnemyName === "Darth Vader" || (currEnemyName === "Training Dummy" && !achievementsMap.get('Skip Leg Day').isUnlocked)){
                setTimeout(() => {
                    fightLoop(resolve);
                }, 600);
            } else {
                // Add a 0.25-second delay before starting the fight loop
                setTimeout(() => {
                    fightLoop(resolve);
                }, 200); // 250 milliseconds = 0.25 seconds
            }
        }

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
    document.getElementById('enemyHealthStat').innerText = formatNumber(enemyMaxHealth);
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
    container.style.display = shouldDisplay ? 'grid' : 'none';
}


function fightLoop(resolve) {
    if (fightEnded) return; // Stop if the fight has ended

    const playerAttackInterval = 5000 / playerCurrentAttackSpeed ; // Player attacks every 2 seconds (fixed)
    const enemyAttackInterval = 5000 / enemyAttackSpeed; // Calculate interval from attack speed

    // Player attack loop
    playerInterval = setInterval(() => {
        if (fightEnded) return; // Stop if the fight has ended

        attackEnemy(resolve);

        // Check if the enemy is defeated
        if (enemyHealth <= 0) {
            resolve(true); // Resolve the promise with a win
            endFight(); // End the fight visuals
        }
    }, playerAttackInterval);

    // Enemy attack loop
    enemyInterval = setInterval(() => {
        if (fightEnded) return; // Stop if the fight has ended

        attackPlayer(resolve);

        // Check if the player is defeated
        if (playerHealth <= 0) {
            unlockAchievement('Get Up and Try Again');
            resolve(false); // Resolve the promise with a loss
            endFight(); // End the fight visuals
        }
    }, enemyAttackInterval);
}

// Function to clear both game intervals
function clearAttackIntervals() {
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
        if(amaterasuDamage > 0){
            showFloatingDamage(amaterasuDamage, true, 'black');
        }
        if(amaterasuDamage >= 8888){
            unlockAchievement('Eternal Flame');
        }
        logFight(`<span style='color: black;'>${playerAmaterasuStacks.toFixed(1)} stacks of Amaterasu burn you for ${formatNumber(amaterasuDamage)} damage!</span>`);

        // Check if Sasuke is helping and reduce Amaterasu stacks by 0.1
        if (sasukeIsHelping) {
            playerAmaterasuStacks = Math.max(0, playerAmaterasuStacks - 0.1); // Ensure it doesn't go below 0
            logFight(`<span style='color: blue;'>Sasuke is helping put out the flames!</span>`);
        }
    }

    // Check if the player is stunned
    if (playerStunCount > 0) {
        if(quantumBastionSkill){
            logFight(`<span style='color: #FF4500;'>You are stunned and unable to move! Quantum Bastion is helping you recover quicker. (${playerStunCount} turn(s) remaining)</span>`);
            playerStunCount = Math.max(playerStunCount- (quantumFortressSkill ? 5 : 2) , 0);
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
        if (selfDamage > 0) {
            showFloatingDamage(selfDamage, true, '#9370DB');
        }
        logFight(`<span style='color: #9370DB;'>Tsukuyomi activates! You attack yourself for ${formatNumber(selfDamage)} damage!</span>`);
        playerTsukuyomiStacks--; // Remove one stack
        updateHealthBars();
        return; // Skip attacking the enemy, as the player attacked themselves
    }

    let isCritical = Math.random() < playerCritChance;
    let damage = 0;
    
    if (currEnemyName === "Deadpool" && !purchasedUpgradesSet.has("Impossible") && !purchasedUpgradesSet.has("Captain Degen") ) {
        enemyHealth = 0;
        logFight("<span style='color: green; font-weight: bold; font-size: 1.3em';>In an unlikely team-up, frustrated for different reasons—Captain America sick of Deadpool’s endless jokes and Thanos fed up with his antics—join forces. Cap throws his shield with precision, and Thanos supercharges it with the Power Stone. The impact obliterates Deadpool, reducing him to nothing but dust. Satisfied, they walk away without a word, unaware that Deadpool’s ashes may already starting to reform behind them.</span>");
        unlockAchievement('Unlikely Duo #2')
        buyUpgrade(encodeName("Impossible"), true, true);
        buyUpgrade(encodeName("Captain Degen"), true, true);
        numBattleGimmicks.add('Captain');
        numBattleGimmicks.add('Thanos');
        noGimmicksUsed = false;
    } else {

        const baseDamage = Math.floor(Math.random() * (playerMaxDamage - playerMinDamage + 1)) + playerMinDamage;

        
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
            if (!isCritical && Math.random() < enemyNonCritDodge) {
                logFight(`<span style='color: yellow;'>${currEnemyName} effortlessly dodges your non-critical attack!</span>`);
                return; // Enemy dodged, so the attack ends here
            }

            // Handle regular dodge mechanics (applies to both critical and non-critical hits)
            if (Math.random() < enemyDodge) {
                logFight(`<span style='color: orange;'>${currEnemyName} dodges your attack!</span>`);
                return; // Enemy dodged, so the attack ends here
            }

            // Handle regular dodge mechanics (applies to both critical and non-critical hits)
            if (kamuiActive && isCritical) {
                kamuiActive = false;
                if (sasukeIsHelping) {
                    // Sasuke helps prevent Kamui from ending the turn, but makes the hit non-critical
                    logFight(`<span style='color: blue;'>Sasuke sees through ${currEnemyName}'s Kamui escape! You still land a hit, but it's no longer critical.</span>`);
                    isCritical = false; // Hit is still successful, but not critical
                } else {
                    logFight(`<span style='color: orange;'>${currEnemyName} uses Kamui and dodges your critical attack!</span>`);
                    return; // Enemy dodged, so the attack ends here
                }
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
            damage = Math.max(damage * (1 - enemyAbsorb), 0);
            if (enemyAbsorb > 0) {
                logFight(`<span style='color: #8A2BE2;'>${currEnemyName} absorbs ${formatNumber(ogDmg - damage)} of the damage!</span>`);
            }
        }

        // Apply damage to enemy health
        enemyHealth -= Math.max(damage, 0);
        if (damage > 0) {
            dmgColor = isCritical ? '#89CFF0' : 'white';
            showFloatingDamage(damage, false, dmgColor);
        }

        if (damage > 0) {
            playerAttackCount++;
            if (gravityWellSkill && (playerAttackCount % 5 == 0)) {
                if (enemyGravityWellCount == 0) {
                    const halvedDamage = enemyMinDamage / 2;
                    gravityWellQueue.push(halvedDamage); // Push the halved damage to the queue
                    enemyMinDamage = halvedDamage;
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
            const revivalChance = 0.9931 * Math.pow(0.9931, deadpoolRevives - 69);
            if (Math.random() < revivalChance) {
                unlockAchievement('WHY IS HE ALIVE?');
                enemyHealth = enemyMaxHealth;
                deadpoolRevives += 1;
                if (deadpoolRevives >= 420){
                    unlockAchievement('Rasta Deadpool');
                }
                logFight(`<span style='color: #AAFF00;'>${currEnemyName} dies and regenerates back to full health! 
                    <span style='font-weight: bold; font-size: 1.4em;'>${deadpoolRevives}</span> revives - you feel like he's killable now! (Revival Chance: ${formatNumber(revivalChance * 100)}%)</span>`);


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
                    <span style='font-weight: bold; font-size: 1.4em;'>${deadpoolRevives}</span> revives! (Revival Chance: ${formatNumber(revivalChance * 100)}%)</span>`);
            }
        }
    }

    // Handle special case for Vegeta with multiple forms
    if (currEnemyName.startsWith("Vegeta") && enemyHealth <= 0 && enemyStats[currEnemyName].nextBoss) {

        // Clear the previous enemy attack interval and set a new one
        clearAttackIntervals();

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
        gravityWellQueue = [];
        astralEdgeMult = 1;

        firstAttackOfBattle = primeImpactSkill ? true : false;

        logFight(`<span style='color: #FF4500; font-weight: bold; font-size: 1.5em;'>Vegeta has transformed into ${currEnemyName}!</span>`);

        // Special case for "Vegeta SS God"
        if (currEnemyName === "Vegeta SS God") {
            if (playerDefense > 0) {
                vegetaAbsorbedDefense = playerDefense * 2e9;
                delusion = 0;
                enemyDefense += vegetaAbsorbedDefense;
                playerDefense = 0;
                playerDefenseBase = 0;

                logFight(`<span style='color: #FFD700; font-weight: bold; font-size: 1.3em;'>Vegeta SS God sees right through you, erasing all your delusions and absorbing all of your defensive powers! His defense skyrockets to ${formatNumber(vegetaAbsorbedDefense)}!</span>`);
            } else {
                playerDefenseBase = 1000;
                playerDefense = 1000; // Grant the player 1k defense
                unlockAchievement('Outsmart Vegeta SS God');
                logFight(`<span style='color: #00FF00; font-weight: bold; font-size: 1.3em;'>You outwitted Vegeta SS God! His attempt to absorb your defense fails, and instead, you gain 1,000 base defense!</span>`);
                numBattleGimmicks.add('SS God');
                noGimmicksUsed = false;
            }
        }

        // Special case for "Vegeta SS Eternal"
        if (currEnemyName === "Vegeta SS Eternal") {
            enemyDefense += vegetaAbsorbedDefense;
            if (hopium < 0) {
                playerCurrentAttackSpeed *= 0.25; // Decrease attack speed by 75%
                logFight(`<span style='color: #FF4500; font-weight: bold; font-size: 1.3em;'>Vegeta SS Eternal senses your despair, and the extremely fucking powerful magnetic field around him slows your attacks by 75%!</span>`);
            } else {
                playerCurrentAttackSpeed *= 1.75; // Increase attack speed by 75%
                unlockAchievement('Outsmart Vegeta SS Eternal');
                logFight(`<span style='color: #00FF00; font-weight: bold; font-size: 1.3em;'>Vegeta SS Eternal feels your hope, and the extremely fucking powerful magnetic field around him boosts your attack speed by 75%!</span>`);
                numBattleGimmicks.add('SS Eternal');
                noGimmicksUsed = false;
            }
        }

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
        }, 600);
    }

    if (currEnemyName === "Kaguya" && enemyHealth <= enemyMaxHealth) {

        if (izanagiUsed && !izanamiUsed && enemyHealth <= enemyMaxHealth) {

            // Clear the previous enemy attack interval and set a new one
            clearAttackIntervals();

            // Kaguya uses Izanami, loses her right eye, goes blind, and stuns the player for 100 turns
            izanamiUsed = true;
            enemyHealth = enemyMaxHealth;
            playerStunCount += 66;
            enemyAttackSpeed *= 3;
            logFight(`<span style='color: #800020; font-weight: bold; font-size: 1.3em;'>Kaguya uses Izanami! She loses her right eye, goes blind, stuns you for 66 turns and is enraged so her attack speed increases 3x! However, she can no longer land critical strikes or use Amaterasu/Tsukuyomi.</span>`);

            // Disable critical strikes because Kaguya is now blind
            enemyCritChance = 0;
            document.getElementById('enemyCritChanceStat').innerText = formatNumber(enemyCritChance * 100) + '%';
            document.getElementById('enemyAttackSpeedStat').innerText = formatNumber(enemyAttackSpeed);

            // Update the enemy image
            const enemyImageContainer = document.getElementById('enemyImageContainer');
            enemyImageContainer.innerHTML = ''; // Clear previous image
            const enemyImage = document.createElement('img');
            enemyImage.src = 'imgs/kaguya_blind.jpg';
            enemyImage.alt = "Enemy Image";
            enemyImageContainer.appendChild(enemyImage);

            setTimeout(() => {
                fightLoop(resolve);
            }, 1000);
        }

        if (!izanagiUsed && enemyHealth <= 0) {

            // Clear the previous enemy attack interval and set a new one
            clearAttackIntervals();

            // Kaguya uses Izanagi, loses her left eye, and sets her health to 10x maxHealth
            izanagiUsed = true;
            enemyHealth = enemyMaxHealth * 3;
            logFight(`<span style='color: #800020; font-weight: bold; font-size: 1.3em;'>Kaguya uses Izanagi! She loses her left eye and her health is restored to 3x her Max Health!</span>`);

            setTimeout(() => {
                fightLoop(resolve);
            }, 1000);
        }

    }

    if (currEnemyName === "Saitama" && enemyHealth <= (0.25 * enemyMaxHealth)) {

        // Check for special interaction: one-punch KO
        if (damage > enemyMaxHealth && enemyHealth <= 0) {
            unlockAchievement('One Hit KO');
            logFight(`<span style='color: #FFDEAD; font-size: 1.3em;'>You have One Punched the One Punch Man!</span>`);
        } else{
            // Clear the previous enemy attack interval and set a new one
            clearAttackIntervals();

            // Saitama gets serious - change his name, restore health, and increase attack speed
            currEnemyName = "Serious Saitama";
            enemyAttackSpeed = enemyAttackSpeed * 10; // Set his attack speed to 100
            enemyMinDamage = enemyMinDamage * 10;
            enemyMaxDamage = enemyMaxDamage * 10;
            enemyDefense = enemyDefense * 10;

            logFight(`<span style='color: #b3a125; font-weight: bold; font-size: 1.3em;'>Saitama gets serious! No tricks up his sleeve, just raw power. Brace yourself!</span>`);

            if (!purchasedUpgradesSet.has("Mosquito")) {
                unlockAchievement('Dirty Trick');
                enemyStunCount += 200;
                logFight("<span style='color: green; font-size: 1.3em';>Just as Saitama got serious, you pointed at a piñata and he couldn't resist. But when he punched it, a swarm of mosquitos burst out, fueling his mosquito hate. He spends 200 turns squashing them, leaving himself wide open to your attacks.</span>");
                if (numBattleGimmicks.size >= 9) {
                    unlockAchievement('Bells and Whistles');
                }
            } else {
                logFight("<span style='color: red; font-size: 1.3em';>Before you have time to process what just happened, Saitama charges towards you. His sudden transformation catches you off guard, and you're stunned for 25 turns!</span>");
                playerStunCount += 25;
            }

            // Update the enemy image to the serious version of Saitama
            const enemyImageContainer = document.getElementById('enemyImageContainer');
            enemyImageContainer.innerHTML = ''; // Clear the previous image
            const enemyImage = document.createElement('img');
            enemyImage.src = 'imgs/saitama_serious.jpg'; // Path to the serious Saitama image
            enemyImage.alt = "Serious Saitama";
            enemyImageContainer.appendChild(enemyImage);

            updateStatsUI();

            // Delay of 1 second before continuing the fight
            setTimeout(() => {
                fightLoop(resolve);
            }, 1000);

        }
    }

    // Update health bars
    updateHealthBars();
}





// Function to handle enemy attacking the player
function attackPlayer(resolve) {
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
            playerBaseMaxDamage = Math.max(playerMinDamage, playerBaseMaxDamage * 0.8);
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
        const randByakugan64Palms = Math.random() < 0.133;
        const randPlanetaryDevastation = Math.random() < 0.012;
        const randAmaterasu = Math.random() < 0.15;
        const randTsukuyomi = Math.random() < 0.04;
        const randSusanoo = Math.random() < 0.18;
        const randKamui = Math.random() < 0.06;

        if (randChakraAbsorption) { // Chakra Absorption
            power *= 0.9; // Reduce power by 10%
            playerMinDamage = Math.floor(power * playerMinDamageMult);
            playerBaseMaxDamage = Math.ceil(power * playerMaxDamageMult);
            playerMaxDamage = Math.ceil(playerBaseMaxDamage * astralEdgeMult);
            document.getElementById('playerDamageStat').innerText = `${formatNumber(playerMinDamage)} - ${formatNumber(playerMaxDamage)}`;
            logFight(`<span style='color: #FF0000;'>Kaguya uses Chakra Absorption! Your power is reduced by 10%, and damage recalculated.</span>`);
        }

        if (randTruthSeekerBall) { // Truth Seeker Ball
            copium *= 0.85; // Reduce copium by 10%
            delusion *= 0.85; // Reduce delusion by 10%
            playerDefense *= 0.85;
            playerMaxHealth = Math.ceil(Math.pow(copium, 1 / 20) * playerHealthMult);
            playerDefenseBase = delusion > 0 ? Math.ceil(Math.pow(delusion, 1 / 12) / 500) : 0;
            document.getElementById('playerHealthStat').innerText = formatNumber(playerMaxHealth);
            document.getElementById('playerDefenseStat').innerText = formatNumber(playerDefense);
            logFight(`<span style='color: #FF4500;'>Kaguya uses Truth Seeker Ball! Your copium, delusion, and defense are reduced by 15%, and max health and base defense recalculated.</span>`);
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
            logFight(`<span style='color: #8B0000;'>Kaguya uses Planetary Devastation! You are stunned for 5 turns.</span>`);
        }

        if (randAmaterasu && !izanamiUsed) { // Amaterasu
            playerAmaterasuStacks += 1;
            logFight(`<span style='color: black;'>Kaguya casts Amaterasu! You gain 1 eternal flame stack, which will damage you each time you attack.</span>`);
        }

        if (randTsukuyomi && !izanamiUsed) { // Tsukuyomi
            playerTsukuyomiStacks += 1;
            logFight(`<span style='color: #9370DB;'>Kaguya uses Tsukuyomi! You gain 1 stack of insanity, causing you to attack yourself next turn.</span>`);
        }

        if (randSusanoo) { // Susanoo
            if (sasukeIsHelping) {
                enemyDefense *= 1.03; // Throttle Susanoo to 75% power, increasing defense by 3%
                logFight(`<span style='color: blue;'>Kaguya activates Susanoo but Sasuke throttles it! Her defense increases by only 3%.</span>`);
            } else {
                enemyDefense *= 1.04; // Increase Kaguya's defense by 4%
                logFight(`<span style='color: #4682B4;'>Kaguya activates Susanoo! Her defense increases by 4%.</span>`);
            }
            document.getElementById('enemyDefenseStat').innerText = formatNumber(enemyDefense);
        }

        if (randKamui) { // Kamui
            kamuiActive = true; // Kaguya dodges the next critical attack
            logFight(`<span style='color: #8A2BE2;'>Kaguya uses Kamui! She will dodge the next critical attack.</span>`);
        }
    } else if (currEnemyName === "Saitama") {
        // Randomly determine Saitama's move
        const rand = Math.random() * 100;

        if (rand < 10) { // 10% chance for Jumping Jacks
            enemyCritDamage += 0.17;
            logFight(`<span style='color: #d4af37;'>Saitama does Jumping Jacks! His critical damage increases by 17%.</span>`);
        } else if (rand < 20) { // 10% chance for Push Ups
            enemyMinDamage += 100;
            enemyMaxDamage += 200;
            logFight(`<span style='color: #b8860b;'>Saitama does Push Ups! His minimum damage increases by 200 and his maximum damage by 300.</span>`);
        } else if (rand < 30) { // 10% chance for Side Hops
            const dodgeIncrease = 0.011 * (1 - enemyDodge); // Diminishing dodge increase based on remaining potential
            enemyDodge = Math.min(enemyDodge + dodgeIncrease, 1); // Ensure it doesn't exceed 1
            logFight(`<span style='color: #daa520;'>Saitama does Side Hops! His dodge rate increases by ${formatNumber(dodgeIncrease*100)}%.</span>`);
        } else if (rand < 40) { // 10% chance for Cracks Knuckles
            const critIncrease = 0.015 * (1 - enemyCritChance); // Diminishing crti chance increase based on remaining potential
            enemyCritChance = Math.min(enemyCritChance + critIncrease, 1); // Ensure it doesn't exceed 1
            logFight(`<span style='color: #cd853f;'>Saitama cracks his knuckles! His critical chance increases by ${formatNumber(critIncrease * 100)}%.</span>`);
        } else if (rand < 50) { // 10% chance for Squats
            enemyDefense += 1e16; // Increases defense by 9 Qa
            logFight(`<span style='color: #b22222;'>Saitama does Squats! His defense increases by 10 quadrillion.</span>`);
        } else if (rand < 60) { // 10% chance for Sit Ups
            const absorbIncrease = 0.0275 * (1 - enemyAbsorb); // Diminishing absorb increase based on remaining potential
            enemyAbsorb = Math.min(enemyAbsorb + absorbIncrease, 0.9999); // Ensure it doesn't exceed 1
            if (enemyAbsorb > 0.9){
                unlockAchievement('More than Sauron');
            }
            logFight(`<span style='color: #ff6347;'>Saitama does Sit Ups! His damage absorption increases by ${formatNumber(absorbIncrease * 100)}%.</span>`);
        } else if (rand < 70) { // 10% chance for Breathes on You
            if (isCritical) { // Critical hit scenario
                damage = Math.ceil(baseDamage * enemyCritDamage) - playerDefense;
                logFight(`<span style='color: orange;'>Saitama breathes on you and lands a critical hit for ${formatNumber(Math.max(damage, 0))} damage!</span>`);
            } else { // Normal damage
                damage = baseDamage - playerDefense;
                logFight(`<span style='color: #ff7f50;'>Saitama breathes on you, dealing normal damage (${formatNumber(Math.max(damage, 0))}).</span>`);
            }
        } else if (rand < 80) { // 10% chance for Menacing Look
            playerCurrentAttackSpeed = playerCurrentAttackSpeed * 0.995;
            logFight(`<span style='color: #ff4500;'>Saitama gives a menacing look! Your attack speed decreases by 0.5%.</span>`);
            // Clear the previous enemy attack interval and set a new one
            clearAttackIntervals();
            setTimeout(() => {
                fightLoop(resolve);
            }, 100);
        } else if (rand < 90) { // 10% chance for Flicks Your Ear
            if (isCritical) { // Critical hit scenario
                playerCritChance = Math.max(playerCritChance * 0.98, 0); // Reduce crit chance by 2%
                playerCritDamage = Math.max(playerCritDamage * 0.98, 0); // Reduce crit chance by 2%
                logFight(`<span style='color: orange;'>Saitama flicks your ear and lowers your crit chance and crit damage by 2%!</span>`);
            } else { // Normal hit, lowers crit chance by 1%
                playerCritChance = Math.max(playerCritChance * 0.99, 0); // Reduce crit chance by 1%
                playerCritDamage = Math.max(playerCritDamage * 0.99, 0); // Reduce crit chance by 1%
                logFight(`<span style='color: #ff8c00;'>Saitama flicks your ear and lowers your crit chance and crit damage by 1%!</span>`);
            }
        } else { // 10% chance for Says Something Stupid
            playerStunChance = playerStunChance * 0.98;
            logFight(`<span style='color: #ffa07a;'>Saitama says something stupid! Your stun chance decreases by 2%.</span>`);
        }

        updateStatsUI();
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
    if (damage > 0) {
        dmgColor = isCritical ? 'orange' : 'white';
        showFloatingDamage(damage, true, dmgColor);
    }

    if(damage > 0 && isCritical && currEnemyName === "Sauron" && playerHealth > 0) {
        unlockAchievement('Tank the Crit');
    }

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
            if (gravityWellQueue.length > 0) {
                const restoredDamage = gravityWellQueue.shift(); // Remove the first value from the queue
                enemyMinDamage = enemyMinDamage + restoredDamage;
                document.getElementById('enemyDamageStat').innerText = `${formatNumber(enemyMinDamage)} - ${formatNumber(enemyMaxDamage)}`;
                logFight(`<span style='color: #ECFFDC;'>The gravity well has dissipated, and ${currEnemyName}'s power returns!</span>`);
            }
        }
    }

    if (currEnemyName === 'Serious Saitama'){
        enemyMaxDamage *= 1.0028;
        document.getElementById('enemyDamageStat').innerText = `${formatNumber(enemyMinDamage)} - ${formatNumber(enemyMaxDamage)}`;
        logFight(`<span style='color: #b3a125; '>Saitama gets slightly more serious!</span>`);
    }

    // Handle Stun mechanics
    if (damage > 0 && Math.random() < enemyStunChance) {
        playerStunCount++;
        logFight(`<span style='color: #8B008B;'>${currEnemyName} stuns you! (${playerStunCount} turn(s) stunned)</span>`);
    }

    if (damage > 0 && astralEdgeSkill){
        astralEdgeMult = Math.max(1 + (((playerMaxHealth - playerHealth) / playerMaxHealth) / 2), 1);
        playerMaxDamage = Math.ceil(playerBaseMaxDamage * astralEdgeMult);
        document.getElementById('playerDamageStat').innerText = `${formatNumber(playerMinDamage)} - ${formatNumber(playerMaxDamage)}`;
    }

    // Update health bars
    updateHealthBars();
}

// Function to show floating damage numbers with customizable color
function showFloatingDamage(damage, isPlayer, color = 'red') {
    try {
        // Determine the image container
        const imageContainer = isPlayer ? document.getElementById('playerImageContainer') : document.getElementById('enemyImageContainer');

        // Check if the container exists
        if (!imageContainer) {
            console.error("Image container not found!");
            return;
        }

        // Create the damage number element
        const damageElement = document.createElement('div');
        damageElement.classList.add('floating-damage');
        damageElement.innerText = `-${formatNumber(damage)}`;
        damageElement.style.color = color; // Set the custom color

        // Generate random position within the center of the image
        const randomX = Math.random() * 58 + 2; // 2% to 60% horizontally
        const randomY = Math.random() * 68 + 2; // 2% to 70% vertically
        damageElement.style.left = `${randomX}%`;
        damageElement.style.top = `${randomY}%`;

        // Append the damage number to the image container
        imageContainer.appendChild(damageElement);

        // Start the animation
        setTimeout(() => {
            damageElement.style.transform = 'translateY(-20px)';
            damageElement.style.opacity = '0';
        }, 10);

        // Remove the damage number from the DOM after the animation
        setTimeout(() => {
            if (imageContainer.contains(damageElement)) {
                imageContainer.removeChild(damageElement);
            }
        }, 1000); // 1 second
    } catch (error) {
        console.error("Error in showFloatingDamage:", error);
    }
}





let userScrolledRecently = false;
let isProgrammaticScroll = false;
let scrollTimeout = null;
let scrollPending = false;
let logBatch = [];
const DEBOUNCE_DELAY = 100; // 100 ms delay for batching


const fightLog = document.getElementById('fightLog');

// Event listener to detect user scroll activity
document.getElementById('fightLog').addEventListener('scroll', () => {
    if (isProgrammaticScroll) {
        isProgrammaticScroll = false; // Reset the flag after a programmatic scroll

    } else if (fightLog.scrollHeight - fightLog.scrollTop - fightLog.clientHeight < 1) {
        clearTimeout(scrollTimeout);
        userScrolledRecently = false;

    } else {
        // Clear any existing timeout
        clearTimeout(scrollTimeout);

        if (!fightEnded && !userScrolledRecently) {
            showPopupTooltip('Fight Log scroll temporarily paused', 'gray', 0.5);
            numFightLogScrolls++;
            localStorage.setItem('numFightLogScrolls', numFightLogScrolls);
            if (numFightLogScrolls >= 50) {
                unlockAchievement('Battle Analyst');
            }
        }

        userScrolledRecently = true;

        // Reset the timer for 5 seconds
        scrollTimeout = setTimeout(() => {
            userScrolledRecently = false;
        }, 5000); // 5 seconds
    }
});

// Function to log fight actions (with batching)
function logFight(message) {
    if (fightEnded) return; // Do not log any more messages if the fight has ended


    // Batch messages instead of directly updating the DOM
    logBatch.push(message);

    // Debounce the scroll update
    if (!scrollPending) {
        scrollPending = true;
        setTimeout(() => {
            const frag = document.createDocumentFragment();
            // Update the DOM with batched messages
            frag.append(...logBatch.map((message) => {
                const p = document.createElement('p');
                p.innerHTML = message;
                return p;
            }));
            fightLog.append(frag);
            logBatch = []; // Clear the batch

            // Scroll to bottom if the user hasn't scrolled manually in the last 5 seconds
            if (!userScrolledRecently) {
                isProgrammaticScroll = true; // Set flag before programmatic scroll
                fightLog.scrollTop = fightLog.scrollHeight;
            }

            scrollPending = false;
        }, DEBOUNCE_DELAY);
    }
}

// Function to handle the end of the fight
function endFight(isForfeit = false) {
    clearAttackIntervals(); // Ensure the intervals are stopped

    // Disable the forfeit button
    const forfeitButton = document.getElementById('forfeitButton');
    if (forfeitButton) {
        forfeitButton.disabled = true;
        forfeitButton.style.display = 'none';
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
        Events.addListener(exitButton, 'click', () => {
            fightingOverlay.style.display = 'none';
            fightingOverlay.removeChild(exitButton); // Remove the Exit button
            document.removeEventListener('click', handleClickAnywhereOutsideFightLog); // Remove the listener
        });
    }

    // Define the function to handle clicks outside the fight log
    function handleClickAnywhereOutsideFightLog(event) {
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
        if(currEnemyName === 'Training Dummy' && power > 1000){
            unlockAchievement('Skip Leg Day');
        }
        overlayWinnerLoserText("Loser", "Taunting");
    } else if (playerHealth > 0) {
        logFight("<span style='color: green;'>You Win!</span>");
        overlayWinnerLoserText("Winner", "Dead");

        if (currEnemyName === 'Your Ego') {
            unlockAchievement('Ego Death');
        }

        incrementStellarHarvest();

    } else {
        logFight(`<span style='color: red;'>${currEnemyName} defeated you!</span>`);
        overlayWinnerLoserText("Loser", "Taunting");

        if (currEnemyName === 'Your Ego') {
            yourEgoWins += 1;
            if(yourEgoWins >= 50) {
                unlockAchievement('Check Your Ego');
            }
        }

    }

    fightEnded = true; // Set the flag to true when the fight ends
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
        if (currEnemyName === "Serious Saitama") {
            enemyResultText.innerText = 'Defeated';
        } else {
            enemyResultText.innerText = 'Dead';
        }
        enemyResultText.classList.add('result-text', 'dead-text');
    }
    enemyImageContainer.appendChild(enemyResultText);
}
