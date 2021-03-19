<template>
  <aside class="text-center">
    <header>
      <RouterLink to="/">
        <h1 class="font-mono font-bold text-4xl">Nguyen Thanh An</h1>
      </RouterLink>
    </header>
    <div class="contact mt-6 space-x-2 mb-2">
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