<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/1827-resized.jpg" alt="relaxing" class="session-background">
    <div class="text-box">Hvad laver du for at slappe af og falde til ro?</div>
    <audio src="../../assets/sounds/session4/Page92.mp3" ref="voice"/>
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
      setTimeout(() => {this.$refs.voice.play()}, 1)
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
  padding: 1vh 1.5vh;
  background-color: rgba(255,255,255,0.95);
  font-size: 4vh;
  opacity: 0;
}
</style>