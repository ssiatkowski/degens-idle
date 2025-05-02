// js/main.js

const Decimal = window.Decimal;
const anime   = window.anime;

const globalFill = document.getElementById('global-cooldown-fill');
const drawArea = document.getElementById('draw-area');
const holeBtn  = document.getElementById('hole-button');
let revealedCount    = 0;
let currentPackCount = 0;

// --- LOOKUP MAPS ---
const realmMap = {}, cardMap = {}, skillMap = {};
realms.forEach(r => realmMap[r.id] = r);
cards.forEach(c => cardMap[c.id]   = c);
skills.forEach(s => skillMap[s.id] = s);

// --- GAME STATE ---
window.state = {
  currencies: {},
  unlockedCurrencies: [],
  stats: {
    totalPokes: 0
  },
  effects: {
    minCardsPerPoke: 1,
    maxCardsPerPoke: 2,
    currencyPerPoke: {},
    currencyPerSec:   {},
    cooldownDivider: 1
  },
  selectedRealms: [],      // newly added
  cooldownDone: true,      // flag
  flipsDone: false         // flag
};

// init currencies & effects
currencies.forEach(c => {
  state.currencies[c.id]              = new Decimal(0);
  state.effects.currencyPerPoke[c.id] = 0;
  state.effects.currencyPerSec[c.id]  = 0;
});

// --- PERSISTENCE ---
const SAVE_KEY = 'ccgSave';
function loadState() {
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) return;
  try {
    const obj = JSON.parse(raw);
    obj.unlockedRealms.forEach(rid  => realmMap[rid].unlocked = true);
    obj.unlockedSkills.forEach(sid => skillMap[sid].unlocked = true);
    if (Array.isArray(obj.purchasedSkills)) {
      obj.purchasedSkills.forEach(sid => {
        applySkill(Number(sid), /*skipCost=*/true);
      });
    }
    Object.entries(obj.currencies).forEach(([cid,val])=>{
      state.currencies[cid] = new Decimal(val);
    });
    state.unlockedCurrencies = obj.unlockedCurrencies || [];
    Object.entries(obj.ownedCards).forEach(([cid,data])=>{
      const c = cardMap[cid];
      if (c) {
        c.quantity = data.quantity;
        c.level    = data.level;
        c.tier     = data.tier;
        c.isNew    = !!data.isNew;
      }
    });
    state.stats.totalPokes = obj.stats.totalPokes || 0;
  } catch(e){
    console.error("Failed to load save:", e);
  }
}
function saveState() {
  const obj = {
    unlockedRealms:  realms.filter(r=>r.unlocked).map(r=>r.id),
    unlockedSkills: skills.filter(s=>s.unlocked).map(s=>s.id),
    purchasedSkills: skills.filter(s=>s.purchased).map(s=>s.id),
    currencies:      {},
    unlockedCurrencies: state.unlockedCurrencies,
    ownedCards:      {},
    stats:           { totalPokes: state.stats.totalPokes }
  };
  currencies.forEach(c => {
    obj.currencies[c.id] = state.currencies[c.id].toString();
  });
  cards.forEach(c=> {
    obj.ownedCards[c.id] = {
      quantity: c.quantity,
      level:    c.level,
      tier:     c.tier,
      isNew:    !!c.isNew
    };
  });
  localStorage.setItem(SAVE_KEY, JSON.stringify(obj));
}
setInterval(saveState, 10000);

// js/main.js (excerpt)

// after loading realms, cards & skills, and after your `window.rarities = […]` line:

// 1) Derive the full ordered list of rarities
const allRarities = window.rarities;  // e.g. ["junk", "basic", …, "divine"]

// 2) Initialize empty maps
const realmCardMap       = {};
const rarityCardMap      = {};
const realmRarityCardMap = {};

// 3) For each realm, set up its card lists and initialize every rarity
realms.forEach(r => {
  realmCardMap[r.id]       = [];
  realmRarityCardMap[r.id] = {};
  allRarities.forEach(rarity => {
    realmRarityCardMap[r.id][rarity] = [];
  });
});

// 4) For each rarity, initialize its global list
allRarities.forEach(rarity => {
  rarityCardMap[rarity] = [];
});

// 5) Populate all three maps in one pass
cards.forEach(c => {
  // by realm
  realmCardMap[c.realm].push(c.id);

  // by rarity
  if (!rarityCardMap[c.rarity]) {
    console.warn(`Unknown rarity on card ${c.id}: ${c.rarity}`);
    rarityCardMap[c.rarity] = [];
  }
  rarityCardMap[c.rarity].push(c.id);

  // by realm+rarity
  if (!realmRarityCardMap[c.realm][c.rarity]) {
    console.warn(`No pool for realm ${c.realm} + rarity ${c.rarity}`);
    realmRarityCardMap[c.realm][c.rarity] = [];
  }
  realmRarityCardMap[c.realm][c.rarity].push(c.id);
});


// --- HELPERS ---

// pick one key based on weights object { key: weight, ... }
function weightedPick(weights) {
  let total = 0;
  for (let w of Object.values(weights)) total += w;
  let rnd = Math.random() * total;
  for (let [key, w] of Object.entries(weights)) {
    if (rnd < w) return key;
    rnd -= w;
  }
}

// --- UI HELPERS ---
function updateCurrencyBar() {
  const bar = document.getElementById('currency-bar');
  bar.innerHTML = '';
  currencies.forEach(c => {
    if (state.currencies[c.id].greaterThan(0) && !state.unlockedCurrencies.includes(c.id)) {
      state.unlockedCurrencies.push(c.id);
    }
  });
  state.unlockedCurrencies.forEach(cid => {
    const curMeta = currencies.find(x=>x.id===cid);
    if (!curMeta) return;
    const div = document.createElement('div');
    div.className = 'currency-item';
    div.innerHTML = `
      <img class="icon" src="assets/images/currencies/${curMeta.icon}"/>
      ${formatNumber(state.currencies[cid])}
    `;
    bar.appendChild(div);
  });
}

function showTab(tab) {
  const tabs = ['hole','cards','skills','merchant','stats'];
  tabs.forEach(t=>{
    document.getElementById(`tab-content-${t}`)
      .style.display = (t===tab ? 'block' : 'none');
    document.getElementById(`tab-btn-${t}`)
      .classList.toggle('active', t===tab);
  });
  if (tab==='cards')      renderCardsCollection();
  else if (tab==='stats') updateStatsUI();
  else if (tab==='skills'){ initSkillsFilters(); renderSkillsTab(); }
}

// --- POKE & REVEAL ---

function performPoke() {
  // reset UI & state
  drawArea.innerHTML = '';
  revealedCount = 0;
  state.flipsDone = false;

  // how many cards to draw this poke
  const e     = state.effects;
  const draws = Math.floor(
    Math.random() * (e.maxCardsPerPoke - e.minCardsPerPoke + 1)
  ) + e.minCardsPerPoke;

  // build realm → weight map
  const realmWeights = {};
  state.selectedRealms.forEach(rid => {
    const r = realmMap[rid];
    if (r.unlocked) realmWeights[rid] = r.pokeWeight;
  });

  // ————— BULK SAMPLING —————
  // 1) sample how many draws per realm
  const realmIds       = Object.keys(realmWeights).map(Number);
  const realmWeightArr = realmIds.map(id => realmWeights[id]);
  const realmDrawCounts = multinomialSample(draws, realmWeightArr);

  // 2) for each realm, sample rarity counts, then individual card counts
  const picksCounts = {};
  realmIds.forEach((realmId, idx) => {
    const nRealm = realmDrawCounts[idx];
    if (!nRealm) return;

    const rr = realmMap[realmId];
    const rarities = Object.keys(rr.rarityWeights);
    const rarityWeightArr = rarities.map(r => rr.rarityWeights[r]);
    const rarityDrawCounts = multinomialSample(nRealm, rarityWeightArr);

    rarities.forEach((rarity, rIdx) => {
      const nRare = rarityDrawCounts[rIdx];
      if (!nRare) return;

      const pool = realmRarityCardMap[realmId][rarity];
      // uniform weights across that pool
      const poolCounts = multinomialSample(nRare, Array(pool.length).fill(1));

      pool.forEach((cid, cIdx) => {
        const cCount = poolCounts[cIdx];
        if (cCount) picksCounts[cid] = (picksCounts[cid] || 0) + cCount;
      });
    });
  });

  // how many unique cards to reveal
  currentPackCount = Object.keys(picksCounts).length;

  // ————— AWARD & RENDER each unique card —————
  Object.entries(picksCounts).forEach(([cid, count]) => {
    const c       = cardMap[cid];
    const wasNew  = c.quantity === 0;
    const oldTier = c.tier;

    // 1) increment total pokes
    state.stats.totalPokes++;

    // 2) global per-poke currencies
    Object.entries(state.effects.currencyPerPoke).forEach(([curId, rate]) => {
      if (!rate || state.currencies[curId] == null) return;
      state.currencies[curId] =
        state.currencies[curId].plus(new Decimal(rate).times(count));
    });

    // 3) give the cards (handles quantity, tier/level effects)
    giveCard(cid, count);
    const newTier = c.tier;

    // 4) build & append the DOM tile
    const rr    = realmMap[c.realm];
    const outer = document.createElement('div');
    outer.className = 'card-outer';

    const inner = document.createElement('div');
    inner.className = 'card-inner';
    inner.dataset.id = cid;

    // back
    const back = document.createElement('img');
    back.className = 'card-face back';
    back.src = `assets/images/card_backs/${rr.name.toLowerCase().replace(/ /g,'_')}_card_back.jpg`;

    // front
    const front = document.createElement('div');
    front.className = 'card-face front';
    front.style.borderColor = realmColors[rr.id];

    const frameImg   = document.createElement('img');
    frameImg.className = 'card-frame';
    frameImg.src = `assets/images/frames/${c.rarity}_frame.jpg`;

    const contentImg = document.createElement('img');
    contentImg.className = 'card-image';
    contentImg.src = `assets/images/cards/${slugify(c.name)}.jpg`;

    front.append(frameImg, contentImg);

    if (c.tier > 0) {
      const tierIcon = document.createElement('img');
      tierIcon.className = 'tier-icon';
      tierIcon.src = `assets/images/tiers/tier_${c.tier}.png`;
      tierIcon.alt = `Tier ${c.tier}`;

      const lvlLabel = document.createElement('div');
      lvlLabel.className   = 'level-label';
      lvlLabel.textContent = `Lvl: ${formatNumber(c.level)}`;

      front.append(tierIcon, lvlLabel);
    }

    if (count > 1) {
      const badge = document.createElement('div');
      badge.className = 'count-badge';
      badge.innerHTML = formatNumber(count);
      front.append(badge);
    }

    if (wasNew || c.isNew) {
      initCardsFilters();
      c.isNew = true;
      const badge = document.createElement('div');
      badge.className = 'reveal-badge new-badge';
      badge.textContent = 'NEW';
      front.append(badge);
    } else if (newTier > oldTier) {
      const badge = document.createElement('div');
      badge.className = 'reveal-badge tierup-badge';
      badge.textContent = 'TIER UP';
      front.append(badge);
    }

    inner.append(back, front);
    outer.append(inner);
    drawArea.append(outer);

    // hover to flip
    outer.addEventListener('mouseenter', () => {
      if (!inner.classList.contains('revealed')) {
        inner.classList.add('revealed');
        revealedCount++;

        const onFlipEnd = e => {
          if (e.propertyName === 'transform') {
            if (wasNew) {
              inner.classList.add('spin');
              inner.addEventListener('animationend', () => inner.classList.remove('spin'), { once: true });
            } else if (newTier > oldTier) {
              inner.classList.add('shake');
              inner.addEventListener('animationend', () => inner.classList.remove('shake'), { once: true });
            }
          }
          inner.removeEventListener('transitionend', onFlipEnd);
        };
        inner.addEventListener('transitionend', onFlipEnd);

        if (revealedCount === currentPackCount) {
          state.flipsDone = true;
          tryEnableHole();
        }
      }
    });

    // click to open modal
    outer.addEventListener('click', () => {
      if (inner.classList.contains('revealed')) openModal(cid);
    });
  });

  startCooldown();
  holeBtn.disabled = true;
  holeBtn.classList.add('disabled');
}


function tryEnableHole() {
  if (state.cooldownDone && state.flipsDone) {
    holeBtn.disabled = false;
    holeBtn.classList.remove('disabled');

    // grow from a point
    anime({
      targets: holeBtn,
      scale:   [0, 1],
      duration: 1000,
      easing:  'easeOutBack'
    });
  }
}

holeBtn.addEventListener('click', ()=>{
  if (holeBtn.disabled) return;
  holeBtn.classList.add('animating');

  const pokeAnim = anime({
    targets: holeBtn,
    scale:   [1,1.3,1],
    duration:400,
    easing: 'easeInOutQuad'
  });

  const takeAnim = anime({
    targets: '.card-outer',
    translateX:200,
    opacity:   [1,0],
    duration: 500,
    easing:  'easeInBack',
    complete:()=>{ performPoke(); updateCurrencyBar(); }
  });

  Promise.all([ pokeAnim.finished, takeAnim.finished ])
    .then(()=> holeBtn.classList.remove('animating'));
});

// --- CARD MODAL ---
function openModal(cardId) {
  const c     = cardMap[cardId];
  const rar   = c.rarity;
  const realm = c.realm;
  const rr    = realmMap[realm];
  const color = realmColors[realm];
  const alpha = parseFloat(getComputedStyle(document.documentElement)
    .getPropertyValue('--modal-opacity'));

  if (c.isNew) {
    c.isNew = false;
    saveState();    // immediately persist
  }

  // OVERLAY
  const ov = document.createElement('div');
  ov.className = `modal-overlay modal-${rar}`;
  ov.onclick = () => ov.remove();

  // MODAL CONTAINER
  const mc = document.createElement('div');
  mc.className = 'modal-content';
  mc.style.borderColor = hexToRGBA(color, alpha);
  mc.onclick = e => e.stopPropagation();

  // LEFT SIDE (image + description)
  const left = document.createElement('div');
  left.className = 'modal-left';

  const frame = document.createElement('div');
  frame.className = 'modal-frame';

  //  - TIER ICON IN MODAL -
  const modalTierIcon = document.createElement('img');
  modalTierIcon.className = 'modal-tier-icon';
  modalTierIcon.src = `assets/images/tiers/tier_${c.tier}.png`;
  modalTierIcon.alt = `Tier ${c.tier}`;
  frame.appendChild(modalTierIcon);

  const frameImg = document.createElement('img');
  frameImg.className = 'modal-frame-img';
  frameImg.src = `assets/images/frames/${rar}_frame.jpg`;

  const nameDiv = document.createElement('div');
  nameDiv.className = 'modal-name';
  nameDiv.textContent = c.name;

  const img = document.createElement('img');
  img.className = 'modal-image';
  img.src = `assets/images/cards/${slugify(c.name)}.jpg`;

  const desc = document.createElement('div');
  desc.className = 'modal-desc';
  desc.textContent = c.description;

  frame.append(frameImg, nameDiv, img, desc);
  left.append(frame);

  // RIGHT SIDE (stats, level-up button)
  const right = document.createElement('div');
  right.className = 'modal-right';

  const labelLine = document.createElement('p');
  labelLine.className = 'label';
  labelLine.innerHTML = `<span>Qty: ${formatNumber(c.quantity)}</span><span>Tier: ${c.tier}</span>`;
  right.append(labelLine);

  // progress bar
  const barContainer = document.createElement('div');
  barContainer.className = 'modal-bar-container';
  const ths = tierThresholds[rar];
  const nextThresh = ths[c.tier] || ths[ths.length - 1];
  const pct = Math.min(c.quantity / nextThresh, 1) * 100;
  const bar = document.createElement('div');
  bar.className = 'modal-bar';
  bar.style.width = pct + '%';
  const thresholdLab = document.createElement('div');
  thresholdLab.className = 'threshold';
  thresholdLab.textContent = `Next Tier at Qty ${formatNumber(nextThresh)}`;
  barContainer.append(bar, thresholdLab);
  right.append(barContainer);

  // level display
  const lvlLine = document.createElement('p');
  lvlLine.className = 'label';
  lvlLine.textContent = `Level: ${c.level}`;
  right.append(lvlLine);

  // level up button
  const baseCost = new Decimal(c.levelCost.amount);
  const cost = baseCost.times(Decimal.pow(c.levelScaling, c.level - 1)).ceil();
  const costTxt = formatNumber(cost);

  // look up currency icon directly
  const costCurrency = c.levelCost.currency;
  const curEntry = currencies.find(cur => cur.id === costCurrency) || {};
  const ico = curEntry.icon || 'question.png';

  const btn = document.createElement('button');
  btn.innerHTML = `Level Up: ${costTxt}
    <img class="icon" src="assets/images/currencies/${ico}"/>`;

  // can afford?
  const canAfford = state.currencies[costCurrency].greaterThanOrEqualTo(cost);
  btn.classList.add(canAfford ? 'affordable' : 'unaffordable');

  if (canAfford) {
    btn.onclick = e => {
      e.stopPropagation();
      state.currencies[costCurrency] = state.currencies[costCurrency].minus(cost);
      levelUp(cardId);
      updateCurrencyBar();
      openModal(cardId); // re-open to refresh numbers
      ov.remove();
    };
  }
  right.append(btn);

  // --- REALM DISPLAY ---
  const realmLine = document.createElement('p');
  realmLine.className = 'modal-rarity';
  realmLine.innerHTML =
    `Realm: <span style="color:${color}">${rr.name}</span>`;
  right.appendChild(realmLine);

  // --- RARITY DISPLAY ---
  const rarityLine = document.createElement('p');
  rarityLine.className = 'modal-rarity';
  // prefix, unstyled:
  rarityLine.textContent = 'Rarity: ';
  // the actual rarity in its color:
  const span = document.createElement('span');
  span.textContent = c.rarity.toUpperCase();
  span.style.color = getComputedStyle(document.documentElement)
    .getPropertyValue(`--rarity-${c.rarity.trim()}`);
  rarityLine.appendChild(span);
  right.appendChild(rarityLine);

  // --- EFFECTS HEADER ---
  const effHeader = document.createElement('p');
  effHeader.className = 'modal-effects-header';
  effHeader.textContent = 'Effects';
  right.appendChild(effHeader);

  // --- EFFECT LINES ---
  const effectsList = Array.isArray(c.baseEffects)
    ? c.baseEffects
    : [ c.baseEffect ].filter(e => e && e.type);

  if (effectsList.length) {
    const effContainer = document.createElement('div');
    effContainer.className = 'modal-effects';
  
    effectsList.forEach(def => {
      // 1) compute the raw total
      const total = def.value * c.level * Math.pow(2, c.tier - 1);
  
      // 2) build the display value with sign only if positive
      const sign = total >= 0 ? '+' : '';
      const valueHtml = `${sign}${formatNumber(total)}`;
  
      // 3) figure out the label
      let label;
      if (def.type === "currencyPerPoke" || def.type === "currencyPerSec") {
        const iconPath = `assets/images/currencies/${def.currency}.png`;
        const verb = def.type === "currencyPerPoke" ? "/ Poke" : "/ Sec";
        label = `<img class="currency-effect-icon" src="${iconPath}" alt="${def.currency}" /> ${verb}`;
  
      } else if (def.type === "rarityWeightBonus") {
        // special display: "<realm name> <RARITY> weight"
        const realmName = realmMap[def.realm].name;
        const rarityColor = getComputedStyle(document.documentElement)
          .getPropertyValue(`--rarity-${def.rarity.trim()}`);
        label = `${realmName} <span style="color:${rarityColor}">${def.rarity.toUpperCase()}</span> odds`;
  
      } else {
        label = EFFECT_NAMES[def.type] || def.type;
      }
  
      // 4) breakdown text
      const breakdown = `(base: ${def.value} ×${c.level} lvl ×${Math.pow(2, c.tier - 1)} tier)`;
  
      // 5) render
      const li = document.createElement('p');
      li.className = 'effect-line';
      li.innerHTML = `
        ${label}: <strong>${valueHtml}</strong>
        <span class="eff-breakdown">${breakdown}</span>
      `;
      effContainer.appendChild(li);
    });
  
    right.appendChild(effContainer);
  }
  



  mc.append(left, right);
  ov.append(mc);
  document.body.append(ov);
}


let currentCollectionRealm = null;

function initCardsFilters() {
  const filtersContainer = document.getElementById('cards-filters');
  filtersContainer.innerHTML = '';
  realms.forEach(r => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'cards-filter';
    btn.dataset.realm = r.id;
    btn.innerHTML = `
      <img class="filter-back" src="assets/images/card_backs/${slugify(r.name)}_card_back.jpg"/>
      <div class="filter-label">${r.name}</div>
      <div class="filter-count">${ownedCountInRealm(r.id)}/${totalInRealm(r.id)}</div>
    `;
    if (!r.unlocked) {
      btn.classList.add('locked');
      btn.disabled = true;
    } else {
      btn.addEventListener('click', () => {
        currentCollectionRealm = r.id;
        document.querySelectorAll('.cards-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCardsCollection();
      });
    }
    filtersContainer.appendChild(btn);
  });
  // select first unlocked
  const first = realms.find(r=>r.unlocked);
  if (first) {
    const firstBtn = filtersContainer.querySelector(`button[data-realm="${first.id}"]`);
    firstBtn.classList.add('active');
    currentCollectionRealm = first.id;
  }
}

function ownedCountInRealm(rid) {
  return cards.filter(c=>c.realm===rid && c.quantity>0).length;
}
function totalInRealm(rid) {
  return cards.filter(c=>c.realm===rid).length;
}

function renderCardsCollection() {
  const list = document.getElementById('cards-list');
  list.innerHTML = '';      // clear previous

  const grid = document.createElement('div');
  grid.className = 'draw-area';

  cards
    .filter(c => c.realm === currentCollectionRealm)
    .forEach(c => {
      const outer = document.createElement('div');
      outer.className = 'card-outer';
      if (c.quantity === 0) outer.classList.add('unfound');

      const inner = document.createElement('div');
      inner.className = 'card-inner revealed';
      inner.dataset.id = c.id;

      const front = document.createElement('div');
      front.className = 'card-face front';
      front.style.borderColor = realmColors[c.realm];

      // frame & artwork
      const frameImg = document.createElement('img');
      frameImg.className = 'card-frame';
      frameImg.src = `assets/images/frames/${c.rarity}_frame.jpg`;
      const contentImg = document.createElement('img');
      contentImg.className = 'card-image';
      contentImg.src = `assets/images/cards/${slugify(c.name)}.jpg`;
      front.append(frameImg, contentImg);

      // tier icon + level label
      if (c.tier > 0) {
        const tierIcon = document.createElement('img');
        tierIcon.className = 'tier-icon';
        tierIcon.src = `assets/images/tiers/tier_${c.tier}.png`;
        tierIcon.alt = `Tier ${c.tier}`;
        front.appendChild(tierIcon);

        const lvlLabel = document.createElement('div');
        lvlLabel.className = 'level-label';
        lvlLabel.textContent = `Lvl: ${formatNumber(c.level)}`;
        front.appendChild(lvlLabel);
      }

      // "Level Up" button if affordable
      if (c.quantity > 0) {
        const baseCost = new Decimal(c.levelCost.amount);
        const rawCost  = baseCost.times(Decimal.pow(c.levelScaling, c.level - 1));
        const cost     = rawCost.ceil();
        const curAmt   = state.currencies[c.levelCost.currency] || new Decimal(0);
        if (curAmt.greaterThanOrEqualTo(cost)) {
          const btn = document.createElement('button');
          btn.className = 'card-level-up-btn';
          btn.innerHTML = `
          Level Up<br>
          <span class="level-cost">
            ${formatNumber(cost)}
            <img class="icon" src="assets/images/currencies/${c.levelCost.currency}.png"/>
          </span>
        `;
          btn.addEventListener('click', e => {
            e.stopPropagation();
            // spend & level up
            state.currencies[c.levelCost.currency] = curAmt.minus(cost);
            levelUp(c.id);
            updateCurrencyBar();
          });
          front.appendChild(btn);
        }
      }

      // quantity badge
      if (c.quantity >= 1) {
        const badge = document.createElement('div');
        badge.className = 'count-badge';
        badge.innerHTML = formatNumber(c.quantity);
        front.appendChild(badge);
      }

      // NEW banner persists until opened
      if (c.isNew) {
        const badge = document.createElement('div');
        badge.className = 'reveal-badge new-badge';
        badge.textContent = 'NEW';
        front.appendChild(badge);
      }

      inner.append(front);
      outer.append(inner);

      // open modal on click
      if (c.quantity >= 1) {
        outer.addEventListener('click', () => openModal(c.id));
      }

      grid.appendChild(outer);
    });

  list.appendChild(grid);
}



// --- CARDS & SKILLS TABS ---

function giveCard(cardId, amount = 1) {
  const c = cardMap[cardId];

  // --- 1. Figure out old tier & old effect-contribution ---
  const oldTier = c.tier;
  const oldEffs = computeCardEffects(c);        // uses current c.quantity

  // --- 2. Update quantity ---
  c.quantity += amount;

  // --- 3. Compute new tier & new effects ---
  const thresholds = window.tierThresholds[c.rarity];
  let newTier = 1;
  while (newTier < thresholds.length && c.quantity >= thresholds[newTier]) {
    newTier++;
  }
  c.tier = newTier;

  const newEffs = computeCardEffects(c);

  // --- 4. Only apply the delta if tier actually changed ---
  if (newTier !== oldTier) {
    console.log(`Tier up! ${c.name} (${c.rarity})`);
    console.log(oldEffs);
    console.log(newEffs);
    // remove old‐tier contribution
    applyEffectsDelta(oldEffs, -1);
    // apply new‐tier contribution
    applyEffectsDelta(newEffs, +1);
    c.lastAppliedEffects = newEffs;
  }

  // stats, UI, etc.
  state.stats.totalPokes++;
  // award currency per poke *instantaneously* in your poke loop
  // …
}

// And in levelUp():
function levelUp(cardId) {
  const c = cardMap[cardId];
  // remove old
  applyEffectsDelta(c.lastAppliedEffects, -1);

  // pay cost…
  c.level++;

  // recompute & apply
  const now = computeCardEffects(c);
  applyEffectsDelta(now, +1);
  c.lastAppliedEffects = now;

  renderCardsCollection();
}

function renderRealmFilters() {
  const container = document.getElementById('poke-filters');
  container.innerHTML = '';
  realms.forEach(r => {
    if (!r.unlocked) return;
    const btn = document.createElement('button');
    btn.className = 'realm-filter-btn' +
      (state.selectedRealms.includes(r.id) ? ' selected' : '');
    btn.innerHTML = `<img src="assets/images/card_backs/${slugify(r.name)}_card_back.jpg"/>`;
    btn.onclick = () => {
      const idx = state.selectedRealms.indexOf(r.id);
      if (idx >= 0) state.selectedRealms.splice(idx,1);
      else          state.selectedRealms.push(r.id);
      renderRealmFilters();
      updatePokeFilterStats();
    };
    container.appendChild(btn);
  });
}

let _cooldownTimer = null;

function startCooldown() {
  state.cooldownDone = false;

  // calculate totalSec as before…
  const totalSec = calculateCooldown();

  // reset & animate fill
  globalFill.style.transition = 'none';
  globalFill.style.width = '0%';
  // force a reflow to pick up the zero width
  void globalFill.offsetWidth;
  globalFill.style.transition = `width ${totalSec}s linear`;
  globalFill.style.width = '100%';

  // put the remaining‐time text inside the hole
  const countdownEl = holeBtn.querySelector('.countdown') 
                      || Object.assign(document.createElement('div'), { className: 'countdown' });
  countdownEl.textContent = formatDuration(totalSec);
  holeBtn.appendChild(countdownEl);

  // interval to tick it down
  let elapsed = 0;
  const timer = setInterval(() => {
    elapsed += 0.1; // 100ms
    const rem = totalSec - elapsed;
    if (rem <= 0) {
      clearInterval(timer);
      countdownEl.remove();
    } else {
      countdownEl.textContent = formatDuration(rem);
    }
  }, 100);

  // when fill animation ends
  globalFill.ontransitionend = () => {
    clearInterval(timer);
    countdownEl.remove();
    state.cooldownDone = true;
    tryEnableHole();
  };
}

function calculateCooldown() {
  let sum = state.selectedRealms.reduce((a,id)=>a + realmMap[id].cooldown, 0);
  const maxSel = Math.max(...state.selectedRealms, 0);
  for (let id = 1; id < maxSel; id++) {
    if (!state.selectedRealms.includes(id)
      && state.selectedRealms.some(x => x > id)) {
      sum *= realmMap[id].deselectMultiplier;
    }
  }
  return sum / state.effects.cooldownDivider;
}


function updatePokeFilterStats() {
  const container = document.getElementById('poke-filter-stats');
  container.innerHTML = '';  // clear old

  // 1) Poke cooldown
  const cooldownSum = calculateCooldown();
  const cooldownTxt = formatDuration(cooldownSum);

  // 2) Undiscovered cards
  let undiscovered = 0;
  state.selectedRealms.forEach(rid => {
    cards.forEach(c => {
      if (c.realm === rid && c.quantity === 0) undiscovered++;
    });
  });

  // 3) Realm odds
  // build weight map & total
  const weights = state.selectedRealms
    .filter(rid => realmMap[rid].unlocked)
    .map(rid => realmMap[rid].pokeWeight);
  const totalWeight = weights.reduce((a,b)=>a+b, 0);

  // 4) assemble table HTML
  let html = `<table class="poke-stats-table">
    <tr><th>Poke Cooldown</th><td>${cooldownTxt}</td></tr>
    <tr><th>Undiscovered Cards</th><td>${undiscovered}</td></tr>
    <tr><th colspan="2">Realm Odds</th></tr>`;

  state.selectedRealms.forEach(rid => {
    const realm = realmMap[rid];
    if (!realm.unlocked) return;
    const w = realm.pokeWeight;
    const pct = totalWeight > 0
      ? (w/totalWeight*100).toFixed(2)
      : '0.00';
    html += `
      <tr>
        <td>${realm.name}</td>
        <td>${pct}%</td>
      </tr>`;
  });

  html += `</table>`;
  container.innerHTML = html;
}



// --- INIT AFTER DOM READY ---
document.addEventListener('DOMContentLoaded', ()=>{

  loadState();

  cards.forEach(c => {
    c.lastAppliedEffects = {};
    if (c.quantity > 0) {
      const cur = computeCardEffects(c);
      applyEffectsDelta(cur, +1);
      c.lastAppliedEffects = cur;
    }
  });


  ['hole','cards','skills','merchant','stats'].forEach(t=>{
    document.getElementById(`tab-btn-${t}`).onclick = ()=> showTab(t);
  });
  
  state.selectedRealms = realms.filter(r => r.unlocked).map(r => r.id);
  renderRealmFilters();
  showTab('hole');

  updateCurrencyBar();
  initSkillsFilters();
  renderSkillsTab();
  updateStatsUI();
  genMerchantOffers();
  renderMerchantTab();
  initCardsFilters();
  renderCardsCollection();
  updatePokeFilterStats();

  setInterval(()=>{
    genMerchantOffers();
    renderMerchantTab();
  },30000);

  // every second, mint your currencyPerSec rewards
  setInterval(() => {
    Object.entries(state.effects.currencyPerSec).forEach(([curId, rate]) => {
      // skip zero-rates or unknown currencies
      if (!rate || state.currencies[curId] == null) return;
      // add rate * 1 (second) to the balance
      state.currencies[curId] = state.currencies[curId].plus(new Decimal(rate));
    });
    // update the UI
    updateCurrencyBar();
  }, 1000);

  // initial enable
  holeBtn.disabled = false;
  holeBtn.classList.remove('disabled');
});
