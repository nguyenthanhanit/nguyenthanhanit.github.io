<template>
  <header class="flex flex-auto flex-row-reverse bg-gray-100">
    <Nav class="hidden md:block" ul-class="flex flex-row space-x-4">
      <NavItem v-for="item in $site.themeConfig.nav" :href="item.link" :is-active="item.active">{{item.text }}
      </NavItem>
    </Nav>
  </header>
</template>

<script>

import Nav from "./Nav";
import NavItem from "./NavItem";

export default {
  name: "Header",
  components: {
    Nav,
    NavItem,
  },
}
</script>

<style scoped lang="stylus">

</style>