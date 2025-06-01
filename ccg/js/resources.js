// Define all available rarities in order of increasing quality
window.rarities = [
    "junk",
    "basic",
    "decent",
    "fine",
    "rare",
    "epic",
    "legend",
    "mythic",
    "exotic",
    "divine"
];

// 1) define your "master" rarity-weights
const defaultRarityWeights = {
  junk:      1e20,
  basic:     1e18,
  decent:    1e16,
  fine:      1e14,
  rare:      1e12,
  epic:      1e10,
  legend:    1e8,
  mythic:    1e6,
  exotic:    1e3,
  divine:    1,
};

// 2) create your realms without individual rarityWeights
window.realms = [
  { id: 1, name: "Rocks",             unlocked: true,  cooldown: 3,   deselectMultiplier: 5, pokeWeight: 1e11 },
  { id: 2, name: "Sea World",         unlocked: false, cooldown: 6,   deselectMultiplier: 5, pokeWeight: 8e10 },
  { id: 3, name: "Bugdom",            unlocked: false, cooldown: 15,  deselectMultiplier: 5, pokeWeight: 6e10 },
  { id: 4, name: "Aviary",            unlocked: false, cooldown: 30,  deselectMultiplier: 5, pokeWeight: 4e10 },
  { id: 5, name: "Ancient Relics",    unlocked: false, cooldown: 50,  deselectMultiplier: 5, pokeWeight: 2e10 },
  { id: 6, name: "Celestial Bodies",  unlocked: false, cooldown: 80,  deselectMultiplier: 5, pokeWeight: 1e10 },
  { id: 7, name: "Mythical Beasts",   unlocked: false, cooldown: 120, deselectMultiplier: 5, pokeWeight: 8e9 },
  { id: 8, name: "Incremental Games", unlocked: false, cooldown: 160, deselectMultiplier: 5, pokeWeight: 6e9 },
  { id: 9, name: "Spirit Familiars",  unlocked: false, cooldown: 310, deselectMultiplier: 5, pokeWeight: 3e9 },
  { id: 10, name: "Weapons",          unlocked: false, cooldown: 900, deselectMultiplier: 5, pokeWeight: 1e9 },
  { id: 11, name: "Greek Gods",       unlocked: false, cooldown: 5400, deselectMultiplier: 5, pokeWeight: 2e8 },
];

// 3) give every realm its own copy of the default weights for both capped and uncapped
window.realms.forEach(r => {
  r.rarityWeights = { ...defaultRarityWeights };
  r.uncappedRarityWeights = { ...defaultRarityWeights };
});

// 4) build a lookup of which rarities actually exist per realm
const cardsByRealm = window.cards.reduce((acc, card) => {
  acc[card.realm] = acc[card.realm] || new Set();
  acc[card.realm].add(card.rarity);
  return acc;
}, {});

// 5) zero out weights for any rarity not present in that realm's cards
window.realms.forEach(r => {
  const present = cardsByRealm[r.id] || new Set();
  for (const rarity in r.rarityWeights) {
    if (!present.has(rarity)) {
      r.rarityWeights[rarity] = 0;
      r.uncappedRarityWeights[rarity] = 0;
    }
  }
});

  

window.currencies = [
{ id: 'stone',       name: 'Stone',       realm: 1, scarcity: 1,   icon: 'stone.png'       },
{ id: 'rune',        name: 'Rune',        realm: 1, scarcity: 100, icon: 'rune.png'        },
{ id: 'coral',       name: 'Coral',       realm: 2, scarcity: 1,   icon: 'coral.png'       },
{ id: 'pearl',       name: 'Pearl',       realm: 2, scarcity: 100, icon: 'pearl.png'       },
{ id: 'pollen',      name: 'Pollen',      realm: 3, scarcity: 1,   icon: 'pollen.png'      },
{ id: 'royal_jelly', name: 'Royal Jelly', realm: 3, scarcity: 100, icon: 'royal_jelly.png' },
{ id: 'egg',         name: 'Egg',         realm: 4, scarcity: 1,   icon: 'egg.png'         },
{ id: 'feather',     name: 'Feather',     realm: 4, scarcity: 100, icon: 'feather.png'     },
{ id: 'crystal',     name: 'Crystal',     realm: 5, scarcity: 1,   icon: 'crystal.png'     },
{ id: 'cosmic_ray',  name: 'Cosmic Ray',  realm: 6, scarcity: 100, icon: 'cosmic_ray.png'  },
{ id: 'tooth',       name: 'Tooth',       realm: 7, scarcity: 1,   icon: 'tooth.png'       },
{ id: 'coin',        name: 'Coin',        realm: 8, scarcity: 1,   icon: 'coin.png'        },
{ id: 'spirit',      name: 'Spirit',      realm: 9, scarcity: 1,   icon: 'spirit.png'      },
{ id: 'zeal',        name: 'Zeal',        realm: 11,scarcity: 1,  icon: 'zeal.png'        },
];


window.realmColors = {
    1: "#888888",   // rocks
    2: "#3498db",   // sea world
    3: "#f1c40f",   // budgom
    4: "#f39c12",   // aviary (warm golden-orange, like feathers and sunrise)
    5: "#9b59b6",   // ancient relics (royal purple, conveys mystery & age)
    6: "#3b536c",   // celestial bodies (deep space navy)
    7: "#e74c3c",    // mythical beasts (bold crimson, evokes danger & power)
    8: "#1abc9c",   // incremental games (teal — energetic and digital)
    9: "#d4a3b7",   // spirit familiars (dull pink — soft, muted, gentle)
   10: "#0e4b37",   // weapons (a rich dark green)
   11: "#985112",   // greek gods (rich orange — Olympian fire and command)
   12: "#a5134d"    // bosses (deep magenta — intense, climactic energy)
  };
    
// Generate tier thresholds (powers of base)
window.tierThresholds = {
    //          1    2      3      4      5      6      7       8       9        10       11     12     13      14     15      16     17     18     19    20
    junk:      [1,   5,    50,    200,   1000,  5000,  20000,  80000,  2.5e5,    6e5,     1e6,  8e6,    2e7,   5e7,    1e8,     3e8,  6e8,   8e8,    9e8,  1e9 ],
    basic:     [1,   5,    40,    150,   690,   3000,  15000,  69000,   2e5,    6.9e5,    1e6,  5e6,    1e7,   4e7,   6.9e7,    2e8,  5e8,  6.9e8,   8e8,  1e9 ],
    decent:    [1,   5,    25,    100,   420,   2000,  10000,  40000,    2e5,    4.2e5,   6e5,  3e6,    7e6,   2e7,    3e7,   4.2e7,  1e8,  4.2e8,  7.5e8, 1e9 ],
    fine:      [1,   5,    20,     50,   100,    500,   5000,  20000,    1e5,     2e5,   5e5,   3e6,    5e6,  1e7,    2e7,     3e7,  8e7,   4e8,    5e8,  1e9 ],
    rare:      [1,   4,    10,     25,    50,    100,   1000,   5000,    3e4,     1e5,   5e5,   2e6,    5e6,  1e7,    2e7,     3e7,  4e7,   3e8,    4e8,  1e9 ],
    epic:      [1,   4,    10,     25,    50,    100,   1000,   5000,    3e4,     1e5,   5e5,   1e6,    2e6,  3e6,    5e6,     1e7,  3e7,   2e8,    3e8,  1e9 ],
    legend:    [1,   4,    10,     20,    35,     80,    150,    300,    1e3,     1e4,   2e4,   1e5,    2e5,  1e6,    2e6,     1e7,  1e7,   1e8,    2e8,  1e9 ],
    mythic:    [1,   3,     8,     16,    32,     64,    128,    256,    512,    1024,  2056,  4096,   8192, 16384,  32768,    1e5,  1e6,   1e7,    1e8,  1e9 ],
    exotic:    [1,   3,     6,     10,    20,     60,    100,    200,    500,    1000,  2000,  4000,   8000, 16000,  32000,    1e5,  1e6,   1e7,    1e8,  1e9 ],
    divine:    [1,   2,     3,     4,      5,     10,     20,    30,      40,     50,   100,    500,   1000,  5000,   1e4,     1e5,  1e6,   1e7,    1e8,  1e9 ],
  };

// — Number formatting for currencies and costs —
const suffixes = ["","K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc"];

function formatNumber(d) {
    const n = new Decimal(d);
    if (n.isZero()) return "0";
  
    const sign = n.isNegative() ? "-" : "";
    const abs  = n.abs();
  
    // — SMALL NUMBERS: dynamically choose decimals so you see at least
    //   the first significant digit.
    if (abs.lessThan(1)) {
      // get exponent from scientific form, e.g. "1.00e-3" → exp = -3
      const [, expStr] = abs.toExponential().split("e");
      const exp = parseInt(expStr, 10);
      // at least 2 places, or enough to show the first sig digit: (−exp + 1)
      const places = Math.max(2, -exp + 1);
      return sign + abs.toFixed(places).replace(/\.?0+$/, "");
    }
  
    // — BIGGER NUMBERS: use suffixes as before
    const [mant, expStr] = abs.toExponential(2).split("e");
    const exp = parseInt(expStr, 10);
    const idx = Math.floor(exp / 3);
  
    if (idx > 0 && idx < suffixes.length) {
      const scaled = abs.dividedBy(new Decimal(10).pow(idx * 3));
      return sign + scaled.toFixed(2).replace(/\.?0+$/, "") + suffixes[idx];
    }
  
    if (idx <= 0) {
      return sign + abs.toFixed(2).replace(/\.?0+$/, "");
    }
  
    // fallback for enormous values
    return sign + abs.toExponential(2);
}
  
function formatQuantity(value) {
  return new Intl.NumberFormat('en-US', {
    notation:               'compact',
    compactDisplay:         'short',             // "K", "M", etc.
    maximumSignificantDigits: 3                   // exactly 3 sig-figs
  }).format(value);
}
  

function formatPct(value) {
    // value is already in percent form (e.g. 0.005 for 0.005%)
    if (value === 0) return "0.00%";
    if (value > 0 && value < 0.01) {
      // toPrecision(1) gives you the first significant digit
      return Number(value).toPrecision(1) + "%";
    }
    // otherwise two decimals
    return value.toFixed(2) + "%";
}

function formatDuration(sec, decimals = 1) {
  if (sec >= 3600) { // 3600 seconds in an hour
      const h = Math.floor(sec / 3600);
      const m = Math.floor((sec % 3600) / 60);
      return `${h}h${m}m`;
  } else if (sec >= 60) { // 60 seconds in a minute
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m}m${s.toString().padStart(2, '0')}s`;
  }
  return `${sec.toFixed(decimals)}s`;
}

// — Slugify helper for filenames —
function slugify(str) {
    return str
      .replace(/['’*]/g, '')             // strip apostrophes and asterisksfirst
      .replace(/ö/g, 'o')               // replace ö with o
      .toLowerCase()                 
      .replace(/[^a-z0-9]+/g, '_')   // convert spaces & invalid chars to _
      .replace(/^_|_$/g, '');        // trim leading/trailing _
  }

// — Hex → RGBA helper —
window.hexToRGBA = function(hex, alpha) {
const c = hex.replace("#","");
const num = parseInt(c, 16);
const r = (num >> 16) & 255;
const g = (num >> 8)  & 255;
const b = num & 255;
return `rgba(${r},${g},${b},${alpha})`;
};

function multinomialSample(N, weights) {
  if (N === 0) return Array(weights.length).fill(0);
  if (weights.length === 0) return [];

  const total = weights.reduce((a,b) => a + b, 0);
  if (total === 0) return Array(weights.length).fill(0);

  const probs = weights.map(w => w / total);

  // fast path for large N
  if (N > 1000) {
    const counts = Array(weights.length).fill(0);
    const LAMBDA_THRESHOLD = 10;

    // helper: sample Poisson(lambda)
    function samplePoisson(lambda) {
      let L = Math.exp(-lambda), k = 0, p = 1;
      while (p > L) {
        p *= Math.random();
        k++;
      }
      return k - 1;
    }

    for (let i = 0; i < probs.length; i++) {
      const p = probs[i];
      if (p <= 0) {
        counts[i] = 0;
      } else {
        const lambda = N * p;
        if (lambda < LAMBDA_THRESHOLD) {
          // Poisson for small means
          counts[i] = samplePoisson(lambda);
        } else {
          // Normal approx for larger means
          const variance = lambda * (1 - p);
          const stdDev = Math.sqrt(variance);
          const noise = (Math.random() * 4 - 2) * stdDev; 
          counts[i] = Math.max(0, Math.round(lambda + noise));
        }
      }
    }

    // adjust to sum exactly N
    let currentTotal = counts.reduce((a,b) => a + b, 0);
    if (currentTotal !== N) {
      const diff = N - currentTotal;
      // put the difference into the largest-prob bin
      const idx = probs.indexOf(Math.max(...probs));
      counts[idx] += diff;
    }

    return counts;
  }

  // original exact-simulation for N <= 1000
  const counts = Array(weights.length).fill(0);
  let cum = 0;
  const cumProbs = probs.map(p => (cum += p, cum));

  for (let i = 0; i < N; i++) {
    const r = Math.random();
    for (let j = 0; j < cumProbs.length; j++) {
      if (r < cumProbs[j]) {
        counts[j]++;
        break;
      }
    }
  }
  return counts;
}


function floorTo3SigDigits(num) {
  if (typeof num === 'object' && num.toNumber) num = num.toNumber();
  if (num === 0) return 0;
  const absNum = Math.abs(num);
  const digits = Math.floor(Math.log10(absNum)) + 1;
  const factor = Math.pow(10, digits - 3);
  return Math.sign(num) * Math.floor(absNum / factor) * factor;
}