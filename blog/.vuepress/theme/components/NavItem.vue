<template>
  <li>
    <RouterLink :to="href" class="px-3 py-2 rounded-3xl font-medium" :class="{ 'bg-blue-500 text-white': isActive }">
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
  },
  computed: {
    isActive() {
      const links = [this.href, `${this.href}/`]
      return links.includes(this.$page.path)
    }
  }
}
</script>