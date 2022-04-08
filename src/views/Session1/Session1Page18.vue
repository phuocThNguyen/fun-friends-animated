<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/289258-P6O0D3-288-resized.jpg" alt="family-enjoy-water">
    <div class="text-box">
      <p class="mb-0">Vi blev født i forskellige lande.</p>
      <p class="mb-0">Hvor blev du født?</p>
    </div>
    <audio src="../../assets/sounds/session1/Page24.mp3" ref="voice"/>
    <div class="page-number" id="page-light">24</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page18",
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: ".text-box", opacity: 1}, 600)
        .add({targets: text[0], opacity: 1}, 600)
        .add({targets: text[1], opacity: 1}, 3400)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    }
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.text-box {
  width: 60vh;
  background-color: #00ce7c;
  position: absolute;
  bottom: 6vh;
  left: 35vh;
  opacity: 0;
  text-align: center;
  padding: 1vh
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  font-size: 3vh;
  opacity: 0;
}
</style>