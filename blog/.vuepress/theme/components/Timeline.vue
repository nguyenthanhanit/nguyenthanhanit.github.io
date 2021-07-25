<template>
  <div id="timeline" class="flex flex-col mt-1.5">
    <div v-for="(item, index) in data" :key="index" class="border-blue-500 relative z-0"
         :class="index === Object.keys(data).length - 1 ? 'h-10 md:h-2.5' : 'border-l-2 h-10'">
      <svg v-if="index === 0" class="pin absolute rounded-full animate-spin" viewBox="0 0 1024 1024" focusable="false"
           data-icon="loading" fill="currentColor" aria-hidden="true">
        <path
            d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
      </svg>
      <div v-else class="pin absolute rounded-full flex items-center justify-end"></div>
      <div class="absolute -top-2 left-5">{{ item.time }}: {{ item.title }}
        {{ item.company ? 'tại ' + item.company : '' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  props: {
    data: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped lang="stylus">
#timeline
  div.rounded-full
    @apply border-transparent
    @apply border-solid
    @apply border-2
    @apply bg-blue-500
    left -0.3rem

  svg
    left: -0.4rem !important
    @apply bg-white
    @apply text-blue-600

  .pin
    width 10px
    height 10px
    @apply top-0
</style>