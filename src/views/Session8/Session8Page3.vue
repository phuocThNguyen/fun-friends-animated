<template>
  <div class="interactive-container">
    <img src="../../assets/images/session8/33261.jpg" alt="Tom" class="session-background">
    <div class="text-box">
      <p>Tom has fallen off his bike.</p>
      <p>He has only just learnt to ride without training wheels.</p>
      <p>How do you think he is feeling?</p>
      <p>What can you do to be a kind friend to Tom?</p>
    </div>
    <audio src="../../assets/sounds/session8/Session8_Page3.mp3" ref="voice"/>
    <div class="page-number" id="page-light">157</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session8Page3',
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear'
      })
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[0], opacity: 1}, 750)
        .add({targets: text[1], opacity: 1}, 3300)
        .add({targets: text[2], opacity: 1}, 7500)
        .add({targets: text[3], opacity: 1}, 9800)
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
  width: 72%;
  background-color: rgba(255,255,255,0.9);
  padding: 2vh 2.6vh;
  opacity: 0;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
  opacity: 0;
}
</style>