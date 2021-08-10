<template>
  <div class="md:static fixed top-0 left-0 z-10 h-full md:h-auto w-0 md:w-full">
    <div class="transition ease-in-out duration-500 relative md:static w-screen w-full md:w-auto h-full md:h-auto"
         :class="slideOver()"
         aria-labelledby="slide-over-title"
         role="dialog" aria-modal="true">
      <div class="bg-blue-500 absolute top-0 -left-0 p-3 flex block md:hidden"
           :class="open ? '-left-0 rounded-br-2xl' : '-left-12 rounded-bl-2xl'">
        <button
            class="text-white focus:outline-none"
            @click="show">
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
      <div
          class="h-full md:h-auto flex flex-col py-12 md:p-0 bg-white shadow-xl md:shadow-none overflow-y-scroll md:overflow-y-hidden">
        <div class="px-4 sm:px-6 block md:hidden">
          <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
            Menu
          </h2>
        </div>
        <div class="mt-6 md:mt-0 relative flex-1 px-4 sm:px-6 md:p-0 md:static">
          <div class="absolute inset-0 px-4 sm:px-6 md:p-0 md:static">
            <div class="h-full md:h-auto border-2 border-dashed border-gray-200 md:border-0" aria-hidden="true">
              <header class="flex flex-auto flex-row-reverse bg-gray-100">
                <Nav class="pb-1 pl-2 pt-4 pr-10" ul-class="flex flex-row space-x-4">
                  <NavItem v-for="item in $site.themeConfig.nav" :href="item.link" :is-active="item.active">{{
                      item.text
                    }}
                  </NavItem>
                </Nav>
              </header>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Nav from "./Nav";
import NavItem from "./NavItem";

export default {
  name: "Header",
  components: {
    Nav,
    NavItem,
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    slideOver() {
      let classSlide = 'slide-panel'
      if (typeof window !== "undefined" && window.innerHeight >= 768) {
        return `${classSlide}__in`
      }
      return this.open ? `${classSlide}__in` : `${classSlide}__out`
    },
    show() {
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