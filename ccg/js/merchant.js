// js/merchant.js

// ——— MERCHANT DEFINITIONS ———
const merchants = [
    {
      id: 1,
      name: 'Aldric Farwander',
      cardMultiplier: 1,
      refreshTime: 300,
      merchantOdds: 1000,
      raritiesSkipped: [],
      priceMultiplier: 1,
      rarityScaling: 2.5,
      description: 'Your standard traveling merchant',
      unlocked: true
    },
    {
      id: 2,
      name: 'Maribel Tealeaf',
      cardMultiplier: 1,
      refreshTime: 150,
      merchantOdds: 900,
      raritiesSkipped: [],
      priceMultiplier: 1,
      rarityScaling: 2.5,
      description: 'Always on the move. She only stays for half as long.',
      unlocked: true
    },
    {
      id: 3,
      name: 'Cedric Stormforge',
      cardMultiplier: 2,
      refreshTime: 300,
      merchantOdds: 800,
      raritiesSkipped: [],
      priceMultiplier: 1,
      rarityScaling: 2.5,
      description: 'A strong dude. Carries twice as many cards.',
      unlocked: true
    },
    {
      id: 4,
      name: 'Yvette Ambervale',
      cardMultiplier: 1,
      refreshTime: 300,
      merchantOdds: 700,
      raritiesSkipped: ['junk'],
      priceMultiplier: 1,
      rarityScaling: 2.5,
      description: 'A fancy lady. She does not carry junk.',
      unlocked: false
    },
    {
      id: 5,
      name: 'Orin Saltstride',
      cardMultiplier: 0.5,
      refreshTime: 300,
      merchantOdds: 600,
      raritiesSkipped: [],
      priceMultiplier: 0.1,
      rarityScaling: 2.5,
      description: 'Fair old guy. Carries half as many cards but sells them at 1/10 of the price.',
      unlocked: false
    },
    {
      id: 6,
      name: 'Petra Moonclasp',
      cardMultiplier: 1,
      refreshTime: 300,
      merchantOdds: 500,
      raritiesSkipped: [],
      priceMultiplier: 1,
      rarityScaling: 4.5,
      description: 'A lucky girl. Has better odds of offering rarer cards (+2 to scaling).',
      unlocked: false
    },
    {
      id: 7,
      name: 'Fergus Grainhand',
      cardMultiplier: 1.5,
      refreshTime: 200,
      merchantOdds: 450,
      raritiesSkipped: ['junk'],
      priceMultiplier: 0.5,
      rarityScaling: 2.5,
      description: 'An all around good guy. Carries 1.5x as many cards (no junk), sells them at 1/2 of the price, and stays 2/3 as long.',
      unlocked: false
    },
    {
      id: 8,
      name: 'Runa Frostpelt',
      cardMultiplier: 1,
      refreshTime: 300,
      merchantOdds: 400,
      raritiesSkipped: ['basic'],
      priceMultiplier: 1,
      rarityScaling: 2.5,
      description: 'Not a basic bitch. No basic cards. That is all.',
      unlocked: false
    },
    {
      id: 9,
      name: 'Tobias Quickpouch',
      cardMultiplier: 10,
      refreshTime: 100,
      merchantOdds: 350,
      raritiesSkipped: [],
      priceMultiplier: 0.75,
      rarityScaling: 2.5,
      description: 'The only BS this guy knows is Bulk Sales. Carries 10x as many cards, sells them at 75% of the price, and stays 1/3 as long.',
      unlocked: false
    },
    {
      id: 10,
      name: 'Selene Starwhistle',
      cardMultiplier: 0,
      refreshTime: 300,
      merchantOdds: 300,
      raritiesSkipped: ['junk', 'basic', 'decent', 'fine'],
      priceMultiplier: 2,
      rarityScaling: 3.5,
      description: 'Some say she is a real magician. Only offers one card at a time for double the price, but it is always rare or better. (and +1 to rarity scaling).',
      unlocked: false
    },
    {
      id: 11,
      name: 'Magnus Glimmergold',
      cardMultiplier: 1,
      refreshTime: 300,
      merchantOdds: 250,
      raritiesSkipped: ['junk', 'basic', 'decent'],
      priceMultiplier: 1,
      rarityScaling: 2.5,
      description: 'Some say he is a real magician, but all know he is rich. He will not even look at cards that are lower rarity than fine.',
      unlocked: false
    }
    

  ];
  
  // ——— RARITY PRICE MULTIPLIERS ———
  const RARITY_PRICE_MULT = {
    junk:      new Decimal(1),
    basic:     new Decimal(5),
    decent:    new Decimal(15),
    fine:      new Decimal(50),
    rare:      new Decimal(200),
    epic:      new Decimal(1000),
    legend:    new Decimal(5000),
    mythic:    new Decimal(25000),
    exotic:    new Decimal(100000),
    divine:    new Decimal(500000),
  };

  // ——— HELPERS ———
  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // only pick among unlocked merchants, weighted by merchantOdds
  function pickMerchant() {
    const pool = merchants.filter(m => m.unlocked);
    const total = pool.reduce((sum, m) => sum + m.merchantOdds, 0);
    let rnd = Math.random() * total;
    for (const m of pool) {
      if (rnd < m.merchantOdds) return m;
      rnd -= m.merchantOdds;
    }
    return pool[0] || null;
  }
  
  // optional helper: unlock a merchant by name
  function unlockMerchantByName(name) {
    const m = merchants.find(m => m.name === name);
    if (!m) {
      console.warn(`No merchant found with name “${name}”`);
      return false;
    }
    m.unlocked = true;
    return true;
  }
  
  // relies on weightedPick being defined globally (from main.js)
  function weightedPick(weights) {
    let total = 0;
    for (let w of Object.values(weights)) total += w;
    let rnd = Math.random() * total;
    for (let [k, w] of Object.entries(weights)) {
      if (rnd < w) return k;
      rnd -= w;
    }
    return Object.keys(weights)[0];
  }
  
  // ——— DOM CACHE ———
  const imgEl    = document.getElementById('merchant-image');
  const msgEl    = document.getElementById('merchant-message');
  const offersEl = document.getElementById('merchant-offers');
  const timerEl  = document.getElementById('merchant-timer');
  
  // Add a container for the bulk buy button
  let bulkBuyBtn = document.getElementById('merchant-bulkbuy-btn');
  if (!bulkBuyBtn) {
    bulkBuyBtn = document.createElement('button');
    bulkBuyBtn.id = 'merchant-bulkbuy-btn';
    bulkBuyBtn.style.display = 'none';
    bulkBuyBtn.className = 'merchant-bulkbuy-btn';
    bulkBuyBtn.textContent = 'How about all of them for 5% off?';  // Default text
    // Insert after timer, before image
    const panel = document.getElementById('merchant-panel');
    if (panel) {
      const timer = document.getElementById('merchant-timer');
      if (timer && timer.nextSibling) {
        panel.insertBefore(bulkBuyBtn, timer.nextSibling);
      } else {
        panel.appendChild(bulkBuyBtn);
      }
    }
  }
  
  // nextRefresh is declared here, but initialized/set in main.js
  let nextRefresh = null;
  
  // ——— REFRESH CHECK & TIMER ———
  function refreshMerchantIfNeeded() {
    const now = Date.now();
    if (!state.currentMerchant || (nextRefresh && now >= nextRefresh)) {
      state.currentMerchant = pickMerchant();
      merchantIsNew = true;
      const baseRefreshTime = state.currentMerchant.refreshTime;
      const reducedTime = Math.max(15, baseRefreshTime - (state.effects.merchantCooldownReduction || 0));
      nextRefresh = now + reducedTime * 1000;
      genMerchantOffers();
      
      // Set merchant message only on refresh
      const greeting = pickRandom(window.merchantGreetings);
      const pitch = pickRandom(window.merchantPitches);
      state.currentMerchantMessage = `
        <div class="merchant-greeting">${greeting}</div>
        <div class="merchant-pitch">${pitch}</div>
      `;

      renderMerchantTab();
    }
    const rem = nextRefresh ? (nextRefresh - now) / 1000 : 0;
    if (rem > 0) {
      timerEl.textContent = `Leaves in ${formatDuration(rem)}`;
    } else {
      timerEl.textContent = `Refreshing…`;
    }
  
    // toggle the "urgent" class instead of manually setting style.color
    if (rem > 0 && rem < 10) {
      timerEl.classList.add('urgent');
    } else {
      timerEl.classList.remove('urgent');
    }
  }
  
  // ——— GENERATE MERCHANT OFFERS ———
  function genMerchantOffers() {
    // ensure we always have a merchant
    if (!state.currentMerchant) {
      state.currentMerchant = pickMerchant();
      nextRefresh = Date.now() + state.currentMerchant.refreshTime * 1000;
    }
  
    const offers = [];
    const unlockedRealms = realms.filter(r => r.unlocked).map(r => r.id);
  
    // precompute totals per realm
    const totalByRealm = {}, discByRealm = {};
    cards.forEach(c => {
      totalByRealm[c.realm] = (totalByRealm[c.realm] || 0) + 1;
      if (c.quantity > 0) {
        discByRealm[c.realm] = (discByRealm[c.realm] || 0) + 1;
      }
    });
  
    // # of slots
    const slots = Math.max(Math.ceil(state.effects.merchantNumCards
                          * state.currentMerchant.cardMultiplier), 1);
  
    for (let i = 0; i < slots; i++) {
      // 1) pick a realm
      const realmId = pickRandom(unlockedRealms);
      const realm   = realmMap[realmId];
  
      // 2) build boosted rarity weights, skipping any merchant-specific rarities
      const skip = state.currentMerchant.raritiesSkipped || [];
      const boosted = {};
      rarities
        .filter(r => !skip.includes(r))
        .forEach((r, idx) => {
          boosted[r] = (realm.rarityWeights[r] || 0)
                     * Decimal.pow(state.currentMerchant.rarityScaling + state.effects.extraMerchantRarityScaling, idx).toNumber();
        });
      const rarity = weightedPick(boosted);
  
      // 3) pick a card from that realm+rarity
      let pool = realmRarityCardMap[realmId][rarity] || [];
      if (!pool.length) pool = realmRarityCardMap[realmId].junk;
      const cardId = pickRandom(pool);
      
      const ownQty = cardMap[cardId].quantity;
  
        // 4) choose currency: only those you actually earn via per-sec or per-poke
        const curSec  = state.effects.currencyPerSec;
        const curPoke = state.effects.currencyPerPoke;

        let validCurrencies = currencies.filter(cur => {
        const id = cur.id;
        const earnsSec  = (curSec[id]  || 0) > 0;
        const earnsPoke = (curPoke[id] || 0) > 0;
        return earnsSec || earnsPoke;
        });

        if (!validCurrencies.length) {
            validCurrencies = currencies.filter(cur => cur.id === 'stone');
        }

        const currencyMeta = pickRandom(validCurrencies);
        const currency     = currencyMeta.id;

  
      // compute price
      const rateSec  = new Decimal(curSec[currency] * state.effects.currencyPerSecMultiplier[currency] + state.resourceGeneratorContribution[currency] || 0);
      const ratePoke = new Decimal(curPoke[currency] * state.effects.currencyPerPokeMultiplier[currency] || 0);
      let price = rateSec.times(10).plus(ratePoke.times(2))
                  .times(RARITY_PRICE_MULT[rarity] || 1);
  
      // randomness ±99%
      // divide is not a function of Decimal, so we need to use a different approach

      price = price.times(Math.random()*1.98 + 0.01).dividedBy(state.effects.merchantPriceDivider).times(state.currentMerchant.priceMultiplier).ceil();
  
      
      let quantity = 1;
      if (ownQty > 9 && Math.random() < state.merchantBulkChance) {
        const maxStack = Math.floor(Math.cbrt(ownQty));
        quantity = Math.max(1, Math.floor(Math.random() * maxStack) + 1);
        price = price.times(Math.cbrt(quantity));
      }

  
      if (price.lessThan(1)) price = new Decimal(1);
      price = floorTo3SigDigits(price);
      offers.push({ cardId, price, currency, quantity });
    }
  
    state.merchantOffers = offers;
    if (merchantIsNew) {
      merchantOffersOriginalCount = state.merchantOffers.length;
      merchantIsNew = false;
    }
    saveState();
  
    const btn = document.getElementById('tab-btn-merchant');
    if (!btn.classList.contains('active')) btn.classList.add('new-offers');
  }
  
  // ——— RENDER & BUY ———
  function renderMerchantTab() {
    if (!state.currentMerchant) {
      refreshMerchantIfNeeded();
      return;
    }
  
    // Show/hide bulk buy button and update its text
    if (bulkBuyBtn) {
      if (skillMap[19101].purchased && canBulkBuyAllOffers()) {
        bulkBuyBtn.style.display = '';
        bulkBuyBtn.innerHTML = `How about all of them for ${formatNumber(state.merchantBuyAllDiscount * 100)}% off?`;
      } else {
        bulkBuyBtn.style.display = 'none';
      }
    }
  
    // Set merchant image
    const slug = slugify(state.currentMerchant.name);
    const merchantPath = `assets/images/merchants/${slug}.jpg`;
    imageCache.getImage('merchants', merchantPath).then(img => {
        if (img) {
            imgEl.src = img.src;
            imgEl.alt = state.currentMerchant.name;
        }
    });

    // Generate new message if undefined
    if (!state.currentMerchantMessage) {
      const greeting = pickRandom(window.merchantGreetings);
      const pitch = pickRandom(window.merchantPitches);
      state.currentMerchantMessage = `
        <div class="merchant-greeting">${greeting}</div>
        <div class="merchant-pitch">${pitch}</div>
      `;
    }

    // Use stored message
    msgEl.innerHTML = state.currentMerchantMessage;

    // Clear previous offers
    offersEl.innerHTML = '';

    // render offers
    state.merchantOffers.forEach((o, idx) => {
      const card  = cardMap[o.cardId];
      const realm = realmMap[card.realm];
  
      const outer = document.createElement('div');
      outer.className = 'card-outer merchant-offer';
  
      const inner = document.createElement('div');
      inner.className = 'card-inner revealed';
  
      const front = document.createElement('div');
      front.className = 'card-face front';
      front.style.borderColor = realmColors[realm.id];
  
      // artwork
      const f = document.createElement('img');
      f.className = 'card-frame';
      const framePath = `assets/images/frames/${card.rarity}_frame.jpg`;
      imageCache.getImage('frames', framePath).then(img => {
          if (img) f.src = img.src;
      });

      const a = document.createElement('img');
      a.className = 'card-image';
      const cardPath = `assets/images/cards/${card.realm}/${slugify(card.name)}.jpg`;
      imageCache.getImage('cards', cardPath).then(img => {
          if (img) a.src = img.src;
      });
      front.append(f, a);
  
      // Add tier progress bar
      const barContainer = document.createElement('div');
      barContainer.className = 'merchant-modal-bar-container';
      const thresholds = window.tierThresholds[card.rarity];
      const nextThresh = thresholds[card.tier] || thresholds[thresholds.length - 1];
      const pct = Math.min(card.quantity / nextThresh, 1) * 100;
      const bar = document.createElement('div');
      bar.className = 'merchant-modal-bar';
      bar.style.width = pct + '%';
      const thresholdLab = document.createElement('div');
      thresholdLab.className = 'tier-threshold';
      thresholdLab.textContent = `${formatNumber(card.quantity)} / ${formatNumber(nextThresh)} for Tier ${card.tier+1}`;
      barContainer.append(bar, thresholdLab);
      front.appendChild(barContainer);
  
      // add quantity badge if more than 1
      if (o.quantity > 1) {
        const qtyBadge = document.createElement('div');
        qtyBadge.className = 'count-badge';
        qtyBadge.textContent = o.quantity;
        front.appendChild(qtyBadge);
      }
  
      // buy button
      const cm = currencies.find(cu => cu.id === o.currency) || { icon: 'question.png' };
      const buyBtn = document.createElement('button');
      buyBtn.className = 'offer-buy-btn';
      const currencyPath = `assets/images/currencies/${cm.icon}`;
      imageCache.getImage('currencies', currencyPath).then(img => {
          if (img) {
              buyBtn.innerHTML = `
                <span>Buy:</span>
                <span>
                  ${formatNumber(o.price)}
                  <img class="icon" src="${img.src}"/>
                </span>
              `;
          }
      });
      buyBtn.addEventListener('click', e => {
        e.stopPropagation();
        buyOffer(idx);
      });
      front.appendChild(buyBtn);

        // add NEW badge if player doesn't own this card yet
        if (card.quantity === 0 || card.isNew) {
            const newBadge = document.createElement('div');
            newBadge.className = 'reveal-badge new-badge';
            newBadge.textContent = 'NEW';
            front.appendChild(newBadge);
        } else {
          // Check if purchasing would increase tier
          const thresholds = window.tierThresholds[card.rarity];
          const currentTier = card.tier;
          let newTier = 1;
          while (newTier < thresholds.length && (card.quantity + o.quantity) >= thresholds[newTier]) {
            newTier++;
          }
          if (newTier > currentTier) {
            const tierUpBadge = document.createElement('div');
            tierUpBadge.className = 'reveal-badge tierup-badge';
            tierUpBadge.textContent = 'TIER UP';
            front.appendChild(tierUpBadge);
          }
        }
  
      // add click handler to open modal
      outer.addEventListener('click', () => openModal(card.id));
  
      inner.append(front);
      outer.append(inner);
      offersEl.appendChild(outer);
    });
  
  }
  
  function buyOffer(i) {
    const o   = state.merchantOffers[i];
    const bal = state.currencies[o.currency] || new Decimal(0);
    if (bal.lessThan(o.price)) return;
  
    // spend & award
    state.currencies[o.currency] = bal.minus(o.price);
    giveCard(o.cardId, o.quantity || 1);
  
    // remove the offer
    state.merchantOffers.splice(i, 1);
  
    // if that was the *last* card, force remaining cooldown ≤ 10s
    if (state.merchantOffers.length === 0) {
      const now       = Date.now();
      const maxRemain = 10 * 1000; // 10s in ms
      const rem       = nextRefresh - now;
      if (rem > maxRemain) {
        nextRefresh = now + maxRemain;
      }
    }
  
    // re-render
    renderMerchantTab();
    updateCurrencyBar();
    state.stats.merchantPurchases++;
    saveState(); // Save state after purchase
  }
  
  
  // expose unlock helper if needed elsewhere
  window.unlockMerchantByName = unlockMerchantByName;
  
  function generateMerchantOffer() {
    const player = getPlayer();
    const specialEffects = player.specialEffects || {};
    
    // Calculate base values
    let maxCardsPerPoke = 3;
    let minCardsPerPoke = 1;
    let cooldownDivider = 1;
    
    // Apply special effects
    if (specialEffects.flatMaxCardsPerPoke) {
      maxCardsPerPoke += specialEffects.flatMaxCardsPerPoke;
    }
    if (specialEffects.flatMinCardsPerPoke) {
      minCardsPerPoke += specialEffects.flatMinCardsPerPoke;
    }
    if (specialEffects.flatCooldownDivider) {
      cooldownDivider += specialEffects.flatCooldownDivider;
    }
    
    // Ensure min doesn't exceed max
    minCardsPerPoke = Math.min(minCardsPerPoke, maxCardsPerPoke);
    
    // Generate random number of cards between min and max
    const numCards = Math.floor(Math.random() * (maxCardsPerPoke - minCardsPerPoke + 1)) + minCardsPerPoke;
    
    // Generate random cards
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(generateRandomCard());
    }
    
    // Calculate cooldown with divider
    const baseCooldown = 300; // 5 minutes in seconds
    const cooldown = Math.max(60, Math.floor(baseCooldown / cooldownDivider));
    
    return {
      cards,
      cooldown,
      timestamp: Date.now()
    };
  }

  function updateMerchantOffer() {
    const offer = getMerchantOffer();
    if (!offer) return;
    
    const now = Date.now();
    const elapsed = (now - offer.timestamp) / 1000;
    const progress = Math.min(1, elapsed / offer.cooldown);
    
    const bar = document.querySelector('.merchant-offer .merchant-modal-bar');
    const threshold = document.querySelector('.merchant-offer .threshold');
    const countBadge = document.querySelector('.merchant-offer .count-badge');
    
    if (bar) bar.style.width = `${progress * 100}%`;
    if (threshold) threshold.textContent = `${Math.ceil(offer.cooldown - elapsed)}s`;
    if (countBadge) countBadge.textContent = offer.cards.length;
    
    if (progress >= 1) {
      const newOffer = generateMerchantOffer();
      setMerchantOffer(newOffer);
    }
  }
  
  let merchantIsNew = false;
  let merchantOffersOriginalCount = null;

  function canBulkBuyAllOffers() {
    // If any offer has been bought (i.e. less than the original number of offers), don't allow
    if (!state.merchantOffers || state.merchantOffers.length === 0) return false;
    if (merchantOffersOriginalCount === null || state.merchantOffers.length < merchantOffersOriginalCount) return false;
    // Check if player can afford all for discount
    const needed = {};
    for (const o of state.merchantOffers) {
      const price = new Decimal(o.price);
      const discounted = price.times(1 - state.merchantBuyAllDiscount).ceil();
      needed[o.currency] = (needed[o.currency] || new Decimal(0)).plus(discounted);
    }
    for (const [cur, amt] of Object.entries(needed)) {
      if ((state.currencies[cur] || new Decimal(0)).lessThan(amt)) return false;
    }
    return true;
  }

  function doBulkBuyAllOffers() {
    // Deduct all currencies and give all cards
    const needed = {};
    for (const o of state.merchantOffers) {
      const price = new Decimal(o.price);
      const discounted = price.times(1 - state.merchantBuyAllDiscount).ceil();
      needed[o.currency] = (needed[o.currency] || new Decimal(0)).plus(discounted);
    }
    for (const [cur, amt] of Object.entries(needed)) {
      state.currencies[cur] = (state.currencies[cur] || new Decimal(0)).minus(amt);
    }
    for (const o of state.merchantOffers) {
      giveCard(o.cardId, o.quantity || 1);
    }
    state.stats.merchantPurchases += state.merchantOffers.length;
    state.merchantOffers = [];
    const now       = Date.now();
    const maxRemain = 10 * 1000; // 10s in ms
    const rem       = nextRefresh - now;
    if (rem > maxRemain) {
      nextRefresh = now + maxRemain;
    }
    renderMerchantTab();
    updateCurrencyBar();
    saveState();
  }

  if (bulkBuyBtn) {
    bulkBuyBtn.onclick = function() {
      doBulkBuyAllOffers();
      bulkBuyBtn.style.display = 'none';
    };
  }
  