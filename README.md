<p align='center'>
  <img src='https://raw.githubusercontent.com/shamscorner/images/main/vitesse-medium-blog.png' alt='A Medium like blog template made by Vue + Typescript + Dark mode' width='600'/>
</p>

<p align='center'>
Medium like blog template made with (Vue 3 + Typescript) with Dark mode.
</p>

<br>

<p align='center'>
<a href="https://vite-vue3-medium-blog.netlify.app/" target="_blank">Live Demo</a>
</p>

<br>

# Introduction

This template is made by [Vitesse](https://github.com/antfu/vitesse) starter template. It has a pretty great setup with markdown support out of the box. Check out the [github repository](https://github.com/antfu/vitesse) for more information.

## Usage

Clone this repository and install [pnpm](https://pnpm.io/)

```
git clone https://github.com/shamscorner/vite-medium-like-blog-ts.git
pnpm install
```

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Project structure

- src
  - blog
    - components
      - BlogScaffold.vue
    - pages
      - blog
        - data.json
        - index.vue
        - some-markdown-file-1.md
        - some-markdown-file-2.md
        - some-markdown-file-3.md
        - so on . . .
  - common

Follow the provided demo markdown file under `/src/blog/pages/blog/` to setup your article. If you need to change the default design, you can change in the `/src/blog/components/BlogScaffold.vue` file. Also don't forget to add the article index object into the `/src/blog/pages/blog/data.json` file. Modify the `data.json` file according to your articles. However, keep the object structure as mentioned in the `data.json` file. Finally, you can change the home blog page if you want. You will find the file in here, `/src/blog/pages/blog/index.vue`.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.
