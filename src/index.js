import { initKaboom } from "./kaboom";
import player1 from "../public/sprites/player1.png";
import player2 from "../public/sprites/player2.png";
import oven from "../public/sprites/oven.png";
import { startScene } from "./startScene";
import { fightScene } from "./fightScene";
import { endScene } from "./endScene";
import { initPlayingField } from "./playingField";

initKaboom();

loadSprite("player1", player1);
loadSprite("player2", player2);
loadSprite("oven", oven);

// add([sprite("player1"), pos(120, 80),area(),body()]);
// add([sprite("player2"), pos(80, 120)]);

startScene(initPlayingField);
fightScene(initPlayingField);
endScene(initPlayingField);
go("start");
