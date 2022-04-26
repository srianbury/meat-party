export function getFire() {
  //comment
  add([
    "fire",
    sprite("pepper", { height: 60, width: 90 }),
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
  add([
    "banana",
    sprite("banana", { height: 40, width: 40 }),
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
    },
  ]);
}
export function getKnife() {
  add([
    "knife",
    sprite("chopper", { height: 60, width: 60 }),
    pos(randi(175, 1500), randi(0, 300)),
    area(),
    body(),
    {
      curAmmo: 3,
      damage: 15,
      reloadTime: 5,
      maxAmmo: 3,
      
     },
  ]);
}
export function getPan() {
 add([
    "pan",
    sprite("pan", { height: 70, width: 80 }),
    pos(randi(175, 1500), randi(0, 300)),
    area(),
    body(),
    {
      curAmmo: 4,
      damage: 12,
      reloadTime: 10,
      maxAmmo: 7,
        
      },
  ]); 
}
