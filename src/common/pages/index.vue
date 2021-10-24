<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="mt-10">
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a
        rel="noreferrer"
        href="https://github.com/antfu/vitesse"
        target="_blank"
        class="underline"
      >Vitesse</a>
    </p>
    <p class="mt-4 max-w-md mx-auto">
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <div class="py-4" />

    <div>
      <router-link to="/blog" class="m-3 text-sm btn">{{ t('button.my-blog') }}</router-link>
    </div>
  </div>
</template>
