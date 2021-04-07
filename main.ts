controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // Gestisco il salto dello sprite con la velocità dello sprite 
    Hero.vy = -100
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let Hero: Sprite = null
scene.setBackgroundColor(9)
Hero = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Hero)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(Hero)
// Blocco che gestisce la gravità dello sprite
Hero.ay = 100
