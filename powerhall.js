
const powerHallSkills = [
    { name: 'Power Surge', cost: 9000, description: 'Power Generation is increased by 50%!', unlocked: false, level: 'Arcane Magnetism' },
    { name: 'Temporal Flux', cost: 1.5e6, description: 'Gain 10% dodge chance after landing critical hits. Bonus resets on successful dodge.', unlocked: false, level: 'Arcane Magnetism' },
    { name: 'Arcane Magnetizer', cost: 8e6, description: 'Upgrade autobuyer is now 5x faster!', unlocked: false, level: 'Arcane Magnetism' },
    { name: 'Gravity Well', cost: 1.5e7, description: 'Every 5 successful attacks, reduce enemy minimum damage by 50% for 3 attacks.', unlocked: false, level: 'Arcane Magnetism' },
    { name: 'Temporal Guard', cost: 3e9, description: 'After every successful dodge, increase your defense by 10% of your base defense. (max +200%)', unlocked: false, level: 'Arcane Magnetism' },
    { name: 'Mystic Rebound', cost: 4e10, description: 'Increase your dodge chance by 20% for the next 5 attacks after being hit by a critical strike.', unlocked: false, level: 'Arcane Magnetism' },

    { name: 'Vitality Matrix', cost: 60000, description: 'Maximum Health is increased by 50%!', unlocked: false, level: 'Quantum Nexus' },
    { name: 'Nexus Lifeline', cost: 7e6, description: 'With every attack, heal yourself for 2% max health. Overheal is possible.', unlocked: false, level: 'Quantum Nexus' },
    { name: 'Astral Precision', cost: 4e7, description: 'Hone your accuracy. Minimum damage rescaled from power-75% to power-25%.', unlocked: false, level: 'Quantum Nexus' },
    { name: 'Void Stabilizer', cost: 3e8, description: 'Reduce damage taken from attacks by 50% until your health drops below 80%', unlocked: false, level: 'Quantum Nexus' },
    { name: 'Astral Edge', cost: 2e11, description: 'Increase your maximum damage by 1% for each 2% of your health missing.', unlocked: false, level: 'Quantum Nexus' },
    { name: 'Quantum Bastion', cost: 1.5e15, description: 'Resistant to stuns - reduce 2 turns of stun count per turn.', unlocked: false, level: 'Quantum Nexus' },

    { name: 'Lightning Reflexes', cost: 15000, description: 'Your attacks become 2.5x faster!', unlocked: false, level: 'Cosmic Dynamics' },
    { name: 'Astral Disruption', cost: 200000, description: 'Your attacks have a 5% chance to stun the enemy for 1 attack.', unlocked: false, level: 'Cosmic Dynamics' },
    { name: 'Supersonic Fury', cost: 1.5e8, description: 'Your attacks become even 2x faster!', unlocked: false, level: 'Cosmic Dynamics' },
    { name: 'Prime Impact', cost: 1e9, description: 'First attack always hits for full power (ignore enemy dodge rate and defense).', unlocked: false, level: 'Cosmic Dynamics' },
    { name: 'Stellar Cookie', cost: 5e12, description: `Auto click the cookie 10 times per second while Stellar Harvest is active.`, unlocked: false, level: 'Cosmic Dynamics'},
    { name: 'Graviton Burst', cost: 8e16, description: 'Your attacks are imperceptible to average beings. You now attack another 2.5x faster!', unlocked: false, level: 'Cosmic Dynamics' },
    
    { name: 'Cosmic Gamekeeper', cost: 1.25e5, description: `Unlock a small multiplier to all resources based on mini game successes.`, unlocked: false, level: 'Celestial Manipulation' },
    { name: 'Nebula Overdrive', cost: 7e5, description: `Purchasing non-boss upgrades no longer consumes power. Power cost still applies.`, unlocked: false, level: 'Celestial Manipulation' },
    { name: 'Stellar Harvest', cost: 3e7, description: `Increase generation of all first 7 resources by 30% for 3 minutes after defeating a boss. (multiplicative)`, unlocked: false, level: 'Celestial Manipulation' },
    { name: 'POWER is Power!', cost: 2e8, description: `Power generation increased by 10% for each purchased Power Hall skill (multiplicative).`, unlocked: false, level: 'Celestial Manipulation' },
    { name: 'Upgrade Amplifier', cost: 5.5e8, description: `First 4 resources gain a flat multiplier based on number of purchased upgrades.`, unlocked: false, level: 'Celestial Manipulation' },
    { name: 'Celestial Collector', cost: 7e10, description: `Stellar Harvest buff is extended to 50% power and lasts for 10 minutes.`, unlocked: false, level: 'Celestial Manipulation' },

];


const powerHallSkillsContainer = document.getElementById('powerHallSkills');

function unlockPowerHallSkill(skill, duringLoad = false, infoOnly = false) {
    skill.unlocked = true;
    const skillDiv = document.querySelector(`.powerskill[data-skill-name="${skill.name}"]`);

    if (skillDiv) {
        skillDiv.classList.remove('locked', 'affordable');
        skillDiv.classList.add('purchased');
        skillDiv.innerHTML = `
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        `;
        
        switch (skill.name) {

            case 'Power Surge':
                powerSurgeMultiplier = Math.max(powerSurgeMultiplier, 1 + (0.5 * oversurgedPower));
                break;

            case 'Temporal Flux':
                temporalFluxSkill = true;
                break;
    
            case 'Arcane Magnetizer':
                fasterAutobuyerskill = true;

                if (autobuyIntervalId !== null) {
                    clearInterval(autobuyIntervalId);
                    autobuyIntervalId = setInterval(autobuyUpgrades, chronoMagnetizerSkill ? 125 : 250);
                }

                break;

            case 'Gravity Well':
                gravityWellSkill = true;
                break;

            case 'Nexus Lifeline':
                nexusLifelineSkill = true;
                break;
    

            case 'Astral Precision':
                playerMinDamageMult = celestialPrecisionSkill ? 1.5 : 0.75;
                break;

            case 'Void Stabilizer':
                voidStabilizerSkill = true;
                break;

            case 'Astral Edge':
                astralEdgeSkill = true;
                break;
                
            case 'Quantum Bastion':
                quantumBastionSkill = true;
                break;
    
            case 'Temporal Guard':
                temporalGuardSkill = true;
                break;
        
            case 'Mystic Rebound':
                mysticReboundSkill = true;
                break;

            case 'Vitality Matrix':
                playerHealthMult = fortifiedDefensesSkill ? 6 :1.5;
                break;

            case 'Lightning Reflexes':
                playerAttackSpeed = Math.max(playerAttackSpeed, 5);
                break;

            case 'Astral Disruption':
                playerStunChance = Math.max(playerStunChance, 0.05);
                break;

            case 'Supersonic Fury':
                playerAttackSpeed = Math.max(playerAttackSpeed, 10);
                break;

            case 'Prime Impact':
                primeImpactSkill = true;
                break;

            case 'Graviton Burst':
                playerAttackSpeed = Math.max(playerAttackSpeed, 25);
                break;

            case 'Stellar Harvest':
                stellarHarvestSkill = true;
                break;

            case 'POWER is Power!':
                powerIsPowerSkill = true;
                break;

            case 'Upgrade Amplifier':
                upgradeAmplifierSkill = true;
                updateEffectiveMultipliers();
                break;

            case 'Celestial Collector':
                celestialCollectorSkill = true;
                break;
                
            case 'Nebula Overdrive':
                unlockAchievement('Nebula Overdrive');
                nebulaOverdriveSkill = true;
                break;

            case 'Stellar Cookie':
                stellarCookieSkill = true;
                break;

            case 'Cosmic Gamekeeper':
                cosmicGamekeeperSkill = true;
                calculateMiniGamesMultiplier();
                if (!duringLoad && (lovePoints == 0 || infoOnly)) {
                    showMessageModal(`Cosmic Gamekeeper Unlocked!`, `<p>You’ve unlocked the power of the Cosmic Gamekeeper, a multiplier that enhances all your resources based on your mini-game performance. While the growth is slow and shouldn't be your main progression strategy, the multiplier has no cap and counts retroactively. Even if this skill is ever reset, your mini-game success counts persist across everything.</p>
                        <p>The multiplier increases only in winning games with:</p>
                        <ul>
                            <li>0.0001 per Speed Tap in Speed Game</li>
                            <li>0.0003 per Memorized Dot in Memory Game</li>
                            <li>0.0005 per Portal in Math Game</li>
                            <li>0.0007 per Lucky Box in Luck Game</li>
                        </ul>
                        <p>Initially, each game’s contribution starts strong, providing a substantial boost. However, as mini-game successes accumulate, the rate of growth for each game diminishes independently. Over time, the contribution from any one game can reach a maximum of 6x, but achieving this would take a very long time.</p>
                        <p>Though the gains may seem small, they will accumulate over time, ensuring that every mini-game contributes to your overall power. Just remember, its strength lies in persistence, not speed.</p>`);
                }
                break;

                
                

            default:
                console.warn(`No handler for skill: ${skill.name}`);
                break;
        }

        // Add additional functionality for unlocked power skills here

        if (!duringLoad) {
            updatePowerHallSkillDisplay();
        }
    }
}

function updatePowerHallSkillDisplay() {
    powerHallSkills.forEach(skill => {
        const skillDiv = document.querySelector(`.powerskill[data-skill-name="${skill.name}"]`);
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
                if (power >= skill.cost) {
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

let clickedPowerHallSkills = new Set();

function initializePowerHallSkills() {
    console.log("Initializing Power Hall Skills...");
    const skillLevels = {};
    powerHallSkills.forEach(skill => {
        if (!skillLevels[skill.level]) {
            skillLevels[skill.level] = [];
        }
        skillLevels[skill.level].push(skill);
    });

    Object.keys(skillLevels).forEach(level => {
        const skillLevelDiv = document.createElement('div');
        skillLevelDiv.classList.add('powerhall-skill-level');

        const skillLevelLabel = document.createElement('div');
        skillLevelLabel.classList.add('powerhall-skill-level-label');
        skillLevelLabel.textContent = `${level} Section`;
        skillLevelDiv.appendChild(skillLevelLabel);

        const skillRow = document.createElement('div');
        skillRow.classList.add('powerhall-skill-row');

        skillLevels[level].forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.classList.add('powerskill');
            skillDiv.setAttribute('data-skill-name', skill.name);
            skillDiv.innerHTML = `
                <p class="skill-cost">Cost: ${formatNumber(skill.cost)} Power</p>
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            `;
            if (!skill.unlocked) {
                skillDiv.classList.add('locked');
                if (power >= skill.cost) {
                    skillDiv.classList.add('affordable');
                } else {
                    skillDiv.classList.remove('affordable');
                }
            } else {
                skillDiv.classList.add('purchased');
            }
            Events.addListener(skillDiv, 'click', async () => {
                if (!skill.unlocked && power >= skill.cost) {
                    let result = true;  // Default to true if loveHallUnlocked is true

                    if (!loveHallUnlocked) {
                        result = await showMessageModal(
                            'Confirm Unlock',
                            `Do you want to unlock ${skill.name} for ${formatNumber(skill.cost)} Power?`,
                            true,
                            false
                        );
                    }
                    if (result) {
                        power -= skill.cost;
                        unlockPowerHallSkill(skill);
                        saveGameState();
                    }
                } else if (!skill.unlocked && power < skill.cost) {
                    showStatusMessage(skillDiv, 'Insufficient Power to unlock this skill.', false);
                } else if (skill.unlocked && skill.name == 'Cosmic Gamekeeper') {
                    unlockPowerHallSkill(skill, false, true);  //only to show message again
                } else if (skill.unlocked){
                    clickedPowerHallSkills.add(skill.name);
                    if(clickedPowerHallSkills.size == powerHallSkills.length - 1){
                        unlockAchievement(`What's so special about Cosmic Gamekeeper?`);
                    }
                }
            });
            skillRow.appendChild(skillDiv);
        });

        skillLevelDiv.appendChild(skillRow);
        powerHallSkillsContainer.appendChild(skillLevelDiv);
    });
}

function openPowerHall() {
    if (power > 9000) {
        const powerHallOverlay = document.getElementById('powerHallOverlay');
        powerHallOverlay.style.display = 'flex';
        updatePowerHallSkillDisplay();

        unlockAchievement('Enter Hall of Power');

        openPowerHallTimestamp = crunchTimer; 
        checkFastCommuter();

        if (!achievementsMap.get('Do as dev #3 says').isUnlocked && purchasedUpgradesSet.has('Degens Idle Dev #3')){
            hallVisitsSequence += 'P';
            checkHallVisitsSequence();
        }

        // Prevent overlay from closing when clicking inside the content
        const powerHallContent = document.querySelector('.powerhall-overlay-content');
        Events.addListener(powerHallContent, 'click', function(event) {
            event.stopPropagation();  // Stop event propagation when clicking inside the library content
        });

        if (!purchasedUpgradesSet.has('Helpful Vegeta')) {
            unlockAchievement('How did you know you could enter?');
        }        

        // Add a temporary event listener to close the overlay when clicking outside of it
        setTimeout(() => {
            document.addEventListener('click', outsidePowerHallClickListener);
        }, 0);
    } else {
        showMessageModal('Not Powerful Enough', `You carefully follow the map you purchased, its lines glowing faintly as they guide you through the twisting corridors. After what feels like an eternity, you finally stand before the towering gates of the Hall of Power. Guarding the entrance is a bouncer unlike any you've seen—a multidimensional being whose presence alone makes the air around you hum with energy. His eyes, if you can call them that, flicker with the light of a thousand stars as he takes a quick look at you.<br><br>He scoffs, a sound that reverberates through your very soul. "Come back when you’ve got more power," he growls, his voice echoing from dimensions you can barely comprehend.<br><br>Your heart sinks. How are you supposed to know how much power you need? You think to yourself as you take a step back, the weight of his judgment pressing heavily on your shoulders. For now, the secrets of the Hall of Power remain just out of reach, taunting you from beyond those impenetrable gates.`);
    }
}

function closePowerHall() {
    const powerHallOverlay = document.getElementById('powerHallOverlay');
    powerHallOverlay.style.display = 'none';
    document.removeEventListener('click', outsidePowerHallClickListener);
}

function outsidePowerHallClickListener(event) {
    const powerHallContent = document.querySelector('.powerhall-overlay-content');

    if (!powerHallContent.contains(event.target)) {
        closePowerHall();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('powerHallButton').addEventListener('click', () => {
        openPowerHall();
    });

    document.getElementById('closePowerHallButton').addEventListener('click', () => {
        closePowerHall();
    });

    document.getElementById('closePowerHallOverlay').addEventListener('click', () => {
        closePowerHall();
    });
});

function resetPowerHallSkills() {
    // Iterate over all power hall skills and reset their unlocked state
    powerHallSkills.forEach(skill => {
        skill.unlocked = false; // Set all skills to locked/unpurchased state
    });

    // Clear the display and reinitialize skills
    Events.wipe(powerHallSkillsContainer);
    powerHallSkillsContainer.innerHTML = ''; // Clear current skill elements
    initializePowerHallSkills(); // Reinitialize the skills in the UI

    // Update the skill display to reflect the reset state
    updatePowerHallSkillDisplay();
}
