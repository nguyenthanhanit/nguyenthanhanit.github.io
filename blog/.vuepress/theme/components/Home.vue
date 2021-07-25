<template>
  <div>
    <Content slot-key="about"/>
    <Content slot-key="hobbies" class="grid grid-cols-1 md:grid-cols-3 gap-4"/>
    <Content slot-key="work"/>
    <Timeline :data="data.work"/>
    <Content/>
  </div>
</template>

<script>
import Timeline from "./Timeline";
import Strava from "./Strava";

export default {
  name: "Home",
  components: {Timeline, Strava},
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  }
}
</script>