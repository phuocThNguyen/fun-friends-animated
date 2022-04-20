<template>
  <div class="interactive-container">
    <img src="../../assets/images/session8/32050.png" alt="city" class="session-background">
    <div class="text-box">
      <p>Hvad er det der gør at dine venner er omsorgsfulde og venlige? Find en
        klassekammerat / ven(inde) og vis eller fortæl vedkommende hvilke ting
        hun / han gør som du synes er omsorgsfuldt og venligt.</p>
      <p>Det kan være hun / han smiler, deler, hjælper, lytter eller griner?</p>
    </div>
    <audio src="../../assets/sounds/session8/Page158.mp3" ref="voice"/>
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
        .add({targets: '.text-box',opacity: 1}, 500)
        .add({targets: text[0],opacity: 1}, 500)
        .add({targets: text[1],opacity: 1}, 15500)
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
  bottom: 12vh;
  left: calc(0.05*133vh);
  width: calc(0.9*133vh);
  padding: 2vh;
  font-size: 4vh;
  background-color: rgba(255,255,255,0.95);
  opacity: 0;
}
.text-box p {
  margin-bottom: 0;
  opacity: 0
}
</style>