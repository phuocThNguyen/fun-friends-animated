<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/1034.jpg" alt="Annie" class="session-background">
    <div class="text-box">Annie learns from <br>someone she looks up to.</div>
    <div class="text-box-green">My mum helps me learn to swim.</div>
    <audio src="../../assets/sounds/session10/Session10_Page6.mp3" ref="voice"/>
    <div class="page-number" id="page-light">192</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session10Page6',
  methods: {
    animateText() {
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: '.text-box',opacity: 1}, 800)
        .add({targets: '.text-box-green',opacity: 1}, 4500);
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
  top: 3vh;
  left: 3%;
  background-color: rgba(255,255,255,0.9);
  font-weight: bold;
  font-size: 4vh;
  padding: 2vh;
  opacity: 0;
}
.text-box-green {
  position: absolute;
  bottom: 6vh;
  left: 10%;
  padding: 1vh 2.8vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 4vh;
  font-weight: bold;
  opacity: 0;
}
</style>
