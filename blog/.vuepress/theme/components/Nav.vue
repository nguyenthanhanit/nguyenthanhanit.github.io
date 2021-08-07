<template>
  <nav class="bg-white rounded-tr-3xl relative">
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