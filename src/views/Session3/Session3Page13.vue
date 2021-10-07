<template>
  <div class="interactive-container">
    <drawing-canvas class="canvas" :canvasStyle='canvasStyle'/>
    <div class="white-background">
      <div class="text-box">
        <p>If you want to, say what you are blowing
          away as your bubbles pop.</p>
        <p>If you don't want to say it out loud, draw
          your feelings in the bubbles below.</p>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: "Session3Page13",
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 1,
        height: 0.7,
        isPicture: true,
        pictureUrl: 'session3/bubbles-background2.jpg',
        backgroundSize: 'cover'
      }
    }
  },
  mounted() {
    anime({
      targets: ".text-box",
      opacity: 1,
      duration: 1000,
      delay: 500,
      easing: 'linear'
    })
  }
}
</script>

<style scoped>
.canvas {
  position: absolute;
  top: 10vh;
  left: 0;
}
.white-background {
  position: absolute;
  width: 100%;
  height: 15vh;
  background-color: #ffffff;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-box {
  width: 80%;
  background-color: #000000;
  padding: 1vw;
  opacity: 0;
}
.text-box p {
  color: #ffffff;
  text-align: center;
  font-size: 2vw;
  margin-bottom: 0;
}
</style>