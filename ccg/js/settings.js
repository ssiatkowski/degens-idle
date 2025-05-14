// Settings tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const resetGameButton = document.getElementById('resetGameButton');
    const resetWarningModal = document.getElementById('resetWarningModal');
    const confirmResetButton = document.getElementById('confirmResetButton');
    const cancelResetButton = document.getElementById('cancelResetButton');

    // Save/Load buttons
    const saveToFileBtn = document.getElementById('saveToFileBtn');
    const loadFromFileBtn = document.getElementById('loadFromFileBtn');
    const saveToClipboardBtn = document.getElementById('saveToClipboardBtn');
    const loadFromClipboardBtn = document.getElementById('loadFromClipboardBtn');

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
        localStorage.clear();
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
        navigator.clipboard.readText().then(text => {
            try {
                // Validate the save data
                JSON.parse(text);
                localStorage.setItem('ccgSave', text);
                alert('Save data loaded successfully!');
                window.location.reload();
            } catch (error) {
                alert('Invalid save data in clipboard!');
            }
        }).catch(err => {
            alert('Failed to read from clipboard: ' + err);
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === resetWarningModal) {
            resetWarningModal.style.display = 'none';
        }
    });
}); 