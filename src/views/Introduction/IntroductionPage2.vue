<template>
  <div class="interactive-container" id="alt-bg">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/introduction/page2.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/introduction/page2.jpg"
      class="session-background"
      id="fixing-image"
    />
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/general/IntroPage2.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">1</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
export default {
  name: 'IntroductionPage2',
  components: {ImageComponent},
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    }
  },
  mounted() {
    this.playVoiceOver();
  }
}
</script>

<style scoped>
#alt-bg {
  background-color: #00CE7C;
}
#fixing-image {
  top: -5vh;
}
</style>