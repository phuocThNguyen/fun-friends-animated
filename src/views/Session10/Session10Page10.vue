<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/1354.png" alt="background" class="session-background">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle="canvasStyle"/>
    <p class="text">Give yourself a superhero name and draw a picture of your costume.
      <br>Share it with your classmates
    </p>
    <audio autoplay loop src="../../assets/sounds/children-background-music/snack-time-the-green-orbs-children-s-music-no-copyright-music.mp3"></audio>
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
        width: 0.98,
        height: 0.8,
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
  top: 1vh;
  left: 1%;
  opacity: 0;
}
.text {
  position: absolute;
  top: 1vh;
  left: 1%;
  width: 98%;
  background-color: #000000;
  padding: 0;
  text-align: center;
  font-size: 4vh;
  color: #ffffff;
  opacity: 0;
}
</style>
