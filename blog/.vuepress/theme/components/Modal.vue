<template>
  <!--Modal-->
  <div class="ease-out duration-300 fixed w-full h-full top-0 left-0 flex items-center justify-center z-10"
       :class="slideOver()">
    <div class="absolute w-full h-full bg-gray-900 opacity-50" @click="show"></div>

    <div class="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-10 overflow-y-auto">

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl font-bold">{{ title }}</p>
          <div class="cursor-pointer z-10" @click="show">
            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                 viewBox="0 0 18 18">
              <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>

        <!--Body-->
        <slot></slot>

        <!--Footer-->
        <div class="flex justify-end pt-2">
          <button class="px-4 bg-blue-500 p-3 rounded-lg text-white hover:bg-blue-400" @click="show">Close
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    slideOver() {
      let classSlide = 'modal'
      return this.open ? `${classSlide}__in` : `${classSlide}__out`
    },
    show() {
      this.open = !this.open
    },
  },
}
</script>

<style scoped lang="stylus">
.modal
  &__in
    @apply opacity-100
    @apply pointer-events-auto

  &__out
    @apply opacity-0
    @apply pointer-events-none
</style>