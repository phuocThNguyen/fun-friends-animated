<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/1143-resized.jpg" alt="cool-water" class="session-background">
    <div class="text-box">The water feels cool and
     fresh on our skin.</div>
    <audio src="../../assets/sounds/session4/Session4_Page21.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">105</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page21',
  methods: {
    animateElements() {
      anime({
        targets: '.text-box',
        opacity: 1,
        duration: 500,
        delay: 500,
        easing: 'linear'
      });
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateElements();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  bottom: 6vh;
  width: 70%;
  left: 15%;
  padding: 1.4vh;
  color: #ffffff;
  background-color: #00ce7c;
  text-align: center;
  font-size: 4vh;
  font-weight: bold;
  opacity: 0;
}
</style>