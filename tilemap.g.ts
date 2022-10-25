// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000070000000000000000000000010101000000000b0c000000000000000000000700020d0e00000000000000000002020200020200070000000000000000000a00000700030300000000000000000004000809000303000000000000000000000400030308000000000000000000050000000000000000000000000000000000000f0f0606000000000000000010000f00060006000000000000000000000000121213130000000000000000000000111111001300000000000000000000001000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.builtin.coral0,sprites.builtin.oceanDepths0,sprites.builtin.oceanSand4,sprites.builtin.oceanSand14,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.doorOpenWest,sprites.dungeon.floorLight1,sprites.dungeon.floorLight0,sprites.dungeon.stairSouth,sprites.dungeon.stairEast], TileScale.Sixteen);
            case "level0":
            case "level2":return tiles.createTilemap(hex`10001000000000000000000000000000000000000200020000000002000002000000000000000000000300020009090900020000000203020000000909090209000000000003030300000005050c0c0c030000000000020c0c0c0205050c0c0c00020000000305050c090b000005050500020000020002060602030709090200000b00000b000b02060101010101020909090902000205010404030106010b0b0b0b0b0b090b010b030404030603000200090900050505050404030203030502000b0b00020505050404030308080505000000000b05050502050a0308080505080200000000000505050508020805020000000000000000000000000000050500000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.builtin.forestTiles16,sprites.swamp.swampTile2,myTiles.tile4,sprites.castle.tileDarkGrass3,sprites.castle.tilePath2,myTiles.tile7], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`10001000010e0c010b0c010b0b01010c0e0c0c0c0c020505050505080b02050505080e0c0b030706060607040103040c01040c0c0c0304010b0e03070507040113040c0c0103040b130b09060e060a0c0c040b0d0c030a0c0c0c0b0b0c0c0b0b0e04130d01030b0c02080c01010b0b010c040d0f0b030e0c090a0c0c0c14140c07040d100b0907080c140c0e0c0b0c0c070e10100c0e0e09080c0c0101010e0d07040f0d0c010101090801130c0e0d0d0f04100d11120b0c0e040d0d0d0d0f0d020a0e0d0c010c0c0c090708100d0d0e0310100d0b0e0b0d0e100f09060606060a0d0f0d0c0c0c0f100d0d0e0d0d0d100d0d0d0e000000000c00000000000000000c0d00`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.swamp.swampTile2,sprites.castle.rock2], TileScale.Sixteen);
            case "level5":
            case "level5":return tiles.createTilemap(hex`14000f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency8], TileScale.Eight);
            case "level4":
            case "level4":return tiles.createTilemap(hex`1000100001020102010201020102010201020102020102010201020102010201020102010102010201020102010201020102010202010201020102010201020102010201010201020102010201020102010201020201020102010201020102010201020101020102010201020102010201020102020102010201020102010201020102010102010201020102010201020102010202010201020102010201020102010201010201020102010201020102010201020201020102010201020102010201020101020102010201020102010201020102020102010201020102010201020102010102010201020102010201020102010202010201020102010201020102010201`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.swamp.swampTile16,sprites.swamp.swampTile9,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile5":
            case "tile7":return tile7;
            case "transparency8":return transparency8;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
