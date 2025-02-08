/***********************
 * ZONES DEFINITION
 * (Modified as requested: skill references removed from non-Travel task names,
 *  no colons in non-Travel task names, Travel tasks unchanged.)
 ***********************/
var zones = [
  {
    id: 1,
    name: "Beginner’s Bootcamp",
    img: "images/zone1.jpg",
    tasks: [
      { id: 11, name: "Warm-Up Jog in Place", type: "Training", maxReps: 7, count: 0, baseTime: 6e3, description: "Boost your stamina with a simple jog.", skills: ["endurance"] },
      { id: 12, name: "Assemble a Clockwork Toy", type: "Training", maxReps: 5, count: 0, baseTime: 6e3, description: "Practice assembling basic mechanisms.", skills: ["tinkering"] },
      { id: 13, name: "Practice Mirror Warmup", type: "Training", maxReps: 2, count: 0, baseTime: 9e3, description: "Engage in a friendly conversation with a mirror.", skills: ["charisma"] },
      { id: 14, name: "Brewmaster: Read an Alchemy Book", type: "Training", maxReps: 1, count: 0, baseTime: 5e4, description: "Study the ancient art of alchemy.", skills: ["alchemy"], perk: "brewmaster" },
      { id: 15, name: "Brew a Simple Potion", type: "Training", maxReps: 20, count: 0, baseTime: 8e3, description: "Experiment with ingredients to create a potion.", skills: ["alchemy"], resources: ["energy_elixir"] },
      { id: 16, name: "Combined Assembly Drill", type: "Training", maxReps: 1, count: 0, baseTime: 3e4, description: "A challenging drill combining physical stamina and careful assembly.", skills: ["endurance", "tinkering"], mandatory: true },
      { id: 17, name: "Small Talk Practice", type: "Training", maxReps: 4, count: 0, baseTime: 3e3, description: "Polish your social skills with casual chat.", skills: ["charisma"], mandatory: true },
      { id: 18, name: "Travel: Exit Bootcamp", type: "Travel", maxReps: 1, count: 0, baseTime: 1e4, description: "Leave bootcamp and begin your journey.", skills: ["travel"] }
    ]
  },
  {
    id: 2,
    name: "Urban Outskirts",
    img: "images/zone2.jpg",
    tasks: [
      { id: 21, name: "Map the City", type: "Training", maxReps: 5, count: 0, baseTime: 3e3, description: "Study the city’s layout to boost your intellect.", skills: ["intellect"], mandatory: true },
      { id: 22, name: "Spot the Details", type: "Training", maxReps: 8, count: 0, baseTime: 5e3, description: "Sharpen your senses by noticing urban subtleties.", skills: ["perception"], mandatory: true },
      { id: 23, name: "Combined Recall Drill", type: "Training", maxReps: 6, count: 0, baseTime: 1e4, description: "Run while recalling facts about your surroundings.", skills: ["endurance", "intellect"] },
      { id: 24, name: "Assemble a Magnifying Glass", type: "Training", maxReps: 20, count: 0, baseTime: 6e3, description: "Assemble a simple magnifying glass.", skills: ["tinkering"], resources: ["magnifying_glass"] },
      { id: 25, name: "Strike up a Quick Chat", type: "Training", maxReps: 2, count: 0, baseTime: 9e3, description: "Engage strangers in conversation.", skills: ["charisma"] },
      { id: 26, name: "Healthy Living: Explore Dietary Options", type: "Training", maxReps: 3, count: 0, baseTime: 6e5, description: "Learn about healthy eating habits.", skills: ["endurance", "intellect", "alchemy"], perk: "healthy_living" },
      { id: 27, name: "Travel: Head to the City Core", type: "Travel", maxReps: 1, count: 0, baseTime: 2e4, description: "Venture into the bustling heart of the city.", skills: ["travel"] }
    ]
  },
  {
    id: 3,
    name: "City Core",
    img: "images/zone3.jpg",
    tasks: [
      { id: 31, name: "Workshop Fix a Broken Engine", type: "Training", maxReps: 5, count: 0, baseTime: 5e3, description: "Learn the basics of machinery repair.", skills: ["mechanics"] },
      { id: 32, name: "Basic Mech: Rudimentary Upgrade", type: "Training", maxReps: 1, count: 0, baseTime: 4e5, description: "Construct a basic biomechanical upgrade.", skills: ["mechanics", "intellect"], perk: "basic_mech" },
      { id: 33, name: "Traffic Analysis Study Urban Flow", type: "Training", maxReps: 10, count: 0, baseTime: 5e4, description: "Analyze traffic patterns using perception and intellect.", skills: ["perception", "intellect"] },
      { id: 34, name: "Completionist: Run City Marathon", type: "Training", maxReps: 1, count: 0, baseTime: 2e5, description: "Test your stamina on a long city run.", skills: ["endurance"], mandatory: true, perk: "completionist" },
      { id: 35, name: "Assemble Goggles", type: "Training", maxReps: 20, count: 0, baseTime: 2e5, description: "Build yourself some eye protection.", skills: ["tinkering"], resources: ["goggles"] },
      { id: 36, name: "Travel: Enter Corporate District", type: "Travel", maxReps: 1, count: 0, baseTime: 3e4, description: "Step into the orderly world of corporate business.", skills: ["travel"] }
    ]
  },
  {
    id: 4,
    name: "Corporate District",
    img: "images/zone4.jpg",
    tasks: [
      { id: 41, name: "Business Card Exchange", type: "Training", maxReps: 5, count: 0, baseTime: 2e4, description: "Practice your charisma in a corporate setting.", skills: ["charisma"] },
      { id: 42, name: "Workaholic: Fiance Bro Advice", type: "Training", maxReps: 1, count: 0, baseTime: 1e7, description: "Learn how workaholics function.", skills: ["endurance", "charisma", "perception"], perk: "workaholic" },
      { id: 43, name: "Crunch Financial Numbers", type: "Training", maxReps: 10, count: 0, baseTime: 7e4, description: "Analyze corporate data with intellect and mechanics.", skills: ["intellect", "mechanics"] },
      { id: 44, name: "Tactical Office Skirmish Simulation", type: "Training", maxReps: 5, count: 0, baseTime: 2e5, description: "Engage in simulated corporate conflicts.", skills: ["endurance", "charisma"], mandatory: true },
      { id: 45, name: "Travel: Proceed to Cyber Lab", type: "Travel", maxReps: 1, count: 0, baseTime: 4e4, description: "Advance to a high-tech cyber environment.", skills: ["travel"] }
    ]
  },
  {
    id: 5,
    name: "Cyber Lab",
    img: "images/zone6.jpg",
    tasks: [
      { id: 51, name: "Cyber Infiltration Breach the Firewall", type: "Training", maxReps: 5, count: 0, baseTime: 5e4, description: "Learn basic system penetration.", skills: ["hacking"], mandatory: true },
      { id: 52, name: "Code Decryption Crack the Cipher", type: "Training", maxReps: 10, count: 0, baseTime: 5e5, description: "Decrypt secret codes.", skills: ["hacking", "intellect"] },
      { id: 53, name: "Digital Puzzle Debug the System", type: "Training", maxReps: 2, count: 0, baseTime: 4e6, description: "Solve a digital puzzle using coding skills.", skills: ["hacking", "tinkering"] },
      { id: 54, name: "Double Timer: System Revamp", type: "Training", maxReps: 2, count: 0, baseTime: 5e8, description: "Revamp a digital system to double its efficiency.", skills: ["hacking", "tinkering", "intellect"], perk: "double_timer" },
      { id: 55, name: "Chemical Simualtion", type: "Training", maxReps: 3, count: 0, baseTime: 6e6, description: "Simulate a chemical reaction.", skills: ["alchemy", "tinkering"], mandatory: true },
      { id: 56, name: "Travel: Proceed to Combat Arena", type: "Travel", maxReps: 1, count: 0, baseTime: 5e4, description: "Step into the arena of combat.", skills: ["travel"] }
    ]
  },
  {
    id: 6,
    name: "Combat Arena",
    img: "images/zone5.jpg",
    tasks: [
      { id: 61, name: "Training Sparring Session", type: "Training", maxReps: 10, count: 0, baseTime: 1e5, description: "Learn the fundamentals of combat.", skills: ["combat"] },
      { id: 62, name: "Weapon Drills Simulated Battle", type: "Training", maxReps: 5, count: 0, baseTime: 8e6, description: "Practice with simulated weapons.", skills: ["combat", "endurance"], mandatory: true },
      { id: 63, name: "Tactical Coordination Group Skirmish", type: "Training", maxReps: 2, count: 0, baseTime: 1e8, description: "Develop team-based combat strategies.", skills: ["combat", "charisma"] },
      { id: 64, name: "Energetic Bliss: Challenge Chuck Norris", type: "Training", maxReps: 1, count: 0, baseTime: 5e9, description: "Challenge the legendary martial artist.", skills: ["combat", "endurance", "perception"], perk: "energetic_bliss" },
      { id: 65, name: "Travel: Navigate to Abandoned Factory", type: "Travel", maxReps: 1, count: 0, baseTime: 1e5, description: "Descend deeper into the digital realm.", skills: ["travel"] }
    ]
  },
  {
    id: 7,
    name: "Abandoned Factory",
    img: "images/zone7.jpg",
    tasks: [
      { id: 71, name: "Copium Reactor: Synthesize a Contraption", type: "Training", maxReps: 1, count: 0, baseTime: 1e9, description: "Create a contraption using advanced techniques.", skills: ["endurance", "alchemy", "mechanics"], perk: "copium_reactor" },
      { id: 72, name: "Neural Implant Test", type: "Training", maxReps: 10, count: 0, baseTime: 1e5, description: "Test cutting-edge neural implants.", skills: ["cybernetics"] },
      { id: 73, name: "Exosuit Upgrade Overhaul", type: "Training", maxReps: 10, count: 0, baseTime: 1e7, description: "Upgrade your cybernetic exosuit.", skills: ["cybernetics", "mechanics"], mandatory: true },
      { id: 74, name: "System Calibration Diagnostic Run", type: "Training", maxReps: 5, count: 0, baseTime: 5e7, description: "Calibrate cybernetic systems.", skills: ["cybernetics", "tinkering"] },
      { id: 75, name: "Travel: Proceed to Rooftop Rendezvous", type: "Travel", maxReps: 1, count: 0, baseTime: 3e5, description: "Climb to the city rooftop.", skills: ["travel"] }
    ]
  },
  {
    id: 8,
    name: "Rooftop Rendezvous",
    img: "images/zone8.jpg",
    tasks: [
      { id: 81, name: "Tactics Broker a Deal", type: "Training", maxReps: 10, count: 0, baseTime: 2e6, description: "Hone your negotiation skills in high places.", skills: ["negotiation"], mandatory: true },
      { id: 82, name: "Cybernetic Potion", type: "Training", maxReps: 10, count: 0, baseTime: 5e7, description: "Create a cybernetic potion.", skills: ["alchemy", "cybernetics"], resources: ["cybernetic_potion"] },
      { id: 83, name: "High-Rise Debate Persuade the Crowd", type: "Training", maxReps: 10, count: 0, baseTime: 5e9, description: "Use your wit to sway opinions.", skills: ["negotiation", "charisma", "intellect"] },
      { id: 84, name: "Travel: Descend to Digital Underground", type: "Travel", maxReps: 1, count: 0, baseTime: 1e6, description: "Head back into the digital depths.", skills: ["travel"] }
    ]
  },
  {
    id: 9,
    name: "Digital Underground",
    img: "images/zone9.jpg",
    tasks: [
      { id: 91, name: "Neural Net Optimize the System", type: "Training", maxReps: 10, count: 0, baseTime: 1e8, description: "Enhance and optimize neural networks.", skills: ["aiMastery", "intellect"] },
      { id: 92, name: "Virtual Simulated Skirmish", type: "Training", maxReps: 2, count: 0, baseTime: 3e8, description: "Engage in simulated digital battles.", skills: ["aiMastery", "combat"] },
      { id: 93, name: "Deep Data Dive Extract Encrypted Secrets", type: "Training", maxReps: 5, count: 0, baseTime: 1e10, description: "Extract and decode hidden data.", skills: ["aiMastery", "hacking", "intellect"], mandatory: true },
      { id: 94, name: "Travel: Emerge into Techno District", type: "Travel", maxReps: 1, count: 0, baseTime: 5e6, description: "Climb out to the bustling Techno District.", skills: ["travel"] }
    ]
  },
  {
    id: 10,
    name: "Techno District",
    img: "images/zone10.jpg",
    tasks: [
      { id: 101, name: "Digital Frenzy Data Stream Challenge", type: "Training", maxReps: 10, count: 0, baseTime: 5e8, description: "Process rapid streams of digital data.", skills: ["intellect", "aiMastery"], mandatory: true },
      { id: 102, name: "System Override the Grid", type: "Training", maxReps: 5, count: 0, baseTime: 8e8, description: "Take control of the city's digital infrastructure.", skills: ["hacking", "intellect"] },
      { id: 103, name: "Travel: Venture to AI Research Facility", type: "Travel", maxReps: 1, count: 0, baseTime: 1e7, description: "Head to the hub of advanced AI research.", skills: ["travel"] }
    ]
  },
  {
    id: 11,
    name: "AI Research Facility",
    img: "images/zone11.jpg",
    tasks: [
      { id: 111, name: "Subatomic Experiment", type: "Training", maxReps: 10, count: 0, baseTime: 8e8, description: "Experiment with quantum particles.", skills: ["quantum", "intellect"] },
      { id: 112, name: "Algorithm Optimization Code Refinement", type: "Training", maxReps: 5, count: 0, baseTime: 1e9, description: "Refine and optimize complex algorithms.", skills: ["aiMastery", "intellect"] },
      { id: 113, name: "Cyber Defense Digital Barrier", type: "Training", maxReps: 2, count: 0, baseTime: 1e10, description: "Deploy a robust digital defense.", skills: ["hacking", "quantum"], mandatory: true },
      { id: 114, name: "Travel: Proceed to Forsaken Bastion", type: "Travel", maxReps: 1, count: 0, baseTime: 5e7, description: "Travel to the forsaken bastion.", skills: ["travel"] }
    ]
  },
  {
    id: 12,
    name: "Forsaken Bastion",
    img: "images/zone12.jpg",
    tasks: [
      { id: 121, name: "Bunker Blitz High-Intensity Drill", type: "Training", maxReps: 10, count: 0, baseTime: 1e9, description: "Push your endurance to the limit in a confined space.", skills: ["endurance", "combat"] },
      { id: 122, name: "Neural Matrix Debugging System Repair", type: "Training", maxReps: 5, count: 0, baseTime: 2e9, description: "Repair and optimize digital systems.", skills: ["aiMastery", "hacking"] },
      { id: 123, name: "Secure Vault Access Code Breaker", type: "Training", maxReps: 2, count: 0, baseTime: 8e10, description: "Breach a secure digital vault.", skills: ["hacking", "intellect"], mandatory: true },
      { id: 124, name: "Travel: Exit to Shattered Expanse", type: "Travel", maxReps: 1, count: 0, baseTime: 1e8, description: "Journey back to the shattered expanse.", skills: ["travel"] }
    ]
  },
  {
    id: 13,
    name: "Shattered Expanse",
    img: "images/zone13.jpg",
    tasks: [
      { id: 131, name: "Guerrilla Warfare Sandstorm Sprint", type: "Training", maxReps: 10, count: 0, baseTime: 1e10, description: "Sprint through a raging sandstorm.", skills: ["endurance", "combat"] },
      { id: 132, name: "Desert Survival Resource Scavenging", type: "Training", maxReps: 10, count: 0, baseTime: 1e10, description: "Scavenge for precious resources.", skills: ["intellect", "perception"], mandatory: true },
      { id: 133, name: "Outpost Infiltration Silent Breach", type: "Training", maxReps: 5, count: 0, baseTime: 2e10, description: "Breach an enemy outpost undetected.", skills: ["hacking", "endurance"] },
      { id: 134, name: "Travel: Journey to Ascendant Metropolis", type: "Travel", maxReps: 1, count: 0, baseTime: 8e8, description: "Approach a dazzling metropolis of the future.", skills: ["travel"] }
    ]
  },
  {
    id: 14,
    name: "Ascendant Metropolis",
    img: "images/zone14.jpg",
    tasks: [
      { id: 141, name: "Urban Warfare Digital Onslaught", type: "Training", maxReps: 10, count: 0, baseTime: 5e10, description: "Engage in a fast-paced digital battle.", skills: ["combat", "aiMastery"] },
      { id: 142, name: "City Grid Optimization Neural Sync", type: "Training", maxReps: 5, count: 0, baseTime: 1e11, description: "Optimize urban networks with quantum precision.", skills: ["quantum", "intellect"], mandatory: true },
      { id: 143, name: "Corporate Espionage Information Heist", type: "Training", maxReps: 2, count: 0, baseTime: 1e13, description: "Steal confidential data using your omniscient insight.", skills: ["negotiation", "hacking", "omniscience"], mandatory: true },
      { id: 144, name: "Travel: Ascend to Nexus of Infinity", type: "Travel", maxReps: 1, count: 0, baseTime: 2e9, description: "Conquer the Nexus of Infinity.", skills: ["travel"] }
    ]
  },
  {
    id: 15,
    name: "Nexus of Infinity",
    img: "images/zone15.jpg",
    tasks: [
      { id: 151, name: "Final Skirmish Ultimate", type: "Training", maxReps: 10, count: 0, baseTime: 1e12, description: "Engage in a climactic battle to prove your might.", skills: ["combat", "endurance"] },
      { id: 152, name: "Ultimate Algorithm Challenge", type: "Training", maxReps: 5, count: 0, baseTime: 3e12, description: "Solve a complex algorithmic puzzle that tests your intellect.", skills: ["aiMastery", "intellect"], mandatory: true },
      { id: 153, name: "Mainframe Break-In Digital Siege", type: "Training", maxReps: 2, count: 0, baseTime: 1e13, description: "Penetrate a heavily fortified digital fortress.", skills: ["hacking", "cybernetics"], mandatory: true },
      { id: 154, name: "Last Stand Test", type: "Training", maxReps: 20, count: 0, baseTime: 1e12, description: "Withstand an endless onslaught of foes.", skills: ["endurance"] },
      { id: 155, name: "Code of Destiny Final Puzzle", type: "Training", maxReps: 1, count: 0, baseTime: 1e15, description: "Solve the ultimate puzzle and shape your destiny.", skills: ["aiMastery", "omniscience"], mandatory: true },
      { id: 156, name: "Cyber Siege Digital Onslaught", type: "Training", maxReps: 10, count: 0, baseTime: 3e13, description: "Launch a final digital assault on enemy systems.", skills: ["hacking", "cybernetics"], mandatory: true },
      { id: 157, name: "Travel: Enter the Victory Chamber", type: "Travel", maxReps: 1, count: 0, baseTime: 1e10, description: "Step into the chamber of ultimate triumph.", skills: ["travel"] }
    ]
  }
];
