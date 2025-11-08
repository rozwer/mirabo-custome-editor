let b = 0
let c = 0
let d = 0
player.onItemInteracted(MACE, function () {
    for (let index = 0; index < 3; index++) {
        mobs.spawnParticle(EXPLOSION_HUGE, pos(0, 0, 0))
        mobs.applyEffect(LEVITATION, mobs.target(NEAREST_PLAYER), 1, 40)
        mobs.spawnParticle(EXPLOSION_HUGE, pos(0, 1, 0))
    }
})
player.onItemInteracted(BLAZE_ROD, function () {
    b = player.getOrientation()
    b = b * 3.14 / 180
    c = Math.sin(b)
    d = Math.cos(b)
    for (let a = 0; a <= 20; a++) {
        mobs.spawn(EVOCATION_FANG, pos(0 - (a + 1) * c, 0, (a + 1) * d))
    }
})
player.onItemInteracted(GOLD_NUGGET, function () {
    b = player.getOrientation()
    b = b * 3.14 / 180
    c = Math.sin(b)
    d = Math.cos(b)
    for (let e = 0; e <= 20; e++) {
        mobs.spawn(LIGHTNING_BOLT, pos(0 - (e + 1) * c, 0, (e + 1) * d))
    }
})
player.onItemInteracted(TOTEM, function () {
    mobs.applyEffect(STRENGTH, mobs.target(NEAREST_PLAYER), 30, 255)
    mobs.applyEffect(RESISTANCE, mobs.target(NEAREST_PLAYER), 30, 255)
    mobs.applyEffect(REGENERATION, mobs.target(NEAREST_PLAYER), 30, 50)
})
player.onItemInteracted(IRON_SHOVEL, function () {
    blocks.fill(
    AIR,
    posCamera(2, 0, 2),
    posCamera(-2, -4, -2),
    FillOperation.Replace
    )
})
player.onArrowShot(function () {
    loops.pause(1000)
    player.execute(
    "/tp @p @e[type=arrow,c=1]"
    )
    player.execute(
    "/kill @e[type=arrow]"
    )
})
player.onItemInteracted(RABBIT_FOOT, function () {
    mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 5, 10)
    mobs.applyEffect(JUMP_BOOST, mobs.target(NEAREST_PLAYER), 5, 5)
})
loops.forever(function () {
    if (blocks.testForBlock(SLIME_BLOCK, pos(0, -1, 0))) {
        for (let index = 0; index < 5; index++) {
            mobs.spawnParticle(EXPLOSION_HUGE, pos(0, 0, 0))
            mobs.applyEffect(LEVITATION, mobs.target(NEAREST_PLAYER), 1, 30)
            mobs.spawnParticle(EXPLOSION_HUGE, pos(0, 1, 0))
        }
    }
})
player.onItemInteracted(FEATHER, function () {
    for (let index = 0; index < 15; index++) {
        mobs.spawnParticle(EXPLOSION_HUGE, posCamera(0, 3, 3))
        mobs.spawn(CHICKEN, posCamera(0, 3, 3))
    }
})
player.onItemInteracted(RECOVERY_COMPASS, function () {
    for (let index = 0; index < 4; index++) {
        mobs.spawn(mobs.monster(WARDEN), randpos(
        pos(3, 3, 3),
        pos(-3, 0, -3)
        ))
        mobs.spawn(mobs.monster(WARDEN), randpos(
        pos(3, 3, 3),
        pos(-3, 0, -3)
        ))
        mobs.spawn(mobs.monster(WARDEN), randpos(
        pos(3, 3, 3),
        pos(-3, 0, -3)
        ))
    }
})
エージェント操作.onChatCommand("1", function () {
    遊び用.home1()
})
