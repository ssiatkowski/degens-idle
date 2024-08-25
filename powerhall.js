
const powerHallSkills = [
    { name: 'Power Surge', cost: 9000, description: 'Power Generation is increased by 50%!', unlocked: false, level: 'Arcane Magnetism' },
    { name: 'Arcane Magnetizer', cost: 1e7, description: 'Upgrade autobuyer is now 5x faster!', unlocked: false, level: 'Arcane Magnetism' },
    // { name: 'Fake - Overcharge', cost: 10000, description: 'Unlock ability to spend all your power and multiply production of first 5 resources by square root of spent power.', unlocked: false, level: 'Arcane Magnetism' },
    // { name: 'Fake - Energy Overflow', cost: 1e30, description: 'Allow excess energy to overflow into additional resource generation.', unlocked: false, level: 'Arcane Magnetism' },
    
    { name: 'Nexus Lifeline', cost: 5e6, description: 'With every attack, heal yourself for 2% max health. Overheal is possible.', unlocked: false, level: 'Quantum Nexus' },
    { name: 'Astral Precision', cost: 3e7, description: 'Hone your accuracy. Minimum damage rescaled from power-75% to power-25%.', unlocked: false, level: 'Quantum Nexus' },

    { name: 'Lightning Reflexes', cost: 12000, description: 'Your attacks become 2.5x faster!', unlocked: false, level: 'Cosmic Dynamics' },
    { name: 'Supersonic Fury', cost: 1.2e8, description: 'Your attacks become even 2x faster!', unlocked: false, level: 'Cosmic Dynamics' },
    // { name: 'Astral Disruption', cost: 1e30, description: 'Your attacks have a 5% chance to stun the enemy for 1 second.', unlocked: false, level: 'Cosmic Dynamics' },
    { name: 'Graviton Burst', cost: 1.2e50, description: 'Your attacks are imperceptible to average beings. You now attack 5x faster!', unlocked: false, level: 'Cosmic Dynamics' },

    { name: 'Upgrade Amplifier', cost: 4e8, description: `First 4 resources gain a flat multiplier based on number of purchased upgrades.`, unlocked: false, level: 'Celestial Manipulation' },
    // { name: 'Stellar Harvesting', cost: 300000, description: 'Harvest energy directly from stars to fuel your needs.', unlocked: false, level: 'Celestial Manipulation' },
    // { name: 'Cosmic Battery', cost: 750000, description: 'Store cosmic energy in a battery with nearly unlimited capacity.', unlocked: false, level: 'Celestial Manipulation' }
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
            case 'Overcharge':
                if (!duringLoad) {
                    showMessageModal('Not Yet Implemented', 'Sorry Power Hall skills functionality is not live yet.')
                }
                break;
        
            case 'Auto Prestige':
                if (!duringLoad) {
                    showMessageModal('Not Yet Implemented', 'Sorry Power Hall skills functionality is not live yet.')
                }
                break;


            case 'Power Surge':
                powerSurgeMultiplier = Math.max(powerSurgeMultiplier, 1.5);
                break;

            case 'Arcane Magnetizer':
                fasterAutobuyerskill = true;

                if (autobuyIntervalId !== null) {
                    clearInterval(autobuyIntervalId);
                }
                autobuyIntervalId = setInterval(autobuyUpgrades, 250);

                break;

            case 'Nexus Lifeline':
                nexusLifelineSkill = true;
                break;
    

            case 'Astral Precision':
                playerMinDamageMult = 0.75;
                break;

            case 'Lightning Reflexes':
                playerAttackSpeed = Math.max(playerAttackSpeed, 5);
                break;

            case 'Supersonic Fury':
                playerAttackSpeed = Math.max(playerAttackSpeed, 10);
                break;

            case 'Graviton Burst':
                playerAttackSpeed = Math.max(playerAttackSpeed, 50);
                break;

            case 'Upgrade Amplifier':
                upgradeAmplifierSkill = true;
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
