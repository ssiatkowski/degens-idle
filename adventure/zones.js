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
      { id: 14, name: "Brewmaster: Read an Alchemy Book", type: "Training", maxReps: 1, count: 0, baseTime: 5e4, description: "Study the ancient art of alchemy.<br><br>The ★ indicates that completing this task<br>for the first time will grant a perk.", skills: ["alchemy"], perk: "brewmaster" },
      { id: 15, name: "Brew a Simple Potion", type: "Training", maxReps: 18, count: 0, baseTime: 8e3, description: "Experiment with ingredients to create a potion.<br><br>The resource icon indicates that each completion<br>of this task will produce a resource.", skills: ["alchemy"], resources: ["energy_elixir"] },
      { id: 16, name: "Combined Assembly Drill", type: "Training", maxReps: 1, count: 0, baseTime: 3e4, description: "A challenging drill combining physical<br>stamina and careful assembly.<br><br>The orange border indicates that this task is<br>mandatory to progress to next zone.", skills: ["endurance", "tinkering"], mandatory: true },
      { id: 17, name: "Small Talk Practice", type: "Training", maxReps: 4, count: 0, baseTime: 3e3, description: "Polish your social skills with casual chat.<br><br>The orange border indicates that this task is<br>mandatory to progress to next zone.", skills: ["charisma"], mandatory: true },
      { id: 18, name: "Travel: Exit Bootcamp", type: "Travel", maxReps: 1, count: 0, baseTime: 1e4, description: "Leave bootcamp and begin your journey.<br><br>The blue border indicates that travel to the next zone.", skills: ["travel"] }
    ]
  },
  {
    id: 2,
    name: "Urban Outskirts",
    img: "images/zone2.jpg",
    tasks: [
      { id: 21, name: "Combined Recall Drill", type: "Training", maxReps: 8, count: 0, baseTime: 3e4, description: "Run while recalling facts about your surroundings.", skills: ["endurance", "intellect"] },
      { id: 22, name: "Assemble a Magnifying Glass", type: "Training", maxReps: 14, count: 0, baseTime: 6e3, description: "Assemble a simple magnifying glass.", skills: ["tinkering"], resources: ["magnifying_glass"] },
      { id: 23, name: "Strike up a Quick Chat", type: "Training", maxReps: 2, count: 0, baseTime: 9e3, description: "Engage strangers in conversation.", skills: ["charisma"] },
      { id: 24, name: "Healthy Living: Explore Dietary Options", type: "Training", maxReps: 3, count: 0, baseTime: 6e5, description: "Learn about healthy eating habits.", skills: ["endurance", "intellect", "alchemy"], perk: "healthy_living" },
      { id: 25, name: "Map the City", type: "Training", maxReps: 4, count: 0, baseTime: 3e3, description: "Study the city’s layout to boost your intellect.", skills: ["intellect"], mandatory: true },
      { id: 26, name: "Spot the Details", type: "Training", maxReps: 6, count: 0, baseTime: 5e3, description: "Sharpen your senses by noticing urban subtleties.", skills: ["perception"], mandatory: true },
      { id: 27, name: "Travel: Head to the City Core", type: "Travel", maxReps: 1, count: 0, baseTime: 2e4, description: "Venture into the bustling heart of the city.", skills: ["travel"] }
    ]
  },
  {
    id: 3,
    name: "City Core",
    img: "images/zone3.jpg",
    tasks: [
      { id: 31, name: "Workshop Fix a Broken Engine", type: "Training", maxReps: 5, count: 0, baseTime: 3e5, description: "Learn the basics of machinery repair.", skills: ["mechanics"] },
      { id: 32, name: "Basic Mech: Rudimentary Upgrade", type: "Training", maxReps: 1, count: 0, baseTime: 4e5, description: "Construct a basic biomechanical upgrade.", skills: ["mechanics", "intellect"], perk: "basic_mech" },
      { id: 33, name: "Study Urban Traffic Flow", type: "Training", maxReps: 10, count: 0, baseTime: 8e4, description: "Analyze traffic patterns using perception and intellect.", skills: ["perception", "intellect"] },
      { id: 34, name: "Assemble Goggles", type: "Training", maxReps: 12, count: 0, baseTime: 1.5e5, description: "Build yourself some eye protection.", skills: ["tinkering"], resources: ["goggles"] },
      { id: 35, name: "Completionist: Run City Marathon", type: "Training", maxReps: 1, count: 0, baseTime: 2e5, description: "Test your stamina on a long city run.", skills: ["endurance"], mandatory: true, perk: "completionist" },
      { id: 36, name: "Travel: Enter Corporate District", type: "Travel", maxReps: 1, count: 0, baseTime: 3e4, description: "Step into the orderly world of corporate business.", skills: ["travel"] }
    ]
  },
  {
    id: 4,
    name: "Corporate District",
    img: "images/zone4.jpg",
    tasks: [
      { id: 41, name: "Workaholic: Finance Bro Advice", type: "Training", maxReps: 1, count: 0, baseTime: 3e7, description: "Learn how workaholics function.", skills: ["endurance", "charisma", "perception"], perk: "workaholic" },
      { id: 42, name: "Crunch Financial Numbers", type: "Training", maxReps: 10, count: 0, baseTime: 8e4, description: "Analyze corporate data with intellect and mechanics.", skills: ["intellect", "mechanics"] },
      { id: 43, name: "Gacha Machine: Mechanics of Luck", type: "Training", maxReps: 1, count: 0, baseTime: 2e5, description: "Build a simple gacha machine.", skills: ["mechanics"], perk: "gacha_machine" },
      { id: 44, name: "Battle Agent Smith", type: "Training", maxReps: 1, count: 0, baseTime: 2e8, description: "Take on this Matrix propagator. Might as well practice Combat.<br><br>This button is red - it's a boss fight.<br>Don't worry, you can move to next zone without it.", skills: ["combat"], boss_image: "images/agent_smith.jpg", resources: ["cool_sunglasses"], drainMult: 1.5, sound: agentSmithSound },
      { id: 45, name: "Business Card Exchange", type: "Training", maxReps: 5, count: 0, baseTime: 2e4, description: "Practice your charisma in a corporate setting.", skills: ["charisma"], mandatory: true },
      { id: 46, name: "Tactical Office Skirmish Simulation", type: "Training", maxReps: 5, count: 0, baseTime: 3e5, description: "Engage in simulated corporate conflicts.", skills: ["endurance", "tinkering"], mandatory: true },
      { id: 47, name: "Travel: Proceed to Cyber Lab", type: "Travel", maxReps: 1, count: 0, baseTime: 4e4, description: "Advance to a high-tech cyber environment.", skills: ["travel"] }
    ]
  },
  {
    id: 5,
    name: "Cyber Lab",
    img: "images/zone6.jpg",
    tasks: [
      { id: 51, name: "Create an Amphetamine Pill", type: "Training", maxReps: 6, count: 0, baseTime: 5e5, description: "Create a simple amphetamine pill.", skills: ["alchemy", "mechanics"], resources: ["amphetamine_pill"] },
      { id: 52, name: "Crack the Cipher", type: "Training", maxReps: 10, count: 0, baseTime: 5e5, description: "Decrypt secret codes.", skills: ["hacking", "endurance"] },
      { id: 53, name: "Debug Digital Puzzle", type: "Training", maxReps: 2, count: 0, baseTime: 4e6, description: "Solve a digital puzzle using coding skills.", skills: ["hacking", "mechanics"] },
      { id: 54, name: "Double Timer: System Revamp", type: "Training", maxReps: 2, count: 0, baseTime: 5e8, description: "Revamp a digital system to double its efficiency.", skills: ["hacking", "tinkering", "intellect"], perk: "double_timer" },
      { id: 55, name: "Noob Haxor: Study the Basics", type: "Training", maxReps: 1, count: 0, baseTime: 1e8, description: "Study the basics of hacking.", skills: ["hacking", "perception"], perk: "noob_haxor" },
      { id: 56, name: "Battle Shao Kahn", type: "Training", maxReps: 1, count: 0, baseTime: 1.5e8, description: "Some clown challenges you to mortal combat.", skills: ["combat"], boss_image: "images/shao_kahn.jpg", drainMult: 4, resources: ["shiny_helmet"], sound: shaoKahnSound },
      { id: 57, name: "Cyber Infiltration Breach the Firewall", type: "Training", maxReps: 4, count: 0, baseTime: 4e4, description: "Learn basic system penetration.", skills: ["hacking"], mandatory: true },
      { id: 58, name: "Chemical Simulation", type: "Training", maxReps: 3, count: 0, baseTime: 6e6, description: "Simulate a chemical reaction.", skills: ["alchemy", "tinkering"], mandatory: true },
      { id: 59, name: "Travel: Proceed to Combat Arena", type: "Travel", maxReps: 1, count: 0, baseTime: 5e4, description: "Step into the arena of combat.", skills: ["travel"] }
    ]
  },
  {
    id: 6,
    name: "Combat Arena",
    img: "images/zone5.jpg",
    tasks: [
      { id: 61, name: "Weapon Drills Simulated Battle", type: "Training", maxReps: 5, count: 0, baseTime: 8e6, description: "Practice with simulated weapons.", skills: ["combat", "hacking"] },
      { id: 62, name: "Tactical Coordination Group Skirmish", type: "Training", maxReps: 7, count: 0, baseTime: 4e8, description: "Develop team-based combat strategies.", skills: ["combat", "charisma"] },
      { id: 63, name: "Energetic Bliss: Painstaking Training", type: "Training", maxReps: 1, count: 0, baseTime: 4e12, description: "Engage in a grueling training session.", skills: ["combat", "endurance", "perception"], perk: "energetic_bliss" },
      { id: 64, name: "Concoct Some Steroids", type: "Training", maxReps: 4, count: 0, baseTime: 9e9, description: "Create a performance-enhancing steroid.", skills: ["alchemy", "tinkering", "intellect"], resources: ["steroids"] },
      { id: 65, name: "Challenge Dojo Master Chuck Norris", type: "Training", maxReps: 1, count: 0, baseTime: 1e9, description: "Challenge the legendary martial artist.", skills: ["combat"], boss_image: "images/chuck_norris.jpg", drainMult: 8, resources: ["karate_belt"], sound: chuckNorrisSound },
      { id: 66, name: "Kung Fu Zen: Talk Your Way", type: "Training", maxReps: 3, count: 0, baseTime: 4e10, description: "Convince the masters to help you improve your learning.", skills: ["charisma"], perk: "kung_fu_zen" },
      { id: 67, name: "Training Sparring Session", type: "Training", maxReps: 10, count: 0, baseTime: 1e5, description: "Learn the fundamentals of combat.", skills: ["combat"], mandatory: true },
      { id: 68, name: "Travel: Navigate to Abandoned Factory", type: "Travel", maxReps: 1, count: 0, baseTime: 1e5, description: "Descend deeper into the digital realm.", skills: ["travel"] }
    ]
  },
  {
    id: 7,
    name: "Abandoned Factory",
    img: "images/zone7.jpg",
    tasks: [
      { id: 71, name: "Copium Reactor: Synthesize a Contraption", type: "Training", maxReps: 1, count: 0, baseTime: 1e13, description: "Create a contraption using advanced techniques.", skills: ["endurance", "alchemy", "mechanics"], perk: "copium_reactor" },
      { id: 72, name: "Save Some Touchable Grass", type: "Training", maxReps: 4, count: 0, baseTime: 5e8, description: "Spot touchable grass and pick some for later.", skills: ["intellect", "charisma"], resources: ["touchable_grass"] },
      { id: 73, name: "System Calibration Diagnostic Run", type: "Training", maxReps: 16, count: 0, baseTime: 5e7, description: "Calibrate cybernetic systems.", skills: ["cybernetics", "tinkering"] },
      { id: 74, name: "Futuristic Wrench: Find a Tool", type: "Training", maxReps: 1, count: 0, baseTime: 6e9, description: "Locate a futuristic wrench.", skills: ["perception"], perk: "futuristic_wrench" },
      { id: 75, name: "Battle Sauron", type: "Training", maxReps: 1, count: 0, baseTime: 4e9, description: "Take on the creator of just one ring.", skills: ["combat"], boss_image: "images/sauron.jpg", drainMult: 12, resources: ["one_ring"], sound: sauronSound },
      { id: 76, name: "Neural Implant Test", type: "Training", maxReps: 7, count: 0, baseTime: 1e5, description: "Test cutting-edge neural implants.", skills: ["cybernetics"], mandatory: true },
      { id: 77, name: "Exosuit Upgrade Overhaul", type: "Training", maxReps: 5, count: 0, baseTime: 1e7, description: "Upgrade your cybernetic exosuit.", skills: ["cybernetics", "mechanics"], mandatory: true },
      { id: 78, name: "Travel: Proceed to Rooftop Rendezvous", type: "Travel", maxReps: 1, count: 0, baseTime: 3e5, description: "Climb to the city rooftop.", skills: ["travel"] }
    ]
  },
  {
    id: 8,
    name: "Rooftop Rendezvous",
    img: "images/zone8.jpg",
    tasks: [
      { id: 81, name: "Cybernetic Potion", type: "Training", maxReps: 10, count: 0, baseTime: 1e8, description: "Create a cybernetic potion.", skills: ["alchemy", "cybernetics"], resources: ["cybernetic_potion"] },
      { id: 82, name: "Cybernetic Armor", type: "Training", maxReps: 1, count: 0, baseTime: 1e12, description: "Carefully craft a cybernetic armor.", skills: ["tinkering", "cybernetics"], resources: ["cybernetic_armor"] },
      { id: 83, name: "High-Rise Debate Persuade the Crowd", type: "Training", maxReps: 10, count: 0, baseTime: 9e9, description: "Use your wit to sway opinions.", skills: ["negotiation", "charisma"] },
      { id: 84, name: "Rex: Adopt a Dog", type: "Training", maxReps: 1, count: 0, baseTime: 3e12, description: "Adopt a loyal dog.", skills: ["perception", "charisma"], perk: "rex" },
      { id: 85, name: "Luck of the Irish: Find the Clover", type: "Training", maxReps: 1, count: 0, baseTime: 7.77e10, description: "Locate a lucky clover.", skills: ["perception"], perk: "luck_of_the_irish" },
      { id: 86, name: "Tactics Broker a Deal", type: "Training", maxReps: 3, count: 0, baseTime: 5e5, description: "Hone your negotiation skills in high places.", skills: ["negotiation"], mandatory: true },
      { id: 87, name: "Travel: Descend to Digital Underground", type: "Travel", maxReps: 1, count: 0, baseTime: 1e6, description: "Head back into the digital depths.", skills: ["travel"] }
    ]
  },
  {
    id: 9,
    name: "Digital Underground",
    img: "images/zone9.jpg",
    tasks: [
      { id: 91, name: "Neural Net Optimize the System", type: "Training", maxReps: 10, count: 0, baseTime: 1e8, description: "Enhance and optimize neural networks.", skills: ["aiMastery", "intellect"] },
      { id: 92, name: "Virtual Simulated Skirmish", type: "Training", maxReps: 2, count: 0, baseTime: 3e8, description: "Engage in simulated digital battles.", skills: ["aiMastery", "combat"] },
      { id: 93, name: "Simulation Engine: Ultimate Feat of Engineering", type: "Training", maxReps: 1, count: 0, baseTime: 1e15, description: "Create the ultimate feat of engineering.", skills: ["tinkering", "cybernetics", "hacking"], perk: "simulation_engine" },
      { id: 94, name: "Battle Isshin", type: "Training", maxReps: 1, count: 0, baseTime: 1e10, description: "Challenge the master of the blade.", skills: ["combat"], boss_image: "images/isshin.jpg", drainMult: 20, resources: ["katana"], sound: isshinSound},
      { id: 95, name: "Deep Data Dive Extract Encrypted Secrets", type: "Training", maxReps: 5, count: 0, baseTime: 1e9, description: "Extract and decode hidden data.", skills: ["aiMastery", "hacking"], mandatory: true },
      { id: 96, name: "Read Advanced Alchemy Manual", type: "Training", maxReps: 1, count: 0, baseTime: 1e14, description: "Study advanced alchemical techniques.", skills: ["alchemy", "perception"], perk: "copious_alchemist", mandatory: true },
      { id: 97, name: "Travel: Emerge into Techno District", type: "Travel", maxReps: 1, count: 0, baseTime: 5e6, description: "Climb out to the bustling Techno District.", skills: ["travel"] }
    ]
  },
  {
    id: 10,
    name: "Techno District",
    img: "images/zone10.jpg",
    tasks: [
      { id: 101, name: "Omega Resonator: Cybernetic Enhancement", type: "Training", maxReps: 10, count: 0, baseTime: 1e11, description: "Leverage AI to create a cybernetic combat enhancement.", skills: ["aiMastery", "cybernetics"], resources: ["omega_resonator"] },
      { id: 102, name: "System Override the Grid", type: "Training", maxReps: 5, count: 0, baseTime: 2e11, description: "Take control of the city's digital infrastructure.", skills: ["hacking", "intellect"] },
      { id: 103, name: "Hoverboard: Steal One", type: "Training", maxReps: 1, count: 0, baseTime: 1e13, description: "Steal a hoverboard for high-speed travel.", skills: ["combat", "hacking"], perk: "hoverboard" },
      { id: 104, name: "Reinforcement Learning: Decent Algorithm", type: "Training", maxReps: 2, count: 0, baseTime: 2.5e6, description: "Train a reinforcement learning algorithm.", skills: ["aiMastery"], perk: "reinforcement_learning" },
      { id: 105, name: "Battle Kratos", type: "Training", maxReps: 1, count: 0, baseTime: 5e10, description: "Challenge the demi-god.", skills: ["combat"], boss_image: "images/kratos.jpg", drainMult: 30, resources: ["blades_of_chaos"], sound: kratosSound},
      { id: 106, name: "Digital Frenzy Data Stream Challenge", type: "Training", maxReps: 10, count: 0, baseTime: 5e8, description: "Process rapid streams of digital data.", skills: ["intellect", "aiMastery"], mandatory: true },
      { id: 107, name: "Travel: Venture to Research Facility", type: "Travel", maxReps: 1, count: 0, baseTime: 1e7, description: "Head to the hub of advanced AI research.", skills: ["travel"] }
    ]
  },
  {
    id: 11,
    name: "Research Facility",
    img: "images/zone11.jpg",
    tasks: [
      { id: 111, name: "Subatomic Experiment", type: "Training", maxReps: 10, count: 0, baseTime: 1e10, description: "Experiment with quantum particles.", skills: ["quantum", "intellect"] },
      { id: 112, name: "Algorithm Optimization Code Refinement", type: "Training", maxReps: 5, count: 0, baseTime: 1e11, description: "Refine and optimize complex algorithms.", skills: ["aiMastery", "intellect"] },
      { id: 113, name: "Immunity Device: Haggle for it", type: "Training", maxReps: 2, count: 0, baseTime: 1.6e7, description: "Haggle with a science nerd.", skills: ["negotiation"], perk: "immunity_device" },
      { id: 114, name: "Random Crystal: Sentience Attempt", type: "Training", maxReps: 2, count: 0, baseTime: 7e7, description: "Attempt to create a sentient crystal.", skills: ["aiMastery", "quantum"], resources: ["random_crystal"] },
      { id: 115, name: "Quantum Vitalizer: Energy Galore", type: "Training", maxReps: 1, count: 0, baseTime: 1e6, description: "Create a quantum vitalizer for health benefits.", skills: ["quantum"], perk: "quantum_vitalizer" },
      { id: 116, name: "Hyperlink Manipulation", type: "Training", maxReps: 7, count: 0, baseTime: 1e14, description: "A high-tech take on social engineering.", skills: ["cybernetics","charisma"] },
      { id: 117, name: "Cyber Defense Digital Barrier", type: "Training", maxReps: 2, count: 0, baseTime: 3e10, description: "Deploy a robust digital defense.", skills: ["hacking", "quantum"], mandatory: true },
      { id: 118, name: "Find Map to Forsaken Bastion", type: "Training", maxReps: 5, count: 0, baseTime: 1e14, description: "Find a map to the forsaken bastion.", skills: ["perception", "endurance"], mandatory: true},
      { id: 119, name: "Travel: Proceed to Forsaken Bastion", type: "Travel", maxReps: 1, count: 0, baseTime: 5e7, description: "Travel to the forsaken bastion.", skills: ["travel"] }
    ]
  },
  {
    id: 12,
    name: "Forsaken Bastion",
    img: "images/zone12.jpg",
    tasks: [
      { id: 121, name: "Bunker Blitz High-Intensity Drill", type: "Training", maxReps: 10, count: 0, baseTime: 1e15, description: "Push your endurance to the limit in a confined space.", skills: ["endurance", "combat"] },
      { id: 122, name: "Neural Matrix: System Repair", type: "Training", maxReps: 5, count: 0, baseTime: 1e13, description: "Repair and optimize atomic systems.", skills: ["aiMastery", "hacking"], perk: "neural_matrix" },
      { id: 123, name: "Infuse a Sanity Cleanser", type: "Training", maxReps: 4, count: 0, baseTime: 1e11, description: "Create a potion that cleanses the mind.", skills: ["alchemy", "quantum"], resources: ["sanity_cleanser"] },
      { id: 124, name: "Knowledge Preserver: New Invention", type: "Training", maxReps: 3, count: 0, baseTime: 4e16, description: "Create a machine that preserves knowledge.", skills: ["tinkering", "intellect"], perk: "knowledge_preserver" },
      { id: 125, name: "Battle Deadpool", type: "Training", maxReps: 1, count: 0, baseTime: 2e11, description: "Challenge the merc with a mouth.", skills: ["combat"], boss_image: "images/deadpool.jpg", drainMult: 40, resources: ["beating_heart"], sound: deadpoolSound },
      { id: 126, name: "Travel Training", type: "Training", maxReps: 20, count: 0, baseTime: 1e8, description: "Train for long-distance travel.", skills: ["travel", "endurance"], mandatory: true },
      { id: 127, name: "Secure Vault Access Code Breaker", type: "Training", maxReps: 2, count: 0, baseTime: 1e15, description: "Breach a secure digital vault.", skills: ["hacking", "intellect"], mandatory: true },
      { id: 128, name: "Travel: Exit to Shattered Expanse", type: "Travel", maxReps: 1, count: 0, baseTime: 1e8, description: "Journey back to the shattered expanse.", skills: ["travel"] }
    ]
  },
  {
    id: 13,
    name: "Shattered Expanse",
    img: "images/zone13.jpg",
    tasks: [
      { id: 131, name: "Guerrilla Warfare Sandstorm Sprint", type: "Training", maxReps: 4, count: 0, baseTime: 9e16, description: "Sprint through a raging sandstorm.", skills: ["endurance", "combat"], perk: "sandstorm" },
      { id: 132, name: "Outpost Infiltration Silent Breach", type: "Training", maxReps: 5, count: 0, baseTime: 1e16, description: "Breach an enemy outpost undetected.", skills: ["hacking", "endurance"] },
      { id: 133, name: "Produce Augment Fuel", type: "Training", maxReps: 4, count: 0, baseTime: 1e18, description: "Synethesize some augment fuel.", skills: ["cybernetics", "mechanics"], resources: ["augment_fuel"] },
      { id: 134, name: "Wise Mechanic: Knowledge Expansion", type: "Training", maxReps: 1, count: 0, baseTime: 1e22, description: "Expand your knowledge of mechanics.", skills: ["tinkering", "intellect", "mechanics"], perk: "wise_mechanic" },
      { id: 135, name: "Battle Vegeta", type: "Training", maxReps: 1, count: 0, baseTime: 1e12, description: "Challenge the prince of all Saiyans.", skills: ["combat"], boss_image: "images/vegeta.jpg", drainMult: 50, resources: ["saiyan_armor"], sound: vegetaSound },
      { id: 136, name: "Beg for Ascension", type: "Training", maxReps: 3, count: 0, baseTime: 1e19, description: "Convince ascended beings to let you access their metropolis.", skills: ["intellect", "negotiation"], mandatory: true },
      { id: 137, name: "Travel: Journey to Ascendant Metropolis", type: "Travel", maxReps: 1, count: 0, baseTime: 8e8, description: "Approach a dazzling metropolis of the future.", skills: ["travel"] }
    ]
  },
  {
    id: 14,
    name: "Ascendant Metropolis",
    img: "images/zone14.jpg",
    tasks: [
      { id: 141, name: "Urban Warfare Digital Onslaught", type: "Training", maxReps: 10, count: 0, baseTime: 1e16, description: "Engage in a fast-paced digital battle.", skills: ["combat", "aiMastery"], perk: "urban_warfare" },
      { id: 142, name: "Prepare Hoverboard Fuel", type: "Training", maxReps: 16, count: 0, baseTime: 1e20, description: "Synthesize some fuel for your hoverboard.", skills: ["tinkering", "alchemy"], resources: ["hoverboard_fuel"] },
      { id: 143, name: "Cryto Wallet: Find on Street", type: "Training", maxReps: 1, count: 0, baseTime: 1e12, description: "Find a lost crypto wallet.", skills: ["perception"], perk: "crypto_wallet" },
      { id: 144, name: "Challenge Big Brother", type: "Training", maxReps: 1, count: 0, baseTime: 1e13, description: "Challenge Big Brother.", skills: ["combat"], boss_image: "images/big_brother.jpg", drainMult: 55, resources: ["surveillance_core"], sound: bigBrotherSound },
      { id: 145, name: "City Grid Optimization Neural Sync", type: "Training", maxReps: 5, count: 0, baseTime: 1e16, description: "Optimize urban networks with quantum precision.", skills: ["quantum", "intellect"], mandatory: true },
      { id: 146, name: "Corporate Espionage Information Heist", type: "Training", maxReps: 2, count: 0, baseTime: 3e17, description: "Steal confidential data using your omniscient insight.", skills: ["negotiation", "hacking"], mandatory: true },
      { id: 147, name: "Travel: Ascend to Nexus of Infinity", type: "Travel", maxReps: 1, count: 0, baseTime: 2e9, description: "Conquer the Nexus of Infinity.", skills: ["travel"] }
    ]
  },
  {
    id: 15,
    name: "Nexus of Infinity",
    img: "images/zone15.jpg",
    tasks: [
      { id: 151, name: "Master of AI: Ultimate Challenge", type: "Training", maxReps: 5, count: 0, baseTime: 1e19, description: "Solve a complex algorithm that tests your intellect.", skills: ["aiMastery", "intellect"], perk: "master_of_ai" },
      { id: 152, name: "Last Stand: Test of Endurance", type: "Training", maxReps: 5, count: 0, baseTime: 1e14, description: "Withstand an endless onslaught of foes.", skills: ["endurance"], perk: "last_stand" },
      { id: 153, name: "Puzzle Piece: Destiny", type: "Training", maxReps: 10, count: 0, baseTime: 1e17, description: "Find a piece of the ultimate puzzle to shape your destiny.", skills: ["aiMastery", "perception"], resources: ["puzzle_piece"]},
      { id: 154, name: "Mainframe Break-In Digital Siege", type: "Training", maxReps: 2, count: 0, baseTime: 5e19, description: "Penetrate a heavily fortified digital fortress.", skills: ["cybernetics", "mechanics"], mandatory: true },
      { id: 155, name: "Cyber Siege Digital Onslaught", type: "Training", maxReps: 10, count: 0, baseTime: 2e18, description: "Launch a final digital assault on enemy systems.", skills: ["hacking", "cybernetics"], mandatory: true },
      { id: 156, name: "Discover Serenity", type: "Prestige", maxReps: 1, count: 0, baseTime: 1e6, description: "Find inner peace and serenity.", skills: ["omniscience"], mandatory: true },
      { id: 157, name: "Travel: Enter the Victory Chamber", type: "Travel", maxReps: 1, count: 0, baseTime: 1e10, description: "Step into the chamber of ultimate triumph.", skills: ["travel"] }
    ]
  }
];
