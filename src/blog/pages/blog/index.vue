<script setup lang="ts">
import data from './data.json'
const { t } = useI18n()

interface Article {
  title: string
  description: string
  cover: {
    img: string
    alt?: string
  }
  createdAt: string
  slug: string
}

const dataArticles: Article[] = data

const articles = ref(dataArticles)
const heroArticle = ref(dataArticles.length > 0 ? dataArticles[0] : null)
</script>

<template>
  <div>
    <h1 class="mx-3 mt-8 text-4xl font-bold sm:text-5xl text-gold-dark">
      <span class="text-green-500">{{ t('my') }}</span> Blog
    </h1>
    <div class="w-40 h-2 mt-3 mb-8 ml-3 rounded-full bg-gold-dark"></div>
    <!-- latest blog -->
    <section v-if="heroArticle" class="px-3 sm:px-0">
      <router-link
        :to="`/blog/${heroArticle.slug}`"
        class="px-3 mx-auto rounded sm:(items-center max-w-6xl space-x-6 flex group) focus:(outline-none ring-2 ring-gray-300 ring-offset-2 dark:ring-teal-400 dark:ring-offset-0)"
      >
        <!-- large screen hero image -->
        <img
          :src="heroArticle.cover.img"
          :alt="heroArticle.cover.alt"
          class="hidden object-cover w-3/5 sm:block"
          width="60%"
        />
        <!-- small screen hero image -->
        <div class="aspect-w-16 aspect-h-10 sm:hidden">
          <img
            :src="heroArticle.cover.img"
            :alt="heroArticle.cover.alt"
            class="object-cover w-full h-full"
          />
        </div>
        <div>
          <div class="mt-5 text-sm text-gray-500 sm:mt-0">{{ heroArticle.createdAt }}</div>
          <div
            class="my-4 text-3xl font-bold text-gray-700 dark:text-gray-400 group-hover:underline"
          >{{ heroArticle.title }}</div>
          <div class="text-gray-600 dark:text-gray-500" v-html="heroArticle.description"></div>
        </div>
      </router-link>
    </section>

    <!-- previous blogs -->
    <section
      v-if="articles.length > 0"
      class="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      <router-link
        v-for="article in articles"
        :key="article.slug"
        :to="`/blog/${article.slug}`"
        class="p-4 rounded group focus:(outline-none ring-2 ring-gray-300 ring-offset-2 dark:ring-teal-400 dark:ring-offset-0)"
      >
        <div class="aspect-w-16 aspect-h-10">
          <img
            :src="article.cover.img"
            :alt="article.cover.alt"
            width="100%"
            height="100%"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="mt-3 text-xs text-gray-500">{{ article.createdAt }}</div>
        <div
          class="my-2 text-lg font-bold text-gray-700 dark:text-gray-400 group-hover:underline"
        >{{ article.title }}</div>
        <div class="text-sm text-gray-600 dark:text-gray-500" v-html="article.description"></div>
      </router-link>
    </section>
    <!-- no blog posts -->
    <section v-else class="text-gray-500 text-xl">No blog posts available!</section>
  </div>
</template>
