<script setup lang="ts">
const email = ref('john@example.com')
const isAvailable = ref(true)
const availableText = computed(() => isAvailable.value ? 'I\'m available' : 'I\'m not available')
</script>

<template>
  <nav
    class="flex mx-auto px-4 py-2.5 justify-between items-center sticky top-0 max-w-7xl rounded-full bg-gray-50 dark:bg-dark-400 shadow-sm border-b border-gray-100 dark:border-dark-500 z-50"
  >
    <!-- left container -->
    <div>
      <!-- mail info container -->
      <div class="flex pr-4 text-gray-500 items-center space-x-3 rounded-full">
        <router-link
          to="/"
          class="transition rounded-full p-2 border dark:border-dark-50 hover:(text-gray-800 dark:text-gray-300) focus:(outline-none ring-2 ring-teal-300)"
        >
          <carbon-campsite w="6" h="6" />
        </router-link>
        <div>
          <a
            :href="`mailto:${email}`"
            class="px-1 font-medium text-sm sm:text-base transition rounded-full hover:(text-gray-800 dark:text-gray-300) focus:(outline-none ring-2 ring-teal-300)"
            style="text-decoration: none;"
          >{{ email }}</a>
          <div
            class="block pl-1 text-xs sm:hidden"
            :class="[isAvailable ? 'text-green-700' : 'text-red-700']"
          >{{ availableText }}</div>
        </div>
        <router-link
          to="/blog"
          class="px-2 py-0.5 text-sm rounded-full transition ring-2 ring-teal-500 hover:(bg-teal-500 text-white) focus:(outline-none ring-2 ring-teal-300) dark:(bg-teal-500 text-white hover:bg-dark-300)"
          style="text-decoration: none;"
        >Blog</router-link>
      </div>
      <!-- end of mail info container-->
    </div>
    <!-- end of left container -->

    <!-- right container -->
    <div class="flex items-center space-x-2">
      <div
        class="hidden text-sm font-medium sm:block"
        :class="[isAvailable ? 'text-green-700' : 'text-red-700']"
      >{{ availableText }}</div>
      <router-link
        to="/"
        class="block text-gray-500 transition rounded-full sm:hidden hover:text-gray-600 focus:(outline-none ring-2 ring-gray-500 ring-offset-2)"
        aria-label="Let's talk"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clip-rule="evenodd"
          />
        </svg>
      </router-link>
      <a href="https://www.shamscorner.com/" target="_blank" class="hidden sm:block outline-none">
        <VButton>Let's Talk</VButton>
      </a>
    </div>
    <!-- end of right container -->
  </nav>
</template>
