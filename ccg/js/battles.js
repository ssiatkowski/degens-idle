// Battle system implementation

// Initialize battle system
function initBattleSystem() {
  // Don't initialize if already done
  if (state.battle.initialized) return;

  if (!realms[10].unlocked) {
    return;
  }

  // Initialize enemy if none exists
  if (!state.battle.currentEnemy) {
    state.battle.currentEnemy = getNextEnemy();
    saveState();
  }

  // Start battle loop if there's an enemy
  if (state.battle.currentEnemy) {
    startBattleLoop();
  }

  state.battle.initialized = true;
}

// Calculate attack power for a card
function calculateAttackPower(card) {
  // If this is a battle slot card, use the stored attack
  if (card.attack) {
    return card.attack;
  }
  // Otherwise calculate normally
  return Math.floor(card.power * card.tier * Math.sqrt(card.level));
}

// Calculate HP for a card
function calculateHP(card) {
  return Math.floor(card.defense * Math.sqrt(card.quantity));
}

// Lock a card for 24 hours
function lockCard(cardId) {
  const card = cardMap[cardId];
  if (!card) return;
  
  card.locked = true;
  state.battle.lockoutTimers[cardId] = Date.now() + (24 * 60 * 60 * 1000); // 24 hours
  saveState();
}

// Get next available enemy
function getNextEnemy() {
  const greekGodsCards = cards.filter(c => c.realm === 11);
  // Find the first card that hasn't been battled yet
  const enemy = greekGodsCards.find(c => c.locked);
  if (enemy) {
    // Initialize enemy properties
    enemy.attack = enemy.power * 10;
    enemy.maxHp = enemy.defense * 10000;
    enemy.currentHp = enemy.maxHp;
  }
  return enemy;
}

// Show damage number animation
function showDamageNumber(damage, target = 'enemy') {
  const targetEl = target === 'enemy' ? 
    document.querySelector('.enemy-card .battle-card-face') : // Changed from card-outer
    document.querySelector('.battle-slot[data-slot="0"] .battle-card-face');
  if (!targetEl) return;
  
  const damageEl = document.createElement('div');
  damageEl.className = 'damage-number';
  damageEl.textContent = formatNumber(damage);
  
  const bounds = targetEl.getBoundingClientRect();
  let offsetX, offsetY;
  
  if (target === 'enemy') {
    offsetX = bounds.width * (0.3 + Math.random() * 0.4); // 30-70% from left
    offsetY = bounds.height * (0.2 + Math.random() * 0.3); // 20-50% from top
  } else {
    offsetX = bounds.width * 0.5; // Center horizontally
    offsetY = bounds.height * 0.3; // 30% from top
  }
  
  damageEl.style.left = `${offsetX}px`;
  damageEl.style.top = `${offsetY}px`;
  
  targetEl.appendChild(damageEl);
  damageEl.addEventListener('animationend', () => damageEl.remove());
}


// Remove top card from battle
function removeTopCard() {
  // Clear battle interval first
  if (state.battle.battleInterval) {
    clearInterval(state.battle.battleInterval);
    state.battle.battleInterval = null;
  }

  // Check if there will be any cards remaining after shift
  const willHaveRemainingCards = state.battle.slots[1] !== null;

  // Update the slots
  state.battle.slots[0] = state.battle.slots[1];
  state.battle.slots[1] = state.battle.slots[2];
  state.battle.slots[2] = null;

  // Only pause if no cards will remain
  if (!willHaveRemainingCards) {
    state.battle.paused = true;
  }

  // Show removal animation
  const cardEl = document.querySelector('.battle-slot[data-slot="0"] .card-outer');
  cardEl.classList.add('removing');
  
  cardEl.addEventListener('animationend', () => {
    // Update UI
    updateBattleUI();
    
    // Update pause button explicitly only if no cards remain
    if (!willHaveRemainingCards) {
      const pauseBtn = document.querySelector('.battle-pause-btn');
      if (pauseBtn) {
        pauseBtn.classList.add('paused');
        pauseBtn.textContent = 'Start Battle';
      }
    }
    
    // Restart battle loop if we still have cards
    if (willHaveRemainingCards) {
      startBattleLoop();
    }
  });
}

// Defeat current enemy
function defeatEnemy() {
  clearInterval(state.battle.battleInterval);
  state.battle.battleInterval = null;
  state.battle.paused = true; // Auto-pause after victory

  // Show victory animation if we're on battle tab
  const enemyEl = document.querySelector('.enemy-card');
  if (enemyEl) {
    enemyEl.classList.add('defeated');
    
    enemyEl.addEventListener('animationend', () => {
      processVictory();
    }, { once: true });
  } else {
    // Process victory immediately if not on battle tab
    processVictory();
  }
}

// Split out victory processing
function processVictory() {
  // Unlock the actual card (not the battle copy)
  const defeatedCard = cardMap[state.battle.currentEnemy.id];
  if (defeatedCard) {
    defeatedCard.locked = false;
  }
  
  // Clear battle slots
  state.battle.slots = [null, null, null];

  // Get next enemy
  state.battle.currentEnemy = getNextEnemy();
  
  saveState();
  
  // Only update UI if we're on battle tab
  if (currentTab === 'battles') {
    updateBattleUI();
  }
  renderCardsCollection(); // Update collection view
}

// Update battle stats
function updateBattleStats() {
  const enemyCard = document.querySelector('.enemy-card');
  if (!enemyCard || !state.battle.currentEnemy) return;

  // Update enemy HP and attack
  const hpBar = enemyCard.querySelector('.hp-bar');
  const hpText = enemyCard.querySelector('.hp-text');
  const attackText = enemyCard.querySelector('.attack-text');
  if (hpBar && hpText) {
    hpBar.style.width = `${(state.battle.currentEnemy.currentHp / state.battle.currentEnemy.maxHp) * 100}%`;
    hpText.textContent = `${formatNumber(state.battle.currentEnemy.currentHp)}`;
  }
  if (attackText) {
    attackText.textContent = `Attack: ${formatNumber(state.battle.currentEnemy.attack)}`;
  }

  // Update slot cards
  state.battle.slots.forEach((card, index) => {
    const slot = document.querySelector(`.battle-slot[data-slot="${index}"]`);
    if (!slot || !card) return;

    const hpBar = slot.querySelector('.hp-bar');
    const hpText = slot.querySelector('.hp-text');
    if (hpBar && hpText) {
      hpBar.style.width = `${(card.currentHp / card.maxHp) * 100}%`;
      hpText.textContent = `${formatNumber(card.currentHp)}`;
    }
  });
}

// Update battle UI
function updateBattleUI() {
  const battleContent = document.getElementById('tab-content-battles');
  if (!battleContent) return;

  // Check if Greek Gods realm is unlocked
  const greekGodsRealm = realms.find(r => r.id === 11);
  if (!greekGodsRealm?.unlocked) {
    battleContent.innerHTML = `
      <div class="battle-locked-message">
        You must unlock Greek Gods realm to access Battles
      </div>
    `;
    return;
  }

  // Get current enemy
  const currentEnemy = state.battle.currentEnemy;
  if (!currentEnemy) {
    battleContent.innerHTML = `
      <div class="battle-locked-message">
        No enemy to battle
      </div>
    `;
    return;
  }

  // Update battle arena
  battleContent.innerHTML = `
    <div class="battle-arena">
      <div class="battle-slots-container">
        <div class="battle-slots">
          ${Array(3).fill(null).map((_, i) => `
            <div class="battle-slot" data-slot="${2-i}">
              ${state.battle.slots[2-i] ? `
                <div class="card-outer">
                  <div class="battle-card-face">
                    <img class="card-frame" src="assets/images/frames/${state.battle.slots[2-i].rarity}_frame.jpg" />
                    <img class="card-image" src="assets/images/cards/${state.battle.slots[2-i].realm}/${slugify(state.battle.slots[2-i].name)}.jpg" />
                    ${state.battle.slots[2-i].tier > 0 ? `
                      <img class="tier-badge" src="assets/images/tiers/tier_${state.battle.slots[2-i].tier}.png" alt="Tier ${state.battle.slots[2-i].tier}" />
                    ` : ''}
                    <div class="hp-container">
                      <div class="hp-bar" style="width: ${(state.battle.slots[2-i].currentHp / state.battle.slots[2-i].maxHp) * 100}%"></div>
                      <div class="hp-text">${formatNumber(state.battle.slots[2-i].currentHp)}</div>
                    </div>
                    <div class="battle-combat-stats">
                      <div class="battle-combat-stat">
                        <i class="fas fa-gavel"></i> ${formatNumber(state.battle.slots[2-i].attack)}
                      </div>
                      <div class="battle-combat-stat">
                        ${formatNumber(state.battle.slots[2-i].maxHp)} <i class="fas fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ` : '<div class="empty-slot">Empty Slot</div>'}
            </div>
          `).join('')}
        </div>
        <div class="battle-controls">
          <button class="battle-pause-btn ${state.battle.paused ? 'paused' : ''}"
                  ${state.battle.slots.every(slot => slot === null) ? 'disabled' : ''}>
            ${state.battle.paused ? 'Start Battle' : 'Pause Battle'}
          </button>
        </div>
      </div>
      <div class="enemy-section">
        <div class="enemy-card">
          <div class="battle-card-face">
            <img class="card-frame" src="assets/images/frames/${currentEnemy.rarity}_frame.jpg" />
            <img class="card-image" src="assets/images/cards/${currentEnemy.realm}/${slugify(currentEnemy.name)}.jpg" />
            <div class="hp-container">
              <div class="hp-bar" style="width: ${(currentEnemy.currentHp / currentEnemy.maxHp) * 100}%"></div>
              <div class="hp-text">${formatNumber(currentEnemy.currentHp)}</div>
            </div>
            <div class="battle-combat-stats">
              <div class="battle-combat-stat">
                <i class="fas fa-gavel"></i> ${formatNumber(currentEnemy.attack)}
              </div>
              <div class="battle-combat-stat">
                ${formatNumber(currentEnemy.maxHp)} <i class="fas fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="enemy-details">
          <h3 style="color: var(--rarity-${currentEnemy.rarity.trim()})">${currentEnemy.name}</h3>
          <p>${currentEnemy.description || 'A powerful enemy that must be defeated to unlock their card.'}</p>
        </div>
      </div>
    </div>
    <div class="battle-filters-header">
      <div class="battle-filters">
        <div class="battle-filter-group">
          <button class="battle-filter-btn ${state.battle.sortBy === 'power' ? 'active' : ''}" data-sort="power">
            Sort by Power
            ${state.battle.sortBy === 'power' ? 
              `<span class="sort-direction">${state.battle.sortDirection === 'desc' ? '↓' : '↑'}</span>` : 
              ''}
          </button>
          <button class="battle-filter-btn ${state.battle.sortBy === 'hp' ? 'active' : ''}" data-sort="hp">
            Sort by HP
            ${state.battle.sortBy === 'hp' ? 
              `<span class="sort-direction">${state.battle.sortDirection === 'desc' ? '↓' : '↑'}</span>` : 
              ''}
          </button>
        </div>
        <div class="battle-filter-group">
          <button class="battle-filter-btn ${state.battle.filterRealm ? 'active' : ''}" data-filter="realm">
            Realm
            ${state.battle.filterRealm ? 
              `<span class="filter-badge">${realmMap[state.battle.filterRealm].name}</span>` : 
              ''}
          </button>
          <button class="battle-filter-btn ${state.battle.filterRarity ? 'active' : ''}" data-filter="rarity">
            Rarity
            ${state.battle.filterRarity ? 
              `<span class="filter-badge">${state.battle.filterRarity.toUpperCase()}</span>` : 
              ''}
          </button>
        </div>
      </div>
      <button class="battle-help-btn">
        <i class="fas fa-question-circle"></i>
        How do Battles work?
      </button>
    </div>
    <div class="battle-card-grid"></div>
  `;



  // Add pause button handler
  const pauseBtn = document.querySelector('.battle-pause-btn');
  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      if (!state.battle.slots.some(slot => slot !== null)) return;
      
      state.battle.paused = !state.battle.paused;
      if (!state.battle.paused) {
        startBattleLoop();
      }
      
      pauseBtn.classList.toggle('paused', state.battle.paused);
      pauseBtn.textContent = state.battle.paused ? 'Start Battle' : 'Pause Battle';
    });
  }

  // Add filter button handlers
  const filterButtons = document.querySelectorAll('.battle-filter-btn');
  filterButtons.forEach(btn => {
    if (btn.dataset.sort) {
      // Sort buttons
      btn.addEventListener('click', () => {
        const sort = btn.dataset.sort;
        if (state.battle.sortBy === sort) {
          // Toggle direction if clicking same sort
          state.battle.sortDirection = state.battle.sortDirection === 'desc' ? 'asc' : 'desc';
        } else {
          // Set new sort and reset direction to desc
          state.battle.sortBy = sort;
          state.battle.sortDirection = 'desc';
        }
        updateBattleUI();
      });
    } else if (btn.dataset.filter) {
      // Filter buttons
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        if (filter === 'realm') {
          showRealmFilterMenu(btn);
        } else if (filter === 'rarity') {
          showRarityFilterMenu(btn);
        }
      });
    }
  });

  // Add help button handler
  const helpBtn = document.querySelector('.battle-help-btn');
  if (helpBtn) {
    helpBtn.addEventListener('click', showBattleHelp);
  }

  // Update card grid after filters are set
  const cardGrid = document.querySelector('.battle-card-grid');
  if (cardGrid) {
    updateBattleCardGrid(cardGrid);
  }
}

// Separate function to update card grid
function updateBattleCardGrid(cardGrid) {
  // Get all owned cards and apply filters
  let filteredCards = cards.filter(c => c.quantity > 0);

  // Apply realm filter
  if (state.battle.filterRealm) {
    filteredCards = filteredCards.filter(c => c.realm === state.battle.filterRealm);
  }

  // Apply rarity filter
  if (state.battle.filterRarity) {
    filteredCards = filteredCards.filter(c => c.rarity === state.battle.filterRarity);
  }

  // Sort cards
  filteredCards.sort((a, b) => {
    const aValue = state.battle.sortBy === 'power' ? 
      calculateAttackPower(a) : calculateHP(a);
    const bValue = state.battle.sortBy === 'power' ? 
      calculateAttackPower(b) : calculateHP(b);
    
    return state.battle.sortDirection === 'desc' ? 
      bValue - aValue : 
      aValue - bValue;
  });

  // Render filtered and sorted cards
  cardGrid.innerHTML = filteredCards.map(card => {
    const attack = calculateAttackPower(card);
    const maxHp = calculateHP(card);

    return `
      <div class="battle-card-grid-item" data-id="${card.id}">
        <div class="battle-card-face">
          <img class="battle-card-image" 
               src="assets/images/cards/${card.realm}/${slugify(card.name)}.jpg" 
               alt="${card.name}"
               loading="lazy" />
          <img class="battle-card-frame" 
               src="assets/images/frames/${card.rarity}_frame.jpg" 
               alt="${card.rarity} frame"/>
          ${card.tier > 0 ? `
            <img class="battle-tier-badge" 
                 src="assets/images/tiers/tier_${card.tier}.png" 
                 alt="Tier ${card.tier}" />
          ` : ''}
          <div class="battle-card-name">${card.name}</div>
          <div class="battle-combat-stats">
            <div class="battle-combat-stat">
              <i class="fas fa-gavel"></i> ${formatNumber(attack)}
            </div>
            <div class="battle-combat-stat">
              <i class="fas fa-heart"></i> ${formatNumber(maxHp)}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-add click handlers and scaling
  cardGrid.querySelectorAll('.battle-card-grid-item').forEach(cardEl => {
    cardEl.addEventListener('click', () => {
      const cardId = parseInt(cardEl.dataset.id);
      showSacrificeDialog(cardId);
    });
  });

  // Scale card names and stats to fit
  cardGrid.querySelectorAll('.battle-card-grid-item').forEach(card => {
    // Scale card name
    const nameEl = card.querySelector('.battle-card-name');
    if (nameEl) {
      const containerWidth = nameEl.parentElement.offsetWidth - 16; // Account for padding
      const textWidth = nameEl.scrollWidth;
      const scale = Math.min(1, containerWidth / textWidth);
      nameEl.style.setProperty('--text-scale', scale);
    }

    // Scale combat stats
    const statsEl = card.querySelector('.battle-combat-stats');
    if (statsEl) {
      const containerWidth = statsEl.offsetWidth - 8; // Account for padding
      const statsWidth = Array.from(statsEl.children).reduce((w, stat) => w + stat.scrollWidth, 0);
      const scale = Math.min(1, containerWidth / statsWidth);
      statsEl.querySelectorAll('.battle-combat-stat').forEach(stat => {
        stat.style.setProperty('--stat-scale', scale);
      });
    }
  });
}

// Show sacrifice dialog
function showSacrificeDialog(cardId) {
  const c = cardMap[cardId];
  if (!c) return;

  const attack = calculateAttackPower(c);
  const maxHp = calculateHP(c);
  const rr = realmMap[c.realm];
  const color = realmColors[c.realm];

  // Helper function to render effects
  function renderCardEffects(effectsList, isSpecial = false) {
    if (!effectsList || !effectsList.length) return '';
    
    return effectsList.map(def => {
      // Skip special effects that don't meet requirements
      if (isSpecial) {
        if (def.requires) {
          const required = cardMap[def.requires.card];
          if (!required || required.tier < def.requires.tier) {
            return '';
          }
        }
        // Add level requirement check
        if (def.requirement?.type === 'level' && c.level < def.requirement.amount) {
          return '';
        }
      }

      // For effects label
      let label;
      switch (def.type) {
        case "currencyPerPoke":
        case "currencyPerSec":
        case "flatCurrencyPerPoke":
        case "flatCurrencyPerSecond":
        case "currencyPerPokeMultiplier":
        case "currencyPerSecMultiplier": {
          const currency = currencies.find(cur => cur.id === def.currency);
          const icon = currency ? 
            `<img class="currency-effect-icon" src="assets/images/currencies/${currency.icon}" alt="${currency.name}"/>` : '';
          const verb = def.type.includes('PerPoke') ? '/ Poke' : '/ Sec';
          if (def.type.includes('Multiplier')) {
            label = `Global ${icon} ${verb} Multiplier`;
          } else {
            label = `${icon} ${verb}`;
          }
          break;
        }
        case "rarityOddsDivider": {
          const realmObj = realmMap[def.realm];
          const realmColor = realmColors[def.realm];
          const rarityColor = getComputedStyle(document.documentElement)
            .getPropertyValue(`--rarity-${def.rarity}`);
          label = [
            `<span style="color:${realmColor}">${realmObj.name}</span>`,
            `<span style="color:${rarityColor}">${def.rarity.toUpperCase()}</span> odds divider`
          ].join(' ');
          break;
        }
        default:
          label = SPECIAL_EFFECT_NAMES[def.type] || EFFECT_NAMES[def.type] || def.type;
      }

      // Calculate value based on effect type
      let valueHtml;
      switch (def.type) {
        case "merchantPriceDivider":
          valueHtml = `×${formatNumber(def.value)}`;
          break;
        case "flatCurrencyPerPoke":
        case "flatCurrencyPerSecond":
          valueHtml = `+${formatNumber(def.value)}`;
          break;
        case "currencyPerPokeMultiplier":
        case "currencyPerSecMultiplier":
          valueHtml = `×${formatNumber(def.value)}`;
          break;
        case "allGeneratorMultiplier":
          valueHtml = `×${formatNumber(def.value)}`;
          break;
        case "flatMaxCardsPerPoke":
        case "flatMinCardsPerPoke":
        case "flatCooldownDivider":
        case "flatExtraMerchantRarityScaling":
          valueHtml = `+${formatNumber(def.value)}`;
          break;
        case "rarityOddsDivider":
          const baseDivider = def.value || def.amount || 0.01;
          total = baseDivider * c.level * Math.pow(EFFECT_SCALES[def.type] || 2, c.tier - 1);
          const cap = EFFECTS_RARITY_VALUES[c.rarity]?.oddsDividerCap;
          const cappedTotal = Math.min(total, cap);
          valueHtml = `${formatNumber(1 + cappedTotal)}`;
          break;
        default:
          if (def.type === "minCardsPerPoke") {
            baseValue = EFFECTS_RARITY_VALUES[c.rarity]?.minCardsPerPokeBaseValue || 0;
          } else if (def.type === "maxCardsPerPoke") {
            baseValue = EFFECTS_RARITY_VALUES[c.rarity]?.maxCardsPerPokeBaseValue || 0;
          } else if (def.type === "cooldownDivider") {
            baseValue = EFFECTS_RARITY_VALUES[c.rarity]?.cooldownDividerBaseValue || 0;
          } else {
            baseValue = def.value || def.amount || 0;
          }
          total = baseValue * c.level * Math.pow(EFFECT_SCALES[def.type] || 2, c.tier - 1);
          valueHtml = `+${formatNumber(total)}`;
      }

      return `<div class="effect-line">
        ${label}: <strong>${valueHtml}</strong>
      </div>`;
    }).filter(Boolean).join('');
  }

  const dialog = document.createElement('div');
  dialog.className = 'sacrifice-dialog';
  dialog.innerHTML = `
    <div class="sacrifice-content">
      <div class="sacrifice-left">
        <div class="sacrifice-card-preview">
          <img class="modal-frame-img" src="assets/images/frames/${c.rarity}_frame.jpg" />
          ${c.tier > 0 ? `
            <img class="modal-tier-icon" src="assets/images/tiers/tier_${c.tier}.png" alt="Tier ${c.tier}" />
          ` : ''}
          <div class="battle-card-name">${c.name}</div>
          <img class="modal-image" src="assets/images/cards/${c.realm}/${slugify(c.name)}.jpg" />
          <div class="battle-combat-stats">
            <div class="battle-combat-stat">
              <i class="fas fa-gavel"></i> ${formatNumber(attack)}
            </div>
            <div class="battle-combat-stat">
              ${formatNumber(maxHp)} <i class="fas fa-heart"></i>
            </div>
          </div>
        </div>
        <button class="sacrifice-btn">Sacrifice Card</button>
      </div>
      <div class="sacrifice-right">
        <div class="sacrifice-stats">
          <span>Quantity:</span> 
          <strong>${formatQuantity(c.quantity)} <span class="stat-change">→ 0</span></strong>
          <span>Level:</span> 
          <strong>${c.level} <span class="stat-change">→ 1</span></strong>
          <span>Tier:</span>
          <strong>${c.tier} <span class="stat-change">→ 0</span></strong>
          <span>Realm:</span> <strong style="color:${color}">${rr.name}</strong>
          <span>Rarity:</span> <strong style="color:var(--rarity-${c.rarity})">${c.rarity.toUpperCase()}</strong>
          <span>Power:</span> <strong>${formatNumber(c.power)}</strong>
          <span>Defense:</span> <strong>${formatNumber(c.defense)}</strong>
        </div>
        ${c.baseEffects ? `
          <h4>Effects <span class="effect-removed">→ removed</span></h4>
          <div class="sacrifice-modal-effects">
            ${renderCardEffects(c.baseEffects)}
          </div>
        ` : ''}
        ${c.specialEffects ? `
          <h4>Special Effects <span class="effect-removed">→ removed</span></h4>
          <div class="sacrifice-modal-effects">
            ${renderCardEffects(c.specialEffects, true)}
          </div>
        ` : ''}
      </div>
    </div>
  `;

  // Add event listener for sacrifice button
  const sacrificeBtn = dialog.querySelector('.sacrifice-btn');
  if (sacrificeBtn) {
    sacrificeBtn.addEventListener('click', () => {
      // Find first available slot
      const availableSlot = state.battle.slots.findIndex(slot => slot === null);
      
      if (availableSlot === -1) {
        alert('No available battle slots!');
        return;
      }

      // Create battle copy of card
      const card = cardMap[cardId];
      const battleCard = {
        ...card,
        attack: calculateAttackPower(card),
        currentHp: calculateHP(card),
        maxHp: calculateHP(card),
        originalQuantity: card.quantity
      };

      // Reset the original card
      card.level = 1;
      card.tier = 0;
      card.quantity = 0;
      if (card.lastAppliedEffects) {
        applyEffectsDelta(card.lastAppliedEffects, -1);
      }
      if (card.lastAppliedSpecialEffects) {
        applyEffectsDelta(card.lastAppliedSpecialEffects, -1);
      }
      card.lastAppliedEffects = null;
      card.lastAppliedSpecialEffects = null;

      // Place battle copy in slot
      state.battle.slots[availableSlot] = battleCard;

      // Lock the card
      lockCard(cardId);

      dialog.remove();
      saveState();
      updateBattleUI();
      renderCardsCollection(); // Update collection view
    });
  }

  // Handle click outside to close
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.remove();
    }
  });

  document.body.appendChild(dialog);
}

// Helper function to render effects
function renderEffects(effects, card) {
  return effects.map(def => {
    const scale = EFFECT_SCALES[def.type] ?? 2;
    const tierMult = Math.pow(scale, card.tier - 1);
    // ...rest of effect rendering logic from main.js...
  }).join('');
}

function renderSpecialEffects(effects, card) {
  return effects.map(def => {
    // ...special effect rendering logic from main.js...
  }).join('');
}

// Sacrifice card for battle
function sacrificeCard(cardId, slotIndex) {
  const card = cardMap[cardId];
  if (!card) return;

  // Calculate attack and HP before resetting stats
  const attack = calculateAttackPower(card);
  const maxHp = calculateHP(card);
  const originalQuantity = card.quantity;

  // Remove card effects
  if (card.lastAppliedEffects) {
    applyEffectsDelta(card.lastAppliedEffects, -1);
  }
  if (card.lastAppliedSpecialEffects) {
    applyEffectsDelta(card.lastAppliedSpecialEffects, -1);
  }

  // Reset card stats
  card.level = 1;
  card.tier = 0;
  card.quantity = 0;
  card.lastAppliedEffects = null;
  card.lastAppliedSpecialEffects = null;

  // Create a battle slot version of the card
  const battleCard = {
    ...card,
    attack,
    currentHp: maxHp,
    maxHp,
    quantity: originalQuantity,
    originalQuantity
  };

  // Add card to battle slot
  state.battle.slots[slotIndex] = battleCard;

  // Lock the card
  lockCard(cardId);

  // Save state and update UI
  saveState();
  updateBattleUI();
  renderCardsCollection(); // Update collection view
}

// Add function to check and clear expired lockouts

function clearExpiredLockouts() {
  const now = Date.now();
  Object.entries(state.battle.lockoutTimers).forEach(([cardId, endTime]) => {
    if (endTime <= now) {
      delete state.battle.lockoutTimers[cardId];
      const card = cardMap[cardId];
      if (card) {
        card.locked = false;
      }
    }
  });
}

// Update battle loop section in startBattleLoop
function startBattleLoop() {
  if (state.battle.battleInterval) {
    clearInterval(state.battle.battleInterval);
    state.battle.battleInterval = null;
  }

  // Only start if not paused and has requirements
  if (!state.battle.paused && state.battle.currentEnemy && state.battle.slots.some(slot => slot !== null)) {
    state.battle.battleInterval = setInterval(() => {
      // Skip entire loop if paused
      if (state.battle.paused) {
        return;
      }
      
      // Skip if no enemy or no cards in slot 0
      if (!state.battle.currentEnemy || !state.battle.slots[0]) {
        clearInterval(state.battle.battleInterval);
        state.battle.battleInterval = null;
        state.battle.paused = true;
        
        // Update pause button immediately if it exists
        const pauseBtn = document.querySelector('.battle-pause-btn');
        if (pauseBtn) {
          pauseBtn.classList.add('paused');
          pauseBtn.textContent = 'Start Battle';
        }
        
        updateBattleUI();
        return;
      }

      // Check enemy HP first
      if (state.battle.currentEnemy.currentHp <= 0) {
        defeatEnemy();
        return;
      }

      // Each card attacks
      state.battle.slots.forEach((card, index) => {
        if (!card) return;

        const damage = card.attack;
        state.battle.currentEnemy.currentHp -= damage;

        // Show damage number
        showDamageNumber(damage, 'enemy');

        // Check if enemy is defeated
        if (state.battle.currentEnemy.currentHp <= 0) {
          defeatEnemy();
          return;
        }
      });

      // Top card takes damage only if enemy still alive
      if (!state.battle.paused && state.battle.currentEnemy && state.battle.slots[0]) {
        const damage = state.battle.currentEnemy.attack;
        state.battle.slots[0].currentHp -= damage;

        // Show damage number on slot 0
        showDamageNumber(damage, 'slot0');

        // Check if top card is defeated
        if (state.battle.slots[0].currentHp <= 0) {
          removeTopCard();
        }
      }

      // Save state and update UI
      saveState();
      if (currentTab === 'battles') {
        updateBattleStats();
      }
    }, 500);
  }
}

// Update card placement logic to auto-start battle when 3 cards are placed
function placeBattleCard(cardId, slotIndex) {
  // ...existing placement code...

  // After placing card, check if all slots are filled
  if (state.battle.slots.every(slot => slot !== null)) {
    state.battle.paused = false;
    startBattleLoop();
  }
  
  updateBattleUI();
}

// Add filter menu functions
function showRealmFilterMenu(btn) {
  const menu = document.createElement('div');
  menu.className = 'filter-menu';
  
  // Add "All Realms" option
  menu.innerHTML = `
    <div class="filter-option ${!state.battle.filterRealm ? 'active' : ''}" 
         data-realm="null">
      All Realms
    </div>
  `;

  // Add unlocked realms
  realms.filter(r => r.unlocked).forEach(realm => {
    menu.innerHTML += `
      <div class="filter-option ${state.battle.filterRealm === realm.id ? 'active' : ''}" 
           data-realm="${realm.id}"
           style="color: ${realmColors[realm.id]}">
        ${realm.name}
      </div>
    `;
  });

  showFilterMenu(btn, menu, (option) => {
    state.battle.filterRealm = option.dataset.realm === 'null' ? 
      null : 
      Number(option.dataset.realm);
    updateBattleUI();
  });
}

function showRarityFilterMenu(btn) {
  const menu = document.createElement('div');
  menu.className = 'filter-menu';
  
  // Add "All Rarities" option
  menu.innerHTML = `
    <div class="filter-option ${!state.battle.filterRarity ? 'active' : ''}" 
         data-rarity="null">
      All Rarities
    </div>
  `;

  // Add rarities
  window.rarities.forEach(rarity => {
    menu.innerHTML += `
      <div class="filter-option ${state.battle.filterRarity === rarity ? 'active' : ''}" 
           data-rarity="${rarity}"
           style="color: var(--rarity-${rarity})">
        ${rarity.toUpperCase()}
      </div>
    `;
  });

  showFilterMenu(btn, menu, (option) => {
    state.battle.filterRarity = option.dataset.rarity === 'null' ? 
      null : 
      option.dataset.rarity;
    updateBattleUI();
  });
}

function showFilterMenu(btn, menu, onSelect) {
  // Position menu below button
  const rect = btn.getBoundingClientRect();
  menu.style.position = 'absolute';
  menu.style.top = `${rect.bottom + 4}px`;
  menu.style.left = `${rect.left}px`;
  
  // Add click handlers
  menu.querySelectorAll('.filter-option').forEach(option => {
    option.addEventListener('click', () => {
      onSelect(option);
      menu.remove();
    });
  });

  // Add click outside to close
  document.addEventListener('click', function closeMenu(e) {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.remove();
      document.removeEventListener('click', closeMenu);
    }
  });

  document.body.appendChild(menu);
}

// Add help modal function
function showBattleHelp() {
  const dialog = document.createElement('div');
  dialog.className = 'sacrifice-dialog';
  dialog.innerHTML = `
    <div class="sacrifice-content battle-help-modal">
      <h2>How do Battles Work?</h2>

      <h3>Overview</h3>
      <p>Battles allow you to unlock cards by defeating them in combat. Each victory permanently unlocks that card for your black hole pokes.</p>

      <h3>Battle Mechanics</h3>
      <ul>
        <li><strong>Card Stats:</strong> In battle, cards use their Power × Tier × √Level for Attack, and Defense × √Quantity for HP.</li>
        <li><strong>Combat:</strong> Every 0.5 seconds, your cards attack the enemy, and the enemy attacks your front card.</li>
        <li><strong>Card Slots:</strong> You can place up to 3 cards in battle slots. The frontmost card takes damage while all cards deal damage.</li>
      </ul>

      <h3>Sacrificing Cards</h3>
      <ul>
        <li>To place a card in battle, you must sacrifice it from your collection.</li>
        <li>Sacrificing resets the card's level, tier, and quantity to 0.</li>
        <li>The sacrificed card is locked for 24 hours after the battle. This prevents you from getting it from pokes and merchants.</li>
        <li>All effects from the sacrificed card are removed on sacrifice.</li>
      </ul>

      <h3>Strategy Tips</h3>
      <ul>
        <li>Place your highest HP card in front to tank damage.</li>
        <li>Use multiple cards to increase your total damage output.</li>
        <li>Consider the 24-hour lockout when choosing cards to sacrifice.</li>
        <li>Check the enemy's stats to plan your strategy.</li>
      </ul>
    </div>
  `;

  // Handle click outside to close
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.remove();
    }
  });

  document.body.appendChild(dialog);
}