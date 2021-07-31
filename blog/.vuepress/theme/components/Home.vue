<template>
  <div>
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