class BasicWeapon {
  /*
   * player: who the weapon belongs to
   */
  constructor(curAmmo = 5, damage = 10, reloadTime = 3, maxAmmo = 5) {
    this.curAmmo = curAmmo;
    this.reloading = false;
    this.damage = damage;
    this.reloadTime = reloadTime;
    this.maxAmmo = maxAmmo;
  }

  spawnBullet(player, dir) {
    add([
      rect(12, 48),
      area(),
      pos(player.pos.add(40, 40)),
      origin("center"),
      color(127, 127, 255),
      outline(4),
      move(dir, 1000),
      cleanup(),
      "bullet", // strings here means a tag
      {
        ownerId: player.playerId,
        damage: this.damage,
      },
    ]);
  }

  ammoCheck(player, dir) {
    if (this.curAmmo !== 0) {
      this.spawnBullet(player, dir);
      this.curAmmo = this.curAmmo - 1;
    } else {
      burp();
      if (!this.reloading) {
        wait(this.reloadTime, () => {
          this.reload();
        });
      }
      this.reloading = true;
    }
  }

  reload() {
    play("reloaded");
    this.curAmmo = this.maxAmmo;
    this.reloading = false;
  }
}

export { BasicWeapon };
