class MenuScene {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.currentMode = MODE;
    this.sceneName = "menu";
    // this.buttons = [
    //   new Button(getTextInCurrLang('Easy'), windowWidth / 2, 200),
    //   new Button(getTextInCurrLang('Normal'), windowWidth / 2, 300),
    //   new Button(getTextInCurrLang('Hard'), windowWidth / 2, 400),
    // ];
    this.buttons = subModes[MODE].map(([subMode, _], index) => {
      return new Button(getTextInCurrLang(subMode), windowWidth / 2, 100 * (index + 1))
    })
    
    this.backButton = new Button(getTextInCurrLang("back"), windowWidth / 10, windowHeight / 10);
    this.modes = subModes[MODE].map(([_, subMode]) => subMode);
    this.animated = [
      new AnimatedSprite(gif_zomb[0][0]),
      new AnimatedSprite(gif_zomb[1][0]),
      new AnimatedSprite(gif_player[0]),
      new AnimatedSprite(gif_zomb[0][1]),
      new AnimatedSprite(gif_zomb[2][1]),
    ];
    this.bombs = [];
    //setInterval(this.generateBombs, Math.random() * 5000);
    this.generateBombs();
    this.xPosition = [0, 0, windowWidth * 0.35, 100, 900];
    this.yPosition = [400, 500, 150, 100, 200];
    this.animateFunction = [0, 0, 0, 1, 1];
  }

  draw() {
    clear();
    background(grass);
    // this.animated.map((animate, index) => {
    //   if (this.animateFunction[index] === 0) {
    //     animate.drawImageLoop(this.xPosition[index], this.yPosition[index]);
    //   } else if (this.animateFunction[index] === 1) {
    //     animate.drawImageOnce(this.xPosition[index], this.yPosition[index]);
    //   }
    // });
    // this.bombs.map((bomb) => bomb.drawBomb());
    this.buttons.map((button) => button.draw());
    this.backButton.draw();
  }
  generateBombs() {
    const player = {
      xPosition: 0,
      yPosition: Math.random() * windowHeight,
    };
    const enemy = {
      xPosition: (Math.random() + 0.8) * 0.5 * windowWidth,
      yPosition: Math.random() * windowHeight,
      speed: 0,
    };
    this.bombs.push(new Bomb(player, enemy));
    setTimeout(() => this.generateBombs(), Math.random() * 3000);
  }
  keyPressed(key) {
    if (String(key) === "s") {
      this.sceneManager.enterScene("credit");
    }
  }
  onSceneEnter() {
    console.log(" SceneEnter : Menu ");
    this.buttons.map((button, index) => {
      button.callOnMousePress(() =>
        this.sceneManager.enterScene("PlayScene", this.modes[index])
      );
    });
    this.backButton.callOnMousePress(() =>
      history.back()
    );
  }
  onSceneExit() {
    console.log(" SceneExit : Menu ");
  }
  update() {
    this.xPosition[0] = (this.xPosition[0] + 2) % windowWidth;
    this.xPosition[1] = windowWidth - this.xPosition[0];
    this.buttons.map((button) => {
      if (button.isHover) {
        this.yPosition[2] = button.ypos - 50;
      }
    });
    this.bombs.map((bomb) => bomb.updateBomb());
    this.bombs = this.bombs.filter((bomb) => !bomb.exploded);
  }
  mouseClicked() {
    this.backButton.mouseClicked();
    this.buttons.map((button) => button.mouseClicked());
  }
}
