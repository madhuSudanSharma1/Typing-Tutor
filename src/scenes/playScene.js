class PlayScene {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.sceneName = "normal";
    this.zombieToFire;
    this.batchSize = 15;
    this.threshold = 5;
    this.backButton = new Button("Back", windowWidth / 10, windowHeight / 10);
  }

  draw() {
    clear();
    background(grass);
    // background(220);
    console.log(this.zombieManager.zombies.length)
    if(this.zombieManager.zombies.length)
        this.zombieManager.draw();

    this.backButton.draw();
  }
  generateWords() {
    let index = Math.trunc(Math.random() * normalData.length);
    let currentSentence = normalData[index];
    let words = currentSentence.trim().split(" ");
    console.log(currentSentence)
    if (words.length > this.batchSize) {
      words = words.slice(0, this.batchSize);
    }
    this.zombieManager.generateZombies(words, 50);
  }
  keyPressed(key) {
    if(this.zombieManager.zombies.length)
      this.zombieManager.keyPressed(key);
  }
  onSceneEnter() {
    keyboardAnalytics.reset();
    console.log(" SceneEnter : Play ");
    this.zombieManager = new ZombieManager();
    this.backButton.callOnMousePress(() =>
      this.sceneManager.enterScene("menu")
    );
    //
    this.generateWords();
  }
  onSceneExit() {
    console.log(" SceneExit : Play ");
  }
  update() {
    //console.log("secnd");

    this.zombieManager.update();
    //console.log(this.zombieManager.zombies.length)
    //console.log("secnd");
    if (this.zombieManager.zombies.length===0) {
      // TODO
      //console.log("gameover");
      this.sceneManager.enterScene("gameOverPlay");
    }
    //console.log("secnd");
    if (this.zombieManager.player.health < 0) {
    //console.log("health 0");
      this.sceneManager.enterScene("gameOverPlay");
    }

  }
  mouseClicked() {
    this.backButton.mouseClicked();
  }
}
