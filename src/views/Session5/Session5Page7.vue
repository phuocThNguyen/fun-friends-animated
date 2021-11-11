<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <div class="text-box">
      <p><strong>Tom meets his new teacher</strong></p>
      <p>Pretend you are Tom.</p>
      <p>What could you be feeling? What could you be thinking?</p>
      <p>What are some '<span class="green">green</span>' thoughts that make you feel happy
        and brave?</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: 'Session5Page7',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 1,
        height: 0.82,
        isPicture: true,
        pictureUrl: "session5/1.jpg",
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
    anime({
      targets: '.text-box',
      opacity: 1,
      easing: 'linear',
      duration: 500,
      delay: 500
    })
  }
}
</script>

<style scoped>
.canvas {
  position: absolute;
  top: 0;
  left: 0;
}
.green {
  color: #00CE7C;
}
.text-box {
  position: absolute;
  width: 80%;
  padding: 2vh;
  bottom: 10%;
  left: 10%;
  background-color: rgba(255,255,255, 0.90);
  opacity: 0;
}
.text-box p {
  font-size: 2rem;
  margin-bottom: 0;
}
</style>