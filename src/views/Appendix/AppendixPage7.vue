<template>
  <div class="interactive-container">
    <img src="../../assets/images/appendix/FF_Bubble_Breathing_LANDSCAPE.jpg" class="session-background">
    <audio src="../../assets/sounds/appendix/Session13_Appendix_Page6.mp3" ref="voice"/>
  </div>
</template>

<script>
export default {
  name: 'AppendixPage7',
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.playVoiceOver()
  }
}
</script>

<style scoped></style>