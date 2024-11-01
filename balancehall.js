let balanceHallMultipliers = new Map([
    ['Copium', { get resource() { return copium; }, currentMultiplier: 1 }],
    ['Delusion', { get resource() { return delusion; }, currentMultiplier: 1 }],
    ['Yacht Money', { get resource() { return yachtMoney; }, currentMultiplier: 1 }],
    ['Troll Points', { get resource() { return trollPoints; }, currentMultiplier: 1 }],
    ['Hopium', { get resource() { return hopium; }, currentMultiplier: 1 }],
    ['Knowledge', { get resource() { return knowledge; }, currentMultiplier: 1 }],
    ['Power', { get resource() { return power; }, currentMultiplier: 1 }],
    ['Serenity', { get resource() { return serenity; }, currentMultiplier: 1 }]
]);

const balanceHallContainer = document.getElementById('balanceHallSkills');
const basicResources = ['Copium', 'Delusion', 'Yacht Money', 'Troll Points'];

let balanceHallSkills = new Map([
    ["Greater Balance", { description: "Increase max balance values x100", cost: { Copium: 1e205 }, available: false, unlocked: false }],
    ["Love Matters", { description: "Multiply all resources by (Love Points / 1000)", cost: { Delusion: 1e210 }, available: false, unlocked: false }],
    ["Skill 3", { description: "Does not Exist Yet", cost: { YachtMoney: 1e300 }, available: false, unlocked: false }],
    ["Skill 4", { description: "Does not Exist Yet", cost: { TrollPoints: 1e300 }, available: false, unlocked: false }],
    ["Skill 5", { description: "Does not Exist Yet", cost: { Hopium: 1e300 }, available: false, unlocked: false }],
    ["Skill 6", { description: "Does not Exist Yet", cost: { Knowledge: 1e300 }, available: false, unlocked: false }],
    ["Skill 7", { description: "Does not Exist Yet", cost: { Power: 1e300 }, available: false, unlocked: false }],
    ["Skill 8", { description: "Does not Exist Yet", cost: { Serenity: 1e300 }, available: false, unlocked: false }],
    ["Advanced Skill 1", { description: "Does not Exist Yet", cost: { Copium: 1e300, Delusion: 1e300, YachtMoney: 1e300, TrollPoints: 1e300, Hopium: 1e300, Knowledge: 1e300, Power: 1e300, Serenity: 1e300 }, available: false, unlocked: false }],
    ["Advanced Skill 2", { description: "Does not Exist Yet", cost: { Copium: 1e300, Delusion: 1e300, YachtMoney: 1e300, TrollPoints: 1e300, Hopium: 1e300, Knowledge: 1e300, Power: 1e300, Serenity: 1e300 }, available: false, unlocked: false }],
    ["Advanced Skill 3", { description: "Does not Exist Yet", cost: { Copium: 1e300, Delusion: 1e300, YachtMoney: 1e300, TrollPoints: 1e300, Hopium: 1e300, Knowledge: 1e300, Power: 1e300, Serenity: 1e300 }, available: false, unlocked: false }],
    ["Advanced Skill 4", { description: "Does not Exist Yet", cost: { Copium: 1e300, Delusion: 1e300, YachtMoney: 1e300, TrollPoints: 1e300, Hopium: 1e300, Knowledge: 1e300, Power: 1e300, Serenity: 1e300 }, available: false, unlocked: false }]
]);

function initializeBalanceHall() {
    balanceHallContainer.innerHTML = ''; // Clear previous content

    balanceHallMultipliers.forEach((resource, name) => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('balancehall-row');
        rowDiv.dataset.name = name;

        const leftColumn = document.createElement('div');
        leftColumn.classList.add('balancehall-left-column');

        const sliderContainer = document.createElement('div');
        sliderContainer.classList.add('slider-container');  // Wrapper for slider and dot

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '1';
        
        let logMax = Math.floor(Math.log10(resource.resource));
        if (balanceHallSkills.get("Greater Balance").unlocked) {
            logMax *= 100;
        }
        slider.max = logMax;
        slider.value = logMax;  // Set initial slider position to max value

        slider.classList.add('balance-slider');
        slider.dataset.name = name;

        // Determine initial disable state for sliders 5-8
        const isBasicResource = basicResources.includes(name);
        slider.disabled = !isBasicResource && 
                          !(basicResources.every(resName => balanceHallMultipliers.get(resName).currentMultiplier > 1) || anySkillPurchased());

        // Create a gray dot indicator for the "Curr" value
        const dotIndicator = document.createElement('div');
        dotIndicator.classList.add('dot-indicator');
        const dotPosition = (resource.currentMultiplier / logMax) * 100;
        dotIndicator.style.left = `${dotPosition}%`;

        // Current and New displays with updated colors
        const currentDisplay = document.createElement('span');
        currentDisplay.classList.add('current-multiplier');
        currentDisplay.textContent = `Curr: ${formatNumber(resource.currentMultiplier)}`;
        currentDisplay.style.color = '#D3D3D3';  // Lighter gray for "Curr"

        const newDisplay = document.createElement('span');
        newDisplay.classList.add('new-multiplier');
        newDisplay.textContent = `New: ${formatNumber(slider.value)}`;
        newDisplay.style.color = '#6495ED';  // Lighter blue for "New"

        slider.addEventListener('input', () => {
            newDisplay.textContent = `New: ${formatNumber(slider.value)}`;
        });

        const balanceButton = document.createElement('button');
        balanceButton.classList.add('balance-button');
        balanceButton.textContent = `Balance ${name}`;
        
        // Disable button for resources 5-8 based on initial conditions
        balanceButton.disabled = !isBasicResource &&
            !(basicResources.every(resName => balanceHallMultipliers.get(resName).currentMultiplier > 1) || anySkillPurchased());

        balanceButton.addEventListener('click', () => {
            resource.currentMultiplier = parseInt(slider.value);
            currentDisplay.textContent = `Curr: ${formatNumber(slider.value)}`;
            
            balanceReset();
            updateSliders();  // Re-evaluate all sliders after balancing a resource
            checkSkillUnlock();
            updateDisclaimerText();
        });

        // Append elements to the slider container and then to the left column
        sliderContainer.appendChild(slider);
        sliderContainer.appendChild(dotIndicator);  // Add dot on the slider
        // Create a container div for Curr and New displays
        const currentNewRow = document.createElement('div');
        currentNewRow.classList.add('current-new-row'); // Class for styling Curr and New on the same row
        currentNewRow.appendChild(currentDisplay);
        currentNewRow.appendChild(newDisplay);

        // Add elements to the left column in the desired order
        leftColumn.appendChild(currentNewRow);      // Curr and New on the same row
        leftColumn.appendChild(sliderContainer);   // Slider row
        leftColumn.appendChild(balanceButton);      // Balance button below

        rowDiv.appendChild(leftColumn);
        balanceHallContainer.appendChild(rowDiv);
    });

    const skillGrid = document.createElement('div');
    skillGrid.classList.add('balance-skill-grid');

    balanceHallSkills.forEach((skill, skillName) => {
        const skillButton = document.createElement('button');
        skillButton.classList.add('balance-skill-button');
        skillButton.dataset.name = skillName;
    
        if (skill.unlocked) {
            skill.available = true;
        }
    
        updateBalanceSkillDisplay(skill, skillName);
    
        skillButton.addEventListener('click', () => {
            purchaseSkill(skillName);
        });
    
        skillGrid.appendChild(skillButton);
    });

    balanceHallContainer.appendChild(skillGrid);

    const disclaimer = document.createElement('p');
    disclaimer.classList.add('balance-disclaimer');
    balanceHallContainer.insertBefore(disclaimer, balanceHallContainer.firstChild);

    updateDisclaimerText();
    checkSkillUnlock();
    updateSliders();
}



function updateDisclaimerText() {
    const disclaimer = document.querySelector('.balance-disclaimer');
    if (!disclaimer) return;

    const allBasicBalanced = basicResources.every(name => balanceHallMultipliers.get(name).currentMultiplier > 1) || anySkillPurchased();
    const allBalanced = Array.from(balanceHallMultipliers.values()).every(resource => resource.currentMultiplier > 1) || anySkillPurchased();

    if (!allBasicBalanced) {
        disclaimer.textContent = "Basic resources must be balanced before attempting to balance advanced resources.";
    } else if (allBasicBalanced && !allBalanced) {
        disclaimer.textContent = "All resources must be balanced to unlock skills.";
    } else if (allBalanced && !Array.from(balanceHallSkills.values()).slice(0, 8).every(skill => skill.unlocked)) {
        disclaimer.textContent = "All basic skills must be purchased to unlock advanced skills.";
    } else {
        disclaimer.textContent = "";
    }
}


function updateSliders() {
    const allBasicBalanced = basicResources.every(name =>
        balanceHallMultipliers.get(name).currentMultiplier > 1
    ) || anySkillPurchased();

    balanceHallMultipliers.forEach((resource, name) => {
        const slider = document.querySelector(`.balance-slider[data-name="${name}"]`);
        const balanceButton = document.querySelector(`.balance-button[data-name="${name}"]`);

        // Check if slider and button exist before trying to set properties
        if (slider && balanceButton) {
            const isBasicResource = basicResources.includes(name);

            // Enable sliders and buttons for resources 5-8 if the first 4 are balanced or any skill is purchased
            slider.disabled = !isBasicResource && !allBasicBalanced;
            balanceButton.disabled = !isBasicResource && !allBasicBalanced;

            // Set max dynamically based on the log10 of the current resource value
            let logMax = Math.floor(Math.log10(resource.resource)) || 1;
            if (balanceHallSkills.get("Greater Balance").unlocked) {
                logMax *= 100;
            }
            slider.max = logMax;
        } else {
            console.warn(`Element for ${name} not found.`);
        }
    });
}



function updateBalanceSkillDisplay(skill, skillName) {
    const skillButton = document.querySelector(`.balance-skill-button[data-name="${skillName}"]`);
    if (!skillButton) return;

    skillButton.innerHTML = ''; // Clear existing content

    // Bold skill name
    const skillNameElement = document.createElement('strong');
    skillNameElement.textContent = skillName;
    skillButton.appendChild(skillNameElement);

    // Disable skills until they are available
    skillButton.disabled = !skill.available;
    skillButton.classList.toggle('disabled-skill', !skill.available); // Apply disabled style when not available

    // Show cost and description only when skill is available and not unlocked
    if (skill.available && !skill.unlocked) {
        const costContainer = document.createElement('div');
        costContainer.classList.add('skill-cost-container');

        if (Array.from(balanceHallSkills.keys()).indexOf(skillName) < 8) {
            Object.entries(skill.cost).forEach(([resource, amount]) => {
                const costText = document.createElement('span');
                costText.textContent = `${formatNumber(amount)} ${resource}`;
                costText.classList.add('skill-cost');
                costContainer.appendChild(costText);
            });
        } else {
            Object.entries(skill.cost).forEach(([resource, amount]) => {
                const costText = document.createElement('div');
                costText.textContent = `${formatNumber(amount)} ${resource}`;
                costText.classList.add('skill-cost');
                costContainer.appendChild(costText);
            });
        }
        skillButton.appendChild(costContainer);
    }

    // Show description only if the skill is available
    if (skill.available) {
        const skillDescription = document.createElement('div');
        skillDescription.classList.add('skill-description');
        skillDescription.textContent = skill.description;
        skillButton.appendChild(skillDescription);
    }

    // Style for purchased skills
    if (skill.unlocked) {
        skillButton.classList.add('purchased-skill');
        skillButton.style.backgroundColor = '#4CAF50';
        skillButton.innerHTML = `<strong>${skillName}</strong><div>${skill.description}</div>`;
    }
}


function anySkillPurchased() {
    return Array.from(balanceHallSkills.values()).some(skill => skill.unlocked);
}

function checkSkillUnlock() {
    const allBalanced = Array.from(balanceHallMultipliers.values()).every(resource => resource.currentMultiplier > 1);
    const allBasicSkillsPurchased = Array.from(balanceHallSkills.values()).slice(0, 8).every(skill => skill.unlocked);

    // Update `available` for basic and advanced skills based on conditions
    balanceHallSkills.forEach((skill, skillName) => {
        if (!skill.unlocked) {
            if (allBalanced && Array.from(balanceHallSkills.keys()).indexOf(skillName) < 8) {
                skill.available = true;
            } else if (allBasicSkillsPurchased && Array.from(balanceHallSkills.keys()).indexOf(skillName) >= 8) {
                skill.available = true;
            }
        }

        // Update the skill display based on availability and purchase state
        updateBalanceSkillDisplay(skill, skillName);
    });
}


function purchaseSkill(skillName) {
    const skill = balanceHallSkills.get(skillName);
    if (!skill) {
        console.error(`Skill "${skillName}" not found.`);
        return;
    }

    if (skill.available && !skill.unlocked) {
        // Check if the player has enough resources for each cost
        const canAfford = Object.entries(skill.cost).every(([resourceName, amount]) => {
            const playerResource = balanceHallMultipliers.get(resourceName)?.resource;
            return playerResource !== undefined && playerResource >= amount;
        });

        if (!canAfford) {
            showPopupTooltip('Insufficient Resources', 'red', 0.5);
            return;
        }

        // Deduct the cost from each resource if affordable
        Object.entries(skill.cost).forEach(([resourceName, amount]) => {
            balanceHallMultipliers.get(resourceName).resource -= amount;
        });

        // Mark skill as unlocked
        skill.unlocked = true;
        console.log(`Purchased ${skillName}`);

        // Update display and add functionality
        unlockBalanceHallSkill(skillName);
        updateBalanceSkillDisplay(skill, skillName);

        // Re-check skill unlock conditions for other skills
        checkSkillUnlock();
    }
}


function unlockBalanceHallSkill(skillName, duringLoad = false) {
    const skill = balanceHallSkills.get(skillName);

    if (skill && skill.unlocked) {
        updateBalanceSkillDisplay(skill, skillName); // Ensure skill display updates after unlocking

        switch (skillName) {
            case "Greater Balance":
                console.log("Greater Balancefunctionality activated.");
                updateSliders();
                // Placeholder for Skill 1 functionality
                break;
            case "Love Matters":
                console.log("Skill 2 functionality activated.");
                // Placeholder for Skill 2 functionality
                break;
            case "Skill 3":
                console.log("Skill 3 functionality activated.");
                // Placeholder for Skill 3 functionality
                break;
            case "Skill 4":
                console.log("Skill 4 functionality activated.");
                // Placeholder for Skill 4 functionality
                break;
            case "Skill 5":
                console.log("Skill 5 functionality activated.");
                // Placeholder for Skill 5 functionality
                break;
            case "Skill 6":
                console.log("Skill 6 functionality activated.");
                // Placeholder for Skill 6 functionality
                break;
            case "Skill 7":
                console.log("Skill 7 functionality activated.");
                // Placeholder for Skill 7 functionality
                break;
            case "Skill 8":
                console.log("Skill 8 functionality activated.");
                // Placeholder for Skill 8 functionality
                break;
            case "Advanced Skill 1":
                console.log("Advanced Skill 1 functionality activated.");
                // Placeholder for Advanced Skill 1 functionality
                break;
            case "Advanced Skill 2":
                console.log("Advanced Skill 2 functionality activated.");
                // Placeholder for Advanced Skill 2 functionality
                break;
            case "Advanced Skill 3":
                console.log("Advanced Skill 3 functionality activated.");
                // Placeholder for Advanced Skill 3 functionality
                break;
            case "Advanced Skill 4":
                console.log("Advanced Skill 4 functionality activated.");
                // Placeholder for Advanced Skill 4 functionality
                break;
            default:
                console.log(`${skillName} functionality is not yet defined.`);
                break;
        }
    } else {
        console.error(`Skill ${skillName} cannot be unlocked or is already unlocked.`);
    }
    if(!duringLoad) {
        balanceReset();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('balanceHallButton').addEventListener('click', openBalanceHall);
    document.getElementById('closeBalanceHallButton').addEventListener('click', closeBalanceHall);
    document.getElementById('closeBalanceHallOverlay').addEventListener('click', closeBalanceHall);
});

function openBalanceHall() {
    if (!purchasedUpgradesSet.has('Balance Master')) {
        showMessageModal('Access Denied', 
            'The Hall of Balance lies beyond your grasp, its doors sealed to those unready to walk the path of true equilibrium. Within these sacred walls, the art of harmony awaits only the worthy—those who have learned to temper strength with patience, wisdom with humility. Reflect upon your journey, for only by mastering the balance within yourself will you gain entry to the mysteries that lie ahead.'
        );       
        unlockAchievement('Lacking Balance');
    } else {
        initializeBalanceHall();
        const balanceHallOverlay = document.getElementById('balanceHallOverlay');
        balanceHallOverlay.style.display = 'flex';
        // Add a temporary event listener to close the overlay when clicking outside of it
        setTimeout(() => {
            document.addEventListener('click', outsideBalanceHallClickListener);
        }, 0);
    }
}

function closeBalanceHall() {
    const balanceHallOverlay = document.getElementById('balanceHallOverlay');
    balanceHallOverlay.style.display = 'none';
    document.removeEventListener('click', outsideBalanceHallClickListener);
}

function outsideBalanceHallClickListener(event) {
    const balanceHallContent = document.querySelector('.balancehall-overlay-content');

    if (!balanceHallContent.contains(event.target)) {
        closeBalanceHall();
    }
}