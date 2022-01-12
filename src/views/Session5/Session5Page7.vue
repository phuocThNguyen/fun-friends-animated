<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <div class="text-box">
      <p><strong>Tom meets his new teacher</strong></p>
      <p>Pretend you are Tom.</p>
      <p>What could you be feeling?
        <br>What could you be thinking?</p>
      <p>What are some '<span class="green">green</span>' thoughts
        <br>that make you feel happy and brave?</p>
    </div>
    <audio src="../../assets/sounds/session5/Session5_Page7.mp3" ref="voice"/>
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
        pictureUrl: "session5/Slide1.jpeg",
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
        }, 736)
        .add({
          targets: text[1],
          opacity: 1
        }, 3265)
        .add({
          targets: text[2],
          opacity: 1
        }, 5318)
        .add({
          targets: text[3],
          opacity: 1
        }, 12020)
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
  width: 40%;
  padding: 2vh;
  top: 1%;
  left: 1%;
  background-color: rgba(255,255,255, 0.90);
  opacity: 0;
}
.text-box p {
  font-size: 2rem;
  margin-bottom: 0;
  opacity: 0;
}
</style>