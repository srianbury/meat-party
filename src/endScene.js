function endScene(initPlayingField) {
  scene("end", ({ winner }) => {
    const texts = [
      `Player ${winner} wins!`,
      "Click here to play again.",
      "Or press [enter]",
    ];
    initPlayingField();
    add([text(texts.join("\n")), area(), scale(0.5, 0.5), "winnerText"]);

    onClick("winnerText", () => {
      go("fight");
    });

    onKeyPress("enter", () => {
      go("fight");
    });
  });
}

export { endScene };
