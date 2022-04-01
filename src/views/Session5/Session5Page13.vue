<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Ekstra Aktivitet - Røde og Grønne Tanker</h1>
      <p>Daniel og Ella kælker i sneen for første gang.
        Hvilke ”røde” og ”grønne” tanker tror du der går gennem Daniel
        og Ellas hoveder? Del minder om hvordan I havde det, da I prøvede
        noget nyt for første gang. </p>
      <p>Alle mennesker har ”røde” tanker når de skal prøve noget nyt.
        Vi kan alle sammen prøve at udskifte vores ”røde” tanker med ”grønne” tanker. R
        åb en ”grøn tanke” højt som får dig til at føle dig modig! </p>
    </div>
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <audio src="../../assets/sounds/session5/Session5_Page14.mp3" ref="voice"/>
  </div>
</template>

<script>
import anime from "animejs";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: 'Session5Page13',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 1,
        height: 0.58,
        isPicture: true,
        pictureUrl: "session5/Slide7.jpeg",
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
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear'
      });
      animation
        .add({
          targets: text[0],
          opacity: 1
        }, 715)
        .add({
          targets: text[1],
          opacity: 1
        }, 4967)
        .add({
          targets: text[2],
          opacity: 1
        }, 20569)
        .add({
          targets: '.canvas',
          opacity: 1
        }, 33886)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  },
}
</script>

<style scoped>
@media screen and (max-width: 930px) {
  .text-box p {
    font-size: 2.35vh !important;
  }
}
.canvas {
  position: absolute;
  top: 24vh;
  left: 0;
  opacity: 0;
}
.text-box {
  position: absolute;
  padding: 0 1vh;
}
.text-box h1 {
  font-size: 4.2vh;
  font-weight: bold;
  margin-bottom: 0;
  opacity: 0;
}
.text-box p {
  font-size: 2.8vh;
  opacity: 0;
  margin-bottom: 0;
}
tspan { white-space:pre }
.red {
  color: red;
}
.green {
  color: #00CE7C;
}
</style>