function startScene(initPlayingField) {
  const startTexts = [
    "Click here to Start!",
    "Player 1: AWSD + tab to shoot",
    "Player 2: Arrow keys + return/enter to shoot",
  ];
  scene("start", () => {
    initPlayingField();
    add([text(startTexts.join("\n")), area(), scale(0.5, 0.5), "starttext"]);

    onClick("starttext", () => {
      go("fight");
    });
  });
}

export { startScene };
