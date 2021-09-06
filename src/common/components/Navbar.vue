<template>
  <nav
    class="
      flex
      justify-between items-center
      sticky
      top-0
      max-w-7xl
      rounded-full
    "
    m="x-auto"
    p="y-2.5 x-4"
    z="50"
    bg="gray-50 dark:dark-400"
    shadow="sm"
    border="b gray-100 dark:dark-500"
  >
    <!-- left container -->
    <div>
      <!-- mail info container -->
      <div
        class="flex items-center space-x-3 rounded-full"
        p="r-4"
        text="gray-500"
      >
        <router-link
          to="/"
          class="transition rounded-full focus:(outline-none ring-2 ring-teal-300)"
          p="2"
          hover="text-gray-800"
          border="~ dark:dark-50"
        >
          <carbon-campsite w="6" h="6" />
        </router-link>
        <div>
          <a
            :href="`mailto:${email}`"
            class="text-sm sm:text-base transition rounded-full focus:(outline-none ring-2 ring-teal-300)"
            p="x-1"
            font="medium"
            hover="text-gray-800"
            style="text-decoration: none;"
          >
            {{ email }}
          </a>
          <div
            class="block sm:hidden"
            :class="[isAvailable ? 'text-green-700' : 'text-red-700']"
            p="l-1"
            text="xs"
          >
            {{ availableText }}
          </div>
        </div>
        <router-link
          to="/blog"
          class="
            text-sm
            rounded-full
            transition
            focus:(outline-none ring-2 ring-teal-300)
          "
          p="x-2 y-0.5"
          hover="bg-gray-400 text-white dark:bg-dark-50"
          ring="2 teal-500"
          style="text-decoration: none;"
        >
          Blog
        </router-link>
      </div>
      <!-- end of mail info container-->
    </div>
    <!-- end of left container -->

    <!-- right container -->
    <div class="flex items-center space-x-2">
      <div
        class="hidden sm:block"
        :class="[isAvailable ? 'text-green-700' : 'text-red-700']"
        text="sm"
        font="medium"
      >
        {{ availableText }}
      </div>
      <router-link
        to="/"
        class="block text-gray-500 transition rounded-full  sm:hidden focus:(outline-none ring-2 ring-gray-500 ring-offset-2)"
        hover="text-gray-600"
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
      <router-link to="/" class="hidden sm:block outline-none">
        <VButton> Let's Talk </VButton>
      </router-link>
    </div>
    <!-- end of right container -->
  </nav>
</template>

<script setup lang="ts">
const email = ref('john@example.com')
const isAvailable = ref(true)
const availableText = computed(() => isAvailable.value ? 'I\'m available' : 'I\'m not available')
</script>
