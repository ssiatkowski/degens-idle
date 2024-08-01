const librarySkills = [
    { name: 'Cookie Recipe', cost: 1, description: 'This ancient cookie recipe permanently makes cookie clicks another 10x more powerful.', unlocked: false, level: 'History' },
    { name: 'God-Mode Prestige', cost: 100, description: 'Learn how to ascend God Mode Levels while only folding the space around you into two dimensions. Results in much lesser decrease to Prestige multiplier (square root instead of cube root).', unlocked: false, level: 'History' },
    { name: 'Knowledge Generation', cost: 250, description: 'Begin knowledge generation without reaching -1T delusion.', unlocked: false, level: 'History' },
    // { name: 'Trade Ratios', cost: 500000, description: 'Lower trade ratio to 3:1 for top 4 resources and 1M:1 for Hopium.', unlocked: false, level: 'History' },
    // { name: '', cost: 1e8, description: '', unlocked: false, level: 'History' }, 
    // { name: '', cost: 1e10, description: '', unlocked: false, level: 'History' }, 
    // { name: '', cost: 1e20, description: '', unlocked: false, level: 'History' }, 

    { name: 'Cure for Delusion', cost: 5, description: 'Unlock ability to toggle whether delusion gain is positive or negative.', unlocked: false, level: 'Science' },
    { name: '', cost: 666, description: '', unlocked: false, level: 'Science' },
    // { name: '', cost: 15000, description: '', unlocked: false, level: 'Science' },
    // { name: '', cost: 1e9, description: '', unlocked: false, level: 'Science' },
    // { name: '', cost: 1e19, description: '', unlocked: false, level: 'Science' },

    { name: 'Multibuy Upgrades', cost: 2, description: 'Unlock "Buy Seen" and "Buy Max" buttons for Upgrades.', unlocked: false, level: 'Artificial Intelligence' },
    { name: '', cost: 75, description: '', unlocked: false, level: 'Artificial Intelligence' },
    // { name: '', cost: 500, description: 'Gain up to 3 God Mode levels per Ascension. Also select up to 3 upgrades to enhance to God Mode.', unlocked: false, level: 'Artificial Intelligence' },
    // { name: '', cost: 1e7, description: '', unlocked: false, level: 'Artificial Intelligence' },
    // { name: '', cost: 1e14, description: '', unlocked: false, level: 'Artificial Intelligence' },

    { name: 'Knowledge is Power', cost: 1e6, description: 'Unlock new resource Power. Power is always generated based on your current amount of Knowledge.', unlocked: false, level: 'Celestial Bodies' },
    // { name: 'Big Crunch', cost: 1e9, description: 'Unlock ability to force the universe into a Big Crunch and to be reborn anew.', unlocked: false, level: 'Celestial Bodies' },
    // { name: 'Money is Power, too', cost: 1e15, description: 'Add a multiplier to Power generation based on Yacht Money.', unlocked: false, level: 'Celestial Bodies' },

    { name: '', cost: 1e18, description: '', unlocked: false, level: '???' },
    // { name: 'Serenity', cost: 1e25, description: '', unlocked: false, level: '???' },
    // { name: '', cost: 1e29, description: '', unlocked: false, level: '???' },
    // { name: '', cost: 1e33, description: '', unlocked: false, level: '???' },

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

        if (skill.name === 'Cookie Recipe') {
            cookieClickMultiplier = 100;
            const cookieTooltip = document.querySelector('#cookieButton .tooltip');
            cookieTooltip.textContent = `Each cookie click counts as ${cookieClickMultiplier} clicks on collect buttons for Copium, Delusion, Yacht Money, and Troll Points!`;
        }
        else if (skill.name === 'Cure for Delusion') {
            document.getElementById('toggleDelusionLabel').classList.remove('hidden');
            // Check the state of delusion and update the switch position accordingly
            const toggleDelusion = document.getElementById('toggleDelusion');
            if (delusionPerSecond >= 0) {
                toggleDelusion.checked = true;
            } else {
                toggleDelusion.checked = false;
            }
        }
        else if (skill.name === 'Multibuy Upgrades') {
            document.getElementById('buySeenButton').classList.remove('hidden');
            document.getElementById('buyMaxButton').classList.remove('hidden');
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
                if (knowledge >= skill.cost) {
                    skillDiv.classList.add('affordable');
                    skillDiv.querySelector('h3').style.display = 'block';
                    skillDiv.querySelector('p').style.display = 'block';
                } else {
                    skillDiv.classList.remove('affordable');
                    skillDiv.querySelector('h3').style.display = 'none';
                    skillDiv.querySelector('p').style.display = 'none';
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
        skillLevelDiv.classList.add('skill-level');

        const skillLevelLabel = document.createElement('div');
        skillLevelLabel.classList.add('skill-level-label');
        skillLevelLabel.textContent = `${level} Section`;
        skillLevelDiv.appendChild(skillLevelLabel);

        const skillRow = document.createElement('div');
        skillRow.classList.add('skill-row');

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
                }
            } else {
                skillDiv.classList.add('purchased');
            }
            skillDiv.addEventListener('click', () => {
                if (!skill.unlocked && knowledge >= skill.cost && confirm(`Do you want to unlock ${skill.name} for ${skill.cost} Knowledge?`)) {
                    knowledge -= skill.cost;
                    unlockLibrarySkill(skill);
                    saveGameState();
                } else if (knowledge < skill.cost) {
                    alert('Not enough Knowledge');
                }
            });
            skillRow.appendChild(skillDiv);
        });

        skillLevelDiv.appendChild(skillRow);
        librarySkillsContainer.appendChild(skillLevelDiv);
    });
}
function openLibrary() {
    const libraryOverlay = document.getElementById('libraryOverlay');
    const theLibraryUpgrade = purchasedUpgrades.find(up => up.name === 'The Library');
    if (theLibraryUpgrade) {
        libraryOverlay.style.display = 'flex';
        updateSkillDisplay();
    } else {
        showMessageModal('Access Denied', 'You are not worthy to enter the Hall of Knowledge. The ancient tomes and secrets within remain beyond your reach. Perhaps it is time to look inwards and seek understanding within yourself first. Only through inner reflection and growth will you gain the wisdom needed to unlock the secrets of this sacred place.');
    }
}



document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('libraryButton').addEventListener('click', () => {
        openLibrary();
    });

    document.getElementById('closeLibraryButton').addEventListener('click', () => {
        document.querySelector('.library-overlay').style.display = 'none';
    });
    
    document.getElementById('closeLibraryOverlay').addEventListener('click', () => {
        document.querySelector('.library-overlay').style.display = 'none';
    });
});
