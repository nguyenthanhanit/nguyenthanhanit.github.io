<template>
  <div class="grid md:grid-cols-4 px-9 pb-9 bg-white rounded-b-3xl rounded-tl-3xl" :class="{ 'md:flex': posts.length }">
    <Aside v-if="posts.length" :class="$page.path === '/' ? 'block' : 'md:block'">
      <Nav class="md:w-96">
        <NavItem v-for="post in posts" :href="post.path" class="bg-gray-100 hover:bg-gray-300 transition duration-150"
                 :class="{ 'bg-blue-500 hover:bg-blue-500 text-white': isActive(post.path) }">
          <span class="text-xl">{{ post.title }}</span>
          <span class="block text-white w-min rounded-3xl px-1 post-title">{{ post.frontmatter.created }}</span>
        </NavItem>
      </Nav>
    </Aside>
    <div class="md:pl-9" v-if="posts.length">
      <Content/>
    </div>
    <div v-else class="md:col-span-4 w-full">
      <img src="/images/building.svg" alt="building" width="500" height="500" class="pt-9 m-auto"/>
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
    posts() {
      let data = _.reject(this.$site.pages.filter(p => p.path.includes('/post')), function (o) {
        return o.relativePath === 'post/README.md';
      })

      return _.reverse(_.sortBy(data, [function (o) {
        return o.frontmatter.created;
      }]));
    }
  },
  methods: {
    isActive(href) {
      return `${this.$page.path}/` === `${href}/`;
    }
  }
}
</script>


<style scoped lang="stylus">
.post-title
  background-color #DE7E99
</style>