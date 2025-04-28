// script.js

// 1) State
let state;

// 2) Base costs & suffixes
const BASE_GORE_COST       = new Decimal(1000);
const BASE_CLIMATE_COST    = new Decimal(10);
const BASE_REVOLUTION_COST = new Decimal(10);
const BASE_REBIRTH_COST    = new Decimal(50);
const BASE_AWAKENING_COST  = new Decimal(666);
const suffixes = [
  "", "K", "M", "B", "T",
  "Qa","Qi","Sx","Sp","Oc",
  "No","Dc","Ud"
];

// 3) Format numbers
function formatNum(d) {
  if (d.eq(0)) return "0";

  // If the value is under 100, show up to 2 decimals but drop trailing zero
  if (d.lt(100)) {
    if (d.floor().eq(d)) {
      // whole number
      return d.toFixed(0);
    } else {
      // force 2 decimals, then parseFloat() will drop a trailing zero
      return parseFloat(d.toFixed(2)).toString();
    }
  }

  const exp = d.exponent;
  if (exp < 3) {
    // 100–999 as integer
    return d.toFixed(0);
  }

  const idx = Math.floor(exp / 3);
  if (idx < suffixes.length) {
    const scaled = d.div(new Decimal(10).pow(idx * 3));
    return scaled.toFixed(2) + suffixes[idx];
  }

  return d.toExponential(2);
}



// 4) Initialize or reset state
function initializeState() {
  state = {
    aiSlop:           new Decimal(0),
    slopPerClick:     new Decimal(1),
    gorePoints:       new Decimal(0),
    climatePoints:    new Decimal(0),
    revolutionPoints: new Decimal(0),
    rebirthPoints:    new Decimal(0),
    awakeningPoints:  new Decimal(0),
    upgradeLevel:     0,
    upgradeCost:      new Decimal(0),
    autoBuyUnlocked:  false,
    autoBuyEnabled:   false,
    upgradeFreeUnlocked: false,
  };
}

// 5) Save & load
function saveState() {
  localStorage.setItem('degensGore', JSON.stringify({
    aiSlop:           state.aiSlop.toString(),
    slopPerClick:     state.slopPerClick.toString(),
    gorePoints:       state.gorePoints.toString(),
    climatePoints:    state.climatePoints.toString(),
    revolutionPoints: state.revolutionPoints.toString(),
    rebirthPoints:    state.rebirthPoints.toString(),
    awakeningPoints:  state.awakeningPoints.toString(),
    upgradeLevel:     state.upgradeLevel,
    upgradeCost:      state.upgradeCost.toString(),
    autoBuyUnlocked:  state.autoBuyUnlocked,
    autoBuyEnabled:   state.autoBuyEnabled,
    upgradeFreeUnlocked: state.upgradeFreeUnlocked,
  }));
}

function loadState() {
  const raw = localStorage.getItem('degensGore');
  if (!raw) return;
  try {
    const o = JSON.parse(raw);
    state.aiSlop           = new Decimal(o.aiSlop);
    state.slopPerClick     = new Decimal(o.slopPerClick);
    state.gorePoints       = new Decimal(o.gorePoints);
    state.climatePoints    = new Decimal(o.climatePoints);
    state.revolutionPoints = new Decimal(o.revolutionPoints);
    state.rebirthPoints    = new Decimal(o.rebirthPoints);
    state.awakeningPoints  = new Decimal(o.awakeningPoints);
    state.upgradeLevel     = o.upgradeLevel;
    state.upgradeCost      = new Decimal(o.upgradeCost);
    state.autoBuyUnlocked  = o.autoBuyUnlocked;
    state.autoBuyEnabled   = o.autoBuyEnabled;
    state.upgradeFreeUnlocked = o.upgradeFreeUnlocked;
  } catch {
    console.error("Failed to load state, starting fresh.");
  }
}

// 6) Reset on prestige
function resetProgress(full = false) {
  state.aiSlop       = new Decimal(0);
  state.slopPerClick = new Decimal(1);
  state.upgradeLevel = 0;
  state.upgradeCost  = new Decimal(0);
  if (full) {
    state.gorePoints    = new Decimal(0);
    state.climatePoints = new Decimal(0);
  }
}

// 7) Bulk-buy helpers
function calcBulkGeometric(resource, base, factor, currentLevel) {
  let n = 0, total = new Decimal(0);
  while (true) {
    const cost = base.times(Decimal.pow(factor, currentLevel + n)).floor();
    if (!resource.gte(total.plus(cost))) break;
    total = total.plus(cost);
    n++;
  }
  return { count: n, cost: total };
}

function calcBulkLinear(resource, firstCost, increment) {
  let n = 0, total = new Decimal(0), cost = firstCost;
  while (resource.gte(total.plus(cost))) {
    total = total.plus(cost);
    n++;
    cost = cost.plus(increment);
  }
  return { count: n, cost: total };
}

// 8) Cost-for-one functions:
function costOneGore() {
  return BASE_GORE_COST
    .times(Decimal.pow(1.01, state.gorePoints))
    .floor();
}

function costOneClimate() {
  return BASE_CLIMATE_COST.plus(Math.floor(state.climatePoints/4));
}

function costOneRevolution() {
  return BASE_REVOLUTION_COST
    .times(Decimal.pow(1.01, state.revolutionPoints))
    .floor();
}

function costOneRebirth() {
  return BASE_REBIRTH_COST.plus(state.rebirthPoints.times(5));
}

function costOneAwakening() {
  return BASE_AWAKENING_COST
    .times(Decimal.pow(1.01, state.awakeningPoints))
    .floor();
}

// 9) Bulk calculators:
function getGoreBulk() {
  const first = costOneGore();
  return calcBulkGeometric(
    state.aiSlop,
    first,
    1.01,
    0
  );
}

// Climate resets now always give +1 Climate, cost increments by +1 each time
function getClimateBulk() {
  return calcBulkLinear(
    state.gorePoints,
    costOneClimate(),
    new Decimal(1)
  );
}

function getRevolutionBulk() {
  const first = costOneRevolution();
  return calcBulkGeometric(
    state.climatePoints,
    first,
    1.01,
    0
  );
}

function getRebirthBulk() {
  return calcBulkLinear(
    state.climatePoints,
    costOneRebirth(),
    new Decimal(100)
  );
}

function getAwakeningBulk() {
  const first = costOneAwakening();
  return calcBulkGeometric(
    state.rebirthPoints,
    first,
    1.01,
    0
  );
}

// 10) Update UI
function updateDisplay() {
  // Stats
  document.getElementById("aiSlopDisplay"       ).textContent = formatNum(state.aiSlop);
  document.getElementById("slopRateDisplay"     ).textContent = formatNum(calculateSlopRate());
  document.getElementById("gorePointsDisplay"   ).textContent = formatNum(state.gorePoints);
  document.getElementById("climatePointsDisplay").textContent = formatNum(state.climatePoints);
  document.getElementById("revolutionPointsDisplay").textContent = formatNum(state.revolutionPoints);
  document.getElementById("rebirthPointsDisplay").textContent = formatNum(state.rebirthPoints);
  document.getElementById("awakeningPointsDisplay" ).textContent = formatNum(state.awakeningPoints);

  // Upgrade button
  const upBtn = document.getElementById("upgradeButton");
  upBtn.innerHTML =
    `Upgrade (Lvl ${state.upgradeLevel})<br>` +
    `Cost: ${formatNum(state.upgradeCost)} Slop`;
  upBtn.classList.toggle("affordable", state.aiSlop.gte(state.upgradeCost));

  // Auto-buy
  const autoBtn = document.getElementById('autoBuyButton');
  if (state.upgradeFreeUnlocked) {
    // once Free-Upgrades are unlocked, hide Auto-Buy entirely
    autoBtn.style.display = 'none';
  } else {
    autoBtn.style.display = '';
    if (!state.autoBuyUnlocked) {
      autoBtn.disabled    = !state.rebirthPoints.gte(5);
      autoBtn.textContent = 'Unlock Auto-Buy (5 Rebirths)';
    } else {
      autoBtn.disabled    = false;
      autoBtn.textContent = state.autoBuyEnabled
        ? 'Disable Auto-Buy'
        : 'Enable Auto-Buy';
    }
  }
  const freeCont = document.getElementById('freeUpgradeContainer');
  const freeBtn  = document.getElementById('freeUpgradeButton');

  if (state.autoBuyUnlocked && !state.upgradeFreeUnlocked) {
    freeCont.style.display = '';
    freeBtn.disabled = !state.rebirthPoints.gte(5);
    freeBtn.textContent = `Unlock Free Upgrades (5 Cosmic Rebirths)`;
  } else {
    freeCont.style.display = 'none';
  }

  // Al Gore
  {
    const { count } = getGoreBulk();
    const one       = costOneGore();
    const btn       = document.getElementById("prestigeGoreButton");
    btn.innerHTML =
      `Hire Al Gore<br>` +
      `Cost: ${formatNum(one)} Slop; Buy ${count}`;
    btn.style.backgroundColor = count > 0 ? "#0a0" : "#800";
  }

  // Climate Change
  {
    const { count } = getClimateBulk();
    const one       = costOneClimate();
    const btn       = document.getElementById("prestigeClimateButton");
    btn.innerHTML =
      `Change Climate<br>` +
      `Cost: ${formatNum(one)} Gores; Buy ${count}`;
    btn.style.backgroundColor = count > 0 ? "#0a0" : "#800";
  }

  // Green Revolution
  {
    const { count } = getRevolutionBulk();
    const one  = costOneRevolution();
    const btn  = document.getElementById("prestigeRevolutionButton");
    btn.innerHTML =
      `Green Revolution<br>` +
      `Cost: ${formatNum(one)} Climates; Buy ${count}`;
    btn.style.backgroundColor = count > 0 ? "#0a0" : "#800";
  }

  // Cosmic Rebirth
  {
    const { count } = getRebirthBulk();
    const one  = costOneRebirth();
    const btn  = document.getElementById("prestigeRebirthButton");
    btn.innerHTML =
      `Cosmic Rebirth<br>` +
      `Cost: ${formatNum(one)} Climates; Buy ${count}`;
    btn.style.backgroundColor = count > 0 ? "#0a0" : "#800";
  }

  // Temporal Awakening
  {
    const { count } = getAwakeningBulk();
    const one  = costOneAwakening();
    const btn  = document.getElementById("prestigeAwakeningButton");
    btn.innerHTML =
      `Temporal Awakening<br>` +
      `Cost: ${formatNum(one)} Rebirths; Buy ${count}`;
    btn.style.backgroundColor = count > 0 ? "#0a0" : "#800";
  }

  // Enlightenment
  {
    const btn = document.getElementById("prestigeEnlightenmentButton");
    const ec  = Decimal.pow(69, 420);
    if (state.awakeningPoints.gte(ec)) {
      btn.innerHTML = "Enlightenment<br>(Ready!)";
      btn.style.backgroundColor = "#00aaff";
      btn.style.boxShadow       = "0 0 10px #00aaff";
    } else {
      btn.innerHTML =
        `Enlightenment<br>` +
        `(Need ${formatNum(ec)} Awakenings; You have ${formatNum(state.awakeningPoints)})`;
      btn.style.backgroundColor = "#555";
      btn.style.boxShadow       = "none";
    }
    btn.style.color = "#fff";
  }

  // Descriptions (dynamic)
  // Al Gore: each Gore = +10% slop
  const perGoreBoost = 0.1 + state.rebirthPoints.times(0.001).toNumber();
  document.getElementById("descGore").innerHTML =
    `Resets Level → Gain Al Gore<br>` +
    `(x${formatNum(state.gorePoints.times(perGoreBoost).plus(1))} Slop production)`;

  // Climate Reset: total slop boost from all Climate Changes
  const perClimateBoost = 0.25 + state.revolutionPoints.times(0.01).toNumber();
  document.getElementById("descClimate").innerHTML =
    `Resets Level → Gain Climate Change<br>` +
    `(x${formatNum(new Decimal(state.climatePoints).times(perClimateBoost).plus(1))} Slop production)`;

  // Green Revolution: each Revolution adds +1% to per‐Climate boost
  document.getElementById("descRevolution").innerHTML =
    `Resets Level → Gain Revolutions<br>` +
    `(x${formatNum(state.revolutionPoints.times(0.02).plus(1))} Slop production)<br>` +
    `(+${formatNum(state.revolutionPoints)}% flat to each Climate Change's Slop boost)`;

  // Cosmic Rebirth: Gore/sec = rebirthPoints
  document.getElementById("descRebirth").innerHTML =
    `Resets Level/Gores/Climates → Cosmic Rebirth<br>` +
    `(x${formatNum(state.rebirthPoints.times(0.03).plus(1))} Slop production)<br>` +
    `(+${formatNum(state.rebirthPoints.times(0.1))}% flat to each Al Gore’s Slop boost)<br>` +
    `(+${formatNum(state.rebirthPoints)} Al Gores / second)`;

  const ap = state.awakeningPoints.toNumber();
  const chance = ap > 0
    ? 0.001                                  // base 0.1%
      + 0.899 * (Math.log(ap + 1) / Math.log(ap + 2))  
    : 0;
  // Temporal Awakening: each Awakening = +5% slop
  document.getElementById("descAwakening").innerHTML =
    `Resets Level → Temporal Awakening<br>` +
    `(x${formatNum(state.awakeningPoints.times(0.05).plus(1))} Slop production)<br>` +
    `(+${(chance * 100).toFixed(3)}% chance to increase Slop by 1% per tick)`;

  // Enlightenment remains static
  document.getElementById("descEnlightenment").innerText =
    `Become Enlightened (cost: 69^420 Awakenings)`;

  saveState();
}

// 11) Slop/sec calc
function calculateSlopRate() {
  const gm = new Decimal(1).plus(state.gorePoints.times(0.1));
  const cm = new Decimal(1).plus(state.climatePoints.times(0.25));
  const rm = new Decimal(1).plus(state.revolutionPoints.times(0.02));
  const bm = new Decimal(1).plus(state.rebirthPoints.times(0.03));
  const am = new Decimal(1).plus(state.awakeningPoints.times(0.05));
  return state.slopPerClick.times(gm).times(cm).times(rm).times(bm).times(am).times(40);
}

// 12) Tooltip
function showCustomTooltip(msg) {
  const tip = document.getElementById("customTooltip");
  tip.textContent = msg;
  tip.style.opacity = 1;
  clearTimeout(tip._hid);
  tip._hid = setTimeout(() => tip.style.opacity = 0, 3000);
}

// 13) Game loop
function generateSlop() {
  if (!state?.aiSlop) return;
  const perGoreBoost = 0.1 + state.rebirthPoints.times(0.001).toNumber();
  const gm = new Decimal(1).plus(state.gorePoints.times(perGoreBoost));
  const perClimateBoost = 0.25 + state.revolutionPoints.times(0.01).toNumber();
  const cm = new Decimal(1).plus(state.climatePoints.times(perClimateBoost));
  const rm = new Decimal(1).plus(state.revolutionPoints.times(0.02));
  const bm = new Decimal(1).plus(state.rebirthPoints.times(0.03));
  const am = new Decimal(1).plus(state.awakeningPoints.times(0.05));
  state.aiSlop = state.aiSlop.plus(
    state.slopPerClick.times(gm).times(cm).times(rm).times(bm).times(am)
  );
  // compute Awakening‐based chance: from 0.1% up to ~90%
  const ap = state.awakeningPoints.toNumber();
  const chance = ap > 0
    ? 0.001                                  // base 0.1%
      + 0.899 * (Math.log(ap + 1) / Math.log(ap + 2))  
    : 0;

  // trigger Time Rift if random < chance
  if (Math.random() < chance) {
    const bonus = state.aiSlop.times(0.01);
    state.aiSlop = state.aiSlop.plus(bonus);
    showCustomTooltip(
      `Time Rift! +${formatNum(bonus)} Slop (${(chance*100).toFixed(2)}% chance)`
    );
  }
  if (state.autoBuyUnlocked && state.autoBuyEnabled && state.aiSlop.gte(state.upgradeCost)) {
    buyUpgrade();
  }
  updateDisplay();
}

// 14) Actions & prestige
function buyUpgrade() {
  if (!state.aiSlop.gte(state.upgradeCost)) return showCustomTooltip("Not enough Slop!");
  if (!state.upgradeFreeUnlocked) {
    state.aiSlop = state.aiSlop.minus(state.upgradeCost);
  }
  state.upgradeLevel++;
  state.slopPerClick = state.slopPerClick.plus(new Decimal(1));
  state.upgradeCost  = state.upgradeCost.eq(0)
    ? new Decimal(10)
    : state.upgradeCost.times(1.2).floor();
  showCustomTooltip("Upgrade bought!");
  updateDisplay();
}

function unlockAutoBuy() {
  if (state.autoBuyUnlocked) return;
  if (!state.revolutionPoints.gte(10)) return showCustomTooltip("Need 10 Green Revolutions!");
  state.revolutionPoints  = state.revolutionPoints.minus(10);
  state.autoBuyUnlocked    = true;
  state.autoBuyEnabled     = true;
  showCustomTooltip("Auto-Buy unlocked!");
  updateDisplay();
}

function prestigeAlGore() {
  const { count, cost } = getGoreBulk();
  if (count === 0) return showCustomTooltip("Not enough Slop!");
  state.gorePoints = state.gorePoints.plus(count);
  state.aiSlop     = state.aiSlop.minus(cost);
  resetProgress();
  showCustomTooltip(`+${count} Gore`);
  updateDisplay();
}

function prestigeClimate() {
  const { count, cost } = getClimateBulk();
  if (count === 0) return showCustomTooltip("Not enough Gore!");
  state.gorePoints    = state.gorePoints.minus(cost);
  state.climatePoints = state.climatePoints.plus(count);
  resetProgress();
  showCustomTooltip(`+${count} Climate`);
  updateDisplay();
}

function prestigeRevolution() {
  const { count, cost } = getRevolutionBulk();
  if (count === 0) return showCustomTooltip("Not enough Climate!");
  state.revolutionPoints = state.revolutionPoints.plus(count);
  state.climatePoints    = state.climatePoints.minus(cost);
  resetProgress();
  showCustomTooltip(`+${count} Revolution`);
  updateDisplay();
}

function prestigeCosmicRebirth() {
  const { count, cost } = getRebirthBulk();
  if (count === 0) return showCustomTooltip("Not enough Climate!");
  state.rebirthPoints  = state.rebirthPoints.plus(count);
  state.climatePoints  = state.climatePoints.minus(cost);
  resetProgress(true);
  showCustomTooltip(`+${count} Rebirth`);
  updateDisplay();
}

function prestigeAwakening() {
  const { count, cost } = getAwakeningBulk();
  if (count === 0) return showCustomTooltip("Not enough Rebirths!");
  state.awakeningPoints = state.awakeningPoints.plus(count);
  state.rebirthPoints   = state.rebirthPoints.minus(cost);
  resetProgress();
  showCustomTooltip(`+${count} Awakening`);
  updateDisplay();
}

function prestigeEnlightenment() {
  const ec = Decimal.pow(69,420);
  if (!state.awakeningPoints.gte(ec)) {
    return showCustomTooltip("Not enough Awakenings!");
  }
  document.getElementById("finalModal").style.display = "block";
}

function restartGame() {
  localStorage.removeItem('degensGore');
  initializeState();
  updateDisplay();
}

// 15) Bootstrap
(function waitForDependencies() {
  if (typeof Decimal === "undefined" || !document.getElementById("upgradeButton")) {
    return setTimeout(waitForDependencies, 50);
  }

  initializeState();
  loadState();
  updateDisplay();
  setInterval(generateSlop, 25);
  setInterval(() => {
    if (state.rebirthPoints.gt(0)) {
      state.gorePoints = state.gorePoints.plus(state.rebirthPoints);
      updateDisplay();
    }
  }, 1000);

  document.getElementById("upgradeButton")
    .addEventListener("click", buyUpgrade);
    document.getElementById("autoBuyButton").addEventListener("click", () => {
      if (!state.autoBuyUnlocked) {
        unlockAutoBuy();
      } else {
        state.autoBuyEnabled = !state.autoBuyEnabled;
        showCustomTooltip(`Auto-Buy ${state.autoBuyEnabled ? 'Enabled' : 'Disabled'}`);
        updateDisplay();
      }
    });
  document.getElementById('freeUpgradeButton').addEventListener('click', () => {
    if (!state.rebirthPoints.gte(5)) {
      return showCustomTooltip('Need 5 Cosmic Rebirths!');
    }
    state.rebirthPoints       = state.rebirthPoints.minus(5);
    state.upgradeFreeUnlocked = true;
    state.autoBuyEnabled      = true;     // ← permanently on
    showCustomTooltip('Free Upgrades Unlocked! Auto-Buy permanently enabled.');
    updateDisplay();
  });
  document.getElementById("restartButton")
    .addEventListener("click", () => {
      document.getElementById("confirmRestartModal").style.display = "block";
    });
  document.getElementById("confirmRestartYes")
    .addEventListener("click", () => {
      document.getElementById("confirmRestartModal").style.display = "none";
      restartGame();
    });
  document.getElementById("confirmRestartNo")
    .addEventListener("click", () => {
      document.getElementById("confirmRestartModal").style.display = "none";
    });
  document.getElementById("prestigeGoreButton")
    .addEventListener("click", prestigeAlGore);
  document.getElementById("prestigeClimateButton")
    .addEventListener("click", prestigeClimate);
  document.getElementById("prestigeRevolutionButton")
    .addEventListener("click", prestigeRevolution);
  document.getElementById("prestigeRebirthButton")
    .addEventListener("click", prestigeCosmicRebirth);
  document.getElementById("prestigeAwakeningButton")
    .addEventListener("click", prestigeAwakening);
  document.getElementById("prestigeEnlightenmentButton")
    .addEventListener("click", prestigeEnlightenment);
  document.getElementById("finalModalClose")
    .addEventListener("click", () => {
      document.getElementById("finalModal").style.display = "none";
    });
})();
