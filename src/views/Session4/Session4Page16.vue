<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/120974-resized.jpg" alt="exploring" class="session-background">
    <div class="text-box">
      <h1>4. Smagssansen</h1>
      <p>Vi smager med vores tunge. Hvad kan vi smage?</p>
    </div>
    <audio src="../../assets/sounds/session4/Session4_Page16.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">102</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page16',
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
h1 { font-size: 4vh;margin-bottom: 0; }
p { font-size: 3vh;margin-bottom: 0; }
.text-box {
  position: absolute;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.5vh 2vh;
  top: 2vh;
  right: 2vh;
  opacity: 0;
  width: 40vh;
}
</style>