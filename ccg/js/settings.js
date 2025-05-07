// Settings tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const resetGameButton = document.getElementById('resetGameButton');
    const resetWarningModal = document.getElementById('resetWarningModal');
    const confirmResetButton = document.getElementById('confirmResetButton');
    const cancelResetButton = document.getElementById('cancelResetButton');

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

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === resetWarningModal) {
            resetWarningModal.style.display = 'none';
        }
    });
}); 