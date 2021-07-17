<template>
  <div class="p-7 bg-gray-100">
    <div class="container leading-relaxed">
      <SlideOvers class="md:hidden">
        <Nav class="text-center" ul-class="flex flex-col space-y-4">
          <NavItem v-for="item in $site.themeConfig.nav" :href="item.link" :is-active="item.active">{{ item.text }}
          </NavItem>
        </Nav>
      </SlideOvers>
      <Header/>
      <main class="grid md:grid-cols-4 gap-4 px-9 pb-9 bg-white rounded-b-3xl rounded-tl-3xl">
        <Aside :class="$page.path === '/' ? 'block' : 'hidden md:block'"/>
        <div class="md:col-span-3 md:pl-9">
          <template v-if="$page.frontmatter.home">
            <Home/>
          </template>
          <template v-else>
            <Page/>
          </template>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Aside from "../components/Aside";
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
    Aside,
    Header,
    SlideOvers,
    Nav,
    NavItem,
  },
}
</script>