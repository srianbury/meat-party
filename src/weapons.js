class BasicWeapon {
  /*
   * player: who the weapon belongs to
   */
  constructor(options = {}) {
    const { curAmmo, damage, reloadTime, maxAmmo, bullet } = options;
    this.curAmmo = curAmmo || 5;
    this.reloading = false;
    this.damage = damage || 10;
    this.reloadTime = reloadTime || 3;
    this.maxAmmo = maxAmmo || 5;
    this.bullet = bullet || sprite("fireball", { height: 60, width: 90 });
    //this.sprite = sprite || sprite("firball",{ height: 40, width: 40 });
  }

  spawnBullet(player, dir) {
    add([
      //sprite,
      this.bullet,
      area(),
      pos(player.pos.add(40, 40)),
      origin("center"),
      move(dir, 1000), //
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
