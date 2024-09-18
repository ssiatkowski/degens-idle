const achievements = [
    {
        name: 'First',
        isUnlocked: false,
        hoverText: 'click achievements button',
        img: 'imgs/achievements/number_1.jpg',
    },
    {
        name: 'Settings',
        isUnlocked: false,
        hoverText: 'click settings button',
        img: 'imgs/achievements/settings.jpg',
    },
    {
        name: 'Hall of Knowledge',
        isUnlocked: false,
        hoverText: 'try to learn something',
        img: 'imgs/achievements/hall_of_knowledge.jpg',
    },
    {
        name: 'How to Play',
        isUnlocked: false,
        hoverText: 'review the game manual',
        img: 'imgs/achievements/game_manual.jpg',
    },
    {
        name: 'Grasshopper',
        isUnlocked: false,
        hoverText: 'buy some upgrades',
        img: 'imgs/achievements/grasshopper.jpg',
    },
    {
        name: 'First Prestige',
        isUnlocked: false,
        hoverText: 'click some button',
        img: 'imgs/achievements/first_prestige.jpg',
    },
    {
        name: 'Click the Clicker',
        isUnlocked: false,
        hoverText: 'you can click on purchased upgrades',
        img: 'imgs/achievements/click_the_clicker.jpg',
    },
    {
        name: 'Cookie Clicker',
        isUnlocked: false,
        hoverText: 'some upgrades unlock new mechanics',
        img: 'imgs/achievements/cookie_clicker.jpg',
    },
    {
        name: 'First Ascension',
        isUnlocked: false,
        hoverText: 'become a low level god',
        img: 'imgs/achievements/ascension.jpg',
    },
    {
        name: 'Stay Ugly',
        isUnlocked: false,
        hoverText: 'excuse me?',
        img: 'imgs/achievements/stay_ugly.jpg',
    },
    {
        name: 'Big Brain Move',
        isUnlocked: false,
        hoverText: 'pay attention to upgrade resources',
        img: 'imgs/achievements/brain.jpg',
    },
    {
        name: 'Clarity',
        isUnlocked: false,
        hoverText: 'reach -1T delusion',
        img: 'imgs/achievements/clarity.jpg',
    },
    {
        name: 'Now we are Progressing',
        isUnlocked: false,
        hoverText: 'why only ascend one upgrade at a time?',
        img: 'imgs/achievements/double_ascension.jpg',
    },
    {
        name: 'Get Rick Rolled',
        isUnlocked: false,
        hoverText: 'try to finish the game way too early',
        img: 'imgs/achievements/rick_roll.jpg',
    },
    {
        name: 'Speed Demon',
        isUnlocked: false,
        hoverText: 'score over 3 points per second in speed game',
        img: 'imgs/achievements/speed_demon.jpg',
    },
    {
        name: 'Memory Master',
        isUnlocked: false,
        hoverText: 'win a memory game with 6x6 grid and sequence of 6',
        img: 'imgs/achievements/memory_master.jpg',
    },
    {
        name: 'Math Genius',
        isUnlocked: false,
        hoverText: 'win math game with target over 78',
        img: 'imgs/achievements/math_genius.jpg',
    },
    {
        name: 'Pure Luck',
        isUnlocked: false,
        hoverText: 'get over 123% return from lucky box',
        img: 'imgs/achievements/pure_luck.jpg',
    },
    {
        name: 'Admire The Acronym',
        isUnlocked: false,
        hoverText: 'understand the meaning of this game',
        img: 'imgs/achievements/admiring.jpg',
    },
    {
        name: 'Build a Base',
        isUnlocked: false,
        hoverText: 'do what it says',
        img: 'imgs/achievements/build_a_base.jpg',
    },
    {
        name: 'Power Unlocked',
        isUnlocked: false,
        hoverText: 'unlock the 7th resource',
        img: 'imgs/achievements/power_unlocked.jpg',
    },
    {
        name: 'Fifth',
        isUnlocked: false,
        hoverText: 'keep clicking achievements button',
        img: 'imgs/achievements/number_5.jpg',
    },
    {
        name: 'Burn the World',
        isUnlocked: false,
        hoverText: 'past the point of no return',
        img: 'imgs/achievements/mosquitos.jpg',
    },
    {
        name: 'Fatigued Finger',
        isUnlocked: false,
        hoverText: '500 clicks on cookie',
        img: 'imgs/achievements/fatigued_finger.jpg',
    },
    {
        name: 'All In',
        isUnlocked: false,
        hoverText: 'this achievement is related to the trade function',
        img: 'imgs/achievements/all_in.jpg',
    },
    {
        name: 'Degens Idle Purist',
        isUnlocked: false,
        hoverText: 'one game at a time',
        img: 'imgs/achievements/degens_idle_purist.jpg',
    },
    {
        name: 'Big Crunch',
        isUnlocked: false,
        hoverText: 'just another prestige layer',
        img: 'imgs/achievements/big_crunch.jpg',
    },
    {
        name: 'Do-Over',
        isUnlocked: false,
        hoverText: 'if only there was a way to undo mistakes',
        img: 'imgs/achievements/do_over.jpg',
    },
    {
        name: 'Buy the Map',
        isUnlocked: false,
        hoverText: 'maybe pay some knowledge for it',
        img: 'imgs/achievements/map_to_power.jpg',
    },
    {
        name: 'Better Safe Than Sorry',
        isUnlocked: false,
        hoverText: 'do not lose your progress',
        img: 'imgs/achievements/better_safe_than_sorry.jpg',
    },
    {
        name: 'Transcend',
        isUnlocked: false,
        hoverText: 'become a god in a parallel universe',
        img: 'imgs/achievements/transcendence.jpg',
    },
    {
        name: 'Is This Your Lucky Box?',
        isUnlocked: false,
        hoverText: '10th time is the charm',
        img: 'imgs/achievements/lucky_box.jpg',
    },
    {
        name: 'Why Discriminate Dots?',
        isUnlocked: false,
        hoverText: 'win a speed game while ignoring a dot',
        img: 'imgs/achievements/discriminate_dots.jpg',
    },
    {
        name: 'Slow and Steady',
        isUnlocked: false,
        hoverText: 'stop and smell the roses - slow down your transcends',
        img: 'imgs/achievements/single_transcend.jpg',
    },
    {
        name: 'No Means No',
        isUnlocked: false,
        hoverText: 'only copium please',
        img: 'imgs/achievements/forced_trade.jpg',
    },
    {
        name: 'Max Automation',
        isUnlocked: false,
        hoverText: 'turn up your automation setting',
        img: 'imgs/achievements/max_automation.jpg',
    },
    {
        name: 'Over 9000',
        isUnlocked: false,
        hoverText: 'prestige for over 9000 mult',
        img: 'imgs/achievements/over_9000.jpg',
    },
    {
        name: 'Discord',
        isUnlocked: false,
        hoverText: 'join the Discord',
        img: 'imgs/achievements/discord.jpg',
    },
    {
        name: 'Precision Buying',
        isUnlocked: false,
        hoverText: 'let me do this myself',
        img: 'imgs/achievements/precision_buying.jpg',
    },
    {
        name: 'Begin Training',
        isUnlocked: false,
        hoverText: 'use that power for something',
        img: 'imgs/achievements/begin_training.jpg',
    },
    {
        name: 'Get Up and Try Again',
        isUnlocked: false,
        hoverText: 'you win some, you lose some',
        img: 'imgs/achievements/get_up_and_try_again.jpg',
    },
    {
        name: 'Mortal Kombat',
        isUnlocked: false,
        hoverText: 'I only know Scorpion',
        img: 'imgs/achievements/mortal_kombat.jpg',
    },
    {
        name: 'Enter Hall of Power',
        isUnlocked: false,
        hoverText: 'so there is more than one Hall',
        img: 'imgs/achievements/hall_of_power.jpg',
    },
    {
        name: 'Skip Leg Day',
        isUnlocked: false,
        hoverText: 'spare the training dummy',
        img: 'imgs/achievements/skip_leg_day.jpg',
    },
    {
        name: 'Going in Blind',
        isUnlocked: false,
        hoverText: 'get far without knowing how to play?',
        img: 'imgs/achievements/going_in_blind.jpg',
    },
    {
        name: 'Remember Trading?',
        isUnlocked: false,
        hoverText: 'you can buy hopium with copium',
        img: 'imgs/achievements/trading.jpg',
    },
    {
        name: 'Correcting Mistakes',
        isUnlocked: false,
        hoverText: 'win speed game with at least 7 misclicks',
        img: 'imgs/achievements/correcting_mistakes.jpg',
    },
    {
        name: 'Take Out a Loan',
        isUnlocked: false,
        hoverText: 'spend money before you get it',
        img: 'imgs/achievements/take_out_a_loan.jpg',
    },
    {
        name: 'Reject Rejection',
        isUnlocked: false,
        hoverText: '1 for 1 on job hunt',
        img: 'imgs/achievements/reject_rejection.jpg',
    },
    {
        name: 'How did you know you could enter?',
        isUnlocked: false,
        hoverText: 'enter Hall of Power without knowing how much power is needed',
        img: 'imgs/achievements/hall_of_power_without_vegeta.jpg',
    },
    {
        name: 'Chuck Norris Kidney',
        isUnlocked: false,
        hoverText: 'Find a way to distract Chuck Norris',
        img: 'imgs/achievements/chuck_norris_kidney.jpg',
    },
    {
        name: 'Skipping Grades',
        isUnlocked: false,
        hoverText: 'enter Hall of Knowledge in less than 10 seconds',
        img: 'imgs/achievements/skipping_grades.jpg',
    },
    {
        name: 'Eager to Train',
        isUnlocked: false,
        hoverText: 'defeat Training Dummy in less than 15 seconds',
        img: 'imgs/achievements/training_hard.jpg',
    },
    {
        name: 'Eager to Love',
        isUnlocked: false,
        hoverText: 'enter Hall of Love in less than 3 seconds',
        img: 'imgs/achievements/eager_to_love.jpg',
    },
    {
        name: 'Nebula Overdrive',
        isUnlocked: false,
        hoverText: 'why spend power?',
        img: 'imgs/achievements/nebula_overdrive.jpg',
    },
    {
        name: 'Outsmart Vegeta SS God',
        isUnlocked: false,
        hoverText: 'pay attention to fight log',
        img: 'imgs/achievements/ss_smart_1.jpg',
    },
    {
        name: 'Outsmart Vegeta SS Eternal',
        isUnlocked: false,
        hoverText: 'pay attention to fight log',
        img: 'imgs/achievements/ss_smart_2.jpg',
    },
    {
        name: 'Raw Power',
        isUnlocked: false,
        hoverText: 'who needs smarts, when you have power',
        img: 'imgs/achievements/vegeta_power.jpg',
    },
    {
        name: 'That is some Bad Luck',
        isUnlocked: false,
        hoverText: 'keep playing Luck Game until it happens',
        img: 'imgs/achievements/very_unlucky.jpg',
    },
    {
        name: 'Stellar Harvester',
        isUnlocked: false,
        hoverText: 'get stellar harvest multiplier over 50x',
        img: 'imgs/achievements/stellar_harvester.jpg',
    },
    {
        name: 'Condensed Crunch',
        isUnlocked: false,
        hoverText: 'you may need this to take her down',
        img: 'imgs/achievements/condensed_crunch.jpg',
    },
    {
        name: 'Wrong Sidekick',
        isUnlocked: false,
        hoverText: `oh no, what have you done?`,
        img: 'imgs/achievements/wrong_sidekick.jpg',
    },
    {
        name: 'Sidekick',
        isUnlocked: false,
        hoverText: `don't fight alone`,
        img: 'imgs/achievements/sidekick.jpg',
    },
    {
        name: 'Overkill Much?',
        isUnlocked: false,
        hoverText: 'send him flying out of the matrix',
        img: 'imgs/achievements/out_of_the_matrix.jpg',
    },
    {
        name: 'Save the Multiverse',
        isUnlocked: false,
        hoverText: 'someone wants to destroy the multiverse - STOP THEM!',
        img: 'imgs/achievements/save_the_multiverse.jpg',
    },
    {
        name: 'Delusion Causes Forgetfulness',
        isUnlocked: false,
        hoverText: 'forget to get "it" enough times',
        img: 'imgs/achievements/forgetfulness.jpg',
    },
    {
        name: 'Make Kuzzi Love You',
        isUnlocked: false,
        hoverText: 'fill out the game feedback form with lots of details',
        img: 'imgs/achievements/feedback.jpg',
    },
    {
        name: 'Take a Break',
        isUnlocked: false,
        hoverText: 'collect 24hr+ offline gains',
        img: 'imgs/achievements/offline_gains.jpg',
    },
    {
        name: 'When Math Maths',
        isUnlocked: false,
        hoverText: 'win math game using at least 5 portals',
        img: 'imgs/achievements/when_math_maths.jpg',
    },
    {
        name: 'Pathological Speedster',
        isUnlocked: false,
        hoverText: 'tap 1500 times in winning speed games',
        img: 'imgs/achievements/pathological_speedster.jpg',
    },
    {
        name: 'Pattern Prodigy',
        isUnlocked: false,
        hoverText: 'memorize 500 dots in winning games',
        img: 'imgs/achievements/pattern_prodigy.jpg',
    },
    {
        name: 'Pie Guy',
        isUnlocked: false,
        hoverText: `solve &pi;&times;100 math problems`,
        img: 'imgs/achievements/pie_guy.jpg',
    },
    {
        name: 'Consolation Prize',
        isUnlocked: false,
        hoverText: `open 100 unlucky boxes`,
        img: 'imgs/achievements/consolation_prize.jpg',
    },
    {
        name: 'Dirty Trick',
        isUnlocked: false,
        hoverText: 'stun Saitama for 200 turns',
        img: 'imgs/achievements/trojan_horse.jpg',
    },
    {
        name: 'Hang Up Boxing Gloves',
        isUnlocked: false,
        hoverText: 'win the final battle',
        img: 'imgs/achievements/hanging_gloves.jpg',
    },
    {
        name: 'Cosmic Drought',
        isUnlocked: false,
        hoverText: 'buy a certain upgrade',
        img: 'imgs/achievements/cosmic_drought.jpg',
    },
    {
        name: 'Guaranteed-ish',
        isUnlocked: false,
        hoverText: 'reach max crit chance',
        img: 'imgs/achievements/guaranteed_ish.jpg',
    },
    {
        name: 'Serenity',
        isUnlocked: false,
        hoverText: 'discover the 8th resource',
        img: 'imgs/achievements/serenity.jpg',
    },
    {
        name: 'Love Shop',
        isUnlocked: false,
        hoverText: 'unlock the Hall of Love',
        img: 'imgs/achievements/love_shop.jpg',
    },
    {
        name: 'Focus Your Mind',
        isUnlocked: false,
        hoverText: 'succeed your first meditation',
        img: 'imgs/achievements/yin_yang.jpg',
    },
    {
        name: 'Does Not Exist 78',
        isUnlocked: false,
        hoverText: 'Does not exist yet',
        img: 'imgs/achievements/uninitialized.jpg',
    },
    {
        name: 'Infinite Embrace',
        isUnlocked: false,
        hoverText: 'perform your first infinite embrace',
        img: 'imgs/achievements/infinite_embrace.jpg',
    },
    {
        name: 'Does Not Exist 80',
        isUnlocked: false,
        hoverText: 'Does not exist yet',
        img: 'imgs/achievements/uninitialized.jpg',
    },
    {
        name: 'Gentle Embrace',
        isUnlocked: false,
        hoverText: 'infinite embrace for < 3.3 base LP',
        img: 'imgs/achievements/mini_embrace.jpg',
    },
    {
        name: 'Massive Embrace',
        isUnlocked: false,
        hoverText: 'infinite embrace for > 25 LP',
        img: 'imgs/achievements/massive_embrace.jpg',
    },
    {
        name: 'Does Not Exist 83',
        isUnlocked: false,
        hoverText: 'Does not exist yet',
        img: 'imgs/achievements/uninitialized.jpg',
    },
    {
        name: 'Does Not Exist 84',
        isUnlocked: false,
        hoverText: 'Does not exist yet',
        img: 'imgs/achievements/uninitialized.jpg',
    },
    {
        name: 'Developer Options',
        isUnlocked: false,
        hoverText: '1←2←1→1←1→ 2→2←1←2→1→',
        img: 'imgs/achievements/developer_options.jpg',
    },
    {
        name: 'Zero-Sum Game',
        isUnlocked: false,
        hoverText: 'give hope / take hope',
        img: 'imgs/achievements/zero_sum_game.jpg',
    },
    {
        name: 'One Hit KO',
        isUnlocked: false,
        hoverText: 'one punch the man',
        img: 'imgs/achievements/one_punch_the_man.jpg',
    },
    {
        name: 'More than Sauron',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/damage_absorption.jpg',
    },
    {
        name: 'The Tiniest Crunch',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/tiniest_crunch.jpg',
    },
    {
        name: '42 Misclicks',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/misfire.jpg',
    },
    {
        name: 'Rasta Deadpool',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/rasta_deadpool.jpg',
    },
    {
        name: 'Fast Commuter',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/fast_commuter.jpg',
    },
    {
        name: 'PigeonPost',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/pigeonpost.jpg',
    },
    {
        name: 'Does Not Exist 97',
        isUnlocked: false,
        hoverText: 'Does not exist yet',
        img: 'imgs/achievements/uninitialized.jpg',
    },
    {
        name: 'Fidget Clicks',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/fidget_clicks.jpg',
    },
    {
        name: 'The Great American Cookout',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/great_american_cookout.jpg',
    },
    {
        name: 'Does Not Exist 100',
        isUnlocked: false,
        hoverText: 'Does not exist yet',
        img: 'imgs/achievements/uninitialized.jpg',
    },
];

const achievementsMap = new Map();

achievements.forEach(achievement => {
    achievementsMap.set(achievement.name, achievement);
});

// Function to render achievements grid
function renderAchievements() {
    const container = document.getElementById('achievements-grid');
    container.innerHTML = ''; // Clear any existing content

    // Dynamically calculate the number of columns based on screen width
    const columns = window.innerWidth <= 768 ? 4 : 10; // 4 columns for mobile, 10 for desktop

    // Convert achievementsMap to an array if it's a Map
    const achievementsArray = Array.from(achievementsMap.values()); // Ensure map values are treated as an array

    achievementsArray.forEach((achievement, index) => {
        const achievementElement = document.createElement('div');
        achievementElement.className = 'achievement';
        if (achievement.isUnlocked) {
            achievementElement.classList.add('unlocked');
        }

        const img = document.createElement('img');
        img.src = achievement.img;

        const hoverText = document.createElement('div');
        hoverText.className = 'hover-text';
        hoverText.innerHTML = `<strong>${achievement.name}</strong><br>Tip: ${achievement.hoverText}`;

        achievementElement.appendChild(img);
        achievementElement.appendChild(hoverText);
        container.appendChild(achievementElement);

        // Get the column position based on index and number of columns
        const columnPosition = (index % columns) + 1; // 1-based column position

        // Reset hoverText to default centered position for all
        hoverText.style.left = '50%';
        hoverText.style.right = 'auto';
        hoverText.style.transform = 'translateX(-50%)'; // Center by default

        // If in the leftmost column, move hover text right by 10px
        if (columnPosition === 1) {
            hoverText.style.left = '0px';
            hoverText.style.transform = 'none'; // Remove centering for left column
        }

        // If in the rightmost column, move hover text left by 10px
        if (columnPosition === columns) {
            hoverText.style.left = 'auto'; // Remove left positioning
            hoverText.style.right = '0px'; // Add right position
            hoverText.style.transform = 'none'; // Remove centering for right column
        }
    });

    updateAchievementsInfo();
}


let numAchievementsOpens = 0;
// Function to show the achievements overlay
function showAchievementsOverlay() {
    const overlay = document.getElementById('achievementsOverlay');
    overlay.style.display = 'flex'; // Show the overlay and center it
    unlockAchievement('First');
    numAchievementsOpens++;
    if (numAchievementsOpens==5){
        unlockAchievement('Fifth');
    }
    renderAchievements(); // Render the achievements grid inside the overlay
}

// Function to update the achievements info
function updateAchievementsInfo() {
    let totalCount = 0;

    achievementsMap.forEach(achievement => {
        if (!achievement.name.startsWith("Does Not Exist")) {
            totalCount++;
        }
    });

    const infoElement = document.getElementById('achievements-info');
    infoElement.textContent = `Achievements Unlocked: ${numUnlockedAchievements}/${totalCount} | Multiplier: ${achievementMultiplier.toFixed(2)}x (to ALL RESOURCES)`;
}

function calculateAchievementMultiplier() {
    numUnlockedAchievements = Array.from(achievementsMap.values()).filter(ach => ach.isUnlocked).length; // Recalculate the number of unlocked achievements
    
    if (achievementHyperchargeSkill) {
        achievementMultiplier = (1 + achievementBoostValue) ** numUnlockedAchievements;
    } else {
        achievementMultiplier = 1 + (achievementBoostValue * numUnlockedAchievements);
    }
}
// Function to unlock an achievement
function unlockAchievement(name, duringLoad = false) {
    const achievement = achievementsMap.get(name); // Access the achievement directly from the map
    if (achievement && !achievement.isUnlocked) {
        achievement.isUnlocked = true;

        calculateAchievementMultiplier()

        if (!duringLoad) {
            saveGameState();
            updateMultipliersDisplay();
            updateEffectiveMultipliers();
            showPopupTooltip(`Unlocked Achievement: ${name}`, color='#1B4D3E', durationSeconds=5);
        }
    }
}

function closeAchievementsOverlay() {
    const overlay = document.getElementById('achievementsOverlay');
    overlay.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    // Event listener to open the achievements overlay when the button is clicked
    document.getElementById('achievementsButton').addEventListener('click', showAchievementsOverlay);

    // Event listener for close buttons
    document.getElementById('closeAchievementsOverlay').addEventListener('click', closeAchievementsOverlay);
    document.getElementById('closeAchievementsButton').addEventListener('click', closeAchievementsOverlay);

    // Event listener to close overlay when clicking outside the modal content
    document.getElementById('achievementsOverlay').addEventListener('click', (event) => {
        if (event.target === document.getElementById('achievementsOverlay')) {
            closeAchievementsOverlay();
        }
    });

    // Optional: Render achievements immediately if needed
    // renderAchievements();
});
