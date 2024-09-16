
const loveHallSkills = [
    // 2.828x Level - Bell's Inequality for quantum entangled particle correlation
    { name: 'Delusion Surge', cost: 0.2, description: '36x Delusion gain.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 1 },
    { name: 'Copium Surge', cost: 0.2, description: '36x Copium gain.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 1 },

    { name: 'Twenty-Fivefold Ascension', cost: 1.2, description: 'Gain up to 25 God-Mode levels per Ascension.', unlocked: false, level: 'Quantum Harmony (2.8x)',  pair: 2 },
    { name: 'Twenty-Fivefold Transcendence', cost: 1.2, description: 'Gain up to 25 PU God-Mode levels per Transcendence.', unlocked: false, level: 'Quantum Harmony (2.8x)',  pair: 2 },

    { name: 'Achievement Boost', cost: 1.9, description: 'Achievement Multiplier increased to 2% per achievement.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 3 },
    { name: 'Cosmic Embrace', cost: 1.9, description: 'Gain +1 Love Point every embrace.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 3 },

    { name: 'Serenity Flow', cost: 5, description: 'Hopium gain is multiplied by square root of Serenity.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 4 },
    { name: 'Serene Boost', cost: 5, description: '3x Serenity gain.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 4 },

    { name: 'Power Infusion', cost: 15, description: '4x Power gain.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 5 },
    { name: 'Soulbound Embrace', cost: 15, description: 'Gain +2.5 Love Points every embrace.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 5 },

    { name: 'Achievement Hypercharge', cost: 50, description: 'Achievement multiplier becomes multiplicative instead of additive.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 6 },
    { name: 'Perfect PU God-Mode', cost: 50, description: 'Make PU God-Mode perfect with diminishing returns at 99.2%.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 6 },

    // 27x Level - dimensions in string theory
    { name: 'Yacht Money Surge', cost: 0.05, description: '24x Yacht Money gain.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 20 },
    { name: 'Troll Points Surge', cost: 0.05, description: '24x Troll Points gain.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 20 },

    { name: 'Knowledge Infusion', cost: 0.6, description: '12x Knowledge gain.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 21 },
    { name: 'Basic Resource Boost', cost: 0.6, description: '9x gain to first 4 resources.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 21 },

    { name: 'Hall of Knowledge Auto-Buy', cost: 1.5, description: 'Automatically buy upgrades from the Hall of Knowledge.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 22 },
    { name: 'Hall of Power Auto-Buy', cost: 1.5, description: 'Automatically buy upgrades from the Hall of Power.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 22 },

    { name: 'Overwhelming Mercy', cost: 8, description: 'Spare opponents who are far weaker than you and auto unlock the upgrades.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 23 },
    { name: 'Hopium Fix', cost: 8, description: 'Fix Hopium in the same way Delusion is cured.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 23 },

    { name: 'Serenity Gain (Copium)', cost: 10, description: 'Serenity gain is multiplied by log2(Copium)/33.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 24 },
    { name: 'Serenity Gain (Delusion)', cost: 10, description: 'Serenity gain is multiplied by log2(Delusion)/33.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 24 },

    { name: 'Serenity Gain (Yacht Money)', cost: 10, description: 'Serenity gain is multiplied by log2(Yacht Money)/33.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 25 },
    { name: 'Serenity Gain (Troll Points)', cost: 10, description: 'Serenity gain is multiplied by log2(Troll Points)/33.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 25 },

    // 42x Level - the meaning of life
    { name: 'Deadpool Embrace', cost: 0.1, description: 'Deadpool revives do not reset on Infinite Embrace.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 41 },
    { name: 'Rewarding Victories', cost: 0.1, description: 'Battle upgrades give +40% rewards.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 41 },

    { name: 'Crunch Knowledge', cost: 0.3, description: 'Big Crunch extra knowledge mult is now ^(2/3) instead of ^(1/2).', unlocked: false, level: 'Cosmic Truth (42x)', pair: 42 },
    { name: 'Stellar Meditation', cost: 0.3, description: 'Increase all resource generation by 10% after each successful meditation.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 42 },

    { name: 'Raise That Soft Cap', cost: 1.19, description: 'Increase mini games soft cap to 24 hours', unlocked: false, level: 'Cosmic Truth (42x)', pair: 43 },
    { name: 'Rewarding Meditations', cost: 1.19, description: 'Meditations give +40% rewards', unlocked: false, level: 'Cosmic Truth (42x)', pair: 43 },

    { name: 'Hopium Trade', cost: 4.2, description: 'Trade Hopium for any of the first 4 resources at a 1:1 ratio.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 44 },
    { name: 'Infinite Prestige', cost: 4.2, description: 'Automatically apply Prestige Mult without resetting. (Recommended)', unlocked: false, level: 'Cosmic Truth (42x)', pair: 44 },

    // { name: 'Resonance of Love', cost: 8, description: 'Multiply Serenity by log10 of current Love Points.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 45 },
    // { name: 'Auto Hopium Trade', cost: 8, description: 'Every second, automatically trade 1% Hopium for each lower resource.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 45 },

    // { name: 'Knowledge Exchange', cost: 15, description: 'Trade Hopium for Knowledge at a 1e20:1 ratio.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 46 },
    // { name: 'Big Crunch Factor Boost', cost: 15, description: 'Increase Big Crunch factor from 2 to 2.1.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 46 },

    // { name: 'Temporal Drag', cost: 16, description: 'During meditation, decrease ball velocity by 25%.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 47 },
    // { name: 'Look Past Distractions', cost: 16, description: 'During meditation, decrease # of balls by 1.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 47 },
];



const loveHallSkillsContainer = document.getElementById('loveHallSkills');
const lovePointsDisplay = document.getElementById('lovePointsDisplay'); // Placeholder for Love Points display

function unlockLoveHallSkill(skill, duringLoad = false) {
    skill.unlocked = true;
    const skillDiv = document.querySelector(`.lovepair-skill[data-skill-name="${skill.name}"]`);

    if (skillDiv) {
        skillDiv.classList.remove('locked', 'affordable');
        skillDiv.classList.add('purchased');
        skillDiv.innerHTML = `
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        `;

        // Find the other skill in the pair and increase its cost
        const pairSkills = loveHallSkills.filter(s => s.pair === skill.pair && s.name !== skill.name);
        const pairSkill = pairSkills[0];
        
        if (!pairSkill.unlocked) {
            const levelMultiplier = getLevelMultiplier(skill.level);
            pairSkill.cost *= levelMultiplier;
            
            // Update the display of the cost for the other skill
            const pairSkillDiv = document.querySelector(`.lovepair-skill[data-skill-name="${pairSkill.name}"] .skill-cost`);
            if (pairSkillDiv) {
                pairSkillDiv.textContent = `Cost: ${formatNumber(pairSkill.cost)} Love Points`;
            }
            
            // Change the glowing link to red if the other skill is not unlocked
            const skillRow = skillDiv.closest('.lovehall-skill-row');
            if (skillRow) {
                skillRow.style.setProperty('--glowing-line-color', '#ff3333'); // Red glow
            }
        } else {
            // Both skills in the pair are unlocked, set the link to pink
            const skillRow = skillDiv.closest('.lovehall-skill-row');
            if (skillRow) {
                skillRow.style.setProperty('--glowing-line-color', '#ff66b2'); // Pink glow
            }
        }


        
        switch (skill.name) {
            case 'Delusion Surge':
                delusionSurgeMultiplier = 36;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
                
            case 'Copium Surge':
                copiumSurgeMultiplier = 36;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
        
            case 'Twenty-Fivefold Ascension':
                numAscensionUpgrades = Math.max(numAscensionUpgrades, 25);
                break;
        
            case 'Twenty-Fivefold Transcendence':
                numPUAscensionUpgrades = Math.max(numPUAscensionUpgrades, 25);
                break;
        
            case 'Achievement Boost':
                achievementBoostValue = 0.02; // Example: 2% achievement boost
                calculateAchievementMultiplier();
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
        
            case 'Cosmic Embrace':
                embraceExtraLovePoints += 1;
                break;
        
            case 'Serenity Flow':
                serenityFlowSkill = true;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
        
            case 'Serene Boost':
                serenityBoostMultiplier = 3;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
        
            case 'Power Infusion':
                powerInfusionMultiplier = 4;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
        
            case 'Soulbound Embrace':
                embraceExtraLovePoints += 2.5;
                break;
        
            case 'Achievement Hypercharge':
                achievementHyperchargeSkill = true;
                calculateAchievementMultiplier();
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;

            case 'Perfect PU God-Mode':
                perfectPUGodModeSkill = true;
                puGodMultiplier = calculatePUGodModeMultiplier(puGodLevel);
                if (!duringLoad) {
                    updateMultipliersDisplay();
                    updateEffectiveMultipliers();
                }
                break;

            case 'Yacht Money Surge':
                yachtMoneySurgeMultiplier = 24;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
                
            case 'Troll Points Surge':
                trollPointsSurgeMultiplier = 24;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
        
            case 'Knowledge Infusion':
                knowledgeInfusionMultiplier = 12;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
        
            case 'Basic Resource Boost':
                basicResourceBoost = 9;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
        
            case 'Hall of Knowledge Auto-Buy':
                purchaseLibrarySkillsInterval = setInterval(purchaseLibrarySkills, 1000);
                break;
        
            case 'Hall of Power Auto-Buy':
                purchasePowerHallSkillsInterval = setInterval(purchasePowerHallSkills, 1000);
                break;
        
            case 'Overwhelming Mercy':
                autoFightSkill = true;
                break;
        
            case 'Hopium Fix':
                document.getElementById('toggleHopiumLabel').classList.remove('hidden');
                // Check the state of hopium and update the switch position accordingly
                const toggleHopium = document.getElementById('toggleHopium');
                toggleHopium.checked = hopiumPerSecond >= 0;
                break;
        
            case 'Serenity Gain (Copium)':
                serenityGainCopium = true;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
        
            case 'Serenity Gain (Delusion)':
                serenityGainDelusion = true;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
        
            case 'Serenity Gain (Yacht Money)':
                serenityGainYachtMoney = true;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
        
            case 'Serenity Gain (Troll Points)':
                serenityGainTrollPoints = true;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;

            case 'Deadpool Embrace':
                deadpoolRevivesSkill = true;
                break;

            case 'Rewarding Victories':
                rewardingVictoriesSkill = true;
                break;


            case 'Crunch Knowledge':
                crunchKnowledgeSkill = true;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;

            case 'Stellar Meditation':
                stellarMeditationSkill = true;
                break;

            case 'Raise That Soft Cap':
                miniGamesSoftCapHrs = Math.max(miniGamesSoftCapHrs, 24);
                break;

            case 'Rewarding Meditations':
                rewardingMeditationsSkill = true;
                break;
        
            case 'Hopium Trade':
                addHopiumToFromResource();
                break;
        
            case 'Infinite Prestige':
                infinitePrestigeSkill = true;
                break;
        
            case 'Resonance of Love':
                resonanceOfLoveSkill = true;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
        
            case 'Auto Hopium Trade':
                // Logic for Auto Hopium Trade skill
                //enableAutoHopiumTrade(); // Example: Automatically trade Hopium for all lower resources
                break;
        
            case 'Knowledge Exchange':
                // Logic for Knowledge Exchange skill
                //tradeHopiumForKnowledge(1e20); // Example: Trade Hopium for Knowledge at 1e20:1 ratio
                break;
        
            case 'Big Crunch Factor Boost':
                // Logic for Big Crunch Factor Boost skill
                //increaseBigCrunchFactor(2.1); // Example: Increase Big Crunch factor from 2 to 2.1
                break;
        

            case 'Temporal Drag':
                // 'During meditation, decrease ball velocity by 25%.'
                //tradeHopiumForKnowledge(1e20); // Example: Trade Hopium for Knowledge at 1e20:1 ratio
                break;
        
            case 'Look Past Distractions':
                // Decrease # of balls by 1
                break;
                
            default:
                console.log('Unknown skill:', skill.name);
                break;
        }
        
    }
}

function getLevelMultiplier(level) {
    switch (level) {
        case 'Quantum Harmony (2.8x)': return 2.8;
        case 'Dimensional Shift (27x)': return 27;
        case 'Cosmic Truth (42x)': return 42;
        default: return 1;
    }
}

function updateLoveHallSkillDisplay() {
    loveHallSkills.forEach(skill => {
        const skillDiv = document.querySelector(`.lovepair-skill[data-skill-name="${skill.name}"]`);
        if (skillDiv) {
            const pairSkills = loveHallSkills.filter(s => s.pair === skill.pair);
            const pairUnlockedCount = pairSkills.filter(s => s.unlocked).length;
            const skillRow = skillDiv.closest('.lovehall-skill-row');

            // Set the link color based on the number of unlocked skills in the pair
            if (pairUnlockedCount === 0) {
                skillRow.style.setProperty('--glowing-line-color', '#ffffff'); // White if none are purchased
            } else if (pairUnlockedCount === 1) {
                skillRow.style.setProperty('--glowing-line-color', '#ff3333'); // Red if one is purchased
            } else if (pairUnlockedCount === 2) {
                skillRow.style.setProperty('--glowing-line-color', '#ff66b2'); // Pink if both are purchased
            }

            if (!skill.unlocked) {
                skillDiv.classList.add('locked');
                skillDiv.classList.remove('purchased');
                if (lovePoints >= skill.cost) {
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

    // Update Love Points display
    lovePointsDisplay.textContent = `Love Points: ${formatNumber(lovePoints)}`;
}

function initializeLoveHallSkills() {
    const skillLevels = {};
    loveHallSkills.forEach(skill => {
        if (!skillLevels[skill.level]) {
            skillLevels[skill.level] = [];
        }
        skillLevels[skill.level].push(skill);
    });

    loveHallSkillsContainer.innerHTML = ''; // Clear the container

    Object.keys(skillLevels).forEach(level => {
        const skillColumnDiv = document.createElement('div');
        skillColumnDiv.classList.add('lovehall-skill-column');

        const skillColumnLabel = document.createElement('div');
        skillColumnLabel.classList.add('lovehall-skill-column-label');
        skillColumnLabel.textContent = `${level}`;
        skillColumnDiv.appendChild(skillColumnLabel);

        const skillPairs = {};
        skillLevels[level].forEach(skill => {
            if (!skillPairs[skill.pair]) {
                skillPairs[skill.pair] = [];
            }
            skillPairs[skill.pair].push(skill);
        });

        Object.keys(skillPairs).forEach(pair => {
            const skillRow = document.createElement('div');
            skillRow.classList.add('lovehall-skill-row');

            skillPairs[pair].forEach(skill => {
                const skillDiv = document.createElement('div');
                skillDiv.classList.add('lovepair-skill');
                skillDiv.setAttribute('data-skill-name', skill.name);
                skillDiv.innerHTML = `
                    <p class="skill-cost">Cost: ${formatNumber(skill.cost)} Love Points</p>
                    <h3>${skill.name}</h3>
                    <p>${skill.description}</p>
                `;
                if (!skill.unlocked) {
                    skillDiv.classList.add('locked');
                    if (lovePoints >= skill.cost) {
                        skillDiv.classList.add('affordable');
                    } else if (lovePoints + calculateLovePointsGained() >= skill.cost) {
                        skillDiv.classList.add('potentiallyAffordable');
                    }
                } else {
                    skillDiv.classList.add('purchased');
                }

                skillDiv.addEventListener('click', async () => {
                    if (!skill.unlocked && lovePoints >= skill.cost) {
                        // Only show the confirmation modal if loveHallUnlocked is false
                        const result = await showMessageModal(
                            'Confirm Love Skill Unlock',
                            `Do you want to unlock ${skill.name} for ${formatNumber(skill.cost)} Love Points? Remember - the paired skill will increase in cost!`,
                            true,
                            false
                        );
                        if (result) {
                            lovePoints -= skill.cost;
                            unlockLoveHallSkill(skill);
                            saveGameState(); // Assuming this saves the game state
                            updateLoveHallSkillDisplay(); // Update after unlocking
                        }
                    } else if (lovePoints < skill.cost) {
                        showStatusMessage(skillDiv, 'Insufficient Love Points to unlock this skill.', false);
                    }
                });
                skillRow.appendChild(skillDiv);
            });

            skillColumnDiv.appendChild(skillRow);
        });

        loveHallSkillsContainer.appendChild(skillColumnDiv);
    });
}

function outsideLoveHallClickListener(event) {
    const loveHallContent = document.querySelector('.lovehall-overlay-content');

    if (!loveHallContent.contains(event.target)) {
        closeLoveHall();
    }
}

let openLoveHallTimestamp = 0;
let openPowerHallTimestamp = 0;
let openLibraryHallTimestamp = 0;

function checkFastCommuter() {
    if (openLoveHallTimestamp > 0 && openPowerHallTimestamp > 0 && openLibraryHallTimestamp > 0) {
        // Get the maximum and minimum timestamps
        let earliestTimestamp = Math.min(openLoveHallTimestamp, openPowerHallTimestamp, openLibraryHallTimestamp);
        let latestTimestamp = Math.max(openLoveHallTimestamp, openPowerHallTimestamp, openLibraryHallTimestamp);
        
        // Check if the difference is within 6 seconds
        if ((latestTimestamp - earliestTimestamp) <= 6) {
            unlockAchievement('Fast Commuter');
        }
    }
}

function openLoveHall() {
    const loveHallOverlay = document.getElementById('loveHallOverlay');
    loveHallOverlay.style.display = 'flex';

    if(crunchTimer < 3.1){
        unlockAchievement('Eager to Love');
    }

    openLoveHallTimestamp = crunchTimer; 
    checkFastCommuter();

    initializeLoveHallSkills();
    updateLoveHallSkillDisplay();

    // Add a temporary event listener to close the overlay when clicking outside of it
    setTimeout(() => {
        document.addEventListener('click', outsideLoveHallClickListener);
    }, 0);
}

function closeLoveHall() {
    const loveHallOverlay = document.getElementById('loveHallOverlay');
    loveHallOverlay.style.display = 'none';
    document.removeEventListener('click', outsideLoveHallClickListener);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loveHallButton').addEventListener('click', () => {
        openLoveHall();
    });

    document.getElementById('closeLoveHallButton').addEventListener('click', () => {
        closeLoveHall();
    });

    document.getElementById('closeLoveHallOverlay').addEventListener('click', () => {
        closeLoveHall();
    });
});

let purchaseLibrarySkillsInterval;

function purchaseLibrarySkills() {
    let allSkillsUnlocked = true; // Track if all skills are unlocked

    librarySkills.forEach(skill => {
        // If the skill is not yet unlocked and we can afford it
        if (!skill.unlocked && knowledge >= skill.cost) {
            // Subtract the cost from knowledge
            knowledge -= skill.cost;

            // Unlock the skill by calling the provided function
            unlockLibrarySkill(skill, true);
            console.log(`Purchased: ${skill.name}`);

            // Show popup notification for the auto-purchased skill with light brown color
            showPopupTooltip(`Auto-Purchased Library Skill: ${skill.name}`, '#6F4E37'); // Light brown (tan)

            // Mark the skill as unlocked after purchasing
            skill.unlocked = true;
        }

        // If any skill is not yet unlocked, set allSkillsUnlocked to false
        if (!skill.unlocked) {
            allSkillsUnlocked = false;
        }
    });

    // If all skills are unlocked, clear the interval to stop checking
    if (allSkillsUnlocked) {
        clearInterval(purchaseLibrarySkillsInterval);
        console.log("All skills unlocked! Stopping the purchase loop.");
    }
}

let purchasePowerHallSkillsInterval;

function purchasePowerHallSkills() {
    let allSkillsUnlocked = true; // Track if all skills are unlocked

    powerHallSkills.forEach(skill => {
        // If the skill is not yet unlocked and we can afford it
        if (!skill.unlocked && power >= skill.cost) {
            // Subtract the cost from knowledge
            power -= skill.cost;

            // Unlock the skill by calling the provided function
            unlockPowerHallSkill(skill, true);
            console.log(`Purchased: ${skill.name}`);

            showPopupTooltip(`Auto-Purchased Power Hall Skill: ${skill.name}`, '#FFBF00');

            // Mark the skill as unlocked after purchasing
            skill.unlocked = true;
        }

        // If any skill is not yet unlocked, set allSkillsUnlocked to false
        if (!skill.unlocked) {
            allSkillsUnlocked = false;
        }
    });

    // If all skills are unlocked, clear the interval to stop checking
    if (allSkillsUnlocked) {
        clearInterval(purchasePowerHallSkillsInterval);
        console.log("All Power Hall skills unlocked! Stopping the purchase loop.");
    }
}

// Function to dynamically add 'Hopium' as an option to the 'fromResource' dropdown
function addHopiumToFromResource() {
    const fromResourceDropdown = document.getElementById('fromResource');
    
    // Check if 'Hopium' is already in the dropdown to avoid duplicates
    let hopiumOptionExists = false;
    for (let i = 0; i < fromResourceDropdown.options.length; i++) {
        if (fromResourceDropdown.options[i].value === 'hopium') {
            hopiumOptionExists = true;
            break;
        }
    }
    
    // If 'Hopium' is not present, add it as an option
    if (!hopiumOptionExists) {
        const hopiumOption = document.createElement('option');
        hopiumOption.value = 'hopium';
        hopiumOption.text = 'Hopium';
        fromResourceDropdown.appendChild(hopiumOption); // Add Hopium to the dropdown
        console.log('Hopium added to From Resource options.');
    }
}

// Function to remove 'Hopium' from the 'fromResource' dropdown if needed
function removeHopiumFromFromResource() {
    const fromResourceDropdown = document.getElementById('fromResource');
    const hopiumOption = Array.from(fromResourceDropdown.options).find(option => option.value === 'hopium');
    
    if (hopiumOption) {
        fromResourceDropdown.removeChild(hopiumOption);
        console.log('Hopium removed from From Resource options.');
    }
}