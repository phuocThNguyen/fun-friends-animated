<template>
  <div class="interactive-container">
    <img src="../../assets/images/introduction/page1.jpg" alt="page-1" class="session-background">
    <audio src="../../assets/sounds/introduction/1Animated_Book_Title.mp3" ref="voice"></audio>
  </div>
</template>

<script>
export default {
  name: 'IntroductionPage1',
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