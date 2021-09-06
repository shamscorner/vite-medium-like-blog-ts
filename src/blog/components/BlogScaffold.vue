<template>
  <div>
    <!-- article title -->
    <h2 style="margin-top: 20px; margin-bottom: 10px;">
      {{ props.title }}
    </h2>

    <!-- article description -->
    <p
      class="text-gray-500 sm:text-lg dark:text-gray-400"
      style="margin-top: 0px; margin-bottom: 5px"
      v-html="props.description"
    ></p>

    <!-- article meta information -->
    <div
      class="flex items-center justify-between"
      text="xs sm:sm"
      m="t-3 b-5"
    >
      <!-- author, date, read-time -->
      <div class="flex items-center space-x-2">
        <div
          v-if="props.author"
          class="relative flex items-center space-x-3 cursor-default group"
        >
          <div
            class="rounded-full"
            w="12"
            h="12"
          >
            <img
              :src="props.author.profileImage"
              alt="Me"
              width="100%"
              height="100%"
              class="object-cover rounded-full"
              w="full"
              h="full"
              style="margin: 0px"
            />
          </div>
          <div text="teal-500">
            {{ props.author.name }}
          </div>

          <div
            class="absolute hidden border shadow-lg group-hover:block"
            left="0 sm:10"
            z="20"
            p="4"
            bg="white dark:dark-200"
            shadow="lg"
            top="12 sm:10"
            rounded="tr-md bl-md br-md"
          >
            {{ props.author.about }}
            <ul>
              <li v-for="(link, index) in props.author.links" :key="index">
                <a :href="link">
                  {{ link }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>&bull;</div>
        <div>
          {{ props.createdAt }}
        </div>
        <div>&bull;</div>
        <div>{{ props.readTime }} read</div>
      </div>
    </div>

    <!-- cover image -->
    <div>
      <div class="aspect-w-16 aspect-h-10">
        <img
          :src="props.cover.img"
          :alt="props.cover.alt"
          width="100%"
          height="100%"
          class="object-contain w-full h-full"
          style="margin: 0"
        />
      </div>
      <div
        v-if="props.cover.alt"
        class="mt-2 text-xs font-thin text-center text-gray-600"
      >
        {{ props.cover.alt }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Author {
  name: string
  profileImage: string
  about: string
  links: [string]
}
interface CoverImage {
  img: string
  alt: string
}
interface Prop {
  title: string
  description: string
  author: Author
  createdAt: string
  readTime: string
  cover: CoverImage
}
const props = defineProps<Prop>()
</script>
