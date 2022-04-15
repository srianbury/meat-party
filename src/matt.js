function mattsPart() {

  //scene("game", ()=> {
    add([
        text("NEW GAME!"),
        pos(1,500),
        origin("left"),
        color(255,0,0),
        layer("UI"),
        area(),
        move(RIGHT, 500),
        cleanup()
        
    ])
 // })

 const score = add([
  text(0),
  pos(12, 12),
  fixed(),
])

const times = add([
  text(0),
  pos(900,5),
  fixed(),
  { time: 0 },
])

times.onUpdate(() => {
  times.time += dt()
  times.text = times.time.toFixed(2)
})

}

export { mattsPart };
