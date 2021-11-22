<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
  </div>
</template>

<script>
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: 'Session5Page14',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 1,
        height: 0.8,
        isPicture: true,
        pictureUrl: "session5/Slide8.jpeg",
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
  top: -.5%;
  left: 0;
}
</style>