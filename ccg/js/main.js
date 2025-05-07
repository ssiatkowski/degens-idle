// js/main.js

const Decimal = window.Decimal;
const anime   = window.anime;

const globalFill = document.getElementById('global-cooldown-fill');
const drawArea = document.getElementById('draw-area');
const holeBtn  = document.getElementById('hole-button');
let revealedCount    = 0;
let currentPackCount = 0;

// Add this at the top of the file, after the state initialization
let lastTouchX = 0;
let lastTouchY = 0;
let isScrolling = false;
let lastFlippedCard = null;

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
    totalPokes: 0,
    merchantPurchases: 0,
  },
  effects: {
    minCardsPerPoke: 1,
    maxCardsPerPoke: 2,
    currencyPerPoke: {},
    currencyPerSec:   {},
    cooldownDivider: 1,
    merchantNumCards: 2,
    cooldownSkipChance: 0,
    merchantCooldownReduction: 0,
    extraMerchantRarityScaling: 0,
  },
  selectedRealms: [],      // newly added
  currentMerchant: null,
  merchantOffers: [],
  cooldownDone: true,      // flag
  flipsDone: false,        // flag
  resourceGeneratorContribution: {}  // Track contributions for each resource
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
    // First apply purchased skills
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
        c.isNew    = data.isNew;
      }
    });
    state.stats.totalPokes = obj.stats.totalPokes || 0;
    state.stats.merchantPurchases = obj.stats.merchantPurchases || 0;
    if (obj.currentMerchantId != null) {
      const m = merchants.find(m=>m.id===obj.currentMerchantId);
      state.currentMerchant = m || null;
    }
    if (Array.isArray(obj.merchantOffers)) {
      state.merchantOffers = obj.merchantOffers.map(o => ({
        cardId:   o.cardId,
        currency: o.currency,
        // restore the Decimal price
        price:    new Decimal(o.price)
      }));
    }
  } catch(e){
    console.error("Failed to load save:", e);
  }
}
function saveState() {
  const obj = {
    unlockedRealms:  realms.filter(r=>r.unlocked).map(r=>r.id),
    purchasedSkills: skills.filter(s=>s.purchased).map(s=>s.id),
    currencies:      {},
    unlockedCurrencies: state.unlockedCurrencies,
    ownedCards:      {},
    stats:           { totalPokes: state.stats.totalPokes, merchantPurchases: state.stats.merchantPurchases },
    currentMerchantId: state.currentMerchant?.id ?? null,
    merchantOffers: state.merchantOffers.map(o => ({
      cardId:   o.cardId,
      currency: o.currency,
      price:    o.price.toString()
    })),
    lastSaveTime: Date.now()  // Add timestamp of last save
  };
  currencies.forEach(c => {
    obj.currencies[c.id] = state.currencies[c.id].toString();
  });
  cards.forEach(c=> {
    obj.ownedCards[c.id] = {
      quantity: c.quantity,
      level:    c.level,
      tier:     c.tier,
      isNew:    c.isNew
    };
  });
  localStorage.setItem(SAVE_KEY, JSON.stringify(obj));
}

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

  // unlock any new currencies
  currencies.forEach(c => {
    if (state.currencies[c.id].greaterThan(0)
        && !state.unlockedCurrencies.includes(c.id)) {
      state.unlockedCurrencies.push(c.id);
    }
  });

  // render them in the grid
  state.unlockedCurrencies.forEach(cid => {
    const meta = currencies.find(x => x.id === cid);
    if (!meta) return;

    const div = document.createElement('div');
    div.className = 'currency-item';
    div.innerHTML = `
      <img class="icon" src="assets/images/currencies/${meta.icon}" alt="${meta.name}" />
      <span class="amount">${formatNumber(state.currencies[cid])}</span>
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
  else if (tab === 'merchant') {
    document.getElementById('tab-btn-merchant')
      .classList.remove('new-offers');
  }
}

// --- POKE & REVEAL ---

function performPoke() {
  holeBtn.disabled = true;
  holeBtn.classList.add('disabled');

  // reset UI & state
  drawArea.innerHTML = '';
  revealedCount = 0;
  state.flipsDone = false;

  // how many cards to draw this poke
  const e     = state.effects;
  const r = (Math.random() + Math.random()) / 2; // center-biased
  const draws = Math.floor(
    r * (e.maxCardsPerPoke - e.minCardsPerPoke + 1)
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

  //increment total pokes
  state.stats.totalPokes++;

  //global per-poke currencies
  Object.entries(state.effects.currencyPerPoke).forEach(([curId, rate]) => {
    if (!rate || state.currencies[curId] == null) return;
    state.currencies[curId] =
      state.currencies[curId].plus(new Decimal(rate));
  });

  // Check for affordable skills after currency update
  checkAffordableSkills();

  // how many unique cards to reveal
  currentPackCount = Object.keys(picksCounts).length;

  // ————— AWARD & RENDER each unique card —————
  Object.entries(picksCounts).forEach(([cid, count]) => {
    const c       = cardMap[cid];
    const wasNew  = c.quantity === 0;
    const oldTier = c.tier;

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
  
  saveState();
}

// Add this after the performPoke function
document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  
  // Check if we're scrolling
  const deltaY = Math.abs(touch.clientY - lastTouchY);
  const deltaX = Math.abs(touch.clientX - lastTouchX);
  lastTouchX = touch.clientX;
  lastTouchY = touch.clientY;

  if (deltaY > deltaX && deltaY > 10) {
    isScrolling = true;
    return;
  }

  // Check all cards in the draw area
  const cards = drawArea.querySelectorAll('.card-outer');
  cards.forEach(outer => {
    const inner = outer.querySelector('.card-inner');
    if (!inner) return;

    const rect = outer.getBoundingClientRect();
    const isOverCard = (
      touch.clientX >= rect.left &&
      touch.clientX <= rect.right &&
      touch.clientY >= rect.top &&
      touch.clientY <= rect.bottom
    );

    // If we're over this card and it's not the last one we flipped
    if (isOverCard && lastFlippedCard !== outer && !inner.classList.contains('revealed')) {
      // Flip the card
      inner.classList.add('revealed');
      lastFlippedCard = outer;
      revealedCount++;

      const onFlipEnd = e => {
        if (e.propertyName === 'transform') {
          const cid = inner.dataset.id;
          const c = cardMap[cid];
          if (c.isNew) {
            inner.classList.add('spin');
            inner.addEventListener('animationend', () => inner.classList.remove('spin'), { once: true });
          } else if (c.tier > c.lastTier) {
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
}, { passive: true });

// Reset scrolling state when touch ends
document.addEventListener('touchend', () => {
  isScrolling = false;
  lastFlippedCard = null;
}, { passive: true });

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
  if (holeBtn.disabled || holeBtn.classList.contains('animating')) return;
  holeBtn.classList.add('animating');

  const pokeAnim = anime({
    targets: holeBtn,
    scale:   [1,1.3,1],
    duration:400,
    easing: 'easeInOutQuad'
  });

  const takeAnim = anime({
    targets: '#draw-area .card-outer',
    translateX: 200,
    opacity:   [1,0],
    duration:  500,
    easing:    'easeInBack',
    complete:  ()=>{ performPoke(); updateCurrencyBar(); }
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

  c.isNew = false;

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
  labelLine.innerHTML = `<span>Qty: ${formatQuantity(c.quantity)}</span><span>Tier: ${c.tier}</span>`;
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

  // level up button
  const baseCost = new Decimal(c.levelCost.amount);
  const cost = floorTo3SigDigits(baseCost.times(Decimal.pow(c.levelScaling, c.level - 1)));
  const costTxt = formatNumber(cost);

  // look up currency icon directly
  const costCurrency = c.levelCost.currency;
  const curEntry = currencies.find(cur => cur.id === costCurrency) || {};
  const ico = curEntry.icon || 'question.png';

  const btn = document.createElement('button');
  btn.innerHTML = `<b>Level ${c.level}</b> Up: ${costTxt}
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

  const hr = document.createElement('hr');
  hr.style.margin = '0 0 4px 0';
  right.appendChild(hr);

  // --- EFFECT LINES ---
  const effectsList = Array.isArray(c.baseEffects)
    ? c.baseEffects
    : [ c.baseEffect ].filter(e => e && e.type);

  if (effectsList.length) {
    const effContainer = document.createElement('div');
    effContainer.className = 'modal-effects';
  
    effectsList.forEach(def => {
      // compute the per‐tier multiplier
      const scale   = EFFECT_SCALES[def.type] ?? 2;
      const tierMult = Math.pow(scale, c.tier - 1);
      
      let sign;

      // 1) compute the raw total & breakdown differently for odds vs. other effects
      let total, breakdown;
      if (def.type === "rarityOddsReduction") {
        // grab your external lookup
        const base = RARITY_ODDS_BASE[def.rarity] || 0;
        total     = base * c.level * tierMult;
        breakdown = `(base: ${formatNumber(base)} ×${formatNumber(c.level)} lvl ×${formatNumber(tierMult)} tier)`;
        sign = '-';
      } else {
        total     = def.value * c.level * tierMult;
        breakdown = `(base: ${formatNumber(def.value)} ×${formatNumber(c.level)} lvl ×${formatNumber(tierMult)} tier)`;
        sign = total >= 0 ? '+' : ''
      }

      const valueHtml = `${sign}${formatNumber(total)}`;

      // 3) figure out the label
      let label;
      if (def.type === "currencyPerPoke" || def.type === "currencyPerSec") {
        const iconPath = `assets/images/currencies/${def.currency}.png`;
        const verb = def.type === "currencyPerPoke" ? "/ Poke" : "/ Sec";
        label = `<img class="currency-effect-icon" src="${iconPath}" alt="${def.currency}" /> ${verb}`;
      }
      else if (def.type === "rarityOddsReduction") {
        const realmObj   = realmMap[def.realm];
        const realmColor = realmColors[def.realm];
        const rarityColor = getComputedStyle(document.documentElement)
          .getPropertyValue(`--rarity-${def.rarity.trim()}`);
        label = [
          `<span style="color:${realmColor};font-weight:bold;">${realmObj.name}</span>`,
          `<span style="color:${rarityColor}">${def.rarity.toUpperCase()}</span> odds reduction`
        ].join(' ');
      }
      else {
        label = EFFECT_NAMES[def.type] || def.type;
      }

      // 4) render
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
    const ownedInRealm = ownedCountInRealm(r.id);
    const totalInREalm = totalInRealm(r.id);
    const isComplete = ownedInRealm === totalInREalm;
    
    btn.innerHTML = `
      <img class="filter-back" src="assets/images/card_backs/${slugify(r.name)}_card_back.jpg"/>
      <div class="filter-label">${r.name}</div>
      <div class="filter-count">
        ${
          isComplete
            ? `<span style="color:green;font-weight:bold;">${ownedInRealm}/${totalInREalm}</span>`
            : `${ownedInRealm}/${totalInREalm}`
        }
      </div>
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

      // "Level Up" button (always visible, but disabled if unaffordable)
      if (c.quantity > 0) {
        const baseCost = new Decimal(c.levelCost.amount);
        const rawCost  = baseCost.times(Decimal.pow(c.levelScaling, c.level - 1));
        const cost     = floorTo3SigDigits(rawCost);
        const curAmt   = state.currencies[c.levelCost.currency] || new Decimal(0);
        const canAfford = curAmt.greaterThanOrEqualTo(cost);

        const btn = document.createElement('button');
        btn.className = 'card-level-up-btn ' + (canAfford ? 'affordable' : 'unaffordable');
        btn.innerHTML = `
          Level Up<br>
          <span class="level-cost">
            ${formatNumber(cost)}
            <img class="icon" src="assets/images/currencies/${c.levelCost.currency}.png"/>
          </span>
        `;
        if (canAfford) {
          btn.addEventListener('click', e => {
            e.stopPropagation();
            state.currencies[c.levelCost.currency] = curAmt.minus(cost);
            levelUp(c.id);
            updateCurrencyBar();
          });
        } else {
          btn.disabled = true;
        }
        front.appendChild(btn);
      }



      // quantity badge
      if (c.quantity >= 1) {
        const badge = document.createElement('div');
        badge.className = 'count-badge';
        badge.innerHTML = formatQuantity(c.quantity);
        front.appendChild(badge);
      }

      // NEW banner persists until opened
      if (c.isNew) {
        initCardsFilters();
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

function updateGeneratorRates() {
  // Stone Generator (skill 10001)
  if (skillMap[10001].purchased) {
    // Count discovered Realm 1 cards
    const discoveredCount = cards.filter(c => c.realm === 1 && c.quantity > 0).length;
    
    // Calculate new contribution
    const newContribution = discoveredCount * discoveredCount;
    
    // Remove old contribution and add new one
    state.effects.currencyPerSec.stone = (state.effects.currencyPerSec.stone || 0) 
      - (state.resourceGeneratorContribution.stone || 0) 
      + newContribution;
    
    // Store the new contribution
    state.resourceGeneratorContribution.stone = newContribution;
  }

  // Coral Generator (skill 10002)
  if (skillMap[10002].purchased) {
    // Count discovered Realm 2 cards
    const discoveredCount = cards.filter(c => c.realm === 2 && c.quantity > 0).length;
    
    // Calculate new contribution
    const newContribution = discoveredCount * discoveredCount;
    
    // Remove old contribution and add new one
    state.effects.currencyPerSec.coral = (state.effects.currencyPerSec.coral || 0) 
      - (state.resourceGeneratorContribution.coral || 0) 
      + newContribution;
    
    // Store the new contribution
    state.resourceGeneratorContribution.coral = newContribution;
  }

  // Pollen Generator (skill 10003)
  if (skillMap[10003].purchased) {
    // Count discovered Realm 3 cards
    const discoveredCount = cards.filter(c => c.realm === 3 && c.quantity > 0).length;
    
    // Calculate new contribution
    const newContribution = discoveredCount * discoveredCount;
    
    // Remove old contribution and add new one
    state.effects.currencyPerSec.pollen = (state.effects.currencyPerSec.pollen || 0) 
      - (state.resourceGeneratorContribution.pollen || 0) 
      + newContribution;
    
    // Store the new contribution
    state.resourceGeneratorContribution.pollen = newContribution;
  }

  // Egg Generator (skill 10004)
  if (skillMap[10004].purchased) {
    // Count discovered Realm 4 cards
    const discoveredCount = cards.filter(c => c.realm === 4 && c.quantity > 0).length;
    
    // Calculate new contribution 
    const newContribution = discoveredCount * discoveredCount;

    // Remove old contribution and add new one
    state.effects.currencyPerSec.egg = (state.effects.currencyPerSec.egg || 0)
      - (state.resourceGeneratorContribution.egg || 0)
      + newContribution;

    // Store the new contribution
    state.resourceGeneratorContribution.egg = newContribution;
  }
}

function giveCard(cardId, amount = 1) {
  const c = cardMap[cardId];
  const wasNew = c.quantity === 0;  // Track if this is a new discovery

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
    // remove old-tier contribution
    applyEffectsDelta(oldEffs, -1);
    // apply new-tier contribution
    applyEffectsDelta(newEffs, +1);
    c.lastAppliedEffects = newEffs;
  }

  // Update generator rates if this is a new card discovery
  if (wasNew) {
    c.isNew = true;
    updateGeneratorRates();
  }
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

  // Check for affordable skills after spending currency
  checkAffordableSkills();

  renderCardsCollection();
}

function renderRealmFilters() {
  const container = document.getElementById('poke-filters');
  container.innerHTML = '';

  realms.forEach((r, idx) => {
    if (!r.unlocked) return;

    const enabled      = state.selectedRealms.includes(r.id);
    // any later filters enabled?
    const laterEnabled = realms
      .slice(idx + 1)
      .some(rr => state.selectedRealms.includes(rr.id));

    // decide overlay text
    let effectText;
    if (enabled) {
      effectText = '+' + formatDuration(r.cooldown);
    } else if (!laterEnabled) {
      effectText = '+0s';
    } else {
      effectText = '×' + r.deselectMultiplier;
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'realm-filter-btn' + (enabled ? ' selected' : '');
    btn.innerHTML = `
      <img src="assets/images/card_backs/${slugify(r.name)}_card_back.jpg"
           alt="${r.name}" />
      <div class="filter-effect">${effectText}</div>
    `;

    btn.onclick = () => {
      const i = state.selectedRealms.indexOf(r.id);
      if (i >= 0) {
        if (state.selectedRealms.length === 1 && enabled) return;
        state.selectedRealms.splice(i, 1);
      }
      else{
        state.selectedRealms.push(r.id);
      } 
      renderRealmFilters();
      updatePokeFilterStats();
    };

    container.appendChild(btn);
  });
}


let _cooldownTimer = null;

function startCooldown() {
  // Check for cooldown skip
  const skipChance = state.effects.cooldownSkipChance || 0;
  if (Math.random() < skipChance) {
    // Create and show the floating text
    const skipText = document.createElement('div');
    skipText.className = 'skip-text';
    skipText.textContent = 'Cooldown Skipped!';
    holeBtn.appendChild(skipText);
    
    // Remove the text after animation completes
    skipText.addEventListener('animationend', () => {
      skipText.remove();
    });

    state.cooldownDone = true;
    tryEnableHole();
    return;
  }

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
    localStorage.setItem('ccgCooldownRem', rem.toString());
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

// ——— Add this below your existing startCooldown() ———
function resumeCooldown(rem) {
  // disable the hole-button immediately
  holeBtn.disabled = true;
  holeBtn.classList.add('disabled');

  // show just the countdown text (no CSS bar)
  const countdownEl = holeBtn.querySelector('.countdown')
    || Object.assign(document.createElement('div'), { className: 'countdown' });
  countdownEl.textContent = formatDuration(rem);
  holeBtn.appendChild(countdownEl);

  // drive a pure-JS timer & persist every 100ms
  let remaining = rem;
  const timer = setInterval(() => {
    remaining = Math.max(0, remaining - 0.1);
    countdownEl.textContent = formatDuration(remaining);
    localStorage.setItem('ccgCooldownRem', remaining.toString());

    if (remaining <= 0) {
      clearInterval(timer);
      countdownEl.remove();
      holeBtn.disabled = false;
      holeBtn.classList.remove('disabled');
      localStorage.removeItem('ccgCooldownRem');
      tryEnableHole();
    }
  }, 100);
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
  const unlocked = realms
  .filter(r => r.unlocked && state.selectedRealms.includes(r.id))
  .map(r => r.id);
  const weights      = unlocked.map(rid => realmMap[rid].pokeWeight);
  const totalWeight  = weights.reduce((a,b) => a + b, 0);

  // — build summary table —
  const summaryTable = document.createElement('table');
  summaryTable.className = 'poke-filter-stats-table';
  const sBody = summaryTable.createTBody();
  [
    ['Poke Cooldown',      cooldownTxt],
    ['Undiscovered Cards', undiscovered]
  ].forEach(([label, val]) => {
    const row = sBody.insertRow();
    const th  = document.createElement('th');
    th.textContent = label;
    row.appendChild(th);
    const td  = document.createElement('td');
    td.textContent = val;
    row.appendChild(td);
  });

  // — build realm odds table —
  const oddsTable = document.createElement('table');
  oddsTable.className = 'poke-filter-stats-table';
  const oHead = oddsTable.createTHead();
  const headerRow = oHead.insertRow();
  ['Realm','Chance'].forEach(txt => {
    const th = document.createElement('th');
    th.textContent = txt;
    headerRow.appendChild(th);
  });
  const oBody = oddsTable.createTBody();
  unlocked.forEach(rid => {
    const realm = realmMap[rid];
    const pct   = totalWeight > 0
      ? (realm.pokeWeight/totalWeight*100).toFixed(2) + '%'
      : '0.00%';
    const row = oBody.insertRow();

    // styled realm name
    const nameCell = document.createElement('td');
    const span     = document.createElement('span');
    span.textContent   = realm.name;
    span.style.color   = realmColors[rid];
    span.style.fontWeight = 'bold';
    nameCell.appendChild(span);
    row.appendChild(nameCell);

    const pctCell = document.createElement('td');
    pctCell.textContent = pct;
    row.appendChild(pctCell);
  });

  // — wrap in flex container —
  const flex = document.createElement('div');
  flex.className = 'poke-filter-stats-flex';
  flex.append(summaryTable, oddsTable);

  container.appendChild(flex);
}

// Add this function before DOMContentLoaded
function showOfflineEarningsModal(earnings) {
  // Only show if there are any earnings
  if (Object.keys(earnings).length === 0) return;

  // OVERLAY
  const ov = document.createElement('div');
  ov.className = 'offline-earnings-modal';
  ov.onclick = () => ov.remove();

  // MODAL CONTAINER
  const mc = document.createElement('div');
  mc.className = 'offline-earnings-content';
  mc.onclick = e => e.stopPropagation();

  // Create flex container for vertical stacking
  const flexContainer = document.createElement('div');
  flexContainer.className = 'offline-earnings-flex';

  // HEADER
  const header = document.createElement('h3');
  header.textContent = 'Offline Earnings';
  header.style.textAlign = 'center';
  header.style.marginBottom = '20px';
  flexContainer.appendChild(header);

  // EARNINGS LIST
  const list = document.createElement('div');
  list.className = 'offline-earnings-list';
  
  Object.entries(earnings).forEach(([curId, amount]) => {
    if (amount.lessThanOrEqualTo(0)) return;
    
    const meta = currencies.find(c => c.id === curId);
    if (!meta) return;

    const item = document.createElement('div');
    item.className = 'offline-earnings-item';
    item.innerHTML = `
      <span class="amount">+${formatNumber(amount)}</span>
      <img class="icon" src="assets/images/currencies/${meta.icon}" alt="${meta.name}" />
      <span class="name">${meta.name}</span>
    `;
    list.appendChild(item);
  });

  flexContainer.appendChild(list);
  mc.appendChild(flexContainer);
  ov.appendChild(mc);
  document.body.appendChild(ov);

  // Force a reflow to ensure proper positioning
  void ov.offsetHeight;

  // Auto-remove after 5 seconds
  setTimeout(() => ov.remove(), 5000);
}

// --- INIT AFTER DOM READY ---
document.addEventListener('DOMContentLoaded', ()=>{

  // Check initial orientation
  const checkOrientation = () => {
    const overlay = document.getElementById('landscape-overlay');
    const isPortrait = window.innerHeight > window.innerWidth * 1.1;
    overlay.style.display = isPortrait ? 'flex' : 'none';
  };

  // Check orientation on load and resize
  checkOrientation();
  window.addEventListener('resize', checkOrientation);
  window.addEventListener('orientationchange', checkOrientation);

  loadState();

  // Show welcome modal for new users
  const savedState = JSON.parse(localStorage.getItem(SAVE_KEY) || '{}');
  if (!savedState.lastSaveTime) {
    const welcomeModal = document.getElementById('welcome-modal');
    welcomeModal.style.display = 'flex';
    
    // Close button handler
    const closeBtn = welcomeModal.querySelector('.welcome-close-btn');
    closeBtn.onclick = () => {
      welcomeModal.style.display = 'none';
    };
  }

  cards.forEach(c => {
    c.lastAppliedEffects = {};
    if (c.quantity > 0) {
      const cur = computeCardEffects(c);
      applyEffectsDelta(cur, +1);
      c.lastAppliedEffects = cur;
    }
  });

  // Calculate offline progress after all effects are computed
  if (savedState.lastSaveTime) {
    const currentTime = Date.now();
    const timeDiff = Math.floor((currentTime - savedState.lastSaveTime) / 1000); // Convert to seconds
    
    // Track earnings for the modal
    const offlineEarnings = {};
    
    // Award currency based on currencyPerSec and time difference
    Object.entries(state.effects.currencyPerSec).forEach(([curId, rate]) => {
      if (rate && state.currencies[curId] != null) {
        const offlineGain = new Decimal(rate).times(timeDiff);
        state.currencies[curId] = state.currencies[curId].plus(offlineGain);
        offlineEarnings[curId] = offlineGain;
      }
    });

    // Show earnings modal
    showOfflineEarningsModal(offlineEarnings);
  }

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
  initCardsFilters();
  renderCardsCollection();
  updatePokeFilterStats();
  updateGeneratorRates();
  checkAffordableSkills();

  if (state.currentMerchant) {
    // we have a saved merchant + offers,
    // so restore our refresh timer and just render
    nextRefresh =
      Date.now()
      + state.currentMerchant.refreshTime * 1000;
    renderMerchantTab();
  } else {
    // first time ever, pick a new one
    state.currentMerchant = pickMerchant();
    nextRefresh =
      Date.now()
      + state.currentMerchant.refreshTime * 1000;
    genMerchantOffers();
    renderMerchantTab();
  }

  // tick every 100ms
  setInterval(refreshMerchantIfNeeded, 100);

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

  const savedRem = parseFloat(localStorage.getItem('ccgCooldownRem'));
  if (!isNaN(savedRem) && savedRem > 0) {
    resumeCooldown(savedRem);
  } else{
    holeBtn.disabled = false;
    holeBtn.classList.remove('disabled');
  }
});
