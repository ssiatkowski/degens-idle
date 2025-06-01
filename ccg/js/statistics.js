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
  // 1) create table and static header
    const tblC = document.createElement('table');
    tblC.className = 'currency-table';
    tblC.innerHTML = `
      <thead>
        <tr>
          <th rowspan="2">Currency</th>
          <th colspan="2">Gain / Poke</th>
          <th colspan="4">Gain / Second</th>
        </tr>
        <tr>
          <th>Base</th><th>Mult</th>
          <th>From Cards</th><th>Mult</th>
          <th>From Generators</th><th>Gen Mult</th>
        </tr>
      </thead>
    `;
    const tbodyC = document.createElement('tbody');

    // 2) for each currency, build a row immediately
    currencies.forEach(cur => {
      const ip     = e.currencyPerPoke[cur.id]             || 0;
      const sec    = e.currencyPerSec[cur.id]              || 0;
      const gen    = (state.resourceGeneratorContribution[cur.id] || 0) 
                      / (e.allGeneratorMultiplier || 1);
      const card   = sec;   // card contribution is just the base rate
      const pokeM  = e.currencyPerPokeMultiplier[cur.id]   || 1;
      const secM   = e.currencyPerSecMultiplier[cur.id]    || 1;
      const genM   = e.allGeneratorMultiplier               || 1;

      // skip rows with no contribution
      if (ip === 0 && sec === 0 && gen === 0) return;

      // build the <tr>
      const tr = document.createElement('tr');

      // 2a) Currency name + icon cell
      const nameTd = document.createElement('td');
      const icon = document.createElement('img');
      icon.className = 'icon';
      icon.alt = cur.name;
      // load the real src async
      const currencyPath = `assets/images/currencies/${cur.icon}`;
      imageCache.getImage('currencies', currencyPath).then(cachedImg => {
        if (cachedImg) icon.src = cachedImg.src;
      });
      nameTd.append(icon, document.createTextNode(' ' + cur.name));
      tr.appendChild(nameTd);

      // 2b) poke base
      const pokeBaseTd = document.createElement('td');
      pokeBaseTd.textContent = formatNumber(ip);
      tr.appendChild(pokeBaseTd);

      // 2c) poke mult
      const pokeMultTd = document.createElement('td');
      pokeMultTd.textContent = '×' + formatNumber(pokeM);
      tr.appendChild(pokeMultTd);

      // 2d) card/sec
      const cardTd = document.createElement('td');
      cardTd.textContent = formatNumber(card);
      tr.appendChild(cardTd);

      // 2e) sec mult
      const secMultTd = document.createElement('td');
      secMultTd.textContent = '×' + formatNumber(secM);
      tr.appendChild(secMultTd);

      // 2f) from generators
      const genTd = document.createElement('td');
      genTd.textContent = formatNumber(gen);
      tr.appendChild(genTd);

      // 2g) gen mult
      const genMultTd = document.createElement('td');
      genMultTd.textContent = '×' + formatNumber(genM);
      tr.appendChild(genMultTd);

      tbodyC.appendChild(tr);
    });

    // 3) attach the body
    tblC.appendChild(tbodyC);

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
                <td>${(state.effects.cooldownSkipChance * 100).toFixed(0)}%</td>
            </tr>
            <tr>
                <td>${EFFECT_NAMES.merchantCooldownReduction}</td>
                <td>${formatNumber(state.effects.merchantCooldownReduction)}s</td>
            </tr>
            <tr>
                <td>${EFFECT_NAMES.merchantNumCards}</td>
                <td>${state.effects.merchantNumCards}</td>
            </tr>
            <tr>
                <td>${EFFECT_NAMES.extraMerchantRarityScaling}</td>
                <td>${state.effects.extraMerchantRarityScaling.toFixed(1)}</td>
            </tr>
            <tr>
                <td>${SPECIAL_EFFECT_NAMES.merchantPriceDivider}</td>
                <td>${formatNumber(state.effects.merchantPriceDivider)}</td>
            </tr>
            <tr>
                <td>${EFFECT_NAMES.maxOfflineHours}</td>
                <td>${state.maxOfflineHours} hours</td>
            </tr>
        </tbody>
    `;

    // Create separate sections for Global Gains and Global Effects
    const globalGainsSection = document.createElement('section');
    globalGainsSection.className = 'stats-section realm-section';
    globalGainsSection.innerHTML = `
      <h3 style="border-bottom:2px solid var(--dark); padding-bottom:4px;">Global Gains</h3>
    `;
    globalGainsSection.appendChild(tblC);

    const globalEffectsSection = document.createElement('section');
    globalEffectsSection.className = 'stats-section realm-section';
    globalEffectsSection.innerHTML = `
      <h3 style="border-bottom:2px solid var(--dark); padding-bottom:4px;">Global Effects</h3>
    `;
    globalEffectsSection.appendChild(tblE);

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
        // 1) create the <img> but keep it hidden until loaded
        const thumb = document.createElement('img');
        thumb.className = 'merchant-thumb';
        thumb.alt       = m.name;
        thumb.style.visibility = 'hidden';      // ② hide until we set src
    
        // 2) style/status classes
        if (!m.unlocked)       thumb.classList.add('locked-thumb');
        else if (m.id === selectedStatsMerchantId) thumb.classList.add('selected-thumb');
    
        // 3) load via cache, *then* unhide
        const path = `assets/images/merchants/${slugify(m.name)}.jpg`;
        imageCache.getImage('merchants', path).then(cachedImg => {
          if (cachedImg) {
            thumb.src = cachedImg.src;
            thumb.style.visibility = 'visible';
          } else {
            console.warn('missing merchant art:', path);
            thumb.style.visibility = 'visible'; // or show a fallback icon
          }
        });
    
        // 4) click handler (only if unlocked)
        if (m.unlocked) {
          thumb.addEventListener('click', () => {
            selectedStatsMerchantId = m.id;
            updateStatsUI();
          });
        }
    
        // 5) append **after** setting up everything
        grid.appendChild(thumb);
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
      <p style="line-height: 1.4; margin: 0;"><strong>Name:</strong> ${sel.name || ''}</p>
      <p style="line-height: 1.4; margin: 0;"><strong>Description:</strong> ${sel.description || ''}</p>
      <p style="line-height: 1.4; margin: 0;"><strong>Probability:</strong> ${prob}</p>
      <p style="line-height: 1.4; margin: 0;"><strong>Cards Offered:</strong> ${Math.ceil(state.effects.merchantNumCards * sel.cardMultiplier)}</p>
      <p style="line-height: 1.4; margin: 0;"><strong>Rarity Scaling:</strong> ${(sel.rarityScaling + state.effects.extraMerchantRarityScaling).toFixed(1)}</p>
      <p style="line-height: 1.4; margin: 0;"><strong>Sale Price:</strong> ${formatNumber(sel.priceMultiplier/state.effects.merchantPriceDivider*100)}%</p>
      <p style="line-height: 1.4; margin: 0;"><strong>Offer Duration:</strong> ${formatDuration(((300 - state.effects.merchantCooldownReduction) * sel.refreshTime))}</p>
    `;
    if (sel.guaranteedCount > 0) {
      detail.innerHTML += `<p style="line-height: 1.4; margin: 0;"><strong>Guaranteed Cards:</strong> ${sel.guaranteedCount} ${sel.guaranteedRealm ? `(${realmMap[sel.guaranteedRealm].name})` : ''}</p>`;
    }
    merchantsSection.appendChild(detail);

    // --- Build top stats grid as two separate rows ---
    // First row: Global Gains | Global Effects
    const topRow1 = document.createElement('div');
    topRow1.className = 'stats-top-row';
    topRow1.append(globalGainsSection, globalEffectsSection);
    // Second row: General Stats | Merchants
    const topRow2 = document.createElement('div');
    topRow2.className = 'stats-top-row';
    topRow2.append(generalSection, merchantsSection);
    // Container for both rows
    const topContainer = document.createElement('div');
    topContainer.className = 'stats-top-container';
    topContainer.append(topRow1, topRow2);
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

        const realmTbl = document.createElement('table');
        realmTbl.className = 'realm-table';
        realmTbl.innerHTML = `
          <thead>
            <tr>
              <th>Rarity</th>
              <th>Discovered</th>
              <th>Owned</th>
              <th>Odds</th>
              <th>Probability</th>
            </tr>
          </thead>
          <tbody>
            ${rarities.map(ra => {
              const totalCards = totByR[ra];
              if (totalCards === 0) return '';
              const discovered = discByR[ra];
              const owned = cntByR[ra];
              const color = getComputedStyle(document.documentElement)
                              .getPropertyValue('--rarity-' + ra);
              const ratio = `${discovered}/${totalCards}`;
              const disp = discovered === totalCards
                ? `<span style="color:green;font-weight:bold;">${ratio}</span>`
                : ratio;
              
              const wt = r.rarityWeights[ra];
              if (wt <= 0) return '';
              const uncapped = r.uncappedRarityWeights[ra];
              const isCapped = uncapped !== wt;
              const pct = formatPct(wt/totalWeight*100);
              const weightDisplay = isCapped 
                ? `<span title="Soft capped from ${formatNumber(uncapped)}">${formatNumber(wt)}*</span>`
                : formatNumber(wt);

              return `
                <tr>
                  <td style="color:${color};font-weight:bold;">
                    ${ra.charAt(0).toUpperCase() + ra.slice(1)}
                  </td>
                  <td>${disp}</td>
                  <td>${formatNumber(owned)}</td>
                  <td>${weightDisplay}</td>
                  <td>${pct}</td>
                </tr>`;
            }).join('')}
          </tbody>
        `;
        rs.appendChild(realmTbl);

        realmContainer.appendChild(rs);
    });

    container.appendChild(realmContainer);

    // --- Tier Progress Table ---
    const tierProgressSection = document.createElement('section');
    tierProgressSection.className = 'tier-progress-section';
    tierProgressSection.innerHTML = `
      <h3>Tier Progress (Experimental/Spoilers)</h3>
    `;

    const tierProgressTable = document.createElement('table');
    tierProgressTable.className = 'tier-progress-table';
    
    // Create header row with tier numbers
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
      <th>Rarity</th>
      <th></th>
      ${Array(21).fill(0).map((_, i) => `<th>T${i}</th>`).join('')}
    `;
    
    const thead = document.createElement('thead');
    thead.appendChild(headerRow);
    tierProgressTable.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');
    
    // Process each rarity
    Object.entries(window.tierThresholds).forEach(([rarity, thresholds]) => {
      // Count total cards of this rarity
      const totalCards = cards.filter(c => c.rarity === rarity).length;
      if (totalCards === 0) return;

      // Count cards at each tier
      const cardsByTier = Array(21).fill(0); // 0-20 tiers
      const ownedCards = new Set();
      cards.forEach(c => {
        if (c.rarity === rarity && c.quantity > 0) {
          cardsByTier[c.tier]++;
          ownedCards.add(c.id);
        }
      });

      // Calculate T0 (unowned cards)
      const unownedCount = cards.filter(c => c.rarity === rarity && !ownedCards.has(c.id)).length;
      cardsByTier[0] = unownedCount;

      const row = document.createElement('tr');
      
      // Add rarity cell
      const rarityCell = document.createElement('td');
      rarityCell.className = 'rarity-cell';
      rarityCell.style.color = getComputedStyle(document.documentElement)
        .getPropertyValue(`--rarity-${rarity}`);
      rarityCell.textContent = rarity.charAt(0).toUpperCase() + rarity.slice(1);
      row.appendChild(rarityCell);

      // Add legend cell
      const legendCell = document.createElement('td');
      legendCell.className = 'legend-cell';
      legendCell.innerHTML = `
        <div>↑ req</div>
        <div>↓ owned</div>
      `;
      row.appendChild(legendCell);

      // Find the first tier with non-zero cards
      let firstNonZeroTier = -1;
      let lastNonZeroTier = -1;
      for (let t = 1; t <= thresholds.length; t++) {
        if (cardsByTier[t] > 0) {
          if (firstNonZeroTier === -1) firstNonZeroTier = t;
          lastNonZeroTier = t;
        }
      }

      // Check if row is all zeros (except T0)
      const isAllZeros = firstNonZeroTier === -1;

      // Add cells for each tier
      for (let tier = 0; tier <= 20; tier++) {
        const cell = document.createElement('td');
        cell.className = 'tier-cell';
        
        if (tier === 0) {
          // For tier 0, just show the count of unowned cards
          const count = cardsByTier[0];
          cell.innerHTML = `<span class="tier-count ${count > 0 ? 'unowned-count' : ''}">${count}</span>`;
        } else if (tier <= thresholds.length) {
          // For other tiers, show threshold and count
          const threshold = thresholds[tier - 1];
          const count = cardsByTier[tier];
          
          let countClass = '';
          if (count === 0) {
            // Color red if all zeros or if to the right of last non-zero tier
            if (isAllZeros || (lastNonZeroTier !== -1 && tier > lastNonZeroTier)) {
              countClass = 'zero-count';
            }
          } else if (lastNonZeroTier !== -1 && tier < lastNonZeroTier) {
            // Color yellow-orange if non-zero but to the left of last non-zero
            countClass = 'behind-count';
          }
          
          cell.innerHTML = `
            <span class="tier-threshold">${formatNumber(threshold)}</span>
            <span class="tier-count ${countClass}">${count}</span>
          `;
        } else {
          // For tiers beyond the thresholds, show empty cell
          cell.className += ' empty';
        }
        
        row.appendChild(cell);
      }

      tbody.appendChild(row);
    });

    tierProgressTable.appendChild(tbody);
    tierProgressSection.appendChild(tierProgressTable);
    container.appendChild(tierProgressSection);
}

window.updateStatsUI = updateStatsUI;
