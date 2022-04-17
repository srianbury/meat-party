import { Player } from "./player";

function lhitosPart() {
  add([
    "item",
    sprite("bean", { height: 40, width: 40 }),
    pos(width() / 2, 80),
    area(),
    body(),
  ]);

  // player 2
  new Player({
    sprite: sprite("player1", { height: 100, width: 100 }),
    pos: pos(150, 80),
    playerId: 1,
    controls: {
      up: "w",
      down: "s",
      left: "a",
      right: "d",
      shoot: "tab",
    },
    healthBarPos: pos(12, 32),
  });

  // player 2
  new Player({
    sprite: sprite("player2", { height: 100, width: 100 }),
    pos: pos(width() - 300, 120),
    playerId: 2,
    controls: {
      up: "up",
      down: "down",
      left: "left",
      right: "right",
      shoot: "enter",
    },
    healthBarPos: pos(width() - 200, 32),
  });

  onCollide("player", "bullet", (player, bullet) => {
    if (player.playerId !== bullet.ownerId) {
      destroy(bullet);
      player.hurt(10);
    }
  });
}

export { lhitosPart };
