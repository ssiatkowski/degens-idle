/***********************
 * ZONES DEFINITION
 * (This file defines all zones and their tasks.)
 ***********************/
var zones = [
  {
    id: 1,
    name: "Beginner’s Bootcamp",
    img: "images/zone1.jpg",
    tasks: [
      { id: 11, name: "Endurance Warm-Up: Jog in Place", type: "Training", maxReps: 10, count: 0, baseTime: 6000, description: "Boost your stamina with a simple jog.", skills: ["endurance"] },
      { id: 12, name: "Tinkering Basics: Assemble a Clockwork Toy", type: "Training", maxReps: 5, count: 0, baseTime: 5000, description: "Practice assembling basic mechanisms.", skills: ["tinkering"] },
      { id: 13, name: "Charisma Practice: Mirror Warmup", type: "Training", maxReps: 2, count: 0, baseTime: 9000, description: "Engage in a friendly conversation with a mirror.", skills: ["charisma"] },
      { id: 14, name: "Alchemist Wannabe: Read a Book", type: "Training", maxReps: 1, count: 0, baseTime: 50000, description: "Study the ancient art of alchemy.", skills: ["alchemy"], perk: "brewmaster" },
      { id: 15, name: "Alchemy Practice: Brew a Simple Potion", type: "Training", maxReps: 15, count: 0, baseTime: 5500, description: "Experiment with ingredients to create a potion.", skills: ["alchemy"], resources: ["energy_elixir"] },
      { id: 16, name: "Combined Drill: Endurance & Tinkering", type: "Training", maxReps: 1, count: 0, baseTime: 25000, description: "A challenging drill combining physical stamina and careful assembly.", skills: ["endurance", "tinkering"], mandatory: true },
      { id: 17, name: "Social Exercise: Small Talk Practice", type: "Training", maxReps: 5, count: 0, baseTime: 2500, description: "Polish your social skills with casual chat.", skills: ["charisma"], mandatory: true },
      { id: 18, name: "Travel: Exit Bootcamp", type: "Travel", maxReps: 1, count: 0, baseTime: 10000, description: "Leave bootcamp and begin your journey.", skills: ["travel"] }
    ]
  },
  {
    id: 2,
    name: "Urban Outskirts",
    img: "images/zone2.jpg",
    tasks: [
      { id: 21, name: "Urban Navigation: Map the City", type: "Training", maxReps: 5, count: 0, baseTime: 2500, description: "Study the city’s layout to boost your intellect.", skills: ["intellect"], mandatory: true },
      { id: 22, name: "Sensory Focus: Spot the Details", type: "Training", maxReps: 8, count: 0, baseTime: 2200, description: "Sharpen your senses by noticing urban subtleties.", skills: ["perception"], mandatory: true },
      { id: 23, name: "Combined Drill: Endurance & Intellect", type: "Training", maxReps: 6, count: 0, baseTime: 9000, description: "Run while recalling facts about your surroundings.", skills: ["endurance", "intellect"] },
      { id: 24, name: "Quick Chat: Boost Your Charisma", type: "Training", maxReps: 2, count: 0, baseTime: 6000, description: "Engage strangers in conversation.", skills: ["charisma"] },
      { id: 25, name: "Healthy Living: Explore Dietary Options", type: "Training", maxReps: 10, count: 0, baseTime: 180000, description: "Learn about healthy eating habits.", skills: ["perception", "endurance", "intellect", "alchemy"], perk: 'healthy_living' },
      { id: 26, name: "Travel: Head to the City Core", type: "Travel", maxReps: 1, count: 0, baseTime: 15000, description: "Venture into the bustling heart of the city.", skills: ["travel"] }
    ]
  },
  {
    id: 3,
    name: "City Core",
    img: "images/zone3.jpg",
    tasks: [
      { id: 31, name: "Mechanics Workshop: Fix a Broken Engine", type: "Training", maxReps: 5, count: 0, baseTime: 3000, description: "Learn the basics of machinery repair.", skills: ["mechanics"] },
      { id: 32, name: "Mech Tinkering: Rudimentary Upgrade", type: "Training", maxReps: 1, count: 0, baseTime: 200000, description: "Construct a basic biomechanical upgrade.", skills: ["tinkering", "mechanics", "intellect"], perk: "basic_mech" },
      { id: 33, name: "Traffic Analysis: Study Urban Flow", type: "Training", maxReps: 10, count: 0, baseTime: 7500, description: "Analyze traffic patterns using perception and intellect.", skills: ["perception", "intellect"] },
      { id: 34, name: "Endurance Run: City Marathon", type: "Training", maxReps: 1, count: 0, baseTime: 60000, description: "Test your stamina on a long city run.", skills: ["endurance"], mandatory: true, perk: 'completionist' },
      { id: 35, name: "Travel: Enter Corporate District", type: "Travel", maxReps: 1, count: 0, baseTime: 20000, description: "Step into the orderly world of corporate business.", skills: ["travel"] }
    ]
  },
  {
    id: 4,
    name: "Corporate District",
    img: "images/zone4.jpg",
    tasks: [
      { id: 41, name: "Networking: Business Card Exchange", type: "Training", maxReps: 5, count: 0, baseTime: 15000, description: "Practice your charisma in a corporate setting.", skills: ["charisma"] },
      { id: 42, name: "Fiance Bro Advice: Workaholic", type: "Training", maxReps: 1, count: 0, baseTime: 5000000, description: "Learn how workaholics function.", skills: ["intellect", "endurance", "charisma", "perception"], perk: "workaholic" },
      { id: 43, name: "Financial Analysis: Crunch the Numbers", type: "Training", maxReps: 10, count: 0, baseTime: 25000, description: "Analyze corporate data with intellect and mechanics.", skills: ["intellect", "mechanics"] },
      { id: 44, name: "Office Skirmish: Tactical Simulation", type: "Training", maxReps: 5, count: 0, baseTime: 50000, description: "Engage in simulated corporate conflicts.", skills: ["endurance", "charisma"], mandatory: true },
      { id: 45, name: "Travel: Proceed to Cyber Lab", type: "Travel", maxReps: 1, count: 0, baseTime: 40000, description: "Advance to a high-tech cyber environment.", skills: ["travel"] }
    ]
  },
  {
    id: 5,
    name: "Cyber Lab",
    img: "images/zone6.jpg",
    tasks: [
      { id: 51, name: "Cyber Infiltration: Breach the Firewall", type: "Training", maxReps: 5, count: 0, baseTime: 27000, description: "Learn basic system penetration.", skills: ["hacking"], mandatory: true },
      { id: 52, name: "Code Decryption: Crack the Cipher", type: "Training", maxReps: 10, count: 0, baseTime: 75000, description: "Decrypt secret codes.", skills: ["hacking", "intellect"] },
      { id: 53, name: "Digital Puzzle: Debug the System", type: "Training", maxReps: 2, count: 0, baseTime: 400000, description: "Solve a digital puzzle using coding skills.", skills: ["hacking", "tinkering"] },
      { id: 54, name: "System Revamp: Double Timer", type: "Training", maxReps: 2, count: 0, baseTime: 10000000, description: "Revamp a digital system to double its efficiency.", skills: ["hacking", "tinkering", "endurance", "intellect", "mechanics"], perk: 'double_timer' },
      { id: 55, name: "Travel: Proceed to Combat Arena", type: "Travel", maxReps: 1, count: 0, baseTime: 30000, description: "Step into the arena of combat.", skills: ["travel"] }
    ]
  },
  {
    id: 6,
    name: "Combat Arena",
    img: "images/zone5.jpg",
    tasks: [
      { id: 61, name: "Combat Training: Sparring Session", type: "Training", maxReps: 10, count: 0, baseTime: 26000, description: "Learn the fundamentals of combat.", skills: ["combat"] },
      { id: 62, name: "Weapon Drills: Simulated Battle", type: "Training", maxReps: 5, count: 0, baseTime: 80000, description: "Practice with simulated weapons.", skills: ["combat", "endurance"], mandatory: true },
      { id: 63, name: "Tactical Coordination: Group Skirmish", type: "Training", maxReps: 2, count: 0, baseTime: 40000, description: "Develop team-based combat strategies.", skills: ["combat", "charisma", "endurance"] },
      { id: 64, name: "Challenge Chuck Norris", type: "Training", maxReps: 1, count: 0, baseTime: 40000000, description: "Challenge the legendary martial artist.", skills: ["combat", "endurance", "perception"], perk: "energetic_bliss" },
      { id: 65, name: "Travel: Navigate to Abandoned Factory", type: "Travel", maxReps: 1, count: 0, baseTime: 50000, description: "Descend deeper into the digital realm.", skills: ["travel"] }
    ]
  },
  {
    id: 7,
    name: "Abandoned Factory",
    img: "images/zone7.jpg",
    tasks: [
      { id: 71, name: "Cybernetic Enhancement: Neural Implant Test", type: "Training", maxReps: 10, count: 0, baseTime: 28000, description: "Test cutting-edge neural implants.", skills: ["cybernetics"] },
      { id: 72, name: "Exosuit Upgrade: Mechanical Overhaul", type: "Training", maxReps: 10, count: 0, baseTime: 96000, description: "Upgrade your cybernetic exosuit.", skills: ["cybernetics", "mechanics"], mandatory: true },
      { id: 73, name: "System Calibration: Diagnostic Run", type: "Training", maxReps: 5, count: 0, baseTime: 300000, description: "Calibrate cybernetic systems.", skills: ["cybernetics", "tinkering"] },
      { id: 74, name: "Travel: Proceed to Rooftop Rendezvous", type: "Travel", maxReps: 1, count: 0, baseTime: 60000, description: "Climb to the city rooftop.", skills: ["travel"] }
    ]
  },
  {
    id: 8,
    name: "Rooftop Rendezvous",
    img: "images/zone8.jpg",
    tasks: [
      { id: 81, name: "Negotiation Tactics: Broker a Deal", type: "Training", maxReps: 10, count: 0, baseTime: 280000, description: "Hone your negotiation skills in high places.", skills: ["negotiation", "charisma"] },
      { id: 82, name: "High-Rise Debate: Persuade the Crowd", type: "Training", maxReps: 10, count: 0, baseTime: 2000000, description: "Use your wit to sway opinions.", skills: ["negotiation", "charisma", "intellect"] },
      { id: 83, name: "Travel: Descend to Digital Underground", type: "Travel", maxReps: 1, count: 0, baseTime: 150000, description: "Head back into the digital depths.", skills: ["travel"] }
    ]
  },
  {
    id: 9,
    name: "Digital Underground",
    img: "images/zone9.jpg",
    tasks: [
      { id: 91, name: "Neural Net Mastery: Optimize the System", type: "Training", maxReps: 10, count: 0, baseTime: 2900, description: "Enhance and optimize neural networks.", skills: ["aiMastery", "intellect"] },
      { id: 92, name: "Virtual Combat: Simulated Skirmish", type: "Training", maxReps: 2, count: 0, baseTime: 4000, description: "Engage in simulated digital battles.", skills: ["aiMastery", "combat"] },
      { id: 93, name: "Deep Data Dive: Extract Encrypted Secrets", type: "Training", maxReps: 5, count: 0, baseTime: 3000, description: "Extract and decode hidden data.", skills: ["aiMastery", "hacking", "intellect"], mandatory: true },
      { id: 94, name: "Travel: Emerge into Techno District", type: "Travel", maxReps: 1, count: 0, baseTime: 200000, description: "Climb out to the bustling Techno District.", skills: ["travel"] }
    ]
  },
  {
    id: 10,
    name: "Techno District",
    img: "images/zone10.jpg",
    tasks: [
      { id: 101, name: "Digital Frenzy: Data Stream Challenge", type: "Training", maxReps: 10, count: 0, baseTime: 3000, description: "Process rapid streams of digital data.", skills: ["intellect", "aiMastery"], mandatory: true },
      { id: 102, name: "System Override: Hack the Grid", type: "Training", maxReps: 5, count: 0, baseTime: 3000, description: "Take control of the city's digital infrastructure.", skills: ["hacking", "intellect"] },
      { id: 103, name: "Travel: Venture to AI Research Facility", type: "Travel", maxReps: 1, count: 0, baseTime: 300000, description: "Head to the hub of advanced AI research.", skills: ["travel"] }
    ]
  },
  {
    id: 11,
    name: "AI Research Facility",
    img: "images/zone11.jpg",
    tasks: [
      { id: 111, name: "Quantum Mechanics: Subatomic Experiment", type: "Training", maxReps: 10, count: 0, baseTime: 3200, description: "Experiment with quantum particles.", skills: ["quantum", "intellect"] },
      { id: 112, name: "Algorithm Optimization: Code Refinement", type: "Training", maxReps: 5, count: 0, baseTime: 3200, description: "Refine and optimize complex algorithms.", skills: ["aiMastery", "intellect"] },
      { id: 113, name: "Cyber Defense: Digital Barrier", type: "Training", maxReps: 2, count: 0, baseTime: 4000, description: "Deploy a robust digital defense.", skills: ["hacking", "quantum"], mandatory: true },
      { id: 114, name: "Travel: Proceed to Forsaken Bastion", type: "Travel", maxReps: 1, count: 0, baseTime: 500000, description: "Travel to the forsaken bastion.", skills: ["travel"] }
    ]
  },
  {
    id: 12,
    name: "Forsaken Bastion",
    img: "images/zone12.jpg",
    tasks: [
      { id: 121, name: "Bunker Blitz: High-Intensity Drill", type: "Training", maxReps: 10, count: 0, baseTime: 3300, description: "Push your endurance to the limit in a confined space.", skills: ["endurance", "combat"] },
      { id: 122, name: "Neural Matrix Debugging: System Repair", type: "Training", maxReps: 5, count: 0, baseTime: 3300, description: "Repair and optimize digital systems.", skills: ["aiMastery", "hacking"] },
      { id: 123, name: "Secure Vault Access: Code Breaker", type: "Training", maxReps: 2, count: 0, baseTime: 4000, description: "Breach a secure digital vault.", skills: ["hacking", "intellect"], mandatory: true },
      { id: 124, name: "Travel: Exit to Shattered Expanse", type: "Travel", maxReps: 1, count: 0, baseTime: 800000, description: "Journey back to the shattered expanse.", skills: ["travel"] }
    ]
  },
  {
    id: 13,
    name: "Shattered Expanse",
    img: "images/zone13.jpg",
    tasks: [
      { id: 131, name: "Guerrilla Warfare: Sandstorm Sprint", type: "Training", maxReps: 10, count: 0, baseTime: 3400, description: "Sprint through a raging sandstorm.", skills: ["endurance", "combat"] },
      { id: 132, name: "Desert Survival: Resource Scavenging", type: "Training", maxReps: 10, count: 0, baseTime: 3400, description: "Scavenge for precious resources.", skills: ["intellect", "perception"], mandatory: true },
      { id: 133, name: "Outpost Infiltration: Silent Breach", type: "Training", maxReps: 5, count: 0, baseTime: 4000, description: "Breach an enemy outpost undetected.", skills: ["hacking", "endurance"] },
      { id: 134, name: "Travel: Journey to Ascendant Metropolis", type: "Travel", maxReps: 1, count: 0, baseTime: 1000000, description: "Approach a dazzling metropolis of the future.", skills: ["travel"] }
    ]
  },
  {
    id: 14,
    name: "Ascendant Metropolis",
    img: "images/zone14.jpg",
    tasks: [
      { id: 141, name: "Urban Warfare: Digital Onslaught", type: "Training", maxReps: 10, count: 0, baseTime: 3500, description: "Engage in a fast-paced digital battle.", skills: ["combat", "aiMastery"] },
      { id: 142, name: "City Grid Optimization: Neural Sync", type: "Training", maxReps: 5, count: 0, baseTime: 3500, description: "Optimize urban networks with quantum precision.", skills: ["quantum", "intellect"], mandatory: true },
      { id: 143, name: "Corporate Espionage: Information Heist", type: "Training", maxReps: 2, count: 0, baseTime: 4000, description: "Steal confidential data using your omniscient insight.", skills: ["negotiation", "hacking", "omniscience"], mandatory: true },
      { id: 144, name: "Travel: Ascend to Nexus of Infinity", type: "Travel", maxReps: 1, count: 0, baseTime: 5000000, description: "Conquer the Nexus of Infinity.", skills: ["travel"] }
    ]
  },
  {
    id: 15,
    name: "Nexus of Infinity",
    img: "images/zone15.jpg",
    tasks: [
      { id: 151, name: "Final Skirmish: Ultimate Combat", type: "Training", maxReps: 10, count: 0, baseTime: 3600, description: "Engage in a climactic battle to prove your might.", skills: ["combat", "endurance"] },
      { id: 152, name: "Ultimate Algorithm Challenge: AI Mastery", type: "Training", maxReps: 5, count: 0, baseTime: 3600, description: "Solve a complex algorithmic puzzle that tests your intellect.", skills: ["aiMastery", "intellect"], mandatory: true },
      { id: 153, name: "Mainframe Break-In: Digital Siege", type: "Training", maxReps: 2, count: 0, baseTime: 4000, description: "Penetrate a heavily fortified digital fortress.", skills: ["hacking", "cybernetics"], mandatory: true },
      { id: 154, name: "Last Stand: Endurance Test", type: "Training", maxReps: 20, count: 0, baseTime: 1500, description: "Withstand an endless onslaught of foes.", skills: ["endurance", "combat"] },
      { id: 155, name: "Code of Destiny: Final Puzzle", type: "Training", maxReps: 1, count: 0, baseTime: 6000, description: "Solve the ultimate puzzle and shape your destiny.", skills: ["aiMastery", "omniscience"], mandatory: true },
      { id: 156, name: "Cyber Siege: Digital Onslaught", type: "Training", maxReps: 10, count: 0, baseTime: 3600, description: "Launch a final digital assault on enemy systems.", skills: ["hacking", "cybernetics"], mandatory: true },
      { id: 157, name: "Final Travel: Enter the Victory Chamber", type: "Travel", maxReps: 1, count: 0, baseTime: 10000000, description: "Step into the chamber of ultimate triumph.", skills: ["travel"] }
    ]
  }
];
