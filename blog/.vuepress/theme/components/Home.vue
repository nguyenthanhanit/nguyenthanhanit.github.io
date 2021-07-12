<template>
  <div>
    <Content/>
    <div
        v-if="data.features && data.features.length"
        class="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <div
          v-for="(feature, index) in data.features"
          :key="index"
          class="border-2 rounded-3xl text-center p-5 mt-2"
      >
        <h2>{{ feature.title }}</h2>
        <img class="m-auto" :src="$withBase('/images/' + feature.icon)" height="50" width="50" alt="img">
        <p>{{ feature.details }}</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    data () {
      return this.$page.frontmatter;
    },
  }
}
</script>

<style scoped>

</style>