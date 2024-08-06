const librarySkills = [
    { name: 'Cookie Recipe', cost: 1, description: 'This ancient cookie recipe permanently makes cookie clicks another 10x more powerful.', unlocked: false, level: 'History' },
    { name: 'Knowledge Generation', cost: 400, description: 'After Prestiging or Ascending, begin knowledge generation immediately without reaching -1T delusion.', unlocked: false, level: 'History' },
    { name: 'Trade Ratios', cost: 1500, description: 'Lower trade ratio to 4:1 for top 4 resources and 1M:1 for Hopium.', unlocked: false, level: 'History' },
    // { name: '', cost: 1e8, description: '', unlocked: false, level: 'History' }, 
    // { name: '', cost: 1e10, description: '', unlocked: false, level: 'History' }, 
    // { name: '', cost: 1e20, description: '', unlocked: false, level: 'History' }, 

    { name: 'Cure for Delusion', cost: 5, description: 'Unlock ability to toggle whether delusion gain is positive or negative.', unlocked: false, level: 'Science' },
    { name: 'Luck is Rigged', cost: 777, description: 'Luck is now always on your side - can never lose at Luck Game.', unlocked: false, level: 'Science' },
    { name: "I Can't Math", cost: 1234, description: 'Math Game now only has 2 terms instead of 3. Reward is tripled.', unlocked: false, level: 'Science' },
    // { name: '', cost: 1e9, description: '', unlocked: false, level: 'Science' },
    // { name: '', cost: 1e19, description: '', unlocked: false, level: 'Science' },

    { name: 'Prestige Base', cost: 5000, description: 'Increase Base prestige multiplier from 1.5 to 1.75. Huuge.', unlocked: false, level: 'Nonlinear Partial Differential Equations' },
    { name: '2D Ascension', cost: 230000, description: 'Learn how to ascend God Mode Levels while only folding the space around you into two dimensions. Mathematically, instead of taking prestige chaing to x**(1/3), it changes to x**(2/3).', unlocked: false, level: 'Nonlinear Partial Differential Equations' },
    

    { name: 'Multibuy Upgrades', cost: 2, description: 'Unlock "Buy Seen" and "Buy Max" buttons for Upgrades.', unlocked: false, level: 'Artificial Intelligence' },
    { name: 'Cookie Clicker', cost: 75, description: 'After Prestiging or Ascending, automatically click the cookie 10 times per second for 15 seconds.', unlocked: false, level: 'Artificial Intelligence' },
    { name: 'Triple Ascension', cost: 3.5e6, description: 'Gain up to 3 God Mode levels per Ascension. Also select up to 3 upgrades to enhance to God Mode.', unlocked: false, level: 'Artificial Intelligence' },
    // { name: 'Autobuy Upgrades', cost: 5e13, description: 'Each upgrade can be configured to Autobuy - which will make purchase the upgrade as soon as it's affordable.', unlocked: false, level: 'Artificial Intelligence' },
    // { name: '', cost: 1e14, description: '', unlocked: false, level: 'Artificial Intelligence' },

    { name: 'Knowledge is Power', cost: 1e6, description: 'Unlock new resource Power. Power is always generated based on your current amount of Knowledge.', unlocked: false, level: 'Celestial Bodies' },
    // { name: 'Big Crunch', cost: 1e9, description: 'Unlock ability to force the universe into a Big Crunch and to be reborn anew.', unlocked: false, level: 'Celestial Bodies' },
    // { name: 'Money is Power, too', cost: 1e15, description: 'Add a multiplier to Power generation based on Yacht Money.', unlocked: false, level: 'Celestial Bodies' },

    { name: 'What is this? (not implemented yet)', cost: 1e18, description: 'EZ Game', unlocked: false, level: '???' },
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

        switch (skill.name) {
            case 'Cookie Recipe':
                cookieClickMultiplier = 100;
                const cookieTooltip = document.querySelector('#cookieButton .cookieTooltip');
                cookieTooltip.textContent = `Each cookie click counts as ${cookieClickMultiplier} clicks on collect buttons for Copium, Delusion, Yacht Money, and Troll Points!`;
                break;
        
            case 'Knowledge Generation':
                knowledgeGenerationSkill = true;
                break;
        
            case 'Trade Ratios':
                improvedTradeRatio = true;
                break;
        
            case 'Cure for Delusion':
                document.getElementById('toggleDelusionLabel').classList.remove('hidden');
                // Check the state of delusion and update the switch position accordingly
                const toggleDelusion = document.getElementById('toggleDelusion');
                toggleDelusion.checked = delusionPerSecond >= 0;
                break;

            case 'Luck is Rigged':
                luckGameDelta = 0.1;
                break;
            
            case "I Can't Math":
                mathGameSkill = true;
                break;
                
            case 'Prestige Base':
                prestigeBaseSkill = true;
                break;
            
            case '2D Ascension':
                twoDimensionalAscensionSkill = true;
                break;
                        
            case 'Multibuy Upgrades':
                document.getElementById('buySeenButton').classList.remove('hidden');
                document.getElementById('buyMaxButton').classList.remove('hidden');
                break;
        
            case 'Cookie Clicker':
                cookieAutoClicker = true;
                break;

            case 'Triple Ascension':
                tripleAscensionSkill = true;
                break;

            case 'Knowledge is Power':
                unhidePower();
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
                skillDiv.querySelector('.skill-cost').style.display = 'block';
                skillDiv.querySelector('h3').style.display = 'block';
                skillDiv.querySelector('p').style.display = 'block';
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
                } else {
                    skillDiv.classList.remove('affordable');
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

        // Add a temporary event listener to close the overlay when clicking outside of it
        setTimeout(() => {
            document.addEventListener('click', outsideLibraryClickListener);
        }, 0);
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