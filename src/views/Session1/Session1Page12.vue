<template>
  <div class="interactive-container">
    <img class="session-background" id="page-11" src="../../assets/images/session1/18722-resized.jpg" alt="our-families">

    <div class="left-bar">
      <h1>Vores familier</h1>
      <p id="para-1">Fortæl om din familie og det I kan li’ at lave.</p>
      <p id="para-2">Hvilke spil og lege kan I li’?</p>
      <p id="para-3">Hvad nyder du at lave sammen med din familie?</p>

      <div class="text-box">
        <p>Vi elsker at tage hen i parken eller på udflugt i naturen.</p>
      </div>
    </div>
    <audio src="../../assets/sounds/session1/Page18.mp3" ref="voice"/>
    <div class="page-number" id="page-light">18</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page12",
  methods: {
    animateText() {
      let text = document.querySelector('.left-bar').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: ".left-bar", opacity: 1}, 500)
        .add({targets: text[0], opacity: 1},  500)
        .add({targets: text[1], opacity: 1}, 3100)
        .add({targets: text[2], opacity: 1}, 8000)
        .add({targets: text[3], opacity: 1}, 11600)
        .add({targets: ".text-box", opacity: 1}, 15600)
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
.left-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 28%;
  height: 100%;
  background-color: rgba(255,255,255,1);
  z-index: 10;
  opacity: 0;
  padding: 3vh 2vh;
}
.left-bar h1 {
  font-size: 4vh;
  margin-bottom: 2vh;
  opacity: 0;
}
.left-bar p {
  opacity: 0;
  font-size: 3vh;
}
.text-box {
  height: auto;
  width: 98%;
  padding: .5vh;
  background-color: #00ce7c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15vh;
  left: 1%;
  opacity: 0;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0;
  text-align: center;
  opacity: 1 !important;
}
</style>