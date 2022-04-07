<template>
  <div class="interactive-container">
    <img src="../../assets/images/session11/46140.jpg" alt="children" class="session-background">
    <div class="text">Støttehold</div>
    <div class="text-box">
      <p>Disse børn hjælper hinanden med at være stærke.</p>
      <p>Se dig omkring eller tænk på din familie. Hvad gør andre for at hjælpe dig og hvad gør du for at hjælpe dem?</p>
      <p>Sammenlign dine idéer med en ven(inde), og spørg vedkommende hvad han / hun synes vi kan gøre for at <br>hjælpe hinanden.</p>
    </div>
    <audio src="../../assets/sounds/session11/Session11_Page2.mp3" ref="voice"/>
    <div class="page-number" id="page-light">205</div>
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
        .add({targets: '.text-box',opacity: 1}, 1)
        .add({targets: text[0],opacity: 1}, 1)
        .add({targets: text[1],opacity: 1}, 1)
        .add({targets: text[2],opacity: 1}, 1)
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
.text {
  position: absolute;
  color: #fff;
  left: 4vh;
  top: 3vh;
  font-size: 4vh;
  font-weight: bold;
}
.text-box {
  position: absolute;
  background-color: rgba(255,255,255,0.9);
  width: calc(0.94*133vh);
  bottom: 12vh;
  left: calc(0.03*133vh);
  padding: 1.5vh 2vh;
  font-size: 2.6vh;
  opacity: 0;
}
.text-box p {margin-bottom: .5vh;opacity: 0;}
.text-box p:last-child {margin-bottom: 0;}
</style>
