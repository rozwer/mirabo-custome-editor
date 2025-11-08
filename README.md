# Mirabo Custom Editor

MakeCode for Minecraft用のカスタムブロック拡張プロジェクトです。

## 📁 プロジェクト構成

```
mirabo-custome-editor/
├── custome.ts              # カスタムブロック定義（メイン）
├── main.ts                 # 実行時コード
├── tsconfig.json           # TypeScript設定
├── package.json            # プロジェクト設定
├── MAKECODE_KNOWHOW.md     # MakeCode開発ノウハウ（完全ガイド）
├── references/             # 型定義ファイル
│   └── core/              # Minecraft MakeCode コア定義
├── scripts/               # 自動化スクリプト
    ├── update-tsconfig.js # tsconfig自動更新スクリプト
    ├── update-mkcd.js     # .mkcdファイル更新スクリプト
    └── README.md          # スクリプトの使い方
```

## 🚀 クイックスタート

### 必要な環境

- Node.js (v14以上)
- npm または yarn

### セットアップ

```bash
# 依存関係のインストール
npm install

# TypeScriptファイルのチェック
npm run update-tsconfig

# TypeScriptの型チェック
npx tsc --noEmit
```

## 📚 ドキュメント

### [MAKECODE_KNOWHOW.md](MAKECODE_KNOWHOW.md)

TypeScript初心者およびMakeCode開発初心者向けの総合ガイドです。以下の内容を網羅しています：

#### 基礎編
1. MakeCodeの基本概念
2. アノテーションシステム
3. ブロック定義の基本

#### アノテーション完全リファレンス
4. ブロック定義アノテーション
5. パラメーター修飾子（13種類のfieldEditorを含む）
6. レイアウト制御
7. 名前空間とカテゴリ
8. 高度な機能

#### 実践編
9. Enumとドロップダウン
10. 座標系とPosition
11. 実装パターン集（7つの典型パターン）
12. トラブルシューティング（7つの一般的問題と解決策）

## 🛠️ 開発ワークフロー

### 1. 新しいブロックの追加

`custome.ts` に新しい関数を追加します：

```typescript
//% weight=100 color=#ffa500 block="マイカテゴリ"
namespace マイカテゴリ {
    //% block="こんにちは %name"
    export function sayHello(name: string): void {
        player.say(`こんにちは、${name}さん！`);
    }
}
```

### 2. TypeScriptファイルの管理

新しい `.ts` ファイルを追加した場合、以下のコマンドで自動的に `tsconfig.json` に追加できます：

```bash
# 対話モード（確認あり）
npm run update-tsconfig

# 自動モード（確認なし）
npm run update-tsconfig:auto
```

### 3. 型チェック

```bash
# TypeScriptの型チェック
npx tsc --noEmit
```

## 📖 主要ファイルの説明

### custome.ts

カスタムブロックの定義ファイルです。以下のような名前空間が含まれています：

- **ブロック設置** - エージェントのカバン操作、ブロック設置
- **エージェント操作** - エージェントの移動、回転、プレイヤーとの同期
- **先生用** - 課題生成、迷路作成
- **遊び用カテゴリ** - 家、マンション、エレベーター、動物園の建設

### main.ts

実行時のコードです。プレイヤーのアクション（アイテム使用、矢の発射など）に対するイベントハンドラが定義されています：

- アイテム使用時の特殊効果
- 矢のテレポート機能
- スライムブロック上での浮遊効果
- など

### references/core/

Minecraft MakeCodeのコア型定義ファイルです。以下が含まれます：

- `enum.d.ts` - Block, Item, Mob などの定義
- `pxt-core.d.ts` - 基本的な型定義
- `agent.ts`, `blocks.ts`, `player.ts` など - API定義

## 🔧 スクリプト

### update-tsconfig

プロジェクト内の全TypeScriptファイルをスキャンし、`tsconfig.json` の `include` に含まれていないファイルを検出・追加します。

### update-mkcd

MakeCode プロジェクトファイル (`.mkcd`) に `custome.ts` を追加・更新します。

```bash
# .mkcdファイルにcustome.tsを追加
node scripts/update-mkcd.js minecraft-カスタムエディタブラッシュアップ用.mkcd
```

このスクリプトは以下を自動的に行います：
- `.mkcd` ファイルを展開
- `custome.ts` の内容を追加
- `pxt.json` の `files` リストを更新
- 元のファイルをバックアップ（`.backup` 拡張子）
- LZMA形式で再圧縮して元のファイルを置き換え

詳細は [scripts/README.md](scripts/README.md) を参照してください。

## 📝 開発のヒント

### よく使うアノテーション

```typescript
// ブロックテキスト定義
//% block="say %message"

// デフォルト値
//% message.defl="Hello"

// Shadow Block
//% message.shadow=text

// 表示順序（大きいほど上）
//% weight=100

// グループ化
//% group="Modify"

// ヘルプリンク
//% help=player/say
```

### Enumの定義

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

### 座標の扱い

```typescript
// プレイヤーの位置取得
let pos = player.position();
let x = pos.getValue(Axis.X);
let y = pos.getValue(Axis.Y);
let z = pos.getValue(Axis.Z);

// ワールド座標
world(x, y, z)

// 相対座標
pos(x, y, z)  // ~x ~y ~z
```

## 🐛 トラブルシューティング

### ブロックが表示されない

1. `export` キーワードが付いているか確認
2. `blockHidden=1` が設定されていないか確認
3. アノテーションの構文エラーがないか確認

### 型エラーが出る

```bash
# tsconfigにファイルが含まれているか確認
npm run update-tsconfig

# 型チェック
npx tsc --noEmit
```

### 日本語が文字化けする

ファイルのエンコーディングを UTF-8 (BOM無し) で保存してください。

## 📄 ライセンス

ISC

## 🔗 リンク

- [MakeCode for Minecraft](https://minecraft.makecode.com/)
- [MakeCode公式ドキュメント](https://makecode.com/defining-blocks)
- [TypeScript公式](https://www.typescriptlang.org/)
- [Minecraft Education](https://education.minecraft.net/)

## Git使用ガイド（初心者向け）

### 基本的なワークフロー

このプロジェクトでは以下の流れで開発を進めます：

1. ブランチを作成する
2. mainブランチの最新状態を取得する
3. 自分のブランチで作業する
4. mainブランチの変更を自分のブランチに取り込む
5. プルリクエストを作成する
6. 管理者がレビューしてmainにマージする

### 1. 最初の設定

```bash
# リポジトリをクローン
git clone https://github.com/rozwer/mirabo-custome-editor.git
cd mirabo-custome-editor
```

### 2. ブランチを作成する

```bash
# 現在のブランチを確認
git branch

# 新しいブランチを作成して切り替える
git checkout -b feature/your-feature-name

# 例：新しい機能を追加する場合
git checkout -b feature/add-new-block

# 例：バグを修正する場合
git checkout -b fix/bug-description
```

### 3. mainブランチの最新状態を取得する

作業を始める前や、作業中に定期的にmainブランチの最新状態を取得します。

```bash
# リモートリポジトリの最新情報を取得（ダウンロードのみ）
git fetch origin

# mainブランチに切り替えて最新状態にする
git checkout main
git pull origin main

# 自分の作業ブランチに戻る
git checkout feature/your-feature-name
```

### 4. 変更を記録する

```bash
# 変更されたファイルを確認
git status

# 特定のファイルをステージングエリアに追加
git add custome.ts

# 全ての変更をステージングエリアに追加
git add .

# 変更をコミット（記録）する
git commit -m "コミットメッセージ：何を変更したか"

# 例
git commit -m "新しいブロックを追加"
```

### 5. mainブランチの変更を自分のブランチに取り込む

他の人がmainブランチに変更を加えた場合、それを自分のブランチに取り込みます。

```bash
# まずmainブランチの最新状態を取得
git fetch origin

# 自分のブランチにいることを確認
git branch

# mainブランチの変更を自分のブランチにマージ
git merge origin/main

# もしコンフリクト（競合）が発生したら：
# 1. コンフリクトしているファイルを編集して解決
# 2. 解決したファイルをadd
# 3. コミットして完了
git add <コンフリクトを解決したファイル>
git commit -m "mainブランチの変更をマージ"
```

### 6. リモートリポジトリにプッシュする

```bash
# 初めてプッシュする場合（ブランチを作成してリモートに送る）
git push -u origin feature/your-feature-name

# 2回目以降のプッシュ
git push
```

### 7. プルリクエスト（PR）を作成する

1. GitHubのリポジトリページ（https://github.com/rozwer/mirabo-custome-editor）にアクセス
2. "Pull requests" タブをクリック
3. "New pull request" ボタンをクリック
4. base: `main` ← compare: `feature/your-feature-name` を選択
5. タイトルと説明を記入
6. "Create pull request" ボタンをクリック

### よく使うGitコマンド一覧

#### 状態確認

```bash
# 現在の変更状況を確認
git status

# 現在のブランチを確認
git branch

# コミット履歴を確認
git log

# 簡潔なコミット履歴
git log --oneline

# 変更内容の差分を確認
git diff
```

#### ブランチ操作

```bash
# ブランチ一覧を表示
git branch

# 新しいブランチを作成
git branch feature/new-feature

# ブランチを切り替え
git checkout feature/new-feature

# ブランチを作成して切り替え（上記2つを同時に実行）
git checkout -b feature/new-feature

# ブランチを削除
git branch -d feature/old-feature
```

#### 変更の取り消し

```bash
# 作業ディレクトリの変更を取り消す（まだaddしていない変更）
git checkout -- <ファイル名>

# ステージングエリアから取り消す（addを取り消す）
git reset HEAD <ファイル名>

# 直前のコミットを取り消す（変更は残る）
git reset --soft HEAD^

# 直前のコミットを取り消す（変更も取り消す）※注意：変更が消えます
git reset --hard HEAD^

# 特定のコミットまで戻る（変更も取り消す）※注意：変更が消えます
git reset --hard <コミットID>
```

#### リモート操作

```bash
# リモートリポジトリの情報を取得（ダウンロードのみ）
git fetch origin

# リモートブランチの最新状態を取得して現在のブランチにマージ
git pull origin main

# ローカルの変更をリモートに送信
git push origin feature/your-feature-name

# 強制プッシュ（※注意：他の人の変更を上書きする可能性があります）
git push -f origin feature/your-feature-name
```

### トラブルシューティング

#### コミットメッセージを間違えた

```bash
# 直前のコミットメッセージを修正
git commit --amend -m "新しいコミットメッセージ"
```

#### 間違ったブランチで作業してしまった

```bash
# 変更をstash（一時保存）する
git stash

# 正しいブランチに切り替える
git checkout correct-branch

# 変更を適用する
git stash pop
```

#### マージのコンフリクトが発生した

1. `git status` でコンフリクトしているファイルを確認
2. ファイルを開いて `<<<<<<<`, `=======`, `>>>>>>>` で囲まれた部分を編集
3. 必要な変更を残して、マーカーを削除
4. `git add <ファイル名>` でステージング
5. `git commit` でコミット完了

#### プッシュが拒否された

```bash
# リモートの変更を先に取り込む
git pull origin feature/your-feature-name

# コンフリクトがあれば解決してから再度プッシュ
git push origin feature/your-feature-name
```

### ベストプラクティス

1. **こまめにコミットする**：小さな単位で変更をコミットすることで、問題が起きたときに戻しやすくなります
2. **わかりやすいコミットメッセージを書く**：後から見たときに何を変更したかわかるように
3. **作業前にpullする**：最新の状態で作業を始めることでコンフリクトを減らせます
4. **mainブランチで直接作業しない**：必ずブランチを作成して作業します
5. **定期的にmainブランチの変更を取り込む**：大きなコンフリクトを避けるため

### 参考リンク

- [Git公式ドキュメント](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/ja)
- [サルでもわかるGit入門](https://backlog.com/ja/git-tutorial/)