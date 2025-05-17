// Harvester state
let harvesterInterval = null;

// DOM elements
const harvesterContainer = document.getElementById('harvester-container');
const harvesterCounter = document.querySelector('.harvester-counter');
const harvesterButton = document.getElementById('harvester-button');

// Initialize harvester
function initHarvester() {
  // Check if the skill is purchased
  if (skillMap[12001].purchased) {
    harvesterContainer.style.display = 'flex';
    startHarvester();
  }
}

// Start the harvester
function startHarvester() {
  if (harvesterInterval) return;
  
  harvesterInterval = setInterval(() => {
    state.harvesterValue += 0.01 * (skillMap[12002].purchased ? 2 : 1);
    updateHarvesterUI();
  }, 1000);
}

// Update harvester UI
function updateHarvesterUI() {
    harvesterCounter.innerHTML = formatDuration(state.harvesterValue, 2);
    
    // Enable button if value >= 1 and black hole is on cooldown
  
    // Check if harvesterValue is greater than 5 seconds and cooldown is not done
    if (state.harvesterValue > 1 && state.remainingCooldown > 0) {
      // Apply green filter class
      harvesterButton.classList.add('green-filter');
    } else {
      // Remove green filter class if conditions are not met
      harvesterButton.classList.remove('green-filter');
    }
  }

// Handle harvester button click
function handleHarvesterClick() {

  // 1) Bail out if we can't spend or we're already done
  if (state.harvesterValue < 1 || state.remainingCooldown <= 0) {
    return;
  }

  // 3) Cancel any in-flight bar animation or tick interval
  clearInterval(blackHoleTimer);
  if (fillAnim) anime.remove(globalFill);

  if (state.harvesterValue >= state.remainingCooldown) {
    // 4a) We can pay off the cooldown entirely
    clearInterval(blackHoleTimer);
    state.harvesterValue -= state.remainingCooldown;
    state.remainingCooldown = 0;
    if (countdownEl) countdownEl.remove();
    tryEnableHole();

    // Instantly clear the bar
    globalFill.style.transition = 'none';
    globalFill.style.width = '0%';
    void globalFill.offsetWidth;

  } else {
    // 4b) We can only chip away at the remaining time
    state.remainingCooldown -= state.harvesterValue;
    state.harvesterValue = 0;

    // Kick off a fresh countdown + bar
    resumeCooldown();
  }

  // 5) Update the UI to reflect our new state.harvesterValue
  updateHarvesterUI();
}