---
title: A Modular Architecture Pattern in Vue 3 Project (Vite + Typescript)
description: If you are really into the <a href="https://github.com/antfu/vitesse">Vitesse</a> starter template created by Anthony Fu (Vue core team member) but want to use the modular architectural pattern instead of monolithic architecture, then you can clone this repo and use your own project.
cover:
  img: https://user-images.githubusercontent.com/11247099/111864893-a457fd00-899e-11eb-9f05-f4b88987541d.png
  alt: Opinionated Vite + Typescript starter template with modular architecture pattern.
author:
  name: Shamim Hossain
  profileImage: /me.webp
  about: Full-stack Web & Mobile developer (Laravel, Vue/Nuxt, Node, Flutter) | Computer Science Engineer | Tech Enthusiast
  links:
    - https://www.linkedin.com/in/shamscorner
    - https://www.facebook.com/shamscorner
    - https://twitter.com/shamscorner
    - mailto:hossains159@gmail.com
readTime: 5 mins
createdAt: September 6, 2021
---

<Navbar />
<BlogScaffold
  :title="frontmatter.title" 
  :description="frontmatter.description" 
  :author="frontmatter.author"
  :cover="frontmatter.cover"
  :read-time="frontmatter.readTime"
  :created-at="frontmatter.createdAt"
  twitter-username="shamscorner"
/>

### 👋 Hi Vuers!

If you are really into the [Vitesse](https://github.com/antfu/vitesse) (Vite + Vue3 + Typescript + Pinia + auto import + layouts + pages + icons + pnpm + file based routing + pwa + windicss(tailwindcss) + icons + i18n + markdown + ssg + critical css, and many more) starter template created by [Anthony Fu](https://github.com/antfu) (Vue core team member) but want to use the [modular architectural pattern](https://en.wikipedia.org/wiki/Module_pattern) instead of [monolithic architecture](https://en.wikipedia.org/wiki/Monolithic_application), then you can clone the following repo and use your own project. I have changed some of the setups in the [Vitesse](https://github.com/antfu/vitesse) repo and created my own architecture ([modular approach](https://en.wikipedia.org/wiki/Module_pattern)). I am loving it so far and have used some of my projects.

- [Github repository link](https://github.com/shamscorner/vitesse-stackter-clean-architect)
- [live demo](https://vite-vue3-clean-arch.netlify.app/)

### Quick Overview

First thing you will notice there are no `components/`, `pages/`, `stores/`, `styles/` folders under the `src/` folder. You will see,

- `common/`
- `orders/`
- `users/`

and that's it. Everything has been moved into the `common/` folder (global settings). The `orders/` and `users/` folders are more like modules ([modular architecture](https://en.wikipedia.org/wiki/Module_pattern)). In this project, I have made a demo order process using these two modules but in your case, you will delete everything other than the `common/` folder. You will add a new module whenever you need it without breaking any changes. The main advantage you can see is that you don't have to jump around different folders to implement a feature that is completely separate from other features ([separation of concern](https://en.wikipedia.org/wiki/Separation_of_concerns)). You can add the following folders in each module without any manual imports,

- `components/`
- `modules/`
- `pages/`
- `stores/`

I will highly recommend you to try [Vitesse](https://github.com/antfu/vitesse) using [monolithic architecture](https://en.wikipedia.org/wiki/Monolithic_application) first. Then you can move to my repo https://github.com/shamscorner/vitesse-stackter-clean-architect when you feel comfortable.

Have fun! 🙂
