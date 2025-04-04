
const CURRENT_GAME_VERSION = 0.63;


function showTutorialModal() {
    gameState = getGameState();
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "tutorialModal";
  
    const content = document.createElement("div");
    content.className = "modal-content";
    content.style.maxHeight = "80vh";
    content.style.overflowY = "auto";
  
    content.innerHTML = `
    <h2>Tutorial & Tips</h2>
    <p>
      This game throws many mechanics at you - feel free to experiment by yourself, but this tutorial will walk you through the basics. As you progress, you'll discover that different stages of the game demand different strategies—what works in the early zones might not be as effective later on.
      The complexity of resources and their interactions with skills, tasks, and resets scale up very quickly, so if you're looking for a chill, passive idle experience, this may not be the game for you.
      Instead, be prepared to constantly adapt your strategy to optimize your resource management and efficiency.
      And hey, if you manage to solve all the strategic puzzles and beat zone 33 with ease, send me your resume!
    </p>
    
    <h3>Skills:</h3>
    <p>
      Skills control two key factors: speed (how fast tasks progress) and energy drain (how much energy a task uses). Skill speed improves with level (at start, speed scales 1% per level while XP required scales 2% per level), and various resources, perks, and upgrades can further affect speed, energy drain, or XP scaling.
    </p>
    
    <h3>Tasks:</h3>
    <p>
      Tasks are the actions you perform. You can start a task and pause it at any time—initially, only one task can run simultaneously. Tasks may use one, two, or three skills, with the speed and energy drain determined by multiplying the speed and drain multipliers from each selected skill. Hovering over a task (or holding on mobile) gives additional info. Note that the energy/time estimates are based on current skill levels - if a skill levels while performing the task then both energy and time will be less.
    </p>
    <p>
      Gold tasks are mandatory because they unlock travel to the next zone, while the green optional tasks allow you to choose the ones that best suit your strategy. Other task colors will be explained as you encounter them.
    </p>
    
    <h3>Resources:</h3>
    <p>
      Some tasks produce resources. Resources must be consumed to take effect - nearly all effects last until you run out of energy or experience a copium/delusion reset. On an energy reset, you lose half of your resources.
    </p>
    <p>
      Resource boosts stack additively with themselves and with other resources. The skill speed calculation is: 
      <span style="font-family: 'Courier New', monospace;">speed = baseSpeed * (1 + sum(all resource boosts))</span>. 
      The energy drain calculation is: 
      <span style="font-family: 'Courier New', monospace;">drain = baseDrain / (1 + sum(all resource boosts))</span>.
    </p>
  
    <h3>Perks:</h3>
    <p>
      Some tasks grant perks that persist through resets until you prestige. Tasks with perks that have not been unlocked yet are marked with a star. Some perks also have effects that you can toggle on or off.
    </p>
    <p>
      Perk effects stack multiplicatively. If two different perks affect the speed of the same skill, the speed boost is calculated as:
      <span style="font-family: 'Courier New', monospace;">speed = baseSpeed * (perk 1) * (perk 2)...</span>.
      Perks persist through energy, copium, and delusion resets. They do however get reset on prestige.
    </p>
  
    <h3>Achievements:</h3>
    <p>
      Achievements are a one-and-done type of deal - once unlocked you have them forever. They provide a small speed boost to all skills (additive 1% per achievement).
    </p>
  
    <h3>Automation:</h3>
    <p>
      As you progress, many layers of automation become available through perks and prestige upgrades, streamlining task management and resource usage. Basic automation options are to automate the Zone or to automate All, which will continue until no more automation is possible.
    </p>
    <p>
      When the corresponding perk is unlocked, automation can be customized by toggling tasks on and off. This can be done by right clicking a task (or holding down on mobile).
    </p>
  
    <!-- Hide Knowledge, Copium, Power, Delusion, Serenity sections unless unlocked -->
    ${gameState.knowledgeUnlocked ? `
      <h3 style="color: green;">Knowledge:</h3>
      <p>
        Knowledge increases your XP gain for related skills. It is earned from tasks that use knowledge-based skills and is crucial for fast leveling and overall progress. Note that knowledge is only gained after completing all repetitions of a task.
      </p>
    ` : ``}
  
    ${gameState.copiumUnlocked ? `
      <h3 style="color: yellow;">Copium:</h3>
      <p>
        Copium builds up from tasks that use copium-related skills, and reaching max copium will reset the game. Keep in mind that copium can be used to your advantage. Later in the game, strategies utilizing copium become essential.
      </p>
    ` : ``}
  
    ${gameState.powerUnlocked ? `
      <h3 style="color: magenta;">Power:</h3>
      <p>
        Power boosts the speed of power-related tasks (initially Combat and Endurance) and is obtained by defeating bosses.
      </p>
    ` : ``}
  
    ${gameState.delusionUnlocked ? `
      <h3 style="color: rgb(76, 10, 98);">Delusion:</h3>
      <p>
        Delusion, like copium, builds up through tasks using delusion-related skills and reaching max will reset the game. Throughout the game, more delusion-related features will unlock, and keeping it balanced will be very beneficial. Though initially it may seem only negative, a delusion reset causes no resource loss, which can help build powerful runs.
      </p>
    ` : ``}
  
    ${gameState.serenityUnlocked ? `
      <h3 style="color: rgb(12, 12, 133);">Serenity:</h3>
      <p>
        Serenity is tied to the prestige mechanic. Your prestige bonus depends on how efficiently you reset—fewer resets yield a higher bonus. Prestige can be performed as many times as you want, and serenity gains stack—so don't worry too much about being inefficient on your first few prestiges.
      </p>
      <p>
        There are multiple prestige sections available - each one unlocks by completing its corresponding task. Once unlocked, that section will remain available for future prestiges.
      </p>
    ` : ``}
  
    <!-- Show the message if any section is hidden -->
    ${(!gameState.knowledgeUnlocked || !gameState.copiumUnlocked || !gameState.powerUnlocked || !gameState.delusionUnlocked || !gameState.serenityUnlocked) ? `
      <p style="color: red;">Additional sections remain hidden until the corresponding mechanics are unlocked.</p>
    ` : ``}
  
    <h3 style="text-align: center;">Game Tips</h3>
    <ul style="text-align: left;">
      <li>Hover over tasks, skills, resources, perks to view details about them.</li>
      <li>Multi-skill tasks are generally better for grinding XP, especially tasks that use three skills.</li>
      <li>Alternate between "Farm Runs" (saving resources) and "Push Runs" (using both old and new resources for maximum progress).</li>
      <li>You lose 50% of your resources (rounded up) on an energy reset. You can always freely use a resource if you have an even number of it. (for example: 4 Energy Elixirs = 2 after reset, 3 Energy Elixirs = 2 also after reset)</li>
      <li>Once Energy Elixir cost is under 3 per task, it’s usually worth it to produce the max amount on every run.</li>
      <li>Don't dwell on completing everything in a zone. Often something in later zones will help a lot more.</li>
      <li>Keep in mind that energy requirements for tasks account for Energetic Bliss (when this perk is unlocked); when your energy drops below 80%, tasks may require more energy.</li>
      <li>Source code is open so if you are interested in details of how formulas work, feel free to dive in and explore.</li>
    </ul>
    
    <button id="tutorialCloseBtn">Close</button>
  `;
  
  
  
    modal.appendChild(content);
    document.body.appendChild(modal);
  
    document.getElementById("tutorialCloseBtn").addEventListener("click", () => {
      modal.remove();
    });
    
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  async function showChangelogModal() {
    const changelogModal = document.createElement("div");
    changelogModal.id = "changelogModal";
    changelogModal.className = "modal";
  
    const content = document.createElement("div");
    content.className = "modal-content";
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.alignItems = "center";
    content.style.gap = "10px";
    content.style.maxHeight = "80vh"; // Max height for the modal
    content.style.overflowY = "auto"; // Allow scrolling if content exceeds max height
  
    const title = document.createElement("h2");
    title.textContent = "Changelog";
    content.appendChild(title);
  
    const changelogContent = document.createElement("div");
    changelogContent.id = "changelogContent";
    content.appendChild(changelogContent);
  
    // Fetch the changelog data from GitHub API (replace with your repo details)
    const changelog = await fetchChangelog("ssiatkowski", "degens-idle");
  
    changelogContent.innerHTML = changelog;
  
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => {
      changelogModal.remove();
    });
    content.appendChild(closeButton);
  
    changelogModal.appendChild(content);
    document.body.appendChild(changelogModal);
  
    changelogModal.addEventListener("click", (e) => {
      if (e.target === changelogModal) {
        changelogModal.remove();
      }
    });
  }
  
  async function fetchChangelog(owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
  
    try {
      const response = await fetch(url);
      const commits = await response.json();
      
      if (response.ok) {
        let changelogHTML = "<ul style='max-height: 400px; overflow-y: auto;'>"; // Make it scrollable
  
        // Loop through the commits and process them
        commits
          .filter(commit => commit.commit.message.startsWith("Degens Adventure "))
          .forEach(commit => {
            // Log the raw date to see what GitHub returns
            const rawDate = commit.commit.author ? commit.commit.author.date : null;
  
            // Ensure date exists and is valid
            let commitDate = rawDate ? new Date(rawDate) : null;
            
            commitDate = commitDate.toLocaleDateString(); // Format the date if valid
  
            // Remove "Degens Adventure " prefix and extract the version number
            const versionMessage = commit.commit.message.replace("Degens Adventure ", "");
            const version = versionMessage.split("\n")[0]; // Get only the version number
            
            // Split the changes into individual lines, exclude empty lines and remove the leading '-'
            const changeList = versionMessage
            .split("\n")               // Split by new line
            .slice(2)                  // Skip the first two lines (version and date)
            .filter(change => change.trim() !== "")  // Remove empty lines
            .map(change => {
                // Remove the leading '- ' and any spaces before or after it
                const cleanedChange = change.replace(/^-\s*/, "");
                return `<li>${cleanedChange}</li>`;
            })
            .join("");  // Join the array of `<li>` elements into a single string

  
            // Skip empty entries
            if (changeList) {
                changelogHTML += `
                <li style='margin-bottom: 10px;'>
                  <strong>${version}</strong> (${commitDate})
                  <ul style="text-align: left; padding-left: 20px;">
                    ${changeList}
                  </ul>
                </li>
              `;
            }
          });
  
        changelogHTML += "</ul>";
  
        // Add the link to the Discord channel at the end
        changelogHTML += `
          <p style="text-align: center;">
            For the full changelog, check this 
            <a href="https://discordapp.com/channels/1268685194819538984/1268686543292203078" target="_blank">Discord channel</a>.
          </p>
        `;
  
        // Return the formatted changelog HTML
        return changelogHTML;
      } else {
        return "<p>Failed to fetch commits. Please try again later.</p>";
      }
    } catch (error) {
      console.error("Error fetching changelog:", error);
      return "<p>Failed to fetch commits. Please try again later.</p>";
    }
  }
  