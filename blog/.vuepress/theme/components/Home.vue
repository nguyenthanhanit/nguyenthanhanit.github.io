<template>
  <div>
    <Content slot-key="about"/>
    <div
        v-if="data.hobbies && data.hobbies.length"
        class="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <div
          v-for="(feature, index) in data.hobbies"
          :key="index"
          class="border-2 rounded-3xl text-center p-5 mt-2"
      >
        <h2 class="mb-2">{{ feature.title }}</h2>
        <img class="m-auto" :src="$withBase('/images/hobbies/' + feature.icon)" height="50" width="50" alt="img">
      </div>
    </div>
    <Content slot-key="work"/>
    <Timeline :data="data.work"/>
    <Content/>
  </div>
</template>

<script>
import Timeline from "./Timeline";

export default {
  name: "Home",
  components: {Timeline},
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  }
}
</script>

<style scoped>

</style>