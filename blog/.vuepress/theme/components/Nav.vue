<template>
  <nav class="bg-white pt-4 pb-1 pr-10 pl-2 rounded-tr-3xl relative">
    <ul class="flex flex-row space-x-4">
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped lang="stylus">

</style>