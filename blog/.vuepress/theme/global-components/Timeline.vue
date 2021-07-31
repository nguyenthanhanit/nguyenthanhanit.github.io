<template>
  <div class="flex flex-col md:grid grid-cols-12">

    <div class="flex md:contents" v-for="(value, key, index) in timelines">
      <div class="col-start-1 col-end-2 mr-10 relative">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-1 bg-blue-500 pointer-events-none"></div>
        </div>
        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow text-center">
          <svg v-if="index" xmlns="http://www.w3.org/2000/svg" class="text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg v-else class="animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>
      <div class="col-start-2 col-end-13 p-4 rounded-3xl my-4 mr-auto w-full">
        <h3 class="font-semibold text-lg mb-1">{{ key }}</h3>
        <p class="leading-tight">{{ value }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Timeline",
  props: {
    data: {
      type: String,
      required: true,
    }
  },
  computed: {
    timelines() {
      return JSON.parse(this.data)
    }
  }
}
</script>