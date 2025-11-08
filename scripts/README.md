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

## その他のスクリプト

今後、必要に応じて他の自動化スクリプトを追加できます：

- `validate-annotations.js` - MakeCodeアノテーションの検証
- `generate-docs.js` - ドキュメント自動生成
- `check-naming.js` - 命名規則のチェック

など
