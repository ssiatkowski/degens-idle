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
    autoClimateUnlocked: false,
    rebirthScalingUnlocked: false,
    autoClimateEfficiencyUnlocked: false,
    rebirthScaling2Unlocked: false,
    autoClimateUltraEfficiencyUnlocked: false,
    awakeningBoostUnlocked: false,
    autoRebirthUnlocked: false,
    sloppyAwakeningUnlocked: false,
    alGoreCheapUnlocked: false,
    greenCheapUnlocked: false,
    transcendentAwakeningUnlocked: false,
    cosmicGoreUnlocked: false,
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
    autoClimateUnlocked: state.autoClimateUnlocked,
    rebirthScalingUnlocked: state.rebirthScalingUnlocked,
    autoClimateEfficiencyUnlocked: state.autoClimateEfficiencyUnlocked,
    rebirthScaling2Unlocked: state.rebirthScaling2Unlocked,
    autoClimateUltraEfficiencyUnlocked: state.autoClimateUltraEfficiencyUnlocked,
    awakeningBoostUnlocked: state.awakeningBoostUnlocked,
    autoRebirthUnlocked: state.autoRebirthUnlocked,
    sloppyAwakeningUnlocked: state.sloppyAwakeningUnlocked,
    alGoreCheapUnlocked: state.alGoreCheapUnlocked,
    greenCheapUnlocked: state.greenCheapUnlocked,
    transcendentAwakeningUnlocked: state.transcendentAwakeningUnlocked,
    cosmicGoreUnlocked: state.cosmicGoreUnlocked
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
    state.autoClimateUnlocked = o.autoClimateUnlocked;
    state.rebirthScalingUnlocked = o.rebirthScalingUnlocked;
    state.autoClimateEfficiencyUnlocked = o.autoClimateEfficiencyUnlocked;
    state.rebirthScaling2Unlocked = o.rebirthScaling2Unlocked;
    state.autoClimateUltraEfficiencyUnlocked = o.autoClimateUltraEfficiencyUnlocked;
    state.awakeningBoostUnlocked = o.awakeningBoostUnlocked;
    state.autoRebirthUnlocked = o.autoRebirthUnlocked;
    state.sloppyAwakeningUnlocked = o.sloppyAwakeningUnlocked;
    state.alGoreCheapUnlocked = o.alGoreCheapUnlocked;
    state.greenCheapUnlocked = o.greenCheapUnlocked;
    state.transcendentAwakeningUnlocked = o.transcendentAwakeningUnlocked;
    state.cosmicGoreUnlocked = o.cosmicGoreUnlocked;
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

// new, constant-time linear bulk calculator
function calcBulkLinear(resource, firstCost, increment) {
  const two = new Decimal(2);

  // we want the largest integer n ≥ 0 so that
  //   S(n) = n·firstCost + increment·(n·(n−1)/2) ≤ resource
  //
  // arithmetic sum ⇒ S(n) = (increment/2)·n² + (firstCost − increment/2)·n
  // solve a·n² + b·n − resource = 0, with
  const a = increment.div(two);
  const b = firstCost.minus(increment.div(two));
  const c = resource.neg();

  // discriminant = b² − 4ac
  const disc = b.pow(2).minus(a.times(c).times(4));
  if (disc.lt(0)) {
    // no solutions ⇒ zero buys
    return { count: 0, cost: new Decimal(0) };
  }

  // positive root: (−b + √disc) / (2a)
  let n = disc
    .sqrt()
    .minus(b)
    .div(a.times(2))
    .floor();
  if (n.lt(0)) n = new Decimal(0);

  // now compute the total cost S(n) = n·firstCost + increment·n·(n−1)/2
  const total = n.times(firstCost)
                 .plus(increment.times(n.times(n.minus(1))).div(two));

  return { count: n.toNumber(), cost: total };
}


// 8) Cost-for-one functions:
function costOneGore() {
  if (state.alGoreCheapUnlocked) return BASE_GORE_COST;
  return BASE_GORE_COST
    .times(Decimal.pow(1.01, state.gorePoints))
    .floor();
}

function costOneClimate() {
  return BASE_CLIMATE_COST.plus(
    state.climatePoints.div(4).floor()
  );
}

function costOneRevolution() {
  if (state.greenCheapUnlocked) return BASE_REVOLUTION_COST;
  return BASE_REVOLUTION_COST
    .times(Decimal.pow(1.01, state.revolutionPoints))
    .floor();
}


function costOneRebirth() {
  // default ÷5, after first unlock ÷1, after second unlock ÷0.2
  const factor = state.rebirthScaling2Unlocked
    ? new Decimal(0.2)
    : state.rebirthScalingUnlocked
      ? new Decimal(1)
      : new Decimal(5);
  return BASE_REBIRTH_COST.plus(
    state.rebirthPoints.times(factor)
  );
}

function costOneAwakening() {
  if (state.sloppyAwakeningUnlocked) {
    // flat cost once unlocked
    return BASE_AWAKENING_COST;
  }
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
    new Decimal(0.25)
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
    state.rebirthScaling2Unlocked
    ? new Decimal(0.2)
    : state.rebirthScalingUnlocked
      ? new Decimal(1)
      : new Decimal(5)
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
      autoBtn.disabled    = false;
      autoBtn.classList.toggle('unaffordable', !state.revolutionPoints.gte(5));
      autoBtn.textContent = 'Unlock Auto-Buy (5 Green Revolutions)';
    } else {
      autoBtn.disabled    = false;
      autoBtn.textContent = state.autoBuyEnabled
        ? 'Disable Auto-Buy'
        : 'Enable Auto-Buy';
    }
  }

  const freeCont = document.getElementById('freeUpgradeContainer');
  if (state.autoBuyUnlocked && !state.upgradeFreeUnlocked) {
    const freeBtn  = document.getElementById('freeUpgradeButton');
    freeCont.style.display = '';
    freeBtn.disabled = false;
    freeBtn.classList.toggle('unaffordable', !state.rebirthPoints.gte(3));
    freeBtn.textContent = `Unlock Free Upgrades (3 Cosmic Rebirths)`;
  } else {
    freeCont.style.display = 'none';
  }

  const climCont = document.getElementById('autoClimateContainer');
  if (state.upgradeFreeUnlocked && !state.autoClimateUnlocked) {
    climCont.style.display = '';
    const climBtn = document.getElementById('autoClimateButton');
    climBtn.disabled = false;
    climBtn.classList.toggle('unaffordable', !state.revolutionPoints.gte(100));
  } else {
    climCont.style.display = 'none';
  }

  const scaleCont = document.getElementById('rebirthScalingContainer');
  if (state.autoClimateUnlocked && !state.rebirthScalingUnlocked) {
    const scaleBtn  = document.getElementById('rebirthScalingButton');
    scaleCont.style.display = '';
    scaleBtn.disabled = false;
    scaleBtn.classList.toggle('unaffordable', state.rebirthPoints.lt(50));
  } else {
    scaleCont.style.display = 'none';
  }

  const effCont = document.getElementById('climateEffContainer');
  if (state.rebirthScalingUnlocked && !state.autoClimateEfficiencyUnlocked) {
    const effBtn  = document.getElementById('climateEffButton');
    effCont.style.display = '';
    effBtn.disabled = false;
    effBtn.classList.toggle('unaffordable', state.revolutionPoints.lt(250));
  } else {
    effCont.style.display = 'none';
  }

  const scale2Cont = document.getElementById('rebirthScaling2Container');
  if (state.autoClimateEfficiencyUnlocked && !state.rebirthScaling2Unlocked) {
    const scale2Btn  = document.getElementById('rebirthScaling2Button');
    scale2Cont.style.display = '';
    scale2Btn.disabled = false;
    scale2Btn.classList.toggle('unaffordable', state.climatePoints.lt(50000));
  } else {
    scale2Cont.style.display = 'none';
  }

  const ultraCont = document.getElementById('autoClimateUltraContainer');
  if (state.rebirthScaling2Unlocked && !state.autoClimateUltraEfficiencyUnlocked) {
    const ultraBtn  = document.getElementById('autoClimateUltraButton');
    ultraCont.style.display = '';
    ultraBtn.disabled = false;
    ultraBtn.classList.toggle('unaffordable', state.rebirthPoints.lt(500));
  } else {
    ultraCont.style.display = 'none';
  }

  const abCont = document.getElementById('awakeningBoostContainer');
  if (state.autoClimateUltraEfficiencyUnlocked && !state.awakeningBoostUnlocked) {
    const abBtn  = document.getElementById('awakeningBoostButton');
    abCont.style.display = '';
    abBtn.disabled = false;
    abBtn.classList.toggle('unaffordable', state.awakeningPoints.lt(10));
  } else {
    abCont.style.display = 'none';
  }

  const rebCont = document.getElementById('autoRebirthContainer');
  if (state.awakeningBoostUnlocked && !state.autoRebirthUnlocked) {
    const rebBtn  = document.getElementById('autoRebirthButton');
    rebCont.style.display = '';
    rebBtn.disabled = false;
    rebBtn.classList.toggle('unaffordable',
      state.aiSlop.lt(Decimal.pow(10, 30))
    );
  } else {
    rebCont.style.display = 'none';
  }

  const saCont = document.getElementById('sloppyAwakeningsContainer');
  if (state.autoRebirthUnlocked && !state.sloppyAwakeningUnlocked) {
    const saBtn  = document.getElementById('sloppyAwakeningsButton');
    saCont.style.display = '';
    saBtn.disabled = false;
    saBtn.classList.toggle('unaffordable',
      state.aiSlop.lt(new Decimal(10).pow(50))
    );
  } else {
    saCont.style.display = 'none';
  }
  
  const agcCont = document.getElementById('alGoreCheapContainer');
  if (state.sloppyAwakeningUnlocked && !state.alGoreCheapUnlocked) {
    const agcBtn  = document.getElementById('alGoreCheapButton');
    agcCont.style.display = '';
    agcBtn.disabled = false;
    agcBtn.classList.toggle('unaffordable',
      state.awakeningPoints.lt(10000)
    );
  } else {
    agcCont.style.display = 'none';
  }

  const gcCont = document.getElementById('greenCheapContainer');
  if (state.alGoreCheapUnlocked && !state.greenCheapUnlocked) {
    const gcBtn  = document.getElementById('greenCheapButton');
    gcCont.style.display = '';
    gcBtn.disabled = false;
    gcBtn.classList.toggle('unaffordable',
      state.climatePoints.lt(new Decimal(2e8))
    );
  } else {
    gcCont.style.display = 'none';
  }

  const taCont = document.getElementById('transcendentAwakeningContainer');
  if (state.greenCheapUnlocked && !state.transcendentAwakeningUnlocked) {
    const taBtn  = document.getElementById('transcendentAwakeningButton');
    taCont.style.display = '';
    taBtn.disabled = false;
    taBtn.classList.toggle('unaffordable',
      state.rebirthPoints.lt(new Decimal(1e8))
    );
  } else {
    taCont.style.display = 'none';
  }

  const cgCont = document.getElementById('cosmicGoreContainer');
  if (state.transcendentAwakeningUnlocked && !state.cosmicGoreUnlocked) {
    const cgBtn = document.getElementById('cosmicGoreButton');
    cgCont.style.display = '';
    cgBtn.disabled = false;
    cgBtn.classList.toggle('unaffordable',
      state.revolutionPoints.lt(new Decimal('5e210'))
    );
  } else {
    cgCont.style.display = 'none';
  }
  


  // Al Gore
  {
    const { count } = getGoreBulk();
    const one       = costOneGore();
    const btn       = document.getElementById("prestigeGoreButton");
    btn.innerHTML =
      `Hire Al Gore<br>` +
      `Cost: ${formatNum(one)} Slop; Buy ${formatNum(new Decimal(count))}`;
    btn.style.backgroundColor = count > 0 ? "#0a0" : "#800";
  }

  // Climate Change
  {
    const { count } = getClimateBulk();
    const one       = costOneClimate();
    const btn       = document.getElementById("prestigeClimateButton");
    btn.innerHTML =
      `Change Climate<br>` +
      `Cost: ${formatNum(one)} Gores; Buy ${formatNum(new Decimal(count))}`;
    btn.style.backgroundColor = count > 0 ? "#0a0" : "#800";
  }

  // Green Revolution
  {
    const { count } = getRevolutionBulk();
    const one  = costOneRevolution();
    const btn  = document.getElementById("prestigeRevolutionButton");
    btn.innerHTML =
      `Green Revolution<br>` +
      `Cost: ${formatNum(one)} Climates; Buy ${formatNum(new Decimal(count))}`;
    btn.style.backgroundColor = count > 0 ? "#0a0" : "#800";
  }

  // Cosmic Rebirth
  {
    const { count } = getRebirthBulk();
    const one  = costOneRebirth();
    const btn  = document.getElementById("prestigeRebirthButton");
    btn.innerHTML =
      `Cosmic Rebirth<br>` +
      `Cost: ${formatNum(one)} Climates; Buy ${formatNum(new Decimal(count))}`;
    btn.style.backgroundColor = count > 0 ? "#0a0" : "#800";
  }

  // Temporal Awakening
  {
    const { count } = getAwakeningBulk();
    const one  = costOneAwakening();
    const btn  = document.getElementById("prestigeAwakeningButton");
    btn.innerHTML =
      `Temporal Awakening<br>` +
      `Cost: ${formatNum(one)} Rebirths; Buy ${formatNum(new Decimal(count))}`;
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

  // 1) Al Gore: each Gore = +10% + 1% per Rebirth
  const perGoreBoost = new Decimal(0.1)
    .plus(state.rebirthPoints.times(0.01));
  document.getElementById("descGore").innerHTML =
    `Resets Level → Gain Al Gore<br>` +
    `(x${formatNum(
      state.gorePoints.times(perGoreBoost).plus(1)
    )} Slop production)`;

  // 2) Climate Reset: base 25% + (1% + cappedAwaks*1%) per Revolution
  const baseClimateRate = new Decimal(0.25);
  const grBase          = new Decimal(0.01);
  const cappedAwaks     = Decimal.min(state.awakeningPoints, new Decimal(1e6));
  const extraPerAwak    = state.awakeningBoostUnlocked
    ? cappedAwaks.times(grBase)
    : new Decimal(0);
  const perClimateBoost = baseClimateRate.plus(
    state.revolutionPoints.times(
      grBase.plus(extraPerAwak)
    )
  );
  document.getElementById("descClimate").innerHTML =
    `Resets Level → Gain Climate Change<br>` +
    `(x${formatNum(
      new Decimal(state.climatePoints)
        .times(perClimateBoost)
        .plus(1)
    )} Slop production)`;

  // 3) Green Revolution: shows both multiplier & flat %
  const totalBoostPct = state.revolutionPoints
    .times(grBase.plus(extraPerAwak))
    .times(new Decimal(100));
  document.getElementById("descRevolution").innerHTML =
    `Resets Level → Gain Revolutions<br>` +
    `(x${formatNum(
      new Decimal(1).plus(
        state.revolutionPoints.times(0.05)
      )
    )} Slop production)<br>` +
    `(+${formatNum(totalBoostPct)}% flat to each Climate Change’s Slop boost)`;

  // 4) Cosmic Rebirth: Gore/sec = rebirthPoints (cubed if Cosmic Gore unlocked)
  const goreRate = state.cosmicGoreUnlocked
    ? state.rebirthPoints.pow(3)
    : state.rebirthPoints;
  document.getElementById("descRebirth").innerHTML =
    `Resets Gores/Climates → Cosmic Rebirth<br>` +
    `(x${formatNum(
      state.rebirthPoints.times(0.3).plus(1)
    )} Slop production)<br>` +
    `(+${formatNum(state.rebirthPoints)}% flat to each Al Gore’s Slop boost)<br>` +
    `(+${formatNum(goreRate)} Al Gores / second)`;

  // 5) Temporal Awakening: +5% slop & shows capped % boost per Revolution
  const baseMultiplier = state.awakeningPoints.plus(1);
  const grPerSec       = state.awakeningPoints;
  let html =
    `Resets Level → Temporal Awakening<br>` +
    `(x${formatNum(baseMultiplier)} Slop production)<br>` +
    `(+${formatNum(grPerSec)} Green Revolutions / second)`;
  if (state.awakeningBoostUnlocked) {
    const capNoteTA = state.awakeningPoints.gt(1e6) ? " (capped)" : "";
    html += `<br>(+${formatNum(cappedAwaks)}% to each Climate Change per Revolution${capNoteTA})`;
  }
  document.getElementById("descAwakening").innerHTML = html;

  // 6) Enlightenment remains static
  document.getElementById("descEnlightenment").innerHTML =
    `Become Enlightened<br>(cost: 69^420 Awakenings)`;


  saveState();
}

// 11) Slop/sec calc
function calculateSlopRate() {
  // Al Gore
  const perGoreBoost = new Decimal(0.1)
    .plus(state.rebirthPoints.times(0.01));
  const gm = new Decimal(1).plus(
    state.gorePoints.times(perGoreBoost)
  );

  // Climate
  const baseClimateRate = new Decimal(0.25);
  const grBase          = new Decimal(0.01);
  const cappedAwaks     = Decimal.min(state.awakeningPoints, new Decimal(1e6));
  const extraPerAwak    = state.awakeningBoostUnlocked
    ? cappedAwaks.times(grBase)
    : new Decimal(0);
  const perClimateBoost = baseClimateRate.plus(
    state.revolutionPoints.times(
      grBase.plus(extraPerAwak)
    )
  );
  const cm = new Decimal(1).plus(
    state.climatePoints.times(perClimateBoost)
  );

  // the rest
  const rm = new Decimal(1).plus(state.revolutionPoints.times(0.05));
  const bm = new Decimal(1).plus(state.rebirthPoints.times(0.3));
  const am = new Decimal(1).plus(state.awakeningPoints);

  // *40 because generateSlop runs every 25ms
  return state.slopPerClick
    .times(gm)
    .times(cm)
    .times(rm)
    .times(bm)
    .times(am)
    .times(40);
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

  // 1) Al Gore boost: 0.1 + 0.01 per Rebirth, all in Decimal
  const perGoreBoost = new Decimal(0.1)
    .plus(state.rebirthPoints.times(0.01));
  const gm = new Decimal(1).plus(
    state.gorePoints.times(perGoreBoost)
  );

  // 2) Climate boost: base 0.25 + (0.01 + cappedAwaks*0.01) per Revolution
  const baseClimateRate = new Decimal(0.25);
  const grBase          = new Decimal(0.01);
  // cap awakenings at 1e6
  const cappedAwaks     = Decimal.min(state.awakeningPoints, new Decimal(1e6));
  const extraPerAwak    = state.awakeningBoostUnlocked
    ? cappedAwaks.times(grBase)
    : new Decimal(0);
  const perClimateBoost = baseClimateRate.plus(
    state.revolutionPoints.times(
      grBase.plus(extraPerAwak)
    )
  );
  const cm = new Decimal(1).plus(
    state.climatePoints.times(perClimateBoost)
  );

  // 3) Other static multipliers
  const rm = new Decimal(1).plus(state.revolutionPoints.times(0.05));
  const bm = new Decimal(1).plus(state.rebirthPoints.times(0.3));
  const am = new Decimal(1).plus(state.awakeningPoints);

  // 4) Accumulate Slop
  state.aiSlop = state.aiSlop.plus(
    state.slopPerClick
      .times(gm)
      .times(cm)
      .times(rm)
      .times(bm)
      .times(am)
  );

  // 5) Auto‐buy / prestige automation
  if (state.autoBuyUnlocked && state.autoBuyEnabled && state.aiSlop.gte(state.upgradeCost)) {
    buyUpgrade();
  }

  if (state.autoClimateUnlocked) {
    const maxBuys = state.autoClimateUltraEfficiencyUnlocked
      ? 2500
      : state.autoClimateEfficiencyUnlocked
        ? 5
        : 1;
    for (let i = 0; i < maxBuys; i++) {
      const cost = costOneClimate();
      if (!state.gorePoints.gte(cost)) break;
      state.climatePoints = state.climatePoints.plus(1);
    }
  }

  if (state.autoRebirthUnlocked) {
    for (let i = 0; i < 2500; i++) {
      const cost = costOneRebirth();
      if (!state.climatePoints.gte(cost)) break;
      state.rebirthPoints = state.rebirthPoints.plus(1);
    }
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
}

function unlockAutoBuy() {
  if (state.autoBuyUnlocked) return;
  if (!state.revolutionPoints.gte(5)) return showCustomTooltip("Need 5 Green Revolutions!");
  state.revolutionPoints  = state.revolutionPoints.minus(5);
  state.autoBuyUnlocked    = true;
  state.autoBuyEnabled     = true;
  showCustomTooltip("Auto-Buy unlocked!");
}

function prestigeAlGore() {
  const { count, cost } = getGoreBulk();
  if (count === 0) return showCustomTooltip("Not enough Slop!");
  state.gorePoints = state.gorePoints.plus(count);
  if (!state.alGoreCheapUnlocked){
    state.aiSlop = state.aiSlop.minus(cost);
    resetProgress();
  }
  showCustomTooltip(`+${count} Al Gores`);
}

function prestigeClimate() {
  const { count, cost } = getClimateBulk();
  if (count === 0) return showCustomTooltip("Not enough Gore!");
  state.climatePoints = state.climatePoints.plus(count);
  if (!state.autoClimateUnlocked) {
    state.gorePoints    = state.gorePoints.minus(cost);
    resetProgress();
  }
  showCustomTooltip(`+${count} Climate Changes`);
}

function prestigeRevolution() {
  const { count, cost } = getRevolutionBulk();
  if (count === 0) return showCustomTooltip("Not enough Climate!");
  state.revolutionPoints = state.revolutionPoints.plus(count);
  if (!state.greenCheapUnlocked) {
    state.climatePoints = state.climatePoints.minus(cost);
    resetProgress();
  }
  showCustomTooltip(`+${count} Green Revolutions`);
}

function prestigeCosmicRebirth() {
  const { count, cost } = getRebirthBulk();
  if (count === 0) return showCustomTooltip("Not enough Climate!");
  state.rebirthPoints  = state.rebirthPoints.plus(count);
  if (!state.autoRebirthUnlocked) {
    state.climatePoints  = state.climatePoints.minus(cost);
    resetProgress(true);
  }
  showCustomTooltip(`+${count} Cosmic Rebirths`);
}

function prestigeAwakening() {
  const { count, cost } = getAwakeningBulk();
  if (count === 0) return showCustomTooltip("Not enough Rebirths!");
  state.awakeningPoints = state.awakeningPoints.plus(count);
  state.rebirthPoints   = state.rebirthPoints.minus(cost);
  resetProgress();
  showCustomTooltip(`+${count} Temporal Awakenings`);
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
      const payoff = state.cosmicGoreUnlocked
        ? state.rebirthPoints.pow(3)
        : state.rebirthPoints;
      state.gorePoints = state.gorePoints.plus(payoff);
    }
    if (state.awakeningPoints.gt(0)) {
      state.revolutionPoints = state.revolutionPoints.plus(state.awakeningPoints);
    }
    if (state.transcendentAwakeningUnlocked) {
      state.awakeningPoints = state.awakeningPoints.plus(
        state.aiSlop.pow(1/4)
      );
    }
  }, 1000);

  document.getElementById("upgradeButton").addEventListener("click", buyUpgrade);
  document.getElementById("autoBuyButton").addEventListener("click", () => {
    if (!state.autoBuyUnlocked) {
      unlockAutoBuy();
    } else {
      state.autoBuyEnabled = !state.autoBuyEnabled;
      showCustomTooltip(`Auto-Buy ${state.autoBuyEnabled ? 'Enabled' : 'Disabled'}`);
    }
  });
  document.getElementById('freeUpgradeButton').addEventListener('click', () => {
    if (!state.rebirthPoints.gte(3)) {
      return showCustomTooltip('Need 3 Cosmic Rebirths!');
    }
    state.rebirthPoints       = state.rebirthPoints.minus(3);
    state.upgradeFreeUnlocked = true;
    state.autoBuyEnabled      = true;     // ← permanently on
    showCustomTooltip('Free Upgrades Unlocked! Auto-Buy permanently enabled.');
  });
  document.getElementById('autoClimateButton').addEventListener('click', () => {
    if (!state.revolutionPoints.gte(100)) {
      return showCustomTooltip('Need 100 Green Revolutions!');
    }
    state.revolutionPoints    = state.revolutionPoints.minus(100);
    state.autoClimateUnlocked = true;
    showCustomTooltip('Auto Climate Change unlocked!');
  });
  document.getElementById('rebirthScalingButton').addEventListener('click', () => {
    if (state.rebirthPoints.lt(50)) {
      return showCustomTooltip('Need 50 Cosmic Rebirths!');
    }
    state.rebirthPoints = state.rebirthPoints.minus(50);
    state.rebirthScalingUnlocked = true;
    showCustomTooltip('Cosmic Rebirth scaling improved!');
  });
  document.getElementById('climateEffButton').addEventListener('click', () => {
    if (state.revolutionPoints.lt(250)) {
      return showCustomTooltip('Need 250 Green Revolutions!');
    }
    state.revolutionPoints                = state.revolutionPoints.minus(250);
    state.autoClimateEfficiencyUnlocked   = true;
    showCustomTooltip('Auto-Climate now buys up to 5 per tick!');
    updateDisplay();
  });
  document.getElementById('rebirthScaling2Button').addEventListener('click', () => {
    if (state.climatePoints.lt(50000)) {
      return showCustomTooltip('Need 50K Climate Changes!');
    }
    state.climatePoints         = state.climatePoints.minus(25000);
    state.rebirthScaling2Unlocked = true;
    showCustomTooltip('Cosmic Rebirth scaling now ÷ 25 total!');
    updateDisplay();
  });
  document.getElementById('autoClimateUltraButton').addEventListener('click', () => {
    if (state.rebirthPoints.lt(500)) {
      return showCustomTooltip('Need 500 Cosmic Rebirths!');
    }
    state.rebirthPoints                        = state.rebirthPoints.minus(500);
    state.autoClimateUltraEfficiencyUnlocked   = true;
    showCustomTooltip('Auto-Climate now buys up to 2500 per tick!');
    updateDisplay();
  });
  document.getElementById('awakeningBoostButton').addEventListener('click', () => {
    if (state.awakeningPoints.lt(10)) {
      return showCustomTooltip('Need 10 Temporal Awakenings!');
    }
    state.awakeningPoints         = state.awakeningPoints.minus(10);
    state.awakeningBoostUnlocked  = true;
    showCustomTooltip('Green Revolution boost now scales with Awakenings!');
    updateDisplay();
  });
  document.getElementById('autoRebirthButton').addEventListener('click', () => {
    const cost = Decimal.pow(10, 30);
    if (state.aiSlop.lt(cost)) {
      return showCustomTooltip('Need 1No AI Slop!');
    }
    state.aiSlop            = state.aiSlop.minus(cost);
    state.autoRebirthUnlocked = true;
    showCustomTooltip('Free Auto Cosmic Rebirth unlocked!');
    updateDisplay();
  });
  // in your bootstrap setup, replace the old handler with:
  document.getElementById('sloppyAwakeningsButton').addEventListener('click', () => {
    const cost = new Decimal(10).pow(50);
    if (state.aiSlop.lt(cost)) {
      return showCustomTooltip('Need 1e50 AI Slop!');
    }
    state.aiSlop                       = state.aiSlop.minus(cost);
    state.sloppyAwakeningUnlocked     = true;
    showCustomTooltip('Temporal Awakening cost scaling removed!');
    updateDisplay();
  });
  document.getElementById('alGoreCheapButton').addEventListener('click', () => {
    if (state.awakeningPoints.lt(10000)) {
      return showCustomTooltip('Need 10K Temporal Awakenings!');
    }
    state.awakeningPoints        = state.awakeningPoints.minus(10000);
    state.alGoreCheapUnlocked    = true;
    showCustomTooltip('Al Gore cost scaling removed!');
    updateDisplay();
  });
  document.getElementById('greenCheapButton').addEventListener('click', () => {
    const cost = new Decimal(2e8);
    if (state.climatePoints.lt(cost)) {
      return showCustomTooltip('Need 200M Climate Changes!');
    }
    state.climatePoints      = state.climatePoints.minus(cost);
    state.greenCheapUnlocked = true;
    showCustomTooltip('Green Revolution cost scaling removed!');
    updateDisplay();
  });
  document.getElementById('transcendentAwakeningButton').addEventListener('click', () => {
    const cost = new Decimal(1e8);
    if (state.rebirthPoints.lt(cost)) {
      return showCustomTooltip('Need 100M Cosmic Rebirths!');
    }
    state.rebirthPoints                         = state.rebirthPoints.minus(cost);
    state.transcendentAwakeningUnlocked          = true;
    showCustomTooltip('Transcendent Awakening unlocked!');
    updateDisplay();
  });
  document.getElementById('cosmicGoreButton').addEventListener('click', () => {
    const cost = new Decimal('5e210');
    if (state.revolutionPoints.lt(cost)) {
      return showCustomTooltip('Need 5e210 Green Revolutions!');
    }
    state.revolutionPoints   = state.revolutionPoints.minus(cost);
    state.cosmicGoreUnlocked = true;
    showCustomTooltip('Cosmic Gore unlocked!');
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
