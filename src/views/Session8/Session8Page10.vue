<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle="canvasStyle"/>
    <div class="text-box">
      <p>Talk to your classmates about ideas on how to make
       new friends. Together, try drawing pictures of your
       ideas or writing your ideas in the balloons. Some ideas
       could be:</p>
      <p>&bull;&nbsp;&nbsp;Go to play in a park, ride a bike or rollerblade.</p>
      <p>&bull;&nbsp;&nbsp;Be BRAVE and speak with a new person.</p>
      <p>&bull;&nbsp;&nbsp;Make a happy drawing to give to your new friend.</p>
    </div>
  </div>
</template>

<script>
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";
import anime from "animejs";

export default {
  name: 'Session8Page10',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 1,
        height: 0.8,
        isPicture: true,
        pictureUrl: "session8/275676-P61H8M-305.png",
        backgroundSize: "cover"
      }
    }
  },
  methods: {
    saveToDatabase(data) {
      console.log(data)
    }
  },
  mounted() {
    anime({
      targets: '.canvas',
      delay: 500,
      duration: 500,
      opacity: 1,
      easing: 'linear'
    })
    anime({
      targets: '.text-box',
      delay: 500,
      duration: 500,
      opacity: 1,
      easing: 'linear'
    })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  padding: 1vh 4vh;
  opacity: 0;
}
.text-box p {
  font-size: 2.6vh;
  margin-bottom: .5vh;
}
.canvas {
  position: absolute;
  opacity: 0;
}
</style>