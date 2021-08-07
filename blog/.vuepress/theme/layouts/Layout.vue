<template>
  <div class="p-7 bg-gray-100">
    <div class="container leading-relaxed">
      <SlideOvers class="md:hidden">
        <Nav class="text-center" ul-class="flex flex-col space-y-4">
          <NavItem v-for="item in $site.themeConfig.nav" :href="item.link">{{ item.text }}
          </NavItem>
        </Nav>
      </SlideOvers>
      <Header/>
      <main>
        <template v-if="$page.frontmatter.home">
          <Home/>
        </template>
        <template v-else>
          <Page/>
        </template>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Home from "../components/Home";
import Page from "../components/Page";
import SlideOvers from "../components/SlideOvers";
import Nav from "../components/Nav";
import NavItem from "../components/NavItem";

export default {
  name: "Layout",
  components: {
    Home,
    Page,
    Header,
    SlideOvers,
    Nav,
    NavItem,
  },
}
</script>