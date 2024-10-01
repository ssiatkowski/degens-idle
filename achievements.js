const achievements = [
    {
        name: 'First',
        isUnlocked: false,
        hoverText: 'click achievements button',
        img: 'imgs/achievements/number_1.jpg',
        type: 'freebie',
    },
    {
        name: 'Settings',
        isUnlocked: false,
        hoverText: 'click settings button',
        img: 'imgs/achievements/settings.jpg',
        type: 'freebie',
    },
    {
        name: 'Hall of Knowledge',
        isUnlocked: false,
        hoverText: 'try to learn something',
        img: 'imgs/achievements/hall_of_knowledge.jpg',
        type: 'freebie',
    },
    {
        name: 'How to Play',
        isUnlocked: false,
        hoverText: 'review the game manual',
        img: 'imgs/achievements/game_manual.jpg',
        type: 'freebie',
    },
    {
        name: 'Grasshopper',
        isUnlocked: false,
        hoverText: 'buy some upgrades',
        img: 'imgs/achievements/grasshopper.jpg',
        type: 'progression',
    },
    {
        name: 'Collect Clicks',
        isUnlocked: false,
        hoverText: 'click each collect button 10 times',
        img: 'imgs/achievements/collect_clicks.jpg',
        type: 'freebie',
    },
    {
        name: 'First Prestige',
        isUnlocked: false,
        hoverText: 'click some button',
        img: 'imgs/achievements/first_prestige.jpg',
        type: 'progression',
    },
    {
        name: 'Click the Clicker',
        isUnlocked: false,
        hoverText: 'you can click on purchased upgrades',
        img: 'imgs/achievements/click_the_clicker.jpg',
        type: 'puzzle',
    },
    {
        name: 'Cookie Clicker',
        isUnlocked: false,
        hoverText: 'some upgrades unlock new mechanics',
        img: 'imgs/achievements/cookie_clicker.jpg',
        type: 'progression',
    },
    {
        name: 'First Ascension',
        isUnlocked: false,
        hoverText: 'become a low level god',
        img: 'imgs/achievements/ascension.jpg',
        type: 'progression',
    },
    {
        name: 'Trade Resources',
        isUnlocked: false,
        hoverText: 'trade any resources',
        img: 'imgs/achievements/trade_resources.jpg',
        type: 'freebie',
    },
    {
        name: 'Stay Ugly',
        isUnlocked: false,
        hoverText: 'excuse me?',
        img: 'imgs/achievements/stay_ugly.jpg',
        type: 'puzzle',
    },
    {
        name: 'Big Brain Move',
        isUnlocked: false,
        hoverText: 'pay attention to upgrade resources',
        img: 'imgs/achievements/brain.jpg',
        type: 'puzzle',
    },
    {
        name: 'Clarity',
        isUnlocked: false,
        hoverText: 'reach -1T delusion',
        img: 'imgs/achievements/clarity.jpg',
        type: 'puzzle',
    },
    {
        name: 'Now we are Progressing',
        isUnlocked: false,
        hoverText: 'why only ascend one upgrade at a time?',
        img: 'imgs/achievements/double_ascension.jpg',
        type: 'progression',
    },
    {
        name: 'Get Rick Rolled',
        isUnlocked: false,
        hoverText: 'try to finish the game way too early',
        img: 'imgs/achievements/rick_roll.jpg',
        type: 'progression',
    },
    {
        name: 'Speed Demon',
        isUnlocked: false,
        hoverText: 'score over 3 points per second in speed game',
        img: 'imgs/achievements/speed_demon.jpg',
        type: 'skill',
    },
    {
        name: 'Memory Master',
        isUnlocked: false,
        hoverText: 'win a memory game with 6x6 grid and sequence of 6',
        img: 'imgs/achievements/memory_master.jpg',
        type: 'skill',
    },
    {
        name: 'Math Genius',
        isUnlocked: false,
        hoverText: 'win math game with target over 78',
        img: 'imgs/achievements/math_genius.jpg',
        type: 'skill',
    },
    {
        name: 'Pure Luck',
        isUnlocked: false,
        hoverText: 'get over 123% return from lucky box',
        img: 'imgs/achievements/pure_luck.jpg',
        type: 'skill',
    },
    {
        name: 'Admire The Acronym',
        isUnlocked: false,
        hoverText: 'understand the meaning of this game',
        img: 'imgs/achievements/admiring.jpg',
        type: 'puzzle',
    },
    {
        name: 'Build a Base',
        isUnlocked: false,
        hoverText: 'do what it says',
        img: 'imgs/achievements/build_a_base.jpg',
        type: 'progression',
    },
    {
        name: 'Power Unlocked',
        isUnlocked: false,
        hoverText: 'unlock the 7th resource',
        img: 'imgs/achievements/power_unlocked.jpg',
        type: 'progression',
    },
    {
        name: 'Fifth',
        isUnlocked: false,
        hoverText: 'keep clicking achievements button',
        img: 'imgs/achievements/number_5.jpg',
        type: 'puzzle',
    },
    {
        name: 'Burn the World',
        isUnlocked: false,
        hoverText: 'past the point of no return',
        img: 'imgs/achievements/mosquitos.jpg',
        type: 'progression',
    },
    {
        name: 'Fatigued Finger',
        isUnlocked: false,
        hoverText: '500 clicks on cookie',
        img: 'imgs/achievements/fatigued_finger.jpg',
        type: 'skill',
    },
    {
        name: 'All In',
        isUnlocked: false,
        hoverText: 'this achievement is related to the trade function',
        img: 'imgs/achievements/all_in.jpg',
        type: 'puzzle',
    },
    {
        name: 'Degens Idle Purist',
        isUnlocked: false,
        hoverText: 'one game at a time',
        img: 'imgs/achievements/degens_idle_purist.jpg',
        type: 'puzzle',
    },
    {
        name: 'Big Crunch',
        isUnlocked: false,
        hoverText: 'just another prestige layer',
        img: 'imgs/achievements/big_crunch.jpg',
        type: 'progression',
    },
    {
        name: 'Do-Over',
        isUnlocked: false,
        hoverText: 'if only there was a way to undo mistakes',
        img: 'imgs/achievements/do_over.jpg',
        type: 'puzzle',
    },
    {
        name: 'Buy the Map',
        isUnlocked: false,
        hoverText: 'maybe pay some knowledge for it',
        img: 'imgs/achievements/map_to_power.jpg',
        type: 'progression',
    },
    {
        name: 'Better Safe Than Sorry',
        isUnlocked: false,
        hoverText: 'do not lose your progress',
        img: 'imgs/achievements/better_safe_than_sorry.jpg',
        type: 'puzzle',
    },
    {
        name: 'Transcend',
        isUnlocked: false,
        hoverText: 'become a god in a parallel universe',
        img: 'imgs/achievements/transcendence.jpg',
        type: 'progression',
    },
    {
        name: 'Is This Your Lucky Box?',
        isUnlocked: false,
        hoverText: '10th time is the charm',
        img: 'imgs/achievements/lucky_box.jpg',
        type: 'puzzle',
    },
    {
        name: 'Why Discriminate Dots?',
        isUnlocked: false,
        hoverText: 'win a speed game while ignoring a dot',
        img: 'imgs/achievements/discriminate_dots.jpg',
        type: 'skill',
    },
    {
        name: 'Slow and Steady',
        isUnlocked: false,
        hoverText: 'stop and smell the roses - slow down your transcends',
        img: 'imgs/achievements/single_transcend.jpg',
        type: 'puzzle',
    },
    {
        name: 'No Means No',
        isUnlocked: false,
        hoverText: 'only copium please',
        img: 'imgs/achievements/forced_trade.jpg',
        type: 'puzzle',
    },
    {
        name: 'Feed the Cat',
        isUnlocked: false,
        hoverText: `i don't know. maybe try pancakes?`,
        img: 'imgs/achievements/fed_cat.jpg',
        type: 'puzzle',
    },
    {
        name: 'Tongue Twister',
        isUnlocked: false,
        hoverText: 'TT AT TA AA',
        img: 'imgs/achievements/tongue_twister.jpg',
        type: 'puzzle',
    },
    {
        name: 'Max Automation',
        isUnlocked: false,
        hoverText: 'turn up your automation setting',
        img: 'imgs/achievements/max_automation.jpg',
        type: 'puzzle',
    },
    {
        name: 'Over 9000',
        isUnlocked: false,
        hoverText: 'prestige for over 9000 mult',
        img: 'imgs/achievements/over_9000.jpg',
        type: 'puzzle',
    },
    {
        name: 'Discord',
        isUnlocked: false,
        hoverText: 'join the Discord',
        img: 'imgs/achievements/discord.jpg',
        type: 'freebie',
    },
    {
        name: 'Precision Buying',
        isUnlocked: false,
        hoverText: 'let me do this myself',
        img: 'imgs/achievements/precision_buying.jpg',
        type: 'puzzle',
    },
    {
        name: 'Begin Training',
        isUnlocked: false,
        hoverText: 'use that power for something',
        img: 'imgs/achievements/begin_training.jpg',
        type: 'progression',
    },
    {
        name: 'Get Up and Try Again',
        isUnlocked: false,
        hoverText: 'you win some, you lose some',
        img: 'imgs/achievements/get_up_and_try_again.jpg',
        type: 'puzzle',
    },
    {
        name: 'Mortal Kombat',
        isUnlocked: false,
        hoverText: 'I only know Scorpion',
        img: 'imgs/achievements/mortal_kombat.jpg',
        type: 'progression',
    },
    {
        name: 'Enter Hall of Power',
        isUnlocked: false,
        hoverText: 'so there is more than one Hall',
        img: 'imgs/achievements/hall_of_power.jpg',
        type: 'progression',
    },
    {
        name: 'Sheev vs Anakin',
        isUnlocked: false,
        hoverText: 'SPOILER ALERT',
        img: 'imgs/achievements/sidious_stun.jpg',
        type: 'puzzle',
    },
    {
        name: 'Avoid the Crit',
        isUnlocked: false,
        hoverText: 'defeat Sauron',
        img: 'imgs/achievements/avoid_the_crit.jpg',
        type: 'progression',
    },
    {
        name: 'Skip Leg Day',
        isUnlocked: false,
        hoverText: 'spare the training dummy',
        img: 'imgs/achievements/skip_leg_day.jpg',
        type: 'puzzle',
    },
    {
        name: 'Going in Blind',
        isUnlocked: false,
        hoverText: 'get far without knowing how to play?',
        img: 'imgs/achievements/going_in_blind.jpg',
        type: 'puzzle',
    },
    {
        name: 'Remember Trading?',
        isUnlocked: false,
        hoverText: 'you can buy hopium with copium',
        img: 'imgs/achievements/trading.jpg',
        type: 'puzzle',
    },
    {
        name: 'WHY IS HE ALIVE?',
        isUnlocked: false,
        hoverText: 'kill deadpool 69 times',
        img: 'imgs/achievements/cockroach_deadpool.jpg',
        type: 'progression',
    },
    {
        name: 'Correcting Mistakes',
        isUnlocked: false,
        hoverText: 'win speed game with at least 7 misclicks',
        img: 'imgs/achievements/correcting_mistakes.jpg',
        type: 'skill',
    },
    {
        name: 'Take Out a Loan',
        isUnlocked: false,
        hoverText: 'spend money before you get it',
        img: 'imgs/achievements/take_out_a_loan.jpg',
        type: 'puzzle',
    },
    {
        name: 'Reject Rejection',
        isUnlocked: false,
        hoverText: '1 for 1 on job hunt',
        img: 'imgs/achievements/reject_rejection.jpg',
        type: 'puzzle',
    },
    {
        name: 'How did you know you could enter?',
        isUnlocked: false,
        hoverText: 'enter Hall of Power without knowing how much power is needed',
        img: 'imgs/achievements/hall_of_power_without_vegeta.jpg',
        type: 'puzzle',
    },
    {
        name: 'Chuck Norris Kidney',
        isUnlocked: false,
        hoverText: 'Find a way to distract Chuck Norris',
        img: 'imgs/achievements/chuck_norris_kidney.jpg',
        type: 'puzzle',
    },
    {
        name: 'Skipping Grades',
        isUnlocked: false,
        hoverText: 'enter Hall of Knowledge in less than 10 seconds after Big Crunch',
        img: 'imgs/achievements/skipping_grades.jpg',
        type: 'skill',
    },
    {
        name: 'Eager to Train',
        isUnlocked: false,
        hoverText: 'defeat Training Dummy in less than 15 seconds after Big Crunch',
        img: 'imgs/achievements/training_hard.jpg',
        type: 'skill',
    },
    {
        name: 'Eager to Love',
        isUnlocked: false,
        hoverText: 'enter Hall of Love in less than 3 seconds after Big Crunch',
        img: 'imgs/achievements/eager_to_love.jpg',
        type: 'skill',
    },
    {
        name: 'Nebula Overdrive',
        isUnlocked: false,
        hoverText: 'why spend power?',
        img: 'imgs/achievements/nebula_overdrive.jpg',
        type: 'progression',
    },
    {
        name: 'Outsmart Vegeta SS God',
        isUnlocked: false,
        hoverText: 'pay attention to fight log',
        img: 'imgs/achievements/ss_smart_1.jpg',
        type: 'puzzle',
    },
    {
        name: 'Outsmart Vegeta SS Eternal',
        isUnlocked: false,
        hoverText: 'pay attention to fight log',
        img: 'imgs/achievements/ss_smart_2.jpg',
        type: 'puzzle',
    },
    {
        name: 'Raw Power',
        isUnlocked: false,
        hoverText: 'who needs smarts, when you have power',
        img: 'imgs/achievements/vegeta_power.jpg',
        type: 'puzzle',
    },
    {
        name: 'That is some Bad Luck',
        isUnlocked: false,
        hoverText: 'keep playing Luck Game until it happens',
        img: 'imgs/achievements/very_unlucky.jpg',
        type: 'skill',
    },
    {
        name: 'Stellar Harvester',
        isUnlocked: false,
        hoverText: 'get stellar harvest multiplier over 50x',
        img: 'imgs/achievements/stellar_harvester.jpg',
        type: 'puzzle',
    },
    {
        name: 'Condensed Crunch',
        isUnlocked: false,
        hoverText: 'you may need this to take her down',
        img: 'imgs/achievements/condensed_crunch.jpg',
        type: 'progression',
    },
    {
        name: 'Wrong Sidekick',
        isUnlocked: false,
        hoverText: `oh no, what have you done?`,
        img: 'imgs/achievements/wrong_sidekick.jpg',
        type: 'puzzle',
    },
    {
        name: 'Sidekick',
        isUnlocked: false,
        hoverText: `don't fight alone`,
        img: 'imgs/achievements/sidekick.jpg',
        type: 'puzzle',
    },
    {
        name: 'Overkill Much?',
        isUnlocked: false,
        hoverText: 'send him flying out of the matrix',
        img: 'imgs/achievements/out_of_the_matrix.jpg',
        type: 'puzzle',
    },
    {
        name: 'Fast Cruncher',
        isUnlocked: false,
        hoverText: 'perform two Big Crunches within 2 minutes',
        img: 'imgs/achievements/fast_cruncher.jpg',
        type: 'skill',
    },
    {
        name: 'Save the Multiverse',
        isUnlocked: false,
        hoverText: 'someone wants to destroy the multiverse - STOP THEM!',
        img: 'imgs/achievements/save_the_multiverse.jpg',
        type: 'progression',
    },
    {
        name: 'Delusion Causes Forgetfulness',
        isUnlocked: false,
        hoverText: 'forget to get "it" enough times',
        img: 'imgs/achievements/forgetfulness.jpg',
        type: 'puzzle',
    },
    {
        name: 'Make Kuzzi Love You',
        isUnlocked: false,
        hoverText: 'fill out the game feedback form with lots of details',
        img: 'imgs/achievements/feedback.jpg',
        type: 'freebie',
    },
    {
        name: 'Take a Break',
        isUnlocked: false,
        hoverText: 'collect 24hr+ offline gains',
        img: 'imgs/achievements/offline_gains.jpg',
        type: 'freebie',
    },
    {
        name: 'Long Term Memory',
        isUnlocked: false,
        hoverText: 'take over 3 minutes to win memory game with at least 6 dots',
        img: 'imgs/achievements/long_term_memory.jpg',
        type: 'skill',
    },
    {
        name: 'When Math Maths',
        isUnlocked: false,
        hoverText: 'win math game using at least 5 portals',
        img: 'imgs/achievements/when_math_maths.jpg',
        type: 'skill',
    },
    {
        name: 'Pathological Speedster',
        isUnlocked: false,
        hoverText: 'tap 1500 times in winning speed games',
        img: 'imgs/achievements/pathological_speedster.jpg',
        type: 'skill',
    },
    {
        name: 'Pattern Prodigy',
        isUnlocked: false,
        hoverText: 'memorize 500 dots in winning games',
        img: 'imgs/achievements/pattern_prodigy.jpg',
        type: 'skill',
    },
    {
        name: 'Pie Guy',
        isUnlocked: false,
        hoverText: `use &pi;&times;100 correct math portals`,
        img: 'imgs/achievements/pie_guy.jpg',
        type: 'skill',
    },
    {
        name: 'Consolation Prize',
        isUnlocked: false,
        hoverText: `open 100 unlucky boxes`,
        img: 'imgs/achievements/consolation_prize.jpg',
        type: 'skill',
    },
    {
        name: 'Dirty Trick',
        isUnlocked: false,
        hoverText: 'stun Saitama for 200 turns',
        img: 'imgs/achievements/trojan_horse.jpg',
        type: 'puzzle',
    },
    {
        name: 'Hang Up Boxing Gloves',
        isUnlocked: false,
        hoverText: 'win the final battle',
        img: 'imgs/achievements/hanging_gloves.jpg',
        type: 'progression',
    },
    {
        name: 'Cosmic Drought',
        isUnlocked: false,
        hoverText: 'buy a certain upgrade',
        img: 'imgs/achievements/cosmic_drought.jpg',
        type: 'progression',
    },
    {
        name: 'Tank the Crit',
        isUnlocked: false,
        hoverText: 'live to tell the tale of getting crit by Sauron',
        img: 'imgs/achievements/survive_crit.jpg',
        type: 'puzzle',
    },
    {
        name: 'Guaranteed-ish',
        isUnlocked: false,
        hoverText: 'reach max crit chance',
        img: 'imgs/achievements/guaranteed_ish.jpg',
        type: 'puzzle',
    },
    {
        name: `Can't Hold Me Back`,
        isUnlocked: false,
        hoverText: 'hit mini game soft cap 50 times',
        img: 'imgs/achievements/cant_hold_me_back.jpg',
        type: 'skill',
    },
    {
        name: 'Luck of the Irish',
        isUnlocked: false,
        hoverText: `open 777 lucky boxes`,
        img: 'imgs/achievements/luck_of_the_irish.jpg',
        type: 'skill',
    },
    {
        name: 'Serenity',
        isUnlocked: false,
        hoverText: 'discover the 8th resource',
        img: 'imgs/achievements/serenity.jpg',
        type: 'progression',
    },
    {
        name: 'Love Shop',
        isUnlocked: false,
        hoverText: 'unlock the Hall of Love',
        img: 'imgs/achievements/love_shop.jpg',
        type: 'progression',
    },
    {
        name: 'Focus Your Mind',
        isUnlocked: false,
        hoverText: 'succeed your first meditation',
        img: 'imgs/achievements/yin_yang.jpg',
        type: 'progression',
    },
    {
        name: 'Infinite Embrace',
        isUnlocked: false,
        hoverText: 'perform your first infinite embrace',
        img: 'imgs/achievements/infinite_embrace.jpg',
        type: 'progression',
    },
    {
        name: 'Gentle Embrace',
        isUnlocked: false,
        hoverText: 'infinite embrace for < 3.3 base LP',
        img: 'imgs/achievements/mini_embrace.jpg',
        type: 'puzzle',
    },
    {
        name: 'Massive Embrace',
        isUnlocked: false,
        hoverText: 'infinite embrace for > 25 LP',
        img: 'imgs/achievements/massive_embrace.jpg',
        type: 'puzzle',
    },
    {
        name: 'Hotkey Master',
        isUnlocked: false,
        hoverText: 'must unlock all hotkey functions first',
        img: 'imgs/achievements/hotkey_master.jpg',
        type: 'puzzle',
    },
    {
        name: 'Developer Options',
        isUnlocked: false,
        hoverText: '1←2←1→1←1→ 2→2←1←2→1→',
        img: 'imgs/achievements/developer_options.jpg',
        type: 'puzzle',
    },
    {
        name: 'Buy Me a Coffee',
        isUnlocked: false,
        hoverText: 'no purchase necessary - just click the link',
        img: 'imgs/achievements/buy_me_a_coffee.jpg',
        type: 'freebie',
    },
    {
        name: 'Zero-Sum Game',
        isUnlocked: false,
        hoverText: 'give hope / take hope',
        img: 'imgs/achievements/zero_sum_game.jpg',
        type: 'puzzle',
    },
    {
        name: 'One Hit KO',
        isUnlocked: false,
        hoverText: 'one punch the man',
        img: 'imgs/achievements/one_punch_the_man.jpg',
        type: 'puzzle',
    },
    {
        name: 'Study Libertarianism',
        isUnlocked: false,
        hoverText: `complete the Libertarianism meditation`,
        img: 'imgs/achievements/libertarianism.jpg',
        type: 'progression',
    },
    {
        name: 'Make Love, Not War',
        isUnlocked: false,
        hoverText: `why can't we all just be friends?`,
        img: 'imgs/achievements/make_love_not_war.jpg',
        type: 'progression',
    },
    {
        name: 'The Giver',
        isUnlocked: false,
        hoverText: `complete certain meditation without losing any focus`,
        img: 'imgs/achievements/the_giver.jpg',
        type: 'puzzle',
    },
    {
        name: 'Tamed Lion',
        isUnlocked: false,
        hoverText: `complete certain meditation without losing any focus`,
        img: 'imgs/achievements/tamed_lion.jpg',
        type: 'puzzle',
    },
    {
        name: 'Study Shinto',
        isUnlocked: false,
        hoverText: `complete the Shinto meditation`,
        img: 'imgs/achievements/shinto.jpg',
        type: 'progression',
    },
    {
        name: 'Ugly by Choice',
        isUnlocked: false,
        hoverText: `where there's a will, there's a way`,
        img: 'imgs/achievements/ugly_by_choice.jpg',
        type: 'puzzle',
    },
    {
        name: 'Out of Body Experience',
        isUnlocked: false,
        hoverText: `lose focus in Dualism meditation with exactly 2 balls`,
        img: 'imgs/achievements/body_and_soul.jpg',
        type: 'puzzle',
    },
    {
        name: 'Laerdal Tunnel',
        isUnlocked: false,
        hoverText: 'TT.A km',
        img: 'imgs/achievements/longest_tunnel.jpg',
        type: 'puzzle',
    },
    {
        name: 'Study Skepticism',
        isUnlocked: false,
        hoverText: `complete the Skepticism meditation`,
        img: 'imgs/achievements/skepticism.jpg',
        type: 'progression',
    },
    {
        name: 'More than Sauron',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/damage_absorption.jpg',
        type: 'puzzle',
    },
    {
        name: 'The Tiniest Crunch',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/tiniest_crunch.jpg',
        type: 'puzzle',
    },
    {
        name: '42 Misclicks',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/misfire.jpg',
        type: 'skill',
    },
    {
        name: 'Rasta Deadpool',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/rasta_deadpool.jpg',
        type: 'puzzle',
    },
    {
        name: 'Fast Commuter',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/fast_commuter.jpg',
        type: 'puzzle',
    },
    {
        name: 'PigeonPost',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/pigeonpost.jpg',
        type: 'freebie',
    },
    {
        name: 'Fidget Clicks',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/fidget_clicks.jpg',
        type: 'puzzle',
    },
    {
        name: 'The Great American Cookout',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/great_american_cookout.jpg',
        type: 'puzzle',
    },
    {
        name: 'Decisively Indecisive',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/decisively_indecisive.jpg',
        type: 'puzzle',
    },
];

const achievementsMap = new Map();

achievements.forEach(achievement => {
    achievementsMap.set(achievement.name, achievement);
});

// Function to render achievements grid based on type
function renderAchievements(type = 'all') {
    const container = document.getElementById('achievements-grid');
    container.innerHTML = ''; // Clear any existing content

    // Dynamically calculate the number of columns based on screen width
    const columns = window.innerWidth <= 768 ? 4 : 10; // 4 columns for mobile, 10 for desktop

    // Convert achievementsMap to an array if it's a Map
    const achievementsArray = Array.from(achievementsMap.values());

    // Filter achievements based on the selected type
    const filteredAchievements = achievementsArray.filter(achievement => {
        return type === 'all' || achievement.type === type;
    });

    // Calculate unlocked and total achievements for the current tab
    const unlockedCount = filteredAchievements.filter(achievement => achievement.isUnlocked).length;
    const totalCount = filteredAchievements.length;

    // Update the achievement count display
    const achievementCountElement = document.getElementById('achievementCount');
    achievementCountElement.textContent = `Unlocked: ${unlockedCount}/${totalCount}`;

    filteredAchievements.forEach((achievement, index) => {
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

// Function to handle tab switching
function switchTab(event) {
    const type = event.target.getAttribute('data-type');
    
    // Remove 'active' class from all buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    event.target.classList.add('active');

    // Render achievements for the selected type and update count
    renderAchievements(type);
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

    // Reset active tab to 'All'
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector('.tab-button[data-type="all"]').classList.add('active');

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

    // Event listeners for tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', switchTab);
    });

    // Optional: Render achievements immediately if needed
    // renderAchievements();
});
