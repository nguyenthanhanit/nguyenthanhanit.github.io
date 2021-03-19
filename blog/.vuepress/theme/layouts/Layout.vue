<template>
  <div class="container bg-white p-4">
    <div class="grid grid-cols-4 gap-4">
      <Aside/>
      <main class="col-span-3">
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
import Aside from "../components/Aside";
import Home from "../components/Home";
import Page from "../components/Page";

export default {
  name: "Layout",
  components: {
    Home,
    Page,
    Aside,
  },
}
</script>