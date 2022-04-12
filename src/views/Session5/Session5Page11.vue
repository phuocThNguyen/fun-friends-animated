<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <div class="text-box">
      <h1>Majas bror, Viktor, har væltet hendes tårn</h1>
      <p>Tal om de følelser som Maja og hendes bror udviser.
        På hvilke måder er de ens? På hvilke måder er de forskellige fra hinanden?
        Hvilke tanker har de måske hver især, på hvert af de to billeder
        (på denne og næste side)?</p>
      <p>Hvilke(n) følelse(r) ville du opleve hvis du var i en lignende situation?
        Hvilke(n) grønne tanke(r) ville kunne hjælpe dem til at hygge
        sig imens de leger sammen?</p>
    </div>
    <audio src="../../assets/sounds/session5/Session5_Page11.mp3" ref="voice"/>
  </div>
</template>

<script>
import anime from "animejs";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: 'Session5Page11',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 1,
        height: 0.82,
        isPicture: true,
        pictureUrl: "session5/Slide5-danish.jpeg",
        backgroundSize: 'contain'
      },
    }
  },
  methods: {
    saveToDatabase(data) {
      console.log(data)
    },
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box', opacity: 1}, 1)
        .add({targets: text[1], opacity: 1}, 1)
        .add({targets: text[2], opacity: 1}, 1)
        .add({targets: text[3], opacity: 1}, 1)
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
.canvas {
  position: absolute;
  top: -0.5%;
  left: 0;
}
.text-box {
  position: absolute;
  width: 58vh;
  padding: 2vh;
  bottom: 11%;
  right: 1%;
  background-color: rgba(255,255,255, 0.95);
  opacity: 0;
}
.text-box h1 { font-size: 3vh }
.text-box p {
  font-size: 2.5vh;
  margin-bottom: .5vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0 !important;
}
</style>