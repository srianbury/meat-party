import { initKaboom } from "./kaboom";
import { mattsPart } from "./matt";
import { lhitosPart } from "./lhito";
import player1 from "../public/sprites/player1.png";
import player2 from "../public/sprites/player2.png";

initKaboom();

loadSprite("player1", player1);
loadSprite("player2", player2);

// add([sprite("player1"), pos(120, 80),area(),body()]);
// add([sprite("player2"), pos(80, 120)]);

add([
  rect(width(), 48),
  pos(0, height() - 48),
  outline(4),
  area(),
  solid(),
  color(127, 200, 255),
]);

mattsPart();
lhitosPart();
