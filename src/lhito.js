function lhitosPart() {
  const PLAYER_HEALTH = 100;
  const PLAYER_1_ID = "1";
  const PLAYER_2_ID = "2";
  let winner = false;
  const maxAmmo = 5;

  function doJump(player) {
    player.jump();
  }

  function doMove(player, dir) {
    player.move(dir.scale(300));
  }

  function reload(player) {
    burp();
    player.curAmmo = maxAmmo;
    player.reloading = false;
  }

  function ammoCheck(player, position, dir) {
    if (player.curAmmo !== 0) {
      spawnBullet(player, position, dir);
      player.curAmmo = player.curAmmo - 1;
    } else {
      burp();
      if (!player.reloading) {
        wait(3, () => {
          reload(player);
        });
      }
      player.reloading = true;
    }
  }

  function spawnBullet(player, position, dir) {
    add([
      rect(12, 48),
      area(),
      pos(position),
      origin("center"),
      color(127, 127, 255),
      outline(4),
      move(dir, 1000),
      cleanup(),
      "bullet", // strings here means a tag
      {
        ownerId: player.playerId,
      },
    ]);
  }

  add([
    "item",
    sprite("bean", { height: 40, width: 40 }),
    pos(width() / 2, 80),
    area(),
    body(),
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
    {
      curAmmo: maxAmmo,
      reloading: false,
      playerId: 1,
    },
  ]);

  onKeyPress("w", () => {
    doJump(player1);
  });

  onKeyPress("w", () => {
    if (isKeyDown("tab")) {
      ammoCheck(player1, player1.pos.add(40, 40), UP);
    }
  });

  onKeyPress("s", () => {
    if (isKeyDown("tab")) {
      ammoCheck(player1, player1.pos.add(40, 40), DOWN);
    }
  });

  onKeyDown("d", () => {
    doMove(player1, RIGHT);
  });

  onKeyPress("d", () => {
    if (isKeyDown("tab")) {
      ammoCheck(player1, player1.pos.add(40, 40), RIGHT);
    }
  });

  onKeyDown("a", () => {
    doMove(player1, LEFT);
  });

  onKeyPress("a", () => {
    if (isKeyDown("tab")) {
      ammoCheck(player1, player1.pos.add(40, 40), LEFT);
    }
  });

  const player1HealthBar = add([text(player1.hp()), pos(12, 32), fixed()]);

  player1HealthBar.onUpdate(() => {
    player1HealthBar.text = player1.hp();
  });

  onCollide("player", "bullet", (player, bullet) => {
    if (player.playerId !== bullet.ownerId) {
      destroy(bullet);
      player.hurt(10);
    }
  });

  onCollide("player", "item", (player, item) => {
    destroy(item);
    player.heal(10);
  });

  player1.on("death", () => {
    destroy(player1);
    addKaboom(player1.pos);
    if (!winner) {
      winner = true;
      go("end", { winner: "2" });
    }
  });

  //player2 movement
  const player2 = add([
    "player",
    PLAYER_2_ID,
    sprite("player2", { height: 100, width: 100 }),
    pos(width() - 300, 120),
    area(),
    body(),
    health(PLAYER_HEALTH),
    scale(vec2(1)),
    {
      curAmmo: maxAmmo,
      reloading: false,
      playerId: 2,
    },
  ]);

  onKeyPress("up", () => {
    doJump(player2);
  });

  onKeyPress("up", () => {
    if (isKeyDown("enter")) {
      ammoCheck(player2, player2.pos.add(40, 40), UP);
    }
  });

  onKeyPress("down", () => {
    if (isKeyDown("enter")) {
      ammoCheck(player2, player2.pos.add(40, 40), DOWN);
    }
  });

  onKeyDown("right", () => {
    doMove(player2, RIGHT);
  });

  onKeyPress("right", () => {
    if (isKeyDown("enter")) {
      ammoCheck(player2, player2.pos.add(40, 40), RIGHT);
    }
  });

  onKeyDown("left", () => {
    doMove(player2, LEFT);
  });

  onKeyPress("left", () => {
    if (isKeyDown("enter")) {
      ammoCheck(player2, player2.pos.add(40, 40), LEFT);
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

  player2.on("death", () => {
    destroy(player2);
    addKaboom(player2.pos);
    if (!winner) {
      winner = true;
      go("end", { winner: "1" });
    }
  });
}

export { lhitosPart };
