# Scripts ディレクトリ

プロジェクトの自動化スクリプト集です。

## update-tsconfig.js

tsconfigに含まれていないTypeScriptファイルを検知して自動追加するスクリプトです。

### 機能

- プロジェクト内のすべての `.ts` ファイルを再帰的にスキャン
- 現在の `tsconfig.json` の `include` パターンと照合
- 含まれていないファイルを検出してリスト表示
- 確認後、自動的に `tsconfig.json` を更新

### 使い方

#### 対話モード（推奨）

```bash
npm run update-tsconfig
```

または

```bash
node scripts/update-tsconfig.js
```

実行すると、以下のように動作します：

1. プロジェクト内のTypeScriptファイルをスキャン
2. 現在のincludeパターンを表示
3. 含まれていないファイルをリスト表示
4. 追加するか確認を求める（y/N）
5. 承認すると `tsconfig.json` を更新

#### 自動モード

確認なしで自動実行する場合：

```bash
npm run update-tsconfig:auto
```

または

```bash
AUTO_APPROVE=true node scripts/update-tsconfig.js
```

### 実行例

```
🔍 TypeScriptファイルをスキャン中...

📋 現在のincludeパターン:
   - custome.ts
   - main.ts
   - references/**/*.ts
   - references/**/*.d.ts

📁 見つかったTypeScriptファイル: 25件

⚠️  tsconfigに含まれていないファイル: 2件
   - test.ts
   - utils/helper.ts

これらのファイルをtsconfigに追加しますか？
自動実行する場合: AUTO_APPROVE=true node scripts/update-tsconfig.js

追加しますか？ (y/N): y

✅ tsconfig.jsonを更新しました！

📋 更新後のinclude:
   - custome.ts
   - main.ts
   - references/**/*.ts
   - references/**/*.d.ts
   - test.ts
   - utils/helper.ts
```

### 除外設定

以下のディレクトリは自動的にスキャン対象外となります：

- `node_modules`
- `.git`
- `dist`
- `build`
- `scripts`

また、`.d.ts` ファイルは `references/**/*.d.ts` パターンでカバーされるため、個別には追加されません。

### CI/CDでの使用

GitHub ActionsやCI/CD環境で使用する場合：

```yaml
- name: Check TypeScript files
  run: npm run update-tsconfig:auto

- name: Verify no changes
  run: git diff --exit-code tsconfig.json
```

これにより、tsconfigに含まれていないファイルがある場合、CIが失敗します。

### カスタマイズ

スクリプトの動作を変更したい場合は、`update-tsconfig.js` の以下の定数を編集してください：

```javascript
const EXCLUDED_DIRS = ['node_modules', '.git', 'dist', 'build', 'scripts'];
const TS_EXTENSIONS = ['.ts', '.tsx'];
```

## update-mkcd.js

MakeCode プロジェクトファイル (`.mkcd`) に `custome.ts` を追加・更新するスクリプトです。

### 機能

- `.mkcd` ファイル（LZMA圧縮されたJSON）を自動的に展開
- 現在の `custome.ts` の内容を `.mkcd` プロジェクトに追加または更新
- `pxt.json` の `files` 配列にも自動的に追加
- 元のファイルをバックアップしてから更新
- 更新後の内容を検証

### 使い方

```bash
node scripts/update-mkcd.js <mkcd-file-path>
```

#### 例

```bash
# .mkcdファイルにcustome.tsを追加
node scripts/update-mkcd.js minecraft-カスタムエディタブラッシュアップ用.mkcd
```

### 必要な依存関係

- `p7zip-full` (7z コマンド)
- `lzma` (LZMA圧縮)

Ubuntu/Debian でのインストール:
```bash
sudo apt-get install p7zip-full lzma
```

### 実行例

```
📦 .mkcdファイルを展開中...
📖 プロジェクトデータを読み込み中...
📝 custome.tsを追加中...
  ✓ pxt.jsonのfilesリストに追加
🗜️  LZMA形式で圧縮中...
💾 元のファイルをバックアップ中...
✏️  .mkcdファイルを更新中...

🔍 更新結果を検証中...

📋 ファイル一覧:
  - README.md
  - main.blocks
  - main.ts
  - pxt.json
  ✓ custome.ts (40588 文字)

✅ 完了！
   更新されたファイル: minecraft-カスタムエディタブラッシュアップ用.mkcd
   バックアップ: minecraft-カスタムエディタブラッシュアップ用.mkcd.backup

🧹 一時ファイルをクリーンアップ中...
```

### 処理の流れ

1. `.mkcd` ファイルを7zで展開してJSONデータを取得
2. `custome.ts` の内容を読み込み
3. プロジェクトデータに `custome.ts` を追加
4. `pxt.json` の `files` リストを更新
5. LZMA形式で再圧縮
6. 元のファイルをバックアップ（`.backup` 拡張子）
7. 元のファイルを更新版で置き換え
8. 内容を検証して結果を表示
9. 一時ファイルをクリーンアップ

### 注意事項

- スクリプト実行前に元のファイルは自動的にバックアップされます（`.backup` 拡張子が付きます）
- バックアップは上書きされるため、重要な場合は別途保存してください
- `.mkcd` ファイルは MakeCode の特殊なフォーマット（LZMA圧縮されたJSON）です

## その他のスクリプト

今後、必要に応じて他の自動化スクリプトを追加できます：

- `validate-annotations.js` - MakeCodeアノテーションの検証
- `generate-docs.js` - ドキュメント自動生成
- `check-naming.js` - 命名規則のチェック

など

````
