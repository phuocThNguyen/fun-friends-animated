<template>
  <div class="interactive-container" id="alt-bg">
    <img src="../../assets/images/introduction/page2.jpg" alt="page-2" class="session-background" id="fixing-image">
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/introduction/2Animated_Book_Page1.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">1</div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionPage2',
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