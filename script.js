

document.addEventListener('DOMContentLoaded', () => {
    let copium = 0;
    let copiumPerSecond = 0;
    let delusion = 0;
    let delusionPerSecond = 0;
    let yarmulkes = 0;
    let yarmulkesPerSecond = 0;
    let trollPoints = 0;
    let trollPointsPerSecond = 0;
    let cooldowns = {
        copium: false,
        delusion: false,
        yarmulkes: false,
        trollPoints: false
    };

    let prestiges = 0;
    let epsMultiplier = 1;
    let prestigeRequirement = 1000;
    let purchasedUpgrades = [];


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
            earnings: { copiumPerSecond: 100, delusionPerSecond: 2, yarmulkesPerSecond: 0, trollPointsPerSecond: -2 },
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
            earnings: { copiumPerSecond: 12, delusionPerSecond: 0, yarmulkesPerSecond: 40, trollPointsPerSecond: 50 },
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
            earnings: { copiumPerSecond: 0, delusionPerSecond: 30, yarmulkesPerSecond: -5, trollPointsPerSecond: 0 },
            img: "imgs/the_perfect_girl.jpg",
        },
        {
            name: "The Savior",
            cost: { copium: 0, delusion: 0, yarmulkes: 2500, trollPoints: 2500 },
            earnings: { copiumPerSecond: 10, delusionPerSecond: 10, yarmulkesPerSecond: -10, trollPointsPerSecond: 3 },
            img: "imgs/the_savior.jpg",
        },
        {
            name: "Unhackable",
            cost: { copium: 5000, delusion: 2000, yarmulkes: 1500, trollPoints: 0 },
            earnings: { copiumPerSecond: 45, delusionPerSecond: 30, yarmulkesPerSecond: -3, trollPointsPerSecond: -3 },
            img: "imgs/unhackable.jpg",
        },
        {
            name: "Yom Kippur",
            cost: { copium: 0, delusion: 0, yarmulkes: 999, trollPoints: 0 },
            earnings: { copiumPerSecond: 0, delusionPerSecond: 0, yarmulkesPerSecond: 28, trollPointsPerSecond: 0 },
            img: "imgs/yom_kippur.jpg",
        },
        {
            name: "Kamala 2024",
            cost: { copium: 0, delusion: 400, yarmulkes: 0, trollPoints: 0 },
            earnings: { copiumPerSecond: 3, delusionPerSecond: 0, yarmulkesPerSecond: 9, trollPointsPerSecond: 0 },
            img: "imgs/kamala.jpg",
        },
        {
            name: "Email Safety First",
            cost: { copium: 1000, delusion: 0, yarmulkes: 0, trollPoints: 150 },
            earnings: { copiumPerSecond: 0, delusionPerSecond: 9, yarmulkesPerSecond: -1, trollPointsPerSecond: 0 },
            img: "imgs/proton.jpg",
        },
        {
            name: "Transcendence",
            cost: { copium: 99999, delusion: 99999, yarmulkes: 99999, trollPoints: 99999 },
            earnings: { copiumPerSecond: 500, delusionPerSecond: 500, yarmulkesPerSecond: 500, trollPointsPerSecond: 500 },
            img: "imgs/transcendence.jpg",
            message: "You feel permanently stronger!",
            miniPrestigeMultiplier: 1.01
        },
        {
            name: "Sex Change",
            cost: { copium: 50000, delusion: 50000, yarmulkes: 0, trollPoints: 0 },
            earnings: { copiumPerSecond: 250, delusionPerSecond: 250, yarmulkesPerSecond: -50, trollPointsPerSecond: -100 },
            img: "imgs/sex_change.jpg",
        },
        {
            name: "Pudge",
            cost: { copium: 1000000, delusion: 0, yarmulkes: 0, trollPoints: 1000000 },
            earnings: { copiumPerSecond: 25, delusionPerSecond: 0, yarmulkesPerSecond: 400, trollPointsPerSecond: 100 },
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
            earnings: { copiumPerSecond: 99, delusionPerSecond: 5, yarmulkesPerSecond: 5, trollPointsPerSecond: 99 },
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
            earnings: { copiumPerSecond: -100, delusionPerSecond: 0, yarmulkesPerSecond: -225, trollPointsPerSecond: 500 },
            img: "imgs/do_not_come.jpg",
        },
        {
            name: "Do not come!",
            cost: { copium: 300000, delusion: 0, yarmulkes: 0, trollPoints: 0 },
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
        },
        {
            name: "Hard Work Dont Mean Success",
            cost: { copium: 2000, delusion: 0, yarmulkes: 1400, trollPoints: 0 },
            earnings: { copiumPerSecond: 10, delusionPerSecond: -5, yarmulkesPerSecond: 1, trollPointsPerSecond: 0 },
            img: "imgs/hard_to_swallow.jpg",
        },
        {
            name: "Job Application",
            cost: { copium: 3000, delusion: 55000, yarmulkes: 0, trollPoints: 69000 },
            earnings: { copiumPerSecond: 300, delusionPerSecond: 0, yarmulkesPerSecond: 0, trollPointsPerSecond: 0 },
            img: "imgs/job_application.jpg",
        },
        {
            name: "Music",
            cost: { copium: 100, delusion: 25, yarmulkes: 150, trollPoints: 25 },
            earnings: { copiumPerSecond: 10, delusionPerSecond: -1, yarmulkesPerSecond: 0, trollPointsPerSecond: 0 },
            img: "imgs/linkin_park.jpg",
        },
        {
            name: "Ultimate Solution",
            cost: { copium: 0, delusion: 25000, yarmulkes: 0, trollPoints: 80000 },
            earnings: { copiumPerSecond: 100, delusionPerSecond: 100, yarmulkesPerSecond: 0, trollPointsPerSecond: 0 },
            img: "imgs/use_useless.jpg",
        }
    ];

    document.getElementById('collectCopiumButton').addEventListener('click', () => { collectResource('copium'); });
    document.getElementById('collectDelusionButton').addEventListener('click', () => { collectResource('delusion'); });
    document.getElementById('collectYarmulkesButton').addEventListener('click', () => { collectResource('yarmulkes'); });
    document.getElementById('collectTrollPointsButton').addEventListener('click', () => { collectResource('trollPoints'); });

    document.getElementById('playCopiumGame').addEventListener('click', () => { playMiniGame('copium'); });
    document.getElementById('playDelusionGame').addEventListener('click', () => { playMiniGame('delusion'); });
    document.getElementById('playYarmulkesGame').addEventListener('click', () => { playMiniGame('yarmulkes'); });
    document.getElementById('playTrollPointsGame').addEventListener('click', () => { playMiniGame('trollPoints'); });

    document.getElementById('playCopiumGame').classList.add('affordable');
    document.getElementById('playDelusionGame').classList.add('affordable');
    document.getElementById('playYarmulkesGame').classList.add('affordable');
    document.getElementById('playTrollPointsGame').classList.add('affordable');

    document.getElementById('tradeButton').addEventListener('click', () => {
        tradeResources();
        saveGameState();
    });

    // Restart Game button event listener
    document.getElementById('restartButton').addEventListener('click', restartGame);

    // Modified functions to include saveGameState
    function collectResource(resource) {
        if (resource === 'copium') copium += epsMultiplier;
        if (resource === 'delusion') delusion += epsMultiplier;
        if (resource === 'yarmulkes') yarmulkes += epsMultiplier;
        if (resource === 'trollPoints') trollPoints += epsMultiplier;
        updateDisplay();
        saveGameState();
    }
    
    function loadGameState() {
        copium = parseFloat(localStorage.getItem('copium')) || 0;
        copiumPerSecond = parseFloat(localStorage.getItem('copiumPerSecond')) || 0;
        delusion = parseFloat(localStorage.getItem('delusion')) || 0;
        delusionPerSecond = parseFloat(localStorage.getItem('delusionPerSecond')) || 0;
        yarmulkes = parseFloat(localStorage.getItem('yarmulkes')) || 0;
        yarmulkesPerSecond = parseFloat(localStorage.getItem('yarmulkesPerSecond')) || 0;
        trollPoints = parseFloat(localStorage.getItem('trollPoints')) || 0;
        trollPointsPerSecond = parseFloat(localStorage.getItem('trollPointsPerSecond')) || 0;
        prestiges = parseInt(localStorage.getItem('prestiges')) || 0;
        epsMultiplier = parseFloat(localStorage.getItem('epsMultiplier')) || 1;
        prestigeRequirement = parseFloat(localStorage.getItem('prestigeRequirement')) || 1000;
        const lastInteraction = parseInt(localStorage.getItem('lastInteraction')) || Date.now();
    
        // Load purchased upgrades
        const savedPurchasedUpgrades = JSON.parse(localStorage.getItem('purchasedUpgrades')) || [];
        savedPurchasedUpgrades.forEach(upgradeName => {
            const upgrade = upgrades.find(up => up.name === upgradeName);
            if (upgrade) {
                purchasedUpgrades.push(upgrade);
                upgrades.splice(upgrades.indexOf(upgrade), 1); // Remove from available upgrades
                addPurchasedUpgrade(upgrade.img, upgrade.name, upgrade.earnings); // Add to purchased upgrades list
            }
        });
    
        // Calculate idle earnings
        const now = Date.now();
        const elapsedSeconds = (now - lastInteraction) / 1000;
        generateIdleResources(elapsedSeconds);
    
        updateDisplay();
        updateUpgradeList();
    }
    

    // Save game state to localStorage
    function saveGameState() {
        localStorage.setItem('copium', copium);
        localStorage.setItem('copiumPerSecond', copiumPerSecond);
        localStorage.setItem('delusion', delusion);
        localStorage.setItem('delusionPerSecond', delusionPerSecond);
        localStorage.setItem('yarmulkes', yarmulkes);
        localStorage.setItem('yarmulkesPerSecond', yarmulkesPerSecond);
        localStorage.setItem('trollPoints', trollPoints);
        localStorage.setItem('trollPointsPerSecond', trollPointsPerSecond);
        localStorage.setItem('prestiges', prestiges);
        localStorage.setItem('epsMultiplier', epsMultiplier);
        localStorage.setItem('prestigeRequirement', prestigeRequirement);
        localStorage.setItem('lastInteraction', Date.now());
        localStorage.setItem('purchasedUpgrades', JSON.stringify(purchasedUpgrades.map(upgrade => upgrade.name)));

    }

    // Generate resources based on elapsed time
    function generateIdleResources(elapsedSeconds) {
        copium += copiumPerSecond * epsMultiplier * elapsedSeconds;
        delusion += delusionPerSecond * epsMultiplier * elapsedSeconds;
        yarmulkes += yarmulkesPerSecond * epsMultiplier * elapsedSeconds;
        trollPoints += trollPointsPerSecond * epsMultiplier * elapsedSeconds;
    }

    function playMiniGame(resource) {
        if (cooldowns[resource]) return;
    
        const button = document.getElementById(`play${capitalize(resource)}Game`);
        button.disabled = true; // Disable button at the start of the game
        button.classList.remove('affordable'); // Remove the green class
    
        if (resource === 'copium') {
            // Copium point and click game
            let points = 0;
            let duration = Math.floor(Math.random() * 10) + 1; // Random duration between 1 and 10 seconds
            alert(`Tap on the screen as many times as you can in ${duration} seconds!`);
    
            function clickHandler() {
                points++;
            }
    
            document.addEventListener('click', clickHandler);
            document.addEventListener('touchstart', clickHandler); // Add touch event listener
    
            setTimeout(() => {
                document.removeEventListener('click', clickHandler);
                document.removeEventListener('touchstart', clickHandler); // Remove touch event listener
                let clicksPerSecond = points / duration;
                let reward;
                if (clicksPerSecond > 3) { // More than 3 clicks per second
                    reward = Math.floor(copium * ((clicksPerSecond - 3) * 0.02));
                    alert(`You tapped ${points} times in ${duration} seconds (${clicksPerSecond.toFixed(2)} taps per second). You won and earned ${reward} copium!`);
                } else {
                    reward = -Math.max(Math.floor(Math.random() * Math.abs(copium) * 0.1), 10);
                    alert(`You tapped ${points} times in ${duration} seconds (${clicksPerSecond.toFixed(2)} taps per second). You lost and earned ${reward} copium!`);
                }
                copium += reward;
                updateDisplay();
                startCooldown(resource); // Start cooldown
            }, duration * 1000);
        } else if (resource === 'delusion') {
            // Delusion memory game
            let sequenceLength = Math.floor(Math.random() * 6) + 3; // Random length between 3 and 8
            let sequence = '';
            for (let i = 0; i < sequenceLength; i++) {
                sequence += Math.floor(Math.random() * 10); // Random digit between 0 and 9
            }
            let timeout = Math.floor(Math.random() * 58) + 3; // Random timeout between 3 and 60 seconds
            alert('Remember this sequence: ' + sequence);
            setTimeout(() => {
                let userSequence = prompt('Enter the sequence:');
                let correct = userSequence === sequence;
                let reward = correct ? Math.max(Math.floor(delusion * 0.2), 10) : -Math.max(Math.floor(Math.random() * Math.abs(delusion) * 0.1), 10);
                if (delusion < 0 && !correct) reward += 10;
                delusion += reward;
                alert(`You ${correct ? 'won' : 'lost'} and earned ${reward} delusion!`);
                updateDisplay();
                startCooldown(resource); // Start cooldown
            }, timeout * 1000);
        } else if (resource === 'yarmulkes') {
            // Yarmulkes quick math game
            let num1 = Math.floor(Math.random() * 100) + 1;
            let num2 = Math.floor(Math.random() * 100) + 1;
            let num3 = Math.floor(Math.random() * 10) + 1;
            let operations = ['+', '-', '*', '/'];
            let op1 = operations[Math.floor(Math.random() * operations.length)];
            let op2 = operations[Math.floor(Math.random() * operations.length)];
            
            let question = `${num1} ${op1} ${num2} ${op2} ${num3}`;
            let correctAnswer = eval(question.replace('/', '* 1.0 /')); // Ensure floating point division
            
            let answer = prompt(`What is ${question}?`);
            let reward = Math.abs(Number(answer) - correctAnswer) < 0.01 ? Math.max(Math.floor(yarmulkes * 0.2), 10) : -Math.max(Math.floor(Math.random() * Math.abs(yarmulkes) * 0.1), 10);
            if (yarmulkes < 0 && Math.abs(Number(answer) - correctAnswer) >= 0.01) reward += 10;
            yarmulkes += reward;
            alert(`You ${Math.abs(Number(answer) - correctAnswer) < 0.01 ? 'won' : 'lost'} and earned ${reward} yarmulkes!`);
            updateDisplay();
            startCooldown(resource); // Start cooldown
        } else if (resource === 'trollPoints') {
            // Troll Points random gain/loss
            let reward = Math.floor(Math.random() * (trollPoints * 2 + 1)) - trollPoints;
            trollPoints += reward;
            alert(`You earned ${reward} troll points!`);
            updateDisplay();
            startCooldown(resource); // Start cooldown
        }
    }
    
    function startCooldown(resource) {
        const button = document.getElementById(`play${capitalize(resource)}Game`);
        cooldowns[resource] = true;
        button.classList.remove('affordable');
        
        setTimeout(() => {
            cooldowns[resource] = false;
            button.disabled = false;
            button.classList.add('affordable');
        }, 180000); // 3 minute cooldown
    }
    
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    
    function restartGame() {
        const confirmRestart = confirm('Are you sure you want to restart the game? This will reset all progress.');
        if (confirmRestart) {
            // Reset all game variables
            copium = 0;
            copiumPerSecond = 0;
            delusion = 0;
            delusionPerSecond = 0;
            yarmulkes = 0;
            yarmulkesPerSecond = 0;
            trollPoints = 0;
            trollPointsPerSecond = 0;
            prestiges = 0;
            epsMultiplier = 1;
            prestigeRequirement = 1000;
            purchasedUpgrades = [];
    
            // Clear localStorage
            localStorage.clear();
    
            // Update display and upgrade list
            updateDisplay();
            updateUpgradeList();
            document.getElementById('purchasedList').innerHTML = ''; // Clear the purchased upgrades list
    
            alert('Game has been restarted.');
        }
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
        document.getElementById('copium').textContent = copium.toFixed(2);
        document.getElementById('cps').textContent = (copiumPerSecond * epsMultiplier).toFixed(2);
        document.getElementById('delusion').textContent = delusion.toFixed(2);
        document.getElementById('dps').textContent = (delusionPerSecond * epsMultiplier).toFixed(2);
        document.getElementById('yarmulkes').textContent = yarmulkes.toFixed(2);
        document.getElementById('yps').textContent = (yarmulkesPerSecond * epsMultiplier).toFixed(2);
        document.getElementById('trollPoints').textContent = trollPoints.toFixed(2);
        document.getElementById('tpps').textContent = (trollPointsPerSecond * epsMultiplier).toFixed(2);
        document.getElementById('prestiges').textContent = prestiges;
        document.getElementById('multiplier').textContent = `(x${epsMultiplier.toFixed(2)} multiplier on everything)`;
    
        // Update the prestige count style
        const prestigeElement = document.getElementById('prestiges');
        const prestigeText = document.querySelector('.prestige-text');
        prestigeElement.className = 'prestige-count';
        prestigeText.className = 'prestige-text';
        if (prestiges > 0) {
            const level = Math.min(prestiges, 5); // Adjust max level as needed
            prestigeElement.classList.add(`prestige-level-${level}`);
            prestigeText.classList.add(`prestige-level-${level}`);
        }
    
        // Show prestige button if eligible
        if (copium > prestigeRequirement && delusion > prestigeRequirement && yarmulkes > prestigeRequirement && trollPoints > prestigeRequirement) {
            document.getElementById('prestigeButton').style.display = 'block';
        } else {
            document.getElementById('prestigeButton').style.display = 'none';
        }
    
        updateUpgradeButtons();
    }
    
    function prestige() {
        prestiges++;
        epsMultiplier *= 1.5;
        prestigeRequirement *= 10; // Increase the requirement by 10x for the next prestige
    
        // Reset resources and earnings per second
        copium = 0;
        delusion = 0;
        yarmulkes = 0;
        trollPoints = 0;
        copiumPerSecond = 0;
        delusionPerSecond = 0;
        yarmulkesPerSecond = 0;
        trollPointsPerSecond = 0;
    
        // Move purchased upgrades back to available upgrades
        purchasedUpgrades.forEach(upgrade => {
            upgrades.push(upgrade);
        });
        purchasedUpgrades = [];
        document.getElementById('purchasedList').innerHTML = ''; // Clear the purchased upgrades list
    
        updateDisplay();
        updateUpgradeButtons();
        updateUpgradeList();
        alert(`Prestige activated! Current EPS multiplier: x${epsMultiplier.toFixed(2)}. Next prestige requirement: ${prestigeRequirement}`);
        saveGameState();
    }
    
    
    
    
    function generateResources() {
        copium += copiumPerSecond * epsMultiplier;
        delusion += delusionPerSecond * epsMultiplier;
        yarmulkes += yarmulkesPerSecond * epsMultiplier;
        trollPoints += trollPointsPerSecond * epsMultiplier;
        updateDisplay();
        saveGameState();
    }
    

    function buyUpgrade(upgradeName) {
        const upgrade = upgrades.find(up => up.name === upgradeName);
        const { cost, earnings, img, name, message, miniPrestigeMultiplier } = upgrade;
    
        if ((cost.copium === 0 || copium >= cost.copium) &&
            (cost.delusion === 0 || delusion >= cost.delusion) &&
            (cost.yarmulkes === 0 || yarmulkes >= cost.yarmulkes) &&
            (cost.trollPoints === 0 || trollPoints >= cost.trollPoints)) {
    
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
            purchasedUpgrades.push(upgrade); // Track purchased upgrade
            updateUpgradeList();
            updateDisplay();
            saveGameState();
    
            if (message) {
                alert(message);
            }
    
            if (miniPrestigeMultiplier) {
                epsMultiplier *= miniPrestigeMultiplier;
                alert(`Prestige multiplier increased to x${epsMultiplier.toFixed(2)}`);
            }
        } else {
            alert('Not enough resources to purchase this upgrade.');
        }
    }
    
    
    
    
    
    
    function addPurchasedUpgrade(img, name, earnings) {
        const purchasedList = document.getElementById('purchasedList');
        const upgradeElement = document.createElement('div');
        upgradeElement.classList.add('purchased-upgrade');
    
        const formatEarnings = (value) => {
            if (value > 0) {
                return `+${value}`;
            } else if (value < 0) {
                return `-${Math.abs(value)}`;
            } else {
                return `${value}`;
            }
        };
    
        upgradeElement.innerHTML = `
            <img src="${img}" alt="${name}">
            <div>
                <p>${name}</p>
                <div class="upgrade-earnings">
                    <p>${formatEarnings(earnings.copiumPerSecond || 0)} CPS</p>
                    <p>${formatEarnings(earnings.delusionPerSecond || 0)} DPS</p>
                    <p>${formatEarnings(earnings.yarmulkesPerSecond || 0)} YPS</p>
                    <p>${formatEarnings(earnings.trollPointsPerSecond || 0)} TPS</p>
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
    
        sortedUpgrades.slice(0, 7).forEach(upgrade => { // Display only top 8 upgrades
            if (!purchasedUpgrades.includes(upgrade)) {
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
            }
        });
    
        updateUpgradeButtons();
    }
    
    
    
    
    function updateUpgradeButtons() {
        upgrades.forEach(upgrade => {
            const button = document.querySelector(`button[onclick="buyUpgrade('${upgrade.name.replace(/'/g, "\\'")}')"]`);
            if (button) {
                const { cost } = upgrade;
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

    
    // Make the functions globally accessible
    window.prestige = prestige;
    window.updateDisplay = updateDisplay;
    window.updateUpgradeButtons = updateUpgradeButtons;
    window.updateUpgradeList = updateUpgradeList;
    window.collectResource = collectResource;
    window.generateResources = generateResources;
    window.buyUpgrade = buyUpgrade;


    window.addEventListener('beforeunload', saveGameState);

    setInterval(generateResources, 1000);
    updateDisplay();
    updateUpgradeList();
    loadGameState();
});