<template>
  <header class="flex flex-auto flex-row-reverse bg-gray-100">
    <SlideOvers class="md:hidden">
      <Nav>
        <NavItem v-for="item in $site.themeConfig.nav" :href="item.link" :is-active="item.active">{{item.text }}
        </NavItem>
      </Nav>
    </SlideOvers>
    <Nav class="hidden md:block">
      <NavItem v-for="item in $site.themeConfig.nav" :href="item.link" :is-active="item.active">{{item.text }}
      </NavItem>
    </Nav>
  </header>
</template>

<script>

import Nav from "./Nav";
import NavItem from "./NavItem";
import SlideOvers from "./SlideOvers";

export default {
  name: "Header",
  components: {
    SlideOvers,
    Nav,
    NavItem,
  },
}
</script>

<style scoped lang="stylus">

</style>