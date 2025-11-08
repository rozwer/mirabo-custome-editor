# MakeCode for Minecraft 開発ノウハウ

TypeScript初心者およびMakeCode開発初心者向けの総合ガイドです。

## 目次

### 基礎編
1. [MakeCodeの基本概念](#1-makecodeの基本概念)
2. [アノテーションシステム](#2-アノテーションシステム)
3. [ブロック定義の基本](#3-ブロック定義の基本)

### アノテーション完全リファレンス
4. [ブロック定義アノテーション](#4-ブロック定義アノテーション)
5. [パラメーター修飾子](#5-パラメーター修飾子)
6. [レイアウト制御](#6-レイアウト制御)
7. [名前空間とカテゴリ](#7-名前空間とカテゴリ)
8. [高度な機能](#8-高度な機能)

### 実践編
9. [Enumとドロップダウン](#9-enumとドロップダウン)
10. [座標系とPosition](#10-座標系とposition)
11. [実装パターン集](#11-実装パターン集)
12. [トラブルシューティング](#12-トラブルシューティング)

---

## 1. MakeCodeの基本概念

### 1.1 MakeCodeとは

MakeCodeは、ビジュアルプログラミング環境とTypeScriptコードを橋渡しするフレームワークです。TypeScriptで関数を定義し、特殊なアノテーション（`//%`で始まる行）を付けることで、ビジュアルエディタにブロックとして表示されます。

### 1.2 基本的な流れ

```typescript
// 1. 名前空間を定義してカテゴリを作成
//% color=#ffa500 weight=100 block="マイカテゴリ"
namespace マイカテゴリ {

    // 2. 関数を定義してexport
    //% block="こんにちは %name"
    export function sayHello(name: string): void {
        player.say(`こんにちは、${name}さん！`);
    }
}
```

### 1.3 アノテーションの記述ルール

- `//%` で始まる行がMakeCode専用アノテーション
- 複数行にわたって記述可能
- 順序は自由（ただし可読性のため一定のルールを推奨）

---

## 2. アノテーションシステム

### 2.1 アノテーションの種類

MakeCodeのアノテーションは以下のカテゴリに分類されます：

| カテゴリ | 用途 | 主なアノテーション |
|---------|------|------------------|
| **ブロック定義** | ブロックの外観と識別 | `block`, `blockId`, `blockNamespace` |
| **パラメーター** | 入力の設定 | `.shadow`, `.defl`, `.fieldEditor` |
| **レイアウト** | ブロックの配置と表示 | `weight`, `group`, `inlineInputMode` |
| **名前空間** | カテゴリの設定 | `color`, `icon`, `advanced` |
| **動作制御** | 表示・非表示の制御 | `blockHidden`, `deprecated` |
| **ヘルプ** | ドキュメント | `help`, `blockAliasFor` |
| **内部機能** | システム連携 | `shim`, `promise`, `async` |

---

## 3. ブロック定義の基本

### 3.1 最もシンプルな例

```typescript
//% block="プレイヤーにあいさつ"
export function greet(): void {
    player.say("こんにちは！");
}
```

### 3.2 パラメーター付きブロック

```typescript
//% block="%steps あるく"
export function walk(steps: number): void {
    agent.move(FORWARD, steps);
}
```

**パラメーターの記法:**
- `%param` - 通常のパラメーター挿入
- `$param` - 名前付きパラメーター（最新版）
- `|` - 改行
- `||` - オプション引数の区切り

### 3.3 JSDocとの連携

```typescript
/**
 * エージェントを指定した方向に動かす
 * @param direction 移動する方向, eg: FORWARD
 * @param steps 移動するブロック数, eg: 5
 */
//% block="エージェントを %direction に %steps ブロック動かす"
export function moveAgent(direction: SixDirection, steps: number): void {
    agent.move(direction, steps);
}
```

**JSDocのポイント:**
- `@param 名前 説明, eg: デフォルト値` の形式
- `eg:` の後の値がビジュアルエディタのデフォルト値になる

---

## 4. ブロック定義アノテーション

### 4.1 基本アノテーション

#### `block` - ブロックのテキスト定義 ⭐必須

```typescript
//% block="say %message"
export function say(message: string): void { }
```

#### `blockId` - ブロックの一意識別子

```typescript
//% blockId=minecraftSay block="say %message"
export function say(message: string): void { }
```

**命名規則:**
- プレフィックス + 関数名が一般的
- 例: `minecraft`, `agent`, `mobs` など
- ユニークであることが重要

#### `blockNamespace` - 配置先の名前空間

```typescript
//% blockNamespace=positions
//% blockId=minecraftCreatePosition block="~%x|~%y|~%z"
export function pos(x: number, y: number, z: number): Position {
    return new RelativePosition(x, y, z);
}
```

現在の名前空間とは異なる場所にブロックを配置できます。

### 4.2 表示制御アノテーション

#### `blockHidden` - ブロックの非表示

```typescript
//% blockHidden=1
export function internalFunction(): void { }
```

**用途:**
- 内部的な実装に使う関数
- 後方互換性のために残す関数

#### `deprecated` - 非推奨マーク

```typescript
//% deprecated
//% block="古い関数"
export function oldFunction(): void { }
```

#### `blockBuiltin` - 組み込みブロック

```typescript
//% blockBuiltin=true
//% blockId="lists_length" block="length of %VALUE"
length: number;
```

システム組み込みブロックであることを示します。

### 4.3 エイリアスと代替

#### `blockAliasFor` - エイリアスの指定

```typescript
//% blockAliasFor="Array.unshift"
//% blockId="array_unshift_statement" block="%list| insert %value| at beginning"
export function _unshiftStatement(value: T): void { }
```

既存のブロックの別表現を提供します。

---

## 5. パラメーター修飾子

### 5.1 基本修飾子

#### `.shadow` - Shadow Blockの指定

デフォルトで表示されるブロックの種類を指定します。

```typescript
//% block="say %message"
//% message.shadow=text
export function say(message: any): void { }
```

**よく使うshadow:**
- `text` - テキスト入力
- `minecraftBlock` - ブロック選択
- `minecraftCreatePosition` - 座標入力
- `minecraftTarget` - ターゲットセレクター

#### `.defl` - デフォルト値

```typescript
//% block="say %message"
//% message.shadow=text
//% message.defl='":)"'
export function say(message: any): void { }
```

### 5.2 カスタムエディター

#### `.fieldEditor` - フィールドエディタの種類

特殊な入力UIを提供します。

```typescript
//% blockId=camerapositionpicker block="%pos" shim=TD_ID
//% pos.fieldEditor="cameraposition"
//% pos.fieldOptions.decompileLiterals=1
export function __cameraPicker(pos: CameraPositionPicker): number {
    return pos;
}
```

**利用可能なfieldEditor:**

| エディタ名 | 用途 | 例 |
|-----------|------|-----|
| `colornumber` | RGB色選択 | カラーパレット |
| `colorwheel` | 色相環 | HSV色選択 |
| `toggleonoff` | ON/OFFトグル | ブール値 |
| `toggleyesno` | Yes/Noトグル | ブール値 |
| `toggleupdown` | Up/Downトグル | ブール値 |
| `toggledownup` | Down/Upトグル | ブール値 |
| `togglehighlow` | High/Lowトグル | ブール値 |
| `togglewinlose` | Win/Loseトグル | ブール値 |
| `speed` | 速度選択 | モーター制御 |
| `turnratio` | 旋回比選択 | モーター制御 |
| `protractor` | 角度選択 | 分度器UI |
| `numberdropdown` | 数値ドロップダウン | 時間選択など |
| `cameraposition` | カメラ位置 | 座標入力 |
| `gridpicker` | グリッド選択 | 2D配列 |
| `note` | 音符選択 | 音楽 |

#### `.fieldOptions` - エディタオプション

```typescript
//% value.fieldEditor="colornumber"
//% value.fieldOptions.decompileLiterals=true
//% value.defl='0xff0000'
//% value.fieldOptions.colours='["#ff0000","#ff8000","#ffff00"]'
//% value.fieldOptions.columns=4
//% value.fieldOptions.className='rgbColorPicker'
export function __colorNumberPicker(value: number): number {
    return value;
}
```

**主なfieldOptions:**
- `decompileLiterals` - リテラル値の展開
- `colours` - カラーパレット配列
- `columns` - 列数
- `className` - CSSクラス名
- `min`, `max` - 範囲指定
- `sliderWidth` - スライダー幅
- `channel` - チャンネル設定（色相環用）

### 5.3 時間とデータの例

```typescript
//% blockId=timePicker block="%ms"
//% ms.fieldEditor="numberdropdown"
//% ms.fieldOptions.decompileLiterals=true
//% ms.fieldOptions.data='[["100 ms", 100], ["200 ms", 200], ["500 ms", 500], ["1 second", 1000]]'
export function __timePicker(ms: number): number {
    return ms;
}
```

---

## 6. レイアウト制御

### 6.1 表示順序

#### `weight` - ブロックの表示順序

```typescript
//% weight=100
//% block="重要な関数"
export function important(): void { }

//% weight=50
//% block="普通の関数"
export function normal(): void { }
```

**重要:**
- 値が大きいほど上に表示される
- 同じカテゴリ内での相対的な順序

#### `blockGap` - ブロック間の空白

```typescript
//% weight=100 blockGap=60
//% block="このブロックの下に大きな空白"
export function func1(): void { }
```

### 6.2 入力配置

#### `inlineInputMode` - インライン入力

```typescript
//% inlineInputMode="inline"
//% block="tell %target|%message"
export function tell(target: TargetSelector, message: any): void { }
```

**値:**
- `"inline"` - 横並び配置
- `"external"` - 縦並び配置（デフォルト）

#### `blockExternalInputs` - 外部入力強制

```typescript
//% blockExternalInputs=1
//% block="pick random position|from %p1|to %p2"
export function randpos(p1: Position, p2: Position): Position { }
```

複数のブロック入力を縦に並べたいときに使用。

#### `expandableArgumentMode` - 引数の展開

```typescript
//% expandableArgumentMode="enabled"
//% block="関数 %a||%b %c"
export function func(a: number, b?: number, c?: number): void { }
```

**値:**
- `"enabled"` - オプション引数を展開可能
- `"disabled"` - 展開しない
- `"toggle"` - トグルで切り替え

#### `expandArgumentsInToolbox` - ツールボックスで展開

```typescript
//% expandArgumentsInToolbox
//% block="substring of $this|from $start||of length $length"
export function substr(start: number, length?: number): string { }
```

ツールボックス内でオプション引数を表示します。

### 6.3 グループ化

#### `group` - サブグループ

```typescript
//% blockId="array_push" block="%list| add value %value| to end"
//% group="Modify"
export function push(item: T): void { }

//% blockId="array_pop" block="get and remove last value from %list"
//% group="Read"
export function pop(): T { }
```

**用途:**
- 同じカテゴリ内を機能別に分類
- 例: "Modify", "Read", "Operations", "Advanced"

#### `advanced` - 上級者向けグループ

```typescript
//% advanced=true
//% block="高度な設定"
export function advancedSettings(): void { }
```

---

## 7. 名前空間とカテゴリ

### 7.1 名前空間の定義

```typescript
//% color=#ffa500 weight=1000 icon="" block="カテゴリ名"
namespace カテゴリ名 {
    // 関数定義
}
```

### 7.2 名前空間アノテーション

#### `color` - カテゴリの色

```typescript
//% color=#ffa500
namespace カテゴリ名 { }
```

**よく使う色:**
- `#ffa500` - オレンジ
- `#dc143c` - 赤（クリムゾン）
- `#4682b4` - 青（スチールブルー）
- `#69B090` - 緑がかった青
- `#008000` - 緑
- `#FF6680` - ピンク
- `#8B008B` - 紫

#### `icon` - カテゴリのアイコン

```typescript
//% icon="\uf1b9"
namespace カテゴリ名 { }
```

FontAwesomeのユニコードを使用。

#### `weight` - カテゴリの表示順序

```typescript
//% weight=1000
namespace 重要なカテゴリ { }

//% weight=100
namespace 普通のカテゴリ { }
```

#### `block` - カテゴリの表示名

```typescript
//% block="マイカテゴリ"
namespace myCategory { }
```

#### `blockNamespace` - カテゴリ名の指定

```typescript
//% blockNamespace=positions
namespace helpers { }
```

### 7.3 カテゴリのグループ化

```typescript
//% groups='["basic", "advanced"]'
namespace カテゴリ名 { }
```

---

## 8. 高度な機能

### 8.1 非同期とPromise

#### `async` - 非同期関数

```typescript
//% async
export function asyncFunction(): Promise<void> { }
```

#### `promise` - Promise返却

```typescript
//% promise
export function promiseFunction(): void { }
```

### 8.2 システム連携

#### `shim` - ネイティブ関数呼び出し

```typescript
//% shim=Array_::length
length: number;
```

C++/JavaScriptの実装を直接呼び出します。

#### `shim=TD_ID` - アイデンティティ関数

```typescript
//% shim=TD_ID
export function identityFunc(value: number): number {
    return value;
}
```

#### `constantShim` - 定数のShim

```typescript
//% constantShim
//% block="π"
PI: number;
```

### 8.3 ローカライゼーション

#### `block.loc.ja` - 日本語ローカライズ

```typescript
//% block="command %command"
//% block.loc.ja="%command といわれたとき"
export function onCommand(command: string, handler: () => void): void { }
```

### 8.4 最適化

#### `emitAsConstant` - 定数としてEmit

```typescript
//% emitAsConstant
declare const enum Block {
    Grass = 2,
}
```

メモリ使用量を削減します。

### 8.5 その他

#### `help` - ヘルプページ

```typescript
//% help=agent/turn
export function turn(): void { }
```

#### `blockIdentity` - Enum値のアイデンティティ

```typescript
enum Method {
    //% block="entity"
    //% blockIdentity="events._method"
    Entity,
}
```

#### `colorSecondary` - セカンダリカラー

```typescript
//% colorSecondary="#FFFFFF"
export function func(): void { }
```

#### `jres` - リソースエイリアス

```typescript
//% jres alias=GRASS
Grass = 2,
```

#### `enumval` - Enum値の明示

```typescript
//% enumval=2
Grass = 2,
```

---

## 9. Enumとドロップダウン

### 9.1 基本的なEnum定義

```typescript
enum Direction {
    //% block="北"
    North,
    //% block="南"
    South,
    //% block="東"
    East,
    //% block="西"
    West
}
```

### 9.2 Enum値のカスタマイズ

```typescript
enum BLOCKS {
    //% block="💎ダイヤモンド"
    Diamond,
    //% block="🪙ゴールド"
    Gold,
    //% block="🛠️アイアン"
    Iron
}
```

**ポイント:**
- 絵文字が使える
- 日本語が使える
- 内部名（Diamond）と表示名（💎ダイヤモンド）を分離

### 9.3 Enumの使用

```typescript
//% block="エージェントに %dir にブロックを置く"
export function placeBlock(dir: Direction): void {
    switch (dir) {
        case Direction.North:
            agent.place(FORWARD);
            break;
        case Direction.South:
            agent.place(BACK);
            break;
        // ...
    }
}
```

### 9.4 const enumの使用

```typescript
//% emitAsConstant
declare const enum Block {
    //% blockIdentity="blocks.block" enumval=2 block="Grass Block"
    //% jres alias=GRASS
    Grass = 2,
}
```

システム定義のEnumはこの形式を使用します。

---

## 10. 座標系とPosition

### 10.1 座標取得の基本

```typescript
// プレイヤーの位置
let playerPos = player.position();
let playerX = playerPos.getValue(Axis.X);
let playerY = playerPos.getValue(Axis.Y);
let playerZ = playerPos.getValue(Axis.Z);

// エージェントの位置
let agentPos = agent.getPosition();
let agentX = agentPos.getValue(Axis.X);
let agentY = agentPos.getValue(Axis.Y);
let agentZ = agentPos.getValue(Axis.Z);

// 向きの取得
let orientation = agent.getOrientation();
```

### 10.2 座標の種類

**ワールド座標:**
```typescript
//% blockId=minecraftCreateWorldPosition block="world %x|%y|%z"
export function world(x: number, y: number, z: number): Position {
    return new WorldPosition(x, y, z);
}
```

**相対座標:**
```typescript
//% blockId=minecraftCreatePosition block="~%x|~%y|~%z"
export function pos(x: number, y: number, z: number): Position {
    return new RelativePosition(x, y, z);
}
```

**ローカル座標:**
```typescript
//% blockId=minecraftCreatePositionLocal block="^$x|^$y|^$z"
export function posLocal(x: number, y: number, z: number): Position {
    return new LocalPosition(x, y, z);
}
```

### 10.3 向きに基づく座標変換

エージェントやプレイヤーの向きに応じて座標を変換する関数：

```typescript
export function relativeToWorld(
    baseX: number, baseY: number, baseZ: number,
    offsetX: number, offsetY: number,
    orientation: number
): Position {
    let worldX = baseX;
    let worldY = baseY - 1;
    let worldZ = baseZ;

    if (orientation >= -45 && orientation < 45) {
        // 北向き (0°)
        worldX += offsetX;
        worldZ += 0 - offsetY;
    } else if (orientation >= 45 && orientation < 135) {
        // 東向き (90°)
        worldX += offsetY;
        worldZ += offsetX;
    } else if (orientation >= -135 && orientation < -45) {
        // 西向き (-90°)
        worldX += 0 - offsetY;
        worldZ += 0 - offsetX;
    } else {
        // 南向き (±180°)
        worldX += 0 - offsetX;
        worldZ += offsetY;
    }

    return world(worldX, worldY, worldZ);
}
```

**向きの範囲:**
- `-45° ~ 45°`: 北向き
- `45° ~ 135°`: 東向き
- `-135° ~ -45°`: 西向き
- その他: 南向き

### 10.4 プレイヤーの向きに合わせる

```typescript
export function alignAgentToPlayer(): void {
    agent.teleportToPlayer();

    const playerDirection = player.getOrientation();
    let targetDirection: number;

    if (playerDirection >= -45 && playerDirection < 45) {
        targetDirection = 0;    // 北
    } else if (playerDirection >= 45 && playerDirection < 135) {
        targetDirection = 90;   // 東
    } else if (playerDirection >= -135 && playerDirection < -45) {
        targetDirection = -90;  // 西
    } else {
        targetDirection = -180; // 南
    }

    let attempts = 0;
    while (attempts < 4) {
        const agentDirection = agent.getOrientation();
        if (agentDirection == targetDirection) {
            return;
        }
        agent.turn(LEFT_TURN);
        attempts += 1;
    }
}
```

---

## 11. 実装パターン集

### 11.1 シンプルなブロック

```typescript
//% block="エージェントを呼ぶ"
export function callAgent(): void {
    agent.teleportToPlayer();
}
```

### 11.2 Enumを使った選択

```typescript
enum TurnDirection {
    //% block="左"
    Left,
    //% block="右"
    Right
}

//% block="エージェントを %direction に曲がらせる"
export function turnAgent(direction: TurnDirection): void {
    if (direction == TurnDirection.Left) {
        agent.turn(TurnDirection.Left);
    } else {
        agent.turn(TurnDirection.Right);
    }
}
```

### 11.3 複数パラメーター（ブロック選択）

**ブロック選択の正しい実装方法:**

```typescript
/**
 * エージェントのカバンに指定したブロックを入れる
 * @param pos スロット番号（1-27）, eg: 1
 * @param num ブロックの個数, eg: 64
 * @param block ブロックの種類
 */
//% block="えーじぇんとのかばんの %pos ばんめに %num この %block をいれる"
//% block.shadow=minecraftBlock
export function giveToAgent(pos: number, num: number, block: Block): void {
    agent.setItem(block, num, pos);
}
```

**方向選択の正しい実装方法（SixDirection）:**

```typescript
/**
 * エージェントに指定した方向にブロックを置かせる
 * @param dir 設置する方向
 */
//% block="えーじぇんとに %dir にぶろっくをおかせる"
//% dir.shadow=minecraftAgentSixDirection
export function placeBlock(dir: SixDirection): void {
    agent.place(dir);
}
```

**重要ポイント:**
- ブロック選択には`Block`型を使用し、`block.shadow=minecraftBlock`を指定
- 方向選択には`SixDirection`型を使用し、`dir.shadow=minecraftAgentSixDirection`を指定
- カスタムEnumは避け、core側の標準型を使用する
- ブロックテキストは平仮名で統一（例: `えーじぇんと`）

### 11.4 オプション引数

```typescript
//% block="家を建てる|位置 %pos||色 %color サイズ %size"
//% pos.shadow=minecraftCreatePosition
//% expandArgumentsInToolbox
export function buildHouse(pos: Position, color?: number, size?: number): void {
    color = color || 0xFFFFFF;
    size = size || 10;
    // 実装
}
```

### 11.5 グローバル変数の使用

```typescript
namespace データ保存 {
    // 名前空間内グローバル変数
    let savedData: number[][] = [];

    //% block="データを保存"
    export function saveData(): void {
        savedData.push([1, 2, 3]);
    }

    //% block="データを復元"
    export function restoreData(): void {
        if (savedData.length == 0) {
            player.say("データがありません");
            return;
        }
        // データを使用
    }
}
```

### 11.6 トグル機能の実装

**機能のON/OFFをトグルで切り替える:**

```typescript
namespace エージェント操作 {
    // 地面変更機能のON/OFFフラグ（デフォルトON）
    let floorChangeEnabled: boolean = true;

    /**
     * 地面変更機能のON/OFFを切り替える（トグル）
     */
    //% block="ゆかをかえるきのうをきりかえる"
    //% weight=95
    export function toggleFloorChange(): void {
        floorChangeEnabled = !floorChangeEnabled;
        if (floorChangeEnabled) {
            player.say("床変更機能ON");
        } else {
            player.say("床変更機能OFF");
        }
    }

    /**
     * エージェントを指定したステップ数前進させる
     * 地面変更機能がONの場合、移動後の位置の足元にガラスブロックを配置
     */
    //% block="エージェントを %steps すすめる"
    export function moveAgent(steps: number): void {
        for (let i = 0; i < steps; i++) {
            agent.move(FORWARD, 1);

            // 地面変更機能がONの場合のみブロックを配置
            if (floorChangeEnabled) {
                let position = agent.getPosition();
                blocks.place(GLASS, world(
                    position.getValue(Axis.X),
                    position.getValue(Axis.Y) - 1,
                    position.getValue(Axis.Z)
                ));
            }

            loops.pause(50);
        }
    }
}
```

**ポイント:**
- 名前空間内のグローバル変数でフラグを管理
- トグル関数で`!`演算子を使って反転
- `player.say()`で状態をユーザーに通知
- デフォルト値は使いやすい方に設定（多くの場合ON）

### 11.7 ヘルパー関数（非公開）

```typescript
namespace ビルダー {
    // exportしない = ブロックに表示されない
    function placeWall(start: Position, end: Position): void {
        blocks.fill(STONE, start, end, FillOperation.Replace);
    }

    // exportする = ブロックに表示される
    //% block="家を建てる"
    export function buildHouse(): void {
        let pos = player.position();
        placeWall(pos, world(pos.getValue(Axis.X) + 10, pos.getValue(Axis.Y), pos.getValue(Axis.Z)));
    }
}
```

### 11.8 ループとアニメーション

```typescript
//% block="%steps 歩歩く（アニメーション付き）"
export function walkAnimated(steps: number): void {
    for (let i = 0; i < steps; i++) {
        agent.move(FORWARD, 1);

        let pos = agent.getPosition();
        let x = pos.getValue(Axis.X);
        let y = pos.getValue(Axis.Y);
        let z = pos.getValue(Axis.Z);

        blocks.place(GLASS, world(x, y - 1, z));

        loops.pause(100);  // 100ms待機
    }
}
```

---

## 12. トラブルシューティング

### 12.1 ブロックが表示されない

**症状:** ビジュアルエディタにブロックが出てこない

**原因と解決策:**

1. **exportが抜けている**
   ```typescript
   // ❌ 悪い
   namespace Test {
       //% block="test"
       function myFunc() { }
   }

   // ✅ 良い
   namespace Test {
       //% block="test"
       export function myFunc() { }
   }
   ```

2. **blockHiddenが設定されている**
   ```typescript
   // 確認: blockHidden=1 が無いかチェック
   ```

3. **アノテーションの構文エラー**
   ```typescript
   // ❌ 悪い: = が抜けている
   //% block"test"

   // ✅ 良い
   //% block="test"
   ```

### 12.2 パラメーターの順序がおかしい

**症状:** ブロック内のパラメーターが意図した順序で表示されない

**原因:** ブロックテキスト内の順序と関数定義の順序が異なる

**解決策:**
```typescript
// パラメーターは関数定義の順序に従う
//% block="put %num %item in slot %pos"
export function putItem(num: number, item: Block, pos: number) {
    // numが最初、itemが2番目、posが3番目
}
```

### 12.3 日本語が文字化けする

**症状:** 日本語のブロックテキストが文字化けする

**原因:** ファイルのエンコーディングがUTF-8でない

**解決策:**
- ファイルを UTF-8 (BOM無し) で保存
- VSCodeの場合: 右下のエンコーディング表示から変更可能

### 12.4 Enumのドロップダウンが出ない

**症状:** Enumを使っているのにドロップダウンリストが表示されない

**原因:** Enumの各値に `//% block` が無い

**解決策:**
```typescript
// ❌ 悪い
enum Direction {
    North,
    South
}

// ✅ 良い
enum Direction {
    //% block="北"
    North,
    //% block="南"
    South
}
```

### 12.5 座標が意図した場所に配置されない

**症状:** ブロックが変な場所に置かれる

**原因:**
1. 相対座標とワールド座標を混同している
2. エージェントの向きを考慮していない
3. Y座標の扱いミス（足元は Y-1）

**解決策:**
```typescript
// 相対座標を使う場合は向きを取得
let orientation = agent.getOrientation();
let worldPos = relativeToWorld(baseX, baseY, baseZ, offsetX, offsetY, orientation);

// 足元のブロックはY-1
blocks.place(GRASS, world(x, y - 1, z));
```

### 12.6 Shadow Blockが機能しない

**症状:** `.shadow` を指定しているのにデフォルトブロックが表示されない

**原因:** shadow名が間違っている、または存在しないshadowを指定

**解決策:**
```typescript
// 正しいshadow名を使う
//% message.shadow=text              // ✅ テキスト
//% block.shadow=minecraftBlock      // ✅ ブロック選択
//% pos.shadow=minecraftCreatePosition  // ✅ 座標
```

### 12.7 ビルドエラーが出る

**症状:** TypeScriptのコンパイルエラー

**よくある原因:**

1. **型の不一致**
   ```typescript
   // ❌ 悪い
   let num: number = "hello";

   // ✅ 良い
   let num: number = 42;
   ```

2. **未定義の変数**
   ```typescript
   // 変数を使う前に宣言
   let x: number;
   x = 10;
   ```

3. **セミコロン忘れ**
   ```typescript
   // セミコロンを付ける（推奨）
   player.say("Hello");
   ```

---

## アノテーション完全リファレンス

### ブロック定義系

| アノテーション | 必須 | 説明 | 例 |
|--------------|------|------|-----|
| `block` | ⭐ | ブロックテキスト | `block="say %msg"` |
| `blockId` |  | 一意識別子 | `blockId=minecraftSay` |
| `blockNamespace` |  | 配置先名前空間 | `blockNamespace=positions` |
| `blockHidden` |  | 非表示化 | `blockHidden=1` |
| `blockBuiltin` |  | 組み込みブロック | `blockBuiltin=true` |
| `blockAliasFor` |  | エイリアス | `blockAliasFor="Array.push"` |

### パラメーター系

| アノテーション | 説明 | 例 |
|--------------|------|-----|
| `.shadow` | Shadow Block | `msg.shadow=text` |
| `.defl` | デフォルト値 | `msg.defl="Hi"` |
| `.fieldEditor` | カスタムエディタ | `color.fieldEditor="colornumber"` |
| `.fieldOptions` | エディタオプション | `color.fieldOptions.columns=4` |

### レイアウト系

| アノテーション | 説明 | 例 |
|--------------|------|-----|
| `weight` | 表示順序 | `weight=100` |
| `blockGap` | 下の空白 | `blockGap=60` |
| `group` | サブグループ | `group="Modify"` |
| `inlineInputMode` | 入力配置 | `inlineInputMode="inline"` |
| `blockExternalInputs` | 外部入力 | `blockExternalInputs=1` |
| `expandArgumentsInToolbox` | 引数展開 | `expandArgumentsInToolbox` |

### 名前空間系

| アノテーション | 説明 | 例 |
|--------------|------|-----|
| `color` | カテゴリ色 | `color=#ffa500` |
| `icon` | アイコン | `icon="\uf1b9"` |
| `block` | 表示名 | `block="カテゴリ名"` |
| `weight` | 表示順序 | `weight=1000` |
| `advanced` | 上級者向け | `advanced=true` |
| `groups` | グループ定義 | `groups='["basic","advanced"]'` |

### 高度な機能系

| アノテーション | 説明 | 例 |
|--------------|------|-----|
| `help` | ヘルプリンク | `help=agent/turn` |
| `async` | 非同期関数 | `async` |
| `promise` | Promise返却 | `promise` |
| `shim` | ネイティブ呼出 | `shim=Array_::length` |
| `emitAsConstant` | 定数化 | `emitAsConstant` |
| `blockIdentity` | アイデンティティ | `blockIdentity="events._method"` |
| `deprecated` | 非推奨 | `deprecated` |
| `colorSecondary` | 2次色 | `colorSecondary="#FFF"` |
| `jres` | リソース | `jres alias=GRASS` |
| `enumval` | Enum値 | `enumval=2` |

---

## ベストプラクティス

### コード構造

1. **Enumは最初に定義**
2. **関数は必ずexport（ヘルパー関数以外）**
3. **1つの名前空間に関連する機能をまとめる**
4. **weightで論理的な順序を保つ**

### 命名規則

- **Enum値**: 内部名は短く、表示名は分かりやすく
- **関数名**: キャメルケース推奨
- **変数名**: 分かりやすい英語または日本語

### パフォーマンス

1. **blocks.fillを活用** - ループでplace()より高速
2. **loops.pause()** で適切な待機時間を設定
3. **大量データは名前空間のグローバル変数で管理**

### デバッグ

```typescript
// デバッグ用メッセージ
player.say(`X: ${x}, Y: ${y}, Z: ${z}`);
player.say(`向き: ${orientation}`);
```

---

## 参考リソース

- **MakeCode公式ドキュメント**: https://makecode.com/defining-blocks
- **TypeScript公式**: https://www.typescriptlang.org/
- **プロジェクトのcore定義**: `references/core/` ディレクトリ
- **Minecraft Education**: https://education.minecraft.net/

---

このドキュメントは `custome.ts` および `references/core/` の実装を基に作成されています。
