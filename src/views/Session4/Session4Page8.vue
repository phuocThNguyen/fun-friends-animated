<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/354870-PAPUF2-370-resized.jpg" alt="drawing" class="session-background">
    <div class="text-box">
      Art is relaxing.
    </div>
    <audio src="../../assets/sounds/session4/Session4_Page8.mp3" ref="voice"/>
    <div class="page-number" id="page-light">94</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session4Page8",
  methods: {
    animateElements() {
      anime({
        targets: '.text-box',
        delay: 500,
        duration: 500,
        easing: 'linear',
        opacity: 1
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
  top: 2vh;
  left: 2%;
  width: 25%;
  font-size: 4.5vh;
  font-weight: bold;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.4vh;
  text-align: center;
  opacity: 0;
}
</style>