document.addEventListener('DOMContentLoaded', () => {
    let copium = 0;
    let copiumPerSecond = 0;
    let delusion = 0;
    let delusionPerSecond = 0;
    let yarmulkes = 0;
    let yarmulkesPerSecond = 0;
    let trollPoints = 0;
    let trollPointsPerSecond = 0;

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
            name: "Its group time!",
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
            img: "imgs/luigis_idol.png",
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
        },
        {
            name: "Transcendence",
            cost: { copium: 99999, delusion: 99999, yarmulkes: 99999, trollPoints: 99999 },
            earnings: { copiumPerSecond: 500, delusionPerSecond: 500, yarmulkesPerSecond: 500, trollPointsPerSecond: 500 },
            img: "imgs/sex_change.jpg",
        },
        {
            name: "Sex Change",
            cost: { copium: 50000, delusion: 50000, yarmulkes: 0, trollPoints: 0 },
            earnings: { copiumPerSecond: 250, delusionPerSecond: 250, yarmulkesPerSecond: 0, trollPointsPerSecond: -100 },
            img: "imgs/transcendence.jpg",
        },
        {
            name: "Pudge",
            cost: { copium: 1000000, delusion: 0, yarmulkes: 0, trollPoints: 1000000 },
            earnings: { copiumPerSecond: 25, delusionPerSecond: 0, yarmulkesPerSecond: 100, trollPointsPerSecond: 100 },
            img: "imgs/pudge.jpg",
        },
        {
            name: "Rewriting History",
            cost: { copium: 5000000, delusion: 0, yarmulkes: 0, trollPoints: 0 },
            earnings: { copiumPerSecond: 25, delusionPerSecond: 0, yarmulkesPerSecond: 1000, trollPointsPerSecond: 0 },
            img: "imgs/rewriting_history.jpg",
        },
        {
            name: "WE MADE IT!",
            cost: { copium: 1000000, delusion: 1000000, yarmulkes: 1000000, trollPoints: 1000000 },
            earnings: { copiumPerSecond: 5, delusionPerSecond: 5, yarmulkesPerSecond: 5, trollPointsPerSecond: 99 },
            img: "imgs/titanic.jpg",
        },
        {
            name: "Deal with the devil",
            cost: { copium: 0, delusion: 0, yarmulkes: 10000, trollPoints: 0 },
            earnings: { copiumPerSecond: -1, delusionPerSecond: 2, yarmulkesPerSecond: 2, trollPointsPerSecond: 1 },
            img: "imgs/warren_buffet.jpg",
        },
        {
            name: "Hes an Ancient",
            cost: { copium: 2000, delusion: 0, yarmulkes: 1000, trollPoints: 2000 },
            earnings: { copiumPerSecond: 5, delusionPerSecond: 0, yarmulkesPerSecond: 27, trollPointsPerSecond: 5 },
            img: "imgs/farming_sim.jpg",
        },
        {
            name: "Suss",
            cost: { copium: 12000, delusion: 0, yarmulkes: 0, trollPoints: 0 },
            earnings: { copiumPerSecond: 25, delusionPerSecond: 0, yarmulkesPerSecond: 0, trollPointsPerSecond: 50 },
            img: "imgs/morty.PNG",
        },
        {
            name: "Swing and a Miss",
            cost: { copium: 2400, delusion: 1600, yarmulkes: 0, trollPoints: 0 },
            earnings: { copiumPerSecond: 24, delusionPerSecond: 16, yarmulkesPerSecond: 0, trollPointsPerSecond: 3 },
            img: "imgs/swing_and_a_miss.jpg",
        },
        {
            name: "I dont get this game",
            cost: { copium: 5000, delusion: 5000, yarmulkes: 5000, trollPoints: 5000 },
            earnings: { copiumPerSecond: -10, delusionPerSecond: 40, yarmulkesPerSecond: 20, trollPointsPerSecond: 30 },
            img: "imgs/standard.jpg",
        },
        {
            name: "Im gonna come",
            cost: { copium: 75000, delusion: 75000, yarmulkes: 0, trollPoints: 50000 },
            earnings: { copiumPerSecond: -100, delusionPerSecond: 0, yarmulkesPerSecond: -200, trollPointsPerSecond: 500 },
            img: "imgs/do_not_come.jpg",
        },
        {
            name: "Do not come!",
            cost: { copium: 200000, delusion: 0, yarmulkes: 0, trollPoints: 0 },
            earnings: { copiumPerSecond: 0, delusionPerSecond: 100, yarmulkesPerSecond: 300, trollPointsPerSecond: 100 },
            img: "imgs/im_gonna_come.jpg",
        },
        {
            name: "Jokers Rage Level",
            cost: { copium: 500, delusion: 0, yarmulkes: 250, trollPoints: 500 },
            earnings: { copiumPerSecond: 2, delusionPerSecond: -25, yarmulkesPerSecond: 10, trollPointsPerSecond: 30 },
            img: "imgs/over_9000.jpg",
        },
        {
            name: "Spit on that thang",
            cost: { copium: 100000, delusion: 0, yarmulkes: 25000, trollPoints: 50000 },
            earnings: { copiumPerSecond: 75, delusionPerSecond: 0, yarmulkesPerSecond: 25, trollPointsPerSecond: 25 },
            img: "imgs/hawk_tuah.jpg",
        }
    ];

    document.getElementById('collectCopiumButton').addEventListener('click', () => { collectResource('copium'); });
    document.getElementById('collectDelusionButton').addEventListener('click', () => { collectResource('delusion'); });
    document.getElementById('collectYarmulkesButton').addEventListener('click', () => { collectResource('yarmulkes'); });
    document.getElementById('collectTrollPointsButton').addEventListener('click', () => { collectResource('trollPoints'); });

    document.getElementById('tradeButton').addEventListener('click', tradeResources);

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
    
        // Check if each individual resource is sufficient to cover its respective cost if the cost is greater than zero
        if ((cost.copium === 0 || copium >= cost.copium) &&
            (cost.delusion === 0 || delusion >= cost.delusion) &&
            (cost.yarmulkes === 0 || yarmulkes >= cost.yarmulkes) &&
            (cost.trollPoints === 0 || trollPoints >= cost.trollPoints)) {
    
            // Deduct the cost from the resources
            copium -= cost.copium;
            delusion -= cost.delusion;
            yarmulkes -= cost.yarmulkes;
            trollPoints -= cost.trollPoints;
    
            // Increase the earnings
            copiumPerSecond += earnings.copiumPerSecond || 0;
            delusionPerSecond += earnings.delusionPerSecond || 0;
            yarmulkesPerSecond += earnings.yarmulkesPerSecond || 0;
            trollPointsPerSecond += earnings.trollPointsPerSecond || 0;
    
            addPurchasedUpgrade(img, name, earnings);
            upgrades.splice(upgrades.indexOf(upgrade), 1); // Remove the purchased upgrade
            updateUpgradeList();
            updateDisplay();
        } else {
            alert('Not enough resources to purchase this upgrade.');
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
                // Check if each individual resource is sufficient to cover its respective cost if the cost is greater than zero
                if ((cost.copium === 0 || copium >= cost.copium) &&
                    (cost.delusion === 0 || delusion >= cost.delusion) &&
                    (cost.yarmulkes === 0 || yarmulkes >= cost.yarmulkes) &&
                    (cost.trollPoints === 0 || trollPoints >= cost.trollPoints)) {
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