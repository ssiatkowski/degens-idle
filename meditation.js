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
let windSpeed = 0;

// Define the meditation challenges
const meditationChallenges = {
    "Yin and Yang": {
        duration: 15,
        focus: 2,
        ballCount: 2,
        arenaSize: 600,
        ballSize: 30,
        ballSizeDelta: 3,
        velocity: 1,
    },
    "Existentialism": {
        duration: 10,
        focus: 4,
        ballCount: 5,
        arenaSize: 450,
        ballSize: 50,
        ballSizeDelta: 5,
        velocity: 1.05,
    },
    "Altruism": {
        duration: 16,
        focus: 1,
        ballCount: 15,
        arenaSize: 600,
        ballSize: 12,
        ballSizeDelta: 2,
        velocity: 0.85,
    },
    "Rastafarianism": {
        duration: 12,
        focus: 12,
        ballCount: 5,
        arenaSize: 420,
        ballSize: 42,
        ballSizeDelta: 4.2,
        velocity: 3,
    },
    "Dualism": {
        duration: 11,
        focus: 1,
        ballCount: 5,
        arenaSize: 350,
        ballSize: 100,
        ballSizeDelta: 10,
        velocity: 1.5,
    },
};

// Function to initialize the meditation game
function startMeditationGame(challengeName, backgroundImage) {
    return new Promise((resolve) => {
        resolveFunction = resolve; // Store the resolve function
        // Set the current challenge based on the challengeName
        const challenge = meditationChallenges[challengeName];
        currentChallengeName = challengeName;
        // Use the calculateTimerReduction function to adjust the duration
        meditationTimer = challenge.duration * calculateTimerReduction(yachtMoney);
        
        meditationFocus = challenge.focus + Math.max(0, Math.floor(Math.log10(serenity))); // Serenity gives additional focus (log10)
        ballCount = Math.max(1, challenge.ballCount - calculateBallCountReduction()); // Hopium reduces ball count
        arenaSize = challenge.arenaSize;
        ballSize = challenge.ballSize;
        ballSize = calculateBallSize();
        ballSizeDelta = challenge.ballSizeDelta;
        baseVelocity = challenge.velocity * calculateVelocityReduction();
        turnRadius = calculateTurnRadius();
        respawnTime = 100;
        respawnTime = calculateRespawnTime();
        gravityStrength = calculateGravity();
        balls = []; // Reset balls array

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
        setupMeditationArena();

        // Start the meditation game loop, updating every 25ms
        meditationInterval = setInterval(() => {
            updateMeditationGame(resolve);
        }, 25); // Update every 25ms for smooth animation
    });
}

// Function to set up the meditation arena
function setupMeditationArena() {
    // Clear the arena
    const arena = document.getElementById('arena');
    if (arena) {
        arena.innerHTML = ''; // Remove previous balls
        arena.style.width = `${arenaSize}px`;
        arena.style.height = `${arenaSize}px`;
    }

    // Create balls in the arena, spaced near the center
    for (let i = 0; i < ballCount; i++) {
        createBall(i);
    }

    // Update meditation info (e.g., challenge name, timer, focus)
    updateMeditationInfo();

    scaleArena();
}

// Function to create a ball with no overlap and random velocity/direction
function createBall(index) {
    const ball = document.createElement('div');
    ball.classList.add('meditation-ball');
 
    // Add random variation within the delta range
    const thisBallSize = Math.max(Math.round(ballSize + (Math.random() * 2 * ballSizeDelta - ballSizeDelta)), 5);

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
    document.getElementById('meditationFocus').innerText = meditationFocus;
    document.getElementById('meditationBallCount').innerText = ballCount;
    document.getElementById('meditationBallSize').innerText = ballSize; // Ball size (diameter)
    document.getElementById('meditationArenaSize').innerText = arenaSize;
    document.getElementById('meditationVelocity').innerText = baseVelocity.toFixed(2);
    document.getElementById('meditationTurnRadius').innerText = turnRadius.toFixed(2);
    document.getElementById('meditationGravity').innerText = gravityStrength.toFixed(2); // Display current gravity value
    document.getElementById('meditationRespawnTime').innerText = (respawnTime/1000).toFixed(3); // Display respawn time
    document.getElementById('meditationWind').innerText = windSpeed.toFixed(2) + ' m/s'; // Display wind speed
}

// Function to update the meditation game state
function updateMeditationGame(resolve) {
    // Update the timer
    meditationTimer -= 0.025; // Reduce time every 25ms
    document.getElementById('meditationTimer').innerText = meditationTimer.toFixed(1); // Update the timer display

    // Check for end conditions
    if (meditationTimer <= 0 && meditationFocus > 0) {
        clearInterval(meditationInterval);
        resolve(true); // Player wins the challenge
        stopMeditationGame();
        showPopupTooltip(`Successful Meditation: ${currentChallengeName}`, color='#4682B4', 2)
        return;
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

// Function to move the balls according to their velocity, direction, and gravity towards the center
function moveBalls() {
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
        const pullX = gravityStrength * (deltaXToCenter / arenaSize);
        const pullY = gravityStrength * (deltaYToCenter / arenaSize);
        
        // Adjust ball velocity based on the gravitational pull
        const deltaX = ball.velocity * Math.cos(ball.direction) + pullX;
        const deltaY = ball.velocity * Math.sin(ball.direction) + pullY;

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
    meditationFocus--;
    document.getElementById('meditationFocus').innerText = meditationFocus; // Update focus display

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
    // Calculate the scaling factor based on Copium, starting at 1e100
    let scalingFactor = 1 - (Math.max(0, Math.log10(copium) - 100) / 200);

    // Apply the scaling factor to the base ball size
    let newBallSize = Math.round(ballSize * scalingFactor);

    // Ensure the ball size is at least 5 (to avoid balls being too small)
    newBallSize = Math.max(newBallSize, 5);

    return newBallSize;
}

// Function to calculate turn radius based on Delusion
function calculateTurnRadius() {
    // Calculate the scaling factor based on Delusion, starting at 1e100
    let scalingFactor = 1 + (Math.max(0, Math.log10(delusion) - 100) * 0.05);

    // Apply the scaling factor to the base turn radius
    let newTurnRadius = 0.25 * scalingFactor;

    return newTurnRadius;
}


// Calculate the reduction factor based on yachtMoney
function calculateTimerReduction() {
    const logValue = Math.log10(yachtMoney); // Get the logarithmic value of yachtMoney
    const reductionFactor = Math.max(0.01, Math.min(1, 1 - ((logValue - 100) / 200)));
    return reductionFactor;
}

// Function to calculate respawn time based on trollPoints
function calculateRespawnTime() {
    // Calculate the scaling factor based on trollPoints, starting at 1e100
    let scalingFactor = 1 + (Math.max(0, Math.log10(trollPoints) - 100) / 10);

    // Calculate the new respawn time by applying the scaling factor
    let newRespawnTime = respawnTime * scalingFactor;

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

// Function to calculate velocity based on knowledge
function calculateVelocityReduction() {
    if (knowledge <= 1e75) {
        return 1; // Base velocity for knowledge <= 1e75
    } else {
        // Calculate the reduction factor based on knowledge (halves every 25 orders of magnitude starting at 1e100)
        let reductionFactor = Math.pow(0.5, (Math.log10(knowledge) - 100) / 25);
        
        // Ensure velocity doesn't exceed 1
        return Math.max(0.5 * reductionFactor * temporalDragReduction, 0);
    }
}

// Function to calculate gravity based on power
function calculateGravity() {
    if (power <= 1e20) {
        return 0; // Gravity is 0 if power is <= 1e20
    } else {
        // Calculate gravity based on power, increasing by 1 for every 20 orders of magnitude starting from 1e40
        return (Math.log10(power) - 40) / 20 + 1;
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
