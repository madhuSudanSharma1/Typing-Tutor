class NormalPlayScene {
  constructor(sceneManager,level) {
    this.sceneManager = sceneManager;
    this.sceneName = "normal";
    this.zombieToFire;
    this.batchSize = 15;
    this.threshold = 5;
    this.backButton = new Button("Back", windowWidth / 10, windowHeight / 10);
    this.keyboardButton = new Button(
      "Toggle Keyboard", windowWidth / 10, windowHeight / 5
    );
    this.KeyboardObject = keyboard;
    this.level=level
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
  generateWords() {
    let index = Math.trunc(Math.random() * normalData.length);
    let currentSentence = normalData[index];
    let words = currentSentence.trim().split(" ");
    console.log(currentSentence);
    // if (words.length > this.batchSize) {
    //   words = words.slice(0, this.batchSize);
    // }
    this.zombieManager.generateZombies(words, 50);
  }
  keyPressed(key) {
    if (this.zombieManager.zombies.length) this.zombieManager.keyPressed(key);
  }

  onSceneEnter() {
    keyboardAnalytics.reset();
    console.log(" SceneEnter : Play ");
    this.zombieManager = new ZombieManager();
    this.backButton.callOnMousePress(() =>
      this.sceneManager.enterScene("menu")
    );
    this.keyboardButton.callOnMousePress(() => this.Keyboard_toggle());

    //
    this.generateWords();
  }
  onSceneExit() {
    this.KeyboardObject.elements.main.classList.add("keyboard--hidden");
    console.log(" SceneExit : Play ");
  }
  update() {
    //console.log("secnd");

    this.zombieManager.update();
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
