<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/1354.png" alt="background" class="session-background">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle="canvasStyle"/>
    <div class="text-box">
      <p>Hvis du har lyst kan du give dig selv et superheltenavn. Du kan skrive det på
        et stykke papir, dele det med dine venner / klassekammerater, eller tegne et
        billede af dit kostume! Del det med dine venner / klassekammerater.</p>
    </div>
    <audio ref="audio" autoplay loop src="../../assets/sounds/children-background-music/snack-time-the-green-orbs-children-s-music-no-copyright-music.mp3"/>
    <audio src="../../assets/sounds/session10/Page196.mp3" ref="voice"/>
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
        .add({targets: text[0],opacity: 1}, 500)
        .add({targets: '.canvas',opacity: 1}, 16000)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
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
  left: calc(0.01*133vh);
  opacity: 0;
}
.text-box {
  position: absolute;
  top: 1vh;
  left: calc(0.01*133vh);
  width: calc(0.98*133vh);
  background-color: #000000;
  padding: 1.5vh 0;
  opacity: 0;
}
.text-box p {
  text-align: center;
  font-size: 2.7vh;
  color: #ffffff;
  opacity: 0;
  margin-bottom: 0;
}
</style>
