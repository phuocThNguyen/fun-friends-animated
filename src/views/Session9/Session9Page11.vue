<template>
  <div class="interactive-container" id="alt-bg">
    <p class="text">Write or draw other rewards in the space below.</p>
    <drawing-canvas class="canvas" :canvasStyle="canvasStyle" />
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
        width: 0.9,
        height: 0.8,
        isPicture: true,
        pictureUrl: "session9/drawing-canvas.png",
        backgroundSize: 'contain'
      }
    }
  }
}
</script>

<style scoped>
.canvas {
  position: absolute;
  left: 5vw;
  top: 1vh;
}
.text {
  position: absolute;
  top: 1vh;
  left: 25vw;
  padding: 1vh 2vw;
  font-size: 2vw;
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