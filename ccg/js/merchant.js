// js/merchant.js

// ——— RARITY PRICE MULTIPLIERS ———
const RARITY_PRICE_MULT = {
    junk:      new Decimal(1),
    basic:     new Decimal(2),
    decent:    new Decimal(5),
    fine:      new Decimal(10),
    rare:      new Decimal(20),
    epic:      new Decimal(50),
    legendary: new Decimal(100),
    mythic:    new Decimal(200),
    exotic:    new Decimal(500),
    divine:    new Decimal(5000),
  };
  
  // uniform random picker
  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // insert timer above #merchant-offers
  const offersCont = document.getElementById('merchant-offers');
  const timerEl   = document.createElement('div');
  timerEl.id      = 'merchant-timer';
  timerEl.style.marginBottom = '8px';
  offersCont.parentNode.insertBefore(timerEl, offersCont);
  
  // refresh interval
  const REFRESH_MS = 300000; // 300000
  let nextRefresh  = Date.now() + REFRESH_MS;
  
  function refreshMerchantIfNeeded() {
    const now = Date.now();
    if (now >= nextRefresh) {
      genMerchantOffers();
      renderMerchantTab();
      nextRefresh = now + REFRESH_MS;
    }
    const remS = (nextRefresh - now) / 1000;
    timerEl.textContent = remS > 0
      ? `Merchant will leave in ${formatDuration(remS)}`
      : `Refreshing…`;
    timerEl.style.color = (remS > 0 && remS < 10) ? 'red' : '';
  }
  
  // ——— CORE: Generate Offers ———
  function genMerchantOffers() {
    const offers = [];
    const unlockedRealms = realms.filter(r => r.unlocked).map(r => r.id);
    if (!unlockedRealms.length) {
      state.merchantOffers = offers;
      return;
    }
  
    // precompute per-realm totals & discovered counts
    const totalByRealm = {}, discByRealm = {};
    cards.forEach(c => {
      totalByRealm[c.realm] = (totalByRealm[c.realm] || 0) + 1;
      if (c.quantity > 0) {
        discByRealm[c.realm] = (discByRealm[c.realm] || 0) + 1;
      }
    });
  
    for (let slot = 0; slot < 2; slot++) {
      // 1) pick a realm
      const realmId = pickRandom(unlockedRealms);
      const realm   = realmMap[realmId];
  
      // 2) merchant-boosted rarity weights
      const boosted = {};
      rarities.forEach((r, idx) => {
        boosted[r] = (realm.rarityWeights[r] || 0)
                   * Decimal.pow(1.5, idx).toNumber();
      });
      const rarity = weightedPick(boosted);
  
      // 3) pick a card from that realm+rarity
      let pool = realmRarityCardMap[realmId][rarity] || [];
      if (!pool.length) pool = realmRarityCardMap[realmId].junk;
      const cardId = pickRandom(pool);
      const ownQty = cardMap[cardId].quantity;
  
      // 4) base price = (30s × rate/sec) + (10 × rate/poke)
      const curSec  = state.effects.currencyPerSec;
      const curPoke = state.effects.currencyPerPoke;
      // choose currency *first*, so we know which rates to use
      // we'll filter currencies next…
  
      // 5) filter currencies by scarcity rule
      let validCurrencies = currencies.filter(cur => {
        if (!unlockedRealms.includes(cur.realm)) return false;
        if (cur.scarcity === 1) return true;
        const total     = totalByRealm[cur.realm]  || 0;
        const discovered = discByRealm[cur.realm] || 0;
        return discovered > (total / 2);
      });
      if (!validCurrencies.length) {
        validCurrencies = currencies.filter(cur =>
          unlockedRealms.includes(cur.realm) && cur.scarcity === 1
        );
      }
      if (!validCurrencies.length) {
        validCurrencies = currencies.filter(cur =>
          unlockedRealms.includes(cur.realm)
        );
      }
      if (!validCurrencies.length) {
        validCurrencies = currencies;
      }
      const currencyMeta = pickRandom(validCurrencies);
      const currency     = currencyMeta.id;
  
      // now compute basePrice with that currency's rates
      const rateSec  = new Decimal(curSec[currency] || 0);
      const ratePoke = new Decimal(curPoke[currency] || 0);
      const basePrice = rateSec.times(15).plus(ratePoke.times(10));
  
      // 6) scale by rarity multiplier
      let price = basePrice.times(RARITY_PRICE_MULT[rarity] || 1);
  
      // 7) ±99% randomness
      const factor = Math.random() * 1.98 + 0.01;
      price = price.times(factor).ceil();
  
      // 8) divide by scarcity
      price = price.dividedBy(currencyMeta.scarcity).ceil();
  
      // 9) maybe sell a stack (>1)?
      let quantity = 1;
      if (ownQty > 9 && Math.random() < 0.1) {
        const maxStack = Math.floor(Math.cbrt(ownQty));
        quantity = Math.max(1, Math.floor(Math.random() * maxStack) + 1);
        // cost × cube-root of stack size
        price = price.times(Math.cbrt(quantity)).ceil();
      }
  
      if (price.lessThan(1)) {
        price = new Decimal(1);
      }

      offers.push({ cardId, price, currency, quantity });
    }
  
    state.merchantOffers = offers;
    saveState();
  
    // highlight new offers if tab closed
    const btn = document.getElementById('tab-btn-merchant');
    if (!btn.classList.contains('active')) btn.classList.add('new-offers');
  }
  
  // ——— RENDER & BUY ———
  function renderMerchantTab() {
    const cont = document.getElementById('merchant-offers');
    cont.innerHTML = '';
  
    state.merchantOffers.forEach((o, idx) => {
      const card  = cardMap[o.cardId];
      const realm = realmMap[card.realm];
  
      const outer = document.createElement('div');
      outer.className = 'card-outer merchant-offer';
  
      const inner = document.createElement('div');
      inner.className = 'card-inner revealed';
  
      const front = document.createElement('div');
      front.className = 'card-face front';
      front.style.position    = 'relative';
      front.style.borderColor = realmColors[realm.id];
  
      // frame & art
      const f = document.createElement('img');
      f.className = 'card-frame';
      f.src       = `assets/images/frames/${card.rarity}_frame.jpg`;
      const a = document.createElement('img');
      a.className = 'card-image';
      a.src       = `assets/images/cards/${slugify(card.name)}.jpg`;
      front.append(f, a);
  
      // tier & level
      if (card.tier > 0) {
        const ti = document.createElement('img');
        ti.className = 'tier-icon';
        ti.src       = `assets/images/tiers/tier_${card.tier}.png`;
        const ll = document.createElement('div');
        ll.className = 'level-label';
        ll.textContent = `Lvl: ${formatNumber(card.level)}`;
        front.append(ti, ll);
      }
  
        // look up currency meta
        const cm = currencies.find(cu => cu.id === o.currency) || { icon: 'question.png' };

        // BUY button
        const buyBtn = document.createElement('button');
        buyBtn.className = 'offer-buy-btn';

        // two-line content
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
  
      // quantity badge if stack
      if (o.quantity > 1) {
        const badge = document.createElement('div');
        badge.className = 'count-badge';
        badge.textContent = o.quantity;
        front.appendChild(badge);
      }
  
      inner.append(front);
      outer.append(inner);
      cont.append(outer);
    });
  }
  
  function buyOffer(i) {
    const o = state.merchantOffers[i];
    if (!o) return;
    const bal = state.currencies[o.currency] || new Decimal(0);
    if (bal.lessThan(o.price)) return;
  
    state.currencies[o.currency] = bal.minus(o.price);
    giveCard(o.cardId, o.quantity || 1);
    state.merchantOffers.splice(i, 1);
    renderMerchantTab();
    updateCurrencyBar();
  }
  