<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/41068-resized.jpg" alt="exploring" class="session-background">
    <div class="title">
      <h1>MINDFULNESS – At udforske Verdenen gennem De 5 Sanser</h1>
      <p>Øv dig i at gå på opdagelse ved hjælp af dine fem sanser.</p>
    </div>
    <div class="text-box">
      <h1>1. Høresansen</h1>
      <p>Vi hører med vores ører. <br>Hvad kan vi høre?</p>
    </div>
    <audio src="../../assets/sounds/session4/Session4_Page13.mp3" ref="voice"/>
    <div class="page-number" id="page-light">99</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page13',
  methods: {
    animateElements() {
      anime({
        targets: '.text-box',
        opacity: 1,
        duration: 500,
        delay: 1,
        easing: 'linear',
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
p {margin-bottom: 0;}
.title {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1vh;
}
.title p {font-size: 3vh}
.text-box {
  position: absolute;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.5vh 2vh;
  bottom: 1vh;
  right: 14vh;
  opacity: 0;
  margin-bottom: 0;
  width: 40vh;
}
.text-box h1 {font-size: 4vh;margin-bottom: 0;}
.text-box p {font-size: 3vh;margin-bottom: 0;}
</style>