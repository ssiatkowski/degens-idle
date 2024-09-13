
const loveHallSkills = [
    // 2.828x Level - Bell's Inequality for quantum entangled particle correlation
    { name: 'Delusion Echo', cost: 0.25, description: '5x Delusion gain.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 1 },
    { name: 'Copium Surge', cost: 0.25, description: '5x Copium gain.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 1 },

    { name: 'Twenty-Fivefold Ascension', cost: 2, description: 'Gain up to 25 God-Mode levels per Ascension.', unlocked: false, level: 'Quantum Harmony (2.8x)',  pair: 2 },
    { name: 'Twenty-Fivefold Transcendence', cost: 2, description: 'Gain up to 25 PU God-Mode levels per Transcendence.', unlocked: false, level: 'Quantum Harmony (2.8x)',  pair: 2 },

    { name: 'Achievement Boost', cost: 3, description: 'Achievement Multiplier increases to 1.5% per achievement.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 3 },
    { name: 'Cosmic Embrace', cost: 3, description: 'Gain +1 Love Point every embrace.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 3 },

    { name: 'Serenity Flow', cost: 5, description: 'Hopium gain is multiplied by square root of Serenity.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 4 },
    { name: 'Serene Boost', cost: 5, description: '2x Serenity gain.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 4 },

    { name: 'Power Infusion', cost: 15, description: '3x Power gain.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 5 },
    { name: 'Love Surge', cost: 15, description: 'Gain +2 Love Points every embrace.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 5 },

    { name: 'Achievement Multiplier Boost', cost: 50, description: 'Achievement multiplier becomes multiplicative instead of additive.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 6 },
    { name: 'Perfect PU God-Mode', cost: 50, description: 'Make PU God-Mode perfect with diminishing returns at 99.2%.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 6 },

    // 27x Level - dimensions in string theory
    { name: 'Knowledge Infusion', cost: 1, description: '8x Knowledge gain.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 21 },
    { name: 'Resource Boost', cost: 1, description: '8x gain to first 4 resources.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 21 },

    { name: 'Hall of Knowledge Auto-Buy', cost: 1.5, description: 'Automatically buy upgrades from the Hall of Knowledge.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 22 },
    { name: 'Hall of Power Auto-Buy', cost: 1.5, description: 'Automatically buy upgrades from the Hall of Power.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 22 },

    { name: 'Auto Fight', cost: 5, description: 'Spare opponents who are far weaker than you and auto unlock the upgrades.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 23 },
    { name: 'Hopium Fix', cost: 5, description: 'Fix Hopium in the same way Delusion is fixed.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 23 },

    { name: 'Serenity Gain (Copium)', cost: 10, description: 'Serenity gain is multiplied by log(Copium)/10.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 24 },
    { name: 'Serenity Gain (Delusion)', cost: 10, description: 'Serenity gain is multiplied by log(Delusion)/10.', unlocked: false, level: 'Quantum Harmony (2.8x)', pair: 24 },

    { name: 'Serenity Gain (Yacht Money)', cost: 10, description: 'Serenity gain is multiplied by log(Yacht Money)/10.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 25 },
    { name: 'Serenity Gain (Troll Points)', cost: 10, description: 'Serenity gain is multiplied by log(Troll Points)/10.', unlocked: false, level: 'Dimensional Shift (27x)', pair: 25 },

    // 42x Level - the meaning of life
    { name: 'Hopium Trade', cost: 1.5, description: 'Trade Hopium for any of the first 4 resources at a 1:1 ratio.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 41 },
    { name: 'Auto Prestige', cost: 1.5, description: 'Automatically apply Prestige Mult without resetting.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 41 },

    { name: 'Serenity Multiplier', cost: 8, description: 'Multiply Serenity by log10 of Love Points.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 42 },
    { name: 'Auto Hopium Trade', cost: 8, description: 'Every second, automatically trade Hopium for all lower resources.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 42 },

    { name: 'Knowledge Exchange', cost: 15, description: 'Trade Hopium for Knowledge at a 1e20:1 ratio.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 43 },
    { name: 'Big Crunch Factor Boost', cost: 15, description: 'Increase Big Crunch factor from 2 to 2.1.', unlocked: false, level: 'Cosmic Truth (42x)', pair: 43 }
];



const loveHallSkillsContainer = document.getElementById('loveHallSkills');
const lovePointsDisplay = document.getElementById('lovePointsDisplay'); // Placeholder for Love Points display

function unlockLoveHallSkill(skill) {
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
                    }
                } else {
                    skillDiv.classList.add('purchased');
                }

                skillDiv.addEventListener('click', () => {
                    if (!skill.unlocked && lovePoints >= skill.cost) {
                        lovePoints -= skill.cost;
                        unlockLoveHallSkill(skill);
                        saveGameState(); // Assuming this saves the game state
                        updateLoveHallSkillDisplay(); // Update after unlocking
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

function openLoveHall() {
    const loveHallOverlay = document.getElementById('loveHallOverlay');
    loveHallOverlay.style.display = 'flex';

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