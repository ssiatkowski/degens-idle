// Function to open the settings overlay
function openSettings() {
    // First, call saveGameState to ensure everything is saved to localStorage
    saveGameState();

    const settingsOverlay = document.getElementById('settingsOverlay');
    settingsOverlay.style.display = 'flex';
    
    unlockAchievement('Settings');

    // Add a temporary event listener to close the overlay when clicking outside of it
    setTimeout(() => {
        document.addEventListener('click', outsideClickListener);
    }, 0);

    // EnableQuickMode : Use a timeout to ensure the checkbox is fully rendered before setting its state
    setTimeout(() => {
        const enableQuickModeSwitch = document.getElementById('enableQuickMode');
        enableQuickModeSwitch.checked = enableQuickMode;
    }, 0); // Adjust timeout if necessary

    // EnableButtonAnimations : Use a timeout to ensure the checkbox is fully rendered before setting its state
    setTimeout(() => {
        const enableButtonAnimationsSwitch = document.getElementById('enableButtonAnimations');
        enableButtonAnimationsSwitch.checked = enableButtonAnimations;
    }, 0); // Adjust timeout if necessary
}

// Function to close the settings overlay
function closeSettings() {
    const settingsOverlay = document.getElementById('settingsOverlay');
    settingsOverlay.style.display = 'none';
    document.removeEventListener('click', outsideClickListener);
}

// Function to open the donation overlay
function openDonation() {
    document.getElementById('donationOverlay').style.display = 'flex';

    // Add a temporary event listener to close the overlay when clicking outside of it
    setTimeout(() => {
        document.addEventListener('click', outsideDonationClickListener);
    }, 0);
}

// Function to close the donation overlay
function closeDonation() {
    document.getElementById('donationOverlay').style.display = 'none';
    document.removeEventListener('click', outsideDonationClickListener);
}

// Function to handle clicks outside the overlay
function outsideClickListener(event) {
    const settingsContent = document.querySelector('.settings-overlay-content');
    
    if (!settingsContent.contains(event.target)) {
        closeSettings();
    }
}

// Function to handle clicks outside the overlay
function outsideDonationClickListener(event) {
    const donationContent = document.querySelector('.donation-overlay-content');
    
    if (!donationContent.contains(event.target)) {
        closeDonation();
    }
}


function exportSave(fname='degens_idle_save.json') {

    unlockAchievement('Better Safe Than Sorry');

    // Get all localStorage data and stringify it
    const allData = JSON.stringify(localStorage);

    // Create a Blob and trigger download
    const blob = new Blob([allData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Create a link element to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = fname; // Name of the exported file
    document.body.appendChild(a);
    a.click();
    
    // Clean up the DOM elements
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importSave(event) {
    // Get the checkbox status
    const createBackupOnImport = document.getElementById('createBackupOnImportCheckbox').checked;

    // Create a backup if the checkbox is checked
    if (createBackupOnImport) {
        exportSave('backup_degens_idle_save.json');
    }

    // Restart the game and chain the rest of the logic
    restartGame(false, true).then(() => {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = function(e) {
            // Parse the imported file contents
            const importedData = JSON.parse(e.target.result);

            // Clear current localStorage and load everything from the imported data
            localStorage.clear();
            for (const key in importedData) {
                if (importedData.hasOwnProperty(key)) {
                    localStorage.setItem(key, importedData[key]);
                }
            }

            // Call loadGameState to apply the imported game state
            loadGameState();

            // refreshing page to prevent love points from multiplying again (bug workaround)
            window.location.reload();
        };

        reader.readAsText(file);
    });
}






// Add event listeners for opening and closing the settings overlay
document.getElementById('settingsButton').addEventListener('click', openSettings);
document.getElementById('closeSettingsOverlay').addEventListener('click', closeSettings);
document.getElementById('closeSettingsButton').addEventListener('click', closeSettings);

// Add event listener for Donate button in settings overlay
document.getElementById('donateButton').addEventListener('click', openDonation);

// Add event listeners for closing the donation overlay
document.getElementById('closeDonationOverlay').addEventListener('click', closeDonation);
document.getElementById('closeDonationButton').addEventListener('click', closeDonation);

// Add event listener for Export Save button
document.getElementById('exportSaveButton').addEventListener('click', () => exportSave());

// Add event listener for Import Save button
document.getElementById('importSaveButton').addEventListener('click', function() {
    document.getElementById('importFileInput').click();
});

// Add event listener for file input change
document.getElementById('importFileInput').addEventListener('change', importSave);

// Add event listener for Import Save button
document.getElementById('howToPlayButton').addEventListener('click', function() {
    closeSettings();
    unlockAchievement('How to Play');
    showMessageModal('How to Play', '', false, false, 'imgs/modal_imgs/howtoplay.png');
});


// Add event listener for Discord button
document.getElementById('discordButton').addEventListener('click', function() {
    unlockAchievement('Discord');
    window.open('https://discord.gg/7pejTdhY99', '_blank');
});

// Add event listeners for donation buttons
document.getElementById('donateSmallButton').addEventListener('click', function() {
    unlockAchievement('Buy Me a Coffee');
    window.open('https://buymeacoffee.com/ssiatkowski', '_blank'); 
});
document.getElementById('donateMediumButton').addEventListener('click', function() {
    window.open('https://account.venmo.com/payment-link?audience=public&amount=7&note=Keep%20improving%20Degens%20Idle&recipients=%2CSebastian-Siatkowski&txn=pay', '_blank'); // Replace with your Venmo link
});
document.getElementById('donateLargeButton').addEventListener('click', function() {
    unlockAchievement('PigeonPost');
    window.open('pigeon.html', '_blank'); 
});
// Add event listener for Feedback button
document.getElementById('feedbackButton').addEventListener('click', function() {
    unlockAchievement('Make Kuzzi Love You');
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfaQdxaBFCdT789rVTSvFuScEEzlu4rDabjFUX0zkCKinyvKA/viewform?usp=sf_link', '_blank');
});

function toggleAllBuyMarkers(targetState) {
    purchasedUpgrades.forEach(upgrade => {
        const name = upgrade.name;
        const toggleSwitch = document.getElementById(`toggle-${name}`);
        
        if (!upgrade.isFight && !upgrade.isMeditation) {
            if (toggleSwitch) {
                toggleSwitch.checked = targetState;
                toggleSwitch.parentElement.style.display = 'block'; // Make the switch visible
                
                // Save the state to localStorage
                localStorage.setItem(`switchState-${name}`, JSON.stringify(targetState));
            }
        } else {
            if (toggleSwitch) {
                toggleSwitch.checked = false;
                toggleSwitch.parentElement.style.display = 'none'; // Hide the switch for fight upgrades
                
                // Save the state as unchecked in localStorage for fight upgrades
                localStorage.setItem(`switchState-${name}`, JSON.stringify(false));
            }
        }
    });
}



// Open the automation overlay
document.getElementById('automationButton').addEventListener('click', function() {
    const automationContent = document.getElementById('automationContent');
    const saveButton = document.getElementById('saveAutomationSettingsButton');

    // Clear any existing content in the automationContent section
    automationContent.innerHTML = '';

    // Check if all features are locked (none are unlocked)
    const allFeaturesLocked = !autobuyUpgradesSkill && autoPrestigeThreshold === null && !buyMarkersSkill && autoAscendThreshold === null && autoTranscendThreshold === null;

    // If all features are locked, show the "unlock automation" message
    if (allFeaturesLocked) {
        automationContent.innerHTML = "<p>You must unlock automation features first.</p>";
        saveButton.style.display = 'none'; // Hide the save button
    } else {
        saveButton.style.display = 'inline-block';

        // Dynamically add the three-way toggle for Buy Markers if unlocked
        if (buyMarkersSkill) {
            const toggleHtml = `
                <div class="three-way-toggle-container" style="margin-bottom: 15px;">
                    <label for="toggleBuyMarkersSwitch" class="three-way-toggle-label">Toggle All Purchased Upgrades Buy Markers</label>
                    <div class="three-way-toggle">
                        <input type="radio" name="toggleBuyMarkers" id="toggleBuyMarkersNeutral" value="neutral" checked style="display: none;">
                        <input type="radio" name="toggleBuyMarkers" id="toggleBuyMarkersOn" value="on" style="display: none;">
                        <input type="radio" name="toggleBuyMarkers" id="toggleBuyMarkersOff" value="off" style="display: none;">
                        <div class="slider"></div>
                    </div>
                </div>
            `;
            automationContent.innerHTML += toggleHtml;

            // Delay the event listener attachment to ensure the elements are fully rendered
            setTimeout(() => {
                const toggleContainer = document.querySelector('.three-way-toggle-container .three-way-toggle');
                const slider = toggleContainer.querySelector('.slider');
                const toggleNeutral = document.getElementById('toggleBuyMarkersNeutral');
                const toggleOff = document.getElementById('toggleBuyMarkersOff');
                const toggleOn = document.getElementById('toggleBuyMarkersOn');

                // Add click listener to the entire toggle container
                toggleContainer.addEventListener('click', function() {
                    if (toggleNeutral.checked) {
                        toggleOn.checked = true;
                        slider.style.transform = 'translateX(100%)';
                        slider.style.backgroundColor = '#28a745'; // Green color for on
                    } else if (toggleOff.checked) {
                        toggleNeutral.checked = true;
                        slider.style.transform = 'translateX(50%)';
                        slider.style.backgroundColor = 'white'; // Neutral color
                    } else if (toggleOn.checked) {
                        toggleOff.checked = true;
                        slider.style.transform = 'translateX(0%)';
                        slider.style.backgroundColor = '#dc3545'; // Red color for off
                    }
                });

                // Debug: Log to confirm event listener is attached
                console.log("Three-way toggle event listener attached");
            }, 0); // You can adjust the timeout duration if needed
        }

        // Dynamically add Auto-Buy Upgrades setting if unlocked, with space and switch
        if (autobuyUpgradesSkill) {
            const autoBuyHtml = `
                <div style="margin-bottom: 15px;">
                    <label for="autoBuyUpgradesSwitch" style="margin-right: 10px;">Enable Auto-Buy Upgrades</label>
                    <label class="switch">
                        <input type="checkbox" id="autoBuyUpgradesSwitch">
                        <span class="slider"></span>
                    </label>
                </div>
            `;
            automationContent.innerHTML += autoBuyHtml;

            // Use a timeout to ensure the checkbox is fully rendered before setting its state
            setTimeout(() => {
                const autoBuyUpgradesSwitch = document.getElementById('autoBuyUpgradesSwitch');
                autoBuyUpgradesSwitch.checked = (autobuyIntervalId !== null);

                // Debug: Log the current checked state
                console.log("Checkbox checked state after timeout:", autoBuyUpgradesSwitch.checked);
            }, 0); // You can adjust the timeout duration if needed
        }

        // Dynamically add Auto-Prestige Threshold setting if available
        if (autoPrestigeThreshold !== null) {
            const autoPrestigeHtml = `
                <div style="margin-bottom: 15px;">
                    <label for="autoPrestigeThresholdInput">Auto Prestige Threshold:</label>
                    <input type="number" id="autoPrestigeThresholdInput" value="${autoPrestigeThreshold}" step="0.1" style="font-size: 16px;">
                </div>
            `;
            automationContent.innerHTML += autoPrestigeHtml;
        }

        // Dynamically add Auto-Prestige Threshold setting if available
        if (autoBigCrunchThreshold !== null) {
            const autoBigCrunchHtml = `
                <div style="margin-bottom: 15px;">
                    <label for="autoBigCrunchThresholdInput">Auto Big Crunch Threshold:</label>
                    <input type="number" id="autoBigCrunchThresholdInput" value="${autoBigCrunchThreshold}" step="0.1" style="font-size: 16px;">
                </div>
            `;
            automationContent.innerHTML += autoBigCrunchHtml;
        }

        // Dynamically add Auto-Ascend Threshold setting if available
        if (autoAscendThreshold !== null) {
            const autoAscendHtml = `
                <div style="margin-bottom: 15px;">
                    <label for="autoAscendThresholdInput">Auto Ascend Threshold (0 to ${numAscensionUpgrades}):</label>
                    <input type="number" id="autoAscendThresholdInput" value="${autoAscendThreshold}" min="0" max="${numAscensionUpgrades}" style="font-size: 16px;">
                    <span id="ascendWarning" style="display: none; color: red;">Disable auto ascend</span>
                </div>
            `;
            automationContent.innerHTML += autoAscendHtml;
        }

        // Dynamically add Auto-Transcend Threshold setting if available
        if (autoTranscendThreshold !== null) {
            const autoTranscendHtml = `
                <div style="margin-bottom: 15px;">
                    <label for="autoTranscendThresholdInput">Auto Transcend Threshold (0 to ${numPUAscensionUpgrades}):</label>
                    <input type="number" id="autoTranscendThresholdInput" value="${autoTranscendThreshold}" min="0" max="${numPUAscensionUpgrades}" style="font-size: 16px;">
                    <span id="transcendWarning" style="display: none; color: red;">Disable auto transcend</span>
                </div>
            `;
            automationContent.innerHTML += autoTranscendHtml;
        }

        // Add listeners to detect when 0 is selected, including when settings are reopened
        setTimeout(() => {
            const autoAscendInput = document.getElementById('autoAscendThresholdInput');
            const autoTranscendInput = document.getElementById('autoTranscendThresholdInput');
            const ascendWarning = document.getElementById('ascendWarning');
            const transcendWarning = document.getElementById('transcendWarning');

            if (autoAscendInput) {
                // Apply red color if autoAscendThreshold is 0 when reopening settings
                if (parseInt(autoAscendInput.value) === 0) {
                    autoAscendInput.style.color = 'red';
                    ascendWarning.style.display = 'inline';
                }

                autoAscendInput.addEventListener('input', function() {
                    if (parseInt(autoAscendInput.value) === 0) {
                        autoAscendInput.style.color = 'red';
                        ascendWarning.style.display = 'inline';
                    } else {
                        autoAscendInput.style.color = '';
                        ascendWarning.style.display = 'none';
                    }
                });
            }

            if (autoTranscendInput) {
                // Apply red color if autoTranscendThreshold is 0 when reopening settings
                if (parseInt(autoTranscendInput.value) === 0) {
                    autoTranscendInput.style.color = 'red';
                    transcendWarning.style.display = 'inline';
                }

                autoTranscendInput.addEventListener('input', function() {
                    if (parseInt(autoTranscendInput.value) === 0) {
                        autoTranscendInput.style.color = 'red';
                        transcendWarning.style.display = 'inline';
                    } else {
                        autoTranscendInput.style.color = '';
                        transcendWarning.style.display = 'none';
                    }
                });
            }
        }, 0); // Ensure the inputs are rendered first

        // Dynamically add Auto-Fighting setting if autoFightSkill is unlocked
        if (autoFightSkill) {
            const autoFightHtml = `
                <div style="margin-bottom: 15px;">
                    <label for="autoFightSwitch" style="margin-right: 10px;">Enable Auto-Fighting</label>
                    <label class="switch">
                        <input type="checkbox" id="autoFightSwitch">
                        <span class="slider"></span>
                    </label>
                </div>
            `;
            automationContent.innerHTML += autoFightHtml;

            // Use a timeout to ensure the checkbox is fully rendered before setting its state
            setTimeout(() => {
                const autoFightSwitch = document.getElementById('autoFightSwitch');
                autoFightSwitch.checked = autoFightEnabled; // Assume autoFightIntervalId manages auto-fighting
            }, 0); // Adjust timeout if necessary
        }

        
        // Dynamically add Auto-Fighting setting if autoFightSkill is unlocked
        if (hopiumTradeSkill && equilibriumOfHopeSkill) {
            const autoHopiumTradeHtml = `
                <div style="margin-bottom: 15px;">
                    <label for="autoHopiumTradeSwitch" style="margin-right: 10px;">Enable Auto Hopium Trade</label>
                    <label class="switch">
                        <input type="checkbox" id="autoHopiumTradeSwitch">
                        <span class="slider"></span>
                    </label>
                </div>
            `;
            automationContent.innerHTML += autoHopiumTradeHtml;

            // Use a timeout to ensure the checkbox is fully rendered before setting its state
            setTimeout(() => {
                const autoHopiumTradeSwitch = document.getElementById('autoHopiumTradeSwitch');
                autoHopiumTradeSwitch.checked = autoTradeHopiumIntervalId !== null;
            }, 0); // Adjust timeout if necessary
        }

        // Check if any feature is missing and at least one is unlocked
        const someFeaturesMissing = !autobuyUpgradesSkill || autoPrestigeThreshold === null || !buyMarkersSkill || autoAscendThreshold === null || autoTranscendThreshold === null;
        const atLeastOneFeatureUnlocked = autobuyUpgradesSkill || autoPrestigeThreshold !== null || buyMarkersSkill || autoAscendThreshold !== null || autoTranscendThreshold === null;

        if (someFeaturesMissing && atLeastOneFeatureUnlocked) {
            automationContent.innerHTML += `
                <p style="margin-top: 20px; color: #ccc;">
                    You are still missing some automation features. Once unlocked, their settings will appear here.
                </p>`;
        }
    }

    document.getElementById('automationOverlay').style.display = 'flex';

    // Add a listener for clicking outside the overlay to close it
    setTimeout(() => {
        document.addEventListener('click', outsideAutomationClickListener);
    }, 0);
});

// Function to handle clicks outside the automation overlay
function outsideAutomationClickListener(event) {
    const automationContent = document.getElementById('automationContent');
    const automationOverlay = document.getElementById('automationOverlay');
    
    // Close the overlay if the click is outside the automation content
    if (!automationContent.contains(event.target)) {
        automationOverlay.style.display = 'none';
        document.removeEventListener('click', outsideAutomationClickListener); // Remove listener after closing
    }
}

// Save the automation settings and close the overlay
document.getElementById('saveAutomationSettingsButton').addEventListener('click', function() {
    // Auto Prestige Threshold
    if (autoPrestigeThreshold !== null) {
        const thresholdInput = document.getElementById('autoPrestigeThresholdInput').value;
        autoPrestigeThreshold = parseFloat(thresholdInput);

        if (isNaN(autoPrestigeThreshold) || autoPrestigeThreshold <= 0) {
            showImmediateMessageModal('Invalid Number', 'Please enter a valid positive number for the Auto Prestige Threshold.');
            return; // Prevent closing if there's an error
        }
    }

    // Auto Prestige Threshold
    if (autoBigCrunchThreshold !== null) {
        const thresholdInput = document.getElementById('autoBigCrunchThresholdInput').value;
        autoBigCrunchThreshold = parseFloat(thresholdInput);

        if (isNaN(autoBigCrunchThreshold) || autoBigCrunchThreshold <= 0) {
            showImmediateMessageModal('Invalid Number', 'Please enter a valid positive number for the Auto Big Crunch Threshold.');
            return; // Prevent closing if there's an error
        }
    }

    // Auto Ascend Threshold
    if (autoAscendThreshold !== null) {
        const ascendThresholdInput = parseInt(document.getElementById('autoAscendThresholdInput').value);

        if (isNaN(ascendThresholdInput) || ascendThresholdInput < 0 || ascendThresholdInput > numAscensionUpgrades) {
            showImmediateMessageModal('Invalid Number', `Please enter a valid number between 0 and ${numAscensionUpgrades} for the Auto Ascend Threshold.`);
            return; // Prevent closing if there's an error
        } else {
            autoAscendThreshold = ascendThresholdInput;
            if(ascendThresholdInput >= 10){
                unlockAchievement('Max Automation')
            }
        }
    }

    // Auto Transcend Threshold
    if (autoTranscendThreshold !== null) {
        const transcendThresholdInput = parseInt(document.getElementById('autoTranscendThresholdInput').value);

        if (isNaN(transcendThresholdInput) || transcendThresholdInput < 0 || transcendThresholdInput > numPUAscensionUpgrades) {
            showImmediateMessageModal('Invalid Number', `Please enter a valid number between 0 and ${numPUAscensionUpgrades} for the Auto Transcend Threshold.`);
            return; // Prevent closing if there's an error
        } else {
            autoTranscendThreshold = transcendThresholdInput;
        }
    }

    // Handle auto-buy upgrades only if the skill is unlocked
    if (autobuyUpgradesSkill) {
        const autoBuyUpgradesSwitch = document.getElementById('autoBuyUpgradesSwitch');
        console.log("Auto-buy switch state at save:", autoBuyUpgradesSwitch.checked); // Debug log

        if (autoBuyUpgradesSwitch.checked) {
            // Enable auto-buy if it’s not already running
            if (autobuyIntervalId === null) {
                autobuyIntervalId = setInterval(autobuyUpgrades, fasterAutobuyerskill ? 250 : 1500);
                console.log("Auto-buy started"); // Debug log
            }
        } else {
            // Disable auto-buy if the switch is unchecked
            if (autobuyIntervalId !== null) {
                clearInterval(autobuyIntervalId);
                autobuyIntervalId = null;
                console.log("Auto-buy stopped"); // Debug log
            }
            unlockAchievement('Precision Buying');
        }
    }

    // Handle the three-way toggle for buy markers only if the skill is unlocked
    if (buyMarkersSkill) {
        const toggleBuyMarkersOff = document.getElementById('toggleBuyMarkersOff').checked;
        const toggleBuyMarkersOn = document.getElementById('toggleBuyMarkersOn').checked;

        // Call the appropriate function based on the toggle position
        if (toggleBuyMarkersOff) {
            toggleAllBuyMarkers(false);
        } else if (toggleBuyMarkersOn) {
            toggleAllBuyMarkers(true);
        } // Neutral does nothing, so no action needed
    }

    // Handle auto-fighting only if the skill is unlocked and write autoFightEnabled to localstorage
    if (autoFightSkill) {
        const autoFightSwitch = document.getElementById('autoFightSwitch');
        console.log("Auto-fight switch state at save:", autoFightSwitch.checked); // Debug log

        if (autoFightSwitch.checked) {
            autoFightEnabled = true;
        } else {
            autoFightEnabled = false;
        }
        localStorage.setItem('autoFightEnabled', autoFightEnabled);
    }

    // Handle auto-buy upgrades only if the skill is unlocked
    if (hopiumTradeSkill && equilibriumOfHopeSkill) {
        const autoHopiumTradeSwitch = document.getElementById('autoHopiumTradeSwitch');
        console.log("Auto-hopium trade switch state at save:", autoHopiumTradeSwitch.checked); // Debug log

        if (autoHopiumTradeSwitch.checked) {
            // Enable auto-buy if it’s not already running
            if (autoTradeHopiumIntervalId === null) {
                autoTradeHopium();
                console.log("Auto-hopium trade started"); // Debug log
            }
        } else {
            // Disable auto-buy if the switch is unchecked
            if (autobuyIntervalId !== null) {
                clearInterval(autoTradeHopiumIntervalId);
                autoTradeHopiumIntervalId = null;
                console.log("Auto-hopium trade stopped"); // Debug log
            }
        }
    }

    // Close the overlay
    document.getElementById('automationOverlay').style.display = 'none';
    showImmediateMessageModal('Automation Settings Saved', 'Your automation settings have been saved successfully.');
});





// Close the automation overlay (without closing the settings overlay)
document.getElementById('closeAutomationOverlay').addEventListener('click', function() {
    document.getElementById('automationOverlay').style.display = 'none';
});

// Handle the exit button to close the automation overlay
document.getElementById('exitAutomationOverlayButton').addEventListener('click', function() {
    document.getElementById('automationOverlay').style.display = 'none';
});


document.getElementById('numberFormatButton').addEventListener('click', function() {
    if (currentNumberFormat === "Mixed") {
        currentNumberFormat = "Scientific";
    } else if (currentNumberFormat === "Scientific") {
        currentNumberFormat = "Suffixes";
    } else {
        currentNumberFormat = "Mixed";
    }
    this.textContent = `Number Format: ${currentNumberFormat}`;
    
    localStorage.setItem('currentNumberFormat', JSON.stringify(currentNumberFormat));
    window.location.reload();
});
