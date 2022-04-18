function endScene(initPlayingField) {
  scene("end", ({ winner }) => {
    initPlayingField();
    add([
      text(
        `Player ${winner} wins!\nGAME OVER\n [space] or click to play again! \n Hit Escape to return to the main menu`
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
    
    //return to the main menu when escape is pressed
    onKeyPress("escape", () => {
      go("mainMenu");
    });    

  });
}

export { endScene };
