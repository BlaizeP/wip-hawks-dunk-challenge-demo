namespace SpriteKind {
    export const Hoop = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Harry,
    assets.animation`HarryTossFinal`,
    50,
    false
    )
})
info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    Harry,
    assets.animation`Running to Net Animation FINAL`,
    50,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Harry,
    assets.animation`HarryDribblingFinal`,
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Cone: Sprite = null
let Harry: Sprite = null
scene.setBackgroundImage(assets.image`BB Court w Audience`)
Harry = sprites.create(assets.image`Harry the Hawk`, SpriteKind.Player)
controller.moveSprite(Harry, 100, 100)
Harry.setStayInScreen(true)
info.setLife(5)
scroller.scrollBackgroundWithSpeed(-90, 0)
info.startCountdown(10)
animation.runImageAnimation(
Harry,
assets.animation`HarryDribblingFinal`,
100,
true
)
forever(function () {
    if (info.countdown() == 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        scroller.scrollBackgroundWithSpeed(0, 0)
    } else {
        Cone = sprites.createProjectileFromSide(assets.image`Pylon`, -90, 0)
        Cone.y = randint(25, 115)
        Cone.setKind(SpriteKind.Enemy)
        pause(500)
    }
})
