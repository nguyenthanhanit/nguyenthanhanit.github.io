<template>
  <div class="grid md:grid-cols-4 gap-4 px-9 pb-9 bg-white rounded-b-3xl rounded-tl-3xl">
    <Aside v-if="posts.length" :class="$page.path === '/' ? 'block' : 'hidden md:block'">
      <Nav>
        <NavItem v-for="post in posts" :href="post.path" class="bg-gray-100 hover:bg-gray-300 transition duration-150" :class="{ 'bg-blue-500 hover:bg-blue-500 text-white': isActive(post.path) }">{{ post.title }}</NavItem>
      </Nav>
    </Aside>
    <div class="md:col-span-3" :class="{ 'md:col-span-4': !posts.length }">
      <Content/>
    </div>
  </div>
</template>

<script>
import Aside from "../components/Aside";
import Nav from "../components/Nav";
import NavItem from "../components/NavItem";
import _ from "lodash";

export default {
  name: "Page",
  components: {
    Aside,
    Nav,
    NavItem
  },
  computed: {
    posts () {
      return _.reject(this.$site.pages.filter(p => p.path.includes('/post')), function (o) {
        return o.relativePath === 'post/README.md';
      });
    }
  },
  methods: {
    isActive(href) {
      return `${this.$page.path}/` === `${href}/`;
    }
  }
}
</script>