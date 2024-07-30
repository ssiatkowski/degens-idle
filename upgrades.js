const upgrades = [
    {
        name: "So what do I do here?",
        cost: { copium: 5, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.4, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0.7, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/john_travolta.jpg",
    },
    {
        name: "Dating a 25 year old",
        cost: { copium: 0, delusion: 5, yachtMoney: 10, trollPoints: 10, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0.8, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1.9, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/leo.jpg",
    },
    {
        name: "Foreshadowing",
        cost: { copium: 10, delusion: 10, yachtMoney: 10, trollPoints: 10, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.8, delusionPerSecond: 2.3, yachtMoneyPerSecond: 1.9, trollPointsPerSecond: 0.6, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/distracted_boyfriend.jpg",
    },
    {
        name: "Standard Dropout",
        cost: { copium: 0, delusion: 30, yachtMoney: 30, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.2, delusionPerSecond: 1.2, yachtMoneyPerSecond: 1.2, trollPointsPerSecond: -1.6, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/standard_dropout.jpg",
    },
    {
        name: "GameStop",
        cost: { copium: 10, delusion: 0, yachtMoney: 50, trollPoints: 35, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1, delusionPerSecond: 0, yachtMoneyPerSecond: 6.2, trollPointsPerSecond: 1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/GameStop.jpg",
    },
    {
        name: "Decisions, decisions...",
        cost: { copium: 100, delusion: 100, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.4, delusionPerSecond: 4.2, yachtMoneyPerSecond: -1.2, trollPointsPerSecond: 2.2, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/two_buttons.jpg",
    },
    {
        name: "Keyboard Warrior",
        cost: { copium: 50, delusion: 100, yachtMoney: 50, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.7, delusionPerSecond: 3.5, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/keyboard_warrior.jpg",
    },
    {
        name: "Music",
        cost: { copium: 100, delusion: 25, yachtMoney: 150, trollPoints: 25, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 8.4, delusionPerSecond: -0.9, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/linkin_park.jpg",
    },
    {
        name: "Kamala 2024",
        cost: { copium: 0, delusion: 400, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 4.2, delusionPerSecond: 0, yachtMoneyPerSecond: 6.9, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/kamala.jpg",
    },
    {
        name: "Alt Coins",
        cost: { copium: 0, delusion: 0, yachtMoney: 999, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 25.5, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/alt_coins.jpg",
    },
    {
        name: "Email Safety First",
        cost: { copium: 1000, delusion: 0, yachtMoney: 0, trollPoints: 150, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0.2, delusionPerSecond: 8.9, yachtMoneyPerSecond: -1, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/proton.jpg",
    },
    {
        name: "Joker's Rage Level",
        cost: { copium: 500, delusion: 0, yachtMoney: 250, trollPoints: 700, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 3, delusionPerSecond: -24, yachtMoneyPerSecond: 10, trollPointsPerSecond: 26, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/over_9000.jpg",
    },
    {
        name: "Influencer Education",
        cost: { copium: 200, delusion: 400, yachtMoney: 1000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5, delusionPerSecond: 8, yachtMoneyPerSecond: -8, trollPointsPerSecond: 22, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/pyramid_scheme.jpg",
    },
    {
        name: "Hard Work Don't Mean Success",
        cost: { copium: 2000, delusion: 0, yachtMoney: 1400, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10, delusionPerSecond: -5, yachtMoneyPerSecond: 0.5, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/hard_to_swallow.jpg",
    },
    {
        name: "Captain Degen",
        cost: { copium: 1000, delusion: 1000, yachtMoney: 1000, trollPoints: 1000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10, delusionPerSecond: 10, yachtMoneyPerSecond: 10, trollPointsPerSecond: 10, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/captain_degen.jpg",
        message: "Degenerates, assemble!!! With Captain Degen, your prestige multiplier is increased by 0.01%. You'll have to take my word for it since the display rounds to two digits.",
        miniPrestigeMultiplier: 1.001,
    },
    {
        name: "Swing and a Miss",
        cost: { copium: 2400, delusion: 1600, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 20, delusionPerSecond: 15, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/swing_and_a_miss.jpg",
    },
    {
        name: "The Savior",
        cost: { copium: 0, delusion: 0, yachtMoney: 2500, trollPoints: 2500, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 8.8, delusionPerSecond: 8.8, yachtMoneyPerSecond: -10, trollPointsPerSecond: 3.3, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/the_savior.jpg",
    },
    {
        name: "Real Investments",
        cost: { copium: 2000, delusion: 0, yachtMoney: 1000, trollPoints: 2000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5, delusionPerSecond: 0, yachtMoneyPerSecond: 22, trollPointsPerSecond: 5, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/nvidia.jpg",
    },
    {
        name: "Big Pharma Simp",
        cost: { copium: 5000, delusion: 2000, yachtMoney: 1500, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 38, delusionPerSecond: 26, yachtMoneyPerSecond: -3, trollPointsPerSecond: -3, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/unhackable.jpg",
    },
    {
        name: "Mail-Order Bride",
        cost: { copium: 3000, delusion: 3000, yachtMoney: 3000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 30, yachtMoneyPerSecond: -15, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/90_day_fiance.jpg",
    },
    {
        name: "VR Porn",
        cost: { copium: 5000, delusion: 0, yachtMoney: 4000, trollPoints: 1500, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 23, delusionPerSecond: 6.9, yachtMoneyPerSecond: 0, trollPointsPerSecond: 3, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/vr_porn.jpg",
    },
    {
        name: "Deal with the devil",
        cost: { copium: 0, delusion: 0, yachtMoney: 12000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -1, delusionPerSecond: 2, yachtMoneyPerSecond: 2, trollPointsPerSecond: 1.1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/warren_buffet.jpg",
    },
    {
        name: "New Subreddit Discovery",
        cost: { copium: 10000, delusion: 0, yachtMoney: 666, trollPoints: 2000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 90, delusionPerSecond: 2, yachtMoneyPerSecond: 0, trollPointsPerSecond: -2, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/new_subreddit.jpg",
    },
    {
        name: "King of Delusion",
        cost: { copium: 0, delusion: 10000, yachtMoney: 3000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5, delusionPerSecond: 99, yachtMoneyPerSecond: 5, trollPointsPerSecond: -10, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/king_of_delusion.jpeg",
    },
    {
        name: "Suss",
        cost: { copium: 11000, delusion: 0, yachtMoney: 0, trollPoints: 5000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 25, delusionPerSecond: -5, yachtMoneyPerSecond: 0, trollPointsPerSecond: 40, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/morty.PNG",
    },
    {
        name: "Luigi's Idol",
        cost: { copium: 1234, delusion: 0, yachtMoney: 7777, trollPoints: 7777, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10, delusionPerSecond: 0, yachtMoneyPerSecond: 35, trollPointsPerSecond: 35, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/luigis_idol.png",
    },
    {
        name: "Peaceful Round of Golf",
        cost: { copium: 3500, delusion: 7500, yachtMoney: 8000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -30, delusionPerSecond: 20, yachtMoneyPerSecond: 0, trollPointsPerSecond: 60, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/andrew_tate.jpg",
    },
    {
        name: "I don't get this game",
        cost: { copium: 5000, delusion: 5000, yachtMoney: 5000, trollPoints: 5000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -15, delusionPerSecond: 35, yachtMoneyPerSecond: 18, trollPointsPerSecond: 30, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/standard.jpg",
    },
    {
        name: "Cookie Clicker",
        cost: { copium: 30000, delusion: 10000, yachtMoney: 20000, trollPoints: 10000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1, delusionPerSecond: 1, yachtMoneyPerSecond: 1, trollPointsPerSecond: 1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/cookie_clicker.jpg",
    },
    {
        name: "Sex Change",
        cost: { copium: 50000, delusion: 50000, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 600, delusionPerSecond: 600, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/sex_change.jpg",
        message: "Congratulations on your bold transformation! However, due to an unexpected complication, you find yourself feeling about 5% weaker. It seems the universe couldn't resist adding a little extra flair to your journey.<br><br>Think of it as a constant reminder that even in the realm of extraordinary changes, there's always a trade-off. Embrace your slightly lighter touch and let it be a testament to the unpredictable nature of life! On the bright side, you feel that becoming a god would surely undo this weakness.",
        miniPrestigeMultiplier: 0.95
    },
    {
        name: "Ultimate Solution",
        cost: { copium: 0, delusion: 25000, yachtMoney: 0, trollPoints: 80000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 90, delusionPerSecond: 95, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/use_useless.jpg",
    },
    {
        name: "Job Application",
        cost: { copium: 3000, delusion: 55000, yachtMoney: 0, trollPoints: 69000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 300, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/job_application.jpg",
    },
    {
        name: "Spit on that thang",
        cost: { copium: 100000, delusion: 0, yachtMoney: 25000, trollPoints: 50000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 75, delusionPerSecond: 0, yachtMoneyPerSecond: 35, trollPointsPerSecond: 35, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/hawk_tuah.jpg",
    },
    {
        name: "Fully Autonomous Cars",
        cost: { copium: 80000, delusion: 80000, yachtMoney: 10000, trollPoints: 25000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 65, delusionPerSecond: 15, yachtMoneyPerSecond: 30, trollPointsPerSecond: 30, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/elon_tesla.jpg",
    },
    {
        name: "I'm gonna come",
        cost: { copium: 75000, delusion: 75000, yachtMoney: 0, trollPoints: 50000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -100, delusionPerSecond: 0, yachtMoneyPerSecond: -225, trollPointsPerSecond: 500, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/do_not_come.jpg",
    },
    {
        name: "BrOadEn IN God",
        cost: { copium: 150000, delusion: 20000, yachtMoney: 20000, trollPoints: 40000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 400, delusionPerSecond: 200, yachtMoneyPerSecond: -10, trollPointsPerSecond: 250, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/boeing.jpg",
    },
    {
        name: "Do not come!",
        cost: { copium: 300000, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 120, yachtMoneyPerSecond: 250, trollPointsPerSecond: 120, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/im_gonna_come.jpg",
    },
    {
        name: "Ascension",
        cost: { copium: 99999, delusion: 99999, yachtMoney: 99999, trollPoints: 99999, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10, delusionPerSecond: 10, yachtMoneyPerSecond: 10, trollPointsPerSecond: 10, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/ascension.jpg",
    },
    {
        name: "420",
        cost: { copium: 420000, delusion: 420000, yachtMoney: 420000, trollPoints: 420000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 420, delusionPerSecond: 420, yachtMoneyPerSecond: 420, trollPointsPerSecond: 420, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/blaze_it.jpg",
    },
    {
        name: "Pudge",
        cost: { copium: 1000000, delusion: 0, yachtMoney: 0, trollPoints: 1000000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 60, delusionPerSecond: 0, yachtMoneyPerSecond: 400, trollPointsPerSecond: 100, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/pudge.jpg",
    },
    {
        name: "WE MADE IT!",
        cost: { copium: 1000000, delusion: 1000000, yachtMoney: 1000000, trollPoints: 1000000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 84, delusionPerSecond: 84, yachtMoneyPerSecond: 84, trollPointsPerSecond: 84, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/titanic.jpg",
    },
    {
        name: "Rewriting History",
        cost: { copium: 5000000, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 250, delusionPerSecond: 0, yachtMoneyPerSecond: 1200, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/rewriting_history.jpg",
    },
    {
        name: "Hunt for Osama",
        cost: { copium: 5000000, delusion: 1000000, yachtMoney: 5000000, trollPoints: 5000000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5000, delusionPerSecond: 5000, yachtMoneyPerSecond: 5000, trollPointsPerSecond: 5000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/osama.jpg",
        message: "As you finally corner Osama in a remote mountain hideout, you prepare for a decisive confrontation. However, instead of fighting back, Osama drops his weapon and raises a white flag. With sincerity in his eyes, he says, \"I'm a changed man. All I want now is World Peace.\"<br><br>Caught off guard, you sense the truth in his words, feeling the weight of his genuine remorse. With a heavy heart, you choose to spare him, setting the stage for an unexpected alliance that could reshape the future. This pivotal moment challenges your perception of justice and redemption.",
    },
    {
        name: "Hunt for Hussein",
        cost: { copium: 10000000, delusion: 10000000, yachtMoney: 10000000, trollPoints: 10000000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 200000, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 200000, hopiumPerSecond: -0.1, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/obama.jpg",
        message: "Desperate to eliminate the ruthless terrorist Saddam <b>Hussein</b>, you hire a team of elite hitmen. The mission seems straightforward until a devastating mistake changes everything.<br>The hitmen, due to a grave error, confuse their target with Barrack <b>Hussein</b> Obama, a prominent humanitarian and beacon of hope in the war-torn region. When the news breaks that Obama has been assassinated, the world plunges into despair. The humanitarian's death leaves a void, extinguishing the hope he brought to countless lives.<br>As you watch the consequences of this tragic error unfold, you grapple with guilt and the profound realization that sometimes, the lines between good and evil blur. The game takes you on a journey of redemption as you strive to undo the damage and restore hope to a world teetering on the brink of darkness.",
    },
    {
        name: "Gen B Names",
        cost: { copium: 2.5e8, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 50000, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 50000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/gen_b_names.jpg"
    },
    {
        name: "Job Application #2",
        cost: { copium: 6e8, delusion: 9.5e8, yachtMoney: 0, trollPoints: 9.9e8, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 30000, delusionPerSecond: 30000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 30000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/job_application_2.jpg",
    },
    {
        name: "Internet = Cats",
        cost: { copium: 0, delusion: 0, yachtMoney: 1.1e9, trollPoints: 6e9, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 100000, delusionPerSecond: -5000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 44000, hopiumPerSecond: 0.001, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/cats_mice.jpg",
    },
    {
        name: "Good Guy Sasuke",
        cost: { copium: 9e9, delusion: 3e9, yachtMoney: 0, trollPoints: 0, hopium: 1, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 100000, delusionPerSecond: 0, yachtMoneyPerSecond: 100000, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/good_guy_sasuke.jpg",
    },
    {
        name: "Is he alive?",
        cost: { copium: 5e9, delusion: 1e9, yachtMoney: 1e9, trollPoints: 5e9, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: -2000, trollPointsPerSecond: 100000, hopiumPerSecond: 0.001, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/is_he_alive.jpg",
    },
    {
        name: "It's group time!",
        cost: { copium: 1e9, delusion: 5e8, yachtMoney: 5e8, trollPoints: 0, hopium: 3, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 18000, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 15000, hopiumPerSecond: 0.002, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/joker.jpg",
    },    
    {
        name: "How stupid was I?",
        cost: { copium: 4e9, delusion: 0, yachtMoney: 0, trollPoints: 8e9, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 100000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 100000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/usernames.jpg",
    },   
    {
        name: "Pre-AI Idols!",
        cost: { copium: 1e10, delusion: 3e9, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 200000, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.001, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/pre-AI-idols.JPG",
    },       
    {
        name: "Antimatter Dimensions",
        cost: { copium: 1e10, delusion: 8e9, yachtMoney: 4e9, trollPoints: 1e10, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 500000, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.001, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/antimatter_dimensions.jpg",
        message: 
                `<div>
                    <h2>Antimatter Dimensions: A Game-Changing Milestone</h2>
                    <p>
                        Ladies and gentlemen, behold the pinnacle of gaming excellence: <strong>Antimatter Dimensions</strong>. 
                        This upgrade is not just a mere enhancement—it's a transformative journey into the very fabric of reality and beyond. 
                        A game so influential that it has reshaped the landscape of entertainment and culture, overshadowing the combined legacies of GTA, Skyrim, Dota, Quake, FIFA, Pokemon, and Tetris.
                    </p>
                    <h3>The Secret to Unlocking "Knowledge"</h3>
                    <p>
                        Amidst the infinite possibilities lies a secret—an elusive new resource known as <strong>"Knowledge"</strong>. 
                        This resource requires players to transcend conventional boundaries and embrace the unknown.
                    </p>
                    <p>
                        To unlock <strong>Knowledge</strong>, one must first achieve the seemingly impossible feat of reaching 
                        <strong>negative one Trillion delusion</strong>. This task demands perseverance, strategy, and an unwavering belief in the layers yet to be discovered.
                    </p>
                    <p><strong>This game taught us that there are always more layers.</strong></p>
                    <div style="font-size: 48px; font-weight: bold; text-align: center;">
                        KNOWLEDGE
                    </div>
                    <p>
                        Unlocking <strong>Knowledge</strong> is more than just a milestone—it's a testament to the limitless potential of the human spirit 
                        and the boundless nature of the universe. <strong>Antimatter Dimensions</strong> has not just entertained us; it has enlightened us, 
                        revealing that the pursuit of knowledge and understanding is a journey with infinite horizons.
                    </p>
                </div>`
    },  
    {
        name: "Don't fuck this up Netflix",
        cost: { copium: 0, delusion: 8e10, yachtMoney: 4e11, trollPoints: 0, hopium: 2000, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 200000, delusionPerSecond: -10000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.003, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/3_body_problem.jpg",
    },   
    {
        name: "Therapy",
        cost: { copium: 0, delusion: 1e11, yachtMoney: 0, trollPoints: 0, hopium: 10000, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 500000, delusionPerSecond: -250000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.005, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/therapy.jpg",
    },    
    {
        name: "Hypnosis",
        cost: { copium: 1e12, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 10000, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: -250000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.01, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/hypnosis.jpg",
    },  
    {
        name: "The Library",
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 1, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.01, knowledgePerSecond: 0.000001, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/the_library.jpg",
    },  
    {
        name: "Foreshadowing #2",
        cost: { copium: 1e12, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 350000, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 500000, delusionPerSecond: 100000, yachtMoneyPerSecond: 100000, trollPointsPerSecond: 500000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/distracted_boyfriend_2.jpg",
    }, 
    {
        name: "Yom Kippur",
        cost: { copium: 5e14, delusion: 0, yachtMoney: 5e13, trollPoints: 0, hopium: 500000, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10000000, delusionPerSecond: 25000000, yachtMoneyPerSecond: 5000000, trollPointsPerSecond: 39000000, hopiumPerSecond: 0.4, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/yom_kippur.jpg",
    },
    // {
    //     name: "Haven't Smoked Foool (not done)",
    //     cost: { copium: 1e15, delusion: 1e15, yachtMoney: 1e15, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
    //     earnings: { copiumPerSecond: 1, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
    //     img: "imgs/ez_blunt.jpg",
    // },  
    // {
    //     name: "Never Admit Mistakes (not done)",
    //     cost: { copium: 1e15, delusion: 1e15, yachtMoney: 1e15, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
    //     earnings: { copiumPerSecond: 1, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
    //     img: "imgs/marv.jpg",
    // },
    // {
    //     name: "Party Animals (not done)",
    //     cost: { copium: 1e15, delusion: 1e15, yachtMoney: 1e15, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
    //     earnings: { copiumPerSecond: 1, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
    //     img: "imgs/party_animals.jpg",
    // },
    // {
    //     name: "Wife's AirBnb Business (not done)",
    //     cost: { copium: 1e15, delusion: 1e15, yachtMoney: 1e15, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenityPerSecond: 0 },
    //     earnings: { copiumPerSecond: 1, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
    //     img: "imgs/airbnb.jpg",
    // },
    // {
    //     name: "Face of Defeat (not done)",
    //     cost: { copium: 1e15, delusion: 1e15, yachtMoney: 1e15, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
    //     earnings: { copiumPerSecond: 1, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
    //     img: "imgs/face_of_defeat.jpg",
    // },
];
