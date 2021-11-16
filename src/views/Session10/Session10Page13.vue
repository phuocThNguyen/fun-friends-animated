<template>
  <div class="interactive-container" id="alt-bg">
    <p class="text">Who has showed you how to do something
    before? Who has helped you feel happy?
      <br>Write their names in the space below or give them
    a big thank you.</p>
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle="canvasStyle" />
    <audio loop src="../../assets/sounds/children-background-music/no-copyright-music-funny-children-kids-music-by-mokka-kids.mp3"></audio>
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
        width: 0.98,
        height: 0.8,
        isPicture: true,
        pictureUrl: "session10/drawing-canvas.png",
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
  width: 98%;
  top: 1vh;
  left: 1%;
  padding: 0;
  font-size: 3vh;
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