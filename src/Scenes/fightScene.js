import { lhitosPart } from "../lhito";
import { mattsPart } from "../matt";

function fightScene(initPlayingField) {
  scene("fight", () => {
    initPlayingField();
    mattsPart();
    lhitosPart();
  });
}

export { fightScene };
