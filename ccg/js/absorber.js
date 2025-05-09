// Absorber state
let absorberActive = false;

// DOM elements
const absorberContainer = document.getElementById('absorber-container');
const absorberCounter = document.querySelector('.absorber-counter');
const absorberButton = document.getElementById('absorber-button');

// Initialize absorber
function initGravitationalWaveAbsorber() {
  // Check if the skill is purchased
  const absorberSkill = window.skills.find(s => s.id === 12002); // Update with correct skill ID
  if (absorberSkill && absorberSkill.purchased) {
    absorberContainer.style.display = 'flex';
    updateAbsorberUI();
  }
}

// Update absorber UI
function updateAbsorberUI() {
    // show the new counter
    absorberCounter.textContent = state.absorberValue.toFixed(2) + 'x';
    
    // toggle classes based on current state
    absorberButton.classList.toggle('active', absorberActive);
    absorberButton.classList.toggle('maxed', state.absorberValue >= 5 && !absorberActive);
  }

// Handle absorber button click
function handleAbsorberClick() {
  if (state.absorberValue == 1) return; // Don't allow activation if at 1x
  
  absorberActive = true;
  updateAbsorberUI();
}

// Increment absorber value
function incrementAbsorber() {
    if (state.absorberValue < 5) {
        // 1) Add
        let next = state.absorberValue + 0.05;
        // 2) Round to 2 decimals
        next = Math.round(next * 100) / 100;
        // 3) Clamp at 5
        state.absorberValue = Math.min(next, 5);
        updateAbsorberUI();
      }
  }

// Reset absorber after use
function resetAbsorber() {
  state.absorberValue = 1;
  absorberActive = false;
  updateAbsorberUI();
}

// Get current multiplier
function getAbsorberMultiplier() {
  if (absorberActive) {
    const multiplier = state.absorberValue;
    resetAbsorber();
    return multiplier;
  }
  return 1;
}