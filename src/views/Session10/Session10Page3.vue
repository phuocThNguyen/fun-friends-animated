<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/72896.jpg" alt="Tom" class="session-background">
    <div class="text-box">Tom learns from <br>someone he looks up to.</div>
    <div class="text-box-green">My dad helps me learn to cook.</div>
    <audio src="../../assets/sounds/session10/Session10_Page3.mp3" ref="voice"/>
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
        .add({targets: '.text-box', opacity: 1}, 700)
        .add({targets: '.text-box-green', opacity: 1}, 4600)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
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
}
.text-box-green {
  position: absolute;
  bottom: 6vh;
  left: 10%;
  padding: 1vh 2.4vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 4vh;
  font-weight: bold;
  opacity: 0;
}
</style>
