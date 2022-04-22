<template>
  <div class="interactive-container">
    <img src="../../assets/images/appendix/FF_Paying_Attention_Senses_LANDSCAPE.jpg" class="session-background">
    <audio src="../../assets/sounds/appendix/Page229.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">229</div>
  </div>
</template>

<script>
export default {
  name: 'AppendixPage8',
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

<style scoped></style>