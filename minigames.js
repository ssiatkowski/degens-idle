
//cooldowns for mini games
let cooldowns = {
    speed: false,
    memory: false,
    math: false,
    luck: false
};

// Mini-game timeouts in milliseconds
const miniGameTimeouts = {
    speed:  6 * 60 * 1000,  // 6 minutes
    memory: 10 * 60 * 1000, // 10 minutes
    math:   8 * 60 * 1000,  // 8 minutes
    luck:   4 * 60 * 1000,   // 4 minutes
};

// holds the interval IDs
let miniGameIntervalIds = {};
// holds the timeout IDs
let miniGameTimeoutIds  = {};

let numMathPortals = 0;
let numSpeedTaps = 0;
let numMemorizedDots = 0;
let numUnluckyBoxes = 0;
let numLuckyBoxes = 0;
let numSoftCaps = 0;
let numSpeedFailures = 0;
let numSpeedWins = 0
let numConsecutiveSpeedFailures = 0;
let numMemoryFailures = 0;
let numMemoryWins = 0;
let numConsecutiveMemoryFailures = 0;
let numMathFailures = 0;
let numMathWins = 0;
let numConsecutiveMathFailures = 0;
let numMiniGameSkips = 0;

let lastClickedBoxIndex = null;
let consecutiveClicks = 0;

let miniGamesSoftCapHrs = 10;

const twinRealmsWinningSequence = '2233443322';
let twinRealmsSequence = '';

// Function to play a mini-game of a given type
function playMiniGame(gameType) {
    // Check if the mini-game is on cooldown
    if (cooldowns[gameType]) return;

    if (!pricyTranquilitySkill || !enableQuickModeMiniGameSkip) {
        // Hide all tooltips
        document.querySelectorAll('.game-button').forEach((button) => {
            if (button._tooltip) {
                button._tooltip.classList.remove('visible');
            }
        });
    }

    // Get the button element for the mini-game
    const button = document.getElementById(`${gameType}Game`);
    button.disabled = true; // Disable the button at the start of the game
    button.classList.remove('affordable'); // Remove the 'affordable' class
    button.classList.add('disabled'); // Add the 'disabled' class to change its appearance

    // Convert mini-game timeouts from milliseconds to minutes for the message
    const cooldownMultiplier = miniGamerSkill ? (gamingAddictSkill ? 0.25 : 0.5) : 1;
    const cooldownMinutes = (miniGameTimeouts[gameType] * cooldownMultiplier) / (60 * 1000);
    const cooldownMessage = (gameType === 'memory' || gameType === 'math') ? 
        `<br><br>In ${cooldownMinutes} minutes, you get to test your ${gameType} skills again.` : 
        `<br><br>In ${cooldownMinutes} minutes, you get to test your ${gameType} again.`;

    // Define the soft cap for each mini-game
    const softCaps = {
        speed: hopefulSoftCapSkill 
            ? Math.max(Math.abs(effectiveCopiumPerSecond) * miniGamesSoftCapHrs * 60 * 60, Math.abs(effectiveHopiumPerSecond) * miniGamesSoftCapHrs * 60 * 60)
            : Math.max(Math.abs(effectiveCopiumPerSecond) * miniGamesSoftCapHrs * 60 * 60, 100),
        memory: hopefulSoftCapSkill 
            ? Math.max(Math.abs(effectiveDelusionPerSecond) * miniGamesSoftCapHrs * 60 * 60, Math.abs(effectiveHopiumPerSecond) * miniGamesSoftCapHrs * 60 * 60)
            : Math.max(Math.abs(effectiveDelusionPerSecond) * miniGamesSoftCapHrs * 60 * 60, 100),
        math: hopefulSoftCapSkill 
            ? Math.max(Math.abs(effectiveYachtMoneyPerSecond) * miniGamesSoftCapHrs * 60 * 60, Math.abs(effectiveHopiumPerSecond) * miniGamesSoftCapHrs * 60 * 60)
            : Math.max(Math.abs(effectiveYachtMoneyPerSecond) * miniGamesSoftCapHrs * 60 * 60, 100),
        luck: hopefulSoftCapSkill 
            ? Math.max(Math.abs(effectiveTrollPointsPerSecond) * miniGamesSoftCapHrs * 60 * 60, Math.abs(effectiveHopiumPerSecond) * miniGamesSoftCapHrs * 60 * 60)
            : Math.max(Math.abs(effectiveTrollPointsPerSecond) * miniGamesSoftCapHrs * 60 * 60, 100) 
    };

    let softCapReached = false;  // Variable to check if the soft cap is reached

    // Speed mini-game logic
    if (gameType === 'speed') {
  
        function handleSpeedGameAction(action) {
            if (action === 'play') {
                const gameArea = document.createElement('div');
                gameArea.setAttribute('id', 'speedGameArea');
                gameArea.style.position = 'fixed';
                gameArea.style.top = '5%';
                gameArea.style.left = '5%';
                gameArea.style.width = '90%';
                gameArea.style.height = '90%';
                gameArea.style.backgroundColor = '#000000';
                gameArea.style.zIndex = '1000';
                document.body.appendChild(gameArea);
                // Create and attach timer
                const timer = new CountdownTimer();
                timer.appendTo(document.getElementById('speedGameArea'));
                timer.start(duration);
    
                const dotSize = Math.min(window.innerWidth, window.innerHeight) * (speedGameSkill ? 0.17 : 0.13);
    
                // Function to create a dot at a random position within the game area
                function createDot(isStartingDot = false) {
                    const dot = document.createElement('div');
                    dot.style.position = 'absolute';
                    dot.style.width = `${dotSize}px`;  
                    dot.style.height = `${dotSize}px`;
                    dot.style.borderRadius = '50%';
                    dot.style.backgroundColor = '#ff4444';
                    dot.style.cursor = 'pointer';
    
                    const randomX = Math.random() * (gameArea.clientWidth - dotSize);
                    const randomY = Math.random() * (gameArea.clientHeight - dotSize);
                    dot.style.left = `${randomX}px`;
                    dot.style.top = `${randomY}px`;
    
                    // Add click event listener
                    dot.addEventListener('click', function() {
                        points++;
                        gameArea.removeChild(dot); // Remove the clicked dot
                        createDot(); // Create a new dot
    
                        // If it's a starting dot, increment the counter
                        if (isStartingDot) {
                            startingDotsClicked++;
                        }
                    });
    
                    gameArea.appendChild(dot);
                }
    
                // Create two initial dots (starting dots)
                createDot(true);  // First starting dot
                createDot(true);  // Second starting dot
    
                // Add click event listener for the game area
                gameArea.addEventListener('click', function(event) {
                    if (!event.target.style.backgroundColor || event.target.style.backgroundColor !== '#ff4444') {
                        misclicks++;
                    }
                });
    
                // End the game after the duration
                setTimeout(() => {
                    document.body.removeChild(gameArea); // Remove the game area
                    let reward;
                    let resultMessage;
    
                    misclicks = Math.max(misclicks - points, 0);
    
                    let effectivePoints = points - (0.5 * misclicks);
                    let effectiveClicksPerSecond = effectivePoints / duration;
    
                    if (effectiveClicksPerSecond >= targetClickSpeed) {
                        reward = Math.max(Math.floor(Math.abs(copium) * (effectiveClicksPerSecond * 0.15)), 25);
                        let percent_earned = effectiveClicksPerSecond * 15;
                        if (speedGameSkill) { reward *= 3; percent_earned *= 3; }
                        if (reward > softCaps.speed) {
                            reward = softCaps.speed;
                            softCapReached = true;
                        }
                        percent_earned = Math.floor(percent_earned);
    
                        // If fewer than 2 starting dots were clicked, unlock the achievement
                        if (startingDotsClicked == 1) {
                            unlockAchievement('Why Discriminate Dots?');
                        }
    
                        if (effectiveClicksPerSecond >= 3) {
                            unlockAchievement('Speed Demon');
                        }
    
                        if (misclicks >= 7){
                            unlockAchievement('Correcting Mistakes');
                        }
    
                        const speedTapsDelta = Math.max(0, points - misclicks);
    
                        resultMessage = `You tapped ${points} dots with ${misclicks} misclicks in ${duration} seconds (${effectiveClicksPerSecond.toFixed(2)} points per second). Your reward is ${percent_earned}% (<span style="color: green;">${formatNumber(reward)}</span>) copium!<br><br>You added ${speedTapsDelta} taps for a total of ${formatNumber(numSpeedTaps)} taps in winning games.`;
                        
                        if(cosmicGamekeeperSkill){
                            resultMessage += `<br><br>Cosmic Gamekeeper mult has permanently increased by <span style="color: #90EE90;">+${formatNumber(applyProgressiveScaling(numSpeedTaps + speedTapsDelta, 0.0001) - applyProgressiveScaling(numSpeedTaps, 0.0001))}</span>!`;
                        }

                        numSpeedTaps += speedTapsDelta;
                        localStorage.setItem('numSpeedTaps', numSpeedTaps);
                        if (numSpeedTaps >= 1500) {
                            unlockAchievement('Pathological Speedster');
                        }
    
                        calculateMiniGamesMultiplier();

                        numSpeedWins++;
                        localStorage.setItem('numSpeedWins', numSpeedWins);
                        numConsecutiveSpeedFailures = 0;
                        localStorage.setItem('numConsecutiveSpeedFailures', numConsecutiveSpeedFailures);
                    } else {
                        if (misclicks == 42) {
                            unlockAchievement('42 Misclicks');
                            numSpeedFailures--;
                        }
                        reward = -Math.max(Math.floor(Math.abs(copium) * 0.25), 25);
                        resultMessage = `You were too slow, managing only ${points} taps on dots with ${misclicks} misclicks in ${duration} seconds (${effectiveClicksPerSecond.toFixed(2)} points per second). You lose 25% (<span style="color: red;">${formatNumber(reward)}</span>) copium. Try again later!`;
                        numSpeedFailures++;
                        localStorage.setItem('numSpeedFailures', numSpeedFailures);
                        numConsecutiveSpeedFailures++;
                        localStorage.setItem('numConsecutiveSpeedFailures', numConsecutiveSpeedFailures);
                    }
    
                    copium += reward;
    
                    if (softCapReached) {
                        numSoftCaps++;
                        localStorage.setItem('numSoftCaps', numSoftCaps);
                        if (numSoftCaps >= 50) {
                            unlockAchievement(`Can't Hold Me Back`);
                        }
                        resultMessage += `<br><br><span style="color: orange;">Soft cap reached: Maximum reward of ${miniGamesSoftCapHrs} hours effective Copium applied. This was your ${numSoftCaps}${getOrdinalSuffix(numSoftCaps)} soft cap.</span>`;
                    }
    
                    resultMessage += cooldownMessage;
    
                    showMessageModal('Speed Game Result', resultMessage, false, false, null, false, true);
                }, duration * 1000);
            } else if (action === 'skip') {

                reward = Math.max(Math.floor(Math.abs(copium) * 1.5 * (0.15)), 25);
                let percent_earned = 1.5 * 15;
                if (speedGameSkill) { reward *= 3; percent_earned *= 3; }
                if (reward > softCaps.speed) {
                    reward = softCaps.speed;
                    softCapReached = true;
                }

                reward *= (sereneExtortionSkill ? 0.2 : 0.1);
                percent_earned *= (sereneExtortionSkill ? 0.2 : 0.1);
                percent_earned = Math.floor(percent_earned);

                copium += reward;

                speedTapsDelta = duration * 1.5 * (sereneExtortionSkill ? 0.2 : 0.1)

                let resultMessage = `You got rewards equivalent to ${(1.5 * (sereneExtortionSkill ? 0.2 : 0.1)).toFixed(2)} clicks per second. Your reward is ${percent_earned}% (<span style="color: green;">${formatNumber(reward)}</span>) copium! <br><br>You added ${formatNumber(speedTapsDelta)} taps for a total of ${formatNumber(numSpeedTaps)} taps in winning games.`;

                if(cosmicGamekeeperSkill){
                    resultMessage += `<br><br>Cosmic Gamekeeper mult has permanently increased by <span style="color: #90EE90;">+${formatNumber(applyProgressiveScaling(numSpeedTaps + speedTapsDelta, 0.0001) - applyProgressiveScaling(numSpeedTaps, 0.0001))}</span>!`;
                }

                numSpeedTaps += speedTapsDelta;
                localStorage.setItem('numSpeedTaps', numSpeedTaps);
                calculateMiniGamesMultiplier();
                
                numMiniGameSkips++;
                localStorage.setItem('numMiniGameSkips', numMiniGameSkips);
                resultMessage += `<br><br>You have now skipped ${numMiniGameSkips} mini games.`;
                if (numMiniGameSkips >= 5000) {
                    unlockAchievement('Skip Master 5000');
                }

                if (softCapReached) {
                    resultMessage += `<br><br><span style="color: orange;">Soft cap reached: Maximum reward of ${miniGamesSoftCapHrs} hours effective Copium applied.</span>`;
                }

                if (!(pricyTranquilitySkill && enableQuickModeMiniGameSkip)) {
                    showMessageModal('Skipped Speed Game Result', resultMessage, false, false, null, false, true);
                }
            }
            
            updateDisplay(); 
            startCooldown(gameType); 
            saveGameState();
        }

        let points = 0;
        let misclicks = 0;
        let startingDotsClicked = 0;  // Counter for starting dots
        let duration = Math.floor(Math.random() * 6) + 3; // Random duration between 3 and 8 seconds
        const origTargetClickSpeed = 1.5;
        let targetClickSpeed = origTargetClickSpeed / (1 + numConsecutiveSpeedFailures * 0.1);

        const showSkipButton = (numSpeedWins + numSpeedFailures) > 25;

        if (pricyTranquilitySkill && enableQuickModeMiniGameSkip) {
            // Automatically skip and handle the action
            handleSpeedGameAction('skip');
        } else {
            // Show the modal and handle the user's action
            showMiniGameStartModal(
                'Speed Game',
                `Tap on the dots as many times as you can in ${duration} seconds! Be careful, clicks 
                outside the dots will count as -0.5 points.
                <br /> &nbsp;
                <br /><strong>Wins:</strong> ${numSpeedWins}
                <br /><strong>Losses:</strong> ${numSpeedFailures}
                ${numConsecutiveSpeedFailures >= 1 ? `<br /><strong>Consecutive Losses:</strong> ${numConsecutiveSpeedFailures} (target click speed lowered from ${origTargetClickSpeed} to ${formatNumber(targetClickSpeed)})` : ''}`,
                showSkipButton
            ).then((action) => {
                handleSpeedGameAction(action);
            });
        }
    }


    // Memory mini-game logic
    else if (gameType === 'memory') {

        function handleMemoryGameAction(action) {
            if (action === 'play') {
                const memoryGameStartTime = crunchTimer;

                // Create a game area
                const gameArea = document.createElement('div');
                gameArea.style.position = 'fixed';
                gameArea.style.top = '5%';
                gameArea.style.left = '5%';
                gameArea.style.width = '90%';
                gameArea.style.height = '90%';
                gameArea.style.backgroundColor = '#000000';
                gameArea.style.zIndex = '1000';
                document.body.appendChild(gameArea);
    
                // Calculate dot size based on screen size
                const dotSize = Math.min(window.innerWidth, window.innerHeight) * 0.15;
    
                // Create a grid of dots
                function createGrid() {
                    for (let i = 0; i < gridSize * gridSize; i++) {
                        const dot = document.createElement('div');
                        dot.style.position = 'absolute';
                        dot.style.width = `${dotSize}px`;
                        dot.style.height = `${dotSize}px`;
                        dot.style.borderRadius = '50%';
                        dot.style.backgroundColor = '#888888';
                        dot.style.cursor = 'pointer';
                        dot.style.opacity = '0.5';
    
                        // Position the dot in the grid
                        const row = Math.floor(i / gridSize);
                        const col = i % gridSize;
                        dot.style.left = `${(col * dotSize) + (gameArea.clientWidth - (gridSize * dotSize)) / 2}px`;
                        dot.style.top = `${(row * dotSize) + (gameArea.clientHeight - (gridSize * dotSize)) / 2}px`;
    
                        // Add click event listener
                        dot.addEventListener('click', function () {
                            if (!isSequencePlaying) { // Only allow clicks if the sequence is not playing
                                playerSequence.push(i);
                                highlightDot(dot, '#00FF00'); // Highlight the clicked dot in green
    
                                if (playerSequence.length === sequence.length) {
                                    checkSequence(); // Check the player's sequence when they finish
                                }
                            }
                        });
    
                        gameArea.appendChild(dot);
                    }
                }
    
                // Function to highlight a dot
                function highlightDot(dot, color) {
                    dot.style.backgroundColor = color;
                    dot.style.opacity = '1';
    
                    // Reset the dot after a short delay
                    setTimeout(() => {
                        dot.style.backgroundColor = '#888888';
                        dot.style.opacity = '0.5';
                    }, 500);
                }
    
                // Generate a random sequence of dot indexes
                for (let i = 0; i < sequenceLength; i++) {
                    sequence.push(Math.floor(Math.random() * (gridSize * gridSize)));
                }
    
                // Function to play the sequence (dots light up in order)
                function playSequence() {
                    disableClicks(); // Disable clicks during sequence play
                    sequence.forEach((index, i) => {
                        const dot = gameArea.children[index];
                        setTimeout(() => {
                            highlightDot(dot, '#FFFF00'); // Highlight the dot in yellow for the sequence
                        }, i * 600); // Delay each highlight for visibility
                    });
    
                    setTimeout(() => {
                        enableClicks(); // Enable clicks after the sequence plays
                        isSequencePlaying = false; // Set flag to allow clicking
                    }, sequence.length * 600);
                }
    
                // Disable clicks on dots until the sequence plays
                function disableClicks() {
                    Array.from(gameArea.children).forEach(dot => {
                        dot.style.pointerEvents = 'none';
                    });
                }
    
                // Enable clicks on dots after the sequence plays
                function enableClicks() {
                    Array.from(gameArea.children).forEach(dot => {
                        dot.style.pointerEvents = 'auto';
                    });
                }
    
                // Function to check if the player's sequence matches the correct sequence
                function checkSequence() {
                    disableClicks(); // Disable further clicks during check
                    let correct = true;
    
                    // check if sequence is length 6 and in reverse order
                    if (sequenceLength == 6) {
                        if (sequence[0] == playerSequence[5] && sequence[1] == playerSequence[4] && sequence[2] == playerSequence[3] && sequence[3] == playerSequence[2] && sequence[4] == playerSequence[1] && sequence[5] == playerSequence[0]) {
                            unlockAchievement('Rote Amnesia');
                            numMemoryFailures--;
                        }
                    }
    
                    for (let i = 0; i < sequence.length; i++) {
                        if (sequence[i] !== playerSequence[i]) {
                            correct = false;
                            break;
                        }
                    }
    
                    let reward = correct ? Math.max(Math.floor(Math.abs(delusion) * 0.3), 30) : -Math.max(Math.floor(Math.random() * Math.abs(delusion) * 0.2), 20);
                    if (memoryGameSkill && correct) reward *= 3; // Triple the reward if memoryGameSkill is true
    
                    // Apply the soft cap
                    if (reward > softCaps.memory) {
                        reward = softCaps.memory;
                        softCapReached = true;
                    }
    
                    if(correct && sequenceLength >= 6){
                        if (gridSize >= 6) {
                            unlockAchievement('Memory Master');
                        }
                        if (crunchTimer - memoryGameStartTime >= 180) {
                            unlockAchievement('Long Term Memory');
                        }
                    }
    
                    delusion += reward;

                    if (correct) {
                        numMemorizedDots += sequenceLength;
                        localStorage.setItem('numMemorizedDots', numMemorizedDots);
                        numMemoryWins++
                        localStorage.setItem('numMemoryWins', numMemoryWins);
                        numConsecutiveMemoryFailures = 0;
                        localStorage.setItem('numConsecutiveMemoryFailures', numConsecutiveMemoryFailures);
                        if (numMemorizedDots >= 500) {
                            unlockAchievement('Pattern Prodigy');
                        }
                        calculateMiniGamesMultiplier();
                    } else {
                        numMemoryFailures++;
                        localStorage.setItem('numMemoryFailures', numMemoryFailures);
                        numConsecutiveMemoryFailures++;
                        localStorage.setItem('numConsecutiveMemoryFailures', numConsecutiveMemoryFailures);
                    }

                    let resultMessage = correct
                        ? `You successfully matched the pattern and earned ${memoryGameSkill ? '90%' : '30%'} (<span style="color: green;">${formatNumber(reward)}</span>) delusion!<br><br>You memorized ${formatNumber(sequenceLength)} new dots for a total of ${formatNumber(numMemorizedDots)} dots in winning games!`
                        : `You failed to match the pattern and lost 20% (<span style="color: red;">${formatNumber(Math.abs(reward))}</span>) delusion!`;

                    if (cosmicGamekeeperSkill && correct) {
                        resultMessage += `<br><br>Cosmic Gamekeeper mult has permanently increased by <span style="color: #90EE90;">+${formatNumber(applyProgressiveScaling(numMemorizedDots + sequenceLength, 0.0003) - applyProgressiveScaling(numMemorizedDots, 0.0003))}</span>!`;
                    }
            

                    if (softCapReached) {
                        numSoftCaps++;
                        localStorage.setItem('numSoftCaps', numSoftCaps);
                        if (numSoftCaps >= 50) {
                            unlockAchievement(`Can't Hold Me Back`);
                        }
                        resultMessage += `<br><br><span style="color: orange;">Soft cap reached: Maximum reward of ${miniGamesSoftCapHrs} hours effective Delusion applied. This was your ${numSoftCaps}${getOrdinalSuffix(numSoftCaps)} soft cap.</span>`;
                    }
    
                    resultMessage += cooldownMessage;
    
                    showMessageModal('Memory Game Result', resultMessage, false, false, null, false, false);
                    updateDisplay(); // Update the display
                    startCooldown(gameType); // Start cooldown for the mini-game
                    document.body.removeChild(gameArea); // Remove the game area
                    saveGameState();
                }
    
                // Start the game logic
                disableClicks(); // Disable clicks before the sequence plays
                createGrid(); // Create the grid of dots
                playSequence(); // Play the sequence for the player to remember
            } else if (action === 'skip') {
                let reward = Math.max(Math.floor(Math.abs(delusion) * 0.3), 30);
                let percent_earned = 30;
                if (memoryGameSkill) {
                    reward *= 3; // Triple the reward if memoryGameSkill is true
                    percent_earned = 90;
                }

                // Apply the soft cap
                if (reward > softCaps.memory) {
                    reward = softCaps.memory;
                    softCapReached = true;
                }
                reward *= (sereneExtortionSkill ? 0.2 : 0.1);
                percent_earned *= (sereneExtortionSkill ? 0.2 : 0.1);
                percent_earned = Math.floor(percent_earned);

                delusion += reward;

                let resultMessage = `You got rewards equivalent to ${(sequenceLength * (sereneExtortionSkill ? 0.2 : 0.1)).toFixed(2)} sequence length. Your reward is ${percent_earned}% (<span style="color: green;">${formatNumber(reward)}</span>) delusion! You have now memorized ${formatNumber(numMemorizedDots)} dots in winning games.`;

                if (cosmicGamekeeperSkill) {
                    resultMessage += `<br><br>Cosmic Gamekeeper mult has permanently increased by <span style="color: #90EE90;">+${formatNumber(applyProgressiveScaling(numMemorizedDots + (sequenceLength * (sereneExtortionSkill ? 0.2 : 0.1)), 0.0003) - applyProgressiveScaling(numMemorizedDots, 0.0003))}</span>!`;
                }

                numMemorizedDots += sequenceLength * (sereneExtortionSkill ? 0.2 : 0.1);
                localStorage.setItem('numMemorizedDots', numMemorizedDots);
                calculateMiniGamesMultiplier();

                numMiniGameSkips++;
                localStorage.setItem('numMiniGameSkips', numMiniGameSkips);
                resultMessage += `<br><br>You have now skipped ${numMiniGameSkips} mini games.`;
                if (numMiniGameSkips >= 5000) {
                    unlockAchievement('Skip Master 5000');
                }

                if (softCapReached) {
                    resultMessage += `<br><br><span style="color: orange;">Soft cap reached: Maximum reward of ${miniGamesSoftCapHrs} hours effective Delusion applied.</span>`;
                }

                resultMessage += cooldownMessage;

                if (!(pricyTranquilitySkill && enableQuickModeMiniGameSkip)) {
                    showMessageModal('Skipped Memory Game Result', resultMessage, false, false, null, false, false);
                }
                
                updateDisplay(); // Update the display
                startCooldown(gameType); // Start cooldown for the mini-game
                saveGameState();
            }
        }

        let gridSize = Math.floor(Math.random() * 3) + 4; // Random size of the grid (4x4,5x5,6x6)
        let sequenceLength = Math.floor(Math.random() * 4) + (memoryGameSkill ? 3 : 4); // Random sequence length between 4 and 7  (3-6 with memoryGameSkill)
        let sequence = [];
        let playerSequence = [];
        let isSequencePlaying = true; // Flag to prevent clicking during the sequence playback

        // Adjust sequenceLength based on numConsecutiveMemoryFailures
        if (numConsecutiveMemoryFailures === 1) {
            sequenceLength = Math.min(sequenceLength, 6);
        } else if (numConsecutiveMemoryFailures >= 2 && numConsecutiveMemoryFailures <= 3) {
            sequenceLength = Math.min(sequenceLength, 5);
        } else if (numConsecutiveMemoryFailures >= 4 && numConsecutiveMemoryFailures <= 5) {
            sequenceLength = Math.min(sequenceLength, 4);
        } else if (numConsecutiveMemoryFailures > 5) {
            sequenceLength = Math.min(sequenceLength, 3);
        }

        let maxSequenceLengthMessage;
        if (numConsecutiveMemoryFailures > 0) {
            let maxLength = numConsecutiveMemoryFailures === 1 ? 6 :
                            numConsecutiveMemoryFailures <= 3 ? 5 :
                            numConsecutiveMemoryFailures <= 5 ? 4 : 3;
            maxSequenceLengthMessage = `<strong>Consecutive Losses:</strong> ${numConsecutiveMemoryFailures} (Max Sequence length = ${maxLength})`;
        } else {
            maxSequenceLengthMessage = "";
        }

        const showSkipButton = (numMemoryWins + numMemoryFailures) > 25;

        if (pricyTranquilitySkill && enableQuickModeMiniGameSkip) {
            // Automatically skip and handle the action
            handleMemoryGameAction('skip');
        } else {
            // Show the modal and handle the user's action
            showMiniGameStartModal(
                'Memory Game',
                `<strong>Grid Size:</strong> ${gridSize}x${gridSize}<br>
                <strong>Sequence Length:</strong> ${sequenceLength}<br>&nbsp;<br>
                Watch the pattern of dots as they light up, and then click them in the same order! Try to remember the sequence!<br>&nbsp;<br>
                <strong>Wins:</strong> ${numMemoryWins}<br>
                <strong>Losses:</strong> ${numMemoryFailures}
                ${maxSequenceLengthMessage ? `<br />${maxSequenceLengthMessage}` : ''}`,
                showSkipButton
            ).then((action) => {
                handleMemoryGameAction(action);
            });
        }
    }


    // Math mini-game logic
    else if (gameType === 'math') {

        function handleMathGameAction(action) {
            if (action === 'play') {
                // Create a game area
                const gameArea = document.createElement('div');
                gameArea.setAttribute('id', 'mathGameArea');
                gameArea.style.position = 'fixed';
                gameArea.style.top = '5%';
                gameArea.style.left = '5%';
                gameArea.style.width = '90%';
                gameArea.style.height = '90%';
                gameArea.style.backgroundColor = '#000000';
                gameArea.style.zIndex = '1000';
                document.body.appendChild(gameArea);
                // Create and attach timer
                const timer = new CountdownTimer();
                timer.appendTo(document.getElementById('mathGameArea'));
                timer.start(duration);

                let targetFontSize = window.innerWidth <= 768 ? '20px' : '36px';
                let targetFontSpacing = window.innerWidth <= 768 ? 24 : 40;

                // Create and display the target sum on the game screen
                const targetDisplay = document.createElement('div');
                targetDisplay.textContent = `Target: ${targetSum}`;
                targetDisplay.style.position = 'absolute';
                targetDisplay.style.top = '10px';
                targetDisplay.style.left = '50%';
                targetDisplay.style.transform = 'translateX(-50%)';
                targetDisplay.style.color = '#ffffff';
                targetDisplay.style.fontSize = targetFontSize;
                targetDisplay.style.fontWeight = 'bold';
                targetDisplay.style.zIndex = '1100'; // Set z-index higher than portals
                gameArea.appendChild(targetDisplay);

                // Create and display the current sum on the game screen
                const currentSumDisplay = document.createElement('div');
                currentSumDisplay.textContent = `Current: 0`;
                currentSumDisplay.style.position = 'absolute';
                currentSumDisplay.style.top = `${10+targetFontSpacing}px`; // Placed below the target display
                currentSumDisplay.style.left = '50%';
                currentSumDisplay.style.transform = 'translateX(-50%)';
                currentSumDisplay.style.color = '#ffffff';
                currentSumDisplay.style.fontSize = targetFontSize;
                currentSumDisplay.style.fontWeight = 'bold';
                currentSumDisplay.style.zIndex = '1100'; // Set z-index higher than portals
                gameArea.appendChild(currentSumDisplay);

                const mathStartTime = Date.now(); // Track the start time

                // Function to update the timer display with 2 decimal places
                const updateTimer = () => {
                    const elapsed = (Date.now() - mathStartTime) / 1000;
                    const timeLeft = Math.max(0, duration - elapsed);
                    return timeLeft;
                };

                // Update the timer every 100 milliseconds (smooth update, but not too frequent)
                const timerInterval = setInterval(() => {
                    const timeLeft = updateTimer();
                    if (timeLeft <= 0) {
                        clearInterval(timerInterval); // Stop the timer when it reaches 0
                        endGame(false); // Time ran out, player loses
                    }
                }, 20);

                // Function to create a portal with better collision detection
                function createPortal(num) {
                    const portal = document.createElement('div');
                    const dotSize = Math.min(window.innerWidth, window.innerHeight) * 0.13; // 13% of screen dimensions
                    const radius = dotSize / 2; // Radius of the portal
                    portal.style.position = 'absolute';
                    portal.style.width = `${dotSize}px`;  // Adjusted size
                    portal.style.height = `${dotSize}px`;
                    portal.style.borderRadius = '50%';
                    portal.style.backgroundColor = '#00BFFF';
                    portal.style.color = '#ffffff';
                    portal.style.display = 'flex';
                    portal.style.alignItems = 'center';
                    portal.style.justifyContent = 'center';
                    portal.style.fontSize = '28px';
                    portal.style.cursor = 'pointer';
                    portal.style.zIndex = '1000'; // Lower z-index than the target and timer displays
                    portal.textContent = num;

                    let positionIsValid = false;
                    let attempts = 0;
                    const maxAttempts = 50; // Limit the number of attempts to prevent infinite loops

                    while (!positionIsValid && attempts < maxAttempts) {
                        attempts++;
                        const randomX = Math.random() * (gameArea.clientWidth - dotSize);
                        const randomY = Math.random() * (gameArea.clientHeight - dotSize);

                        // Calculate the center of the new portal
                        const portalCenterX = randomX + radius;
                        const portalCenterY = randomY + radius;

                        // Check for overlap with existing portals using circle-based collision detection
                        positionIsValid = !Array.from(gameArea.children).some(child => {
                            if (child === portal || child === targetDisplay || child === currentSumDisplay) return false; // Skip the current portal being placed and the target/timer displays
                            const childRect = child.getBoundingClientRect();
                            const childCenterX = childRect.left + childRect.width / 2;
                            const childCenterY = childRect.top + childRect.height / 2;

                            // Calculate the distance between the centers of the two portals
                            const distance = Math.sqrt((portalCenterX - childCenterX) ** 2 + (portalCenterY - childCenterY) ** 2);

                            return distance < radius * 3; // Check if the distance is less than the sum of the radii
                        });

                        // Ensure the portal is not placed near the target and timer displays (avoid top-center area)
                        if (randomY < 180 && randomX > (gameArea.clientWidth / 2) - 300 && randomX < (gameArea.clientWidth / 2) + 300) {
                            positionIsValid = false; // Force reattempt if within this region
                        }

                        // If the position is valid, set the portal's position
                        if (positionIsValid) {
                            portal.style.left = `${randomX}px`;
                            portal.style.top = `${randomY}px`;
                        }
                    }

                    return portal;
                }

                // Function to generate portals with random values
                function generatePortals() {
                    let sumExists = false;

                    for (let i = 0; i < totalPortals; i++) {
                        const num = Math.floor(Math.random() * (targetSum - 1)) + 1;
                        portalValues.push(num);
                        const portal = createPortal(num);
                        gameArea.appendChild(portal);

                        portal.addEventListener('click', function() {
                            handlePortalClick(portal, num);
                        });
                    }

                    // Ensure at least one combination exists
                    portalValues.forEach((num1, index1) => {
                        for (let index2 = index1 + 1; index2 < portalValues.length; index2++) {
                            const num2 = portalValues[index2];
                            if (num1 + num2 === targetSum) {
                                sumExists = true;
                            }
                        }
                    });

                    // If no combination exists, add a forced combination
                    if (!sumExists) {
                        const forcedNum = Math.floor(Math.random() * (targetSum - 1)) + 1;
                        const remainingNum = targetSum - forcedNum;
                        portalValues.push(forcedNum);
                        portalValues.push(remainingNum);
                        const forcedPortal1 = createPortal(forcedNum);
                        gameArea.appendChild(forcedPortal1);
                        const forcedPortal2 = createPortal(remainingNum);
                        gameArea.appendChild(forcedPortal2);

                        forcedPortal1.addEventListener('click', function() {
                            handlePortalClick(forcedPortal1, forcedNum);
                        });
                        forcedPortal2.addEventListener('click', function() {
                            handlePortalClick(forcedPortal2, remainingNum);
                        });
                    }
                }

                // Handle the portal click events
                function handlePortalClick(portal, num) {
                    if (portal.classList.contains('selected')) {
                        // Deselect the portal
                        portal.classList.remove('selected');
                        portal.style.backgroundColor = '#00BFFF'; // Reset background color

                        // Remove only one instance of `num` from selectedPortals
                        const index = selectedPortals.findIndex(value => value === num);
                        if (index !== -1) {
                            selectedPortals.splice(index, 1);
                        }
                    } else {
                        // Select the portal
                        portal.classList.add('selected');
                        portal.style.backgroundColor = '#FFD700'; // Change background color for selected portals
                        selectedPortals.push(num);

                        if (selectedPortals.length >= 12) {
                            maxPortalsReached = true;
                        }
                    }

                    const sum = selectedPortals.reduce((acc, curr) => acc + curr, 0);

                    targetDisplay.textContent = `Target: ${targetSum}`;
                    currentSumDisplay.textContent = `Current: ${sum}`;

                    if (sum > targetSum) {
                        currentSumDisplay.style.color = 'red'; // Change color to red to indicate warning
                    } else {
                        currentSumDisplay.style.color = '#ffffff'; // Reset color
                    }

                    if (sum == 69 && targetSum < 30) {
                        unlockAchievement('But What If I Want To 69?');
                    }

                    if (sum == 666) {
                        unlockAchievement('Math is Evil');
                    }

                    if (sum === targetSum) {
                        endGame(true); // End the game if the sum is exactly the target sum
                    }
                }

                // Initialize the game by generating portals
                generatePortals();

                // End the game (win or lose)
                function endGame(didWin) {
                    clearInterval(timerInterval); // Stop the timer
                    document.body.removeChild(gameArea); // Remove the game area
                    let reward;
                    let resultMessage;

                    if (didWin) {
                        reward = Math.max(Math.floor(Math.abs(yachtMoney) * 0.45), 50);
                        if (mathGameSkill) {
                            reward *= 2; // Double the reward if mathGameSkill is active
                        }
                        // Apply the soft cap
                        if (reward > softCaps.math) {
                            reward = softCaps.math;
                            softCapReached = true;
                        }
                        if (targetSum >= 78){
                            unlockAchievement('Math Genius');
                        }
                        if (selectedPortals.length >= 5) {
                            unlockAchievement('When Math Maths');
                        }

                        // handle the Twin Realms achievement
                        if (!achievementsMap.get('Twin Mathematical Realms').isUnlocked) {
                            twinRealmsSequence += selectedPortals.length.toString().charAt(0);
                            if (twinRealmsSequence.length > twinRealmsWinningSequence.length) {
                                twinRealmsSequence = twinRealmsSequence.slice(-twinRealmsWinningSequence.length);
                            }
                            if (twinRealmsSequence === twinRealmsWinningSequence) {
                                unlockAchievement('Twin Mathematical Realms');
                                twinRealmsSequence = '';
                            }
                            localStorage.setItem('twinRealmsSequence', twinRealmsSequence);
                        }
                        if (maxPortalsReached) {
                            unlockAchievement('Mathematical Overshot');
                        }

                        numMathWins++;
                        numMathPortals += selectedPortals.length;
                        
                        resultMessage = `You found the correct sum and earned ${mathGameSkill ? '90%' : '45%'} (<span style="color: green;">${formatNumber(reward)}</span>) Yacht Money! You selected ${selectedPortals.length} portals for a total of ${formatNumber(numMathPortals)} correct math portals.`;

                        if (cosmicGamekeeperSkill) {
                            resultMessage += `<br><br>Cosmic Gamekeeper mult has permanently increased by <span style="color: #90EE90;">+${formatNumber(applyProgressiveScaling(numMathPortals + selectedPortals.length, 0.0005) - applyProgressiveScaling(numMathPortals, 0.0005))}</span>!`;
                        }

                        localStorage.setItem('numMathWins', numMathWins);
                        numConsecutiveMathFailures = 0;
                        localStorage.setItem('numConsecutiveMathFailures', numConsecutiveMathFailures);
                        localStorage.setItem('numMathPortals', numMathPortals);
                        if (numMathPortals > 314) {
                            unlockAchievement('Pie Guy');
                        }
                        calculateMiniGamesMultiplier();
                    } else {
                        numMathFailures++;
                        localStorage.setItem('numMathFailures', numMathFailures);
                        numConsecutiveMathFailures++;
                        localStorage.setItem('numConsecutiveMathFailures', numConsecutiveMathFailures);
                        reward = -Math.max(Math.floor(Math.abs(yachtMoney) * 0.2), 20);
                        resultMessage = `You didn't find the correct sum. You lost 20% (<span style="color: red;">${formatNumber(Math.abs(reward))}</span>) Yacht Money.`;
                    }

                    yachtMoney += reward;

                    // Add the soft cap message in orange if applicable
                    if (softCapReached) {
                        numSoftCaps++;
                        localStorage.setItem('numSoftCaps', numSoftCaps);
                        if (numSoftCaps >= 50) {
                            unlockAchievement(`Can't Hold Me Back`);
                        }
                        resultMessage += `<br><br><span style="color: orange;">Soft cap reached: Maximum reward of ${miniGamesSoftCapHrs} hours effective Yacht Money applied. This was your ${numSoftCaps}${getOrdinalSuffix(numSoftCaps)} soft cap.</span>`;
                    }

                    resultMessage += cooldownMessage;

                    showMessageModal('Math Portal Puzzle Result', resultMessage, false, false, null, false, false);
                    updateDisplay(); // Update the display
                    startCooldown(gameType); // Start cooldown for the mini-game
                    saveGameState();
                }
            } else if (action === 'skip') {
                let reward = Math.max(Math.floor(Math.abs(yachtMoney) * 0.45), 50);
                let percent_earned = 45;
                if (mathGameSkill) {
                    reward *= 2; // Double the reward if mathGameSkill is active
                    percent_earned = 90;
                }
                // Apply the soft cap
                if (reward > softCaps.math) {
                    reward = softCaps.math;
                    softCapReached = true;
                }
                reward *= (sereneExtortionSkill ? 0.2 : 0.1);
                percent_earned *= (sereneExtortionSkill ? 0.2 : 0.1);
                percent_earned = Math.floor(percent_earned);

                yachtMoney += reward;

                let resultMessage = `You got rewards equivalent to ${(2.5 * (sereneExtortionSkill ? 0.2 : 0.1)).toFixed(3)} math portals. Your reward is ${percent_earned}% (<span style="color: green;">${formatNumber(reward)}</span>) yacht money! You have now selected ${formatNumber(numMathPortals)} correct math portals.`;

                if (cosmicGamekeeperSkill) {
                    resultMessage += `<br><br>Cosmic Gamekeeper mult has permanently increased by <span style="color: #90EE90;">+${formatNumber(applyProgressiveScaling(numMathPortals + (2.5 * (sereneExtortionSkill ? 0.2 : 0.1)), 0.0005) - applyProgressiveScaling(numMathPortals, 0.0005))}</span>!`;
                }

                numMathPortals += 2.5 * (sereneExtortionSkill ? 0.2 : 0.1);
                localStorage.setItem('numMathPortals', numMathPortals);
                calculateMiniGamesMultiplier();

                numMiniGameSkips++;
                localStorage.setItem('numMiniGameSkips', numMiniGameSkips);
                resultMessage += `<br><br>You have now skipped ${numMiniGameSkips} mini games.`;
                if (numMiniGameSkips >= 5000) {
                    unlockAchievement('Skip Master 5000');
                }

                if (softCapReached) {
                    resultMessage += `<br><br><span style="color: orange;">Soft cap reached: Maximum reward of ${miniGamesSoftCapHrs} hours effective Yacht Money applied.</span>`;
                }

                resultMessage += cooldownMessage;

                if (!(pricyTranquilitySkill && enableQuickModeMiniGameSkip)) {
                    showMessageModal('Skipped Math Game Result', resultMessage, false, false, null, false, false);
                }
                
                updateDisplay(); // Update the display
                startCooldown(gameType); // Start cooldown for the mini-game
                saveGameState();
            }
        }

        let duration = mathGameSkill ? 18 : 12; // 12 or 18 seconds
        let portalValues = []; // Store all portal values
        let selectedPortals = []; // Store selected portals for checking
        let targetSum = Math.floor(Math.random() * 71) + 10; // Random target sum between 10 and 80
        if (targetSum >= 50) {
            duration += 5;
        }

        let totalPortals = mathGameSkill ? 12 : 15; // Limit the number of portals
        let maxPortalsReached = false;

        // Save the original duration and totalPortals for reference
        const originalDuration = duration;

        // Adjust the duration based on numConsecutiveMathFailures
        if (numConsecutiveMathFailures > 0) {
            duration *= (1 + numConsecutiveMathFailures * 0.05);
        }

        // Adjust totalPortals based on numConsecutiveMathFailures
        if (numConsecutiveMathFailures >= 2) {
            const portalsSubtracted = Math.min(7, Math.floor(numConsecutiveMathFailures / 2));
            totalPortals = Math.max(1, totalPortals - portalsSubtracted); // Ensure totalPortals doesn't go below 1
        }

        // Create the duration note
        let durationNote = '';
        if (numConsecutiveMathFailures > 0) {
            durationNote = `<strong>Consecutive Losses:</strong> ${numConsecutiveMathFailures} (duration extended from ${originalDuration.toFixed(2)} to ${duration.toFixed(2)} seconds`;
            if (numConsecutiveMathFailures >= 2) {
                const portalsSubtracted = Math.min(7, Math.floor(numConsecutiveMathFailures / 2));
                durationNote += `, and ${portalsSubtracted} portal${portalsSubtracted > 1 ? 's' : ''} subtracted`;
            }
            durationNote += ').';
        }

        const showSkipButton = (numMathWins + numMathFailures) > 25;

        if (pricyTranquilitySkill && enableQuickModeMiniGameSkip) {
            // Automatically skip and handle the action
            handleMathGameAction('skip');
        } else {
            // Show the modal and handle the user's action
            showMiniGameStartModal(
                'Math Portal Puzzle',
                `<strong style="font-size: 1.5em;">Target Sum: ${targetSum}</strong><br><br>
                Click on the portals to select numbers that add up to the target sum in ${duration.toFixed(2)} seconds!<br>&nbsp;<br>
                <strong>Wins:</strong> ${numMathWins}<br>
                <strong>Losses:</strong> ${numMathFailures}<br>
                ${durationNote}`,
                showSkipButton
            ).then((action) => {
                handleMathGameAction(action);
            });
        }
    }

    // Luck mini-game logic
    else if (gameType === 'luck') {
        function handleLuckGame() {
            // Create a game area
            const gameArea = document.createElement('div');
            gameArea.style.position = 'fixed';
            gameArea.style.top = '5%';
            gameArea.style.left = '5%';
            gameArea.style.width = '90%';
            gameArea.style.height = '90%';
            gameArea.style.backgroundColor = '#1E1E1E'; // Darker gray for a sleeker look
            gameArea.style.zIndex = '1000';
            gameArea.style.display = 'grid';
            gameArea.style.gridTemplateColumns = `repeat(${totalBoxes <= 4 ? 2 : 3}, 1fr)`;
            gameArea.style.justifyItems = 'center'; // Center the boxes
            gameArea.style.alignItems = 'center'; // Center the boxes vertically
            gameArea.style.borderRadius = '15px';
            document.body.appendChild(gameArea);

            const boxSize = Math.min(window.innerWidth, window.innerHeight) * 0.15; // Adjusted box size

            // Create the boxes
            for (let i = 0; i < totalBoxes; i++) {
                const box = document.createElement('div');
                box.style.width = `${boxSize}px`;
                box.style.height = `${boxSize}px`;
                box.style.borderRadius = '10px';
                box.style.backgroundColor = '#444444'; // Darker background for a cooler look
                box.style.color = '#FFD700'; // Gold text color for better contrast
                box.style.display = 'flex';
                box.style.alignItems = 'center';
                box.style.justifyContent = 'center';
                box.style.fontSize = '24px';
                box.style.cursor = 'pointer';
                box.style.textAlign = 'center';
                box.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.7)'; // Stronger shadow for depth
                box.style.transition = 'transform 0.2s, background-color 0.2s'; // Smooth transition for hover effects
                box.style.userSelect = 'none';
                box.textContent = '???'; // Initially hide the value

                // Add hover effect to make the boxes "pop"
                box.addEventListener('mouseover', () => {
                    box.style.transform = 'scale(1.1)'; // Slightly enlarge the box on hover
                });

                box.addEventListener('mouseout', () => {
                    box.style.transform = 'scale(1)'; // Reset the box size on mouse out
                });

                // Store the value inside the box
                const boxValue = boxValues[i];

                // Add click event listener
                box.addEventListener('click', function () {
                    // Smooth reveal with a scale and fade-in effect
                    box.style.transition = 'all 0.3s ease';
                    box.style.transform = 'scale(1.2)';
                    box.style.opacity = '0';
                    setTimeout(() => {
                        box.style.opacity = '1';
                        box.textContent = `${boxValue}%`;
                        box.style.backgroundColor = boxValue >= 0 ? '#00FF00' : '#FF0000'; // Green for win, red for loss
                        box.style.transform = 'scale(1)';
                    }, 300);

                    // Other boxes fade out and reveal their values
                    Array.from(gameArea.children).forEach((child, index) => {
                        if (child !== box) {
                            const childValue = boxValues[index];
                            setTimeout(() => {
                                child.style.transition = 'all 0.3s ease';
                                child.style.opacity = '0.7';
                                child.style.backgroundColor = childValue >= 0 ? '#008800' : '#880000'; // Darker green/red tint for others
                                child.textContent = `${childValue}%`;
                            }, 300);
                        }
                    });

                    // Check if the same box was clicked 10 times in a row
                    if (lastClickedBoxIndex === i) {
                        consecutiveClicks++;
                        //save consecutiveClicks to localstorage
                        localStorage.setItem('consecutiveClicks', consecutiveClicks);
                        if (consecutiveClicks >= 10) {
                            unlockAchievement('Is This Your Lucky Box?');
                        }
                    } else {
                        lastClickedBoxIndex = i;
                        consecutiveClicks = 1; // Reset the counter if a different box is clicked
                        localStorage.setItem('lastClickedBoxIndex', lastClickedBoxIndex);
                        localStorage.setItem('consecutiveClicks', consecutiveClicks);
                    }

                    // End the game after showing all boxes
                    setTimeout(() => {
                        document.body.removeChild(gameArea); // Remove the game area

                        let reward;
                        let resultMessage;

                        // Calculate reward based on the chosen box value
                        reward = Math.floor(Math.abs(trollPoints) * (boxValue / 100));
                        // Apply the soft cap
                        if (reward > softCaps.luck) {
                            reward = softCaps.luck;
                            softCapReached = true;
                        }

                        if (boxValue < 0) {
                            numUnluckyBoxes ++;
                            localStorage.setItem('numUnluckyBoxes', numUnluckyBoxes);
                            if (numUnluckyBoxes >= 100) {
                                unlockAchievement('Consolation Prize');
                            }
                        } else {
                            numLuckyBoxes ++;
                            localStorage.setItem('numLuckyBoxes', numLuckyBoxes);
                            if (numLuckyBoxes >= 777) {
                                unlockAchievement('Luck of the Irish');
                            }
                            calculateMiniGamesMultiplier();
                        }

                        resultMessage = boxValue >= 0 ?
                            `You chose a lucky box and gained ${boxValue}% (<span style="color: green;">${formatNumber(reward)}</span>) troll points! That was your ${numLuckyBoxes}${getOrdinalSuffix(numLuckyBoxes)} lucky box.` :
                            `You chose an unlucky box and lost ${boxValue}% (<span style="color: red;">${formatNumber(Math.abs(reward))}</span>) troll points. That was your ${numUnluckyBoxes}${getOrdinalSuffix(numUnluckyBoxes)} unlucky box.`;

                        if (cosmicGamekeeperSkill && boxValue > 0) {
                            resultMessage += `<br><br>Cosmic Gamekeeper mult has permanently increased by <span style="color: #90EE90;">+${formatNumber(applyProgressiveScaling(numLuckyBoxes, 0.0007) - applyProgressiveScaling(numLuckyBoxes-1, 0.0007))}</span>!`;
                        }
    

                        trollPoints += reward;

                        // Add the soft cap message in orange if applicable
                        if (softCapReached) {
                            numSoftCaps++;
                            localStorage.setItem('numSoftCaps', numSoftCaps);
                            if (numSoftCaps >= 50) {
                                unlockAchievement(`Can't Hold Me Back`);
                            }
                            resultMessage += `<br><br><span style="color: orange;">Soft cap reached: Maximum reward of ${miniGamesSoftCapHrs} hours effective Troll Points applied. This was your ${numSoftCaps}${getOrdinalSuffix(numSoftCaps)} soft cap.</span>`;
                        }

                        resultMessage += cooldownMessage;

                        if(boxValue >= 123){
                            unlockAchievement('Pure Luck');
                        }
                        if(boxValue <= -54.9){
                            unlockAchievement('That is some Bad Luck');
                        }

                        if (!(pricyTranquilitySkill && enableQuickModeMiniGameSkip)) {
                            showMessageModal('Luck Game Result', resultMessage, false, false, null, false, false);
                        }
                        
                        updateDisplay(); // Update the display
                        startCooldown(gameType); // Start cooldown for the mini-game
                        saveGameState();
                    }, 1200); // 1.2-second delay to show all boxes
                });

                // Append the box to the game area
                gameArea.appendChild(box);
            }
        }

        let boxValues = [];
        const sebosLuck = purchasedUpgradesSet.has("Sebo's Luck");
        let totalBoxes = sebosLuck ? 4 : (luckGameSkill ? 5 : 6);

        // Adjust the value ranges based on luckGameSkill and Sebo's Luck
        if (sebosLuck) {
            // If Sebo's Luck is active, only 4 values are needed
            boxValues = [
                Math.floor(Math.random() * 36) - 40, // -40% to -5%
                Math.floor(Math.random() * 101) + 25, // 25% to 125%
                Math.floor(Math.random() * 101) + 25, // 25% to 125%
                Math.floor(Math.random() * 101) + 25  // 25% to 125%
            ];
        } else if (luckGameSkill) {
            // If luckGameSkill is active, but Sebo's Luck is not, 5 values are needed
            boxValues = [
                Math.floor(Math.random() * 36) - 40, // -40% to -5%
                Math.floor(Math.random() * 36) - 40, // -40% to -5%
                Math.floor(Math.random() * 101) + 25, // 25% to 125%
                Math.floor(Math.random() * 101) + 25, // 25% to 125%
                Math.floor(Math.random() * 101) + 25  // 25% to 125%
            ];
        } else {
            // Default scenario with 6 values
            boxValues = [
                Math.floor(Math.random() * 51) - 55, // -55% to -5%
                Math.floor(Math.random() * 51) - 55, // -55% to -5%
                Math.floor(Math.random() * 51) - 55, // -55% to -5%
                Math.floor(Math.random() * 91) + 10,  // 10% to 100%
                Math.floor(Math.random() * 91) + 10,  // 10% to 100%
                Math.floor(Math.random() * 91) + 10   // 10% to 100%
            ];
        }

        // Shuffle the box values to randomize the order
        for (let i = boxValues.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [boxValues[i], boxValues[j]] = [boxValues[j], boxValues[i]];
        }
    
        if (pricyTranquilitySkill && enableQuickModeMiniGameSkip) {
            // Automatically skip and handle the action
            handleLuckGame();
        } else {
            // Show the modal and handle the user's action
            showMessageModal(
                'Luck Game',
                `<strong style="font-size: 1.2em;">Choose a box!</strong><br><br>
                Test your luck and see what fate has in store for you.<br>&nbsp;<br>
                <strong>Wins:</strong> ${numLuckyBoxes}<br>
                <strong>Losses:</strong> ${numUnluckyBoxes}`,
                false,
                false
            ).then(() => {
                handleLuckGame();
            });
        }
    }
}

            
function showMiniGameStartModal(title, message, showSkipButton = false) {
    return new Promise((resolve, reject) => {
        const modal = document.getElementById('miniGameStartModal');
        const modalTitle = document.getElementById('miniGameModalTitle');
        const modalMessage = document.getElementById('miniGameModalMessage');
        const modalButtons = document.getElementById('miniGameModalButtons');

        if (!modal || !modalTitle || !modalMessage || !modalButtons) {
            console.error('Mini-game modal structure is missing or incorrect.');
            reject();
            return;
        }

        modalTitle.textContent = title || '';
        modalMessage.innerHTML = message;

        if (!showSkipButton) {
            modalMessage.innerHTML += `<br><br><em>Unlock the skip feature after 25 manual plays.</em>`;
        }

        modalButtons.innerHTML = ''; // Clear existing buttons

        // Add "Play" button
        const playButton = document.createElement('button');
        playButton.textContent = 'Play';
        playButton.className = 'modal-button play-button';
        playButton.style.backgroundColor = '#4CAF50'; // Green color
        playButton.onclick = () => {
            modal.style.display = 'none';
            resolve('play');
        };
        modalButtons.appendChild(playButton);

        // Optionally add "Skip for 5% reward" button
        if (showSkipButton) {
            const skipButton = document.createElement('button');
            skipButton.textContent = `Skip for ${sereneExtortionSkill ? 20 : 10}% reward`;
            skipButton.className = 'modal-button skip-button';
            skipButton.style.backgroundColor = '#FFA500'; // Orange color
            skipButton.onclick = () => {
                modal.style.display = 'none';
                resolve('skip');
            };
            modalButtons.appendChild(skipButton);
        }

        modal.style.display = 'block';

        // Close modal on outside click
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
                resolve('play');
            }
        };
    });
}

function startCooldown(gameType, overrideStart = null) {
    // 1) clear any in‑flight timers
    clearInterval(miniGameIntervalIds[gameType]);
    clearTimeout(miniGameTimeoutIds[gameType]);
  
    // 2) compute duration
    const mult    = miniGamerSkill ? (gamingAddictSkill ? 0.25 : 0.5) : 1;
    const fullDur = miniGameTimeouts[gameType] * mult;
    const now     = Date.now();
    const startTs = overrideStart != null ? overrideStart : now;
  
    // 3) persist only on a brand‑new cooldown
    if (overrideStart == null) {
      localStorage.setItem(`${gameType}CooldownStart`, String(startTs));
    }
  
    // 4) figure out time left
    const elapsed = now - startTs;
    const left    = Math.max(fullDur - elapsed, 0);
  
    // 5) flip your JS flag
    cooldowns[gameType] = true;
  
    // 6) flip the UI into “cooling down”
    const btn = document.getElementById(`${gameType}Game`);
    btn.disabled = true;
    btn.classList.remove('affordable', 'disabled');
    btn.classList.add('disabled');
  
    // 7) rebuild the progress bar
    let bar = btn.querySelector('.progress');
    if (bar) bar.remove();
    bar = document.createElement('div');
    bar.className = 'progress';
    btn.appendChild(bar);
    bar.style.width = `${Math.min(100, (elapsed / fullDur) * 100)}%`;
  
    // 8) keep ticking
    const tick0 = now;
    miniGameIntervalIds[gameType] = setInterval(() => {
      const e2 = elapsed + (Date.now() - tick0);
      bar.style.width = `${Math.min(100, (e2 / fullDur) * 100)}%`;
    }, 200);
  
    // 9) schedule the unlock
    miniGameTimeoutIds[gameType] = setTimeout(() => {
      clearInterval(miniGameIntervalIds[gameType]);
      cooldowns[gameType] = false;            // <— unset the flag
      btn.disabled        = false;
      btn.classList.remove('affordable', 'disabled');
      btn.classList.add('affordable');
      bar.remove();
      localStorage.removeItem(`${gameType}CooldownStart`);
    }, left);
}


function unlockMiniGames() {
    const now = Date.now();
  
    Object.keys(miniGameTimeouts).forEach(gameType => {
      const key   = `${gameType}CooldownStart`;
      const raw   = localStorage.getItem(key);
      const btn   = document.getElementById(`${gameType}Game`);
      const mult  = miniGamerSkill ? (gamingAddictSkill ? 0.25 : 0.5) : 1;
      const full  = miniGameTimeouts[gameType] * mult;
  
      // always show the button
      btn.style.display = 'block';
  
      // no saved start → fully reset
      if (!raw) {
        cooldowns[gameType] = false;
        btn.disabled        = false;
        btn.classList.remove('affordable', 'disabled');
        btn.classList.add('affordable');
        // remove any leftover bar
        const oldBar = btn.querySelector('.progress');
        if (oldBar) oldBar.remove();
        return;
      }
  
      const startTs = parseInt(raw, 10);
      const elapsed = now - startTs;
  
      if (elapsed >= full) {
        // cooldown has expired
        cooldowns[gameType] = false;
        btn.disabled        = false;
        btn.classList.remove('affordable', 'disabled');
        btn.classList.add('affordable');
        const oldBar = btn.querySelector('.progress');
        if (oldBar) oldBar.remove();
        localStorage.removeItem(key);
      }
      else {
        // still cooling
        cooldowns[gameType] = true;
        // rebuild the cooldown exactly as if it just started
        startCooldown(gameType, startTs);
      }
    });
}
  
  

function applyProgressiveScaling(effectValue, baseIncrease) {
    let scaledEffect = 0;
    let remainingTaps = effectValue;

    // First tier: Apply 5x scaling for the first 200 taps
    let firstTierTaps = Math.floor(200 / (10000 * baseIncrease));
    if (remainingTaps > firstTierTaps) {
        scaledEffect += firstTierTaps * baseIncrease * 5;
        remainingTaps -= firstTierTaps;
    } else {
        scaledEffect += remainingTaps * baseIncrease * 5;
        return scaledEffect;
    }

    // Second tier: Apply 3x scaling for the next 500 taps
    let secondTierTaps = Math.floor(500 / (10000 * baseIncrease));
    if (remainingTaps > secondTierTaps) {
        scaledEffect += secondTierTaps * baseIncrease * 3;
        remainingTaps -= secondTierTaps;
    } else {
        scaledEffect += remainingTaps * baseIncrease * 3;
        return scaledEffect;
    }

    // Third tier: Apply 2x scaling for the next 1250 taps
    let thirdTierTaps = Math.floor(1250 / (10000 * baseIncrease));
    if (remainingTaps > thirdTierTaps) {
        scaledEffect += thirdTierTaps * baseIncrease * 2;
        remainingTaps -= thirdTierTaps;
    } else {
        scaledEffect += remainingTaps * baseIncrease * 2;
        return scaledEffect;
    }

    // Fourth tier: Apply 1x scaling for the next 5000 taps
    let fourthTierTaps = Math.floor(5000 / (10000 * baseIncrease));
    if (remainingTaps > fourthTierTaps) {
        scaledEffect += fourthTierTaps * baseIncrease;
        remainingTaps -= fourthTierTaps;
    } else {
        scaledEffect += remainingTaps * baseIncrease;
        return scaledEffect;
    }

    // Apply diminishing scaling: reduce scaling so it asymptotically approaches 6
    let decrementMultiplier = 1;
    while (remainingTaps > 0) {
        let chunk = Math.min(Math.floor(1000 / (10000 * baseIncrease)), remainingTaps);
        decrementMultiplier *= 0.980392156862745;  // Reduce the multiplier by 10% for every 0.25 effect
        scaledEffect += chunk * baseIncrease * decrementMultiplier;
        remainingTaps -= chunk;
    }

    // If we have more taps, continue with the remaining tiers (not needed for this test case)
    return scaledEffect;
}

function calculateMiniGamesMultiplier() {
    if (cosmicGamekeeperSkill) {
        // Calculate each effect with its base increase and progressive scaling
        const speedTapsEffect = applyProgressiveScaling(numSpeedTaps, 0.0001);
        const memorizedDotsEffect = applyProgressiveScaling(numMemorizedDots, 0.0003);
        const mathPortalsEffect = applyProgressiveScaling(numMathPortals, 0.0005);
        const luckyBoxesEffect = applyProgressiveScaling(numLuckyBoxes, 0.0007);

        // Sum up the effects and apply them to the cosmicGamekeeperMultiplier
        cosmicGamekeeperMultiplier = 1 + (speedTapsEffect + memorizedDotsEffect + mathPortalsEffect + luckyBoxesEffect);

        if (cosmicGamekeeperMultiplier > 7.5) {
            unlockAchievement('Serious Gamer');
        }
    }
}


function setupMiniGameTooltips() {
    const miniGameButtons = [
        { 
            id: 'speedGame', 
            getTooltipContent: () => {
                const remainingCooldown = getRemainingMiniGameCooldown('speed');
                const cooldownText = remainingCooldown > 0 ? `<br><br><strong>Cooldown:</strong> ${formatMiniGameTime(remainingCooldown)}` : '';
                return cosmicGamekeeperSkill 
                    ? `<strong>Mini Games Mult:</strong> ${formatNumber(cosmicGamekeeperMultiplier)}x<br>
                    <strong>From Speed Game:</strong> +${formatNumber(applyProgressiveScaling(numSpeedTaps, 0.0001))}<br>
                    <strong># Speed Taps:</strong> ${formatNumber(numSpeedTaps)}<br>
                    <strong>Wins:</strong> ${formatNumber(numSpeedWins)}<br>
                    <strong>Losses:</strong> ${formatNumber(numSpeedFailures)}
                    ${cooldownText}`
                    : `Test your reflexes in the Speed Game!<br>
                    <strong>Wins:</strong> ${formatNumber(numSpeedWins)}<br>
                    <strong>Losses:</strong> ${formatNumber(numSpeedFailures)}
                    ${cooldownText}`
            }
        },
        { 
            id: 'memoryGame', 
            getTooltipContent: () => {
                const remainingCooldown = getRemainingMiniGameCooldown('memory');
                const cooldownText = remainingCooldown > 0 ? `<br><br><strong>Cooldown:</strong> ${formatMiniGameTime(remainingCooldown)}` : '';
                return cosmicGamekeeperSkill 
                    ? `<strong>Mini Games Mult:</strong> ${formatNumber(cosmicGamekeeperMultiplier)}x<br>
                    <strong>From Memory Game:</strong> +${formatNumber(applyProgressiveScaling(numMemorizedDots, 0.0003))}<br>
                    <strong># Memorized Dots:</strong> ${formatNumber(numMemorizedDots)}<br>
                    <strong>Wins:</strong> ${formatNumber(numMemoryWins)}<br>
                    <strong>Losses:</strong> ${formatNumber(numMemoryFailures)}
                    ${cooldownText}`
                    : `Challenge your memory in the Memory Game!<br>
                    <strong>Wins:</strong> ${formatNumber(numMemoryWins)}<br>
                    <strong>Losses:</strong> ${formatNumber(numMemoryFailures)}
                    ${cooldownText}`
            }
        },
        { 
            id: 'mathGame', 
            getTooltipContent: () => {
                const remainingCooldown = getRemainingMiniGameCooldown('math');
                const cooldownText = remainingCooldown > 0 ? `<br><br><strong>Cooldown:</strong> ${formatMiniGameTime(remainingCooldown)}` : '';
                return cosmicGamekeeperSkill 
                    ? `<strong>Mini Games Mult:</strong> ${formatNumber(cosmicGamekeeperMultiplier)}x<br>
                    <strong>From Math Game:</strong> +${formatNumber(applyProgressiveScaling(numMathPortals, 0.0005))}<br>
                    <strong># Math Portals:</strong> ${formatNumber(numMathPortals)}<br>
                    <strong>Wins:</strong> ${formatNumber(numMathWins)}<br>
                    <strong>Losses:</strong> ${formatNumber(numMathFailures)}
                    ${cooldownText}`
                    : `Solve puzzles in the Math Game!<br>
                    <strong>Wins:</strong> ${formatNumber(numMathWins)}<br>
                    <strong>Losses:</strong> ${formatNumber(numMathFailures)}
                    ${cooldownText}`
            }
        },
        { 
            id: 'luckGame', 
            getTooltipContent: () => {
                const remainingCooldown = getRemainingMiniGameCooldown('luck');
                const cooldownText = remainingCooldown > 0 ? `<br><br><strong>Cooldown:</strong> ${formatMiniGameTime(remainingCooldown)}` : '';
                return cosmicGamekeeperSkill 
                    ? `<strong>Mini Games Mult:</strong> ${formatNumber(cosmicGamekeeperMultiplier)}x<br>
                    <strong>From Luck Game:</strong> +${formatNumber(applyProgressiveScaling(numLuckyBoxes, 0.0007))}<br>
                    <strong># Lucky Boxes:</strong> ${formatNumber(numLuckyBoxes)}<br>
                    <strong># Unlucky Boxes:</strong> ${formatNumber(numUnluckyBoxes)}
                    ${cooldownText}`
                    : `Try your fortune in the Luck Game!<br>
                    <strong># Lucky Boxes:</strong> ${formatNumber(numLuckyBoxes)}<br>
                    <strong># Unlucky Boxes:</strong> ${formatNumber(numUnluckyBoxes)}
                    ${cooldownText}`
            }
        }
    ];

    // Tooltip handling
    miniGameButtons.forEach(({ id, getTooltipContent }) => {
        const button = document.getElementById(id);
        if (!button) return;

        // Create a mini-game tooltip element for this button
        const tooltip = document.createElement('div');
        tooltip.className = 'mini-game-tooltip';
        document.body.appendChild(tooltip);

        const showTooltip = (event) => {
            const content = getTooltipContent();
            tooltip.innerHTML = content;
            tooltip.classList.add('visible');
            positionTooltip(event);
        };

        const hideTooltip = () => {
            tooltip.classList.remove('visible');
        };

        const positionTooltip = (event) => {
            const tooltipRect = tooltip.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let left = event.clientX + 10;
            let top = event.clientY + 10;

            // Prevent tooltip overflow
            if (left + tooltipRect.width > viewportWidth) {
                left = viewportWidth - tooltipRect.width - 10;
            }
            if (top + tooltipRect.height > viewportHeight) {
                top = viewportHeight - tooltipRect.height - 10;
            }

            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top}px`;
        };

        button.addEventListener('mouseenter', (event) => {
            hoverTimeout = showTooltip(event);
        });

        button.addEventListener('mousemove', positionTooltip);

        button.addEventListener('mouseleave', () => {
            hideTooltip();
        });

        // Store the tooltip in the button element for external control
        button._tooltip = tooltip;
    });
}

function getRemainingMiniGameCooldown(gameType) {
    const startTime = localStorage.getItem(`${gameType}CooldownStart`);
    if (!startTime) return 0;

    const elapsed = Date.now() - parseInt(startTime, 10);
    const cooldownMultiplier = miniGamerSkill ? (gamingAddictSkill ? 0.25 : 0.5) : 1;
    const cooldownDuration = miniGameTimeouts[gameType] * cooldownMultiplier;

    return Math.max(cooldownDuration - elapsed, 0);
}

function formatMiniGameTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000) % 60;
    const minutes = Math.floor(milliseconds / 60000);
    return minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
}