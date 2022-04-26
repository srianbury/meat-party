import { initKaboom } from "./kaboom";
import player1 from "../public/sprites/player1.png";
import player2 from "../public/sprites/player2.png";
import player3 from "../public/sprites/player3.png";
import player4 from "../public/sprites/player4.png";
import oven from "../public/sprites/oven.png";
import bean from "../public/sprites/bean.png";
import pepper from "../public/sprites/pepper.png";
import shelf from "../public/sprites/shelf2.png";
import banana from "../public/sprites/banana.png";
import reloaded from "url:../public/sounds/reloaded.mp3";
import song from "url:../public/sounds/song.mp3";
import { startScene } from "./Scenes/startScene";
import { fightScene } from "./Scenes/fightScene";
import { endScene } from "./Scenes/endScene";
import { characterSelectScene } from "./Scenes/characterSelectScene";
import carrot from "../public/sprites/Carrot.png";
import Chicken from "../public/sprites/Chicken.png";
import Chopper from "../public/sprites/Chopper.png";
import Pan from "../public/sprites/Frying Pan.png";
import Salt from "../public/sprites/Salt.png";
import Steak from "../public/sprites/Steak.png";
import brocolli from "../public/sprites/Brocilady.png";
import fireball from "../public/sprites/fireball.png";
import { initPlayingField } from "./playingField";
import { mainMenu } from "./Scenes/mainMenu";
// import { options } from "./options";

initKaboom();

loadSprite("player1", player1);
loadSprite("player2", player2);
loadSprite("player3", player3);
loadSprite("player4", player4);
loadSprite("oven", oven);
loadSprite("bean", bean);
loadSprite("pepper", pepper);
loadSprite("shelf", shelf);
loadSprite("banana", banana);
loadSprite("carrot", carrot);
loadSprite("chicken", Chicken);
loadSprite("chopper", Chopper);
loadSprite("pan", Pan);
loadSprite("salt", Salt);
loadSprite("steak", Steak);
loadSprite("brocolli", brocolli);
loadSprite("fireball", fireball);
loadSound("reloaded", reloaded);
loadSound("song", song);

const music = play("song", {
  volume: 0.8,
  loop: true,
});

mainMenu();
// options();
characterSelectScene();
startScene(initPlayingField);
fightScene(initPlayingField, music);
endScene(initPlayingField, music);
go("mainMenu");
