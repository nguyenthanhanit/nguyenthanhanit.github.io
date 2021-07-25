<template>
  <aside class="text-center pt-9">
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
  </aside>
</template>

<script>

export default {
  name: "Aside",
  components: {},
}
</script>

<style scoped lang="stylus">
.fa-facebook
  color #4267B2

.fa-twitter
  color #1DA1F2

.fa-instagram
  color #E1306C

.fa-linkedin
  color #2867B2
</style>