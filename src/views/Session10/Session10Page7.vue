<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/1243.jpg" alt="Tom-reading-book" class="session-background">
    <div class="text-box-green">My mum helps me be brave
      <br>when I meet new people.</div>
    <audio src="../../assets/sounds/session10/Session10_Page7.mp3" ref="voice"/>
    <div class="page-number" id="page-light">191</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session10Page7',
  methods: {
    animateText() {
      anime({
        targets: '.text-box-green',
        opacity: 1,
        easing: 'linear',
        duration: 500,
        delay: 500
      });
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
.text-box-green {
  position: absolute;
  bottom: 6vh;
  left: 10%;
  padding: 1vh 2vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 4vh;
  font-weight: bold;
  text-align: center;
  opacity: 0;
}
</style>
