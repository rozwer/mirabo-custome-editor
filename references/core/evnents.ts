declare namespace events {
    //% shim=events::__onEventAsync
    //% promise
    export function _onEvent(eventname: string, handler: (data: any) => void): void;
}

namespace events {
    export enum BlockPlacementMethod {
        //% block="entity"
        //% blockIdentity="events._blockPlacementMethod"
        Entity = 0,
        //% block="command"
        //% blockIdentity="events._blockPlacementMethod"
        Command = 1
    }

    export enum MobSpawnMethod {
        //% block="spawn egg"
        SpawnEgg = 1,
        //% block="command"
        Command = 2,
        //% block="dispenser"
        Dispenser = 3,
        //% block="spawner"
        Spawner = 4,
        //% block="unknown"
        Unknown = 0,
    }

    export enum AcquisitionMethod {
        //% block="picked up"
        //% blockIdentity="events._acquisitionMethod"
        PickedUp = 1,
        //% block="crafted"
        //% blockIdentity="events._acquisitionMethod"
        Crafted = 2,
        //% block="taken from chest"
        //% blockIdentity="events._acquisitionMethod"
        TakenFromChest = 3,
        //% block="taken from ender chest"
        //% blockIdentity="events._acquisitionMethod"
        TakenFromEnderChest = 4,
        //% block="bought"
        //% blockIdentity="events._acquisitionMethod"
        Bought = 5,
        //% block="anvil"
        //% blockIdentity="events._acquisitionMethod"
        Anvil = 6,
        //% block="smelted"
        //% blockIdentity="events._acquisitionMethod"
        Smelted = 7,
        //% block="brewed"
        //% blockIdentity="events._acquisitionMethod"
        Brewed = 8,
        //% block="bottle"
        //% blockIdentity="events._acquisitionMethod"
        Bottle = 9,
        //% block="trading"
        //% blockIdentity="events._acquisitionMethod"
        Trading = 10,
        //% block="fishing"
        //% blockIdentity="events._acquisitionMethod"
        Fishing = 11,
        //% block="unknown"
        //% blockIdentity="events._acquisitionMethod"
        Unknown = -1,
        //% block="none"
        //% blockIdentity="events._acquisitionMethod"
        None = 0,
    }

    export enum ItemInteractMethod {
        //% block="use"
        //% blockIdentity="events._itemInteractMethod"
        Use = 0,
        //% block="place"
        //% blockIdentity="events._itemInteractMethod"
        Place = 1
    }

    export enum UseMethod {
        //% block="equip armor"
        EquipArmor = 0,
        //% block="eat"
        Eat = 1,
        //% block="attack"
        Attack = 2,
        //% block="consume"
        Consume = 3,
        //% block="throw"
        Throw = 4,
        //% block="shoot"
        Shoot = 5,
        //% block="place"
        Place = 6,
        //% block="fill bottle"
        FillBottle = 7,
        //% block="fill bucket"
        FillBucket = 8,
        //% block="pour bucket"
        PourBucket = 9,
        //% block="use tool"
        UseTool = 10,
        //% block="unknown"
        Unknown = -1,
    }

    export enum ActorDamageCause {
        //% block="contact"
        Contact = 1,
        //% block="entity attack"
        EntityAttack = 2,
        //% block="projectile"
        Projectile = 3,
        //% block="suffocation"
        Suffocation = 4,
        //% block="fall"
        Fall = 5,
        //% block="fire"
        Fire = 6,
        //% block="fire tick"
        FireTick = 7,
        //% block="lava"
        Lava = 8,
        //% block="drowning"
        Drowning = 9,
        //% block="block explosion"
        BlockExplosion = 10,
        //% block="entity explosion"
        EntityExplosion = 11,
        //% block="void"
        Void = 12,
        // self is referred to in game as "suicide"
        //% block="self"
        Self = 13,
        //% block="magic"
        Magic = 14,
        //% block="wither"
        Wither = 15,
        //% block="starve"
        Starve = 16,
        //% block="anvil"
        Anvil = 17,
        //% block="thorns"
        Thorns = 18,
        //% block="falling block"
        FallingBlock = 19,
        //% block="piston"
        Piston = 20,
        //% block="fly into wall"
        FlyIntoWall = 21,
        //% block="magma"
        Magma = 22,
        //% block="fireworks"
        Fireworks = 23,
        //% block="lightning"
        Lightning = 24,
        //% block="charging"
        Charging = 25,
        //% block="all"
        All = 31,
        //% block="none"
        None = -1,
        //% block="override"
        Override = 0,
    }

    export interface Enchantment {
        name: string;
        type: number;
        level: number;
    }

    /**
     * Runs code whenever a block is broken.
     *
     * @param block     The block that was broken
     * @param tool      The tool used to break the block or -1 if no tool was used
     * @param count     The number of blocks broken
     */
    export function onBlockBroken(handler: (block: number, tool: number, count: number) => void) {
        _onEvent("BlockBroken", data => {
            handler(
                readBlock(data),
                readTool(data),
                data.count as number
            );
        })
    }

    /**
     * Runs code whenever a block is placed.
     *
     * @param block     The block that was placed
     * @param tool      The tool used to place the block
     * @param count     The number of blocks placed
     * @param method    The method by which the block was placed
     */
    export function onBlockPlaced(handler: (block: number, tool: number, count: number, method: BlockPlacementMethod) => void) {
        _onEvent("BlockPlaced", data => {
            handler(
                readBlock(data),
                readTool(data),
                data.count as number,
                data.placementMethod as number
            );
        })
    }

    /**
     * Runs code whenever a camera is used.
     *
     * @param isSelfie  True if the camera was used to take a selfie, false otherwise
     */
    export function onCameraUsed(handler: (isSelfie: boolean) => void) {
        _onEvent("CameraUsed", data => {
            handler(
                data.isSelfie as boolean
            );
        })
    }

    /**
     * Runs code when end of day is reached in-game
     */
    export function onEndOfDay(handler: () => void) {
        _onEvent("EndOfDay", () => {
            handler();
        })
    }

    /**
     * Runs code whenever a new entity (mob) is spawned.
     *
     * Example triggers:
     *     When you use an egg to spawn a mob, like a `Spawn Cow` egg
     *     When you summon a mob using the `summon` command
     *
     * @param mob       The mob that was spawned
     * @param spawner   The method used to spawn the mob. For example, `unknown`, `spawn egg`, `command`, `dispenser`, or `spawner`
     */
    export function onEntitySpawned(handler: (mob: number, spawner: string) => void) {
        _onEvent("EntitySpawned", data => {
            handler(
                data.mob.id as number,
                mobSpawnMethodToString(data.spawnType as MobSpawnMethod)
            )
        })
    }

    /**
     * Runs code whenever a player acquires or picks up an item.
     *
     * Example triggers:
     *     When you pick up a stack of items someone dropped for you
     *     When you pick up cobblestone that you mined
     *
     * @param item      The item that was acquired
     * @param count     The number of items acquired
     * @param method    The method by which the item was acquired
     */
    export function onItemAcquired(handler: (item: number, count: number, method: AcquisitionMethod) => void) {
        _onEvent("ItemAcquired", data => {
            handler(
                readItem(data),
                data.count as number,
                data.acquisitionMethodId as number
            )
        })
    }

    /**
     * Runs code when an item is crafted. This event isn't currently active.
     */
    export function onItemCrafted(handler: (item: number, count: number) => void) {
        _onEvent("ItemCrafted", data => {
            handler(
                readItem(data),
                data.count as number
            )
        })
    }

    /**
     * Runs code when an item is dropped onto the ground.
     *
     * Example triggers:
     *     When you drop items from your inventory
     *     When you press Q to drop your equipped item
     *
     * @param item  The item that was dropped
     * @param count The quantity of that item dropped
     */
    export function onItemDropped(handler: (item: number, count: number) => void) {
        _onEvent("ItemDropped", data => {
            handler(
                readItem(data),
                data.count as number
            )
        })
    }

    /**
     * Runs code when an item is equipped by the player into an armor slot or an off-hand slot.
     *
     * Example triggers:
     *     When you place a shield in your off-hand slot (by pressing F)
     *     When you put on a pair of iron leggings
     *
     * @param item          The item that was equipped
     * @param slot          The slot that the item was equipped to
     * @param enchantments  An array of enchantments that the equipped item has
     */
    export function onItemEquipped(handler: (item: number, slot: number, enchantments: Enchantment[]) => void) {
        _onEvent("ItemEquipped", data => {
            handler(
                readItem(data),
                data.slot as number,
                readEnchantments(data.item)
            )
        })
    }

    /**
     * Runs code when an item is interacted with.
     *
     * Example triggers:
     *     When you switch on a lever
     *     When you place a block down
     *
     * Note: Stepping on pressure pads will not trigger this event!
     *
     * @param item      The item that was interacted with
     * @param count     The number of items interacted with
     * @param method    The method by which the item was interacted with
     */
    export function onItemInteracted(handler: (item: number, count: number, method: ItemInteractMethod) => void) {
        _onEvent("ItemInteracted", data => {
            handler(
                readItem(data),
                data.count as number,
                data.method as ItemInteractMethod
            )
        })
    }

    /**
     * Runs code when an item is smelted and removed from a furnace.
     *
     * Example trigger:
     *     When you smelt iron ore in a furnace and remove the resulting iron ingots
     *
     * @param item          The item that was removed from the furnace
     * @param fuelSource    The fuel source that was used to smelt the item
     */
    export function onItemSmelted(handler: (item: number, fuelSource: number) => void) {
        _onEvent("ItemSmelted", data => {
            handler(
                readItem(data),
                readItem(data, "fuelSource")
            )
        })
    }

    /**
     * Runs code when an item is used.
     *
     * Example trigger:
     *     When you till soil with a hoe
     *     When you dump water out of a bucket
     *
     * @param item      The item that was used
     * @param method    The method by which the item was used, such as "use tool", "pour bucket", etc.
     */
    export function onItemUsed(handler: (item: number, method: string) => void) {
        _onEvent("ItemUsed", data => {
            handler(
                readItem(data),
                useMethodToString(data.useMethod as UseMethod)
            )
        })
    }

    /**
     * Runs code when a mob is killed.
     *
     * Example trigger:
     *     When you use a sword to kill a zombie
     *     When you push a pig off a cliff to its death
     *
     * @param mob       The mob that was killed
     * @param weapon    The weapon that was used to kill the mob or -1 if no weapon was used
     * @param isMonster True if the mob was a monster and false otherwise
     */
    export function onMobKilled(handler: (mob: number, weapon: number, isMonster: boolean) => void) {
        _onEvent("MobKilled", data => {
            const mobId = readMob(data, "victim");

            handler(
                mobId,
                readTool(data, "weapon"),
                mobs.isMonster(mobId)
            )
        })
    }

    /**
     * Runs code when a player bounces.
     *
     * Example trigger:
     *     When you bounce on a slime block
     *     When you bounce on a bed block
     *
     * @param height    How high the player bounced
     * @param block     The block that the player bounced on
     */
    export function onPlayerBounced(handler: (height: number, block: number) => void) {
        _onEvent("PlayerBounced", data => {
            handler(
                data.bounceHeight as number,
                readBlock(data)
            )
        })
    }

    /**
     * Runs code when a player dies.
     *
     * Example triggers:
     *     When a player is blown up by a creeper
     *     When a player falls from a high place
     *
     * @param cause The cause of death, such as lava, suffocation, etc.
     * @param mob   The mob that caused the death or -1 if a mob was not involved
     */
    export function onPlayerDied(handler: (cause: string, mob: number) => void) {
        _onEvent("PlayerDied", data => {
            handler(
                actorDamageCauseToString(data.cause as ActorDamageCause),
                data.killer ? data.kller.type as number : -1
            )
        })
    }

    /**
     * Runs code when a player sends a message.
     *
     * Example triggers:
     *     When you use the `msg` command
     *     When you show a title in game
     *
     * @param message       The message that was sent
     * @param sender        The name of the player that sent the message
     * @param receiver      The name of the player that received the message or the empty string if it wasn't sent to a specific player
     * @param messageType   The type of message, such as "chat", "say", or "tell"
     */
    export function onPlayerMessage(handler: (message: string, sender: string, receiver: string, messageType: string) => void) {
        _onEvent("PlayerMessage", data => {
            handler(
                data.message as string,
                data.sender as string,
                data.receiver as string,
                data.type as string
            )
        });
    }

    /**
     * Runs code when a player is teleported.
     *
     * Example triggers:
     *     When you use the `tp` command
     *     When you are teleported by a command block
     *
     * @param distance  The distance teleported in meters
     */
    export function onPlayerTeleported(handler: (distance: number) => void) {
        _onEvent("PlayerTeleported", data => {
            handler(
                data.metersTravelled as number
            )
        })
    }

    /**
     * Runs code when a player travels across the world.
     *
     * Example triggers:
     *     When you walk, fly, or swim
     *
     * @param location  The position travelled to
     * @param mode      The mode of travel, such as "walk", "fall", "swim water", etc.
     * @param distance  The distance travelled in meters
     */
    export function onPlayerTravelled(handler: (location: Position, mode: string, distance: number) => void) {
        _onEvent("PlayerTravelled", data => {
            handler(
                world(
                    data.player.position.x as number,
                    data.player.position.y as number,
                    data.player.position.z as number
                ),
                // Add 1 to travelMethod because our enum values start at 1, not 0
                travelMethodToString(data.travelMethod === -1 ? TravelMethod.Unknown : (data.travelMethod + 1) as TravelMethod),
                data.metersTravelled as number
            )
        })
    }

    function readBlock(data: any) {
        const blockId: string = data.block.id;
        const blockAux: number = data.block.aux;

        return blocks.blockWithData(blocks.blockByName(blockId), blockAux);
    }

    function readTool(data: any, path?: string) {
        if (!path) path = "tool";
        const toolId: string = data[path].id;
        const toolAux: number = data[path].aux;
        return toolId ? blocks.blockWithData(blocks.blockByName(toolId), toolAux) : -1;
    }

    function readItem(data: any, path?: string) {
        if (!path) path = "item";
        const itemId: string = data[path].id;
        const itemAux: number = data[path].aux;
        return itemId ? blocks.blockWithData(blocks.blockByName(itemId), itemAux) : -1;
    }

    function readMob(data: any, path: string) {
        const mobId = data[path].type as string;
        return mobId ? mobs.mobNameToId(mobId) : -1
    }

    function readEnchantments(data: any) {
        return data.enchantments as Enchantment[];
    }

    export function mobSpawnMethodToString(spawnMethod: MobSpawnMethod) {
        switch (spawnMethod) {
            case MobSpawnMethod.Unknown:
                return "unknown";
            case MobSpawnMethod.SpawnEgg:
                return "spawn egg";
            case MobSpawnMethod.Command:
                return "command";
            case MobSpawnMethod.Dispenser:
                return "dispenser";
            case MobSpawnMethod.Spawner:
                return "spawner";
        }
    }


    export function actorDamageCauseToString(cause: ActorDamageCause) {
        switch (cause) {
            case ActorDamageCause.None:
                return "none";
            case ActorDamageCause.Override:
                return "override";
            case ActorDamageCause.Contact:
                return "contact";
            case ActorDamageCause.EntityAttack:
                return "entity attack";
            case ActorDamageCause.Projectile:
                return "projectile";
            case ActorDamageCause.Suffocation:
                return "suffocation";
            case ActorDamageCause.Fall:
                return "fall";
            case ActorDamageCause.Fire:
                return "fire";
            case ActorDamageCause.FireTick:
                return "fire tick";
            case ActorDamageCause.Lava:
                return "lava";
            case ActorDamageCause.Drowning:
                return "drowning";
            case ActorDamageCause.BlockExplosion:
                return "block explosion";
            case ActorDamageCause.EntityExplosion:
                return "entity explosion";
            case ActorDamageCause.Void:
                return "void";
            case ActorDamageCause.Self:
                return "self";
            case ActorDamageCause.Magic:
                return "magic";
            case ActorDamageCause.Wither:
                return "wither";
            case ActorDamageCause.Starve:
                return "starve";
            case ActorDamageCause.Anvil:
                return "anvil";
            case ActorDamageCause.Thorns:
                return "thorns";
            case ActorDamageCause.FallingBlock:
                return "falling block";
            case ActorDamageCause.Piston:
                return "piston";
            case ActorDamageCause.FlyIntoWall:
                return "fly into wall";
            case ActorDamageCause.Magma:
                return "magma";
            case ActorDamageCause.Fireworks:
                return "fireworks";
            case ActorDamageCause.Lightning:
                return "lightning";
            case ActorDamageCause.Charging:
                return "charging";
            case ActorDamageCause.All:
                return "all";
        }
    }

    export function travelMethodToString(travelMethod: TravelMethod) {
        switch (travelMethod) {
            case TravelMethod.Unknown:
                return "unknown";
            case TravelMethod.Walk:
                return "walk";
            case TravelMethod.SwimWater:
                return "swim water";
            case TravelMethod.Fall:
                return "fall";
            case TravelMethod.Climb:
                return "climb";
            case TravelMethod.SwimLava:
                return "swim lava";
            case TravelMethod.Fly:
                return "fly";
            case TravelMethod.Riding:
                return "riding";
            case TravelMethod.Sneak:
                return "sneak";
            case TravelMethod.Sprint:
                return "sprint";
            case TravelMethod.Bounce:
                return "bounce";
            case TravelMethod.FrostWalk:
                return "frost walk";
            case TravelMethod.Teleport:
                return "teleport";
        }
    }

    export function useMethodToString(useMethod: UseMethod) {
        switch (useMethod) {
            case UseMethod.Unknown:
                return "unknown";
            case UseMethod.EquipArmor:
                return "equip armor";
            case UseMethod.Eat:
                return "eat";
            case UseMethod.Attack:
                return "attack";
            case UseMethod.Consume:
                return "consume";
            case UseMethod.Throw:
                return "throw";
            case UseMethod.Shoot:
                return "shoot";
            case UseMethod.Place:
                return "place";
            case UseMethod.FillBottle:
                return "fill bottle";
            case UseMethod.FillBucket:
                return "fill bucket";
            case UseMethod.PourBucket:
                return "pour bucket";
            case UseMethod.UseTool:
                return "use tool";
        }
    }
}