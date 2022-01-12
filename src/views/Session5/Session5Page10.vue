<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <div class="text-box">
      <p>Pretend that it is your turn to do <br>'show and tell'.</p>
      <p>What could you be feeling?</p>
      <p>What are some '<span class="green">green</span>' thoughts
        <br>that make you feel happy and brave?</p>
      <audio src="../../assets/sounds/session5/Session5_Page10.mp3" ref="voice"/>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: 'Session5Page10',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 1,
        height: 0.82,
        isPicture: true,
        pictureUrl: "session5/Slide4.jpeg",
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
          targets: '.text-box',
          opacity: 1
        }, 500)
        .add({
          targets: text[0],
          opacity: 1
        }, 828)
        .add({
          targets: text[1],
          opacity: 1
        }, 4871)
        .add({
          targets: text[2],
          opacity: 1
        }, 7294)
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
  width: 39%;
  padding: 1vh 2vh;
  top: 1%;
  right: 1%;
  background-color: rgba(255,255,255, 0.95);
  opacity: 0;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: .5vh;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>