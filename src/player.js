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
      // const { curAmmo, damage, reloadTime, maxAmmo, sprite, bullet } = fire;
      // this.setWeapon({ curAmmo, damage, reloadTime, maxAmmo, sprite, bullet });
      this.setWeapon(fire);
    });

    this.player.onCollide("banana", (banana) => {
      destroy(banana);
      const { curAmmo, damage, reloadTime, maxAmmo, sprite, bullet } = banana;
      this.setWeapon({ curAmmo, damage, reloadTime, maxAmmo, sprite, bullet });
    });

    this.player.onCollide("knife", (Chopper) => {
      destroy(Chopper);
      const { curAmmo, damage, reloadTime, maxAmmo, sprite } = Chopper;
      this.setWeapon({ curAmmo, damage, reloadTime, maxAmmo, sprite });
    });

    this.player.onCollide("pan", (Pan) => {
      destroy(Pan);
      const { curAmmo, damage, reloadTime, maxAmmo, sprite } = Pan;
      this.setWeapon({ curAmmo, damage, reloadTime, maxAmmo, sprite });
    });

    this.player.action(() => {
      if (this.player.pos.y > height()) {
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
      `Ammo ${this.weapon.curAmmo}`,
    ].join("\n");
  }
}

export { Player };
