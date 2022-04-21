<template>
  <div class="interactive-container">
    <img src="../../assets/images/appendix/FRIENDS_Bubble-Breathing_v2_LANDSCAPE.jpeg" class="session-background">
    <audio src="../../assets/sounds/appendix/Session13_Appendix_Page4.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">226</div>
  </div>
</template>

<script>
export default {
  name: 'AppendixPage5',
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    },
  },
  mounted() {
    this.playVoiceOver()
  }
}
</script>

<style scoped>
</style>