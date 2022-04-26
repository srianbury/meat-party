import { BasicWeapon } from "./weapons";
//import { getFire, getHeal } from "./items";

const PLAYER_HEALTH = 100;
const maxAmmo = 5;

class Player {
  constructor({ sprite, pos, playerId, controls }) {
    this.player = add([
      "player",
      sprite,
      pos,
      area(),
      body(),
      health(PLAYER_HEALTH),
      {
        playerId: playerId,
      },
    ]);

    this.weapon = new BasicWeapon();

    onKeyPress(controls.up, () => {
      this.doJump();
    });

    onKeyPress(controls.up, () => {
      if (isKeyDown(controls.shoot)) {
        this.weapon.ammoCheck(this.player, UP);
      }
    });

    onKeyPress(controls.down, () => {
      if (isKeyDown(controls.shoot)) {
        this.weapon.ammoCheck(this.player, DOWN);
      }
    });

    onKeyDown(controls.right, () => {
      this.doMove(RIGHT);
    });

    onKeyPress(controls.right, () => {
      if (isKeyDown(controls.shoot)) {
        this.weapon.ammoCheck(this.player, RIGHT);
      }
    });

    onKeyDown(controls.left, () => {
      this.doMove(LEFT);
    });

    onKeyPress(controls.left, () => {
      if (isKeyDown(controls.shoot)) {
        this.weapon.ammoCheck(this.player, LEFT);
      }
    });

    this.player.onCollide("heal", (heal) => {
      destroy(heal);
      this.player.heal(20);
    });

    this.player.onCollide("fire", (fire) => {
      destroy(fire);
      this.setWeapon(fire);
    });

    this.player.onCollide("banana", (banana) => {
      destroy(banana);
      this.setWeapon(banana);
    });

    this.player.onCollide("knife", (Chopper) => {
      destroy(Chopper);
      this.setWeapon(Chopper);
    });

    this.player.onCollide("pan", (Pan) => {
      destroy(Pan);
      this.setWeapon(Pan);
    });

    this.player.action(() => {
      if (
        this.player.pos.y > height() ||
        this.player.pos.y < -10 ||
        this.player.pos.x > width() ||
        this.player.pos.x < -10
      ) {
        this.player.hurt(PLAYER_HEALTH);
      }
    });

    this.player.on("death", () => {
      destroy(this.player);
      addKaboom(this.player.pos);
      go("end", { winner: this.player.playerId === 1 ? "2" : "1" }); // need to figure this one out
    });
  }

  setWeapon(options) {
    this.weapon = new BasicWeapon(options);
  }

  doJump() {
    this.player.jump();
  }

  doMove(dir) {
    this.player.move(dir.scale(300));
  }

  getPlayerStats() {
    return [
      `Player: ${this.player.playerId}`,
      `HP: ${this.player.hp()}`,
      `Ammo: ${this.weapon.curAmmo}`,
    ].join("\n");
  }
}

export { Player };
