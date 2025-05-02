
// Define all available rarities in order of increasing quality
window.rarities = [
    "junk",     // ~1 effect
    "basic",    // ~1 effect
    "decent",   // ~1 effect
    "fine",     // ~2 effects
    "rare",     // ~2 effects
    "epic",     // ~2 effects
    "legendary",// ~3 effects
    "mythic",   // ~3 effects
    "exotic",   // ~4 effects
    "divine"    // ~5 effects
];

window.realms = [
    {
        id: 1,
        name:       "Rocks",
        unlocked:   true,
        cooldown:  3,
        deselectMultiplier: 10,
        pokeWeight: 1e11,
        rarityWeights: {
        junk:      1e9,
        basic:     1e7,
        decent:    1e5,
        fine:      1e3,
        rare:      1,
        epic:      0,
        legendary: 0,
        mythic:    0,
        exotic:    0,
        divine:    0
        }
    },
    {
        id: 2,
        name:       "Sea World",
        unlocked:   false,
        cooldown:  7,
        deselectMultiplier: 10,
        pokeWeight: 3e10,
        rarityWeights: {
        junk:      1e15,
        basic:     1e13,
        decent:    1e11,
        fine:      1e9,
        rare:      1e7,
        epic:      1e5,
        legendary: 1,
        mythic:    0,
        exotic:    0,
        divine:    0
        }
    },
    {
        id: 3,
        name:       "Bugdom",
        unlocked:   false,
        cooldown:  20,
        deselectMultiplier: 10,
        pokeWeight: 1e10,
        rarityWeights: {
        junk:      1e13,
        basic:     1e11,
        decent:    1e9,
        fine:      1e7,
        rare:      1e5,
        epic:      1e3,
        legendary: 1,
        mythic:    0,
        exotic:    0,
        divine:    0
        }
    }
];
  

window.currencies = [
{ id: 'stone',       name: 'Stone',       icon: 'stone.png'       },
{ id: 'rune',        name: 'Rune',        icon: 'rune.png'        },
{ id: 'coral',       name: 'Coral',       icon: 'coral.png'       },
{ id: 'pearl',       name: 'Pearl',       icon: 'pearl.png'       },
{ id: 'pollen',      name: 'Pollen',      icon: 'pollen.png'      },
{ id: 'royal_jelly', name: 'Royal Jelly', icon: 'royal_jelly.png' }
];


window.realmColors = {
1: "#888888",
2: "#3498db",
3: "#f1c40f"
};
    
// Generate tier thresholds (powers of base)
window.tierThresholds = {
    //          1    2      3      4      5      6      7       8       9       10      11     12     13      14     15     16     17     18     19    20
    junk:      [1,   10,  100,    250,   1000,  5000,  20000,  80000,  2.5e5,    6e5,     1e6,   2e6,  3e6,    4e6,    5e6,   6e6,   7e6,  8e6,    9e6,  1e7 ],
    basic:     [1,   10,   69,    200,   690,   3000,  15000,  69000,   2e5,    6.9e5,    1e6,   2e6,  3e6,    4e6,    5e6,   6e6,  6.9e6, 8e6,    9e6,  1e7 ],
    decent:    [1,   10,   42,    150,   420,   2000,  10000,  40000,    2e5,    4.2e5,   6e5,   8e5,  1e6,  2e6,    3e6,  4.2e6,  6e6,  8e6,    9e6,  1e7 ],
    fine:      [1,   10,   25,     50,   100,    500,   5000,  20000,    1e5,     2e5,   5e5,   1e6,    5e6,  1e7,    2e7,    3e7,  4e7,  6e7,    8e7,  1e8 ],
    rare:      [1,   5,    10,     25,    50,    100,   1000,   5000,    3e4,     1e5,   5e5,   1e6,    5e6,  1e7,    2e7,    3e7,  4e7,  6e7,    8e7,  1e8 ],
    epic:      [1,   5,    10,     25,    50,    100,   1000,   5000,    3e4,     1e5,   5e5,   1e6,    2e6,  3e6,    5e6,    1e7,  3e7,  5e7,    7e7,  1e8 ],
    legendary: [1,   5,    10,     20,    35,     80,    150,    300,    1e3,     1e4,   2e4,   1e5,    2e5,  1e6,    2e6,    1e7,  2e7,  1e8,    2e8,  1e9 ],
    mythic:    [1,   4,     8,     16,    32,     64,    128,    256,    512,    1024,  2056,  4096,   8192, 16384,  32768,    1e5,  1e6,  1e7,   1e8,  1e9 ],
    exotic:    [1,   3,     7,     15,    30,     60,    100,    200,    500,    1000,  2000,  4000,   8000, 16000,  32000,    1e5,  1e6,  1e7,   1e8,  1e9 ],
    divine:    [1,   2,     3,     4,      5,     10,     20,    30,      40,     50,   100,   500,    1000,  5000,   1e4,     1e5,  1e6,  1e7,   1e8,  1e9 ],
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

function formatDuration(sec) {
    if (sec >= 60) {
        const m = Math.floor(sec/60), s = Math.floor(sec%60);
        return `${m}m${s.toString().padStart(2,'0')}s`;
    }
    return `${sec.toFixed(1)}s`;
}

// — Slugify helper for filenames —
function slugify(str) {
    return str
      .replace(/['’]/g, '')             // strip apostrophes first
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
    const total = weights.reduce((a,b) => a + b, 0);
    const probs = weights.map(w => w/total);
    const counts = Array(weights.length).fill(0);
  
    for (let i = 0; i < N; i++) {
      let r = Math.random(), cum = 0;
      for (let j = 0; j < probs.length; j++) {
        cum += probs[j];
        if (r < cum) { counts[j]++; break; }
      }
    }
    return counts;
}