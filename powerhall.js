const powerHallSkills = [
    { name: 'Overcharge', cost: 10000, description: 'Unlock ability to spend all your power and multiply production of first 5 resources by square root of spent power.', unlocked: false, level: 'Arcane Magnetism' },
    { name: 'Fake - Power Surge', cost: 1e30, description: 'Unleash a massive power surge that doubles all production for 60 seconds.', unlocked: false, level: 'Arcane Magnetism' },
    { name: 'Fake - Energy Overflow', cost: 1e30, description: 'Allow excess energy to overflow into additional resource generation.', unlocked: false, level: 'Arcane Magnetism' },
    
    { name: 'Auto Prestige', cost: 25000, description: 'Unlock ability to set a Prestige multiplier target - when hit, prestige will happen automatically.', unlocked: false, level: 'Quantum Nexus' },
    { name: 'Fake - Hyperconductor', cost: 1e30, description: 'Increase power efficiency by 50% through advanced materials.', unlocked: false, level: 'Quantum Nexus' },
    { name: 'Fake - Quantum Charge', cost: 1e30, description: 'Harness quantum fluctuations to generate power continuously.', unlocked: false, level: 'Quantum Nexus' },
    { name: 'Fake - Entangled Energy', cost: 1e30, description: 'Connect your power sources through quantum entanglement to share energy.', unlocked: false, level: 'Quantum Nexus' },
    
    { name: 'Fake - Infinite Loop', cost: 1e30, description: 'Create a feedback loop that recycles energy indefinitely.', unlocked: false, level: 'Cosmic Dynamics' },
    { name: 'Fake - Dark Matter Fusion', cost: 1e30, description: 'Fuse dark matter to unlock unimaginable power levels.', unlocked: false, level: 'Cosmic Dynamics' },
    { name: 'Fake - Energy Singularity', cost: 1e30, description: 'Condense all power into a singularity for a massive burst of energy.', unlocked: false, level: 'Cosmic Dynamics' },
    
    // { name: 'Galactic Core', cost: 100000, description: 'Tap into the energy of a galactic core to power your operations.', unlocked: false, level: 'Celestial Manipulation' },
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
