
const loveHallSkills = [
    // 2.828x Level - Bell's Inequality for quantum entangled particle correlation
    { name: 'Delusion Surge', cost: 0.2, description: '36x Delusion gain.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 1 },
    { name: 'Copium Surge', cost: 0.2, description: '36x Copium gain.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 1 },

    { name: 'Twenty-Fivefold Ascension', cost: 1.2, description: 'Gain up to 25 God-Mode levels per Ascension.', unlocked: false, level: 'Quantum Harmony (2.8x)',  pair: 2 },
    { name: 'Twenty-Fivefold Transcendence', cost: 1.2, description: 'Gain up to 25 PU God-Mode levels per Transcendence.', unlocked: false, level: 'Quantum Harmony (2.8x)',  pair: 2 },

    { name: 'Achievement Boost', cost: 1.9, description: 'Achievement Multiplier x2. (Achievement Boosts stack)', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 3 },
    { name: 'Cosmic Embrace', cost: 1.9, description: 'Gain +1 Love Point every embrace.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 3 },

    { name: 'Serenity Flow', cost: 5, description: 'Hopium gain is multiplied by square root of Serenity.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 4 },
    { name: 'Serene Boost 2', cost: 5, description: '5x Serenity gain. (Serenity Boosts stack)', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 4, requirement: 'Serene Boost 1' },

    { name: 'Illusion of Power', cost: 9, description: 'Lower auto-fight power threshold by 10x each for ascended/transcended upgrades.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 5, requirement: 'Overwhelming Mercy' },
    { name: 'Early Accelerant', cost: 9, description: '10x multiplier to first 6 resources, degrades by 3% with each purchased upgrade.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 5 },

    { name: 'Power Infusion', cost: 15, description: '4x Power gain.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 6 },
    { name: 'Soulbound Embrace', cost: 15, description: 'Gain +2.5 Love Points every embrace.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 6, requirement: 'Cosmic Embrace' },

    { name: 'Hopeful Soft Cap', cost: 17, description: 'Mini Games Soft Cap uses resource or Hopium (greater)', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 7 },
    { name: 'Fertile Scarcity', cost: 17, description: 'Cosmic Drought sets Stellar Harvest to 250x (instead of 1x)', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 7 },
    
    { name: 'Inverse Prestige', cost: 21, description: 'Prestige is now based on the highest of your first four resources', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 8 },
    { name: 'Positive Markers', cost: 21, description: 'Buy markers stay turned on through Infinite Embrace', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 8 },

    { name: 'Achievement Boost 2', cost: 32, description: 'Achievement Multiplier x2.5. (Achievement Boosts stack)', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 9, requirement: 'Achievement Boost' },
    { name: 'Tunneled Ascension', cost: 32, description: 'Transcending an upgrade also Ascends it.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 9 },

    { name: 'Achievement Hypercharge', cost: 50, description: 'Achievement multiplier becomes multiplicative instead of additive.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 10 },
    { name: 'Perfect PU God-Mode', cost: 50, description: 'Make PU God-Mode perfect with diminishing returns at 99.2%.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 10 },

    // { name: 'Infinite Collapse', cost: 308, description: 'Automatically apply Big Crunch mult without resetting.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 11, requirement: 'Perpetual Collapse' },
    // { name: '', cost: 308, description: '', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 11 },

    // 27x Level - dimensions in string theory
    { name: 'Yacht Money Surge', cost: 0.05, description: '24x Yacht Money gain.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 21 },
    { name: 'Troll Points Surge', cost: 0.05, description: '24x Troll Points gain.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 21 },

    { name: 'Serene Boost 1', cost: 0.1, description: '2x Serenity gain. (Serene Boosts stack)', unlocked: false, level: 'Dimensional Shift (27x)', pair: 22 },
    { name: 'Celestial Precision', cost: 0.1, description: 'Improves Astral Precision to power+50%', unlocked: false, level: 'Dimensional Shift (27x)', pair: 22 },

    { name: 'Knowledge Infusion', cost: 0.4, description: '8x Knowledge gain.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 23 },
    { name: 'Basic Resource Boost', cost: 0.4, description: '9x gain to first 4 resources.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 23 },


    { name: 'Hall of Knowledge Auto-Buy', cost: 1.5, description: 'Automatically buy upgrades from the Hall of Knowledge.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 25 },
    { name: 'Hall of Power Auto-Buy', cost: 1.5, description: 'Automatically buy upgrades from the Hall of Power.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 25 },

    { name: 'Gaming Addict', cost: 2, description: 'Improves Mini Gamer skill to reduce cooldowns by 75%.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 26 },
    { name: 'First-Wave Automation', cost: 2, description: `Hall of Knowledge automation features are ${formatNumber(1e10)}x cheaper`, unlocked: false, level: 'Dimensional Shift (27x)', pair: 26 },
    
    // { name: '', cost: 4, description: '', unlocked: false, level: 'Dimensional Shift (27x)', pair: 27 },
    // { name: 'Second-Wave Automation', cost: 4, description: `Keep Hall of Knowledge automation unlocked and preserve settings`, unlocked: false, level: 'Dimensional Shift (27x)', pair: 27, requirement: 'First-Wave Automation' },

    { name: 'Master of Elements', cost: 5, description: 'Reduce Meditation Wind Speed by 50%', unlocked: false, level: 'Dimensional Shift (27x)', pair: 27 },
    { name: 'Space Continuum Stretch', cost: 5, description: 'Increase Meditation Arena Size by 10%', unlocked: false, level: 'Dimensional Shift (27x)', pair: 27 },

    { name: 'Enlightened Prestige', cost: 7, description: 'Prestige Base skill increases from 1.75 base to 1.775 base.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 28 },
    { name: 'Hopeful Beginning', cost: 7, description: 'Start with 1M Hopium after any prestige layer.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 28 },

    { name: 'Overwhelming Mercy', cost: 8, description: 'Spare opponents who are far weaker than you and auto unlock the upgrades.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 29, requirement: 'Celestial Precision' },
    { name: 'Hopium Fix', cost: 8, description: 'Fix Hopium in the same way Delusion is cured.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 29 },

    { name: 'Serenity Gain (Copium)', cost: 10, description: 'Serenity gain is multiplied by log2(Copium)/33.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 30 },
    { name: 'Serenity Gain (Delusion)', cost: 10, description: 'Serenity gain is multiplied by log2(Delusion)/33.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 30 },

    { name: 'Serenity Gain (Yacht Money)', cost: 10, description: 'Serenity gain is multiplied by log2(Yacht Money)/33.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 31 },
    { name: 'Serenity Gain (Troll Points)', cost: 10, description: 'Serenity gain is multiplied by log2(Troll Points)/33.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 31 },


    // 42x Level - the meaning of life
    { name: 'Fortified Defenses', cost: 0.04, description: 'Vitality Matrix is now 10x stronger.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 40 },
    { name: 'Study Accelerator', cost: 0.04, description: 'Meditation duration decreased by 0.2 seconds.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 40 },

    { name: 'Deadpool Embrace', cost: 0.1, description: 'Deadpool revives do not reset on Infinite Embrace.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 41 },
    { name: 'Rewarding Victories', cost: 0.1, description: 'Battle upgrades give +40% rewards.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 41 },

    { name: 'Crunch Knowledge', cost: 0.3, description: 'Big Crunch extra knowledge mult is now ^(2/3) instead of ^(1/2).', unlocked: false, level: 'Cosmic Truth (42x)', pair: 42 },
    { name: 'Stellar Meditation', cost: 0.3, description: 'Increase all resource generation by 10% after each successful meditation.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 42 },

    { name: 'Oversurged Power', cost: 0.5, description: 'Power Surge Skill is 2x as powerful.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 43 },
    { name: 'Overcompressed Power', cost: 0.5, description: 'Compressed/Condensed Power Skills are 3x as powerful.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 43 },

    { name: 'Raise That Soft Cap', cost: 1.19, description: 'Increase mini games soft cap to 24 hours', unlocked: false, level: 'Cosmic Truth (42x)', pair: 44 },
    { name: 'Rewarding Meditations', cost: 1.19, description: 'Meditations give +40% rewards', unlocked: false, level: 'Cosmic Truth (42x)', pair: 44, requirement: 'Rewarding Victories' },

    { name: 'Infinite Prestige', cost: 4.2, description: 'Automatically apply Prestige Mult without resetting.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 45 },
    { name: 'Hopium Trade', cost: 4.2, description: 'Trade Hopium for any of the first 4 resources at a 1:1 ratio.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 45 },

    { name: 'Perpetual Collapse', cost: 7, description: 'Auto Big Crunch (default 25x)', unlocked: false, level: 'Cosmic Truth (42x)', pair: 46 },
    { name: 'Beacon of Seven Suns', cost: 7, description: 'Multiplicative 7% bonus to Copium and Hopium for every Hall of Love skill.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 46 },

    { name: 'Resonance of Love', cost: 8, description: 'Multiply Serenity by log2 of current Love Points.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 47 },
    { name: 'Equilibrium of Hope', cost: 8, description: 'Automatically trade 1% Hopium for each lower resource.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 47, requirement: 'Hopium Trade' },

    { name: 'Temporal Drag', cost: 12, description: 'During meditation, decrease ball velocity by 25%.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 48 },
    { name: 'Look Past Distractions', cost: 12, description: 'During meditation, decrease # of balls by 1.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 48 },

    // { name: 'Knowledge Exchange', cost: 14, description: 'Trade Hopium for Knowledge at a 1e20:1 ratio.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 49 },
    // { name: 'Big Crunch Factor Boost', cost: 14, description: 'Increase Big Crunch base from 2 to 2.1.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 49 },

    // { name: 'Intrinsic Meditation', cost: 42, description: 'Auto complete meditations that are ascended & transcended.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 50 },
    // { name: 'The Ultimate Fix', cost: 42, description: 'Fix all remaining resources.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 50, requirement: 'Hopium Fix' },


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
                achievementBoostValue *= 2;
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
        
            case 'Serene Boost 2':
                serenityBoostMultiplier *= 5;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;

            case 'Illusion of Power':
                illusionOfPowerSkill = true;
                break;
                    
            case 'Early Accelerant':
                earlyAccelerantSkill = true;
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

            case 'Hopeful Soft Cap':
                hopefulSoftCapSkill = true;
                break;
                    
            case 'Fertile Scarcity':
                fertileScarcitySkill = true;
                break;

            case 'Inverse Prestige':
                inversePrestigeSkill = true;
                break;
                    
            case 'Positive Markers':
                positiveMarkersSkill = true;
                break;
                
            case 'Achievement Boost 2':
                achievementBoostValue *= 2.5;
                calculateAchievementMultiplier();
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
        
            case 'Tunneled Ascension':
                tunneledAscensionSkill = true;
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


            case 'Serene Boost 1':
                serenityBoostMultiplier *= 2;
                if(!duringLoad){
                    updateEffectiveMultipliers();
                }
                break;
        
            case 'Celestial Precision':
                celestialPrecisionSkill = true;
                break;
        
            case 'Knowledge Infusion':
                knowledgeInfusionMultiplier = 8;
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
        
            case 'Gaming Addict':
                gamingAddictSkill = true;
                break;
        
            case 'First-Wave Automation':
                divideLibrarySkillCost('Autobuy Upgrades', 1e10);
                divideLibrarySkillCost('Perpetual Prestige', 1e10);
                divideLibrarySkillCost('Eternal Ascension', 1e10);
                divideLibrarySkillCost('Quantum Symphony', 1e10);
                break;


            case 'Master of Elements':
                masterOfElementsSkill = true;
                break;
                    
            case 'Space Continuum Stretch':
                spaceContinuumStretchSkill = true;
                break;

            case 'Enlightened Prestige':
                enlightenedPrestigeSkill = true;
                break;

            case 'Hopeful Beginning':
                hopefulBeginningSkill = true;
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

            case 'Fortified Defenses':
                fortifiedDefensesSkill = true;
                break;

            case 'Study Accelerator':
                studyAcceleratorReduction = 0.2;
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

            case 'Oversurged Power':
                oversurgedPower = 2;
                break;
                    
            case 'Overcompressed Power':
                overcompressedPower = 3;
                break;

            case 'Raise That Soft Cap':
                miniGamesSoftCapHrs = Math.max(miniGamesSoftCapHrs, 24);
                break;

            case 'Rewarding Meditations':
                rewardingMeditationsSkill = true;
                break;
        
            case 'Hopium Trade':
                hopiumTradeSkill = true;
                addHopiumToFromResource();
                break;

            case 'Perpetual Collapse':
                if(autoBigCrunchThreshold === null){
                    autoBigCrunchThreshold = 25;
                }
                break;

            case 'Beacon of Seven Suns':
                beaconOfSevenSunsSkill = true;
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
        
            case 'Equilibrium of Hope':
                equilibriumOfHopeSkill = true;
                autoTradeHopium();
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
                temporalDragReduction = 0.75;
                break;
        
            case 'Look Past Distractions':
                lookPastDistractions = 1;
                break;
                
            default:
                console.log('Unknown skill:', skill.name);
                break;
        }
        
        
        if (beaconOfSevenSunsSkill) {
            beaconOfSevenSunsMult = 1.07 ** (loveHallSkills.filter(skill => skill.unlocked).length);
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
            if (skillRow) {
                if (pairUnlockedCount === 0) {
                    skillRow.style.setProperty('--glowing-line-color', '#ffffff'); // White if none are purchased
                } else if (pairUnlockedCount === 1) {
                    skillRow.style.setProperty('--glowing-line-color', '#ff3333'); // Red if one is purchased
                } else if (pairUnlockedCount === 2) {
                    skillRow.style.setProperty('--glowing-line-color', '#ff66b2'); // Pink if both are purchased
                }
            }

            let descriptionText = skill.description;
            if (skill.requirement && !loveHallSkills.find(s => s.name === skill.requirement).unlocked) {
                descriptionText = `<span style="color: #B22222;">Requires: ${skill.requirement}</span>`;
            }

            const descriptionParagraph = skillDiv.querySelector('p:nth-of-type(2)');
            if (descriptionParagraph) {
                if (!skill.unlocked) {
                    skillDiv.classList.add('locked');
                    skillDiv.classList.remove('purchased');
                    if (lovePoints >= skill.cost) {
                        skillDiv.classList.add('affordable');
                    } else {
                        skillDiv.classList.remove('affordable');
                    }
                    descriptionParagraph.innerHTML = descriptionText;
                } else {
                    skillDiv.classList.add('purchased');
                    skillDiv.classList.remove('locked', 'affordable');
                    descriptionParagraph.textContent = skill.description;
                }
            }
        }
    });

    // Update Love Points display
    if (lovePointsDisplay) {
        lovePointsDisplay.textContent = `Love Points: ${formatNumber(lovePoints)}`;
    }
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

                let descriptionText = skill.description;
                if (skill.requirement && !loveHallSkills.find(s => s.name === skill.requirement).unlocked) {
                    descriptionText = `<strong>Requires ${skill.requirement}</strong>`;
                }

                skillDiv.innerHTML = `
                    <p class="skill-cost">Cost: ${formatNumber(skill.cost)} Love Points</p>
                    <h3>${skill.name}</h3>
                    <p>${descriptionText}</p>
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
                    // Check if the skill has a requirement and if that requirement is unlocked
                    if (skill.requirement && !loveHallSkills.find(s => s.name === skill.requirement).unlocked) {
                        showStatusMessage(skillDiv, 'Missing Prerequisite Skill', false);
                        return;
                    }

                    if (!skill.unlocked && lovePoints >= skill.cost) {
                        // Show the confirmation modal only if the requirement is met
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
        
        // Check if the difference is within 4 seconds
        if ((latestTimestamp - earliestTimestamp) <= 4) {
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
    if (purchasedUpgrades.some(upgrade => upgrade.name === `The Library`)) {

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
}

let purchasePowerHallSkillsInterval;

function purchasePowerHallSkills() {
    
    
    if (librarySkills.find(skill => skill.name === 'Map to Hall of Power')) {
        
        let allSkillsUnlocked = true; // Track if all skills are unlocked

        powerHallSkills.forEach(skill => {
            // If the skill is not yet unlocked and we can afford it
            if (!skill.unlocked && power >= skill.cost) {
                // Subtract the cost from knowledge
                power -= skill.cost;

                // Unlock the skill by calling the provided function
                unlockPowerHallSkill(skill, true);
                console.log(`Purchased: ${skill.name}`);

                showPopupTooltip(`Auto-Purchased Power Hall Skill: ${skill.name}`, '#8B8000');

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