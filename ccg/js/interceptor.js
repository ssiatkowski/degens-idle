// Interceptor state
let interceptorInterval = null;
let countdownInterval = null;

// DOM elements
const interceptorContainer = document.getElementById('interceptor-container');
const interceptorCounter = document.querySelector('.interceptor-counter');
const interceptorButton = document.getElementById('interceptor-button');

// Initialize interceptor
function initSpaceBendingInterceptor() {
  // Check if the skill is purchased
  if (skillMap[12201].purchased) {
    interceptorContainer.style.display = 'flex';
    startInterceptor();
    
    // If interceptor was active when game was closed, restore its state
    if (state.interceptorActive) {
      updateInterceptorUI();
      startInterceptorCountdown();
    }
  }
}

// Start the interceptor
function startInterceptor() {
  if (interceptorInterval) return;
  
  interceptorInterval = setInterval(() => {
    if (!state.interceptorActive) {
      state.interceptorValue += 0.01 * (skillMap[12202].purchased ? 2 : 1);
      updateInterceptorUI();
    }
  }, 1000);
}

// Update interceptor UI
function updateInterceptorUI() {
  interceptorCounter.innerHTML = formatDuration(state.interceptorValue, 2);
  interceptorButton.classList.toggle('active', state.interceptorActive);
}

// Start the interceptor countdown
function startInterceptorCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);
  
  countdownInterval = setInterval(() => {
    state.interceptorValue = Math.max(0, state.interceptorValue - 1);
    updateInterceptorUI();

    if (state.interceptorValue <= 0) {
      clearInterval(countdownInterval);
      state.interceptorActive = false;
      updateInterceptorUI();
    }
  }, 1000);
}

// Handle interceptor button click
function handleInterceptorClick() {
  if (state.interceptorActive || state.interceptorValue < 1) return;

  state.interceptorActive = true;
  updateInterceptorUI();
  startInterceptorCountdown();

  if (skillMap[12203].purchased && !holeBtn.disabled) {
    performPoke();
  }
}

// Increment interceptor value
function incrementInterceptor() {
  if (!state.interceptorActive && skillMap[12201].purchased) {
    state.interceptorValue += 0.01 * (skillMap[12202].purchased ? 2 : 1) * (skillMap[12205].purchased ? 2.5 : 1);
    updateInterceptorUI();
  }
}

// Check if interceptor is active
function isInterceptorActive() {
  return state.interceptorActive;
} 