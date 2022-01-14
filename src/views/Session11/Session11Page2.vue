<template>
  <div class="interactive-container">
    <img src="../../assets/images/session11/46140.jpg" alt="children" class="session-background">
    <div class="text-box">
      <p>These children are helping each other to be strong.</p>
      <p>Look around or think about your family.</p>
      <p>What do people do to help you and how do you help them?</p>
      <p>Compare your ideas with friends.</p>
    </div>
    <audio src="../../assets/sounds/session11/Session11_Page2.mp3" ref="voice"/>
    <div class="page-number" id="page-light">203</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session11Page2',
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: '.text-box',opacity: 1}, 200)
        .add({targets: text[0],opacity: 1}, 500)
        .add({targets: text[1],opacity: 1}, 4300)
        .add({targets: text[2],opacity: 1}, 7600)
        .add({targets: text[3],opacity: 1}, 12900)
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
  background-color: rgba(255,255,255,0.9);
  width: 80%;
  bottom: 3vh;
  left: 10%;
  padding: 1.5vh 2vh;
  font-size: 4vh;
  opacity: 0;
}
.text-box p {margin-bottom: .5vh;opacity: 0;}
.text-box p:last-child {margin-bottom: 0;}
</style>
