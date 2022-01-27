<template>
  <div class="interactive-container">
    <img src="../../assets/images/introduction/page8.jpg" alt="background" class="session-background">
    <div class="text" id="text-1">My FUN FRIENDS Book</div>
    <div class="text" id="text-2">A book to talk about, <br>with my friends and family</div>
    <audio src="../../assets/sounds/introduction/7Animated_Book_Page6.mp3" ref="voice"></audio>
  </div>
</template>

<script>
export default {
  name: 'IntroductionPage7',
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
.text {
  position: absolute;
  color: #ffffff;
  font-weight: bold;
  background-color: #00CE7C;
  width: 120vh;
  height: 14%;
  left: 6.5vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#text-1 {
  top: 5vh;
  font-size: 6.5vh;
}
#text-2 {
  bottom: 5vh;
  font-size: 5vh;
  line-height: 5vh;
}
</style>