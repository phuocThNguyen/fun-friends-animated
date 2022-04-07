<template>
  <div class="interactive-container">
    <img src="../../assets/images/appendix/FF_Thumbs_Up_LANDSCAPE.jpg" class="session-background">
    <audio src="../../assets/sounds/appendix/Session13_Appendix_Page5.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">227</div>
  </div>
</template>

<script>
export default {
  name: 'AppendixPage6',
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.playVoiceOver();
  }
}
</script>

<style scoped></style>