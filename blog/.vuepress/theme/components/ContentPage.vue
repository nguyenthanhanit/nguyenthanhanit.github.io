<template>
  <div class="md:pl-9 w-full" :class="$page.frontmatter.home ? '' : 'post'">
    <Content/>
  </div>
</template>

<script>
export default {
  name: "ContentPage"
}
</script>