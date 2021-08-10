<template>
  <div class="p-7 bg-gray-100">
    <div class="container leading-relaxed">
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
import Nav from "../components/Nav";
import NavItem from "../components/NavItem";

export default {
  name: "Layout",
  components: {
    Home,
    Page,
    Header,
    Nav,
    NavItem,
  },
}
</script>