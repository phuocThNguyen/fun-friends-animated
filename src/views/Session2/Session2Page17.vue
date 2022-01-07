<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle="canvasStyle"/>
    <div class="text-box">
      <h1>A Tree With 'Feelings'</h1>
      <p>Make one tree with your friends. You can do this by drawing, creating, planting,
       or finding one outside, or using your bodies to build one!</p>
      <p>Draw or write down one feeling you have had and act it out in a group.</p>
      <p>When and why did you feel this way? <strong>All feelings are OK.</strong></p>
    </div>
    <audio ref="audio" autoplay loop src="../../assets/sounds/children-background-music/no-copyright-music-funny-children-kids-music-by-mokka-kids.mp3"/>
    <audio src="../../assets/sounds/session2/Session2_Page17.mp3" ref="voice"/>
    <div class="page-number" id="page-light">62</div>
  </div>
</template>

<script>
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";
import anime from "animejs";

export default {
  name: "Session2Page17",
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 1,
        height: 0.77,
        isPicture: true,
        pictureUrl: 'session2/feeling-tree.png',
        backgroundSize: 'cover'
      }
    }
  },
  methods: {
    saveToDatabase(data) {
      console.log(data)
    },
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
      })
      animation
        .add({
          targets: '.text-box',
          opacity: 1
        }, 737)
        .add({
          targets: text[1],
          opacity: 1,
          delay: 500
        }, 2647)
        .add({
          targets: text[2],
          opacity: 1,
        }, 14868)
        .add({
          targets: text[3],
          opacity: 1,
        }, 21204)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateText();
    this.setAudioVolumeLevel(0.4);
    this.playVoiceOver();
  }
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
  width: 33%;
  padding: 1vh 2vh;
  top: 1vh;
  left: 1%;
  opacity: 0;
}
.text-box h1 {
  font-size: 5vh;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 3.3vh;
  margin-bottom: 0;
  opacity: 0;
}
.text-box p:nth-child(3) {
  color: #d00000;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>