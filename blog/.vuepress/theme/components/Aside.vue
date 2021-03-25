<template>
  <aside class="text-center">
    <header>
      <RouterLink to="/">
        <span class="font-bold text-3xl">Nguyen Thanh An</span>
      </RouterLink>
    </header>
    <div class="contact mt-2 md:mt-6 space-x-2 mb-2">
      <a v-for="item in $site.themeConfig.social" :href="item.link">
        <i :class="'fab fa-' + item.type"></i>
      </a>
    </div>
    <Nav>
      <NavItem v-for="item in $site.themeConfig.nav" :href="item.link">{{ item.text }}</NavItem>
    </Nav>
  </aside>
</template>

<script>
import Nav from "./Nav";
import NavItem from "./NavItem";

export default {
  name: "Aside",
  components: {
    Nav,
    NavItem,
  },
}
</script>

<style scoped>

</style>