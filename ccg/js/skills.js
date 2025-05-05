// js/skills.js

// --- SKILLS DATA ---
window.skills = [
  {
    id: 1001,
    name: "Unlock Sea World Realm",
    description: "Black Hole pokes can now give cards from Sea World realm.",
    cost: { realmId: 1, currencyId: "stone", amount: 5e4 },
    unlocked: false,
    purchased: false
  },
  {
    id: 1002,
    name: "Unlock Bugdom Realm",
    description: "Black Hole pokes can now give cards from Bugdom realm.",
    cost: { realmId: 2, currencyId: "coral", amount: 1e5 },
    unlocked: false,
    purchased: false
  },
  {
    id: 1003,
    name: "Unlock Aviary Realm",
    description: "Black Hole pokes can now give cards from Aviary realm.",
    cost: { realmId: 3, currencyId: "pollen", amount: 2e5 },
    unlocked: false,
    purchased: false
  },
  {
    id: 2001,
    name: "More Cards",
    description: "+2 to max cards per poke.",
    cost: { realmId: 1, currencyId: "stone", amount: 5e3 },
    unlocked: false,
    purchased: false
  },
  {
    id: 2002,
    name: "More Cards 2",
    description: "+5 to max cards per poke.",
    cost: { realmId: 2, currencyId: "coral", amount: 1e4 },
    unlocked: false,
    purchased: false
  },
  {
    id: 2003,
    name: "More Cards 3",
    description: "+8 to max cards per poke.",
    cost: { realmId: 3, currencyId: "pollen", amount: 1.5e4 },
    unlocked: false,
    purchased: false
  },
  {
    id: 2004,
    name: "More Cards 4",
    description: "+10 to max cards per poke.",
    cost: { realmId: 4, currencyId: "eggs", amount: 2e4 },
    unlocked: false,
    purchased: false
  },
  {
    id: 2101,
    name: "Massive Black Hole",
    description: "+10 to max cards per poke.",
    cost: { realmId: 1, currencyId: "stone", amount: 1e7 },
    unlocked: false,
    purchased: false
  },
  {
    id: 2202,
    name: "Massive Black Hole 2",
    description: "+20 to max cards per poke.",
    cost: { realmId: 2, currencyId: "coral", amount: 2e7 },
    unlocked: false,
    purchased: false
  },
  {
    id: 2303,
    name: "Massive Black Hole 3",
    description: "+50 to max cards per poke.",
    cost: { realmId: 3, currencyId: "pollen", amount: 3e7 },
    unlocked: false,
    purchased: false
  },
  {
    id: 2404,
    name: "Massive Black Hole 4",
    description: "+100 to max cards per poke.",
    cost: { realmId: 4, currencyId: "eggs", amount: 4e7 },
    unlocked: false,
    purchased: false
  },
  {
    id: 3001,
    name: "Faster Poke",
    description: "Decrease base cooldown for Rocks by 0.5s.",
    cost: { realmId: 1, currencyId: "stone", amount: 1000 },
    unlocked: false,
    purchased: false
  },
  {
    id: 3002,
    name: "Faster Poke 2",
    description: "Decrease base cooldown for Sea World by 2s.",
    cost: { realmId: 2, currencyId: "coral", amount: 2000 },
    unlocked: false,
    purchased: false
  },
  {
    id: 3003,
    name: "Faster Poke 3",
    description: "Decrease base cooldown for Bugdom by 5s.",
    cost: { realmId: 3, currencyId: "pollen", amount: 3000 },
    unlocked: false,
    purchased: false
  },
  {
    id: 3004,
    name: "Faster Poke 4",
    description: "Decrease base cooldown for Aviary by 10s.",
    cost: { realmId: 4, currencyId: "eggs",  amount: 4000 },
    unlocked: false,
    purchased: false
  },
  {
    id: 4001,
    name: "Not Less Cards",
    description: "+1 to min cards per poke.",
    cost: { realmId: 1, currencyId: "stone", amount: 1e6 },
    unlocked: false,
    purchased: false
  },
  {
    id: 4002,
    name: "Not Less Cards 2",
    description: "+2 to min cards per poke.",
    cost: { realmId: 2, currencyId: "coral", amount: 1e6 },
    unlocked: false,
    purchased: false
  },
  {
    id: 4003,
    name: "Not Less Cards 3",
    description: "+3 to min cards per poke.",
    cost: { realmId: 3, currencyId: "pollen", amount: 1e6 },
    unlocked: false,
    purchased: false
  },
  {
    id: 4004,
    name: "Not Less Cards 4",
    description: "+4 to min cards per poke.",
    cost: { realmId: 4, currencyId: "eggs", amount: 1e6 },
    unlocked: false,
    purchased: false
  },
  {
    id: 5001,
    name: "Nobody Likes Rocks",
    description: "Rocks realm deselect multiplier reduced by 50%.",
    cost: { realmId: 2, currencyId: "stone", amount: 1e8 },
    unlocked: false,
    purchased: false
  },
  {
    id: 5002,
    name: "The Sea Scares Me",
    description: "Sea World realm deselect multiplier reduced by 50%.",
    cost: { realmId: 3, currencyId: "coral", amount: 1e9 },
    unlocked: false,
    purchased: false
  },
  {
    id: 5003,
    name: "To Hell with Bugs",
    description: "Bugdom realm deselect multiplier reduced by 50%.",
    cost: { realmId: 4, currencyId: "pollen", amount: 1e9 },
    unlocked: false,
    purchased: false
  },
  {
    id: 6001,
    name: "Fan of Capitalism",
    description: "+1 card offered by merchants.",
    cost: { realmId: 1, currencyId: "stone", amount: 2e5 },
    unlocked: false,
    purchased: false
  },
  {
    id: 6002,
    name: "Fan of Capitalism 2",
    description: "+1 card offered by merchants.",
    cost: { realmId: 2, currencyId: "coral", amount: 2e5 },
    unlocked: false,
    purchased: false
  },
  {
    id: 6003,
    name: "Fan of Capitalism 3",
    description: "+1 card offered by merchants.",
    cost: { realmId: 3, currencyId: "pollen", amount: 2e5 },
    unlocked: false,
    purchased: false
  },
  {
    id: 6004,
    name: "Fan of Capitalism 4",
    description: "+1 card offered by merchants.",
    cost: { realmId: 4, currencyId: "eggs", amount: 2e5 },
    unlocked: false,
    purchased: false
  },
  {
    id: 7001,
    name: "Unlock New Merchant",
    description: "Yvette Ambervale is added to pool of traveling merchants.",
    cost: { realmId: 2, currencyId: "coral", amount: 5e5 },
    unlocked: false,
    purchased: false
  },
];

// --- FILTER STATE ---
const skillFilterState = {
  purchased:     'all',  // 'all' | 'purchased' | 'unpurchased'
  affordability: 'all',  // 'all' | 'affordable' | 'unaffordable'
  lock:          'all'   // 'all' | 'locked' | 'unlocked'
};

// --- RENDER FILTER CONTROLS ---
function initSkillsFilters() {
  const container = document.getElementById('skills-list');
  container.querySelectorAll('.skills-filters').forEach(el => el.remove());

  const filters = document.createElement('div');
  filters.className = 'skills-filters';

  const purchasedOpts = ['unpurchased','all','purchased'];
  const affordOpts    = ['all','affordable','unaffordable'];
  const lockOpts      = ['unlocked','all','locked'];

  const makeToggle = (labelMap, opts, key) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filterKey = key;
    btn.dataset.idx = opts.indexOf(skillFilterState[key]);
    btn.textContent = labelMap[ skillFilterState[key] ];
    btn.onclick = () => {
      let idx = (parseInt(btn.dataset.idx) + 1) % opts.length;
      btn.dataset.idx = idx;
      skillFilterState[key] = opts[idx];
      btn.textContent = labelMap[ opts[idx] ];
      renderSkillsTab();
    };
    return btn;
  };

  const purchasedLabels = {
    all: 'All',
    purchased: 'Purchased',
    unpurchased: 'Unpurchased'
  };
  const affordLabels = {
    all: 'All',
    affordable: 'Affordable',
    unaffordable: 'Unaffordable'
  };
  const lockLabels = {
    all: 'All',
    locked: 'Locked',
    unlocked: 'Unlocked'
  };

  skillFilterState.purchased     = 'unpurchased';
  skillFilterState.affordability = 'all';
  skillFilterState.lock          = 'unlocked';

  filters.append(
    makeToggle(purchasedLabels, purchasedOpts, 'purchased'),
    makeToggle(affordLabels,    affordOpts,    'affordability'),
    makeToggle(lockLabels,      lockOpts,      'lock')
  );
  container.prepend(filters);
}

// --- RENDER SKILLS GRID ---
function renderSkillsTab() {
  const list = document.getElementById('skills-list');
  // clear old tiles and grid (keep filters)
  list.querySelectorAll('.skill-tile, .skills-grid').forEach(el => el.remove());

  const grid = document.createElement('div');
  grid.className = 'skills-grid';

  skills.forEach(s => {
    const realmUnlocked = realmMap[s.cost.realmId].unlocked;
    const owned         = s.purchased;
    const curAmt        = state.currencies[s.cost.currencyId] || new Decimal(0);
    const affordable    = curAmt.greaterThanOrEqualTo(s.cost.amount);
    const locked        = !realmUnlocked;

    // filters
    if (skillFilterState.purchased==='purchased'   && !owned)      return;
    if (skillFilterState.purchased==='unpurchased' &&  owned)      return;
    if (skillFilterState.lock==='locked'     && !locked)           return;
    if (skillFilterState.lock==='unlocked'   &&  locked)           return;
    if (skillFilterState.affordability==='affordable'   && !affordable)   return;
    if (skillFilterState.affordability==='unaffordable' &&  affordable)   return;

    const tile = document.createElement('button');
    tile.className = 'skill-tile';
    tile.style.borderColor = realmColors[s.cost.realmId];

    if (locked)           tile.classList.add('locked');
    else if (owned)       tile.classList.add('purchased');
    else if (!affordable) tile.classList.add('unaffordable');
    else                  tile.classList.add('affordable');

    // build content
    const iconName = s.cost.currencyId + '.png';
    tile.innerHTML = `
      <h4>${s.name}</h4>
      <p class="skill-desc">${locked ? '' : s.description}</p>
      ${locked ? '' : `
      <div class="skill-cost">
        ${formatNumber(s.cost.amount)}
        <img src="assets/images/currencies/${iconName}" class="icon"/>
      </div>`}
    `;

    if (!locked && !owned && affordable) {
      tile.onclick = () => {
        buySkill(s.id);
        s.purchased = true;
        renderSkillsTab();
      };
    }

    grid.appendChild(tile);
  });

  list.appendChild(grid);
}

// --- PURCHASE LOGIC ---
function applySkill(id, skipCost = false) {
  console.log("applySkill", id, skipCost);
  const s = skillMap[id];
  if (!s || s.purchased) return;

  // 1) optionally pay
  if (!skipCost) {
    const cur    = state.currencies[s.cost.currencyId];
    const amount = new Decimal(s.cost.amount);
    if (cur.lessThan(amount)) return;
    state.currencies[s.cost.currencyId] = cur.minus(amount);
  }

  // 2) mark purchased & unlocked
  s.purchased = true;
  s.unlocked  = true;

  // 3) apply its effect
  switch (s.id) {
    case 1001: // Unlock Sea World Realm
      realms[1].unlocked = true;
      initCardsFilters();
      renderRealmFilters();
      break;
    case 1002: // Unlock Bugdom Realm
      realms[2].unlocked = true;
      initCardsFilters();
      renderRealmFilters();
      break;
    case 1003: // Unlock Aviary Realm
      realms[3].unlocked = true;
      initCardsFilters();
      renderRealmFilters();
      break;
    case 2001: // More Cards
      state.effects.maxCardsPerPoke += 2;
      break;
    case 2002:
      state.effects.maxCardsPerPoke += 5;
      break;
    case 2003:
      state.effects.maxCardsPerPoke += 8;
      break;
    case 2004:
      state.effects.maxCardsPerPoke += 10;
      break;
    case 2101: // Massive Black Hole
      state.effects.maxCardsPerPoke += 10;
      break;
    case 2202:
      state.effects.maxCardsPerPoke += 20;
      break;
    case 2303:
      state.effects.maxCardsPerPoke += 50;
      break;
    case 2404:
      state.effects.maxCardsPerPoke += 100;
      break;
    case 3001: // Faster Poke
      realms[s.cost.realmId - 1].cooldown -= 0.5;
      updatePokeFilterStats();
      renderRealmFilters();
      break;
    case 3002:
      realms[s.cost.realmId - 1].cooldown -= 2;
      updatePokeFilterStats();
      renderRealmFilters();
      break;
    case 3003:
      realms[s.cost.realmId - 1].cooldown -= 5;
      updatePokeFilterStats();
      renderRealmFilters();
      break;
    case 3004:
      realms[s.cost.realmId - 1].cooldown -= 10;
      updatePokeFilterStats();
      renderRealmFilters();
      break;
    case 4001: // Not Less Cards
      state.effects.minCardsPerPoke += 1;
      break;
    case 4002:
      state.effects.minCardsPerPoke += 2;
      break;
    case 4003:
      state.effects.minCardsPerPoke += 3;
      break;
    case 4004:
      state.effects.minCardsPerPoke += 4;
      break;
    case 5001: // Nobody Likes Rocks
      realms[0].deselectMultiplier /= 2;
      updatePokeFilterStats();
      break;
    case 5002: // The Sea Scares Me
      realms[1].deselectMultiplier /= 2;
      updatePokeFilterStats();
      break;
    case 5003: // To Hell with Bugs
      realms[2].deselectMultiplier /= 2;
      updatePokeFilterStats();
      break;
    case 6001: // Fan of Capitalism
      state.effects.merchantNumCards += 1;
      break;
    case 6002: // Fan of Capitalism 2
      state.effects.merchantNumCards += 1;
      break;
    case 6003: // Fan of Capitalism 3
      state.effects.merchantNumCards += 1;
      break;
    case 6004: // Fan of Capitalism 4
      state.effects.merchantNumCards += 1;
      break;
    case 7001: // Unlock New Merchant
      unlockMerchantByName('Yvette Ambervale');
      break;
  }

  // 4) refresh UI
  renderSkillsTab();
  updateCurrencyBar();
}

// replace your old buySkill:
function buySkill(id) {
  applySkill(id, /*skipCost=*/false);
}
