<template>
  <div class="fixed inset-0 overflow-hidden z-10" aria-labelledby="slide-over-title" role="dialog"
       aria-modal="true">
    <div class="absolute inset-0 overflow-hidden">
      <div class="slide absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"
           :class="slideOver('background')"></div>
      <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div class="slide relative w-screen max-w-md" :class="slideOver('panel')">
          <div class="slide rounded-bl-2xl bg-blue-500 absolute top-0 left-0 -ml-10 p-2 flex">
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
          <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
            <div class="px-4 sm:px-6">
              <h2 class="text-lg font-medium text-gray-900 text-center" id="slide-over-title">
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
      let classSlide = `slide-${type}`
      return this.open ? `${classSlide}__in` : `${classSlide}__out`
    },
    showModal() {
      this.open = !this.open
    }
  },
}
</script>

<style scoped lang="stylus">
.slide
  @apply transition
  @apply ease-in-out
  @apply duration-500

.slide-background
  &__in
    @apply opacity-100

  &__out
    @apply opacity-0

.slide-panel
  &__in
    @apply transform
    @apply translate-x-0

  &__out
    @apply transform
    @apply translate-x-full
</style>