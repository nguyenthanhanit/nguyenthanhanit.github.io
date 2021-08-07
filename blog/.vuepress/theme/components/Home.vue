<template>
  <div class="grid md:grid-cols-4 gap-4 px-9 pb-9 bg-white rounded-b-3xl rounded-tl-3xl">
    <Aside :class="$page.path === '/' ? 'block' : 'hidden md:block'" class="text-center">
      <div class="bg-bottom bg-cover bg-no-repeat h-72 rounded-3xl"
           :style="{'background-image': 'url(' + $withBase($site.themeConfig.host.avatar) + ')'}"></div>
      <div class="mt-2">
        <span class="font-bold text-2xl">{{ $site.themeConfig.host.name }}</span>
      </div>
      <div class="rounded-3xl py-1 px-1 bg-gray-100 w-3/4 2xl:w-1/2 m-auto">{{ $site.themeConfig.host.title }}</div>
      <div class="contact mt-2 space-x-2 mb-2">
        <a v-for="item in $site.themeConfig.host.social" :href="item.link">
          <i :class="'fab fa-' + item.type"></i>
        </a>
      </div>
      <div class="text-left w-3/4 2xl:w-7/12 m-auto">
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
    <div class="md:col-span-3 md:pl-9">
      <Content/>
    </div>
  </div>
</template>

<script>
import Aside from "../components/Aside";

export default {
  name: "Home",
  components: {
    Aside
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