function lhitosPart() {
  const PLAYER_HEALTH = 100;
  const PLAYER_1_ID = "1";
  const PLAYER_2_ID = "2";
  let winner = false;

  function doJump(player) {
    player.jump();
  }

  function doMove(player, dir) {
    player.move(dir.scale(300));
  }

  function spawnBullet(playerId, position, dir) {
    add([
      rect(12, 48),
      area(),
      pos(position),
      origin("center"),
      color(127, 127, 255),
      outline(4),
      move(dir, 1000),
      cleanup(),
      `bullet${playerId}`, // strings here means a tag
    ]);
  }

  const winnerText = add([
    text(""),
    pos(width() / 2 - 200, 32),
    fixed(),
    scale(0.5),
  ]);

  //player1 movement
  const player1 = add([
    "player",
    PLAYER_1_ID,
    sprite("player1", { height: 100, width: 100 }),
    pos(150, 80),
    area(),
    body(),
    health(PLAYER_HEALTH),
  ]);

  onKeyPress("w", () => {
    doJump(player1);
  });

  onKeyPress("w", () => {
    if (isKeyDown("tab")) {
      spawnBullet(PLAYER_1_ID, player1.pos.add(40, 40), UP);
    }
  });

  onKeyPress("s", () => {
    if (isKeyDown("tab")) {
      spawnBullet(PLAYER_1_ID, player1.pos.add(40, 40), DOWN);
    }
  });

  onKeyDown("d", () => {
    doMove(player1, RIGHT);
  });

  onKeyPress("d", () => {
    if (isKeyDown("tab")) {
      spawnBullet(PLAYER_1_ID, player1.pos.add(40, 40), RIGHT);
    }
  });

  onKeyDown("a", () => {
    doMove(player1, LEFT);
  });

  onKeyPress("a", () => {
    if (isKeyDown("tab")) {
      spawnBullet(PLAYER_1_ID, player1.pos.add(40, 40), LEFT);
    }
  });

  const player1HealthBar = add([text(player1.hp()), pos(12, 32), fixed()]);

  player1HealthBar.onUpdate(() => {
    player1HealthBar.text = player1.hp();
  });

  player1.onCollide(`bullet${PLAYER_2_ID}`, (b) => {
    destroy(b);
    player1.hurt(10);
  });

  player1.on("death", () => {
    destroy(player1);
    addKaboom(player1.pos);
    destroyAll(`bullet${PLAYER_1_ID}`);
    if (!winner) {
      winner = true;
      winnerText.text = "Player 2 Wins!";
      go('lose');
    }
  });

  //player2 movement
  const player2 = add([
    "player",
    "2",
    sprite("player2", { height: 100, width: 100 }),
    pos(width() - 300, 120),
    area(),
    body(),
    health(PLAYER_HEALTH),
    scale(vec2(1)),
  ]);

  onKeyPress("up", () => {
    doJump(player2);
  });

  onKeyPress("up", () => {
    if (isKeyDown("enter")) {
      spawnBullet(PLAYER_2_ID, player2.pos.add(40, 40), UP);
    }
  });

  onKeyPress("down", () => {
    if (isKeyDown("enter")) {
      spawnBullet(PLAYER_2_ID, player2.pos.add(40, 40), DOWN);
    }
  });

  onKeyDown("right", () => {
    doMove(player2, RIGHT);
  });

  onKeyPress("right", () => {
    if (isKeyDown("enter")) {
      spawnBullet(PLAYER_2_ID, player2.pos.add(40, 40), RIGHT);
    }
  });

  onKeyDown("left", () => {
    doMove(player2, LEFT);
  });

  onKeyPress("left", () => {
    if (isKeyDown("enter")) {
      spawnBullet(PLAYER_2_ID, player2.pos.add(40, 40), LEFT);
    }
  });

  const player2HealthBar = add([
    text(player1.hp()),
    pos(width() - 200, 32),
    fixed(),
  ]);

  player2HealthBar.onUpdate(() => {
    player2HealthBar.text = player2.hp();
  });

  player2.onCollide(`bullet${PLAYER_1_ID}`, (b) => {
    destroy(b);
    player2.hurt(10);
  });

  player2.on("death", () => {
    destroy(player2);
    addKaboom(player2.pos);
    destroyAll(`bullet${PLAYER_2_ID}`);
    if (!winner) {
      winner = true;
      winnerText.text = "Player 1 Wins!";
      go('lose');
    }
  });
}

export { lhitosPart };
