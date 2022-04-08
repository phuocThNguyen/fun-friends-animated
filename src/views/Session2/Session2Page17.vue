<template>
  <div class="interactive-container">
    <img src="../../assets/images/session2/46933-resized.jpg" alt="background" class="session-background">
    <div class="text-box">Vi er omsorgsfulde når vi udviser
      <br>opmærksomhed overfor vores lærer / pædagog.</div>
    <audio src="../../assets/sounds/session2/Page62.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">62</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session2Page16",
  methods: {
    animateText() {
      anime({
        targets: ".text-box",
        delay: 500,
        duration: 500,
        opacity: 1,
        easing: 'linear'
      })
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
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1vh;
  text-align: center;
  bottom: 6vh;
  width: calc(0.6*133vh);
  left: calc(0.2*133vh);
  font-size: 3.3vh;
  font-weight: bold;
  opacity: 0;
}
</style>