<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle="canvasStyle"/>
    <div class="text-box">
      <h1>Et træ med "følelses" cirkler</h1>
      <p>Lav et træ med dine venner. I kan gøre det ved at tegne, kreere,
        eller plante et træ. I kan også vælge at finde et træ udenfor
        eller bruge jeres kroppe til at danne træet!</p>
      <p>Tegn eller tal om en følelse I hver især har haft, sæt dem fast
        på træet, og hvis I har lyst kan I lave et lille rollespil over
        jeres følelser for de andre i gruppen.</p>
      <p>Hvornår har I oplevet den følelse /
        haft det på den måde? Og hvorfor? <strong>Alle følelser er OK.</strong></p>
    </div>
    <audio ref="audio" autoplay loop src="../../assets/sounds/children-background-music/no-copyright-music-funny-children-kids-music-by-mokka-kids.mp3"/>
    <audio src="../../assets/sounds/session2/Page63.mp3" ref="voice"/>
    <div class="page-number" id="page-light">63</div>
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
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 3200)
        .add({targets: text[2], opacity: 1}, 17500)
        .add({targets: text[3], opacity: 1}, 30000)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
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
  font-size: 4.5vh;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 2.7vh;
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