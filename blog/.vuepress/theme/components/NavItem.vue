<template>
  <li>
    <RouterLink :to="href" :class="['hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium', { 'bg-gray-50': isActive }]">
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