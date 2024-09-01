
const powerHallSkills = [
    { name: 'Power Surge', cost: 9000, description: 'Power Generation is increased by 50%!', unlocked: false, level: 'Arcane Magnetism' },
    { name: 'Temporal Flux', cost: 1e6, description: 'Gain 10% dodge chance after landing critical hits. Bonus resets on successful dodge.', unlocked: false, level: 'Arcane Magnetism' },
    { name: 'Arcane Magnetizer', cost: 1e7, description: 'Upgrade autobuyer is now 5x faster!', unlocked: false, level: 'Arcane Magnetism' },
    { name: 'Gravity Well', cost: 1e7, description: 'Every 5 successful attacks, reduce enemy minimum damage by 50% for 3 attacks.', unlocked: false, level: 'Arcane Magnetism' },
    { name: 'Temporal Guard', cost: 2.5e9, description: 'After every successful dodge, increase your defense by 15% of your base defense.', unlocked: false, level: 'Arcane Magnetism' },
    { name: 'Mystic Rebound', cost: 3e10, description: 'Increase your dodge chance by 20% for the next 5 attacks after being hit by a critical strike.', unlocked: false, level: 'Arcane Magnetism' },

    { name: 'Vitality Matrix', cost: 45000, description: 'Maximum Health is increased by 50%!', unlocked: false, level: 'Quantum Nexus' },
    { name: 'Nexus Lifeline', cost: 5e6, description: 'With every attack, heal yourself for 2% max health. Overheal is possible.', unlocked: false, level: 'Quantum Nexus' },
    { name: 'Astral Precision', cost: 3e7, description: 'Hone your accuracy. Minimum damage rescaled from power-75% to power-25%.', unlocked: false, level: 'Quantum Nexus' },
    { name: 'Void Stabilizer', cost: 1.75e8, description: 'Reduce damage taken from attacks by 50% until your health drops below 80%', unlocked: false, level: 'Quantum Nexus' },
    { name: 'Astral Edge', cost: 1.8e11, description: 'Increase your maximum damage by 1% for each 2% of your health missing.', unlocked: false, level: 'Quantum Nexus' },

    { name: 'Lightning Reflexes', cost: 12000, description: 'Your attacks become 2.5x faster!', unlocked: false, level: 'Cosmic Dynamics' },
    { name: 'Astral Disruption', cost: 150000, description: 'Your attacks have a 5% chance to stun the enemy for 1 attack.', unlocked: false, level: 'Cosmic Dynamics' },
    { name: 'Supersonic Fury', cost: 1.2e8, description: 'Your attacks become even 2x faster!', unlocked: false, level: 'Cosmic Dynamics' },
    { name: 'Prime Impact', cost: 9e8, description: 'First attack always hits for full power (ignore enemy dodge rate and defense).', unlocked: false, level: 'Cosmic Dynamics' },
    { name: 'Graviton Burst', cost: 1.2e50, description: 'Your attacks are imperceptible to average beings. You now attack 5x faster!', unlocked: false, level: 'Cosmic Dynamics' },
    
    { name: 'Stellar Harvest', cost: 2.5e7, description: `Increase generation of all first 7 resources by 40% for 60 seconds after defeating a boss. (multiplicative)`, unlocked: false, level: 'Celestial Manipulation' },
    { name: 'POWER is Power!', cost: 2.5e8, description: `Power generation increased by 10% for each purchased Power Hall skill (multiplicative).`, unlocked: false, level: 'Celestial Manipulation' },
    { name: 'Upgrade Amplifier', cost: 4e8, description: `First 4 resources gain a flat multiplier based on number of purchased upgrades.`, unlocked: false, level: 'Celestial Manipulation' },
    { name: 'Celestial Collector', cost: 5e10, description: `Stellar Harvest buff is extended to 60% power and lasts for 10 minutes.`, unlocked: false, level: 'Celestial Manipulation' },

    //{ name: '?', cost: 4e8, description: `?`, unlocked: false, level: 'Nebular Command' },

];


const powerHallSkillsContainer = document.getElementById('powerHallSkills');

function unlockPowerHallSkill(skill, duringLoad = false) {
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
                powerSurgeMultiplier = Math.max(powerSurgeMultiplier, 1.5);
                break;

            case 'Temporal Flux':
                temporalFluxSkill = true;
                break;
    
            case 'Arcane Magnetizer':
                fasterAutobuyerskill = true;

                if (autobuyIntervalId !== null) {
                    clearInterval(autobuyIntervalId);
                }
                autobuyIntervalId = setInterval(autobuyUpgrades, 250);

                break;

            case 'Gravity Well':
                gravityWellSkill = true;
                break;

            case 'Nexus Lifeline':
                nexusLifelineSkill = true;
                break;
    

            case 'Astral Precision':
                playerMinDamageMult = 0.75;
                break;

            case 'Void Stabilizer':
                voidStabilizerSkill = true;
                break;

            case 'Astral Edge':
                astralEdgeSkill = true;
                break;
                
    
            case 'Temporal Guard':
                temporalGuardSkill = true;
                break;
        
            case 'Mystic Rebound':
                mysticReboundSkill = true;
                break;

            case 'Vitality Matrix':
                playerHealthMult = 1.5;
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
                playerAttackSpeed = Math.max(playerAttackSpeed, 50);
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
            skillDiv.addEventListener('click', async () => {
                if (!skill.unlocked && power >= skill.cost) {
                    const result = await showMessageModal(
                        'Confirm Unlock',
                        `Do you want to unlock ${skill.name} for ${formatNumber(skill.cost)} Power?`,
                        true,
                        false
                    );
                    if (result) {
                        power -= skill.cost;
                        unlockPowerHallSkill(skill);
                        saveGameState();
                    }
                } else if (power < skill.cost) {
                    showStatusMessage(skillDiv, 'Insufficient Power to unlock this skill.', false);
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
