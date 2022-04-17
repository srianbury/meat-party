function getFire(){ //comment
    add([
      "fire",
      sprite("pepper", { height: 60, width: 90 }),
      pos(width() / 3, 300),
      area(),
      body(),
    ]);
  };

  function getHeal(){
    add([
      "item",
      sprite("bean", { height: 40, width: 40 }),
      pos(width() / 2, 80),
      area(),
      body(),
    ]);
  };

  
export{ getFire, getHeal };