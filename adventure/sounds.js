
// Sound Manager to centralize control
// Updated Sound Manager
const soundManager = {
    volume: 0.5,
    mute: false,
    sounds: {},
    
    // Register a sound by name with an optional type ("music" or "sfx")
    register: function(name, src, options = {}) {
      const sound = new Audio(src);
      sound.loop = options.loop || false;
      // Save a custom type property (default to "sfx")
      sound._type = options.type || 'sfx';
      // Set initial volume based on type:
      sound.volume = (sound._type === 'music') ? this.volume * 0.5 : this.volume;
      this.sounds[name] = sound;
      return sound;
    },
    
    // Update volume for all sounds
    setVolume: function(vol) {
      this.volume = vol;
      for (const key in this.sounds) {
        if (this.sounds[key]._type === 'music') {
          this.sounds[key].volume = vol * 0.25;  // music always at 1/4
        } else {
          this.sounds[key].volume = vol;
        }
      }
    },
    
    // Mute or unmute all sounds
    setMute: function(mute) {
      this.mute = mute;
      for (const key in this.sounds) {
        this.sounds[key].muted = mute;
      }
    }
  };
  
  // Register your sounds
  const bgMusic = soundManager.register("background", "sounds/background_music.ogg", { loop: true, type: 'music' });
  const levelUpSound = soundManager.register("levelUp", "sounds/level_up.wav", { type: 'sfx' });
  const copiumGameOverSound = soundManager.register("copiumGameOver", "sounds/copium_game_over.wav", { type: 'sfx' });
  const delusionGameOverSound = soundManager.register("delusionGameOver", "sounds/delusion_game_over.wav", { type: 'sfx' });
  const energyGameOverSound = soundManager.register("energyGameOver", "sounds/energy_game_over.wav", { type: 'sfx' });
  const gulpSound = soundManager.register("gulp", "sounds/gulp.wav", { type: 'sfx' });
  const perkUnlockSound = soundManager.register("perkUnlock", "sounds/perk_unlock.wav", { type: 'sfx' });
  const reinforcementSound = soundManager.register("reinforcement", "sounds/reinforcement.wav", { type: 'sfx' });

  const agentSmithSound = soundManager.register("agentSmith", "sounds/agent_smith.mp3", { type: 'sfx' });
  const shaoKahnSound = soundManager.register("shaoKahn", "sounds/shao_kahn.mp3", { type: 'sfx' });
  const chuckNorrisSound = soundManager.register("chuckNorris", "sounds/chuck_norris.wav", { type: 'sfx' });
  const sauronSound = soundManager.register("sauron", "sounds/sauron.wav", { type: 'sfx' });
  const isshinSound = soundManager.register("isshin", "sounds/isshin.wav", { type: 'sfx' });
  const kratosSound = soundManager.register("kratos", "sounds/kratos.wav", { type: 'sfx' });
  const deadpoolSound = soundManager.register("deadpool", "sounds/deadpool.wav", { type: 'sfx' });
  const vegetaSound = soundManager.register("vegeta", "sounds/vegeta.wav", { type: 'sfx' });
  const bigBrotherSound = soundManager.register("bigBrother", "sounds/big_brother.wav", { type: 'sfx' });
  // Register additional sounds as needed:
  // const someOtherSound = soundManager.register("other", "sounds/other_sound.wav", { type: 'sfx' });
  