// Settings tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const resetGameButton = document.getElementById('resetGameButton');
    const resetWarningModal = document.getElementById('resetWarningModal');
    const confirmResetButton = document.getElementById('confirmResetButton');
    const cancelResetButton = document.getElementById('cancelResetButton');
    const darkThemeToggle = document.getElementById('darkThemeToggle');
    const getUnstuckBtn = document.getElementById('getUnstuckBtn');

    // Save/Load buttons
    const saveToFileBtn = document.getElementById('saveToFileBtn');
    const loadFromFileBtn = document.getElementById('loadFromFileBtn');
    const saveToClipboardBtn = document.getElementById('saveToClipboardBtn');
    const loadFromClipboardBtn = document.getElementById('loadFromClipboardBtn');

    // Create unstuck warning modal
    const unstuckWarningModal = document.createElement('div');
    unstuckWarningModal.id = 'unstuckWarningModal';
    unstuckWarningModal.className = 'unstuck-modal-overlay';
    unstuckWarningModal.style.display = 'none';
    unstuckWarningModal.innerHTML = `
        <div class="unstuck-modal-content">
            <h2>Get Unstuck</h2>
            <p>This feature is intended only for when you accidentally used realm filters with an astronomically high cooldown. This will:</p>
            <ul>
                <li>Remove any active cooldown</li>
                <li>Reset all currencies to 0</li>
                <li>Keep all your other progress</li>
            </ul>
            <p class="warning-text">This can only be used once per day!</p>
            <div class="modal-buttons">
                <button id="confirmUnstuckBtn" class="settings-button warning-button">Confirm</button>
                <button id="cancelUnstuckBtn" class="settings-button safe-button">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(unstuckWarningModal);

    // Initialize dark theme from localStorage
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    if (isDarkTheme) {
        document.body.classList.add('dark-theme');
        darkThemeToggle.classList.add('active');
        darkThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Theme';
    }

    // Dark theme toggle handler
    darkThemeToggle.addEventListener('click', function() {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('darkTheme', isDark);
        darkThemeToggle.classList.toggle('active');
        darkThemeToggle.innerHTML = isDark ? 
            '<i class="fas fa-sun"></i> Light Theme' : 
            '<i class="fas fa-moon"></i> Dark Theme';
    });

    // Reset game button click handler
    resetGameButton.addEventListener('click', function() {
        resetWarningModal.style.display = 'flex';
    });

    // Cancel reset button click handler
    cancelResetButton.addEventListener('click', function() {
        resetWarningModal.style.display = 'none';
    });

    // Confirm reset button click handler
    confirmResetButton.addEventListener('click', function() {
        // Clear all game data from localStorage
        localStorage.removeItem('ccgSave');
        localStorage.removeItem('lastUnstuck');

        // Reload the page to restart the game
        window.location.reload();
    });

    // Save to File
    saveToFileBtn.addEventListener('click', function() {
        const saveData = localStorage.getItem('ccgSave');
        if (!saveData) {
            alert('No save data found!');
            return;
        }

        const ownedByR      = rarities.reduce((acc, r) => (acc[r] = 0, acc), {});
        cards.forEach(c => {
            if (c.quantity > 0) {
                ownedByR[c.rarity]      += c.quantity;
            }
        });
        const totalOwned      = Object.values(ownedByR).reduce((a,b) => a + b, 0);

        const blob = new Blob([saveData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cosmic-collection-save-${formatNumber(totalOwned)}-cards.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // Load from File
    loadFromFileBtn.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (!file) return;

            // Pause the currency interval
            clearInterval(currencyInterval);

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const saveData = e.target.result;
                    // Validate the save data
                    JSON.parse(saveData);
                    localStorage.setItem('ccgSave', saveData);
                    alert('Save data loaded successfully!');
                    window.location.reload();
                } catch (error) {
                    alert('Invalid save file!');
                    // Resume the interval if load fails
                    currencyInterval = setInterval(updateCurrencyAndSave, 1000);
                }
            };
            reader.readAsText(file);
        };

        input.click();
    });

    // Save to Clipboard
    saveToClipboardBtn.addEventListener('click', function() {
        const saveData = localStorage.getItem('ccgSave');
        if (!saveData) {
            alert('No save data found!');
            return;
        }

        navigator.clipboard.writeText(saveData).then(() => {
            alert('Save data copied to clipboard!');
        }).catch(err => {
            alert('Failed to copy to clipboard: ' + err);
        });
    });

    // Load from Clipboard
    loadFromClipboardBtn.addEventListener('click', function() {
        // Pause the currency interval
        clearInterval(currencyInterval);

        navigator.clipboard.readText().then(text => {
            try {
                // Validate the save data
                JSON.parse(text);
                localStorage.setItem('ccgSave', text);
                alert('Save data loaded successfully!');
                window.location.reload();
            } catch (error) {
                alert('Invalid save data in clipboard!');
                // Resume the interval if load fails
                currencyInterval = setInterval(updateCurrencyAndSave, 1000);
            }
        }).catch(err => {
            alert('Failed to read from clipboard: ' + err);
            // Resume the interval if clipboard read fails
            currencyInterval = setInterval(updateCurrencyAndSave, 1000);
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === resetWarningModal) {
            resetWarningModal.style.display = 'none';
        }
        if (event.target === unstuckWarningModal) {
            unstuckWarningModal.style.display = 'none';
        }
    });

    // Get Unstuck functionality
    getUnstuckBtn.addEventListener('click', function() {
        const lastUnstuck = localStorage.getItem('lastUnstuck');
        const now = Date.now();
        
        if (lastUnstuck && (now - parseInt(lastUnstuck)) < 24 * 60 * 60 * 1000) {
            const hoursLeft = Math.ceil((24 * 60 * 60 * 1000 - (now - parseInt(lastUnstuck))) / (60 * 60 * 1000));
            alert(`You can only use Get Unstuck once per day. Please try again in ${hoursLeft} hours.`);
            return;
        }
        
        unstuckWarningModal.style.display = 'flex';
    });

    // Cancel unstuck
    document.getElementById('cancelUnstuckBtn').addEventListener('click', function() {
        unstuckWarningModal.style.display = 'none';
    });

    // Confirm unstuck
    document.getElementById('confirmUnstuckBtn').addEventListener('click', function() {
        // Clear cooldown
        state.remainingCooldown = 0;
        if (fillAnim) anime.remove(globalFill);
        clearInterval(blackHoleTimer);
        globalFill.style.width = '0%';
        
        // Reset currencies
        Object.keys(state.currencies).forEach(key => {
            state.currencies[key] = new Decimal(0);
        });
        
        // Update UI
        updateCurrencyBar();
        holeBtn.disabled = false;
        holeBtn.classList.remove('disabled');
        
        // Save timestamp
        localStorage.setItem('lastUnstuck', Date.now().toString());
        
        // Close modal
        unstuckWarningModal.style.display = 'none';
        
        // Show confirmation
        alert('Successfully reset cooldown and currencies. You can use this feature again in 24 hours.');
    });

    // Initialize card size slider
    const cardSizeSlider = document.getElementById('cardSizeSlider');
    if (cardSizeSlider) {
        // Load saved card size on startup
        const savedCardSize = localStorage.getItem('cardSizeScale');
        if (savedCardSize) {
            cardSizeScale = parseFloat(savedCardSize);
            cardSizeSlider.value = cardSizeScale * 100;
            document.getElementById('cardSizeValue').textContent = Math.round(cardSizeScale * 100) + '%';
            updateCardSize(cardSizeScale);
        }

        cardSizeSlider.addEventListener('input', (e) => {
            const scale = e.target.value / 100;
            cardSizeScale = scale;
            updateCardSize(scale);
            localStorage.setItem('cardSizeScale', scale.toString());
        });
    }
});

// Add this at the top with other state variables
let cardSizeScale = 1;

// Add this to the loadState function
function loadState() {
  // ... existing loadState code ...
  
  // Load card size scale
  const savedCardSize = localStorage.getItem('cardSizeScale');
  if (savedCardSize) {
    cardSizeScale = parseFloat(savedCardSize);
    updateCardSize(cardSizeScale);
  }
}

// Add this to the saveState function
function saveState() {
  // ... existing saveState code ...
  
  // Save card size scale
  localStorage.setItem('cardSizeScale', cardSizeScale.toString());
}

// Add this new function
function updateCardSize(scale) {
  const holeDrawArea = document.querySelector('#tab-content-hole .draw-area');
  if (holeDrawArea) {
    holeDrawArea.style.setProperty('--card-scale', scale);
  }
  
  // Update the slider and value display
  const slider = document.getElementById('cardSizeSlider');
  const valueDisplay = document.getElementById('cardSizeValue');
  if (slider && valueDisplay) {
    slider.value = scale * 100;
    valueDisplay.textContent = Math.round(scale * 100) + '%';
  }
} 