
function lhitosPart() {
//player1 movement
 const player1 = add(["player","1",sprite("player1"), pos(120, 80),area(),body()]);

  onKeyPress("space", () => {
    player1.jump()
  })

  onKeyPress("tab", () => {
    player1.move(RIGHT.scale(30000))
  })

  onKeyDown("d", () => {
    player1.move(RIGHT.scale(100))
  })
  onKeyDown("a", () => {
    player1.move(LEFT.scale(100))
  })


//player2 movement
const player2 = add(["player","2",sprite("player2"), pos(400, 120),area(),body(), scale(vec2(1))]);

onKeyPress("control", () => {
  player2.jump()
})

onKeyPress("enter", () => {
  player2.move(LEFT.scale(30000))
})

onKeyDown("right", () => {
  player2.move(RIGHT.scale(100))
})
onKeyDown("left", () => {
  player2.move(LEFT.scale(100))
})


//collision
onCollide("1","2", () => {
  //burp()
  //can get hella annoying if it's procced multiple times
})

}

export { lhitosPart };
