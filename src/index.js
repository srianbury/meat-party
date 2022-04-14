import { k } from "./kaboom";
import { mattsPart } from "./matt";
import { lhitosPart } from "./lhito";

k.scene("main", () => {
  mattsPart();
  lhitosPart();
});

k.start("main");
