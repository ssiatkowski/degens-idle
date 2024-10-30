// balancehall.js

const balanceHallMultipliers = [
    { name: 'Copium', currentMultiplier: 1 },
    { name: 'Delusion', currentMultiplier: 1 },
    { name: 'Yacht Money', currentMultiplier: 1 },
    { name: 'Troll Points', currentMultiplier: 1 },
    { name: 'Hopium', currentMultiplier: 1 },
    { name: 'Knowledge', currentMultiplier: 1 },
    { name: 'Power', currentMultiplier: 1 },
    { name: 'Serenity', currentMultiplier: 1 }
];

const balanceHallContainer = document.getElementById('balanceHallSkills');

function initializeBalanceHall() {
    console.log("Initializing Hall of Balance...");

    balanceHallMultipliers.forEach((resource, index) => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('balancehall-row');

        // Left Column - Slider and Button
        const leftColumn = document.createElement('div');
        leftColumn.classList.add('balancehall-left-column');

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '1';
        slider.max = '10';
        slider.value = resource.currentMultiplier;
        slider.classList.add('balance-slider');
        
        const lockButton = document.createElement('button');
        lockButton.classList.add('lock-button');
        lockButton.textContent = `Lock ${resource.name}`;
        
        leftColumn.appendChild(slider);
        leftColumn.appendChild(lockButton);

        // Right Column - Skill Button
        const rightColumn = document.createElement('div');
        rightColumn.classList.add('balancehall-right-column');

        const skillButton = document.createElement('button');
        skillButton.classList.add('balance-skill-button');
        skillButton.textContent = resource.name;
        
        rightColumn.appendChild(skillButton);

        // Append columns to the row
        rowDiv.appendChild(leftColumn);
        rowDiv.appendChild(rightColumn);

        // Append row to container
        balanceHallContainer.appendChild(rowDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('balanceHallButton').addEventListener('click', () => {
        openBalanceHall();
    });
    
    document.getElementById('closeBalanceHallButton').addEventListener('click', () => {
        closeBalanceHall();
    });

    initializeBalanceHall();
});

function openBalanceHall() {
    if (!purchasedUpgradesSet.has('Balancer Master')) {
        showMessageModal('Access Denied', 
            'The Hall of Balance lies beyond your grasp, its doors sealed to those unready to walk the path of true equilibrium. Within these sacred walls, the art of harmony awaits only the worthy—those who have learned to temper strength with patience, wisdom with humility. Reflect upon your journey, for only by mastering the balance within yourself will you gain entry to the mysteries that lie ahead.<br><br><em>Note: This is planned future content and does not exist yet.</em>'
        );        
        unlockAchievement('Lacking Balance');
    } else {
        const balanceHallOverlay = document.getElementById('balanceHallOverlay');
        balanceHallOverlay.style.display = 'flex';
    }
}

function closeBalanceHall() {
    const balanceHallOverlay = document.getElementById('balanceHallOverlay');
    balanceHallOverlay.style.display = 'none';
}
