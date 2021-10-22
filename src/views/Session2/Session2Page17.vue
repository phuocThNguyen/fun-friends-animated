<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle="canvasStyle"/>
    <div class="text-box">
      <h1>A Tree With 'Feelings'</h1>
      <p>Make one tree with your friends. You can do this by drawing, creating, planting,
       or finding one outside, or using your bodies to build one!</p>
      <p>Draw or write down one feeling you have had and act it out in a group.</p>
      <p>When and why did you feel the way that you did? <strong>All feelings are OK.</strong></p>
    </div>
  </div>
</template>

<script>


import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";
export default {
  name: "Session2Page17",
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 1,
        height: 0.8,
        isPicture: true,
        pictureUrl: 'session2/feeling-tree.png',
        backgroundSize: 'cover'
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
  top: 0;
  left: 0;
}
.text-box {
  position: absolute;
  z-index: 100;
  background-color: #ffffff;
  width: 27%;
  padding: 2.8vh;
  top: 1vh;
  left: 5%;
}
.text-box h1 {
  font-size: 5vh;
  margin-bottom: 2vh;
}
.text-box p {
  font-size: 2.6vh;
  margin-bottom: 1vh;
}
.text-box p:nth-child(3) {
  color: #d00000;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>