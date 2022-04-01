<template>
  <div class="interactive-container">
    <div class="text-box">
      Del idéer til sjove lege man kan lege på stranden.
    </div>
    <img src="../../assets/images/session8/135443-OSAV8P-846.jpg" alt="Annie" class="images">
    <img src="../../assets/images/session8/135428-OSAV5N-454.jpg" alt="Annie" class="images">
    <audio src="../../assets/sounds/session8/Session8_Page5.mp3" ref="voice"/>
    <div class="page-number" id="page-light">161</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session8Page5',
  methods: {
    animateText() {
      anime({
        targets: '.text-box',
        opacity: 1,
        easing: 'linear',
        duration: 500,
        delay: 500
      })
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
.text-box {
  position: absolute;
  width: 48%;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.5vh 2vh;
  right: 1%;
  top: 1vh;
  font-size: 4.8vh;
  font-weight: bold;
  z-index: 10;
  text-align: center;
  opacity: 0;
}
.images {
  position: absolute;
  height: 100vh;
  width: 50%;
}
.images:nth-child(2) {
  right: 0;
}
</style>