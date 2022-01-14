<template>
  <div class="interactive-container" id="alt-bg">
    <div class="text-box">
      <p>Who has showed you how to do something
        before? Who has helped you feel happy?</p>
      <p>Write their names in the space below or give them
        a big thank you.</p>
    </div>
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle="canvasStyle" />
    <audio ref="audio" autoplay loop src="../../assets/sounds/children-background-music/no-copyright-music-funny-children-kids-music-by-mokka-kids.mp3"/>
    <audio src="../../assets/sounds/session10/Session10_Page13.mp3" ref="voice"/>
  </div>
</template>

<script>
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";
import anime from "animejs";
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
    },
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box',opacity: 1}, 500)
        .add({targets: text[0],opacity: 1}, 1200)
        .add({targets: text[1],opacity: 1}, 8500)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1000)
    },
  },
  mounted() {
    this.setAudioVolumeLevel(0.3);
    this.animateText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.canvas {
  position: absolute;
  left: 1%;
  top: 1vh;
}
.text-box {
  position: absolute;
  width: 98%;
  top: 1vh;
  left: 1%;
  padding: 0;
  background-color: #000000;
  z-index: 100;
  opacity: 0;
}
.text-box p {
  font-size: 3vh;
  text-align: center;
  color: #ffffff;
  opacity: 0;
}
#alt-bg {
  background: rgb(34,193,195);
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
}
</style>