<template>
  <li>
    <RouterLink :to="href" class="relative block px-3 py-2 rounded-3xl font-medium" :class="{ 'bg-blue-500 text-white': isActive }">
      <slot></slot>
    </RouterLink>
  </li>
</template>

<script>
import _ from "lodash";

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
      let path = _.split(this.$page.path, '/');
      return links.includes(`/${path[1]}/`)
    }
  }
}
</script>