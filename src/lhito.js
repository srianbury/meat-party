import { Player } from "./player";

function lhitosPart() {
  function getHealthStats(players) {
    return players.map((player) => player.getPlayerStats()).join("\n\n");
  }

  add([
    "item",
    sprite("bean", { height: 40, width: 40 }),
    pos(width() / 2, 80),
    area(),
    body(),
  ]);

  // player 2
  const player1 = new Player({
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
  });

  // player 2
  const player2 = new Player({
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
  });

  const players = [player1, player2];
  const healthStats = add([
    text(getHealthStats(players)),
    pos(12, 32),
    fixed(),
    scale(0.5),
  ]);

  healthStats.onUpdate(() => {
    healthStats.text = getHealthStats(players);
  });

  onCollide("player", "bullet", (player, bullet) => {
    if (player.playerId !== bullet.ownerId) {
      destroy(bullet);
      player.hurt(10);
    }
  });
}

export { lhitosPart };