<template>
  <nav class="bg-white md:rounded-tr-3xl relative w-full md:w-auto">
    <ul :class="ulClass">
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    ulClass: {
      type: String,
      required: false,
    }
  }
}
</script>