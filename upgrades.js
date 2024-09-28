const upgrades = [
    {
        name: `So what do I do here?`,
        cost: { copium: 2, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.4, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0.8, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/john_travolta.jpg`,
        message: `imgs/modal_imgs/howtoplay.jpg`,
    },
    {
        name: `You made it`,
        cost: { copium: 10, delusion: 0, yachtMoney: 0, trollPoints: 6, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0.3, delusionPerSecond: 0.6, yachtMoneyPerSecond: 0.6, trollPointsPerSecond: 1.4, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/leo.jpg`,
        message: `<p>Welcome to the start of your epic journey. Whether you’re here for the memes, the deep existential pondering, or just to click things—cheers to you! 🍷 </p>
                    <p>But don’t get too comfortable! Ahead lie challenges that will test your wit, patience, and strategic thinking. There will be walls to break through, and the path forward isn’t always a straight line. But hey, if Leo can win an Oscar, you can solve a few strategic puzzles, right?</p>
                    <p>Let the games begin—click, explore, and outsmart every obstacle in your way!</p>`,
    },
    {
        name: `Foreshadowing`,
        cost: { copium: 8, delusion: 8, yachtMoney: 8, trollPoints: 8, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.8, delusionPerSecond: 2.4, yachtMoneyPerSecond: 1.8, trollPointsPerSecond: 0.6, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/distracted_boyfriend.jpg`,
    },
    {
        name: `Decisions, decisions...`,
        cost: { copium: 0, delusion: 25, yachtMoney: 25, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.3, delusionPerSecond: 1.3, yachtMoneyPerSecond: 1.5, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/two_buttons.jpg`,     
    },
    {
        name: `GameStop`,
        cost: { copium: 10, delusion: 0, yachtMoney: 40, trollPoints: 35, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1, delusionPerSecond: 0, yachtMoneyPerSecond: 6.3, trollPointsPerSecond: 1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/GameStop.jpg`,
    },
    {
        name: `What is DEGENS?`,
        cost: { copium: 100, delusion: 90, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 2.5, delusionPerSecond: 5.3, yachtMoneyPerSecond: 2.4, trollPointsPerSecond: 3.2, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },   
        img: `imgs/modal_imgs/DEGENS_IDLE.jpg`,
        message: `imgs/modal_imgs/DEGENS_IDLE.jpg`,
    },
    {
        name: `Not All Trolls Are Bad`,
        cost: { copium: 0, delusion: 380, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 4.2, delusionPerSecond: 0, yachtMoneyPerSecond: 2, trollPointsPerSecond: 4.2, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/happy_troll.jpg`,
    },
    {
        name: `Music`,
        cost: { copium: 100, delusion: 25, yachtMoney: 150, trollPoints: 25, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 7.4, delusionPerSecond: 0, yachtMoneyPerSecond: 0.4, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/linkin_park.jpg`,
    },
    {
        name: `Clickable`,
        cost: { copium: 250, delusion: 150, yachtMoney: 150, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 2.8, delusionPerSecond: 3.7, yachtMoneyPerSecond: 4.5, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/click.jpg`,
        message: `Some upgrades come with special messages that enhance your experience. These messages might reveal lore, explain new game features, or provide valuable insights—just like this one. You’ll only see these messages the first time you purchase an upgrade, but don’t worry if you miss something! You can always click the upgrade in the purchased section to view the messages again.`,
    },
    {
        name: `Alt Coins`,
        cost: { copium: 0, delusion: 0, yachtMoney: 900, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 25, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/alt_coins.jpg`,
    },
    {
        name: `Paid Email Service`,
        cost: { copium: 1000, delusion: 0, yachtMoney: 0, trollPoints: 150, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0.8, delusionPerSecond: 8.8, yachtMoneyPerSecond: -2.5, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/proton.jpg`,
    },
    {
        name: `Negative Gains?`,
        cost: { copium: 500, delusion: 0, yachtMoney: 250, trollPoints: 700, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 4, delusionPerSecond: -24, yachtMoneyPerSecond: 10, trollPointsPerSecond: 29, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/this_is_fine.jpg`,
        hoverOverwrite: `How am I supposed to progress in this game?`,
        message: `Be cautious—some upgrades may come with negative gains, including this one. While you can hover over most upgrades to preview their earnings, the hover information for some, like this one, is intentionally obfuscated. Keep those in mind as you progress. However, rest assured that <strong>ALL</strong> upgrades are a net positive at some point in the game—there isn’t a single one that is always bad. Also, while it’s possible to make vital mistakes, the game remains mostly forgiving, and there are many paths to victory.`,
    },
    {
        name: `Influencer Education`,
        cost: { copium: 300, delusion: 400, yachtMoney: 1000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5, delusionPerSecond: 9, yachtMoneyPerSecond: -8, trollPointsPerSecond: 23, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/pyramid_scheme.jpg`,
    },
    {
        name: `Hard Work ≠ Success`,
        cost: { copium: 2000, delusion: 0, yachtMoney: 1400, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10, delusionPerSecond: -5, yachtMoneyPerSecond: 5, trollPointsPerSecond: 5, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/hard_to_swallow.jpg`,
        hoverOverwrite: `But work hard anyway!`,
    },
    {
        name: `Captain Degen`,
        cost: { copium: 1000, delusion: 1000, yachtMoney: 1000, trollPoints: 1000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10, delusionPerSecond: 10, yachtMoneyPerSecond: 10, trollPointsPerSecond: 10, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/captain_degen.jpg`,
        achievement: 'Grasshopper',
    },
    {
        name: `Swing and a Miss`,
        cost: { copium: 2400, delusion: 1600, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 18.5, delusionPerSecond: 14, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/swing_and_a_miss.jpg`,
    },
    {
        name: `The Savior`,
        cost: { copium: 0, delusion: 0, yachtMoney: 2500, trollPoints: 2500, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 8.9, delusionPerSecond: 8.9, yachtMoneyPerSecond: -10, trollPointsPerSecond: 3.5, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/the_savior.jpg`,
    },
    {
        name: `Real Investments`,
        cost: { copium: 2000, delusion: 0, yachtMoney: 1000, trollPoints: 2000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5, delusionPerSecond: 0, yachtMoneyPerSecond: 29, trollPointsPerSecond: 5, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/nvidia.jpg`,
        hoverOverwrite: `Investments = Good`,
    },
    {
        name: `A Like is a Like`,
        cost: { copium: 5000, delusion: 2000, yachtMoney: 1500, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 37, delusionPerSecond: 26, yachtMoneyPerSecond: -3, trollPointsPerSecond: -3, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/liking_own_posts.jpg`,
    },
    {
        name: `Mail-Order Bride`,
        cost: { copium: 3000, delusion: 3000, yachtMoney: 3000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 30, yachtMoneyPerSecond: -14, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/90_day_fiance.jpg`,
    },
    {
        name: `VR Life`,
        cost: { copium: 5000, delusion: 0, yachtMoney: 4000, trollPoints: 1500, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 22, delusionPerSecond: 6.9, yachtMoneyPerSecond: 0, trollPointsPerSecond: 2.6, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/vr_porn.jpg`,
    },
    {
        name: `Deal with the devil`,
        cost: { copium: 0, delusion: 0, yachtMoney: 12000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -1, delusionPerSecond: 2, yachtMoneyPerSecond: 2, trollPointsPerSecond: 1.5, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/warren_buffet.jpg`,
        hoverOverwrite: `It's just your soul...`,
    },
    {
        name: `New Subreddit Discovery`,
        cost: { copium: 10000, delusion: 0, yachtMoney: 666, trollPoints: 2000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 88, delusionPerSecond: 2, yachtMoneyPerSecond: 0, trollPointsPerSecond: -2, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/new_subreddit.jpg`,
    },
    {
        name: `King of Delusion`,
        cost: { copium: 0, delusion: 10000, yachtMoney: 3000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 3, delusionPerSecond: 99, yachtMoneyPerSecond: 3, trollPointsPerSecond: -9, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/king_of_delusion.jpeg`,
        hoverOverwrite: `Probably gives lots of delusion`,
    },
    {
        name: `Suss`,
        cost: { copium: 11000, delusion: 0, yachtMoney: 0, trollPoints: 5000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 22.5, delusionPerSecond: -6, yachtMoneyPerSecond: 0, trollPointsPerSecond: 38, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/morty.jpg`,
    },
    {
        name: `Can't Unsee This`,
        cost: { copium: 1234, delusion: 0, yachtMoney: 7777, trollPoints: 7777, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10, delusionPerSecond: 0, yachtMoneyPerSecond: 33, trollPointsPerSecond: 33, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/luigis_idol.jpg`,
    },
    {
        name: `What Other Multiplier?`,
        cost: { copium: 3500, delusion: 7500, yachtMoney: 8000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -25, delusionPerSecond: 25, yachtMoneyPerSecond: 0, trollPointsPerSecond: 69, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/mocking_spongebob.jpg`,
    },
    {
        name: `I don't get this game`,
        cost: { copium: 5000, delusion: 5000, yachtMoney: 5000, trollPoints: 5000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -15, delusionPerSecond: 32, yachtMoneyPerSecond: 18, trollPointsPerSecond: 30, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/standard.jpg`,
    },
    {
        name: `Cookie Clicker`,
        cost: { copium: 30000, delusion: 10000, yachtMoney: 20000, trollPoints: 10000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1, delusionPerSecond: 1, yachtMoneyPerSecond: 1, trollPointsPerSecond: 1, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/cookie_clicker.jpg`,
        message: `In the vast world of idle games, one title stands as the beacon that lit the path for all others: Cookie Clicker. Launched in 2013, Cookie Clicker captivated millions with its simple yet endlessly engaging premise. The thrill of watching numbers grow, the joy of achieving milestones, and the addictiveness of endless clicking and upgrading—all these elements combined to create a phenomenon that transcended the gaming community.\n\nIn homage to this legendary game, you have now unlocked a cookie! Clicking this cookie will count as clicking each collect button 10 times! It will persist across Prestiges! Happy clicking!`,
        hoverOverwrite: `It's a cookie. Just eat it.`,
        achievement: 'Cookie Clicker',
    },
    {
        name: `Cosmetic Surgery`,
        cost: { copium: 28000, delusion: 28000, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 850, delusionPerSecond: 850, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/cosmetic_surgery.jpg`,
        message: `Congratulations on your bold transformation! It's natural to feel a little weaker—about 10% on a prestige multiplier scale—after undergoing significant cosmetic surgery. Just like recovering from any major procedure, your strength and confidence will gradually return.<br><br>This temporary adjustment is a gentle reminder that even extraordinary changes come with phases of recovery. Embrace this period of healing as a testament to your resilience. With time and patience, your full strength and beauty will shine through, stronger than ever.`,
        miniPrestigeMultiplier: 0.9,
        hoverOverwrite: `Just a quick snip`,
    },
    {
        name: `Ultimate Solution`,
        cost: { copium: 0, delusion: 25000, yachtMoney: 0, trollPoints: 80000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 89, delusionPerSecond: 96, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/use_useless.jpg`,
    },
    {
        name: `Job Application`,
        cost: { copium: 3000, delusion: 55000, yachtMoney: 0, trollPoints: 69000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 270, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/job_application.jpg`,
    },
    {
        name: `Spit on that thang`,
        cost: { copium: 100000, delusion: 0, yachtMoney: 25000, trollPoints: 50000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 75, delusionPerSecond: 0, yachtMoneyPerSecond: 48, trollPointsPerSecond: 48, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/hawk_tuah.jpg`,
        hoverOverwrite: `HAWK TUAH`,
    },
    {
        name: `Fully Autonomous Cars`,
        cost: { copium: 80000, delusion: 80000, yachtMoney: 10000, trollPoints: 25000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 60, delusionPerSecond: 15, yachtMoneyPerSecond: 30, trollPointsPerSecond: 20, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/elon_tesla.jpg`,
    },
    {
        name: `I'm gonna come`,
        cost: { copium: 75000, delusion: 75000, yachtMoney: 0, trollPoints: 50000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -40, delusionPerSecond: 0, yachtMoneyPerSecond: -160, trollPointsPerSecond: 600, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/do_not_come.jpg`,
    },
    {
        name: `BrOadEn IN God`,
        cost: { copium: 150000, delusion: 20000, yachtMoney: 20000, trollPoints: 40000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 400, delusionPerSecond: 200, yachtMoneyPerSecond: -10, trollPointsPerSecond: 225, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/boeing.jpg`,
    },
    {
        name: `Do not come!`,
        cost: { copium: 300000, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 112, yachtMoneyPerSecond: 250, trollPointsPerSecond: 112, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/im_gonna_come.jpg`,
    },
    {
        name: `Ascension`,
        cost: { copium: 99999, delusion: 99999, yachtMoney: 99999, trollPoints: 99999, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10, delusionPerSecond: 10, yachtMoneyPerSecond: 10, trollPointsPerSecond: 10, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/ascension.jpg`,
        message: `<p>Congratulations, brave soul! With the purchase of the Ascension upgrade, you have unlocked the extraordinary ability to Ascend Above Mortals and enter the revered God Mode. Prepare yourself for an epic journey where the limits of mortality no longer bind you.</p>
                    <p>Your intuition whispers:<span style="color: #40E0D0;"> I think the optimum strategy is for the first few ascensions to be taken as soon as possible.</span></p>
                    <p>Welcome to the next chapter of your legendary adventure. Ascend and let your godlike journey begin!</p>`,
    },
    {
        name: `420`,
        cost: { copium: 420000, delusion: 420000, yachtMoney: 420000, trollPoints: 420000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 420, delusionPerSecond: 420, yachtMoneyPerSecond: 420, trollPointsPerSecond: 420, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/blaze_it.jpg`,
    },
    {
        name: `Proceed with Caution`,
        cost: { copium: 1000000, delusion: 0, yachtMoney: 0, trollPoints: 1000000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 60, delusionPerSecond: 0, yachtMoneyPerSecond: 400, trollPointsPerSecond: 100, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/proceed_with_caution.jpg`,
        message: `<p>You've just permanently unlocked the <strong>"Buy Seen"</strong> and <strong>"Buy Max"</strong> buttons. These will help you speed up your progress by purchasing all affordable upgrades with a single click. However, <strong>be cautious</strong>—for now, these buttons will also buy upgrades that might work against you. Choose wisely!</p>
                    <p><strong>Hint 1:</strong> You can press <strong>S</strong> and <strong>M</strong> on your keyboard to quickly use these features.</p>
                    <p><strong>Hint 2:</strong> A setting to exclude specific upgrades you don’t want will be unlockable soon!</p>`,
    },
    {
        name: `WE MADE IT!`,
        cost: { copium: 1000000, delusion: 1000000, yachtMoney: 1000000, trollPoints: 1000000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 99, delusionPerSecond: 99, yachtMoneyPerSecond: 99, trollPointsPerSecond: 99, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/titanic.jpg`,
        hoverOverwrite: `Thank you for playing. The good news is, you have only scratched the surface. Wouldn't even say you have completed the tutorial.`,
    },
    {
        name: `Rewriting History`,
        cost: { copium: 5000000, delusion: 0, yachtMoney: 1000000, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 255, delusionPerSecond: 0, yachtMoneyPerSecond: 1200, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/rewriting_history.jpg`,
    },
    {
        name: `Hunt for Osama`,
        cost: { copium: 5000000, delusion: 1000000, yachtMoney: 5000000, trollPoints: 5000000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 6000, delusionPerSecond: 6000, yachtMoneyPerSecond: 6000, trollPointsPerSecond: 6000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/osama.jpg`,
        message: `As you finally corner Osama in a remote mountain hideout, you prepare for a decisive confrontation. However, instead of fighting back, Osama drops his weapon and raises a white flag. With sincerity in his eyes, he says, \"I'm a changed man. All I want now is World Peace.\"<br><br>Caught off guard, you sense the truth in his words, feeling the weight of his genuine remorse. With a heavy heart, you choose to spare him, setting the stage for an unexpected alliance that could reshape the future. This pivotal moment challenges your perception of justice and redemption.`,
    },
    {
        name: `Hunt for Hussein`,
        cost: { copium: 10000000, delusion: 10000000, yachtMoney: 10000000, trollPoints: 10000000, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 480000, delusionPerSecond: 240000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 360000, hopiumPerSecond: -0.1, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/obama.jpg`,
        message: `Desperate to eliminate the ruthless terrorist Saddam <b>Hussein</b>, you hire a team of elite hitmen. The mission seems straightforward until a devastating mistake changes everything.<br>The hitmen, due to a grave error, confuse their target with Barrack <b>Hussein</b> Obama, a prominent humanitarian and beacon of hope in the war-torn region. When the news breaks that Obama has been assassinated, the world plunges into despair. The humanitarian's death leaves a void, extinguishing the hope he brought to countless lives.<br>As you watch the consequences of this tragic error unfold, you grapple with guilt and the profound realization that sometimes, the lines between good and evil blur. The game takes you on a journey of redemption as you strive to undo the damage and restore hope to a world teetering on the brink of darkness.`,
        hoverOverwrite: `Think about this one`,
    },
    {
        name: `Trading Resources`,
        cost: { copium: 3.5e8, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 72000, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 53000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/trade_offer.jpg`,
        message: `Trading is essential to your success—at key moments in the game, it becomes a powerful tool to significantly boost your progress. By carefully selecting which resources to trade, you can strategically balance your reserves and enhance your overall strategy. Stay vigilant with your resource management, and make the most of trading opportunities to gain the upper hand when it matters most!`,
    },
    {
        name: `Job Application #2`,
        cost: { copium: 6e8, delusion: 9.5e8, yachtMoney: 0, trollPoints: 9.9e8, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 35000, delusionPerSecond: 35000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 35000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/job_application_2.jpg`,
    },
    {
        name: `Internet = Cats`,
        cost: { copium: 0, delusion: 0, yachtMoney: 1.1e9, trollPoints: 6e9, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 100000, delusionPerSecond: -4000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 45600, hopiumPerSecond: 0.001, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/cats_mice.jpg`,
    },
    {
        name: `Good Guy Sasuke`,
        cost: { copium: 9e9, delusion: 3e9, yachtMoney: 0, trollPoints: 0, hopium: 1, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 120000, delusionPerSecond: 0, yachtMoneyPerSecond: 120000, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/good_guy_sasuke.jpg`,
    },
    {
        name: `Where has he been?`,
        cost: { copium: 5e9, delusion: 1e9, yachtMoney: 1e9, trollPoints: 5e9, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: -2000, trollPointsPerSecond: 100000, hopiumPerSecond: 0.001, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/is_he_alive.jpg`,
    },
    {
        name: `It's group time!`,
        cost: { copium: 1e9, delusion: 5e8, yachtMoney: 5e8, trollPoints: 0, hopium: 3, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 18000, delusionPerSecond: 0, yachtMoneyPerSecond: 8000, trollPointsPerSecond: 18000, hopiumPerSecond: 0.002, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/joker.jpg`,
    },    
    {
        name: `How stupid was I?`,
        cost: { copium: 4e9, delusion: 0, yachtMoney: 0, trollPoints: 8e9, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 100000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 100000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/usernames.jpg`,
    },   
    {
        name: `Pre-AI Idols!`,
        cost: { copium: 1e10, delusion: 3e9, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 208000, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.001, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/pre-AI-idols.JPG`,
    },       
    {
        name: `Antimatter Dimensions`,
        cost: { copium: 1e10, delusion: 8e9, yachtMoney: 4e9, trollPoints: 1e10, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 650000, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.0015, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/antimatter_dimensions.jpg`,
        message: 
                `<p>
                    <strong>Antimatter Dimensions</strong> stands as a major milestone in the incremental and idle game genres. Its innovative gameplay and deep mechanics have set a new standard and significantly impacted these gaming communities.
                </p>                
                <p>
                    To unlock <strong>Knowledge</strong>, you must reach <strong>negative one Trillion delusion</strong>, demonstrating your commitment and skill.
                </p>
                <p><strong>Antimatter Dimensions</strong> has paved the way for innovations like <strong>Knowledge</strong>, expanding the horizons of incremental and idle gaming. Unlocking <strong>Knowledge</strong> highlights the game's ongoing evolution and celebrates the impact of <strong>Antimatter Dimensions</strong> on the genre.
                </p>`
    },  
    {
        name: `Degens Idle Dev`,
        cost: { copium: 4.8e11, delusion: 0, yachtMoney: 0, trollPoints: 3e11, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 620000, delusionPerSecond: 0, yachtMoneyPerSecond: 58000, trollPointsPerSecond: 0, hopiumPerSecond: 0.004, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/most_interesting_man.jpg`,
    },
    {
        name: `Don't fuck this up Netflix`,
        cost: { copium: 0, delusion: 8e10, yachtMoney: 2.9e11, trollPoints: 0, hopium: 2000, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 280000, delusionPerSecond: -50000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.004, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/3_body_problem.jpg`,
    },   
    {
        name: `Therapy`,
        cost: { copium: 0, delusion: 1e11, yachtMoney: 0, trollPoints: 0, hopium: 10000, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 500000, delusionPerSecond: -250000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.007, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/therapy.jpg`,
    },    
    {
        name: `Hypnosis`,
        cost: { copium: 1e12, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 10000, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: -250000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.01, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/hypnosis.jpg`,
    },  
    {
        name: `The Library`,
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 1, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0.011, knowledgePerSecond: 0.000001, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/the_library.jpg`,
        message: `By acquiring The Library upgrade, you have proven yourself worthy to enter the esteemed <b>Hall of Knowledge</b>. Your dedication and wisdom have granted you access to this sacred realm of enlightenment.`,
        hoverOverwrite: `You get the sense that buying this will unlock the Hall of Knowledge!`,
    },  
    {
        name: `Foreshadowing #2`,
        cost: { copium: 8e12, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 350000, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 550000, delusionPerSecond: 130000, yachtMoneyPerSecond: 105000, trollPointsPerSecond: 500000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/distracted_boyfriend_2.jpg`,
    }, 
    {
        name: `Melvor Idle`,
        cost: { copium: 1e14, delusion: 3e13, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 50, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1040000, delusionPerSecond: 0, yachtMoneyPerSecond: 500000, trollPointsPerSecond: 1040000, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/melvor.jpg`,
        hoverOverwrite: `I don't know. Never played it. Take some Copium.`,
    }, 
    {
        name: `Spring Break`,
        cost: { copium: 0, delusion: 0, yachtMoney: 8e12, trollPoints: 4e13, hopium: 100000, knowledge: 0.5, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 10400000, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 10000000, hopiumPerSecond: 0.1, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/spring_break.jpg`,
    },
    {
        name: `Oh Deer`,
        cost: { copium: 0, delusion: 100, yachtMoney: 0, trollPoints: 1e14, hopium: 1000000, knowledge: 7.5, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 152000, yachtMoneyPerSecond: 0, trollPointsPerSecond: 10800000, hopiumPerSecond: 0.2, knowledgePerSecond: 0.000002, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/oh_deer.jpg`,
    },
    {
        name: `Yom Kippur`,
        cost: { copium: 5e14, delusion: 0, yachtMoney: 5e13, trollPoints: 0, hopium: 500000, knowledge: 100, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1700000, delusionPerSecond: 280000, yachtMoneyPerSecond: 550000, trollPointsPerSecond: 390000, hopiumPerSecond: 0.04, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/yom_kippur.jpg`,
    },
    {
        name: `Hire an Assistant`,
        cost: { copium: 1e14, delusion: 0, yachtMoney: 5e13, trollPoints: 0, hopium: 3000000, knowledge: 150, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -4000000, delusionPerSecond: 0, yachtMoneyPerSecond: -500000, trollPointsPerSecond: 1.02e5, hopiumPerSecond: 0, knowledgePerSecond: 0.0000099, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/hire_employee.jpg`,
        hoverOverwrite: `Should be helpful right?`,
    },
    {
        name: `Hoverboard`,
        cost: { copium: 0, delusion: 0, yachtMoney: 1e14, trollPoints: 1e14, hopium: 5000000, knowledge: 75, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 1e6, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1e6, hopiumPerSecond: 0.3, knowledgePerSecond: 0.00001, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/hoverboard.jpg`,
        message: `imgs/modal_imgs/resource_hover.jpg`,
    },
    {
        name: `Cybertruck`,
        cost: { copium: 0, delusion: 0, yachtMoney: 3e14, trollPoints: 0, hopium: 10000000, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.05e7, delusionPerSecond: 1.65e6, yachtMoneyPerSecond: -100000, trollPointsPerSecond: 1.2e6, hopiumPerSecond: 0, knowledgePerSecond: 0.0000037, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/cybertruck.jpg`,
    },
    {
        name: `The Finale`,
        cost: { copium: 1e15, delusion: 1e15, yachtMoney: 1e15, trollPoints: 1e15, hopium: 1e8, knowledge: 10000, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 6.9e5, trollPointsPerSecond: 6.9e6, hopiumPerSecond: 0, knowledgePerSecond: 0.000026, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/rick_roll.jpg`,
        hoverOverwrite: `Thank you for playing...`,
        achievement: 'Get Rick Rolled',
        isKey: true,
    },
    {
        name: `Plot Twist?`,
        cost: { copium: 1e15, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 1e8, knowledge: 8000, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5.9e6, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 6.5, knowledgePerSecond: 0.000013, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/wait_theres_more.jpg`,
        message: `<p>You're less than 1% into this epic journey—what lies ahead will truly challenge you!</p>
                <p>Beyond this point, new prestige layers, intricate skill trees, powerful automations, and strategic puzzles await your brilliance. But that's not all—epic boss fights will test your strength, and you’ll uncover that this entire game is, at its core, a story of love.</p>
                <p>The real adventure is only just beginning. Are you ready to face the challenges and discover the heart of this tale?</p>`,
    },
    {
        name: `Spotify Wrapped`,
        cost: { copium: 1e15, delusion: 0, yachtMoney: 1e14, trollPoints: 0, hopium: 1e8, knowledge: 10000, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.99e6, delusionPerSecond: 1.19e6, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1.7e6, hopiumPerSecond: 2.25, knowledgePerSecond: 0.000014, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/spotify_wrapped.jpg`,
    },
    {
        name: `Free Trial`,
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 2e11, knowledge: 25000, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 9.7e6, delusionPerSecond: 0, yachtMoneyPerSecond: 1.77e6, trollPointsPerSecond: 0, hopiumPerSecond: 2.5, knowledgePerSecond: 0.000017, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/free_trial.jpg`,
    },
    {
        name: `Why Memes Though?`,
        cost: { copium: 1e16, delusion: 0, yachtMoney: 1e15, trollPoints: 0, hopium: 0, knowledge: 20000, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5e6, delusionPerSecond: 4e6, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 3, knowledgePerSecond: 0.00005, powerPerSecond: 0, serenityPerSecond: 0 },   
        img: `imgs/why_memes.jpg`,
        message: `<p>The internet is more than just a tool—it’s a pivotal stepping stone in our evolution and technological advancement. It’s where ideas are born, shared, and transformed, connecting minds across the globe. At the very core of this vast network lies the humble meme.</p>
                <p>Memes are the language of the internet, capturing complex ideas, emotions, and cultural moments in bite-sized, shareable formats. They spread faster than any traditional medium, influencing thoughts, trends, and even shaping societal narratives. In many ways, memes are the digital reflection of our collective consciousness.</p>
                <p>So, when embarking on a journey of existential discovery, how could we ignore something so integral to our shared online experience? Memes might seem simple, but they encapsulate the essence of what it means to be part of this interconnected, ever-evolving world. Without them, the journey would be missing a vital piece of the puzzle.</p>`,
    },
    {
        name: `Shooter Dad`,
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 5e11, knowledge: 100000, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 2.66e7, trollPointsPerSecond: 0, hopiumPerSecond: 135, knowledgePerSecond: 0.000278, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/shooter_swag.jpg`,
    },
    {
        name: `In the blink of an eye`,
        cost: { copium: 0, delusion: 2e17, yachtMoney: 0, trollPoints: 5e17, hopium: 0, knowledge: 55000, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 6e7, delusionPerSecond: 0, yachtMoneyPerSecond: 2.2e7, trollPointsPerSecond: 0, hopiumPerSecond: 1.5, knowledgePerSecond: 0.0001, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/blink_of_an_eye.jpg`,
    },
    {
        name: `Build a Base`,
        cost: { copium: 8e17, delusion: 4e17, yachtMoney: 4e17, trollPoints: 8e17, hopium: 1e12, knowledge: 1, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -2.5e7, delusionPerSecond: 0, yachtMoneyPerSecond: -1.3e7, trollPointsPerSecond: -4e7, hopiumPerSecond: -75, knowledgePerSecond: 0.0026, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/all_your_base.jpg`,
        hoverOverwrite: `Xy'løth Q'värk, F'näürg zxÿl-gørh'tha! Z'qúol b'zhåk vi'krêth, nx'tuöl j'dä!`,
        achievement: 'Build a Base',
    },
    {
        name: `NGU Idle`,
        cost: { copium: 8e17, delusion: 3.5e17, yachtMoney: 3.5e17, trollPoints: 8e17, hopium: 1e12, knowledge: 6e7, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 9.9e7, delusionPerSecond: 6.9e7, yachtMoneyPerSecond: 8.9e7, trollPointsPerSecond: 1.9e8, hopiumPerSecond: 800, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/ngu_idle.jpg`,
        message: `Congratulations on unlocking the "NGU Idle" upgrade! This upgrade is a tribute to one of the greatest idle games ever. NGU Idle, known for its deep mechanics and quirky humor, has set a high standard in the idle game genre.<br><br>Here's to celebrating a game that has set a high bar for idle games everywhere. Enjoy the nostalgia and the boost it brings to your Degens Idle journey -- you may now watch all your Numbers Go Up!`,
    },
    {
        name: `Unlimited Power`,
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 3.3e-9, serenity: 0 },
        earnings: { copiumPerSecond: 2.5e6, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1.55e7, hopiumPerSecond: 2.9, knowledgePerSecond: 0.000029, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/unlimited_power.jpg`,
        message: `<p>As the gears of progress click into place, you feel a surge of energy coursing through your veins. The very essence of the universe seems to hum in harmony with your newfound abilities. "All you know for now is that power is unlocked," echoes a distant voice in your mind, as if whispered by the ancients who have tread this path before you.</p>
                <p>Gaining power feels good—no, it feels exhilarating. You sense the weight of the world lifting, replaced by a tantalizing promise of untapped potential. This isn't just strength; it's an awakening, a key to doors that were previously hidden in the shadows of your ignorance.</p>
                <p>Yet, with this surge of power comes a gnawing question: What does it do? The answers lie shrouded in mystery, hidden in the depths of this ever-evolving world. As you stand on the precipice of this new reality, you realize that your journey has only just begun. The true nature of this power remains elusive, but its promise is undeniable.</p>
                <p><strong>You notice that prestige and god-mode multipliers do not directly affect power generation - this must be something bigger than anything you have encountered so far!</strong></p>
                <p>Driven by curiosity and a burning desire to uncover the secrets that lie ahead, you must find out soon. Each step forward brings you closer to the answers, each discovery a piece of the grand puzzle. Embrace this newfound power, for it is both a gift and a challenge—a test to see if you can wield it wisely.</p>
                `,
        achievement: 'Power Unlocked',
    },
    {
        name: `Honest Work`,
        cost: { copium: 0, delusion: 0, yachtMoney: 1.6e18, trollPoints: 0, hopium: 4.2e13, knowledge: 2.25e8, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 6.1e6, delusionPerSecond: 1.95e7, yachtMoneyPerSecond: 9.3e6, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0.00048, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/honest_work.jpg`,
    },
    {
        name: `Never Admit Mistakes`,
        cost: { copium: 8e18, delusion: 5e18, yachtMoney: 0, trollPoints: 0, hopium: 2e13, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 8.9e7, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 9.6e7, hopiumPerSecond: 0, knowledgePerSecond: 0.0014, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/marv.jpg`,
    },
    {
        name: `McDonalds Diet`,
        cost: { copium: 9e18, delusion: 9e18, yachtMoney: 3e18, trollPoints: 0, hopium: 3e13, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 6.8e7, delusionPerSecond: 4.5e7, yachtMoneyPerSecond: 0, trollPointsPerSecond: 8.5e7, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/mcdonalds.jpg`,
    },
    {
        name: `Careful Planning Time`,
        cost: { copium: 3e19, delusion: 1.4e19, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 3.1e8, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: -1e7, trollPointsPerSecond: 3.6e8, hopiumPerSecond: 2500, knowledgePerSecond: 0.00095, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/leeroy_jenkins.jpg`,
    },
    {
        name: `First Pizza Meme`,
        cost: { copium: 2.5e19, delusion: 0, yachtMoney: 2.5e19, trollPoints: 5e19, hopium: 2e14, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 7.5e7, delusionPerSecond: 0, yachtMoneyPerSecond: -1e7, trollPointsPerSecond: 9e7, hopiumPerSecond: 0, knowledgePerSecond: 0.002, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/first_pizza_meme.jpg`,
    },
    {
        name: `Still very stupid`,
        cost: { copium: 0, delusion: 1.8e19, yachtMoney: 0, trollPoints: 0, hopium: 1.8e15, knowledge: 1.8e9, power: 1.8e-7, serenity: 0 },
        earnings: { copiumPerSecond: 5.9e7, delusionPerSecond: 5.9e7, yachtMoneyPerSecond: 7.9e7, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0.0032, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/young_stupid.jpg`,
    },
    {
        name: `Change My Mind`,
        cost: { copium: 0, delusion: 2e19, yachtMoney: 1e19, trollPoints: 7e19, hopium: 0, knowledge: 3e8, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 18000, knowledgePerSecond: 0.0025, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/change_my_mind.jpg`,
    },
    {
        name: `Impossible`,
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 1, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: -1e8, knowledgePerSecond: 2000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/impossible.jpg`,
    },
    {
        name: `Where did the time go?`,
        cost: { copium: 7e19, delusion: 7e19, yachtMoney: 3e19, trollPoints: 0, hopium: 8e14, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 4.5e7, delusionPerSecond: 4.3e7, yachtMoneyPerSecond: 2e7, trollPointsPerSecond: 9e7, hopiumPerSecond: 0, knowledgePerSecond: 0.0033, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/momoa_cavill.jpg`,
    },
    {
        name: `Mosquito`,
        cost: { copium: 3e19, delusion: 3e19, yachtMoney: 3e19, trollPoints: 3e19, hopium: 3e14, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: -1.5e13, delusionPerSecond: -1.5e13, yachtMoneyPerSecond: -1.5e13, trollPointsPerSecond: -1.5e13, hopiumPerSecond: -1.5e8, knowledgePerSecond: 15, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/mosquito.jpg`,
        hoverOverwrite: `WARNING: BUY ONLY IF YOU HAVE A VERY SPECIFIC PLAN IN MIND`,
        message: `Why, oh why, did you go through with this? I warned you! Now, mosquitoes infest your universe, and trust me, they’re not here to help. What were you planning? Whatever it was, I hope it was worth the incessant buzzing and biting. If this was all part of some grand scheme, good luck—you'll need it. Otherwise, enjoy your itchy, sleepless nights. Mosquito Madness has begun, and there’s no turning back now. If you ever somehow get a chance for a do-over, hopefully, you'll have learned your lesson!`,
        achievement: 'Burn the World',
    },
    {
        name: `Mistakes`,
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 1e20, hopium: 2e15, knowledge: 5e8, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 7.7e7, yachtMoneyPerSecond: 7.7e7, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/mistakes.jpg`,
        hoverOverwrite: `Don't be hard on yourself, everyone makes mistakes`,
    },
    {
        name: `Increlution`,
        cost: { copium: 9e19, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 1e16, knowledge: 1e9, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 3e7, yachtMoneyPerSecond: 4e7, trollPointsPerSecond: 9e7, hopiumPerSecond: -6000, knowledgePerSecond: 0.0024, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/increlution.jpg`,
        hoverOverwrite: `Purchase Early Access`,
        message: `Increlution is an incremental game that blends survival and strategy. Players gather resources, build structures, and fend off threats in a post-apocalyptic world, unlocking new technologies and abilities as they progress. Tragically, just like this upgrade image, the game was left in an unfinished state after collecting profits from early access sales, leaving fans hoping for future updates that may never come.`,
    },
    {
        name: `Bruh`,
        cost: { copium: 1e20, delusion: 1e20, yachtMoney: 1e20, trollPoints: 1e20, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 9.8e7, delusionPerSecond: 9.8e7, yachtMoneyPerSecond: 9.8e7, trollPointsPerSecond: 9.8e7, hopiumPerSecond: 0, knowledgePerSecond: 0.0095, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/bruh.jpg`,
    },
    {
        name: `BRUHHHH`,
        cost: { copium: 1e21, delusion: 1e21, yachtMoney: 1e21, trollPoints: 1e21, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 8.5e8, delusionPerSecond: 8.5e8, yachtMoneyPerSecond: 8.5e8, trollPointsPerSecond: 8.5e8, hopiumPerSecond: 0, knowledgePerSecond: 0.075, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/bruhhh.jpg`,
    },
    {
        name: `That Horrible Feeling`,
        cost: { copium: 1e21, delusion: 0, yachtMoney: 0, trollPoints: 5e21, hopium: 1e16, knowledge: 1e9, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 9e8, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 9e8, hopiumPerSecond: 0, knowledgePerSecond: 0.045, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/username_taken.jpg`,
        hoverOverwrite: `What could be so bad?`,
    },
    {
        name: `One Does Not Simply`,
        cost: { copium: 5e20, delusion: 0, yachtMoney: 2e21, trollPoints: 0, hopium: 1e16, knowledge: 1.5e9, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.2e9, delusionPerSecond: 0, yachtMoneyPerSecond: 5.7e8, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0.037, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/one_does_not_simply.jpg`,
    },
    {
        name: `Motherly Love`,
        cost: { copium: 1e21, delusion: 8e20, yachtMoney: 0, trollPoints: 0, hopium: 3e16, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 4e9, delusionPerSecond: 2.2e9, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/motherly_love.jpg`,
    },
    {
        name: `School of Life`,
        cost: { copium: 0, delusion: 3e20, yachtMoney: 2.5e20, trollPoints: 1.4e21, hopium: 0, knowledge: 5e9, power: 1e-6, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 5e8, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0.54, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/drake_learning.jpg`,
    },
    {
        name: `Christian Logic`,
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 1.01e23, hopium: 0, knowledge: 3e13, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.01e10, delusionPerSecond: 0, yachtMoneyPerSecond: 3e9, trollPointsPerSecond: 7.5e9, hopiumPerSecond: 0, knowledgePerSecond: 0.325, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/christian_logic.jpg`,
    },
    {
        name: `Kamala 2024`,
        cost: { copium: 8.1e23, delusion: 0, yachtMoney: 0, trollPoints: 6e23, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 2e10, delusionPerSecond: 0, yachtMoneyPerSecond: -5e9, trollPointsPerSecond: 5e9, hopiumPerSecond: -7000, knowledgePerSecond: 0.23, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/kool_aid.jpg`,
    },
    {
        name: `Price of Freedom`,
        cost: { copium: 0, delusion: 0, yachtMoney: 6.66e23, trollPoints: 0, hopium: 0, knowledge: 1.3e14, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 2e10, delusionPerSecond: 1e10, yachtMoneyPerSecond: -5e9, trollPointsPerSecond: 1e9, hopiumPerSecond: 0, knowledgePerSecond: 0.58, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/pope_vs_got.jpg`,
    },
    {
        name: `Job Application #3`,
        cost: { copium: 9.9e24, delusion: 9.9e24, yachtMoney: 0, trollPoints: 1e24, hopium: 1e19, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 1e11, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 4, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/job_application_3.jpg`,
        hoverOverwrite: `A few minor surgeries and forged documents later... will 3rd time be the charm?`,
        message: `We are delighted to inform you that you have been selected for the position of Chief Fun Officer at Acme Corporation! Your enthusiasm, creativity, and qualifications have truly impressed us, and we can't wait to see you bring your unique flair to our team.<br><br>We want to emphasize that our decision was based solely on your exceptional skills and experience. It had absolutely nothing to do with your sexual preferences, skin color, or gender. At Acme Corporation, we pride ourselves on our commitment to inclusivity and equality, ensuring that everyone has an equal opportunity to shine.<br><br>We believe that you will be a fantastic addition to our diverse and dynamic team. We look forward to seeing the innovative and fun ideas you will bring to our projects. Get ready to join us in making work a lot more exciting!`,
    },
    {
        name: `Transcendence`,
        cost: { copium: 2.5e25, delusion: 2.5e25, yachtMoney: 2.5e25, trollPoints: 2.5e25, hopium: 2.5e19, knowledge: 2.5e16, power: 1.5e-4, serenity: 0 },
        earnings: { copiumPerSecond: 10, delusionPerSecond: 10, yachtMoneyPerSecond: 10, trollPointsPerSecond: 10, hopiumPerSecond: 10, knowledgePerSecond: 1, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/transcendence.jpg`,
        hoverOverwrite: `Can you feel the quantum entanglement?`,
        message: `Through meticulous exploration and relentless curiosity, you've uncovered a mind-bending revelation: your universe is quantum entangled with another. These parallel universes, though they coexist with minimal interaction, are now within your reach to manipulate. By ascending to god-mode in this parallel universe, you can harness the power of quantum entanglement, effectively amplifying your multiplier and enhancing your upgrades in your own universe—all without the need to Big Crunch your current reality.<br><br>Transcendence isn’t just a step forward; it’s a leap across the very fabric of reality itself. Are you ready to transcend the limits of one universe and unlock the boundless potential of two?`,
    },
    {
        name: `The M Word`,
        cost: { copium: 4e26, delusion: 2e26, yachtMoney: 7e26, trollPoints: 2.5e26, hopium: 5e20, knowledge: 1e17, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 3.5e10, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1.5e10, hopiumPerSecond: 0, knowledgePerSecond: 15, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/the_m_word.jpg`,
        message : `The Muppet pops up with a knowing smirk. "So, you’re hoarding Knowledge and Power like there’s no tomorrow, huh? Well, here’s a tip: when it comes to advanced resources, the more you stockpile beyond your earnings per second, the slower your gains will get—like trying to climb a hill made of jelly. Let’s just say, these fancy resources don’t like being hoarded too much."<br>"But don’t sweat it," the Muppet adds with a playful wink, "this won't mess with your regular gameplay. Just a little nudge to keep things balanced. And who knows... this might not be the last time you run into this little quirk with other advanced goodies down the road!"`,
    },
    {
        name: `Degens Idle Dev #2`,
        cost: { copium: 1.3e30, delusion: 5e30, yachtMoney: 3.2e31, trollPoints: 5e30, hopium: 2e24, knowledge: 1.8e21, power: 5e-3, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 3.6e13, trollPointsPerSecond: 1.8e11, hopiumPerSecond: 0, knowledgePerSecond: 250, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/most_interesting_man_2.jpg`,
    },
    {
        name: `Sneaky Eavesdrop`,
        cost: { copium: 0, delusion: 5e32, yachtMoney: 1e34, trollPoints: 5e30, hopium: 3e23, knowledge: 1e21, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.8e11, delusionPerSecond: 3e11, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1.5e12, hopiumPerSecond: 0, knowledgePerSecond: 75, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/earphones_on.jpg`,
    },
    {
        name: `It was only 4 items`,
        cost: { copium: 7e32, delusion: 0, yachtMoney: 8e34, trollPoints: 0, hopium: 0, knowledge: 6e23, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 1.3e12, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 85, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/forgetful_joe.jpg`,
    },
    {
        name: `Ok to be selfish?`,
        cost: { copium: 4e32, delusion: 0, yachtMoney: 0, trollPoints: 5e34, hopium: 0, knowledge: 0, power: 2e-3, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 1.3e13, trollPointsPerSecond: 5e12, hopiumPerSecond: 0, knowledgePerSecond: 145, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/selfish_food.jpg`,
    },
    {
        name: `How are you though?`,
        cost: { copium: 0, delusion: 5e33, yachtMoney: 1.7e36, trollPoints: 0, hopium: 0, knowledge: 2e25, power: 1.1e-2, serenity: 0 },
        earnings: { copiumPerSecond: 1.3e12, delusionPerSecond: 5e11, yachtMoneyPerSecond: 0, trollPointsPerSecond: 6.9e12, hopiumPerSecond: 150000, knowledgePerSecond: 170, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/cheesy_grate.jpg`,
    },
    {
        name: `Helpful Vegeta`,
        cost: { copium: 9e35, delusion: 9e35, yachtMoney: 9e36, trollPoints: 0, hopium: 0, knowledge: 9e25, power: 9e-2, serenity: 0 },
        earnings: { copiumPerSecond: 9e13, delusionPerSecond: 9e13, yachtMoneyPerSecond: 0, trollPointsPerSecond: 9e13, hopiumPerSecond: 9e7, knowledgePerSecond: 900, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/over_9000.jpg`,
        message: `As you traverse the realms of power, confident in your unmatched strength, you suddenly sense a presence unlike any other—a being who, for the first time in ages, feels stronger than you. Your confidence wavers for just a moment, and then you see him. Standing before you, arms crossed and an impossibly intense glare fixed on you, is none other than a Super Saiyan.<br><br>"Well, well, well," he sneers, his voice dripping with condescension. "Looks like someone’s been working out. But don’t get too full of yourself, rookie. I’m only here to help because, frankly, watching you struggle is getting a little sad."<br><br>You try to retort, but his energy is overwhelming. It’s clear that despite his attitude, this guy knows what he’s talking about. With a sigh, he flicks his hair back, casually pointing a thumb at the towering Hall of Power in the distance. "Listen up, weakling," he says. "You’ll never get in there until your power level is over 9000. So, do us all a favor and start training."<br><br>As he flies off into the distance, leaving you with a mix of frustration and begrudging respect, you realize that, annoying as he is, this guy might actually be your ticket to true power. Time to push yourself beyond your limits—because the Hall of Power isn’t going to open its doors to just anyone.`
    },
    {
        name: `Food + Cats = Profit?`,
        cost: { copium: 4e33, delusion: 0, yachtMoney: 0, trollPoints: 3e36, hopium: 0, knowledge: 0, power: 1e-1, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 2e13, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 400, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/food_plus_cats.jpg`,
    },
    {
        name: `Soothing Realization`,
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 5e31, knowledge: 2.5e25, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1.3e13, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 4.5e7, knowledgePerSecond: 240, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/how_i_sleep_knowing.jpg`,
    },
    {
        name: `Silence is Golden`,
        cost: { copium: 1e37, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 8e31, knowledge: 2e26, power: 1e-1, serenity: 0 },
        earnings: { copiumPerSecond: 3e14, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 3e14, hopiumPerSecond: 9e7, knowledgePerSecond: -250, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/silence_is_golden.jpg`,
    },
    {
        name: `You Can Never Tell`,
        cost: { copium: 1e38, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 8e32, knowledge: 2e27, power: 1e-1, serenity: 0 },
        earnings: { copiumPerSecond: 3e15, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 3e15, hopiumPerSecond: 0, knowledgePerSecond: -500, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/read_between_lines.jpg`,
    },
    {
        name: `When it hits you`,
        cost: { copium: 1.6e40, delusion: 0, yachtMoney: 0, trollPoints: 2.1e40, hopium: 3e32, knowledge: 0, power: 1, serenity: 0 },
        earnings: { copiumPerSecond: 3e15, delusionPerSecond: 0, yachtMoneyPerSecond: 5e15, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 4200, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/musk_realization.jpg`,
        message: `In a moment of clarity, you realize that reaching a power level of 9000 won’t come easily—you'll need to train harder than ever before. But as this truth sinks in, another thought surfaces: Why stop at 9000? If you're going to push yourself, why not aim for power levels that have never existed in the multiverse? <br><br>With renewed determination, you commit yourself to relentless training. You’ll seek out the strongest opponents, not just to test your might, but to shatter every limit. Because why settle for ordinary power when the extraordinary is within reach?`
    },
    {
        name: `Buy Apple Product`,
        cost: { copium: 1.3e41, delusion: 0, yachtMoney: 7.5e41, trollPoints: 0, hopium: 8e32, knowledge: 0, power: 0.5, serenity: 0 },
        earnings: { copiumPerSecond: 5e14, delusionPerSecond: 5e14, yachtMoneyPerSecond: 0, trollPointsPerSecond: 5e14, hopiumPerSecond: 0, knowledgePerSecond: 666, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/apple_mug.jpg`,
    },
    {
        name: `Training Dummy`,
        cost: { copium: 0, delusion: 0, yachtMoney: 1.5e41, trollPoints: 0, hopium: 0, knowledge: 1e29, power: 3, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1e15, hopiumPerSecond: 0, knowledgePerSecond: 10000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/training_dummy.jpg`,
        message: `<p>After spending time training on the dummy, you realize that the real challenges lie ahead. Each battle with stronger opponents will demand more than just courage—it will require careful planning and resources. Every fight will cost you valuable supplies, and if you lose, those resources will be gone forever. Victory isn’t just about raw power; it’s about being fully prepared.</p>
                <p>Your fighting skills will be shaped by four key factors:</p>
                <ul>
                    <li><strong>Power:</strong> Reflects your raw strength and determines the damage you deal to the enemy.</li>
                    <li><strong>Copium:</strong> Fuels your health and resilience, allowing you to withstand enemy attacks.</li>
                    <li><strong>Delusion:</strong> Represents your defense, reducing the damage you take from enemies.</li>
                    <li><strong>Troll Points:</strong> Signify your strategic edge, influencing your critical hit chance and the damage dealt on critical hits.</li>
                </ul>
                <p>Before facing your next opponent, ensure you have enough of each to give yourself the best chance of success.</p>
                <p>With the training dummy as your practice ground, you’ve gained a deeper understanding of combat. Continue to refine your skills, plan your battles wisely, and always stay prepared. Every decision you make and every resource you spend could be the key to your next victory.</p>
                `,
        isFight: true,
        achievement: 'Begin Training',
        hoverOverwrite: 'Beware 3 power will be consumed. Remaining power will be converted to Damage.',
        autoBattlePower: 10000,
    },
    {
        name: `Agent Smith`,
        cost: { copium: 0, delusion: 1e41, yachtMoney: 0, trollPoints: 1e41, hopium: 0, knowledge: 2e29, power: 20, serenity: 0 },
        earnings: { copiumPerSecond: 6e15, delusionPerSecond: 0, yachtMoneyPerSecond: 6e15, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 15000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/agent_smith.jpg`,
        isFight: true,
        isKey: true,
        autoBattlePower: 50000,
    },
    {
        name: `Feel the Pump`,
        cost: { copium: 1e41, delusion: 1e41, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 8e29, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 1e15, delusionPerSecond: 1e15, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 5000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/feel_the_pump.jpg`,        
        message: `The thrill of victory surges through you as your first opponent falls at your feet. The rush of adrenaline, the satisfaction of your hard-earned triumph—it's like nothing you've felt before. You feel your strength growing, your confidence soaring. This is what you've trained for, and it feels incredible!<br><br>But as the excitement pulses through your veins, a voice in the back of your mind whispers a reminder: Don't let it get to your head. This is just the beginning. The opponents ahead are far stronger, more dangerous, and they'll push you to your limits in ways you can't yet imagine. Stay sharp, stay focused, and keep preparing—because the real challenges are still to come.`,
    },
    {
        name: `Why Meemees Though`,
        cost: { copium: 0, delusion: 1e41, yachtMoney: 0, trollPoints: 1e42, hopium: 0, knowledge: 2e31, power: 13, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 3e15, yachtMoneyPerSecond: 0, trollPointsPerSecond: 3e15, hopiumPerSecond: 0, knowledgePerSecond: 7000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/scumbage_mee_mee.jpg`,        
    },
    {
        name: `Shao Kahn`,
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 5e41, hopium: 0, knowledge: 1e30, power: 35, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 9e15, trollPointsPerSecond: 0, hopiumPerSecond: -1e8, knowledgePerSecond: 48000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/shao_kahn.jpg`,
        isFight: true,
        achievement: 'Mortal Kombat',
        isKey: true,
        autoBattlePower: 200000,
    },
    {
        name: `Small Wins`,
        cost: { copium: 5e42, delusion: 0, yachtMoney: 0, trollPoints: 5e42, hopium: 0, knowledge: 0, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 8e15, delusionPerSecond: 8e15, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 4000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/small_wins.jpg`,        
    },
    {
        name: `$5 for a taco?`,
        cost: { copium: 0, delusion: 0, yachtMoney: 9e42, trollPoints: 0, hopium: 0, knowledge: 1e31, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 7.5e15, delusionPerSecond: 0, yachtMoneyPerSecond: 8e15, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 5000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/expensive_or_poor.jpg`,        
    },
    {
        name: `Darth Vader`,
        cost: { copium: 0, delusion: 0, yachtMoney: 1e43, trollPoints: 0, hopium: 0, knowledge: 1e31, power: 70, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 4.5e16, trollPointsPerSecond: 0, hopiumPerSecond: -5e8, knowledgePerSecond: 88000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/darth_vader.jpg`,
        isFight: true,
        isKey: true,
        autoBattlePower: 600000,
    },
    {
        name: `Burn the House Down`,
        cost: { copium: 0, delusion: 0, yachtMoney: 1.5e44, trollPoints: 0, hopium: 0, knowledge: 1e32, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5e16, delusionPerSecond: 0, yachtMoneyPerSecond: -1e16, trollPointsPerSecond: 5e16, hopiumPerSecond: 0, knowledgePerSecond: 22000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/burn_the_house_down.jpg`,        
    },
    {
        name: `Here's to all the memes`,
        cost: { copium: 8e43, delusion: 0, yachtMoney: 0, trollPoints: 2e43, hopium: 0, knowledge: 1e32, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 4e16, delusionPerSecond: 7e16, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 25000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/cheers_to_memes.jpg`,     
        message: `Hey there! Just wanted to take a moment to break the 4th wall and give a huge shoutout to all of you for playing and making it this far in the game. Seriously, I appreciate each and every one of you. Hope you're having a blast—because I sure had fun creating it! Cheers, and keep on gaming!`,   
    },
    {
        name: `Isshin`,
        cost: { copium: 1e43, delusion: 9e42, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 1e32, power: 250, serenity: 0 },
        earnings: { copiumPerSecond: 1e17, delusionPerSecond: 1e17, yachtMoneyPerSecond: 1e17, trollPointsPerSecond: 0, hopiumPerSecond: -1.2e10, knowledgePerSecond: 185000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/isshin.jpg`,
        isFight: true,
        isKey: true,
        autoBattlePower: 800000,
    },
    {
        name: `Work do be like that`,
        cost: { copium: 0, delusion: 0, yachtMoney: 2e44, trollPoints: 0, hopium: 0, knowledge: 1e33, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 4e17, trollPointsPerSecond: 2e17, hopiumPerSecond: 0, knowledgePerSecond: 22000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/shift_start_end.jpg`,        
    },
    {
        name: `Some of you right now`,
        cost: { copium: 1e44, delusion: 1e44, yachtMoney: 1e44, trollPoints: 1e44, hopium: 0, knowledge: 1e33, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 5e17, delusionPerSecond: 5e17, yachtMoneyPerSecond: 3e17, trollPointsPerSecond: 3e17, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/not_funny_kanye.jpg`,        
    },
    {
        name: `What year is it?`,
        cost: { copium: 1e45, delusion: 1e45, yachtMoney: 1e45, trollPoints: 1e45, hopium: 0, knowledge: 1e38, power: 1300, serenity: 0 },
        earnings: { copiumPerSecond: 8e17, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 8e17, hopiumPerSecond: 0, knowledgePerSecond: 29000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/what_year_is_it.jpg`,        
    },
    {
        name: `Channel inner Tyson`,
        cost: { copium: 1e48, delusion: 1e48, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 1e38, power: 13000, serenity: 0 },
        earnings: { copiumPerSecond: 9e17, delusionPerSecond: 9e17, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 58000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/beeth_mode.jpg`,        
    },
    {
        name: `Sauron`,
        cost: { copium: 5e48, delusion: 5e48, yachtMoney: 5e48, trollPoints: 5e48, hopium: 0, knowledge: 5e38, power: 13000, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 8e18, trollPointsPerSecond: 0, hopiumPerSecond: -9e12, knowledgePerSecond: 645000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/sauron.jpg`,
        isFight: true,
        isKey: true,
        autoBattlePower: 1e8,
        achievement: 'Avoid the Crit',
    },
    {
        name: `Avoid Temptations`,
        cost: { copium: 2e52, delusion: 0, yachtMoney: 2e52, trollPoints: 0, hopium: 0, knowledge: 1e40, power: 1300, serenity: 0 },
        earnings: { copiumPerSecond: 2e18, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 5e18, hopiumPerSecond: 0, knowledgePerSecond: 26000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/the_temptations.jpg`,        
    },
    {
        name: `Thanks for the coffee`,
        cost: { copium: 0, delusion: 0, yachtMoney: 3e52, trollPoints: 0, hopium: 0, knowledge: 1e40, power: 120000, serenity: 0 },
        earnings: { copiumPerSecond: 3.5e18, delusionPerSecond: 0, yachtMoneyPerSecond: 3.5e18, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 28000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/trump_look.jpg`,        
    },
    {
        name: `Still Mediocre`,
        cost: { copium: 0, delusion: 1e52, yachtMoney: 0, trollPoints: 5e52, hopium: 0, knowledge: 1e41, power: 35000, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 8e18, yachtMoneyPerSecond: 0, trollPointsPerSecond: 7e18, hopiumPerSecond: 0, knowledgePerSecond: 37000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/3rd_place_upvotes.jpg`,        
    },
    {
        name: `Last Bit of Hope`,
        cost: { copium: 0, delusion: 0, yachtMoney: 7.77e51, trollPoints: 0, hopium: 1e47, knowledge: 7.77e39, power: 777, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 7.77e18, yachtMoneyPerSecond: 7.77e18, trollPointsPerSecond: 0, hopiumPerSecond: 7.77e12, knowledgePerSecond: 77700, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/last_bit_of_hope.jpg`,        
        achievement: 'Remember Trading?',
    },
    {
        name: `Kratos`,
        cost: { copium: 5e51, delusion: 5e51, yachtMoney: 5e51, trollPoints: 5e51, hopium: 0, knowledge: 5e41, power: 600000, serenity: 0 },
        earnings: { copiumPerSecond: 1e19, delusionPerSecond: 1e19, yachtMoneyPerSecond: 1e19, trollPointsPerSecond: 1e19, hopiumPerSecond: -6e14, knowledgePerSecond: 980000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/kratos.jpg`,
        isFight: true,
        isKey: true,
        autoBattlePower: 6.5e10,

    },
    {
        name: `Complex Skill Trees`,
        cost: { copium: 2e52, delusion: 0, yachtMoney: 0, trollPoints: 2e52, hopium: 2e48, knowledge: 2e41, power: 600000, serenity: 0 },
        earnings: { copiumPerSecond: 8e18, delusionPerSecond: 5e18, yachtMoneyPerSecond: 0, trollPointsPerSecond: 8e18, hopiumPerSecond: 0, knowledgePerSecond: 95000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/path_of_exile_skill_tree.jpg`,
        message: `Huge shoutout to Path of Exile—the greatest game of all time! No other ARPG, or any game for that matter, has ever managed to replicate the sheer complexity and depth of its legendary skill trees. It’s a masterpiece of design, offering limitless possibilities for those daring enough to explore its vast network of nodes. Every decision shapes your journey, making each build a unique adventure.<br><br>Path of Exile has set a standard that’s unmatched, and we can only hope that Path of Exile 2 will continue to raise the bar even higher.`,
    },
    {
        name: `Nagging Question`,
        cost: { copium: 2e53, delusion: 2e53, yachtMoney: 0, trollPoints: 8e53, hopium: 0, knowledge: 1e43, power: 1.7e6, serenity: 0 },
        earnings: { copiumPerSecond: 7e18, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 3e18, hopiumPerSecond: 0, knowledgePerSecond: 48000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/deadpool_lives.jpg`,        
    },
    {
        name: `Unpopular Truth`,
        cost: { copium: 4e54, delusion: 0, yachtMoney: 0, trollPoints: 2e53, hopium: 0, knowledge: 1e43, power: 2.3e6, serenity: 0 },
        earnings: { copiumPerSecond: 8e18, delusionPerSecond: 1e19, yachtMoneyPerSecond: 0, trollPointsPerSecond: 4e18, hopiumPerSecond: 0, knowledgePerSecond: 73000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/downvoted_opinion.jpg`,        
    },
    {
        name: `Happy Birthday to me`,
        cost: { copium: 0, delusion: 2e55, yachtMoney: 0, trollPoints: 1e55, hopium: 0, knowledge: 1e44, power: 1.2e6, serenity: 0 },
        earnings: { copiumPerSecond: 3e18, delusionPerSecond: 0, yachtMoneyPerSecond: 1e19, trollPointsPerSecond: 3e18, hopiumPerSecond: 0, knowledgePerSecond: 85000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/happy_birthday.jpg`,        
    },
    {
        name: `The Rock`,
        cost: { copium: 3e54, delusion: 1.8e55, yachtMoney: 0, trollPoints: 5e54, hopium: 0, knowledge: 8e43, power: 2.4e7, serenity: 0 },
        earnings: { copiumPerSecond: 2e18, delusionPerSecond: 3e18, yachtMoneyPerSecond: 0, trollPointsPerSecond: 3e19, hopiumPerSecond: 0, knowledgePerSecond: 87000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/the_rock_photo.jpg`,                
        message: `Don't worry, you never have to fight The Rock. He would beat you to a pulp.`,
        isKey: true,

    },
    {
        name: `Real Life Girlfriend`,
        cost: { copium: 1e55, delusion: 5e55, yachtMoney: 1e55, trollPoints: 0, hopium: 0, knowledge: 1.2e44, power: 9e5, serenity: 0 },
        earnings: { copiumPerSecond: 2e18, delusionPerSecond: 5e19, yachtMoneyPerSecond: 0, trollPointsPerSecond: 2e18, hopiumPerSecond: 0, knowledgePerSecond: 97000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/real_life_girlfriend.jpg`,        
    },
    {
        name: `Deadpool`,
        cost: { copium: 6.9e54, delusion: 6.9e54, yachtMoney: 6.9e54, trollPoints: 6.9e54, hopium: 0, knowledge: 6.9e45, power: 6.9e7, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 6.9e20, yachtMoneyPerSecond: 0, trollPointsPerSecond: 6.9e20, hopiumPerSecond: -6.9e15, knowledgePerSecond: 1.69e6, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/deadpool.jpg`,
        isFight: true,
        isKey: true,
        autoBattlePower: 6.9e22,
    },
    {
        name: `What The`,
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 5e55, hopium: 3e49, knowledge: 1e42, power: 2e6, serenity: 0 },
        earnings: { copiumPerSecond: 8e19, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 2e20, hopiumPerSecond: 0, knowledgePerSecond: 125000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/what_the.jpg`,
    },
    {
        name: `Sebo's Luck`,
        cost: { copium: 7e58, delusion: 0, yachtMoney: 0, trollPoints: 7e58, hopium: 0, knowledge: 7e43, power: 2e7, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 7e20, trollPointsPerSecond: 7e20, hopiumPerSecond: 0, knowledgePerSecond: 195000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/sebos_luck.jpg`,
        message: `  <p>
                        While this upgrade is active, congratulations—you’ve officially entered the elite club of absurdly lucky bastards. The universe bends over backwards just to make sure you always come out on top. Here’s how your cosmic luck flexes its muscles:
                    </p>
                    <ul>
                        <li>You stumble upon a ridiculous <strong>1e65 Yacht Money</strong> like you’ve got a treasure magnet stuck to your ass.</li>
                        <li>In the Luck Game, another unlucky box just nopes out, because even bad luck knows not to mess with you.</li>
                        <li>In fights, your crit chance jumps by <strong>5%</strong>, because even your punches got the Midas touch.</li>
                    </ul>`,
    },
    {
        name: `I'm Rich`,
        cost: { copium: 1e61, delusion: 0, yachtMoney: 1e63, trollPoints: 0, hopium: 0, knowledge: 1.5e42, power: 4e6, serenity: 0 },
        earnings: { copiumPerSecond: 5e20, delusionPerSecond: 0, yachtMoneyPerSecond: 5e20, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 350000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/money_everywhere.jpg`,        
    },
    {
        name: `Spend That Money`,
        cost: { copium: 0, delusion: 0, yachtMoney: 2.5e64, trollPoints: 0, hopium: 0, knowledge: 5e44, power: 5e7, serenity: 0 },
        earnings: { copiumPerSecond: 9e20, delusionPerSecond: 8e20, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 220000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/treat_yo_self.jpg`,        
    },
    {
        name: `When prestige layer?`,
        cost: { copium: 0, delusion: 1.7e61, yachtMoney: 2e63, trollPoints: 1e62, hopium: 0, knowledge: 3e45, power: 6.4e7, serenity: 0 },
        earnings: { copiumPerSecond: 3.7e20, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1e21, hopiumPerSecond: 0, knowledgePerSecond: 270000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/big_crunch_candy.jpg`,        
    },
    {
        name: `Don't split hairs`,
        cost: { copium: 2.3e62, delusion: 2.1e62, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 4e45, power: 9.9e7, serenity: 0 },
        earnings: { copiumPerSecond: 6.5e20, delusionPerSecond: 6.5e20, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1e21, hopiumPerSecond: 0, knowledgePerSecond: 360000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/comb_over.jpg`,        
    },
    {
        name: `Kung Fu Bunny`,
        cost: { copium: 0, delusion: 2.3e62, yachtMoney: 0, trollPoints: 5e62, hopium: 0, knowledge: 8e45, power: 1.1e8, serenity: 0 },
        earnings: { copiumPerSecond: 1.5e21, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 640000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/bunny_martial_arts.jpg`,        
    },
    {
        name: `Biggest Conspiracy`,
        cost: { copium: 0, delusion: 0, yachtMoney: 1.8e64, trollPoints: 2.5e63, hopium: 0, knowledge: 1e46, power: 1.5e8, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 1.9e21, yachtMoneyPerSecond: 0, trollPointsPerSecond: 2.4e21, hopiumPerSecond: 0, knowledgePerSecond: 480000, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/dank_memes_steel_beams.jpg`,        
    },
    {
        name: `Chuck Norris`,
        cost: { copium: 1e63, delusion: 1e63, yachtMoney: 1e63, trollPoints: 1e63, hopium: 0, knowledge: 4e47, power: 4e8, serenity: 0 },
        earnings: { copiumPerSecond: 1.5e24, delusionPerSecond: 0, yachtMoneyPerSecond: 1.5e24, trollPointsPerSecond: 0, hopiumPerSecond: -1e20, knowledgePerSecond: 1e7, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/chuck_norris.jpg`,
        isFight: true,
        isKey: true,
        autoBattlePower: 2e15,
    },
    {
        name: `Surprise Package`,
        cost: { copium: 2e64, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 1e46, power: 8.5e8, serenity: 0 },
        earnings: { copiumPerSecond: 2.8e23, delusionPerSecond: 3.3e23, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 1.2e6, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/wasnt_a_fart.jpg`,        
    },
    {
        name: `Wasted Memes`,
        cost: { copium: 0, delusion: 2e63, yachtMoney: 3e64, trollPoints: 0, hopium: 0, knowledge: 2e47, power: 9.5e8, serenity: 0 },
        earnings: { copiumPerSecond: 4.5e23, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1.5e24, hopiumPerSecond: 0, knowledgePerSecond: 1.4e6, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/meme_for_mom.jpg`,        
    },
    {
        name: `WTF is that Face`,
        cost: { copium: 0, delusion: 9e63, yachtMoney: 0, trollPoints: 3e64, hopium: 0, knowledge: 2e47, power: 1.3e9, serenity: 0 },
        earnings: { copiumPerSecond: 3e23, delusionPerSecond: 3e23, yachtMoneyPerSecond: 0, trollPointsPerSecond: 2.4e24, hopiumPerSecond: 0, knowledgePerSecond: 1.6e6, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/accidental_selfie.jpg`,        
    },
    {
        name: `Deadlines`,
        cost: { copium: 0, delusion: 0, yachtMoney: 5e64, trollPoints: 5e64, hopium: 0, knowledge: 9e47, power: 2.5e9, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 9e24, trollPointsPerSecond: 4e24, hopiumPerSecond: 0, knowledgePerSecond: 3.7e6, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/deadlines.jpg`,        
    },
    {
        name: `Musical Chairs`,
        cost: { copium: 0, delusion: 0, yachtMoney: 9e65, trollPoints: 0, hopium: 0, knowledge: 8e48, power: 2e9, serenity: 0 },
        earnings: { copiumPerSecond: 1e24, delusionPerSecond: 2e24, yachtMoneyPerSecond: 0, trollPointsPerSecond: 2e24, hopiumPerSecond: 0, knowledgePerSecond: 3.5e6, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/musical_chairs.jpg`,        
    },
    {
        name: `Vegeta`,
        cost: { copium: 3e67, delusion: 0, yachtMoney: 3e67, trollPoints: 3e67, hopium: 0, knowledge: 5e50, power: 2.5e10, serenity: 0 },
        earnings: { copiumPerSecond: 3e25, delusionPerSecond: 3e25, yachtMoneyPerSecond: 3e25, trollPointsPerSecond: 3e25, hopiumPerSecond: -1e26, knowledgePerSecond: 3e8, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/vegeta.jpg`,
        isFight: true,
        message: `<p><strong>Vegeta:</strong> You’ve done it… you’ve finally reached the pinnacle of power. But understand this, it was never about me. From the very beginning, I groomed you for this moment, pushing you to break your limits, to become stronger than you ever imagined.</p>
                <p>Each battle, every struggle—it was all to forge you into the warrior you’ve become today. Not for my sake, but for the fate of the multiverse. There’s a darkness far greater than anything you’ve faced—a force that threatens all of existence. And now…</p>
                <p><strong>Vegeta:</strong> You’re ready. My goal was for you to grow strong enough to stop her. Now, go do it. Save the multiverse!</p>
                <p>With those words, Vegeta collapses, a proud but weary smile on his face, knowing his mission is complete.</p>`,
        isKey: true,
        autoBattlePower: 1e17,
    },
    {
        name: `Oedipus`,
        cost: { copium: 1e65, delusion: 0, yachtMoney: 0, trollPoints: 1e65, hopium: 0, knowledge: 1e49, power: 6.5e10, serenity: 0 },
        earnings: { copiumPerSecond: 1e25, delusionPerSecond: 1e25, yachtMoneyPerSecond: 0, trollPointsPerSecond: 2e25, hopiumPerSecond: 0, knowledgePerSecond: 9e6, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/mom_at_stripclub.jpg`,        
    },
    {
        name: `Excuse me?`,
        cost: { copium: 3e65, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 2e49, power: 1.2e11, serenity: 0 },
        earnings: { copiumPerSecond: 2.5e25, delusionPerSecond: 0, yachtMoneyPerSecond: 5e25, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 8e6, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/washing_dishes.jpg`,        
    },
    {
        name: `Best Meme`,
        cost: { copium: 3e65, delusion: 2e65, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 3e49, power: 8e10, serenity: 0 },
        earnings: { copiumPerSecond: 3.5e25, delusionPerSecond: 1e25, yachtMoneyPerSecond: 1e25, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 6e6, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/best_meme.jpg`,   
        message: `<p>Days have passed since you defeated the Super Saiyan, a warrior who once seemed like an unstoppable force of nature. The memory of that battle lingers, a testament to your newfound strength. Yet, as the dust settles and the adrenaline fades, an unsettling question claws at your mind: Why, despite your victory, do you feel so empty?</p>
                <p>You’ve grown stronger than you ever imagined, but that power feels strangely hollow. The words Vegeta uttered before his fall echo in the quiet moments: “She’s out there, threatening the multiverse.” But who is this mysterious "she"? What kind of terror could instill such fear in one as powerful as him?</p>
                <p>You can’t shake the feeling that your journey is far from over. The strength you’ve gained was meant for something greater—something beyond the battles you’ve fought. Perhaps the hopelessness you feel is the void left by an unfulfilled destiny, a path that still lies ahead.</p>
                <p>To regain your hope, you must seek her out, confront the force that even Vegeta feared. Only then will you uncover the true purpose of your power, and perhaps, find the redemption that seems so elusive. The multiverse hangs in the balance, and deep down, you know that the real challenge is yet to come.</p>`,     
    },
    {
        name: `Facepalm`,
        cost: { copium: 0, delusion: 3e65, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 4e49, power: 1.4e10, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 5e25, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1e25, hopiumPerSecond: 0, knowledgePerSecond: 1.2e7, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/andrew_tate.jpg`,        
    },
    {
        name: `Moo-ving Violation`,
        cost: { copium: 0, delusion: 0, yachtMoney: 5e65, trollPoints: 0, hopium: 0, knowledge: 5e49, power: 2.8e10, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1e26, hopiumPerSecond: 0, knowledgePerSecond: 1.5e7, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/wyoming_traffic.jpg`,        
    },
    {         
        name: `Charging Into Forums`,
        cost: { copium: 4e67, delusion: 0, yachtMoney: 0, trollPoints: 1e68, hopium: 0, knowledge: 6e50, power: 4.2e10, serenity: 0 },
        earnings: { copiumPerSecond: 2e26, delusionPerSecond: 2e26, yachtMoneyPerSecond: 0, trollPointsPerSecond: 5e25, hopiumPerSecond: 0, knowledgePerSecond: 1.6e7, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/keyboard_warrior.jpg`,        
    },
    {         
        name: `Frowning on Jetski?`,
        cost: { copium: 0, delusion: 0, yachtMoney: 3e68, trollPoints: 1e69, hopium: 0, knowledge: 7e50, power: 5e10, serenity: 0 },
        earnings: { copiumPerSecond: 1e26, delusionPerSecond: 0, yachtMoneyPerSecond: 6e26, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 1.4e7, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/money_does_buy_happiness.jpg`,        
    },
    {         
        name: `Smile and Nod`,
        cost: { copium: 4e68, delusion: 0, yachtMoney: 0, trollPoints: 1e69, hopium: 0, knowledge: 8e50, power: 7e10, serenity: 0 },
        earnings: { copiumPerSecond: 8e26, delusionPerSecond: 8e26, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 2.4e7, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/say_what_what.jpg`,        
    },
    {         
        name: `Blunt Dreams`,
        cost: { copium: 4.2e68, delusion: 4.2e68, yachtMoney: 4.2e68, trollPoints: 4.2e68, hopium: 0, knowledge: 4.2e51, power: 4.2e11, serenity: 0 },
        earnings: { copiumPerSecond: 4.2e27, delusionPerSecond: 4.2e27, yachtMoneyPerSecond: 4.2e27, trollPointsPerSecond: 4.2e27, hopiumPerSecond: 0, knowledgePerSecond: 4.2e7, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/ez_blunt.jpg`,        
    },
    {         
        name: `Jump 1M Times`,
        cost: { copium: 9e71, delusion: 0, yachtMoney: 0, trollPoints: 9e71, hopium: 0, knowledge: 2e54, power: 1.2e12, serenity: 0 },
        earnings: { copiumPerSecond: 8e27, delusionPerSecond: 2e27, yachtMoneyPerSecond: 0, trollPointsPerSecond: 5e27, hopiumPerSecond: 0, knowledgePerSecond: 1.6e8, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/achievement_fiend.jpg`,       
        hoverOverwrite: `Must. Get. All. Achievements.`,
    },
    {         
        name: `Going Crazy Over Here`,
        cost: { copium: 5e72, delusion: 5e69, yachtMoney: 0, trollPoints: 3e72, hopium: 0, knowledge: 8e54, power: 2.5e12, serenity: 0 },
        earnings: { copiumPerSecond: 1e28, delusionPerSecond: 1e28, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 2.9e8, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/going_crazy_over_here.jpg`,       
        hoverOverwrite: `When you max out every stat and skill, but still get destroyed by Kaguya.`,
    },
    {         
        name: `Foreshadowing #3`,
        cost: { copium: 8e72, delusion: 9e70, yachtMoney: 3e70, trollPoints: 0, hopium: 0, knowledge: 2e56, power: 6.5e12, serenity: 0 },
        earnings: { copiumPerSecond: 1.5e28, delusionPerSecond: 0, yachtMoneyPerSecond: 9e27, trollPointsPerSecond: 1e28, hopiumPerSecond: 0, knowledgePerSecond: 8.3e8, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/distracted_boyfriend_3.jpg`,       
    },
    {         
        name: `Healthy Choices`,
        cost: { copium: 9e72, delusion: 1e71, yachtMoney: 0, trollPoints: 9e72, hopium: 0, knowledge: 5e56, power: 1.8e13, serenity: 0 },
        earnings: { copiumPerSecond: 3e28, delusionPerSecond: 0, yachtMoneyPerSecond: 1.2e28, trollPointsPerSecond: 3e28, hopiumPerSecond: 0, knowledgePerSecond: 1.3e9, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/training_for_kaguya.jpg`
    },
    {         
        name: `Unprecedented`,
        cost: { copium: 1e73, delusion: 2e72, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 3e59, power: 2.3e14, serenity: 0 },
        earnings: { copiumPerSecond: 2e28, delusionPerSecond: 2e28, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 1.6e9, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/unprecedented_overlap.jpg`
    },
    {         
        name: `Bitch Back Off`,
        cost: { copium: 1e80, delusion: 1e80, yachtMoney: 1e80, trollPoints: 1e80, hopium: 0, knowledge: 3e60, power: 3.2e14, serenity: 0 },
        earnings: { copiumPerSecond: 4e28, delusionPerSecond: 4e28, yachtMoneyPerSecond: 0, trollPointsPerSecond: 5e28, hopiumPerSecond: 0, knowledgePerSecond: 2.8e9, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/bitch_back_off.jpg`
    },
    {
        name: `Kaguya`,
        cost: { copium: 6e79, delusion: 6e79, yachtMoney: 6e79, trollPoints: 6e79, hopium: 0, knowledge: 6e60, power: 1e14, serenity: 0 },
        earnings: { copiumPerSecond: 5e30, delusionPerSecond: 5e30, yachtMoneyPerSecond: 5e30, trollPointsPerSecond: 5e30, hopiumPerSecond: -1e35, knowledgePerSecond: 5e11, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/kaguya.jpg`,
        isFight: true,
        hoverOverwrite: `She is evil. She will drain your resoures. Only fight if you want to hate her.`,
        message: `<p><strong>Kaguya:</strong> So, you've done it. You've saved the multiverse from destruction. You've become the hero that all worlds will remember. But tell me, warrior, why do you still feel so empty inside?</p>
                <p>You wield power beyond imagination, power that has crushed your enemies and saved countless lives. Yet, deep within, there’s a void that no victory can fill, a nagging sense that something vital is missing. Why does hope continue to slip through your grasp?</p>
                <p><strong>Kaguya:</strong> Power alone was never the answer. You sought satisfaction, but all you found was more longing. What is it that you truly seek, if not the ultimate satisfaction? Why does the light of your triumph feel so dim?</p>
                <p>With these words, Kaguya fades away, leaving you alone with your thoughts, victorious but unfulfilled, questioning the true meaning of the path you've chosen.</p>`,
        achievement: 'Save the Multiverse',
        isKey: true,
        autoBattlePower: 6.66e20,
    },
    {         
        name: `Not the final boss?`,
        cost: { copium: 1e80, delusion: 1e80, yachtMoney: 1e80, trollPoints: 1e80, hopium: 0, knowledge: 1e60, power: 1.5e13, serenity: 0 },
        earnings: { copiumPerSecond: 1.5e30, delusionPerSecond: 0, yachtMoneyPerSecond: 8e29, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 4e9, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/surprise_pikachu.jpg`,        
    },
    {         
        name: `Great Find`,
        cost: { copium: 0, delusion: 9e80, yachtMoney: 3e80, trollPoints: 0, hopium: 0, knowledge: 1e61, power: 1.5e14, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 3e30, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 8e9, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/perfect_avocado.jpg`,        
    },
    {         
        name: `Priceless Doggos`,
        cost: { copium: 3e81, delusion: 0, yachtMoney: 5e81, trollPoints: 0, hopium: 0, knowledge: 3e61, power: 4e14, serenity: 0 },
        earnings: { copiumPerSecond: 3e30, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 1.6e10, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/spending_money_on_dogs.jpg`,        
    },
    {         
        name: `Feels Bad Man`,
        cost: { copium: 4e81, delusion: 0, yachtMoney: 6e81, trollPoints: 0, hopium: 0, knowledge: 4e61, power: 1.5e15, serenity: 0 },
        earnings: { copiumPerSecond: 4e30, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 3.2e10, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/feels_bad_man.jpg`,        
    },
    {         
        name: `Bare Minimum`,
        cost: { copium: 5e81, delusion: 0, yachtMoney: 0, trollPoints: 5e81, hopium: 0, knowledge: 5e62, power: 3e15, serenity: 0 },
        earnings: { copiumPerSecond: 3e30, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 6.4e10, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/bare_minimum.jpg`,        
    },
    {         
        name: `How Unoriginal!`,
        cost: { copium: 6e81, delusion: 0, yachtMoney: 7e81, trollPoints: 0, hopium: 0, knowledge: 6e62, power: 5e15, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 5e30, yachtMoneyPerSecond: 0, trollPointsPerSecond: 5e30, hopiumPerSecond: 0, knowledgePerSecond: 1.2e11, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/too_long_didnt_read.jpg`,        
    },
    {         
        name: `Why so serious?`,
        cost: { copium: 2e82, delusion: 0, yachtMoney: 2e82, trollPoints: 0, hopium: 0, knowledge: 1e63, power: 3e16, serenity: 0 },
        earnings: { copiumPerSecond: 9e30, delusionPerSecond: 9e30, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 1.9e11, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/why_so_serious.jpg`,        
    },
    {         
        name: `Stealth +5`,
        cost: { copium: 0, delusion: 1e83, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 2e65, power: 4e16, serenity: 0 },
        earnings: { copiumPerSecond: 8e31, delusionPerSecond: 8e31, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 8e11, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/stealthy_zebra.jpg`,     
        message: `Well, well, well... It seems you've stumbled upon 'Stealth +5.' But wait, there's a catch: there's no stealth in this game, silly! At this point, you should know better than to try sneaking around.<br><br>If you're thinking you can just tiptoe past the final boss— Saitama —think again. There's no hiding from him. You'll have to face the One Punch Man head-on, fair and square. No invisibility cloaks, no shadowy escapes... just pure, unfiltered, glorious combat. Good luck!`   
    },
    {
        name: `Saitama`,
        cost: { copium: 7e85, delusion: 7e85, yachtMoney: 7e85, trollPoints: 7e85, hopium: 0, knowledge: 7e66, power: 7e16, serenity: 0 },
        earnings: { copiumPerSecond: 7e33, delusionPerSecond: 7e33, yachtMoneyPerSecond: 7e33, trollPointsPerSecond: 7e33, hopiumPerSecond: -1e40, knowledgePerSecond: 8e11, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/saitama.jpg`,
        isFight: true,
        message: `<p style="font-size: 1.2em; color: #b3a125;">
                        Saitama breathes heavily, sweat dripping from his brow, bruises marking his usually invulnerable body. His excitement is palpable, a faint smile tugging at the corners of his mouth. “You… you actually pushed me. I didn’t think it was possible,” he says, his voice carrying an unfamiliar edge of exhilaration. For the first time in years, he felt the rush of a real fight. You can see it in his eyes—a spark that wasn’t there before. “You gave me a real challenge... I haven’t felt this alive in so long.”
                    </p>
                    <p style="font-size: 1.2em; color: #6b8ca4;">
                        You stand there, staring at him, the weight of your victory sinking in. You've hurt him—truly hurt him—but something feels off. Instead of triumph, there’s an unsettling hollowness growing inside you. This was it, the fight you dreamed of, the one that was supposed to give you meaning. But now, in this moment of victory, as Saitama acknowledges your strength, it feels... empty.
                    </p>
                    <p style="font-size: 1.2em; color: #b3a125;">
                        “Thank you,” Saitama says, his grin widening, almost childlike. “This is the fight I’ve been waiting for. I didn’t think anyone could ever push me this far.” He coughs, clutching his side, clearly in pain, yet his eyes shine with a light you’ve never seen before. “You’ve done it. You’ve made me care about fighting again.”
                    </p>
                    <p style="font-size: 1.2em; color: #6b8ca4;">
                        His words should fill you with pride, but instead, they leave you hollow. You won. You gave him what he wanted. But what about you? As Saitama revels in the moment, you can’t help but feel a sense of loss creeping in. You’ve spent so long training, pushing yourself beyond limits, all for this moment—this chance to prove yourself against the only being who could rival your strength. And now that it’s over, there’s nothing left. No higher peak to climb. No grander opponent to face. You've won, but at what cost?
                    </p>
                    <p style="font-size: 1.2em; color: #b3a125;">
                        “So, what now?” Saitama asks, his voice light but genuine. “You’ve beaten me, or close enough. What’s next for you?” He looks at you curiously, like someone who still has something to look forward to. There’s a fire in his eyes now, one you’ve reignited. But you? You’re left with only the smoldering ashes of what you once thought was your purpose.
                    </p>
                    <p style="font-size: 1.2em; color: #6b8ca4;">
                        What now? The question hangs in the air, echoing through the battlefield and deep into your soul. You try to think of an answer, but there’s nothing. No more mountains to climb. No more enemies to face. Your journey, once driven by the desire to overcome, has left you standing at the edge of a void. The thrill of the fight, the struggle for purpose—it’s all gone now. You thought that defeating him would bring you fulfillment, but instead, it has left you adrift in an endless sea of uncertainty. 
                    </p>
                    <p style="font-size: 1.2em; color: #6b8ca4;">
                        You glance at Saitama, now recharged with a sense of purpose you’ve unknowingly given him, but that same purpose has slipped through your fingers. You have achieved the ultimate victory... and now you stand at the summit of existence, staring down into a vast emptiness where meaning once was. What do you do when you’ve won the greatest battle of your life, only to realize that the fight was all you had? 
                    </p>
                    <p style="font-size: 1.2em; color: #6b8ca4;">
                        Saitama walks away, still smiling, while you remain motionless. You have everything... and yet nothing. The fight is over, and with it, the purpose you had built your life around. What’s left? What can possibly come next? 
                    </p>`,
        achievement: 'Hang Up Boxing Gloves',
        isKey: true,
        autoBattlePower: 1e23,
    },
    {         
        name: `Smash That Like Button`,
        cost: { copium: 0, delusion: 1e83, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 2e65, power: 7e15, serenity: 0 },
        earnings: { copiumPerSecond: 2e31, delusionPerSecond: 2e31, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 1e33, knowledgePerSecond: 3e11, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/the_like_button.jpg`,
        message: `That was it... the final boss. For real this time. But don't worry—the game is far from over! While the fighting saga has reached its end, there's still plenty to explore and achieve. How are you feeling right now? Joyful? Sad? Angry? Let me know—drop a comment in the Discord!`,     
    },
    {         
        name: `I've been there`,
        cost: { copium: 1e85, delusion: 0, yachtMoney: 0, trollPoints: 1e85, hopium: 0, knowledge: 1e66, power: 1.5e16, serenity: 0 },
        earnings: { copiumPerSecond: 2e31, delusionPerSecond: 0, yachtMoneyPerSecond: 1e32, trollPointsPerSecond: 0, hopiumPerSecond: -1e39, knowledgePerSecond: 6e11, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/memes_not_funny.jpg`,
    },
    {         
        name: `You tell me!`,
        cost: { copium: 2e85, delusion: 3e85, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 3e66, power: 3e16, serenity: 0 },
        earnings: { copiumPerSecond: 2e31, delusionPerSecond: 3e31, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1e31, hopiumPerSecond: -5e39, knowledgePerSecond: 9e11, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/why_im_single.jpg`,
    },
    {         
        name: `What to do`,
        cost: { copium: 0, delusion: 0, yachtMoney: 5e85, trollPoints: 5e85, hopium: 0, knowledge: 1e67, power: 6e16, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 5e32, trollPointsPerSecond: 2e31, hopiumPerSecond: -1e40, knowledgePerSecond: 1.2e12, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/when_you_lose_hope.jpg`,
    },
    {         
        name: `Existential Dread`,
        cost: { copium: 2e87, delusion: 0, yachtMoney: 0, trollPoints: 2e87, hopium: 0, knowledge: 2e68, power: 1.5e17, serenity: 0 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 5e32, trollPointsPerSecond: 0, hopiumPerSecond: -3e40, knowledgePerSecond: 2e12, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/meaning_of_life_bear.jpg`,
        message: `<p>Your influence spans galaxies, your strength unmatched. And yet, as you stand at the summit, a strange emptiness settles in. There is nothing left to conquer, no greater battles to fight. You have it all—so why does it feel so hollow?</p>
                <p>The universe, vast and indifferent, stretches endlessly before you. But in this infinite expanse, purpose has become elusive. What is the point of it all when you are already the most powerful? You’ve conquered everything—except meaning.</p>
                <p>As you ponder what’s next, you may find that even the greatest victories are swallowed by the void of what remains undone. Perhaps, in the end, it’s not about power at all, but the search for something more—if such a thing even exists.</p>`,
    },
    {         
        name: `Cosmic Drought`,
        cost: { copium: 8e88, delusion: 8e88, yachtMoney: 8e88, trollPoints: 8e88, hopium: 0, knowledge: 1e69, power: 1.6e18, serenity: 0 },
        earnings: { copiumPerSecond: 5e40, delusionPerSecond: 5e40, yachtMoneyPerSecond: 5e40, trollPointsPerSecond: 5e40, hopiumPerSecond: -1e48, knowledgePerSecond: 2.5e15, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/cosmic_drought.jpg`,
        message: `<p>The cosmic drought has brought an end to your Stellar Harvest. The star systems you once nurtured have faded, and your operations across the multiverse have halted.</p>
                <p>But your heroic efforts in saving the multiverse haven’t gone unnoticed. Word has reached the galactic federation, and in recognition of your valor and the financial burdens you've faced, they've granted you an allowance.</p>
                <p>Though the road ahead is uncertain, with the federation's support, new possibilities await. The multiverse may still need you.</p>`,
        isKey: true,
    },
    {         
        name: `Search for Hope`,
        cost: { copium: 3e93, delusion: 0, yachtMoney: 0, trollPoints: 3e93, hopium: 0, knowledge: 1e70, power: 1e18, serenity: 0 },
        earnings: { copiumPerSecond: 5e35, delusionPerSecond: 0, yachtMoneyPerSecond: 5e35, trollPointsPerSecond: 0, hopiumPerSecond: -1e47, knowledgePerSecond: 1e13, powerPerSecond: 0, serenityPerSecond: 0 },
        img: `imgs/all_hope_lost.jpg`,
        message: `<p>You’ve scoured every corner of the universe, seeking answers, seeking hope. Time and again, your search has come up empty. The stars, once symbols of possibility, now feel distant, cold. Every path you’ve followed has led back to the same conclusion: there is nothing.</p>
                    <p>What else could you do? You’ve tried everything, reached further than anyone before you. Yet, the void remains, and with it, the weight of futility. Each attempt to grasp meaning slips away like stardust in the wind. Is this all there is?</p>
                    <p>Perhaps the question isn’t about where to go next—but whether there’s anywhere left to go at all.</p>`,
    },
    {         
        name: `Perfection doesn't exi...`,
        cost: { copium: 2e96, delusion: 0, yachtMoney: 0, trollPoints: 2e96, hopium: 0, knowledge: 1e71, power: 0, serenity: 0 },
        earnings: { copiumPerSecond: 2e36, delusionPerSecond: 0, yachtMoneyPerSecond: 2e36, trollPointsPerSecond: 0, hopiumPerSecond: 2e47, knowledgePerSecond: 2e13, powerPerSecond: 0, serenityPerSecond: 0.00015 },
        img: `imgs/perfection.jpg`,
        message: `<p>And then, you meet her — someone so radiant, so breathtaking, that the very fabric of your reality shifts. Her presence is like nothing you’ve ever encountered, a beauty that transcends anything you've known. It's not just her flawless appearance — the perfect harmony of grace and strength — but something deeper, something that resonates with the very core of who you are.</p>
                <p>The way she moves, effortless and serene, fills the space with an aura of peace. Her eyes hold entire galaxies, infinite and warm, drawing you into a sense of calm you didn't know you could feel. Every word she speaks feels like a melody, each glance a quiet promise of something greater. She is perfection in form and spirit, radiating a love and understanding that you've long searched for.</p>
                <p>In her presence, everything changes. The emptiness that once consumed you is replaced with a deep, abiding serenity. You finally understand that this is what you’ve been searching for all along. In that moment, you <strong>unlock a new resource—Serenity</strong>. It is the true source of happiness, the balance you didn’t know you needed. From now on, everything feels right. You’ve found your purpose.</p>
                `,
    },
    {         
        name: `Puppy Love`,
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0.025 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 4e36, hopiumPerSecond: 1e47, knowledgePerSecond: 2e13, powerPerSecond: 0, serenityPerSecond: 0.0001 },
        img: `imgs/puppy_love.jpg`,
    },
    {         
        name: `Love Shop`,
        cost: { copium: 0, delusion: 0, yachtMoney: 3e96, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 0.1 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 1e47, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0.00002 },
        img: `imgs/love_shop.jpg`,
    },
    {         
        name: `Meditation`,
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 1e72, power: 1e19, serenity: 0.1 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 3e13, powerPerSecond: 0, serenityPerSecond: 0.0001 },
        img: `imgs/meditation.jpg`,
        message: ` <p>After pushing past all physical limits, you’ve discovered that the true answers lie beyond the material world. You have unlocked <strong>Meditation</strong>, a metaphysical realm where the deepest questions can be answered. In this state, you will be guided through an abstract challenge: keep a set of mystical <strong>balls</strong> within the boundaries of a meditative space for a certain duration. Succeeding in your meditation will reveal powerful upgrades, each related to different belief systems, philosophies, religions, and worldviews.</p>
                    <h3>How the Meditation Game Works:</h3>
                    <p>During meditation, your goal is to ensure that the mystical balls remain within a bounded arena. Your mastery of resources will determine how well you can maintain focus and balance. Here’s how each of your resources will help increase your chances of success:</p>
                    <ul>
                        <li><strong>Copium</strong> - Influences <strong>Ball Size</strong>. More Copium means smaller balls, making it easier to keep them in bounds.</li>
                        <li><strong>Delusion</strong> - Impacts <strong>Turn Radius</strong>. A greater delusion will cause the balls to adjust their direction more quickly, pulling them back toward the center faster.</li>
                        <li><strong>Yacht Money</strong> - <strong>Reduces Meditation Duration</strong>. The more you accumulate, the shorter the time needed to complete the meditation challenge.</li>
                        <li><strong>Troll Points</strong> - Increases <strong>Respawn Time</strong>. This gives you more time before a ball that goes out of bounds reappears, offering brief relief.</li>
                        <li><strong>Hopium</strong> - <strong>Reduces the Total Number of Balls</strong>. With more hopium, fewer balls need to be managed during meditation.</li>
                        <li><strong>Knowledge</strong> - Affects <strong>Velocity</strong>. Higher knowledge will slow down the speed of the balls, making it easier to keep them within bounds.</li>
                        <li><strong>Power</strong> - Affects <strong>Gravity</strong>. A stronger pull toward the center ensures that balls are less likely to stray too far from the boundary.</li>
                        <li><strong>Serenity</strong> - Provides additional <strong>Focus</strong>. More serenity allows more balls to go out of bounds before you lose focus and fail the meditation.</li>
                    </ul>
                    <p>Use your resources wisely, maintain your inner focus, and explore the vast array of perspectives unlocked through meditation. Each successful meditation brings you one step closer to deeper understanding and metaphysical mastery.</p>`,
        isKey: true,
        
    },
    {         
        name: `Yin and Yang`,
        cost: { copium: 1e97, delusion: 1e97, yachtMoney: 1e97, trollPoints: 1e97, hopium: 0, knowledge: 0, power: 0, serenity: 1 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 7e42, trollPointsPerSecond: 0, hopiumPerSecond: 1e47, knowledgePerSecond: 3e13, powerPerSecond: 0, serenityPerSecond: 0.008 },
        img: `imgs/arena_yin_yang.png`,
        isMeditation: true,
        achievement: 'Focus Your Mind',
        isKey: true,
        message: `Congratulations on your first successful meditation! Through this meditation, you have gained a deeper understanding of Yin and Yang, the dual forces that create balance and harmony in the universe. You have learned that <strong>opposites are interconnected</strong>, and each one gives rise to the other. There is no light without darkness, no strength without softness, and no action without stillness. By embracing both sides, you now understand that balance is the key to living in harmony with yourself and the world around you. Continue to seek balance in all things, and you will find peace.`,
    },
    {         
        name: `Ignoring Stereotypes`,
        cost: { copium: 1e98, delusion: 1e98, yachtMoney: 1e98, trollPoints: 1e98, hopium: 0, knowledge: 0, power: 0, serenity: 0.5 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 2e40, hopiumPerSecond: 0, knowledgePerSecond: 2e14, powerPerSecond: 0, serenityPerSecond: 0.0001 },
        img: `imgs/successful_black_guy.jpg`,
    },
    {         
        name: `Attack The Day`,
        cost: { copium: 2e98, delusion: 2e98, yachtMoney: 2e98, trollPoints: 2e98, hopium: 0, knowledge: 0, power: 0, serenity: 2 },
        earnings: { copiumPerSecond: 3e40, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 3e14, powerPerSecond: 0, serenityPerSecond: 0.00006 },
        img: `imgs/attack_the_day.jpg`,
    },
    {         
        name: `Infinite Embrace`,
        cost: { copium: 1e99, delusion: 1e99, yachtMoney: 1e99, trollPoints: 1e99, hopium: 0, knowledge: 0, power: 0, serenity: 100 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 2e43, trollPointsPerSecond: 0, hopiumPerSecond: 1e47, knowledgePerSecond: 1e14, powerPerSecond: 0, serenityPerSecond: 0.001 },
        img: `imgs/infinite_embrace.jpg`,
        message: `<p>Once you reach 1000 serenity, the Infinite Embrace will become available, offering you the chance to perform a sacred act that will resonate throughout the multiverse.</p>
                <p>Physically, the Infinite Embrace resets all of your progress—prestiges, god modes, big crunches, the Hall of Knowledge, and the Hall of Power. But metaphysically, it is an infusion of boundless love into the fabric of existence. Each time you perform this ritual, you strengthen the universe, spreading warmth, harmony, and love to every future incarnation.</p>
                <p><strong>The more serenity you accumulate in this multiverse, the more Love Points will be injected during the embrace.</strong> These Love Points are permanent, ensuring that your connection to the multiverse grows with each cycle, and they can be spent in the Hall of Love, which remains unlocked across all Infinite Embraces.</p>
                <p>Through this act, the multiverse is shaped by your love and serenity, enriching all future cycles. Your achievements and Love Points will remain intact, continuing to grow as you transcend each cycle. The embrace is a cosmic renewal, where love fuels the multiverse and your journey within it.</p>`,
    },
    {         
        name: `Is it worth it?`,
        cost: { copium: 0, delusion: 1e100, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 1e76, power: 0, serenity: 90 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 3e40, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0.002 },
        img: `imgs/to_crunch_or_not_to_crunch.jpg`,
    },
    {         
        name: `Existentialism`,
        cost: { copium: 1.5e100, delusion: 1.5e100, yachtMoney: 1.5e100, trollPoints: 1.5e100, hopium: 0, knowledge: 0, power: 0, serenity: 5 },
        earnings: { copiumPerSecond: 2.2e45, delusionPerSecond: 1.6e45, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 1e47, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0.05 },
        img: `imgs/arena_existentialism.png`,
        isMeditation: true,
        isKey: true,
        message: `You've uncovered the truth that <strong>meaning in life is not preordained</strong>—it is something you must create for yourself. In a vast and indifferent universe, you alone have the freedom to choose your purpose. Through this meditation, you’ve learned that the path to fulfillment is in embracing your freedom and accepting responsibility for your choices. Seek meaning in your actions, and the universe will respond.`,
    },
    {         
        name: `Classic Science`,
        cost: { copium: 0, delusion: 0, yachtMoney: 5e100, trollPoints: 8e100, hopium: 0, knowledge: 1e76, power: 0, serenity: 50 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1e41, hopiumPerSecond: 1e47, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0.0003 },
        img: `imgs/classic_science.jpg`,
    },
    {         
        name: `Humorless Resolve`,
        cost: { copium: 5e100, delusion: 5e100, yachtMoney: 0, trollPoints: 5e100, hopium: 0, knowledge: 1e76, power: 0, serenity: 500 },
        earnings: { copiumPerSecond: -1e40, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1e41, hopiumPerSecond: 1e47, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0.0005 },
        img: `imgs/cant_take_a_joke.jpg`,
    },
    {         
        name: `The Best Revenge`,
        cost: { copium: 0, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 1e103, knowledge: 0, power: 0, serenity: 500 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 1e47, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0.1 },
        img: `imgs/best_revenge.jpg`,
    },
    {         
        name: `Altruism`,
        cost: { copium: 1e102, delusion: 1e102, yachtMoney: 1e102, trollPoints: 1e102, hopium: 0, knowledge: 0, power: 0, serenity: 7500 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 3e46, trollPointsPerSecond: 0, hopiumPerSecond: 1e47, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0.9 },
        img: `imgs/arena_altruism.png`,
        isMeditation: true,
        isKey: true,
        message: `Through this meditation, you’ve learned that <strong>true fulfillment comes from selfless acts</strong> and putting the well-being of others above your own. Altruism teaches that by lifting others up, we create a better world for everyone. Compassion, generosity, and kindness ripple through the world, leaving a lasting positive impact. Continue to give without expectation, and you’ll find the world gives back in ways you never imagined.`,
    },
    {         
        name: `One in a Million`,
        cost: { copium: 1.8e104, delusion: 0, yachtMoney: 2.5e104, trollPoints: 5e103, hopium: 0, knowledge: 1e76, power: 0, serenity: 9400 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 2e15, powerPerSecond: 0, serenityPerSecond: 0.02 },
        img: `imgs/doesnt_go_through_phone.jpg`,
    },
    {         
        name: `Must be patient`,
        cost: { copium: 3.8e105, delusion: 4.1e104, yachtMoney: 0, trollPoints: 3e104, hopium: 0, knowledge: 1e77, power: 1e20, serenity: 3500 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 3e41, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0.08 },
        img: `imgs/must_be_patient.jpg`,
    },
    {         
        name: `Hotkeys`,
        cost: { copium: 8e106, delusion: 0, yachtMoney: 0, trollPoints: 2e104, hopium: 0, knowledge: 5e79, power: 0, serenity: 25000 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1e42, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0.11 },
        img: `imgs/hotkeys.jpg`,
        message: `<p>What the hell? Have these hotkeys been in the game all along? Yes, they have!</p>
                <p>Here’s a quick rundown of the powerful hotkeys you can use to streamline your gameplay:</p>

                <ul>
                    <li><strong>M Key:</strong> Same as <strong>Buy Max</strong> button (you should have already known about this one)</li>
                    <li><strong>S Key:</strong> Same as above but for <strong>Buy Seen</strong>.</li>
                    <li><strong>B Key:</strong> Toggle <strong>Auto Buy Upgrades</strong>.</li>
                    <li><strong>P Key:</strong> Toggle <strong>Auto Prestige</strong>. Activate Auto Prestige at the last threshold or disable it to 1e300.</li>
                    <li><strong>A Key:</strong> Toggle <strong>Auto Ascend</strong>. Pressing this will either set Auto Ascend to the maximum or disable it altogether.</li>
                    <li><strong>T Key:</strong> Toggle <strong>Auto Transcend</strong>. Same as above for Transcend.</li>
                    <li><strong>F Key:</strong> Toggle <strong>Auto Fight</strong> (unlockable in Hall of Love).</li>
                    <li><strong>Z Key:</strong> Open <strong>Prestige</strong> (if prestige possible).</li>
                    <li><strong>X Key:</strong> Open <strong>Ascend</strong> (if ascend possible).</li>
                    <li><strong>C Key:</strong> Open <strong>Transcend</strong> Menu (if transcend possible).</li>
                    <li><strong>V Key:</strong> Open <strong>Big Crunch</strong> Menu (if big crunch possible).</li>
                    <li><strong>N Key:</strong> Open <strong>Embrace</strong> Menu (if embrace possible).</li>
                    <li><strong>SPACE BAR Key:</strong> Toggle <strong>Select First X</strong> upgrades (only in Ascend / Transcend).</li>
                </ul>

                <p>Now you know! Use these hotkeys to gain an edge and automate your progress in ways you never imagined.</p>`,
    },
    {         
        name: `Rastafarianism`,
        cost: { copium: 1e105, delusion: 1e105, yachtMoney: 1e105, trollPoints: 1e104, hopium: 0, knowledge: 0, power: 0, serenity: 10420 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 4.2e47, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 4.2 },
        img: `imgs/arena_rastafarianism.png`,
        isMeditation: true,
        isKey: true,
        message: `In this meditation, you’ve connected with the <strong>spiritual power of unity, peace, and respect for all living things</strong>. Rastafarianism teaches the importance of freedom, self-awareness, and living in harmony with nature. By embracing these values, you have strengthened your bond with the earth and your community. Walk in the light of peace and continue to cultivate a deep respect for life in all its forms.`,
    },
    {         
        name: `One Coffee, Extra Sass`,
        cost: { copium: 2e105, delusion: 0, yachtMoney: 0, trollPoints: 5e106, hopium: 0, knowledge: 0, power: 0, serenity: 50000 },
        earnings: { copiumPerSecond: 1e47, delusionPerSecond: 0, yachtMoneyPerSecond: -2e46, trollPointsPerSecond: 1e47, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0.3 },
        img: `imgs/coffee_opinion.jpg`,
    },
    {         
        name: `Quality Time`,
        cost: { copium: 3e108, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 150000 },
        earnings: { copiumPerSecond: 5e47, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0.5 },
        img: `imgs/gf_playing_games.jpg`,
    },
    {         
        name: `Dualism`,
        cost: { copium: 1e108, delusion: 1e108, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 200000 },
        earnings: { copiumPerSecond: 1e48, delusionPerSecond: 1e48, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 1e16, powerPerSecond: 0, serenityPerSecond: 12 },
        img: `imgs/arena_dualism.png`,
        isMeditation: true,
        isKey: true,
        message: `In this meditation, you’ve learned that <strong>existence is shaped by the interplay between two fundamental forces</strong>: body and soul, mind and matter. Dualism shows us that both the physical and spiritual worlds are essential and interconnected. By recognizing and balancing these opposing yet complementary forces, you gain deeper insight into yourself and the universe. Embrace both sides to live in harmony and reach your full potential.`,
    },
    {         
        name: `Impossible Meditation`,
        cost: { copium: 3e108, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 150000 },
        earnings: { copiumPerSecond: 5e47, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 0.5 },
        img: `imgs/trying_my_best.jpg`,
    },
    {         
        name: `Ship Has Sailed`,
        cost: { copium: 1e110, delusion: 0, yachtMoney: 0, trollPoints: 1e111, hopium: 2e113, knowledge: 0, power: 0, serenity: 500000 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: -5e47, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 2.5 },
        img: `imgs/ship_has_sailed.jpg`,
    },
    {
        name: `More Decisions...`,
        cost: { copium: 0, delusion: 1e114, yachtMoney: 0, trollPoints: 3e114, hopium: 0, knowledge: 0, power: 1e23, serenity: 2e7 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 3e47, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 3.4 },
        img: `imgs/two_buttons_2.jpg`,     
    },
    {         
        name: `Libertarianism`,
        cost: { copium: 5e114, delusion: 0, yachtMoney: 5e114, trollPoints: 0, hopium: 0, knowledge: 0, power: 2e24, serenity: 1e8 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 2e50, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 2e17, powerPerSecond: 0, serenityPerSecond: 199 },
        img: `imgs/arena_libertarianism.png`,
        isMeditation: true,
        isKey: true,
        message: `You’ve discovered that <strong>true freedom lies in the ability to live independently and make your own choices</strong>, without unnecessary constraints. Libertarianism teaches the importance of personal liberty and responsibility, where individuals thrive when allowed to pursue their own paths. Through this meditation, you’ve embraced the value of autonomy, and with it, the power to shape your own destiny.`,
    },
    {         
        name: `Different Tastes`,
        cost: { copium: 0, delusion: 2e116, yachtMoney: 0, trollPoints: 1e116, hopium: 0, knowledge: 0, power: 0, serenity: 1e9 },
        earnings: { copiumPerSecond: -1e49, delusionPerSecond: 1e50, yachtMoneyPerSecond: 0, trollPointsPerSecond: 2e49, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 24 },
        img: `imgs/different_tastes.jpg`,
    },
    {         
        name: `One Drink`,
        cost: { copium: 1e120, delusion: 5e120, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 1e9 },
        earnings: { copiumPerSecond: 1e50, delusionPerSecond: 0, yachtMoneyPerSecond: -3e49, trollPointsPerSecond: 8e49, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 35 },
        img: `imgs/one_drink.jpg`,
    },
    {         
        name: `They Whatevered`,
        cost: { copium: 1e121, delusion: 0, yachtMoney: 2e121, trollPoints: 3e122, hopium: 0, knowledge: 0, power: 0, serenity: 5e9 },
        earnings: { copiumPerSecond: 1e50, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 8e49, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 79 },
        img: `imgs/whatever_bitches.jpg`,
    },
    {         
        name: `Hinduism`,
        cost: { copium: 1e121, delusion: 0, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 1e27, serenity: 2e9 },
        earnings: { copiumPerSecond: 5e52, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 1e52, knowledgePerSecond: 3e20, powerPerSecond: 0, serenityPerSecond: 3250 },
        img: `imgs/arena_hinduism.png`,
        isMeditation: true,
        isKey: true,
        message: `Through this meditation, you’ve gained insight into the <strong>cycle of life, karma, and spiritual growth</strong>. Hinduism teaches that every action shapes your journey toward enlightenment, and by aligning with your dharma (righteous path), you move closer to your true purpose. You’ve learned the importance of inner peace, self-awareness, and respect for the interconnectedness of all life. Continue on your path with an open heart, and the universe will guide you.`,
    },
    {         
        name: `We All Deserve Breaks`,
        cost: { copium: 0, delusion: 1e122, yachtMoney: 0, trollPoints: 2e123, hopium: 0, knowledge: 0, power: 0, serenity: 2e10 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 2e52, yachtMoneyPerSecond: -2e51, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 280 },
        img: `imgs/not_adulting.jpg`,
    },
    {         
        name: `Overdue Xzibit Cameo`,
        cost: { copium: 1e127, delusion: 0, yachtMoney: 1e128, trollPoints: 4.2e127, hopium: 0, knowledge: 0, power: 0, serenity: 9e10 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 4.2e53, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 420 },
        img: `imgs/xzibit.jpg`,
    },
    {         
        name: `Shinto`,
        cost: { copium: 1e128, delusion: 1e128, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 2e31, serenity: 1e12 },
        earnings: { copiumPerSecond: 5e54, delusionPerSecond: 5e54, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 7e52, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 47000 },
        img: `imgs/arena_shinto.png`,
        isMeditation: true,
        isKey: true,
        message: `Through this meditation, you’ve deepened your <strong>connection to the kami (spirits) that reside in nature and all things</strong>. Shinto teaches that harmony with the natural world brings clarity, peace, and spiritual balance. By honoring the sacredness of life, you’ve learned that everything around you is alive with spiritual energy. Continue to respect and live in harmony with nature, and it will nurture your spirit in return.`,
    },
    {         
        name: `Dad Joke #1`,
        cost: { copium: 0, delusion: 0, yachtMoney: 4e128, trollPoints: 4e128, hopium: 0, knowledge: 0, power: 0, serenity: 1e13 },
        earnings: { copiumPerSecond: -1e53, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 4e54, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 4567 },
        img: `imgs/dad_joke_1.jpg`,
    },
    {         
        name: `Dad Joke #2`,
        cost: { copium: 0, delusion: 0, yachtMoney: 8e128, trollPoints: 8e128, hopium: 0, knowledge: 0, power: 0, serenity: 3e13 },
        earnings: { copiumPerSecond: -2e53, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 8e54, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 5678 },
        img: `imgs/dad_joke_2.jpg`,
    },
    {         
        name: `Dad Joke #3`,
        cost: { copium: 0, delusion: 0, yachtMoney: 1.6e129, trollPoints: 1.6e129, hopium: 0, knowledge: 0, power: 0, serenity: 9e13 },
        earnings: { copiumPerSecond: -3e53, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1.6e55, hopiumPerSecond: 1e52, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 6789 },
        img: `imgs/dad_joke_3.jpg`,
    },
    {         
        name: `Stoicism`,
        cost: { copium: 1e135, delusion: 0, yachtMoney: 1e135, trollPoints: 0, hopium: 0, knowledge: 0, power: 2e34, serenity: 2e13 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 1e56, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 8e25, powerPerSecond: 0, serenityPerSecond: 600000 },
        img: `imgs/arena_stoicism.png`,
        isMeditation: true,
        isKey: true,
        message: `Through this meditation, you’ve embraced the <strong>strength of inner calm and resilience</strong> in the face of life’s challenges. Stoicism teaches that while you cannot control external events, you can control your response to them. By mastering your emotions and focusing on virtue, you’ve gained the power to face any hardship with grace and wisdom. Continue to cultivate this inner strength, and you will find peace in all circumstances.`,
    },
    {
        name: `Second Pizza Meme`,
        cost: { copium: 2.5e136, delusion: 0, yachtMoney: 2.5e136, trollPoints: 5e136, hopium: 2e136, knowledge: 0, power: 0, serenity: 1e14 },
        earnings: { copiumPerSecond: 7.5e55, delusionPerSecond: 0, yachtMoneyPerSecond: -1e55, trollPointsPerSecond: 7e55, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 15000 },
        img: `imgs/pizza_like.jpg`,
    },
    {
        name: `Schrodinger's Cat`,
        cost: { copium: 2e138, delusion: 2e138, yachtMoney: 0, trollPoints: 0, hopium: 0, knowledge: 0, power: 0, serenity: 1e15 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 5e55, yachtMoneyPerSecond: 0, trollPointsPerSecond: 1e56, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 65000 },
        img: `imgs/schrodingers_cat.jpg`,
    },
    {         
        name: `Deism`,
        cost: { copium: 1e140, delusion: 0, yachtMoney: 0, trollPoints: 1e140, hopium: 0, knowledge: 0, power: 1e39, serenity: 1e17 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 7e57, hopiumPerSecond: 0, knowledgePerSecond: 0, powerPerSecond: 0, serenityPerSecond: 9e6 },
        img: `imgs/arena_deism.png`,
        isMeditation: true,
        isKey: true,
        message: `Through this meditation, you’ve understood that the <strong>universe operates under the natural laws set in motion by a higher power</strong>, yet it is up to you to seek truth and purpose. Deism teaches that reason, observation, and understanding of the world around you lead to enlightenment. With this knowledge, you’ve realized that your journey is shaped by your actions and understanding of the universe's order.`,
    },
    {         
        name: `Skepticism`,
        cost: { copium: 0, delusion: 1e145, yachtMoney: 0, trollPoints: 1e145, hopium: 0, knowledge: 0, power: 5e42, serenity: 1e20 },
        earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yachtMoneyPerSecond: 0, trollPointsPerSecond: 0, hopiumPerSecond: 0, knowledgePerSecond: 1e30, powerPerSecond: 0, serenityPerSecond: 1.3e8 },
        img: `imgs/arena_skepticism.png`,
        isMeditation: true,
        isKey: true,
        message: `In this meditation, you’ve learned the <strong>value of questioning and seeking truth</strong>. Skepticism teaches that through doubt, we grow closer to understanding, as every idea must be examined and tested. By embracing a mindset of curiosity and critical thinking, you’ve unlocked the path to deeper knowledge. Continue to question, explore, and refine your beliefs, and truth will reveal itself in time.`,
    },
];
