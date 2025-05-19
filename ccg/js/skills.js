// js/skills.js

// --- FILTER STATE ---
const skillFilterState = {
  purchased:     'unpurchased',  // 'purchased' | 'unpurchased'
  affordability: 'all',  // 'all' | 'affordable'
  lock:          'unlocked',   // 'locked' | 'unlocked'
  currencies:    new Set()  // Set of selected currency IDs
};

// --- RENDER FILTER CONTROLS ---
function initSkillsFilters() {
  const container = document.getElementById('skills-list');
  // remove any previous filter row
  container.querySelectorAll('.skills-filters').forEach(el => el.remove());

  // build the filter bar
  const filters = document.createElement('div');
  filters.className = 'skills-filters';

  // --- helper to build the three toggles ---
  function makeToggle(labelMap, opts, key) {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filterKey = key;
    btn.dataset.idx = opts.indexOf(skillFilterState[key]);
    btn.textContent = labelMap[ skillFilterState[key] ];
    btn.onclick = () => {
      let idx = (parseInt(btn.dataset.idx, 10) + 1) % opts.length;
      btn.dataset.idx = idx;
      skillFilterState[key] = opts[idx];
      btn.textContent = labelMap[ opts[idx] ];
      renderSkillsTab();
    };
    return btn;
  }

  // reset to sensible defaults
  skillFilterState.purchased     = 'unpurchased';
  skillFilterState.affordability = 'all';
  skillFilterState.lock          = 'unlocked';
  skillFilterState.currencies    = new Set(currencies.filter(c => state.currencies[c.id]?.greaterThan(0)).map(c => c.id)); // Initialize with only non-zero currencies

  const purchasedOpts = ['unpurchased','purchased'];
  const affordOpts    = ['all','affordable'];
  const lockOpts      = ['unlocked','locked'];

  const purchasedLabels = {
    purchased: 'Purchased',
    unpurchased: 'Unpurchased'
  };
  const affordLabels = {
    all: 'All',
    affordable: 'Affordable'
  };
  const lockLabels = {
    locked: 'Locked',
    unlocked: 'Unlocked'
  };

  // add the three toggle‐buttons
  filters.append(
    makeToggle(purchasedLabels, purchasedOpts, 'purchased'),
    makeToggle(affordLabels,    affordOpts,    'affordability'),
    makeToggle(lockLabels,      lockOpts,      'lock')
  );

  // --- now build the currency dropdown with checkboxes ---
  const wrapper = document.createElement('div');
  wrapper.className = 'currency-filter-wrapper';

  const dropdownBtn = document.createElement('button');
  dropdownBtn.className = 'currency-filter-btn';
  dropdownBtn.innerHTML = `
    <span class="currency-filter-label">Currencies</span>
    <span class="currency-filter-count">${skillFilterState.currencies.size}</span>
  `;
  wrapper.appendChild(dropdownBtn);

  const dropdownContent = document.createElement('div');
  dropdownContent.className = 'currency-filter-dropdown';
  
  currencies.forEach(cur => {
    const label = document.createElement('label');
    label.className = 'currency-filter-option';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = cur.id;
    checkbox.checked = skillFilterState.currencies.has(cur.id);
    
    const icon = document.createElement('img');
    const currencyPath = `assets/images/currencies/${cur.icon}`;
    imageCache.getImage('currencies', currencyPath).then(img => {
        if (img) icon.src = img.src;
    });
    icon.className = 'currency-filter-icon';
    
    const name = document.createElement('span');
    name.textContent = cur.name;
    
    label.append(checkbox, icon, name);
    
    checkbox.onchange = () => {
      if (checkbox.checked) {
        skillFilterState.currencies.add(cur.id);
      } else {
        skillFilterState.currencies.delete(cur.id);
      }
      dropdownBtn.querySelector('.currency-filter-count').textContent = skillFilterState.currencies.size;
      renderSkillsTab();
    };
    
    dropdownContent.appendChild(label);
  });
  
  wrapper.appendChild(dropdownContent);
  
  // Toggle dropdown on button click
  dropdownBtn.onclick = (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
  };
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      dropdownContent.classList.remove('show');
    }
  });

  filters.appendChild(wrapper);
  container.prepend(filters);
}

// Data structure to hold sorted unlocked/unpurchased skills by currency
const sortedSkillsByCurrency = {};

// Helper to sort skills by currency and cost amount
function sortSkills(skillsList) {
  return skillsList.slice().sort((a, b) => {
    const orderA = currencies.findIndex(c => c.id === a.cost.currencyId);
    const orderB = currencies.findIndex(c => c.id === b.cost.currencyId);
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    return a.cost.amount - b.cost.amount;
  });
}

// Initialize sortedSkillsByCurrency on load
function initializeSortedSkills() {
  // Clear existing
  for (const key in sortedSkillsByCurrency) {
    delete sortedSkillsByCurrency[key];
  }

  // Filter unlocked/unpurchased skills
  const unlockedUnpurchasedSkills = skills.filter(s => {
    const realmUnlocked = realmMap[s.cost.realmId]?.unlocked;
    return realmUnlocked && !s.purchased;
  });

  // Group by currency
  const grouped = {};
  unlockedUnpurchasedSkills.forEach(s => {
    if (!grouped[s.cost.currencyId]) grouped[s.cost.currencyId] = [];
    grouped[s.cost.currencyId].push(s);
  });

  // Sort each group and store
  for (const currencyId in grouped) {
    sortedSkillsByCurrency[currencyId] = sortSkills(grouped[currencyId]);
  }
}

// Update sortedSkillsByCurrency when a new realm is unlocked
function addSkillsForRealm(realmId) {
  const newSkills = skills.filter(s => s.cost.realmId === realmId && !s.purchased);
  newSkills.forEach(s => {
    const currencyId = s.cost.currencyId;
    if (!sortedSkillsByCurrency[currencyId]) {
      sortedSkillsByCurrency[currencyId] = [];
    }
    sortedSkillsByCurrency[currencyId].push(s);
    // Keep the list sorted
    sortedSkillsByCurrency[currencyId].sort((a, b) => a.cost.amount - b.cost.amount);
  });
}

// --- RENDER SKILLS GRID ---
function renderSkillsTab() {
  const list = document.getElementById('skills-list');
  // remove any existing skill tiles and grid, but keep the filter controls
  list.querySelectorAll('.skill-tile, .skills-grid').forEach(el => el.remove());

  const grid = document.createElement('div');
  grid.className = 'skills-grid';

  // Create a set to track rendered skill IDs to avoid duplicates
  const renderedSkillIds = new Set();

  // If showing purchased skills, sort them by currency and amount
  let purchasedSkills = [];
  if (skillFilterState.purchased === 'purchased') {
    purchasedSkills = window.skills
      .filter(s => s.purchased)
      .sort((a, b) => {
        const orderA = currencies.findIndex(c => c.id === a.cost.currencyId);
        const orderB = currencies.findIndex(c => c.id === b.cost.currencyId);
        if (orderA !== orderB) {
          return orderA - orderB;
        }
        return a.cost.amount - b.cost.amount;
      });
  }

  // First, render skills from sortedSkillsByCurrency for unlocked and unpurchased skills
  currencies.forEach(currency => {
    const currencyId = currency.id;
    const skillsList = sortedSkillsByCurrency[currencyId] || [];

    skillsList.forEach(s => {
      const realmUnlocked = realmMap[s.cost.realmId]?.unlocked;
      const owned = s.purchased;
      const curAmt = state.currencies[s.cost.currencyId] || new Decimal(0);
      const affordable = curAmt.greaterThanOrEqualTo(s.cost.amount);
      const locked = !realmUnlocked;

      // Apply filtering logic for unpurchased/unlocked skills
      if (skillFilterState.purchased === 'purchased' && !owned) return;
      if (skillFilterState.purchased === 'unpurchased' && owned) return;
      if (skillFilterState.lock === 'locked' && !locked) return;
      if (skillFilterState.lock === 'unlocked' && locked) return;
      if (skillFilterState.affordability === 'affordable' && !affordable) return;
      
      // Apply currency filter - skip if currency is not selected
      if (!skillFilterState.currencies.has(s.cost.currencyId)) return;

      // Check if the skill has already been rendered
      if (renderedSkillIds.has(s.id)) return;

      // Add the skill ID to the set to avoid duplicates
      renderedSkillIds.add(s.id);

      // Build the tile
      const tile = document.createElement('button');
      tile.className = 'skill-tile';
      tile.style.borderColor = realmColors[s.cost.realmId];

      if (locked) tile.classList.add('locked');
      else if (owned) tile.classList.add('purchased');
      else if (!affordable) tile.classList.add('unaffordable');
      else tile.classList.add('affordable');

      const iconName = s.cost.currencyId + '.png';
      const currencyPath = `assets/images/currencies/${iconName}`;
      imageCache.getImage('currencies', currencyPath).then(img => {
          if (img) {
              tile.innerHTML = `
                <h4>${s.name}</h4>
                <p class="skill-desc">${locked ? '' : s.description}</p>
                ${locked ? '' : `
                <div class="skill-cost">
                  ${formatNumber(s.cost.amount)}
                  <img src="${img.src}" class="icon"/>
                </div>`}
              `;
          }
      });

      if (!locked && !owned && affordable) {
        tile.onclick = () => {
          buySkill(s.id);
          renderSkillsTab();
        };
      }

      grid.appendChild(tile);
    });
  });

  // Now, check the original skills array for purchased and locked skills
  const skillsToCheck = skillFilterState.purchased === 'purchased' ? purchasedSkills : window.skills;
  skillsToCheck.forEach(s => {
    const owned = s.purchased;
    const realmUnlocked = realmMap[s.cost.realmId]?.unlocked;
    const locked = !realmUnlocked;
    const curAmt = state.currencies[s.cost.currencyId] || new Decimal(0);
    const affordable = curAmt.greaterThanOrEqualTo(s.cost.amount);

    // Apply filtering logic for purchased and locked skills
    if (skillFilterState.purchased === 'purchased' && !owned) return;
    if (skillFilterState.purchased === 'unpurchased' && owned) return;
    if (skillFilterState.lock === 'locked' && !locked) return;
    if (skillFilterState.lock === 'unlocked' && locked) return;

    // Check affordability for original skills only if the affordable filter is active
    if (skillFilterState.affordability === 'affordable' && !affordable) return;

    // Skip if currency is not selected
    if (!skillFilterState.currencies.has(s.cost.currencyId)) return;

    // Check if the skill has already been rendered
    if (renderedSkillIds.has(s.id)) return;

    // Add the skill ID to the set to avoid duplicates
    renderedSkillIds.add(s.id);

    // Build the tile
    const tile = document.createElement('button');
    tile.className = 'skill-tile';
    tile.style.borderColor = realmColors[s.cost.realmId];

    if (locked) tile.classList.add('locked');
    else if (owned) tile.classList.add('purchased');
    else tile.classList.add('affordable');

    const iconName = s.cost.currencyId + '.png';
    const currencyPath = `assets/images/currencies/${iconName}`;
    imageCache.getImage('currencies', currencyPath).then(img => {
        if (img) {
            tile.innerHTML = `
              <h4>${s.name}</h4>
              <p class="skill-desc">${locked ? '' : s.description}</p>
              ${locked ? '' : `
              <div class="skill-cost">
                ${formatNumber(s.cost.amount)}
                <img src="${img.src}" class="icon"/>
              </div>`}
            `;
        }
    });

    if (!locked && !owned) {
      tile.onclick = () => {
        buySkill(s.id);
        renderSkillsTab();
      };
    }

    grid.appendChild(tile);
  });

  // If no skills are rendered, you might want to show a message
  if (grid.children.length === 0) {
    const noSkillsMessage = document.createElement('div');
    noSkillsMessage.className = 'no-skills-message';
    noSkillsMessage.textContent = 'No skills match the current filters.';
    grid.appendChild(noSkillsMessage);
  }

  list.appendChild(grid);
}

// Optimized checkAffordableSkills to check only first skill in each sorted list
function checkAffordableSkills() {
  let hasAffordable = false;

  for (const currencyId in sortedSkillsByCurrency) {
    const skillsList = sortedSkillsByCurrency[currencyId];
    if (!skillsList || skillsList.length === 0) continue;

    for (const s of skillsList) {
      if (s.purchased) continue;
      const realmUnlocked = realmMap[s.cost.realmId].unlocked;
      if (!realmUnlocked) continue;

      const curAmt = state.currencies[s.cost.currencyId] || new Decimal(0);
      if (curAmt.greaterThanOrEqualTo(s.cost.amount)) {
        hasAffordable = true;
        break;
      }
      // Since list is sorted by cost ascending, if first not affordable, no need to check further
      break;
    }
    if (hasAffordable) break;
  }

  const skillsTab = document.getElementById('tab-btn-skills');
  if (!skillsTab) {
    console.error('Skills tab button not found!');
    return;
  }

  if (hasAffordable) {
    skillsTab.classList.add('new-offers');
  } else {
    skillsTab.classList.remove('new-offers');
  }
}

// Updated buySkill to update sortedSkillsByCurrency after purchase
function buySkill(id) {
  applySkill(id, /*skipCost=*/false);

  checkAffordableSkills(); // Check if any other skills are affordable after purchase
}
