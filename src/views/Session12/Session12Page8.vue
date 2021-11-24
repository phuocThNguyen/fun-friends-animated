<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <audio ref="audio" autoplay loop src="../../assets/sounds/children-background-music/sand-castle.mp3"></audio>
  </div>
</template>

<script>
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";
export default {
  name: 'Session12Page8',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 0.96,
        height: 0.82,
        isPicture: true,
        pictureUrl: "session12/balloons.jpg",
        backgroundSize: 'contain'
      },
    }
  },
  methods: {
    saveToDatabase(data) {
      console.log(data)
    }
  },
  mounted() {
    this.$refs.audio.volume = 0.3
  }
}
</script>

<style scoped>
.canvas {
  position: absolute;
  top: 0;
  left: 2%;
}
</style>
