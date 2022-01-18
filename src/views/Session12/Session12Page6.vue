<template>
  <div class="interactive-container">
    <img src="../../assets/images/session12/2108.jpg" alt="friends" class="session-background">
    <div class="text-box">We are happy, we learnt FRIENDS skills.</div>
    <audio src="../../assets/sounds/session12/Session12_Page6.mp3" ref="voice"/>
    <div class="page-number" id="page-light">217</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session12Page6',
  methods: {
    animateText() {
      anime({
        targets: '.text-box',
        opacity: 1,
        duration: 500,
        delay: 500,
        easing: 'linear'
      })
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver()
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 1vh;
  width: 80%;
  left: 10%;
  padding: 1vh 2vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 5.5vh;
  font-weight: bold;
  text-align: center;
  opacity: 0;
}
</style>
