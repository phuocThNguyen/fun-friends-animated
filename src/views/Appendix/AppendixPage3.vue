<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <div class="title">APPENDIX 3: HAPPINESS IDEA</div>
    <div class="text">Write in the stars thumbs up, kinds, happy choices.</div>
    <audio ref="audio" autoplay loop src="../../assets/sounds/children-background-music/twinkle-twinkle-little-star.mp3"/>
    <audio src="../../assets/sounds/appendix/Session13_Appendix_Page3.mp3" ref="voice"/>
  </div>
</template>

<script>
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: 'AppendixPage3',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 0.92,
        height: 0.81,
        isPicture: true,
        pictureUrl: "appendix/stars.jpeg",
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
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    }
  },
  mounted() {
    this.setAudioVolumeLevel(0.3);
    this.playVoiceOver();
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');
.canvas {
  position: absolute;
  top: 0;
  left: 4%;
}
.title {
  font-family: 'Sigmar One', cursive;
  width: 100%;
  position: absolute;
  top: 1vh;
  text-align: center;
  font-size: 6.5vh;
  color: #ffffff;
}
.text {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 8.5vh;
  font-size: 5vh;
  color: #ffffff;
}
</style>