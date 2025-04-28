// Function to open the settings overlay
function openSettings() {
    // First, call saveGameState to ensure everything is saved to localStorage
    saveGameState();
    showPopupTooltip('Game Saved', 'gray', 0.5);

    const settingsOverlay = document.getElementById('settingsOverlay');
    settingsOverlay.style.display = 'flex';

    // load the state of the autoSaveCheckbox and set the checkbox per the value
    const autoSaveCheckbox = document.getElementById('autoSaveCheckbox');
    autoSaveCheckbox.checked = JSON.parse(localStorage.getItem('isAutoSaveEnabled')) || false;
    
    unlockAchievement('Settings');

    assAssSequence += 'S';
    checkAssAssSequence();

    // Add a temporary event listener to close the overlay when clicking outside of it
    setTimeout(() => {
        document.addEventListener('click', outsideClickListener);
    }, 0);

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

const assAssWinningSequence = 'ASSASSASSASSASS';
let assAssSequence = '123456789012345';

function checkAssAssSequence(){
    assAssSequence = assAssSequence.slice(-assAssWinningSequence.length); // Keep only the last n characters
    if (assAssSequence === assAssWinningSequence) {
        unlockAchievement('Big Sean - Dance');
        assAssSequence = '123456789012345';
    } else if (assAssSequence.slice(-12) === assAssWinningSequence.slice(-12)) {
        showPopupTooltip('♫ ASS ♪ ASS ♪ ASS ♪ ASS ♫', 'black', 1);
    } else if (assAssSequence.slice(-9) === assAssWinningSequence.slice(-9)) {
        showPopupTooltip('♫ ASS ♪ ASS ♪ ASS ♫', 'black', 1);
    } else if (assAssSequence.slice(-6) === assAssWinningSequence.slice(-6)) {
        showPopupTooltip('♫ ASS ♪ ASS ♫', 'black', 1);
    } else if (!achievementsMap.get('Big Sean - Dance').isUnlocked &&assAssSequence.slice(-3) === assAssWinningSequence.slice(-3)) {
        showPopupTooltip('♫ ♪ ASS ♪ ♫', 'black', 1);
    } 
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

// Add an event listener for the 'change' event
autoSaveCheckbox.addEventListener("change", function () {
    // Update the variable based on the checkbox state
    isAutoSaveEnabled = autoSaveCheckbox.checked;
    console.log("Auto Save Enabled:", isAutoSaveEnabled); // For debugging
    //save the state of autoSaveCheckbox checkbox
    localStorage.setItem('isAutoSaveEnabled', isAutoSaveEnabled);
});

// Initialize a Set to store unique export dates
let exportDates = new Set(JSON.parse(localStorage.getItem('exportDates')) || []); // Ensure it's a Set

function exportSave() {
    // Get the current date and time in local time (YYYY-MM-DD_HH-MM)
    const now = new Date();
    const currentDateTime = now.toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    }).replace(/[/,]/g, "-").replace(/, /g, "_").replace(/:/g, ".").replace(" ", "");

    // Determine the filename based on the conditions
    let fname;
    const balanceSkillsUnlocked = Array.from(balanceHallSkills.values()).filter(skill => skill.unlocked).length;
    const loveSkillsUnlocked = loveHallSkills.filter(skill => skill.unlocked).length;
    const powerSkillsUnlocked = powerHallSkills.filter(skill => skill.unlocked).length;
    const librarySkillsUnlocked = librarySkills.filter(skill => skill.unlocked).length;
    const achievementsUnlocked = Array.from(achievementsMap.values()).filter(achievement => achievement.isUnlocked).length;

    if (balanceSkillsUnlocked > 0) {
        fname = `degens_idle_${currentDateTime}_HoB-${balanceSkillsUnlocked}_LP-${formatNumber(lovePoints)}_Ach-${achievementsUnlocked}`;
    } else if (loveSkillsUnlocked > 0) {
        fname = `degens_idle_${currentDateTime}_HoL-${loveSkillsUnlocked}_LP-${formatNumber(lovePoints)}_Ach-${achievementsUnlocked}`;
    } else if (powerSkillsUnlocked > 0) {
        fname = `degens_idle_${currentDateTime}_HoP-${powerSkillsUnlocked}_HoK-${librarySkillsUnlocked}_BCM-${formatNumber(bigCrunchMultiplier)}_Ach-${achievementsUnlocked}`;
    } else if (bigCrunchMultiplier > 1) {
        fname = `degens_idle_${currentDateTime}_HoK-${librarySkillsUnlocked}_BCM-${formatNumber(bigCrunchMultiplier)}_Ach-${achievementsUnlocked}`;
    } else if (puGodLevel > 0) {
        fname = `degens_idle_${currentDateTime}_PUG-${puGodLevel}_GM-${godModeLevel}_Ach-${achievementsUnlocked}`;
    } else {
        fname = `degens_idle_${currentDateTime}_GM-${godModeLevel}_Pres-${formatNumber(epsMultiplier)}_Ach-${achievementsUnlocked}`;
    }

    const currentDate = now.toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    const previousNumExportDates = exportDates.size; // Store the previous size of the Set
    exportDates.add(currentDate);

    if (exportDates.size >= 7 && !achievementsMap.get('One Week of Saving').isUnlocked) {
        unlockAchievement('One Week of Saving');
    } else if (exportDates.size >= 14 && !achievementsMap.get('Two Weeks of Saving').isUnlocked) {
        unlockAchievement('Two Weeks of Saving');
    } else if (exportDates.size >= 30 && !achievementsMap.get('One Month of Saving').isUnlocked) {
        unlockAchievement('One Month of Saving');
    } else if (exportDates.size >= 50 && !achievementsMap.get('Fifty Days of Saving').isUnlocked) {
        unlockAchievement('Fifty Days of Saving');
    } else if (exportDates.size > previousNumExportDates) {
        showPopupTooltip(`Days with save exports: ${exportDates.size}`);
    }

    localStorage.setItem('exportDates', JSON.stringify([...exportDates]));

    unlockAchievement('Better Safe Than Sorry');

    // Get all localStorage data and stringify it
    const allData = JSON.stringify(localStorage);

    // Create a Blob and trigger download
    const blob = new Blob([allData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Create a link element to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = fname + '.json'; // Use the dynamic filename with date and time
    document.body.appendChild(a);
    a.click();

    // Clean up the DOM elements
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importSave(event) {

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


// Function to compress and copy the save data to clipboard
function copySave() {
    const currentDate = new Date().toISOString().split('T')[0];
    const previousNumExportDates = exportDates.size;
    exportDates.add(currentDate);

    if (exportDates.size >= 7 && !achievementsMap.get('One Week of Saving').isUnlocked) {
        unlockAchievement('One Week of Saving');
    } else if (exportDates.size >= 14 && !achievementsMap.get('Two Weeks of Saving').isUnlocked) {
        unlockAchievement('Two Weeks of Saving');
    } else if (exportDates.size >= 30 && !achievementsMap.get('One Month of Saving').isUnlocked) {
        unlockAchievement('One Month of Saving');
    } else if (exportDates.size >= 50 && !achievementsMap.get('Fifty Days of Saving').isUnlocked) {
        unlockAchievement('Fifty Days of Saving');
    } else if (exportDates.size > previousNumExportDates) {
        showPopupTooltip(`Days with save exports: ${exportDates.size}`);
    }


    localStorage.setItem('exportDates', JSON.stringify([...exportDates]));

    // Get all localStorage data and stringify it
    const allData = JSON.stringify(localStorage);

    // Compress the data using LZ-String and convert it to Base64
    const compressedData = LZString.compressToBase64(allData);

    // Copy compressed data to clipboard
    navigator.clipboard.writeText(compressedData).then(() => {
        showPopupTooltip('Save copied to clipboard!', 'green', 1.5);
        unlockAchievement('Magical Text');
    }).catch(err => {
        showPopupTooltip('Failed to copy save!', 'red', 1.5);
    });
}

// Function to paste the compressed save data, decompress it, and load it into the game
function pasteSave() {
    // Prompt the user to input their pasted save string
    const compressedInput = prompt("Please paste your compressed save string:");

    if (!compressedInput) {
        return; // Exit if no input provided
    }

    try {
        // Decompress the data using LZ-String
        const decompressedData = LZString.decompressFromBase64(compressedInput);

        if (!decompressedData) {
            throw new Error("Invalid compressed data");
        }

        const importedData = JSON.parse(decompressedData);

        // Restart the game and then apply the imported data
        restartGame(false, true).then(() => {
            // Clear current localStorage and load the imported data
            localStorage.clear();
            for (const key in importedData) {
                if (importedData.hasOwnProperty(key)) {
                    localStorage.setItem(key, importedData[key]);
                }
            }

            // Call loadGameState to apply the imported game state
            loadGameState();

            // Refresh the page to ensure the game state is properly loaded (optional)
            window.location.reload();
        });
    } catch (err) {
        showPopupTooltip('Failed to import save: Invalid data!', 'red', 1.5);
        unlockAchievement('Invalid Data');
    }
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

// Add event listener for Copy Save button
document.getElementById('copySaveButton').addEventListener('click', function() {
    copySave();  // Call the copySave function when the button is clicked
});

// Add event listener for Paste Save (formerly Input Save) button
document.getElementById('pasteSaveButton').addEventListener('click', function() {
    pasteSave();  // Call the pasteSave function when the button is clicked
});


// Add event listener for Import Save button
document.getElementById('howToPlayButton').addEventListener('click', function() {
    closeSettings();
    unlockAchievement('How to Play');
    showMessageModal('How to Play', '', false, false, 'imgs/modal_imgs/howtoplay.jpg');
});


// Add event listener for Import Save button
document.getElementById('trailerButton').addEventListener('click', function() {
    closeSettings();
    unlockAchievement('Watch Trailer');
    window.open('https://www.youtube.com/watch?v=g8tVXoYSIy4', '_blank');
});

document.getElementById('wikiButton').addEventListener('click', function() {
    unlockAchievement('Visit Wiki');
    window.open('https://degens-idle.fandom.com/wiki/Degens_Idle_Wiki', '_blank');
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

// Add event listener for Discord button
document.getElementById('degensAdventureButton').addEventListener('click', function() {
    unlockAchievement('Degens Adventure');
    window.open('https://www.degensidle.com/adventure/', '_blank');
});

function toggleAllBuyMarkers(targetState) {
    purchasedUpgrades.forEach(upgrade => {
        const name = upgrade.name;
        const toggleSwitch = document.getElementById(`toggle-${name}`);

        if (!upgrade.isFight && !upgrade.isMeditation) {
            if (toggleSwitch) {
                toggleSwitch.checked = targetState;
                toggleSwitch.parentElement.style.display = 'block'; // Make the switch visible

                // Update the switch state in the global variable
                switchStates[name] = targetState;
            }
        } else {
            if (toggleSwitch) {
                toggleSwitch.checked = false;
                toggleSwitch.parentElement.style.display = 'none'; // Hide the switch for fight upgrades

                // Update the switch state in the global variable for fight upgrades
                switchStates[name] = false;
            }
        }
    });
}




// Open the automation overlay
document.getElementById('automationButton').addEventListener('click', function() {
    const automationContent = document.getElementById('automationContent');
    const saveButton = document.getElementById('saveAutomationSettingsButton');

    assAssSequence += 'A';
    checkAssAssSequence();

    // Use a timeout to ensure each checkbox is fully rendered before setting its state
    setTimeout(() => {
        // Set up each Quick Mode switch based on corresponding variables
        const enableQuickModePrestigeSwitch = document.getElementById('enableQuickModePrestige');
        enableQuickModePrestigeSwitch.checked = enableQuickModePrestige;
        const quickModePrestigeContainer = document.getElementById('quickModePrestigeContainer');
        if (epsMultiplier > 1) {
            quickModePrestigeContainer.style.display = 'block';
        }

        const enableQuickModeAscendSwitch = document.getElementById('enableQuickModeAscend');
        enableQuickModeAscendSwitch.checked = enableQuickModeAscend;
        const quickModeAscendContainer = document.getElementById('quickModeAscendContainer');
        if (upgrades.some(upgrade => upgrade.isGodMode) || bigCrunchMultiplier > 1) {
            quickModeAscendContainer.style.display = 'block';
        }

        const enableQuickModeTranscendSwitch = document.getElementById('enableQuickModeTranscend');
        enableQuickModeTranscendSwitch.checked = enableQuickModeTranscend;
        const quickModeTranscendContainer = document.getElementById('quickModeTranscendContainer');
        if (upgrades.some(upgrade => upgrade.isPUGodMode) || bigCrunchMultiplier > 1) {
            quickModeTranscendContainer.style.display = 'block';
        }

        const enableQuickModeBigCrunchSwitch = document.getElementById('enableQuickModeBigCrunch');
        enableQuickModeBigCrunchSwitch.checked = enableQuickModeBigCrunch;
        const quickModeBigCrunchContainer = document.getElementById('quickModeBigCrunchContainer');
        if (bigCrunchMultiplier > 1) {
            quickModeBigCrunchContainer.style.display = 'block';
        }

        const enableQuickModeInfiniteEmbraceSwitch = document.getElementById('enableQuickModeInfiniteEmbrace');
        enableQuickModeInfiniteEmbraceSwitch.checked = enableQuickModeInfiniteEmbrace;
        const quickModeInfiniteEmbraceContainer = document.getElementById('quickModeInfiniteEmbraceContainer');
        if (lovePoints > 0) {
            quickModeInfiniteEmbraceContainer.style.display = 'block';
        }

        const enableQuickModeMiniGameSkipSwitch = document.getElementById('enableQuickModeMiniGameSkip');
        enableQuickModeMiniGameSkipSwitch.checked = enableQuickModeMiniGameSkip;
        const quickModeMiniGameSkipContainer = document.getElementById('quickModeMiniGameSkipContainer');
        if (pricyTranquilitySkill) {
            quickModeMiniGameSkipContainer.style.display = 'block';
        }
    }, 0); // Adjust timeout if necessary


    // Clear any existing content in the automationContent section
    Events.wipe(automationContent);
    automationContent.innerHTML = '';

    // Check if all features are locked (none are unlocked)
    const allFeaturesLocked = !autobuyUpgradesSkill && autoPrestigeThreshold === null && !buyMarkersSkill && autoAscendThreshold === null && autoTranscendThreshold === null;

    let content = '';
    // If all features are locked, show the "unlock automation" message
    if (allFeaturesLocked) {
        content += "<p>You have many Automation features yet to be unlocked.</p>";
        saveButton.style.display = 'none'; // Hide the save button
    } else {
        saveButton.style.display = 'inline-block';

        // Dynamically add the three-way toggle for Buy Markers if unlocked
        if (buyMarkersSkill) {
            content += `
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

            // Delay the event listener attachment to ensure the elements are fully rendered
            setTimeout(() => {
                const toggleContainer = automationContent.querySelector('.three-way-toggle-container .three-way-toggle');
                const slider = toggleContainer.querySelector('.slider');
                const toggleNeutral = document.getElementById('toggleBuyMarkersNeutral');
                const toggleOff = document.getElementById('toggleBuyMarkersOff');
                const toggleOn = document.getElementById('toggleBuyMarkersOn');

                // Add click listener to the entire toggle container
                Events.addListener(toggleContainer, 'click', function() {
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

            content += `
                <div style="margin-bottom: 15px;">
                    <label for="defaultBuyMarkerStateSwitch" style="margin-right: 10px;">Default Buy Marker State</label>
                    <label class="switch">
                        <input type="checkbox" id="defaultBuyMarkerStateSwitch" ${defaultBuyMarkerState ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                </div>
            `;
        }

        // Dynamically add Auto-Buy Upgrades setting if unlocked, with space and switch
        if (autobuyUpgradesSkill) {
            content += `
                <div style="margin-bottom: 15px;">
                    <label for="autoBuyUpgradesSwitch" style="margin-right: 10px;">Enable Auto-Buy Upgrades</label>
                    <label class="switch">
                        <input type="checkbox" id="autoBuyUpgradesSwitch" ${autobuyIntervalId !== null ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                </div>
            `;
        }

        // Dynamically add Auto-Prestige Threshold setting if available
        if (autoPrestigeThreshold !== null) {
            content += `
                <div style="margin-bottom: 15px;">
                    <label for="autoPrestigeThresholdInput">Auto Prestige Threshold:</label>
                    <input type="number" id="autoPrestigeThresholdInput" value="${autoPrestigeThreshold}" step="0.1" style="font-size: 16px;">
                    <span id="prestigeWarning" style="display: none; color: red;">Disable auto prestige</span> <!-- Add the red-line warning -->
                </div>
            `;
        }

        // Dynamically add Auto-Big Crunch Threshold setting if available
        if (autoBigCrunchThreshold !== null) {
            content += `
                <div style="margin-bottom: 15px;">
                    <label for="autoBigCrunchThresholdInput">Auto Big Crunch Threshold:</label>
                    <input type="number" id="autoBigCrunchThresholdInput" value="${autoBigCrunchThreshold}" step="0.1" style="font-size: 16px;">
                    <span id="bigCrunchWarning" style="display: none; color: red;">Disable auto big crunch</span> <!-- Add the red-line warning -->
                </div>
            `;
        }

        // Dynamically add Auto-Ascend Threshold setting if available
        if (autoAscendThreshold !== null) {
            content += `
                <div style="margin-bottom: 15px;">
                    <label for="autoAscendThresholdInput">Auto Ascend Threshold (0 to ${numAscensionUpgrades}):</label>
                    <input type="number" id="autoAscendThresholdInput" value="${autoAscendThreshold}" min="0" max="${numAscensionUpgrades}" style="font-size: 16px;">
                    <span id="ascendWarning" style="display: none; color: red;">Disable auto ascend</span>
                </div>
            `;
        }

        // Dynamically add Auto-Transcend Threshold setting if available
        if (autoTranscendThreshold !== null) {
            content += `
                <div style="margin-bottom: 15px;">
                    <label for="autoTranscendThresholdInput">Auto Transcend Threshold (0 to ${numPUAscensionUpgrades}):</label>
                    <input type="number" id="autoTranscendThresholdInput" value="${autoTranscendThreshold}" min="0" max="${numPUAscensionUpgrades}" style="font-size: 16px;">
                    <span id="transcendWarning" style="display: none; color: red;">Disable auto transcend</span>
                </div>
            `;
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

                Events.addListener(autoAscendInput, 'input', function() {
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

                Events.addListener(autoTranscendInput, 'input', function() {
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

        setTimeout(() => {
            const autoPrestigeInput = document.getElementById('autoPrestigeThresholdInput');
            const autoBigCrunchInput = document.getElementById('autoBigCrunchThresholdInput');
            const prestigeWarning = document.getElementById('prestigeWarning');
            const bigCrunchWarning = document.getElementById('bigCrunchWarning');

            if (autoPrestigeInput) {
                // Apply red color if autoPrestigeThreshold is 0 when reopening settings
                if (parseInt(autoPrestigeInput.value) === 0) {
                    autoPrestigeInput.style.color = 'red';
                    prestigeWarning.style.display = 'inline';
                }

                Events.addListener(autoPrestigeInput, 'input', function() {
                    if (parseInt(autoPrestigeInput.value) === 0) {
                        autoPrestigeInput.style.color = 'red';
                        prestigeWarning.style.display = 'inline';
                    } else {
                        autoPrestigeInput.style.color = '';
                        prestigeWarning.style.display = 'none';
                    }
                });
            }

            if (autoBigCrunchInput) {
                // Apply red color if autoBigCrunchThreshold is 0 when reopening settings
                if (parseInt(autoBigCrunchInput.value) === 0) {
                    autoBigCrunchInput.style.color = 'red';
                    bigCrunchWarning.style.display = 'inline';
                }

                Events.addListener(autoBigCrunchInput, 'input', function() {
                    if (parseInt(autoBigCrunchInput.value) === 0) {
                        autoBigCrunchInput.style.color = 'red';
                        bigCrunchWarning.style.display = 'inline';
                    } else {
                        autoBigCrunchInput.style.color = '';
                        bigCrunchWarning.style.display = 'none';
                    }
                });
            }
        }, 0); // Ensure the inputs are rendered first


        // Dynamically add Auto-Fighting setting if autoFightSkill is unlocked
        if (autoFightSkill) {
            content += `
                <div style="margin-bottom: 15px;">
                    <label for="autoFightSwitch" style="margin-right: 10px;">${
                        autoMeditateSkill ? 'Enable Auto-Fighting/Meditating' : 'Enable Auto-Fighting'
                    }</label>
                    <label class="switch">
                        <input type="checkbox" id="autoFightSwitch" ${autoFightEnabled ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                </div>
            `;
        }

        // Dynamically add Auto-Hopium Trade setting if both Hopium Trade and Equilibrium of Hope are unlocked
        if (hopiumTradeSkill && equilibriumOfHopeSkill) {
            content += `
                <div style="margin-bottom: 15px;">
                    <label for="autoHopiumTradeSwitch" style="margin-right: 10px;">Enable Auto Hopium Trade</label>
                    <label class="switch">
                        <input type="checkbox" id="autoHopiumTradeSwitch" ${autoTradeHopiumIntervalId !== null ? 'checked' : ''}  >
                        <span class="slider"></span>
                    </label>
                </div>
            `;
        }

        // Check if any feature is missing and at least one is unlocked
        const someFeaturesMissing = !autobuyUpgradesSkill || autoPrestigeThreshold === null || !buyMarkersSkill || autoAscendThreshold === null || autoTranscendThreshold === null;
        const atLeastOneFeatureUnlocked = autobuyUpgradesSkill || autoPrestigeThreshold !== null || buyMarkersSkill || autoAscendThreshold !== null || autoTranscendThreshold === null;

        if (someFeaturesMissing && atLeastOneFeatureUnlocked) {
            content += `
                <p style="margin-top: 20px; color: #ccc;">
                    You are still missing some automation features. Once unlocked, their settings will appear here.
                </p>`;
        }
    }
    automationContent.innerHTML = content;

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

// Prevent clicks inside the overlay content from closing it
document.querySelector('.automation-overlay-content').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click from propagating to the outside listener
});

// Save the automation settings and close the overlay
document.getElementById('saveAutomationSettingsButton').addEventListener('click', function() {
    // Auto Prestige Threshold
    if (autoPrestigeThreshold !== null) {
        const thresholdInput = document.getElementById('autoPrestigeThresholdInput').value;
        autoPrestigeThreshold = parseFloat(thresholdInput);

        if (isNaN(autoPrestigeThreshold) || autoPrestigeThreshold < 0) {
            showImmediateMessageModal('Invalid Number', 'Please enter a valid positive number for the Auto Prestige Threshold.');
            return; // Prevent closing if there's an error
        }
    }

    // Auto Prestige Threshold
    if (autoBigCrunchThreshold !== null) {
        const thresholdInput = document.getElementById('autoBigCrunchThresholdInput').value;
        autoBigCrunchThreshold = parseFloat(thresholdInput);

        if (isNaN(autoBigCrunchThreshold) || autoBigCrunchThreshold < 0) {
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
                autobuyIntervalId = setInterval(autobuyUpgrades, chronoMagnetizerSkill && fasterAutobuyerskill ? 125 : (fasterAutobuyerskill ? 250 : 1500));
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

        defaultBuyMarkerState = document.getElementById('defaultBuyMarkerStateSwitch').checked;
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
            autoTradeHopiumEnabled = true;
            // Enable auto-buy if it’s not already running
            if (autoTradeHopiumIntervalId === null) {
                autoTradeHopium();
                console.log("Auto-hopium trade started"); // Debug log
            }
        } else {
            autoTradeHopiumEnabled = false;
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
    document.removeEventListener('click', outsideAutomationClickListener); // Remove listener after closing
    showImmediateMessageModal('Automation Settings Saved', 'Your automation settings have been saved successfully.');

    unlockAchievement('Automation Optimizer');
});





// Close the automation overlay (without closing the settings overlay)
document.getElementById('closeAutomationOverlay').addEventListener('click', function() {
    document.getElementById('automationOverlay').style.display = 'none';
    document.removeEventListener('click', outsideAutomationClickListener); // Remove listener after closing
});

// Handle the exit button to close the automation overlay
document.getElementById('exitAutomationOverlayButton').addEventListener('click', function() {
    document.getElementById('automationOverlay').style.display = 'none';
    document.removeEventListener('click', outsideAutomationClickListener); // Remove listener after closing
});


let numberFormatClickCount = 0;
let numberFormatClickTimer;

document.getElementById('numberFormatButton').addEventListener('click', function() {
    // Increment click count
    numberFormatClickCount++;

    // Start a timer if it's the first click within the timeframe
    if (!numberFormatClickTimer) {
        numberFormatClickTimer = setTimeout(function() {
            // After 1 minute, reset the count and the timer
            numberFormatClickCount = 0;
            clearTimeout(numberFormatClickTimer);
            numberFormatClickTimer = null;
        }, 60000); // 1 minute in milliseconds
    }



    // Your existing logic for changing the number format
    if (currentNumberFormat === "Mixed") {
        currentNumberFormat = "Scientific";
    } else if (currentNumberFormat === "Scientific") {
        currentNumberFormat = "Suffixes";
    } else if (currentNumberFormat === "Suffixes") {
        currentNumberFormat = "Engineering";
    } else {
        currentNumberFormat = "Mixed";
    }
    this.textContent = `Number Format: ${currentNumberFormat}`;

    localStorage.setItem('currentNumberFormat', JSON.stringify(currentNumberFormat));


    if (numberFormatClickCount > 12) {
        unlockAchievement('Nerdy Career Path');
    } else {
        showPopupTooltip('Number Format Requires Page Reload to Take Full Effect', 'red', 5);
    }
});
