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

  function reload(playerId){
    burp()
    if(playerId === "1"){
      player1.curAmmo = maxAmmo
      player1.reloading = false;
    }else if(playerId === "2"){
      player2.curAmmo = maxAmmo
      player2.reloading = false;
    }
  }

  function ammoCheck(playerId, position, dir){
    if(playerId === "1"){
      if(player1.curAmmo !== 0){
        spawnBullet(playerId, position, dir);
        player1.curAmmo = player1.curAmmo - 1
      }else{
        burp()
        if(!player1.reloading){
          wait(3,() => {reload(playerId)});
        }
        player1.reloading = true;
      }
    }else if(playerId === "2"){
      if(player2.curAmmo !== 0){
        spawnBullet(playerId, position, dir);
        player2.curAmmo = player2.curAmmo - 1
      }else{
        burp()
        if(!player2.reloading){
          wait(3,() => {reload(playerId)});
        }
        player2.reloading = true;
      }
    }
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
      reloading: false
    }
  ]);

  onKeyPress("w", () => {
    doJump(player1);
  });

  onKeyPress("w", () => {
    if (isKeyDown("tab")) {
      ammoCheck(PLAYER_1_ID, player1.pos.add(40, 40), UP);
    }
  });

  onKeyPress("s", () => {
    if (isKeyDown("tab")) {
      ammoCheck(PLAYER_1_ID, player1.pos.add(40, 40), DOWN);
    }
  });

  onKeyDown("d", () => {
    doMove(player1, RIGHT);
  });

  onKeyPress("d", () => {
    if (isKeyDown("tab")) {
      ammoCheck(PLAYER_1_ID, player1.pos.add(40, 40), RIGHT);
    }
  });

  onKeyDown("a", () => {
    doMove(player1, LEFT);
  });

  onKeyPress("a", () => {
    if (isKeyDown("tab")) {
      ammoCheck(PLAYER_1_ID, player1.pos.add(40, 40), LEFT);
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

  player1.onCollide("item", (b) => {
    destroy(b);
    player1.heal(10);
  });

  player1.on("death", () => {
    destroy(player1);
    addKaboom(player1.pos);
    destroyAll(`bullet${PLAYER_1_ID}`);
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
      reloading: false
    }
  ]);

  onKeyPress("up", () => {
    doJump(player2);
  });

  onKeyPress("up", () => {
    if (isKeyDown("enter")) {
      ammoCheck(PLAYER_2_ID, player2.pos.add(40, 40), UP);
    }
  });

  onKeyPress("down", () => {
    if (isKeyDown("enter")) {
      ammoCheck(PLAYER_2_ID, player2.pos.add(40, 40), DOWN);
    }
  });

  onKeyDown("right", () => {
    doMove(player2, RIGHT);
  });

  onKeyPress("right", () => {
    if (isKeyDown("enter")) {
      ammoCheck(PLAYER_2_ID, player2.pos.add(40, 40), RIGHT);
    }
  });

  onKeyDown("left", () => {
    doMove(player2, LEFT);
  });

  onKeyPress("left", () => {
    if (isKeyDown("enter")) {
      ammoCheck(PLAYER_2_ID, player2.pos.add(40, 40), LEFT);
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

  player2.onCollide("item", (b) => {
    destroy(b);
    player2.heal(10);
  });

  player2.on("death", () => {
    destroy(player2);
    addKaboom(player2.pos);
    destroyAll(`bullet${PLAYER_2_ID}`);
    if (!winner) {
      winner = true;
      go("end", { winner: "1" });
    }
  });
}

export { lhitosPart };
