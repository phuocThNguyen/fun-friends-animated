<template>
  <div class="interactive-container">
    <img src="../../assets/images/session8/33261.jpg" alt="Tom" class="session-background">
    <div class="text-box">
      <p>Eske er faldet af sin cykel. Han har kun lige lært at cykle uden støttehjul.</p>
      <p>Hvordan tror du han har det? Hvilke følelser oplever han?</p>
      <p>Hvad kan du gøre for at være en omsorgsfuld ven overfor Eske?</p>
    </div>
    <audio src="../../assets/sounds/session8/Page159.mp3" ref="voice"/>
    <div class="page-number" id="page-light">159</div>
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
        .add({targets: text[0], opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 7100)
        .add({targets: text[2], opacity: 1}, 12100)
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
  left: calc(0.01*133vh);
  width: calc(0.4*133vh);
  background-color: rgba(255,255,255,0.9);
  padding: 2vh 2.6vh;
  opacity: 0;
}
.text-box h1 {font-size: 4vh; margin-bottom: 1vh; opacity: 0}
.text-box p {font-size: 3vh;margin-bottom: 0;opacity: 0;}
</style>