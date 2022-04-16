function endScene(initPlayingField) {
  scene("end", ({ winner }) => {
    initPlayingField();
    add([
      text(
        `Player ${winner} wins!\nGAME OVER\n [space] or click to play again!`
      ),
      pos(width() / 2, height() / 2 + 80),
      scale(1),
      origin("center"),
    ]);

    // go back to game with space is pressed
    onKeyPress("space", () => {
      go("fight");
    });
    onClick(() => {
      go("fight");
    });
  });
}

export { endScene };
