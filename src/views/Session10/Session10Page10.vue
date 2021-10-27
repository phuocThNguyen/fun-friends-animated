<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/1354.png" alt="background" class="session-background">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle="canvasStyle"/>
    <p class="text">If you want, give yourself a superhero name.
     You can write it on our paper, share it with your classmates
     or draw a picture of your costume! Share it with your classmates.
    </p>
    <audio autoplay loop src="../../assets/sounds/children-background-music/snack-time-the-green-orbs-children-s-music-no-copyright-music.mp3"></audio>
    <p class="credit">Music: Snack Time - The Green Orbs</p>
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
        height: 0.7,
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
.credit {
  position: absolute;
  margin-bottom: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 2vh;
}
.canvas {
  position: absolute;
  top: 3vh;
  left: 5%;
  opacity: 0;
}
.text {
  position: absolute;
  top: 3vh;
  left: 10%;
  width: 80%;
  background-color: #000000;
  padding: 1vh 2.8vh;
  text-align: center;
  font-size: 2.6vh;
  color: #ffffff;
  opacity: 0;
}
</style>
