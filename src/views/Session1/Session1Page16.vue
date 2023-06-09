<template>
  <div class="interactive-container cloud-background">
    <drawing-canvas class="canvas" v-on:updateCanvas="updateCanvas" :data="canvasData" :canvasStyle='canvasStyle'/>
    <div class="text">
      <div class="para">
        <p> Find the country that you live in.</p>
        <p> Talk to your family and friends about other countries.</p>
      </div>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/sand-castle.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/23Animated_Book_Page22.mp3" ref="voice"/>
  </div>
</template>

<script>
import anime from "animejs";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: "Session1Page16",
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 0.9,
        height: 0.7,
        isPicture: true,
        pictureUrl: "session1/World-Map-ai.jpg",
        backgroundSize: 'contain'
      },
      canvasData: null,
    }
  },
  methods: {
    animateText() {
      let para = document.getElementsByClassName('para')[0].children;
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear'
      });
      animation
        .add({
          targets: para[0],
          color: "#000",
        }, 1000)
        .add({
          targets: para[1],
          color: "#000",
        }, 4244)
        .add({
          targets: para[2],
          color: "#000",
        }, 10248)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1000)
    },
    init() {
      this.canvasData = this.$store.getters.getPage22Data;
    },
    updateCanvas(canvasData) {
      this.$store.commit('setPage22Data', canvasData);
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
    this.setAudioVolumeLevel(0.2);
  }
}
</script>

<style scoped>
.cloud-background {
  background-color: #ffffff;
}
.text {
  position: absolute;
  z-index: 30;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 1vh 0 0 1%;
}
.para {
  background-color: #ffffff;
  opacity: 1;
  width: 100%;
  text-align: center;
}
.para p {
  font-size: 3.5vh;
  color: #ffffff;
  margin-bottom: 0;
}
.canvas {
  position: absolute;
  top: 12vh;
  left: 5%;
}
</style>