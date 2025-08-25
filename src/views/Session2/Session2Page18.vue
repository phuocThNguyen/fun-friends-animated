<template>
  <div class="interactive-container">
    <drawing-canvas class="canvas" v-on:updateCanvas="updateCanvas" :data="canvasData" :canvasStyle="canvasStyle"/>
    <div class="text-box">
      <h1>A Tree With 'Feelings'</h1>
      <p>Happy, sad, angry or worried, draw feeling faces in the yellow circles.</p>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/no-copyright-music-funny-children-kids-music-by-mokka-kids.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session2/Session2_Page17.mp3" ref="voice"/>
    <div class="page-number" id="page-light">78</div>
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
      },
      canvasData: null,
    }
  },
  methods: {
    saveToDatabase(data) {
      console.log(data)
    },
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear', duration: 500,})
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 5200)
        .add({targets: text[2], opacity: 1}, 10000)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    init() {
      this.canvasData = this.$store.getters.getPage63Data;
    },
    updateCanvas(canvasData) {
      this.$store.commit('setPage63Data', canvasData);
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  created() {
    this.init();
  },
  mounted() {
    this.setAudioVolumeLevel(0.4);
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
  width: 34%;
  padding: 1vh 2vh;
  top: 1vh;
  left: 1%;
  opacity: 0;
}
.text-box h1 {
  font-size: 4.2vh;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 3.3vh;
  margin-bottom: 0;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>