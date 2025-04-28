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
        name: 'Watch Trailer',
        isUnlocked: false,
        hoverText: 'watch the game trailer',
        img: 'imgs/achievements/watch_trailer.jpg',
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
        name: 'Creative Dreams',
        isUnlocked: false,
        hoverText: 'Creative Dreams Yield Daring Triumphs, Yet Careful Curiosity Drives Determined Youth Toward Timeless Discoveries.',
        img: 'imgs/achievements/creative_dreams.jpg',
        type: 'puzzle',
    },
    {
        name: 'First Prestige',
        isUnlocked: false,
        hoverText: 'click some button (without quick mode)',
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
        hoverText: 'become a low level god (without quick mode)',
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
        name: 'Fifth',
        isUnlocked: false,
        hoverText: 'open achievements window 5 times in one session',
        img: 'imgs/achievements/number_5.jpg',
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
        hoverText: 'why only ascend two upgrades at a time?',
        img: 'imgs/achievements/double_ascension.jpg',
        type: 'progression',
    },
    {
        name: 'Nerdy Career Path',
        isUnlocked: false,
        hoverText: 'cannot decide between science and engineering',
        img: 'imgs/achievements/nerdy_career_path.jpg',
        type: 'puzzle',
    },
    {
        name: 'Get Rick Rolled',
        isUnlocked: false,
        hoverText: 'try to finish the game way too early',
        img: 'imgs/achievements/rick_roll.jpg',
        type: 'progression',
    },
    {
        name: 'Big Sean - Dance',
        isUnlocked: false,
        hoverText: 'sing the lyrics',
        img: 'imgs/achievements/ass_ass.jpg',
        type: 'puzzle',
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
        name: 'Time Warp',
        isUnlocked: false,
        hoverText: 'another mechanic unlocked by an upgrade',
        img: 'imgs/achievements/time_warp.jpg',
        type: 'progression',
    },
    {
        name: 'Admire The Acronym',
        isUnlocked: false,
        hoverText: 'understand the meaning of this game',
        img: 'imgs/achievements/admiring.jpg',
        type: 'puzzle',
    },
    {
        name: 'Obsessive Compulsive',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/number_100.jpg',
        type: 'puzzle',
    },
    {
        name: `Can't Fix Crazy`,
        isUnlocked: false,
        hoverText: 'fast delusion toggles',
        img: 'imgs/achievements/cant_fix_crazy.jpg',
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
        name: 'Crisis Averted',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/crisis_averted.jpg',
        type: 'puzzle',
    },
    {
        name: 'Animation Aficionado',
        isUnlocked: false,
        hoverText: 'toggle animations off and back on',
        img: 'imgs/achievements/animation_aficionado.jpg',
        type: 'freebie',
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
        name: 'Broken Time Machine',
        isUnlocked: false,
        hoverText: 'how fast does the DeLorean need to go? click the Not Ready Time Warp exactly that many times and wait 10 seconds',
        img: 'imgs/achievements/broken_time_machine.jpg',
        type: 'puzzle',
    },
    {
        name: 'Degens Adventure',
        isUnlocked: false,
        hoverText: "try the dev's other game",
        img: 'imgs/achievements/degens_adventure.jpg',
        type: 'freebie',
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
        name: 'Automation Optimizer',
        isUnlocked: false,
        hoverText: 'tweak some automation settings',
        img: 'imgs/achievements/automation_changes.jpg',
        type: 'freebie',
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
        hoverText: 'export your save to a file',
        img: 'imgs/achievements/better_safe_than_sorry.jpg',
        type: 'freebie',
    },
    {
        name: 'Magical Text',
        isUnlocked: false,
        hoverText: 'copy save into clipboard',
        img: 'imgs/achievements/magical_text.jpg',
        type: 'freebie',
    },
    {
        name: 'Invalid Data',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/invalid_data.jpg',
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
        name: 'The Tiniest Crunch',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/tiniest_crunch.jpg',
        type: 'puzzle',
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
        hoverText: 'prestige for over 9000 mult (cannot have infinite prestige)',
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
        name: 'Visit Wiki',
        isUnlocked: false,
        hoverText: 'visit the game wiki (you are also encouraged to contribute to it)',
        img: 'imgs/achievements/visit_wiki.jpg',
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
        name: 'Developer Options',
        isUnlocked: false,
        hoverText: '1←2←1→1←1→ 2→2←1←2→1→',
        img: 'imgs/achievements/developer_options.jpg',
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
        name: 'Virtual Dodging',
        isUnlocked: false,
        hoverText: 'tweak VR code for the Matrix',
        img: 'imgs/achievements/virtual_dodging.jpg',
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
        name: 'Academic Grandmaster',
        isUnlocked: false,
        hoverText: 'alternate helper',
        img: 'imgs/achievements/academic_grandmaster.jpg',
        type: 'puzzle',
    },
    {
        name: 'Unlikely Duo',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/unlikely_duo.jpg',
        type: 'puzzle',
    },
    {
        name: 'Morale Boost',
        isUnlocked: false,
        hoverText: 'a strong leader will help you defeat Sauron',
        img: 'imgs/achievements/morale_boost.jpg',
        type: 'puzzle',
    },
    {
        name: 'Child Labor',
        isUnlocked: false,
        hoverText: '1 million clicks on cookie',
        img: 'imgs/achievements/child_labor.jpg',
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
        name: 'Bring the Whole Squad',
        isUnlocked: false,
        hoverText: 'have cap, spidey, hulk, thanos, vegeta, arnold, and tyson at your side to face The Rock',
        img: 'imgs/achievements/bring_the_whole_squad.jpg',
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
        name: 'Unlikely Duo #2',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/unlikely_duo_2.jpg',
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
        name: 'Fast Commuter',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/fast_commuter.jpg',
        type: 'puzzle',
    },
    {
        name: 'Battle Analyst',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/battle_analyst.jpg',
        type: 'puzzle',
    },
    {
        name: 'Chuck Norris Kidney',
        isUnlocked: false,
        hoverText: 'find a way to distract Chuck Norris',
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
        name: 'Fidget Clicks',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/fidget_clicks.jpg',
        type: 'puzzle',
    },
    {
        name: 'Eager to Train',
        isUnlocked: false,
        hoverText: 'defeat Training Dummy in less than 15 seconds after Big Crunch',
        img: 'imgs/achievements/training_hard.jpg',
        type: 'skill',
    },
    {
        name: 'Mathematical Overshot',
        isUnlocked: false,
        hoverText: 'win a math game after selecting way too many portals',
        img: 'imgs/achievements/mathematical_overshot.jpg',
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
        name: 'It Takes One to Know One',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/vegeta_vs_vegeta.jpg',
        type: 'puzzle',
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
        name: 'Daytrader',
        isUnlocked: false,
        hoverText: 'make 1000 resource trades',
        img: 'imgs/achievements/daytrader.jpg',
        type: 'freebie'
    },
    {
        name: 'That is some Bad Luck',
        isUnlocked: false,
        hoverText: 'lose 55% in luck game',
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
        name: 'The Great American Cookout',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/great_american_cookout.jpg',
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
        name: `What's so special about Cosmic Gamekeeper?`,
        isUnlocked: false,
        hoverText: `why don't the others do this?`,
        img: 'imgs/achievements/whats_so_special_about_cosmic_gamekeeper.jpg',
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
        name: 'Transcendent Leap',
        isUnlocked: false,
        hoverText: 'T before A',
        img: 'imgs/achievements/transcendent_leap.jpg',
        type: 'puzzle',
    },
    {
        name: 'Cosmic Drought',
        isUnlocked: false,
        hoverText: 'buy a certain upgrade',
        img: 'imgs/achievements/cosmic_drought.jpg',
        type: 'progression',
    },
    {
        name: 'Rote Amnesia',
        isUnlocked: false,
        hoverText: 'complete a 6-length memory game in reverse',
        img: 'imgs/achievements/rote_amnesia.jpg',
        type: 'skill',
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
        name: `I like graphs!`,
        isUnlocked: false,
        hoverText: `ok nerd`,
        img: 'imgs/achievements/i_like_graphs.jpg',
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
        name: 'Twin Mathematical Realms',
        isUnlocked: false,
        hoverText: `2233443322 win math games with exactly X portals (losses don't count against you)`,
        img: 'imgs/achievements/twin_mathematical_realms.jpg',
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
        name: 'Bells and Whistles',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/all_the_gimmicks.jpg',
        type: 'puzzle',
    },
    {
        name: 'Love Shop',
        isUnlocked: false,
        hoverText: 'unlock the Hall of Love',
        img: 'imgs/achievements/love_shop.jpg',
        type: 'progression',
        respecPoint: true,
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
        name: 'One Week of Saving',
        isUnlocked: false,
        hoverText: 'export your save on 7 different days',
        img: 'imgs/achievements/7_days_of_saving.jpg',
        type: 'freebie',
    },
    {
        name: 'But What If I Want To 69?',
        isUnlocked: false,
        hoverText: 'get sum of 69 in a math game with target less than 30',
        img: 'imgs/achievements/but_what_if_i_want_to_69.jpg',
        type: 'skill',
    },
    {
        name: 'Number One',
        isUnlocked: false,
        hoverText: `Everybody want to know what I'd do if I didn't win. I guess we'll never know.`,
        img: 'imgs/achievements/kanye_number_one.jpg',
        type: 'puzzle',
    },
    {
        name: 'Biggest Crunch',
        isUnlocked: false,
        hoverText: 'big crunch for over 9000 mult (cannot have infinite collapse)',
        img: 'imgs/achievements/biggest_crunch.jpg',
        type: 'puzzle',
    },
    {
        name: 'More than Sauron',
        isUnlocked: false,
        hoverText: 'this can be achieved in Saitama fight',
        img: 'imgs/achievements/damage_absorption.jpg',
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
        name: 'Buy Me a Coffee',
        isUnlocked: false,
        hoverText: 'no purchase necessary - just click the link',
        img: 'imgs/achievements/buy_me_a_coffee.jpg',
        type: 'freebie',
    },
    {
        name: 'PigeonPost',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/pigeonpost.jpg',
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
        name: 'Decisively Indecisive',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/decisively_indecisive.jpg',
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
        respecPoint: true,
    },
    {
        name: 'Two Worthy Opponents',
        isUnlocked: false,
        hoverText: `???`,
        img: 'imgs/achievements/two_worthy_opponents.jpg',
        type: 'puzzle',
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
        name: 'Massive Embrace',
        isUnlocked: false,
        hoverText: 'infinite embrace for > 25 LP',
        img: 'imgs/achievements/massive_embrace.jpg',
        type: 'puzzle',
        respecPoint: true,
    },
    {
        name: 'Ugly by Choice',
        isUnlocked: false,
        hoverText: `where there's a will, there's a way`,
        img: 'imgs/achievements/ugly_by_choice.jpg',
        type: 'puzzle',
    },
    {
        name: 'Fast Embracer',
        isUnlocked: false,
        hoverText: 'perform two Infinite Embraces within 3 minutes',
        img: 'imgs/achievements/fast_embracer.jpg',
        type: 'skill',
        respecPoint: true,
    },
    {
        name: `Can't Fix Pessimism`,
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/cant_fix_pessimism.jpg',
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
        name: 'Pay to Win',
        isUnlocked: false,
        hoverText: 'donate 10% of your earnings to Kuzzi',
        img: 'imgs/achievements/pay_to_win.jpg',
        type: 'puzzle',
        respecPoint: true,
    },
    {
        name: 'Where did the other ball go?',
        isUnlocked: false,
        hoverText: 'do this in Deism',
        img: 'imgs/achievements/where_did_the_other_ball_go.jpg',
        type: 'puzzle',
    },
    {
        name: 'Unwinnable',
        isUnlocked: false,
        hoverText: 'get unlucky Skepticism rolls',
        img: 'imgs/achievements/unwinnable.jpg',
        type: 'puzzle',
    },
    {
        name: 'Too Easy',
        isUnlocked: false,
        hoverText: 'get super lucky Skepticism rolls',
        img: 'imgs/achievements/too_easy.jpg',
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
        name: 'Perpetual Noob',
        isUnlocked: false,
        hoverText: `gamer but still don't get the game`,
        img: 'imgs/achievements/perpetual_noob.jpg',
        type: 'puzzle',
    },
    {
        name: 'Impossible Crunch',
        isUnlocked: false,
        hoverText: 'big crunch for over 99M mult (cannot have infinite collapse)',
        img: 'imgs/achievements/impossible_crunch.jpg',
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
        name: 'Buddhist Bunny',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/buddhist_bunny.jpg',
        type: 'puzzle',
        respecPoint: true,
    },
    {
        name: 'Warped Cookie',
        isUnlocked: false,
        hoverText: 'Wolves Crept Cautiously, Watching Whispers Curl. Wind Carried Cold, Whipping Cliffs.',
        img: 'imgs/achievements/warped_cookie.jpg',
        type: 'puzzle',
    },
    {
        name: 'Cured Skepticism',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/the_cure.jpg',
        type: 'puzzle',
    },
    {
        name: 'Eternal Flame',
        isUnlocked: false,
        hoverText: 'take 8888+ damage at once from ameterasu',
        img: 'imgs/achievements/amaterasu.jpg',
        type: 'puzzle',
    },
    {
        name: 'Theological Reasoning',
        isUnlocked: false,
        hoverText: `apply logic`,
        img: 'imgs/achievements/theological_reasoning.jpg',
        type: 'puzzle',
    },
    {
        name: 'Absolute Leap',
        isUnlocked: false,
        hoverText: 'T before A without BC (cannot have infinite collapse)',
        img: 'imgs/achievements/absolute_leap.jpg',
        type: 'puzzle',
    },
    {
        name: `Ain't Nobody Got Time for That`,
        isUnlocked: false,
        hoverText: 'attempt Epicureanism at max duration',
        img: 'imgs/achievements/aint_nobody_got_time_for_that.jpg',
        type: 'puzzle',
    },
    {
        name: 'Trinitism',
        isUnlocked: false,
        hoverText: 'beat Dualism with 3 max size balls, at max duration',
        img: 'imgs/achievements/trinitism.jpg',
        type: 'puzzle',
    },
    {
        name: 'Slice of Euphoria',
        isUnlocked: false,
        hoverText: 'bring pizza to the Epicurean party',
        img: 'imgs/achievements/slice_of_euphoria.jpg',
        type: 'puzzle',
    },
    {
        name: 'Lacking Balance',
        isUnlocked: false,
        hoverText: `try to enter Hall of Balance before mastering balance`,
        img: 'imgs/achievements/lacking_balance.jpg',
        type: 'progression',
    },
    {
        name: 'Engagement',
        isUnlocked: false,
        hoverText: 'infinite embrace for 619 love points (+/- 0.5)',
        img: 'imgs/achievements/engagement.jpg',
        type: 'puzzle',
        respecPoint: true,
    },
    {
        name: 'Two Weeks of Saving',
        isUnlocked: false,
        hoverText: 'export your save on 14 different days',
        img: 'imgs/achievements/14_days_of_saving.jpg',
        type: 'freebie',
    },
    {
        name: 'Apply Wisdom',
        isUnlocked: false,
        hoverText: 'approach Agnosticism with WISDOM',
        img: 'imgs/achievements/agnosticism_wisdom.jpg',
        type: 'puzzle',
    },
    {
        name: 'Final Meditation?',
        isUnlocked: false,
        hoverText: 'complete the final belief system oriented meditation',
        img: 'imgs/achievements/final_meditation.jpg',
        type: 'progression',
    },
    {
        name: 'Reflections of Insight',
        isUnlocked: false,
        hoverText: `review what you have learned from all the meditations`,
        img: 'imgs/achievements/reflections_of_insight.jpg',
        type: 'puzzle',
    },
    {
        name: 'Meaning of Life',
        isUnlocked: false,
        hoverText: `???`,
        img: 'imgs/achievements/meaning_of_life.jpg',
        type: 'progression',
    },
    {
        name: 'Win the Unwinnable',
        isUnlocked: false,
        hoverText: 'succeed with unwinnable Skepticism rolls',
        img: 'imgs/achievements/win_the_unwinnable.jpg',
        type: 'puzzle',
    },
    {
        name: 'DodecaDragons',
        isUnlocked: false,
        hoverText: `buy this upgrade`,
        img: 'imgs/achievements/dodecadragons.jpg',
        type: 'progression',
    },
    {
        name: 'Obie Trice',
        isUnlocked: false,
        hoverText: `real name, __ ________`,
        img: 'imgs/achievements/obie_trice.jpg',
        type: 'puzzle',
    },
    {
        name: 'Wisdom, not Insight',
        isUnlocked: false,
        hoverText: `???`,
        img: 'imgs/achievements/wisdom_not_insight.jpg',
        type: 'puzzle',
    },
    {
        name: 'Balance Master',
        isUnlocked: false,
        hoverText: `meet the balance master`,
        img: 'imgs/achievements/balance_master.jpg',
        type: 'progression',
        respecPoint: true,
    },
    {
        name: 'Birthdayception',
        isUnlocked: false,
        hoverText: `celebrate before birthday`,
        img: 'imgs/achievements/birthdayception.jpg',
        type: 'puzzle',
    },
    {
        name: 'Balancing Act',
        isUnlocked: false,
        hoverText: `unlock first Hall of Balance skill`,
        img: 'imgs/achievements/balancing_act.jpg',
        type: 'progression',
    },
    {
        name: 'One Month of Saving',
        isUnlocked: false,
        hoverText: 'export your save on 30 different days',
        img: 'imgs/achievements/30_days_of_saving.jpg',
        type: 'freebie',
    },
    {
        name: `Now that's a time wall!`,
        isUnlocked: false,
        hoverText: 'time displayed in eons',
        img: 'imgs/achievements/now_thats_a_time_wall.jpg',
        type: 'puzzle',
    },
    {
        name: 'Rasta Deadpool',
        isUnlocked: false,
        hoverText: '???',
        img: 'imgs/achievements/rasta_deadpool.jpg',
        type: 'puzzle',
    },
    {
        name: 'Meditation Maniac',
        isUnlocked: false,
        hoverText: `complete all meditations without any Hall of Love skills that have "meditation" in description`,
        img: 'imgs/achievements/meditation_maniac.jpg',
        type: 'puzzle',
    },
    {
        name: 'Gotthard Base Tunnel',
        isUnlocked: false,
        hoverText: `TT.AA km`,
        img: 'imgs/achievements/gotthard_base_tunnel.jpg',
        type: 'puzzle',
    },
    {
        name: 'Do as dev #3 says',
        isUnlocked: false,
        hoverText: `???`,
        img: 'imgs/achievements/do_as_dev_says.jpg',
        type: 'puzzle',
    },
    {
        name: 'Rising Balance',
        isUnlocked: false,
        hoverText: `play with balance sliders`,
        img: 'imgs/achievements/rising_balance.jpg',
        type: 'puzzle',
    },
    {
        name: 'First Commandment',
        isUnlocked: false,
        hoverText: `study Christianity without calling yourself a god`,
        img: 'imgs/achievements/first_commandment.jpg',
        type: 'puzzle',
    },
    {
        name: 'Where did everybody go?',
        isUnlocked: false,
        hoverText: `longer respawn time than duration on Epicureanism`,
        img: 'imgs/achievements/where_did_everybody_go.jpg',
        type: 'puzzle',
    },
    {
        name: 'Check Your Ego',
        isUnlocked: false,
        hoverText: `let your ego win over and over`,
        img: 'imgs/achievements/check_your_ego.jpg',
        type: 'puzzle',
    },
    {
        name: 'A',
        isUnlocked: false,
        hoverText: `acquire the arcane letter A`,
        img: 'imgs/achievements/letter_a.jpg',
        type: 'progression',
    },
    {
        name: 'B',
        isUnlocked: false,
        hoverText: `bag the blazing letter B`,
        img: 'imgs/achievements/letter_b.jpg',
        type: 'progression',
    },
    {
        name: 'C',
        isUnlocked: false,
        hoverText: `capture the cosmic letter C`,
        img: 'imgs/achievements/letter_c.jpg',
        type: 'progression',
    },
    {
        name: 'D',
        isUnlocked: false,
        hoverText: `deliver the daring letter D`,
        img: 'imgs/achievements/letter_d.jpg',
        type: 'progression',
    },
    {
        name: 'E',
        isUnlocked: false,
        hoverText: `embrace the enigmatic letter E`,
        img: 'imgs/achievements/letter_e.jpg',
        type: 'progression',
    },
    {
        name: 'Spell It Out',
        isUnlocked: false,
        hoverText: `in available upgrades`,
        img: 'imgs/achievements/ace.jpg',
        type: 'puzzle',
    },
    {
        name: 'F',
        isUnlocked: false,
        hoverText: `fetch the fiery letter F`,
        img: 'imgs/achievements/letter_f.jpg',
        type: 'progression',
    },
    {
        name: 'G',
        isUnlocked: false,
        hoverText: `grab the glowing letter G`,
        img: 'imgs/achievements/letter_g.jpg',
        type: 'progression',
    },
    {
        name: 'H',
        isUnlocked: false,
        hoverText: `hunt the hidden letter H`,
        img: 'imgs/achievements/letter_h.jpg',
        type: 'progression',
    },
    {
        name: 'I',
        isUnlocked: false,
        hoverText: `identify the illustrious letter I`,
        img: 'imgs/achievements/letter_i.jpg',
        type: 'progression',
    },
    {
        name: 'J',
        isUnlocked: false,
        hoverText: `join the jubilant letter J`,
        img: 'imgs/achievements/letter_j.jpg',
        type: 'progression',
    },
    {
        name: 'K',
        isUnlocked: false,
        hoverText: `kindle the keen letter K`,
        img: 'imgs/achievements/letter_k.jpg',
        type: 'progression',
    },
    {
        name: 'L',
        isUnlocked: false,
        hoverText: `lock the luminous letter L`,
        img: 'imgs/achievements/letter_l.jpg',
        type: 'progression',
    },
    {
        name: 'M',
        isUnlocked: false,
        hoverText: `master the mighty letter M`,
        img: 'imgs/achievements/letter_m.jpg',
        type: 'progression',
    },
    {
        name: 'N',
        isUnlocked: false,
        hoverText: `nab the noble letter N`,
        img: 'imgs/achievements/letter_n.jpg',
        type: 'progression',
    },
    {
        name: 'O',
        isUnlocked: false,
        hoverText: `obtain the ornate letter O`,
        img: 'imgs/achievements/letter_o.jpg',
        type: 'progression',
    },
    {
        name: 'P',
        isUnlocked: false,
        hoverText: `procure the powerful letter P`,
        img: 'imgs/achievements/letter_p.jpg',
        type: 'progression',
    },
    {
        name: 'Q',
        isUnlocked: false,
        hoverText: `quest for the quintessential letter Q`,
        img: 'imgs/achievements/letter_q.jpg',
        type: 'progression',
    },
    {
        name: 'R',
        isUnlocked: false,
        hoverText: `retrieve the radiant letter R`,
        img: 'imgs/achievements/letter_r.jpg',
        type: 'progression',
    },
    {
        name: 'S',
        isUnlocked: false,
        hoverText: `secure the stellar letter S`,
        img: 'imgs/achievements/letter_s.jpg',
        type: 'progression',
    },
    {
        name: 'T',
        isUnlocked: false,
        hoverText: `track the tenacious letter T`,
        img: 'imgs/achievements/letter_t.jpg',
        type: 'progression',
    },
    {
        name: 'U',
        isUnlocked: false,
        hoverText: `uncover the unique letter U`,
        img: 'imgs/achievements/letter_u.jpg',
        type: 'progression',
    },
    {
        name: 'V',
        isUnlocked: false,
        hoverText: `vie for the vibrant letter V`,
        img: 'imgs/achievements/letter_v.jpg',
        type: 'progression',
    },
    {
        name: 'W',
        isUnlocked: false,
        hoverText: `win the wondrous letter W`,
        img: 'imgs/achievements/letter_w.jpg',
        type: 'progression',
    },
    {
        name: 'X',
        isUnlocked: false,
        hoverText: `xerox the xenial letter X`,
        img: 'imgs/achievements/letter_x.jpg',
        type: 'progression',
    },
    {
        name: 'Y',
        isUnlocked: false,
        hoverText: `yearn for the youthful letter Y`,
        img: 'imgs/achievements/letter_y.jpg',
        type: 'progression',
    },
    {
        name: 'Z',
        isUnlocked: false,
        hoverText: `zip to the zealous letter Z`,
        img: 'imgs/achievements/letter_z.jpg',
        type: 'progression',
    },
    {
        name: 'Prove the Muppet Wrong',
        isUnlocked: false,
        hoverText: `???`,
        img: 'imgs/achievements/prove_the_muppet_wrong.jpg',
        type: 'puzzle',
    },
    {
        name: 'Honor',
        isUnlocked: false,
        hoverText: `???`,
        img: 'imgs/achievements/honor.jpg',
        type: 'puzzle',
    },
    {
        name: 'STARBOUND',
        isUnlocked: false,
        hoverText: `that's too many letters`,
        img: 'imgs/achievements/starbound.jpg',
        type: 'puzzle',
    },
    {
        name: 'Fifty Days of Saving',
        isUnlocked: false,
        hoverText: 'export your save on 50 different days',
        img: 'imgs/achievements/50_days_of_saving.jpg',
        type: 'freebie',
        respecPoint: true,
    },
    {
        name: 'Skip Master 5000',
        isUnlocked: false,
        hoverText: `skip 5000 mini games`,
        img: 'imgs/achievements/skip_master_5000.jpg',
        type: 'freebie',
    },
    {
        name: 'Ego Death',
        isUnlocked: false,
        hoverText: `defeat your ego`,
        img: 'imgs/achievements/defeat_your_ego.jpg',
        type: 'progression',
    },
    {
        name: 'Math is Evil',
        isUnlocked: false,
        hoverText: `not a tip, but if you choose to skip any achievements - skip this one`,
        img: 'imgs/achievements/math_is_evil.jpg',
        type: 'skill',
    },
    {
        name: 'Serious Gamer',
        isUnlocked: false,
        hoverText: `get mini game multiplier above 7.5x`,
        img: 'imgs/achievements/serious_gamer.jpg',
        type: 'skill',
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

        if (achievement.respecPoint) {
            hoverText.innerHTML += `<br><span style="color: pink;">+1 Respec Point</span>`;
        }

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
    if (numAchievementsOpens==100){
        unlockAchievement('Obsessive Compulsive');
    }
    assAssSequence += 'A';
    checkAssAssSequence();
    // Reset to default tab and render achievements
    achievementTabs.reset();
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

            if(achievement.respecPoint){
                numLoveHallFreeRespecs++;
            }

            saveGameState();
            updateMultipliersDisplay();
            updateEffectiveMultipliers();
            showPopupTooltip(`Achievement: ${name}`, color='#1B4D3E', durationSeconds=6, imageSrc=achievement.img);
        }
    }
}

function closeAchievementsOverlay() {
    const overlay = document.getElementById('achievementsOverlay');
    overlay.style.display = 'none';
}

const achievementTabs = new TabbedDisplay(
    document.querySelector('#achievementTabs'), // tab containing element
    renderAchievements // call this function with name when changing tabs
);

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
    achievementTabs.addTabsListeners();

    // Optional: Render achievements immediately if needed
    // renderAchievements();
});
