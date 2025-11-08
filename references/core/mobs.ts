namespace mobs {
    /**
     * Queries information about a given target
     * @param target a target selector that determines the entity you're querying
     */
    //%
    export function queryTarget(target: TargetSelector): QueryTargetResult[] {
        return _queryTargetCore(target);
    }

    /**
     * Spawns a particle effect at the given location
     *
     * @param particle The particle to spawn
     * @param position The position for the particle to appear
     */
    //% blockId=minecraft_spawn_particle
    //% block="spawn particle $particle at $position"
    //% particle.shadow=minecraft_particle
    //% position.shadow=minecraftCreatePosition
    //% weight=100 help=mobs/spawn-particle
    export function spawnParticle(particle: number, position: Position) {
        const id = _getParticleId(particle);

        if (id) {
            player.execute(`particle ${id} ${position.toWorld().toString()}`);
        }
    }

    export function _getParticleId(id: Particle) {
        switch (id) {
            case Particle.BalloonGas: return "minecraft:balloon_gas_particle";
            case Particle.BasicCrit: return "minecraft:basic_crit_particle";
            case Particle.BasicFlame: return "minecraft:basic_flame_particle";
            case Particle.BasicPortal: return "minecraft:basic_portal_particle";
            case Particle.Bleach: return "minecraft:bleach";
            case Particle.BlueFlame: return "minecraft:blue_flame_particle";
            case Particle.CandleFlame: return "minecraft:candle_flame_particle";
            case Particle.ColoredFlame: return "minecraft:colored_flame_particle";
            case Particle.CriticalHit: return "minecraft:critical_hit_emitter";
            case Particle.CropGrowth: return "minecraft:crop_growth_emitter";
            case Particle.CropGrowthArea: return "minecraft:crop_growth_area_emitter";
            case Particle.DragonBreathFire: return "minecraft:dragon_breath_fire";
            case Particle.DragonBreathTrail: return "minecraft:dragon_breath_trail";
            case Particle.DragonDestroyBlock: return "minecraft:dragon_destroy_block";
            case Particle.DripHoney: return "minecraft:honey_drip_particle";
            case Particle.DripLava: return "minecraft:lava_drip_particle";
            case Particle.DripNectar: return "minecraft:nectar_drip_particle";
            case Particle.DripStalactiteLava: return "minecraft:stalactite_lava_drip_particle";
            case Particle.DripStalactiteWater: return "minecraft:stalactite_water_drip_particle";
            case Particle.DripWater: return "minecraft:water_drip_particle";
            case Particle.DustFalling: return "minecraft:falling_dust";
            case Particle.DustFallingBorder: return "minecraft:falling_border_dust_particle";
            case Particle.DustFallingConcretePowder: return "minecraft:falling_dust_concrete_powder_particle";
            case Particle.DustFallingDragonEgg: return "minecraft:falling_dust_dragon_egg_particle";
            case Particle.DustFallingGravel: return "minecraft:falling_dust_gravel_particle";
            case Particle.DustFallingRedSand: return "minecraft:falling_dust_red_sand_particle";
            case Particle.DustFallingSand: return "minecraft:falling_dust_sand_particle";
            case Particle.DustFallingScaffolding: return "minecraft:falling_dust_scaffolding_particle";
            case Particle.DustFallingTopSnow: return "minecraft:falling_dust_top_snow_particle";
            case Particle.DustLabTableHeatblock: return "minecraft:lab_table_heatblock_dust_particle";
            case Particle.DustMycelium: return "minecraft:mycelium_dust_particle";
            case Particle.DustObsidianGlow: return "minecraft:obsidian_glow_dust_particle";
            case Particle.DustRedstoneOre: return "minecraft:redstone_ore_dust_particle";
            case Particle.DustRedstoneRepeater: return "minecraft:redstone_repeater_dust_particle";
            case Particle.DustRedstoneTorch: return "minecraft:redstone_torch_dust_particle";
            case Particle.DustRedstoneWire: return "minecraft:redstone_wire_dust_particle";
            case Particle.DustRisingBorder: return "minecraft:rising_border_dust_particle";
            case Particle.EggDestroy: return "minecraft:egg_destroy_emitter";
            case Particle.ElephantToothPasteVapor: return "minecraft:elephant_tooth_paste_vapor_particle";
            case Particle.EnchantingTable: return "minecraft:enchanting_table_particle";
            case Particle.EndChest: return "minecraft:end_chest";
            case Particle.Endrod: return "minecraft:endrod";
            case Particle.EvocationFang: return "minecraft:evocation_fang_particle";
            case Particle.Explosion: return "minecraft:explosion_particle";
            case Particle.ExplosionCameraShoot: return "minecraft:camera_shoot_explosion";
            case Particle.ExplosionCauldron: return "minecraft:cauldron_explosion_emitter";
            case Particle.ExplosionDeath: return "minecraft:death_explosion_emitter";
            case Particle.ExplosionDragonDeath: return "minecraft:dragon_death_explosion_emitter";
            case Particle.ExplosionDragonDying: return "minecraft:dragon_dying_explosion";
            case Particle.ExplosionHuge: return "minecraft:huge_explosion_emitter";
            case Particle.ExplosionHugeLab: return "minecraft:huge_explosion_lab_misc_emitter";
            case Particle.ExplosionLarge: return "minecraft:large_explosion";
            case Particle.ExplosionSingle: return "minecraft:explosion_manual";
            case Particle.EyeofenderDeathExplode: return "minecraft:eyeofender_death_explode_particle";
            case Particle.FireVapor: return "minecraft:misc_fire_vapor_particle";
            case Particle.Heart: return "minecraft:heart_particle";
            case Particle.IceEvaporation: return "minecraft:ice_evaporation_emitter";
            case Particle.KnockbackRoar: return "minecraft:knockback_roar_particle";
            case Particle.LabTableMystical: return "minecraft:lab_table_misc_mystical_particle";
            case Particle.Lava: return "minecraft:lava_particle";
            case Particle.MagnesiumSalts: return "minecraft:magnesium_salts_emitter";
            case Particle.MobBlockSpawn: return "minecraft:mob_block_spawn_emitter";
            case Particle.MobPortal: return "minecraft:mob_portal";
            case Particle.Mobflame: return "minecraft:mobflame_emitter";
            case Particle.MobflameSingle: return "minecraft:mobflame_single";
            case Particle.Mobspell: return "minecraft:mobspell_emitter";
            case Particle.Note: return "minecraft:note_particle";
            case Particle.ObsidianTear: return "minecraft:obsidian_tear_particle";
            case Particle.PhantomTrail: return "minecraft:phantom_trail_particle";
            case Particle.PortalDirectional: return "minecraft:portal_directional";
            case Particle.PortalReverse: return "minecraft:portal_reverse_particle";
            case Particle.RainSplash: return "minecraft:rain_splash_particle";
            case Particle.SculkSensorRedstone: return "minecraft:sculk_sensor_redstone_particle";
            case Particle.Shriek: return "minecraft:shriek_particle";
            case Particle.ShulkerBullet: return "minecraft:shulker_bullet";
            case Particle.SilverfishGrief: return "minecraft:silverfish_grief_emitter";
            case Particle.SmokeBasic: return "minecraft:basic_smoke_particle";
            case Particle.SmokeCampfire: return "minecraft:campfire_smoke_particle";
            case Particle.SmokeCampfireTall: return "minecraft:campfire_tall_smoke_particle";
            case Particle.SmokeLlamaSpit: return "minecraft:llama_spit_smoke";
            case Particle.Snowflake: return "minecraft:snowflake_particle";
            case Particle.Soul: return "minecraft:soul_particle";
            case Particle.SoulSculk: return "minecraft:sculk_soul_particle";
            case Particle.Sparkler: return "minecraft:sparkler_emitter";
            case Particle.SpellArrow: return "minecraft:arrow_spell_emitter";
            case Particle.SpellEvoker: return "minecraft:evoker_spell";
            case Particle.SpellSplash: return "minecraft:splash_spell_emitter";
            case Particle.SporeBlossomAmbient: return "minecraft:spore_blossom_ambient_particle";
            case Particle.SporeBlossomShower: return "minecraft:spore_blossom_shower_particle";
            case Particle.Stunned: return "minecraft:stunned_emitter";
            case Particle.Totem: return "minecraft:totem_particle";
            case Particle.TotemSingle: return "minecraft:totem_manual";
            case Particle.VillagerAngry: return "minecraft:villager_angry";
            case Particle.VillagerHappy: return "minecraft:villager_happy";
            case Particle.WaterEvaporationActor: return "minecraft:water_evaporation_actor_emitter";
            case Particle.WaterEvaporationBucket: return "minecraft:water_evaporation_bucket_emitter";
            case Particle.WaterEvaporationSingle: return "minecraft:water_evaporation_manual";
            case Particle.WaterSplash: return "minecraft:water_splash_particle";
            case Particle.WaterSplashSingle: return "minecraft:water_splash_particle_manual";
            case Particle.WaterWake: return "minecraft:water_wake_particle";
            case Particle.WitherBossInvulnerable: return "minecraft:wither_boss_invulnerable";
            default:
                player.errorMessage("Unknown Particle enum value");
                return undefined;
        }
    }
}