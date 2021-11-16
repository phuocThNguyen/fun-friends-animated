<template>
  <div class="interactive-container" id="alt-bg">
    <p class="text">Write or draw other rewards in the space below.</p>
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle="canvasStyle" />
    <audio loop src="../../assets/sounds/children-background-music/children-s-music-no-copyright-royalty-free-happy-upbeat-kids-barroom-ballet.mp3"></audio>
  </div>
</template>

<script>
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";
export default {
  name: 'Session9Page11',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 0.98,
        height: 0.8,
        isPicture: true,
        pictureUrl: "session9/drawing-canvas.png",
        backgroundSize: 'contain'
      }
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
.canvas {
  position: absolute;
  left: 1%;
  top: 1vh;
}
.text {
  position: absolute;
  top: 1vh;
  left: 25%;
  padding: 1vh 2.6vh;
  font-size: 3vh;
  font-weight: bold;
  background-color: #000000;
  color: #ffffff;
  z-index: 100;
}
#alt-bg {
  background: rgb(22,94,176);
  background: linear-gradient(rgba(22,94,176,1) 0%, rgba(151,237,255,1) 100%);
}
</style>