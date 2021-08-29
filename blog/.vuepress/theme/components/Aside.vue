<template>
  <aside class="pt-9 md:sticky md:top-0 h-full md:w-64 text-center"
         :class="$page.path === '/' ? 'block' : 'hidden md:block'">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: "Aside"
}
</script>