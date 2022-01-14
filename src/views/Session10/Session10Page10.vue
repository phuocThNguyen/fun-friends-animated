<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/1354.png" alt="background" class="session-background">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle="canvasStyle"/>
    <div class="text-box">
      <p>Give yourself a superhero name and draw a picture of your costume.</p>
      <p>Share it with your classmates</p>
    </div>
    <audio ref="audio" autoplay loop src="../../assets/sounds/children-background-music/snack-time-the-green-orbs-children-s-music-no-copyright-music.mp3"/>
    <audio src="../../assets/sounds/session10/Session10_Page10.mp3" ref="voice"/>
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
        width: 0.98,
        height: 0.8,
        isPicture: false,
      }
    }
  },
  methods: {
    saveToDatabase(data) {
      console.log(data)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: '.text-box',opacity: 1}, 500)
        .add({targets: text[0],opacity: 1}, 700)
        .add({targets: '.canvas',opacity: 1}, 3500)
        .add({targets: text[1],opacity: 1}, 6200)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.setAudioVolumeLevel(0.3);
    this.animateText();
    this.playVoiceOver();
  },
}
</script>

<style scoped>
.canvas {
  position: absolute;
  top: 1vh;
  left: 1%;
  opacity: 0;
}
.text-box {
  position: absolute;
  top: 1vh;
  left: 1%;
  width: 98%;
  background-color: #000000;
  padding: 0;
  opacity: 0;
}
.text-box p {
  text-align: center;
  font-size: 4vh;
  color: #ffffff;
  opacity: 0;
}
</style>
