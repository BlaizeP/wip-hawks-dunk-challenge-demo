namespace SpriteKind {
    export const Hoop = SpriteKind.create()
    export const Animation = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Harry,
    assets.animation`HarryAroundBackFinal`,
    100,
    false
    )
    pause(2000)
    animation.runImageAnimation(
    Harry,
    assets.animation`HarryDribblingFinal`,
    100,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Harry,
    assets.animation`HarryTossFinal`,
    50,
    false
    )
    pause(2000)
    animation.runImageAnimation(
    Harry,
    assets.animation`HarryDribblingFinal`,
    100,
    true
    )
})
info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scroller.scrollBackgroundWithSpeed(0, 0)
    animation.runImageAnimation(
    Harry,
    assets.animation`DunkAnimationFinal`,
    50,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Cone: Sprite = null
let Harry: Sprite = null
Harry = sprites.create(assets.image`HarrytheHawk`, SpriteKind.Player)
controller.moveSprite(Harry, 100, 100)
scene.setBackgroundImage(assets.image`BB Court w Audience`)
Harry.setStayInScreen(true)
info.setLife(5)
scroller.scrollBackgroundWithSpeed(-90, 0)
info.startCountdown(30)
animation.runImageAnimation(
Harry,
assets.animation`HarryDribblingFinal`,
100,
true
)
forever(function () {
    while (info.countdown() > 0) {
        Cone = sprites.createProjectileFromSide(assets.image`Pylon`, -90, 0)
        Cone.y = randint(25, 115)
        pause(500)
    }
})
