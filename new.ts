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
    //旧"M1-3"
    //% block="TR-2"
    a,

    //旧"M1-4"
    //% block="TR-3"
    b,

    //旧"M1-5"
    //% block="TR-4"
    c,

    //旧"M1-7"
    //% block="TR-5"
    d,
}
enum test2 {
    //% block="M2-2"
    a,
    //M2-3がおかしかったので、修正（M3-1は使えない）
    //% block="M2-3"
    c,
    //% block="M3-1"
    b,
}



//% weight=1000000001000 color=#ffa500 icon="" block="ブロック設置"
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

//% weight=1000000001001 color=#dc143c icon="" block="エージェント"
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
    //% block="エージェントを まえに %steps あるかせる"
    export function moveAgentAndVisualize(steps: number): void {
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
        //マグマブロック判定
        if (agent.inspect(AgentInspection.Block, DOWN) == MAGMA_BLOCK) {
            let words: string[] = ["おしい！", "あとすこし！", "もうすこし！", "がんばって！"]
            let s = 0
            s = randint(0, words.length - 1)
            gameplay.title(mobs.target(LOCAL_PLAYER), words[s], "")
        }

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
    //% block="エージェントをプレイヤーのところによぶ"
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



//% weight=1000000000000 color=#00bfff icon="" block="ミッション"
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
            MAGMA_BLOCK,
            world(startX, agentY2 - 1, startZ),
            world(endX, agentY2 - 1, endZ),
            FillOperation.Replace
        );
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

            // 一歩目は変更しない
            if (i == 0) {
                continue

            } else {
                blocks.fill(
                    BEACON,
                    world(startWorld.getValue(Axis.X), startWorld.getValue(Axis.Y) - 1, startWorld.getValue(Axis.Z)),
                    world(endWorld.getValue(Axis.X), endWorld.getValue(Axis.Y) - 1, endWorld.getValue(Axis.Z)),
                    FillOperation.Replace
                );
            }

        }
        for (let i = 0; i <= path2.length - 2; i++) {
            let start = path2[i];
            let end = path2[i + 1];

            // 相対座標を実世界座標に変換 (エージェント基準)
            let startWorld = relativeToWorld(agentX, agentY, agentZ, start[0], start[1], orientation);
            let endWorld = relativeToWorld(agentX, agentY, agentZ, end[0], end[1], orientation);

            // 道を配置
            blocks.fill(
                REDSTONE_BLOCK,
                startWorld,
                endWorld,
                FillOperation.Replace
            );
        }

        //スタート地点をエメラルドブロックにする
        blocks.fill(
            EMERALD_BLOCK,
            world(agentX, agentY - 1, agentZ),
            world(agentX, agentY - 1, agentZ),
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

        let startpositon = world(agentX, agentY, agentZ,);

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

            // 一歩目は変更しない
            if (i == 0) {
                continue
            } else {
                blocks.fill(
                    BEACON,
                    world(startWorld.getValue(Axis.X), startWorld.getValue(Axis.Y) - 1, startWorld.getValue(Axis.Z)),
                    world(endWorld.getValue(Axis.X), endWorld.getValue(Axis.Y) - 1, endWorld.getValue(Axis.Z)),
                    FillOperation.Replace
                );
            }
        }
        //スタート地点をエメラルドブロックにする
        blocks.fill(
            EMERALD_BLOCK,
            world(agentX, agentY - 1, agentZ),
            world(agentX, agentY - 1, agentZ),
            FillOperation.Replace
        );
    }


    // グローバル配列定義
    let paths: number[][][] = [
        [
            //TR-2
            [0, 0],
            [0, -4]
        ],
        [
            //TR-3
            [0, 0],
            [0, -3],
            [2, -3]
        ],
        [
            //TR-4
            [0, 0],
            [0, -3],
            [-2, -3],
            [-2, -1],
        ],
        [
            //M1-7
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

//% weight=100000000101 color=#4682b4 icon="" block="遊び用カテゴリ"
namespace 遊び用 {
    /**
 * @param num 移動するステップ数, eg: 1
 * @param pos 移動するステップ数, eg: 1
 */
    //% block="(自由時間用)エージェントのカバンの %pos ばんめに %num この %NOB をいれる"
    export function giveToAgent2(pos: number, num: number, NOB: Block) {
        agent.setItem(NOB, num, pos)
    }
    //% block="カーペットつきのいえをつくる"
    export function home1(): void {
        blocks.fill(
            PLANKS_OAK,
            posCamera(-5, 0, 3),
            posCamera(5, 6, 13),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            posCamera(-5, 0, 3),
            posCamera(-5, 6, 3),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            posCamera(-5, 0, 13),
            posCamera(-5, 6, 13),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            posCamera(5, 0, 13),
            posCamera(5, 6, 13),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            posCamera(5, 0, 3),
            posCamera(5, 6, 3),
            FillOperation.Hollow
        )
        blocks.fill(
            AIR,
            posCamera(0, 1, 3),
            posCamera(0, 2, 3),
            FillOperation.Hollow
        )
        blocks.place(DARK_OAK_DOOR, posCamera(0, 1, 3))
        blocks.fill(
            COBBLESTONE,
            posCamera(-7, 0, 1),
            posCamera(7, 0, 15),
            FillOperation.Hollow
        )
        blocks.fill(
            GLOWSTONE,
            posCamera(-4, 0, 4),
            posCamera(4, 0, 12),
            FillOperation.Hollow
        )
        blocks.fill(
            PLANKS_OAK,
            posCamera(-3, 0, 5),
            posCamera(3, 0, 11),
            FillOperation.Hollow
        )
        blocks.place(GLOWSTONE, posCamera(0, 0, 8))
        blocks.fill(
            RED_CARPET,
            posCamera(-4, 1, 4),
            posCamera(4, 1, 12),
            FillOperation.Hollow
        )
        blocks.place(COBBLESTONE_SLAB, posCamera(0, 0, 1))
        blocks.fill(
            LOG_OAK,
            posCamera(-6, 6, 2),
            posCamera(6, 6, 14),
            FillOperation.Replace
        )
        blocks.fill(
            LOG_OAK,
            posCamera(-5, 7, 3),
            posCamera(5, 7, 13),
            FillOperation.Replace
        )

    }
    //% block="カーペットなしのいえをつくる"
    export function home2(): void {
        blocks.fill(
            PLANKS_OAK,
            posCamera(-5, 0, 3),
            posCamera(5, 6, 13),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            posCamera(-5, 0, 3),
            posCamera(-5, 6, 3),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            posCamera(-5, 0, 13),
            posCamera(-5, 6, 13),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            posCamera(5, 0, 13),
            posCamera(5, 6, 13),
            FillOperation.Hollow
        )
        blocks.fill(
            LOG_OAK,
            posCamera(5, 0, 3),
            posCamera(5, 6, 3),
            FillOperation.Hollow
        )
        blocks.fill(
            AIR,
            posCamera(0, 1, 3),
            posCamera(0, 2, 3),
            FillOperation.Hollow
        )
        blocks.place(DARK_OAK_DOOR, posCamera(0, 1, 3))
        blocks.fill(
            COBBLESTONE,
            posCamera(-7, 0, 1),
            posCamera(7, 0, 15),
            FillOperation.Hollow
        )
        blocks.fill(
            GLOWSTONE,
            posCamera(-4, 0, 4),
            posCamera(4, 0, 12),
            FillOperation.Hollow
        )
        blocks.fill(
            PLANKS_OAK,
            posCamera(-3, 0, 5),
            posCamera(3, 0, 11),
            FillOperation.Hollow
        )
        blocks.place(GLOWSTONE, posCamera(0, 0, 8))
        blocks.place(COBBLESTONE_SLAB, posCamera(0, 0, 1))
        blocks.fill(
            LOG_OAK,
            posCamera(-6, 6, 2),
            posCamera(6, 6, 14),
            FillOperation.Replace
        )
        blocks.fill(
            LOG_OAK,
            posCamera(-5, 7, 3),
            posCamera(5, 7, 13),
            FillOperation.Replace
        )

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
//% weight=100000000100 color=#808080 icon="" block="ごみばこ"
namespace これより {
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }

}

//% weight=10000000010 color=#a9a9a9 icon="" block="ごみばこ"
namespace したは {
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }

}

//% weight=1000000001 color=#c0c0c0 icon="" block="ごみばこ"
namespace きょうは {
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }

}
//% weight=100000000 color=#d3d3d3 icon="" block="ごみばこ"
namespace つかわないよ {
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }

}
