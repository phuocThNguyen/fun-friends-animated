<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/1408.jpg" alt="background" class="session-background">
    <div class="text-box">
      <span>Who has showed you how to do something before?</span>
      <span> Who has helped you feel happy?</span>
      <span> Give them a big thank you!</span>
    </div>
    <audio src="../../assets/sounds/session10/Session10_Page14.mp3" ref="voice"/>
    <div class="page-number" id="page-light">198</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session10Page14',
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: '.text-box',opacity: 1}, 200)
        .add({targets: text[0],color: '#fff'}, 600)
        .add({targets: text[1],color: '#fff'}, 4400)
        .add({targets: text[2],color: '#fff'}, 7300)
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
  top: 1vh;
  left: 1%;
  width: 60%;
  background-color: #000000;
  padding: 1vh;
  font-size: 4vh;
  color: #000000;
  font-weight: bold;
  opacity: 0;
}
</style>
