<template>
  <div class="interactive-container">
    <img src="../../assets/images/session8/32050.png" alt="city" class="session-background">
    <div class="text-box">
      <p>Find a friend in your class and show them or tell them
      what they do that you find kind.</p>
      <p>Maybe smiling, sharing, helping, listening or laughing?</p>
    </div>
    <audio src="../../assets/sounds/session8/Session8_Page2.mp3" ref="voice"/>
    <div class="page-number" id="page-light">158</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session8Page2',
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear'
      })
      animation
        .add({targets: '.text-box',opacity: 1}, 200)
        .add({targets: text[0],opacity: 1}, 600)
        .add({targets: text[1],opacity: 1}, 7500)
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
  top: 35vh;
  left: 5%;
  width: 90%;
  padding: 2vh;
  font-size: 5vh;
  background-color: rgba(255,255,255,0.95);
  opacity: 0;
}
.text-box p {
  margin-bottom: 0;
  opacity: 0
}
</style>