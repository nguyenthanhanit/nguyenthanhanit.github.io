<template>
  <div>
    <Content slot-key="about"/>
    <Content slot-key="hobbies" class="grid grid-cols-1 md:grid-cols-3 gap-4"/>
    <Content slot-key="work"/>
    <Content/>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  }
}
</script>