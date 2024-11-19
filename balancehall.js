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
    ["Greater Balance", { description: "Increase max balance values x100", cost: { Copium: 2.5e205 }, available: false, unlocked: false }],
    ["Love Matters", { description: "Multiply all resources by (Love Points / 1000)", cost: { Delusion: 1e210 }, available: false, unlocked: false }],
    ["Balance Check", { description: "Multiplier to last 4 resources based on balance of first 4 resources (checked every 30 seconds)", cost: { 'Yacht Money': 5e217 }, available: false, unlocked: false }],
    ["Everlasting Love", { description: "Passively generate Love Points based on largest embrace each hour (online & offline) -- can go beyond the Infinite Embrace 1M limit", cost: { 'Troll Points': 1e225 }, available: false, unlocked: false }],
    ["Quality of Life", { description: "Resource balancing first 4 resources no longer resets game AND Ascend/Transcend up to 100 upgrades at once AND Cookie Clicker Clicker is permanent AND remove Hall of Love skill confirmations", cost: { Hopium: 1e230 }, available: false, unlocked: false }],
    ["Balance is Power", { description: "Multiplicative 5x to Power for each Balance Skill unlocked", cost: { Knowledge: 1e202 }, available: false, unlocked: false }],
    ["Temporal Dominion", { description: "Time Warp charges 5x faster AND max time increases to 24 minutes", cost: { Power: 1e90 }, available: false, unlocked: false }],
    ["Serene Future", { description: "Multiplicative 3% to Serenity for each upgrade purchased", cost: { Serenity: 1e47 }, available: false, unlocked: false }],
    ["Greatest Balance", { description: "Max balance values are squared", cost: { Copium: 1e242, Delusion: 1e242, 'Yacht Money': 1e242, 'Troll Points': 1e242, Hopium: 1e242, Knowledge: 1e213, Power: 1e96, Serenity: 1e52 }, available: false, unlocked: false }],
    ["Surrounded by Love", { description: "Passive Love Point Generation is 500x faster", cost: { Copium: 1e258, Delusion: 1e258, 'Yacht Money': 1e258, 'Troll Points': 1e258, Hopium: 1e257, Knowledge: 1e230, Power: 1e107, Serenity: 1.6e56 }, available: false, unlocked: false }],
    ["Singularity Wielder", { description: "In battles, set Stun and Dodge chances to log10(serenity) AND vastly increase HP scaling with Copium", cost: { Copium: 1e268, Delusion: 1e268, 'Yacht Money': 1e268, 'Troll Points': 1e268, Hopium: 2e266, Knowledge: 3e242, Power: 6e114, Serenity: 1.6e59 }, available: false, unlocked: false }],
    ["Guardian Training", { description: "Vastly Improve Meditation resource calculations (not implemented yet)", cost: { Copium: 1e300, Delusion: 1e300, 'Yacht Money': 1e300, 'Troll Points': 1e300, Hopium: 1e300, Knowledge: 1e300, Power: 1e300, Serenity: 1e300 }, available: false, unlocked: false }]
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
        if (balanceHallSkills.get("Greatest Balance").unlocked) {
            logMax = logMax ** 2;
        }
        slider.max = logMax;
        slider.value = logMax;  // Set initial slider position to max value

        slider.classList.add('balance-slider');
        slider.dataset.name = name; // Ensure `data-name` matches the `name` used in updateSliders

        // Determine initial disable state for sliders 5-8
        const isBasicResource = basicResources.includes(name);
        slider.disabled = !isBasicResource &&
            !(basicResources.every(resName => balanceHallMultipliers.get(resName).currentMultiplier > 1) || anySkillPurchased());

        // Create a gray dot indicator for the "Curr" value
        const dotIndicator = document.createElement('div');
        dotIndicator.classList.add('dot-indicator');
        let dotPosition = (resource.currentMultiplier / logMax) * 100;
        dotPosition = Math.min(dotPosition, 100); // Clamp to a maximum of 100%
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
                // Get the current slider values
            const sliderValues = [
                document.querySelector('.balance-slider[data-name="Copium"]').value,
                document.querySelector('.balance-slider[data-name="Delusion"]').value,
                document.querySelector('.balance-slider[data-name="Yacht Money"]').value,
                document.querySelector('.balance-slider[data-name="Troll Points"]').value,
                document.querySelector('.balance-slider[data-name="Hopium"]').value,
                document.querySelector('.balance-slider[data-name="Knowledge"]').value,
                document.querySelector('.balance-slider[data-name="Power"]').value,
                document.querySelector('.balance-slider[data-name="Serenity"]').value
            ].map(Number);

            // Check if the slider values are in order
            if (sliderValues.every((value, index, array) => index === 0 || array[index - 1] < value)) {
                unlockAchievement('Rising Balance');
    }
        });

        const balanceButton = document.createElement('button');
        balanceButton.classList.add('balance-button');
        balanceButton.textContent = `Balance ${name}`;
        balanceButton.dataset.name = name; // Ensure `data-name` matches `name` used in updateSliders

        // Disable button for resources 5-8 based on initial conditions
        balanceButton.disabled = !isBasicResource &&
            !(basicResources.every(resName => balanceHallMultipliers.get(resName).currentMultiplier > 1) || anySkillPurchased());

        balanceButton.addEventListener('click', () => {
            resource.currentMultiplier = parseInt(slider.value);
            currentDisplay.textContent = `Curr: ${formatNumber(slider.value)}`;

            if (balanceHallSkills.get("Quality of Life").unlocked && (name == 'Copium' || name == 'Delusion' || name == 'Yacht Money' || name == 'Troll Points')) {
                updateSliders();
            } else {
                balanceReset();
            }
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

    // Call updateSliders only after elements are fully added to the DOM
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
            if (balanceHallSkills.get("Greatest Balance").unlocked) {
                logMax = logMax ** 2;
            }
            slider.max = logMax;

            // Update dot position
            const dotPosition = Math.min((resource.currentMultiplier / logMax) * 100, 100);
            const dotIndicator = slider.parentNode.querySelector('.dot-indicator');
            if (dotIndicator) {
                dotIndicator.style.left = `${dotPosition}%`;
            }
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

let balanceCheckInterval;

function unlockBalanceHallSkill(skillName, duringLoad = false) {
    const skill = balanceHallSkills.get(skillName);

    if (skill && skill.unlocked) {
        updateBalanceSkillDisplay(skill, skillName); // Ensure skill display updates after unlocking

        switch (skillName) {
            case "Greater Balance":
                console.log("Greater Balance functionality activated.");
                unlockAchievement('Balancing Act');
                updateSliders();
                break;
            case "Love Matters":
                console.log("Love Matters functionality activated.");
                break;
            case "Balance Check":
                console.log("Balance Check functionality activated.");
                balanceCheckInterval = setInterval(balanceCheck, 30000);
                break;
            case "Everlasting Love":
                console.log("Everlasting Love functionality activated.");
                break;
            case "Quality of Life":
                console.log("Quality of Life functionality activated.");
                numAscensionUpgrades = Math.max(numAscensionUpgrades, 100);
                numPUAscensionUpgrades = Math.max(numPUAscensionUpgrades, 100);
                break;
            case "Balance is Power":
                console.log("Balance is Power functionality activated.");
                break;
            case "Temporal Dominion":
                warpTimeMax = 60 * 60 * 24;
                console.log("Temporal Dominion functionality activated.");
                break;
            case "Serene Future":
                console.log("Serene Future functionality activated.");
                break;
            case "Greatest Balance":
                console.log("Greatest Balance functionality activated.");
                updateSliders();
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

        
        if (!achievementsMap.get('Do as dev #3 says').isUnlocked && purchasedUpgradesSet.has('Degens Idle Dev #3')){
            hallVisitsSequence += 'B';
            checkHallVisitsSequence();
        }

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


function balanceCheck() {
    // Array of resources
    const resources = [copium, delusion, yachtMoney, trollPoints];
    
    // Calculate max and min values
    const maxResource = Math.max(...resources);
    const minResource = Math.min(...resources);
    
    // Calculate the ratio (diff) between max and min
    const diffRatio = minResource !== 0 ? maxResource / minResource : Infinity;
    
    // Scaling function for balanceCheckMultiplier based on diffRatio

    if (diffRatio < 2) {
        balanceCheckMultiplier = 1000;
    } else if (diffRatio < 5) {
        // Interpolate between 1000 (2x) and 500 (5x)
        balanceCheckMultiplier = 1000 - ((diffRatio - 2) / (5 - 2)) * (1000 - 500);
    } else if (diffRatio < 10) {
        // Interpolate between 500 (5x) and 100 (10x)
        balanceCheckMultiplier = 500 - ((diffRatio - 5) / (10 - 5)) * (500 - 100);
    } else if (diffRatio < 100) {
        // Interpolate between 100 (10x) and 10 (100x)
        balanceCheckMultiplier = 100 - ((diffRatio - 10) / (100 - 10)) * (100 - 10);
    } else if (diffRatio < 1000) {
        // Interpolate between 10 (100x) and 1 (1000x)
        balanceCheckMultiplier = 10 - ((diffRatio - 100) / (1000 - 100)) * (10 - 1);
    } else {
        // If diffRatio is >= 1000, set balanceCheckMultiplier to 1
        balanceCheckMultiplier = 1;
    }

    localStorage.setItem('balanceCheckMultiplier', balanceCheckMultiplier);
    showPopupTooltip(`Balance Check: x${formatNumber(balanceCheckMultiplier)}`, '#b0c4de', 0.8);

    updateEffectiveMultipliers();

    return balanceCheckMultiplier;
}
