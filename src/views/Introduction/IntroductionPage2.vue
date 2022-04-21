<template>
  <div class="interactive-container" id="alt-bg">
    <img src="../../assets/images/introduction/page2-danish.jpg" alt="page-2" class="session-background" id="fixing-image">
    <audio src="../../assets/sounds/introduction/Page1.mp3" ref="voice"></audio>
    <div class="page-number" id="page-dark">1</div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionPage2',
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
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
  top: -4vh;
}
</style>