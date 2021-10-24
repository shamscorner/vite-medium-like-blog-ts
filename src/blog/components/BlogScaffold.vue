<script setup lang="ts">
window.scrollTo(0, 0)

const router = useRouter()

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
  twitterUsername: string
}
const props = withDefaults(defineProps<Prop>(), {
  twitterUsername: '',
})

const isUrlCopied = ref(false)
const articleFullPath = computed(() => `${window.location.origin}${router.currentRoute.value.path}`)

const copyToClipboard = () => {
  navigator.clipboard.writeText(articleFullPath.value)
  isUrlCopied.value = true
}

// page meta information
useHead({
  title: props.title,
  meta: [
    { name: 'description', content: props.description },
    { name: 'og:type', content: 'article' },
    { name: 'og:url', content: articleFullPath.value },
    { name: 'og:title', content: props.title },
    { name: 'og:description', content: props.description },
    { name: 'og:image', content: props.cover.img },
    { name: 'twitter:url', content: articleFullPath.value },
    { name: 'twitter:title', content: props.title },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: props.cover.img },
    { name: 'article:published_time', content: props.createdAt },
    { name: 'twitter:label1', content: 'Written by' },
    { name: 'twitter:data1', content: props.author.name },
  ],
  link: [
    {
      rel: 'canonical',
      href: articleFullPath.value,
    },
  ],
})
</script>

<template>
  <div>
    <!-- article title -->
    <h2 style="margin-top: 20px; margin-bottom: 10px;">{{ props.title }}</h2>

    <!-- article description -->
    <p
      class="text-gray-500 sm:text-lg dark:text-gray-400"
      style="margin-top: 0px; margin-bottom: 5px"
      v-html="props.description"
    ></p>

    <!-- article meta information -->
    <div class="flex mt-3 mb-5 items-center justify-between text-xs sm:text-sm">
      <!-- author, date, read-time -->
      <div class="flex items-center space-x-2">
        <div v-if="props.author" class="relative flex items-center space-x-3 cursor-default group">
          <div class="w-12 h-12 rounded-full">
            <img
              :src="props.author.profileImage"
              alt="Me"
              width="100%"
              height="100%"
              class="w-full h-full object-cover rounded-full"
              style="margin: 0px"
            />
          </div>
          <div class="text-teal-500">{{ props.author.name }}</div>

          <div
            class="absolute hidden left-0 top-12 p-4 bg-white border shadow-lg group-hover:block z-20 sm:(left-10 top-10) rounded-tr-md rounded-bl-md rounded-br-md dark:bg-dark-200"
          >
            {{ props.author.about }}
            <ul>
              <li v-for="(link, index) in props.author.links" :key="index">
                <a :href="link">{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div>&bull;</div>
        <div>{{ props.createdAt }}</div>
        <div>&bull;</div>
        <div>{{ props.readTime }} read</div>
      </div>
      <!-- share options -->
      <div class="relative group">
        <button
          class="text-gray-500 transition rounded hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-4"
        >
          <carbon-link class="w-6 h-6" />
        </button>
        <div
          class="absolute top-0 right-0 z-50 hidden p-4 transition bg-white dark:bg-dark-200 border border-gray-200 rounded shadow-xl group-hover:block"
        >
          <ShareNetwork
            network="twitter"
            :url="articleFullPath"
            :title="props.title"
            :description="props.description"
            twitter-user="shamscorner"
          >
            <DropdownItem class="my-3">
              <mdi-twitter class="w-5 h-5" />
              <div>Twitter</div>
            </DropdownItem>
          </ShareNetwork>
          <ShareNetwork
            network="facebook"
            :url="articleFullPath"
            :title="props.title"
            :description="props.description"
            twitter-user="shamscorner"
          >
            <DropdownItem class="my-3">
              <mdi-facebook class="w-5 h-5" />
              <div>Facebook</div>
            </DropdownItem>
          </ShareNetwork>
          <DropdownItem class="my-3" @click="copyToClipboard">
            <mdi-check-circle v-if="isUrlCopied" class="w-5 h-5" />
            <mdi-content-copy v-else class="w-5 h-5" />
            <div>{{ isUrlCopied ? 'Copied' : 'Copy' }}</div>
          </DropdownItem>
        </div>
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
      >{{ props.cover.alt }}</div>
    </div>
  </div>
</template>
