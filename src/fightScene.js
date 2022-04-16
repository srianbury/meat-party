import { lhitosPart } from "./lhito";
import { mattsPart } from "./matt";
import { item } from "./item";

function fightScene(initPlayingField) {
  scene("fight", () => {
    initPlayingField();
    mattsPart();
    lhitosPart();
    item();
  });
}

export { fightScene };
