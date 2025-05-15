// Time-Crunch state
const MAX_CHARGE_TIME = 300; // seconds
let timeCrunchInterval = null;

// DOM refs
const timeCrunchButton = document.getElementById('time-crunch-button');

// Kick off charging (call this once when skill is unlocked)
function startTimeCrunch() {
  if (timeCrunchInterval) return;
  timeCrunchInterval = setInterval(() => {
    // advance your state; clamp at max
    state.timeCrunchValue = Math.min(state.timeCrunchValue + 0.1, MAX_CHARGE_TIME);
    updateTimeCrunchUI();
    // stop when full
    if (state.timeCrunchValue >= MAX_CHARGE_TIME) {
      clearInterval(timeCrunchInterval);
      timeCrunchInterval = null;
    }
  }, 100); // every 100 ms → smooth enough
}

// Paint the UI each tick
function updateTimeCrunchUI() {
  const progress = state.timeCrunchValue / MAX_CHARGE_TIME;   // 0…1
  const degrees = progress * 360;
  // drive the CSS variable
  timeCrunchButton.style.setProperty('--charge-angle', `${degrees}deg`);

  const isReady = progress >= 1;
  timeCrunchButton.classList.toggle('ready', isReady);
  timeCrunchButton.disabled = !isReady;
}

// Button handler (same as yours)
function handleTimeCrunchClick() {
  if (state.timeCrunchValue < MAX_CHARGE_TIME) return;
  
  // Award 50x poke gains for each currency
  Object.entries(state.effects.currencyPerPoke).forEach(([curId, rate]) => {
    if (!rate || state.currencies[curId] == null) return;
    const gain = new Decimal(rate * 50 * state.effects.currencyPerPokeMultiplier[curId]);
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
  state.timeCrunchValue = Math.min(value, MAX_CHARGE_TIME);
  updateTimeCrunchUI();
}

// Example init
function initTimeCrunchCollector() {
  // Only show and initialize if the skill is purchased
  if (!skillMap[12301].purchased) return;
  
  document.getElementById('time-crunch-container').style.display = 'flex';
  // Only start charging if we're not already at max
  if (state.timeCrunchValue < MAX_CHARGE_TIME) {
    startTimeCrunch();
  } else {
    updateTimeCrunchUI();
  }
}
