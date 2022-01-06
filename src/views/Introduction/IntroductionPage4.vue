<template>
  <div class="interactive-container">
    <img src="../../assets/images/introduction/page4.jpg" alt="page-4" class="session-background">
    <audio src="../../assets/sounds/introduction/4Animated_Book_Page3.mp3" ref="voice"></audio>
    <div class="page-number" id="page-dark">3</div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionPage4',
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

<style scoped></style>