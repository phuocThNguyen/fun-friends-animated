<template>
  <div class="interactive-container" id="alt-bg">
    <p class="text">Who has showed you how to do something
    before? Who has helped you feel happy?
      <br>Write their names in the space below or give them
    a big thank you.</p>
    <drawing-canvas class="canvas" :canvasStyle="canvasStyle" />
  </div>
</template>

<script>
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";
export default {
  name: 'Session10Page13',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 0.96,
        height: 0.8,
        isPicture: true,
        pictureUrl: "session10/drawing-canvas.png",
        backgroundSize: 'contain'
      }
    }
  }
}
</script>

<style scoped>
.canvas {
  position: absolute;
  left: 2vw;
  top: 1vh;
}
.text {
  position: absolute;
  width: 86vw;
  top: 1vh;
  left: 7vw;
  padding: .5vh 2vw;
  font-size: 2vw;
  font-weight: bold;
  text-align: center;
  background-color: #000000;
  color: #ffffff;
  z-index: 100;
}
#alt-bg {
  background: rgb(34,193,195);
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
}
</style>