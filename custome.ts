/// <reference path="./references/core/all.d.ts" />

// Enumで方向を定義（左と右）
enum Turndirection {
    //% block="ひだり"
    Left,
    //% block="みぎ"
    Right
}
enum BLOCKS {
    //% block="💎ダイヤモンド"
    a,
    //% block="🪙ゴールド"
    b,
    //% block="🛠️アイアン"
    c,
    //% block="🟩エメラルド"
    d,
    //% block="🔴レッドストーン"
    e,
    //% block="🌿草ブロック"
    f,
}
enum DIERECTION {
    //% block="まえ"
    a,
    //% block="うしろ"
    b,
    //% block="ひだり"
    c,
    //% block="みぎ"
    d,
    //% block="うえ"
    e,
    //% block="した"
    f,
}
enum test {
    //% block="M1-3"
    a,
    //% block="M1-4"
    b,
    //% block="M1-5"
    c,
    //% block="M1-6"
    d,
    //% block="M1-7"
    e,
}
enum test2 {
    //% block="M2-2"
    a,
    //% block="M2-3"
    b,
    //% block="M2-4"
    c,
}



//% weight=1000000001000 color=#ffa500 icon="" block="ブロック設置"
namespace ブロック設置 {
    //% block="エージェントのカバンの %pos ばんめをてにもつ"
    export function getAgentItem(pos: number): void {
        agent.setSlot(pos);
    }

    //% block="エージェントに %dir にブロックをおかせる"
    export function placeBlock(dir: DIERECTION): void {
        if (dir == DIERECTION.a) {
            agent.place(FORWARD);
        } else if (dir == DIERECTION.b) {
            agent.place(BACK);
        } else if (dir == DIERECTION.c) {
            agent.place(LEFT);
        } else if (dir == DIERECTION.d) {
            agent.place(RIGHT);
        } else if (dir == DIERECTION.e) {
            agent.place(UP);
        } else if (dir == DIERECTION.f) {
            agent.place(DOWN);
        }
    }
    /**
 * @param num 移動するステップ数, eg: 1
 * @param pos 移動するステップ数, eg: 1
 */
    //% block="エージェントのカバンの %pos ばんめに %num この %NOB をいれる"
    export function giveToAgent1(pos: number, num: number, NOB: BLOCKS) {
        let B
        switch (NOB) {
            case BLOCKS.a:
                B = Block.DiamondBlock
                break;
            case BLOCKS.b:
                B = Block.GoldBlock
                break;
            case BLOCKS.c:
                B = Block.IronBlock;
                break;
            case BLOCKS.d:
                B = Block.EmeraldBlock;
                break;
            case BLOCKS.e:
                B = Block.RedstoneBlock;
                break;
            case BLOCKS.f:
                B = Block.Grass;
                break;

        }

        agent.setItem(B, num, pos)
    }


}

//% weight=1000000001001 color=#dc143c icon="" block="エージェント操作"
namespace エージェント操作 {
    //% block="エージェントに %direction をむかせる"
    export function turnAgent(direction: Turndirection): void {
        if (direction == Turndirection.Left) {
            agent.turn(TurnDirection.Left);
        } else if (direction == Turndirection.Right) {
            agent.turn(TurnDirection.Right);
        }
    }

    /**
     * エージェントの位置を記録
     * @param steps 移動するステップ数, eg: 5
     */
    //% block="エージェントを %steps すすめる(ゆかをかえる)"
    export function moveAgentAndVisualize(steps: number): void {
        let position = agent.getPosition();
        let x = position.getValue(Axis.X);
        let y = position.getValue(Axis.Y);
        let z = position.getValue(Axis.Z);

        placeBlockAtAgentPosition(x, y, z);


        for (let i = 0; i < steps; i++) {

            agent.move(FORWARD, 1);



            position = agent.getPosition();
            x = position.getValue(Axis.X);
            y = position.getValue(Axis.Y);
            z = position.getValue(Axis.Z);


            placeBlockAtAgentPosition(x, y, z);


            loops.pause(50);
        }

        position = agent.getPosition();
        x = position.getValue(Axis.X);
        y = position.getValue(Axis.Y);
        z = position.getValue(Axis.Z);


        placeBlockAtAgentPosition(x, y, z);
    }

    /**
     * エージェントの向きに合わせてMagentaGlazedTerracottaブロックを配置
     * @param x X座標
     * @param y Y座標
     * @param z Z座標
     */
    function placeBlockAtAgentPosition(x: number, y: number, z: number): void {

        let orientation = agent.getOrientation();


        if (orientation >= -45 && orientation < 45) {
            blocks.place(GLASS, world(x, y - 1, z));
        } else if (orientation >= 45 && orientation < 135) {
            blocks.place(GLASS, world(x, y - 1, z));
        } else if (orientation >= -135 && orientation < -45) {
            blocks.place(GLASS, world(x, y - 1, z));
        } else {
            blocks.place(GLASS, world(x, y - 1, z));
        }
    }

    export function moveAgent(steps: number): void {

        let position = agent.getPosition();
        let x = position.getValue(Axis.X);
        let y = position.getValue(Axis.Y);
        let z = position.getValue(Axis.Z);



        for (let i = 0; i < steps; i++) {

            agent.move(FORWARD, 1);


            position = agent.getPosition();
            x = position.getValue(Axis.X);
            y = position.getValue(Axis.Y);
            z = position.getValue(Axis.Z);



            loops.pause(50);
        }


    }
    /**
     * プレイヤーの方向にエージェントを向ける
     */
    //% block="エージェントをプレイヤーのところによび、おなじほうこうをむかせる"
    export function alignAgentToPlayer(): void {
        let attempts = 0;
        agent.teleportToPlayer();


        const playerDirection = player.getOrientation();
        let targetDirection: number;


        if (playerDirection >= -45 && playerDirection < 45) {
            targetDirection = 0; // 北
        } else if (playerDirection >= 45 && playerDirection < 135) {
            targetDirection = 90; // 東
        } else if (playerDirection >= -135 && playerDirection < -45) {
            targetDirection = -90; // 西
        } else {
            targetDirection = -180; // 南
        }


        while (attempts < 4) {
            const agentDirection = agent.getOrientation();

            if (agentDirection == targetDirection) {


                return;
            }


            agent.turn(LEFT_TURN);
            attempts += 1;
        }



    }
    /**
     * プレイヤーの方向にエージェントを向ける
     */
    //% block="エージェントをプレイヤーのところによぶ"
    export function AgentToPlayer(): void {
        agent.teleportToPlayer();
    }
    /**
     * チャットコマンドをトリガーにして動作を設定します。
     * @param command チャットコマンド, eg: "1"
     * @param handler 実行される内容
     */
    //% block="チャットコマンド %command といわれたときエージェントは"
    //% block.loc.ja="%command といわれたときエージェントは"
    //% command.shadow="text"
    export function onChatCommand(command: string, handler: () => void): void {
        player.onChat(command, handler);
    }

}


//% weight=1000000000000 color=#00bfff icon="" block="課題カテゴリ"
namespace 先生用 {
    export function relativeToWorld(baseX: number, baseY: number, baseZ: number, offsetX: number, offsetY: number, orientation: number): Position {
        let worldX = baseX;
        let worldY = baseY - 1;
        let worldZ = baseZ;

        if (orientation >= -45 && orientation < 45) {
            worldX += offsetX;
            worldZ += 0 - offsetY;
        } else if (orientation >= 45 && orientation < 135) {
            worldX += offsetY;
            worldZ += offsetX;
        } else if (orientation >= -135 && orientation < -45) {
            worldX += 0 - offsetY;
            worldZ += 0 - offsetX;
        } else {
            worldX += 0 - offsetX;
            worldZ += offsetY;
        }
        return world(worldX, worldY, worldZ);
    }

    export function onChatCommand2(): void {
        let agentPos2 = agent.getPosition();
        let agentX2 = agentPos2.getValue(Axis.X);
        let agentY2 = agentPos2.getValue(Axis.Y);
        let agentZ2 = agentPos2.getValue(Axis.Z);
        let orientation2 = agent.getOrientation();

        let startX: number, endX: number, startZ: number, endZ: number;

        if (orientation2 >= -45 && orientation2 < 45) {
            startX = agentX2 - 5;
            endX = agentX2 + 5;
            startZ = agentZ2 + 8;
            endZ = agentZ2 - 1;
        } else if (orientation2 >= 45 && orientation2 < 135) {
            startX = agentX2 + 1;
            endX = agentX2 - 8;
            startZ = agentZ2 - 5;
            endZ = agentZ2 + 5;
        } else if (orientation2 >= -135 && orientation2 < -45) {
            startX = agentX2 + 8;
            endX = agentX2 - 1;
            startZ = agentZ2 - 5;
            endZ = agentZ2 + 5;
        } else {
            startX = agentX2 - 5;
            endX = agentX2 + 5;
            startZ = agentZ2 + 1;
            endZ = agentZ2 - 8;
        }

        blocks.fill(
            DIAMOND_BLOCK,
            world(startX, agentY2 - 1, startZ),
            world(endX, agentY2 - 1, endZ),
            FillOperation.Replace
        );
    }


    //% block="課題 %input"
    export function onChatCommand3(input: test): void {
        switch (input) {
            case test.a:
                input = 0;
                break;
            case test.b:
                input = 1;
                break;
            case test.c:
                input = 2;
                break;
            case test.d:
                input = 3;
                break;
            case test.e:
                input = 4;
                break;

        }


        // まずチャットコマンド2を実行
        onChatCommand2();

        // グローバル配列から指定したインデックスのパスを取得
        let selectedPathIndex = input
        let path = paths[selectedPathIndex];

        // エージェントの現在位置と向きを取得
        let agentPos = agent.getPosition();
        let agentX = agentPos.getValue(Axis.X);
        let agentY = agentPos.getValue(Axis.Y);
        let agentZ = agentPos.getValue(Axis.Z);
        let orientation = agent.getOrientation();

        // 配列内の連続する点を結ぶ
        for (let i = 0; i <= path.length - 2; i++) {
            let start = path[i];
            let end = path[i + 1];

            // 相対座標を実世界座標に変換 (エージェント基準)
            let startWorld = relativeToWorld(agentX, agentY, agentZ, start[0], start[1], orientation);
            let endWorld = relativeToWorld(agentX, agentY, agentZ, end[0], end[1], orientation);

            // 道を配置
            blocks.fill(
                GOLD_BLOCK,
                startWorld,
                endWorld,
                FillOperation.Replace
            );

            // y-1 の位置に別のブロックを配置
            blocks.fill(
                BEACON,
                world(startWorld.getValue(Axis.X), startWorld.getValue(Axis.Y) - 1, startWorld.getValue(Axis.Z)),
                world(endWorld.getValue(Axis.X), endWorld.getValue(Axis.Y) - 1, endWorld.getValue(Axis.Z)),
                FillOperation.Replace
            );
        }
    }

    // 迷路データを保存するグローバル変数
    let savedMazeSize: number = 0;
    let savedFencePositions: number[][] = [];

    let mazeSize = 0
    let rand = 0
    function CreateMaze(数値: number) {
        // プレイヤーの現在位置を取得
        let playerPos = player.position();
        let playerX = playerPos.getValue(Axis.X);
        let playerY = playerPos.getValue(Axis.Y);
        let playerZ = playerPos.getValue(Axis.Z);

        if (数値 % 2 == 0) {
            mazeSize = 数値 + 1
        } else {
            mazeSize = 数値
        }

        // 柵の座標配列をリセット
        savedFencePositions = [];

        blocks.fill(
            IRON_BLOCK,
            world(playerX + 1, playerY - 1, playerZ + 1),
            world(playerX + mazeSize + 2, playerY, playerZ + mazeSize + 2),
            FillOperation.Replace
        )
        blocks.fill(
            AIR,
            world(playerX + 2, playerY, playerZ + 2),
            world(playerX + mazeSize + 1, playerY, playerZ + mazeSize + 1),
            FillOperation.Replace
        )
        blocks.place(GOLD_BLOCK, world(playerX + 2, playerY - 1, playerZ + 2))
        blocks.place(SEA_LANTERN, world(playerX + mazeSize + 1, playerY - 1, playerZ + mazeSize + 1))
        agent.teleport(world(playerX + 2, playerY, playerZ + 2), EAST)

        for (let z = 0; z <= mazeSize - 1; z++) {
            for (let x = 0; x <= mazeSize - 1; x++) {
                if (z == mazeSize - 1) {
                    rand = randint(0, 2)
                } else {
                    rand = randint(0, 3)
                }
                if (!(z % 2 == 0) && !(x % 2 == 0)) {
                    blocks.place(BIRCH_FENCE, world(playerX + x + 2, playerY, playerZ + z + 2))
                    // 中央の柵の相対座標を保存
                    savedFencePositions.push([x + 2, z + 2]);

                    if (rand == 0) {
                        blocks.place(BIRCH_FENCE, world(playerX + x + 1, playerY, playerZ + z + 2))
                        savedFencePositions.push([x + 1, z + 2]);
                    } else if (rand == 1) {
                        blocks.place(BIRCH_FENCE, world(playerX + x + 2, playerY, playerZ + z + 3))
                        savedFencePositions.push([x + 2, z + 3]);
                    } else if (rand == 2) {
                        blocks.place(BIRCH_FENCE, world(playerX + x + 3, playerY, playerZ + z + 2))
                        savedFencePositions.push([x + 3, z + 2]);
                    } else if (rand == 3) {
                        blocks.place(BIRCH_FENCE, world(playerX + x + 2, playerY, playerZ + z + 1))
                        savedFencePositions.push([x + 2, z + 1]);
                    }
                }
            }
        }

        // 迷路サイズを保存
        savedMazeSize = 数値;
    }

    //% block="さいごにつくった迷路を再現する"
    export function recreateMaze(): void {
        if (savedMazeSize == 0 || savedFencePositions.length == 0) {
            player.say("保存された迷路データがありません");
            return;
        }

        // プレイヤーの現在位置を取得
        let playerPos = player.position();
        let playerX = playerPos.getValue(Axis.X);
        let playerY = playerPos.getValue(Axis.Y);
        let playerZ = playerPos.getValue(Axis.Z);

        let 数値 = savedMazeSize;
        if (数値 % 2 == 0) {
            mazeSize = 数値 + 1
        } else {
            mazeSize = 数値
        }

        // 迷路の基本構造を作成
        blocks.fill(
            IRON_BLOCK,
            world(playerX + 1, playerY - 1, playerZ + 1),
            world(playerX + mazeSize + 2, playerY, playerZ + mazeSize + 2),
            FillOperation.Replace
        )
        blocks.fill(
            AIR,
            world(playerX + 2, playerY, playerZ + 2),
            world(playerX + mazeSize + 1, playerY, playerZ + mazeSize + 1),
            FillOperation.Replace
        )
        blocks.place(GOLD_BLOCK, world(playerX + 2, playerY - 1, playerZ + 2))
        blocks.place(SEA_LANTERN, world(playerX + mazeSize + 1, playerY - 1, playerZ + mazeSize + 1))
        agent.teleport(world(playerX + 2, playerY, playerZ + 2), EAST)

        // 保存された柵の座標を使用して柵を配置
        for (let fencePos of savedFencePositions) {
            blocks.place(BIRCH_FENCE, world(playerX + fencePos[0], playerY, playerZ + fencePos[1]));
        }

        player.say("迷路を再現しました");
    }

    //% block="ランダム課題"
    export function onChatCommand5(): void {
        CreateMaze(11)
    }

    //% block="発展課題 %input"
    export function onChatCommand4(input: test2): void {
        switch (input) {
            case test2.a:
                input = 0;
                break;
            case test2.b:
                input = 1;
                break;
            case test2.c:
                input = 2;
                break;
        }

        // まずチャットコマンド2を実行
        onChatCommand2();

        // グローバル配列から指定したインデックスのパスを取得
        let selectedPathIndex = input
        let path = paths2[selectedPathIndex];
        let path2 = paths3[selectedPathIndex];

        // エージェントの現在位置と向きを取得
        let agentPos = agent.getPosition();
        let agentX = agentPos.getValue(Axis.X);
        let agentY = agentPos.getValue(Axis.Y);
        let agentZ = agentPos.getValue(Axis.Z);
        let orientation = agent.getOrientation();

        // 配列内の連続する点を結ぶ
        for (let i = 0; i <= path.length - 2; i++) {
            let start = path[i];
            let end = path[i + 1];

            // 相対座標を実世界座標に変換 (エージェント基準)
            let startWorld = relativeToWorld(agentX, agentY, agentZ, start[0], start[1], orientation);
            let endWorld = relativeToWorld(agentX, agentY, agentZ, end[0], end[1], orientation);

            // 道を配置
            blocks.fill(
                GOLD_BLOCK,
                startWorld,
                endWorld,
                FillOperation.Replace
            );

            // y-1 の位置に別のブロックを配置
            blocks.fill(
                BEACON,
                world(startWorld.getValue(Axis.X), startWorld.getValue(Axis.Y) - 1, startWorld.getValue(Axis.Z)),
                world(endWorld.getValue(Axis.X), endWorld.getValue(Axis.Y) - 1, endWorld.getValue(Axis.Z)),
                FillOperation.Replace
            );
        }
        for (let i = 0; i <= path2.length - 2; i++) {
            let start = path2[i];
            let end = path2[i + 1];

            // 相対座標を実世界座標に変換 (エージェント基準)
            let startWorld = relativeToWorld(agentX, agentY, agentZ, start[0], start[1], orientation);
            let endWorld = relativeToWorld(agentX, agentY, agentZ, end[0], end[1], orientation);

            // 道を配置
            blocks.fill(
                EMERALD_BLOCK,
                startWorld,
                endWorld,
                FillOperation.Replace
            );
        }

    }


    // グローバル配列定義
    let paths: number[][][] = [
        [
            [0, 0],
            [0, -5]
        ],
        [
            [0, 0],
            [0, -3],
            [2, -3]
        ],
        [
            [0, 0],
            [0, -1],
            [-2, -1],
            [-2, -2],
            [0, -2],
            [0, -3],
            [-2, -3]
        ],
        [
            [0, 0],
            [0, -5],
            [1, -5],
            [1, -1],
        ],
        [
            [0, 0],
            [0, -5],
            [1, -5],
            [1, -3],
            [3, -3],
            [3, 0],
            [0, 0]

        ]
    ];
    let paths2: number[][][] = [
        [

            [0, 0],
            [0, -3],
            [2, -3]

        ],
        [

            [0, 0],
            [0, -3],
            [2, -3]

        ],
        [
            [0, 0],
            [0, -5],
            [4, -5],
            [4, -1],
        ]
    ];
    let paths3: number[][][] = [
        [
            [0, -2],
            [0, -3]
        ],
        [
            [0, -2],
            [0, -3],
            [1, -3]
        ],
        [
            [0, 0],
            [0, -5],
            [4, -5],
            [4, -2]
        ],
    ];
}

//% weight=100000000101 color=#4682b4 icon="" block="遊び用カテゴリ"
namespace 遊び用 {
 
    //% block="カーペットつきのいえをつくる"
    export function home1(): void {
        // プレイヤーの現在位置を取得
        let playerPos = player.position();
        let playerX = playerPos.getValue(Axis.X);
        let playerY = playerPos.getValue(Axis.Y);
        let playerZ = playerPos.getValue(Axis.Z);

        blocks.fill(
            PLANKS_OAK,
            world(playerX + 13, playerY, playerZ + 5),
            world(playerX + 3, playerY + 6, playerZ - 5),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            world(playerX + 3, playerY, playerZ + 5),
            world(playerX + 3, playerY + 6, playerZ + 5),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            world(playerX + 13, playerY, playerZ + 5),
            world(playerX + 13, playerY + 6, playerZ + 5),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            world(playerX + 13, playerY, playerZ - 5),
            world(playerX + 13, playerY + 6, playerZ - 5),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            world(playerX + 3, playerY, playerZ - 5),
            world(playerX + 3, playerY + 6, playerZ - 5),
            FillOperation.Hollow
        )
        blocks.fill(
            AIR,
            world(playerX + 3, playerY + 1, playerZ - 0),
            world(playerX + 3, playerY + 2, playerZ - 0),
            FillOperation.Hollow
        )
        blocks.place(DARK_OAK_DOOR, world(playerX + 3, playerY + 1, playerZ - 0))
        blocks.fill(
            COBBLESTONE,
            world(playerX + 15, playerY, playerZ + 7),
            world(playerX + 1, playerY, playerZ - 7),
            FillOperation.Hollow
        )
        blocks.fill(
            GLOWSTONE,
            world(playerX + 12, playerY, playerZ + 4),
            world(playerX + 4, playerY, playerZ - 4),
            FillOperation.Hollow
        )
        blocks.fill(
            PLANKS_OAK,
            world(playerX + 11, playerY, playerZ + 3),
            world(playerX + 5, playerY, playerZ - 3),
            FillOperation.Hollow
        )
        blocks.place(GLOWSTONE, world(playerX + 8, playerY, playerZ - 0))
        blocks.fill(
            RED_CARPET,
            world(playerX + 12, playerY + 1, playerZ + 4),
            world(playerX + 4, playerY + 1, playerZ - 4),
            FillOperation.Hollow
        )
        blocks.place(COBBLESTONE_SLAB, world(playerX + 1, playerY, playerZ - 0))
        blocks.fill(
            LOG_OAK,
            world(playerX + 14, playerY + 6, playerZ + 6),
            world(playerX + 2, playerY + 6, playerZ - 6),
            FillOperation.Replace
        )
        blocks.fill(
            LOG_OAK,
            world(playerX + 13, playerY + 7, playerZ + 5),
            world(playerX + 3, playerY + 7, playerZ - 5),
            FillOperation.Replace
        )
    }

    //% block="%max　かいだてのマンションをたてる"
    export function ManS(max: number) {
        // プレイヤーの現在位置を取得
        let playerPos = player.position();
        let playerX = playerPos.getValue(Axis.X);
        let playerY = playerPos.getValue(Axis.Y);
        let playerZ = playerPos.getValue(Axis.Z);

        let floor;
        player.say("10びょううごかないでね")
        for (let カウンター = 0; カウンター <= max - 1; カウンター++) {
            floor = カウンター + 1
            blocks.fill(
                STONE_BRICKS,
                world(playerX + 14, playerY + (floor - 1) * 5, playerZ + 6),
                world(playerX + 3, playerY + (floor - 0) * 5, playerZ - 5),
                FillOperation.Hollow
            )
            blocks.fill(
                GLASS,
                world(playerX + 14, playerY + (floor - 1) * 5 + 2, playerZ + 6),
                world(playerX + 3, playerY + (floor - 1) * 5 + 2, playerZ - 5),
                FillOperation.Outline
            )
            blocks.fill(
                CHISELED_STONE_BRICKS,
                world(playerX + 3, playerY + (floor - 1) * 5 + 2, playerZ - 5),
                world(playerX + 3, playerY + (floor - 1) * 5 + 2, playerZ - 5),
                FillOperation.Outline
            )
            blocks.fill(
                CHISELED_STONE_BRICKS,
                world(playerX + 3, playerY + (floor - 1) * 5 + 2, playerZ + 6),
                world(playerX + 3, playerY + (floor - 1) * 5 + 2, playerZ + 6),
                FillOperation.Outline
            )
            blocks.fill(
                CHISELED_STONE_BRICKS,
                world(playerX + 14, playerY + (floor - 1) * 5 + 2, playerZ - 5),
                world(playerX + 14, playerY + (floor - 1) * 5 + 2, playerZ - 5),
                FillOperation.Outline
            )
            blocks.fill(
                CHISELED_STONE_BRICKS,
                world(playerX + 14, playerY + (floor - 1) * 5 + 2, playerZ + 6),
                world(playerX + 14, playerY + (floor - 1) * 5 + 2, playerZ + 6),
                FillOperation.Outline
            )
            blocks.fill(
                AIR,
                world(playerX + 13, playerY + (floor - 1) * 5 + 2, playerZ + 5),
                world(playerX + 4, playerY + (floor - 1) * 5 + 2, playerZ - 4),
                FillOperation.Outline
            )
        }
        blocks.fill(
            IRON_BARS,
            world(playerX + 14, playerY + (floor - 0) * 5 + 1, playerZ + 6),
            world(playerX + 3, playerY + (floor - 0) * 5 + 1, playerZ - 5),
            FillOperation.Hollow
        )
        blocks.fill(
            AIR,
            world(playerX + 13, playerY + (floor - 0) * 5 + 1, playerZ + 5),
            world(playerX + 4, playerY + (floor - 0) * 5 + 1, playerZ - 4),
            FillOperation.Hollow
        )
        blocks.fill(
            STONE_BRICKS,
            world(playerX + 2, playerY, playerZ - 0),
            world(playerX + 2, playerY, playerZ + 1),
            FillOperation.Replace
        )
        blocks.fill(
            WEIGHTED_PRESSURE_PLATE_HEAVY,
            world(playerX + 2, playerY + 1, playerZ - 0),
            world(playerX + 2, playerY + 1, playerZ + 1),
            FillOperation.Replace
        )
        blocks.fill(
            WEIGHTED_PRESSURE_PLATE_HEAVY,
            world(playerX + 4, playerY + 1, playerZ - 0),
            world(playerX + 4, playerY + 1, playerZ + 1),
            FillOperation.Replace
        )
        blocks.fill(
            STONE_BRICKS_SLAB,
            world(playerX + 1, playerY, playerZ - 0),
            world(playerX + 1, playerY, playerZ + 1),
            FillOperation.Replace
        )
        blocks.fill(
            AIR,
            world(playerX + 3, playerY + 1, playerZ - 0),
            world(playerX + 3, playerY + 2, playerZ + 1),
            FillOperation.Replace
        )
        blocks.place(IRON_DOOR, world(playerX + 3, playerY + 1, playerZ - 0))
        blocks.place(IRON_DOOR, world(playerX + 3, playerY + 1, playerZ + 1))
    }

    //% block="%max　かいだてのエレベーターをたてる"
    export function Ell(max: number) {
        // プレイヤーの現在位置を取得
        let playerPos = player.position();
        let playerX = playerPos.getValue(Axis.X);
        let playerY = playerPos.getValue(Axis.Y);
        let playerZ = playerPos.getValue(Axis.Z);
        blocks.place(CHISELED_STONE_BRICK_MONSTER_EGG, world(playerX - 1, playerY - 1, playerZ + 2))
        blocks.place(CHISELED_STONE_BRICK_MONSTER_EGG, world(playerX - 1, playerY - 1, playerZ + 0))
        blocks.fill(
            CHISELED_STONE_BRICKS,
            world(playerX + 1, playerY, playerZ + 3),
            world(playerX - 1, playerY + (max - 0) * 5 - 1, playerZ + 1),
            FillOperation.Hollow
        )
        blocks.fill(
            AIR,
            world(playerX - 0, playerY, playerZ + 2),
            world(playerX - 0, playerY + (max - 0) * 5 - 1, playerZ + 2),
            FillOperation.Replace
        )
        blocks.fill(
            WATER,
            world(playerX - 0, playerY, playerZ + 2),
            world(playerX - 0, playerY + (max - 0) * 5 - 1, playerZ + 2),
            FillOperation.Replace
        )
        blocks.place(MAGMA_BLOCK, world(playerX - 0, playerY - 1, playerZ + 2))
        blocks.fill(
            AIR,
            world(playerX - 1, playerY, playerZ + 2),
            world(playerX - 1, playerY + 1, playerZ + 2),
            FillOperation.Replace
        )
        blocks.place(OAK_SIGN, world(playerX - 1, playerY, playerZ + 2))
        blocks.place(OAK_SIGN, world(playerX - 1, playerY + 1, playerZ + 2))
        blocks.fill(
            CHISELED_STONE_BRICKS,
            world(playerX + 1, playerY, playerZ - 1),
            world(playerX - 1, playerY + (max - 0) * 5 - 1, playerZ + 1),
            FillOperation.Hollow
        )
        blocks.fill(
            AIR,
            world(playerX - 0, playerY, playerZ + 0),
            world(playerX - 0, playerY + (max - 0) * 5 - 1, playerZ + 0),
            FillOperation.Replace
        )
        blocks.fill(
            WATER,
            world(playerX - 0, playerY, playerZ + 0),
            world(playerX - 0, playerY + (max - 0) * 5 - 1, playerZ + 0),
            FillOperation.Replace
        )
        blocks.fill(
            AIR,
            world(playerX - 1, playerY, playerZ + 0),
            world(playerX - 1, playerY + 1, playerZ + 0),
            FillOperation.Replace
        )
        blocks.place(OAK_SIGN, world(playerX - 1, playerY, playerZ + 0))
        blocks.place(OAK_SIGN, world(playerX - 1, playerY + 1, playerZ + 0))
        blocks.place(SOUL_SAND, world(playerX - 0, playerY - 1, playerZ + 0))
    }
    //% block="どうぶつえんをつくる"
    export function Zoo(): void {
        // プレイヤーの現在位置を取得
        let playerPos = player.position();
        let playerX = playerPos.getValue(Axis.X);
        let playerY = playerPos.getValue(Axis.Y);
        let playerZ = playerPos.getValue(Axis.Z);

        blocks.fill(
            OAK_FENCE,
            world(playerX - 10, playerY, playerZ + 3),
            world(playerX + 10, playerY, playerZ + 24),
            FillOperation.Replace
        )
        blocks.fill(
            AIR,
            world(playerX - 9, playerY, playerZ + 4),
            world(playerX + 9, playerY, playerZ + 23),
            FillOperation.Replace
        )
        blocks.fill(
            GLASS,
            world(playerX - 10, playerY + 10, playerZ + 3),
            world(playerX + 10, playerY + 10, playerZ + 24),
            FillOperation.Replace
        )
        blocks.fill(
            GLASS,
            world(playerX - 10, playerY + 9, playerZ + 3),
            world(playerX + 10, playerY + 9, playerZ + 24),
            FillOperation.Replace
        )
        blocks.fill(
            AIR,
            world(playerX - 9, playerY + 9, playerZ + 4),
            world(playerX + 9, playerY + 9, playerZ + 23),
            FillOperation.Replace
        )
        for (let index = 0; index < 5; index++) {
            mobs.spawn(CHICKEN, randpos(
                world(playerX - 9, playerY + 1, playerZ + 4),
                world(playerX + 9, playerY + 1, playerZ + 23)
            ))
            mobs.spawn(PIG, randpos(
                world(playerX - 9, playerY + 1, playerZ + 4),
                world(playerX + 9, playerY + 1, playerZ + 23)
            ))
            mobs.spawn(COW, randpos(
                world(playerX - 9, playerY + 1, playerZ + 4),
                world(playerX + 9, playerY + 1, playerZ + 23)
            ))
            mobs.spawn(SHEEP, randpos(
                world(playerX - 9, playerY + 1, playerZ + 4),
                world(playerX + 9, playerY + 1, playerZ + 23)
            ))
            mobs.spawn(POLAR_BEAR, randpos(
                world(playerX - 9, playerY + 1, playerZ + 4),
                world(playerX + 9, playerY + 1, playerZ + 23)
            ))
            mobs.spawn(CAT, randpos(
                world(playerX - 9, playerY + 1, playerZ + 4),
                world(playerX + 9, playerY + 1, playerZ + 23)
            ))
            mobs.spawn(PANDA, randpos(
                world(playerX - 9, playerY + 1, playerZ + 4),
                world(playerX + 9, playerY + 1, playerZ + 23)
            ))
        }
        player.execute(
            "/give @p balloon"
        )
        player.say("ふうせんでみぎクリックしてみよう")
    }

    //% block="カーペットなしのいえをつくる"
    export function home2(): void {
        // プレイヤーの現在位置を取得
        let playerPos = player.position();
        let playerX = playerPos.getValue(Axis.X);
        let playerY = playerPos.getValue(Axis.Y);
        let playerZ = playerPos.getValue(Axis.Z);

        blocks.fill(
            PLANKS_OAK,
            world(playerX - 5, playerY, playerZ + 3),
            world(playerX + 5, playerY + 6, playerZ + 13),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            world(playerX - 5, playerY, playerZ + 3),
            world(playerX - 5, playerY + 6, playerZ + 3),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            world(playerX - 5, playerY, playerZ + 13),
            world(playerX - 5, playerY + 6, playerZ + 13),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            world(playerX + 5, playerY, playerZ + 13),
            world(playerX + 5, playerY + 6, playerZ + 13),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            world(playerX + 5, playerY, playerZ + 3),
            world(playerX + 5, playerY + 6, playerZ + 3),
            FillOperation.Hollow
        )
        blocks.fill(
            AIR,
            world(playerX + 0, playerY + 1, playerZ + 3),
            world(playerX + 0, playerY + 2, playerZ + 3),
            FillOperation.Hollow
        )
        blocks.place(DARK_OAK_DOOR, world(playerX + 0, playerY + 1, playerZ + 3))
        blocks.fill(
            COBBLESTONE,
            world(playerX - 7, playerY, playerZ + 1),
            world(playerX + 7, playerY, playerZ + 15),
            FillOperation.Hollow
        )
        blocks.fill(
            GLOWSTONE,
            world(playerX - 4, playerY, playerZ + 4),
            world(playerX + 4, playerY, playerZ + 12),
            FillOperation.Hollow
        )
        blocks.fill(
            PLANKS_OAK,
            world(playerX - 3, playerY, playerZ + 5),
            world(playerX + 3, playerY, playerZ + 11),
            FillOperation.Hollow
        )
        blocks.place(GLOWSTONE, world(playerX + 0, playerY, playerZ + 8))
        blocks.place(COBBLESTONE_SLAB, world(playerX + 0, playerY, playerZ + 1))
        blocks.fill(
            LOG_OAK,
            world(playerX - 6, playerY + 6, playerZ + 2),
            world(playerX + 6, playerY + 6, playerZ + 14),
            FillOperation.Replace
        )
        blocks.fill(
            LOG_OAK,
            world(playerX - 5, playerY + 7, playerZ + 3),
            world(playerX + 5, playerY + 7, playerZ + 13),
            FillOperation.Replace
        )
    }



    let max;





    //% block="アイスゴーレムをつくる"
    export function snowG(): void {
        // エージェントの現在位置を取得
        let agentPos = agent.getPosition();
        let agentX = agentPos.getValue(Axis.X);
        let agentY = agentPos.getValue(Axis.Y);
        let agentZ = agentPos.getValue(Axis.Z);

        blocks.fill(
            SNOW,
            world(agentX + 0, agentY, agentZ + 3),
            world(agentX + 0, agentY + 1, agentZ + 3),
            FillOperation.Replace
        )
        blocks.place(AIR, world(agentX + 1, agentY, agentZ + 3))
        blocks.place(AIR, world(agentX - 1, agentY, agentZ + 3))
        blocks.place(CARVED_PUMPKIN, world(agentX + 0, agentY + 2, agentZ + 3))
    }

    //% block="アイアンゴーレムをつくる"
    export function ironG(): void {
        // エージェントの現在位置を取得
        let agentPos = agent.getPosition();
        let agentX = agentPos.getValue(Axis.X);
        let agentY = agentPos.getValue(Axis.Y);
        let agentZ = agentPos.getValue(Axis.Z);

        blocks.fill(
            IRON_BLOCK,
            world(agentX - 1, agentY, agentZ + 3),
            world(agentX + 1, agentY + 1, agentZ + 3),
            FillOperation.Replace
        )
        blocks.place(AIR, world(agentX + 1, agentY, agentZ + 3))
        blocks.place(AIR, world(agentX - 1, agentY, agentZ + 3))
        blocks.place(CARVED_PUMPKIN, world(agentX + 0, agentY + 2, agentZ + 3))
    }

    //% block="ネザーゲートをつくる"
    export function NG(): void {
        // エージェントの現在位置を取得
        let agentPos = agent.getPosition();
        let agentX = agentPos.getValue(Axis.X);
        let agentY = agentPos.getValue(Axis.Y);
        let agentZ = agentPos.getValue(Axis.Z);

        blocks.fill(
            OBSIDIAN,
            world(agentX - 2, agentY, agentZ + 3),
            world(agentX + 2, agentY + 4, agentZ + 3),
            FillOperation.Replace
        )
        blocks.fill(
            AIR,
            world(agentX - 1, agentY + 1, agentZ + 3),
            world(agentX + 1, agentY + 3, agentZ + 3),
            FillOperation.Replace
        )
        blocks.place(FIRE, world(agentX + 0, agentY + 1, agentZ + 3))
    }

    //% block="エンドポータルをつくる"
    export function EG(): void {
        エージェント操作.alignAgentToPlayer()
        agent.setItem(END_PORTAL, 1, 1)
        agent.setSlot(1)
        agent.move(FORWARD, 5)
        agent.move(LEFT, 1)
        for (let index = 0; index < 4; index++) {
            agent.place(FORWARD)
            agent.move(RIGHT, 1)
            agent.place(FORWARD)
            agent.move(RIGHT, 1)
            agent.place(FORWARD)
            agent.turn(RIGHT_TURN)
        }
        エージェント操作.alignAgentToPlayer()
        agent.move(FORWARD, 2)
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
        agent.setItem(ENDER_EYE, 1, 12)
        agent.dropAll(FORWARD)

    }



    /**
* @param num 移動するステップ数, eg: 1
* @param pos 移動するステップ数, eg: 1
*/
    //% block="(自由時間用)エージェントのカバンの %pos ばんめに %num この %NOB をいれる"
    export function giveToAgent2(pos: number, num: number, NOB: Block) {
        agent.setItem(NOB, num, pos)
    }


    //% block="じめんをつちにはりかえる"
    export function grass(): void {
        blocks.fill(
            GRASS,
            pos(-20, -1, -20),
            pos(20, -1, 20),
            FillOperation.Replace
        )
    }
}
