class KeyboardAnalytics {
  constructor() {
    this.reset();
    this.speedComments = {
      0: "Don't be a SNAIL.",
      1: "Too little, too late.",
      2: "You are as fast as an hare.",
      3: "Sky is the limit for you.",
    };
    this.accuracyComments = {
      0: [
        "You have very less accuracy, Try Harder!!!",
        "Try More for better Accuracy!",
      ],
      1: ["You can still get better", "Type more to improve your accuracy"],
      2: [
        "I see much improvement in your accuracy",
        "You have fine improvement in your accuracy",
      ],
      3: ["Extraordinary Typing!!!", "Bravo!!!!!"],
    };
  }
  calculate() {
    this.keyStrokeCount = this.typedKeys.length;
    var correctlyTypedString = this.correctlyTypedWords.join(" ");
    var timeDifference = millis() - this.startTime;
    var totalCharacters = correctlyTypedString.length;
    this.accuracy = (totalCharacters / this.keyStrokeCount) * 100;
    this.rawWPM = (this.keyStrokeCount * 12 * 1000) / timeDifference;
    this.correctedWPM = (totalCharacters * 12 * 1000) / timeDifference;
    this.speedComment =
      this.speedComments[Math.min(int(this.correctedWPM / 25), 3)];
    this.accuracyComment =
      this.accuracyComments[int(this.accuracy / 25)][int(Math.random() * 2)];
  }
  displayAnalytics(
    xPos,
    yPos //xPos,yPos->top left
  ) {
    fill(6, 26, 64, 200);
    let letWinHeight=windowHeight/3
    let lineHeight = letWinHeight/6;
    let top = yPos-(letWinHeight/2) + lineHeight;
    rect(xPos, yPos, windowWidth / 2, letWinHeight+15, 20);
    fill(255);
    text("Game Over !! Please restart the game", xPos, top);
    text(
      `Accuracy = ${this.accuracy.toPrecision(3)}%`,
      xPos,
      top + lineHeight
    );
    text(`${this.accuracyComment}`, xPos, top + lineHeight * 2);
    text(
      `Raw speed = ${this.rawWPM.toPrecision(4)} wpm`,
      xPos,
      top + lineHeight * 3
    );
    text(
      `Corrected speed = ${this.correctedWPM.toPrecision(4)}wpm (${
        getTextInCurrLang(this.speedComment)
      }) `,
      xPos,
      top + lineHeight * 4
    );
  }
  reset() {
    this.keyStrokeCount = 0;
    this.startTime = null;
    this.correctlyTypedWords = [];
    this.accuracy = 0;
    this.rawWPM = 0;
    this.correctedWPM = 0;
    this.typedKeys = "";
  }
  setCorrectlyTypedWords(word) {
    this.correctlyTypedWords.push(word);
  }
  setTypedKey(key) {
    this.typedKeys += key;
  }
  setStartTime() {
    this.startTime = millis();
  }
}
