import { BasicWeapon } from "./weapons";
import { getFire, getHeal } from "./items";

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

    this.player.onCollide("item", (item) => {
      destroy(item);
      this.player.heal(10);
      wait(3, () => {
        getHeal();
      });
    });

    this.player.onCollide("fire", (fire) => {
      destroy(fire);
      this.weapon.curAmmo += 1;
      wait(3, () => {
        getFire();
      });
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

  getPlayerStats() {
    return [
      `Player: ${this.player.playerId}`,
      `HP: ${this.player.hp()}`,
      `Ammo ${this.weapon.curAmmo}`,
    ].join("\n");
  }
}

export { Player };
