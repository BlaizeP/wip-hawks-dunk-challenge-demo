namespace SpriteKind {
    export const Hoop = SpriteKind.create()
    export const Animation = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Harry,
    assets.animation`HarrySomersaultFinal`,
    75,
    false
    )
    pause(1500)
    animation.runImageAnimation(
    Harry,
    assets.animation`HarryDribblingFinal`,
    75,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Harry,
    assets.animation`HarryAroundBackFinal`,
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    Harry,
    assets.animation`HarryDribblingFinal`,
    75,
    true
    )
})
info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scroller.scrollBackgroundWithSpeed(0, 0)
    animation.runImageAnimation(
    Harry,
    assets.animation`DunkAnimationFinal`,
    75,
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
controller.moveSprite(Harry, 0, 100)
scene.setBackgroundImage(assets.image`BB Court w Audience`)
Harry.setStayInScreen(true)
info.setLife(3)
scroller.scrollBackgroundWithSpeed(-90, 0)
info.startCountdown(20)
animation.runImageAnimation(
Harry,
assets.animation`HarryDribblingFinal`,
75,
true
)
forever(function () {
    while (info.countdown() > 0) {
        Cone = sprites.createProjectileFromSide(assets.image`Pylon`, -90, 0)
        Cone.y = randint(25, 115)
        pause(500)
    }
})
