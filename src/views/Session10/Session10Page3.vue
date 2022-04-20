<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/72896.jpg" alt="Tom" class="session-background">
    <div class="text-box">Sofus lærer af én <br>som han ser op til.</div>
    <div class="text-box-green">Min far hjælper mig <br>med at lære at lave mad.</div>
    <audio src="../../assets/sounds/session10/Page189.mp3" ref="voice"/>
    <div class="page-number" id="page-light">189</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session10Page3',
  methods: {
    animateText() {
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: '.text-box-green', opacity: 1}, 4700)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 1vh;
  left: 1%;
  background-color: rgba(255,255,255,0.95);
  font-weight: bold;
  font-size: 4vh;
  padding: 2vh;
  opacity: 0;
  text-align: center;
}
.text-box-green {
  position: absolute;
  bottom: 6vh;
  left: 10%;
  padding: 1vh 2.4vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 3vh;
  font-weight: bold;
  opacity: 0;
  text-align: center;
}
</style>
