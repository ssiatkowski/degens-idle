window.cards = [
  {
    "id": "101",
    "name": "Pebble",
    "realm": 1,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "stone",
      "amount": 10.0
    },
    "description": "Pebbles can form protective barriers called pebble beaches that shield shorelines from strong waves.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 1.0
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 5
        },
        "currency": "stone",
        "value": 10.0
      },
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "stone",
        "value": 100.0
      }
    ]
  },
  {
    "id": "102",
    "name": "Stone Fragment",
    "realm": 1,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "stone",
      "amount": 10.0
    },
    "description": "Some stone fragments contain tiny fossils that are millions of years old!",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 1.0
      }
    ]
  },
  {
    "id": "103",
    "name": "Flint",
    "realm": 1,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "stone",
      "amount": 20.0
    },
    "description": "Flint was used for tools and fire-starting by early humans over 2 million years ago.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "104",
    "name": "Coal",
    "realm": 1,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "stone",
      "amount": 20.0
    },
    "description": "Coal is formed from ancient plants that lived over 300 million years ago!",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "value": 10.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "value": 50.0
      }
    ]
  },
  {
    "id": "105",
    "name": "Iron Ore",
    "realm": 1,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "stone",
      "amount": 10.0
    },
    "description": "Iron ore mining dates back more than 4000 years to ancient Egypt.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 2.0
      },
      {
        "type": "cooldownDivider"
      }
    ]
  },
  {
    "id": "106",
    "name": "Copper Nugget",
    "realm": 1,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "stone",
      "amount": 25.0
    },
    "description": "Copper was the first metal ever used by humans, over 10,000 years ago.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "stone",
        "value": 1.0
      }
    ]
  },
  {
    "id": "107",
    "name": "Limestone",
    "realm": 1,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "stone",
      "amount": 25.0
    },
    "description": "Limestone makes up most coral reefs and contains the skeletons of ancient sea life.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "stone",
        "value": 1.0
      }
    ]
  },
  {
    "id": "108",
    "name": "Sandstone",
    "realm": 1,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "stone",
      "amount": 50.0
    },
    "description": "Sandstone can form stunning canyons like Antelope Canyon in Arizona.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "value": 2.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "value": 20.0
      }
    ]
  },
  {
    "id": "109",
    "name": "Granite Chunk",
    "realm": 1,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "stone",
      "amount": 50.0
    },
    "description": "Granite makes up most of Earth’s continental crust and can be over a billion years old.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "stone",
        "value": 10.0
      },
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "stone",
        "value": 1000.0
      }
    ]
  },
  {
    "id": "110",
    "name": "Shale",
    "realm": 1,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "stone",
      "amount": 50.0
    },
    "description": "Shale layers can trap natural gas and oil, shaping modern fracking.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "111",
    "name": "Marble Slab",
    "realm": 1,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "stone",
      "amount": 100.0
    },
    "description": "Marble is metamorphosed limestone and was used by Michelangelo to carve David.",
    "power": 2,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "stone",
        "value": 10.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "112",
    "name": "Quartz Crystal",
    "realm": 1,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "stone",
      "amount": 30.0
    },
    "description": "Quartz powers timepieces—its vibrations keep watches ticking!",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "value": 1.1
      }
    ]
  },
  {
    "id": "113",
    "name": "Basalt Boulder",
    "realm": 1,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "stone",
      "amount": 100.0
    },
    "description": "Basalt forms the vast ocean floors and the Giant’s Causeway in Ireland.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 100.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "114",
    "name": "Obsidian Shard",
    "realm": 1,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "stone",
      "amount": 100.0
    },
    "description": "Obsidian was prized by ancient cultures for making razor-sharp blades.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 500.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 5
        },
        "currency": "stone",
        "value": 5000.0
      },
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "stone",
        "value": 15000.0
      }
    ]
  },
  {
    "id": "115",
    "name": "Fossil Fragment",
    "realm": 1,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "stone",
      "amount": 25.0
    },
    "description": "Fossils can reveal creatures that roamed Earth over 65 million years ago.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 300.0
      },
      {
        "type": "currencyPerSec",
        "currency": "stone",
        "value": 15.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "crystal",
        "value": 15.0
      }
    ]
  },
  {
    "id": "116",
    "name": "Ruby Geode",
    "realm": 1,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "stone",
      "amount": 20.0
    },
    "description": "Geodes form when minerals deposit inside gas bubbles in rocks over eons.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "stone",
        "value": 1.1
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "currency": "stone",
        "value": 1.5
      }
    ]
  },
  {
    "id": "117",
    "name": "Emerald Deposit",
    "realm": 1,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "rune",
      "amount": 10.0
    },
    "description": "Emeralds get their green from trace chromium and vanadium.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 500.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "rune",
        "value": 100.0
      }
    ]
  },
  {
    "id": "118",
    "name": "Sapphire Stone",
    "realm": 1,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "stone",
      "amount": 100.0
    },
    "description": "Sapphires come in many colors—even pink and yellow!",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "rune",
        "value": 3.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "119",
    "name": "Meteorite",
    "realm": 1,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "stone",
      "amount": 500.0
    },
    "description": "Meteorites can be up to 4.5 billion years old—older than Earth!",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "stone",
        "value": 15.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "allGeneratorMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "value": 1.25
      }
    ]
  },
  {
    "id": "120",
    "name": "Ancient Relic",
    "realm": 1,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "rune",
      "amount": 1.0
    },
    "description": "Many ancient relics are carbon-dated to reveal secrets of past civilizations.",
    "power": 10,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "rune",
        "value": 5.0
      },
      {
        "type": "currencyPerSec",
        "currency": "rune",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "rune",
        "value": 250.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "stone",
        "value": 2.0
      }
    ]
  },
  {
    "id": "201",
    "name": "Seaweed",
    "realm": 2,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "coral",
      "amount": 5.0
    },
    "description": "Seaweed produces about 80% of Earth’s oxygen through photosynthesis.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 1.0
      }
    ]
  },
  {
    "id": "202",
    "name": "Seashell",
    "realm": 2,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "coral",
      "amount": 5.0
    },
    "description": "Many seashell shapes follow the Fibonacci sequence in nature.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 1.0
      }
    ]
  },
  {
    "id": "203",
    "name": "Starfish",
    "realm": 2,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coral",
      "amount": 5.0
    },
    "description": "Starfish can regenerate lost arms—even grow a whole new body from one arm.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 2.0
      },
      {
        "type": "cooldownDivider"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCooldownDivider",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "value": 0.2
      }
    ]
  },
  {
    "id": "204",
    "name": "Driftwood",
    "realm": 2,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coral",
      "amount": 25.0
    },
    "description": "Driftwood can float for years, carried across entire oceans.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coral",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "205",
    "name": "Old Boot",
    "realm": 2,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coral",
      "amount": 50.0
    },
    "description": "Ancient footwear found in rivers helps archaeologists date human settlements.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "206",
    "name": "Coral Fragment",
    "realm": 2,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coral",
      "amount": 40.0
    },
    "description": "Coral reefs support 25% of all marine species while covering less than 1% of the ocean.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "207",
    "name": "Jellyfish",
    "realm": 2,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coral",
      "amount": 100.0
    },
    "description": "Some jellyfish species are biologically immortal, reverting to juvenile form to avoid death.",
    "power": 5,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coral",
        "value": 5.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 4
        },
        "value": 4.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 16
        },
        "value": 4000.0
      }
    ]
  },
  {
    "id": "208",
    "name": "Shipwreck",
    "realm": 2,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coral",
      "amount": 50.0
    },
    "description": "Over 3 million shipwrecks lie on the ocean floor, preserving maritime history.",
    "power": 2,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "coral",
        "value": 1.5
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "coral",
        "value": 1.5
      }
    ]
  },
  {
    "id": "209",
    "name": "Lobster",
    "realm": 2,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coral",
      "amount": 100.0
    },
    "description": "Lobsters taste with their legs and chew with their stomachs!",
    "power": 50,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "210",
    "name": "Seahorse",
    "realm": 2,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coral",
      "amount": 25.0
    },
    "description": "Male seahorses carry and give birth to their young.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 50.0
      },
      {
        "type": "currencyPerSec",
        "currency": "coral",
        "value": 5.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "211",
    "name": "Clownfish",
    "realm": 2,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coral",
      "amount": 200.0
    },
    "description": "Clownfish live among anemones and are immune to their stinging cells.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 100.0
      },
      {
        "type": "currencyPerSec",
        "currency": "coral",
        "value": 10.0
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 5
        },
        "value": 1.1
      }
    ]
  },
  {
    "id": "212",
    "name": "Swordfish",
    "realm": 2,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "coral",
      "amount": 300.0
    },
    "description": "Swordfish can swim up to 60 mph—one of the ocean’s fastest predators.",
    "power": 100,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 400.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "213",
    "name": "Anglerfish",
    "realm": 2,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coral",
      "amount": 100.0
    },
    "description": "Deep-sea anglerfish use a bioluminescent lure to attract prey in darkness.",
    "power": 50,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "coral",
        "value": 25000.0
      },
      {
        "type": "flatCooldownDivider",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "value": 1.0
      }
    ]
  },
  {
    "id": "214",
    "name": "Electric Eel",
    "realm": 2,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coral",
      "amount": 100.0
    },
    "description": "Electric eels can generate over 600 volts of electricity to stun prey.",
    "power": 100,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "215",
    "name": "Pearl Oyster",
    "realm": 2,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coral",
      "amount": 200.0
    },
    "description": "Pearls form when oysters coat irritants with nacre, creating the gem.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pearl",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "pearl",
        "value": 10.0
      },
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "pearl",
        "value": 100.0
      }
    ]
  },
  {
    "id": "216",
    "name": "Manta Ray",
    "realm": 2,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coral",
      "amount": 50.0
    },
    "description": "Manta rays have the largest brain-to-body ratio of any fish.",
    "power": 50,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 500.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "217",
    "name": "Sunken Idol",
    "realm": 2,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "coral",
      "amount": 10.0
    },
    "description": "Sunken idols often stay pristine underwater for centuries.",
    "power": 25,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "coral",
        "value": 1.5
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 50
        },
        "currency": "coral",
        "value": 1.5
      }
    ]
  },
  {
    "id": "218",
    "name": "Kraken Tentacle",
    "realm": 2,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coral",
      "amount": 200.0
    },
    "description": "Legends of the kraken may have originated from giant squid sightings.",
    "power": 30,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 10000.0
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "allGeneratorMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "value": 1.25
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "coral",
        "value": 2.0
      }
    ]
  },
  {
    "id": "219",
    "name": "Leviathan Scale",
    "realm": 2,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "pearl",
      "amount": 5.0
    },
    "description": "The name ‘leviathan’ appears in ancient texts describing sea monsters.",
    "power": 30,
    "defense": 10,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 5000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "allGeneratorMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "value": 1.25
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "currency": "pearl",
        "value": 2.0
      }
    ]
  },
  {
    "id": "220",
    "name": "Poseidon’s Trident",
    "realm": 2,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "pearl",
      "amount": 1.0
    },
    "description": "The trident symbol is linked to Poseidon, god of the sea.",
    "power": 500,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pearl",
        "value": 3.0
      },
      {
        "type": "currencyPerSec",
        "currency": "pearl",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "coral",
        "value": 1000000.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "currency": "coral",
        "value": 2.0
      }
    ]
  },
  {
    "id": "301",
    "name": "Ant",
    "realm": 3,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "pollen",
      "amount": 5.0
    },
    "description": "Ants can lift objects over 50 times their body weight.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 1.0
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "value": 5.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "value": 80.0
      }
    ]
  },
  {
    "id": "302",
    "name": "Beetle",
    "realm": 3,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "pollen",
      "amount": 5.0
    },
    "description": "Beetles make up about 40% of all known insect species.",
    "power": 2,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 1.0
      }
    ]
  },
  {
    "id": "303",
    "name": "Grasshopper",
    "realm": 3,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "pollen",
      "amount": 25.0
    },
    "description": "Some grasshoppers can jump over 20 times their body length.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "pollen",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "304",
    "name": "Butterfly",
    "realm": 3,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "pollen",
      "amount": 25.0
    },
    "description": "Butterflies taste with their feet to find host plants.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "pollen",
        "value": 2.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "pollen",
        "value": 690.0
      }
    ]
  },
  {
    "id": "305",
    "name": "Spider",
    "realm": 3,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "pollen",
      "amount": 200.0
    },
    "description": "Spider silk is stronger than steel of the same thickness.",
    "power": 20,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 25.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMinCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "value": 8.0
      },
      {
        "type": "flatMinCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 16
        },
        "value": 800.0
      }
    ]
  },
  {
    "id": "306",
    "name": "Caterpillar",
    "realm": 3,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "pollen",
      "amount": 50.0
    },
    "description": "Caterpillars can increase their body mass up to 100 times before metamorphosis.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "307",
    "name": "Ladybug",
    "realm": 3,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "pollen",
      "amount": 50.0
    },
    "description": "Ladybugs release a yellow fluid from their legs to deter predators.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 25.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "308",
    "name": "Wasp",
    "realm": 3,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "pollen",
      "amount": 200.0
    },
    "description": "Wasps inspired medical adhesives that work on wet surfaces.",
    "power": 100,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 80.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "value": 1.15
      }
    ]
  },
  {
    "id": "309",
    "name": "Dragonfly",
    "realm": 3,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "pollen",
      "amount": 25.0
    },
    "description": "Dragonflies can reach flying speeds of 35 mph—among the fastest insects.",
    "power": 10,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "pollen",
        "value": 5.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "310",
    "name": "Firefly",
    "realm": 3,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "pollen",
      "amount": 50.0
    },
    "description": "Fireflies glow without heat using a chemical reaction in their abdomen.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "311",
    "name": "Honeycomb",
    "realm": 3,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "pollen",
      "amount": 50.0
    },
    "description": "Hexagonal honeycomb cells store the most honey with zero waste.",
    "power": 3,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "pollen",
        "value": 2000.0
      }
    ]
  },
  {
    "id": "312",
    "name": "Beetle Carapace",
    "realm": 3,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "pollen",
      "amount": 80.0
    },
    "description": "Beetle shells inspired new lightweight armor materials.",
    "power": 5,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "313",
    "name": "Mantis Claw",
    "realm": 3,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "pollen",
      "amount": 200.0
    },
    "description": "Praying mantis claws strike at over 50 mph to catch prey.",
    "power": 20,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "pollen",
        "value": 15.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "314",
    "name": "Cicada Shell",
    "realm": 3,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "pollen",
      "amount": 80.0
    },
    "description": "Cicadas emerge in synchronized broods every 13 or 17 years.",
    "power": 8,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "315",
    "name": "Termite Wood",
    "realm": 3,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "pollen",
      "amount": 25.0
    },
    "description": "Termite mounds maintain constant temperature and humidity inside their tunnels.",
    "power": 5,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 250.0
      },
      {
        "type": "currencyPerSec",
        "currency": "pollen",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "316",
    "name": "Queen Bee",
    "realm": 3,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "pollen",
      "amount": 50.0
    },
    "description": "A queen bee can lay over 2000 eggs per day at peak season.",
    "power": 50,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 35
        },
        "currency": "royal_jelly",
        "value": 1.25
      }
    ]
  },
  {
    "id": "317",
    "name": "Praying Mantis",
    "realm": 3,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "pollen",
      "amount": 50.0
    },
    "description": "Praying mantises can rotate their heads 180° to scan for prey.",
    "power": 50,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "rune",
        "value": 1.25
      }
    ]
  },
  {
    "id": "318",
    "name": "Atlas Moth",
    "realm": 3,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.0,
    "levelCost": {
      "currency": "pollen",
      "amount": 200.0
    },
    "description": "Atlas moths have wingspans up to 12 inches—among the largest insects.",
    "power": 25,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "pollen",
        "value": 40.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "value": 100.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "value": 2000.0
      }
    ]
  },
  {
    "id": "319",
    "name": "Goliath Beetle",
    "realm": 3,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "pollen",
      "amount": 50.0
    },
    "description": "Goliath beetles can grow over 4 inches long, making them one of the largest insects.",
    "power": 25,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 1500.0
      },
      {
        "type": "currencyPerSec",
        "currency": "pollen",
        "value": 25.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      }
    ]
  },
  {
    "id": "320",
    "name": "Ant Queen",
    "realm": 3,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "pollen",
      "amount": 20.0
    },
    "description": "Ant queens can live for decades—far longer than worker ants.",
    "power": 25,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "fine"
      }
    ]
  },
  {
    "id": "321",
    "name": "Titan Scarab",
    "realm": 3,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 10.0
    },
    "description": "Titan scarabs can roll dung balls over 1 000× their own weight.",
    "power": 75,
    "defense": 10,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 5000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 5
        },
        "currency": "royal_jelly",
        "value": 50.0
      },
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 17
        },
        "currency": "royal_jelly",
        "value": 5000.0
      }
    ]
  },
  {
    "id": "322",
    "name": "Warden Wasp",
    "realm": 3,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 1.0
    },
    "description": "Warden wasps defend their colonies with some of the strongest insect stings.",
    "power": 250,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "royal_jelly",
        "value": 4.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "pollen",
        "value": 1.25
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "pollen",
        "value": 1.5
      }
    ]
  },
  {
    "id": "323",
    "name": "Celestial Cicada",
    "realm": 3,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 1.0
    },
    "description": "Celestial cicadas emerge in synchronized swarms once every century.",
    "power": 50,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "royal_jelly",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "pollen",
        "value": 1.5
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "pollen",
        "value": 2.0
      }
    ]
  },
  {
    "id": "324",
    "name": "Dreamspinner",
    "realm": 3,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 10.0
    },
    "description": "The Dreamspinner weaves silk that unlocks visions in your dreams.",
    "power": 250,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "royal_jelly",
        "value": 10.0
      },
      {
        "type": "currencyPerSec",
        "currency": "royal_jelly",
        "value": 1.0
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "pollen",
        "value": 3.0
      },
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "royal_jelly",
        "value": 100000.0
      }
    ]
  },
  {
    "id": "401",
    "name": "Sparrow",
    "realm": 4,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "egg",
      "amount": 10.0
    },
    "description": "Sparrows can swim short distances by flapping their wings and hopping across the water.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 10.0
      }
    ]
  },
  {
    "id": "402",
    "name": "Pigeon",
    "realm": 4,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "egg",
      "amount": 10.0
    },
    "description": "Pigeons can recognize themselves in mirrors—one of the few species with this ability.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 10.0
      }
    ]
  },
  {
    "id": "403",
    "name": "Crow",
    "realm": 4,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "egg",
      "amount": 25.0
    },
    "description": "Crows remember human faces and can hold grudges for years.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "egg",
        "value": 2.0
      }
    ]
  },
  {
    "id": "404",
    "name": "Robin",
    "realm": 4,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "egg",
      "amount": 40.0
    },
    "description": "Robins can hear worms moving underground using their keen sense of hearing.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "405",
    "name": "Blue Jay",
    "realm": 4,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "egg",
      "amount": 40.0
    },
    "description": "Blue Jays mimic the calls of hawks to scare away other birds.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 20.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "406",
    "name": "Goldfinch",
    "realm": 4,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "egg",
      "amount": 50.0
    },
    "description": "Goldfinches are strict vegetarians, unlike most other birds.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "egg",
        "value": 1.1
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "currency": "egg",
        "value": 1.5
      }
    ]
  },
  {
    "id": "407",
    "name": "Hummingbird",
    "realm": 4,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "egg",
      "amount": 200.0
    },
    "description": "Hummingbirds can flap their wings over 70 times per second.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 50.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "408",
    "name": "Woodpecker",
    "realm": 4,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "egg",
      "amount": 100.0
    },
    "description": "Woodpeckers have specially adapted skulls to absorb the shock of pecking.",
    "power": 5,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 25.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 5
        },
        "value": 15.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "value": 1500.0
      }
    ]
  },
  {
    "id": "409",
    "name": "Kingfisher",
    "realm": 4,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "egg",
      "amount": 25.0
    },
    "description": "Kingfishers can dive into water without making a splash thanks to their streamlined beaks.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "egg",
        "value": 5.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "410",
    "name": "Parrot",
    "realm": 4,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "egg",
      "amount": 100.0
    },
    "description": "Parrots can learn to say over 100 words and use them in context.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 50.0
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 5
        },
        "value": 1.15
      }
    ]
  },
  {
    "id": "411",
    "name": "Flamingo",
    "realm": 4,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "egg",
      "amount": 200.0
    },
    "description": "Flamingos get their pink color from the shrimp and algae they eat.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 400.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "412",
    "name": "Swan",
    "realm": 4,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "egg",
      "amount": 200.0
    },
    "description": "Swans have more neck vertebrae than giraffes—up to 25!",
    "power": 15,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "413",
    "name": "Pelican",
    "realm": 4,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "egg",
      "amount": 50.0
    },
    "description": "Pelicans can hold up to 3 gallons of water in their throat pouches.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 200.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "414",
    "name": "Albatross",
    "realm": 4,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "egg",
      "amount": 150.0
    },
    "description": "Albatrosses can sleep while flying over the ocean.",
    "power": 10,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "egg",
        "value": 50.0
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "415",
    "name": "Falcon",
    "realm": 4,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "egg",
      "amount": 50.0
    },
    "description": "Falcons are the fastest animals on Earth, diving at speeds over 200 mph.",
    "power": 50,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "fine"
      }
    ]
  },
  {
    "id": "416",
    "name": "Hawk",
    "realm": 4,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "egg",
      "amount": 100.0
    },
    "description": "Hawks have vision about 8 times sharper than that of humans.",
    "power": 50,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "egg",
        "value": 500.0
      },
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "egg",
        "value": 5000.0
      }
    ]
  },
  {
    "id": "417",
    "name": "Eagle",
    "realm": 4,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.0,
    "levelCost": {
      "currency": "egg",
      "amount": 50.0
    },
    "description": "Eagles build the largest nests of any bird, sometimes weighing over a ton.",
    "power": 75,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 1500.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 4
        },
        "currency": "egg",
        "value": 4000.0
      },
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "egg",
        "value": 200000.0
      }
    ]
  },
  {
    "id": "418",
    "name": "Owl",
    "realm": 4,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "egg",
      "amount": 50.0
    },
    "description": "Owls can rotate their heads up to 270 degrees.",
    "power": 25,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "419",
    "name": "Condor",
    "realm": 4,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "egg",
      "amount": 25.0
    },
    "description": "Condors have a wingspan of over 10 feet, among the largest of any land bird.",
    "power": 25,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "420",
    "name": "Phoenix",
    "realm": 4,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "feather",
      "amount": 5.0
    },
    "description": "Phoenixes are mythical birds said to be reborn from their ashes.",
    "power": 200,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "feather",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "feather",
        "value": 100.0
      },
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "feather",
        "value": 1000.0
      }
    ]
  },
  {
    "id": "421",
    "name": "Thunderbird",
    "realm": 4,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "feather",
      "amount": 10.0
    },
    "description": "Thunderbirds are legendary creatures said to cause thunder with their wings.",
    "power": 200,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "egg",
        "value": 100.0
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "allGeneratorMultiplier",
        "requirement": {
          "type": "level",
          "amount": 9
        },
        "value": 1.5
      },
      {
        "type": "allGeneratorMultiplier",
        "requirement": {
          "type": "level",
          "amount": 13
        },
        "value": 2.0
      }
    ]
  },
  {
    "id": "422",
    "name": "Roc",
    "realm": 4,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "feather",
      "amount": 5.0
    },
    "description": "Rocs are giant birds in mythology capable of carrying off elephants.",
    "power": 150,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 7500.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 13
        },
        "currency": "feather",
        "value": 2.0
      }
    ]
  },
  {
    "id": "423",
    "name": "Garuda",
    "realm": 4,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.0,
    "levelCost": {
      "currency": "feather",
      "amount": 10.0
    },
    "description": "Garuda is a divine bird in Hindu mythology, often seen as a protector.",
    "power": 150,
    "defense": 10,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "egg",
        "value": 80.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 12
        },
        "currency": "feather",
        "value": 1200.0
      }
    ]
  },
  {
    "id": "424",
    "name": "Simurgh",
    "realm": 4,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "feather",
      "amount": 10.0
    },
    "description": "The Simurgh is a Persian mythical bird believed to purify the land and sky.",
    "power": 150,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 5000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "feather",
        "value": 2.0
      }
    ]
  },
  {
    "id": "425",
    "name": "Articuno",
    "realm": 4,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "feather",
      "amount": 25.0
    },
    "description": "Articuno is an Ice-type Legendary Pokémon inspired by arctic birds.",
    "power": 250,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "feather",
        "value": 25.0
      },
      {
        "type": "currencyPerSec",
        "currency": "feather",
        "value": 1.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "egg",
        "value": 2.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "egg",
        "value": 3.0
      }
    ]
  },
  {
    "id": "426",
    "name": "Zapdos",
    "realm": 4,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "feather",
      "amount": 25.0
    },
    "description": "Zapdos is an Electric-type Legendary Pokémon with powers over storms.",
    "power": 250,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "feather",
        "value": 25.0
      },
      {
        "type": "currencyPerSec",
        "currency": "egg",
        "value": 200.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "egg",
        "value": 2.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "egg",
        "value": 3.0
      }
    ]
  },
  {
    "id": "427",
    "name": "Moltres",
    "realm": 4,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "feather",
      "amount": 25.0
    },
    "description": "Moltres is a Fire-type Legendary Pokémon with wings of flame.",
    "power": 250,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 25000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "feather",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "egg",
        "value": 2.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "egg",
        "value": 3.0
      }
    ]
  },
  {
    "id": "501",
    "name": "Quill Pen",
    "realm": 5,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "crystal",
      "amount": 10.0
    },
    "description": "Writing tools like these were essential for scribes across ancient civilizations.",
    "power": 2,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 1.0
      }
    ]
  },
  {
    "id": "502",
    "name": "Parchment Scroll",
    "realm": 5,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "crystal",
      "amount": 10.0
    },
    "description": "Ancient texts were often recorded on parchment made from animal skins.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "503",
    "name": "Ink Vial",
    "realm": 5,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "rune",
      "amount": 1.0
    },
    "description": "Some ancient inks used soot or crushed berries for pigmentation.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "504",
    "name": "Wax Seal",
    "realm": 5,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "rune",
      "amount": 1.0
    },
    "description": "Wax seals were used to authenticate important documents.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "505",
    "name": "Candle Stub",
    "realm": 5,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "crystal",
      "amount": 10.0
    },
    "description": "Candles were among the earliest portable sources of light.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "crystal",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "506",
    "name": "Crystal Lens",
    "realm": 5,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "crystal",
      "amount": 50.0
    },
    "description": "The first lenses were made from naturally transparent crystals.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "507",
    "name": "Bronze Compass",
    "realm": 5,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "crystal",
      "amount": 50.0
    },
    "description": "Compasses helped ancient sailors navigate the seas.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "value": 100.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 50
        },
        "value": 1000.0
      }
    ]
  },
  {
    "id": "508",
    "name": "Rune Stone",
    "realm": 5,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "rune",
      "amount": 5.0
    },
    "description": "Rune stones were used to record significant events and messages.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 25.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "rune",
        "value": 25.0
      }
    ]
  },
  {
    "id": "509",
    "name": "Spell Tome",
    "realm": 5,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "rune",
      "amount": 5.0
    },
    "description": "Ancient tomes were believed to contain powerful magical knowledge.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 25.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "rune",
        "value": 1.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "value": 200.0
      }
    ]
  },
  {
    "id": "510",
    "name": "Alchemist’s Flask",
    "realm": 5,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "rune",
      "amount": 10.0
    },
    "description": "Alchemists sought to turn lead into gold using tools like this.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "crystal",
        "value": 5.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "511",
    "name": "Sorcerer’s Ring",
    "realm": 5,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "crystal",
      "amount": 20.0
    },
    "description": "Mythical rings were thought to grant invisibility or control over elements.",
    "power": 5,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "crystal",
        "value": 1000.0
      },
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "currency": "crystal",
        "value": 10000.0
      }
    ]
  },
  {
    "id": "512",
    "name": "Enchanted Mirror",
    "realm": 5,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "crystal",
      "amount": 20.0
    },
    "description": "Some cultures believed mirrors could trap or reveal spirits.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "513",
    "name": "Mystic Amulet",
    "realm": 5,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "rune",
      "amount": 10.0
    },
    "description": "Amulets were worn to protect the wearer from evil forces.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "crystal",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 6
        },
        "value": 1.2
      }
    ]
  },
  {
    "id": "514",
    "name": "Elemental Orb",
    "realm": 5,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "rune",
      "amount": 10.0
    },
    "description": "Orbs were symbols of power, representing elemental control.",
    "power": 10,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 500.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "515",
    "name": "Astral Prism",
    "realm": 5,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "rune",
      "amount": 10.0
    },
    "description": "Prisms symbolized enlightenment and celestial understanding.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 400.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "516",
    "name": "Celestial Globe",
    "realm": 5,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "rune",
      "amount": 50.0
    },
    "description": "Globes mapped the stars and aided early astronomy.",
    "power": 10,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "rune",
        "value": 5.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "currency": "cosmic_ray",
        "value": 4.0
      },
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 50
        },
        "currency": "cosmic_ray",
        "value": 500.0
      }
    ]
  },
  {
    "id": "517",
    "name": "Philosopher’s Stone",
    "realm": 5,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "rune",
      "amount": 50.0
    },
    "description": "Said to grant immortality and turn metals to gold.",
    "power": 25,
    "defense": 10,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "value": 400.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 50
        },
        "value": 5000.0
      }
    ]
  },
  {
    "id": "518",
    "name": "Excalibur",
    "realm": 5,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.0,
    "levelCost": {
      "currency": "rune",
      "amount": 50.0
    },
    "description": "The legendary sword of King Arthur, bestowed by the Lady of the Lake.",
    "power": 500,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "crystal",
        "value": 40.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "519",
    "name": "Mjölnir",
    "realm": 5,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "rune",
      "amount": 100.0
    },
    "description": "Thor’s hammer, capable of leveling mountains.",
    "power": 500,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 25000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "crystal",
        "value": 2.0
      }
    ]
  },
  {
    "id": "520",
    "name": "Golden Fleece",
    "realm": 5,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.0,
    "levelCost": {
      "currency": "rune",
      "amount": 75.0
    },
    "description": "Jason and the Argonauts quested for this powerful artifact.",
    "power": 200,
    "defense": 9,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "rune",
        "value": 5.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "rune",
        "value": 1.5
      }
    ]
  },
  {
    "id": "521",
    "name": "Caduceus of Hermes",
    "realm": 5,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.0,
    "levelCost": {
      "currency": "rune",
      "amount": 75.0
    },
    "description": "Symbol of trade and negotiation, wielded by Hermes.",
    "power": 50,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "rune",
        "value": 5.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "rune",
        "value": 1.5
      }
    ]
  },
  {
    "id": "522",
    "name": "Aegis Shield",
    "realm": 5,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.0,
    "levelCost": {
      "currency": "rune",
      "amount": 75.0
    },
    "description": "A powerful shield carried by Athena and Zeus.",
    "power": 50,
    "defense": 15,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "rune",
        "value": 5.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "rune",
        "value": 1.5
      }
    ]
  },
  {
    "id": "523",
    "name": "Eye of Ra",
    "realm": 5,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "rune",
      "amount": 50.0
    },
    "description": "An ancient Egyptian symbol of protection and royal power.",
    "power": 200,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "rune",
        "value": 25.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "currency": "rune",
        "value": 5000.0
      }
    ]
  },
  {
    "id": "524",
    "name": "Staff of the Magi",
    "realm": 5,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "rune",
      "amount": 50.0
    },
    "description": "An artifact said to channel immense magical energy.",
    "power": 200,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 50000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "crystal",
        "value": 200.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "allGeneratorMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "value": 1.5
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "crystal",
        "value": 2.0
      }
    ]
  },
  {
    "id": "525",
    "name": "Enchanted Cloak",
    "realm": 5,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "rune",
      "amount": 50.0
    },
    "description": "Invisibility cloaks appear in legends from many cultures.",
    "power": 50,
    "defense": 13,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "rune",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "legend"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "rune",
        "value": 50.0
      }
    ]
  },
  {
    "id": "526",
    "name": "Sorcerer’s Chalice",
    "realm": 5,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "rune",
      "amount": 100.0
    },
    "description": "A cup said to grant insight or eternal youth.",
    "power": 50,
    "defense": 10,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "rune",
        "value": 100.0
      },
      {
        "type": "currencyPerSec",
        "currency": "crystal",
        "value": 200.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 12
        },
        "currency": "crystal",
        "value": 2.0
      }
    ]
  },
  {
    "id": "527",
    "name": "Cup of Eternal Youth",
    "realm": 5,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.5,
    "levelCost": {
      "currency": "rune",
      "amount": 500.0
    },
    "description": "Sought by many, this relic offers everlasting vitality.",
    "power": 100,
    "defense": 15,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "rune",
        "value": 1000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "rune",
        "value": 25.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "rune",
        "value": 10.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "rune",
        "value": 10.0
      }
    ]
  },
  {
    "id": "601",
    "name": "Asteroid",
    "realm": 6,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "stone",
      "amount": 10.0
    },
    "description": "Asteroids in our solar system are remnants from its formation over 4.6 billion years ago.",
    "power": 5,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "602",
    "name": "Comet",
    "realm": 6,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "stone",
      "amount": 25.0
    },
    "description": "Some comets complete their orbits around the Sun in thousands of years.",
    "power": 5,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "stone",
        "value": 10.0
      },
      {
        "type": "cooldownDivider"
      }
    ]
  },
  {
    "id": "603",
    "name": "Hoba",
    "realm": 6,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "stone",
      "amount": 40.0
    },
    "description": "The Hoba meteorite is the largest known intact meteorite on Earth at 60 tons.",
    "power": 10,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "604",
    "name": "Earth",
    "realm": 6,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "stone",
      "amount": 200.0
    },
    "description": "Earth is the only known planet with liquid water on its surface and life.",
    "power": 10,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 100.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "stone",
        "value": 2500.0
      },
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "stone",
        "value": 1500000.0
      }
    ]
  },
  {
    "id": "605",
    "name": "Mars",
    "realm": 6,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "stone",
      "amount": 25.0
    },
    "description": "Mars has the largest dust storms in our solar system sometimes covering the entire planet.",
    "power": 10,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 60.0
      },
      {
        "type": "currencyPerSec",
        "currency": "stone",
        "value": 5.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "currency": "stone",
        "value": 2.0
      }
    ]
  },
  {
    "id": "606",
    "name": "Saturn",
    "realm": 6,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "stone",
      "amount": 100.0
    },
    "description": "Saturn's rings are made mostly of ice particles with some rocky debris and dust.",
    "power": 10,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 100.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "607",
    "name": "Sun",
    "realm": 6,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "stone",
      "amount": 200.0
    },
    "description": "The Sun accounts for 99.86% of the mass in our solar system.",
    "power": 100,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 400.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "value": 1000.0
      },
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "cosmic_ray",
        "value": 1.0
      }
    ]
  },
  {
    "id": "608",
    "name": "Proxima Centauri",
    "realm": 6,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "stone",
      "amount": 80.0
    },
    "description": "Proxima Centauri is the closest star to our solar system at just 4.2 light-years away.",
    "power": 100,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "609",
    "name": "Sirius",
    "realm": 6,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "stone",
      "amount": 100.0
    },
    "description": "Sirius is twice as massive as our Sun and 25 times more luminous.",
    "power": 200,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "value": 1.2
      },
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 32
        },
        "currency": "cosmic_ray",
        "value": 3.0
      }
    ]
  },
  {
    "id": "610",
    "name": "Betelgeuse",
    "realm": 6,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "stone",
      "amount": 50.0
    },
    "description": "Betelgeuse is so large that if placed in our solar system it would extend past Jupiter's orbit.",
    "power": 200,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 1000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "stone",
        "value": 25.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "611",
    "name": "Orion Nebula",
    "realm": 6,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.0,
    "levelCost": {
      "currency": "stone",
      "amount": 200.0
    },
    "description": "The Orion Nebula is visible to the naked eye and is 24 light-years across.",
    "power": 150,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 1800.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "612",
    "name": "Crab Nebula",
    "realm": 6,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "stone",
      "amount": 150.0
    },
    "description": "The Crab Nebula is the remnant of a supernova observed in 1054 AD.",
    "power": 150,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 2000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "stone",
        "value": 50.0
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 5
        },
        "currency": "egg",
        "value": 3000.0
      }
    ]
  },
  {
    "id": "613",
    "name": "Milky Way",
    "realm": 6,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "cosmic_ray",
      "amount": 5.0
    },
    "description": "Our Milky Way galaxy contains between 100-400 billion stars.",
    "power": 200,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 5000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "currency": "stone",
        "value": 3.0
      }
    ]
  },
  {
    "id": "614",
    "name": "Andromeda Galaxy",
    "realm": 6,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.0,
    "levelCost": {
      "currency": "cosmic_ray",
      "amount": 10.0
    },
    "description": "The Andromeda Galaxy is on a collision course with our Milky Way and will merge in about 4.5 billion years.",
    "power": 200,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "cosmic_ray",
        "value": 1.0
      },
      {
        "type": "currencyPerSec",
        "currency": "stone",
        "value": 80.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "cosmic_ray",
        "value": 500.0
      }
    ]
  },
  {
    "id": "615",
    "name": "Triangulum Galaxy",
    "realm": 6,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "cosmic_ray",
      "amount": 10.0
    },
    "description": "The Triangulum Galaxy is the third-largest galaxy in our Local Group after Andromeda and the Milky Way.",
    "power": 200,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "stone",
        "value": 5000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "stone",
        "value": 1000000.0
      }
    ]
  },
  {
    "id": "616",
    "name": "Sagittarius A*",
    "realm": 6,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "cosmic_ray",
      "amount": 25.0
    },
    "description": "Sagittarius A* is the supermassive black hole at the center of our Milky Way galaxy.",
    "power": 500,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "cosmic_ray",
        "value": 10.0
      },
      {
        "type": "currencyPerSec",
        "currency": "cosmic_ray",
        "value": 1.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "stone",
        "value": 2.0
      }
    ]
  },
  {
    "id": "617",
    "name": "Messier 87 Black Hole",
    "realm": 6,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "cosmic_ray",
      "amount": 25.0
    },
    "description": "The M87 black hole was the first ever to be directly imaged by the Event Horizon Telescope in 2019.",
    "power": 500,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "cosmic_ray",
        "value": 5.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "stone",
        "value": 10000000.0
      }
    ]
  },
  {
    "id": "618",
    "name": "Quasar 3C 273",
    "realm": 6,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.5,
    "levelCost": {
      "currency": "cosmic_ray",
      "amount": 500.0
    },
    "description": "Quasar 3C 273 is one of the brightest objects in the universe and is powered by a supermassive black hole.",
    "power": 1000,
    "defense": 10,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "cosmic_ray",
        "value": 500.0
      },
      {
        "type": "currencyPerSec",
        "currency": "cosmic_ray",
        "value": 20.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "cosmic_ray",
        "value": 10.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "cosmic_ray",
        "value": 10.0
      }
    ]
  },
  {
    "id": "701",
    "name": "Mouse",
    "realm": 7,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "tooth",
      "amount": 5.0
    },
    "description": "A mouse's teeth never stop growing throughout its entire life.",
    "power": 3,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 1.0
      }
    ]
  },
  {
    "id": "702",
    "name": "Rat",
    "realm": 7,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "tooth",
      "amount": 5.0
    },
    "description": "Rats are so intelligent they can learn their names and come when called.",
    "power": 5,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "703",
    "name": "Rabbit",
    "realm": 7,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "tooth",
      "amount": 5.0
    },
    "description": "Rabbits' teeth grow up to 5 inches per year and must be constantly worn down.",
    "power": 3,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "704",
    "name": "Pixie",
    "realm": 7,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "tooth",
      "amount": 25.0
    },
    "description": "In folklore pixies were known for leading travelers astray in the wilderness.",
    "power": 3,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "tooth",
        "value": 2.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "pollen",
        "value": 10000.0
      },
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "pollen",
        "value": 200000.0
      }
    ]
  },
  {
    "id": "705",
    "name": "Fox",
    "realm": 7,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "tooth",
      "amount": 40.0
    },
    "description": "Foxes can hear rodents digging underground from nearly 40 feet away.",
    "power": 10,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "706",
    "name": "Wolf",
    "realm": 7,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "tooth",
      "amount": 40.0
    },
    "description": "Wolves can smell prey up to 1.5 miles away even in dense forests.",
    "power": 15,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "707",
    "name": "Bear",
    "realm": 7,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "tooth",
      "amount": 50.0
    },
    "description": "Bears can smell food from over 18 miles away and have better noses than bloodhounds.",
    "power": 150,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 5
        },
        "value": 50.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "value": 1000.0
      }
    ]
  },
  {
    "id": "708",
    "name": "Lion",
    "realm": 7,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "tooth",
      "amount": 50.0
    },
    "description": "A lion's roar can be heard from up to 5 miles away.",
    "power": 100,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 80.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 6
        },
        "value": 1.3
      }
    ]
  },
  {
    "id": "709",
    "name": "Leopard",
    "realm": 7,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "tooth",
      "amount": 50.0
    },
    "description": "Leopards can carry prey twice their weight up into trees, even full-grown antelopes.",
    "power": 100,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "710",
    "name": "Panther",
    "realm": 7,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "tooth",
      "amount": 25.0
    },
    "description": "Panthers actually aren't a separate species but are black variants of leopards or jaguars.",
    "power": 100,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "tooth",
        "value": 5.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "711",
    "name": "Tiger",
    "realm": 7,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "tooth",
      "amount": 50.0
    },
    "description": "Tigers have striped skin beneath their fur—not just striped fur.",
    "power": 200,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "712",
    "name": "Dire Wolf",
    "realm": 7,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "tooth",
      "amount": 50.0
    },
    "description": "Dire wolves were 25% larger than modern wolves and went extinct about 10000 years ago.",
    "power": 150,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 400.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "713",
    "name": "Griffin",
    "realm": 7,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "feather",
      "amount": 10.0
    },
    "description": "Griffins were believed to guard massive gold deposits in ancient mountains.",
    "power": 150,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 250.0
      },
      {
        "type": "currencyPerSec",
        "currency": "tooth",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "714",
    "name": "Unicorn",
    "realm": 7,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "tooth",
      "amount": 50.0
    },
    "description": "Unicorn horns were believed to purify water and neutralize poison in medieval times.",
    "power": 50,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "715",
    "name": "Pegasus",
    "realm": 7,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "feather",
      "amount": 10.0
    },
    "description": "In Greek mythology Pegasus was born from the blood of Medusa when Perseus beheaded her.",
    "power": 75,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "feather",
        "value": 10.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "stone",
        "value": 10000000.0
      }
    ]
  },
  {
    "id": "716",
    "name": "Centaur",
    "realm": 7,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "tooth",
      "amount": 50.0
    },
    "description": "Centaurs were exceptional astronomers in Greek mythology who taught humans about the stars.",
    "power": 100,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "717",
    "name": "Satyr",
    "realm": 7,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.0,
    "levelCost": {
      "currency": "tooth",
      "amount": 50.0
    },
    "description": "Satyrs were companions of Dionysus who could play panpipes so beautifully they could enchant anyone who heard.",
    "power": 100,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "tooth",
        "value": 40.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "fine"
      }
    ]
  },
  {
    "id": "718",
    "name": "Minotaur",
    "realm": 7,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "tooth",
      "amount": 50.0
    },
    "description": "The original Minotaur lived in a labyrinth designed by Daedalus that was so complex no one could escape.",
    "power": 300,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "719",
    "name": "Cerberus",
    "realm": 7,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "tooth",
      "amount": 25.0
    },
    "description": "Cerberus had three heads and a serpent for a tail guarding the gates of the Underworld.",
    "power": 300,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 1250.0
      },
      {
        "type": "currencyPerSec",
        "currency": "tooth",
        "value": 25.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "720",
    "name": "Basilisk",
    "realm": 7,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 10.0
    },
    "description": "Medieval legends claimed basilisks could kill with just a glance or breath.",
    "power": 250,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "rare"
      }
    ]
  },
  {
    "id": "721",
    "name": "Chimera",
    "realm": 7,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "tooth",
      "amount": 50.0
    },
    "description": "The Chimera had the head of a lion, body of a goat, and tail of a serpent—each representing past, present, and future.",
    "power": 400,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 5000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMinCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 27
        },
        "value": 270.0
      }
    ]
  },
  {
    "id": "722",
    "name": "Sphinx",
    "realm": 7,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "feather",
      "amount": 5.0
    },
    "description": "The Sphinx's famous riddle asked travelers \"What walks on four feet in the morning, two in the afternoon, and three at night?\"",
    "power": 200,
    "defense": 10,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 5000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "value": 25000.0
      }
    ]
  },
  {
    "id": "723",
    "name": "Hydra",
    "realm": 7,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.0,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 10.0
    },
    "description": "For each head cut from the Hydra two more would grow in its place.",
    "power": 400,
    "defense": 9,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 7500.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 9
        },
        "currency": "tooth",
        "value": 1000000.0
      }
    ]
  },
  {
    "id": "724",
    "name": "Cockatrice",
    "realm": 7,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 10.0
    },
    "description": "The cockatrice was believed to be born from a rooster's egg incubated by a serpent or toad.",
    "power": 200,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 10000.0
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "tooth",
        "value": 1.5
      }
    ]
  },
  {
    "id": "725",
    "name": "Tarrasque",
    "realm": 7,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 5.0
    },
    "description": "The Tarrasque was a legendary dragon-like creature from Provence, France that could only be tamed by a saint.",
    "power": 300,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 5000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "tooth",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "tooth",
        "value": 250000.0
      },
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "tooth",
        "value": 20000.0
      }
    ]
  },
  {
    "id": "726",
    "name": "Chrysomallos",
    "realm": 7,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "tooth",
      "amount": 25.0
    },
    "description": "Chrysomallos was the golden-fleeced ram in Greek mythology that could fly and speak human language.",
    "power": 100,
    "defense": 10,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 25000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "rune",
        "value": 25000.0
      }
    ]
  },
  {
    "id": "727",
    "name": "Manticore",
    "realm": 7,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "tooth",
      "amount": 25.0
    },
    "description": "The manticore had the body of a lion, face of a human, and tail of a scorpion with poisonous spines.",
    "power": 500,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 25000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "tooth",
        "value": 2.0
      }
    ]
  },
  {
    "id": "728",
    "name": "Wyvern",
    "realm": 7,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.5,
    "levelCost": {
      "currency": "tooth",
      "amount": 10.0
    },
    "description": "Unlike dragons, wyverns have only two legs and use their wings as forelegs when on the ground.",
    "power": 400,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "tooth",
        "value": 150.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "tooth",
        "value": 2.0
      }
    ]
  },
  {
    "id": "729",
    "name": "Ancient Dragon",
    "realm": 7,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 10.0
    },
    "description": "Ancient dragons were believed to be as old as the world itself and repositories of all knowledge.",
    "power": 500,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 25000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "pearl",
        "value": 2.0
      }
    ]
  },
  {
    "id": "730",
    "name": "Leviathan",
    "realm": 7,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "pearl",
      "amount": 10.0
    },
    "description": "The Leviathan is described in the Bible as a massive sea monster that no human could subdue.",
    "power": 500,
    "defense": 10,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pearl",
        "value": 20.0
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "coral",
        "value": 5000000.0
      }
    ]
  },
  {
    "id": "731",
    "name": "Kraken",
    "realm": 7,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "pearl",
      "amount": 25.0
    },
    "description": "Sailors once believed the Kraken could create whirlpools that could sink entire fleets of ships.",
    "power": 600,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "royal_jelly",
        "value": 20.0
      },
      {
        "type": "currencyPerSec",
        "currency": "royal_jelly",
        "value": 5.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "pearl",
        "value": 25000.0
      }
    ]
  },
  {
    "id": "732",
    "name": "Ziz",
    "realm": 7,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "feather",
      "amount": 25.0
    },
    "description": "In Jewish mythology, Ziz was a massive bird so large its wingspan could block out the sun.",
    "power": 500,
    "defense": 10,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "feather",
        "value": 100.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "feather",
        "value": 2.0
      }
    ]
  },
  {
    "id": "733",
    "name": "Quetzalcoatl",
    "realm": 7,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.5,
    "levelCost": {
      "currency": "feather",
      "amount": 25.0
    },
    "description": "Quetzalcoatl, the \"Feathered Serpent\", was worshipped as a creator deity in Mesoamerican cultures.",
    "power": 750,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "tooth",
        "value": 250000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "royal_jelly",
        "value": 20.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "royal_jelly",
        "value": 2.0
      }
    ]
  },
  {
    "id": "734",
    "name": "Fenrir",
    "realm": 7,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "tooth",
      "amount": 10.0
    },
    "description": "In Norse mythology, Fenrir was a monstrous wolf destined to kill Odin during Ragnarök.",
    "power": 750,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "royal_jelly",
        "value": 50.0
      },
      {
        "type": "currencyPerSec",
        "currency": "tooth",
        "value": 500.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "tooth",
        "value": 3.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "spirit",
        "value": 2.0
      }
    ]
  },
  {
    "id": "735",
    "name": "Jörmungandr",
    "realm": 7,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "pearl",
      "amount": 10.0
    },
    "description": "Jörmungandr was a sea serpent so large it encircled the entire world and grasped its own tail.",
    "power": 600,
    "defense": 10,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "royal_jelly",
        "value": 100.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "pearl",
        "value": 2.0
      }
    ]
  },
  {
    "id": "736",
    "name": "Bahamut",
    "realm": 7,
    "locked": false,
    "rarity": "exotic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.0,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 10.0
    },
    "description": "In Arabian mythology, Bahamut was a massive fish that supported the world on its back.",
    "power": 2500,
    "defense": 10,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "royal_jelly",
        "value": 1000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "royal_jelly",
        "value": 100.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "legend"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "legend"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "royal_jelly",
        "value": 10.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "currency": "royal_jelly",
        "value": 10.0
      }
    ]
  },
  {
    "id": "801",
    "name": "IdleOn",
    "realm": 8,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "A pay-to-win idle MMO that's more grind than game.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "802",
    "name": "AdVenture Capitalist",
    "realm": 8,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "The OG tap-to-profit simulator, with zero interesting mechanics.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "803",
    "name": "Adventure Communist",
    "realm": 8,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "A blatant reskin of its predecessor with no new mechanics added.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "804",
    "name": "Tap Tycoon",
    "realm": 8,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coin",
      "amount": 15.0
    },
    "description": "Tycoon mechanics with a side of tapping. Good for falling asleep.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "805",
    "name": "Idle Miner Tycoon",
    "realm": 8,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coin",
      "amount": 15.0
    },
    "description": "Digging for profit... endlessly.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "806",
    "name": "Bitcoin Billionaire",
    "realm": 8,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coin",
      "amount": 25.0
    },
    "description": "Mine coins, time travel, repeat. How long before you uninstall?",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "807",
    "name": "Make It Rain",
    "realm": 8,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coin",
      "amount": 25.0
    },
    "description": "Just flick your screen and get rich! Pure nonsense.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "808",
    "name": "Idle Tap Zoo",
    "realm": 8,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coin",
      "amount": 25.0
    },
    "description": "Collect adorable animals while doing nothing. And never feel like you did anything.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "809",
    "name": "Banana",
    "realm": 8,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.0,
    "levelCost": {
      "currency": "coin",
      "amount": 30.0
    },
    "description": "You don’t know why you downloaded it. But you did.",
    "power": 1,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 1.0
      },
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "stone",
        "value": 1.0
      },
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "stone",
        "value": 1.0
      }
    ]
  },
  {
    "id": "810",
    "name": "Firestone Online",
    "realm": 8,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coin",
      "amount": 20.0
    },
    "description": "Basic fantasy idle with light RPG elements.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "811",
    "name": "Idle Heroes",
    "realm": 8,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coin",
      "amount": 20.0
    },
    "description": "Collection-based idle RPG with gacha elements and paywalls.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "812",
    "name": "Idle Apocalypse",
    "realm": 8,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coin",
      "amount": 20.0
    },
    "description": "Post-apocalyptic tower-themed idle. An attempt was made.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "813",
    "name": "Almost A Hero",
    "realm": 8,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coin",
      "amount": 50.0
    },
    "description": "Roguelike mechanics meet idle hero training. Actually fun until paywalls.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 2.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMinCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "value": 200.0
      }
    ]
  },
  {
    "id": "814",
    "name": "Idle Balls",
    "realm": 8,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coin",
      "amount": 50.0
    },
    "description": "Physics-based ball dropper meets idle scaling.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 2.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "815",
    "name": "Exponential Idle",
    "realm": 8,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coin",
      "amount": 25.0
    },
    "description": "Math-driven idle focused on equation growth.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 20.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 5
        },
        "value": 50.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "value": 1500.0
      }
    ]
  },
  {
    "id": "816",
    "name": "Idle Skilling",
    "realm": 8,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coin",
      "amount": 25.0
    },
    "description": "Multi-layered idle with lots of systems. Oddly disjointed.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 20.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "817",
    "name": "Mr Mine",
    "realm": 8,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coin",
      "amount": 50.0
    },
    "description": "Dig and upgrade through oddities underground. Basic stuff.",
    "power": 2,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 20.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "818",
    "name": "Kittens Game",
    "realm": 8,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "coin",
      "amount": 25.0
    },
    "description": "Civ-building with deep resource strategy.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "819",
    "name": "A Dark Room",
    "realm": 8,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "coin",
      "amount": 25.0
    },
    "description": "Narrative-driven idle with eerie tone.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "820",
    "name": "Universal Paperclips",
    "realm": 8,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "coin",
      "amount": 25.0
    },
    "description": "From paperclip to AI dominance.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "821",
    "name": "Cell to Singularity",
    "realm": 8,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coin",
      "amount": 20.0
    },
    "description": "Evolution from DNA to tech singularity.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 5.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 6
        },
        "value": 1.3
      }
    ]
  },
  {
    "id": "822",
    "name": "Realm Grinder",
    "realm": 8,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coin",
      "amount": 20.0
    },
    "description": "Align with factions and go deeper in this snoozefest.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 5.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "823",
    "name": "Tap Titans",
    "realm": 8,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coin",
      "amount": 25.0
    },
    "description": "Flashy clicker with sword-wielding heroes.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 100.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "824",
    "name": "Download RAM Idle",
    "realm": 8,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coin",
      "amount": 25.0
    },
    "description": "Absurdist idle about downloading RAM.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 10.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "825",
    "name": "Leafblower Revolution",
    "realm": 8,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "Blow leaves and ascend. Yes, really.",
    "power": 3,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 80.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "826",
    "name": "Increlution",
    "realm": 8,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "Strategic idle with evolutionary theme.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "coin",
        "value": 50000.0
      }
    ]
  },
  {
    "id": "827",
    "name": "Melvor Idle",
    "realm": 8,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "RuneScape-style idle with stats and skills.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "828",
    "name": "Idle Wizard",
    "realm": 8,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "Choose magic paths, climb spell trees.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "fine"
      }
    ]
  },
  {
    "id": "829",
    "name": "Midnight Idle",
    "realm": 8,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "Darkness and rituals in idle form.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "coin",
        "value": 2.0
      }
    ]
  },
  {
    "id": "830",
    "name": "Time Clickers",
    "realm": 8,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coin",
      "amount": 20.0
    },
    "description": "FPS meets idle with color-coded chaos.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "coin",
        "value": 2000.0
      }
    ]
  },
  {
    "id": "831",
    "name": "Idle Breakout",
    "realm": 8,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coin",
      "amount": 20.0
    },
    "description": "Brick-breaking arcade merges with idle.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "832",
    "name": "What Lurks Below",
    "realm": 8,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "Horror-themed idle with deep digging.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 20.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "833",
    "name": "Cosmic Collection",
    "realm": 8,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "Gameception Error: Maximum Recursion Depth Exceeded",
    "power": 5,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 500.0
      },
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 20.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "flatExtraMerchantRarityScaling",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "value": 0.1
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "value": 1000000.0
      }
    ]
  },
  {
    "id": "834",
    "name": "Idle Slayer",
    "realm": 8,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "coin",
      "amount": 15.0
    },
    "description": "Platforming and idle? It works.",
    "power": 20,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "currency": "feather",
        "value": 2.0
      }
    ]
  },
  {
    "id": "835",
    "name": "Swarm Simulator",
    "realm": 8,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "coin",
      "amount": 15.0
    },
    "description": "Swarm up. Multiply. Exponentiate.",
    "power": 10,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "pollen",
        "value": 30000.0
      },
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "currency": "royal_jelly",
        "value": 4.0
      }
    ]
  },
  {
    "id": "836",
    "name": "Farmer Against Potatoes",
    "realm": 8,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coin",
      "amount": 20.0
    },
    "description": "It’s weird. It’s good.",
    "power": 10,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 25.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "value": 1.5
      }
    ]
  },
  {
    "id": "837",
    "name": "Synergism",
    "realm": 8,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coin",
      "amount": 50.0
    },
    "description": "Math-heavy idle with corruption.",
    "power": 10,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 2000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "838",
    "name": "Idle Loops",
    "realm": 8,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.0,
    "levelCost": {
      "currency": "coin",
      "amount": 40.0
    },
    "description": "Time loop idle built around code.",
    "power": 10,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 40.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "839",
    "name": "Shark Incremental",
    "realm": 8,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.0,
    "levelCost": {
      "currency": "coin",
      "amount": 40.0
    },
    "description": "An idle empire under the sea.",
    "power": 20,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 40.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "coral",
        "value": 1.5
      }
    ]
  },
  {
    "id": "840",
    "name": "Egg Inc.",
    "realm": 8,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "Build the chicken egg multiverse.",
    "power": 20,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 5000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 1,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 50
        },
        "currency": "egg",
        "value": 5.0
      }
    ]
  },
  {
    "id": "841",
    "name": "Trimps",
    "realm": 8,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coin",
      "amount": 25.0
    },
    "description": "Train, fight, gather. Repeat.",
    "power": 20,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 5000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 35
        },
        "currency": "coin",
        "value": 2.0
      }
    ]
  },
  {
    "id": "842",
    "name": "Cookie Clicker",
    "realm": 8,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coin",
      "amount": 50.0
    },
    "description": "The cookie godfather of all idles.",
    "power": 20,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 10000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 100.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 18
        },
        "currency": "coin",
        "value": 3.0
      }
    ]
  },
  {
    "id": "843",
    "name": "Dodecadragons",
    "realm": 8,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "12 dimensions of math and pain.",
    "power": 150,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 25000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 45
        },
        "currency": "tooth",
        "value": 5.0
      }
    ]
  },
  {
    "id": "844",
    "name": "Idle Research",
    "realm": 8,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "Scientific breakthrough simulator.",
    "power": 50,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 25000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 45
        },
        "currency": "coral",
        "value": 5.0
      }
    ]
  },
  {
    "id": "845",
    "name": "Clicker Heroes",
    "realm": 8,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.5,
    "levelCost": {
      "currency": "coin",
      "amount": 30.0
    },
    "description": "Classic monster-clicking progression.",
    "power": 100,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 150.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "currency": "pollen",
        "value": 5.0
      }
    ]
  },
  {
    "id": "846",
    "name": "Antimatter Dimensions",
    "realm": 8,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "Infinite layers. Infinite resets.",
    "power": 250,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 250000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "legend"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 50
        },
        "currency": "crystal",
        "value": 5.0
      }
    ]
  },
  {
    "id": "847",
    "name": "Unnamed Space Idle",
    "realm": 8,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coin",
      "amount": 25.0
    },
    "description": "Deep space meets deep systems.",
    "power": 250,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "currency": "pearl",
        "value": 5.0
      }
    ]
  },
  {
    "id": "848",
    "name": "NGU Idle",
    "realm": 8,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.5,
    "levelCost": {
      "currency": "coin",
      "amount": 30.0
    },
    "description": "Hilarious and complex in equal parts.",
    "power": 200,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 350000.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "legend"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "currency": "feather",
        "value": 5.0
      }
    ]
  },
  {
    "id": "849",
    "name": "Degens Adventure",
    "realm": 8,
    "locked": false,
    "rarity": "exotic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coin",
      "amount": 20.0
    },
    "description": "Strategic roguelite meets incremental.",
    "power": 1000,
    "defense": 9,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 5000000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 1500.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "legend"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "mythic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "legend"
      }
    ],
    "specialEffects": [
      {
        "type": "allGeneratorMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "value": 5.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "coin",
        "value": 10.0
      }
    ]
  },
  {
    "id": "850",
    "name": "Bitburner",
    "realm": 8,
    "locked": false,
    "rarity": "exotic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "Hack and code your way through idle.",
    "power": 500,
    "defense": 9,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 10000000.0
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "legend"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "mythic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "allGeneratorMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "value": 5.0
      },
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "value": 5.0
      }
    ]
  },
  {
    "id": "851",
    "name": "Degens Idle",
    "realm": 8,
    "locked": false,
    "rarity": "divine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.0,
    "levelCost": {
      "currency": "coin",
      "amount": 10.0
    },
    "description": "The pinnacle of incremental design.",
    "power": 2000,
    "defense": 15,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coin",
        "value": 100000000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "coin",
        "value": 10000.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "legend"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "mythic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "allGeneratorMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "value": 100.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 50
        },
        "value": 10000000.0
      }
    ]
  },
  {
    "id": "901",
    "name": "Tooth Fairy",
    "realm": 9,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "spirit",
      "amount": 5.0
    },
    "description": "Slips in at night to swap your teeth for cash.",
    "power": 5,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "spirit",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 22
        },
        "currency": "tooth",
        "value": 1.5
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 44
        },
        "currency": "tooth",
        "value": 2.0
      }
    ]
  },
  {
    "id": "902",
    "name": "Moaning Myrtle",
    "realm": 9,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "spirit",
      "amount": 5.0
    },
    "description": "Hogwarts’ most melodramatic ghost, forever haunting the girls’ bathroom.",
    "power": 5,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "spirit",
        "value": 2.0
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 11
        },
        "currency": "coral",
        "value": 2.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 22
        },
        "currency": "coral",
        "value": 2.0
      }
    ]
  },
  {
    "id": "903",
    "name": "Danny Phantom",
    "realm": 9,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "spirit",
      "amount": 5.0
    },
    "description": "Half-ghost teen who fights spectral threats while juggling high school.",
    "power": 10,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "spirit",
        "value": 1.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 22
        },
        "currency": "crystal",
        "value": 1.5
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 33
        },
        "currency": "crystal",
        "value": 2.0
      }
    ]
  },
  {
    "id": "904",
    "name": "Boo",
    "realm": 9,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "spirit",
      "amount": 25.0
    },
    "description": "These shy little ghosts cover their faces when looked at.",
    "power": 5,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "spirit",
        "value": 20.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 11
        },
        "currency": "egg",
        "value": 100000.0
      },
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 22
        },
        "currency": "egg",
        "value": 1500.0
      }
    ]
  },
  {
    "id": "905",
    "name": "Beetlejuice",
    "realm": 9,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "spirit",
      "amount": 25.0
    },
    "description": "Say his name three times, and chaos follows. A trickster spirit with flair.",
    "power": 10,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "spirit",
        "value": 2.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 22
        },
        "currency": "pollen",
        "value": 2200000.0
      },
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 33
        },
        "currency": "pollen",
        "value": 330000.0
      }
    ]
  },
  {
    "id": "906",
    "name": "Casper",
    "realm": 9,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "spirit",
      "amount": 100.0
    },
    "description": "The friendliest ghost you’ll ever meet, always trying to make new human pals.",
    "power": 5,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "spirit",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 11
        },
        "value": 1.4
      },
      {
        "type": "flatMinCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 33
        },
        "value": 3333.0
      }
    ]
  },
  {
    "id": "907",
    "name": "Banshee",
    "realm": 9,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "spirit",
      "amount": 100.0
    },
    "description": "Her scream foretells death. Originates from Irish folklore and ancient tales of mourning.",
    "power": 20,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "spirit",
        "value": 10.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 11
        },
        "currency": "rune",
        "value": 2500.0
      },
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 22
        },
        "currency": "royal_jelly",
        "value": 1000.0
      }
    ]
  },
  {
    "id": "908",
    "name": "La Llorona",
    "realm": 9,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "spirit",
      "amount": 100.0
    },
    "description": "The “Weeping Woman” of Latin American folklore, doomed to search for her lost children.",
    "power": 20,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "spirit",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 22
        },
        "value": 1000.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 44
        },
        "value": 10000.0
      }
    ]
  },
  {
    "id": "909",
    "name": "Flying Dutchman",
    "realm": 9,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "spirit",
      "amount": 100.0
    },
    "description": "A ghost ship captain cursed to sail the seas forever.",
    "power": 25,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "spirit",
        "value": 15.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "allGeneratorMultiplier",
        "requirement": {
          "type": "level",
          "amount": 11
        },
        "value": 1.5
      },
      {
        "type": "flatCooldownDivider",
        "requirement": {
          "type": "level",
          "amount": 22
        },
        "value": 2.0
      }
    ]
  },
  {
    "id": "910",
    "name": "King Boo",
    "realm": 9,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "spirit",
      "amount": 100.0
    },
    "description": "Ruler of the Boos and Luigi’s ultimate haunt. Smiles while plotting mischief.",
    "power": 50,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "spirit",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 22
        },
        "currency": "egg",
        "value": 500000.0
      },
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 44
        },
        "currency": "egg",
        "value": 44000.0
      }
    ]
  },
  {
    "id": "911",
    "name": "Pennywise",
    "realm": 9,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "spirit",
      "amount": 100.0
    },
    "description": "Not just a clown - he’s a shapeshifting cosmic predator feeding on fear.",
    "power": 150,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "spirit",
        "value": 2000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "spirit",
        "value": 50.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 11
        },
        "currency": "coin",
        "value": 25000.0
      },
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 22
        },
        "currency": "coin",
        "value": 220000.0
      }
    ]
  },
  {
    "id": "912",
    "name": "Valkyrie",
    "realm": 9,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.0,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 5.0
    },
    "description": "Norse warrior spirits who guide fallen heroes to Valhalla.",
    "power": 500,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "royal_jelly",
        "value": 30.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 22
        },
        "currency": "stone",
        "value": 5.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 33
        },
        "currency": "stone",
        "value": 3.0
      }
    ]
  },
  {
    "id": "913",
    "name": "No-Face",
    "realm": 9,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "spirit",
      "amount": 5.0
    },
    "description": "Starts silent, ends dangerous. Reflects the desires of those around him.",
    "power": 250,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "royal_jelly",
        "value": 20.0
      },
      {
        "type": "currencyPerSec",
        "currency": "spirit",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 22
        },
        "value": 5000.0
      },
      {
        "type": "flatMinCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 33
        },
        "value": 5000.0
      }
    ]
  },
  {
    "id": "914",
    "name": "Ryuk",
    "realm": 9,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "spirit",
      "amount": 10.0
    },
    "description": "An apple-loving Shinigami who dropped a Death Note just for fun.",
    "power": 500,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "spirit",
        "value": 50000.0
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 11
        },
        "currency": "royal_jelly",
        "value": 2.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 22
        },
        "currency": "royal_jelly",
        "value": 3.0
      }
    ]
  },
  {
    "id": "915",
    "name": "Oni",
    "realm": 9,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.5,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 10.0
    },
    "description": "Horned demons from Japanese folklore, often wielding massive clubs and wild grins.",
    "power": 500,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "royal_jelly",
        "value": 30.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 11
        },
        "currency": "pearl",
        "value": 2.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 33
        },
        "currency": "pearl",
        "value": 3.0
      }
    ]
  },
  {
    "id": "916",
    "name": "Anubis",
    "realm": 9,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 15.0
    },
    "description": "Ancient Egyptian god of embalming and the dead.",
    "power": 1500,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "royal_jelly",
        "value": 200.0
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 11
        },
        "currency": "feather",
        "value": 2.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 22
        },
        "currency": "feather",
        "value": 3.0
      }
    ]
  },
  {
    "id": "917",
    "name": "Spectre",
    "realm": 9,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "spirit",
      "amount": 15.0
    },
    "description": "A ghostly wraith from Dota 2, known for vengeance and spreading dread across the map.",
    "power": 1500,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "spirit",
        "value": 250000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 33
        },
        "currency": "cosmic_ray",
        "value": 2.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 55
        },
        "currency": "cosmic_ray",
        "value": 3.0
      }
    ]
  },
  {
    "id": "918",
    "name": "Gandalf the White",
    "realm": 9,
    "locked": false,
    "rarity": "exotic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.0,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 20.0
    },
    "description": "Returned from death more radiant and powerful, a true guide for Middle-earth.",
    "power": 2500,
    "defense": 15,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "spirit",
        "value": 8000000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "royal_jelly",
        "value": 100.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "legend"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "legend"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "mythic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 11
        },
        "currency": "coin",
        "value": 5.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 33
        },
        "currency": "coin",
        "value": 100.0
      }
    ]
  },
  {
    "id": "1001",
    "name": "Rusty Spoon",
    "realm": 10,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "coral",
      "amount": 1000.0
    },
    "description": "It was probably used for cereal this morning.",
    "power": 5,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "1002",
    "name": "Broken Bottle",
    "realm": 10,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "pollen",
      "amount": 1000.0
    },
    "description": "Perfect for bar fights and regrettable decisions.",
    "power": 10,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "1003",
    "name": "Worn Slingshot",
    "realm": 10,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "egg",
      "amount": 1000.0
    },
    "description": "Still has a pebble stuck from 1993.",
    "power": 10,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 25.0
      },
      {
        "type": "currencyPerSec",
        "currency": "egg",
        "value": 2.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCooldownDivider",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "value": 3.0
      }
    ]
  },
  {
    "id": "1004",
    "name": "Stick",
    "realm": 10,
    "locked": false,
    "rarity": "junk",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "crystal",
      "amount": 1000.0
    },
    "description": "Straight from the ground—DIY level: toddler.",
    "power": 10,
    "defense": 1,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 25.0
      },
      {
        "type": "currencyPerSec",
        "currency": "crystal",
        "value": 2.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "1005",
    "name": "Pocket Knife",
    "realm": 10,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "coral",
      "amount": 1000.0
    },
    "description": "Reliable, foldable, and just edgy enough.",
    "power": 15,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 500.0
      },
      {
        "type": "currencyPerSec",
        "currency": "coral",
        "value": 10.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "value": 1.5
      }
    ]
  },
  {
    "id": "1006",
    "name": "Wooden Club",
    "realm": 10,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "pollen",
      "amount": 1000.0
    },
    "description": "A true caveman favorite.",
    "power": 15,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 250.0
      },
      {
        "type": "currencyPerSec",
        "currency": "pollen",
        "value": 5.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "1007",
    "name": "Pipe Wrench",
    "realm": 10,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "egg",
      "amount": 1000.0
    },
    "description": "Plumbing tool turned menace.",
    "power": 20,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 500.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMinCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "value": 1500.0
      }
    ]
  },
  {
    "id": "1008",
    "name": "Short Bow",
    "realm": 10,
    "locked": false,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "crystal",
      "amount": 1000.0
    },
    "description": "Perfect for squirrels or poor decisions.",
    "power": 20,
    "defense": 2,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 100.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      }
    ]
  },
  {
    "id": "1009",
    "name": "Crossbow",
    "realm": 10,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "coral",
      "amount": 1000.0
    },
    "description": "Because you watched too much 'Walking Dead'.",
    "power": 50,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 500.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMinCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "value": 300.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "value": 4000.0
      }
    ]
  },
  {
    "id": "1010",
    "name": "Machete",
    "realm": 10,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "pollen",
      "amount": 1000.0
    },
    "description": "Doubles as a jungle survival tool.",
    "power": 50,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 500.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      }
    ]
  },
  {
    "id": "1011",
    "name": "Throwing Star",
    "realm": 10,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "egg",
      "amount": 1000.0
    },
    "description": "Looks cooler than it performs.",
    "power": 10,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 750.0
      },
      {
        "type": "currencyPerSec",
        "currency": "egg",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "crystal",
        "value": 500000.0
      }
    ]
  },
  {
    "id": "1012",
    "name": "Tactical Axe",
    "realm": 10,
    "locked": false,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "crystal",
      "amount": 1000.0
    },
    "description": "The official weapon of doomsday preppers.",
    "power": 50,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 750.0
      },
      {
        "type": "currencyPerSec",
        "currency": "crystal",
        "value": 10.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "spirit",
        "value": 1.25
      }
    ]
  },
  {
    "id": "1013",
    "name": "Katana",
    "realm": 10,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.5,
    "levelCost": {
      "currency": "coral",
      "amount": 1000.0
    },
    "description": "Made with honor. Swings with grace.",
    "power": 100,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 10000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "coral",
        "value": 50.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "1014",
    "name": "Compound Bow",
    "realm": 10,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "pollen",
      "amount": 1000.0
    },
    "description": "Used by Olympic archers and apocalypse heroes.",
    "power": 100,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 3000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "pollen",
        "value": 25.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "fine"
      }
    ]
  },
  {
    "id": "1015",
    "name": "Revolver",
    "realm": 10,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.0,
    "levelCost": {
      "currency": "egg",
      "amount": 1000.0
    },
    "description": "Classic click and bang.",
    "power": 150,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 2500.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCooldownDivider",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "value": 1.0
      },
      {
        "type": "flatCooldownDivider",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "value": 4.0
      }
    ]
  },
  {
    "id": "1016",
    "name": "Sawed-Off Shotgun",
    "realm": 10,
    "locked": false,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "crystal",
      "amount": 1000.0
    },
    "description": "Up close and devastating.",
    "power": 150,
    "defense": 4,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 15000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 12
        },
        "currency": "spirit",
        "value": 1.2
      }
    ]
  },
  {
    "id": "1017",
    "name": "Sniper Rifle",
    "realm": 10,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coral",
      "amount": 1000.0
    },
    "description": "Because why miss from a mile away?",
    "power": 400,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 50000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "coral",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      }
    ]
  },
  {
    "id": "1018",
    "name": "Flamethrower",
    "realm": 10,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "pollen",
      "amount": 1000.0
    },
    "description": "Not OSHA-approved, but effective.",
    "power": 400,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 50000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "pollen",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "royal_jelly",
        "value": 5000.0
      }
    ]
  },
  {
    "id": "1019",
    "name": "Railgun",
    "realm": 10,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "egg",
      "amount": 1000.0
    },
    "description": "Launches slugs at hypersonic speeds.",
    "power": 600,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 50000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "egg",
        "value": 50.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerSecond",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "feather",
        "value": 5.0
      }
    ]
  },
  {
    "id": "1020",
    "name": "Lightsaber",
    "realm": 10,
    "locked": false,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 4.0,
    "levelCost": {
      "currency": "crystal",
      "amount": 1000.0
    },
    "description": "The go-to glowstick for Sith lords.",
    "power": 400,
    "defense": 5,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 100000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "crystal",
        "value": 100.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "fine"
      }
    ]
  },
  {
    "id": "1021",
    "name": "Plasma Rifle",
    "realm": 10,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "coral",
      "amount": 1000.0
    },
    "description": "Pew pew energy from the future.",
    "power": 1000,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "coral",
        "value": 250000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "coral",
        "value": 100.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "currency": "coral",
        "value": 2.0
      }
    ]
  },
  {
    "id": "1022",
    "name": "Gravity Hammer",
    "realm": 10,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "pollen",
      "amount": 1000.0
    },
    "description": "Hit things so hard gravity feels it.",
    "power": 1000,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pollen",
        "value": 500000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "pollen",
        "value": 200.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "currency": "pollen",
        "value": 2.0
      }
    ]
  },
  {
    "id": "1023",
    "name": "Omniblade",
    "realm": 10,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "egg",
      "amount": 1000.0
    },
    "description": "It’s a sword. It’s a hologram. It’s painful.",
    "power": 1000,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "egg",
        "value": 250000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "egg",
        "value": 100.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "currency": "egg",
        "value": 2.0
      }
    ]
  },
  {
    "id": "1024",
    "name": "Keyblade",
    "realm": 10,
    "locked": false,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "crystal",
      "amount": 1000.0
    },
    "description": "Unlocks hearts and combos.",
    "power": 500,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "crystal",
        "value": 250000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "crystal",
        "value": 100.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "value": 1.5
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "currency": "crystal",
        "value": 2.0
      }
    ]
  },
  {
    "id": "1025",
    "name": "Wolverine Claw",
    "realm": 10,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "rune",
      "amount": 1000.0
    },
    "description": "Snikt! Not dishwasher safe.",
    "power": 1000,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "rune",
        "value": 2000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "stone",
        "value": 3.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 45
        },
        "currency": "stone",
        "value": 2.0
      }
    ]
  },
  {
    "id": "1026",
    "name": "Mega Buster",
    "realm": 10,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "pearl",
      "amount": 1000.0
    },
    "description": "Arm cannon, ready to charge.",
    "power": 1000,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pearl",
        "value": 250.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "coral",
        "value": 3.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 45
        },
        "currency": "stone",
        "value": 2.0
      }
    ]
  },
  {
    "id": "1027",
    "name": "BFG 9000",
    "realm": 10,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 1.5,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 1000.0
    },
    "description": "The BFG stands for what you think.",
    "power": 1500,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "royal_jelly",
        "value": 200.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "pollen",
        "value": 3.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 45
        },
        "currency": "stone",
        "value": 2.0
      }
    ]
  },
  {
    "id": "1028",
    "name": "Monomolecular Dagger",
    "realm": 10,
    "locked": false,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.5,
    "levelCost": {
      "currency": "feather",
      "amount": 1000.0
    },
    "description": "So sharp it cuts molecules and egos.",
    "power": 1500,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "feather",
        "value": 200.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCurrencyPerPoke",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "spirit",
        "value": 50000.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "currency": "spirit",
        "value": 2.0
      }
    ]
  },
  {
    "id": "1029",
    "name": "Portal Gun",
    "realm": 10,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 1000.0
    },
    "description": "Open portals. Avoid traffic.",
    "power": 2500,
    "defense": 10,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "royal_jelly",
        "value": 5000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "royal_jelly",
        "value": 100.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "legend"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "royal_jelly",
        "value": 2.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 45
        },
        "currency": "royal_jelly",
        "value": 2.0
      }
    ]
  },
  {
    "id": "1030",
    "name": "The Master Sword",
    "realm": 10,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "rune",
      "amount": 1000.0
    },
    "description": "Sealed away for when evil returns.",
    "power": 2500,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "rune",
        "value": 25000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "rune",
        "value": 500.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "legend"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "rune",
        "value": 2.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 45
        },
        "currency": "rune",
        "value": 2.0
      }
    ]
  },
  {
    "id": "1031",
    "name": "Black Hole Cannon",
    "realm": 10,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 5.0,
    "levelCost": {
      "currency": "cosmic_ray",
      "amount": 1000.0
    },
    "description": "Fires tiny space doom.",
    "power": 2500,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "cosmic_ray",
        "value": 5000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "cosmic_ray",
        "value": 100.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "legend"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "cosmic_ray",
        "value": 2.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "cosmic_ray",
        "value": 2.0
      }
    ]
  },
  {
    "id": "1032",
    "name": "Golden Gun",
    "realm": 10,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "feather",
      "amount": 1000.0
    },
    "description": "One shot. One flex.",
    "power": 5000,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "feather",
        "value": 5000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "feather",
        "value": 100.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "legend"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "feather",
        "value": 2.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 45
        },
        "currency": "feather",
        "value": 2.0
      }
    ]
  },
  {
    "id": "1033",
    "name": "Zangetsu",
    "realm": 10,
    "locked": false,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.5,
    "levelCost": {
      "currency": "pearl",
      "amount": 1000.0
    },
    "description": "Wielded by Ichigo. Heavy. Sharp. Soulful.",
    "power": 5000,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "pearl",
        "value": 5000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "pearl",
        "value": 100.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 2,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "legend"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "legend"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 25
        },
        "currency": "pearl",
        "value": 2.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "currency": "pearl",
        "value": 2.0
      }
    ]
  },
  {
    "id": "1034",
    "name": "Paradox Blade",
    "realm": 10,
    "locked": false,
    "rarity": "exotic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 3.0,
    "levelCost": {
      "currency": "royal_jelly",
      "amount": 1000.0
    },
    "description": "Cannot be dodged, because it already hit you yesterday.",
    "power": 5000,
    "defense": 9,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "royal_jelly",
        "value": 200000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "royal_jelly",
        "value": 1000.0
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 3,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "legend"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "legend"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "mythic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "legend"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "flatCooldownDivider",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "value": 5.0
      },
      {
        "type": "flatExtraMerchantRarityScaling",
        "requirement": {
          "type": "level",
          "amount": 40
        },
        "value": 0.5
      }
    ]
  },
  {
    "id": "1035",
    "name": "Infinity Gauntlet",
    "realm": 10,
    "locked": false,
    "rarity": "exotic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "cosmic_ray",
      "amount": 1000.0
    },
    "description": "Snap responsibly.",
    "power": 7500,
    "defense": 9,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "cosmic_ray",
        "value": 200000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "cosmic_ray",
        "value": 1000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMinCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "value": 2500.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 50
        },
        "value": 100000.0
      }
    ]
  },
  {
    "id": "1036",
    "name": "Death Note",
    "realm": 10,
    "locked": false,
    "rarity": "exotic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 2.5,
    "levelCost": {
      "currency": "spirit",
      "amount": 1000.0
    },
    "description": "The human whose name is written in this note shall die.",
    "power": 10000,
    "defense": 9,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "spirit",
        "value": 25000000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "spirit",
        "value": 25000.0
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "legend"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "spirit",
        "value": 10.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 45
        },
        "currency": "spirit",
        "value": 3.0
      }
    ]
  },
  {
    "id": "1101",
    "name": "Tethys",
    "realm": 11,
    "locked": true,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Ancient sea Titaness and mother of all rivers and nymphs.",
    "power": 200,
    "defense": 3,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 1.0
      },
      {
        "type": "maxCardsPerPoke"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "stone",
        "value": 8.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "stone",
        "value": 15.0
      }
    ]
  },
  {
    "id": "1102",
    "name": "Hestia",
    "realm": 11,
    "locked": true,
    "rarity": "basic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Goddess of the hearth whose eternal flame kept Olympus at peace.",
    "power": 200,
    "defense": 6,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 1.0
      },
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 1.0
      },
      {
        "type": "maxCardsPerPoke"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "coral",
        "value": 8.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "coral",
        "value": 15.0
      }
    ]
  },
  {
    "id": "1103",
    "name": "Briareus",
    "realm": 11,
    "locked": true,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Hundred-armed giant who hurled rocks faster than Zeus could blink.",
    "power": 300,
    "defense": 7,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 10.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "pollen",
        "value": 8.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "pollen",
        "value": 15.0
      }
    ]
  },
  {
    "id": "1104",
    "name": "Erebus",
    "realm": 11,
    "locked": true,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "God of deep darkness and shadow who helped birth daylight.",
    "power": 300,
    "defense": 8,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 2.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "egg",
        "value": 8.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "egg",
        "value": 15.0
      }
    ]
  },
  {
    "id": "1105",
    "name": "Eros",
    "realm": 11,
    "locked": true,
    "rarity": "decent",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Primordial love god who could make even Zeus fall hopelessly in love.",
    "power": 300,
    "defense": 9,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 10.0
      },
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 2.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "crystal",
        "value": 8.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "crystal",
        "value": 15.0
      }
    ]
  },
  {
    "id": "1106",
    "name": "Mnemosyne",
    "realm": 11,
    "locked": true,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Memory goddess who birthed the nine Muses after sleeping with Zeus.",
    "power": 500,
    "defense": 10,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 50.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 4,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "tooth",
        "value": 8.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "tooth",
        "value": 15.0
      }
    ]
  },
  {
    "id": "1107",
    "name": "Iapetus",
    "realm": 11,
    "locked": true,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Titan father of Prometheus, Atlas, and other key players in human fate.",
    "power": 500,
    "defense": 12,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 50.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "coin",
        "value": 8.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "coin",
        "value": 15.0
      }
    ]
  },
  {
    "id": "1108",
    "name": "Hyperion",
    "realm": 11,
    "locked": true,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Titan of light and father of the sun, moon, and dawn.",
    "power": 500,
    "defense": 15,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 5.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "spirit",
        "value": 8.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "spirit",
        "value": 15.0
      }
    ]
  },
  {
    "id": "1109",
    "name": "Themis",
    "realm": 11,
    "locked": true,
    "rarity": "fine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Goddess of divine law who warned Zeus not to marry Thetis.",
    "power": 500,
    "defense": 18,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 50.0
      },
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 5.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "rune",
        "value": 8.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "rune",
        "value": 15.0
      }
    ]
  },
  {
    "id": "1110",
    "name": "Oceanus",
    "realm": 11,
    "locked": true,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "World-river Titan who fathered thousands of water spirits.",
    "power": 1000,
    "defense": 20,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 250.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "pearl",
        "value": 8.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "pearl",
        "value": 15.0
      }
    ]
  },
  {
    "id": "1111",
    "name": "Rhea",
    "realm": 11,
    "locked": true,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Mother of Olympians who tricked Cronus by feeding him a rock baby.",
    "power": 1000,
    "defense": 25,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 250.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "royal_jelly",
        "value": 8.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "royal_jelly",
        "value": 15.0
      }
    ]
  },
  {
    "id": "1112",
    "name": "Prometheus",
    "realm": 11,
    "locked": true,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Titan who gave fire to humans and paid with eternal liver-munching.",
    "power": 1000,
    "defense": 30,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 10.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "feather",
        "value": 8.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "feather",
        "value": 15.0
      }
    ]
  },
  {
    "id": "1113",
    "name": "Atlas",
    "realm": 11,
    "locked": true,
    "rarity": "rare",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Titan punished to hold up the sky on his shoulders forever.",
    "power": 1000,
    "defense": 40,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 250.0
      },
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 10.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "fine"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "cosmic_ray",
        "value": 8.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "cosmic_ray",
        "value": 15.0
      }
    ]
  },
  {
    "id": "1114",
    "name": "Persephone",
    "realm": 11,
    "locked": true,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Queen of the Underworld whose seasonal visits cause spring and winter.",
    "power": 2000,
    "defense": 45,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 1000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "currency": "zeal",
        "value": 8.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "zeal",
        "value": 3.0
      }
    ]
  },
  {
    "id": "1115",
    "name": "Dionysus",
    "realm": 11,
    "locked": true,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Wine god who could drive entire cities mad and once killed a Giant with a stick.",
    "power": 2000,
    "defense": 50,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 1000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "value": 2.0
      },
      {
        "type": "merchantPriceDivider",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "value": 3.0
      }
    ]
  },
  {
    "id": "1116",
    "name": "Aphrodite",
    "realm": 11,
    "locked": true,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Goddess of love whose beauty started the Trojan War.",
    "power": 2000,
    "defense": 70,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 1000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "value": 500000.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "value": 1500000.0
      }
    ]
  },
  {
    "id": "1117",
    "name": "Hephaestus",
    "realm": 11,
    "locked": true,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Crippled smith who forged Zeus’s thunderbolts and golden traps.",
    "power": 2000,
    "defense": 90,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 50.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "flatMinCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "value": 50000.0
      },
      {
        "type": "flatMinCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "value": 150000.0
      }
    ]
  },
  {
    "id": "1118",
    "name": "Hermes",
    "realm": 11,
    "locked": true,
    "rarity": "epic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Trickster and messenger god who once stole Apollo’s cattle as a baby.",
    "power": 2000,
    "defense": 100,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 1000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 50.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "allGeneratorMultiplier",
        "requirement": {
          "type": "level",
          "amount": 8
        },
        "value": 5.0
      },
      {
        "type": "allGeneratorMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "value": 5.0
      }
    ]
  },
  {
    "id": "1119",
    "name": "Ares",
    "realm": 11,
    "locked": true,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "God of war who loved bloodshed but kept getting outsmarted by Athena.",
    "power": 5000,
    "defense": 120,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 5000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "zeal",
        "value": 1.5
      },
      {
        "type": "flatCooldownDivider",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "value": 25.0
      }
    ]
  },
  {
    "id": "1120",
    "name": "Artemis",
    "realm": 11,
    "locked": true,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Moon goddess and huntress who turned a peeping hunter into a deer.",
    "power": 5000,
    "defense": 150,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 5000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "legend"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "zeal",
        "value": 1.5
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "stone",
        "value": 20.0
      }
    ]
  },
  {
    "id": "1121",
    "name": "Hecate",
    "realm": 11,
    "locked": true,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Titaness of magic and ghosts who was honored by Zeus and killed Giants with fire.",
    "power": 5000,
    "defense": 200,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 5000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "zeal",
        "value": 1.5
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "coral",
        "value": 20.0
      }
    ]
  },
  {
    "id": "1122",
    "name": "Helios",
    "realm": 11,
    "locked": true,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "The original sun god who could literally see everything.",
    "power": 5000,
    "defense": 250,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 250.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "zeal",
        "value": 1.5
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "pollen",
        "value": 20.0
      }
    ]
  },
  {
    "id": "1123",
    "name": "Apollo",
    "realm": 11,
    "locked": true,
    "rarity": "legend",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Archer god who killed a giant python and ran the best oracle in the world.",
    "power": 5000,
    "defense": 300,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 5000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 250.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 10
        },
        "currency": "zeal",
        "value": 1.5
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 20
        },
        "currency": "egg",
        "value": 20.0
      }
    ]
  },
  {
    "id": "1124",
    "name": "Demeter",
    "realm": 11,
    "locked": true,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Goddess of harvest whose grief once caused global famine.",
    "power": 10000,
    "defense": 350,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 25000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 12
        },
        "currency": "zeal",
        "value": 2.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 24
        },
        "currency": "crystal",
        "value": 24.0
      }
    ]
  },
  {
    "id": "1125",
    "name": "Athena",
    "realm": 11,
    "locked": true,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Warrior goddess who sprang fully armed from Zeus’s head and beat Giants solo.",
    "power": 10000,
    "defense": 400,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 25000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "legend"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 12
        },
        "currency": "zeal",
        "value": 2.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 24
        },
        "currency": "tooth",
        "value": 24.0
      }
    ]
  },
  {
    "id": "1126",
    "name": "Hera",
    "realm": 11,
    "locked": true,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Queen of the gods who could manipulate Olympus through cunning alone.",
    "power": 10000,
    "defense": 450,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 25000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 12
        },
        "currency": "zeal",
        "value": 2.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 24
        },
        "currency": "coin",
        "value": 24.0
      }
    ]
  },
  {
    "id": "1127",
    "name": "Hades",
    "realm": 11,
    "locked": true,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Underworld ruler with a helmet of invisibility and all the dead as subjects.",
    "power": 10000,
    "defense": 500,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 1000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 12
        },
        "currency": "zeal",
        "value": 2.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 24
        },
        "currency": "spirit",
        "value": 24.0
      }
    ]
  },
  {
    "id": "1128",
    "name": "Poseidon",
    "realm": 11,
    "locked": true,
    "rarity": "mythic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Earth-shaking sea god who created horses and caused earthquakes with his trident.",
    "power": 10000,
    "defense": 600,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 25000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 1000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 12
        },
        "currency": "zeal",
        "value": 2.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 24
        },
        "currency": "rune",
        "value": 24.0
      }
    ]
  },
  {
    "id": "1129",
    "name": "Uranus",
    "realm": 11,
    "locked": true,
    "rarity": "exotic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Sky god castrated by his own son, which kicked off a cosmic power struggle.",
    "power": 50000,
    "defense": 700,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 250000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "legend"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "zeal",
        "value": 3.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "pearl",
        "value": 30.0
      }
    ]
  },
  {
    "id": "1130",
    "name": "Tartarus",
    "realm": 11,
    "locked": true,
    "rarity": "exotic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "The living abyss where the worst beings are locked away forever.",
    "power": 50000,
    "defense": 800,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 250000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "junk"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "zeal",
        "value": 3.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "royal_jelly",
        "value": 30.0
      }
    ]
  },
  {
    "id": "1131",
    "name": "Cronus",
    "realm": 11,
    "locked": true,
    "rarity": "exotic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Titan who ate his kids to avoid being overthrown… and still got overthrown.",
    "power": 50000,
    "defense": 1000,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 250000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "legend"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "zeal",
        "value": 3.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "feather",
        "value": 30.0
      }
    ]
  },
  {
    "id": "1132",
    "name": "Typhon",
    "realm": 11,
    "locked": true,
    "rarity": "exotic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "A hundred-headed dragon who almost dethroned Zeus and wrecked Olympus.",
    "power": 50000,
    "defense": 1250,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 5000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 5,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 6,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "zeal",
        "value": 3.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "cosmic_ray",
        "value": 30.0
      }
    ]
  },
  {
    "id": "1133",
    "name": "Gaia",
    "realm": 11,
    "locked": true,
    "rarity": "exotic",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Earth herself, mother of the Titans, Giants, and monsters like Typhon.",
    "power": 50000,
    "defense": 1500,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 250000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 5000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 7,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 8,
        "rarity": "epic"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 15
        },
        "currency": "zeal",
        "value": 3.0
      },
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 30
        },
        "currency": "zeal",
        "value": 30.0
      }
    ]
  },
  {
    "id": "1134",
    "name": "Nyx",
    "realm": 11,
    "locked": true,
    "rarity": "divine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "Goddess of night so terrifying that even Zeus feared upsetting her.",
    "power": 100000,
    "defense": 2000,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 5000000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 9,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "basic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 18
        },
        "currency": "zeal",
        "value": 5.0
      },
      {
        "type": "currencyPerSecMultiplier",
        "requirement": {
          "type": "level",
          "amount": 36
        },
        "currency": "zeal",
        "value": 100.0
      }
    ]
  },
  {
    "id": "1135",
    "name": "Chaos",
    "realm": 11,
    "locked": true,
    "rarity": "divine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "The original void from which all existence—including the gods—emerged.",
    "power": 100000,
    "defense": 3000,
    "baseEffects": [
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 50000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 10,
        "rarity": "legend"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 18
        },
        "currency": "zeal",
        "value": 5.0
      },
      {
        "type": "flatCooldownDivider",
        "requirement": {
          "type": "level",
          "amount": 36
        },
        "value": 250.0
      }
    ]
  },
  {
    "id": "1136",
    "name": "Zeus",
    "realm": 11,
    "locked": true,
    "rarity": "divine",
    "quantity": 0,
    "tier": 0,
    "level": 1,
    "levelScaling": 10.0,
    "levelCost": {
      "currency": "zeal",
      "amount": 100.0
    },
    "description": "King of the gods who once chained the monster Typhon beneath Mount Etna with his thunderbolts.",
    "power": 100000,
    "defense": 5000,
    "baseEffects": [
      {
        "type": "currencyPerPoke",
        "currency": "zeal",
        "value": 5000000.0
      },
      {
        "type": "currencyPerSec",
        "currency": "zeal",
        "value": 50000.0
      },
      {
        "type": "maxCardsPerPoke"
      },
      {
        "type": "minCardsPerPoke"
      },
      {
        "type": "cooldownDivider"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "decent"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "fine"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "rare"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "epic"
      },
      {
        "type": "rarityOddsDivider",
        "realm": 11,
        "rarity": "legend"
      }
    ],
    "specialEffects": [
      {
        "type": "currencyPerPokeMultiplier",
        "requirement": {
          "type": "level",
          "amount": 18
        },
        "currency": "zeal",
        "value": 5.0
      },
      {
        "type": "flatMaxCardsPerPoke",
        "requirement": {
          "type": "level",
          "amount": 36
        },
        "value": 1000000000.0
      }
    ]
  }
];