import { initKaboom } from "./kaboom";
import player1 from "../public/sprites/player1.png";
import player2 from "../public/sprites/player2.png";
import oven from "../public/sprites/oven.png";
import bean from "../public/sprites/bean.png";
import pepper from "../public/sprites/pepper.png";
import shelf from "../public/sprites/shelf2.png";
import banana from "../public/sprites/banana.png";
import reloaded from "url:../public/sounds/reloaded.mp3";
import { startScene } from "./startScene";
import { fightScene } from "./fightScene";
import { endScene } from "./endScene";
import { initPlayingField } from "./playingField";
import {mainMenu} from "./mainMenu";

initKaboom();

loadSprite("player1", player1);
loadSprite("player2", player2);
loadSprite("oven", oven);
loadSprite("bean", bean);
loadSprite("pepper", pepper);
loadSprite("shelf", shelf);
loadSprite("banana", banana);
loadSound("reloaded", reloaded);

mainMenu();
startScene(initPlayingField);
fightScene(initPlayingField);
endScene(initPlayingField);
go("mainMenu");
