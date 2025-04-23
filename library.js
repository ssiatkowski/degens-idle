const librarySkills = [
    { name: 'Cookie Recipe', cost: 1, description: 'This ancient cookie recipe permanently makes cookie clicks another 10x more powerful.', unlocked: false, level: 'History' },
    { name: 'Knowledge Generation', cost: 400, description: 'After Prestiging or Ascending, begin knowledge generation immediately without reaching -1T delusion.', unlocked: false, level: 'History' },
    { name: 'Trade Ratios', cost: 1500, description: 'Lower trade ratio to 5:1 for top 4 resources and 5M:1 for Hopium.', unlocked: false, level: 'History' },
    { name: 'Cookie Boost', cost: 3e9, description: 'Cookie clicks now generate resources equal to your earnings per half a second (for the first 4 resources)', unlocked: false, level: 'History' },
    { name: 'Hopeful Cookie', cost: 3e26, description: 'Boosted cookie clicks also generate hopium at 1/2 earnings rate.', unlocked: false, level: 'History' },
    { name: 'Knowledgeable Cookie', cost: 9e45, description: 'Boosted cookie clicks generate knowledge at 1/4 earnings rate.', unlocked: false, level: 'History' },

    { name: 'Cure for Delusion', cost: 5, description: 'Unlock ability to toggle whether delusion gain is positive or negative.', unlocked: false, level: 'Science' },
    { name: 'Luck is Rigged', cost: 777, description: 'Remove 1 unlucky box. Makes lucky boxes better (25%-125% instead of 10%-100%) and unlucky boxes less bad (5%-40% instead of 5%-55%).', unlocked: false, level: 'Science' },
    { name: "I Can't Math", cost: 9000, description: 'Math Game timer increased from 12s to 20s, # portals reduced from 15 to 12, and reward is doubled.', unlocked: false, level: 'Science' },
    { name: "Short Term Memory", cost: 80000, description: 'Memory Game sequence length reduced to (3-6) instead of (4-7) and reward is tripled.', unlocked: false, level: 'Science' },
    { name: "Click Speed Demon", cost: 1600000, description: 'Dots in Speed Game get slightly larger and reward is tripled.', unlocked: false, level: 'Science' },
    { name: 'Mini Gamer', cost: 7.5e23, description: 'All mini game cooldowns are reduced by 50%.', unlocked: false, level: 'Science' },

    { name: 'Prestige Base', cost: 5000, description: 'Increase Base prestige multiplier from 1.5 to 1.75. Huuge.', unlocked: false, level: 'Nonlinear Partial Differential Equations' },
    { name: '2D Ascension', cost: 230000, description: 'Learn how to ascend God Mode Levels while only folding the space around you into two dimensions. Mathematically, instead of prestige changing to x**(1/3), it changes to x**(2/3).', unlocked: false, level: 'Nonlinear Partial Differential Equations' },
    { name: 'Less Diminishing God-Mode', cost: 1e14, description: 'Decrease diminishing returns at higher God-Mode levels. Mathematically, instead of diminishing at 97.5%, the multiplier diminishes at 98.5%. (This is big at high god-mode levels)', unlocked: false, level: 'Nonlinear Partial Differential Equations' },
    { name: 'Much Less Diminishing Parallel God-Mode', cost: 2e35, description: 'Greatly decrease diminishing returns at higher Parallel Universe God-Mode levels. Mathematically, multiplier diminishes at 99.0% instead of 97.5%. (Incredibly OP at higher PU God Mode levels)', unlocked: false, level: 'Nonlinear Partial Differential Equations' },
    { name: 'Linear Ascension', cost: 2e43, description: 'Learn how to ascend God Mode without folding dimensions. Prestige multiplier only goes down by a factor of 2.', unlocked: false, level: 'Nonlinear Partial Differential Equations' },
    { name: 'Perfect God-Mode', cost: 2e57, description: 'Make God-Mode better than PU God-Mode. Diminishes at 99.2%. (You must already know this is huge)', unlocked: false, level: 'Nonlinear Partial Differential Equations' },

    { name: 'Buy Markers', cost: 2, description: 'Purchased Upgrades will now have a switch indicating whether or not they should be bought using "Buy Seen" and "Buy All" buttons. (Can toggle all in Automation Settings) ', unlocked: false, level: 'Artificial Intelligence' },
    { name: 'Triple Ascension', cost: 30, description: 'Gain up to 3 God-Mode levels per Ascension. Also select up to 3 upgrades to enhance to God Mode.', unlocked: false, level: 'Artificial Intelligence' },
    { name: 'Cookie Clicker Clicker', cost: 350, description: 'After Prestiging or Ascending, automatically click the cookie 10 times per second for 15 seconds.', unlocked: false, level: 'Artificial Intelligence' },
    { name: 'Quadruple Ascension', cost: 4e6, description: 'Gain up to 4 God-Mode levels per Ascension. Also select up to 4 upgrades to enhance to God Mode.', unlocked: false, level: 'Artificial Intelligence' },
    { name: 'Septuple Transcendence', cost: 7e19, description: 'Gain up to 7 Parallel Universe God-Mode levels per Transcendence. Also select up to 7 upgrades to enhance to PU God Mode.', unlocked: false, level: 'Artificial Intelligence' },
    { name: 'Tenfold Ascension', cost: 1e25, description: 'Gain up to 10 God-Mode levels per Ascension. Also select up to 10 upgrades to enhance to God Mode.', unlocked: false, level: 'Artificial Intelligence' },

    { name: 'Autobuy Upgrades', cost: 3e21, description: `Will purchase affordable Marked upgrades (even unseen) every 1.5 seconds. (Can toggle in Automation Settings)`, unlocked: false, level: 'Robotics' },
    { name: 'Perpetual Prestige', cost: 1e24, description: 'Auto-Prestige ability.  (Target prestige multiplier can be set in Automation Settings. Default=100)', unlocked: false, level: 'Robotics' },
    { name: 'Eternal Ascension', cost: 1e28, description: 'Auto-Ascend ability. (Target # upgrades can be set in Automation Settings. Default=Off)', unlocked: false, level: 'Robotics' },
    { name: 'Quantum Symphony', cost: 1e40, description: 'Auto-Transcend. (Similar to Auto-Ascend)', unlocked: false, level: 'Robotics' },

    { name: 'Knowledge is Power', cost: 1e6, description: 'Unlock new resource Power. Power is always generated based on your current amount of Knowledge.', unlocked: false, level: 'Celestial Bodies' },
    { name: 'Big Crunch', cost: 8e11, description: 'Could this be what Power is for? Unlock ability to force the universe into a Big Crunch and to be reborn anew!', unlocked: false, level: 'Celestial Bodies' },
    { name: 'Money is Power, too', cost: 2.5e20, description: 'Add a multiplier to Power generation based on Yacht Money (though it scales much less than with Knowledge)', unlocked: false, level: 'Celestial Bodies' },
    { name: 'Map to Hall of Power', cost: 1e24, description: 'You can now look at and admire the Power Hall button.', unlocked: false, level: 'Celestial Bodies' },
    { name: 'Compressed Power', cost: 5e32, description: 'Current power counts as 3x more for Big Crunch Power.', unlocked: false, level: 'Celestial Bodies' },
    { name: 'Condensed Power', cost: 1e63, description: 'Current power counts as 30x more for Big Crunch Power.', unlocked: false, level: 'Celestial Bodies' },


    // Add more skills as needed
];

let graphsRevisited = new Set([]);

const librarySkillsContainer = document.getElementById('librarySkills');

function unlockLibrarySkill(skill, duringLoad = false, infoOnly = false) {
    skill.unlocked = true;
    const skillDiv = document.querySelector(`.libraryskill[data-skill-name="${skill.name}"]`);

    if (skillDiv) {
        skillDiv.classList.remove('locked', 'affordable');
        skillDiv.classList.add('purchased');
        skillDiv.innerHTML = `
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        `;

        switch (skill.name) {
            case 'Cookie Recipe':
                cookieClickMultiplier = 100;
                if (!cookieBoost && !cookieHopeful && !cookieKnowledgeable){
                    const cookieTooltip = document.querySelector('#cookieButton .cookieTooltip');
                    cookieTooltip.textContent = `Each cookie click counts as ${cookieClickMultiplier} clicks on collect buttons for Copium, Delusion, Yacht Money, and Troll Points!`;
                }
                break;

            case 'Knowledge Generation':
                knowledgeGenerationSkill = true;
                break;

            case 'Trade Ratios':
                improvedTradeRatio = true;
                break;

            case 'Cookie Boost':
                cookieBoost = true;
                if (!cookieHopeful && !cookieKnowledgeable){
                    const cookieTooltip = document.querySelector('#cookieButton .cookieTooltip');
                    cookieTooltip.textContent = `Each cookie click generates half second worth of Copium, Delusion, Yacht Money, and Troll Points.`;
                }
                break;

            case 'Hopeful Cookie':
                cookieHopeful = true;
                if (!cookieKnowledgeable){
                    const cookieTooltip = document.querySelector('#cookieButton .cookieTooltip');
                    cookieTooltip.textContent = `Each cookie click generates half second worth of Copium, Delusion, Yacht Money, Troll Points, and Hopium.`;
                }
                break;

            case 'Knowledgeable Cookie':
                cookieKnowledgeable = true;
                const cookieTooltip = document.querySelector('#cookieButton .cookieTooltip');
                cookieTooltip.textContent = `Each cookie click generates half second worth of Copium, Delusion, Yacht Money, Troll Points, Hopium, and Knowledge.`;
                break;



            case 'Cure for Delusion':
                document.getElementById('toggleDelusionLabel').classList.remove('hidden');
                // Check the state of delusion and update the switch position accordingly
                const toggleDelusion = document.getElementById('toggleDelusion');
                toggleDelusion.checked = true;
                delusionPerSecond = Math.abs(delusionPerSecond);
                if (!duringLoad){
                    updateEffectiveMultipliers();
                    updateDisplay();
                }
                break;

            case 'Luck is Rigged':
                luckGameSkill = true;
                break;

            case "I Can't Math":
                mathGameSkill = true;
                break;

            case "Short Term Memory":
                memoryGameSkill = true;
                break;

            case "Click Speed Demon":
                speedGameSkill = true;
                break;

            case "Mini Gamer":
                miniGamerSkill = true;
                unlockMiniGames();
                break;

            case 'Prestige Base':
                prestigeBaseValue = enlightenedPrestigeSkill ? 1.775 : 1.75;
                if (!duringLoad && (lovePoints == 0 || infoOnly)) {
                    showMessageModal('Prestige Base', 'For you math nerds out there, the formula for prestige multiplier is <strong>base^(log10(minResource/1000)+1)</strong>.<br><br>Graph shows the Prestige Multiplier scaling with 1.5 base vs 1.75 base. This difference becomes huge later in the game. When your min resource is at 1Qi that is already 10x difference and only increases exponentially form there!', false, false, 'imgs/graphs/prestige_base.png');
                    graphsRevisited.add('Prestige Base');
                }
                break;

            case '2D Ascension':
                twoDimensionalAscensionSkill = true;
                if (!duringLoad && (lovePoints == 0 || infoOnly)) {
                    showMessageModal('2D Ascension', 'Cube root was rough! Now you at least get some prestige mult left after ascending.', false, false, 'imgs/graphs/2d_ascension.png');
                    graphsRevisited.add('2D Ascension');
                }
                break;

            case 'Less Diminishing God-Mode':
                lessDiminishingGodModeSkill = true;
                if (!duringLoad && (lovePoints == 0 || infoOnly)) {
                    showMessageModal('Less Diminishing God-Mode', `Here's another nerdy equation: <strong>GodModeMultiplier = &prod;<sub>i=0</sub><sup>gmLevel - 1</sup> &#40;1 + 0.25 &times; diminishFactor<sup>i</sup>&#41</strong><br><br>Graph shows the God-Mode Multiplier scaling when diminishing at 97.5% vs 98.5%. As you can see, at higher God-Mode levels this makes a huge difference! The multiplier is already 2 orders of magnitude greater at God-Mode Level 150.`, false, false, 'imgs/graphs/gm_diminishing.png');
                    graphsRevisited.add('Less Diminishing God-Mode');
                }
                godModeMultiplier = calculateGodModeMultiplier(godModeLevel);
                updateMultipliersDisplay();
                updateEffectiveMultipliers();
                break;

            case 'Much Less Diminishing Parallel God-Mode':
                lessDiminishingPUGodModeSkill = true;
                puGodMultiplier = calculatePUGodModeMultiplier(puGodLevel);
                if (!duringLoad && (lovePoints == 0 || infoOnly)) {
                    showMessageModal('Much Less Diminishing Parallel God-Mode', 'Parallel God-Mode uses the same equation: <strong>GodModeMultiplier = &prod;<sub>i=0</sub><sup>gmLevel - 1</sup> &#40;1 + 0.25 &times; diminishFactor<sup>i</sup>&#41</strong><br><br>In the quantum entangled universe, you discover that there is less interference, allowing you to scale the diminishing returns much more effectively. Graph shows the Parallel Universe God-Mode Multiplier scaling when diminishing at 97.5% (original) vs 98.5% (Optimized God-Mode) vs 99.0% (Optimized Parallel God-Mode). As you can see, at higher Parallel Universe God-Mode levels this is quite insane! The multiplier is almost 6 orders of magnitude greater at PU God-Mode Level 250.', false, false, 'imgs/graphs/pugm_diminishing.png');
                    graphsRevisited.add('Much Less Diminishing Parallel God-Mode');
                    updateMultipliersDisplay();
                    updateEffectiveMultipliers();
                }
                break;

            case 'Linear Ascension':
                linearAscensionSkill = true;
                if (!duringLoad && (lovePoints == 0 || infoOnly)) {
                    showMessageModal('Linear Ascension', 'Ahh, the difference that exponential vs linear makes.', false, false, 'imgs/graphs/linear_ascension.png');
                    graphsRevisited.add('Linear Ascension');
                }
                break;

            case 'Perfect God-Mode':
                perfectGodModeSkill = true;
                if (!duringLoad && (lovePoints == 0 || infoOnly)) {
                    showMessageModal(
                        'Perfect God-Mode',
                        `Remember the equation: <strong>GodModeMultiplier = &prod;<sub>i=0</sub><sup>gmLevel - 1</sup> &#40;1 + 0.25 &times; diminishFactor<sup>i</sup>&#41;</strong><br><br>
                        Now featuring a superior diminishing factor of <strong>99.2%</strong>! This is a significant improvement over the <strong>99%</strong> factor in Parallel God Mode. 
                        The graph below illustrates how this seemingly small difference leads to a much higher multiplier, especially at higher God-Mode levels. 
                        At God-Mode Level 150, you will see an immediate improvement of about 5 orders of magnitude.`,
                        false,
                        false,
                        'imgs/graphs/perfect_gm_diminishing.png'
                    );
                    graphsRevisited.add('Perfect God-Mode');
                }
                godModeMultiplier = calculateGodModeMultiplier(godModeLevel);
                updateMultipliersDisplay();
                updateEffectiveMultipliers();
                break;

            case 'Cookie Clicker Clicker':
                cookieAutoClicker = true;
                break;

            case 'Triple Ascension':
                unlockAchievement('Now we are Progressing');
                numAscensionUpgrades = Math.max(numAscensionUpgrades, 3);
                break;

            case 'Buy Markers':
                buyMarkersSkill = true;
                if (!duringLoad && (lovePoints == 0 || infoOnly)) {
                    showMessageModal(`Upgrade Markers`, `You’ve unlocked the highly anticipated Upgrade Markers! This breakthrough represents the pinnacle of artificial intelligence, pushing us a step closer toward true artificial sentience. Imagine the possibilities as your AI not only becomes smarter but also more discerning in its actions. This isn't just an upgrade; it's a revolution in AI capabilities.<br><br>Remember to toggle the setting that lets the AI know which upgrades to focus on. This meticulous control will maximize efficiency and performance. Trust your instincts—this feature will undoubtedly prove invaluable in the future. Embrace the future of AI!`);
                }
                enableAllBuyMarkers();
                break;

            case 'Quadruple Ascension':
                numAscensionUpgrades = Math.max(numAscensionUpgrades, 4);
                break;

            case 'Septuple Transcendence':
                numPUAscensionUpgrades = Math.max(numPUAscensionUpgrades, 7);
                break;

            case 'Tenfold Ascension':
                numAscensionUpgrades = Math.max(numAscensionUpgrades, 10);
                break;

            case 'Autobuy Upgrades':
                autobuyUpgradesSkill = true;
                if (autobuyIntervalId === null) { // Check if the interval is not already running
                    autobuyIntervalId = setInterval(autobuyUpgrades, fasterAutobuyerskill ? 250 : 1500);
                }
                break;

            case 'Knowledge is Power':
                unhidePower();
                if (!duringLoad && (lovePoints == 0 || infoOnly)) {
                    showMessageModal('Knowledge is Power', 'The Power equation is <strong>Power per Second = (knowledge)<sup>1/3</sup> / 10<sup>12</sup></strong>.', false, false, 'imgs/graphs/power_per_second_eq.png');
                    graphsRevisited.add('Knowledge is Power');
                }
                break;

            case 'Big Crunch':
                if (!duringLoad && (lovePoints == 0 || infoOnly)) {
                    showMessageModal(`Congratulations, Cosmic Architect!`,
                        `<p>You have found a use for Power by forcing the universe into a Big Crunch! Imagine speeding up the decline of everything around you, hastening the collapse of the cosmos into an infinitely dense point, only to trigger a spectacular rebirth. It's like hitting the ultimate reset button on reality itself!</p>
                        <p>As you initiate the Big Crunch, picture galaxies spiraling inward, stars merging, and black holes converging in an epic cosmic finale. And just when it seems all is lost, BOOM! A new universe emerges from the singularity. A fresh start, a blank slate, where all the lessons learned from your previous existence can be leveraged to dominate even harder.</p>
                        <p>Don't think it's going to be a cakewalk! You'll have to regain your God-Mode levels, but here's the kicker: with all the knowledge and experience you've accumulated, it'll be much easier this time around. No more stumbling in the dark; you're now armed with the wisdom of countless cycles. Your prestige multiplier isn't just a number—it's a testament to your cosmic resilience and cunning.</p>
                        <p>So, strap in and prepare for the ultimate space-time rollercoaster. You're not just a player; you're a cosmic architect, reshaping the universe with each Big Crunch. Embrace the power, relish the rebirth, and remember: in this grand game of Degens Idle, you hold the keys to the cosmos. Now go forth and crunch the universe with style!</p>
                        <p>Welcome to the next level of your degenerate adventure. The universe is your playground, and you have the ultimate power to reshape it as you see fit. Time to show the cosmos who’s boss!</p>`);
                }
                unlockBigCrunch();
                break;

            case 'Money is Power, too':
                moneyIsPowerTooSkill = true;
                if (!duringLoad && (lovePoints == 0 || infoOnly)) {
                    showMessageModal('Money is Power, too', 'The Power equation becomes <strong>Power per Second = (Knowledge<sup>1/3</sup> / 10<sup>12</sup>) * (1 + (YachtMoney<sup>1/30</sup> / 100))</strong>. Any increase to power generation is valuable!', false, false, 'imgs/graphs/power_per_second_eq2.png');
                    graphsRevisited.add('Money is Power, too');
                }
                break;

            case 'Map to Hall of Power':
                unlockAchievement('Buy the Map');
                unlockHallofPower();
                break;

            case 'Compressed Power':
                compressedBigCrunchMult = Math.max(compressedBigCrunchMult, 3 * overcompressedPower);
                break;

            case 'Condensed Power':
                compressedBigCrunchMult = 30 * overcompressedPower;
                break;


            case 'Perpetual Prestige':
                if(autoPrestigeThreshold === null){
                    autoPrestigeThreshold = 100;
                }
                break;

            case 'Eternal Ascension':
                if(autoAscendThreshold === null){
                    autoAscendThreshold = 0;
                }
                break;


            case 'Quantum Symphony':
                if(autoTranscendThreshold === null){
                    autoTranscendThreshold = 0;
                }
                break;

            // Add more cases as needed for additional skills

            default:
                console.warn(`No handler for skill: ${skill.name}`);
                break;
        }

        if (!duringLoad) {
            updateLibrarySkillDisplay();
        }
    }
}



function updateLibrarySkillDisplay() {
    librarySkills.forEach(skill => {
        const skillDiv = document.querySelector(`.libraryskill[data-skill-name="${skill.name}"]`);
        if (skillDiv) {
            if (!skill.unlocked) {
                skillDiv.classList.add('locked');
                skillDiv.classList.remove('purchased');
                const skillCost = skillDiv.querySelector('.skill-cost');
                const skillH3 = skillDiv.querySelector('h3');
                const skillP = skillDiv.querySelector('p');
                if (skillCost) skillCost.style.display = 'block';
                if (skillH3) skillH3.style.display = 'block';
                if (skillP) skillP.style.display = 'block';
                if (knowledge >= skill.cost) {
                    skillDiv.classList.add('affordable');
                } else {
                    skillDiv.classList.remove('affordable');
                }
            } else {
                skillDiv.classList.add('purchased');
                skillDiv.classList.remove('locked', 'affordable');
            }
        }
    });
}

function divideLibrarySkillCost(skillName, quotient) {
    // Find the skill in the librarySkills array
    const skill = librarySkills.find(s => s.name === skillName);

    if (skill) {
        // Update the skill cost
        skill.cost = skill.cost / quotient;

        // Update the displayed cost
        const skillDiv = document.querySelector(`.libraryskill[data-skill-name="${skill.name}"]`);
        if (skillDiv) {
            const skillCost = skillDiv.querySelector('.skill-cost');
            if (skillCost) {
                skillCost.textContent = `Cost: ${formatNumber(skill.cost)} Knowledge`; // Update displayed cost
            }

            // Update the affordable status based on new cost
            if (knowledge >= skill.cost) {
                skillDiv.classList.add('affordable');
            } else {
                skillDiv.classList.remove('affordable');
            }
        }
    } else {
        console.warn(`Skill ${skillName} not found in librarySkills.`);
    }
}


function initializeSkills() {
    const skillLevels = {};
    librarySkills.forEach(skill => {
        if (!skillLevels[skill.level]) {
            skillLevels[skill.level] = [];
        }
        skillLevels[skill.level].push(skill);
    });

    Object.keys(skillLevels).forEach(level => {
        const skillLevelDiv = document.createElement('div');
        skillLevelDiv.classList.add('library-skill-level');

        const skillLevelLabel = document.createElement('div');
        skillLevelLabel.classList.add('library-skill-level-label');
        skillLevelLabel.textContent = `${level} Section`;
        skillLevelDiv.appendChild(skillLevelLabel);

        const skillRow = document.createElement('div');
        skillRow.classList.add('library-skill-row');

        skillLevels[level].forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.classList.add('libraryskill');
            skillDiv.setAttribute('data-skill-name', skill.name);
            skillDiv.innerHTML = `
                <p class="skill-cost">Cost: ${formatNumber(skill.cost)} Knowledge</p>
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            `;
            if (!skill.unlocked) {
                skillDiv.classList.add('locked');
                if (knowledge >= skill.cost) {
                    skillDiv.classList.add('affordable');
                } else {
                    skillDiv.classList.remove('affordable');
                }
            } else {
                skillDiv.classList.add('purchased');
            }
            Events.addListener(skillDiv, 'click', async () => {
                if (!skill.unlocked && knowledge >= skill.cost) {
                    let result = true;  // Default to true if loveHallUnlocked is true
                    if (!loveHallUnlocked) {
                        // Only show the confirmation modal if loveHallUnlocked is false
                        result = await showMessageModal(
                            'Confirm Unlock',
                            `Do you want to unlock ${skill.name} for ${formatNumber(skill.cost)} Knowledge?`,
                            true,
                            false
                        );
                    }
                    if (result) {
                        knowledge -= skill.cost;
                        unlockLibrarySkill(skill);
                        saveGameState();
                    }
                } else if (!skill.unlocked && knowledge < skill.cost) {
                    //document.removeEventListener('click', outsideLibraryClickListener);
                    // await showMessageModal('Insufficient Knowledge', 'Not enough Knowledge to unlock this skill.', false, false);

                    showStatusMessage(skillDiv, 'Insufficient Knowledge to unlock this skill.', false);
                    //document.addEventListener('click', outsideLibraryClickListener);
                } else if (skill.unlocked) {
                    const prevGraphsRevisitedLength = graphsRevisited.size;
                    unlockLibrarySkill(skill, false, true);  //only to show message again
                    if (graphsRevisited.size == 8) {
                        unlockAchievement('I like graphs!')
                    } else if (graphsRevisited.size == prevGraphsRevisitedLength) {
                        graphsRevisited = new Set([]);
                    }

                }
            });
            skillRow.appendChild(skillDiv);
        });

        skillLevelDiv.appendChild(skillRow);
        librarySkillsContainer.appendChild(skillLevelDiv);
    });
}


const hallVisitsWinningSequence = 'KPLBPLLPBPBL';
let hallVisitsSequence = '';

function checkHallVisitsSequence(){
    if (hallVisitsSequence.length > hallVisitsWinningSequence.length) {
        hallVisitsSequence = hallVisitsSequence.slice(-hallVisitsWinningSequence.length); // Keep only the last n characters
    }
    if (hallVisitsSequence === hallVisitsWinningSequence) {
        unlockAchievement('Do as dev #3 says');
        hallVisitsSequence = ""; // Optionally reset the sequence after unlocking the achievement
    }
}

function openLibrary() {
    unlockAchievement('Hall of Knowledge');
    if (purchasedUpgradesSet.has('The Library') || librarySkills.some(skill => skill.unlocked)) {
        const libraryOverlay = document.getElementById('libraryOverlay');
        libraryOverlay.style.display = 'flex';
        updateLibrarySkillDisplay();

        if(crunchTimer < 10){
            unlockAchievement('Skipping Grades');
        }

        openLibraryHallTimestamp= crunchTimer;
        checkFastCommuter();

        if (!achievementsMap.get('Do as dev #3 says').isUnlocked && purchasedUpgradesSet.has('Degens Idle Dev #3')){
            hallVisitsSequence += 'K';
            checkHallVisitsSequence();
        }

        // Prevent overlay from closing when clicking inside the content
        const libraryContent = document.querySelector('.library-overlay-content');
        Events.addListener(libraryContent, 'click', function(event) {
            event.stopPropagation();  // Stop event propagation when clicking inside the library content
        });

        // Add a temporary event listener to close the overlay when clicking outside of it
        setTimeout(() => {
            document.addEventListener('click', outsideLibraryClickListener);
        }, 0);
    } else if (purchasedUpgradesSet.has("Antimatter Dimensions")) {
        showMessageModal('Access Denied', `You are not worthy to enter the Hall of Knowledge. The ancient tomes and secrets within remain beyond your reach. Perhaps it is time to look inwards and seek understanding within yourself first. Only through inner reflection and growth will you gain the wisdom needed to unlock the secrets of this sacred place.<br><br>
                                            <span style="color: #40E0D0;">You remember learning that to unlock <strong>Knowledge</strong>, one must first achieve the seemingly impossible feat of reaching 
                                            <strong>negative one Trillion delusion</strong></span>.`);
    } else {
        showMessageModal('Access Denied', 'You are not worthy to enter the Hall of Knowledge. The ancient tomes and secrets within remain beyond your reach. Perhaps it is time to look inwards and seek understanding within yourself first. Only through inner reflection and growth will you gain the wisdom needed to unlock the secrets of this sacred place.');
    }
}

function closeLibrary() {
    const libraryOverlay = document.getElementById('libraryOverlay');
    libraryOverlay.style.display = 'none';
    document.removeEventListener('click', outsideLibraryClickListener);
}

function outsideLibraryClickListener(event) {
    const libraryContent = document.querySelector('.library-overlay-content');

    if (!libraryContent.contains(event.target) && !event.target.closest('.libraryskill')) {
        closeLibrary();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('libraryButton').addEventListener('click', () => {
        openLibrary();
    });

    document.getElementById('closeLibraryButton').addEventListener('click', () => {
        closeLibrary();
    });

    document.getElementById('closeLibraryOverlay').addEventListener('click', () => {
        closeLibrary();
    });
});

function resetLibrarySkills() {
    // Iterate over all library skills and reset their unlocked state
    librarySkills.forEach(skill => {
        skill.unlocked = false; // Set all skills to locked/unpurchased state
    });

    // Clear the display and reinitialize skills
    Events.wipe(librarySkillsContainer);
    librarySkillsContainer.innerHTML = ''; // Clear current skill elements
    initializeSkills(); // Reinitialize the skills in the UI

    // Update the skill display to reflect the reset state
    updateLibrarySkillDisplay();
}