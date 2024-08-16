const upgrades = [
    {
        name: "So what do I do here?",
        cost: { copium: 3, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.4, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0.7, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/john_travolta.jpg",
    },
    {
        name: "You made it",
        cost: { copium: 0, delusion: 5, yachtMoney: 7, trollPoints: 7, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0.8, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1.9, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/leo.jpg",
        message: `<p>Welcome to the start of your epic journey. Whether you’re here for the memes, the deep existential pondering, or just to click things—cheers to you! 🍷 </p>
                    <p>But don’t get too comfortable! Ahead lie challenges that will test your wit, patience, and strategic thinking. There will be walls to break through, and the path forward isn’t always a straight line. But hey, if Leo can win an Oscar, you can solve a few strategic puzzles, right?</p>
                    <p>Let the games begin—click, explore, and outsmart every obstacle in your way!</p>`,
    },
    {
        name: "Foreshadowing",
        cost: { copium: 8, delusion: 8, yachtMoney: 8, trollPoints: 8, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.8, delusionPerSecond: 2.3, yachtMoneyPerSecond: 1.9, trollPointsPerSecond: 0.6, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/distracted_boyfriend.jpg",
    },
    {
        name: "Why Memes Though?",
        cost: { copium: 0, delusion: 25, yachtMoney: 25, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.4, delusionPerSecond: 1.4, yachtMoneyPerSecond: 1.6, trollPointsPerSecond: -1.6, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/why_memes.jpg",
        message: `<p>The internet is more than just a tool—it’s a pivotal stepping stone in our evolution and technological advancement. It’s where ideas are born, shared, and transformed, connecting minds across the globe. At the very core of this vast network lies the humble meme.</p>
                <p>Memes are the language of the internet, capturing complex ideas, emotions, and cultural moments in bite-sized, shareable formats. They spread faster than any traditional medium, influencing thoughts, trends, and even shaping societal narratives. In many ways, memes are the digital reflection of our collective consciousness.</p>
                <p>So, when embarking on a journey of existential discovery, how could we ignore something so integral to our shared online experience? Memes might seem simple, but they encapsulate the essence of what it means to be part of this interconnected, ever-evolving world. Without them, the journey would be missing a vital piece of the puzzle.</p>`,
    },
    {
        name: "GameStop",
        cost: { copium: 10, delusion: 0, yachtMoney: 40, trollPoints: 35, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1, delusionPerSecond: 0, yachtMoneyPerSecond: 6.3, trollPointsPerSecond: 1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/GameStop.jpg",
    },
    {
        name: "Decisions, decisions...",
        cost: { copium: 100, delusion: 90, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.3, delusionPerSecond: 4.2, yachtMoneyPerSecond: -1.2, trollPointsPerSecond: 2.1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/two_buttons.jpg",
    },
    {
        name: "Clickable",
        cost: { copium: 50, delusion: 100, yachtMoney: 50, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.7, delusionPerSecond: 3.5, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/click.jpg",
        message: `Some upgrades come with special messages that enhance your experience. These messages might reveal lore, explain new game features, or provide valuable insights—just like this one. You’ll see these messages the first time you purchase an upgrade, but don’t worry if you miss something! You can always click the upgrade in the purchased section to view the messages again.`,
    },
    {
        name: "Music",
        cost: { copium: 100, delusion: 25, yachtMoney: 150, trollPoints: 25, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 8.4, delusionPerSecond: -0.8, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/linkin_park.jpg",
    },
    {
        name: "Not All Trolls Are Bad",
        cost: { copium: 0, delusion: 380, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 4.2, delusionPerSecond: 0, yachtMoneyPerSecond: 6.9, trollPointsPerSecond: 1.1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/happy_troll.jpg",
    },
    {
        name: "Alt Coins",
        cost: { copium: 0, delusion: 0, yachtMoney: 999, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 25, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/alt_coins.jpg",
    },
    {
        name: "Paid Email Service",
        cost: { copium: 1000, delusion: 0, yachtMoney: 0, trollPoints: 150, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0.8, delusionPerSecond: 8.4, yachtMoneyPerSecond: -1.3, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/proton.jpg",
    },
    {
        name: "Negative Gains?",
        cost: { copium: 500, delusion: 0, yachtMoney: 250, trollPoints: 700, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 4, delusionPerSecond: -24, yachtMoneyPerSecond: 12, trollPointsPerSecond: 29, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/this_is_fine.jpg",
        hoverOverwrite: "How am I supposed to progress in this game?",
        message: `Be cautious—some upgrades may come with negative gains, including this one. While you can hover over most upgrades to preview their earnings, the hover information for some, like this one, is intentionally obfuscated. Keep those in mind as you progress. However, rest assured that <strong>ALL</strong> upgrades are a net positive at some point in the game—there isn’t a single one that is always bad. Also, while it’s possible to make vital mistakes, the game remains mostly forgiving, and there are many paths to victory.`,
    },
    {
        name: "Influencer Education",
        cost: { copium: 300, delusion: 400, yachtMoney: 1000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5, delusionPerSecond: 9, yachtMoneyPerSecond: -8, trollPointsPerSecond: 23, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/pyramid_scheme.jpg",
    },
    {
        name: "Hard Work ≠ Success",
        cost: { copium: 2000, delusion: 0, yachtMoney: 1400, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10, delusionPerSecond: -5, yachtMoneyPerSecond: 1.9, trollPointsPerSecond: 2, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/hard_to_swallow.jpg",
        hoverOverwrite: "But work hard anyway!",
    },
    {
        name: "Captain Degen",
        cost: { copium: 1000, delusion: 1000, yachtMoney: 1000, trollPoints: 1000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10, delusionPerSecond: 10, yachtMoneyPerSecond: 10, trollPointsPerSecond: 10, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/captain_degen.jpg",
    },
    {
        name: "Swing and a Miss",
        cost: { copium: 2400, delusion: 1600, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 18.5, delusionPerSecond: 14, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/swing_and_a_miss.jpg",
    },
    {
        name: "The Savior",
        cost: { copium: 0, delusion: 0, yachtMoney: 2500, trollPoints: 2500, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 8.9, delusionPerSecond: 8.9, yachtMoneyPerSecond: -10, trollPointsPerSecond: 3.5, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/the_savior.jpg",
    },
    {
        name: "Real Investments",
        cost: { copium: 2000, delusion: 0, yachtMoney: 1000, trollPoints: 2000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5, delusionPerSecond: 0, yachtMoneyPerSecond: 28, trollPointsPerSecond: 5, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/nvidia.jpg",
        hoverOverwrite: "Investments = Good",
    },
    {
        name: "Big Pharma Simp",
        cost: { copium: 5000, delusion: 2000, yachtMoney: 1500, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 37, delusionPerSecond: 26, yachtMoneyPerSecond: -3, trollPointsPerSecond: -3, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/unhackable.jpg",
    },
    {
        name: "Mail-Order Bride",
        cost: { copium: 3000, delusion: 3000, yachtMoney: 3000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 30, yachtMoneyPerSecond: -14, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/90_day_fiance.jpg",
    },
    {
        name: "VR Porn",
        cost: { copium: 5000, delusion: 0, yachtMoney: 4000, trollPoints: 1500, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 22, delusionPerSecond: 6.9, yachtMoneyPerSecond: 0, trollPointsPerSecond: 2.4, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/vr_porn.jpg",
    },
    {
        name: "Deal with the devil",
        cost: { copium: 0, delusion: 0, yachtMoney: 12000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -1, delusionPerSecond: 2, yachtMoneyPerSecond: 2, trollPointsPerSecond: 1.5, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/warren_buffet.jpg",
        hoverOverwrite: "It's just your soul...",
    },
    {
        name: "New Subreddit Discovery",
        cost: { copium: 10000, delusion: 0, yachtMoney: 666, trollPoints: 2000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 88, delusionPerSecond: 2, yachtMoneyPerSecond: 0, trollPointsPerSecond: -2, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/new_subreddit.jpg",
    },
    {
        name: "King of Delusion",
        cost: { copium: 0, delusion: 10000, yachtMoney: 3000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 3, delusionPerSecond: 99, yachtMoneyPerSecond: 3, trollPointsPerSecond: -9, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/king_of_delusion.jpeg",
        hoverOverwrite: "Probably gives lots of delusion",
    },
    {
        name: "Suss",
        cost: { copium: 11000, delusion: 0, yachtMoney: 0, trollPoints: 5000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 21.5, delusionPerSecond: -6, yachtMoneyPerSecond: 0, trollPointsPerSecond: 38, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/morty.PNG",
    },
    {
        name: "Can't Unsee This",
        cost: { copium: 1234, delusion: 0, yachtMoney: 7777, trollPoints: 7777, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10, delusionPerSecond: 0, yachtMoneyPerSecond: 33, trollPointsPerSecond: 33, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/luigis_idol.png",
    },
    {
        name: "What Other Multiplier?",
        cost: { copium: 3500, delusion: 7500, yachtMoney: 8000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -30, delusionPerSecond: 20, yachtMoneyPerSecond: 0, trollPointsPerSecond: 69, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/mocking_spongebob.jpg",
    },
    {
        name: "I don't get this game",
        cost: { copium: 5000, delusion: 5000, yachtMoney: 5000, trollPoints: 5000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -15, delusionPerSecond: 32, yachtMoneyPerSecond: 18, trollPointsPerSecond: 30, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/standard.jpg",
    },
    {
        name: "Cookie Clicker",
        cost: { copium: 30000, delusion: 10000, yachtMoney: 20000, trollPoints: 10000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1, delusionPerSecond: 1, yachtMoneyPerSecond: 1, trollPointsPerSecond: 1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/cookie_clicker.jpg",
        message: "In the vast world of idle games, one title stands as the beacon that lit the path for all others: Cookie Clicker. Launched in 2013, Cookie Clicker captivated millions with its simple yet endlessly engaging premise. The thrill of watching numbers grow, the joy of achieving milestones, and the addictiveness of endless clicking and upgrading—all these elements combined to create a phenomenon that transcended the gaming community.\n\nIn homage to this legendary game, you have now unlocked a cookie! Clicking this cookie will count as clicking each collect button 10 times! It will persist across Prestiges! Happy clicking!",
        hoverOverwrite: "It's a cookie. Just eat it.",
    },
    {
        name: "Sex Change",
        cost: { copium: 48000, delusion: 48000, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 850, delusionPerSecond: 850, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/sex_change.jpg",
        message: "Congratulations on your bold transformation! It's natural to feel a little weaker—about 10% on a prestige multiplier scale—after such a significant change. Just like recovering from major surgery, your strength will gradually return.<br><br>This temporary adjustment is a gentle reminder that even extraordinary changes come with their phases of recovery. Embrace this period of healing as a testament to your resilience. With time and patience, your full strength will come back, stronger than ever.",
        miniPrestigeMultiplier: 0.9,
        hoverOverwrite: "Just a quick snip",
    },
    {
        name: "Ultimate Solution",
        cost: { copium: 0, delusion: 25000, yachtMoney: 0, trollPoints: 80000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 89, delusionPerSecond: 96, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/use_useless.jpg",
    },
    {
        name: "Job Application",
        cost: { copium: 3000, delusion: 55000, yachtMoney: 0, trollPoints: 69000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 270, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/job_application.jpg",
    },
    {
        name: "Spit on that thang",
        cost: { copium: 100000, delusion: 0, yachtMoney: 25000, trollPoints: 50000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 75, delusionPerSecond: 0, yachtMoneyPerSecond: 45, trollPointsPerSecond: 45, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/hawk_tuah.jpg",
        hoverOverwrite: "HAWK TUAH",
    },
    {
        name: "Fully Autonomous Cars",
        cost: { copium: 80000, delusion: 80000, yachtMoney: 10000, trollPoints: 25000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 60, delusionPerSecond: 15, yachtMoneyPerSecond: 30, trollPointsPerSecond: 20, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/elon_tesla.jpg",
    },
    {
        name: "I'm gonna come",
        cost: { copium: 75000, delusion: 75000, yachtMoney: 0, trollPoints: 50000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -70, delusionPerSecond: 0, yachtMoneyPerSecond: -225, trollPointsPerSecond: 550, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/do_not_come.jpg",
    },
    {
        name: "BrOadEn IN God",
        cost: { copium: 150000, delusion: 20000, yachtMoney: 20000, trollPoints: 40000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 400, delusionPerSecond: 200, yachtMoneyPerSecond: -10, trollPointsPerSecond: 225, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/boeing.jpg",
    },
    {
        name: "Do not come!",
        cost: { copium: 300000, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 112, yachtMoneyPerSecond: 250, trollPointsPerSecond: 112, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/im_gonna_come.jpg",
    },
    {
        name: "Ascension",
        cost: { copium: 99999, delusion: 99999, yachtMoney: 99999, trollPoints: 99999, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10, delusionPerSecond: 10, yachtMoneyPerSecond: 10, trollPointsPerSecond: 10, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/ascension.jpg",
        message: `<p>Congratulations, brave soul! With the purchase of the Ascension upgrade, you have unlocked the extraordinary ability to Ascend Above Mortals and enter the revered God Mode. Prepare yourself for an epic journey where the limits of mortality no longer bind you.</p>
                    <p>Your intuition whispers:<span style="color: #40E0D0;"> I think the optimum strategy is for the first few ascensions to be taken as soon as possible.</span></p>
                    <p>Welcome to the next chapter of your legendary adventure. Ascend and let your godlike journey begin!</p>
`,
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
        hoverOverwrite: "Thank you for playing and making it this far into the game. The good news is, you have only scratched the surface. Wouldn't even say you have completed the tutorial.",
    },
    {
        name: "Rewriting History",
        cost: { copium: 5000000, delusion: 0, yachtMoney: 1000000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 255, delusionPerSecond: 0, yachtMoneyPerSecond: 1200, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/rewriting_history.jpg",
    },
    {
        name: "Hunt for Osama",
        cost: { copium: 5000000, delusion: 1000000, yachtMoney: 5000000, trollPoints: 5000000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 6000, delusionPerSecond: 6000, yachtMoneyPerSecond: 6000, trollPointsPerSecond: 6000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/osama.jpg",
        message: "As you finally corner Osama in a remote mountain hideout, you prepare for a decisive confrontation. However, instead of fighting back, Osama drops his weapon and raises a white flag. With sincerity in his eyes, he says, \"I'm a changed man. All I want now is World Peace.\"<br><br>Caught off guard, you sense the truth in his words, feeling the weight of his genuine remorse. With a heavy heart, you choose to spare him, setting the stage for an unexpected alliance that could reshape the future. This pivotal moment challenges your perception of justice and redemption.",
    },
    {
        name: "Hunt for Hussein",
        cost: { copium: 10000000, delusion: 10000000, yachtMoney: 10000000, trollPoints: 10000000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 480000, delusionPerSecond: 240000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 360000, hopiumPerSecond: -0.1, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/obama.jpg",
        message: "Desperate to eliminate the ruthless terrorist Saddam <b>Hussein</b>, you hire a team of elite hitmen. The mission seems straightforward until a devastating mistake changes everything.<br>The hitmen, due to a grave error, confuse their target with Barrack <b>Hussein</b> Obama, a prominent humanitarian and beacon of hope in the war-torn region. When the news breaks that Obama has been assassinated, the world plunges into despair. The humanitarian's death leaves a void, extinguishing the hope he brought to countless lives.<br>As you watch the consequences of this tragic error unfold, you grapple with guilt and the profound realization that sometimes, the lines between good and evil blur. The game takes you on a journey of redemption as you strive to undo the damage and restore hope to a world teetering on the brink of darkness.",
        hoverOverwrite: "Think about this one",
    },
    {
        name: "Trading Resources",
        cost: { copium: 2.5e8, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 62000, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 50000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/trade_offer.jpg",
        message: `Don’t forget about the trade functionality—at certain points in the game, it can be a highly efficient way to boost your progress. You’ll have the ability to choose which resources to trade from and to, allowing you to balance your reserves and optimize your strategy. Keep an eye on your resources, and use trade when the time is right to gain the upper hand!`,
    },
    {
        name: "Job Application #2",
        cost: { copium: 6e8, delusion: 9.5e8, yachtMoney: 0, trollPoints: 9.9e8, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 35000, delusionPerSecond: 35000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 35000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/job_application_2.jpg",
    },
    {
        name: "Internet = Cats",
        cost: { copium: 0, delusion: 0, yachtMoney: 1.1e9, trollPoints: 6e9, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 100000, delusionPerSecond: -4000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 45600, hopiumPerSecond: 0.001, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/cats_mice.jpg",
    },
    {
        name: "Good Guy Sasuke",
        cost: { copium: 9e9, delusion: 3e9, yachtMoney: 0, trollPoints: 0, hopium: 1, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 100000, delusionPerSecond: 0, yachtMoneyPerSecond: 100000, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/good_guy_sasuke.jpg",
    },
    {
        name: "Where has he been?",
        cost: { copium: 5e9, delusion: 1e9, yachtMoney: 1e9, trollPoints: 5e9, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: -2000, trollPointsPerSecond: 100000, hopiumPerSecond: 0.001, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/is_he_alive.jpg",
    },
    {
        name: "It's group time!",
        cost: { copium: 1e9, delusion: 5e8, yachtMoney: 5e8, trollPoints: 0, hopium: 3, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 18000, delusionPerSecond: 0, yachtMoneyPerSecond: 8000, trollPointsPerSecond: 18000, hopiumPerSecond: 0.002, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
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
        earnings: { copiumPerSecond: 208000, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.001, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/pre-AI-idols.JPG",
    },       
    {
        name: "Antimatter Dimensions",
        cost: { copium: 1e10, delusion: 8e9, yachtMoney: 4e9, trollPoints: 1e10, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 550000, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.0015, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
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
        name: "Degens Idle Dev",
        cost: { copium: 5e11, delusion: 0, yachtMoney: 0, trollPoints: 3e11, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 600000, delusionPerSecond: 0, yachtMoneyPerSecond: 50000, trollPointsPerSecond: 0, hopiumPerSecond: 0.004, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/most_interesting_man.jpg",
    },
    {
        name: "Don't fuck this up Netflix",
        cost: { copium: 0, delusion: 8e10, yachtMoney: 4e11, trollPoints: 0, hopium: 2000, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 250000, delusionPerSecond: -10000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.003, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
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
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.0105, knowledgePerSecond: 0.000001, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/the_library.jpg",
        message: 'By acquiring The Library upgrade, you have proven yourself worthy to enter the esteemed <b>Hall of Knowledge</b>. Your dedication and wisdom have granted you access to this sacred realm of enlightenment.',
        hoverOverwrite: "You get the sense that buying this will unlock the Hall of Knowledge!"
    },  
    {
        name: "Foreshadowing #2",
        cost: { copium: 8e12, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 350000, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 530000, delusionPerSecond: 100000, yachtMoneyPerSecond: 105000, trollPointsPerSecond: 500000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/distracted_boyfriend_2.jpg",
    }, 
    {
        name: "Melvor Idle",
        cost: { copium: 1e14, delusion: 3e13, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 50, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1040000, delusionPerSecond: 0, yachtMoneyPerSecond: 500000, trollPointsPerSecond: 1040000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/melvor.jpg",
        hoverOverwrite: "I don't know. Never played it. Take some Copium."
    }, 
    {
        name: "Spring Break",
        cost: { copium: 0, delusion: 0, yachtMoney: 8e12, trollPoints: 4e13, hopium: 100000, knowledge: 0.5, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10400000, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 10000000, hopiumPerSecond: 0.1, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/spring_break.jpg",
    },
    {
        name: "Oh Deer",
        cost: { copium: 0, delusion: 100, yachtMoney: 0, trollPoints: 1e14, hopium: 1000000, knowledge: 7.5, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 152000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 10800000, hopiumPerSecond: 0.2, knowledgePerSecond: 0.0000013, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/oh_deer.jpg",
    },
    {
        name: "Yom Kippur",
        cost: { copium: 5e14, delusion: 0, yachtMoney: 5e13, trollPoints: 0, hopium: 500000, knowledge: 100, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1700000, delusionPerSecond: 280000, yachtMoneyPerSecond: 500000, trollPointsPerSecond: 390000, hopiumPerSecond: 0.04, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/yom_kippur.jpg",
    },
    {
        name: "Hire an Assistant",
        cost: { copium: 1e14, delusion: 0, yachtMoney: 5e13, trollPoints: 0, hopium: 3000000, knowledge: 150, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -4000000, delusionPerSecond: 0, yachtMoneyPerSecond: -500000, trollPointsPerSecond: 1.02e5, hopiumPerSecond: 0, knowledgePerSecond: 0.0000099, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/hire_employee.jpg",
        hoverOverwrite: "Should be helpful right?",
    },
    {
        name: "Cybertruck",
        cost: { copium: 0, delusion: 0, yachtMoney: 3e14, trollPoints: 0, hopium: 10000000, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.05e7, delusionPerSecond: 1.65e6, yachtMoneyPerSecond: -100000, trollPointsPerSecond: 1.2e6, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/cybertruck.jpg",
    },
    {
        name: "The Finale",
        cost: { copium: 1e15, delusion: 1e15, yachtMoney: 1e15, trollPoints: 1e15, hopium: 1e8, knowledge: 10000, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 6.9e5, trollPointsPerSecond: 6.9e6, hopiumPerSecond: 0, knowledgePerSecond: 0.000024, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/rick_roll.jpg",
        hoverOverwrite: "Thank you for playing...",
    },
    {
        name: "But Wait There's More!",
        cost: { copium: 1e15, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 1e8, knowledge: 8000, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5.8e6, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 4.5, knowledgePerSecond: 0.000012, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/surprise_pikachu.jpg",
    },
    {
        name: "Spotify Wrapped",
        cost: { copium: 1e15, delusion: 0, yachtMoney: 1e14, trollPoints: 0, hopium: 1e8, knowledge: 10000, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.85e6, delusionPerSecond: 1.19e6, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1.7e6, hopiumPerSecond: 2.25, knowledgePerSecond: 0.000013, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/spotify_wrapped.jpg",
    },
    {
        name: "Free Trial",
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 2e11, knowledge: 25000, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 9.7e6, delusionPerSecond: 0, yachtMoneyPerSecond: 1.77e6, trollPointsPerSecond: 0, hopiumPerSecond: 2, knowledgePerSecond: 0.000014, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/free_trial.jpg",
    },
    {
        name: "Shooter Dad",
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 5e11, knowledge: 100000, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 1.44e7, trollPointsPerSecond: 0, hopiumPerSecond: 99.9, knowledgePerSecond: 0.000078, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/shooter_swag.jpg",
    },
    {
        name: "In the blink of an eye",
        cost: { copium: 0, delusion: 2e17, yachtMoney: 0, trollPoints: 5e17, hopium: 0, knowledge: 55000, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 6e7, delusionPerSecond: 0, yachtMoneyPerSecond: 2.2e7, trollPointsPerSecond: 0, hopiumPerSecond: 1, knowledgePerSecond: 0.0001, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/blink_of_an_eye.jpg",
    },
    {
        name: "Build a Base",
        cost: { copium: 8e17, delusion: 4e17, yachtMoney: 4e17, trollPoints: 8e17, hopium: 1e12, knowledge: 1, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -2.5e7, delusionPerSecond: 0, yachtMoneyPerSecond: -1.3e7, trollPointsPerSecond: -4e7, hopiumPerSecond: -75, knowledgePerSecond: 0.0019, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/all_your_base.jpg",
        hoverOverwrite: "Xy'løth Q'värk, F'näürg zxÿl-gørh'tha! Z'qúol b'zhåk vi'krêth, nx'tuöl j'dä!",
    },
    {
        name: "NGU Idle",
        cost: { copium: 8e17, delusion: 3.5e17, yachtMoney: 3.5e17, trollPoints: 8e17, hopium: 1e12, knowledge: 6e7, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 9.6e7, delusionPerSecond: 4.7e7, yachtMoneyPerSecond: 7.5e7, trollPointsPerSecond: 1.8e8, hopiumPerSecond: 800, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/ngu_idle.jpg",
        message: `Congratulations on unlocking the "NGU Idle" upgrade! This upgrade is a tribute to one of the greatest idle games ever. NGU Idle, known for its deep mechanics and quirky humor, has set a high standard in the idle game genre.<br><br>Here's to celebrating a game that has set a high bar for idle games everywhere. Enjoy the nostalgia and the boost it brings to your Degens Idle journey -- you may now watch all your Numbers Go Up!`,
    },
    {
        name: "Unlimited Power",
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 3.33333e-9, serenity: 0 },
        earnings: { copiumPerSecond: 2.5e6, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1.55e7, hopiumPerSecond: 1.9, knowledgePerSecond: 0.000018, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/unlimited_power.jpg",
        message: `<p>As the gears of progress click into place, you feel a surge of energy coursing through your veins. The very essence of the universe seems to hum in harmony with your newfound abilities. "All you know for now is that power is unlocked," echoes a distant voice in your mind, as if whispered by the ancients who have tread this path before you.</p>
                <p>Gaining power feels good—no, it feels exhilarating. You sense the weight of the world lifting, replaced by a tantalizing promise of untapped potential. This isn't just strength; it's an awakening, a key to doors that were previously hidden in the shadows of your ignorance.</p>
                <p>Yet, with this surge of power comes a gnawing question: What does it do? The answers lie shrouded in mystery, hidden in the depths of this ever-evolving world. As you stand on the precipice of this new reality, you realize that your journey has only just begun. The true nature of this power remains elusive, but its promise is undeniable.</p>
                <p><strong>You notice that prestige and god-mode multipliers do not directly affect power generation - this must be something bigger than anything you have encountered so far!</strong></p>
                <p>Driven by curiosity and a burning desire to uncover the secrets that lie ahead, you must find out soon. Each step forward brings you closer to the answers, each discovery a piece of the grand puzzle. Embrace this newfound power, for it is both a gift and a challenge—a test to see if you can wield it wisely.</p>
                `,
    },
    {
        name: "Honest Work",
        cost: { copium: 0, delusion: 0, yachtMoney: 1.6e18, trollPoints: 0, hopium: 4.3e13, knowledge: 2.25e8, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5.1e6, delusionPerSecond: 1.95e7, yachtMoneyPerSecond: 5.3e6, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0.00036, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/honest_work.jpg",
    },
    {
        name: "Never Admit Mistakes",
        cost: { copium: 8e18, delusion: 5e18, yachtMoney: 0, trollPoints: 0, hopium: 2e13, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 8.9e7, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 9.3e7, hopiumPerSecond: 0, knowledgePerSecond: 0.0014, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/marv.jpg",
    },
    {
        name: "McDonalds Diet",
        cost: { copium: 9e18, delusion: 9e18, yachtMoney: 3e18, trollPoints: 0, hopium: 3e13, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5.82e7, delusionPerSecond: 4.2e7, yachtMoneyPerSecond: 0, trollPointsPerSecond: 8.5e7, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/mcdonalds.jpg",
    },
    {
        name: "Careful Planning Time",
        cost: { copium: 3e19, delusion: 1.4e19, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 3.1e8, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: -1e7, trollPointsPerSecond: 3.4e8, hopiumPerSecond: 2500, knowledgePerSecond: 0.00092, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/leeroy_jenkins.jpg",
    },
    {
        name: "First Pizza Meme",
        cost: { copium: 2.5e19, delusion: 0, yachtMoney: 2.5e19, trollPoints: 5e19, hopium: 2e14, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 6.5e7, delusionPerSecond: 0, yachtMoneyPerSecond: -1e7, trollPointsPerSecond: 9e7, hopiumPerSecond: 0, knowledgePerSecond: 0.002, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/first_pizza_meme.jpg",
    },
    {
        name: "Still very stupid",
        cost: { copium: 0, delusion: 1.8e19, yachtMoney: 0, trollPoints: 0, hopium: 1.8e15, knowledge: 1.8e9, power: 1.8e-7, serenity: 0 },
        earnings: { copiumPerSecond: 5.8e7, delusionPerSecond: 5.8e7, yachtMoneyPerSecond: 7.8e7, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0.0031, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/young_stupid.jpg",
    },
    {
        name: "Change My Mind",
        cost: { copium: 0, delusion: 2e19, yachtMoney: 1e19, trollPoints: 7e19, hopium: 0, knowledge: 3e8, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 18000, knowledgePerSecond: 0.0023, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/change_my_mind.jpg",
    },
    {
        name: "Impossible",
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 1, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: -250000, knowledgePerSecond: 99, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/impossible.jpg",
        // message: `Lol, cheater! Instead of cheating why don't you hop in discord and suggest future memes!`,

    },
    {
        name: "Where did the time go?",
        cost: { copium: 7e19, delusion: 7e19, yachtMoney: 3e19, trollPoints: 0, hopium: 8e14, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 4.5e7, delusionPerSecond: 2e7, yachtMoneyPerSecond: 2e7, trollPointsPerSecond: 9e7, hopiumPerSecond: 0, knowledgePerSecond: 0.003, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/momoa_cavill.jpg",
    },
    {
        name: "Mosquito",
        cost: { copium: 3e19, delusion: 3e19, yachtMoney: 3e19, trollPoints: 3e19, hopium: 3e14, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -1.3e12, delusionPerSecond: -1.3e12, yachtMoneyPerSecond: -1.3e12, trollPointsPerSecond: -1.3e12, hopiumPerSecond: -1.3e7, knowledgePerSecond: 13, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/mosquito.jpg",
        hoverOverwrite: "DO NOT BUY THIS UPGRADE UNLESS YOU ARE ABSOLUTELY CERTAIN YOU CAN HANDLE IT",
        message: `WHY? Why did you buy this upgrade? I explicitly told you not to. Now, mosquitoes are a part of your universe. Seriously, what were you thinking? These little bloodsuckers are everywhere now, and let me tell you, no good can come from that. Enjoy the endless itching and buzzing in your ears at night. If you ever get a chance for a do-over, hopefully, you’ll have learned your lesson. Until then, welcome to Mosquito Madness!`,
    },
    {
        name: "Mistakes",
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 1e20, hopium: 2e15, knowledge: 5e8, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 7.7e7, yachtMoneyPerSecond: 7.7e7, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/mistakes.jpg",
        hoverOverwrite: "Don't be hard on yourself, everyone makes mistakes",
    },
    {
        name: "Increlution",
        cost: { copium: 9e19, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 1e16, knowledge: 1e9, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 2e7, yachtMoneyPerSecond: 4e7, trollPointsPerSecond: 9e7, hopiumPerSecond: -6000, knowledgePerSecond: 0.0024, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/increlution.jpg",
        hoverOverwrite: "Purchase Early Access",
        message: "Increlution is an incremental game that blends survival and strategy. Players gather resources, build structures, and fend off threats in a post-apocalyptic world, unlocking new technologies and abilities as they progress. Tragically, just like this upgrade image, the game was left in an unfinished state after collecting profits from early access sales, leaving fans hoping for future updates that may never come.",
    },
    {
        name: "Bruh",
        cost: { copium: 1e20, delusion: 1e20, yachtMoney: 1e20, trollPoints: 1e20, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 9e7, delusionPerSecond: 9e7, yachtMoneyPerSecond: 9e7, trollPointsPerSecond: 9e7, hopiumPerSecond: 0, knowledgePerSecond: 0.02, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/bruh.jpg",
    },
    {
        name: "BRUHHHH",
        cost: { copium: 1e21, delusion: 1e21, yachtMoney: 1e21, trollPoints: 1e21, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 7e8, delusionPerSecond: 7e8, yachtMoneyPerSecond: 7e8, trollPointsPerSecond: 7e8, hopiumPerSecond: 0, knowledgePerSecond: 0.07, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/bruhhh.jpg",
    },
    {
        name: "That Horrible Feeling",
        cost: { copium: 1e21, delusion: 0, yachtMoney: 0, trollPoints: 5e21, hopium: 1e16, knowledge: 1e9, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 9e8, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 8e8, hopiumPerSecond: 0, knowledgePerSecond: 0.03, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/username_taken.jpg",
    },
    {
        name: "One Does Not Simply",
        cost: { copium: 5e20, delusion: 0, yachtMoney: 2e21, trollPoints: 0, hopium: 1e16, knowledge: 1.5e9, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.2e9, delusionPerSecond: 0, yachtMoneyPerSecond: 5.5e8, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0.01, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/one_does_not_simply.jpg",
    },
    {
        name: "Motherly Love",
        cost: { copium: 1e21, delusion: 8e20, yachtMoney: 0, trollPoints: 0, hopium: 3e16, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 4e9, delusionPerSecond: 2.2e9, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/motherly_love.jpg",
    },
    {
        name: "School of Life",
        cost: { copium: 0, delusion: 3e20, yachtMoney: 2.5e20, trollPoints: 1.4e21, hopium: 0, knowledge: 5e9, power: 1e-6, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 5e8, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0.5, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/drake_learning.jpg",
    },
    {
        name: "Christian Logic",
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 1.01e23, hopium: 0, knowledge: 3e13, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.01e10, delusionPerSecond: 0, yachtMoneyPerSecond: 3e9, trollPointsPerSecond: 7.5e9, hopiumPerSecond: 0, knowledgePerSecond: 0.285, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/christian_logic.jpg",
    },
    {
        name: "Kamala 2024",
        cost: { copium: 8.1e23, delusion: 0, yachtMoney: 0, trollPoints: 6e23, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 2e10, delusionPerSecond: 0, yachtMoneyPerSecond: -5e9, trollPointsPerSecond: 4e9, hopiumPerSecond: -8000, knowledgePerSecond: 0.1, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/kool_aid.jpg",
    },
    {
        name: "Price of Freedom",
        cost: { copium: 0, delusion: 0, yachtMoney: 6.66e23, trollPoints: 0, hopium: 0, knowledge: 1.3e14, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 2e10, delusionPerSecond: 1e10, yachtMoneyPerSecond: -5e9, trollPointsPerSecond: 1e9, hopiumPerSecond: 0, knowledgePerSecond: 0.1, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/pope_vs_got.jpg",
    },
    {
        name: "Job Application #3",
        cost: { copium: 9.9e24, delusion: 9.9e24, yachtMoney: 0, trollPoints: 1e24, hopium: 1e19, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 1e11, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 1.7, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/job_application_3.jpg",
        hoverOverwrite: "A few minor surgeries and forged documents later... will 3rd time be the charm?",
        message: "We are delighted to inform you that you have been selected for the position of Chief Fun Officer at Acme Corporation! Your enthusiasm, creativity, and qualifications have truly impressed us, and we can't wait to see you bring your unique flair to our team.<br><br>We want to emphasize that our decision was based solely on your exceptional skills and experience. It had absolutely nothing to do with your sexual preferences, skin color, or gender. At Acme Corporation, we pride ourselves on our commitment to inclusivity and equality, ensuring that everyone has an equal opportunity to shine.<br><br>We believe that you will be a fantastic addition to our diverse and dynamic team. We look forward to seeing the innovative and fun ideas you will bring to our projects. Get ready to join us in making work a lot more exciting!",
    },
    {
        name: "Transcendence",
        cost: { copium: 2.5e25, delusion: 2.5e25, yachtMoney: 2.5e25, trollPoints: 2.5e25, hopium: 2.5e19, knowledge: 2.5e16, power: 1.5e-4, serenity: 0 },
        earnings: { copiumPerSecond: 10, delusionPerSecond: 10, yachtMoneyPerSecond: 10, trollPointsPerSecond: 10, hopiumPerSecond: 10, knowledgePerSecond: 1, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/transcendence.jpg",
        hoverOverwrite: "Can you feel the quantum entanglement?",
        message: "Through meticulous exploration and relentless curiosity, you've uncovered a mind-bending revelation: your universe is quantum entangled with another. These parallel universes, though they coexist with minimal interaction, are now within your reach to manipulate. By ascending to god-mode in this parallel universe, you can harness the power of quantum entanglement, effectively amplifying your multiplier and enhancing your upgrades in your own universe—all without the need to Big Crunch your current reality.<br><br>Transcendence isn’t just a step forward; it’s a leap across the very fabric of reality itself. Are you ready to transcend the limits of one universe and unlock the boundless potential of two?",
    },
    {
        name: "The M Word",
        cost: { copium: 4e26, delusion: 2e26, yachtMoney: 7e26, trollPoints: 2.5e26, hopium: 5e20, knowledge: 2e16, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 3.5e10, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1.5e10, hopiumPerSecond: 0, knowledgePerSecond: 3.5, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/the_m_word.jpg",
    },
    {
        name: "Degens Idle Dev #2",
        cost: { copium: 1.3e30, delusion: 5e30, yachtMoney: 3.2e31, trollPoints: 5e30, hopium: 2e24, knowledge: 1.8e21, power: 5e-3, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 2.5e13, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 20, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/most_interesting_man_2.jpg",
    },
    {
        name: "Helpful Vegeta",
        cost: { copium: 9e35, delusion: 9e35, yachtMoney: 9e36, trollPoints: 0, hopium: 0, knowledge: 9e24, power: 9e-2, serenity: 0 },
        earnings: { copiumPerSecond: 9e12, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 9e12, hopiumPerSecond: 9e6, knowledgePerSecond: 40, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/over_9000.jpg",
        message: `As you traverse the realms of power, confident in your unmatched strength, you suddenly sense a presence unlike any other—a being who, for the first time in ages, feels stronger than you. Your confidence wavers for just a moment, and then you see him. Standing before you, arms crossed and an impossibly intense glare fixed on you, is none other than a Super Saiyan.<br><br>"Well, well, well," he sneers, his voice dripping with condescension. "Looks like someone’s been working out. But don’t get too full of yourself, rookie. I’m only here to help because, frankly, watching you struggle is getting a little sad."<br><br>You try to retort, but his energy is overwhelming. It’s clear that despite his attitude, this guy knows what he’s talking about. With a sigh, he flicks his hair back, casually pointing a thumb at the towering Hall of Power in the distance. "Listen up, weakling," he says. "You’ll never get in there until your power level is over 9000. So, do us all a favor and start training."<br><br>As he flies off into the distance, leaving you with a mix of frustration and begrudging respect, you realize that, annoying as he is, this guy might actually be your ticket to true power. Time to push yourself beyond your limits—because the Hall of Power isn’t going to open its doors to just anyone.`
    },
    
    {
        name: "Soothing Realization",
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 5e31, knowledge: 2.5e23, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.5e12, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 1.5e7, knowledgePerSecond: 40, powerPerSecond: 0, serenityPerSecond: 0 },
        img: "imgs/how_i_sleep_knowing.jpg",
    },
    // {
    //     name: "Peaceful Round of Golf",
    //     cost: { copium: 3500, delusion: 7500, yachtMoney: 8000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
    //     earnings: { copiumPerSecond: -30, delusionPerSecond: 20, yachtMoneyPerSecond: 0, trollPointsPerSecond: 65, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
    //     img: "imgs/andrew_tate.jpg",
    // },
    // {
    //     name: "His Power Level is...",
    //     cost: { copium: 500, delusion: 0, yachtMoney: 250, trollPoints: 700, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
    //     earnings: { copiumPerSecond: 3, delusionPerSecond: -25, yachtMoneyPerSecond: 10, trollPointsPerSecond: 26, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
    //     img: "imgs/over_9000.jpg",
    //     hoverOverwrite: "GOING ON MUTE!",
    // },
    // {
    //     name: "Haven't Smoked Foool (not done)",
    //     cost: { copium: 1e15, delusion: 1e15, yachtMoney: 1e15, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
    //     earnings: { copiumPerSecond: 1, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
    //     img: "imgs/ez_blunt.jpg",
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
