const gameDatas = {
  tutor1: tutor1Data,
  tutor2: tutor2Data,
  tutor3: tutor3Data,
  tutor4: tutor4Data,
  gameEasy: gameEasyData,
  gameNormal: gameNormalData,
  gameHard: gameHardData,
};

class PlayScene {
  constructor(sceneManager, level) {
    this.sceneManager = sceneManager;
    this.sceneName = "PlayScene";
    this.zombieToFire;
    this.batchSize = 15;
    this.threshold = 5;
    this.speed = 30;
    this.backButton = new Button(
      getTextInCurrLang("back"),
      windowWidth / 10,
      windowHeight / 10
    );
    this.keyboardButton = new Button(
      getTextInCurrLang("Toggle Keyboard"),
      windowWidth / 10,
      windowHeight / 5
    );
    this.KeyboardObject = keyboard;
    this.level = level;
  }
  //This function chnages the visibility of keyboard
  Keyboard_toggle() {
    this.KeyboardObject.toggle_keyboard();
    console.log(this.KeyboardObject.visible);
  }
  draw() {
    clear();
    background(grass);
    // background(220);
    console.log(this.zombieManager.zombies.length);
    if (this.zombieManager.zombies.length > 1) this.zombieManager.draw();
    if (this.zombieManager.zombies.length === 1) {
      // TODO
      //console.log("gameover");
      this.KeyboardObject.elements.main.classList.add("keyboard--hidden");
      this.sceneManager.enterScene("gameOverPlay");
    }
    this.backButton.draw();
    this.keyboardButton.draw();
  }
  generateWords(mode) {
    const data = gameDatas[mode];
    let currentSentence = data;
    if (Array.isArray(data)) {
      let index = Math.trunc(Math.random() * data.length);
      currentSentence = data[index];
    }
    let words = currentSentence.trim().split(" ");
    console.log(currentSentence);
    // if (words.length > this.batchSize) {
    //   words = words.slice(0, this.batchSize);
    // }
    this.zombieManager.generateZombies(words, this.speed);
  }
  keyPressed(key) {
    if (this.zombieManager.zombies.length) this.zombieManager.keyPressed(key);
  }

  onSceneEnter(mode) {
    keyboardAnalytics.reset();
    console.log(" SceneEnter : Play ");
    this.zombieManager = new ZombieManager();
    this.backButton.callOnMousePress(() =>
      this.sceneManager.enterScene("menu")
    );
    this.keyboardButton.callOnMousePress(() => this.Keyboard_toggle());

    //
    this.generateWords(mode);
    this.slider = createSlider(25, 100, this.speed);
    this.slider.position(windowWidth / 10, (windowHeight * 9) / 10);
  }
  onSceneExit() {
    this.KeyboardObject.elements.main.classList.add("keyboard--hidden");
    console.log(" SceneExit : Play ");
    this.slider.remove();
  }
  update() {
    //console.log("secnd");
    this.speed = this.slider.value();
    this.zombieManager.update(this.speed);
    //console.log(this.zombieManager.zombies.length)
    //console.log("secnd");
    // if (this.zombieManager.zombies.length === 0) {
    //   this.KeyboardObject.elements.main.classList.add("keyboard--hidden");
    //   // TODO
    //   //console.log("gameover");
    //   this.sceneManager.enterScene("gameOverPlay");
    // }
    //console.log("secnd");
    if (this.zombieManager.player.health < 0) {
      //console.log("health 0");
      this.KeyboardObject.elements.main.classList.add("keyboard--hidden");
      this.sceneManager.enterScene("gameOverPlay");
    }
  }
  mouseClicked() {
    this.backButton.mouseClicked();
    this.keyboardButton.mouseClicked();
  }
}
