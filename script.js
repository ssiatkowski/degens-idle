document.addEventListener('DOMContentLoaded', () => {
    let copium = 0;
    let copiumPerSecond = 0;
    let delusion = 0;
    let delusionPerSecond = 0;
    let yarmulkes = 0;
    let yarmulkesPerSecond = 0;
    let trollPoints = 0;
    let trollPointsPerSecond = 0;
    let holdInterval;
    let activeButton;

    const upgrades = [
        {
            name: "Wifes AirBnb Business",
            cost: { copium: 200, delusion: 400, yarmulkes: 1000, trollPoints: 0 },
            earnings: { copiumPerSecond: 5, delusionPerSecond: 8, yarmulkesPerSecond: -5, trollPointsPerSecond: 33 },
            img: "imgs/airbnb.jpg",
        },
        {
            name: "King of Delusion",
            cost: { copium: 0, delusion: 10000, yarmulkes: 2000, trollPoints: 0 },
            earnings: { copiumPerSecond: 10, delusionPerSecond: 100, yarmulkesPerSecond: 10, trollPointsPerSecond: 0 },
            img: "imgs/king_of_delusion.jpeg",
        },
        {
            name: "Power of the Pussy",
            cost: { copium: 0, delusion: 5, yarmulkes: 10, trollPoints: 10 },
            earnings: { copiumPerSecond: 1, delusionPerSecond: 0, yarmulkesPerSecond: 0, trollPointsPerSecond: 1 },
            img: "imgs/leo.jpg",
        },
        {
            name: "Captain Degen",
            cost: { copium: 1000, delusion: 1000, yarmulkes: 1000, trollPoints: 1000 },
            earnings: { copiumPerSecond: 10, delusionPerSecond: 10, yarmulkesPerSecond: 10, trollPointsPerSecond: 10 },
            img: "imgs/captain_degen.jpg",
        },
        {
            name: "Havent Smoked Foool",
            cost: { copium: 10, delusion: 0, yarmulkes: 0, trollPoints: 10 },
            earnings: { copiumPerSecond: 3, delusionPerSecond: 0, yarmulkesPerSecond: 0, trollPointsPerSecond: 2 },
            img: "imgs/ez_blunt.jpg",
        },
        {
            name: "Face of Defeat",
            cost: { copium: 10000, delusion: 0, yarmulkes: 666, trollPoints: 100 },
            earnings: { copiumPerSecond: 100, delusionPerSecond: 2, yarmulkesPerSecond: 0, trollPointsPerSecond: 0 },
            img: "imgs/face_of_defeat.jpg",
        },
        {
            name: "Is he alive?",
            cost: { copium: 10, delusion: 0, yarmulkes: 50, trollPoints: 35 },
            earnings: { copiumPerSecond: 2, delusionPerSecond: 0, yarmulkesPerSecond: 8, trollPointsPerSecond: 1 },
            img: "imgs/is_he_alive.jpg",
        },
        {
            name: "Group up!",
            cost: { copium: 10, delusion: 10, yarmulkes: 10, trollPoints: 10 },
            earnings: { copiumPerSecond: 2, delusionPerSecond: 2, yarmulkesPerSecond: 2, trollPointsPerSecond: 2 },
            img: "imgs/joker.jpg",
        },
        {
            name: "Kais wet dream",
            cost: { copium: 5000, delusion: 0, yarmulkes: 4000, trollPoints: 500 },
            earnings: { copiumPerSecond: 25, delusionPerSecond: 1, yarmulkesPerSecond: 0, trollPointsPerSecond: 1 },
            img: "imgs/kais_wet_dream.jpg",
        },
        {
            name: "Luigis Idol",
            cost: { copium: 1234, delusion: 0, yarmulkes: 7777, trollPoints: 7777 },
            earnings: { copiumPerSecond: 12, delusionPerSecond: 0, yarmulkesPerSecond: 50, trollPointsPerSecond: 50 },
            img: "imgs/luigis_idol.png.jpg",
        },
        {
            name: "Never Admit Mistakes",
            cost: { copium: 100, delusion: 100, yarmulkes: 0, trollPoints: 0 },
            earnings: { copiumPerSecond: 2, delusionPerSecond: 4, yarmulkesPerSecond: 0, trollPointsPerSecond: 3 },
            img: "imgs/marv.jpg",
        },
        {
            name: "Party Animals",
            cost: { copium: 50, delusion: 100, yarmulkes: 50, trollPoints: 0 },
            earnings: { copiumPerSecond: 2, delusionPerSecond: 3, yarmulkesPerSecond: 0, trollPointsPerSecond: 0 },
            img: "imgs/party_animals.jpg",
        },
        {
            name: "Standard Dropout",
            cost: { copium: 0, delusion: 30, yarmulkes: 30, trollPoints: 0 },
            earnings: { copiumPerSecond: 1, delusionPerSecond: 1, yarmulkesPerSecond: 1, trollPointsPerSecond: -2 },
            img: "imgs/standard_dropout.jpg",
        },
        {
            name: "The Perfect Girl",
            cost: { copium: 3000, delusion: 3000, yarmulkes: 3000, trollPoints: 0 },
            earnings: { copiumPerSecond: 10, delusionPerSecond: 25, yarmulkesPerSecond: -2, trollPointsPerSecond: 5 },
            img: "imgs/the_perfect_girl.jpg",
        },
        {
            name: "The Savior",
            cost: { copium: 0, delusion: 0, yarmulkes: 2500, trollPoints: 2500 },
            earnings: { copiumPerSecond: 10, delusionPerSecond: 10, yarmulkesPerSecond: -10, trollPointsPerSecond: 5 },
            img: "imgs/the_savior.jpg",
        },
        {
            name: "Unhackable",
            cost: { copium: 5000, delusion: 2000, yarmulkes: 1500, trollPoints: 0 },
            earnings: { copiumPerSecond: 50, delusionPerSecond: 30, yarmulkesPerSecond: -3, trollPointsPerSecond: -3 },
            img: "imgs/unhackable.jpg",
        },
        {
            name: "Yom Kippur",
            cost: { copium: 0, delusion: 0, yarmulkes: 999, trollPoints: 0 },
            earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yarmulkesPerSecond: 30, trollPointsPerSecond: 0 },
            img: "imgs/yom_kippur.jpg",
        },
        {
            name: "Kamala 2024",
            cost: { copium: 0, delusion: 400, yarmulkes: 0, trollPoints: 0 },
            earnings: { copiumPerSecond: 3, delusionPerSecond: 0, yarmulkesPerSecond: 10, trollPointsPerSecond: 0 },
            img: "imgs/kamala.jpg",
        },
        {
            name: "Email Safety First",
            cost: { copium: 1000, delusion: 0, yarmulkes: 0, trollPoints: 150 },
            earnings: { copiumPerSecond: 0, delusionPerSecond: 9, yarmulkesPerSecond: 0, trollPointsPerSecond: 0 },
            img: "imgs/proton.jpg",
        }
    ];

    document.getElementById('collectCopiumButton').addEventListener('click', () => { collectResource('copium'); });
    document.getElementById('collectDelusionButton').addEventListener('click', () => { collectResource('delusion'); });
    document.getElementById('collectYarmulkesButton').addEventListener('click', () => { collectResource('yarmulkes'); });
    document.getElementById('collectTrollPointsButton').addEventListener('click', () => { collectResource('trollPoints'); });

    document.getElementById('tradeButton').addEventListener('click', tradeResources);

    const startHold = (button, task, index) => {
        holdInterval = setInterval(() => {
            task.completed = true;
            task.lastCompleted = new Date().toISOString();
            saveTasks();
            renderTasks();
        }, 200); // 200 milliseconds for 5 clicks per second
        activeButton = button;
    };
    
    const stopHold = () => {
        clearInterval(holdInterval);
        activeButton = null;
    };

    document.addEventListener('DOMContentLoaded', () => {
        const taskNameInput = document.getElementById('taskName');
        const frequencySelect = document.getElementById('frequency');
        const highlightValueInput = document.getElementById('highlightValue');
        const highlightUnitSelect = document.getElementById('highlightUnit');
        const addTaskButton = document.getElementById('addTaskButton');
        const clearStorageButton = document.getElementById('clearStorageButton');
        const tasksContainer = document.getElementById('tasksContainer');
    
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
        const saveTasks = () => {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };
    
        const renderTasks = () => {
            tasksContainer.innerHTML = '';
            tasks.forEach((task, index) => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
    
                const now = new Date();
                const lastCompleted = new Date(task.lastCompleted);
                let timeDiff;
                if (task.highlightUnit === 'days') {
                    timeDiff = Math.floor((now - lastCompleted) / (1000 * 60 * 60 * 24)); 
                } else if (task.highlightUnit === 'seconds') {
                    timeDiff = Math.floor((now - lastCompleted) / 1000); 
                }
                let highlightClass = '';
    
                if (!task.completed) {
                    const interval = parseInt(task.highlightValue, 10);
                    if (timeDiff >= 1 && timeDiff <= interval) {
                        highlightClass = `task-highlight-${Math.min(timeDiff, 5)}`;
                    } else if (timeDiff > interval) {
                        highlightClass = 'task-highlight-5';
                    }
                }
    
                if (highlightClass) {
                    taskItem.classList.add(highlightClass);
                }
    
                taskItem.innerHTML = `
                    <input type="checkbox" id="task-${index}" ${task.completed ? 'checked' : ''}>
                    <label for="task-${index}">${task.name} (${task.frequency})</label>
                    <button class="remove-task" data-index="${index}">Remove</button>
                    <button class="collect-task" data-index="${index}">Collect</button>
                `;
    
                taskItem.querySelector('input').addEventListener('change', (e) => {
                    task.completed = e.target.checked;
                    task.lastCompleted = task.completed ? new Date().toISOString() : task.lastCompleted;
                    saveTasks();
                    renderTasks();
                });
    
                taskItem.querySelector('.remove-task').addEventListener('click', () => {
                    tasks.splice(index, 1);
                    saveTasks();
                    renderTasks();
                });
    
                const collectButton = taskItem.querySelector('.collect-task');
                collectButton.addEventListener('mousedown', () => startHold(collectButton, task, index));
                collectButton.addEventListener('mouseup', stopHold);
                collectButton.addEventListener('mouseleave', stopHold);
    
                tasksContainer.appendChild(taskItem);
            });
        };
    
        addTaskButton.addEventListener('click', () => {
            const taskName = taskNameInput ? taskNameInput.value.trim() : '';
            const frequency = frequencySelect ? frequencySelect.value : '';
            const highlightValue = highlightValueInput ? highlightValueInput.value.trim() : '';
            const highlightUnit = highlightUnitSelect ? highlightUnitSelect.value : '';
            if (taskName && highlightValue) {
                tasks.push({
                    name: taskName,
                    frequency,
                    highlightValue,
                    highlightUnit,
                    completed: false,
                    lastCompleted: new Date().toISOString(),
                    lastReset: new Date().toISOString()
                });
                if (taskNameInput) taskNameInput.value = '';
                if (highlightValueInput) highlightValueInput.value = '';
                saveTasks();
                renderTasks();
            } else {
                console.error('Task name or highlight value is missing');
            }
        });
    
        clearStorageButton.addEventListener('click', () => {
            localStorage.clear();
            tasks = [];
            renderTasks();
        });
    
        const resetTasks = () => {
            const now = new Date();
            const nextReset = new Date();
            nextReset.setHours(4, 0, 0, 0); 
    
            if (now > nextReset) {
                nextReset.setDate(nextReset.getDate() + 1); 
            }
    
            const timeToReset = nextReset - now;
            setTimeout(() => {
                tasks.forEach(task => {
                    if (task.frequency === 'daily') {
                        task.completed = false;
                    } else if (task.frequency === 'weekly') {
                        const lastCompleted = new Date(task.lastCompleted);
                        if (now - lastCompleted >= 6 * 24 * 60 * 60 * 1000) { 
                            task.completed = false;
                        }
                    }
                });
                saveTasks();
                renderTasks();
                resetTasks(); 
            }, timeToReset);
    
            setInterval(() => {
                const now = new Date();
                tasks.forEach(task => {
                    if (task.frequency === 'every10seconds') {
                        const lastReset = new Date(task.lastReset);
                        if ((now - lastReset) >= 10 * 1000) { 
                            task.completed = false;
                            task.lastReset = new Date().toISOString();
                        }
                    }
                });
                saveTasks();
                renderTasks();
            }, 1000); 
        };
    
        renderTasks();
        resetTasks(); 
    });

    function collectResource(resource) {
        if (resource === 'copium') copium += 1;
        if (resource === 'delusion') delusion += 1;
        if (resource === 'yarmulkes') yarmulkes += 1;
        if (resource === 'trollPoints') trollPoints += 1;
        updateDisplay();
    }

    function tradeResources() {
        const fromResource = document.getElementById('fromResource').value;
        const toResource = document.getElementById('toResource').value;
        const tradeAmount = parseInt(document.getElementById('tradeAmount').value);
    
        if (fromResource === toResource) {
            alert("Cannot trade the same resource.");
            return;
        }
    
        const resourceAmount = {
            copium: copium,
            delusion: delusion,
            yarmulkes: yarmulkes,
            trollPoints: trollPoints
        };
    
        if (resourceAmount[fromResource] < tradeAmount) {
            alert(`Not enough ${fromResource} to trade.`);
            return;
        }
    
        resourceAmount[fromResource] -= tradeAmount;
        resourceAmount[toResource] += tradeAmount / 5;
    
        copium = resourceAmount.copium;
        delusion = resourceAmount.delusion;
        yarmulkes = resourceAmount.yarmulkes;
        trollPoints = resourceAmount.trollPoints;
    
        updateDisplay();
    }
    


    function updateDisplay() {
        document.getElementById('copium').textContent = copium;
        document.getElementById('cps').textContent = copiumPerSecond;
        document.getElementById('delusion').textContent = delusion;
        document.getElementById('dps').textContent = delusionPerSecond;
        document.getElementById('yarmulkes').textContent = yarmulkes;
        document.getElementById('yps').textContent = yarmulkesPerSecond;
        document.getElementById('trollPoints').textContent = trollPoints;
        document.getElementById('tpps').textContent = trollPointsPerSecond;
        updateUpgradeButtons();
    }
    


    function generateResources() {
        copium += copiumPerSecond;
        delusion += delusionPerSecond;
        yarmulkes += yarmulkesPerSecond;
        trollPoints += trollPointsPerSecond;
        updateDisplay();
    }

    function buyUpgrade(upgradeName) {
        const upgrade = upgrades.find(up => up.name === upgradeName);
        const { cost, earnings, img, name } = upgrade;
        if (copium >= cost.copium && delusion >= cost.delusion && yarmulkes >= cost.yarmulkes && trollPoints >= cost.trollPoints) {
            copium -= cost.copium;
            delusion -= cost.delusion;
            yarmulkes -= cost.yarmulkes;
            trollPoints -= cost.trollPoints;
            copiumPerSecond += earnings.copiumPerSecond || 0;
            delusionPerSecond += earnings.delusionPerSecond || 0;
            yarmulkesPerSecond += earnings.yarmulkesPerSecond || 0;
            trollPointsPerSecond += earnings.trollPointsPerSecond || 0;
            addPurchasedUpgrade(img, name, earnings);
            upgrades.splice(upgrades.indexOf(upgrade), 1); // Remove the purchased upgrade
            updateUpgradeList();
            updateDisplay();
        }
    }
    
    

    function addPurchasedUpgrade(img, name, earnings) {
        const purchasedList = document.getElementById('purchasedList');
        const upgradeElement = document.createElement('div');
        upgradeElement.classList.add('purchased-upgrade');
        upgradeElement.innerHTML = `
            <img src="${img}" alt="${name}">
            <div>
                <p>${name}</p>
                <div class="upgrade-earnings">
                    <p>+${earnings.copiumPerSecond || 0} CPS</p>
                    <p>+${earnings.delusionPerSecond || 0} DPS</p>
                    <p>+${earnings.yarmulkesPerSecond || 0} YPS</p>
                    <p>+${earnings.trollPointsPerSecond || 0} TPS</p>
                </div>
            </div>
        `;
        purchasedList.appendChild(upgradeElement);
    }
    
    

    function updateUpgradeList() {
        const upgradeList = document.getElementById('upgradeList');
        upgradeList.innerHTML = ''; // Clear current list
    
        const sortedUpgrades = upgrades.sort((a, b) => {
            const totalCostA = Object.values(a.cost).reduce((sum, value) => sum + value, 0);
            const totalCostB = Object.values(b.cost).reduce((sum, value) => sum + value, 0);
            return totalCostA - totalCostB;
        });
    
        sortedUpgrades.slice(0, 5).forEach(upgrade => {
            const upgradeElement = document.createElement('div');
            upgradeElement.classList.add('upgrade');
            upgradeElement.innerHTML = `
                <button onclick="buyUpgrade('${upgrade.name.replace(/'/g, "\\'")}')">${upgrade.name}</button>
                <div class="upgrade-cost">
                    <p>Cost:</p>
                    <p>Copium: ${upgrade.cost.copium}</p>
                    <p>Delusion: ${upgrade.cost.delusion}</p>
                    <p>Yarmulkes: ${upgrade.cost.yarmulkes}</p>
                    <p>Troll Points: ${upgrade.cost.trollPoints}</p>
                </div>
            `;
            upgradeList.appendChild(upgradeElement);
        });
    
        updateUpgradeButtons();
    }
    
    
    function updateUpgradeButtons() {
        upgrades.forEach(upgrade => {
            const button = document.querySelector(`button[onclick="buyUpgrade('${upgrade.name.replace(/'/g, "\\'")}')"]`);
            if (button) {
                const { cost } = upgrade;
                if (copium >= cost.copium && delusion >= cost.delusion && yarmulkes >= cost.yarmulkes && trollPoints >= cost.trollPoints) {
                    button.classList.add('affordable');
                } else {
                    button.classList.remove('affordable');
                }
            }
        });
    }
    
    

    // Make the buyUpgrade function globally accessible
    window.buyUpgrade = buyUpgrade;

    setInterval(generateResources, 1000);
    updateDisplay();
    updateUpgradeList();
});