
// Sound Manager to centralize control
// Updated Sound Manager
const soundManager = {
    volume: 0.5,
    sounds: {},
    
    // Register a sound by name with an optional type ("music" or "sfx")
    register: function(name, src, options = {}) {
      const sound = new Audio(src);
      sound.loop = options.loop || false;
      // Save a custom type property (default to "sfx")
      sound._type = options.type || 'sfx';
      // Set initial volume based on type:
      if (sound._type === 'music') {
        sound.volume = this.volume * 0.5;
      } else {
        // Make t800 louder by increasing its volume multiplier (e.g., 1.5 instead of 1)
        sound.volume = (name === "t800") ? Math.min(1,this.volume * 2) : this.volume;
      }
      this.sounds[name] = sound;
      return sound;
    },
    
    // Update volume for all sounds
    setVolume: function(vol) {
      this.volume = vol;
      for (const key in this.sounds) {
        if (this.sounds[key]._type === 'music') {
          this.sounds[key].volume = vol * 0.25;  // music always at 1/4
        } else if (key != "muted"){
          this.sounds[key].volume = (key === "t800") ? Math.min(1,vol * 2) : vol;
        }
      }
    },
    
    // Mute or unmute all sounds
    setMute: function(mute) {
      for (const key in this.sounds) {
        if (key === 'muted') {
          continue;
        }
        this.sounds[key].muted = mute;
      }
    }
  };
  
  // Register your sounds
  const bgMusic = soundManager.register("background", "sounds/background_music.ogg", { loop: true, type: 'music' });
  const mutedSound = soundManager.register("muted", "sounds/muted.mp3", { loop: true, type: 'music'})
  const levelUpSound = soundManager.register("levelUp", "sounds/level_up.wav", { type: 'sfx' });
  const copiumGameOverSound = soundManager.register("copiumGameOver", "sounds/copium_game_over.mp3", { type: 'sfx' });
  const delusionGameOverSound = soundManager.register("delusionGameOver", "sounds/delusion_game_over.wav", { type: 'sfx' });
  const energyGameOverSound = soundManager.register("energyGameOver", "sounds/energy_game_over.wav", { type: 'sfx' });
  const gulpSound = soundManager.register("gulp", "sounds/gulp.wav", { type: 'sfx' });
  const perkUnlockSound = soundManager.register("perkUnlock", "sounds/perk_unlock.wav", { type: 'sfx' });
  const reinforcementSound = soundManager.register("reinforcement", "sounds/reinforcement.wav", { type: 'sfx' });
  const experienceSound = soundManager.register("experience", "sounds/experience.mp3", { type: 'sfx' });
  const automationEndSound = soundManager.register("automationEnd", "sounds/automation_end.wav", { type: 'sfx' });
  const atomicParticleSound = soundManager.register("atomicParticle", "sounds/atomic_particle.wav", { type: 'sfx' });
  const energyCoreSound = soundManager.register("energyCore", "sounds/energy_core.mp3", { type: 'sfx' });
  const timeFragmentSound = soundManager.register("timeFragment", "sounds/time_fragment.mp3", { type: 'sfx' });
  const masterBallSound = soundManager.register("masterBall", "sounds/master_ball.wav", { type: 'sfx' });
  const rinneganSound = soundManager.register("rinnegan", "sounds/rinnegan.wav", { type: 'sfx' });
  const achievementSound = soundManager.register("achievement", "sounds/achievement.mp3", { type: 'sfx' });
  const prestigeSound = soundManager.register("prestige", "sounds/prestige.mp3", { type: 'sfx' });

  const agentSmithSound = soundManager.register("agentSmith", "sounds/agent_smith.mp3", { type: 'sfx' });
  const shaoKahnSound = soundManager.register("shaoKahn", "sounds/shao_kahn.mp3", { type: 'sfx' });
  const chuckNorrisSound = soundManager.register("chuckNorris", "sounds/chuck_norris.wav", { type: 'sfx' });
  const sauronSound = soundManager.register("sauron", "sounds/sauron.wav", { type: 'sfx' });
  const isshinSound = soundManager.register("isshin", "sounds/isshin.wav", { type: 'sfx' });
  const kratosSound = soundManager.register("kratos", "sounds/kratos.wav", { type: 'sfx' });
  const deadpoolSound = soundManager.register("deadpool", "sounds/deadpool.wav", { type: 'sfx' });
  const vegetaSound = soundManager.register("vegeta", "sounds/vegeta.wav", { type: 'sfx' });
  const bigBrotherSound = soundManager.register("bigBrother", "sounds/big_brother.wav", { type: 'sfx' });
  const thanosSound = soundManager.register("thanos", "sounds/thanos.wav", { type: 'sfx' });
  const darthVaderSound = soundManager.register("darthVader", "sounds/darth_vader.wav", { type: 'sfx' });
  const ultronSound = soundManager.register("ultron", "sounds/ultron.wav", { type: 'sfx' });
  const unicronSound = soundManager.register("unicron", "sounds/unicron.wav", { type: 'sfx' });
  const doctorManhattanSound = soundManager.register("doctorManhattan", "sounds/doctor_manhattan.wav", { type: 'sfx' });
  const galactusSound = soundManager.register("galactus", "sounds/galactus.wav", { type: 'sfx' });
  const doomsdaySound = soundManager.register("doomsday", "sounds/doomsday.wav", { type: 'sfx' });
  const t800Sound = soundManager.register("t800", "sounds/t800.wav", { type: 'sfx' });
  const hal9000Sound = soundManager.register("hal9000", "sounds/hal9000.wav", { type: 'sfx' });
  const godzillaSound = soundManager.register("godzilla", "sounds/godzilla.wav", { type: 'sfx' });
  const googolSmithSound = soundManager.register("googolSmith", "sounds/googol_smith.wav", { type: 'sfx' });
  const pudgeSound = soundManager.register("pudge", "sounds/pudge.wav", { type: 'sfx' });
  const arceusSound = soundManager.register("arceus", "sounds/arceus.wav", { type: 'sfx' });
  const kaguyaSound = soundManager.register("kaguya", "sounds/kaguya.wav", { type: 'sfx' });
  const oneAboveAllSound = soundManager.register("oneAboveAll", "sounds/one_above_all.wav", { type: 'sfx' });
  const saitamaSound = soundManager.register("saitama", "sounds/saitama.wav", { type: 'sfx' });
  const minotaurSound = soundManager.register("minotaur", "sounds/minotaur.wav", { type: 'sfx' });
  const hermesSound = soundManager.register("hermes", "sounds/hermes.wav", { type: 'sfx' });
  const apolloSound = soundManager.register("apollo", "sounds/apollo.wav", { type: 'sfx' });
  const athenaSound = soundManager.register("athena", "sounds/athena.wav", { type: 'sfx' });
  const medusaSound = soundManager.register("medusa", "sounds/medusa.wav", { type: 'sfx' });
  const heraSound = soundManager.register("hera", "sounds/hera.wav", { type: 'sfx' });
  const cerberusSound = soundManager.register("cerberus", "sounds/cerberus.wav", { type: 'sfx' });
  const herculesSound = soundManager.register("hercules", "sounds/hercules.wav", { type: 'sfx' });
  const poseidonSound = soundManager.register("poseidon", "sounds/poseidon.wav", { type: 'sfx' });
  const hydraSound = soundManager.register("hydra", "sounds/hydra.wav", { type: 'sfx' });
  const hadesSound = soundManager.register("hades", "sounds/hades.wav", { type: 'sfx' });
  const uranusSound = soundManager.register("uranus", "sounds/uranus.wav", { type: 'sfx' });
  const gaiaSound = soundManager.register("gaia", "sounds/gaia.wav", { type: 'sfx' });
  const cronusSound = soundManager.register("cronus", "sounds/cronus.wav", { type: 'sfx' });
  const typhonSound = soundManager.register("typhon", "sounds/typhon.wav", { type: 'sfx' });
  const zeusSound = soundManager.register("zeus", "sounds/zeus.wav", { type: 'sfx' });


  // Register additional sounds as needed:
  // const someOtherSound = soundManager.register("other", "sounds/other_sound.wav", { type: 'sfx' });
  