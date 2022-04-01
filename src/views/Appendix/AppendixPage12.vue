<template>
  <div class="interactive-container">
    <img src="../../assets/images/appendix/group-kids-friend-laughing-together.png" alt="last-page" class="session-background">
    <div class="text-box">SMIL</div>
    <audio src="../../assets/sounds/appendix/Session13_Appendix_Page11.mp3" ref="voice"/>
  </div>
</template>

<script>
export default {
  name: 'AppendixPage12',
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

<style scoped>
.text-box {
  position: absolute;
  color: #ffffff;
  background-color: #00CE7C;
  width: 24%;
  top: 5vh;
  left: 38%;
  text-align: center;
  font-size: 6.8vh;
  font-weight: bold;
  padding: 1.5vh 3vh;
}
</style>