
// Define all available rarities in order of increasing quality
window.rarities = [
    "junk",
    "basic",
    "decent",
    "fine",
    "rare",
    "epic",
    "legendary",
    "mythic",
    "exotic",
    "divine"
];

window.realms = [
    {
        id: 1,
        name:       "Rocks",
        unlocked:   true,
        cooldown:  3,
        deselectMultiplier: 10,
        pokeWeight: 1e10,
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
        cooldown:  10,
        deselectMultiplier: 10,
        pokeWeight: 3e10,
        rarityWeights: {
        junk:      1e15,
        basic:     1e13,
        decent:    1e11,
        fine:      1e9,
        rare:      1e7,
        epic:      0,
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
        cooldown:  100,
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
function genThresholds(base, count = 20) {
    return Array.from({ length: count }, (_, i) => Math.pow(base, i));
  }
  
// Expose tier thresholds for every rarity
window.tierThresholds = {
    junk:      genThresholds(4),
    basic:     genThresholds(5),
    decent:    genThresholds(8),
    fine:      genThresholds(10),
    rare:      genThresholds(15),
    epic:      genThresholds(16),
    legendary: genThresholds(20),
    mythic:    genThresholds(25),
    exotic:    genThresholds(50),
    divine:    genThresholds(100)
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
