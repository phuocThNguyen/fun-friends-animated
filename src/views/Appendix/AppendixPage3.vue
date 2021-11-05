<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <div class="title">APPENDIX 3: HAPPINESS IDEA</div>
    <div class="text">Write in the stars thumbs up, kinds, happy choices.</div>
    <audio autoplay loop src="../../assets/sounds/children-background-music/twinkle-twinkle-little-star.mp3"></audio>
  </div>
</template>

<script>
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: 'AppendixPage3',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 0.92,
        height: 0.81,
        isPicture: true,
        pictureUrl: "appendix/stars.jpeg",
        backgroundSize: 'contain'
      },
    }
  },
  methods: {
    saveToDatabase(data) {
      console.log(data)
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');
.canvas {
  position: absolute;
  top: 0;
  left: 4%;
}
.title {
  font-family: 'Sigmar One', cursive;
  width: 100%;
  position: absolute;
  top: 2vh;
  text-align: center;
  font-size: 5.4vh;
  color: #ffffff;
}
.text {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 10vh;
  font-size: 3.3vh;
  color: #ffffff;
}
</style>