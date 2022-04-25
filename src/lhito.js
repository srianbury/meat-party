import { Player } from "./player";
import { chosenPlayerSprites } from "./Scenes/characterSelectScene";
// import { playerControls } from "./options";
import { getBanana } from "./items";
import { getFire } from "./items";
import { getHeal } from "./items";

function lhitosPart() {
  function getHealthStats(players) {
    return players.map((player) => player.getPlayerStats()).join("\n\n");
  }

  loop(randi(3, 10), () => {
    var rndInt = 0;
    var rndInt = randi(0, 3);
    console.log(rndInt);

    if (rndInt == 0) {
      getFire();
    } else if (rndInt == 1) {
      getBanana();
    } else {
      getHeal();
    }
    var rndInt = 0;
  });

  // player 2
  const player1 = new Player({
    sprite: sprite("player" + chosenPlayerSprites[0], { height: 100, width: 100 }),
    pos: pos(150, 80),
    playerId: 1,
    controls: {
      // up: playerControls[0][0],
      // down: playerControls[0][1],
      // left: playerControls[0][2],
      // right: playerControls[0][3],
      // shoot: playerControls[0][4],
      up: "w",
      down: "s",
      left: "a",
      right: "d",
      shoot: "tab",
    },
  });

  // player 2
  const player2 = new Player({
    sprite: sprite("player" + chosenPlayerSprites[1], { height: 100, width: 100 }),
    pos: pos(width() - 400, 120),
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
      player.hurt(bullet.damage);
    }
  });
}

export { lhitosPart };
