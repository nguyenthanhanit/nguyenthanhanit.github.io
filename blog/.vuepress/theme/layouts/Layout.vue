<template>
  <div class="p-7 bg-gray-100">
    <div class="container leading-relaxed">
      <Header/>
      <main class="md:flex grid md:grid-cols-4 px-9 pb-9 bg-white rounded-b-3xl rounded-tl-3xl">
        <Aside>
          <div class="bg-bottom bg-cover bg-no-repeat h-56 md:w-64 rounded-3xl"
               :style="{'background-image': 'url(' + $withBase($site.themeConfig.host.avatar) + ')'}"></div>
          <div class="mt-2">
            <span class="font-bold text-2xl">{{ $site.themeConfig.host.name }}</span>
          </div>
          <div class="rounded-3xl py-1 px-1 bg-gray-100 m-auto">{{ $site.themeConfig.host.title }}</div>
          <div class="contact mt-2 space-x-2 mb-2">
            <a v-for="item in $site.themeConfig.host.social" :href="item.link">
              <i :class="'fab fa-' + item.type"></i>
            </a>
          </div>
          <div class="text-center w-full">
        <span class="inline-block">
          <i class="fas fa-home"></i> {{ $site.themeConfig.host.address }}
        </span>
            <span class="inline-block">
          <a :href="'mailto:' + $site.themeConfig.host.email">
            <i class="far fa-envelope"></i> {{ $site.themeConfig.host.email }}
          </a>
        </span>
          </div>
        </Aside>
        <ContentPage/>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Nav from "../components/Nav";
import NavItem from "../components/NavItem";
import Aside from "../components/Aside";
import ContentPage from "../components/ContentPage";

export default {
  name: "Layout",
  components: {
    Header,
    Nav,
    NavItem,
    Aside,
    ContentPage
  },
}
</script>

<style scoped lang="stylus">
.fa-facebook
  color #4267B2

.fa-instagram
  color #E1306C

.fa-linkedin
  color #2867B2
</style>