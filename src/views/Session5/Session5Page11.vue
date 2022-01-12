<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <div class="text-box">
      <h1>Annie's brother, Tom, knocks over her block building</h1>
      <p>Talk about the feelings Annie and her brother are showing.</p>
      <p>What are some feelings you would be having?</p>
      <p>What are some '<span class="green">green</span>'
        thoughts that can help them play happily together?</p>
      <audio src="../../assets/sounds/session5/Session5_Page11.mp3" ref="voice"/>
    </div>
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
        pictureUrl: "session5/Slide5.jpeg",
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
        }, 600)
        .add({
          targets: text[1],
          opacity: 1
        }, 4810)
        .add({
          targets: text[2],
          opacity: 1
        }, 9243)
        .add({
          targets: text[3],
          opacity: 1
        }, 12600)
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
  bottom: 11%;
  right: 1%;
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