function startScene(initPlayingField) {
  scene("start", () => {
    const startTexts = [
      "Click to Start!",
      "Player 1: AWSD + tab to shoot",
      "Player 2: Arrow keys + return/enter to shoot",
    ];

    initPlayingField();

    add([
      text(startTexts.join("\n")),
      pos(width() / 2, height() / 2),
      scale(0.5),
      origin("center"),
    ]);

    onClick(() => {
      go("fight");
    });
  });
}

export { startScene };
