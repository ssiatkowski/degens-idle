// Time-Crunch state
let timeCrunchInterval = null;

// DOM refs
const timeCrunchButton = document.getElementById('time-crunch-button');

// Kick off charging (call this once when skill is unlocked)
function startTimeCrunch() {
  if (timeCrunchInterval) return;
  timeCrunchInterval = setInterval(() => {
    // advance your state; clamp at max
    state.timeCrunchValue = Math.min(state.timeCrunchValue + 0.1, state.timeCrunchMaxChargeTime);
    updateTimeCrunchUI();
    // stop when full
    if (state.timeCrunchValue >= state.timeCrunchMaxChargeTime) {
      clearInterval(timeCrunchInterval);
      timeCrunchInterval = null;
    }
  }, 100); // every 100 ms → smooth enough
}

// Paint the UI each tick
function updateTimeCrunchUI() {
  const progress = state.timeCrunchValue / state.timeCrunchMaxChargeTime;   // 0…1
  const degrees = progress * 360;
  // drive the CSS variable
  timeCrunchButton.style.setProperty('--charge-angle', `${degrees}deg`);

  const isReady = progress >= 1;
  timeCrunchButton.classList.toggle('ready', isReady);
  timeCrunchButton.disabled = !isReady;
}

// Button handler (same as yours)
function handleTimeCrunchClick() {
  if (state.timeCrunchValue < state.timeCrunchMaxChargeTime) return;
  
  // Award poke gains for each currency
  Object.entries(state.effects.currencyPerPoke).forEach(([curId, rate]) => {
    if (!rate || state.currencies[curId] == null) return;
    const gain = new Decimal(rate * (skillMap[12302].purchased ? 100 : 25) * state.effects.currencyPerPokeMultiplier[curId]);
    state.currencies[curId] = state.currencies[curId].plus(gain);
  });
  
  // Reset and restart charging
  state.timeCrunchValue = 0;
  updateTimeCrunchUI();
  startTimeCrunch();
  
  // Update currency display
  updateCurrencyBar();
}

// If you load saved state on pageload, just do:
function setTimeCrunchValue(value) {
  state.timeCrunchValue = Math.min(value, state.timeCrunchMaxChargeTime);
  updateTimeCrunchUI();
}

// Example init
function initTimeCrunchCollector() {
  // Only show and initialize if the skill is purchased
  if (!skillMap[12301].purchased) return;
  
  document.getElementById('time-crunch-container').style.display = 'flex';
  // Only start charging if we're not already at max
  if (state.timeCrunchValue < state.timeCrunchMaxChargeTime) {
    startTimeCrunch();
  } else {
    updateTimeCrunchUI();
  }
}
