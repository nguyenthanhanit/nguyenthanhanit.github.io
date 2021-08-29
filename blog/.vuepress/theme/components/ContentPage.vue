<template>
  <div class="md:pl-9" :class="$page.frontmatter.home ? '' : 'post'">
    <Content/>
  </div>
</template>

<script>
export default {
  name: "ContentPage"
}
</script>