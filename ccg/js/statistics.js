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
                ${r.charAt(0).toUpperCase()+r.slice(1)}
            </td>
            <td>${d}</td>
            <td>${formatNumber(o)}</td>
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

    // --- P// --- Per‐Realm Statistics (tables) ---
    const realmContainer = document.createElement('div');
    realmContainer.className = 'realm-container';

    realms.forEach(r => {
    if (!r.unlocked) return;

    // 1) Gather cards in this realm
    const realmCards = cards.filter(c => c.realm === r.id);

    // 2) Totals, discovered-count, and owned-count by rarity
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

    // 3) Total weight for probabilities
    const totalWeight = Object.values(r.rarityWeights).reduce((a,b) => a + b, 0);

    // 4) Section header
    const rs = document.createElement('section');
    rs.className = 'stats-section realm-section';
    rs.innerHTML =
        '<h3 style="border-bottom:2px solid ' + realmColors[r.id] + ';">' +
        r.name +
        '</h3>';

    // 5) Discovered | Owned table
    const ownedTbl = document.createElement('table');
    ownedTbl.className = 'realm-table';
    ownedTbl.innerHTML =
        '<thead><tr><th>Rarity</th><th>Discovered</th><th>Owned</th></tr></thead>' +
        '<tbody>' +
        rarities.map(ra => {
            const totalCards  = totByR[ra];
            if (totalCards === 0) return '';
            const discovered  = discByR[ra];
            const owned       = cntByR[ra];
            const color       = getComputedStyle(document.documentElement)
                                .getPropertyValue('--rarity-' + ra);
            const discText    = discovered + '/' + totalCards;
            const discDisplay = (discovered === totalCards)
            ? '<span style="color:green;font-weight:bold;">' + discText + '</span>'
            : discText;

            return (
            '<tr>' +
                '<td style="color:' + color + ';font-weight:bold;">' +
                ra.charAt(0).toUpperCase() + ra.slice(1) +
                '</td>' +
                '<td>' + discDisplay + '</td>' +
                '<td>' + formatNumber(owned) + '</td>' +
            '</tr>'
            );
        }).join('') +
        '</tbody>';
    rs.appendChild(ownedTbl);

    // 6) Odds | Probability table
    const oddsTbl = document.createElement('table');
    oddsTbl.className = 'realm-table';
    oddsTbl.innerHTML =
        '<thead><tr><th>Rarity</th><th>Odds</th><th>Probability</th></tr></thead>' +
        '<tbody>' +
        Object.entries(r.rarityWeights).map(([ra, wt]) => {
            if (wt <= 0) return '';
            const pct   = formatPct(wt / totalWeight * 100);
            const color = getComputedStyle(document.documentElement)
                            .getPropertyValue('--rarity-' + ra);
            return (
            '<tr>' +
                '<td style="color:' + color + ';font-weight:bold;">' +
                ra.charAt(0).toUpperCase() + ra.slice(1) +
                '</td>' +
                '<td>' + formatNumber(wt) + '</td>' +
                '<td>' + pct + '</td>' +
            '</tr>'
            );
        }).join('') +
        '</tbody>';
    rs.appendChild(oddsTbl);

    realmContainer.appendChild(rs);
    });


    container.appendChild(realmContainer);
}

    window.updateStatsUI = updateStatsUI;
  