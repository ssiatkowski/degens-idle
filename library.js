const librarySkills = [
    { name: 'Cookie Recipe', cost: 1, description: 'This ancient cookie recipe permanently makes cookie clicks another 10x more powerful.', unlocked: false, level: 'History' },
    { name: 'Knowledge Generation', cost: 400, description: 'After Prestiging or Ascending, begin knowledge generation immediately without reaching -1T delusion.', unlocked: false, level: 'History' },
    { name: 'Trade Ratios', cost: 1500, description: 'Lower trade ratio to 4:1 for top 4 resources and 4M:1 for Hopium.', unlocked: false, level: 'History' },
    { name: 'Cookie Boost', cost: 3e9, description: 'Cookie clicks now generate resources equal to your earnings per half a second (for the first 4 resources)', unlocked: false, level: 'History' }, 
    { name: 'Hopeful Cookie', cost: 3e26, description: 'Boosted cookie clicks also generate hopium at current earnings rate.', unlocked: false, level: 'History' }, 
    { name: 'Knowledgeable Cookie', cost: 9e45, description: 'Boosted cookie clicks also generate knowledge at current earnings rate.', unlocked: false, level: 'History' }, 

    { name: 'Cure for Delusion', cost: 5, description: 'Unlock ability to toggle whether delusion gain is positive or negative.', unlocked: false, level: 'Science' },
    { name: 'Luck is Rigged', cost: 777, description: 'Luck Game roll now picks from (-25% to 175%) instead of (-75% to 125%).', unlocked: false, level: 'Science' },
    { name: "I Can't Math", cost: 1234, description: 'Math Game now only has 2 terms instead of 3. Reward is tripled.', unlocked: false, level: 'Science' },
    { name: "Short Term Memory", cost: 11000, description: 'Memory Game maximum time is 15s instead of 40s. Reward is doubled.', unlocked: false, level: 'Science' },
    { name: "Click Accumulation", cost: 23000, description: 'Speed Game reward is now for total number of clicks, instead of per second.', unlocked: false, level: 'Science' },
    { name: 'Mini Gamer', cost: 7.5e22, description: 'All mini game cooldowns are reduced by 25%.', unlocked: false, level: 'Science' },

    { name: 'Prestige Base', cost: 5000, description: 'Increase Base prestige multiplier from 1.5 to 1.75. Huuge.', unlocked: false, level: 'Nonlinear Partial Differential Equations' },
    { name: '2D Ascension', cost: 230000, description: 'Learn how to ascend God Mode Levels while only folding the space around you into two dimensions. Mathematically, instead of prestige changing to x**(1/3), it changes to x**(2/3).', unlocked: false, level: 'Nonlinear Partial Differential Equations' },
    { name: 'Less Diminishing God-Mode', cost: 1e14, description: 'Decrease diminishing returns at higher God-Mode levels. Mathematically, instead of diminishing at 97.5%, the multiplier dimninishes at 98.5%. (This is big at high god-mode levels)', unlocked: false, level: 'Nonlinear Partial Differential Equations' },
    { name: 'Much Less Diminishing Parallel God-Mode', cost: 2e35, description: 'Greatly decrease diminishing returns at higher Parallel Universe God-Mode levels. Mathematically, instead of diminishing at 97.5%, the multiplier dimninishes at 99.0%. (This is incredibly OP at higher PU God Mode levels)', unlocked: false, level: 'Nonlinear Partial Differential Equations' },
   


    { name: 'Multibuy Upgrades', cost: 2, description: 'Unlock "Buy Seen" and "Buy Max" buttons for Upgrades.', unlocked: false, level: 'Artificial Intelligence' },
    { name: 'Cookie Clicker Clicker', cost: 75, description: 'After Prestiging or Ascending, automatically click the cookie 10 times per second for 15 seconds.', unlocked: false, level: 'Artificial Intelligence' },
    { name: 'Double Ascension', cost: 1250, description: 'Gain up to 2 God-Mode levels per Ascension. Also select up to 2 upgrades to enhance to God Mode.', unlocked: false, level: 'Artificial Intelligence' },
    { name: 'Buy Markers', cost: 300000, description: 'Purchased Upgrades will now have a switch indicating whether or not they should be bought using "Buy Seen" and "Buy All" buttons.', unlocked: false, level: 'Artificial Intelligence' },
    { name: 'Triple Ascension', cost: 3.5e6, description: 'Gain up to 3 God-Mode levels per Ascension. Also select up to 3 upgrades to enhance to God Mode.', unlocked: false, level: 'Artificial Intelligence' },
    { name: 'Quintuple Transendence', cost: 5e19, description: 'Gain up to 5 Parallel Universe God-Mode levels per Transendence. Also select up to 5 upgrades to enhance to PU God Mode.', unlocked: false, level: 'Artificial Intelligence' },
    { name: 'Septuple Ascension', cost: 7e24, description: 'Gain up to 7 God-Mode levels per Ascension. Also select up to 7 upgrades to enhance to God Mode.', unlocked: false, level: 'Artificial Intelligence' },
    { name: 'Autobuy Upgrades', cost: 3e31, description: `Buy Markers are repurposed to configure Autobuy - which will purchase afforable visible upgrades every 2 seconds.`, unlocked: false, level: 'Artificial Intelligence' },
 
    { name: 'Knowledge is Power', cost: 1e6, description: 'Unlock new resource Power. Power is always generated based on your current amount of Knowledge.', unlocked: false, level: 'Celestial Bodies' },
    { name: 'Big Crunch', cost: 8e11, description: 'Could this be what Power is for? Unlock ability to force the universe into a Big Crunch and to be reborn anew!', unlocked: false, level: 'Celestial Bodies' },
    { name: 'Money is Power, too', cost: 2.5e20, description: 'Add a multiplier to Power generation based on Yacht Money.', unlocked: false, level: 'Celestial Bodies' },
    { name: 'Map to Hall of Power', cost: 1e24, description: 'You can now look at and admire the Power Hall button.', unlocked: false, level: 'Celestial Bodies' },


    { name: 'The Omniverse', cost: 1e100, description: 'Stop cheating. This does not exist yet.', unlocked: false, level: '???' },
    // { name: 'Serenity', cost: 1e25, description: '', unlocked: false, level: '???' },
    // { name: 'The Kaleidoscope of Consciousness', cost: 1e29, description: '', unlocked: false, level: '???' },
    // { name: 'The Void of Non-Existence', cost: 1e33, description: '', unlocked: false, level: '???' },
    // { name: 'The Infinite Fractal', cost: 1e33, description: '', unlocked: false, level: '???' },
    // { name: 'The Quantum Symphony', cost: 1e33, description: '', unlocked: false, level: '???' },


    // Add more skills as needed
];


const librarySkillsContainer = document.getElementById('librarySkills');

function unlockLibrarySkill(skill, duringLoad = false) {
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
                toggleDelusion.checked = delusionPerSecond >= 0;
                break;

            case 'Luck is Rigged':
                luckGameDelta = -25;
                break;
            
            case "I Can't Math":
                mathGameSkill = true;
                break;
            
            case "Short Term Memory":
                memoryGameSkill = true;
                break;
                
            case "Click Accumulation":
                speedGameSkill = true;
                break;
                
            case "Mini Gamer":
                miniGamerSkill = true;
                break;

            case 'Prestige Base':
                prestigeBaseSkill = true;
                if (!duringLoad) {
                    showMessageModal('Prestige Base', 'Graph shows the Prestige Multiplier scaling with 1.5 base vs 1.75 base. This difference becomes huge later in the game. When your min resource is at 1Qi that is already 10x difference and only increases exponentially form there!', false, false, 'imgs/graphs/prestige_base.png')
                }
                break;
            
            case '2D Ascension':
                twoDimensionalAscensionSkill = true;
                if (!duringLoad) {
                    showMessageModal('2D Ascension', 'Cube root was rough! Now you at least get some prestige mult left after ascending.', false, false, 'imgs/graphs/2d_ascension.png')
                }
                break;
                        
            case 'Less Diminishing God-Mode':
                lessDiminishingGodModeSkill = true;
                if (!duringLoad) {
                    showMessageModal('Less Diminishing God-Mode', 'Graph shows the God-Mode Multiplier scaling when diminishing at 97.5% vs 98.5%. As you can see, at higher God-Mode levels this makes a huge difference! The multiplier is already 2 orders of magnitude greater at God-Mode Level 150.', false, false, 'imgs/graphs/gm_diminishing.png')
                }
                godModeMultiplier = calculateGodModeMultiplier(godModeLevel);
                updateMultipliersDisplay();
                updateEffectiveMultipliers();
                break;

            case 'Much Less Diminishing Parallel God-Mode':
                lessDiminishingPUGodModeSkill = true;
                if (!duringLoad) {
                    showMessageModal('Much Less Diminishing Parallel God-Mode', 'In the quantum entangled universe, you discover that there is less interference, allowing you to scale the diminishing returns much more effectively. Graph shows the Parallel Universe God-Mode Multiplier scaling when diminishing at 97.5% (original) vs 98.5% (Optimized God-Mode) vs 99.0% (Optimized Parallel God-Mode). As you can see, at higher Parallel Universe God-Mode levels this is quite insane! The multiplier is almost 6 orders of magnitude greater at PU God-Mode Level 250.', false, false, 'imgs/graphs/pugm_diminishing.png')
                }
                puGodMultiplier = calculatePUGodModeMultiplier(puGodLevel);
                updateMultipliersDisplay();
                updateEffectiveMultipliers();
                break;
                
            case 'Multibuy Upgrades':
                multibuyUpgradesSkill = true;
                initializeBuyButtons();
                break;
        
            case 'Cookie Clicker Clicker':
                cookieAutoClicker = true;
                break;

            case 'Double Ascension':
                numAscensionUpgrades = Math.max(numAscensionUpgrades, 2);
                break;

            case 'Buy Markers':
                buyMarkersSkill = true;
                if (!duringLoad) {
                    showMessageModal(`Upgrade Markers`, `You’ve unlocked the highly anticipated Upgrade Markers! This breakthrough represents the pinnacle of artificial intelligence, pushing us a step closer toward true artificial sentience. Imagine the possibilities as your AI not only becomes smarter but also more discerning in its actions. This isn't just an upgrade; it's a revolution in AI capabilities.<br><br>Remember to toggle the setting that lets the AI know which upgrades to focus on. This meticulous control will maximize efficiency and performance. Trust your instincts—this feature will undoubtedly prove invaluable in the future. Embrace the future of AI!`);
                }
                enableAllBuyMarkers(true);
                break;

            case 'Triple Ascension':
                numAscensionUpgrades = Math.max(numAscensionUpgrades, 3);
                break;

            case 'Quintuple Transendence':
                numPUAscensionUpgrades = Math.max(numPUAscensionUpgrades, 5);
                break;
                
            case 'Septuple Ascension':
                numAscensionUpgrades = Math.max(numAscensionUpgrades, 7);
                break;

            case 'Autobuy Upgrades':
                setInterval(autobuyUpgrades, 2000);
                break;

            case 'Knowledge is Power':
                unhidePower();
                break;
        
            case 'Big Crunch':
                if (!duringLoad) {
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
                break;

            case 'Map to Hall of Power':
                unlockHallofPower();
                break;

            // Add more cases as needed for additional skills
        
            default:
                console.warn(`No handler for skill: ${skill.name}`);
                break;
        }

        if (!duringLoad) {
            updateSkillDisplay();
        }
    }
}



function updateSkillDisplay() {
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
            skillDiv.addEventListener('click', async () => {
                if (!skill.unlocked && knowledge >= skill.cost) {
                    const result = await showMessageModal(
                        'Confirm Unlock',
                        `Do you want to unlock ${skill.name} for ${formatNumber(skill.cost)} Knowledge?`,
                        true,
                        false
                    );
                    if (result) {
                        knowledge -= skill.cost;
                        unlockLibrarySkill(skill);
                        saveGameState();
                    }
                } else if (knowledge < skill.cost) {
                    //document.removeEventListener('click', outsideLibraryClickListener);
                    // await showMessageModal('Insufficient Knowledge', 'Not enough Knowledge to unlock this skill.', false, false);
                    
                    showStatusMessage(skillDiv, 'Insufficient Knowledge to unlock this skill.', false);
                    //document.addEventListener('click', outsideLibraryClickListener);
                }
            });
            skillRow.appendChild(skillDiv);
        });

        skillLevelDiv.appendChild(skillRow);
        librarySkillsContainer.appendChild(skillLevelDiv);
    });
}

function openLibrary() {
    if (purchasedUpgrades.find(up => up.name === 'The Library')) {
        const libraryOverlay = document.getElementById('libraryOverlay');
        libraryOverlay.style.display = 'flex';
        updateSkillDisplay();

        // Add a temporary event listener to close the overlay when clicking outside of it
        setTimeout(() => {
            document.addEventListener('click', outsideLibraryClickListener);
        }, 0);
    } else if (purchasedUpgrades.some(upgrade => upgrade.name === "Antimatter Dimensions")){    
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

    if (!libraryContent.contains(event.target)) {
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