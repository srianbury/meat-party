export function getFire() {
  const bullet = sprite("pepper", { height: 60, width: 90 });
  //comment
  add([
    "fire",
    bullet,
    //pos(width() / 3, 300),
    //pos(width() / randi(.01,1), randi(0,300)),
    pos(randi(175, 1500), randi(0, 300)),
    area(),
    body(),
    {
      curAmmo: 1,
      damage: 50,
      reloadTime: 8,
      maxAmmo: 2,
      //sprite: sprite("pepper",{ height: 40, width: 40 })
      bullet,
      speed: 1500,
    },
  ]);
}

export function getHeal() {
  add([
    "heal",
    sprite("salt", { height: 60, width: 60 }),
    //pos(width() / 2, 80),
    //pos(width() / randi(.01,1), randi(0,300)),
    pos(randi(175, 1500), randi(0, 300)),
    area(),
    body(),
  ]);
}

export function getBanana() {
  const bullet = sprite("banana", { height: 40, width: 40 });
  add([
    "banana",
    bullet,
    //pos(width() * 0.4, 80),
    //pos(width() * randi(.01,1), randi(0,300)),
    pos(randi(175, 1500), randi(0, 300)),
    area(),
    body(),
    {
      curAmmo: 10,
      damage: 25,
      reloadTime: 10,
      maxAmmo: 10,
      //sprite: sprite("banana",{ height: 40, width: 40 })
      bullet,
      speed: 800,
    },
  ]);
}
export function getKnife() {
  const bullet = sprite("chopper", { height: 60, width: 60 });
  add([
    "knife",
    bullet,
    pos(randi(175, 1500), randi(0, 300)),
    area(),
    body(),
    {
      curAmmo: 3,
      damage: 15,
      reloadTime: 5,
      maxAmmo: 3,
      bullet,
      speed: 1200,
    },
  ]);
}
export function getPan() {
  const bullet = sprite("pan", { height: 70, width: 80 });
  add([
    "pan",
    bullet,
    pos(randi(175, 1500), randi(0, 300)),
    area(),
    body(),
    {
      curAmmo: 4,
      damage: 12,
      reloadTime: 10,
      maxAmmo: 7,
      bullet,
      speed: 750,
    },
  ]);
}
