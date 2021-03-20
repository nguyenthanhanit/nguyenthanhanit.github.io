<template>
  <div>
    <Content/>
    <div class="hobbies mt-10" v-if="$page.frontmatter.hobbies">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
        <div v-for="item in $page.frontmatter.hobbies" class="rounded border-solid border-4 border-gray-50 p-2.5">
          <img :src="$withBase(item.image)" :alt="item.title" height="60" width="60" class="m-auto mb-10">
          <span class="block font-medium">
            {{ item.title }}
          </span>
          <span class="block text-gray-500">
            {{ item.detail }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>