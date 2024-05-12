# 環境構築手順
## npmのインストール
[参考サイト](https://qiita.com/mk185/items/7ad004bf202f400daea1)をみてやってみてください
できなかったら教えてください。

## アプリの起動
macの人はterminal, windowsの人はcommand promptに以下のコマンドを打ってください
> npm install
> 
> npm run dev

これで立ち上がります。


## コード修正をするときには？
自分の担当するページのファイルを見つけてください。
> srcフォルダ>pagesフォルダ>{ページのファイル名}.astro

が該当ページです。
書き方はHTML / CSSなので多分みたらわかるのですが、一緒にやりましょう。

## 作業開始するときに
1. vscodeの左下のブランチボタンを押して、自分のブランチを作成してから作業を開始する
2. 自分が担当するページを探す
3. ターミナルでnpm run devとうち、出てきたurlをクリックする＝現在の見た目が確認できる
4. HTML部分は<Layout>タグの中に書く、CSS部分は<style>タグの中に書く

   


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
