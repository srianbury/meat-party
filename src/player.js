const PLAYER_HEALTH = 100;
const maxAmmo = 5;

class Player {
  constructor({ sprite, pos, playerId, controls, healthBarPos }) {
    this.player = add([
      "player",
      sprite,
      pos,
      area(),
      body(),
      health(PLAYER_HEALTH),
      {
        curAmmo: maxAmmo,
        reloading: false,
        playerId: playerId,
      },
    ]);

    onKeyPress(controls.up, () => {
      this.doJump();
    });

    onKeyPress(controls.up, () => {
      if (isKeyDown(controls.shoot)) {
        this.ammoCheck(this.player.pos.add(40, 40), UP);
      }
    });

    onKeyPress(controls.down, () => {
      if (isKeyDown(controls.shoot)) {
        this.ammoCheck(this.player.pos.add(40, 40), DOWN);
      }
    });

    onKeyDown(controls.right, () => {
      this.doMove(RIGHT);
    });

    onKeyPress(controls.right, () => {
      if (isKeyDown(controls.shoot)) {
        this.ammoCheck(this.player.pos.add(40, 40), RIGHT);
      }
    });

    onKeyDown(controls.left, () => {
      this.doMove(LEFT);
    });

    onKeyPress(controls.left, () => {
      if (isKeyDown(controls.shoot)) {
        this.ammoCheck(this.player.pos.add(40, 40), LEFT);
      }
    });

    this.healthBar = add([
      text(this.getPlayerStats()),
      healthBarPos, // make this an array or something??
      fixed(),
      scale(0.5),
    ]);

    this.healthBar.onUpdate(() => {
      this.healthBar.text = this.getPlayerStats();
    });

    this.player.onCollide("item", (item) => {
      destroy(item);
      this.player.heal(10);
    });

    this.player.on("death", () => {
      destroy(this.player);
      addKaboom(this.player.pos);
      go("end", { winner: this.player.playerId === 1 ? "2" : "1" }); // need to figure this one out
    });
  }

  doJump() {
    this.player.jump();
  }

  doMove(dir) {
    this.player.move(dir.scale(300));
  }

  spawnBullet(position, dir) {
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
        ownerId: this.player.playerId,
      },
    ]);
  }

  ammoCheck(position, dir) {
    if (this.player.curAmmo !== 0) {
      this.spawnBullet(position, dir);
      this.player.curAmmo = this.player.curAmmo - 1;
    } else {
      burp();
      if (!this.player.reloading) {
        wait(3, () => {
          this.reload();
        });
      }
      this.player.reloading = true;
    }
  }

  reload() {
    play("reloaded");
    this.player.curAmmo = maxAmmo;
    this.player.reloading = false;
  }

  getPlayerStats() {
    return [`HP: ${this.player.hp()}`, `Ammo ${this.player.curAmmo}`].join(
      "\n"
    );
  }
}

export { Player };
