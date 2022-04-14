import { initKaboom } from "./kaboom";
import { mattsPart } from "./matt";
import { lhitosPart } from "./lhito";

initKaboom();

scene("main", () => {
  mattsPart();
  lhitosPart();
});

start("main");
