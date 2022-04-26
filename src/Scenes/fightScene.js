import { lhitosPart } from "../lhito";
import { mattsPart } from "../matt";

function fightScene(initPlayingField, music) {
  scene("fight", () => {
    initPlayingField();
    mattsPart();
    music.play();
    lhitosPart();
  });
}

export { fightScene };
