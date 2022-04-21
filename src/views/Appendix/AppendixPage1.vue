<template>
  <div class="interactive-container">
    <img src="../../assets/images/appendix/appendix1-danish.jpg" alt="green-thoughts" class="session-background">
    <div class="title">BILAG 1: ”Grønne” tanker som du kan NYDE</div>
    <audio src="../../assets/sounds/appendix/Session13_Appendix_Page1.mp3" ref="voice"/>
    <div class="page-number" id="page-light">222</div>
  </div>
</template>

<script>
export default {
  name: "AppendixPage1",
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
.title {
  position: absolute;
  font-size: 4vh;
  font-weight: bold;
  width: 100%;
  text-align: center;
  top: 2vh;
}
</style>