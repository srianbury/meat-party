function mainMenu() {
  const title = "Welcome To Meat Party!!!";
  const subtitle = "ARE YOU RAW ENOUGH?";
  scene("mainMenu", () => {
    add([
      text(title),
      pos(width() / 2, height() / 3),
      scale(1),
      origin("center"),
    ]);

    add([
      text(subtitle),
      pos(width() / 2, height() / 2),
      scale(0.5),
      origin("center"),
    ]);

    //start button
    add([
      "startButton",
      rect(width() * 0.1, 48),
      pos(width() / 2, height() / 1.5),
      outline(4),
      area(),
      origin("center"),
      color(0, 255, 255),
      text("Start"),
    ]);

    //options button
    add([
      "optionsButton",
      rect(width() * 0.1, 48),
      pos(width() / 2, (height() / 1.3)),
      outline(4),
      area(),
      origin("center"),
      color(0, 255, 255),
      text("Options")
    ]);

    onClick("startButton", () => go("start"));
    onClick("optionsButton", () => go("options"));
          
    })
}

export { mainMenu };
