<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <div class="text-box">
      <p><strong>Niels møder sin nye lærer</strong></p>
      <p>Lad os lege at du er Niels i dag.</p>
      <p>Hvad mærker du i din krop og hvilke følelser oplever du?
        <br>Hvilke tanker kunne gå gennem dit hoved?</p>
      <p>Hvilke ”grønne” tanker kunne hjælpe dig til at føle dig glad og modig?</p>
    </div>
    <audio src="../../assets/sounds/session5/Page117.mp3" ref="voice"/>
  </div>
</template>

<script>
import anime from "animejs";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: 'Session5Page7',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 1,
        height: 0.82,
        isPicture: true,
        pictureUrl: "session5/Slide1-danish.jpeg",
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
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[0], opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 3400)
        .add({targets: text[2], opacity: 1}, 6400)
        .add({targets: text[3], opacity: 1}, 14600)
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
  width: 48%;
  padding: 1.5vh;
  top: 1%;
  left: 1%;
  background-color: rgba(255,255,255, 0.90);
  opacity: 0;
}
.text-box p {
  font-size: 2.5vh;
  margin-bottom: 0;
  opacity: 0;
}
</style>