// js/statistics.js

function updateStatsUI() {
    const s = state.stats;
    const e = state.effects;
    const container = document.getElementById('tab-content-stats');
    container.innerHTML = '';
  
    // --- Total Pokes & Cards by Rarity Table ---
    // compute totals
    const discoveredByR = rarities.reduce((acc, r) => (acc[r] = 0, acc), {});
    const ownedByR      = rarities.reduce((acc, r) => (acc[r] = 0, acc), {});
    cards.forEach(c => {
      if (c.quantity > 0) {
        discoveredByR[c.rarity] += 1;
        ownedByR[c.rarity]      += c.quantity;
      }
    });
    const totalDiscovered = Object.values(discoveredByR).reduce((a,b)=>a+b, 0);
    const totalOwned      = Object.values(ownedByR).reduce((a,b)=>a+b, 0);
  
    const tableSection = document.createElement('section');
    tableSection.className = 'stats-section';
    tableSection.innerHTML = `<h3>Black Hole Pokes: ${s.totalPokes}</h3>`;
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
          <td>${totalOwned}</td>
        </tr>
        ${rarities.map(r => {
          const d = discoveredByR[r], o = ownedByR[r];
          if (d === 0 && o === 0) return '';
          const color = getComputedStyle(document.documentElement)
            .getPropertyValue(`--rarity-${r}`);
          return `
          <tr>
            <td style="color:${color}; font-weight:bold;">
              ${r.charAt(0).toUpperCase()+r.slice(1)}
            </td>
            <td>${d}</td>
            <td>${o}</td>
          </tr>`;
        }).join('')}
      </tbody>`;
    tableSection.appendChild(tblR);
    container.appendChild(tableSection);
  
    // --- Global Currency Gains & Other Effects ---
    const flexSection = document.createElement('section');
    flexSection.className = 'stats-section flex-table-section';
    flexSection.innerHTML = `<h3>Global Gains & Effects</h3>`;
  
    // currency table
    const tblC = document.createElement('table');
    tblC.className = 'currency-table';
    tblC.innerHTML = `
      <thead>
        <tr>
          <th>Currency</th>
          <th>Gain / Poke</th>
          <th>Gain / Second</th>
        </tr>
      </thead>
      <tbody>
        ${currencies.map(cur => {
          const id = cur.id;
          const ip = e.currencyPerPoke[id] || 0;
          const is = e.currencyPerSec[id]  || 0;
          if (ip === 0 && is === 0) return '';
          return `
          <tr>
            <td><img class="icon" src="assets/images/currencies/${cur.icon}"/> ${cur.name}</td>
            <td>${formatNumber(ip)}</td>
            <td>${formatNumber(is)}</td>
          </tr>`;
        }).join('')}
      </tbody>`;
  
    // effects table
    const tblE = document.createElement('table');
    tblE.className = 'effects-table';
    tblE.innerHTML = `
      <thead>
        <tr>
          <th>Effect</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        ${['minCardsPerPoke','maxCardsPerPoke','cooldownDivider'].map(key => {
          const name = EFFECT_NAMES[key] || key;
          const val  = e[key] || 0;
          return `
          <tr>
            <td>${name}</td>
            <td>${formatNumber(val)}</td>
          </tr>`;
        }).join('')}
      </tbody>`;
  
    flexSection.append(tblC, tblE);
    container.appendChild(flexSection);
  
    // --- Per‐Realm Statistics (tiles) ---
    const realmContainer = document.createElement('div');
    realmContainer.className = 'realm-container';
  
    realms.forEach(r => {
      if (!r.unlocked) return;
  
      // count and chance
      const cntByR = rarities.reduce((a,ra)=>(a[ra]=0,a),{});
      Object.entries(r.rarityWeights).forEach(([ra,wt])=>{
        // count cards
        cards.forEach(c=>{
          if (c.realm===r.id && c.quantity>0 && c.rarity===ra) cntByR[ra]+=c.quantity;
        });
      });
      const totalWeight = Object.values(r.rarityWeights).reduce((a,b)=>a+b,0);
  
      const rs = document.createElement('section');
      rs.className = 'stats-section realm-section';
      rs.innerHTML = `<h3 style="border-bottom:2px solid ${realmColors[r.id]};">
        ${r.name}
      </h3>`;
      const grid = document.createElement('div');
      grid.className = 'realm-stats-grid';
  
      // Collected
      const col1 = document.createElement('div');
      col1.innerHTML = `<h4>Collected by Rarity</h4><ul class="stat-list">` +
        rarities.map(ra=>{
          const cnt = cntByR[ra];
          if (cnt>0 && r.rarityWeights[ra]!=null) {
            const col = getComputedStyle(document.documentElement)
              .getPropertyValue(`--rarity-${ra}`);
            return `<li><span style="color:${col}; font-weight:bold;">
              ${ra.charAt(0).toUpperCase()+ra.slice(1)}
            </span>: ${cnt}</li>`;
          }
          return '';
        }).join('') +
        `</ul>`;
      grid.appendChild(col1);
  
      // Chances
      const col2 = document.createElement('div');
      col2.innerHTML = `<h4>Rarity Chances</h4><ul class="stat-list">` +
        Object.entries(r.rarityWeights).map(([ra,wt])=>{
          if (wt>0) {
            const pct = formatPct(wt/totalWeight*100);
            const col = getComputedStyle(document.documentElement)
              .getPropertyValue(`--rarity-${ra}`);
            return `<li><span style="color:${col}; font-weight:bold;">
              ${ra.charAt(0).toUpperCase()+ra.slice(1)}
            </span>: ${formatNumber(wt)} (${pct})</li>`;
          }
          return '';
        }).join('') +
        `</ul>`;
      grid.appendChild(col2);
  
      rs.appendChild(grid);
      realmContainer.appendChild(rs);
    });
  
    container.appendChild(realmContainer);
  }
  
  window.updateStatsUI = updateStatsUI;
  