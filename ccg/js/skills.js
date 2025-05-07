// js/skills.js

// --- SKILLS DATA ---
window.skills = [
  {
    id: 1001,
    name: "Unlock Sea World Realm",
    description: "Black Hole pokes and Merchants can now give cards from Sea World realm.",
    cost: { realmId: 1, currencyId: "stone", amount: 5e4 },
    purchased: false
  },
  {
    id: 1002,
    name: "Unlock Bugdom Realm",
    description: "Black Hole pokes and Merchants can now give cards from Bugdom realm.",
    cost: { realmId: 2, currencyId: "coral", amount: 1e5 },
    purchased: false
  },
  {
    id: 1003,
    name: "Unlock Aviary Realm",
    description: "Black Hole pokes and Merchants can now give cards from Aviary realm.",
    cost: { realmId: 3, currencyId: "pollen", amount: 2e5 },
    purchased: false
  },
  {
    id: 1004,
    name: "Unlock Ancient Relics Realm",
    description: "Black Hole pokes and Merchants can now give cards from Ancient Relics realm.",
    cost: { realmId: 4, currencyId: "egg", amount: 3e5 },
    purchased: false
  },
  {
    id: 2001,
    name: "More Cards",
    description: "+2 to max cards per poke.",
    cost: { realmId: 1, currencyId: "stone", amount: 5e3 },
    purchased: false
  },
  {
    id: 2002,
    name: "More Cards 2",
    description: "+5 to max cards per poke.",
    cost: { realmId: 2, currencyId: "coral", amount: 1e4 },
    purchased: false
  },
  {
    id: 2003,
    name: "More Cards 3",
    description: "+8 to max cards per poke.",
    cost: { realmId: 3, currencyId: "pollen", amount: 1.5e4 },
    purchased: false
  },
  {
    id: 2004,
    name: "More Cards 4",
    description: "+10 to max cards per poke.",
    cost: { realmId: 4, currencyId: "egg", amount: 2e4 },
    purchased: false
  },
  {
    id: 2005,
    name: "More Cards 5",
    description: "+15 to max cards per poke.",
    cost: { realmId: 1, currencyId: "rune", amount: 5e3 },
    purchased: false
  },
  {
    id: 2006,
    name: "More Cards 6",
    description: "+20 to max cards per poke.",
    cost: { realmId: 2, currencyId: "pearl", amount: 1e4 },
    purchased: false
  },
  {
    id: 2007,
    name: "More Cards 7",
    description: "+25 to max cards per poke.",
    cost: { realmId: 3, currencyId: "royal_jelly", amount: 1.5e4 },
    purchased: false
  },
  {
    id: 2008,
    name: "More Cards 8",
    description: "+30 to max cards per poke.",
    cost: { realmId: 4, currencyId: "feather", amount: 2e4 },
    purchased: false
  },
  {
    id: 2009,
    name: "More Cards 9",
    description: "+35 to max cards per poke.",
    cost: { realmId: 5, currencyId: "crystal", amount: 2.5e4 },
    purchased: false
  },
  {
    id: 2101,
    name: "Massive Black Hole",
    description: "+10 to max cards per poke.",
    cost: { realmId: 1, currencyId: "stone", amount: 1e7 },
    purchased: false
  },
  {
    id: 2202,
    name: "Massive Black Hole 2",
    description: "+20 to max cards per poke.",
    cost: { realmId: 2, currencyId: "coral", amount: 2e7 },
    purchased: false
  },
  {
    id: 2303,
    name: "Massive Black Hole 3",
    description: "+50 to max cards per poke.",
    cost: { realmId: 3, currencyId: "pollen", amount: 3e7 },
    purchased: false
  },
  {
    id: 2404,
    name: "Massive Black Hole 4",
    description: "+100 to max cards per poke.",
    cost: { realmId: 4, currencyId: "egg", amount: 4e7 },
    purchased: false
  },
  {
    id: 2505,
    name: "Massive Black Hole 5",
    description: "+100 to max cards per poke.",
    cost: { realmId: 1, currencyId: "rune", amount: 1e6 },
    purchased: false
  },
  {
    id: 2606,
    name: "Massive Black Hole 6",
    description: "+200 to max cards per poke.",
    cost: { realmId: 2, currencyId: "pearl", amount: 2e6 },
    purchased: false
  },
  {
    id: 2707,
    name: "Massive Black Hole 7",
    description: "+300 to max cards per poke.",
    cost: { realmId: 3, currencyId: "royal_jelly", amount: 3e6 },
    purchased: false
  },
  {
    id: 2808,
    name: "Massive Black Hole 8",
    description: "+400 to max cards per poke.",
    cost: { realmId: 4, currencyId: "feather", amount: 4e6 },
    purchased: false
  },
  {
    id: 2909,
    name: "Massive Black Hole 9",
    description: "+500 to max cards per poke.",
    cost: { realmId: 5, currencyId: "crystal", amount: 5e6 },
    purchased: false
  },
  {
    id: 3001,
    name: "Faster Poke",
    description: "Decrease base cooldown for Rocks by 0.5s.",
    cost: { realmId: 1, currencyId: "stone", amount: 1000 },
    purchased: false
  },
  {
    id: 3002,
    name: "Faster Poke 2",
    description: "Decrease base cooldown for Sea World by 2s.",
    cost: { realmId: 2, currencyId: "coral", amount: 2000 },
    purchased: false
  },
  {
    id: 3003,
    name: "Faster Poke 3",
    description: "Decrease base cooldown for Bugdom by 5s.",
    cost: { realmId: 3, currencyId: "pollen", amount: 3000 },
    purchased: false
  },
  {
    id: 3004,
    name: "Faster Poke 4",
    description: "Decrease base cooldown for Aviary by 10s.",
    cost: { realmId: 4, currencyId: "egg",  amount: 4000 },
    purchased: false
  },
  {
    id: 3005,
    name: "Faster Poke 5",
    description: "Decrease base cooldown for Ancient Relics by 15s.",
    cost: { realmId: 5, currencyId: "crystal", amount: 5000 },
    purchased: false
  },
  {
    id: 3101,
    name: "Even Faster Poke",
    description: "Decrease base cooldown for Rocks by 0.5s.",
    cost: { realmId: 3, currencyId: "pollen", amount: 1e5},
    purchased: false
  },
  {
    id: 3102,
    name: "Even Faster Poke 2",
    description: "Decrease base cooldown for Sea World by 2s.",
    cost: { realmId: 4, currencyId: "egg", amount: 2e5},
    purchased: false
  },
  {
    id: 3103,
    name: "Even Faster Poke 3",
    description: "Decrease base cooldown for Aviary by 10s.",
    cost: { realmId: 5, currencyId: "rune", amount: 1e7 },
    purchased: false
  },
  {
    id: 4001,
    name: "Not Less Cards",
    description: "+1 to min cards per poke.",
    cost: { realmId: 1, currencyId: "stone", amount: 1e6 },
    purchased: false
  },
  {
    id: 4002,
    name: "Not Less Cards 2",
    description: "+2 to min cards per poke.",
    cost: { realmId: 2, currencyId: "coral", amount: 1e6 },
    purchased: false
  },
  {
    id: 4003,
    name: "Not Less Cards 3",
    description: "+3 to min cards per poke.",
    cost: { realmId: 3, currencyId: "pollen", amount: 1e6 },
    purchased: false
  },
  {
    id: 4004,
    name: "Not Less Cards 4",
    description: "+4 to min cards per poke.",
    cost: { realmId: 4, currencyId: "egg", amount: 1e6 },
    purchased: false
  },
  {
    id: 4005,
    name: "Not Less Cards 5",
    description: "+2 to min cards per poke.",
    cost: { realmId: 1, currencyId: "rune", amount: 1e6 },
    purchased: false
  },
  {
    id: 4006,
    name: "Not Less Cards 6",
    description: "+4 to min cards per poke.",
    cost: { realmId: 2, currencyId: "pearl", amount: 1e6 },
    purchased: false
  },
  {
    id: 4007,
    name: "Not Less Cards 7",
    description: "+6 to min cards per poke.",
    cost: { realmId: 3, currencyId: "royal_jelly", amount: 1e6 },
    purchased: false
  },
  {
    id: 4008,
    name: "Not Less Cards 8",
    description: "+8 to min cards per poke.",
    cost: { realmId: 4, currencyId: "feather", amount: 1e6 },
    purchased: false
  },
  {
    id: 4009,
    name: "Not Less Cards 9",
    description: "+10 to min cards per poke.",
    cost: { realmId: 5, currencyId: "crystal", amount: 1e6 },
    purchased: false
  },
  {
    id: 5001,
    name: "Nobody Likes Rocks",
    description: "Rocks realm deselect multiplier reduced by 50%.",
    cost: { realmId: 2, currencyId: "stone", amount: 1e8 },
    purchased: false
  },
  {
    id: 5002,
    name: "The Sea Scares Me",
    description: "Sea World realm deselect multiplier reduced by 50%.",
    cost: { realmId: 3, currencyId: "coral", amount: 1e9 },
    purchased: false
  },
  {
    id: 5003,
    name: "To Hell with Bugs",
    description: "Bugdom realm deselect multiplier reduced by 50%.",
    cost: { realmId: 4, currencyId: "pollen", amount: 1e9 },
    purchased: false
  },
  {
    id: 5004,
    name: "Bird Aren't Real",
    description: "Aviary realm deselect multiplier reduced by 50%.",
    cost: { realmId: 5, currencyId: "egg", amount: 1e9 },
    purchased: false
  },
  {
    id: 6001,
    name: "Fan of Capitalism",
    description: "+1 card offered by merchants.",
    cost: { realmId: 1, currencyId: "stone", amount: 2e5 },
    purchased: false
  },
  {
    id: 6002,
    name: "Fan of Capitalism 2",
    description: "+1 card offered by merchants.",
    cost: { realmId: 2, currencyId: "coral", amount: 2e5 },
    purchased: false
  },
  {
    id: 6003,
    name: "Fan of Capitalism 3",
    description: "+1 card offered by merchants.",
    cost: { realmId: 3, currencyId: "pollen", amount: 2e5 },
    purchased: false
  },
  {
    id: 6004,
    name: "Fan of Capitalism 4",
    description: "+1 card offered by merchants.",
    cost: { realmId: 4, currencyId: "egg", amount: 2e5 },
    purchased: false
  },
  {
    id: 6005,
    name: "Fan of Capitalism 5",
    description: "+1 card offered by merchants.",
    cost: { realmId: 1, currencyId: "rune", amount: 2e5 },
    purchased: false
  },
  {
    id: 6006,
    name: "Fan of Capitalism 6",
    description: "+1 card offered by merchants.",
    cost: { realmId: 2, currencyId: "pearl", amount: 2e5 },
    purchased: false
  },
  {
    id: 6007,
    name: "Fan of Capitalism 7",
    description: "+1 card offered by merchants.",
    cost: { realmId: 3, currencyId: "royal_jelly", amount: 2e5 },
    purchased: false
  },
  {
    id: 6008,
    name: "Fan of Capitalism 8",
    description: "+1 card offered by merchants.",
    cost: { realmId: 4, currencyId: "feather", amount: 2e5 },
    purchased: false
  },
  {
    id: 6009,
    name: "Fan of Capitalism 9",
    description: "+1 card offered by merchants.",
    cost: { realmId: 5, currencyId: "crystal", amount: 2e5 },
    purchased: false
  },
  {
    id: 7001,
    name: "Unlock New Merchant",
    description: "Yvette Ambervale is added to pool of traveling merchants.",
    cost: { realmId: 2, currencyId: "coral", amount: 3e5 },
    purchased: false
  },
  {
    id: 7002,
    name: "Unlock New Merchant 2",
    description: "Orin Saltstride is added to pool of traveling merchants.",
    cost: { realmId: 3, currencyId: "pollen", amount: 3e5 },
    purchased: false
  },
  {
    id: 7003,
    name: "Unlock New Merchant 3",
    description: "Petra Moonclasp is added to pool of traveling merchants.",
    cost: { realmId: 4, currencyId: "egg", amount: 3e5 },
    purchased: false
  },
  {
    id: 7004,
    name: "Unlock New Merchant 4",
    description: "Fergus Grainhand is added to pool of traveling merchants.",
    cost: { realmId: 5, currencyId: "crystal", amount: 3e5 },
    purchased: false
  },
  {
    id: 8001,
    name: "Lucky Skip",
    description: "+1% chance to skip Black Hole cooldown.",
    cost: { realmId: 1, currencyId: "stone", amount: 5e4 },
    purchased: false
  },
  {
    id: 8002,
    name: "Lucky Skip 2",
    description: "+1% chance to skip Black Hole cooldown.",
    cost: { realmId: 2, currencyId: "coral", amount: 5e4 },
    purchased: false
  },
  {
    id: 8003,
    name: "Lucky Skip 3",
    description: "+1% chance to skip Black Hole cooldown.",
    cost: { realmId: 3, currencyId: "pollen", amount: 5e4 },
    purchased: false
  },
  {
    id: 8004,
    name: "Lucky Skip 4",
    description: "+1% chance to skip Black Hole cooldown.",
    cost: { realmId: 4, currencyId: "egg", amount: 5e4 },
    purchased: false
  },
  {
    id: 8005,
    name: "Lucky Skip 5",
    description: "+1% chance to skip Black Hole cooldown.",
    cost: { realmId: 1, currencyId: "rune", amount: 5e4 },
    purchased: false
  },
  {
    id: 8006,
    name: "Lucky Skip 6",
    description: "+1% chance to skip Black Hole cooldown.",
    cost: { realmId: 2, currencyId: "pearl", amount: 5e4 },
    purchased: false
  },
  {
    id: 8007,
    name: "Lucky Skip 7",
    description: "+1% chance to skip Black Hole cooldown.",
    cost: { realmId: 3, currencyId: "royal_jelly", amount: 5e4 },
    purchased: false
  },
  {
    id: 8008,
    name: "Lucky Skip 8",
    description: "+1% chance to skip Black Hole cooldown.",
    cost: { realmId: 4, currencyId: "feather", amount: 5e4 },
    purchased: false
  },
  {
    id: 8009,
    name: "Lucky Skip 9",
    description: "+1% chance to skip Black Hole cooldown.",
    cost: { realmId: 5, currencyId: "crystal", amount: 5e4 },
    purchased: false
  },
  {
    id: 9001,
    name: "Faster Merchant",
    description: "Reduce merchant refresh time by 5 seconds.",
    cost: { realmId: 1, currencyId: "stone", amount: 1.5e4 },
    purchased: false
  },
  {
    id: 9002,
    name: "Faster Merchant 2",
    description: "Reduce merchant refresh time by 5 seconds.",
    cost: { realmId: 2, currencyId: "coral", amount: 1.5e4 },
    purchased: false
  },
  {
    id: 9003,
    name: "Faster Merchant 3",
    description: "Reduce merchant refresh time by 5 seconds.",
    cost: { realmId: 3, currencyId: "pollen", amount: 1.5e4 },
    purchased: false
  },
  {
    id: 9004,
    name: "Faster Merchant 4",
    description: "Reduce merchant refresh time by 5 seconds.",
    cost: { realmId: 4, currencyId: "egg", amount: 1.5e4 },
    purchased: false
  },
  {
    id: 9005,
    name: "Faster Merchant 5",
    description: "Reduce merchant refresh time by 5 seconds.",
    cost: { realmId: 1, currencyId: "rune", amount: 1.5e4 },
    purchased: false
  },
  {
    id: 9006,
    name: "Faster Merchant 6",
    description: "Reduce merchant refresh time by 5 seconds.",
    cost: { realmId: 2, currencyId: "pearl", amount: 1.5e4 },
    purchased: false
  },
  {
    id: 9007,
    name: "Faster Merchant 7",
    description: "Reduce merchant refresh time by 5 seconds.",
    cost: { realmId: 3, currencyId: "royal_jelly", amount: 1.5e4 },
    purchased: false
  },
  {
    id: 9008,
    name: "Faster Merchant 8",
    description: "Reduce merchant refresh time by 5 seconds.",
    cost: { realmId: 4, currencyId: "feather", amount: 1.5e4 },
    purchased: false
  },
  {
    id: 9009,
    name: "Faster Merchant 9",
    description: "Reduce merchant refresh time by 5 seconds.",
    cost: { realmId: 5, currencyId: "crystal", amount: 1.5e4 },
    purchased: false
  },
  {
    id: 10001,
    name: "Resource Generator",
    description: "Generate stone equal to number of Realm 1 cards discovered squared per second.",
    cost: { realmId: 2, currencyId: "coral", amount: 8e5 },
    purchased: false
  },
  {
    id: 10002,
    name: "Resource Generator 2",
    description: "Generate coral equal to number of Realm 2 cards discovered squared per second.",
    cost: { realmId: 3, currencyId: "pollen", amount: 8e5 },
    purchased: false
  },
  {
    id: 10003,
    name: "Resource Generator 3",
    description: "Generate pollen equal to number of Realm 3 cards discovered squared per second.",
    cost: { realmId: 4, currencyId: "egg", amount: 8e5 },
    purchased: false
  },
  {
    id: 10004,
    name: "Resource Generator 4",
    description: "Generate egg equal to number of Realm 4 cards discovered squared per second.",
    cost: { realmId: 5, currencyId: "crystal", amount: 8e5 },
    purchased: false
  },
  {
    id: 11001,
    name: "Better Merchants",
    description: "Increase Merchant Rarity Scaling by 0.1.",
    cost: { realmId: 3, currencyId: "pollen", amount: 5e6 },
    purchased: false
  },
  {
    id: 11002,
    name: "Better Merchants 2",
    description: "Increase Merchant Rarity Scaling by 0.1.",
    cost: { realmId: 4, currencyId: "egg", amount: 5e6 },
    purchased: false
  },
  {
    id: 11003,
    name: "Better Merchants 3",
    description: "Increase Merchant Rarity Scaling by 0.1.",
    cost: { realmId: 5, currencyId: "crystal", amount: 5e6 },
    purchased: false
  },
  {
    id: 12001,
    name: "Hawking Radiation Harvester",
    description: "Unlocks a device that can passively harvest Hawking radiation from the black hole to reduce its cooldown. (10x slower offline)",
    cost: { realmId: 2, currencyId: "coral", amount: 25000 },
    purchased: false
  },
];

// --- FILTER STATE ---
const skillFilterState = {
  purchased:     'all',  // 'all' | 'purchased' | 'unpurchased'
  affordability: 'all',  // 'all' | 'affordable' | 'unaffordable'
  lock:          'all',   // 'all' | 'locked' | 'unlocked'
  currency:      'all'        // 'all' | <currencyId>
};

// --- RENDER FILTER CONTROLS ---
function initSkillsFilters() {
  const container = document.getElementById('skills-list');
  // remove any previous filter row
  container.querySelectorAll('.skills-filters').forEach(el => el.remove());

  // ensure we always have a currency filter state
  if (!skillFilterState.currency) {
    skillFilterState.currency = 'all';
  }

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

  const purchasedOpts = ['unpurchased','all','purchased'];
  const affordOpts    = ['all','affordable','unaffordable'];
  const lockOpts      = ['unlocked','all','locked'];

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

  // add the three toggle‐buttons
  filters.append(
    makeToggle(purchasedLabels, purchasedOpts, 'purchased'),
    makeToggle(affordLabels,    affordOpts,    'affordability'),
    makeToggle(lockLabels,      lockOpts,      'lock')
  );

  // --- now build the currency dropdown with external icon ---
  // ——— currency dropdown with optional icon ———
  const wrapper = document.createElement('div');
  wrapper.className = 'currency-filter-wrapper';

  // icon for the currently selected currency
  const iconEl = document.createElement('img');
  iconEl.className = 'currency-filter-icon';
  // hide the icon if "all" is selected
  if (skillFilterState.currency !== 'all') {
    const meta = currencies.find(c => c.id === skillFilterState.currency);
    iconEl.src = `assets/images/currencies/${meta.icon}`;
  } else {
    iconEl.style.display = 'none';
  }
  wrapper.appendChild(iconEl);

  const select = document.createElement('select');
  select.className = 'currency-filter-select';
  select.appendChild(new Option('All Currencies','all'));
  currencies.forEach(cur => {
    select.appendChild(new Option(cur.name, cur.id));
  });
  select.value = skillFilterState.currency;
  select.onchange = () => {
    skillFilterState.currency = select.value;
    if (select.value === 'all') {
      iconEl.style.display = 'none';
    } else {
      const meta = currencies.find(c => c.id === select.value);
      iconEl.src = `assets/images/currencies/${meta.icon}`;
      iconEl.style.display = '';
    }
    renderSkillsTab();
  };
  wrapper.appendChild(select);

  filters.appendChild(wrapper);


  container.prepend(filters);
}



// --- RENDER SKILLS GRID ---
function renderSkillsTab() {
  const list = document.getElementById('skills-list');
  // remove any existing skill tiles and grid, but keep the filter controls
  list.querySelectorAll('.skill-tile, .skills-grid').forEach(el => el.remove());

  const grid = document.createElement('div');
  grid.className = 'skills-grid';

  // take a sorted copy of skills: first by currency order from currencies array, then by amount
  [...skills]
    .sort((a, b) => {
      const orderA = currencies.findIndex(c => c.id === a.cost.currencyId);
      const orderB = currencies.findIndex(c => c.id === b.cost.currencyId);
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      return a.cost.amount - b.cost.amount;
    })
    .forEach(s => {
      const realmUnlocked = realmMap[s.cost.realmId].unlocked;
      const owned         = s.purchased;
      const curAmt        = state.currencies[s.cost.currencyId] || new Decimal(0);
      const affordable    = curAmt.greaterThanOrEqualTo(s.cost.amount);
      const locked        = !realmUnlocked;

      // filter by purchased / unpurchased
      if (skillFilterState.purchased === 'purchased'   && !owned)      return;
      if (skillFilterState.purchased === 'unpurchased' &&  owned)      return;
      // filter by lock state
      if (skillFilterState.lock === 'locked'    && !locked)           return;
      if (skillFilterState.lock === 'unlocked'  &&  locked)           return;
      // filter by affordability
      if (skillFilterState.affordability === 'affordable'   && !affordable)   return;
      if (skillFilterState.affordability === 'unaffordable' &&  affordable)   return;
      // NEW: filter by currency
      if (skillFilterState.currency !== 'all'
          && s.cost.currencyId !== skillFilterState.currency) {
        return;
      }

      // build the tile
      const tile = document.createElement('button');
      tile.className = 'skill-tile';
      tile.style.borderColor = realmColors[s.cost.realmId];

      if (locked)           tile.classList.add('locked');
      else if (owned)       tile.classList.add('purchased');
      else if (!affordable) tile.classList.add('unaffordable');
      else                  tile.classList.add('affordable');

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
  const s = skillMap[id];
  if (!s || s.purchased) return;

  // 1) optionally pay
  if (!skipCost) {
    const cur    = state.currencies[s.cost.currencyId];
    const amount = new Decimal(s.cost.amount);
    if (cur.lessThan(amount)) return;
    state.currencies[s.cost.currencyId] = cur.minus(amount);
  }

  // 2) mark purchased
  s.purchased = true;

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
    case 1004: // Unlock Ancient Relics Realm
      realms[4].unlocked = true;
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
    case 2005:
      state.effects.maxCardsPerPoke += 15;
      break;
    case 2006:
      state.effects.maxCardsPerPoke += 20;
      break;
    case 2007:
      state.effects.maxCardsPerPoke += 25;
      break;
    case 2008:
      state.effects.maxCardsPerPoke += 30;
      break;
    case 2009:
      state.effects.maxCardsPerPoke += 35;
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
    case 2505:
      state.effects.maxCardsPerPoke += 100;
      break;
    case 2606:
      state.effects.maxCardsPerPoke += 200;
      break;
    case 2707:
      state.effects.maxCardsPerPoke += 300;
      break;
    case 2808:
      state.effects.maxCardsPerPoke += 400;
      break;
    case 2909:
      state.effects.maxCardsPerPoke += 500;
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
    case 3005:
      realms[s.cost.realmId - 1].cooldown -= 15;
      updatePokeFilterStats();
      renderRealmFilters();
      break;
    case 3101: // Even Faster Poke
      realms[s.cost.realmId - 3].cooldown -= 0.5;
      updatePokeFilterStats();
      renderRealmFilters();
      break;
    case 3102:
      realms[s.cost.realmId - 3].cooldown -= 2;
      updatePokeFilterStats();
      renderRealmFilters();
      break;
    case 3103:
      realms[s.cost.realmId - 3].cooldown -= 10;
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
    case 4005:
      state.effects.minCardsPerPoke += 2;
      break;
    case 4006:
      state.effects.minCardsPerPoke += 4;
      break;
    case 4007:
      state.effects.minCardsPerPoke += 6;
      break;
    case 4008:
      state.effects.minCardsPerPoke += 8;
      break;
    case 4009:
      state.effects.minCardsPerPoke += 10;
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
    case 5004:
      realms[3].deselectMultiplier /= 2;
      updatePokeFilterStats();
      break;
    case 6001: // Merchant Card Increase
    case 6002:
    case 6003:
    case 6004:
    case 6005:
    case 6006:
    case 6007:
    case 6008:
    case 6009:
      state.effects.merchantNumCards += 1;
      break;
    case 7001: // Unlock New Merchant
      unlockMerchantByName('Yvette Ambervale');
      break;
    case 7002: // Unlock New Merchant 2
      unlockMerchantByName('Orin Saltstride');
      break;
    case 7003: // Unlock New Merchant 3
      unlockMerchantByName('Petra Moonclasp');
      break;
    case 7004: // Unlock New Merchant 4
      unlockMerchantByName('Fergus Grainhand');
      break;
    case 8001: // Lucky Skip
    case 8002: // Lucky Skip 2
    case 8003: // Lucky Skip 3
    case 8004: // Lucky Skip 4
    case 8005: // Lucky Skip 5
    case 8006: // Lucky Skip 6
    case 8007: // Lucky Skip 7
    case 8008: // Lucky Skip 8
    case 8009: // Lucky Skip 9
      state.effects.cooldownSkipChance = (state.effects.cooldownSkipChance || 0) + 0.01;
      break;
    case 9001: // Merchant Cooldown Reduction
    case 9002:
    case 9003:
    case 9004:
    case 9005:
    case 9006:
    case 9007:
    case 9008:
    case 9009:
      state.effects.merchantCooldownReduction += 5;
      break;
    case 10001: // Resource Generator
    case 10002:
    case 10003:
    case 10004:
      updateGeneratorRates();
      break;
    case 11001: // Better Merchants
    case 11002: // Better Merchants 2
    case 11003: // Better Merchants 3
      state.effects.extraMerchantRarityScaling += 0.1;
      break;
      case 12001: // Hawking Radiation Harvester
        window.initHarvester();
        break;
  }

  // 4) refresh UI
  renderSkillsTab();
  updateCurrencyBar();
}

function checkAffordableSkills() {
  
  const hasAffordable = skills.some(s => {
    if (s.purchased) {
      return false;
    }
    
    // Check if the skill's realm is unlocked
    const realmUnlocked = realmMap[s.cost.realmId].unlocked;
    if (!realmUnlocked) {
      return false;
    }

    const curAmt = state.currencies[s.cost.currencyId] || new Decimal(0);
    const isAffordable = curAmt.greaterThanOrEqualTo(s.cost.amount);
    return isAffordable;
  });
  
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

// replace your old buySkill:
function buySkill(id) {
  applySkill(id, /*skipCost=*/false);
  checkAffordableSkills(); // Check if any other skills are affordable after purchase
}
