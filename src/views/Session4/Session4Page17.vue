<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/4473-resized.jpg" alt="exploring" class="session-background">
    <div class="text-box">
      <h1>5. Touch</h1>
      <p>We feel with our skin. What can we feel?</p>
    </div>
    <audio src="../../assets/sounds/session4/Session4_Page17.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">103</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page17',
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
h1 { font-size: 5vh;margin-bottom: 0; }
p { font-size: 4vh;margin-bottom: 0; }
.text-box {
  position: absolute;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.5vh 2vh;
  bottom: 6vh;
  left: 10%;
  opacity: 0;
}
</style>