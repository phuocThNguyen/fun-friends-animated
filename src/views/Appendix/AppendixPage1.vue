<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/appendix1.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/appendix/appendix1.jpg"
      class="session-background"
    />
    <div class="title">Appendix 1: 'Green' thoughts to Enjoy</div>
    <audio @loadeddata="playVoiceOver" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/Session13_Appendix_Page1.mp3" ref="voice"/>
    <div class="page-number" id="page-light">255</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
export default {
  name: "AppendixPage1",
  components: {ImageComponent},
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {}
}
</script>

<style scoped>
.title {
  position: absolute;
  font-size: 4vh;
  font-weight: bold;
  width: 100%;
  text-align: center;
  top: 2vh;
}
</style>