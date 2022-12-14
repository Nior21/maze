function createObjects (image2: Image, count: number) {
    objectsArray = []
    for (let index = 0; index <= count - 1; index++) {
        objectsArray.push(sprites.create(image2.clone(), SpriteKind.Food))
        objectsArray[index].setPosition(8 + 16 * randint(0, 9), 8 + 16 * randint(0, 6))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let objectsArray: Sprite[] = []
tiles.setCurrentTilemap(tilemap`level4`)
let mySprite = sprites.create(img`
    ......ffff..............
    ....fff22fff............
    ...fff2222fff...........
    ..fffeeeeeefff..........
    ..ffe222222eef..........
    ..fe2ffffff2ef..........
    ..ffffeeeeffff......ccc.
    .ffefbf44fbfeff....cddc.
    .ffefbf44fbfeff...cddc..
    .fee4dddddd4eef.ccddc...
    fdfeeddddd4eeffecddc....
    fbffee4444ee4fddccc.....
    fbf4f222222f1edde.......
    fcf.f222222f44ee........
    .ff.f445544f............
    ....ffffffff............
    .....ff..ff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
createObjects(img`
    4 2 2 7 2 7 2 5 4 2 7 2 7 2 2 4 
    2 4 . . . . . 2 2 . . . . . 4 2 
    2 . 2 . . . . . . . . . . 2 . 2 
    7 . . 2 . . . . . . . . 2 . . 7 
    2 . . . 2 . . . . . . 2 . . . 2 
    7 . . . . 2 . . . . 2 . . . . 7 
    2 . . . . . 2 . . 2 . . . . . 2 
    4 2 . . . . . 2 2 . . . . . 2 5 
    5 2 . . . . . 2 2 . . . . . 2 4 
    2 . . . . . 2 . . 2 . . . . . 2 
    7 . . . . 2 . . . . 2 . . . . 7 
    2 . . . 2 . . . . . . 2 . . . 2 
    7 . . 2 . . . . . . . . 2 . . 7 
    2 . 2 . . . . . . . . . . 2 . 2 
    2 4 . . . . . 2 2 . . . . . 4 2 
    4 2 2 7 2 7 2 4 5 2 7 2 7 2 2 4 
    `, 10)
info.setScore(0)
