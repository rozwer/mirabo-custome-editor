// NOTE: If you change any values in this file, make sure to run
// Run `node tools/generateConstants.js` from the root of this
// repository to update constants.ts

// To update the Block, Item, AnimalMob, or MonsterMob enums,
// run the enum generator script. See the README for more
// details

/**
 * Minecraft block types: Grass, Stone, Air, etc...
 */
//% emitAsConstant
declare const enum Block {
    //% blockIdentity="blocks.block" enumval=2 block="Grass Block"
    //% jres alias=GRASS
    Grass = 2,
    //% blockIdentity="blocks.block" enumval=0 block="Air"
    //% jres alias=AIR
    Air = 0,
    //% blockIdentity="blocks.block" enumval=1 block="Stone"
    //% jres alias=STONE
    Stone = 1,
    //% blockIdentity="blocks.block" enumval=65537 block="Granite"
    //% jres alias=GRANITE
    Granite = 65537,
    //% blockIdentity="blocks.block" enumval=131073 block="Polished Granite"
    //% jres alias=POLISHED_GRANITE
    PolishedGranite = 131073,
    //% blockIdentity="blocks.block" enumval=196609 block="Diorite"
    //% jres alias=DIORITE
    Diorite = 196609,
    //% blockIdentity="blocks.block" enumval=262145 block="Polished Diorite"
    //% jres alias=POLISHED_DIORITE
    PolishedDiorite = 262145,
    //% blockIdentity="blocks.block" enumval=327681 block="Andesite"
    //% jres alias=ANDESITE
    Andesite = 327681,
    //% blockIdentity="blocks.block" enumval=393217 block="Polished Andesite"
    //% jres alias=POLISHED_ANDESITE
    PolishedAndesite = 393217,
    //% blockIdentity="blocks.block" enumval=3 block="Dirt"
    //% jres alias=DIRT
    Dirt = 3,
    //% blockIdentity="blocks.block" enumval=65539 block="Coarse Dirt"
    //% jres alias=COARSE_DIRT
    CoarseDirt = 65539,
    //% blockIdentity="blocks.block" enumval=4 block="Cobblestone"
    //% jres alias=COBBLESTONE
    Cobblestone = 4,
    //% blockIdentity="blocks.block" enumval=5 block="Oak Planks"
    //% jres alias=PLANKS_OAK
    PlanksOak = 5,
    //% blockIdentity="blocks.block" enumval=65541 block="Spruce Planks"
    //% jres alias=PLANKS_SPRUCE
    PlanksSpruce = 65541,
    //% blockIdentity="blocks.block" enumval=131077 block="Birch Planks"
    //% jres alias=PLANKS_BIRCH
    PlanksBirch = 131077,
    //% blockIdentity="blocks.block" enumval=196613 block="Jungle Planks"
    //% jres alias=PLANKS_JUNGLE
    PlanksJungle = 196613,
    //% blockIdentity="blocks.block" enumval=262149 block="Acacia Planks"
    //% jres alias=PLANKS_ACACIA
    PlanksAcacia = 262149,
    //% blockIdentity="blocks.block" enumval=327685 block="Dark Oak Planks"
    //% jres alias=PLANKS_DARK_OAK
    PlanksDarkOak = 327685,
    //% blockIdentity="blocks.block" enumval=6 block="Oak Sapling"
    //% jres alias=OAK_SAPLING
    OakSapling = 6,
    //% blockIdentity="blocks.block" enumval=65542 block="Spruce Sapling"
    //% jres alias=SPRUCE_SAPLING
    SpruceSapling = 65542,
    //% blockIdentity="blocks.block" enumval=131078 block="Birch Sapling"
    //% jres alias=BIRCH_SAPLING
    BirchSapling = 131078,
    //% blockIdentity="blocks.block" enumval=196614 block="Jungle Sapling"
    //% jres alias=JUNGLE_SAPLING
    JungleSapling = 196614,
    //% blockIdentity="blocks.block" enumval=262150 block="Acacia Sapling"
    //% jres alias=ACACIA_SAPLING
    AcaciaSapling = 262150,
    //% blockIdentity="blocks.block" enumval=327686 block="Dark Oak Sapling"
    //% jres alias=DARK_OAK_SAPLING
    DarkOakSapling = 327686,
    //% blockIdentity="blocks.block" enumval=7 block="Bedrock"
    //% jres alias=BEDROCK
    Bedrock = 7,
    //% blockIdentity="blocks.block" enumval=8 block="Water"
    //% jres alias=WATER
    Water = 8,
    //% blockIdentity="blocks.block" enumval=10 block="Lava"
    //% jres alias=LAVA
    Lava = 10,
    //% blockIdentity="blocks.block" enumval=12 block="Sand"
    //% jres alias=SAND
    Sand = 12,
    //% blockIdentity="blocks.block" enumval=65548 block="Red Sand"
    //% jres alias=RED_SAND
    RedSand = 65548,
    //% blockIdentity="blocks.block" enumval=13 block="Gravel"
    //% jres alias=GRAVEL
    Gravel = 13,
    //% blockIdentity="blocks.block" enumval=14 block="Gold Ore"
    //% jres alias=GOLD_ORE
    GoldOre = 14,
    //% blockIdentity="blocks.block" enumval=15 block="Iron Ore"
    //% jres alias=IRON_ORE
    IronOre = 15,
    //% blockIdentity="blocks.block" enumval=16 block="Coal Ore"
    //% jres alias=COAL_ORE
    CoalOre = 16,
    //% blockIdentity="blocks.block" enumval=17 block="Oak Log"
    //% jres alias=LOG_OAK
    LogOak = 17,
    //% blockIdentity="blocks.block" enumval=65553 block="Spruce Log"
    //% jres alias=LOG_SPRUCE
    LogSpruce = 65553,
    //% blockIdentity="blocks.block" enumval=131089 block="Birch Log"
    //% jres alias=LOG_BIRCH
    LogBirch = 131089,
    //% blockIdentity="blocks.block" enumval=196625 block="Jungle Log"
    //% jres alias=LOG_JUNGLE
    LogJungle = 196625,
    //% blockIdentity="blocks.block" enumval=18 block="Oak Leaves"
    //% jres alias=LEAVES_OAK
    LeavesOak = 18,
    //% blockIdentity="blocks.block" enumval=65554 block="Spruce Leaves"
    //% jres alias=LEAVES_SPRUCE
    LeavesSpruce = 65554,
    //% blockIdentity="blocks.block" enumval=131090 block="Birch Leaves"
    //% jres alias=LEAVES_BIRCH
    LeavesBirch = 131090,
    //% blockIdentity="blocks.block" enumval=196626 block="Jungle Leaves"
    //% jres alias=LEAVES_JUNGLE
    LeavesJungle = 196626,
    //% blockIdentity="blocks.block" enumval=19 block="Sponge"
    //% jres alias=SPONGE
    Sponge = 19,
    //% blockIdentity="blocks.block" enumval=65555 block="Wet Sponge"
    //% jres alias=WET_SPONGE
    WetSponge = 65555,
    //% blockIdentity="blocks.block" enumval=20 block="Glass"
    //% jres alias=GLASS
    Glass = 20,
    //% blockIdentity="blocks.block" enumval=21 block="Lapis Lazuli Ore"
    //% jres alias=LAPIS_ORE
    LapisOre = 21,
    //% blockIdentity="blocks.block" enumval=22 block="Block Of Lapis Lazuli"
    //% jres alias=LAPIS_LAZULI_BLOCK
    LapisLazuliBlock = 22,
    //% blockIdentity="blocks.block" enumval=196631 block="Dispenser"
    //% jres alias=DISPENSER
    Dispenser = 196631,
    //% blockIdentity="blocks.block" enumval=24 block="Sandstone"
    //% jres alias=SANDSTONE
    Sandstone = 24,
    //% blockIdentity="blocks.block" enumval=65560 block="Chiseled Sandstone"
    //% jres alias=CHISELED_SANDSTONE
    ChiseledSandstone = 65560,
    //% blockIdentity="blocks.block" enumval=131096 block="Smooth Sandstone"
    //% jres alias=SMOOTH_SANDSTONE
    SmoothSandstone = 131096,
    //% blockIdentity="blocks.block" enumval=25 block="Note Block"
    //% jres alias=NOTE_BLOCK
    NoteBlock = 25,
    //% blockIdentity="blocks.block" enumval=26 block="Bed"
    //% jres alias=BED
    Bed = 26,
    //% blockIdentity="blocks.block" enumval=27 block="Powered Rail"
    //% jres alias=POWERED_RAIL
    PoweredRail = 27,
    //% blockIdentity="blocks.block" enumval=28 block="Detector Rail"
    //% jres alias=DETECTOR_RAIL
    DetectorRail = 28,
    //% blockIdentity="blocks.block" enumval=29 block="Sticky Piston"
    //% jres alias=STICKY_PISTON
    StickyPiston = 29,
    //% blockIdentity="blocks.block" enumval=30 block="Cobweb"
    //% jres alias=COBWEB
    Cobweb = 30,
    //% blockIdentity="blocks.block" enumval=65567 block="Grass"
    //% jres alias=TALLGRASS
    Tallgrass = 65567,
    //% blockIdentity="blocks.block" enumval=131103 block="Fern"
    //% jres alias=FERN
    Fern = 131103,
    //% blockIdentity="blocks.block" enumval=32 block="Dead Bush"
    //% jres alias=DEAD_BUSH
    DeadBush = 32,
    //% blockIdentity="blocks.block" enumval=33 block="Piston"
    //% jres alias=PISTON
    Piston = 33,
    //% blockIdentity="blocks.block" enumval=35 block="White Wool"
    //% jres alias=WOOL
    Wool = 35,
    //% blockIdentity="blocks.block" enumval=65571 block="Orange Wool"
    //% jres alias=ORANGE_WOOL
    OrangeWool = 65571,
    //% blockIdentity="blocks.block" enumval=131107 block="Magenta Wool"
    //% jres alias=MAGENTA_WOOL
    MagentaWool = 131107,
    //% blockIdentity="blocks.block" enumval=196643 block="Light Blue Wool"
    //% jres alias=LIGHT_BLUE_WOOL
    LightBlueWool = 196643,
    //% blockIdentity="blocks.block" enumval=262179 block="Yellow Wool"
    //% jres alias=YELLOW_WOOL
    YellowWool = 262179,
    //% blockIdentity="blocks.block" enumval=327715 block="Lime Wool"
    //% jres alias=LIME_WOOL
    LimeWool = 327715,
    //% blockIdentity="blocks.block" enumval=393251 block="Pink Wool"
    //% jres alias=PINK_WOOL
    PinkWool = 393251,
    //% blockIdentity="blocks.block" enumval=458787 block="Gray Wool"
    //% jres alias=GRAY_WOOL
    GrayWool = 458787,
    //% blockIdentity="blocks.block" enumval=524323 block="Light Gray Wool"
    //% jres alias=LIGHT_GRAY_WOOL
    LightGrayWool = 524323,
    //% blockIdentity="blocks.block" enumval=589859 block="Cyan Wool"
    //% jres alias=CYAN_WOOL
    CyanWool = 589859,
    //% blockIdentity="blocks.block" enumval=655395 block="Purple Wool"
    //% jres alias=PURPLE_WOOL
    PurpleWool = 655395,
    //% blockIdentity="blocks.block" enumval=720931 block="Blue Wool"
    //% jres alias=BLUE_WOOL
    BlueWool = 720931,
    //% blockIdentity="blocks.block" enumval=786467 block="Brown Wool"
    //% jres alias=BROWN_WOOL
    BrownWool = 786467,
    //% blockIdentity="blocks.block" enumval=852003 block="Green Wool"
    //% jres alias=GREEN_WOOL
    GreenWool = 852003,
    //% blockIdentity="blocks.block" enumval=917539 block="Red Wool"
    //% jres alias=RED_WOOL
    RedWool = 917539,
    //% blockIdentity="blocks.block" enumval=983075 block="Black Wool"
    //% jres alias=BLACK_WOOL
    BlackWool = 983075,
    //% blockIdentity="blocks.block" enumval=37 block="Dandelion"
    //% jres alias=YELLOW_FLOWER
    YellowFlower = 37,
    //% blockIdentity="blocks.block" enumval=38 block="Poppy"
    //% jres alias=POPPY
    Poppy = 38,
    //% blockIdentity="blocks.block" enumval=65574 block="Blue Orchid"
    //% jres alias=BLUE_ORCHID
    BlueOrchid = 65574,
    //% blockIdentity="blocks.block" enumval=131110 block="Allium"
    //% jres alias=ALLIUM
    Allium = 131110,
    //% blockIdentity="blocks.block" enumval=196646 block="Azure Bluet"
    //% jres alias=AZURE_BLUET
    AzureBluet = 196646,
    //% blockIdentity="blocks.block" enumval=262182 block="Red Tulip"
    //% jres alias=RED_TULIP
    RedTulip = 262182,
    //% blockIdentity="blocks.block" enumval=327718 block="Orange Tulip"
    //% jres alias=ORANGE_TULIP
    OrangeTulip = 327718,
    //% blockIdentity="blocks.block" enumval=393254 block="White Tulip"
    //% jres alias=WHITE_TULIP
    WhiteTulip = 393254,
    //% blockIdentity="blocks.block" enumval=458790 block="Pink Tulip"
    //% jres alias=PINK_TULIP
    PinkTulip = 458790,
    //% blockIdentity="blocks.block" enumval=524326 block="Oxeye Daisy"
    //% jres alias=OXEYE_DAISY
    OxeyeDaisy = 524326,
    //% blockIdentity="blocks.block" enumval=674 block="Bamboo"
    //% jres alias=BAMBOO
    Bamboo = 674,
    //% blockIdentity="blocks.block" enumval=589862 block="Cornflower"
    //% jres alias=CORNFLOWER
    Cornflower = 589862,
    //% blockIdentity="blocks.block" enumval=655398 block="Lily of the Valley"
    //% jres alias=LILY_OF_THE_VALLEY
    LilyOfTheValley = 655398,
    //% blockIdentity="blocks.block" enumval=39 block="Brown Mushroom"
    //% jres alias=BROWN_MUSHROOM
    BrownMushroom = 39,
    //% blockIdentity="blocks.block" enumval=40 block="Red Mushroom"
    //% jres alias=RED_MUSHROOM
    RedMushroom = 40,
    //% blockIdentity="blocks.block" enumval=41 block="Block of Gold"
    //% jres alias=GOLD_BLOCK
    GoldBlock = 41,
    //% blockIdentity="blocks.block" enumval=42 block="Block of Iron"
    //% jres alias=IRON_BLOCK
    IronBlock = 42,
    //% blockIdentity="blocks.block" enumval=43 block="Double Stone Slab"
    //% jres alias=DOUBLE_STONE_SLAB
    DoubleStoneSlab = 43,
    //% blockIdentity="blocks.block" enumval=44 block="Smooth Stone Slab"
    //% jres alias=SMOOTH_STONE_SLAB
    SmoothStoneSlab = 44,
    //% blockIdentity="blocks.block" enumval=895 block="Mossy Stone Brick Slab"
    //% jres alias=MOSSY_STONE_BRICK_SLAB
    MossyStoneBrickSlab = 895,
    //% blockIdentity="blocks.block" enumval=65580 block="Sandstone Slab"
    //% jres alias=SANDSTONE_SLAB
    SandstoneSlab = 65580,
    //% blockIdentity="blocks.block" enumval=196652 block="Cobblestone Slab"
    //% jres alias=COBBLESTONE_SLAB
    CobblestoneSlab = 196652,
    //% blockIdentity="blocks.block" enumval=262188 block="Bricks Slab"
    //% jres alias=BRICKS_SLAB
    BricksSlab = 262188,
    //% blockIdentity="blocks.block" enumval=327724 block="Stone Bricks Slab"
    //% jres alias=STONE_BRICKS_SLAB
    StoneBricksSlab = 327724,
    //% blockIdentity="blocks.block" enumval=393260 block="Quartz Slab"
    //% jres alias=QUARTZ_SLAB
    QuartzSlab = 393260,
    //% blockIdentity="blocks.block" enumval=458796 block="Nether Brick Slab"
    //% jres alias=NETHER_BRICK_SLAB
    NetherBrickSlab = 458796,
    //% blockIdentity="blocks.block" enumval=45 block="Brick Block"
    //% jres alias=BRICKS
    Bricks = 45,
    //% blockIdentity="blocks.block" enumval=46 block="TNT"
    //% jres alias=TNT
    TNT = 46,
    //% blockIdentity="blocks.block" enumval=47 block="Bookshelf"
    //% jres alias=BOOKSHELF
    Bookshelf = 47,
    //% blockIdentity="blocks.block" enumval=48 block="Mossy Cobblestone"
    //% jres alias=MOSS_STONE
    MossStone = 48,
    //% blockIdentity="blocks.block" enumval=49 block="Obsidian"
    //% jres alias=OBSIDIAN
    Obsidian = 49,
    //% blockIdentity="blocks.block" enumval=50 block="Torch"
    //% jres alias=TORCH
    Torch = 50,
    //% blockIdentity="blocks.block" enumval=51 block="Fire"
    //% jres alias=FIRE
    Fire = 51,
    //% blockIdentity="blocks.block" enumval=52 block="Monster Spawner"
    //% jres alias=MONSTER_SPAWNER
    MonsterSpawner = 52,
    //% blockIdentity="blocks.block" enumval=53 block="Oak Stairs"
    //% jres alias=OAK_WOOD_STAIRS
    OakWoodStairs = 53,
    //% blockIdentity="blocks.block" enumval=54 block="Chest"
    //% jres alias=CHEST
    Chest = 54,
    //% blockIdentity="blocks.block" enumval=55 block="Redstone Dust"
    //% jres alias=REDSTONE_WIRE
    RedstoneWire = 55,
    //% blockIdentity="blocks.block" enumval=56 block="Diamond Ore"
    //% jres alias=DIAMOND_ORE
    DiamondOre = 56,
    //% blockIdentity="blocks.block" enumval=57 block="Block of Diamond"
    //% jres alias=DIAMOND_BLOCK
    DiamondBlock = 57,
    //% blockIdentity="blocks.block" enumval=58 block="Crafting Table"
    //% jres alias=CRAFTING_TABLE
    CraftingTable = 58,
    //% blockIdentity="blocks.block" enumval=59 block="Crops"
    //% jres alias=CROPS
    Crops = 59,
    //% blockIdentity="blocks.block" enumval=60 block="Farmland"
    //% jres alias=FARMLAND
    Farmland = 60,
    //% blockIdentity="blocks.block" enumval=61 block="Furnace"
    //% jres alias=FURNACE
    Furnace = 61,
    //% blockIdentity="blocks.block" enumval=65 block="Ladder"
    //% jres alias=LADDER
    Ladder = 65,
    //% blockIdentity="blocks.block" enumval=66 block="Rail"
    //% jres alias=RAIL
    Rail = 66,
    //% blockIdentity="blocks.block" enumval=67 block="Cobblestone Stairs"
    //% jres alias=COBBLESTONE_STAIRS
    CobblestoneStairs = 67,
    //% blockIdentity="blocks.block" enumval=69 block="Lever"
    //% jres alias=LEVER
    Lever = 69,
    //% blockIdentity="blocks.block" enumval=70 block="Stone Pressure Plate"
    //% jres alias=STONE_PRESSURE_PLATE
    StonePressurePlate = 70,
    //% blockIdentity="blocks.block" enumval=72 block="Oak Pressure Plate"
    //% jres alias=WOODEN_PRESSURE_PLATE
    WoodenPressurePlate = 72,
    //% blockIdentity="blocks.block" enumval=73 block="Redstone Ore"
    //% jres alias=REDSTONE_ORE
    RedstoneOre = 73,
    //% blockIdentity="blocks.block" enumval=76 block="Redstone Torch"
    //% jres alias=REDSTONE_TORCH
    RedstoneTorch = 76,
    //% blockIdentity="blocks.block" enumval=327757 block="Stone Button"
    //% jres alias=STONE_BUTTON
    StoneButton = 327757,
    //% blockIdentity="blocks.block" enumval=78 block="Top Snow"
    //% jres alias=TOP_SNOW
    TopSnow = 78,
    //% blockIdentity="blocks.block" enumval=79 block="Ice"
    //% jres alias=ICE
    Ice = 79,
    //% blockIdentity="blocks.block" enumval=80 block="Snow"
    //% jres alias=SNOW
    Snow = 80,
    //% blockIdentity="blocks.block" enumval=81 block="Cactus"
    //% jres alias=CACTUS
    Cactus = 81,
    //% blockIdentity="blocks.block" enumval=82 block="Clay Block"
    //% jres alias=CLAY
    Clay = 82,
    //% blockIdentity="blocks.block" enumval=83 block="Sugar cane"
    //% jres alias=SUGAR_CANE
    SugarCane = 83,
    //% blockIdentity="blocks.block" enumval=84 block="Jukebox"
    //% jres alias=JUKEBOX
    Jukebox = 84,
    //% blockIdentity="blocks.block" enumval=85 block="Oak Fence"
    //% jres alias=OAK_FENCE
    OakFence = 85,
    //% blockIdentity="blocks.block" enumval=65621 block="Spruce Fence"
    //% jres alias=SPRUCE_FENCE
    SpruceFence = 65621,
    //% blockIdentity="blocks.block" enumval=131157 block="Birch Fence"
    //% jres alias=BIRCH_FENCE
    BirchFence = 131157,
    //% blockIdentity="blocks.block" enumval=196693 block="Jungle Fence"
    //% jres alias=JUNGLE_FENCE
    JungleFence = 196693,
    //% blockIdentity="blocks.block" enumval=262229 block="Acacia Fence"
    //% jres alias=ACACIA_FENCE
    AcaciaFence = 262229,
    //% blockIdentity="blocks.block" enumval=327765 block="Dark Oak Fence"
    //% jres alias=DARK_OAK_FENCE
    DarkOakFence = 327765,
    //% blockIdentity="blocks.block" enumval=86 block="Pumpkin"
    //% jres alias=PUMPKIN
    Pumpkin = 86,
    //% blockIdentity="blocks.block" enumval=87 block="Netherrack"
    //% jres alias=NETHERRACK
    Netherrack = 87,
    //% blockIdentity="blocks.block" enumval=88 block="Soul Sand"
    //% jres alias=SOUL_SAND
    SoulSand = 88,
    //% blockIdentity="blocks.block" enumval=89 block="Glowstone"
    //% jres alias=GLOWSTONE
    Glowstone = 89,
    //% blockIdentity="blocks.block" enumval=91 block="Jack o'Lantern"
    //% jres alias=JACK_O_LANTERN
    JackOLantern = 91,
    //% blockIdentity="blocks.block" enumval=92 block="Cake"
    //% jres alias=CAKE
    Cake = 92,
    //% blockIdentity="blocks.block" enumval=93 block="Redstone Repeater"
    //% jres alias=UNPOWERED_REPEATER
    UnpoweredRepeater = 93,
    //% blockIdentity="blocks.block" enumval=96 block="Oak Trapdoor"
    //% jres alias=WOODEN_TRAPDOOR
    WoodenTrapdoor = 96,
    //% blockIdentity="blocks.block" enumval=97 block="Infested Stone"
    //% jres alias=STONE_MONSTER_EGG
    StoneMonsterEgg = 97,
    //% blockIdentity="blocks.block" enumval=65633 block="Infested Cobblestone"
    //% jres alias=COBBLESTONE_MONSTER_EGG
    CobblestoneMonsterEgg = 65633,
    //% blockIdentity="blocks.block" enumval=131169 block="Infested Stone Brick"
    //% jres alias=STONE_BRICK_MONSTER_EGG
    StoneBrickMonsterEgg = 131169,
    //% blockIdentity="blocks.block" enumval=196705 block="Infested Mossy Stone Brick"
    //% jres alias=MOSSY_STONE_BRICK_MONSTER_EGG
    MossyStoneBrickMonsterEgg = 196705,
    //% blockIdentity="blocks.block" enumval=262241 block="Infested Cracked Stone Brick"
    //% jres alias=CRACKED_STONE_BRICK_MONSTER_EGG
    CrackedStoneBrickMonsterEgg = 262241,
    //% blockIdentity="blocks.block" enumval=327777 block="Infested Chiseled Stone Brick"
    //% jres alias=CHISELED_STONE_BRICK_MONSTER_EGG
    ChiseledStoneBrickMonsterEgg = 327777,
    //% blockIdentity="blocks.block" enumval=98 block="Stone Bricks"
    //% jres alias=STONE_BRICKS
    StoneBricks = 98,
    //% blockIdentity="blocks.block" enumval=65634 block="Mossy Stone Bricks"
    //% jres alias=MOSSY_STONE_BRICKS
    MossyStoneBricks = 65634,
    //% blockIdentity="blocks.block" enumval=131170 block="Cracked Stone Bricks"
    //% jres alias=CRACKED_STONE_BRICKS
    CrackedStoneBricks = 131170,
    //% blockIdentity="blocks.block" enumval=196706 block="Chiseled Stone Bricks"
    //% jres alias=CHISELED_STONE_BRICKS
    ChiseledStoneBricks = 196706,
    //% blockIdentity="blocks.block" enumval=99 block="Mushroom"
    //% jres alias=MUSHROOM0
    Mushroom0 = 99,
    //% blockIdentity="blocks.block" enumval=917603 block="Mushroom"
    //% jres alias=MUSHROOM14
    Mushroom14 = 917603,
    //% blockIdentity="blocks.block" enumval=983139 block="Mushroom"
    //% jres alias=MUSHROOM15
    Mushroom15 = 983139,
    //% blockIdentity="blocks.block" enumval=917604 block="Red Mushroom Block"
    //% jres alias=RED_MUSHROOM_BLOCK
    RedMushroomBlock = 917604,
    //% blockIdentity="blocks.block" enumval=101 block="Iron Bars"
    //% jres alias=IRON_BARS
    IronBars = 101,
    //% blockIdentity="blocks.block" enumval=102 block="Glass Pane"
    //% jres alias=GLASS_PANE
    GlassPane = 102,
    //% blockIdentity="blocks.block" enumval=103 block="Melon"
    //% jres alias=MELON_BLOCK
    MelonBlock = 103,
    //% blockIdentity="blocks.block" enumval=104 block="Pumpkin Stem"
    //% jres alias=PUMPKIN_STEM
    PumpkinStem = 104,
    //% blockIdentity="blocks.block" enumval=105 block="Melon Stem"
    //% jres alias=MELON_STEM
    MelonStem = 105,
    //% blockIdentity="blocks.block" enumval=106 block="Vines"
    //% jres alias=VINES
    Vines = 106,
    //% blockIdentity="blocks.block" enumval=107 block="Oak Fence Gate"
    //% jres alias=OAK_FENCE_GATE
    OakFenceGate = 107,
    //% blockIdentity="blocks.block" enumval=108 block="Brick Stairs"
    //% jres alias=BRICK_STAIRS
    BrickStairs = 108,
    //% blockIdentity="blocks.block" enumval=109 block="Stone Brick Stairs"
    //% jres alias=STONE_BRICK_STAIRS
    StoneBrickStairs = 109,
    //% blockIdentity="blocks.block" enumval=110 block="Mycelium"
    //% jres alias=MYCELIUM
    Mycelium = 110,
    //% blockIdentity="blocks.block" enumval=111 block="Lily Pad"
    //% jres alias=LILY_PAD
    LilyPad = 111,
    //% blockIdentity="blocks.block" enumval=112 block="Nether Brick Block"
    //% jres alias=NETHER_BRICK
    NetherBrick = 112,
    //% blockIdentity="blocks.block" enumval=113 block="Nether Brick Fence"
    //% jres alias=NETHER_BRICK_FENCE
    NetherBrickFence = 113,
    //% blockIdentity="blocks.block" enumval=114 block="Nether Brick Stairs"
    //% jres alias=NETHER_BRICK_STAIRS
    NetherBrickStairs = 114,
    //% blockIdentity="blocks.block" enumval=115 block="Nether Wart"
    //% jres alias=NETHER_WART
    NetherWart = 115,
    //% blockIdentity="blocks.block" enumval=116 block="Enchantment Table"
    //% jres alias=ENCHANTMENT_TABLE
    EnchantmentTable = 116,
    //% blockIdentity="blocks.block" enumval=117 block="Brewing Stand"
    //% jres alias=BREWING_STAND
    BrewingStand = 117,
    //% blockIdentity="blocks.block" enumval=118 block="Cauldron"
    //% jres alias=CAULDRON
    Cauldron = 118,
    //% blockIdentity="blocks.block" enumval=120 block="End Portal Frame"
    //% jres alias=END_PORTAL
    EndPortal = 120,
    //% blockIdentity="blocks.block" enumval=121 block="End Stone"
    //% jres alias=ENDSTONE
    Endstone = 121,
    //% blockIdentity="blocks.block" enumval=122 block="Dragon Egg"
    //% jres alias=DRAGON_EGG
    DragonEgg = 122,
    //% blockIdentity="blocks.block" enumval=123 block="Redstone Lamp"
    //% jres alias=REDSTONE_LAMP
    RedstoneLamp = 123,
    //% blockIdentity="blocks.block" enumval=196733 block="Dropper"
    //% jres alias=DROPPER
    Dropper = 196733,
    //% blockIdentity="blocks.block" enumval=126 block="Activator Rail"
    //% jres alias=ACTIVATOR_RAIL
    ActivatorRail = 126,
    //% blockIdentity="blocks.block" enumval=127 block="Cocoa"
    //% jres alias=COCOA
    Cocoa = 127,
    //% blockIdentity="blocks.block" enumval=128 block="Sandstone Stairs"
    //% jres alias=SANDSTONE_STAIRS
    SandstoneStairs = 128,
    //% blockIdentity="blocks.block" enumval=129 block="Emerald Ore"
    //% jres alias=EMERALD_ORE
    EmeraldOre = 129,
    //% blockIdentity="blocks.block" enumval=130 block="Ender Chest"
    //% jres alias=ENDER_CHEST
    EnderChest = 130,
    //% blockIdentity="blocks.block" enumval=131 block="Tripwire Hook"
    //% jres alias=TRIPWIRE_HOOK
    TripwireHook = 131,
    //% blockIdentity="blocks.block" enumval=132 block="Tripwire"
    //% jres alias=TRIPWIRE
    Tripwire = 132,
    //% blockIdentity="blocks.block" enumval=133 block="Block of Emerald"
    //% jres alias=EMERALD_BLOCK
    EmeraldBlock = 133,
    //% blockIdentity="blocks.block" enumval=134 block="Spruce Stairs"
    //% jres alias=SPRUCE_WOOD_STAIRS
    SpruceWoodStairs = 134,
    //% blockIdentity="blocks.block" enumval=135 block="Birch Stairs"
    //% jres alias=BIRCH_WOOD_STAIRS
    BirchWoodStairs = 135,
    //% blockIdentity="blocks.block" enumval=136 block="Jungle Stairs"
    //% jres alias=JUNGLE_WOOD_STAIRS
    JungleWoodStairs = 136,
    //% blockIdentity="blocks.block" enumval=138 block="Beacon"
    //% jres alias=BEACON
    Beacon = 138,
    //% blockIdentity="blocks.block" enumval=139 block="Cobblestone Wall"
    //% jres alias=COBBLESTONE_WALL
    CobblestoneWall = 139,
    //% blockIdentity="blocks.block" enumval=65675 block="Mossy Cobblestone Wall"
    //% jres alias=MOSSY_COBBLESTONE_WALL
    MossyCobblestoneWall = 65675,
    //% blockIdentity="blocks.block" enumval=140 block="Flower Pot"
    //% jres alias=FLOWER_POT
    FlowerPot = 140,
    //% blockIdentity="blocks.block" enumval=141 block="Carrots"
    //% jres alias=CARROTS
    Carrots = 141,
    //% blockIdentity="blocks.block" enumval=142 block="Potatoes"
    //% jres alias=POTATOES
    Potatoes = 142,
    //% blockIdentity="blocks.block" enumval=327823 block="Oak Button"
    //% jres alias=WOODEN_BUTTON
    WoodenButton = 327823,
    //% blockIdentity="blocks.block" enumval=144 block="Skeleton Skull"
    //% jres alias=SKELETON_SKULL
    SkeletonSkull = 144,
    //% blockIdentity="blocks.block" enumval=145 block="Anvil"
    //% jres alias=ANVIL
    Anvil = 145,
    //% blockIdentity="blocks.block" enumval=65681 block="Slightly Damaged Anvil"
    //% jres alias=SLIGHTLY_DAMAGED_ANVIL
    SlightlyDamagedAnvil = 65681,
    //% blockIdentity="blocks.block" enumval=131217 block="Very Damaged Anvil"
    //% jres alias=VERY_DAMAGED_ANVIL
    VeryDamagedAnvil = 131217,
    //% blockIdentity="blocks.block" enumval=146 block="Trapped Chest"
    //% jres alias=TRAPPED_CHEST
    TrappedChest = 146,
    //% blockIdentity="blocks.block" enumval=147 block="Weighted Pressure Plate (Light)"
    //% jres alias=WEIGHTED_PRESSURE_PLATE_LIGHT
    WeightedPressurePlateLight = 147,
    //% blockIdentity="blocks.block" enumval=148 block="Weighted Pressure Plate (Heavy)"
    //% jres alias=WEIGHTED_PRESSURE_PLATE_HEAVY
    WeightedPressurePlateHeavy = 148,
    //% blockIdentity="blocks.block" enumval=149 block="Redstone Comparator"
    //% jres alias=UNPOWERED_COMPARATOR
    UnpoweredComparator = 149,
    //% blockIdentity="blocks.block" enumval=151 block="Daylight Sensor"
    //% jres alias=DAYLIGHT_SENSOR
    DaylightSensor = 151,
    //% blockIdentity="blocks.block" enumval=152 block="Block of Redstone"
    //% jres alias=REDSTONE_BLOCK
    RedstoneBlock = 152,
    //% blockIdentity="blocks.block" enumval=153 block="Nether Quartz Ore"
    //% jres alias=QUARTZ_ORE
    QuartzOre = 153,
    //% blockIdentity="blocks.block" enumval=154 block="Hopper"
    //% jres alias=HOPPER
    Hopper = 154,
    //% blockIdentity="blocks.block" enumval=155 block="Block of Quartz"
    //% jres alias=BLOCK_OF_QUARTZ
    BlockOfQuartz = 155,
    //% blockIdentity="blocks.block" enumval=65691 block="Chiseled Quartz Block"
    //% jres alias=CHISELED_QUARTZ_BLOCK
    ChiseledQuartzBlock = 65691,
    //% blockIdentity="blocks.block" enumval=131227 block="Pillar Quartz Block"
    //% jres alias=PILLAR_QUARTZ_BLOCK
    PillarQuartzBlock = 131227,
    //% blockIdentity="blocks.block" enumval=156 block="Quartz Stairs"
    //% jres alias=QUARTZ_STAIRS
    QuartzStairs = 156,
    //% blockIdentity="blocks.block" enumval=157 block="Double Wooden Slab"
    //% jres alias=DOUBLE_WOODEN_SLAB
    DoubleWoodenSlab = 157,
    //% blockIdentity="blocks.block" enumval=158 block="Oak Slab"
    //% jres alias=OAK_WOOD_SLAB
    OakWoodSlab = 158,
    //% blockIdentity="blocks.block" enumval=65694 block="Spruce  Slab"
    //% jres alias=SPRUCE_WOOD_SLAB
    SpruceWoodSlab = 65694,
    //% blockIdentity="blocks.block" enumval=131230 block="Birch  Slab"
    //% jres alias=BIRCH_WOOD_SLAB
    BirchWoodSlab = 131230,
    //% blockIdentity="blocks.block" enumval=196766 block="Jungle  Slab"
    //% jres alias=JUNGLE_WOOD_SLAB
    JungleWoodSlab = 196766,
    //% blockIdentity="blocks.block" enumval=262302 block="Acacia  Slab"
    //% jres alias=ACACIA_WOOD_SLAB
    AcaciaWoodSlab = 262302,
    //% blockIdentity="blocks.block" enumval=327838 block="Dark Oak  Slab"
    //% jres alias=DARK_OAK_WOOD_SLAB
    DarkOakWoodSlab = 327838,
    //% blockIdentity="blocks.block" enumval=159 block="White Terracotta"
    //% jres alias=WHITE_TERRACOTTA
    WhiteTerracotta = 159,
    //% blockIdentity="blocks.block" enumval=65695 block="Orange Terracotta"
    //% jres alias=ORANGE_TERRACOTTA
    OrangeTerracotta = 65695,
    //% blockIdentity="blocks.block" enumval=131231 block="Magenta Terracotta"
    //% jres alias=MAGENTA_TERRACOTTA
    MagentaTerracotta = 131231,
    //% blockIdentity="blocks.block" enumval=196767 block="Light Blue Terracotta"
    //% jres alias=LIGHT_BLUE_TERRACOTTA
    LightBlueTerracotta = 196767,
    //% blockIdentity="blocks.block" enumval=262303 block="Yellow Terracotta"
    //% jres alias=YELLOW_TERRACOTTA
    YellowTerracotta = 262303,
    //% blockIdentity="blocks.block" enumval=327839 block="Lime Terracotta"
    //% jres alias=LIME_TERRACOTTA
    LimeTerracotta = 327839,
    //% blockIdentity="blocks.block" enumval=393375 block="Pink Terracotta"
    //% jres alias=PINK_TERRACOTTA
    PinkTerracotta = 393375,
    //% blockIdentity="blocks.block" enumval=458911 block="Gray Terracotta"
    //% jres alias=GRAY_TERRACOTTA
    GrayTerracotta = 458911,
    //% blockIdentity="blocks.block" enumval=524447 block="Light Gray Terracotta"
    //% jres alias=LIGHT_GRAY_TERRACOTTA
    LightGrayTerracotta = 524447,
    //% blockIdentity="blocks.block" enumval=589983 block="Cyan Terracotta"
    //% jres alias=CYAN_TERRACOTTA
    CyanTerracotta = 589983,
    //% blockIdentity="blocks.block" enumval=655519 block="Purple Terracotta"
    //% jres alias=PURPLE_TERRACOTTA
    PurpleTerracotta = 655519,
    //% blockIdentity="blocks.block" enumval=721055 block="Blue Terracotta"
    //% jres alias=BLUE_TERRACOTTA
    BlueTerracotta = 721055,
    //% blockIdentity="blocks.block" enumval=786591 block="Brown Terracotta"
    //% jres alias=BROWN_TERRACOTTA
    BrownTerracotta = 786591,
    //% blockIdentity="blocks.block" enumval=852127 block="Green Terracotta"
    //% jres alias=GREEN_TERRACOTTA
    GreenTerracotta = 852127,
    //% blockIdentity="blocks.block" enumval=917663 block="Red Terracotta"
    //% jres alias=RED_TERRACOTTA
    RedTerracotta = 917663,
    //% blockIdentity="blocks.block" enumval=983199 block="Black Terracotta"
    //% jres alias=BLACK_TERRACOTTA
    BlackTerracotta = 983199,
    //% blockIdentity="blocks.block" enumval=160 block="White Stained Glass Pane"
    //% jres alias=WHITE_STAINED_GLASS_PANE
    WhiteStainedGlassPane = 160,
    //% blockIdentity="blocks.block" enumval=65696 block="Orange Stained Glass Pane"
    //% jres alias=ORANGE_STAINED_GLASS_PANE
    OrangeStainedGlassPane = 65696,
    //% blockIdentity="blocks.block" enumval=131232 block="Magenta Stained Glass Pane"
    //% jres alias=MAGENTA_STAINED_GLASS_PANE
    MagentaStainedGlassPane = 131232,
    //% blockIdentity="blocks.block" enumval=196768 block="Light Blue Stained Glass Pane"
    //% jres alias=LIGHT_BLUE_STAINED_GLASS_PANE
    LightBlueStainedGlassPane = 196768,
    //% blockIdentity="blocks.block" enumval=262304 block="Yellow Stained Glass Pane"
    //% jres alias=YELLOW_STAINED_GLASS_PANE
    YellowStainedGlassPane = 262304,
    //% blockIdentity="blocks.block" enumval=327840 block="Lime Stained Glass Pane"
    //% jres alias=LIME_STAINED_GLASS_PANE
    LimeStainedGlassPane = 327840,
    //% blockIdentity="blocks.block" enumval=393376 block="Pink Stained Glass Pane"
    //% jres alias=PINK_STAINED_GLASS_PANE
    PinkStainedGlassPane = 393376,
    //% blockIdentity="blocks.block" enumval=458912 block="Gray Stained Glass Pane"
    //% jres alias=GRAY_STAINED_GLASS_PANE
    GrayStainedGlassPane = 458912,
    //% blockIdentity="blocks.block" enumval=524448 block="Light Gray Stained Glass Pane"
    //% jres alias=LIGHT_GRAY_STAINED_GLASS_PANE
    LightGrayStainedGlassPane = 524448,
    //% blockIdentity="blocks.block" enumval=589984 block="Cyan Stained Glass Pane"
    //% jres alias=CYAN_STAINED_GLASS_PANE
    CyanStainedGlassPane = 589984,
    //% blockIdentity="blocks.block" enumval=655520 block="Purple Stained Glass Pane"
    //% jres alias=PURPLE_STAINED_GLASS_PANE
    PurpleStainedGlassPane = 655520,
    //% blockIdentity="blocks.block" enumval=721056 block="Blue Stained Glass Pane"
    //% jres alias=BLUE_STAINED_GLASS_PANE
    BlueStainedGlassPane = 721056,
    //% blockIdentity="blocks.block" enumval=786592 block="Brown Stained Glass Pane"
    //% jres alias=BROWN_STAINED_GLASS_PANE
    BrownStainedGlassPane = 786592,
    //% blockIdentity="blocks.block" enumval=852128 block="Green Stained Glass Pane"
    //% jres alias=GREEN_STAINED_GLASS_PANE
    GreenStainedGlassPane = 852128,
    //% blockIdentity="blocks.block" enumval=917664 block="Red Stained Glass Pane"
    //% jres alias=RED_STAINED_GLASS_PANE
    RedStainedGlassPane = 917664,
    //% blockIdentity="blocks.block" enumval=983200 block="Black Stained Glass Pane"
    //% jres alias=BLACK_STAINED_GLASS_PANE
    BlackStainedGlassPane = 983200,
    //% blockIdentity="blocks.block" enumval=161 block="Acacia Leaves"
    //% jres alias=ACACIA_LEAVES
    AcaciaLeaves = 161,
    //% blockIdentity="blocks.block" enumval=65697 block="Dark Oak Leaves"
    //% jres alias=DARK_OAK_LEAVES
    DarkOakLeaves = 65697,
    //% blockIdentity="blocks.block" enumval=162 block="Acacia Log"
    //% jres alias=LOG_ACACIA
    LogAcacia = 162,
    //% blockIdentity="blocks.block" enumval=65698 block="Dark Oak Log"
    //% jres alias=LOG_DARK_OAK
    LogDarkOak = 65698,
    //% blockIdentity="blocks.block" enumval=163 block="Acacia Stairs"
    //% jres alias=ACACIA_WOOD_STAIRS
    AcaciaWoodStairs = 163,
    //% blockIdentity="blocks.block" enumval=164 block="Dark Oak Stairs"
    //% jres alias=DARK_OAK_WOOD_STAIRS
    DarkOakWoodStairs = 164,
    //% blockIdentity="blocks.block" enumval=165 block="Slime Block"
    //% jres alias=SLIME_BLOCK
    SlimeBlock = 165,
    //% blockIdentity="blocks.block" enumval=167 block="Iron Trapdoor"
    //% jres alias=IRON_TRAPDOOR
    IronTrapdoor = 167,
    //% blockIdentity="blocks.block" enumval=168 block="Prismarine"
    //% jres alias=PRISMARINE
    Prismarine = 168,
    //% blockIdentity="blocks.block" enumval=65704 block="Dark Prismarine"
    //% jres alias=DARK_PRISMARINE
    DarkPrismarine = 65704,
    //% blockIdentity="blocks.block" enumval=131240 block="Prismarine Bricks"
    //% jres alias=PRISMARINE_BRICKS
    PrismarineBricks = 131240,
    //% blockIdentity="blocks.block" enumval=169 block="Sea Lantern"
    //% jres alias=SEA_LANTERN
    SeaLantern = 169,
    //% blockIdentity="blocks.block" enumval=170 block="Hay Bale"
    //% jres alias=HAY_BLOCK
    HayBlock = 170,
    //% blockIdentity="blocks.block" enumval=171 block="White Carpet"
    //% jres alias=WHITE_CARPET
    WhiteCarpet = 171,
    //% blockIdentity="blocks.block" enumval=65707 block="Orange Carpet"
    //% jres alias=ORANGE_CARPET
    OrangeCarpet = 65707,
    //% blockIdentity="blocks.block" enumval=131243 block="Magenta Carpet"
    //% jres alias=MAGENTA_CARPET
    MagentaCarpet = 131243,
    //% blockIdentity="blocks.block" enumval=196779 block="Light Blue Carpet"
    //% jres alias=LIGHT_BLUE_CARPET
    LightBlueCarpet = 196779,
    //% blockIdentity="blocks.block" enumval=262315 block="Yellow Carpet"
    //% jres alias=YELLOW_CARPET
    YellowCarpet = 262315,
    //% blockIdentity="blocks.block" enumval=327851 block="Lime Carpet"
    //% jres alias=LIME_CARPET
    LimeCarpet = 327851,
    //% blockIdentity="blocks.block" enumval=393387 block="Pink Carpet"
    //% jres alias=PINK_CARPET
    PinkCarpet = 393387,
    //% blockIdentity="blocks.block" enumval=458923 block="Gray Carpet"
    //% jres alias=GRAY_CARPET
    GrayCarpet = 458923,
    //% blockIdentity="blocks.block" enumval=524459 block="Light Gray Carpet"
    //% jres alias=LIGHT_GRAY_CARPET
    LightGrayCarpet = 524459,
    //% blockIdentity="blocks.block" enumval=589995 block="Cyan Carpet"
    //% jres alias=CYAN_CARPET
    CyanCarpet = 589995,
    //% blockIdentity="blocks.block" enumval=655531 block="Purple Carpet"
    //% jres alias=PURPLE_CARPET
    PurpleCarpet = 655531,
    //% blockIdentity="blocks.block" enumval=721067 block="Blue Carpet"
    //% jres alias=BLUE_CARPET
    BlueCarpet = 721067,
    //% blockIdentity="blocks.block" enumval=786603 block="Brown Carpet"
    //% jres alias=BROWN_CARPET
    BrownCarpet = 786603,
    //% blockIdentity="blocks.block" enumval=852139 block="Green Carpet"
    //% jres alias=GREEN_CARPET
    GreenCarpet = 852139,
    //% blockIdentity="blocks.block" enumval=917675 block="Red Carpet"
    //% jres alias=RED_CARPET
    RedCarpet = 917675,
    //% blockIdentity="blocks.block" enumval=983211 block="Black Carpet"
    //% jres alias=BLACK_CARPET
    BlackCarpet = 983211,
    //% blockIdentity="blocks.block" enumval=172 block="Terracotta"
    //% jres alias=HARDENED_CLAY
    HardenedClay = 172,
    //% blockIdentity="blocks.block" enumval=173 block="Block of Coal"
    //% jres alias=COAL_BLOCK
    CoalBlock = 173,
    //% blockIdentity="blocks.block" enumval=174 block="Packed Ice"
    //% jres alias=PACKED_ICE
    PackedIce = 174,
    //% blockIdentity="blocks.block" enumval=175 block="Sunflower"
    //% jres alias=SUNFLOWER
    Sunflower = 175,
    //% blockIdentity="blocks.block" enumval=65711 block="Lilac"
    //% jres alias=LILAC
    Lilac = 65711,
    //% blockIdentity="blocks.block" enumval=131247 block="Double Tallgrass"
    //% jres alias=DOUBLE_TALLGRASS
    DoubleTallgrass = 131247,
    //% blockIdentity="blocks.block" enumval=196783 block="Large Fern"
    //% jres alias=LARGE_FERN
    LargeFern = 196783,
    //% blockIdentity="blocks.block" enumval=262319 block="Rose Bush"
    //% jres alias=ROSE_BUSH
    RoseBush = 262319,
    //% blockIdentity="blocks.block" enumval=327855 block="Peony"
    //% jres alias=PEONY
    Peony = 327855,
    //% blockIdentity="blocks.block" enumval=179 block="Red Sandstone"
    //% jres alias=RED_SANDSTONE
    RedSandstone = 179,
    //% blockIdentity="blocks.block" enumval=65715 block="Chiseled Red Sandstone"
    //% jres alias=CHISELED_RED_SANDSTONE
    ChiseledRedSandstone = 65715,
    //% blockIdentity="blocks.block" enumval=131251 block="Smooth Red Sandstone"
    //% jres alias=SMOOTH_RED_SANDSTONE
    SmoothRedSandstone = 131251,
    //% blockIdentity="blocks.block" enumval=180 block="Red Sandstone Stairs"
    //% jres alias=RED_SANDSTONE_STAIRS
    RedSandstoneStairs = 180,
    //% blockIdentity="blocks.block" enumval=181 block="Double Red Sandstone Slab"
    //% jres alias=DOUBLE_RED_SANDSTONE_SLAB
    DoubleRedSandstoneSlab = 181,
    //% blockIdentity="blocks.block" enumval=182 block="Red Sandstone Slab"
    //% jres alias=RED_SANDSTONE_SLAB
    RedSandstoneSlab = 182,
    //% blockIdentity="blocks.block" enumval=65718 block="Purpur Slab"
    //% jres alias=PURPUR_SLAB
    PurpurSlab = 65718,
    //% blockIdentity="blocks.block" enumval=131254 block="Prismarine Slab"
    //% jres alias=PRISMARINE_SLAB
    PrismarineSlab = 131254,
    //% blockIdentity="blocks.block" enumval=196790 block="Dark Prismarine Slab"
    //% jres alias=DARK_PRISMARINE_SLAB
    DarkPrismarineSlab = 196790,
    //% blockIdentity="blocks.block" enumval=262326 block="Prismarine Bricks Slab"
    //% jres alias=PRISMARINE_BRICK_SLAB
    PrismarineBrickSlab = 262326,
    //% blockIdentity="blocks.block" enumval=183 block="Spruce Fence Gate"
    //% jres alias=SPRUCE_FENCE_GATE
    SpruceFenceGate = 183,
    //% blockIdentity="blocks.block" enumval=184 block="Birch Fence Gate"
    //% jres alias=BIRCH_FENCE_GATE
    BirchFenceGate = 184,
    //% blockIdentity="blocks.block" enumval=185 block="Jungle Fence Gate"
    //% jres alias=JUNGLE_FENCE_GATE
    JungleFenceGate = 185,
    //% blockIdentity="blocks.block" enumval=186 block="Dark Oak Fence Gate"
    //% jres alias=DARK_OAK_FENCE_GATE
    DarkOakFenceGate = 186,
    //% blockIdentity="blocks.block" enumval=187 block="Acacia Fence Gate"
    //% jres alias=ACACIA_FENCE_GATE
    AcaciaFenceGate = 187,
    //% blockIdentity="blocks.block" enumval=198 block="Grass Path"
    //% jres alias=GRASS_PATH
    GrassPath = 198,
    //% blockIdentity="blocks.block" enumval=199 block="Frame"
    //% jres alias=FRAME
    Frame = 199,
    //% blockIdentity="blocks.block" enumval=200 block="Chorus Flower"
    //% jres alias=CHORUS_FLOWER
    ChorusFlower = 200,
    //% blockIdentity="blocks.block" enumval=201 block="Purpur Block"
    //% jres alias=PURPUR_BLOCK
    PurpurBlock = 201,
    //% blockIdentity="blocks.block" enumval=131273 block="Purpur Pillar"
    //% jres alias=PURPUR_PILLAR
    PurpurPillar = 131273,
    //% blockIdentity="blocks.block" enumval=203 block="Purpur Stairs"
    //% jres alias=PURPUR_STAIRS
    PurpurStairs = 203,
    //% blockIdentity="blocks.block" enumval=1048781 block="Shulker Box"
    //% jres alias=SHULKER_BOX
    ShulkerBox = 1048781,
    //% blockIdentity="blocks.block" enumval=206 block="End Stone Bricks"
    //% jres alias=END_STONE_BRICKS
    EndStoneBricks = 206,
    //% blockIdentity="blocks.block" enumval=208 block="End Rod"
    //% jres alias=END_ROD
    EndRod = 208,
    //% blockIdentity="blocks.block" enumval=213 block="Magma Block"
    //% jres alias=MAGMA_BLOCK
    MagmaBlock = 213,
    //% blockIdentity="blocks.block" enumval=214 block="Nether Wart Block"
    //% jres alias=NETHER_WART_BLOCK
    NetherWartBlock = 214,
    //% blockIdentity="blocks.block" enumval=215 block="Red Nether Brick"
    //% jres alias=RED_NETHER_BRICK
    RedNetherBrick = 215,
    //% blockIdentity="blocks.block" enumval=216 block="Bone Block"
    //% jres alias=BONE_BLOCK
    BoneBlock = 216,
    //% blockIdentity="blocks.block" enumval=218 block="White Shulker Box"
    //% jres alias=WHITE_SHULKER_BOX
    WhiteShulkerBox = 218,
    //% blockIdentity="blocks.block" enumval=65754 block="Orange Shulker Box"
    //% jres alias=ORANGE_SHULKER_BOX
    OrangeShulkerBox = 65754,
    //% blockIdentity="blocks.block" enumval=131290 block="Magenta Shulker Box"
    //% jres alias=MAGENTA_SHULKER_BOX
    MagentaShulkerBox = 131290,
    //% blockIdentity="blocks.block" enumval=196826 block="Light Blue Shulker Box"
    //% jres alias=LIGHT_BLUE_SHULKER_BOX
    LightBlueShulkerBox = 196826,
    //% blockIdentity="blocks.block" enumval=262362 block="Yellow Shulker Box"
    //% jres alias=YELLOW_SHULKER_BOX
    YellowShulkerBox = 262362,
    //% blockIdentity="blocks.block" enumval=327898 block="Lime Shulker Box"
    //% jres alias=LIME_SHULKER_BOX
    LimeShulkerBox = 327898,
    //% blockIdentity="blocks.block" enumval=393434 block="Pink Shulker Box"
    //% jres alias=PINK_SHULKER_BOX
    PinkShulkerBox = 393434,
    //% blockIdentity="blocks.block" enumval=458970 block="Gray Shulker Box"
    //% jres alias=GRAY_SHULKER_BOX
    GrayShulkerBox = 458970,
    //% blockIdentity="blocks.block" enumval=524506 block="Silver Shulker Box"
    //% jres alias=SILVER_SHULKER_BOX
    SilverShulkerBox = 524506,
    //% blockIdentity="blocks.block" enumval=590042 block="Cyan Shulker Box"
    //% jres alias=CYAN_SHULKER_BOX
    CyanShulkerBox = 590042,
    //% blockIdentity="blocks.block" enumval=655578 block="Purple Shulker Box"
    //% jres alias=PURPLE_SHULKER_BOX
    PurpleShulkerBox = 655578,
    //% blockIdentity="blocks.block" enumval=721114 block="Blue Shulker Box"
    //% jres alias=BLUE_SHULKER_BOX
    BlueShulkerBox = 721114,
    //% blockIdentity="blocks.block" enumval=786650 block="Brown Shulker Box"
    //% jres alias=BROWN_SHULKER_BOX
    BrownShulkerBox = 786650,
    //% blockIdentity="blocks.block" enumval=852186 block="Green Shulker Box"
    //% jres alias=GREEN_SHULKER_BOX
    GreenShulkerBox = 852186,
    //% blockIdentity="blocks.block" enumval=917722 block="Red Shulker Box"
    //% jres alias=RED_SHULKER_BOX
    RedShulkerBox = 917722,
    //% blockIdentity="blocks.block" enumval=983258 block="Black Shulker Box"
    //% jres alias=BLACK_SHULKER_BOX
    BlackShulkerBox = 983258,
    //% blockIdentity="blocks.block" enumval=219 block="Purple Glazed Terracotta"
    //% jres alias=PURPLE_GLAZED_TERRACOTTA
    PurpleGlazedTerracotta = 219,
    //% blockIdentity="blocks.block" enumval=220 block="White Glazed Terracotta"
    //% jres alias=WHITE_GLAZED_TERRACOTTA
    WhiteGlazedTerracotta = 220,
    //% blockIdentity="blocks.block" enumval=221 block="Orange Glazed Terracotta"
    //% jres alias=ORANGE_GLAZED_TERRACOTTA
    OrangeGlazedTerracotta = 221,
    //% blockIdentity="blocks.block" enumval=222 block="Magenta Glazed Terracotta"
    //% jres alias=MAGENTA_GLAZED_TERRACOTTA
    MagentaGlazedTerracotta = 222,
    //% blockIdentity="blocks.block" enumval=223 block="Light Blue Glazed Terracotta"
    //% jres alias=LIGHT_BLUE_GLAZED_TERRACOTTA
    LightBlueGlazedTerracotta = 223,
    //% blockIdentity="blocks.block" enumval=224 block="Yellow Glazed Terracotta"
    //% jres alias=YELLOW_GLAZED_TERRACOTTA
    YellowGlazedTerracotta = 224,
    //% blockIdentity="blocks.block" enumval=225 block="Lime Glazed Terracotta"
    //% jres alias=LIME_GLAZED_TERRACOTTA
    LimeGlazedTerracotta = 225,
    //% blockIdentity="blocks.block" enumval=226 block="Pink Glazed Terracotta"
    //% jres alias=PINK_GLAZED_TERRACOTTA
    PinkGlazedTerracotta = 226,
    //% blockIdentity="blocks.block" enumval=227 block="Gray Glazed Terracotta"
    //% jres alias=GRAY_GLAZED_TERRACOTTA
    GrayGlazedTerracotta = 227,
    //% blockIdentity="blocks.block" enumval=228 block="Light Gray Glazed Terracotta"
    //% jres alias=LIGHT_GRAY_GLAZED_TERRACOTTA
    LightGrayGlazedTerracotta = 228,
    //% blockIdentity="blocks.block" enumval=229 block="Cyan Glazed Terracotta"
    //% jres alias=CYAN_GLAZED_TERRACOTTA
    CyanGlazedTerracotta = 229,
    //% blockIdentity="blocks.block" enumval=231 block="Blue Glazed Terracotta"
    //% jres alias=BLUE_GLAZED_TERRACOTTA
    BlueGlazedTerracotta = 231,
    //% blockIdentity="blocks.block" enumval=232 block="Brown Glazed Terracotta"
    //% jres alias=BROWN_GLAZED_TERRACOTTA
    BrownGlazedTerracotta = 232,
    //% blockIdentity="blocks.block" enumval=233 block="Green Glazed Terracotta"
    //% jres alias=GREEN_GLAZED_TERRACOTTA
    GreenGlazedTerracotta = 233,
    //% blockIdentity="blocks.block" enumval=234 block="Red Glazed Terracotta"
    //% jres alias=RED_GLAZED_TERRACOTTA
    RedGlazedTerracotta = 234,
    //% blockIdentity="blocks.block" enumval=235 block="Black Glazed Terracotta"
    //% jres alias=BLACK_GLAZED_TERRACOTTA
    BlackGlazedTerracotta = 235,
    //% blockIdentity="blocks.block" enumval=236 block="White Concrete"
    //% jres alias=WHITE_CONCRETE
    WhiteConcrete = 236,
    //% blockIdentity="blocks.block" enumval=65772 block="Orange Concrete"
    //% jres alias=ORANGE_CONCRETE
    OrangeConcrete = 65772,
    //% blockIdentity="blocks.block" enumval=131308 block="Magenta Concrete"
    //% jres alias=MAGENTA_CONCRETE
    MagentaConcrete = 131308,
    //% blockIdentity="blocks.block" enumval=196844 block="Light Blue Concrete"
    //% jres alias=LIGHT_BLUE_CONCRETE
    LightBlueConcrete = 196844,
    //% blockIdentity="blocks.block" enumval=262380 block="Yellow Concrete"
    //% jres alias=YELLOW_CONCRETE
    YellowConcrete = 262380,
    //% blockIdentity="blocks.block" enumval=327916 block="Lime Concrete"
    //% jres alias=LIME_CONCRETE
    LimeConcrete = 327916,
    //% blockIdentity="blocks.block" enumval=393452 block="Pink Concrete"
    //% jres alias=PINK_CONCRETE
    PinkConcrete = 393452,
    //% blockIdentity="blocks.block" enumval=458988 block="Gray Concrete"
    //% jres alias=GRAY_CONCRETE
    GrayConcrete = 458988,
    //% blockIdentity="blocks.block" enumval=524524 block="Light Gray Concrete"
    //% jres alias=LIGHT_GRAY_CONCRETE
    LightGrayConcrete = 524524,
    //% blockIdentity="blocks.block" enumval=590060 block="Cyan Concrete"
    //% jres alias=CYAN_CONCRETE
    CyanConcrete = 590060,
    //% blockIdentity="blocks.block" enumval=655596 block="Purple Concrete"
    //% jres alias=PURPLE_CONCRETE
    PurpleConcrete = 655596,
    //% blockIdentity="blocks.block" enumval=721132 block="Blue Concrete"
    //% jres alias=BLUE_CONCRETE
    BlueConcrete = 721132,
    //% blockIdentity="blocks.block" enumval=786668 block="Brown Concrete"
    //% jres alias=BROWN_CONCRETE
    BrownConcrete = 786668,
    //% blockIdentity="blocks.block" enumval=852204 block="Green Concrete"
    //% jres alias=GREEN_CONCRETE
    GreenConcrete = 852204,
    //% blockIdentity="blocks.block" enumval=917740 block="Red Concrete"
    //% jres alias=RED_CONCRETE
    RedConcrete = 917740,
    //% blockIdentity="blocks.block" enumval=983276 block="Black Concrete"
    //% jres alias=BLACK_CONCRETE
    BlackConcrete = 983276,
    //% blockIdentity="blocks.block" enumval=237 block="White Concrete Powder"
    //% jres alias=WHITE_CONCRETE_POWDER
    WhiteConcretePowder = 237,
    //% blockIdentity="blocks.block" enumval=65773 block="Orange Concrete Powder"
    //% jres alias=ORANGE_CONCRETE_POWDER
    OrangeConcretePowder = 65773,
    //% blockIdentity="blocks.block" enumval=131309 block="Magenta Concrete Powder"
    //% jres alias=MAGENTA_CONCRETE_POWDER
    MagentaConcretePowder = 131309,
    //% blockIdentity="blocks.block" enumval=196845 block="Light Blue Concrete Powder"
    //% jres alias=LIGHT_BLUE_CONCRETE_POWDER
    LightBlueConcretePowder = 196845,
    //% blockIdentity="blocks.block" enumval=262381 block="Yellow Concrete Powder"
    //% jres alias=YELLOW_CONCRETE_POWDER
    YellowConcretePowder = 262381,
    //% blockIdentity="blocks.block" enumval=327917 block="Lime Concrete Powder"
    //% jres alias=LIME_CONCRETE_POWDER
    LimeConcretePowder = 327917,
    //% blockIdentity="blocks.block" enumval=393453 block="Pink Concrete Powder"
    //% jres alias=PINK_CONCRETE_POWDER
    PinkConcretePowder = 393453,
    //% blockIdentity="blocks.block" enumval=458989 block="Gray Concrete Powder"
    //% jres alias=GRAY_CONCRETE_POWDER
    GrayConcretePowder = 458989,
    //% blockIdentity="blocks.block" enumval=524525 block="Light Gray Concrete Powder"
    //% jres alias=LIGHT_GRAY_CONCRETE_POWDER
    LightGrayConcretePowder = 524525,
    //% blockIdentity="blocks.block" enumval=590061 block="Cyan Concrete Powder"
    //% jres alias=CYAN_CONCRETE_POWDER
    CyanConcretePowder = 590061,
    //% blockIdentity="blocks.block" enumval=655597 block="Purple Concrete Powder"
    //% jres alias=PURPLE_CONCRETE_POWDER
    PurpleConcretePowder = 655597,
    //% blockIdentity="blocks.block" enumval=721133 block="Blue Concrete Powder"
    //% jres alias=BLUE_CONCRETE_POWDER
    BlueConcretePowder = 721133,
    //% blockIdentity="blocks.block" enumval=786669 block="Brown Concrete Powder"
    //% jres alias=BROWN_CONCRETE_POWDER
    BrownConcretePowder = 786669,
    //% blockIdentity="blocks.block" enumval=852205 block="Green Concrete Powder"
    //% jres alias=GREEN_CONCRETE_POWDER
    GreenConcretePowder = 852205,
    //% blockIdentity="blocks.block" enumval=917741 block="Red Concrete Powder"
    //% jres alias=RED_CONCRETE_POWDER
    RedConcretePowder = 917741,
    //% blockIdentity="blocks.block" enumval=983277 block="Black Concrete Powder"
    //% jres alias=BLACK_CONCRETE_POWDER
    BlackConcretePowder = 983277,
    //% blockIdentity="blocks.block" enumval=240 block="Chorus Plant"
    //% jres alias=CHORUS_PLANT
    ChorusPlant = 240,
    //% blockIdentity="blocks.block" enumval=241 block="White Stained Glass"
    //% jres alias=WHITE_STAINED_GLASS
    WhiteStainedGlass = 241,
    //% blockIdentity="blocks.block" enumval=65777 block="Orange Stained Glass"
    //% jres alias=ORANGE_STAINED_GLASS
    OrangeStainedGlass = 65777,
    //% blockIdentity="blocks.block" enumval=131313 block="Magenta Stained Glass"
    //% jres alias=MAGENTA_STAINED_GLASS
    MagentaStainedGlass = 131313,
    //% blockIdentity="blocks.block" enumval=196849 block="Light Blue Stained Glass"
    //% jres alias=LIGHT_BLUE_STAINED_GLASS
    LightBlueStainedGlass = 196849,
    //% blockIdentity="blocks.block" enumval=262385 block="Yellow Stained Glass"
    //% jres alias=YELLOW_STAINED_GLASS
    YellowStainedGlass = 262385,
    //% blockIdentity="blocks.block" enumval=327921 block="Lime Stained Glass"
    //% jres alias=LIME_STAINED_GLASS
    LimeStainedGlass = 327921,
    //% blockIdentity="blocks.block" enumval=393457 block="Pink Stained Glass"
    //% jres alias=PINK_STAINED_GLASS
    PinkStainedGlass = 393457,
    //% blockIdentity="blocks.block" enumval=458993 block="Gray Stained Glass"
    //% jres alias=GRAY_STAINED_GLASS
    GrayStainedGlass = 458993,
    //% blockIdentity="blocks.block" enumval=524529 block="Light Gray Stained Glass"
    //% jres alias=LIGHT_GRAY_STAINED_GLASS
    LightGrayStainedGlass = 524529,
    //% blockIdentity="blocks.block" enumval=590065 block="Cyan Stained Glass"
    //% jres alias=CYAN_STAINED_GLASS
    CyanStainedGlass = 590065,
    //% blockIdentity="blocks.block" enumval=655601 block="Purple Stained Glass"
    //% jres alias=PURPLE_STAINED_GLASS
    PurpleStainedGlass = 655601,
    //% blockIdentity="blocks.block" enumval=721137 block="Blue Stained Glass"
    //% jres alias=BLUE_STAINED_GLASS
    BlueStainedGlass = 721137,
    //% blockIdentity="blocks.block" enumval=786673 block="Brown Stained Glass"
    //% jres alias=BROWN_STAINED_GLASS
    BrownStainedGlass = 786673,
    //% blockIdentity="blocks.block" enumval=852209 block="Green Stained Glass"
    //% jres alias=GREEN_STAINED_GLASS
    GreenStainedGlass = 852209,
    //% blockIdentity="blocks.block" enumval=917745 block="Red Stained Glass"
    //% jres alias=RED_STAINED_GLASS
    RedStainedGlass = 917745,
    //% blockIdentity="blocks.block" enumval=983281 block="Black Stained Glass"
    //% jres alias=BLACK_STAINED_GLASS
    BlackStainedGlass = 983281,
    //% blockIdentity="blocks.block" enumval=243 block="Podzol"
    //% jres alias=PODZOL
    Podzol = 243,
    //% blockIdentity="blocks.block" enumval=244 block="Beetroot"
    //% jres alias=BEETROOT
    Beetroot = 244,
    //% blockIdentity="blocks.block" enumval=245 block="Stonecutter"
    //% jres alias=STONECUTTER
    Stonecutter = 245,
    //% blockIdentity="blocks.block" enumval=251 block="Observer"
    //% jres alias=OBSERVER
    Observer = 251,
    //% blockIdentity="blocks.block" enumval=252 block="Structure Block"
    //% jres alias=STRUCTURE_BLOCK
    StructureBlock = 252,
    //% blockIdentity="blocks.block" enumval=513 block="Prismarine Stairs"
    //% jres alias=PRISMARINE_STAIRS
    PrismarineStairs = 513,
    //% blockIdentity="blocks.block" enumval=514 block="Dark Prismarine Stairs"
    //% jres alias=DARK_PRISMARINE_STAIRS
    DarkPrismarineStairs = 514,
    //% blockIdentity="blocks.block" enumval=515 block="Prismarine Brick Stairs"
    //% jres alias=PRISMARINE_BRICK_STAIRS
    PrismarineBrickStairs = 515,
    //% blockIdentity="blocks.block" enumval=516 block="Stripped Spruce Log"
    //% jres alias=STRIPPED_SPRUCE_WOOD
    StrippedSpruceWood = 516,
    //% blockIdentity="blocks.block" enumval=517 block="Stripped Birch Log"
    //% jres alias=STRIPPED_BIRCH_WOOD
    StrippedBirchWood = 517,
    //% blockIdentity="blocks.block" enumval=518 block="Stripped Jungle Log"
    //% jres alias=STRIPPED_JUNGLE_WOOD
    StrippedJungleWood = 518,
    //% blockIdentity="blocks.block" enumval=519 block="Stripped Acacia Log"
    //% jres alias=STRIPPED_ACACIA_WOOD
    StrippedAcaciaWood = 519,
    //% blockIdentity="blocks.block" enumval=520 block="Stripped Dark Oak Log"
    //% jres alias=STRIPPED_DARK_OAK_WOOD
    StrippedDarkOakWood = 520,
    //% blockIdentity="blocks.block" enumval=521 block="Stripped Oak Log"
    //% jres alias=STRIPPED_OAK_WOOD
    StrippedOakWood = 521,
    //% blockIdentity="blocks.block" enumval=676 block="Scaffolding"
    //% jres alias=SCAFFOLDING
    Scaffolding = 676,
    //% blockIdentity="blocks.block" enumval=522 block="Blue Ice"
    //% jres alias=BLUE_ICE
    BlueIce = 522,
    //% blockIdentity="blocks.block" enumval=641 block="Seagrass"
    //% jres alias=SEAGRASS
    Seagrass = 641,
    //% blockIdentity="blocks.block" enumval=642 block="Tube Coral"
    //% jres alias=TUBE_CORAL
    TubeCoral = 642,
    //% blockIdentity="blocks.block" enumval=66178 block="Brain Coral"
    //% jres alias=BRAIN_CORAL
    BrainCoral = 66178,
    //% blockIdentity="blocks.block" enumval=131714 block="Bubble Coral"
    //% jres alias=BUBBLE_CORAL
    BubbleCoral = 131714,
    //% blockIdentity="blocks.block" enumval=197250 block="Fire Coral"
    //% jres alias=FIRE_CORAL
    FireCoral = 197250,
    //% blockIdentity="blocks.block" enumval=262786 block="Horn Coral"
    //% jres alias=HORN_CORAL
    HornCoral = 262786,
    //% blockIdentity="blocks.block" enumval=643 block="Tube Coral Block"
    //% jres alias=TUBE_CORAL_BLOCK
    TubeCoralBlock = 643,
    //% blockIdentity="blocks.block" enumval=66179 block="Brain Coral Block"
    //% jres alias=BRAIN_CORAL_BLOCK
    BrainCoralBlock = 66179,
    //% blockIdentity="blocks.block" enumval=131715 block="Bubble Coral Block"
    //% jres alias=BUBBLE_CORAL_BLOCK
    BubbleCoralBlock = 131715,
    //% blockIdentity="blocks.block" enumval=197251 block="Fire Coral Block"
    //% jres alias=FIRE_CORAL_BLOCK
    FireCoralBlock = 197251,
    //% blockIdentity="blocks.block" enumval=262787 block="Horn Coral Block"
    //% jres alias=HORN_CORAL_BLOCK
    HornCoralBlock = 262787,
    //% blockIdentity="blocks.block" enumval=328323 block="Dead Tube Coral Block"
    //% jres alias=DEAD_TUBE_CORAL_BLOCK
    DeadTubeCoralBlock = 328323,
    //% blockIdentity="blocks.block" enumval=393859 block="Dead Brain Coral Block"
    //% jres alias=DEAD_BRAIN_CORAL_BLOCK
    DeadBrainCoralBlock = 393859,
    //% blockIdentity="blocks.block" enumval=459395 block="Dead Bubble Coral Block"
    //% jres alias=DEAD_BUBBLE_CORAL_BLOCK
    DeadBubbleCoralBlock = 459395,
    //% blockIdentity="blocks.block" enumval=721539 block="Dead Fire Coral Block"
    //% jres alias=DEAD_FIRE_CORAL_BLOCK
    DeadFireCoralBlock = 721539,
    //% blockIdentity="blocks.block" enumval=787075 block="Dead Horn Coral Block"
    //% jres alias=DEAD_HORN_CORAL_BLOCK
    DeadHornCoralBlock = 787075,
    //% blockIdentity="blocks.block" enumval=644 block="Tube Coral Fan"
    //% jres alias=TUBE_CORAL_FAN
    TubeCoralFan = 644,
    //% blockIdentity="blocks.block" enumval=66180 block="Brain Coral Fan"
    //% jres alias=BRAIN_CORAL_FAN
    BrainCoralFan = 66180,
    //% blockIdentity="blocks.block" enumval=131716 block="Bubble Coral Fan"
    //% jres alias=BUBBLE_CORAL_FAN
    BubbleCoralFan = 131716,
    //% blockIdentity="blocks.block" enumval=197252 block="Fire Coral Fan"
    //% jres alias=FIRE_CORAL_FAN
    FireCoralFan = 197252,
    //% blockIdentity="blocks.block" enumval=262788 block="Horn Coral Fan"
    //% jres alias=HORN_CORAL_FAN
    HornCoralFan = 262788,
    //% blockIdentity="blocks.block" enumval=645 block="Dead Tube Coral Fan"
    //% jres alias=DEAD_TUBE_CORAL_FAN
    DeadTubeCoralFan = 645,
    //% blockIdentity="blocks.block" enumval=66181 block="Dead Brain Coral Fan"
    //% jres alias=DEAD_BRAIN_CORAL_FAN
    DeadBrainCoralFan = 66181,
    //% blockIdentity="blocks.block" enumval=131717 block="Dead Bubble Coral Fan"
    //% jres alias=DEAD_BUBBLE_CORAL_FAN
    DeadBubbleCoralFan = 131717,
    //% blockIdentity="blocks.block" enumval=197253 block="Dead Fire Coral Fan"
    //% jres alias=DEAD_FIRE_CORAL_FAN
    DeadFireCoralFan = 197253,
    //% blockIdentity="blocks.block" enumval=262789 block="Dead Horn Coral Fan"
    //% jres alias=DEAD_HORN_CORAL_FAN
    DeadHornCoralFan = 262789,
    //% blockIdentity="blocks.block" enumval=649 block="Kelp"
    //% jres alias=KELP
    Kelp = 649,
    //% blockIdentity="blocks.block" enumval=650 block="Dried Kelp Block"
    //% jres alias=DRIED_KELP_BLOCK
    DriedKelpBlock = 650,
    //% blockIdentity="blocks.block" enumval=651 block="Acacia Button"
    //% jres alias=ACACIA_BUTTON
    AcaciaButton = 651,
    //% blockIdentity="blocks.block" enumval=652 block="Birch Button"
    //% jres alias=BIRCH_BUTTON
    BirchButton = 652,
    //% blockIdentity="blocks.block" enumval=653 block="Dark Oak Button"
    //% jres alias=DARK_OAK_BUTTON
    DarkOakButton = 653,
    //% blockIdentity="blocks.block" enumval=654 block="Jungle Button"
    //% jres alias=JUNGLE_BUTTON
    JungleButton = 654,
    //% blockIdentity="blocks.block" enumval=655 block="Spruce Button"
    //% jres alias=SPRUCE_BUTTON
    SpruceButton = 655,
    //% blockIdentity="blocks.block" enumval=656 block="Acacia Trapdoor"
    //% jres alias=ACACIA_TRAPDOOR
    AcaciaTrapdoor = 656,
    //% blockIdentity="blocks.block" enumval=657 block="Birch Trapdoor"
    //% jres alias=BIRCH_TRAPDOOR
    BirchTrapdoor = 657,
    //% blockIdentity="blocks.block" enumval=658 block="Dark Oak Trapdoor"
    //% jres alias=DARK_OAK_TRAPDOOR
    DarkOakTrapdoor = 658,
    //% blockIdentity="blocks.block" enumval=659 block="Jungle Trapdoor"
    //% jres alias=JUNGLE_TRAPDOOR
    JungleTrapdoor = 659,
    //% blockIdentity="blocks.block" enumval=660 block="Spruce Trapdoor"
    //% jres alias=SPRUCE_TRAPDOOR
    SpruceTrapdoor = 660,
    //% blockIdentity="blocks.block" enumval=661 block="Acacia Pressure Plate"
    //% jres alias=ACACIA_PRESSURE_PLATE
    AcaciaPressurePlate = 661,
    //% blockIdentity="blocks.block" enumval=662 block="Birch Pressure Plate"
    //% jres alias=BIRCH_PRESSURE_PLATE
    BirchPressurePlate = 662,
    //% blockIdentity="blocks.block" enumval=663 block="Dark Oak Pressure Plate"
    //% jres alias=DARK_OAK_PRESSURE_PLATE
    DarkOakPressurePlate = 663,
    //% blockIdentity="blocks.block" enumval=664 block="Jungle Pressure Plate"
    //% jres alias=JUNGLE_PRESSURE_PLATE
    JunglePressurePlate = 664,
    //% blockIdentity="blocks.block" enumval=665 block="Spruce Pressure Plate"
    //% jres alias=SPRUCE_PRESSURE_PLATE
    SprucePressurePlate = 665,
    //% blockIdentity="blocks.block" enumval=666 block="Carved Pumpkin"
    //% jres alias=CARVED_PUMPKIN
    CarvedPumpkin = 666,
    //% blockIdentity="blocks.block" enumval=667 block="Sea Pickle"
    //% jres alias=SEA_PICKLE
    SeaPickle = 667,
    //% blockIdentity="blocks.block" enumval=711 block="Cartography Table"
    //% jres alias=CARTOGRAPHY_TABLE
    CartographyTable = 711,
    //% blockIdentity="blocks.block" enumval=712 block="Fletching Table"
    //% jres alias=FLETCHING_TABLE
    FletchingTable = 712,
    //% blockIdentity="blocks.block" enumval=707 block="Blast Furnace"
    //% jres alias=BLAST_FURNACE
    BlastFurnace = 707,
    //% blockIdentity="blocks.block" enumval=708 block="Stonecutter"
    //% jres alias=STONECUTTER_BLOCK
    StonecutterBlock = 708,
    //% blockIdentity="blocks.block" enumval=709 block="Smoker"
    //% jres alias=SMOKER
    Smoker = 709,
    //% blockIdentity="blocks.block" enumval=713 block="Smithing Table"
    //% jres alias=SMITHING_TABLE
    SmithingTable = 713,
    //% blockIdentity="blocks.block" enumval=714 block="Barrel"
    //% jres alias=BARREL
    Barrel = 714,
    //% blockIdentity="blocks.block" enumval=715 block="Loom"
    //% jres alias=LOOM
    Loom = 715,
    //% blockIdentity="blocks.block" enumval=717 block="Bell"
    //% jres alias=BELL
    Bell = 717,
    //% blockIdentity="blocks.block" enumval=720 block="Campfire"
    //% jres alias=CAMPFIRE
    Campfire = 720,
    //% blockIdentity="blocks.block" enumval=724 block="Composter"
    //% jres alias=COMPOSTER
    Composter = 724,
    //% blockIdentity="blocks.block" enumval=729 block="Bee Nest"
    //% jres alias=BEE_NEST
    BeeNest = 729,
    //% blockIdentity="blocks.block" enumval=730 block="Beehive"
    //% jres alias=BEEHIVE
    Beehive = 730,
    //% blockIdentity="blocks.block" enumval=731 block="Honey Block"
    //% jres alias=HONEY_BLOCK
    HoneyBlock = 731,
    //% blockIdentity="blocks.block" enumval=732 block="Honeycomb Block"
    //% jres alias=HONEYCOMB_BLOCK
    HoneycombBlock = 732,
    //% blockIdentity="blocks.block" enumval=738 block="Crimson Planks"
    //% jres alias=CRIMSON_PLANKS
    CrimsonPlanks = 738,
    //% blockIdentity="blocks.block" enumval=739 block="Warped Planks"
    //% jres alias=WARPED_PLANKS
    WarpedPlanks = 739,
    //% blockIdentity="blocks.block" enumval=740 block="Blackstone Wall"
    //% jres alias=BLACKSTONE_WALL
    BlackstoneWall = 740,
    //% blockIdentity="blocks.block" enumval=741 block="Crimson Fence"
    //% jres alias=CRIMSON_FENCE
    CrimsonFence = 741,
    //% blockIdentity="blocks.block" enumval=742 block="Warped Fence"
    //% jres alias=WARPED_FENCE
    WarpedFence = 742,
    //% blockIdentity="blocks.block" enumval=743 block="Crimson Fence Gate"
    //% jres alias=CRIMSON_FENCE_GATE
    CrimsonFenceGate = 743,
    //% blockIdentity="blocks.block" enumval=744 block="Warped Fence Gate"
    //% jres alias=WARPED_FENCE_GATE
    WarpedFenceGate = 744,
    //% blockIdentity="blocks.block" enumval=745 block="Chain"
    //% jres alias=CHAIN
    Chain = 745,
    //% blockIdentity="blocks.block" enumval=746 block="Small Dripleaf"
    //% jres alias=SMALL_DRIPLEAF
    SmallDripleaf = 746,
    //% blockIdentity="blocks.block" enumval=747 block="Crimson Stairs"
    //% jres alias=CRIMSON_STAIRS
    CrimsonStairs = 747,
    //% blockIdentity="blocks.block" enumval=748 block="Warped Stairs"
    //% jres alias=WARPED_STAIRS
    WarpedStairs = 748,
    //% blockIdentity="blocks.block" enumval=749 block="Blackstone Stairs"
    //% jres alias=BLACKSTONE_STAIRS
    BlackstoneStairs = 749,
    //% blockIdentity="blocks.block" enumval=750 block="Glow Lichen"
    //% jres alias=GLOW_LICHEN
    GlowLichen = 750,
    //% blockIdentity="blocks.block" enumval=751 block="Crimson Button"
    //% jres alias=CRIMSON_BUTTON
    CrimsonButton = 751,
    //% blockIdentity="blocks.block" enumval=752 block="Ancient Debris"
    //% jres alias=ANCIENT_DEBRIS
    AncientDebris = 752,
    //% blockIdentity="blocks.block" enumval=753 block="Respawn Anchor"
    //% jres alias=RESPAWN_ANCHOR
    RespawnAnchor = 753,
    //% blockIdentity="blocks.block" enumval=754 block="Tinted Glass"
    //% jres alias=TINTED_GLASS
    TintedGlass = 754,
    //% blockIdentity="blocks.block" enumval=755 block="Soul Soil"
    //% jres alias=SOUL_SOIL
    SoulSoil = 755,
    //% blockIdentity="blocks.block" enumval=756 block="Crimson Slab"
    //% jres alias=CRIMSON_SLAB
    CrimsonSlab = 756,
    //% blockIdentity="blocks.block" enumval=757 block="Warped Slab"
    //% jres alias=WARPED_SLAB
    WarpedSlab = 757,
    //% blockIdentity="blocks.block" enumval=758 block="Blackstone Slab"
    //% jres alias=BLACKSTONE_SLAB
    BlackstoneSlab = 758,
    //% blockIdentity="blocks.block" enumval=759 block="Chiseled Nether Bricks"
    //% jres alias=CHISELED_NETHER_BRICKS
    ChiseledNetherBricks = 759,
    //% blockIdentity="blocks.block" enumval=760 block="Cracked Nether Bricks"
    //% jres alias=CRACKED_NETHER_BRICKS
    CrackedNetherBricks = 760,
    //% blockIdentity="blocks.block" enumval=761 block="Block of Copper"
    //% jres alias=BLOCK_OF_COPPER
    BlockOfCopper = 761,
    //% blockIdentity="blocks.block" enumval=762 block="Exposed Copper"
    //% jres alias=EXPOSED_COPPER
    ExposedCopper = 762,
    //% blockIdentity="blocks.block" enumval=763 block="Weathered Copper"
    //% jres alias=WEATHERED_COPPER
    WeatheredCopper = 763,
    //% blockIdentity="blocks.block" enumval=764 block="Oxidized Copper"
    //% jres alias=OXIDIZED_COPPER
    OxidizedCopper = 764,
    //% blockIdentity="blocks.block" enumval=765 block="Block of Netherite"
    //% jres alias=BLOCK_OF_NETHERITE
    BlockOfNetherite = 765,
    //% blockIdentity="blocks.block" enumval=766 block="Shroomlight"
    //% jres alias=SHROOMLIGHT
    Shroomlight = 766,
    //% blockIdentity="blocks.block" enumval=767 block="Crimson Door"
    //% jres alias=CRIMSON_DOOR
    CrimsonDoor = 767,
    //% blockIdentity="blocks.block" enumval=768 block="Basalt"
    //% jres alias=BASALT
    Basalt = 768,
    //% blockIdentity="blocks.block" enumval=769 block="Polished Basalt"
    //% jres alias=POLISHED_BASALT
    PolishedBasalt = 769,
    //% blockIdentity="blocks.block" enumval=770 block="Blackstone"
    //% jres alias=BLACKSTONE
    Blackstone = 770,
    //% blockIdentity="blocks.block" enumval=771 block="Polished Blackstone"
    //% jres alias=POLISHED_BLACKSTONE
    PolishedBlackstone = 771,
    //% blockIdentity="blocks.block" enumval=772 block="Azalea Leaves"
    //% jres alias=AZALEA_LEAVES
    AzaleaLeaves = 772,
    //% blockIdentity="blocks.block" enumval=773 block="Pointed Dripstone"
    //% jres alias=POINTED_DRIPSTONE
    PointedDripstone = 773,
    //% blockIdentity="blocks.block" enumval=774 block="Big Dripleaf"
    //% jres alias=BIG_DRIPLEAF
    BigDripleaf = 774,
    //% blockIdentity="blocks.block" enumval=775 block="Azalea"
    //% jres alias=AZALEA
    Azalea = 775,
    //% blockIdentity="blocks.block" enumval=776 block="Flowering Azalea"
    //% jres alias=FLOWERING_AZALEA
    FloweringAzalea = 776,
    //% blockIdentity="blocks.block" enumval=777 block="Amethyst Block"
    //% jres alias=AMETHYST_BLOCK
    AmethystBlock = 777,
    //% blockIdentity="blocks.block" enumval=778 block="Amethyst Cluster"
    //% jres alias=AMETHYST_CLUSTER
    AmethystCluster = 778,
    //% blockIdentity="blocks.block" enumval=779 block="Crying Obsidian"
    //% jres alias=CRYING_OBSIDIAN
    CryingObsidian = 779,
    //% blockIdentity="blocks.block" enumval=780 block="Lightning Rod"
    //% jres alias=LIGHTNING_ROD
    LightningRod = 780,
    //% blockIdentity="blocks.block" enumval=782 block="Warped Button"
    //% jres alias=WARPED_BUTTON
    WarpedButton = 782,
    //% blockIdentity="blocks.block" enumval=783 block="Crimson Pressure Plate"
    //% jres alias=CRIMSON_PRESSURE_PLATE
    CrimsonPressurePlate = 783,
    //% blockIdentity="blocks.block" enumval=784 block="Warped Pressure Plate"
    //% jres alias=WARPED_PRESSURE_PLATE
    WarpedPressurePlate = 784,
    //% blockIdentity="blocks.block" enumval=785 block="Target"
    //% jres alias=TARGET
    Target = 785,
    //% blockIdentity="blocks.block" enumval=786 block="Warped Door"
    //% jres alias=WARPED_DOOR
    WarpedDoor = 786,
    //% blockIdentity="blocks.block" enumval=787 block="Powder Snow"
    //% jres alias=POWDER_SNOW
    PowderSnow = 787,
    //% blockIdentity="blocks.block" enumval=788 block="Iron Door"
    //% jres alias=IRON_DOOR
    IronDoor = 788,
    //% blockIdentity="blocks.block" enumval=789 block="Soul Campfire"
    //% jres alias=SOUL_CAMPFIRE
    SoulCampfire = 789,
    //% blockIdentity="blocks.block" enumval=821 block="Acacia Sign"
    //% jres alias=ACACIA_SIGN
    AcaciaSign = 821,
    //% blockIdentity="blocks.block" enumval=822 block="Birch Sign"
    //% jres alias=BIRCH_SIGN
    BirchSign = 822,
    //% blockIdentity="blocks.block" enumval=823 block="Slate"
    //% jres alias=SLATE
    Slate = 823,
    //% blockIdentity="blocks.block" enumval=66360 block="Poster"
    //% jres alias=POSTER
    Poster = 66360,
    //% blockIdentity="blocks.block" enumval=131897 block="Board"
    //% jres alias=BOARD
    Board = 131897,
    //% blockIdentity="blocks.block" enumval=826 block="Crimson Sign"
    //% jres alias=CRIMSON_SIGN
    CrimsonSign = 826,
    //% blockIdentity="blocks.block" enumval=827 block="Dark Oak Sign"
    //% jres alias=DARK_OAK_SIGN
    DarkOakSign = 827,
    //% blockIdentity="blocks.block" enumval=828 block="Jungle Sign"
    //% jres alias=JUNGLE_SIGN
    JungleSign = 828,
    //% blockIdentity="blocks.block" enumval=829 block="Mangrove Button"
    //% jres alias=MANGROVE_BUTTON
    MangroveButton = 829,
    //% blockIdentity="blocks.block" enumval=830 block="Mangrove Door"
    //% jres alias=MANGROVE_DOOR
    MangroveDoor = 830,
    //% blockIdentity="blocks.block" enumval=831 block="Mangrove Fence"
    //% jres alias=MANGROVE_FENCE
    MangroveFence = 831,
    //% blockIdentity="blocks.block" enumval=832 block="Mangrove Fence Gate"
    //% jres alias=MANGROVE_FENCE_GATE
    MangroveFenceGate = 832,
    //% blockIdentity="blocks.block" enumval=833 block="Mangrove Leaves"
    //% jres alias=MANGROVE_LEAVES
    MangroveLeaves = 833,
    //% blockIdentity="blocks.block" enumval=834 block="Mangrove Log"
    //% jres alias=MANGROVE_LOG
    MangroveLog = 834,
    //% blockIdentity="blocks.block" enumval=835 block="Mangrove Planks"
    //% jres alias=MANGROVE_PLANKS
    MangrovePlanks = 835,
    //% blockIdentity="blocks.block" enumval=836 block="Mangrove Pressure Plate"
    //% jres alias=MANGROVE_PRESSURE_PLATE
    MangrovePressurePlate = 836,
    //% blockIdentity="blocks.block" enumval=837 block="Mangrove Propagule"
    //% jres alias=MANGROVE_PROPAGULE
    MangrovePropagule = 837,
    //% blockIdentity="blocks.block" enumval=838 block="Mangrove Roots"
    //% jres alias=MANGROVE_ROOTS
    MangroveRoots = 838,
    //% blockIdentity="blocks.block" enumval=839 block="Mangrove Slab"
    //% jres alias=MANGROVE_SLAB
    MangroveSlab = 839,
    //% blockIdentity="blocks.block" enumval=840 block="Mangrove Stairs"
    //% jres alias=MANGROVE_STAIRS
    MangroveStairs = 840,
    //% blockIdentity="blocks.block" enumval=841 block="Mangrove Sign"
    //% jres alias=MANGROVE_SIGN
    MangroveSign = 841,
    //% blockIdentity="blocks.block" enumval=842 block="Mangrove Trapdoor"
    //% jres alias=MANGROVE_TRAPDOOR
    MangroveTrapdoor = 842,
    //% blockIdentity="blocks.block" enumval=843 block="Mangrove Wood"
    //% jres alias=MANGROVE_WOOD
    MangroveWood = 843,
    //% blockIdentity="blocks.block" enumval=844 block="Mud"
    //% jres alias=MUD
    Mud = 844,
    //% blockIdentity="blocks.block" enumval=845 block="Mud Bricks"
    //% jres alias=MUD_BRICKS
    MudBricks = 845,
    //% blockIdentity="blocks.block" enumval=846 block="Muddy Mangrove Roots"
    //% jres alias=MUDDY_MANGROVE_ROOTS
    MuddyMangroveRoots = 846,
    //% blockIdentity="blocks.block" enumval=847 block="Ochre Froglight"
    //% jres alias=OCHRE_FROGLIGHT
    OchreFroglight = 847,
    //% blockIdentity="blocks.block" enumval=848 block="Packed Mud"
    //% jres alias=PACKED_MUD
    PackedMud = 848,
    //% blockIdentity="blocks.block" enumval=849 block="Pearlescent Froglight"
    //% jres alias=PEARLESCENT_FROGLIGHT
    PearlescentFroglight = 849,
    //% blockIdentity="blocks.block" enumval=850 block="Reinforced Deepslate"
    //% jres alias=REINFORCED_DEEPSLATE
    ReinforcedDeepslate = 850,
    //% blockIdentity="blocks.block" enumval=851 block="Sculk"
    //% jres alias=SCULK
    Sculk = 851,
    //% blockIdentity="blocks.block" enumval=852 block="Sculk Catalyst"
    //% jres alias=SCULK_CATALYST
    SculkCatalyst = 852,
    //% blockIdentity="blocks.block" enumval=853 block="Sculk Shrieker"
    //% jres alias=SCULK_SHRIEKER
    SculkShrieker = 853,
    //% blockIdentity="blocks.block" enumval=854 block="Sculk Vein"
    //% jres alias=SCULK_VEIN
    SculkVein = 854,
    //% blockIdentity="blocks.block" enumval=855 block="Spruce Sign"
    //% jres alias=SPRUCE_SIGN
    SpruceSign = 855,
    //% blockIdentity="blocks.block" enumval=856 block="Stripped Mangrove Log"
    //% jres alias=STRIPPED_MANGROVE_LOG
    StrippedMangroveLog = 856,
    //% blockIdentity="blocks.block" enumval=857 block="Stripped Mangrove Wood"
    //% jres alias=STRIPPED_MANGROVE_WOOD
    StrippedMangroveWood = 857,
    //% blockIdentity="blocks.block" enumval=858 block="Verdant Froglight"
    //% jres alias=VERDANT_FROGLIGHT
    VerdantFroglight = 858,
    //% blockIdentity="blocks.block" enumval=859 block="Warped Sign"
    //% jres alias=WARPED_SIGN
    WarpedSign = 859,
    //% blockIdentity="blocks.block" enumval=886 block="Acacia Door"
    //% jres alias=ACACIA_DOOR
    AcaciaDoor = 886,
    //% blockIdentity="blocks.block" enumval=887 block="Flowering Azalea Leaves"
    //% jres alias=FLOWERING_AZALEA_LEAVES
    FloweringAzaleaLeaves = 887,
    //% blockIdentity="blocks.block" enumval=888 block="Birch Door"
    //% jres alias=BIRCH_DOOR
    BirchDoor = 888,
    //% blockIdentity="blocks.block" enumval=889 block="Dark Oak Door"
    //% jres alias=DARK_OAK_DOOR
    DarkOakDoor = 889,
    //% blockIdentity="blocks.block" enumval=890 block="Jungle Door"
    //% jres alias=JUNGLE_DOOR
    JungleDoor = 890,
    //% blockIdentity="blocks.block" enumval=893 block="Spruce Door"
    //% jres alias=SPRUCE_DOOR
    SpruceDoor = 893,
    //% blockIdentity="blocks.block" enumval=894 block="Oak Door"
    //% jres alias=OAK_DOOR
    OakDoor = 894,
    //% blockIdentity="blocks.block" enumval=896 block="Block Of Raw Iron"
    //% jres alias=BLOCK_OF_RAW_IRON
    BlockOfRawIron = 896,
    //% blockIdentity="blocks.block" enumval=897 block="Banner"
    //% jres alias=BANNER
    Banner = 897,
    //% blockIdentity="blocks.block" enumval=66434 block="Smooth Red Sandstone Slab"
    //% jres alias=SMOOTH_RED_SANDSTONE_SLAB
    SmoothRedSandstoneSlab = 66434,
    //% blockIdentity="blocks.block" enumval=899 block="Oak Sign"
    //% jres alias=OAK_SIGN
    OakSign = 899,
    //% blockIdentity="blocks.block" enumval=900 block="Warped Fungus"
    //% jres alias=WARPED_FUNGUS
    WarpedFungus = 900,
    //% blockIdentity="blocks.block" enumval=131973 block="Birch Wood"
    //% jres alias=BIRCH_WOOD
    BirchWood = 131973,
    //% blockIdentity="blocks.block" enumval=263046 block="Acacia Wood"
    //% jres alias=ACACIA_WOOD
    AcaciaWood = 263046,
    //% blockIdentity="blocks.block" enumval=131978 block="Stone Slab"
    //% jres alias=STONE_SLAB
    StoneSlab = 131978,
    //% blockIdentity="blocks.block" enumval=907 block="Block Of Bamboo"
    //% jres alias=BLOCK_OF_BAMBOO
    BlockOfBamboo = 907,
    //% blockIdentity="blocks.block" enumval=908 block="Bamboo Button"
    //% jres alias=BAMBOO_BUTTON
    BambooButton = 908,
    //% blockIdentity="blocks.block" enumval=909 block="Bamboo Fence"
    //% jres alias=BAMBOO_FENCE
    BambooFence = 909,
    //% blockIdentity="blocks.block" enumval=910 block="Bamboo Fence Gate"
    //% jres alias=BAMBOO_FENCE_GATE
    BambooFenceGate = 910,
    //% blockIdentity="blocks.block" enumval=911 block="Bamboo Mosaic"
    //% jres alias=BAMBOO_MOSAIC
    BambooMosaic = 911,
    //% blockIdentity="blocks.block" enumval=912 block="Bamboo Mosaic Slab"
    //% jres alias=BAMBOO_MOSAIC_SLAB
    BambooMosaicSlab = 912,
    //% blockIdentity="blocks.block" enumval=913 block="Bamboo Mosaic Stairs"
    //% jres alias=BAMBOO_MOSAIC_STAIRS
    BambooMosaicStairs = 913,
    //% blockIdentity="blocks.block" enumval=914 block="Bamboo Planks"
    //% jres alias=BAMBOO_PLANKS
    BambooPlanks = 914,
    //% blockIdentity="blocks.block" enumval=915 block="Bamboo Pressure Plate"
    //% jres alias=BAMBOO_PRESSURE_PLATE
    BambooPressurePlate = 915,
    //% blockIdentity="blocks.block" enumval=916 block="Bamboo Slab"
    //% jres alias=BAMBOO_SLAB
    BambooSlab = 916,
    //% blockIdentity="blocks.block" enumval=917 block="Bamboo Stairs"
    //% jres alias=BAMBOO_STAIRS
    BambooStairs = 917,
    //% blockIdentity="blocks.block" enumval=918 block="Bamboo Standing Sign"
    //% jres alias=BAMBOO_STANDING_SIGN
    BambooStandingSign = 918,
    //% blockIdentity="blocks.block" enumval=919 block="Bamboo Trapdoor"
    //% jres alias=BAMBOO_TRAPDOOR
    BambooTrapdoor = 919,
    //% blockIdentity="blocks.block" enumval=920 block="Cherry Button"
    //% jres alias=CHERRY_BUTTON
    CherryButton = 920,
    //% blockIdentity="blocks.block" enumval=921 block="Cherry Fence"
    //% jres alias=CHERRY_FENCE
    CherryFence = 921,
    //% blockIdentity="blocks.block" enumval=922 block="Cherry Fence Gate"
    //% jres alias=CHERRY_FENCE_GATE
    CherryFenceGate = 922,
    //% blockIdentity="blocks.block" enumval=923 block="Cherry Leaves"
    //% jres alias=CHERRY_LEAVES
    CherryLeaves = 923,
    //% blockIdentity="blocks.block" enumval=924 block="Cherry Log"
    //% jres alias=CHERRY_LOG
    CherryLog = 924,
    //% blockIdentity="blocks.block" enumval=925 block="Cherry Planks"
    //% jres alias=CHERRY_PLANKS
    CherryPlanks = 925,
    //% blockIdentity="blocks.block" enumval=926 block="Cherry Pressure Plate"
    //% jres alias=CHERRY_PRESSURE_PLATE
    CherryPressurePlate = 926,
    //% blockIdentity="blocks.block" enumval=927 block="Cherry Sapling"
    //% jres alias=CHERRY_SAPLING
    CherrySapling = 927,
    //% blockIdentity="blocks.block" enumval=928 block="Cherry Slab"
    //% jres alias=CHERRY_SLAB
    CherrySlab = 928,
    //% blockIdentity="blocks.block" enumval=929 block="Cherry Stairs"
    //% jres alias=CHERRY_STAIRS
    CherryStairs = 929,
    //% blockIdentity="blocks.block" enumval=930 block="Cherry Standing Sign"
    //% jres alias=CHERRY_STANDING_SIGN
    CherryStandingSign = 930,
    //% blockIdentity="blocks.block" enumval=931 block="Cherry Trapdoor"
    //% jres alias=CHERRY_TRAPDOOR
    CherryTrapdoor = 931,
    //% blockIdentity="blocks.block" enumval=932 block="Cherry Wood"
    //% jres alias=CHERRY_WOOD
    CherryWood = 932,
    //% blockIdentity="blocks.block" enumval=933 block="Chiseled Bookshelf"
    //% jres alias=CHISELED_BOOKSHELF
    ChiseledBookshelf = 933,
    //% blockIdentity="blocks.block" enumval=934 block="Moss Block"
    //% jres alias=MOSS_BLOCK
    MossBlock = 934,
    //% blockIdentity="blocks.block" enumval=935 block="Block Of Stripped Bamboo"
    //% jres alias=BLOCK_OF_STRIPPED_BAMBOO
    BlockOfStrippedBamboo = 935,
    //% blockIdentity="blocks.block" enumval=936 block="Stripped Cherry Log"
    //% jres alias=STRIPPED_CHERRY_LOG
    StrippedCherryLog = 936,
    //% blockIdentity="blocks.block" enumval=937 block="Stripped Cherry Wood"
    //% jres alias=STRIPPED_CHERRY_WOOD
    StrippedCherryWood = 937,
    //% blockIdentity="blocks.block" enumval=938 block="Suspicious Gravel"
    //% jres alias=SUSPICIOUS_GRAVEL
    SuspiciousGravel = 938,
    //% blockIdentity="blocks.block" enumval=939 block="Suspicious Sand"
    //% jres alias=SUSPICIOUS_SAND
    SuspiciousSand = 939,
    //% blockIdentity="blocks.block" enumval=940 block="Torchflower"
    //% jres alias=TORCHFLOWER
    Torchflower = 940,
    //% blockIdentity="blocks.block" enumval=945 block="Chiseled Tuff"
    //% jres alias=CHISELED_TUFF
    ChiseledTuff = 945,
    //% blockIdentity="blocks.block" enumval=946 block="Chiseled Tuff Bricks"
    //% jres alias=CHISELED_TUFF_BRICKS
    ChiseledTuffBricks = 946,
    //% blockIdentity="blocks.block" enumval=947 block="Copper Door"
    //% jres alias=COPPER_DOOR
    CopperDoor = 947,
    //% blockIdentity="blocks.block" enumval=948 block="Copper Trapdoor"
    //% jres alias=COPPER_TRAPDOOR
    CopperTrapdoor = 948,
    //% blockIdentity="blocks.block" enumval=949 block="Crafter"
    //% jres alias=CRAFTER
    Crafter = 949,
    //% blockIdentity="blocks.block" enumval=950 block="Polished Tuff"
    //% jres alias=POLISHED_TUFF
    PolishedTuff = 950,
    //% blockIdentity="blocks.block" enumval=951 block="Polished Tuff Slab"
    //% jres alias=POLISHED_TUFF_SLAB
    PolishedTuffSlab = 951,
    //% blockIdentity="blocks.block" enumval=952 block="Polished Tuff Stairs"
    //% jres alias=POLISHED_TUFF_STAIRS
    PolishedTuffStairs = 952,
    //% blockIdentity="blocks.block" enumval=953 block="Polished Tuff Wall"
    //% jres alias=POLISHED_TUFF_WALL
    PolishedTuffWall = 953,
    //% blockIdentity="blocks.block" enumval=954 block="Short Grass"
    //% jres alias=SHORT_GRASS
    ShortGrass = 954,
    //% blockIdentity="blocks.block" enumval=955 block="Tuff"
    //% jres alias=TUFF
    Tuff = 955,
    //% blockIdentity="blocks.block" enumval=956 block="Tuff Brick Slab"
    //% jres alias=TUFF_BRICK_SLAB
    TuffBrickSlab = 956,
    //% blockIdentity="blocks.block" enumval=957 block="Tuff Brick Stairs"
    //% jres alias=TUFF_BRICK_STAIRS
    TuffBrickStairs = 957,
    //% blockIdentity="blocks.block" enumval=958 block="Tuff Brick Wall"
    //% jres alias=TUFF_BRICK_WALL
    TuffBrickWall = 958,
    //% blockIdentity="blocks.block" enumval=959 block="Tuff Bricks"
    //% jres alias=TUFF_BRICKS
    TuffBricks = 959,
    //% blockIdentity="blocks.block" enumval=960 block="Tuff Slab"
    //% jres alias=TUFF_SLAB
    TuffSlab = 960,
    //% blockIdentity="blocks.block" enumval=961 block="Tuff Stairs"
    //% jres alias=TUFF_STAIRS
    TuffStairs = 961,
    //% blockIdentity="blocks.block" enumval=962 block="Tuff Wall"
    //% jres alias=TUFF_WALL
    TuffWall = 962,
    //% blockIdentity="blocks.block" enumval=968 block="Black Candle"
    //% jres alias=BLACK_CANDLE
    BlackCandle = 968,
    //% blockIdentity="blocks.block" enumval=969 block="Blue Candle"
    //% jres alias=BLUE_CANDLE
    BlueCandle = 969,
    //% blockIdentity="blocks.block" enumval=970 block="Brown Candle"
    //% jres alias=BROWN_CANDLE
    BrownCandle = 970,
    //% blockIdentity="blocks.block" enumval=971 block="Bush"
    //% jres alias=BUSH
    Bush = 971,
    //% blockIdentity="blocks.block" enumval=972 block="Cactus Flower"
    //% jres alias=CACTUS_FLOWER
    CactusFlower = 972,
    //% blockIdentity="blocks.block" enumval=973 block="Candle"
    //% jres alias=CANDLE
    Candle = 973,
    //% blockIdentity="blocks.block" enumval=974 block="Closed Eyeblossom"
    //% jres alias=CLOSED_EYEBLOSSOM
    ClosedEyeblossom = 974,
    //% blockIdentity="blocks.block" enumval=975 block="Creaking Heart"
    //% jres alias=CREAKING_HEART
    CreakingHeart = 975,
    //% blockIdentity="blocks.block" enumval=976 block="Cyan Candle"
    //% jres alias=CYAN_CANDLE
    CyanCandle = 976,
    //% blockIdentity="blocks.block" enumval=977 block="Dried Ghast"
    //% jres alias=DRIED_GHAST
    DriedGhast = 977,
    //% blockIdentity="blocks.block" enumval=978 block="Firefly Bush"
    //% jres alias=FIREFLY_BUSH
    FireflyBush = 978,
    //% blockIdentity="blocks.block" enumval=979 block="Gray Candle"
    //% jres alias=GRAY_CANDLE
    GrayCandle = 979,
    //% blockIdentity="blocks.block" enumval=980 block="Green Candle"
    //% jres alias=GREEN_CANDLE
    GreenCandle = 980,
    //% blockIdentity="blocks.block" enumval=981 block="Leaf Litter"
    //% jres alias=LEAF_LITTER
    LeafLitter = 981,
    //% blockIdentity="blocks.block" enumval=982 block="Light Blue Candle"
    //% jres alias=LIGHT_BLUE_CANDLE
    LightBlueCandle = 982,
    //% blockIdentity="blocks.block" enumval=983 block="Light Gray Candle"
    //% jres alias=LIGHT_GRAY_CANDLE
    LightGrayCandle = 983,
    //% blockIdentity="blocks.block" enumval=984 block="Lime Candle"
    //% jres alias=LIME_CANDLE
    LimeCandle = 984,
    //% blockIdentity="blocks.block" enumval=985 block="Magenta Candle"
    //% jres alias=MAGENTA_CANDLE
    MagentaCandle = 985,
    //% blockIdentity="blocks.block" enumval=986 block="Open Eyeblossom"
    //% jres alias=OPEN_EYEBLOSSOM
    OpenEyeblossom = 986,
    //% blockIdentity="blocks.block" enumval=987 block="Orange Candle"
    //% jres alias=ORANGE_CANDLE
    OrangeCandle = 987,
    //% blockIdentity="blocks.block" enumval=988 block="Pale Hanging Moss"
    //% jres alias=PALE_HANGING_MOSS
    PaleHangingMoss = 988,
    //% blockIdentity="blocks.block" enumval=989 block="Pale Moss Block"
    //% jres alias=PALE_MOSS_BLOCK
    PaleMossBlock = 989,
    //% blockIdentity="blocks.block" enumval=990 block="Pale Moss Carpet"
    //% jres alias=PALE_MOSS_CARPET
    PaleMossCarpet = 990,
    //% blockIdentity="blocks.block" enumval=991 block="Pale Oak Button"
    //% jres alias=PALE_OAK_BUTTON
    PaleOakButton = 991,
    //% blockIdentity="blocks.block" enumval=992 block="Pale Oak Door"
    //% jres alias=PALE_OAK_DOOR
    PaleOakDoor = 992,
    //% blockIdentity="blocks.block" enumval=993 block="Pale Oak Fence"
    //% jres alias=PALE_OAK_FENCE
    PaleOakFence = 993,
    //% blockIdentity="blocks.block" enumval=994 block="Pale Oak Fence Gate"
    //% jres alias=PALE_OAK_FENCE_GATE
    PaleOakFenceGate = 994,
    //% blockIdentity="blocks.block" enumval=995 block="Pale Oak Hanging Sign"
    //% jres alias=PALE_OAK_HANGING_SIGN
    PaleOakHangingSign = 995,
    //% blockIdentity="blocks.block" enumval=996 block="Pale Oak Leaves"
    //% jres alias=PALE_OAK_LEAVES
    PaleOakLeaves = 996,
    //% blockIdentity="blocks.block" enumval=997 block="Pale Oak Log"
    //% jres alias=PALE_OAK_LOG
    PaleOakLog = 997,
    //% blockIdentity="blocks.block" enumval=998 block="Pale Oak Planks"
    //% jres alias=PALE_OAK_PLANKS
    PaleOakPlanks = 998,
    //% blockIdentity="blocks.block" enumval=999 block="Pale Oak Pressure Plate"
    //% jres alias=PALE_OAK_PRESSURE_PLATE
    PaleOakPressurePlate = 999,
    //% blockIdentity="blocks.block" enumval=1000 block="Pale Oak Sapling"
    //% jres alias=PALE_OAK_SAPLING
    PaleOakSapling = 1000,
    //% blockIdentity="blocks.block" enumval=1001 block="Pale Oak Slab"
    //% jres alias=PALE_OAK_SLAB
    PaleOakSlab = 1001,
    //% blockIdentity="blocks.block" enumval=1002 block="Pale Oak Stairs"
    //% jres alias=PALE_OAK_STAIRS
    PaleOakStairs = 1002,
    //% blockIdentity="blocks.block" enumval=1003 block="Pale Oak Standing Sign"
    //% jres alias=PALE_OAK_STANDING_SIGN
    PaleOakStandingSign = 1003,
    //% blockIdentity="blocks.block" enumval=1004 block="Pale Oak Trapdoor"
    //% jres alias=PALE_OAK_TRAPDOOR
    PaleOakTrapdoor = 1004,
    //% blockIdentity="blocks.block" enumval=1005 block="Pale Oak Wood"
    //% jres alias=PALE_OAK_WOOD
    PaleOakWood = 1005,
    //% blockIdentity="blocks.block" enumval=1006 block="Pink Candle"
    //% jres alias=PINK_CANDLE
    PinkCandle = 1006,
    //% blockIdentity="blocks.block" enumval=1007 block="Purple Candle"
    //% jres alias=PURPLE_CANDLE
    PurpleCandle = 1007,
    //% blockIdentity="blocks.block" enumval=1008 block="Red Candle"
    //% jres alias=RED_CANDLE
    RedCandle = 1008,
    //% blockIdentity="blocks.block" enumval=1009 block="Block Of Resin"
    //% jres alias=BLOCK_OF_RESIN
    BlockOfResin = 1009,
    //% blockIdentity="blocks.block" enumval=1010 block="Tall Dry Grass"
    //% jres alias=TALL_DRY_GRASS
    TallDryGrass = 1010,
    //% blockIdentity="blocks.block" enumval=1011 block="White Candle"
    //% jres alias=WHITE_CANDLE
    WhiteCandle = 1011,
    //% blockIdentity="blocks.block" enumval=1012 block="Wildflowers"
    //% jres alias=WILDFLOWERS
    Wildflowers = 1012,
    //% blockIdentity="blocks.block" enumval=1013 block="Yellow Candle"
    //% jres alias=YELLOW_CANDLE
    YellowCandle = 1013,
}
/*
 * Tools and treasures for players
 *
 */
//% emitAsConstant
declare const enum Item {
    //% blockIdentity="blocks.item" enumval=256 block="Iron Shovel"
    //% jres alias=IRON_SHOVEL
    IronShovel = 256,
    //% blockIdentity="blocks.item" enumval=257 block="Iron Pickaxe"
    //% jres alias=IRON_PICKAXE
    IronPickaxe = 257,
    //% blockIdentity="blocks.item" enumval=258 block="Iron Axe"
    //% jres alias=IRON_AXE
    IronAxe = 258,
    //% blockIdentity="blocks.item" enumval=259 block="Flint and Steel"
    //% jres alias=FLINT_AND_STEEL
    FlintAndSteel = 259,
    //% blockIdentity="blocks.item" enumval=260 block="Apple"
    //% jres alias=APPLE
    Apple = 260,
    //% blockIdentity="blocks.item" enumval=261 block="Bow"
    //% jres alias=BOW
    Bow = 261,
    //% blockIdentity="blocks.item" enumval=262 block="Arrow"
    //% jres alias=ARROW
    Arrow = 262,
    //% blockIdentity="blocks.item" enumval=263 block="Coal"
    //% jres alias=COAL
    Coal = 263,
    //% blockIdentity="blocks.item" enumval=65799 block="Charcoal"
    //% jres alias=CHARCOAL
    Charcoal = 65799,
    //% blockIdentity="blocks.item" enumval=264 block="Diamond"
    //% jres alias=DIAMOND
    Diamond = 264,
    //% blockIdentity="blocks.item" enumval=265 block="Iron Ingot"
    //% jres alias=IRON_INGOT
    IronIngot = 265,
    //% blockIdentity="blocks.item" enumval=266 block="Gold Ingot"
    //% jres alias=GOLD_INGOT
    GoldIngot = 266,
    //% blockIdentity="blocks.item" enumval=267 block="Iron Sword"
    //% jres alias=IRON_SWORD
    IronSword = 267,
    //% blockIdentity="blocks.item" enumval=268 block="Wooden Sword"
    //% jres alias=WOODEN_SWORD
    WoodenSword = 268,
    //% blockIdentity="blocks.item" enumval=269 block="Wooden Shovel"
    //% jres alias=WOODEN_SHOVEL
    WoodenShovel = 269,
    //% blockIdentity="blocks.item" enumval=270 block="Wooden Pickaxe"
    //% jres alias=WOODEN_PICKAXE
    WoodenPickaxe = 270,
    //% blockIdentity="blocks.item" enumval=271 block="Wooden Axe"
    //% jres alias=WOODEN_AXE
    WoodenAxe = 271,
    //% blockIdentity="blocks.item" enumval=272 block="Stone Sword"
    //% jres alias=STONE_SWORD
    StoneSword = 272,
    //% blockIdentity="blocks.item" enumval=273 block="Stone Shovel"
    //% jres alias=STONE_SHOVEL
    StoneShovel = 273,
    //% blockIdentity="blocks.item" enumval=274 block="Stone Pickaxe"
    //% jres alias=STONE_PICKAXE
    StonePickaxe = 274,
    //% blockIdentity="blocks.item" enumval=275 block="Stone Axe"
    //% jres alias=STONE_AXE
    StoneAxe = 275,
    //% blockIdentity="blocks.item" enumval=276 block="Diamond Sword"
    //% jres alias=DIAMOND_SWORD
    DiamondSword = 276,
    //% blockIdentity="blocks.item" enumval=277 block="Diamond Shovel"
    //% jres alias=DIAMOND_SHOVEL
    DiamondShovel = 277,
    //% blockIdentity="blocks.item" enumval=278 block="Diamond Pickaxe"
    //% jres alias=DIAMOND_PICKAXE
    DiamondPickaxe = 278,
    //% blockIdentity="blocks.item" enumval=279 block="Diamond Axe"
    //% jres alias=DIAMOND_AXE
    DiamondAxe = 279,
    //% blockIdentity="blocks.item" enumval=280 block="Stick"
    //% jres alias=STICK
    Stick = 280,
    //% blockIdentity="blocks.item" enumval=281 block="Bowl"
    //% jres alias=BOWL
    Bowl = 281,
    //% blockIdentity="blocks.item" enumval=282 block="Mushroom Stew"
    //% jres alias=MUSHROOM_STEW
    MushroomStew = 282,
    //% blockIdentity="blocks.item" enumval=283 block="Golden Sword"
    //% jres alias=GOLDEN_SWORD
    GoldenSword = 283,
    //% blockIdentity="blocks.item" enumval=284 block="Golden Shovel"
    //% jres alias=GOLDEN_SHOVEL
    GoldenShovel = 284,
    //% blockIdentity="blocks.item" enumval=285 block="Golden Pickaxe"
    //% jres alias=GOLDEN_PICKAXE
    GoldenPickaxe = 285,
    //% blockIdentity="blocks.item" enumval=286 block="Golden Axe"
    //% jres alias=GOLDEN_AXE
    GoldenAxe = 286,
    //% blockIdentity="blocks.item" enumval=287 block="String"
    //% jres alias=STRING
    String = 287,
    //% blockIdentity="blocks.item" enumval=288 block="Feather"
    //% jres alias=FEATHER
    Feather = 288,
    //% blockIdentity="blocks.item" enumval=289 block="Gunpowder"
    //% jres alias=GUNPOWDER
    Gunpowder = 289,
    //% blockIdentity="blocks.item" enumval=290 block="Wooden Hoe"
    //% jres alias=WOODEN_HOE
    WoodenHoe = 290,
    //% blockIdentity="blocks.item" enumval=291 block="Stone Hoe"
    //% jres alias=STONE_HOE
    StoneHoe = 291,
    //% blockIdentity="blocks.item" enumval=292 block="Iron Hoe"
    //% jres alias=IRON_HOE
    IronHoe = 292,
    //% blockIdentity="blocks.item" enumval=293 block="Diamond Hoe"
    //% jres alias=DIAMOND_HOE
    DiamondHoe = 293,
    //% blockIdentity="blocks.item" enumval=294 block="Golden Hoe"
    //% jres alias=GOLDEN_HOE
    GoldenHoe = 294,
    //% blockIdentity="blocks.item" enumval=295 block="Seeds"
    //% jres alias=SEEDS
    Seeds = 295,
    //% blockIdentity="blocks.item" enumval=296 block="Wheat"
    //% jres alias=WHEAT
    Wheat = 296,
    //% blockIdentity="blocks.item" enumval=297 block="Bread"
    //% jres alias=BREAD
    Bread = 297,
    //% blockIdentity="blocks.item" enumval=298 block="Leather Cap"
    //% jres alias=LEATHER_CAP
    LeatherCap = 298,
    //% blockIdentity="blocks.item" enumval=299 block="Leather Tunic"
    //% jres alias=LEATHER_CHESTPLATE
    LeatherChestplate = 299,
    //% blockIdentity="blocks.item" enumval=300 block="Leather Pants"
    //% jres alias=LEATHER_PANTS
    LeatherPants = 300,
    //% blockIdentity="blocks.item" enumval=301 block="Leather Boots"
    //% jres alias=LEATHER_BOOTS
    LeatherBoots = 301,
    //% blockIdentity="blocks.item" enumval=302 block="Chain Helmet"
    //% jres alias=CHAINMAIL_HELMET
    ChainmailHelmet = 302,
    //% blockIdentity="blocks.item" enumval=303 block="Chain Chestplate"
    //% jres alias=CHAINMAIL_CHESTPLATE
    ChainmailChestplate = 303,
    //% blockIdentity="blocks.item" enumval=304 block="Chain Leggings"
    //% jres alias=CHAINMAIL_LEGGINGS
    ChainmailLeggings = 304,
    //% blockIdentity="blocks.item" enumval=305 block="Chain Boots"
    //% jres alias=CHAINMAIL_BOOTS
    ChainmailBoots = 305,
    //% blockIdentity="blocks.item" enumval=306 block="Iron Helmet"
    //% jres alias=IRON_HELMET
    IronHelmet = 306,
    //% blockIdentity="blocks.item" enumval=307 block="Iron Chestplate"
    //% jres alias=IRON_CHESTPLATE
    IronChestplate = 307,
    //% blockIdentity="blocks.item" enumval=308 block="Iron Leggings"
    //% jres alias=IRON_LEGGINGS
    IronLeggings = 308,
    //% blockIdentity="blocks.item" enumval=309 block="Iron Boots"
    //% jres alias=IRON_BOOTS
    IronBoots = 309,
    //% blockIdentity="blocks.item" enumval=310 block="Diamond Helmet"
    //% jres alias=DIAMOND_HELMET
    DiamondHelmet = 310,
    //% blockIdentity="blocks.item" enumval=311 block="Diamond Chestplate"
    //% jres alias=DIAMOND_CHESTPLATE
    DiamondChestplate = 311,
    //% blockIdentity="blocks.item" enumval=312 block="Diamond Leggings"
    //% jres alias=DIAMOND_LEGGINGS
    DiamondLeggings = 312,
    //% blockIdentity="blocks.item" enumval=313 block="Diamond Boots"
    //% jres alias=DIAMOND_BOOTS
    DiamondBoots = 313,
    //% blockIdentity="blocks.item" enumval=314 block="Golden Helmet"
    //% jres alias=GOLDEN_HELMET
    GoldenHelmet = 314,
    //% blockIdentity="blocks.item" enumval=315 block="Golden Chestplate"
    //% jres alias=GOLDEN_CHESTPLATE
    GoldenChestplate = 315,
    //% blockIdentity="blocks.item" enumval=316 block="Golden Leggings"
    //% jres alias=GOLDEN_LEGGINGS
    GoldenLeggings = 316,
    //% blockIdentity="blocks.item" enumval=317 block="Golden Boots"
    //% jres alias=GOLDEN_BOOTS
    GoldenBoots = 317,
    //% blockIdentity="blocks.item" enumval=318 block="Flint"
    //% jres alias=FLINT
    Flint = 318,
    //% blockIdentity="blocks.item" enumval=319 block="Raw Porkchop"
    //% jres alias=RAW_PORKCHOP
    RawPorkchop = 319,
    //% blockIdentity="blocks.item" enumval=320 block="Cooked Porkchop"
    //% jres alias=COOKED_PORKCHOP
    CookedPorkchop = 320,
    //% blockIdentity="blocks.item" enumval=321 block="Painting"
    //% jres alias=PAINTING
    Painting = 321,
    //% blockIdentity="blocks.item" enumval=322 block="Golden Apple"
    //% jres alias=GOLDEN_APPLE
    GoldenApple = 322,
    //% blockIdentity="blocks.item" enumval=324 block="Oak Door"
    //% jres alias=OAK_DOOR_ITEM
    OakDoor = 324,
    //% blockIdentity="blocks.item" enumval=325 block="Bucket"
    //% jres alias=BUCKET
    Bucket = 325,
    //% blockIdentity="blocks.item" enumval=65861 block="Milk"
    //% jres alias=MILK
    Milk = 65861,
    //% blockIdentity="blocks.item" enumval=131397 block="Bucket of Cod"
    //% jres alias=BUCKET_OF_COD
    BucketOfCod = 131397,
    //% blockIdentity="blocks.item" enumval=196933 block="Bucket of Salmon"
    //% jres alias=BUCKET_OF_SALMON
    BucketOfSalmon = 196933,
    //% blockIdentity="blocks.item" enumval=262469 block="Bucket of Tropical Fish"
    //% jres alias=BUCKET_OF_TROPICAL_FISH
    BucketOfTropicalFish = 262469,
    //% blockIdentity="blocks.item" enumval=524613 block="Water Bucket"
    //% jres alias=WATER_BUCKET
    WaterBucket = 524613,
    //% blockIdentity="blocks.item" enumval=655685 block="Lava Bucket"
    //% jres alias=LAVA_BUCKET
    LavaBucket = 655685,
    //% blockIdentity="blocks.item" enumval=328 block="Minecart"
    //% jres alias=MINECART
    Minecart = 328,
    //% blockIdentity="blocks.item" enumval=329 block="Saddle"
    //% jres alias=SADDLE
    Saddle = 329,
    //% blockIdentity="blocks.item" enumval=330 block="Iron Door"
    //% jres alias=IRON_DOOR_ITEM
    IronDoor = 330,
    //% blockIdentity="blocks.item" enumval=331 block="Redstone"
    //% jres alias=REDSTONE
    Redstone = 331,
    //% blockIdentity="blocks.item" enumval=332 block="Snowball"
    //% jres alias=SNOWBALL
    Snowball = 332,
    //% blockIdentity="blocks.item" enumval=333 block="Oak Boat"
    //% jres alias=BOAT
    Boat = 333,
    //% blockIdentity="blocks.item" enumval=65869 block="Spruce Boat"
    //% jres alias=SPRUCE_BOAT
    SpruceBoat = 65869,
    //% blockIdentity="blocks.item" enumval=131405 block="Birch Boat"
    //% jres alias=BIRCH_BOAT
    BirchBoat = 131405,
    //% blockIdentity="blocks.item" enumval=196941 block="Jungle Boat"
    //% jres alias=JUNGLE_BOAT
    JungleBoat = 196941,
    //% blockIdentity="blocks.item" enumval=262477 block="Acacia Boat"
    //% jres alias=ACACIA_BOAT
    AcaciaBoat = 262477,
    //% blockIdentity="blocks.item" enumval=328013 block="Dark Oak Boat"
    //% jres alias=DARK_OAK_BOAT
    DarkOakBoat = 328013,
    //% blockIdentity="blocks.item" enumval=334 block="Leather"
    //% jres alias=LEATHER
    Leather = 334,
    //% blockIdentity="blocks.item" enumval=335 block="Kelp"
    //% jres alias=KELP_ITEM
    Kelp = 335,
    //% blockIdentity="blocks.item" enumval=336 block="Brick"
    //% jres alias=BRICK
    Brick = 336,
    //% blockIdentity="blocks.item" enumval=337 block="Clay"
    //% jres alias=CLAY_BALL
    ClayBall = 337,
    //% blockIdentity="blocks.item" enumval=338 block="Sugar Canes"
    //% jres alias=REEDS
    Reeds = 338,
    //% blockIdentity="blocks.item" enumval=339 block="Paper"
    //% jres alias=PAPER
    Paper = 339,
    //% blockIdentity="blocks.item" enumval=340 block="Book"
    //% jres alias=BOOK
    Book = 340,
    //% blockIdentity="blocks.item" enumval=341 block="Slimeball"
    //% jres alias=SLIMEBALL
    Slimeball = 341,
    //% blockIdentity="blocks.item" enumval=342 block="Minecart with Chest"
    //% jres alias=MINECART_WITH_CHEST
    MinecartWithChest = 342,
    //% blockIdentity="blocks.item" enumval=344 block="Egg"
    //% jres alias=EGG
    Egg = 344,
    //% blockIdentity="blocks.item" enumval=345 block="Compass"
    //% jres alias=COMPASS
    Compass = 345,
    //% blockIdentity="blocks.item" enumval=346 block="Fishing Rod"
    //% jres alias=FISHING_ROD
    FishingRod = 346,
    //% blockIdentity="blocks.item" enumval=347 block="Clock"
    //% jres alias=CLOCK
    Clock = 347,
    //% blockIdentity="blocks.item" enumval=348 block="Glowstone Dust"
    //% jres alias=GLOWSTONE_DUST
    GlowstoneDust = 348,
    //% blockIdentity="blocks.item" enumval=349 block="Raw Cod"
    //% jres alias=RAW_FISH
    RawFish = 349,
    //% blockIdentity="blocks.item" enumval=350 block="Cooked Cod"
    //% jres alias=COOKED_FISH
    CookedFish = 350,
    //% blockIdentity="blocks.item" enumval=351 block="Ink Sac"
    //% jres alias=INK_SAC
    InkSac = 351,
    //% blockIdentity="blocks.item" enumval=65887 block="Rose Red"
    //% jres alias=ROSE_RED
    RoseRed = 65887,
    //% blockIdentity="blocks.item" enumval=131423 block="Cactus Green"
    //% jres alias=CACTUS_GREEN
    CactusGreen = 131423,
    //% blockIdentity="blocks.item" enumval=196959 block="Cocoa Beans"
    //% jres alias=COCOA_BEANS
    CocoaBeans = 196959,
    //% blockIdentity="blocks.item" enumval=262495 block="Lapis Lazuli"
    //% jres alias=LAPIS_LAZULI
    LapisLazuli = 262495,
    //% blockIdentity="blocks.item" enumval=328031 block="Purple Dye"
    //% jres alias=PURPLE_DYE
    PurpleDye = 328031,
    //% blockIdentity="blocks.item" enumval=393567 block="Cyan Dye"
    //% jres alias=CYAN_DYE
    CyanDye = 393567,
    //% blockIdentity="blocks.item" enumval=459103 block="Light Gray Dye"
    //% jres alias=LIGHT_GRAY_DYE
    LightGrayDye = 459103,
    //% blockIdentity="blocks.item" enumval=524639 block="Gray Dye"
    //% jres alias=GRAY_DYE
    GrayDye = 524639,
    //% blockIdentity="blocks.item" enumval=590175 block="Pink Dye"
    //% jres alias=PINK_DYE
    PinkDye = 590175,
    //% blockIdentity="blocks.item" enumval=655711 block="Lime Dye"
    //% jres alias=LIME_DYE
    LimeDye = 655711,
    //% blockIdentity="blocks.item" enumval=721247 block="Dandelion Yellow"
    //% jres alias=DANDELION_YELLOW
    DandelionYellow = 721247,
    //% blockIdentity="blocks.item" enumval=786783 block="Light Blue Dye"
    //% jres alias=LIGHT_BLUE_DYE
    LightBlueDye = 786783,
    //% blockIdentity="blocks.item" enumval=852319 block="Magenta Dye"
    //% jres alias=MAGENTA_DYE
    MagentaDye = 852319,
    //% blockIdentity="blocks.item" enumval=917855 block="Orange Dye"
    //% jres alias=ORANGE_DYE
    OrangeDye = 917855,
    //% blockIdentity="blocks.item" enumval=983391 block="Bone Meal"
    //% jres alias=BONE_MEAL
    BoneMeal = 983391,
    //% blockIdentity="blocks.item" enumval=352 block="Bone"
    //% jres alias=BONE
    Bone = 352,
    //% blockIdentity="blocks.item" enumval=353 block="Sugar"
    //% jres alias=SUGAR
    Sugar = 353,
    //% blockIdentity="blocks.item" enumval=354 block="Cake"
    //% jres alias=CAKE_ITEM
    Cake = 354,
    //% blockIdentity="blocks.item" enumval=355 block="White Bed"
    //% jres alias=BED_ITEM
    Bed = 355,
    //% blockIdentity="blocks.item" enumval=65891 block="Orange Bed"
    //% jres alias=ORANGE_BED
    OrangeBed = 65891,
    //% blockIdentity="blocks.item" enumval=131427 block="Magenta Bed"
    //% jres alias=MAGENTA_BED
    MagentaBed = 131427,
    //% blockIdentity="blocks.item" enumval=196963 block="Light Blue Bed"
    //% jres alias=LIGHT_BLUE_BED
    LightBlueBed = 196963,
    //% blockIdentity="blocks.item" enumval=262499 block="Yellow Bed"
    //% jres alias=YELLOW_BED
    YellowBed = 262499,
    //% blockIdentity="blocks.item" enumval=328035 block="Lime Bed"
    //% jres alias=LIME_BED
    LimeBed = 328035,
    //% blockIdentity="blocks.item" enumval=393571 block="Pink Bed"
    //% jres alias=PINK_BED
    PinkBed = 393571,
    //% blockIdentity="blocks.item" enumval=459107 block="Gray Bed"
    //% jres alias=GRAY_BED
    GrayBed = 459107,
    //% blockIdentity="blocks.item" enumval=524643 block="Light Gray Bed"
    //% jres alias=LIGHT_GRAY_BED
    LightGrayBed = 524643,
    //% blockIdentity="blocks.item" enumval=590179 block="Cyan Bed"
    //% jres alias=CYAN_BED
    CyanBed = 590179,
    //% blockIdentity="blocks.item" enumval=655715 block="Purple Bed"
    //% jres alias=PURPLE_BED
    PurpleBed = 655715,
    //% blockIdentity="blocks.item" enumval=721251 block="Blue Bed"
    //% jres alias=BLUE_BED
    BlueBed = 721251,
    //% blockIdentity="blocks.item" enumval=786787 block="Brown Bed"
    //% jres alias=BROWN_BED
    BrownBed = 786787,
    //% blockIdentity="blocks.item" enumval=852323 block="Green Bed"
    //% jres alias=GREEN_BED
    GreenBed = 852323,
    //% blockIdentity="blocks.item" enumval=917859 block="Red Bed"
    //% jres alias=RED_BED
    RedBed = 917859,
    //% blockIdentity="blocks.item" enumval=983395 block="Black Bed"
    //% jres alias=BLACK_BED
    BlackBed = 983395,
    //% blockIdentity="blocks.item" enumval=356 block="Redstone Repeater"
    //% jres alias=REPEATER
    Repeater = 356,
    //% blockIdentity="blocks.item" enumval=357 block="Cookie"
    //% jres alias=COOKIE
    Cookie = 357,
    //% blockIdentity="blocks.item" enumval=358 block="Filled Map"
    //% jres alias=MAP
    Map = 358,
    //% blockIdentity="blocks.item" enumval=359 block="Shears"
    //% jres alias=SHEARS
    Shears = 359,
    //% blockIdentity="blocks.item" enumval=360 block="Melon"
    //% jres alias=MELON
    Melon = 360,
    //% blockIdentity="blocks.item" enumval=361 block="Pumpkin Seeds"
    //% jres alias=PUMPKIN_SEEDS
    PumpkinSeeds = 361,
    //% blockIdentity="blocks.item" enumval=362 block="Melon Seeds"
    //% jres alias=MELON_SEEDS
    MelonSeeds = 362,
    //% blockIdentity="blocks.item" enumval=363 block="Raw Beef"
    //% jres alias=RAW_BEEF
    RawBeef = 363,
    //% blockIdentity="blocks.item" enumval=364 block="Cooked Beef"
    //% jres alias=COOKED_BEEF
    CookedBeef = 364,
    //% blockIdentity="blocks.item" enumval=365 block="Raw Chicken"
    //% jres alias=RAW_CHICKEN
    RawChicken = 365,
    //% blockIdentity="blocks.item" enumval=366 block="Cooked Chicken"
    //% jres alias=COOKED_CHICKEN
    CookedChicken = 366,
    //% blockIdentity="blocks.item" enumval=367 block="Rotten Flesh"
    //% jres alias=ROTTEN_FLESH
    RottenFlesh = 367,
    //% blockIdentity="blocks.item" enumval=368 block="Ender Pearl"
    //% jres alias=ENDER_PEARL
    EnderPearl = 368,
    //% blockIdentity="blocks.item" enumval=369 block="Blaze Rod"
    //% jres alias=BLAZE_ROD
    BlazeRod = 369,
    //% blockIdentity="blocks.item" enumval=370 block="Ghast Tear"
    //% jres alias=GHAST_TEAR
    GhastTear = 370,
    //% blockIdentity="blocks.item" enumval=371 block="Gold Nugget"
    //% jres alias=GOLD_NUGGET
    GoldNugget = 371,
    //% blockIdentity="blocks.item" enumval=372 block="Nether Wart"
    //% jres alias=NETHER_WART_ITEM
    NetherWart = 372,
    //% blockIdentity="blocks.item" enumval=374 block="Glass Bottle"
    //% jres alias=GLASS_BOTTLE
    GlassBottle = 374,
    //% blockIdentity="blocks.item" enumval=375 block="Spider Eye"
    //% jres alias=SPIDER_EYE
    SpiderEye = 375,
    //% blockIdentity="blocks.item" enumval=376 block="Fermented Spider Eye"
    //% jres alias=FERMENTED_SPIDER_EYE
    FermentedSpiderEye = 376,
    //% blockIdentity="blocks.item" enumval=377 block="Blaze Powder"
    //% jres alias=BLAZE_POWDER
    BlazePowder = 377,
    //% blockIdentity="blocks.item" enumval=378 block="Magma Cream"
    //% jres alias=MAGMA_CREAM
    MagmaCream = 378,
    //% blockIdentity="blocks.item" enumval=379 block="Brewing Stand"
    //% jres alias=BREWING_STAND_ITEM
    BrewingStand = 379,
    //% blockIdentity="blocks.item" enumval=380 block="Cauldron"
    //% jres alias=CAULDRON_ITEM
    Cauldron = 380,
    //% blockIdentity="blocks.item" enumval=381 block="Eye of Ender"
    //% jres alias=ENDER_EYE
    EnderEye = 381,
    //% blockIdentity="blocks.item" enumval=382 block="Glistering Melon"
    //% jres alias=GLISTERING_MELON
    GlisteringMelon = 382,
    //% blockIdentity="blocks.item" enumval=655743 block="Spawn Chicken"
    //% jres alias=SPAWN_CHICKEN
    SpawnChicken = 655743,
    //% blockIdentity="blocks.item" enumval=721279 block="Spawn Cow"
    //% jres alias=SPAWN_COW
    SpawnCow = 721279,
    //% blockIdentity="blocks.item" enumval=786815 block="Spawn Pig"
    //% jres alias=SPAWN_PIG
    SpawnPig = 786815,
    //% blockIdentity="blocks.item" enumval=852351 block="Spawn Sheep"
    //% jres alias=SPAWN_SHEEP
    SpawnSheep = 852351,
    //% blockIdentity="blocks.item" enumval=917887 block="Spawn Wolf"
    //% jres alias=SPAWN_WOLF
    SpawnWolf = 917887,
    //% blockIdentity="blocks.item" enumval=983423 block="Spawn Villager"
    //% jres alias=SPAWN_VILLAGER
    SpawnVillager = 983423,
    //% blockIdentity="blocks.item" enumval=1048959 block="Spawn Mooshroom"
    //% jres alias=SPAWN_MOOSHROOM
    SpawnMooshroom = 1048959,
    //% blockIdentity="blocks.item" enumval=1114495 block="Spawn Squid"
    //% jres alias=SPAWN_SQUID
    SpawnSquid = 1114495,
    //% blockIdentity="blocks.item" enumval=1180031 block="Spawn Rabbit"
    //% jres alias=SPAWN_RABBIT
    SpawnRabbit = 1180031,
    //% blockIdentity="blocks.item" enumval=1245567 block="Spawn Bat"
    //% jres alias=SPAWN_BAT
    SpawnBat = 1245567,
    //% blockIdentity="blocks.item" enumval=1442175 block="Spawn Ocelot"
    //% jres alias=SPAWN_OCELOT
    SpawnOcelot = 1442175,
    //% blockIdentity="blocks.item" enumval=1507711 block="Spawn Horse"
    //% jres alias=SPAWN_HORSE
    SpawnHorse = 1507711,
    //% blockIdentity="blocks.item" enumval=1573247 block="Spawn Donkey"
    //% jres alias=SPAWN_DONKEY
    SpawnDonkey = 1573247,
    //% blockIdentity="blocks.item" enumval=1638783 block="Spawn Mule"
    //% jres alias=SPAWN_MULE
    SpawnMule = 1638783,
    //% blockIdentity="blocks.item" enumval=1704319 block="Spawn Skeleton Horse"
    //% jres alias=SPAWN_SKELETON_HORSE
    SpawnSkeletonHorse = 1704319,
    //% blockIdentity="blocks.item" enumval=1769855 block="Spawn Zombie Horse"
    //% jres alias=SPAWN_ZOMBIE_HORSE
    SpawnZombieHorse = 1769855,
    //% blockIdentity="blocks.item" enumval=1835391 block="Spawn Polar Bear"
    //% jres alias=SPAWN_POLAR_BEAR
    SpawnPolarBear = 1835391,
    //% blockIdentity="blocks.item" enumval=1900927 block="Spawn Llama"
    //% jres alias=SPAWN_LLAMA
    SpawnLlama = 1900927,
    //% blockIdentity="blocks.item" enumval=1966463 block="Spawn Parrot"
    //% jres alias=SPAWN_PARROT
    SpawnParrot = 1966463,
    //% blockIdentity="blocks.item" enumval=2031960 block="Spawn Dolphin"
    //% jres alias=SPAWN_DOLPHIN
    SpawnDolphin = 2031960,
    //% blockIdentity="blocks.item" enumval=3867007 block="Spawn Ravager"
    //% jres alias=SPAWN_RAVAGER
    SpawnRavager = 3867007,
    //% blockIdentity="blocks.item" enumval=2097535 block="Spawn Zombie"
    //% jres alias=SPAWN_ZOMBIE
    SpawnZombie = 2097535,
    //% blockIdentity="blocks.item" enumval=2163071 block="Spawn Creeper"
    //% jres alias=SPAWN_CREEPER
    SpawnCreeper = 2163071,
    //% blockIdentity="blocks.item" enumval=2228607 block="Spawn Skeleton"
    //% jres alias=SPAWN_SKELETON
    SpawnSkeleton = 2228607,
    //% blockIdentity="blocks.item" enumval=2294143 block="Spawn Spider"
    //% jres alias=SPAWN_SPIDER
    SpawnSpider = 2294143,
    //% blockIdentity="blocks.item" enumval=2359679 block="Spawn Zombie Pigman"
    //% jres alias=SPAWN_ZOMBIE_PIGMAN
    SpawnZombiePigman = 2359679,
    //% blockIdentity="blocks.item" enumval=2425215 block="Spawn Slime"
    //% jres alias=SPAWN_SLIME
    SpawnSlime = 2425215,
    //% blockIdentity="blocks.item" enumval=2490751 block="Spawn Enderman"
    //% jres alias=SPAWN_ENDERMAN
    SpawnEnderman = 2490751,
    //% blockIdentity="blocks.item" enumval=2556287 block="Spawn Silverfish"
    //% jres alias=SPAWN_SILVERFISH
    SpawnSilverfish = 2556287,
    //% blockIdentity="blocks.item" enumval=2621823 block="Spawn Cave Spider"
    //% jres alias=SPAWN_CAVE_SPIDER
    SpawnCaveSpider = 2621823,
    //% blockIdentity="blocks.item" enumval=2687359 block="Spawn Ghast"
    //% jres alias=SPAWN_GHAST
    SpawnGhast = 2687359,
    //% blockIdentity="blocks.item" enumval=2752895 block="Spawn Magma Cube"
    //% jres alias=SPAWN_MAGMA_CUBE
    SpawnMagmaCube = 2752895,
    //% blockIdentity="blocks.item" enumval=2818431 block="Spawn Blaze"
    //% jres alias=SPAWN_BLAZE
    SpawnBlaze = 2818431,
    //% blockIdentity="blocks.item" enumval=2883967 block="Spawn Zombie Villager"
    //% jres alias=SPAWN_ZOMBIE_VILLAGER
    SpawnZombieVillager = 2883967,
    //% blockIdentity="blocks.item" enumval=2949503 block="Spawn Witch"
    //% jres alias=SPAWN_WITCH
    SpawnWitch = 2949503,
    //% blockIdentity="blocks.item" enumval=3015039 block="Spawn Stray"
    //% jres alias=SPAWN_STRAY
    SpawnStray = 3015039,
    //% blockIdentity="blocks.item" enumval=3080575 block="Spawn Husk"
    //% jres alias=SPAWN_HUSK
    SpawnHusk = 3080575,
    //% blockIdentity="blocks.item" enumval=3146111 block="Spawn Wither Skeleton"
    //% jres alias=SPAWN_WITHER_SKELETON
    SpawnWitherSkeleton = 3146111,
    //% blockIdentity="blocks.item" enumval=3211647 block="Spawn Guardian"
    //% jres alias=SPAWN_GUARDIAN
    SpawnGuardian = 3211647,
    //% blockIdentity="blocks.item" enumval=3277183 block="Spawn Elder Guardian"
    //% jres alias=SPAWN_ELDER_GUARDIAN
    SpawnElderGuardian = 3277183,
    //% blockIdentity="blocks.item" enumval=3539327 block="Spawn Shulker"
    //% jres alias=SPAWN_SHULKER
    SpawnShulker = 3539327,
    //% blockIdentity="blocks.item" enumval=3604863 block="Spawn Endermite"
    //% jres alias=SPAWN_ENDERMITE
    SpawnEndermite = 3604863,
    //% blockIdentity="blocks.item" enumval=3735935 block="Spawn Vindicator"
    //% jres alias=SPAWN_VINDICATOR
    SpawnVindicator = 3735935,
    //% blockIdentity="blocks.item" enumval=3801471 block="Spawn Phantom"
    //% jres alias=SPAWN_PHANTOM
    SpawnPhantom = 3801471,
    //% blockIdentity="blocks.item" enumval=4850047 block="Spawn Sea Turtle"
    //% jres alias=SPAWN_SEA_TURTLE
    SpawnSeaTurtle = 4850047,
    //% blockIdentity="blocks.item" enumval=4915583 block="Spawn Cat"
    //% jres alias=SPAWN_CAT
    SpawnCat = 4915583,
    //% blockIdentity="blocks.item" enumval=6816127 block="Spawn Evoker"
    //% jres alias=SPAWN_EVOKER
    SpawnEvoker = 6816127,
    //% blockIdentity="blocks.item" enumval=6881663 block="Spawn Vex"
    //% jres alias=SPAWN_VEX
    SpawnVex = 6881663,
    //% blockIdentity="blocks.item" enumval=7078271 block="Spawn Pufferfish"
    //% jres alias=SPAWN_PUFFERFISH
    SpawnPufferfish = 7078271,
    //% blockIdentity="blocks.item" enumval=7143768 block="Spawn Salmon"
    //% jres alias=SPAWN_SALMON
    SpawnSalmon = 7143768,
    //% blockIdentity="blocks.item" enumval=7209343 block="Spawn Drowned"
    //% jres alias=SPAWN_DROWNED
    SpawnDrowned = 7209343,
    //% blockIdentity="blocks.item" enumval=7274840 block="Spawn Tropical Fish"
    //% jres alias=SPAWN_TROPICAL_FISH
    SpawnTropicalFish = 7274840,
    //% blockIdentity="blocks.item" enumval=7340376 block="Spawn Cod"
    //% jres alias=SPAWN_COD
    SpawnCod = 7340376,
    //% blockIdentity="blocks.item" enumval=7930239 block="Spawn Fox"
    //% jres alias=SPAWN_FOX
    SpawnFox = 7930239,
    //% blockIdentity="blocks.item" enumval=7405951 block="Spawn Panda"
    //% jres alias=SPAWN_PANDA
    SpawnPanda = 7405951,
    //% blockIdentity="blocks.item" enumval=7471487 block="Spawn Pillager"
    //% jres alias=SPAWN_PILLAGER
    SpawnPillager = 7471487,
    //% blockIdentity="blocks.item" enumval=7733631 block="Spawn Wandering Trader"
    //% jres alias=SPAWN_WANDERING_TRADER
    SpawnWanderingTrader = 7733631,
    //% blockIdentity="blocks.item" enumval=7995775 block="Spawn Bee"
    //% jres alias=SPAWN_BEE
    SpawnBee = 7995775,
    //% blockIdentity="blocks.item" enumval=384 block="Bottle o' Enchanting"
    //% jres alias=EXPERIENCE_BOTTLE
    ExperienceBottle = 384,
    //% blockIdentity="blocks.item" enumval=385 block="Fire Charge"
    //% jres alias=FIREBALL
    Fireball = 385,
    //% blockIdentity="blocks.item" enumval=386 block="Book & Quill"
    //% jres alias=BOOK_QUILL
    BookQuill = 386,
    //% blockIdentity="blocks.item" enumval=388 block="Emerald"
    //% jres alias=EMERALD
    Emerald = 388,
    //% blockIdentity="blocks.item" enumval=389 block="Item Frame"
    //% jres alias=ITEM_FRAME
    ItemFrame = 389,
    //% blockIdentity="blocks.item" enumval=390 block="Flower Pot"
    //% jres alias=FLOWER_POT_ITEM
    FlowerPot = 390,
    //% blockIdentity="blocks.item" enumval=391 block="Carrot"
    //% jres alias=CARROT
    Carrot = 391,
    //% blockIdentity="blocks.item" enumval=392 block="Potato"
    //% jres alias=POTATO
    Potato = 392,
    //% blockIdentity="blocks.item" enumval=393 block="Baked Potato"
    //% jres alias=BAKED_POTATO
    BakedPotato = 393,
    //% blockIdentity="blocks.item" enumval=394 block="Poisonous Potato"
    //% jres alias=POISONOUS_POTATO
    PoisonousPotato = 394,
    //% blockIdentity="blocks.item" enumval=395 block="Empty Map"
    //% jres alias=EMPTY_MAP
    EmptyMap = 395,
    //% blockIdentity="blocks.item" enumval=131467 block="Empty Locator Map"
    //% jres alias=EMPTY_LOCATOR_MAP
    EmptyLocatorMap = 131467,
    //% blockIdentity="blocks.item" enumval=396 block="Golden Carrot"
    //% jres alias=GOLDEN_CARROT
    GoldenCarrot = 396,
    //% blockIdentity="blocks.item" enumval=398 block="Carrot on a Stick"
    //% jres alias=CARROT_ON_A_STICK
    CarrotOnAStick = 398,
    //% blockIdentity="blocks.item" enumval=399 block="Nether Star"
    //% jres alias=NETHER_STAR
    NetherStar = 399,
    //% blockIdentity="blocks.item" enumval=400 block="Pumpkin Pie"
    //% jres alias=PUMPKIN_PIE
    PumpkinPie = 400,
    //% blockIdentity="blocks.item" enumval=403 block="Enchanted Book"
    //% jres alias=ENCHANTED_BOOK
    EnchantedBook = 403,
    //% blockIdentity="blocks.item" enumval=404 block="Redstone Comparator"
    //% jres alias=COMPARATOR
    Comparator = 404,
    //% blockIdentity="blocks.item" enumval=405 block="Nether Brick"
    //% jres alias=NETHERBRICK
    Netherbrick = 405,
    //% blockIdentity="blocks.item" enumval=406 block="Nether Quartz"
    //% jres alias=QUARTZ
    Quartz = 406,
    //% blockIdentity="blocks.item" enumval=407 block="Minecart with TNT"
    //% jres alias=MINECART_WITH_T_N_T
    MinecartWithTNT = 407,
    //% blockIdentity="blocks.item" enumval=408 block="Minecart with Hopper"
    //% jres alias=MINECART_WITH_HOPPER
    MinecartWithHopper = 408,
    //% blockIdentity="blocks.item" enumval=409 block="Prismarine Shard"
    //% jres alias=PRISMARINE_SHARD
    PrismarineShard = 409,
    //% blockIdentity="blocks.item" enumval=410 block="Hopper"
    //% jres alias=HOPPER_ITEM
    Hopper = 410,
    //% blockIdentity="blocks.item" enumval=411 block="Raw Rabbit"
    //% jres alias=RAW_RABBIT
    RawRabbit = 411,
    //% blockIdentity="blocks.item" enumval=412 block="Cooked Rabbit"
    //% jres alias=COOKED_RABBIT
    CookedRabbit = 412,
    //% blockIdentity="blocks.item" enumval=413 block="Rabbit Stew"
    //% jres alias=RABBIT_STEW
    RabbitStew = 413,
    //% blockIdentity="blocks.item" enumval=414 block="Rabbit's Foot"
    //% jres alias=RABBIT_FOOT
    RabbitFoot = 414,
    //% blockIdentity="blocks.item" enumval=415 block="Rabbit Hide"
    //% jres alias=RABBIT_HIDE
    RabbitHide = 415,
    //% blockIdentity="blocks.item" enumval=416 block="Leather Horse Armor"
    //% jres alias=LEATHER_HORSE_ARMOR
    LeatherHorseArmor = 416,
    //% blockIdentity="blocks.item" enumval=417 block="Iron Horse Armor"
    //% jres alias=IRON_HORSE_ARMOR
    IronHorseArmor = 417,
    //% blockIdentity="blocks.item" enumval=418 block="Gold Horse Armor"
    //% jres alias=GOLD_HORSE_ARMOR
    GoldHorseArmor = 418,
    //% blockIdentity="blocks.item" enumval=419 block="Diamond Horse Armor"
    //% jres alias=DIAMOND_HORSE_ARMOR
    DiamondHorseArmor = 419,
    //% blockIdentity="blocks.item" enumval=420 block="Lead"
    //% jres alias=LEAD
    Lead = 420,
    //% blockIdentity="blocks.item" enumval=421 block="Name Tag"
    //% jres alias=NAME_TAG
    NameTag = 421,
    //% blockIdentity="blocks.item" enumval=422 block="Prismarine Crystals"
    //% jres alias=PRISMARINE_CRYSTALS
    PrismarineCrystals = 422,
    //% blockIdentity="blocks.item" enumval=423 block="Raw Mutton"
    //% jres alias=RAW_MUTTON
    RawMutton = 423,
    //% blockIdentity="blocks.item" enumval=424 block="Cooked Mutton"
    //% jres alias=COOKED_MUTTON
    CookedMutton = 424,
    //% blockIdentity="blocks.item" enumval=425 block="Armor Stand"
    //% jres alias=ARMOR_STAND
    ArmorStand = 425,
    //% blockIdentity="blocks.item" enumval=426 block="End Crystal"
    //% jres alias=END_CRYSTAL
    EndCrystal = 426,
    //% blockIdentity="blocks.item" enumval=427 block="Spruce Door"
    //% jres alias=SPRUCE_DOOR_ITEM
    SpruceDoor = 427,
    //% blockIdentity="blocks.item" enumval=428 block="Birch Door"
    //% jres alias=BIRCH_DOOR_ITEM
    BirchDoor = 428,
    //% blockIdentity="blocks.item" enumval=429 block="Jungle Door"
    //% jres alias=JUNGLE_DOOR_ITEM
    JungleDoor = 429,
    //% blockIdentity="blocks.item" enumval=430 block="Acacia Door"
    //% jres alias=ACACIA_DOOR_ITEM
    AcaciaDoor = 430,
    //% blockIdentity="blocks.item" enumval=431 block="Dark Oak Door"
    //% jres alias=DARK_OAK_DOOR_ITEM
    DarkOakDoor = 431,
    //% blockIdentity="blocks.item" enumval=432 block="Chorus Fruit"
    //% jres alias=CHORUS_FRUIT
    ChorusFruit = 432,
    //% blockIdentity="blocks.item" enumval=433 block="Popped Chorus Fruit"
    //% jres alias=CHORUS_FRUIT_POPPED
    ChorusFruitPopped = 433,
    //% blockIdentity="blocks.item" enumval=437 block="Dragon's Breath"
    //% jres alias=DRAGON_S_BREATH
    DragonSBreath = 437,
    //% blockIdentity="blocks.item" enumval=444 block="Elytra Wings"
    //% jres alias=ELYTRA
    Elytra = 444,
    //% blockIdentity="blocks.item" enumval=445 block="Shulker Shell"
    //% jres alias=SHULKER_SHELL
    ShulkerShell = 445,
    //% blockIdentity="blocks.item" enumval=450 block="Totem of Undying"
    //% jres alias=TOTEM
    Totem = 450,
    //% blockIdentity="blocks.item" enumval=452 block="Iron Nugget"
    //% jres alias=IRON_NUGGET
    IronNugget = 452,
    //% blockIdentity="blocks.item" enumval=455 block="Trident"
    //% jres alias=TRIDENT
    Trident = 455,
    //% blockIdentity="blocks.item" enumval=457 block="Beetroot"
    //% jres alias=BEETROOT_ITEM
    Beetroot = 457,
    //% blockIdentity="blocks.item" enumval=458 block="Beetroot Seeds"
    //% jres alias=BEETROOT_SEEDS
    BeetrootSeeds = 458,
    //% blockIdentity="blocks.item" enumval=459 block="Beetroot Soup"
    //% jres alias=BEETROOT_SOUP
    BeetrootSoup = 459,
    //% blockIdentity="blocks.item" enumval=460 block="Raw Salmon"
    //% jres alias=RAW_SALMON
    RawSalmon = 460,
    //% blockIdentity="blocks.item" enumval=461 block="Clownfish"
    //% jres alias=CLOWNFISH
    Clownfish = 461,
    //% blockIdentity="blocks.item" enumval=462 block="Pufferfish"
    //% jres alias=PUFFERFISH_ITEM
    Pufferfish = 462,
    //% blockIdentity="blocks.item" enumval=463 block="Cooked Salmon"
    //% jres alias=COOKED_SALMON
    CookedSalmon = 463,
    //% blockIdentity="blocks.item" enumval=464 block="Dried Kelp"
    //% jres alias=DRIED_KELP
    DriedKelp = 464,
    //% blockIdentity="blocks.item" enumval=466 block="Enchanted Apple"
    //% jres alias=ENCHANTED_APPLE
    EnchantedApple = 466,
    //% blockIdentity="blocks.item" enumval=467 block="Heart of the Sea"
    //% jres alias=HEART_OF_THE_SEA
    HeartOfTheSea = 467,
    //% blockIdentity="blocks.item" enumval=477 block="Sweet Berries"
    //% jres alias=SWEET_BERRIES
    SweetBerries = 477,
    //% blockIdentity="blocks.item" enumval=720 block="Campfire"
    //% jres alias=CAMPFIRE_ITEM
    Campfire = 720,
    //% blockIdentity="blocks.item" enumval=736 block="Honeycomb"
    //% jres alias=HONEYCOMB
    Honeycomb = 736,
    //% blockIdentity="blocks.item" enumval=737 block="Honey Bottle"
    //% jres alias=HONEY_BOTTLE
    HoneyBottle = 737,
    //% blockIdentity="blocks.item" enumval=790 block="Spawn Piglin"
    //% jres alias=SPAWN_PIGLIN
    SpawnPiglin = 790,
    //% blockIdentity="blocks.item" enumval=791 block="Netherite Ingot"
    //% jres alias=NETHERITE_INGOT
    NetheriteIngot = 791,
    //% blockIdentity="blocks.item" enumval=792 block="Copper Ingot"
    //% jres alias=COPPER_INGOT
    CopperIngot = 792,
    //% blockIdentity="blocks.item" enumval=793 block="Green Dye"
    //% jres alias=GREEN_DYE
    GreenDye = 793,
    //% blockIdentity="blocks.item" enumval=794 block="Glow Berries"
    //% jres alias=GLOW_BERRIES
    GlowBerries = 794,
    //% blockIdentity="blocks.item" enumval=795 block="Red Dye"
    //% jres alias=RED_DYE
    RedDye = 795,
    //% blockIdentity="blocks.item" enumval=796 block="Yellow Dye"
    //% jres alias=YELLOW_DYE
    YellowDye = 796,
    //% blockIdentity="blocks.item" enumval=797 block="Glow Ink Sac"
    //% jres alias=GLOW_INK_SAC
    GlowInkSac = 797,
    //% blockIdentity="blocks.item" enumval=798 block="Netherite Sword"
    //% jres alias=NETHERITE_SWORD
    NetheriteSword = 798,
    //% blockIdentity="blocks.item" enumval=799 block="Spawn Zombified Piglin"
    //% jres alias=SPAWN_ZOMBIFIED_PIGLIN
    SpawnZombifiedPiglin = 799,
    //% blockIdentity="blocks.item" enumval=800 block="Spawn Glow Squid"
    //% jres alias=SPAWN_GLOW_SQUID
    SpawnGlowSquid = 800,
    //% blockIdentity="blocks.item" enumval=801 block="Spawn Strider"
    //% jres alias=SPAWN_STRIDER
    SpawnStrider = 801,
    //% blockIdentity="blocks.item" enumval=802 block="Spawn Hoglin"
    //% jres alias=SPAWN_HOGLIN
    SpawnHoglin = 802,
    //% blockIdentity="blocks.item" enumval=803 block="Spawn Zoglin"
    //% jres alias=SPAWN_ZOGLIN
    SpawnZoglin = 803,
    //% blockIdentity="blocks.item" enumval=804 block="Spawn Goat"
    //% jres alias=SPAWN_GOAT
    SpawnGoat = 804,
    //% blockIdentity="blocks.item" enumval=805 block="Spawn Axolotl"
    //% jres alias=SPAWN_AXOLOTL
    SpawnAxolotl = 805,
    //% blockIdentity="blocks.item" enumval=806 block="Netherite Helmet"
    //% jres alias=NETHERITE_HELMET
    NetheriteHelmet = 806,
    //% blockIdentity="blocks.item" enumval=807 block="Netherite Chestplate"
    //% jres alias=NETHERITE_CHESTPLATE
    NetheriteChestplate = 807,
    //% blockIdentity="blocks.item" enumval=808 block="Netherite Leggings"
    //% jres alias=NETHERITE_LEGGINGS
    NetheriteLeggings = 808,
    //% blockIdentity="blocks.item" enumval=809 block="Netherite Boots"
    //% jres alias=NETHERITE_BOOTS
    NetheriteBoots = 809,
    //% blockIdentity="blocks.item" enumval=810 block="Netherite Axe"
    //% jres alias=NETHERITE_AXE
    NetheriteAxe = 810,
    //% blockIdentity="blocks.item" enumval=811 block="Netherite Pickaxe"
    //% jres alias=NETHERITE_PICKAXE
    NetheritePickaxe = 811,
    //% blockIdentity="blocks.item" enumval=812 block="Raw Copper"
    //% jres alias=RAW_COPPER
    RawCopper = 812,
    //% blockIdentity="blocks.item" enumval=813 block="Netherite Shovel"
    //% jres alias=NETHERITE_SHOVEL
    NetheriteShovel = 813,
    //% blockIdentity="blocks.item" enumval=814 block="Netherite Hoe"
    //% jres alias=NETHERITE_HOE
    NetheriteHoe = 814,
    //% blockIdentity="blocks.item" enumval=815 block="Warped Fungus on a Stick"
    //% jres alias=WARPED_FUNGUS_ON_A_STICK
    WarpedFungusOnAStick = 815,
    //% blockIdentity="blocks.item" enumval=816 block="Powder Snow Bucket"
    //% jres alias=POWDER_SNOW_BUCKET
    PowderSnowBucket = 816,
    //% blockIdentity="blocks.item" enumval=817 block="Bucket of Axolotl"
    //% jres alias=BUCKET_OF_AXOLOTL
    BucketOfAxolotl = 817,
    //% blockIdentity="blocks.item" enumval=818 block="Block Of Raw Iron"
    //% jres alias=RAW_IRON
    RawIron = 818,
    //% blockIdentity="blocks.item" enumval=819 block="Raw Gold"
    //% jres alias=RAW_GOLD
    RawGold = 819,
    //% blockIdentity="blocks.item" enumval=820 block="Netherite Scrap"
    //% jres alias=NETHERITE_SCRAP
    NetheriteScrap = 820,
    //% blockIdentity="blocks.item" enumval=860 block="Spawn Allay"
    //% jres alias=SPAWN_ALLAY
    SpawnAllay = 860,
    //% blockIdentity="blocks.item" enumval=877 block="Echo Shard"
    //% jres alias=ECHO_SHARD
    EchoShard = 877,
    //% blockIdentity="blocks.item" enumval=878 block="Spawn Frog"
    //% jres alias=SPAWN_FROG
    SpawnFrog = 878,
    //% blockIdentity="blocks.item" enumval=879 block="Goat Horn"
    //% jres alias=GOAT_HORN
    GoatHorn = 879,
    //% blockIdentity="blocks.item" enumval=880 block="Mangrove Boat"
    //% jres alias=MANGROVE_BOAT
    MangroveBoat = 880,
    //% blockIdentity="blocks.item" enumval=881 block="Mangrove Boat With Chest"
    //% jres alias=MANGROVE_BOAT_WITH_CHEST
    MangroveBoatWithChest = 881,
    //% blockIdentity="blocks.item" enumval=882 block="Recovery Compass"
    //% jres alias=RECOVERY_COMPASS
    RecoveryCompass = 882,
    //% blockIdentity="blocks.item" enumval=883 block="Bucket Of Tadpole"
    //% jres alias=BUCKET_OF_TADPOLE
    BucketOfTadpole = 883,
    //% blockIdentity="blocks.item" enumval=884 block="Spawn Tadpole"
    //% jres alias=SPAWN_TADPOLE
    SpawnTadpole = 884,
    //% blockIdentity="blocks.item" enumval=885 block="Spawn Warden"
    //% jres alias=SPAWN_WARDEN
    SpawnWarden = 885,
    //% blockIdentity="blocks.item" enumval=904 block="Spawn Trader Llama"
    //% jres alias=SPAWN_TRADER_LLAMA
    SpawnTraderLlama = 904,
    //% blockIdentity="blocks.item" enumval=905 block="Tropical Fish"
    //% jres alias=TROPICAL_FISH_ITEM
    TropicalFish = 905,
    //% blockIdentity="blocks.item" enumval=941 block="Bamboo Raft"
    //% jres alias=BAMBOO_RAFT
    BambooRaft = 941,
    //% blockIdentity="blocks.item" enumval=942 block="Spawn Camel"
    //% jres alias=SPAWN_CAMEL
    SpawnCamel = 942,
    //% blockIdentity="blocks.item" enumval=943 block="Spawn Sniffer"
    //% jres alias=SPAWN_SNIFFER
    SpawnSniffer = 943,
    //% blockIdentity="blocks.item" enumval=944 block="Shield"
    //% jres alias=SHIELD
    Shield = 944,
    //% blockIdentity="blocks.item" enumval=963 block="Mace"
    //% jres alias=MACE
    Mace = 963,
    //% blockIdentity="blocks.item" enumval=964 block="Wind Charge"
    //% jres alias=WIND_CHARGE
    WindCharge = 964,
    //% blockIdentity="blocks.item" enumval=965 block="Wolf Armor"
    //% jres alias=WOLF_ARMOR
    WolfArmor = 965,
    //% blockIdentity="blocks.item" enumval=966 block="Spawn Armadillo"
    //% jres alias=SPAWN_ARMADILLO
    SpawnArmadillo = 966,
    //% blockIdentity="blocks.item" enumval=967 block="Spawn Breeze"
    //% jres alias=SPAWN_BREEZE
    SpawnBreeze = 967,
    //% blockIdentity="blocks.item" enumval=1014 block="Black Harness"
    //% jres alias=BLACK_HARNESS
    BlackHarness = 1014,
    //% blockIdentity="blocks.item" enumval=1015 block="Blue Harness"
    //% jres alias=BLUE_HARNESS
    BlueHarness = 1015,
    //% blockIdentity="blocks.item" enumval=1016 block="Brown Harness"
    //% jres alias=BROWN_HARNESS
    BrownHarness = 1016,
    //% blockIdentity="blocks.item" enumval=1017 block="Cyan Harness"
    //% jres alias=CYAN_HARNESS
    CyanHarness = 1017,
    //% blockIdentity="blocks.item" enumval=1018 block="Gray Harness"
    //% jres alias=GRAY_HARNESS
    GrayHarness = 1018,
    //% blockIdentity="blocks.item" enumval=1019 block="Green Harness"
    //% jres alias=GREEN_HARNESS
    GreenHarness = 1019,
    //% blockIdentity="blocks.item" enumval=1020 block="Light Blue Harness"
    //% jres alias=LIGHT_BLUE_HARNESS
    LightBlueHarness = 1020,
    //% blockIdentity="blocks.item" enumval=1021 block="Light Gray Harness"
    //% jres alias=LIGHT_GRAY_HARNESS
    LightGrayHarness = 1021,
    //% blockIdentity="blocks.item" enumval=1022 block="Lime Harness"
    //% jres alias=LIME_HARNESS
    LimeHarness = 1022,
    //% blockIdentity="blocks.item" enumval=1023 block="Pale Oak Boat With Chest"
    //% jres alias=PALE_OAK_BOAT_WITH_CHEST
    PaleOakBoatWithChest = 1023,
    //% blockIdentity="blocks.item" enumval=1024 block="Purple Harness"
    //% jres alias=PURPLE_HARNESS
    PurpleHarness = 1024,
    //% blockIdentity="blocks.item" enumval=1025 block="Red Harness"
    //% jres alias=RED_HARNESS
    RedHarness = 1025,
    //% blockIdentity="blocks.item" enumval=1026 block="White Harness"
    //% jres alias=WHITE_HARNESS
    WhiteHarness = 1026,
    //% blockIdentity="blocks.item" enumval=1027 block="Yellow Harness"
    //% jres alias=YELLOW_HARNESS
    YellowHarness = 1027,
}

/**
 * The method of travel for player or mob
 */
//% emitAsConstant
declare const enum TravelMethod {
    /**
     * Walking normally (default if on ground)
     */
    //% block=walk enumval=1 alias=WALK
    Walk = 1,
    /**
     * Swimming in water
     */
    //% block="swim water" enumval=2 alias=SWIM_WATER
    SwimWater = 2,
    /**
     * In the air when not flying (Falling up or down)
     */
    //% block=fall enumval=3 alias=FALL
    Fall = 3,
    /**
     * Climbing a ladder
     */
    //% block=climb enumval=4 alias=CLIMB
    Climb = 4,
    /**
     * Swimming in lava
     */
    //% block="swim lava" enumval=5 alias=SWIM_LAVA
    SwimLava = 5,
    /**
     * Flying
     */
    //% block="fly" enumval=6 alias=FLY
    Fly = 6,
    /**
     * Riding anything
     */
    //% block=riding enumval=7 alias=RIDING
    Riding = 7,
    /**
     * Sneaking
     */
    //% block=sneak enumval=8 alias=SNEAK
    Sneak = 8,
    /**
     * Sprinting
     */
    //% block=sprint enumval=9 alias=SPRINT
    Sprint = 9,
    /**
     * Bounce
     */
    //% block=bounce enumval=10 alias=BOUNCE
    Bounce = 10,
    /**
     * Frost walk over water
     */
    //% block="frost walk" enumval=11 alias=FROST_WALK
    FrostWalk = 11,
    /**
     * Teleport
     */
    //% block=teleport enumval=12 alias=TELEPORT
    Teleport = 12,
    /**
     * Unknown travel method
     */
    //% block=unknown enumval=-1 alias=UNKNOWN
    Unknown = -1,
}

declare const enum TestForBlocksMask {
    /**
     * Every block in the source and destination regions must match exactly.
     */
    //% block=all
    All,
    /**
     * Air blocks in the source region will match any block in the destination region.
     */
    //% block=masked
    Masked
}

declare const enum CloneMask {
    //% block=replace
    Replace,
    //% block=masked
    Masked
}

declare const enum CloneMode {
    //% block=normal
    Normal,
    //% block=move
    Move,
    //% block=force
    Force
}

//% emitAsConstant
declare const enum TargetSelectorKind {
    //% block="nearest player (@p)" alias="NEAREST_PLAYER"
    NearestPlayer,
    //% block="yourself (@s)" alias=LOCAL_PLAYER
    LocalPlayer,
    //% block="random player (@r)" alias=RANDOM_PLAYER
    RandomPlayer,
    //% block="all players (@a)" alias=ALL_PLAYERS
    AllPlayers,
    //% block="all entities (@e)" alias=ALL_ENTITIES
    AllEntities,
    //% block="my Agent (@c)" alias=MY_AGENT
    MyAgent
}

declare const enum Axis {
    //% block="x (East/West)"
    X,
    //% block="y (Up/Down)"
    Y,
    //% block="z (South/North)"
    Z
}

//% emitAsConstant
declare const enum SixDirection {
    //% block=forward alias="FORWARD" blockIdentity="agent._sixDirection"
    Forward,
    //% block=back alias=BACK blockIdentity="agent._sixDirection"
    Back,
    //% block=left alias=LEFT blockIdentity="agent._sixDirection"
    Left,
    //% block=right alias=RIGHT blockIdentity="agent._sixDirection"
    Right,
    //% block=up alias=UP blockIdentity="agent._sixDirection"
    Up,
    //% block=down alias=DOWN blockIdentity="agent._sixDirection"
    Down
}

declare const enum FourDirection {
    //% block=forward
    Forward,
    //% block=back
    Back,
    //% block=left
    Left,
    //% block=right
    Right
}

//% emitAsConstant
declare const enum TurnDirection {
    //% block=left blockIdentity="agent._turnDirection"
    Left = 2,
    //% block=right blockIdentity="agent._turnDirection"
    Right = 3
}

//% emitAsConstant
declare const enum CardinalDirection {
    //% block="North (negative Z)" alias=NORTH_CARDINAL_DIRECTION
    North,
    //% block="East (positive X)" alias=EAST_CARDINAL_DIRECTION
    East,
    //% block="South (positive Z)" alias=SOUTH_CARDINAL_DIRECTION
    South,
    //% block="up (positive Y)" alias=UP_CARDINAL_DIRECTION
    Up,
    //% block="West (negative X)" alias=WEST_CARDINAL_DIRECTION
    West,
    //% block="down (negative Y)" alias=DOWN_CARDINAL_DIRECTION
    Down
}

//% emitAsConstant
declare const enum CompassDirection {
    //% block="West (negative X)" alias=WEST blockIdentity="agent._compassDirection"
    West = CardinalDirection.West,
    //% block="East (positive X)" alias=EAST blockIdentity="agent._compassDirection"
    East = CardinalDirection.East,
    //% block="North (negative Z)" alias=NORTH blockIdentity="agent._compassDirection"
    North = CardinalDirection.North,
    //% block="South (positive Z)" alias=SOUTH blockIdentity="agent._compassDirection"
    South = CardinalDirection.South
}

//% emitAsConstant
declare const enum AnimalMob {
    //% blockIdentity="mobs.animal" enumval=10 block="chicken"
    //% jres alias=CHICKEN
    Chicken = 10,
    //% blockIdentity="mobs.animal" enumval=11 block="cow"
    //% jres alias=COW
    Cow = 11,
    //% blockIdentity="mobs.animal" enumval=12 block="pig"
    //% jres alias=PIG
    Pig = 12,
    //% blockIdentity="mobs.animal" enumval=13 block="sheep"
    //% jres alias=SHEEP
    Sheep = 13,
    //% blockIdentity="mobs.animal" enumval=14 block="wolf"
    //% jres alias=WOLF
    Wolf = 14,
    //% blockIdentity="mobs.animal" enumval=15 block="villager"
    //% jres alias=VILLAGER
    Villager = 15,
    //% blockIdentity="mobs.animal" enumval=16 block="mooshroom"
    //% jres alias=MUSHROOM_COW
    MushroomCow = 16,
    //% blockIdentity="mobs.animal" enumval=17 block="squid"
    //% jres alias=SQUID
    Squid = 17,
    //% blockIdentity="mobs.animal" enumval=18 block="rabbit"
    //% jres alias=RABBIT
    Rabbit = 18,
    //% blockIdentity="mobs.animal" enumval=19 block="bat"
    //% jres alias=BAT
    Bat = 19,
    //% blockIdentity="mobs.animal" enumval=22 block="ocelot"
    //% jres alias=OCELOT
    Ocelot = 22,
    //% blockIdentity="mobs.animal" enumval=23 block="horse"
    //% jres alias=HORSE
    Horse = 23,
    //% blockIdentity="mobs.animal" enumval=24 block="donkey"
    //% jres alias=DONKEY
    Donkey = 24,
    //% blockIdentity="mobs.animal" enumval=25 block="mule"
    //% jres alias=MULE
    Mule = 25,
    //% blockIdentity="mobs.animal" enumval=26 block="skeleton horse"
    //% jres alias=SKELETON_HORSE
    SkeletonHorse = 26,
    //% blockIdentity="mobs.animal" enumval=27 block="zombie horse"
    //% jres alias=ZOMBIE_HORSE
    ZombieHorse = 27,
    //% blockIdentity="mobs.animal" enumval=28 block="polar bear"
    //% jres alias=POLAR_BEAR
    PolarBear = 28,
    //% blockIdentity="mobs.animal" enumval=29 block="llama"
    //% jres alias=LLAMA
    Llama = 29,
    //% blockIdentity="mobs.animal" enumval=30 block="parrot"
    //% jres alias=PARROT
    Parrot = 30,
    //% blockIdentity="mobs.animal" enumval=31 block="dolphin"
    //% jres alias=DOLPHIN
    Dolphin = 31,
    //% blockIdentity="mobs.animal" enumval=74 block="sea turtle"
    //% jres alias=SEA_TURTLE
    SeaTurtle = 74,
    //% blockIdentity="mobs.animal" enumval=75 block="cat"
    //% jres alias=CAT
    Cat = 75,
    //% blockIdentity="mobs.animal" enumval=108 block="pufferfish"
    //% jres alias=PUFFERFISH
    Pufferfish = 108,
    //% blockIdentity="mobs.animal" enumval=109 block="salmon"
    //% jres alias=SALMON
    Salmon = 109,
    //% blockIdentity="mobs.animal" enumval=111 block="tropical fish"
    //% jres alias=TROPICAL_FISH
    TropicalFish = 111,
    //% blockIdentity="mobs.animal" enumval=112 block="cod"
    //% jres alias=COD
    Cod = 112,
    //% blockIdentity="mobs.animal" enumval=113 block="panda"
    //% jres alias=PANDA
    Panda = 113,
    //% blockIdentity="mobs.animal" enumval=118 block="wandering trader"
    //% jres alias=WANDERING_TRADER
    WanderingTrader = 118,
    //% blockIdentity="mobs.animal" enumval=121 block="fox"
    //% jres alias=FOX
    Fox = 121,
    //% blockIdentity="mobs.animal" enumval=122 block="bee"
    //% jres alias=BEE
    Bee = 122,
    //% blockIdentity="mobs.animal" enumval=123 block="axolotl"
    //% jres alias=AXOLOTL
    Axolotl = 123,
    //% blockIdentity="mobs.animal" enumval=124 block="glow squid"
    //% jres alias=GLOW_SQUID
    GlowSquid = 124,
    //% blockIdentity="mobs.animal" enumval=125 block="goat"
    //% jres alias=GOAT
    Goat = 125,
    //% blockIdentity="mobs.animal" enumval=128 block="strider"
    //% jres alias=STRIDER
    Strider = 128,
    //% blockIdentity="mobs.animal" enumval=130 block="allay"
    //% jres alias=ALLAY
    Allay = 130,
    //% blockIdentity="mobs.animal" enumval=131 block="frog"
    //% jres alias=FROG
    Frog = 131,
    //% blockIdentity="mobs.animal" enumval=132 block="tadpole"
    //% jres alias=TADPOLE
    Tadpole = 132,
    //% blockIdentity="mobs.animal" enumval=134 block="camel"
    //% jres alias=CAMEL
    Camel = 134,
    //% blockIdentity="mobs.animal" enumval=135 block="sniffer"
    //% jres alias=SNIFFER
    Sniffer = 135,
    //% blockIdentity="mobs.animal" enumval=136 block="armadillo"
    //% jres alias=ARMADILLO
    Armadillo = 136,
    //% blockIdentity="mobs.animal" enumval=138 block="agent"
    //% jres alias=AGENT
    Agent = 138,
    //% blockIdentity="mobs.animal" enumval=141 block="happy ghast"
    //% jres alias=HAPPY_GHAST
    HappyGhast = 141,
}

//% emitAsConstant
declare const enum MonsterMob {
    //% blockIdentity="mobs.monster" enumval=32 block="zombie"
    //% jres alias=ZOMBIE
    Zombie = 32,
    //% blockIdentity="mobs.monster" enumval=33 block="creeper"
    //% jres alias=CREEPER
    Creeper = 33,
    //% blockIdentity="mobs.monster" enumval=34 block="skeleton"
    //% jres alias=SKELETON
    Skeleton = 34,
    //% blockIdentity="mobs.monster" enumval=35 block="spider"
    //% jres alias=SPIDER
    Spider = 35,
    //% blockIdentity="mobs.monster" enumval=36 block="zombie pigman"
    //% jres alias=PIG_ZOMBIE
    PigZombie = 36,
    //% blockIdentity="mobs.monster" enumval=37 block="slime"
    //% jres alias=SLIME
    Slime = 37,
    //% blockIdentity="mobs.monster" enumval=38 block="enderman"
    //% jres alias=ENDERMAN
    Enderman = 38,
    //% blockIdentity="mobs.monster" enumval=39 block="silverfish"
    //% jres alias=SILVERFISH
    Silverfish = 39,
    //% blockIdentity="mobs.monster" enumval=40 block="cave spider"
    //% jres alias=CAVE_SPIDER
    CaveSpider = 40,
    //% blockIdentity="mobs.monster" enumval=41 block="ghast"
    //% jres alias=GHAST
    Ghast = 41,
    //% blockIdentity="mobs.monster" enumval=42 block="magma cube"
    //% jres alias=LAVA_SLIME
    LavaSlime = 42,
    //% blockIdentity="mobs.monster" enumval=43 block="blaze"
    //% jres alias=BLAZE
    Blaze = 43,
    //% blockIdentity="mobs.monster" enumval=44 block="zombie villager"
    //% jres alias=ZOMBIE_VILLAGER
    ZombieVillager = 44,
    //% blockIdentity="mobs.monster" enumval=45 block="witch"
    //% jres alias=WITCH
    Witch = 45,
    //% blockIdentity="mobs.monster" enumval=46 block="stray"
    //% jres alias=STRAY
    Stray = 46,
    //% blockIdentity="mobs.monster" enumval=47 block="husk"
    //% jres alias=HUSK
    Husk = 47,
    //% blockIdentity="mobs.monster" enumval=48 block="wither skeleton"
    //% jres alias=WITHER_SKELETON
    WitherSkeleton = 48,
    //% blockIdentity="mobs.monster" enumval=49 block="guardian"
    //% jres alias=GUARDIAN
    Guardian = 49,
    //% blockIdentity="mobs.monster" enumval=50 block="elder guardian"
    //% jres alias=ELDER_GUARDIAN
    ElderGuardian = 50,
    //% blockIdentity="mobs.monster" enumval=54 block="shulker"
    //% jres alias=SHULKER
    Shulker = 54,
    //% blockIdentity="mobs.monster" enumval=55 block="endermite"
    //% jres alias=ENDERMITE
    Endermite = 55,
    //% blockIdentity="mobs.monster" enumval=57 block="vindicator"
    //% jres alias=VINDICATOR
    Vindicator = 57,
    //% blockIdentity="mobs.monster" enumval=58 block="phantom"
    //% jres alias=PHANTOM
    Phantom = 58,
    //% blockIdentity="mobs.monster" enumval=59 block="ravager"
    //% jres alias=RAVAGER
    Ravager = 59,
    //% blockIdentity="mobs.monster" enumval=104 block="evoker"
    //% jres alias=EVOKER
    Evoker = 104,
    //% blockIdentity="mobs.monster" enumval=105 block="vex"
    //% jres alias=VEX
    Vex = 105,
    //% blockIdentity="mobs.monster" enumval=110 block="drowned"
    //% jres alias=DROWNED
    Drowned = 110,
    //% blockIdentity="mobs.monster" enumval=114 block="pillager"
    //% jres alias=PILLAGER
    Pillager = 114,
    //% blockIdentity="mobs.monster" enumval=126 block="hoglin"
    //% jres alias=HOGLIN
    Hoglin = 126,
    //% blockIdentity="mobs.monster" enumval=127 block="piglin"
    //% jres alias=PIGLIN
    Piglin = 127,
    //% blockIdentity="mobs.monster" enumval=129 block="zoglin"
    //% jres alias=ZOGLIN
    Zoglin = 129,
    //% blockIdentity="mobs.monster" enumval=133 block="warden"
    //% jres alias=WARDEN
    Warden = 133,
    //% blockIdentity="mobs.monster" enumval=137 block="breeze"
    //% jres alias=BREEZE
    Breeze = 137,
    //% blockIdentity="mobs.monster" enumval=139 block="creaking"
    //% jres alias=CREAKING
    Creaking = 139,
    //% blockIdentity="mobs.monster" enumval=140 block="ender dragon"
    //% jres alias=ENDER_DRAGON
    EnderDragon = 140,
    //% blockIdentity="mobs.monster" enumval=142 block="iron golem"
    //% jres alias=IRON_GOLEM
    IronGolem = 142,
    //% blockIdentity="mobs.monster" enumval=143 block="piglin brute"
    //% jres alias=PIGLIN_BRUTE
    PiglinBrute = 143,
    //% blockIdentity="mobs.monster" enumval=144 block="snow golem"
    //% jres alias=SNOW_GOLEM
    SnowGolem = 144,
    //% blockIdentity="mobs.monster" enumval=145 block="wither"
    //% jres alias=WITHER_MONSTER_MOB
    Wither = 145,
}

//% emitAsConstant
declare const enum ProjectileMob {
    //% block="primed tnt" enumval=65 alias="PRIMED_TNT"
    //% blockIdentity="mobs.projectile" alias=PRIMED_TNT
    PrimedTnt,
    //% block="xp bottle" enumval=68 alias=XP_BOTTLE
    //% blockIdentity="mobs.projectile" alias=XP_BOTTLE
    XpBottle,
    //% block="xp orb" enumval=69 alias=XP_ORB
    //% blockIdentity="mobs.projectile" alias=XP_ORB
    XpOrb,
    //% block="fireworks rocket" enumval=72 alias=FIREWORKS_ROCKET
    //% blockIdentity="mobs.projectile" alias=FIREWORKS_ROCKET
    FireworksRocket,
    //% block="arrow" enumval=80 alias=ARROW_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=ARROW_PROJECTILE_MOB
    Arrow,
    //% block="snowball" enumval=81 alias=SNOWBALL_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=SNOWBALL_PROJECTILE_MOB
    Snowball,
    //% block="egg" enumval=82 alias=EGG_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=EGG_PROJECTILE_MOB
    Egg,
    //% block="splash potion" enumval=86 alias=SPLASH_POTION
    //% blockIdentity="mobs.projectile" alias=SPLASH_POTION
    SplashPotion,
    //% block="lightning bolt" enumval=93 alias=LIGHTNING_BOLT
    //% blockIdentity="mobs.projectile" alias=LIGHTNING_BOLT
    LightningBolt,
    //% block="evocation fang" enumval=103 alias=EVOCATION_FANG
    //% blockIdentity="mobs.projectile" alias=EVOCATION_FANG
    EvocationFang
}

//% emitAsConstant
declare const enum Effect {
    //% block="Speed" enumval=1 alias="SPEED"
    //% jres alias=SPEED
    //% blockIdentity="mobs.__effect" alias=SPEED
    Speed = 1,
    //% block="Slowness" enumval=2
    //% jres alias=SLOWNESS
    //% blockIdentity="mobs.__effect" alias=SLOWNESS
    Slowness = 2,
    //% block="Haste" enumval=3
    //% jres alias=HASTE
    //% blockIdentity="mobs.__effect" alias=HASTE
    Haste = 3,
    //% block="Mining Fatigue" enumval=4
    //% jres alias=MINING_FATIGUE
    //% blockIdentity="mobs.__effect" alias=MINING_FATIGUE
    MiningFatigue = 4,
    //% block="Strength" enumval=5
    //% jres alias=STRENGTH
    //% blockIdentity="mobs.__effect" alias=STRENGTH
    Strength = 5,
    //% block="Jump Boost" enumval=8
    //% jres alias=JUMP_BOOST
    //% blockIdentity="mobs.__effect" alias=JUMP_BOOST
    JumpBoost = 8,
    //% block="Nausea" enumval=9
    //% jres alias=NAUSEA
    //% blockIdentity="mobs.__effect" alias=NAUSEA
    Nausea = 9,
    //% block="Regeneration" enumval=10
    //% jres alias=REGENERATION
    //% blockIdentity="mobs.__effect" alias=REGENERATION
    Regeneration = 10,
    //% block="Resistance" enumval=11
    //% jres alias=RESISTANCE
    //% blockIdentity="mobs.__effect" alias=RESISTANCE
    Resistance = 11,
    //% block="Fire Resistance" enumval=12
    //% jres alias=FIRE_RESISTANCE
    //% blockIdentity="mobs.__effect" alias=FIRE_RESISTANCE
    FireResistance = 12,
    //% block="Water Breathing" enumval=13
    //% jres alias=WATER_BREATHING
    //% blockIdentity="mobs.__effect" alias=WATER_BREATHING
    WaterBreathing = 13,
    //% block="Invisibility" enumval=14
    //% jres alias=INVISIBILITY
    //% blockIdentity="mobs.__effect" alias=INVISIBILITY
    Invisibility = 14,
    //% block="Blindness" enumval=15
    //% jres alias=BLINDNESS
    //% blockIdentity="mobs.__effect" alias=BLINDNESS
    Blindness = 15,
    //% block="Night Vision" enumval=16
    //% jres alias=NIGHT_VISION
    //% blockIdentity="mobs.__effect" alias=NIGHT_VISION
    NightVision = 16,
    //% block="Hunger" enumval=17
    //% jres alias=HUNGER
    //% blockIdentity="mobs.__effect" alias=HUNGER
    Hunger = 17,
    //% block="Weakness" enumval=18
    //% jres alias=WEAKNESS
    //% blockIdentity="mobs.__effect" alias=WEAKNESS
    Weakness = 18,
    //% block="Poison" enumval=19
    //% jres alias=POISON
    //% blockIdentity="mobs.__effect" alias=POISON
    Poison = 19,
    //% block="Wither" enumval=20
    //% jres alias=WITHER
    //% blockIdentity="mobs.__effect" alias=WITHER
    Wither = 20,
    //% block="Health Boost" enumval=21
    //% jres alias=HEALTH_BOOST
    //% blockIdentity="mobs.__effect" alias=HEALTH_BOOST
    HealthBoost = 21,
    //% block="Absorption" enumval=22
    //% jres alias=ABSORPTION
    //% blockIdentity="mobs.__effect" alias=ABSORPTION
    Absorption = 22,
    //% block="Levitation" enumval=24
    //% jres alias=LEVITATION
    //% blockIdentity="mobs.__effect" alias=LEVITATION
    Levitation = 24
}

//% emitAsCommand
declare const enum AgentCommand {
    //% block=attack alias="ATTACK"
    Attack,
    //% block=destroy alias=DESTROY
    Destroy,
    //% block=till alias=TILL
    Till,
    //% block=dropall alias=DROP_ALL
    DropAll
}

declare const enum AgentDetection {
    //% block="block"
    Block,
    //% block="redstone"
    Redstone
}

declare const enum AgentInspection {
    //% block="block"
    Block,
    //% block="data"
    Data
}

//% emitAsConstant
declare const enum BlockColor {
    //% block="white" enumval=14540253 blockIdentity="blocks.color" alias="WHITE"
    White,
    //% block="orange" enumval=14384446 blockIdentity="blocks.color" alias=ORANGE
    Orange,
    //% block="magenta" enumval=11751612 blockIdentity="blocks.color" alias=MAGENTA
    Magenta,
    //% block="light blue" enumval=7047881 blockIdentity="blocks.color" alias=LIGHT_BLUE
    LightBlue,
    //% block="yellow" enumval=11642407 blockIdentity="blocks.color" alias=YELLOW
    Yellow,
    //% block="lime" enumval=4304440 blockIdentity="blocks.color" alias=LIME
    Lime,
    //% block="pink" enumval=13665433 blockIdentity="blocks.color" alias=PINK
    Pink,
    //% block="gray" enumval=4210752 blockIdentity="blocks.color" alias=GRAY
    Gray,
    //% block="light gray" enumval=10133921 blockIdentity="blocks.color" alias=LIGHT_GRAY
    LightGray,
    //% block="cyan" enumval=3042953 blockIdentity="blocks.color" alias=CYAN
    Cyan,
    //% block="purple" enumval=8273333 blockIdentity="blocks.color" alias=PURPLE
    Purple,
    //% block="blue" enumval=3029133 blockIdentity="blocks.color" alias=BLUE
    Blue,
    //% block="brown" enumval=5190175 blockIdentity="blocks.color" alias=BROWN
    Brown,
    //% block="green" enumval=3491355 blockIdentity="blocks.color" alias=GREEN
    Green,
    //% block="red" enumval=9843760 blockIdentity="blocks.color" alias=RED
    Red,
    //% block="black" enumval=1644054 blockIdentity="blocks.color" alias=BLACK
    Black
}

//% emitAsConstant
declare const enum GameMode {
    //% block=survival alias=SURVIVAL
    Survival,
    //% block=creative alias=CREATIVE
    Creative,
    //% block=adventure alias=ADVENTURE
    Adventure
}

//% emitAsConstant
declare const enum Weather {
    //% block=clear alias=CLEAR blockIdentity="gameplay._weather"
    Clear,
    //% block=rain alias=RAIN blockIdentity="gameplay._weather"
    Rain,
    //% block=thunder alias=THUNDER blockIdentity="gameplay._weather"
    Thunder
}

/**
 * The time of day
 */
//% emitAsConstant
declare const enum DayTime {
    //% block=day enumval=0 blockIdentity="gameplay.time" alias=DAY
    Day = 0,
    //% block=dawn enumval=23000 blockIdentity="gameplay.time" alias=DAWN
    Dawn = 23000,
    //% block=midday enumval=6000 blockIdentity="gameplay.time" alias=MIDDAY
    Midday = 6000,
    //% block=dusk enumval=12000 blockIdentity="gameplay.time" alias=DUSK
    Dusk = 12000,
    //% block=night enumval=14000 blockIdentity="gameplay.time" alias=NIGHT
    Night = 14000,
    //% block=midnight enumval=18000 blockIdentity="gameplay.time" alias=MIDNIGHT
    Midnight = 18000
}

/**
 * Fill options for exixting blocks. Control keeping, replacing, or destroying existing blocks
 */
declare const enum FillOperation {
    /**
     * Replaces all blocks (including air) in the fill region with the specified block, without dropping blocks or block contents as entities.
     */
    //% block=replace
    Replace,
    /**
     * Replaces only blocks on the outer edge of the fill region with the specified block.
     * Inner blocks are changed to air, dropping their contents as entities but not themselves.
     * If the fill region has no inner blocks (because it is smaller than three blocks in at least one dimension), acts like replace.
     */
    //% block=hollow
    Hollow,
    /**
     * Replaces only blocks on the outer edge of the fill region with the specified block.
     * Inner blocks are not affected. If the fill region has no inner blocks
     * (because it is smaller than three blocks in at least one dimension), acts like replace.
     */
    //% block=outline
    Outline,
    /**
     * Replaces only air blocks in the fill region with the specified block.
     */
    //% block=keep
    Keep,
    /**
     * Replaces all blocks (including air) in the fill region with the specified block, dropping the existing blocks
     * (including those that are unchanged) and block contents as entities as if they had been mined with an unenchanted
     * diamond shovel or pickaxe. (Blocks that can only be mined with shears, such as vines, will not drop; neither will liquids.)
     */
    //% block=destroy
    Destroy
}

/**
 * Game rule for gameplay settings
 */
//% emitAsConstant
declare const enum GameRule {
    //% block=PvP alias=PV_P
    PvP,
    //% block="drowning damage" alias=DROWNING_DAMAGE
    DrowningDamage,
    //% block="fall damage" alias=FALL_DAMAGE
    FallDamage,
    //% block="fire damage" alias=FIRE_DAMAGE
    FireDamage,
    //% block="daylight cycle" alias=DAYLIGHT_CYCLE
    DaylightCycle,
    //% block="mob loot" alias=MOB_LOOT
    MobLoot,
    //% block="mob spawning" alias=MOB_SPAWNING
    MobSpawning,
    //% block="weather cycle" alias=WEATHER_CYCLE
    WeatherCycle,
    //% block="mob griefing" alias=MOB_GRIEFING
    MobGriefing,
    //% block="block drops" alias=TILE_DROPS
    TileDrops,
    //% block="keep inventory" alias=KEEP_INVENTORY
    KeepInventory,
    //% block="tnt explodes" alias=TNT_EXPLODES
    TntExplodes,
    //% block="natural regeneration" alias=NATURAL_REGENERATION
    NaturalRegeneration,
    //% block="command block output" alias=COMMAND_BLOCK_OUTPUT
    CommandBlockOutput,
    //% block="entity drops" alias=ENTITY_DROPS
    EntityDrops,
    //% block="fire spreads" alias=DO_FIRE_TICK
    DoFireTick,
    //% block="show player coordinate" alias=SHOW_COORDINATES
    ShowCoordinates
}

/**
 * Game difficulty for gameplay settings
 */
//% emitAsConstant
declare const enum GameDifficulty {
    //% block="peaceful" alias=PEACEFUL
    Peaceful,
    //% block="easy" alias=EASY
    Easy,
    //% block="normal" alias=NORMAL
    Normal,
    //% block="hard" alias=HARD
    Hard
}

/**
 * Agent assist action
 */
//% emitAsConstant
declare const enum AgentAssist {
    //% block="place on move" alias="PLACE_ON_MOVE"
    PlaceOnMove,
    //% block="place from any slot" alias=PLACE_FROM_ANY_SLOT
    PlaceFromAnySlot,
    //% block="destroy obstacles" alias=DESTROY_OBSTACLES
    DestroyObstacles,
    //% blockHidden=true
    DetroyObstacles
}

/**
 * Time value type for time queries
 */
//% emitAsConstant
declare const enum TimeQuery {
    //% block=gametime alias=GAME_TIME
    GameTime,
    //% block=daytime alias=DAY_TIME
    DayTime,
    //% block=day alias=DAY_TIME_QUERY
    Day,
    /**
     * The real-life time of day, expressed in Minecraft game ticks
     */
    //% block="real life" alias=REAL_LIFE
    RealLife
}

/**
 * Positions for aligning a lever when on or off
 */
//% emitAsConstant
declare const enum LeverPosition {
    //% block="on block bottom pointing West" alias=BLOCK_BOTTOM_EAST_WHEN_OFF
    BlockBottomEastWhenOff,
    //% block="on block East side" alias=BLOCK_SIDE_FACING_EAST
    BlockSideFacingEast,
    //% block="on block West side" alias=BLOCK_SIDE_FACING_WEST
    BlockSideFacingWest,
    //% block="on block South side" alias=BLOCK_SIDE_FACING_SOUTH
    BlockSideFacingSouth,
    //% block="on block North side" alias=BLOCK_SIDE_FACING_NORTH
    BlockSideFacingNorth,
    //% block="on block top pointing South" alias=BLOCK_TOP_POINTS_SOUTH_WHEN_OFF
    BlockTopPointsSouthWhenOff,
    //% block="on block top pointing West" alias=BLOCK_TOP_POINTS_EAST_WHEN_OFF
    BlockTopPointsEastWhenOff,
    //% block="on block bottom pointing South" alias=BLOCK_BOTTOM_POINTS_SOUTH_WHEN_OFF
    BlockBottomPointsSouthWhenOff,
}

/**
 * Comparator modes
 */
declare const enum ComparatorMode {
    //% block="compare"
    Compare,
    //% block="substract"
    Substract
}

/**
 * Shape fill operators
 */
declare const enum ShapeOperation {
    /**
     * Replaces all blocks (including air) in the fill region with the specified block, without dropping blocks or block contents as entities.
     */
    //% block=replace
    Replace,
    /**
     * Replaces only blocks on the outer edge of the fill region with the specified block.
     * Inner blocks are changed to air, dropping their contents as entities but not themselves.
     * If the fill region has no inner blocks (because it is smaller than three blocks in at least one dimension), acts like replace.
     */
    //% block=hollow
    Hollow,
    /**
     * Replaces only blocks on the outer edge of the fill region with the specified block.
     * Inner blocks are not affected. If the fill region has no inner blocks
     * (because it is smaller than three blocks in at least one dimension), acts like replace.
     */
    //% block=outline
    Outline
}

/**
 * Arguments valid for chat commands
 */
declare const enum ChatArgument {
    number,
    number2,
    string,
    string2,
    position,
    position2,
    selector,
    selector2
}

/**
 * Blocks that can change color
*/
//% emitAsConstant
declare const enum ColoredBlock {
    //% blockIdentity="blocks.block" enumval=35 block="wool"
    //% jres alias=WOOL_COLORED_BLOCK
    Wool = 35,
    //% blockIdentity="blocks.block" enumval=236 block="concrete" alias=CONCRETE
    Concrete = 236
}

//% emitAsConstant
declare const enum StructureSaveMode {
    //% block="memory"
    //% alias=MEMORY
    Memory,
    //% block="disk"
    //% alias=DISK
    Disk,
}

//% emitAsConstant
declare const enum StructureRotation {
    //% block="0°"
    //% blockIdentity="blocks._structureRotation" alias=DEGREES0
    Degrees0,
    //% block="90°"
    //% blockIdentity="blocks._structureRotation" alias=DEGREES90
    Degrees90,
    //% block="180°"
    //% blockIdentity="blocks._structureRotation" alias=DEGREES180
    Degrees180,
    //% block="270°"
    //% blockIdentity="blocks._structureRotation" alias=DEGREES270
    Degrees270,
}

//% emitAsConstant
declare const enum StructureMirrorAxis {
    //% block="none"
    //% blockIdentity="blocks._structureMirrorAxis" alias=NONE
    None,
    //% block="x axis"
    //% blockIdentity="blocks._structureMirrorAxis" alias=X
    X,
    //% block="z axis"
    //% blockIdentity="blocks._structureMirrorAxis" alias=Z
    Z,
    //% block="xz axis"
    //% blockIdentity="blocks._structureMirrorAxis" alias=XZ
    XZ
}

//% emitAsConstant
declare const enum StructureAnimationMode {
    //% block="none"
    //% alias=NONE_STRUCTURE_ANIMATION_MODE
    None,
    //% block="block-by-block"
    //% alias=BLOCK_BY_BLOCK
    BlockByBlock,
    //% block="layer-by-layer"
    //% alias=LAYER_BY_LAYER
    LayerByLayer
}

//% emitAsConstant
declare const enum Particle {
    //% block="huge explosion"
    //% blockIdentity="mobs._particle" alias=EXPLOSION_HUGE
    ExplosionHuge,
    //% block="balloon gas"
    //% blockIdentity="mobs._particle" alias=BALLOON_GAS
    BalloonGas,
    //% block="basic crit"
    //% blockIdentity="mobs._particle" alias=BASIC_CRIT
    BasicCrit,
    //% block="basic flame"
    //% blockIdentity="mobs._particle" alias=BASIC_FLAME
    BasicFlame,
    //% block="basic portal"
    //% blockIdentity="mobs._particle" alias=BASIC_PORTAL
    BasicPortal,
    //% block="bleach"
    //% blockIdentity="mobs._particle" alias=BLEACH
    Bleach,
    //% block="blue flame"
    //% blockIdentity="mobs._particle" alias=BLUE_FLAME
    BlueFlame,
    //% block="candle flame"
    //% blockIdentity="mobs._particle" alias=CANDLE_FLAME
    CandleFlame,
    //% block="colored flame"
    //% blockIdentity="mobs._particle" alias=COLORED_FLAME
    ColoredFlame,
    //% block="critical hit"
    //% blockIdentity="mobs._particle" alias=CRITICAL_HIT
    CriticalHit,
    //% block="crop growth"
    //% blockIdentity="mobs._particle" alias=CROP_GROWTH
    CropGrowth,
    //% block="crop growth area"
    //% blockIdentity="mobs._particle" alias=CROP_GROWTH_AREA
    CropGrowthArea,
    //% block="dragon breath fire"
    //% blockIdentity="mobs._particle" alias=DRAGON_BREATH_FIRE
    DragonBreathFire,
    //% block="dragon breath trail"
    //% blockIdentity="mobs._particle" alias=DRAGON_BREATH_TRAIL
    DragonBreathTrail,
    //% block="dragon destroy block"
    //% blockIdentity="mobs._particle" alias=DRAGON_DESTROY_BLOCK
    DragonDestroyBlock,
    //% block="drip honey"
    //% blockIdentity="mobs._particle" alias=DRIP_HONEY
    DripHoney,
    //% block="drip lava"
    //% blockIdentity="mobs._particle" alias=DRIP_LAVA
    DripLava,
    //% block="drip nectar"
    //% blockIdentity="mobs._particle" alias=DRIP_NECTAR
    DripNectar,
    //% block="drip stalactite lava"
    //% blockIdentity="mobs._particle" alias=DRIP_STALACTITE_LAVA
    DripStalactiteLava,
    //% block="drip stalactite water"
    //% blockIdentity="mobs._particle" alias=DRIP_STALACTITE_WATER
    DripStalactiteWater,
    //% block="drip water"
    //% blockIdentity="mobs._particle" alias=DRIP_WATER
    DripWater,
    //% block="dust falling"
    //% blockIdentity="mobs._particle" alias=DUST_FALLING
    DustFalling,
    //% block="dust falling border"
    //% blockIdentity="mobs._particle" alias=DUST_FALLING_BORDER
    DustFallingBorder,
    //% block="dust falling concrete powder"
    //% blockIdentity="mobs._particle" alias=DUST_FALLING_CONCRETE_POWDER
    DustFallingConcretePowder,
    //% block="dust falling dragon egg"
    //% blockIdentity="mobs._particle" alias=DUST_FALLING_DRAGON_EGG
    DustFallingDragonEgg,
    //% block="dust falling gravel"
    //% blockIdentity="mobs._particle" alias=DUST_FALLING_GRAVEL
    DustFallingGravel,
    //% block="dust falling red sand"
    //% blockIdentity="mobs._particle" alias=DUST_FALLING_RED_SAND
    DustFallingRedSand,
    //% block="dust falling sand"
    //% blockIdentity="mobs._particle" alias=DUST_FALLING_SAND
    DustFallingSand,
    //% block="dust falling scaffolding"
    //% blockIdentity="mobs._particle" alias=DUST_FALLING_SCAFFOLDING
    DustFallingScaffolding,
    //% block="dust falling top snow"
    //% blockIdentity="mobs._particle" alias=DUST_FALLING_TOP_SNOW
    DustFallingTopSnow,
    //% block="dust lab table heatblock"
    //% blockIdentity="mobs._particle" alias=DUST_LAB_TABLE_HEATBLOCK
    DustLabTableHeatblock,
    //% block="dust mycelium"
    //% blockIdentity="mobs._particle" alias=DUST_MYCELIUM
    DustMycelium,
    //% block="dust obsidian glow"
    //% blockIdentity="mobs._particle" alias=DUST_OBSIDIAN_GLOW
    DustObsidianGlow,
    //% block="dust redstone ore"
    //% blockIdentity="mobs._particle" alias=DUST_REDSTONE_ORE
    DustRedstoneOre,
    //% block="dust redstone repeater"
    //% blockIdentity="mobs._particle" alias=DUST_REDSTONE_REPEATER
    DustRedstoneRepeater,
    //% block="dust redstone torch"
    //% blockIdentity="mobs._particle" alias=DUST_REDSTONE_TORCH
    DustRedstoneTorch,
    //% block="dust redstone wire"
    //% blockIdentity="mobs._particle" alias=DUST_REDSTONE_WIRE
    DustRedstoneWire,
    //% block="dust rising border"
    //% blockIdentity="mobs._particle" alias=DUST_RISING_BORDER
    DustRisingBorder,
    //% block="egg destroy"
    //% blockIdentity="mobs._particle" alias=EGG_DESTROY
    EggDestroy,
    //% block="elephant tooth paste vapor"
    //% blockIdentity="mobs._particle" alias=ELEPHANT_TOOTH_PASTE_VAPOR
    ElephantToothPasteVapor,
    //% block="enchanting table"
    //% blockIdentity="mobs._particle" alias=ENCHANTING_TABLE
    EnchantingTable,
    //% block="ender chest"
    //% blockIdentity="mobs._particle" alias=END_CHEST
    EndChest,
    //% block="end rod"
    //% blockIdentity="mobs._particle" alias=ENDROD
    Endrod,
    //% block="evocation fang"
    //% blockIdentity="mobs._particle" alias=EVOCATION_FANG_PARTICLE
    EvocationFang,
    //% block="explosion"
    //% blockIdentity="mobs._particle" alias=EXPLOSION
    Explosion,
    //% block="explosion camera shoot"
    //% blockIdentity="mobs._particle" alias=EXPLOSION_CAMERA_SHOOT
    ExplosionCameraShoot,
    //% block="explosion cauldron"
    //% blockIdentity="mobs._particle" alias=EXPLOSION_CAULDRON
    ExplosionCauldron,
    //% block="explosion death"
    //% blockIdentity="mobs._particle" alias=EXPLOSION_DEATH
    ExplosionDeath,
    //% block="explosion dragon death"
    //% blockIdentity="mobs._particle" alias=EXPLOSION_DRAGON_DEATH
    ExplosionDragonDeath,
    //% block="explosion dragon dying"
    //% blockIdentity="mobs._particle" alias=EXPLOSION_DRAGON_DYING
    ExplosionDragonDying,
    //% block="explosion huge lab"
    //% blockIdentity="mobs._particle" alias=EXPLOSION_HUGE_LAB
    ExplosionHugeLab,
    //% block="explosion large"
    //% blockIdentity="mobs._particle" alias=EXPLOSION_LARGE
    ExplosionLarge,
    //% block="explosion single"
    //% blockIdentity="mobs._particle" alias=EXPLOSION_SINGLE
    ExplosionSingle,
    //% block="eyeofender death explode"
    //% blockIdentity="mobs._particle" alias=EYEOFENDER_DEATH_EXPLODE
    EyeofenderDeathExplode,
    //% block="fire vapor"
    //% blockIdentity="mobs._particle" alias=FIRE_VAPOR
    FireVapor,
    //% block="heart"
    //% blockIdentity="mobs._particle" alias=HEART
    Heart,
    //% block="ice evaporation"
    //% blockIdentity="mobs._particle" alias=ICE_EVAPORATION
    IceEvaporation,
    //% block="knockback roar"
    //% blockIdentity="mobs._particle" alias=KNOCKBACK_ROAR
    KnockbackRoar,
    //% block="lab table mystical"
    //% blockIdentity="mobs._particle" alias=LAB_TABLE_MYSTICAL
    LabTableMystical,
    //% block="lava"
    //% blockIdentity="mobs._particle" alias=LAVA_PARTICLE
    Lava,
    //% block="magnesium salts"
    //% blockIdentity="mobs._particle" alias=MAGNESIUM_SALTS
    MagnesiumSalts,
    //% block="mob block spawn"
    //% blockIdentity="mobs._particle" alias=MOB_BLOCK_SPAWN
    MobBlockSpawn,
    //% block="mob portal"
    //% blockIdentity="mobs._particle" alias=MOB_PORTAL
    MobPortal,
    //% block="mobflame"
    //% blockIdentity="mobs._particle" alias=MOBFLAME
    Mobflame,
    //% block="mobflame single"
    //% blockIdentity="mobs._particle" alias=MOBFLAME_SINGLE
    MobflameSingle,
    //% block="mobspell"
    //% blockIdentity="mobs._particle" alias=MOBSPELL
    Mobspell,
    //% block="note"
    //% blockIdentity="mobs._particle" alias=NOTE
    Note,
    //% block="obsidian tear"
    //% blockIdentity="mobs._particle" alias=OBSIDIAN_TEAR
    ObsidianTear,
    //% block="phantom trail"
    //% blockIdentity="mobs._particle" alias=PHANTOM_TRAIL
    PhantomTrail,
    //% block="portal directional"
    //% blockIdentity="mobs._particle" alias=PORTAL_DIRECTIONAL
    PortalDirectional,
    //% block="portal reverse"
    //% blockIdentity="mobs._particle" alias=PORTAL_REVERSE
    PortalReverse,
    //% block="rain splash"
    //% blockIdentity="mobs._particle" alias=RAIN_SPLASH
    RainSplash,
    //% block="sculk sensor redstone"
    //% blockIdentity="mobs._particle" alias=SCULK_SENSOR_REDSTONE
    SculkSensorRedstone,
    //% block="shriek"
    //% blockIdentity="mobs._particle" alias=SHRIEK
    Shriek,
    //% block="shulker bullet"
    //% blockIdentity="mobs._particle" alias=SHULKER_BULLET
    ShulkerBullet,
    //% block="silverfish grief"
    //% blockIdentity="mobs._particle" alias=SILVERFISH_GRIEF
    SilverfishGrief,
    //% block="smoke basic"
    //% blockIdentity="mobs._particle" alias=SMOKE_BASIC
    SmokeBasic,
    //% block="smoke campfire"
    //% blockIdentity="mobs._particle" alias=SMOKE_CAMPFIRE
    SmokeCampfire,
    //% block="smoke campfire tall"
    //% blockIdentity="mobs._particle" alias=SMOKE_CAMPFIRE_TALL
    SmokeCampfireTall,
    //% block="smoke llama spit"
    //% blockIdentity="mobs._particle" alias=SMOKE_LLAMA_SPIT
    SmokeLlamaSpit,
    //% block="snowflake"
    //% blockIdentity="mobs._particle" alias=SNOWFLAKE
    Snowflake,
    //% block="soul"
    //% blockIdentity="mobs._particle" alias=SOUL
    Soul,
    //% block="soul sculk"
    //% blockIdentity="mobs._particle" alias=SOUL_SCULK
    SoulSculk,
    //% block="sparkler"
    //% blockIdentity="mobs._particle" alias=SPARKLER
    Sparkler,
    //% block="spell arrow"
    //% blockIdentity="mobs._particle" alias=SPELL_ARROW
    SpellArrow,
    //% block="spell evoker"
    //% blockIdentity="mobs._particle" alias=SPELL_EVOKER
    SpellEvoker,
    //% block="spell splash"
    //% blockIdentity="mobs._particle" alias=SPELL_SPLASH
    SpellSplash,
    //% block="spore blossom ambient"
    //% blockIdentity="mobs._particle" alias=SPORE_BLOSSOM_AMBIENT
    SporeBlossomAmbient,
    //% block="spore blossom shower"
    //% blockIdentity="mobs._particle" alias=SPORE_BLOSSOM_SHOWER
    SporeBlossomShower,
    //% block="stunned"
    //% blockIdentity="mobs._particle" alias=STUNNED
    Stunned,
    //% block="totem"
    //% blockIdentity="mobs._particle" alias=TOTEM_PARTICLE
    Totem,
    //% block="totem single"
    //% blockIdentity="mobs._particle" alias=TOTEM_SINGLE
    TotemSingle,
    //% block="villager angry"
    //% blockIdentity="mobs._particle" alias=VILLAGER_ANGRY
    VillagerAngry,
    //% block="villager happy"
    //% blockIdentity="mobs._particle" alias=VILLAGER_HAPPY
    VillagerHappy,
    //% block="water evaporation actor"
    //% blockIdentity="mobs._particle" alias=WATER_EVAPORATION_ACTOR
    WaterEvaporationActor,
    //% block="water evaporation bucket"
    //% blockIdentity="mobs._particle" alias=WATER_EVAPORATION_BUCKET
    WaterEvaporationBucket,
    //% block="water evaporation single"
    //% blockIdentity="mobs._particle" alias=WATER_EVAPORATION_SINGLE
    WaterEvaporationSingle,
    //% block="water splash"
    //% blockIdentity="mobs._particle" alias=WATER_SPLASH
    WaterSplash,
    //% block="water splash single"
    //% blockIdentity="mobs._particle" alias=WATER_SPLASH_SINGLE
    WaterSplashSingle,
    //% block="water wake"
    //% blockIdentity="mobs._particle" alias=WATER_WAKE
    WaterWake,
    //% block="wither boss invulnerable"
    //% blockIdentity="mobs._particle" alias=WITHER_BOSS_INVULNERABLE
    WitherBossInvulnerable,
}