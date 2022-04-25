let chosenPlayerSprites = ["", "", "", ""];

function characterSelectScene() {
  const totalCharacters = 4;
  let choosingPlayer = 0;
  let numberOfPlayers = 2;

  scene("characterSelect", () => {
    //title of the page
    add([
      text("Character Select"),
      pos(width() / 2, height() / 7),
      scale(1),
      origin("center"),
    ]);

    //tells players who is currently choosing a character
    add([
      "selectingPlayer",
      text("Currently Choosing: Player" + (choosingPlayer + 1)),
      z(1),
      area(),
      pos(width() * 0.5, height() * 0.3),
      scale(1),
      origin("center"),
    ]);

    //general box for options
    add([
      "characterSelectBox",
      rect(width() * 0.95, height() * 0.7),
      pos(width() * 0.5, height() * 0.6),
      outline(4),
      area(),
      color(128, 128, 128),
      origin("center"),
    ]);

    for (let i = 1; i <= totalCharacters; i++) {
      add([
        "character",
        rect(width() * 0.2, height() * 0.2),
        pos(width() * 0.1 + 15 * i * (width() * 0.01), height() * 0.6),
        origin("center"),
        area(),
        outline(4),
        {
          character: i,
          chosen: false,
        },
        sprite("player" + i, { height: 100, width: 100 }),
      ]);
    }

    //selects the character, and updates color of already chosen characters
    onClick("character", (playerCharacter) => {
      if (!playerCharacter.chosen) {
        chosenPlayerSprites[choosingPlayer] =
          playerCharacter.character.toString();
        choosingPlayer = choosingPlayer + 1;
        playerCharacter.chosen = true;
        playerCharacter.color = GREEN;
        let playerSelectPrompt = get("selectingPlayer")[0];
        playerSelectPrompt.text =
          "Currently Choosing: Player" + (choosingPlayer + 1);
      } else {
        burp();
      }
    });

    onUpdate(() => {
      if (!(choosingPlayer < numberOfPlayers)) {
        go("start");
        choosingPlayer = 0;
      }
    });
  });
}

export { characterSelectScene, chosenPlayerSprites };
