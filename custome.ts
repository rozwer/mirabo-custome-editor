
/**
 * エージェントの向き（左または右）
 */
enum Turndirection {
    //% block="ひだり"
    Left,
    //% block="みぎ"
    Right
}

/**
 * 課題選択用Enum（TRシリーズ）
 */
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

/**
 * 発展課題選択用Enum（M2シリーズ）
 */
enum test2 {
    //% block="M2-2"
    a,
    //% block="M2-3"
    b,
    //% block="M2-4"
    c,
}

/**
 * ON/OFF選択用Enum
 */
enum OnOff {
    //% block="ON"
    On,
    //% block="OFF"
    Off
}



//% weight=1000000001000 color=#ffa500 icon="\uf1b3" block="ブロック設置"
namespace ブロック設置 {
    /**
     * エージェントのカバンの指定したスロットを手に持つ
     * @param pos スロット番号（1-27）, eg: 1
     */
    //% block="エージェントのカバンの %pos ばんめを手にもつ"
    //% weight=90
    export function getAgentItem(pos: number): void {
        agent.setSlot(pos);
    }

    /**
     * エージェントに指定した方向にブロックを置かせる
     * @param dir 設置する方向
     */
    //% block="エージェントに %dir にブロックをおかせる"
    //% dir.shadow=minecraftAgentSixDirection
    //% weight=80
    export function placeBlock(dir: SixDirection): void {
        agent.place(dir);
    }

    /**
     * エージェントのカバンに指定したブロックを入れる
     * @param pos スロット番号（1-27）, eg: 1
     * @param num ブロックの個数, eg: 64
     * @param block ブロックの種類
     */
    //% block="エージェントのカバンの $pos ばんめに $num この $block をいれる"
    //% pos.min=1 pos.max=27
    //% num.min=1 num.max=64
    //% block.shadow=minecraftBlock
    //% block.defl=Block.Stone
    //% weight=100
    export function giveToAgent1(pos: number, num: number, block: number): void {
        agent.setItem(block, num, pos);
    }
}

//% weight=1000000001001 color=#dc143c icon="" block="エージェント"
namespace エージェント操作 {
    /**
     * エージェントを左または右に向かせる
     * @param direction 向かせる方向（左または右）
     */
    //% block="エージェントに %direction をむかせる"
    export function turnAgent(direction: Turndirection): void {
        if (direction == Turndirection.Left) {
            agent.turn(TurnDirection.Left);
        } else if (direction == Turndirection.Right) {
            agent.turn(TurnDirection.Right);
        }
    }

    /**
     * エージェントを指定したステップ数前進させる
     * 地面変更機能がONの場合、移動後の位置の足元（Y-1）にガラスブロックを配置します
     * @param steps 移動するステップ数, eg: 5
     * @param changeFloor 地面を変更するか
     */
    //% block="エージェントを まえに %steps あるかせる|ゆかをかえる %changeFloor"
    //% weight=100
    //% expandableArgumentMode="enabled"
    export function moveAgent(steps: number, changeFloor?: OnOff): void {
        // デフォルト値の設定
        if (changeFloor === undefined) changeFloor = OnOff.On;

        for (let i = 0; i < steps; i++) {
            // 先に移動
            agent.move(FORWARD, 1);

            // 地面変更機能がONの場合のみブロックを配置
            if (changeFloor === OnOff.On) {
                let position = agent.getPosition();
                let x = position.getValue(Axis.X);
                let y = position.getValue(Axis.Y);
                let z = position.getValue(Axis.Z);

                // マグマブロック判定
                if (agent.inspect(AgentInspection.Block, DOWN) == MAGMA_BLOCK) {
                    let words: string[] = ["おしい!", "あとすこし!", "もうすこし!", "がんばって!"]
                    let s = 0
                    s = randint(0, words.length - 1)
                    gameplay.title(mobs.target(LOCAL_PLAYER), words[s], "")
                }

                // 足元にガラスブロックを配置
                blocks.place(GLASS, world(x, y - 1, z));
            }

            loops.pause(50);
        }
    }

    /**
     * エージェントをプレイヤーの位置にテレポートさせる
     * 向き合わせ機能がONの場合、プレイヤーと同じ方向を向かせます
     * プレイヤーの向き（-180～180度）を4方向（北、東、西、南）に変換し、
     * エージェントが同じ方向を向くまで左に回転させます
     * @param alignOrientation プレイヤーと向きを合わせるか
     */
    //% block="エージェントをプレイヤーのところによぶ|むきをあわせる %alignOrientation"
    //% weight=200
    //% expandableArgumentMode="enabled"
    export function callAgentToPlayer(alignOrientation?: OnOff): void {
        // デフォルト値の設定
        if (alignOrientation === undefined) alignOrientation = OnOff.On;

        agent.teleportToPlayer();

        if (alignOrientation === OnOff.On) {
            let attempts = 0;
            const playerDirection = player.getOrientation();
            let targetDirection: number;

            // プレイヤーの向きを4方向に変換
            if (playerDirection >= -45 && playerDirection < 45) {
                targetDirection = 0; // 北
            } else if (playerDirection >= 45 && playerDirection < 135) {
                targetDirection = 90; // 東
            } else if (playerDirection >= -135 && playerDirection < -45) {
                targetDirection = -90; // 西
            } else {
                targetDirection = -180; // 南
            }

            // エージェントが目標の向きになるまで左回転
            while (attempts < 4) {
                const agentDirection = agent.getOrientation();
                if (agentDirection == targetDirection) {
                    return;
                }
                agent.turn(LEFT_TURN);
                attempts += 1;
            }
        }
    }

    /**
     * チャットコマンドをトリガーにして動作を設定します
     * @param command チャットコマンド, eg: "1"
     * @param handler 実行される内容
     */
    //% block="チャットコマンド %command といわれたときエージェントは"
    //% block.loc.ja="%command といわれたときエージェントは"
    //% command.shadow="text"
    //% weight=300
    export function onChatCommand(command: string, handler: () => void): void {
        player.onChat(command, handler);
    }
}

//% weight=1000000000999 color=#32cd32 icon="\uf279" block="ブロック"
namespace ブロック {
    // スタート地点の座標を保存
    let startX: number = 0;
    let startY: number = 0;
    let startZ: number = 0;
    let isStartSet: boolean = false;

    /**
     * 現在のエージェントの位置をスタート地点として記録します
     * 以降、相対座標ブロックはこの位置を基準(0, 0, 0)として動作します
     */
    //% block="エージェントのいまのばしょをスタートちてんにする"
    //% weight=100
    export function setStartPosition(): void {
        let agentPos = agent.getPosition();
        startX = agentPos.getValue(Axis.X);
        startY = agentPos.getValue(Axis.Y);
        startZ = agentPos.getValue(Axis.Z);
        isStartSet = true;
        player.say(`スタート地点: (${startX}, ${startY}, ${startZ})`);
    }

    /**
     * 現在のプレイヤーの位置をスタート地点として記録します
     * 以降、相対座標ブロックはこの位置を基準(0, 0, 0)として動作します
     */
    //% block="プレイヤーのいまのばしょをスタートちてんにする"
    //% weight=99
    export function setStartPositionFromPlayer(): void {
        let playerPos = player.position();
        startX = playerPos.getValue(Axis.X);
        startY = playerPos.getValue(Axis.Y);
        startZ = playerPos.getValue(Axis.Z);
        isStartSet = true;
        player.say(`スタート地点: (${startX}, ${startY}, ${startZ})`);
    }

    /**
     * スタート地点からの相対座標を返します
     * スタート地点が(0, 0, 0)となり、そこからの相対位置を指定できます
     * @param x X方向の相対座標, eg: 0
     * @param y Y方向の相対座標, eg: 0
     * @param z Z方向の相対座標, eg: 0
     */
    //% blockId=customRelativePosition block="スタートちてんから X:%x|Y:%y|Z:%z"
    //% weight=90
    //% inlineInputMode="inline"
    export function posFromStart(x: number, y: number, z: number): Position {
        if (!isStartSet) {
            player.say("先にスタート地点を設定してください");
            return world(0, 0, 0);
        }
        return world(startX + x, startY + y, startZ + z);
    }


    /**
     * 設定されているスタート地点の座標を確認します
     */
    //% block="スタートちてんをかくにんする"
    //% weight=60
    export function checkStartPosition(): void {
        if (!isStartSet) {
            player.say("スタート地点が設定されていません");
        } else {
            player.say(`スタート地点: (${startX}, ${startY}, ${startZ})`);
        }
    }

    /**
     * スタート地点からのカメラ依存相対座標を返します（前・右・上）
     * プレイヤーの向きに応じて、前方・右方・上方の位置を計算します
     * @param forward 前方向の距離, eg: 0
     * @param right 右方向の距離, eg: 0
     * @param up 上方向の距離, eg: 0
     */
    //% blockId=posFromStartLocal block="スタートちてんから まえ:%forward|みぎ:%right|うえ:%up"
    //% inlineInputMode="inline"
    //% weight=85
    export function posFromStartLocal(forward: number, right: number, up: number): Position {
        if (!isStartSet) {
            player.say("先にスタート地点を設定してください");
            return world(0, 0, 0);
        }

        // プレイヤーの向きを取得
        const orientation = player.getOrientation();
        let offsetX = 0;
        let offsetZ = 0;

        // プレイヤーの向きに基づいて前方と右方の座標を計算
        if (orientation >= -45 && orientation < 45) {
            // 北向き(Z負方向を向いている): 前=Z増、右=X減
            offsetX = -right;
            offsetZ = forward;
        } else if (orientation >= 45 && orientation < 135) {
            // 東向き(X正方向を向いている): 前=X減、右=Z減
            offsetX = -forward;
            offsetZ = -right;
        } else if (orientation >= -135 && orientation < -45) {
            // 西向き(X負方向を向いている): 前=X増、右=Z増
            offsetX = forward;
            offsetZ = right;
        } else {
            // 南向き(Z正方向を向いている): 前=Z減、右=X増
            offsetX = right;
            offsetZ = -forward;
        }

        return world(startX + offsetX, startY + up, startZ + offsetZ);
    }

    /**
     * スタート地点からのカメラ依存相対座標にブロックを配置します（前・右・上）
     * @param forward 前方向の距離, eg: 0
     * @param right 右方向の距離, eg: 0
     * @param up 上方向の距離, eg: 0
     * @param block 配置するブロック
     */
    //% blockId=placeBlockFromStartLocal block="スタートちてんから まえ:$forward|みぎ:$right|うえ:$up に $block をおく"
    //% block.shadow=minecraftBlock
    //% block.defl=Block.Stone
    //% inlineInputMode="inline"
    //% weight=75
    export function placeBlockFromStartLocal(forward: number, right: number, up: number, block: number): void {
        if (!isStartSet) {
            player.say("先にスタート地点を設定してください");
            return;
        }

        const pos = posFromStartLocal(forward, right, up);
        blocks.place(block, pos);
    }

    /**
     * スタート地点からのカメラ依存相対座標の範囲をブロックで埋めます（前・右・上）
     * @param block 配置するブロック
     * @param forward1 開始前方向, eg: 0
     * @param right1 開始右方向, eg: 0
     * @param up1 開始上方向, eg: 0
     * @param forward2 終了前方向, eg: 5
     * @param right2 終了右方向, eg: 5
     * @param up2 終了上方向, eg: 5
     */
    //% blockId=fillBlocksFromStartLocal block="$block で スタートから まえ:$forward1|みぎ:$right1|うえ:$up1 から まえ:$forward2|みぎ:$right2|うえ:$up2 までうめる"
    //% block.shadow=minecraftBlock
    //% block.defl=Block.Stone
    //% inlineInputMode="inline"
    //% weight=65
    export function fillBlocksFromStartLocal(block: number, forward1: number, right1: number, up1: number, forward2: number, right2: number, up2: number): void {
        if (!isStartSet) {
            player.say("先にスタート地点を設定してください");
            return;
        }

        const pos1 = posFromStartLocal(forward1, right1, up1);
        const pos2 = posFromStartLocal(forward2, right2, up2);
        blocks.fill(block, pos1, pos2, FillOperation.Replace);
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

            // ビーコンを配置
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
                REDSTONE_BLOCK,
                startWorld,
                endWorld,
                FillOperation.Replace
            );

            // ビーコンを配置
            blocks.fill(
                BEACON,
                world(startWorld.getValue(Axis.X), startWorld.getValue(Axis.Y) - 1, startWorld.getValue(Axis.Z)),
                world(endWorld.getValue(Axis.X), endWorld.getValue(Axis.Y) - 1, endWorld.getValue(Axis.Z)),
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

            // ビーコンを配置
            blocks.fill(
                BEACON,
                world(startWorld.getValue(Axis.X), startWorld.getValue(Axis.Y) - 1, startWorld.getValue(Axis.Z)),
                world(endWorld.getValue(Axis.X), endWorld.getValue(Axis.Y) - 1, endWorld.getValue(Axis.Z)),
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

//% weight=100000000101 color=#4682b4 icon="\uf11b" block="遊び用カテゴリ"
namespace 遊び用 {
    /**
     * カスタマイズ可能な家を建設する
     * プレイヤーの現在位置を基準に家を自動生成します
     * @param wallBlock 壁の素材
     * @param floorBlock 床の素材
     * @param roofBlock 屋根の素材
     * @param carpetBlock カーペットの色（Airを選ぶとカーペットなし）
     */
    //% block="いえをつくる|かべ $wallBlock|ゆか $floorBlock|やね $roofBlock|カーペット $carpetBlock"
    //% wallBlock.shadow=minecraftBlock wallBlock.defl=Block.PlanksOak
    //% floorBlock.shadow=minecraftBlock floorBlock.defl=Block.Glowstone
    //% roofBlock.shadow=minecraftBlock roofBlock.defl=Block.LogOak
    //% carpetBlock.shadow=minecraftBlock carpetBlock.defl=Block.RedCarpet
    //% expandableArgumentMode="enabled"
    export function buildCustomHouse(wallBlock?: number, floorBlock?: number, roofBlock?: number, carpetBlock?: number): void {
        // デフォルト値の設定
        if (wallBlock === undefined) wallBlock = PLANKS_OAK;
        if (floorBlock === undefined) floorBlock = GLOWSTONE;
        if (roofBlock === undefined) roofBlock = LOG_OAK;
        if (carpetBlock === undefined) carpetBlock = RED_CARPET;

        // プレイヤーの現在位置を取得
        let playerPos = player.position();
        let playerX = playerPos.getValue(Axis.X);
        let playerY = playerPos.getValue(Axis.Y);
        let playerZ = playerPos.getValue(Axis.Z);

        // 家の壁
        blocks.fill(
            wallBlock,
            world(playerX + 13, playerY, playerZ + 5),
            world(playerX + 3, playerY + 6, playerZ - 5),
            FillOperation.Hollow
        )

        // 柱（家の四隅）
        blocks.fill(
            wallBlock,
            world(playerX + 3, playerY, playerZ + 5),
            world(playerX + 3, playerY + 6, playerZ + 5),
            FillOperation.Hollow
        )
        blocks.fill(
            wallBlock,
            world(playerX + 13, playerY, playerZ + 5),
            world(playerX + 13, playerY + 6, playerZ + 5),
            FillOperation.Hollow
        )
        blocks.fill(
            wallBlock,
            world(playerX + 13, playerY, playerZ - 5),
            world(playerX + 13, playerY + 6, playerZ - 5),
            FillOperation.Hollow
        )
        blocks.fill(
            wallBlock,
            world(playerX + 3, playerY, playerZ - 5),
            world(playerX + 3, playerY + 6, playerZ - 5),
            FillOperation.Hollow
        )

        // 玄関の空間
        blocks.fill(
            AIR,
            world(playerX + 3, playerY + 1, playerZ - 0),
            world(playerX + 3, playerY + 2, playerZ - 0),
            FillOperation.Hollow
        )
        blocks.place(DARK_OAK_DOOR, world(playerX + 3, playerY + 1, playerZ - 0))

        // 外周の床（階段部分）
        blocks.fill(
            COBBLESTONE,
            world(playerX + 15, playerY, playerZ + 7),
            world(playerX + 1, playerY, playerZ - 7),
            FillOperation.Hollow
        )

        // 内側の床（光源）
        blocks.fill(
            floorBlock,
            world(playerX + 12, playerY, playerZ + 4),
            world(playerX + 4, playerY, playerZ - 4),
            FillOperation.Hollow
        )

        // さらに内側の床
        blocks.fill(
            wallBlock,
            world(playerX + 11, playerY, playerZ + 3),
            world(playerX + 5, playerY, playerZ - 3),
            FillOperation.Hollow
        )

        // 中央の光源
        blocks.place(floorBlock, world(playerX + 8, playerY, playerZ - 0))

        // カーペット（Airでない場合のみ配置）
        if (carpetBlock != AIR) {
            blocks.fill(
                carpetBlock,
                world(playerX + 12, playerY + 1, playerZ + 4),
                world(playerX + 4, playerY + 1, playerZ - 4),
                FillOperation.Hollow
            )
        }

        // 外側のステップ
        blocks.place(COBBLESTONE_SLAB, world(playerX + 1, playerY, playerZ - 0))

        // 屋根
        blocks.fill(
            roofBlock,
            world(playerX + 14, playerY + 6, playerZ + 6),
            world(playerX + 2, playerY + 6, playerZ - 6),
            FillOperation.Replace
        )
        blocks.fill(
            roofBlock,
            world(playerX + 13, playerY + 7, playerZ + 5),
            world(playerX + 3, playerY + 7, playerZ - 5),
            FillOperation.Replace
        )
    }

    /**
     * 指定した階数のカスタマイズ可能なマンションを建設する
     * @param max マンションの階数, eg: 3
     * @param wallBlock 壁の素材
     * @param windowBlock 窓の素材
     * @param pillarBlock 柱の素材
     * @param withElevator エレベーターを統合するか（左奥に配置）
     */
    //% block="$max かいだてのマンションをたてる|かべ $wallBlock|まど $windowBlock|はしら $pillarBlock|エレベーター $withElevator"
    //% wallBlock.shadow=minecraftBlock wallBlock.defl=Block.StoneBricks
    //% windowBlock.shadow=minecraftBlock windowBlock.defl=Block.Glass
    //% pillarBlock.shadow=minecraftBlock pillarBlock.defl=Block.ChiseledStoneBricks
    //% expandableArgumentMode="enabled"
    export function buildCustomMansion(max: number, wallBlock?: number, windowBlock?: number, pillarBlock?: number, withElevator?: OnOff) {
        // デフォルト値の設定
        if (wallBlock === undefined) wallBlock = STONE_BRICKS;
        if (windowBlock === undefined) windowBlock = GLASS;
        if (pillarBlock === undefined) pillarBlock = CHISELED_STONE_BRICKS;
        if (withElevator === undefined) withElevator = OnOff.Off;

        // プレイヤーの現在位置を取得
        let playerPos = player.position();
        let playerX = playerPos.getValue(Axis.X);
        let playerY = playerPos.getValue(Axis.Y);
        let playerZ = playerPos.getValue(Axis.Z);

        let floor;
        player.say("10びょううごかないでね")
        for (let カウンター = 0; カウンター <= max - 1; カウンター++) {
            floor = カウンター + 1
            // 各階の壁
            blocks.fill(
                wallBlock,
                world(playerX + 14, playerY + (floor - 1) * 5, playerZ + 6),
                world(playerX + 3, playerY + (floor - 0) * 5, playerZ - 5),
                FillOperation.Hollow
            )
            // 窓
            blocks.fill(
                windowBlock,
                world(playerX + 14, playerY + (floor - 1) * 5 + 2, playerZ + 6),
                world(playerX + 3, playerY + (floor - 1) * 5 + 2, playerZ - 5),
                FillOperation.Outline
            )
            // 四隅の柱（装飾）
            blocks.fill(
                pillarBlock,
                world(playerX + 3, playerY + (floor - 1) * 5 + 2, playerZ - 5),
                world(playerX + 3, playerY + (floor - 1) * 5 + 2, playerZ - 5),
                FillOperation.Outline
            )
            blocks.fill(
                pillarBlock,
                world(playerX + 3, playerY + (floor - 1) * 5 + 2, playerZ + 6),
                world(playerX + 3, playerY + (floor - 1) * 5 + 2, playerZ + 6),
                FillOperation.Outline
            )
            blocks.fill(
                pillarBlock,
                world(playerX + 14, playerY + (floor - 1) * 5 + 2, playerZ - 5),
                world(playerX + 14, playerY + (floor - 1) * 5 + 2, playerZ - 5),
                FillOperation.Outline
            )
            blocks.fill(
                pillarBlock,
                world(playerX + 14, playerY + (floor - 1) * 5 + 2, playerZ + 6),
                world(playerX + 14, playerY + (floor - 1) * 5 + 2, playerZ + 6),
                FillOperation.Outline
            )
            // 内部空間
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

        // エレベーター統合（左奥に配置）
        if (withElevator === OnOff.On) {
            // エレベーターの位置を計算（正面=扉側から見て左奥）
            // マンションは playerX+3 (前) から playerX+14 (後)、playerZ-5 (左) から playerZ+6 (右)
            // 左奥の位置調整: もう2つ奥、もう1つ上、左に2個
            let elevatorX = playerX + 11 + 2;  // もう2つ奥
            let elevatorY = playerY + 1;  // もう1つ上
            let elevatorZ = playerZ - 3 + 1 - 2;  // もう1つ右から左に2個ずらす

            // エレベーターの基礎部分
            blocks.place(CHISELED_STONE_BRICK_MONSTER_EGG, world(elevatorX - 1, elevatorY - 1, elevatorZ + 2))
            blocks.place(CHISELED_STONE_BRICK_MONSTER_EGG, world(elevatorX - 1, elevatorY - 1, elevatorZ + 0))

            // 下降エレベーターシャフト（マグマブロック）
            blocks.fill(
                CHISELED_STONE_BRICKS,
                world(elevatorX + 1, elevatorY, elevatorZ + 3),
                world(elevatorX - 1, elevatorY + (max - 0) * 5 - 1, elevatorZ + 1),
                FillOperation.Hollow
            )
            blocks.fill(
                AIR,
                world(elevatorX - 0, elevatorY, elevatorZ + 2),
                world(elevatorX - 0, elevatorY + (max - 0) * 5 - 1, elevatorZ + 2),
                FillOperation.Replace
            )
            blocks.fill(
                WATER,
                world(elevatorX - 0, elevatorY, elevatorZ + 2),
                world(elevatorX - 0, elevatorY + (max - 0) * 5 - 1, elevatorZ + 2),
                FillOperation.Replace
            )
            blocks.place(MAGMA_BLOCK, world(elevatorX - 0, elevatorY - 1, elevatorZ + 2))
            blocks.fill(
                AIR,
                world(elevatorX - 1, elevatorY, elevatorZ + 2),
                world(elevatorX - 1, elevatorY + 1, elevatorZ + 2),
                FillOperation.Replace
            )
            blocks.place(OAK_SIGN, world(elevatorX - 1, elevatorY, elevatorZ + 2))
            blocks.place(OAK_SIGN, world(elevatorX - 1, elevatorY + 1, elevatorZ + 2))

            // 上昇エレベーターシャフト（ソウルサンド）
            blocks.fill(
                CHISELED_STONE_BRICKS,
                world(elevatorX + 1, elevatorY, elevatorZ - 1),
                world(elevatorX - 1, elevatorY + (max - 0) * 5 - 1, elevatorZ + 1),
                FillOperation.Hollow
            )
            blocks.fill(
                AIR,
                world(elevatorX - 0, elevatorY, elevatorZ + 0),
                world(elevatorX - 0, elevatorY + (max - 0) * 5 - 1, elevatorZ + 0),
                FillOperation.Replace
            )
            blocks.fill(
                WATER,
                world(elevatorX - 0, elevatorY, elevatorZ + 0),
                world(elevatorX - 0, elevatorY + (max - 0) * 5 - 1, elevatorZ + 0),
                FillOperation.Replace
            )
            blocks.fill(
                AIR,
                world(elevatorX - 1, elevatorY, elevatorZ + 0),
                world(elevatorX - 1, elevatorY + 1, elevatorZ + 0),
                FillOperation.Replace
            )
            blocks.place(OAK_SIGN, world(elevatorX - 1, elevatorY, elevatorZ + 0))
            blocks.place(OAK_SIGN, world(elevatorX - 1, elevatorY + 1, elevatorZ + 0))
            blocks.place(SOUL_SAND, world(elevatorX - 0, elevatorY - 1, elevatorZ + 0))
        }
    }

    /**
     * 指定した階数の水流エレベーターを建設する
     * @param max エレベーターの階数, eg: 3
     */
    //% block="%max かいだてのエレベーターをたてる"
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

    /**
     * カスタマイズ可能な動物園を建設し、様々な動物をスポーンさせる
     * 完成後、風船アイテムがプレイヤーに与えられます
     * @param fenceBlock 柵の素材
     * @param roofBlock 天井の素材
     * @param animal1 動物1の種類
     * @param count1 動物1の数, eg: 5
     * @param animal2 動物2の種類
     * @param count2 動物2の数, eg: 5
     * @param animal3 動物3の種類
     * @param count3 動物3の数, eg: 5
     * @param animal4 動物4の種類
     * @param count4 動物4の数, eg: 5
     */
    //% block="どうぶつえんをつくる|さく $fenceBlock|てんじょう $roofBlock|どうぶつ1 $animal1|かず1 $count1|どうぶつ2 $animal2|かず2 $count2|どうぶつ3 $animal3|かず3 $count3|どうぶつ4 $animal4|かず4 $count4"
    //% fenceBlock.shadow=minecraftBlock fenceBlock.defl=Block.OakFence
    //% roofBlock.shadow=minecraftBlock roofBlock.defl=Block.Glass
    //% animal1.shadow=minecraftAnimal animal1.defl=CHICKEN
    //% count1.min=0 count1.max=20 count1.defl=5
    //% animal2.shadow=minecraftAnimal animal2.defl=PIG
    //% count2.min=0 count2.max=20 count2.defl=5
    //% animal3.shadow=minecraftAnimal animal3.defl=COW
    //% count3.min=0 count3.max=20 count3.defl=5
    //% animal4.shadow=minecraftAnimal animal4.defl=SHEEP
    //% count4.min=0 count4.max=20 count4.defl=5
    //% expandableArgumentMode="enabled"
    export function buildCustomZoo(fenceBlock?: number, roofBlock?: number, animal1?: number, count1?: number, animal2?: number, count2?: number, animal3?: number, count3?: number, animal4?: number, count4?: number): void {
        // デフォルト値の設定
        if (fenceBlock === undefined) fenceBlock = OAK_FENCE;
        if (roofBlock === undefined) roofBlock = GLASS;
        if (animal1 === undefined) animal1 = CHICKEN;
        if (count1 === undefined) count1 = 5;
        if (animal2 === undefined) animal2 = PIG;
        if (count2 === undefined) count2 = 5;
        if (animal3 === undefined) animal3 = COW;
        if (count3 === undefined) count3 = 5;
        if (animal4 === undefined) animal4 = SHEEP;
        if (count4 === undefined) count4 = 5;

        // プレイヤーの現在位置を取得
        let playerPos = player.position();
        let playerX = playerPos.getValue(Axis.X);
        let playerY = playerPos.getValue(Axis.Y);
        let playerZ = playerPos.getValue(Axis.Z);

        // 柵（外枠）
        blocks.fill(
            fenceBlock,
            world(playerX - 10, playerY, playerZ + 3),
            world(playerX + 10, playerY, playerZ + 24),
            FillOperation.Replace
        )
        // 内部空間
        blocks.fill(
            AIR,
            world(playerX - 9, playerY, playerZ + 4),
            world(playerX + 9, playerY, playerZ + 23),
            FillOperation.Replace
        )
        // 天井（2層）
        blocks.fill(
            roofBlock,
            world(playerX - 10, playerY + 10, playerZ + 3),
            world(playerX + 10, playerY + 10, playerZ + 24),
            FillOperation.Replace
        )
        blocks.fill(
            roofBlock,
            world(playerX - 10, playerY + 9, playerZ + 3),
            world(playerX + 10, playerY + 9, playerZ + 24),
            FillOperation.Replace
        )
        // 天井内部の空気
        blocks.fill(
            AIR,
            world(playerX - 9, playerY + 9, playerZ + 4),
            world(playerX + 9, playerY + 9, playerZ + 23),
            FillOperation.Replace
        )

        // 動物1のスポーン
        for (let i = 0; i < count1; i++) {
            mobs.spawn(animal1, randpos(
                world(playerX - 9, playerY + 1, playerZ + 4),
                world(playerX + 9, playerY + 1, playerZ + 23)
            ))
        }

        // 動物2のスポーン
        for (let i = 0; i < count2; i++) {
            mobs.spawn(animal2, randpos(
                world(playerX - 9, playerY + 1, playerZ + 4),
                world(playerX + 9, playerY + 1, playerZ + 23)
            ))
        }

        // 動物3のスポーン
        for (let i = 0; i < count3; i++) {
            mobs.spawn(animal3, randpos(
                world(playerX - 9, playerY + 1, playerZ + 4),
                world(playerX + 9, playerY + 1, playerZ + 23)
            ))
        }

        // 動物4のスポーン
        for (let i = 0; i < count4; i++) {
            mobs.spawn(animal4, randpos(
                world(playerX - 9, playerY + 1, playerZ + 4),
                world(playerX + 9, playerY + 1, playerZ + 23)
            ))
        }

        player.execute(
            "/give @p balloon"
        )
        player.say("ふうせんでみぎクリックしてみよう")
    }


    /**
     * エージェントの前方にスノーゴーレムを生成する
     * 雪ブロックとカボチャで自動的にスポーンします
     */
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

    /**
     * エージェントの前方にアイアンゴーレムを生成する
     * 鉄ブロックとカボチャで自動的にスポーンします
     */
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

    /**
     * エージェントの前方にネザーゲートを生成する
     * 黒曜石のフレームと火で自動的にポータルが開きます
     */
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

    /**
     * エージェントの前方にエンドポータルを生成する
     * エンドポータルフレームとエンダーアイを自動配置します
     */
    //% block="エンドポータルをつくる"
    export function EG(): void {
        エージェント操作.callAgentToPlayer()
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
        エージェント操作.callAgentToPlayer()
        agent.move(FORWARD, 2)
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
        agent.setItem(ENDER_EYE, 1, 12)
        agent.dropAll(FORWARD)

    }



    /**
     * エージェントのカバンに任意のブロックを入れる（自由時間用）
     * @param pos スロット番号（1-27）, eg: 1
     * @param num ブロックの個数, eg: 64
     * @param NOB ブロックの種類
     */
    //% block="(自由時間用)エージェントのカバンの $pos ばんめに $num この $NOB をいれる"
    //% NOB.shadow=minecraftBlock
    //% NOB.defl=Block.Stone
    export function giveToAgent2(pos: number, num: number, NOB: number) {
        agent.setItem(NOB, num, pos)
    }

    /**
     * 周囲の地面を草ブロックに張り替える
     * プレイヤーの位置から40x40範囲の地面（Y-1）を草ブロックに変更します
     */
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
