// js/statistics.js

// Track which merchant is selected in the stats view
let selectedStatsMerchantId = null;

function updateStatsUI() {
    const s = state.stats;
    const e = state.effects;
    const container = document.getElementById('tab-content-stats');
    container.innerHTML = '';

    // --- Compute totals for rarity table ---
    const discoveredByR = rarities.reduce((acc, r) => (acc[r] = 0, acc), {});
    const ownedByR      = rarities.reduce((acc, r) => (acc[r] = 0, acc), {});
    cards.forEach(c => {
        if (c.quantity > 0) {
            discoveredByR[c.rarity] += 1;
            ownedByR[c.rarity]      += c.quantity;
        }
    });
    const totalDiscovered = Object.values(discoveredByR).reduce((a,b) => a + b, 0);
    const totalOwned      = Object.values(ownedByR).reduce((a,b) => a + b, 0);

    // Build rarity table
    const tblR = document.createElement('table');
    tblR.className = 'rarity-table';
    tblR.innerHTML = `
        <thead>
            <tr>
                <th>Rarity</th>
                <th>Discovered</th>
                <th>Total Owned</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>All</strong></td>
                <td>${totalDiscovered}</td>
                <td>${formatNumber(totalOwned)}</td>
            </tr>
            ${rarities.map(r => {
                const d = discoveredByR[r], o = ownedByR[r];
                if (d === 0 && o === 0) return '';
                const color = getComputedStyle(document.documentElement)
                    .getPropertyValue(`--rarity-${r}`);
                return `
                <tr>
                    <td style="color:${color}; font-weight:bold;">
                        ${r.charAt(0).toUpperCase() + r.slice(1)}
                    </td>
                    <td>${d}</td>
                    <td>${formatNumber(o)}</td>
                </tr>`;
            }).join('')}
        </tbody>
    `;

    // --- General Stats Section ---
    const generalSection = document.createElement('section');
    generalSection.className = 'stats-section realm-section';
    generalSection.innerHTML = `
      <h3 style="border-bottom:2px solid var(--dark); padding-bottom:4px;">General Stats</h3>
      <p><strong>Black Hole Pokes:</strong> ${s.totalPokes}</p>
      <p><strong>Merchant Purchases:</strong> ${s.merchantPurchases || 0}</p>
    `;
    generalSection.appendChild(tblR);

    // --- Global Gains & Effects Section ---
    // Currency gain table
    const tblC = document.createElement('table');
    tblC.className = 'currency-table';
    tblC.innerHTML = `
        <thead>
            <tr>
                <th rowspan="2">Currency</th>
                <th rowspan="2">Gain / Poke</th>
                <th colspan="2">Gain / Second</th>
            </tr>
            <tr>
                <th>From Cards</th>
                <th>From Generators</th>
            </tr>
        </thead>
        <tbody>
            ${currencies.map(cur => {
                const ip = e.currencyPerPoke[cur.id] || 0;
                const is = e.currencyPerSec[cur.id] || 0;
                const gen = state.resourceGeneratorContribution[cur.id] || 0;
                const card = is - gen;  // Total minus generator contribution
                
                if (ip === 0 && is === 0) return '';
                return `
                <tr>
                    <td>
                      <img class="icon" src="assets/images/currencies/${cur.icon}" alt="${cur.name}"/>
                      ${cur.name}
                    </td>
                    <td>${formatNumber(ip)}</td>
                    <td>${formatNumber(card)}</td>
                    <td>${formatNumber(gen)}</td>
                </tr>`;
            }).join('')}
        </tbody>
    `;

    // Effects table
    const tblE = document.createElement('table');
    tblE.className = 'effects-table';
    tblE.innerHTML = `
        <thead>
            <tr>
                <th>Effect</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${EFFECT_NAMES.minCardsPerPoke}</td>
                <td>${formatNumber(state.effects.minCardsPerPoke)}</td>
            </tr>
            <tr>
                <td>${EFFECT_NAMES.maxCardsPerPoke}</td>
                <td>${formatNumber(state.effects.maxCardsPerPoke)}</td>
            </tr>
            <tr>
                <td>${EFFECT_NAMES.cooldownDivider}</td>
                <td>${formatNumber(state.effects.cooldownDivider)}</td>
            </tr>
            <tr>
                <td>${EFFECT_NAMES.cooldownSkipChance}</td>
                <td>${state.effects.cooldownSkipChance * 100}%</td>
            </tr>
            <tr>
                <td>${EFFECT_NAMES.merchantCooldownReduction}</td>
                <td>${state.effects.merchantCooldownReduction}s</td>
            </tr>
            <tr>
                <td>${EFFECT_NAMES.merchantNumCards}</td>
                <td>${state.effects.merchantNumCards}</td>
            </tr>
            <tr>
                <td>${EFFECT_NAMES.extraMerchantRarityScaling}</td>
                <td>${state.effects.extraMerchantRarityScaling.toFixed(1)}</td>
            </tr>
        </tbody>
    `;

    const globalSection = document.createElement('section');
    globalSection.className = 'stats-section realm-section';
    globalSection.innerHTML = `
      <h3 style="border-bottom:2px solid var(--dark); padding-bottom:4px;">Global Gains & Effects</h3>
    `;
    const innerFlex = document.createElement('div');
    innerFlex.className = 'flex-table-section';
    innerFlex.append(tblC, tblE);
    globalSection.appendChild(innerFlex);

    // --- Merchants Section ---
    if (!selectedStatsMerchantId && Array.isArray(merchants) && merchants.length) {
        selectedStatsMerchantId = merchants[0].id;
      }
      const merchantsSection = document.createElement('section');
      merchantsSection.className = 'stats-section realm-section merchants-section';
      merchantsSection.innerHTML = `
        <h3 style="border-bottom:2px solid var(--dark); padding-bottom:4px;">Merchants</h3>
      `;
      const grid = document.createElement('div');
      grid.className = 'merchants-grid';
  
      merchants.forEach(m => {
        const img = document.createElement('img');
        img.src    = `assets/images/merchants/${slugify(m.name)}.jpg`;
        img.alt    = m.name;
        img.classList.add('merchant-thumb');
  
        if (!m.unlocked) {
          // gray out locked merchants
          img.classList.add('locked-thumb');
        } else {
          // only highlight & make clickable if unlocked
          if (m.id === selectedStatsMerchantId) {
            img.classList.add('selected-thumb');
          }
          img.addEventListener('click', () => {
            selectedStatsMerchantId = m.id;
            updateStatsUI();
          });
        }
  
        grid.appendChild(img);
      });
  
      merchantsSection.appendChild(grid);

    const detail = document.createElement('div');
    detail.style.marginTop = '12px';
    const sel = merchants.find(m => m.id === selectedStatsMerchantId) || {};
    const unlockedMerchants = merchants.filter(m => m.unlocked);
    const totalOdds = unlockedMerchants.reduce((sum, m) => sum + (m.merchantOdds || 0), 0);
    const prob = totalOdds > 0
      ? ((sel.merchantOdds||0) / totalOdds * 100).toFixed(2) + '%'
      : '—';
    detail.innerHTML = `
      <p><strong>Name:</strong> ${sel.name||''}</p>
      <p><strong>Description:</strong> ${sel.description||''}</p>
      <p><strong>Probability:</strong> ${prob}</p>
      <p><strong>Cards Offered:</strong> ${Math.ceil(state.effects.merchantNumCards * sel.cardMultiplier)}</p>
      <p><strong>Rarity Scaling:</strong> ${(sel.rarityScaling + state.effects.extraMerchantRarityScaling).toFixed(1)}</p>
      <p><strong>Offer Duration:</strong> ${formatDuration(sel.refreshTime - state.effects.merchantCooldownReduction)}</p>
    `;
    merchantsSection.appendChild(detail);

    // --- Wrap all three top sections ---
    const topContainer = document.createElement('div');
    topContainer.className = 'stats-top-container';
    topContainer.append(generalSection, globalSection, merchantsSection);
    container.appendChild(topContainer);

    // --- Per-Realm Statistics ---
    const realmContainer = document.createElement('div');
    realmContainer.className = 'realm-container';
    realms.forEach(r => {
        if (!r.unlocked) return;

        const realmCards = cards.filter(c => c.realm === r.id);
        const totByR  = rarities.reduce((a,ra)=>(a[ra]=0,a), {});
        const discByR = rarities.reduce((a,ra)=>(a[ra]=0,a), {});
        const cntByR  = rarities.reduce((a,ra)=>(a[ra]=0,a), {});
        realmCards.forEach(c => {
            totByR[c.rarity] += 1;
            if (c.quantity > 0) {
                discByR[c.rarity] += 1;
                cntByR[c.rarity]  += c.quantity;
            }
        });

        const totalWeight = Object.values(r.rarityWeights).reduce((a,b) => a + b, 0);

        const rs = document.createElement('section');
        rs.className = 'stats-section realm-section';
        rs.innerHTML = `
          <h3 style="border-bottom:2px solid ${realmColors[r.id]}; color: ${realmColors[r.id]};">
            ${r.name}
          </h3>
        `;

        const ownedTbl = document.createElement('table');
        ownedTbl.className = 'realm-table';
        ownedTbl.innerHTML = `
          <thead>
            <tr><th>Rarity</th><th>Discovered</th><th>Owned</th></tr>
          </thead>
          <tbody>
            ${rarities.map(ra => {
              const totalCards = totByR[ra];
              if (totalCards === 0) return '';
              const discovered = discByR[ra];
              const owned      = cntByR[ra];
              const color      = getComputedStyle(document.documentElement)
                                  .getPropertyValue('--rarity-' + ra);
              const ratio      = `${discovered}/${totalCards}`;
              const disp       = discovered === totalCards
                ? `<span style="color:green;font-weight:bold;">${ratio}</span>`
                : ratio;
              return `
                <tr>
                  <td style="color:${color};font-weight:bold;">
                    ${ra.charAt(0).toUpperCase() + ra.slice(1)}
                  </td>
                  <td>${disp}</td>
                  <td>${formatNumber(owned)}</td>
                </tr>`;
            }).join('')}
          </tbody>
        `;
        rs.appendChild(ownedTbl);

        const oddsTbl = document.createElement('table');
        oddsTbl.className = 'realm-table';
        oddsTbl.innerHTML = `
          <thead>
            <tr><th>Rarity</th><th>Odds</th><th>Probability</th></tr>
          </thead>
          <tbody>
            ${Object.entries(r.rarityWeights).map(([ra, wt]) => {
              if (wt <= 0) return '';
              const pct   = formatPct(wt/totalWeight*100);
              const color = getComputedStyle(document.documentElement)
                              .getPropertyValue('--rarity-' + ra);
              return `
                <tr>
                  <td style="color:${color};font-weight:bold;">
                    ${ra.charAt(0).toUpperCase() + ra.slice(1)}
                  </td>
                  <td>${formatNumber(wt)}</td>
                  <td>${pct}</td>
                </tr>`;  
            }).join('')}
          </tbody>
        `;
        rs.appendChild(oddsTbl);

        realmContainer.appendChild(rs);
    });

    container.appendChild(realmContainer);
}

window.updateStatsUI = updateStatsUI;
