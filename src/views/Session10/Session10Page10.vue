<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/1354.png" alt="background" class="session-background">
    <drawing-canvas class="canvas" :canvasStyle="canvasStyle"/>
    <p class="text">If you want, give yourself a superhero name.
     You can write it on our paper, share it with your classmates
     or draw a picture of your costume! Share it with your classmates.
    </p>
  </div>
</template>

<script>
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";
import anime from "animejs";
export default {
  name: 'Session10Page10',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 0.9,
        height: 0.75,
        isPicture: false,
      }
    }
  },
  mounted() {
    let animation = anime.timeline({
      easing: 'linear',
      duration: 500,
      delay: 500
    })
    animation
      .add({
        targets: '.canvas',
        opacity: 1
      })
      .add({
        targets: '.text',
        opacity: 1
      }, 0)
  }
}
</script>

<style scoped>
.canvas {
  position: absolute;
  top: 3vh;
  left: 5vw;
  opacity: 0;
}
.text {
  position: absolute;
  top: 3vh;
  left: 10vw;
  width: 80vw;
  background-color: #000000;
  padding: 1vh 2vw;
  text-align: center;
  font-size: 2vw;
  color: #ffffff;
  opacity: 0;
}
</style>
