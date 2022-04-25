// let playerControls = [
//     [
//         "w",//up
//         "s",//down
//         "a",//left
//         "d",//right
//         "tab",//attack
//     ],
//     [
//         "up",//up
//         "down",//down
//         "left",//left
//         "right",//right
//         "enter",//attack
//     ]
// ]

// function options() {
//   const optionsBarText = ["Controls", "Dummy1", "Dummy2"];
//   const playerList = ["Player1", "Player2"];
//   let waitingForButtonInput = false;
//   let newControlButton = "";

//   function controlsOptions() {
//     const opacityValue = 0.5;
//     const selectedOpacityValue = 1.0;
//     let buttonOpacity = 0.5;
//     let selectedPlayer = 0;

//     //generates a list of buttons for how many players we want in our game
//     playerList.forEach((player,index) => {
//         //for the initial selected opacity generation
//         if(index === 0){
//             buttonOpacity = selectedOpacityValue;
//         }else{
//             buttonOpacity = opacityValue;
//         }

//         add([
//             "playerButton",
//             rect(width() * 0.1, 48),
//             pos(width() * (0.3 * (index + 1)), height() * 0.4),
//             outline(4),
//             opacity(buttonOpacity),
//             area(),
//             origin("center"),
//             color(0, 255, 255),
//             {
//                 index: index
//             },
//             text(player),
//           ]);
//     });

//     //image for up button
//     add([
//         "upButton",
//         rect(width() * 0.1, 48),
//         pos(width() * 0.3, height() * 0.6),
//         outline(4),
//         area(),
//         origin("center"),
//         color(224, 224, 224),
//         text("Up"),
//     ]);

//     //value for selected player's up control
//     add([
//         "values",
//         rect(width() * 0.1, 48),
//         pos(width() * 0.4, height() * 0.6),
//         outline(4),
//         area(),
//         origin("center"),
//         color(0, 255, 0),
//         {
//             purpose: 0
//         },
//         text(),
//     ]);

//     //image for down button
//     add([
//         "downButton",
//         rect(width() * 0.1, 48),
//         pos(width() * 0.3, height() * 0.8),
//         outline(4),
//         area(),
//         origin("center"),
//         color(224, 224, 224),
//         text("Down"),
//       ]);

//     //value for selected player's down control
//     add([
//         "values",
//         rect(width() * 0.1, 48),
//         pos(width() * 0.43, height() * 0.8),
//         outline(4),
//         area(),
//         origin("center"),
//         color(0, 255, 0),
//         {
//             purpose: 1
//         },
//         text(),
//     ]);

//     //image for right button
//     add([
//         "rightButton",
//         rect(width() * 0.1, 48),
//         pos(width() * 0.45, height() * 0.7),
//         outline(4),
//         area(),
//         origin("center"),
//         color(224, 224, 224),
//         text("Right"),
//       ]);

//     //value for selected player's right control
//     add([
//         "values",
//         rect(width() * 0.1, 48),
//         pos(width() * 0.58, height() * 0.7),
//         outline(4),
//         area(),
//         origin("center"),
//         color(0, 255, 0),
//         {
//             purpose: 3
//         },
//         text(),
//     ]);

//     //image for left button
//     add([
//         "leftButton",
//         rect(width() * 0.1, 48),
//         pos(width() * 0.16, height() * 0.7),
//         outline(4),
//         area(),
//         origin("center"),
//         color(224, 224, 224),
//         text("Left"),
//       ]);

//     //value for selected player's left control
//     add([
//         "values",
//         rect(width() * 0.1, 48),
//         pos(width() * 0.3, height() * 0.7),
//         outline(4),
//         area(),
//         origin("center"),
//         color(0, 255, 0),
//         {
//             purpose: 2
//         },
//         text(),
//     ]);

//     //image for attack button
//     add([
//         "attackButton",
//         rect(width() * 0.1, 48),
//         pos(width() * 0.75, height() * 0.7),
//         outline(4),
//         area(),
//         origin("center"),
//         color(224, 224, 224),
//         text("Attack"),
//       ]);

//     //value for selected player's attack control
//     add([
//         "values",
//         rect(width() * 0.1, 48),
//         pos(width() * 0.9, height() * 0.7),
//         outline(4),
//         area(),
//         origin("center"),
//         color(0, 255, 0),
//         {
//             purpose: 4
//         },
//         text(),
//     ]);

//       //when selected player updates
//       onUpdate("values", (control) => {
//         control.text = playerControls[selectedPlayer][control.purpose];
//       })

//       //onclick for player buttons
//       onClick("playerButton", (button) => {
//         button.opacity = 1.0;

//         if(selectedPlayer !== button.index){
//             let previousSelectedButton = get("playerButton")[selectedPlayer];
//             previousSelectedButton.opacity = 0.5;
//             selectedPlayer = button.index;
//         }

//       });

//     onCharInput((char) => {
//         console.log("im workin")
//         if(waitingForButtonInput){

//         console.log("player",selectedPlayer)
//         // console.log("purpose",value.purpose)
//         // console.log("current",playerControls[selectedPlayer][value.purpose])
//         destroyAll("newButtonModal");
//         // playerControls[selectedPlayer][value.purpose] = char;
//         newControlButton = char;
//         // console.log("new",playerControls[selectedPlayer][value.purpose])
//       }
//     });

//       onClick("values", (value) => {
//         add([
//             "newButtonModal",
//             rect(width() * 0.8, height() * 0.7),
//             pos(width() * 0.5, height() *0.5),
//             outline(4),
//             area(),
//             origin("center"),
//             color(0, 255, 255),
//             text("Press the button you \n would like to \n change the control to"),
//           ]);
//           waitingForButtonInput = true;
//           console.log("new button", newControlButton)

//       });
//   };

//   scene("options", () => {
//     add([
//       text("Options"),
//       pos(width() / 2, height() / 7),
//       scale(1),
//       origin("center"),
//     ]);

//     //exit button
//     add([
//       "Exit",
//       circle(40),
//       pos(width() - 50, height() / 20),
//       scale(1),
//       area(),
//       color(255, 0, 0),
//       origin("center"),
//       text("X"),
//     ]);

//     //procedurally creates all the tabs for the options bar
//     optionsBarText.forEach((option, index) => {
//       add([
//         option,
//         rect(width() * 0.01, 48),
//         //NOT THE BEST METHOD, SHOULD TRY AND FIGURE OUT A BETTER POSITIONING ALGORITHM
//         pos(width() / 7 + 20 * index * (width() * 0.01), height() / 4),
//         scale(0.5),
//         outline(4),
//         area(),
//         color(128, 128, 128),
//         origin("center"),
//         text(option),
//       ]);
//     });

//     //general box for options
//     add([
//         "optionBox",
//         rect(width() * 0.95, height() * 0.6),
//         pos(width() * 0.5, height() * 0.6),
//         outline(4),
//         area(),
//         color(128, 128, 128),
//         origin("center"),
//       ]);

//     //can look into procedurally generating onclicks for the options bar and maybe store all of the functions and adds that will display in another array of objects
//     onClick(optionsBarText[0], () => controlsOptions());
//     onClick("Exit", () => go("mainMenu"));
//   });
// }

// export { options, playerControls };
