<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/126256-resized.jpg" alt="butterflies-in-the-tummy" class="session-background">
    <div class="text-box">
      <h1>Sommerfugle i maven</h1>
      <p>Hvad sker der med dig / hvad oplever du, når du føler dig nervøs?</p>
      <p>Vis hvad der sker i din krop ved hjælp af rollespil, dans eller at tegne det.</p>
      <p>Hvordan har dine venner det - hvad føler / mærker de, når de har det sådan?</p>
      <p>Hvordan ligner jeres reaktioner hinanden? Og hvordan reagerer I eventuelt forskelligt?</p>
      <p>Spørg dine venner hvad de tænker du kan gøre for at falde til ro. Lyt og svar, når de spørger dig.</p>
      <p>Husk - det er helt normalt at bekymre sig, det er hvad du vælger at gøre ved det, der kan være en ”thumbs-up” eller ”thumbs-down” valg.</p>
    </div>
    <audio src="../../assets/sounds/session4/Session4_Page3.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">89</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session4Page3",
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
      });
      animation
        .add({
          targets: text[1],
          opacity: 1
        }, 1)
        .add({
          targets: text[2],
          opacity: 1,
        }, 1)
        .add({
          targets: text[3],
          opacity: 1,
        }, 1)
        .add({
          targets: text[4],
          opacity: 1,
        }, 1)
        .add({
          targets: text[5],
          opacity: 1,
        }, 1)
        .add({
          targets: text[6],
          opacity: 1,
        }, 1)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 0)
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
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #ffffff;
  width: 45%;
  height: 100%;
  padding: 1.5vh;
}
.text-box h1 {
  font-size: 4vh;
  font-weight: bold;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: 1vh;
  opacity: 0;
}
.text-box p:nth-of-type(2) {
  color: #FF0000;
}
</style>