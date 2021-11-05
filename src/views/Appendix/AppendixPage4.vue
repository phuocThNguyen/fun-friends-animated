<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <audio autoplay loop src="../../assets/sounds/children-background-music/twinkle-twinkle-little-star.mp3"></audio>
  </div>
</template>

<script>
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: 'AppendixPage4',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 0.92,
        height: 0.81,
        isPicture: true,
        pictureUrl: "appendix/stars-2.jpeg",
        backgroundSize: 'contain'
      },
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
  top: 0;
  left: 4%;
}
</style>