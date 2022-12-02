<template>
  <div class="interactive-container" id="alt-bg">
    <p class="text">Write or draw other rewards in the space below.</p>
    <drawing-canvas class="canvas" v-on:updateCanvas="updateCanvas" :data="canvasData" :canvasStyle="canvasStyle" />
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/children-s-music-no-copyright-royalty-free-happy-upbeat-kids-barroom-ballet.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session9/Session9_Page11.mp3" ref="voice"/>
  </div>
</template>

<script>
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";
import anime from "animejs";
export default {
  name: 'Session9Page11',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 0.98,
        height: 0.8,
        isPicture: true,
        pictureUrl: "session9/drawing-canvas.png",
        backgroundSize: 'contain'
      },
      canvasData: null,
    }
  },
  methods: {
    saveToDatabase(data) {
      console.log(data)
    },
    animateText() {
      anime({
        targets: '.text',
        duration: 500,
        delay: 500,
        opacity: 1,
        easing: 'linear'
      });
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    init() {
      this.canvasData = this.$store.getters.getPage184Data;
    },
    updateCanvas(canvasData) {
      this.$store.commit('setPage184Data', canvasData);
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
.canvas {
  position: absolute;
  left: 1%;
  top: 1vh;
}
.text {
  position: absolute;
  top: 1vh;
  left: 25%;
  padding: 1vh 2.6vh;
  font-size: 3vh;
  font-weight: bold;
  background-color: #000000;
  color: #ffffff;
  z-index: 100;
  opacity: 0;
}
#alt-bg {
  background: rgb(22,94,176);
  background: linear-gradient(rgba(22,94,176,1) 0%, rgba(151,237,255,1) 100%);
}
</style>