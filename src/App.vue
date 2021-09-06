<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Medium Like Blog (Vue + Vite)',
  meta: [
    { name: 'description', content: 'A Medium like blog using Vue 3 + Vite + Typescript etc.' },
  ],
})
</script>

<template>
  <router-view />
</template>
