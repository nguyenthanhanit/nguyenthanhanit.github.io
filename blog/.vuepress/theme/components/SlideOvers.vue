<template>
  <div class="fixed top-0 left-0 z-10 h-full w-0">
    <div class="transition ease-in-out duration-500 relative w-screen w-full h-full" :class="slideOver()"
         aria-labelledby="slide-over-title"
         role="dialog" aria-modal="true">
      <div class="bg-blue-500 absolute top-0 -left-0 p-3 flex"
           :class="open ? '-left-0 rounded-br-2xl' : '-left-12 rounded-bl-2xl'">
        <button
            class="text-white focus:outline-none"
            @click="showModal">
          <svg v-if="open" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
          </svg>
        </button>
      </div>
      <div class="h-full flex flex-col py-12 bg-white shadow-xl overflow-y-scroll">
        <div class="px-4 sm:px-6">
          <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
            Menu
          </h2>
        </div>
        <div class="mt-6 relative flex-1 px-4 sm:px-6">
          <div class="absolute inset-0 px-4 sm:px-6">
            <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideOvers",
  data() {
    return {
      open: false,
    }
  },
  methods: {
    slideOver(type) {
      let classSlide = 'slide-panel'
      return this.open ? `${classSlide}__in` : `${classSlide}__out`
    },
    showModal() {
      this.open = !this.open
    }
  },
}
</script>

<style scoped lang="stylus">
.slide-panel
  &__in
    @apply transform
    @apply translate-x-0

  &__out
    @apply transform
    @apply translate-x-full
</style>