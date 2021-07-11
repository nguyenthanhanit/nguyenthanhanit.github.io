<template>
  <li>
    <RouterLink :to="href" class="px-3 py-2 rounded-3xl font-medium">
      <slot></slot>
    </RouterLink>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    href: {
      type: String,
      required: true,
    },
    isActive: Boolean,
  },
}
</script>

<style scoped>

</style>