export function getFire() {
  //comment
  add([
    "fire",
    sprite("pepper", { height: 60, width: 90 }),
    pos(width() / 3, 300),
    area(),
    body(),
  ]);
}

export function getHeal() {
  add([
    "item",
    sprite("bean", { height: 40, width: 40 }),
    pos(width() / 2, 80),
    area(),
    body(),
  ]);
}

export function getBanana() {
  add([
    "banana",
    sprite("banana", { height: 40, width: 40 }),
    pos(width() * 0.4, 80),
    area(),
    body(),
    {
      curAmmo: 10,
      damage: 25,
      reloadTime: 10,
      maxAmmo: 10,
    },
  ]);
}
