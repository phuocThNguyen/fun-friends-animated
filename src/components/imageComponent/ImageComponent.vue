<template>
  <v-lazy-image
    :src="src"
    :src-placeholder="srcPlaceholder"
    alt="alt"
  ></v-lazy-image>
</template>

<script>
import VLazyImage from "v-lazy-image/v2";
export default {
  name: "ImageComponent.vue",
  components: {VLazyImage},
  props: {
    src: String,
    srcPlaceholder: String,
  }
}
</script>

<style scoped>
.v-lazy-image {
  opacity: 0;
  transition: opacity .5s;
}
.v-lazy-image-loaded {
  opacity: 1;
}
</style>