const powerHallSkills = [
    { name: 'Overcharge', cost: 0.000000001, description: 'Temporarily boost your power output by 200%.', unlocked: false, level: 'Electromagnetism' },
    { name: 'Power Surge', cost: 1500, description: 'Unleash a massive power surge that doubles all production for 60 seconds.', unlocked: false, level: 'Electromagnetism' },
    { name: 'Energy Overflow', cost: 0.000000001, description: 'Allow excess energy to overflow into additional resource generation.', unlocked: false, level: 'Electromagnetism' },
    
    { name: 'Hyperconductor', cost: 250, description: 'Increase power efficiency by 50% through advanced materials.', unlocked: false, level: 'Quantum Mechanics' },
    { name: 'Quantum Charge', cost: 0.000000001, description: 'Harness quantum fluctuations to generate power continuously.', unlocked: false, level: 'Quantum Mechanics' },
    { name: 'Entangled Energy', cost: 10000, description: 'Connect your power sources through quantum entanglement to share energy.', unlocked: false, level: 'Quantum Mechanics' },
    
    { name: 'Infinite Loop', cost: 750, description: 'Create a feedback loop that recycles energy indefinitely.', unlocked: false, level: 'Theoretical Physics' },
    { name: 'Dark Matter Fusion', cost: 20000, description: 'Fuse dark matter to unlock unimaginable power levels.', unlocked: false, level: 'Theoretical Physics' },
    { name: 'Energy Singularity', cost: 0.000000001, description: 'Condense all power into a singularity for a massive burst of energy.', unlocked: false, level: 'Theoretical Physics' },
    
    { name: 'Galactic Core', cost: 100000, description: 'Tap into the energy of a galactic core to power your operations.', unlocked: false, level: 'Astrophysics' },
    { name: 'Stellar Harvesting', cost: 300000, description: 'Harvest energy directly from stars to fuel your needs.', unlocked: false, level: 'Astrophysics' },
    { name: 'Cosmic Battery', cost: 750000, description: 'Store cosmic energy in a battery with nearly unlimited capacity.', unlocked: false, level: 'Astrophysics' }
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
    const powerHallOverlay = document.getElementById('powerHallOverlay');
    //const thePowerHallUpgrade = purchasedUpgrades.find(up => up.name === 'The Power Hall');
    const thePowerHallUpgrade = true;
    if (thePowerHallUpgrade) {
        powerHallOverlay.style.display = 'flex';
        updatePowerHallSkillDisplay();

        // Add a temporary event listener to close the overlay when clicking outside of it
        setTimeout(() => {
            document.addEventListener('click', outsidePowerHallClickListener);
        }, 0);
    } else {
        showMessageModal('Access Denied', 'You are not worthy to enter the Hall of Power. The secrets within remain beyond your reach.');
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
