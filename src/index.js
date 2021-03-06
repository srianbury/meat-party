import { initKaboom } from "./kaboom";
import calamari from "../public/sprites/calamari.png";
import meatman from "../public/sprites/meatman.png";
import hotdog from "../public/sprites/hotdog.png";
import meatball from "../public/sprites/meatball.png";
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
import Ribeye from "../public/sprites/ribeye.png";
import brocolli from "../public/sprites/Brocilady.png";
import fireball from "../public/sprites/fireball.png";
import { initPlayingField } from "./playingField";
import { mainMenu } from "./Scenes/mainMenu";
// import { options } from "./options";

initKaboom();

loadSprite("Calamari", calamari);
loadSprite("Meat Man", meatman);
loadSprite("Hot Dog", hotdog);
loadSprite("Meat Ball", meatball);
loadSprite("oven", oven);
loadSprite("bean", bean);
loadSprite("pepper", pepper);
loadSprite("shelf", shelf);
loadSprite("banana", banana);
loadSprite("Carrot", carrot);
loadSprite("Chicken", Chicken);
loadSprite("chopper", Chopper);
loadSprite("pan", Pan);
loadSprite("salt", Salt);
loadSprite("Rib Eye", Ribeye);
loadSprite("Brocollady", brocolli);
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
