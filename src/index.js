import { initKaboom } from "./kaboom";
import { mattsPart } from "./matt";
import { lhitosPart } from "./lhito";

initKaboom();

scene("main", () => {
  mattsPart();
  lhitosPart();
  loadSprite("apple", "https://kaboomjs.com/sprites/apple.png");

  add([sprite("apple"), pos(80, 40), area(), body()]);
});

start("main");
