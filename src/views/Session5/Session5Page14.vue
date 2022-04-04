<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <audio src="../../assets/sounds/session5/Session5_Page15.mp3" ref="voice"/>
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
        pictureUrl: "session5/Slide8-danish.jpeg",
        backgroundSize: 'contain'
      },
    }
  },
  methods: {
    saveToDatabase(data) {
      console.log(data)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.canvas {
  position: absolute;
  top: -.5%;
  left: 0;
}
</style>