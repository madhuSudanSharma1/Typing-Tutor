class GameOverPlayScene {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.sceneName = "gameOverPlay";
    this.button = new Button("Continue", width / 2, 15+height / 2 + windowHeight/9);
    this.button.callOnMousePress(() => this.sceneManager.enterScene("menu"));
  }
  draw() {
    clear();
    // background(220);
    background(grass);
    keyboardAnalytics.displayAnalytics(width / 2, height / 2.2);

    this.button.draw();
  }
  mouseClicked() {
    this.button.mouseClicked();
  }
  onSceneEnter() {
    keyboardAnalytics.calculate();
    console.log(" SceneEnter : Game Over ");
  }
  onSceneExit() {
    console.log(" SceneExit : Game Over ");
  }
  update() {}
}
