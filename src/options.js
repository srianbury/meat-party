function options() {
  const optionsBarText = ["Controls", "Dummy1", "Dummy2"];

  scene("options", () => {
    add([
      text("Options"),
      pos(width() / 2, height() / 7),
      scale(1),
      origin("center"),
    ]);

    //procedurally creates all the tabs for the options bar
    optionsBarText.forEach((option, index) => {
      console.log("xposition", index * (width() * 0.01));
      add([
        option,
        rect(width() * 0.01, 48),
        //NOT THE BEST METHOD, SHOULD TRY AND FIGURE OUT A BETTER POSITIONING ALGORITHM
        pos(width() / 7 + 20 * index * (width() * 0.01), height() / 4),
        scale(0.5),
        area(),
        color(128, 128, 128),
        origin("center"),
        text(option),
      ]);
    });

    //can look into procedurally generating onclicks for the options bar and maybe store all of the functions and adds that will display in another array of objects
    onClick(optionsBarText[0], () => burp());
  });
}

export { options };
