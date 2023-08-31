var sceneManager;

//Zombies [0, 1 ,2] [0=Walking 1=Dying 2=Attacking]
var gif_zomb;
//Player [0, 1, 2, 3] [Blinking, Dying, Idle, Throwing]
var gif_player;
var platform;
var log;
var grass;
var bomb_img;
var deltaTimeInSeconds;
var help_text;
var credit_image;

var nepaliFont;
var currentLanguage = "nepali";
var keyboard;
var languageFlag;
var hover_sound;
var deathSounds;

var bulletHitTime = 2;

var keyboardAnalytics;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const MODE=urlParams.get('mode');

const subModes={
  practice:[
    ["Level 1","practice1"],
    ["Level 2","practice2"],
    ["Level 3","practice3"],
    ["Level 4","practice4"],
    ["Level 5","practice5"]
  ],
  game:[
    ["Easy","gameEasy"],
    ["Normal","gameNormal"],
    ["Hard","gameHard"]
  ],
  tutor:[
    ["अ - अः","tutor1"],
    ["क - ठ","tutor2"],
    ["ड - भ","tutor3"],
    ["म - ज्ञ","tutor4"]
  ],

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  var sceneList = [
    PlayScene,
    MenuScene,
    CreditScene,
    HelpScene,
    TutorScene,
    GameOverPlayScene,
    GameOverTutorScene,
    LevelCompleteScene,
  ];
  keyboardAnalytics = new KeyboardAnalytics();
  keyboard = new Keyboard("US", currentLanguage);
  sceneManager = new SceneManager(sceneList);
  sceneManager.enterScene("menu");
  // hover_sound.play();
}

function draw() {
  // currentTime = millis();
  deltaTimeInSeconds = deltaTime / 1000;
  sceneManager.loop();
}
function keyPressed() {
  sceneManager.keyPressed(key);
  hover_sound[0].play();
  setTimeout(() => hover_sound[0].stop(), 200);
}
function keyTyped() {
  keyboardAnalytics.setTypedKey(key);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function preload() {
  grass = loadImage("assets/Game Objects/grass.png");
  help_text = loadImage("assets/help.png");
  credit_image = loadImage("assets/credit.png");
  platform = loadImage("assets/Game Objects/Platform/platform.png");
  log = loadImage("assets/Game Objects/Platform/Log.png");
  //Bomb
  bomb_img = [];
  bomb_img[0] = loadImage("assets/Game Objects/Bomb.png");
  bomb_img[1] = loadImage("assets/Game Objects/Projectile.png");
  gif_zomb = [];
  gif_player = [];
  //Player [0, 1, 2, 3] [Blinking, Dying, Idle, Throwing]
  gif_player[0] = loadAnimatedSprite(
    17,
    "assets/Player/Blinking/Idle Blinking_0",
    "0"
  );
  gif_player[1] = loadAnimatedSprite(14, "assets/Player/Dying/Dying_0", "0");
  gif_player[2] = loadAnimatedSprite(17, "assets/Player/Idle/Idle_0", "0");
  gif_player[3] = loadAnimatedSprite(
    11,
    "assets/Player/Throwing/Throwing_0",
    "0"
  );

  //Zombies [0, 1 ,2] [0=Walking 1=Dying 2=Attacking]
  //Zomb1
  gif_zomb[0] = [];
  gif_zomb[0][0] = loadAnimatedSprite(
    17,
    "assets/Zombies/Z01/Walking/Walking_0",
    "0"
  );
  gif_zomb[0][1] = loadAnimatedSprite(
    14,
    "assets/Zombies/Z01/Dying/Dying_0",
    "0"
  );
  gif_zomb[0][2] = loadAnimatedSprite(
    11,
    "assets/Zombies/Z01/Attacking/Attacking_0",
    "0"
  );

  //Zomb2
  gif_zomb[1] = [];
  gif_zomb[1][0] = loadAnimatedSprite(
    17,
    "assets/Zombies/Z02/Walking/Walking_0",
    "0"
  );
  gif_zomb[1][1] = loadAnimatedSprite(
    14,
    "assets/Zombies/Z02/Dying/Dying_0",
    "0"
  );
  gif_zomb[1][2] = loadAnimatedSprite(
    11,
    "assets/Zombies/Z02/Attacking/Attacking_0",
    "0"
  );

  //Zomb1
  gif_zomb[2] = [];
  gif_zomb[2][0] = loadAnimatedSprite(
    17,
    "assets/Zombies/Z03/Walking/Walking_0",
    "0"
  );
  gif_zomb[2][1] = loadAnimatedSprite(
    14,
    "assets/Zombies/Z03/Dying/Dying_0",
    "0"
  );
  gif_zomb[2][2] = loadAnimatedSprite(
    11,
    "assets/Zombies/Z03/Attacking/Attacking_0",
    "0"
  );

  languageFlag = [
    loadImage("assets/Flag-Nepal.png"),
    loadImage("assets/America-Flag.png"),
  ];
  soundFormats("mp3");
  hover_sound = [loadSound("assets/Sounds/hover_sound.mp3")];
  deathSounds = [];
  for (var i = 0; i <= 2; i++) {
    deathSounds.push(loadSound(`assets/Sounds/Death/deathSound${i}.mp3`));
  }
  nepaliFont = loadFont("css/font.otf");
}
function mouseClicked() {
  sceneManager.mouseClicked();
}
function loadAnimatedSprite(count, preFilename, extra = "") {
  var spriteList = [];
  for (var i = 0; i <= count; i++) {
    if (i < 10) {
      spriteList.push(loadImage(`${preFilename}${extra}${i}.png`));
    } else {
      spriteList.push(loadImage(`${preFilename}${i}.png`));
    }
  }
  return spriteList;
}

