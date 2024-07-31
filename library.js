

document.addEventListener('DOMContentLoaded', () => {
    const librarySkills = [
        { name: 'Cookie Recipe', cost: 1, description: 'This ancient cookie recipe permanently makes cookie clicks another 10x more powerful.', unlocked: false, level: 'History' },
        { name: 'God-Mode Prestige', cost: 100, description: 'Learn how to ascend God Mode Levels while only folding the space around you into two dimensions. Results in much lesser decrease to Prestige multiplier.', unlocked: false, level: 'History' },
        { name: 'Trade Ratios', cost: 500000, description: 'Lower trade ratio to 3:1 for top 4 resources and 1M:1 for Hopium.', unlocked: false, level: 'History' },
        { name: '', cost: 1e8, description: '', unlocked: false, level: 'History' }, 
        { name: '', cost: 1e10, description: '', unlocked: false, level: 'History' }, 
        { name: '', cost: 1e20, description: '', unlocked: false, level: 'History' }, 

        { name: 'Cure for Delusion', cost: 5, description: 'Unlock ability to toggle whether delusion gain is positive or negative.', unlocked: false, level: 'Science' },
        { name: '', cost: 666, description: '', unlocked: false, level: 'Science' },
        { name: '', cost: 15000, description: '', unlocked: false, level: 'Science' },
        { name: '', cost: 1e9, description: '', unlocked: false, level: 'Science' },
        { name: '', cost: 1e19, description: '', unlocked: false, level: 'Science' },

        { name: 'Multibuy Upgrades', cost: 2, description: 'Unlock "Buy Seen" and "Buy Max" buttons for Upgrades.', unlocked: false, level: 'Artificial Intelligence' },
        { name: '', cost: 75, description: '', unlocked: false, level: 'Artificial Intelligence' },
        { name: '', cost: 500, description: 'Gain up to 3 God Mode levels per Ascension. Also select up to 3 upgrades to enhance to God Mode.', unlocked: false, level: 'Artificial Intelligence' },
        { name: '', cost: 1e7, description: '', unlocked: false, level: 'Artificial Intelligence' },
        { name: '', cost: 1e14, description: '', unlocked: false, level: 'Artificial Intelligence' },

        { name: 'Knowledge is Power', cost: 1e6, description: 'Unlock new resource Power. Power is always generated based on your current amount of Knowledge.', unlocked: false, level: 'Celestial Bodies' },
        { name: 'Big Crunch', cost: 1e9, description: 'Unlock ability to force the universe into a Big Crunch and to be reborn anew.', unlocked: false, level: 'Celestial Bodies' },
        { name: 'Money is Power, too', cost: 1e15, description: 'Add a multiplier to Power generation based on Yacht Money.', unlocked: false, level: 'Celestial Bodies' },

        { name: '', cost: 1e18, description: '', unlocked: false, level: '???' },
        { name: 'Serenity', cost: 1e25, description: '', unlocked: false, level: '???' },
        { name: '', cost: 1e29, description: '', unlocked: false, level: '???' },
        { name: '', cost: 1e33, description: '', unlocked: false, level: '???' },

        // Add more skills as needed
    ];


    // Function to update the skill display
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

    const librarySkillsContainer = document.getElementById('librarySkills');


    // Initialize the skill display
    function initializeSkills() {
        // Group skills by level
        const skillLevels = {};
        librarySkills.forEach(skill => {
            if (!skillLevels[skill.level]) {
                skillLevels[skill.level] = [];
            }
            skillLevels[skill.level].push(skill);
        });

        // Create skill tree structure
        Object.keys(skillLevels).forEach(level => {
            const skillLevelDiv = document.createElement('div');
            skillLevelDiv.classList.add('skill-level');

            const skillLevelLabel = document.createElement('div');
            skillLevelLabel.classList.add('skill-level-label');
            skillLevelLabel.textContent = `Level ${level}`;
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
                        skill.unlocked = true;
                        skillDiv.classList.remove('locked', 'affordable');
                        skillDiv.classList.add('purchased');
                        skillDiv.innerHTML = `
                            <p class="skill-cost">Cost: ${formatNumber(skill.cost)} Knowledge</p>
                            <h3>${skill.name}</h3>
                            <p>${skill.description}</p>
                        `;
                        alert(`${skill.name} unlocked!`);
                        updateSkillDisplay(); // Update the skill display after purchasing a skill
                        // Apply skill effects here
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

    //skill levels:

    // Initialize skills when the page loads
    initializeSkills();

    // Update skill display when the Library button is clicked
    document.getElementById('libraryButton').addEventListener('click', () => {
        updateSkillDisplay();
        openLibrary();
    });

    document.getElementById('closeLibraryButton').addEventListener('click', () => {
        document.querySelector('.library-overlay').style.display = 'none';
    });
});