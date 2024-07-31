document.addEventListener('DOMContentLoaded', () => {
    const librarySkills = [
        { name: '', cost: 1, description: '', unlocked: false, level: 'History' },
        { name: 'God-Mode Prestige', cost: 100, description: 'Learn how to ascend God Mode Levels while only folding the space around you into two dimensions. Results in much lesser decrease to Prestige multiplier.', unlocked: false, level: 'History' },
        { name: 'Trade Ratios', cost: 500000, description: 'Lower trade ratio to 3:1 for top 4 resources and 1M:1 for Hopium.', unlocked: false, level: 'History' },
        { name: '', cost: 1e8, description: '', unlocked: false, level: 'History' }, 
        { name: '', cost: 1e10, description: '', unlocked: false, level: 'History' }, 
        { name: '', cost: 1e20, description: '', unlocked: false, level: 'History' }, 

        { name: '', cost: 5, description: '', unlocked: false, level: 'Science' },
        { name: '', cost: 666, description: '', unlocked: false, level: 'Science' },
        { name: '', cost: 15000, description: '', unlocked: false, level: 'Science' },
        { name: '', cost: 1e9, description: '', unlocked: false, level: 'Science' },
        { name: '', cost: 1e19, description: '', unlocked: false, level: 'Science' },

        { name: 'Multibuy Upgrades', cost: 2, description: 'Unlock "Buy Seen" and "Buy Max" buttons for Upgrades.', unlocked: false, level: 'Artificial Intelligence' },
        { name: '', cost: 4, description: '', unlocked: false, level: 'Artificial Intelligence' },
        { name: '', cost: 4, description: '', unlocked: false, level: 'Artificial Intelligence' },
        { name: '', cost: 4, description: '', unlocked: false, level: 'Artificial Intelligence' },
        { name: '', cost: 4, description: '', unlocked: false, level: 'Artificial Intelligence' },

        { name: '', cost: 5, description: '', unlocked: false, level: 'Celestial Bodies' },
        { name: '', cost: 5, description: '', unlocked: false, level: 'Celestial Bodies' },
        { name: '', cost: 5, description: '', unlocked: false, level: 'Celestial Bodies' },

        { name: '', cost: 5, description: '', unlocked: false, level: '???' },
        { name: '', cost: 5, description: '', unlocked: false, level: '???' },
        { name: '', cost: 5, description: '', unlocked: false, level: '???' },
        { name: '', cost: 5, description: '', unlocked: false, level: '???' },

        // Add more skills as needed
    ];

    //skill levels:


    const librarySkillsContainer = document.getElementById('librarySkills');

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
            if (!skill.unlocked) {
                skillDiv.classList.add('locked');
                if (knowledge >= skill.cost) {
                    skillDiv.classList.add('affordable');
                }
            } else {
                skillDiv.classList.add('purchased');
            }
            skillDiv.innerHTML = `
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
                <p>Cost: ${skill.cost} Knowledge</p>
            `;
            skillDiv.addEventListener('click', () => {
                if (!skill.unlocked && confirm(`Do you want to unlock ${skill.name} for ${skill.cost} Knowledge?`)) {
                    if (knowledge >= skill.cost) {
                        knowledge -= skill.cost;
                        skill.unlocked = true;
                        skillDiv.classList.remove('locked', 'affordable');
                        skillDiv.classList.add('purchased');
                        alert(`${skill.name} unlocked!`);
                        // Apply skill effects here
                    } else {
                        alert('Not enough Knowledge');
                    }
                }
            });
            skillRow.appendChild(skillDiv);
        });

        skillLevelDiv.appendChild(skillRow);
        librarySkillsContainer.appendChild(skillLevelDiv);

        // // Add connector lines between levels
        // if (level < Object.keys(skillLevels).length) {
        //     const connectorRow = document.createElement('div');
        //     connectorRow.classList.add('skill-row');
        //     const connector = document.createElement('div');
        //     connector.classList.add('skill-connector');
        //     connectorRow.appendChild(connector);
        //     librarySkillsContainer.appendChild(connectorRow);
        // }
    });

    document.getElementById('libraryButton').addEventListener('click', openLibrary);

    document.getElementById('closeLibraryButton').addEventListener('click', () => {
        document.querySelector('.library-overlay').style.display = 'none'; // Updated to match the CSS class name
    });
});