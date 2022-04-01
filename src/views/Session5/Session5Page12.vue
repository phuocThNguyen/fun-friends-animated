<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <div class="text-box">
      <p>al om de følelser som Maja og hendes bror udstråler.
        På hvilke måder er de ens? På hvilke måder er de forskellige?
        Kig på billederne: hvilke tanker tror du der går gennem deres hoveder?</p>
      <p>Hvilke(n) følelse(r) ville du opleve hvis du var i en lignende situation?
        Hvilke(n) grønne tanke(r) ville kunne hjælpe dem til at
        hygge sig imens de leger sammen?</p>
      <audio src="../../assets/sounds/session5/Session5_Page12.mp3" ref="voice"/>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: 'Session5Page12',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 1,
        height: 0.82,
        isPicture: true,
        pictureUrl: "session5/Slide6.jpeg",
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
      })
      animation
        .add({
          targets: '.text-box',
          opacity: 1
        }, 500)
        .add({
          targets: text[0],
          opacity: 1
        }, 719)
        .add({
          targets: text[1],
          opacity: 1
        }, 5107)
        .add({
          targets: text[2],
          opacity: 1
        }, 8600)
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
.canvas {
  position: absolute;
  top: -0.5%;
  left: 0;
}
.green {
  color: #00CE7C;
}
.text-box {
  position: absolute;
  width: 59%;
  padding: 2vh;
  top: 0;
  left: 0;
  background-color: rgba(255,255,255, 0.95);
  opacity: 0;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: .5vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>