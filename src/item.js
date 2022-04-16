function item() {
  const item = add([
    "item",
    sprite("bean", { height: 40, width: 40 }),
    pos(900, 80),
    area(),
    body(),
    `item`,
  ]);
}

export { item };
