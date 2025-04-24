let meditationInterval;
let resolveFunction;

let meditationTimer;
let meditationFocus;
let ballCount;
let arenaSize;
let currentChallengeName;
let balls = [];
let gravityStrength;
let baseVelocity;
let turnRadius;
let ballSize;
let ballSizeDelta;
let respawnTime;
let windSpeed;
let windDirection;
let deismDoubled = false;

let fullFocusPreserved = true;

let skepticismRandomnessFactor = 3;
let isSkepticismUnwinnable = false;

let respawnFactor;
let livesPerBall;

const windDirections = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

// Define the meditation challenges
const meditationChallenges = {
    "Yin and Yang": {
        duration: 13.5,
        focus: 2,
        ballCount: 2,
        arenaSize: 600,
        ballSize: 30,
        ballSizeDelta: 3,
        velocity: 1.1,
        wind: 0,
        respawnFactor: 1,
        livesPerBall: 1,
    },
    "Existentialism": {
        duration: 10,
        focus: 4,
        ballCount: 5,
        arenaSize: 450,
        ballSize: 50,
        ballSizeDelta: 5,
        velocity: 1.15,
        wind: 0,
        respawnFactor: 1,
        livesPerBall: 1,
    },
    "Altruism": {
        duration: 17,
        focus: 1,
        ballCount: 16,
        arenaSize: 600,
        ballSize: 22,
        ballSizeDelta: 3,
        velocity: 1.05,
        wind: 0,
        respawnFactor: 1,
        livesPerBall: 1.4,
    },
    "Rastafarianism": {
        duration: 13,
        focus: 11,
        ballCount: 5,
        arenaSize: 420,
        ballSize: 52,
        ballSizeDelta: 4.2,
        velocity: 3.3,
        wind: 0,
        respawnFactor: 1,
        livesPerBall: 1,
    },
    "Dualism": {
        duration: 12,
        focus: 1,
        ballCount: 4,
        arenaSize: 350,
        ballSize: 155,
        ballSizeDelta: 5,
        velocity: 1.55,
        wind: 0,
        respawnFactor: 1,
        livesPerBall: 1,
    },
    "Libertarianism": {
        duration: 20,
        focus: 8,
        ballCount: 5,
        arenaSize: 520,
        ballSize: 110,
        ballSizeDelta: 30,
        velocity: 8.8,
        wind: 5,
        respawnFactor: 1,
        livesPerBall: 1,
    },
    "Hinduism": {
        duration: 32,
        focus: 50,
        ballCount: 25,
        arenaSize: 400,
        ballSize: 55,
        ballSizeDelta: 15,
        velocity: 3.55,
        wind: 2,
        respawnFactor: 1,
        livesPerBall: 1.2,
    },
    "Shinto": {
        duration: 21.5,
        focus: 1,
        ballCount: 1,
        arenaSize: 275,
        ballSize: 100,
        ballSizeDelta: 0,
        velocity: 3,
        wind: 14,
        respawnFactor: 0.5,
        livesPerBall: 1,
    },
    "Stoicism": {
        duration: 36,
        focus: 10,
        ballCount: 12,
        arenaSize: 700,
        ballSize: 150,
        ballSizeDelta: 20,
        velocity: 4.9,
        wind: 2,
        respawnFactor: 1,
        livesPerBall: 5,
    },
    "Deism": {
        duration: 66,
        focus: 1,
        ballCount: 7,
        arenaSize: 500,
        ballSize: 300,
        ballSizeDelta: 0,
        velocity: 12.2,
        wind: 0,
        respawnFactor: 1,
        livesPerBall: 2.5,
    },
    "Skepticism": {
        duration: 125,
        focus: 10,
        ballCount: 8,
        arenaSize: 450,
        ballSize: 200,
        ballSizeDelta: 10,
        velocity: 13,
        wind: 2,
        respawnFactor: 1,
        livesPerBall: 1,
    },
    "Buddhism": {
        duration: 380,
        focus: 100,
        ballCount: 12,
        arenaSize: 800,
        ballSize: 360,
        ballSizeDelta: 0,
        velocity: 50,
        wind: 0,
        respawnFactor: 1,
        livesPerBall: 8,
    },
    "Christianity": {
        duration: 500,
        focus: -10,
        ballCount: 9,
        arenaSize: 550,
        ballSize: 400,
        ballSizeDelta: 0,
        velocity: 57,
        wind: 0,
        respawnFactor: 0.1,
        livesPerBall: 3,
    },
    "Epicureanism": {
        duration: 1150,
        focus: 1000,
        ballCount: 20,
        arenaSize: 600,
        ballSize: 600,
        ballSizeDelta: 20,
        velocity: 90,
        wind: 10,
        respawnFactor: 5.9,
        livesPerBall: 1,
    },
    "Agnosticism": {
        duration: 1700,
        focus: 1,
        ballCount: 1,
        arenaSize: 382,
        ballSize: 800,
        ballSizeDelta: 0,
        velocity: 86,
        wind: 0,
        respawnFactor: 1,
        livesPerBall: 101,
    },
    "Dimensional Weaving": {
        duration: 1e7,
        focus: 50,
        ballCount: 100,
        arenaSize: 500,
        ballSize: 28000,
        ballSizeDelta: 10,
        velocity: 1000,
        wind: 0,
        respawnFactor: 0.1,
        livesPerBall: 1,
    },
};

// Function to initialize the meditation game
function startMeditationGame(challengeName, backgroundImage, stageNumber = 1, preservedFocus = null, stageVelocityIncrease = 1, stageArenaSizeChange = 1, stageExtraLivesPerBall = 0) {
    return new Promise((resolve) => {
        resolveFunction = resolve; // Store the resolve function
        // Set the current challenge based on the challengeName
        const challenge = meditationChallenges[challengeName];
        currentChallengeName = challengeName;
        // Use the calculateTimerReduction function to adjust the duration
        meditationTimer = (challenge.duration - studyAcceleratorReduction) * calculateTimerReduction(yachtMoney);

        meditationFocus = preservedFocus !== null ? preservedFocus : challenge.focus + Math.max(0, Math.floor(Math.log10(serenity))); // Preserve focus if passed
        ballCount = Math.max(1, challenge.ballCount - calculateBallCountReduction()); // Hopium reduces ball count
        arenaSize = Math.floor((spaceContinuumStretchSkill ? challenge.arenaSize * 1.1 : challenge.arenaSize) * stageArenaSizeChange);
        ballSize = challenge.ballSize;
        ballSize = calculateBallSize();
        ballSizeDelta = challenge.ballSizeDelta;
        baseVelocity = challenge.velocity * calculateVelocityReduction();
        if (stageNumber > 1) {
            baseVelocity *= stageVelocityIncrease;
        }
        turnRadius = calculateTurnRadius();
        respawnTime = 100;
        respawnFactor = challenge.respawnFactor;
        respawnTime = calculateRespawnTime();
        gravityStrength = calculateGravity();
        balls = []; // Reset balls array
        windSpeed = masterOfElementsSkill ? challenge.wind / 2 : challenge.wind; // Set wind speed from the challenge
        windDirection = windDirections[Math.floor(Math.random() * windDirections.length)]; // Pick a random direction

        fullFocusPreserved = true;
        livesPerBall = Math.max(challenge.livesPerBall - (steadyFocusSkill ? 1 : 0) , 1) + stageExtraLivesPerBall;

        let arenaMessage = '';
        let fontColor = '#5CE65C';
        let fontSize = '20px';

        isSkepticismUnwinnable = false;
        if (currentChallengeName === 'Skepticism' && stageNumber > 1) {
            if (stageVelocityIncrease > 3 && stageArenaSizeChange < 0.67 && stageExtraLivesPerBall > 2) {
                unlockAchievement('Unwinnable');
                arenaMessage = 'Unwinnable';
                fontColor = 'red'
                fontSize = '30px';
                isSkepticismUnwinnable = true;
            } else if (stageVelocityIncrease < 1.25 && stageArenaSizeChange > 0.7 && stageExtraLivesPerBall < 0.25) {
                unlockAchievement('Too Easy');
            }
        }

        if (currentChallengeName === 'Dualism' && ballCount == 1) {
            ballCount = 2;
        }
        if (currentChallengeName === 'Buddhism' && !purchasedUpgradesSet.has("Kung Fu Bunny")) {
            unlockAchievement('Buddhist Bunny');
            respawnTime += 500;
            livesPerBall = Math.max(livesPerBall - 1, 1);
            arenaMessage = 'The Bunny makes balls respawn 0.5s slower and reduces focus loss by 1';
            noGimmicksUsed = false;
            fontColor = '#FFBF00';
            fontSize = '40px';
        } else if (currentChallengeName === 'Christianity' && !purchasedUpgradesSet.has("Christian Logic")) {
            unlockAchievement('Theological Reasoning');
            livesPerBall = Math.max(livesPerBall - 1, 1);
            baseVelocity *= 0.9;
            arenaMessage = 'Through applying logic, you reduce focus loss by 1 and ball velocity by 10%';
            noGimmicksUsed = false;
            fontSize = '28px';
        } else if (currentChallengeName === 'Epicureanism') {
            if (!purchasedUpgradesSet.has("First Pizza Meme") && !purchasedUpgradesSet.has("Second Pizza Meme")){
                unlockAchievement('Slice of Euphoria');
                ballCount = Math.max(ballCount - 2, 1);
                respawnFactor += 1;
                respawnTime = 100;
                respawnTime = calculateRespawnTime();
                arenaMessage = 'Pizzas remove 2 balls and increase ball respawn time by 1 second';
                noGimmicksUsed = false;
                fontColor = '#B163FF';
                fontSize = '32px';
            }
            if (respawnTime / 1000 > meditationTimer) {
                unlockAchievement('Where did everybody go?');
                console.log(`Respawn Time: ${respawnTime / 1000}, Meditation Timer: ${meditationTimer}`);
            }
            if (meditationTimer > 1000) {
                unlockAchievement(`Ain't Nobody Got Time for That`);
            }
        } else if (currentChallengeName === 'Skepticism' && purchasedUpgradesSet.has("Religious Books") && stageNumber === 2) {
            unlockAchievement('Cured Skepticism');
            skepticismRandomnessFactor = 2.5;
            if (!isSkepticismUnwinnable) {
                arenaMessage = 'Religious books help reduce randomness by 15%';
                fontSize = '24px'
            }
            noGimmicksUsed = false;
        } else if (currentChallengeName === 'Agnosticism') {
            const isWisdomPattern = ['W', 'I', 'S', 'D', 'O', 'M'].every((letter, index) =>
                availableUpgrades[index] && availableUpgrades[index].name.startsWith(letter)
            );

            // Do something if the pattern matches "WISDOM"
            if (isWisdomPattern) {
                unlockAchievement('Apply Wisdom');
                turnRadius *= 1.3;
                arenaMessage = 'WISDOM improves your turn radius by 30%';
                noGimmicksUsed = false;
                fontSize = '30px';
            }

            const isInsightPattern = ['I', 'N', 'S', 'I', 'G', 'H', 'T'].every((letter, index) =>
                availableUpgrades[index] && availableUpgrades[index].name.startsWith(letter)
            );
            // Do something if the pattern matches "WISDOM"
            if (isInsightPattern) {
                unlockAchievement('Wisdom, not Insight');
            }

        } else if (currentChallengeName === "Dimensional Weaving") {
            gravityStrength /= 10;
            turnRadius /= 10;
        } else {
            skepticismRandomnessFactor = 3;
        }

        // Show the meditation overlay
        const meditationOverlay = document.getElementById('meditationOverlay');
        if (meditationOverlay) {
            meditationOverlay.style.display = 'flex'; // Display the overlay
        }

        // Set the background image for the arena
        const arena = document.getElementById('arena');
        if (arena) {
            arena.style.backgroundImage = `url(${backgroundImage})`;
            arena.style.backgroundSize = 'cover';
        }

        // Initialize the meditation arena and balls
        setupMeditationArena(stageNumber);

        if (arenaMessage !== '') {
            showArenaMessage(arenaMessage, fontColor, fontSize);
        } else if (challengeName == 'Deism' && stageNumber == 2) {
            showArenaMessage('Not So Fast');
        } else if (challengeName == 'Skepticism' && stageNumber == 2) {
            showArenaMessage('Experience Randomness');
        } 



        

        meditationInterval = setInterval(() => {
            updateMeditationGame(resolve, stageNumber);
        }, 25); // Update every 25ms for smooth animation

    });
}



// Function to set up the meditation arena
function setupMeditationArena(stageNumber) {
    // Clear the arena
    const arena = document.getElementById('arena');
    if (arena) {
        arena.innerHTML = ''; // Remove previous balls
        arena.style.width = `${arenaSize}px`;
        arena.style.height = `${arenaSize}px`;
    }


    // Create balls in the arena, spaced near the center
    for (let i = 0; i < ballCount; i++) {
        createBall(i, stageNumber);
    }

    // Update meditation info (e.g., challenge name, timer, focus)
    updateMeditationInfo();

    scaleArena();
}

const pastelColors = [
    '#FFB3BA', // Pastel pink
    '#FFDFBA', // Pastel orange
    '#FFFFBA', // Pastel yellow
    '#BAFFB3', // Pastel green
    '#BAE1FF', // Pastel blue
    '#FFBAFF', // Pastel purple
    '#FFC3A0', // Light peach
    '#D5AAFF', // Lavender
    '#C9D5B5', // Sage green
    '#F6D6B2'  // Light tan
];

// Function to create a ball with no overlap and random velocity/direction
function createBall(index, stageNumber) {
    const ball = document.createElement('div');
    ball.classList.add('meditation-ball');

    // Add random variation within the delta range
    const thisBallSize = Math.max(Math.round(ballSize + (Math.random() * 2 * ballSizeDelta - ballSizeDelta)), 15);

    // Calculate position for each ball in a circular pattern around the center
    const angle = (index / ballCount) * 2 * Math.PI; // Evenly space balls around a circle
    const radius = 50; // Distance from the center (small circle)
    const centerX = (arenaSize / 2) + radius * Math.cos(angle);
    const centerY = (arenaSize / 2) + radius * Math.sin(angle);

    // Subtract ball's radius so it positions correctly by its center
    ball.style.width = `${thisBallSize}px`;
    ball.style.height = `${thisBallSize}px`;
    ball.style.left = `${centerX - thisBallSize / 2}px`; // Adjust for ball size
    ball.style.top = `${centerY - thisBallSize / 2}px`;

    // Set the color of the balls based on the stage
    if (stageNumber === 2) {
        ball.style.backgroundColor = 'red';
    } else {
        if (currentChallengeName === 'Buddhism') {
            // Choose a random color from the pastelColors array
            const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
            ball.style.backgroundColor = randomColor; // Set the background color to the random pastel color
        } else if (currentChallengeName === "Dimensional Weaving") {
            ball.style.backgroundColor = ["white", "black"][Math.floor(Math.random() * 2)];
        } else{
            ball.style.backgroundColor = 'orange'; // Assuming blue or any other color for stage 1
        }
    }

    // Set initial direction (random angle) and velocity
    const direction = Math.random() * 2 * Math.PI; // Random angle in radians

    // Store ball's current state (position, direction, velocity)
    balls.push({
        element: ball,
        x: centerX, // Position of the center
        y: centerY, // Position of the center
        direction: direction,
        velocity: baseVelocity,
        radius: thisBallSize / 2 // Adjust radius according to ball size
    });

    document.getElementById('arena').appendChild(ball);
}


// Function to update meditation info
function updateMeditationInfo() {
    document.getElementById('meditationChallengeName').innerText = currentChallengeName;
    document.getElementById('meditationTimer').innerText = meditationTimer.toFixed(1);
    document.getElementById('meditationFocus').innerHTML = formatNumber(meditationFocus);
    document.getElementById('meditationBallCount').innerText = ballCount;
    document.getElementById('meditationBallSize').innerText = ballSize; // Ball size (diameter)
    document.getElementById('meditationArenaSize').innerText = arenaSize;
    document.getElementById('meditationVelocity').innerText = baseVelocity.toFixed(2);
    document.getElementById('meditationTurnRadius').innerText = turnRadius.toFixed(2);
    document.getElementById('meditationGravity').innerText = gravityStrength.toFixed(2); // Display current gravity value
    document.getElementById('meditationRespawnTime').innerText = (respawnTime / 1000).toFixed(3); // Display respawn time

    // Conditionally display Wind, Respawn Factor, and Lives Per Ball
    const windDisplay = document.getElementById('meditationWindRow');
    if (windSpeed !== 0) {
        windDisplay.style.display = 'block';
        document.getElementById('meditationWind').innerText = `${formatNumber(windSpeed)} ${windDirection}`;
    } else {
        windDisplay.style.display = 'none';
    }

    const respawnFactorDisplay = document.getElementById('meditationRespawnFactorRow');
    if (respawnFactor !== 1) {
        respawnFactorDisplay.style.display = 'block';
        document.getElementById('meditationRespawnFactor').innerText = formatNumber(respawnFactor);
    } else {
        respawnFactorDisplay.style.display = 'none';
    }

    const livesPerBallDisplay = document.getElementById('meditationLivesPerBallRow');
    if (livesPerBall !== 1 || currentChallengeName === 'Epicureanism') {
        livesPerBallDisplay.style.display = 'block';
        document.getElementById('meditationLivesPerBall').innerText = formatNumber(livesPerBall);
    } else {
        livesPerBallDisplay.style.display = 'none';
    }
}


function updateMeditationGame(resolve, stageNumber) {
    // Update the timer
    meditationTimer -= 0.025; // Reduce time every 25ms
    document.getElementById('meditationTimer').innerText = meditationTimer.toFixed(1); // Update the timer display

    // Check for end conditions
    if (meditationTimer <= 0 && meditationFocus > 0) {
        if (currentChallengeName === 'Deism' && stageNumber === 1) {
            // Flash "Not So Fast" message and then restart the game
            clearInterval(meditationInterval); // Stop the current game loop
            if(ballCount > (meditationChallenges['Deism'].ballCount - calculateBallCountReduction())){
                unlockAchievement('Where did the other ball go?');
            }
            startMeditationGame(currentChallengeName, document.getElementById('arena').style.backgroundImage, 2, meditationFocus, 2).then(resolve);
            return;
        } else if (currentChallengeName === 'Skepticism' && stageNumber === 1) {
            // Flash "Not So Fast" message and then restart the game
            clearInterval(meditationInterval); // Stop the current game loop
            startMeditationGame(currentChallengeName, document.getElementById('arena').style.backgroundImage, 2, meditationFocus, 1 + (Math.random() * skepticismRandomnessFactor), parseFloat(((Math.floor(Math.random() * 60) + 40) / 100).toFixed(2)), parseFloat((Math.random() * (skepticismRandomnessFactor - 0.01) + 0.01).toFixed(2))).then(resolve);
            return;
        } else {
            clearInterval(meditationInterval);
            resolve(true); // Player wins the challenge
            stopMeditationGame();
            showPopupTooltip(`Successful Meditation: ${currentChallengeName}`, color='#4682B4', 1);
            if (fullFocusPreserved ) {
                if (currentChallengeName === 'Altruism') { unlockAchievement('The Giver'); }
                else if (currentChallengeName === 'Rastafarianism') { unlockAchievement('Tamed Lion'); }
            }
            if (isSkepticismUnwinnable) {
                unlockAchievement('Win the Unwinnable');
            }
            if (currentChallengeName === 'Dualism' && ballSize > 154 && ballCount == 3 && yachtMoney < 0) {
                unlockAchievement('Trinitism');
            }
            if (currentChallengeName === 'Agnosticism') {
                if (noGimmicksUsed) {
                    unlockAchievement('Obie Trice');
                }
                if (["Study Accelerator", "Stellar Meditation", "Altruistic Embrace", "Steady Focus", "Rewarding Meditations", "Master of Elements", "Space Continuum Stretch", "Look Past Distractions", "Intrinsic Meditation"]
                    .every(skillName => !loveHallSkills.find(skill => skill.name === skillName)?.unlocked)) {

                    unlockAchievement('Meditation Maniac');
                }
            }
            if (currentChallengeName === 'Christianity' && godModeLevel == 0 && puGodLevel == 0) {
                unlockAchievement('First Commandment');
            }
            return;
        }
    }

    if (meditationFocus <= 0) {
        clearInterval(meditationInterval);
        resolve(false); // Player loses the challenge
        stopMeditationGame();
        return;
    }

    // Move balls and detect collisions
    moveBalls();
    checkBallCollisions();
    checkOutOfBounds();
}



// Function to move the balls according to their velocity, direction, wind, and gravity towards the center
function moveBalls() {
    // Convert wind direction to x and y components
    let windX = 0;
    let windY = 0;

    switch (windDirection) {
        case 'N': windY = -1; break;
        case 'NE': windX = 1; windY = -1; break;
        case 'E': windX = 1; break;
        case 'SE': windX = 1; windY = 1; break;
        case 'S': windY = 1; break;
        case 'SW': windX = -1; windY = 1; break;
        case 'W': windX = -1; break;
        case 'NW': windX = -1; windY = -1; break;
    }

    balls.forEach((ball) => {
        // Calculate the angle toward the center of the arena
        const angleToCenter = Math.atan2((arenaSize / 2) - ball.y, (arenaSize / 2) - ball.x);

        // Calculate the difference between current direction and angle to center
        let angleDifference = angleToCenter - ball.direction;

        // Normalize the angle difference to the range (-π, π)
        if (angleDifference > Math.PI) angleDifference -= 2 * Math.PI;
        if (angleDifference < -Math.PI) angleDifference += 2 * Math.PI;

        const turnRadiusRadians =  turnRadius / (180 / Math.PI)
        // Turn the ball slowly toward the center
        if (Math.abs(angleDifference) > turnRadiusRadians) {
            ball.direction += Math.sign(angleDifference) * turnRadiusRadians; // Turn toward the center
        } else {
            ball.direction = angleToCenter; // Snap to the center if within turn rate
        }

        // Apply gravitational pull toward the center
        const deltaXToCenter = (arenaSize / 2) - ball.x;
        const deltaYToCenter = (arenaSize / 2) - ball.y;

        // Normalize the pull to be small and proportional
        const pullX = gravityStrength * (deltaXToCenter / arenaSize / 4);
        const pullY = gravityStrength * (deltaYToCenter / arenaSize / 4);

        // Adjust ball velocity based on the gravitational pull
        const deltaX = ball.velocity * Math.cos(ball.direction) + pullX + windSpeed * windX;
        const deltaY = ball.velocity * Math.sin(ball.direction) + pullY + windSpeed * windY;

        // Update ball's position
        ball.x += deltaX;
        ball.y += deltaY;

        // Apply updated position to the ball's DOM element, adjusting for radius
        ball.element.style.left = `${ball.x - ball.radius}px`; // Subtract radius to center ball
        ball.element.style.top = `${ball.y - ball.radius}px`; // Subtract radius to center ball
    });
}





// Function to check if a ball leaves the arena and decrement a life if so, with a respawn delay
function checkOutOfBounds() {
    // If game has ended (focus is zero or below), do nothing
    if (meditationFocus <= 0) return;

    balls.forEach((ball) => {
        // Skip the ball if it is currently respawning
        if (ball.isRespawning) return;

        // Calculate the distance from the center of the arena to the edge of the ball (subtracting the radius)
        const distanceFromCenterToEdge = Math.sqrt(
            Math.pow(ball.x - arenaSize / 2, 2) + Math.pow(ball.y - arenaSize / 2, 2)
        ) + ball.radius - 2; // Add the ball's radius to check if its edge has gone out of bounds (2 pixels overlap)

        // If the ball's edge is outside the arena, it is out of bounds
        if (distanceFromCenterToEdge > arenaSize / 2) {
            // Set the ball as respawning to avoid further out-of-bounds checks
            ball.isRespawning = true;

            // Decrement focus when out of bounds
            handleOutOfBounds(ball);
        }
    });
}

// Function to handle what happens when a ball goes out of bounds (or can't be placed)
function handleOutOfBounds(ball) {
    // Decrement a life when out of bounds
    meditationFocus -= livesPerBall;

    if (currentChallengeName === 'Epicureanism') {
        livesPerBall += 1;
        document.getElementById('meditationLivesPerBall').innerText = formatNumber(livesPerBall);
    }

    fullFocusPreserved = false;
    if (currentChallengeName === 'Dualism' && ballCount == 2){
        unlockAchievement('Out of Body Experience');
    }
    document.getElementById('meditationFocus').innerText = formatNumber(meditationFocus); // Update focus display

    // Hide the ball temporarily and reset after the respawn delay
    ball.element.style.display = 'none'; // Hide the ball

    // Delay the respawn by respawnTime
    setTimeout(() => {
        // If the game has ended during the respawn delay, do nothing
        if (meditationFocus <= 0) return;

        // Add a limit to the number of attempts to place the ball
        let attempts = 0;
        const maxAttempts = 200; // Limit the number of placement attempts

        let newX, newY;
        let overlap;
        do {
            const angle = Math.random() * 2 * Math.PI; // Random angle
            const radius = ballSize/4 + Math.random() * arenaSize/5; // Respawn close to the center (radius between 30px and 80px)
            newX = arenaSize / 2 + radius * Math.cos(angle);
            newY = arenaSize / 2 + radius * Math.sin(angle);

            overlap = balls.some(
                (otherBall) =>
                    otherBall !== ball &&
                    Math.sqrt(Math.pow(newX - otherBall.x, 2) + Math.pow(newY - otherBall.y, 2)) < ball.radius * 2
            );
            attempts++;
        } while (overlap && attempts < maxAttempts); // Ensure no overlap with other balls, but limit attempts

        if (attempts >= maxAttempts) {
            showPopupTooltip(`No Space For Ball - Losing Focus`, color='#FF5733', 1.5);
            // Treat as out of bounds, reduce focus, and restart respawn
            handleOutOfBounds(ball);
            return;
        }

        ball.x = newX;
        ball.y = newY;
        ball.direction = Math.random() * 2 * Math.PI; // New random direction
        ball.velocity = baseVelocity; // Reset velocity to the starting value
        ball.isRespawning = false; // Reset the respawning flag

        // Show the ball again and update its position
        ball.element.style.display = 'block'; // Show the ball
        ball.element.style.left = `${ball.x - ball.radius}px`; // Center the ball
        ball.element.style.top = `${ball.y - ball.radius}px`; // Center the ball

        // Check if focus is zero and stop the game
        if (meditationFocus <= 0) {
            clearInterval(meditationInterval);
            stopMeditationGame(); // End the game
        }
    }, respawnTime); // 0.1-second respawn delay
}





function checkBallCollisions() {
    for (let i = 0; i < balls.length - 1; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            const ball1 = balls[i];
            const ball2 = balls[j];

            // Calculate the distance between the two balls
            const dx = ball2.x - ball1.x;
            const dy = ball2.y - ball1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Check if balls are colliding (distance less than sum of radii)
            if (distance < ball1.radius + ball2.radius) {
                // Calculate the collision angle
                const collisionAngle = Math.atan2(dy, dx);

                // Separate the balls to avoid overlap
                const overlap = (ball1.radius + ball2.radius) - distance;
                const offsetX = Math.cos(collisionAngle) * overlap / 2;
                const offsetY = Math.sin(collisionAngle) * overlap / 2;

                ball1.x -= offsetX;
                ball1.y -= offsetY;
                ball2.x += offsetX;
                ball2.y += offsetY;

                // Calculate new velocities for both balls after collision
                handleBallCollision(ball1, ball2, collisionAngle);
            }
        }
    }
}

// Function to handle ball collision physics
function handleBallCollision(ball1, ball2, collisionAngle) {
    // Get velocities in the direction of the collision
    const velocity1 = ball1.velocity;
    const velocity2 = ball2.velocity;

    // Find the current velocities of both balls in terms of the collision angle
    const speed1 = velocity1 * Math.cos(ball1.direction - collisionAngle);
    const speed2 = velocity2 * Math.cos(ball2.direction - collisionAngle);

    // Calculate new velocities after collision (no added velocity)
    const newSpeed1 = speed2; // Ball 1 gets ball 2's speed
    const newSpeed2 = speed1; // Ball 2 gets ball 1's speed

    // Update ball1 velocity and direction
    ball1.velocity = Math.sqrt(Math.pow(newSpeed1, 2) + Math.pow(velocity1 * Math.sin(ball1.direction - collisionAngle), 2));
    ball1.direction = Math.atan2(
        velocity1 * Math.sin(ball1.direction - collisionAngle),
        newSpeed1
    ) + collisionAngle;

    // Update ball2 velocity and direction
    ball2.velocity = Math.sqrt(Math.pow(newSpeed2, 2) + Math.pow(velocity2 * Math.sin(ball2.direction - collisionAngle), 2));
    ball2.direction = Math.atan2(
        velocity2 * Math.sin(ball2.direction - collisionAngle),
        newSpeed2
    ) + collisionAngle;
}



// Function to stop the meditation game
function stopMeditationGame() {
    // Hide the meditation overlay
    const meditationOverlay = document.getElementById('meditationOverlay');
    if (meditationOverlay) {
        meditationOverlay.style.display = 'none'; // Hide the overlay
    }

    clearInterval(meditationInterval); // Stop the game loop
}


document.getElementById('meditationStopButton').addEventListener('click', () => {
    // Treat the "Stop Meditation" action as if the player lost all focus
    meditationFocus = 0; // Set focus to 0 to trigger loss condition
    clearInterval(meditationInterval); // Stop the meditation loop
    stopMeditationGame(); // End the game and hide the overlay
    resolveFunction(false); // Resolve the promise to indicate a loss
});

// Function to calculate ball size based on Copium
function calculateBallSize() {
    if (copium < 0) {return ballSize;}
    let intervals = Math.max(0, (Math.log10(copium) - 100) / 20);
    let newBallSize = Math.max(Math.round(ballSize * Math.pow(0.5, intervals)), 15);
    return newBallSize;
}

// Function to calculate turn radius based on Delusion
function calculateTurnRadius() {
    if (delusion < 0) {return 0.25;}
    // Calculate the scaling factor based on Delusion, starting at 1e100
    let scalingFactor = 1 + (Math.max(0, Math.log10(delusion) - 100) * 0.1);

    // Apply the scaling factor to the base turn radius
    let newTurnRadius = 0.26 * scalingFactor;

    return newTurnRadius;
}


// Calculate the reduction factor based on yachtMoney
function calculateTimerReduction() {
    if (yachtMoney <= 10) {return 1;}
    const logValue = Math.log10(yachtMoney); // Get the logarithmic value of yachtMoney
    const reductionFactor = Math.pow(2, -(logValue - 100) / 15); // Scales the reduction by 50% for every increase of 15 in log value
    return Math.max(0.000001, Math.min(1, reductionFactor)); // Ensure the reduction factor is between 0.000001 and 1
}

// Function to calculate respawn time based on trollPoints
function calculateRespawnTime() {
    if (trollPoints < 0) {return respawnTime;}
    // Calculate the scaling factor: double the respawn time for every 20-log interval after 100
    let scalingFactor = Math.pow(2, Math.max(0, (Math.log10(trollPoints) - 100) / 20));

    // Calculate the new respawn time by applying the scaling factor
    let newRespawnTime = respawnTime * scalingFactor * respawnFactor;

    return newRespawnTime;
}

// Ensure ball count reduction is applied only if hopium is positive
function calculateBallCountReduction() {
    if (hopium > 1e100) {
        // Calculate reduction based on hopium, starting from 1e100, with steps of 1 for every 10 orders of magnitude
        return Math.floor((Math.log10(hopium) - 100) / 10) + lookPastDistractions;
    }
    return lookPastDistractions; // No reduction if hopium is <= 1e100
}

// Function to calculate velocity reduction based on knowledge
function calculateVelocityReduction() {
    if (knowledge <= 1e75) {
        return 1; // Base velocity for knowledge <= 1e75
    } else {
        // Calculate the number of 20-OOM intervals past 1e75
        let intervals = (Math.log10(knowledge) - 75) / 20;

        // Calculate the reduction factor by halving for each 20-OOM interval
        let reductionFactor = Math.pow(0.5, intervals);

        return reductionFactor * temporalDragReduction;
    }
}

// Function to calculate gravity based on power
function calculateGravity() {
    if (power <= 1e18) {
        return 0; // Gravity is 0 if power is <= 1e18
    } else {
        // Calculate gravity based on power, increasing by 1 for every 15 orders of magnitude starting from 1e18
        return Math.max(0, (Math.log10(power) - 33) / 15 + 1);
    }
}


function scaleArena() {
    const arena = document.getElementById('arena');
    const meditationWrapper = document.getElementById('meditationWrapper');

    if (arena && meditationWrapper) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Calculate scale factors for both width and height
        const widthScaleFactor = screenWidth / arenaSize * 0.8;
        const heightScaleFactor = screenHeight / arenaSize * 0.6;

        // Use the smaller of the two scale factors
        let scaleFactor = Math.min(widthScaleFactor, heightScaleFactor);

        // Only apply scaling if the factor is less than 1
        if (scaleFactor < 1) {
            meditationWrapper.style.transform = `scale(${scaleFactor})`;
        } else {
            // Reset scaling if the factor is 1 or greater
            meditationWrapper.style.transform = 'none';
        }

        // Optional: You can still apply `transformOrigin` if needed
        // meditationWrapper.style.transformOrigin = 'top left';
    }
}

function showArenaMessage(messageContent, fontColor = 'red', fontSize = '32px') {
    return new Promise((resolve) => {
        const message = document.createElement('div');
        message.classList.add('arena-message');
        message.innerText = messageContent;
        message.style.color = fontColor;
        message.style.fontSize = fontSize;
        message.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Transparent dark gray background
        message.style.padding = '10px'; // Add some padding for better appearance
        message.style.borderRadius = '5px'; // Optional: rounded corners

        document.getElementById('arena').appendChild(message);

        setTimeout(() => {
            message.remove();
            resolve();
        }, 3000); // Display message for 3 seconds
    });
}
