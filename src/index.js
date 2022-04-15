import { initKaboom } from "./kaboom";
import { mattsPart } from "./matt";
import { lhitosPart } from "./lhito";
import player1 from "../public/sprites/player1.png";
import player2 from "../public/sprites/player2.png";
import oven from "../public/sprites/oven.png";

initKaboom();

loadSprite("player1", player1);
loadSprite("player2", player2);
loadSprite("oven", oven);

// add([sprite("player1"), pos(120, 80),area(),body()]);
// add([sprite("player2"), pos(80, 120)]);

// playing platform
add([
  rect(width() * 0.75, 48),
  pos(width() / 2, height() - 170),
  outline(4),
  origin("center"),
  area(),
  solid(),
  color(127, 200, 255),
]);

// bottom platform, if the player touches this they die
add([
  rect(width(), 48),
  pos(0, height()),
  outline(4),
  area(),
  solid(),
  color(127, 200, 255),
]);

// background
add([
  sprite("oven", { height: height() * 0.75, width: width() * 0.75 }),
  pos(width() / 2, height() / 2 + 100),
  origin("center"),
  fixed(), // Keep the background position fixed even when the camera moves
]);

mattsPart();
lhitosPart();
