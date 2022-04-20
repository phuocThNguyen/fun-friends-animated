<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/1408.jpg" alt="background" class="session-background">
    <div class="text-box">
      <span>Hvem har tidligere vist dig hvordan man <br>gør noget?</span>
      <span> Hvem har hjulpet dig med at <br>føle dig glad?</span>
      <span> Giv dem en stor tak!</span>
    </div>
    <audio src="../../assets/sounds/session10/Page200.mp3" ref="voice"/>
    <div class="page-number" id="page-light">200</div>
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
        .add({targets: '.text-box',opacity: 1}, 500)
        .add({targets: text[0],color: '#fff'}, 500)
        .add({targets: text[1],color: '#fff'}, 4800)
        .add({targets: text[2],color: '#fff'}, 8200)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
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
  width: calc(0.46*133vh);
  background-color: #000000;
  padding: 1vh;
  font-size: 3vh;
  color: #000000;
  font-weight: bold;
  opacity: 0;
  text-align: center;
}
</style>
