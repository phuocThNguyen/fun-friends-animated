<template>
  <div class="interactive-container">
    <img src="../../assets/images/introduction/page8.jpg" alt="background" class="session-background">
    <div class="text" id="text-1">Min egen Fun FRIENDS Bog</div>
    <div class="text" id="text-2">Jeg kan tegne i bogen og tale <br>om den med mine venner og familie</div>
    <audio src="../../assets/sounds/introduction/Page6.mp3" ref="voice"/>
  </div>
</template>

<script>
export default {
  name: 'IntroductionPage7',
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