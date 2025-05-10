// Interceptor state
let interceptorInterval = null;
let interceptorActive = false;

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
  }
}

// Start the interceptor
function startInterceptor() {
  if (interceptorInterval) return;
  
  interceptorInterval = setInterval(() => {
    if (!interceptorActive) {
      state.interceptorValue += 0.01 * (skillMap[12202].purchased ? 2 : 1);
      updateInterceptorUI();
    }
  }, 1000);
}

// Update interceptor UI
function updateInterceptorUI() {
  interceptorCounter.innerHTML = formatDuration(state.interceptorValue, 2);
  interceptorButton.classList.toggle('active', interceptorActive);
}

// Handle interceptor button click
function handleInterceptorClick() {
  if (interceptorActive || state.interceptorValue < 1) return;

  interceptorActive = true;
  updateInterceptorUI();

  // Start countdown
  const countdownInterval = setInterval(() => {
    state.interceptorValue = Math.max(0, state.interceptorValue - 1);
    updateInterceptorUI();

    if (state.interceptorValue <= 0) {
      clearInterval(countdownInterval);
      interceptorActive = false;
      updateInterceptorUI();
    }
  }, 1000);
}

// Increment interceptor value
function incrementInterceptor() {
  if (!interceptorActive && skillMap[12201].purchased) {
    state.interceptorValue += 0.01 * (skillMap[12202].purchased ? 2 : 1);
    updateInterceptorUI();
  }
}

// Check if interceptor is active
function isInterceptorActive() {
  return interceptorActive;
} 