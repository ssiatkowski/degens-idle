// js/merchant.js

// Requires: Decimal, state, cards, skillMap, cardMap, currencies, rarities

// simple uniform pick from an array
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function genMerchantOffers() {
  const offers = [];
  const slots  =  2;
  const avail  = cards.slice(); // all cards

  // price lookup per rarity
  const priceByRarity = {
    junk:      new Decimal(10),
    basic:     new Decimal(100),
    decent:    new Decimal(1),
    fine:      new Decimal(200),
    rare:      new Decimal(500),
    epic:      new Decimal(1000),
    legendary: new Decimal(5000),
    mythic:    new Decimal(10000),
    exotic:    new Decimal(20000),
    divine:    new Decimal(50000),
  };

  for (let i = 0; i < slots; i++) {
    // pick a rarity (uniform for now)
    let pickR = pickRandom(rarities);

    // find all cards of that rarity
    let pool = avail.filter(c => c.rarity === pickR);
    if (!pool.length) pool = avail.filter(c => c.rarity === 'junk');

    const pick = pickRandom(pool);

    // price via lookup (fallback to junk price)
    const price = priceByRarity[pick.rarity] || priceByRarity.junk;

    // pick a random currency
    const cur = pickRandom(currencies).id;

    offers.push({
      cardId:   pick.id,
      price,
      currency: cur
    });
  }

  state.merchantOffers = offers;
}

function renderMerchantTab() {
  const cont = document.getElementById('merchant-offers');
  cont.innerHTML = '';
  state.merchantOffers.forEach((o, i) => {
    const c   = cardMap[o.cardId];
    const cur = currencies.find(cu => cu.id === o.currency) || {};
    const ico = cur.icon || 'question.png';
    cont.innerHTML += `
      <div class="offer">
        ${c.name} – ${formatNumber(o.price)}
        <img class="icon" src="assets/images/currencies/${ico}"/>
        <button data-idx="${i}" class="offer-buy">Buy</button>
      </div>`;
  });
  cont.querySelectorAll('.offer-buy').forEach(btn => {
    btn.onclick = () => buyOffer(parseInt(btn.dataset.idx, 10));
  });
}

function buyOffer(i) {
  const o   = state.merchantOffers[i];
  const cur = state.currencies[o.currency];
  if (!cur || cur.lessThan(o.price)) return;
  state.currencies[o.currency] = cur.minus(o.price);

  const card = cardMap[o.cardId];
  if (card.quantity === 0) state.stats.discoveredCount++;
  giveCard(card.id, 1); // give one card

  state.merchantOffers.splice(i, 1);
  renderMerchantTab();           // refresh offers
  updateCurrencyBar();
}
