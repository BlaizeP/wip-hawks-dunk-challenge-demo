namespace SpriteKind {
    export const Hoop = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Hoop, function (sprite, otherSprite) {
	
})
info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Cone: Sprite = null
scene.setBackgroundImage(assets.image`BB Court w Audience`)
let Harry = sprites.create(assets.image`Harry the Hawk`, SpriteKind.Player)
controller.moveSprite(Harry, 100, 100)
Harry.setStayInScreen(true)
info.setLife(5)
scroller.scrollBackgroundWithSpeed(-90, 0)
info.startCountdown(10)
animation.runImageAnimation(
Harry,
assets.animation`HarrywBall`,
200,
true
)
forever(function () {
    Cone = sprites.createProjectileFromSide(assets.image`Pylon`, -90, 0)
    Cone.y = randint(20, 115)
    Cone.setKind(SpriteKind.Enemy)
    pause(500)
})
