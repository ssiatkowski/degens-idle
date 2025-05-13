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
    }

  ];
  
  // ——— RARITY PRICE MULTIPLIERS ———
  const RARITY_PRICE_MULT = {
    junk:      new Decimal(1),
    basic:     new Decimal(2),
    decent:    new Decimal(5),
    fine:      new Decimal(12),
    rare:      new Decimal(30),
    epic:      new Decimal(100),
    legendary: new Decimal(300),
    mythic:    new Decimal(800),
    exotic:    new Decimal(3000),
    divine:    new Decimal(15000),
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
  
  let nextRefresh = Date.now();
  
  // ——— REFRESH CHECK & TIMER ———
  function refreshMerchantIfNeeded() {
    const now = Date.now();
    if (!state.currentMerchant || now >= nextRefresh) {
      state.currentMerchant = pickMerchant();
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
    const rem = (nextRefresh - now) / 1000;
    timerEl.textContent = rem > 0
      ? `Leaves in ${formatDuration(rem)}`
      : `Refreshing…`;
    timerEl.style.color = rem > 0 && rem < 10 ? 'red' : '';
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
    if (!unlockedRealms.length) {
      state.merchantOffers = offers;
      return;
    }
  
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
  
      // 2) build boosted rarity weights, skipping any merchant‐specific rarities
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
  
        // 4) choose currency: only those you actually earn via per‐sec or per‐poke
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
      price = price.times(Math.random()*1.98 + 0.01).times(1 - state.effects.merchantPriceReduction).times(state.currentMerchant.priceMultiplier).ceil();
  
      let quantity = 1;
      if (ownQty > 9 && Math.random() < 0.25) {
        const maxStack = Math.floor(Math.cbrt(ownQty));
        quantity = Math.max(1, Math.floor(Math.random() * maxStack) + 1);
        price = price.times(Math.cbrt(quantity));
      }

  
      if (price.lessThan(1)) price = new Decimal(1);
      price = floorTo3SigDigits(price);
      offers.push({ cardId, price, currency, quantity });
    }
  
    state.merchantOffers = offers;
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
  
    // clear old
    offersEl.innerHTML = '';
  
    // set image & greeting
    const slug = slugify(state.currentMerchant.name);
    imgEl.src = `assets/images/merchants/${slug}.jpg`;
    imgEl.alt = state.currentMerchant.name;
  
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
      f.src = `assets/images/frames/${card.rarity}_frame.jpg`;
      const a = document.createElement('img');
      a.className = 'card-image';
      a.src = `assets/images/cards/${card.realm}/${slugify(card.name)}.jpg`;
      front.append(f, a);
  
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
      buyBtn.innerHTML = `
        <span>Buy:</span>
        <span>
          ${formatNumber(o.price)}
          <img class="icon" src="assets/images/currencies/${cm.icon}"/>
        </span>
      `;
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
  }
  
  
  // expose unlock helper if needed elsewhere
  window.unlockMerchantByName = unlockMerchantByName;
  