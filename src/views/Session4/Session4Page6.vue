<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/1827-resized.jpg" alt="relaxing" class="session-background">
    <div class="text-box">What do you do to relax and calm down?</div>
    <audio src="../../assets/sounds/session4/Session4_Page6.mp3" ref="voice"/>
    <div class="page-number" id="page-light">92</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session4Page6",
  methods: {
    animateElements() {
      anime({
        targets: '.text-box',
        opacity: 1,
        delay: 500,
        duration: 500,
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
  top: 5vh;
  left: 5%;
  padding: 1.5vh;
  background-color: rgba(255,255,255,0.95);
  font-size: 5vh;
  opacity: 0;
}
</style>