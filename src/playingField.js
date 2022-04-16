function initPlayingField() {
  // playing platform
  add([
    rect(width() * 0.75, 48),
    pos(width() / 2, height() - 170),
    outline(4),
    origin("center"),
    area(),
    solid(),
    color(127, 200, 255),
  ]);

  // bottom platform, if the player touches this they die
  add([
    rect(width(), 48),
    pos(0, height()),
    outline(4),
    area(),
    solid(),
    color(127, 200, 255),
  ]);

  // background
  add([
    sprite("oven", { height: height() * 0.75, width: width() * 0.75 }),
    pos(width() / 2, height() / 2 + 100),
    origin("center"),
    fixed(), // Keep the background position fixed even when the camera moves
  ]);
}

export { initPlayingField };