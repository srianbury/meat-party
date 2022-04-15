function lhitosPart() {
  function doJump(player) {
    player.jump();
  }

  function doMove(player, dir) {
    player.move(dir.scale(300));
  }
  //player1 movement
  const player1 = add([
    "player",
    "1",
    sprite("player1", { height: 100, width: 100 }),
    pos(150, 80),
    area(),
    body(),
  ]);

  onKeyPress("w", () => {
    doJump(player1);
  });

  onKeyDown("d", () => {
    doMove(player1, RIGHT);
  });

  onKeyDown("a", () => {
    doMove(player1, LEFT);
  });

  //player2 movement
  const player2 = add([
    "player",
    "2",
    sprite("player2", { height: 100, width: 100 }),
    pos(width() - 300, 120),
    area(),
    body(),
    scale(vec2(1)),
  ]);

  onKeyPress("up", () => {
    doJump(player2);
  });

  onKeyDown("right", () => {
    doMove(player2, RIGHT);
  });
  onKeyDown("left", () => {
    doMove(player2, LEFT);
  });

  //collision
  onCollide("1", "2", () => {
    // burp();
    //can get hella annoying if it's procced multiple times
  });
}

export { lhitosPart };
