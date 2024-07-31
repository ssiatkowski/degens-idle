document.addEventListener('DOMContentLoaded', () => {
    const librarySkills = [
        { name: 'Skill 1', cost: 1000, description: 'Increase Copium generation by 10%', unlocked: false },
        { name: 'Skill 2', cost: 2000, description: 'Increase Delusion generation by 10%', unlocked: false },
        { name: 'Skill 3', cost: 3000, description: 'Increase Yacht Money generation by 10%', unlocked: false },
        // Add more skills as needed
    ];

    const librarySkillsContainer = document.getElementById('librarySkills');

    librarySkills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('libraryskill'); // Changed to match the CSS class name
        if (!skill.unlocked) {
            skillDiv.classList.add('locked');
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
                    skillDiv.classList.remove('locked');
                    alert(`${skill.name} unlocked!`);
                    // Apply skill effects here
                } else {
                    alert('Not enough Knowledge');
                }
            }
        });
        librarySkillsContainer.appendChild(skillDiv);
    });

    document.getElementById('libraryButton').addEventListener('click', openLibrary);

    document.getElementById('closeLibraryButton').addEventListener('click', () => {
        document.querySelector('.library-overlay').style.display = 'none'; // Updated to match the CSS class name
    });
});