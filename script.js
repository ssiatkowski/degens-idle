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
            earnings: { copiumPerSecond: 5, delusionPerSecond: 8, yarmulkesPerSecond: -5, trollPointsPerSecond: 2 },
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
            earnings: { copiumPerSecond: 3, delusionPerSecond: 0, yarmulkesPerSecond: 0, trollPointsPerSecond: 1 },
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
            earnings: { copiumPerSecond: 2, delusionPerSecond: 0, yarmulkesPerSecond: 7, trollPointsPerSecond: 1 },
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
            earnings: { copiumPerSecond: 2, delusionPerSecond: 2, yarmulkesPerSecond: 0, trollPointsPerSecond: 3 },
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
            earnings: { copiumPerSecond: 25, delusionPerSecond: 25, yarmulkesPerSecond: -2, trollPointsPerSecond: 5 },
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
            earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yarmulkesPerSecond: 25, trollPointsPerSecond: 0 },
            img: "imgs/yom_kippur.jpg.jpg",
        }
    ];

    document.getElementById('collectCopiumButton').addEventListener('click', () => { collectResource('copium'); });
    document.getElementById('collectDelusionButton').addEventListener('click', () => { collectResource('delusion'); });
    document.getElementById('collectYarmulkesButton').addEventListener('click', () => { collectResource('yarmulkes'); });
    document.getElementById('collectTrollPointsButton').addEventListener('click', () => { collectResource('trollPoints'); });

    function collectResource(resource) {
        if (resource === 'copium') copium += 1;
        if (resource === 'delusion') delusion += 1;
        if (resource === 'yarmulkes') yarmulkes += 1;
        if (resource === 'trollPoints') trollPoints += 1;
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
                <p>+${earnings.copiumPerSecond || 0} CPS, +${earnings.delusionPerSecond || 0} DPS, +${earnings.yarmulkesPerSecond || 0} YPS, +${earnings.trollPointsPerSecond || 0} TPS</p>
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
                <button onclick="buyUpgrade('${upgrade.name.replace(/'/g, "\\'")}')">${upgrade.name} (Cost: ${upgrade.cost.copium} copium, ${upgrade.cost.delusion} delusion, ${upgrade.cost.yarmulkes} yarmulkes, ${upgrade.cost.trollPoints} troll points)</button>
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
