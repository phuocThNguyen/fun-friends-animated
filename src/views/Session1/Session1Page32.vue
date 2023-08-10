<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/grass-background.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/grass-background.jpg"
      class="session-background"
    />

    <!--  Main content  -->
    <div class="main-content">
      <h1 class="draw">Draw a picture of your favourite animal.</h1>
    </div>
    <drawing-canvas class="canvas" v-on:updateCanvas="updateCanvas" :data="canvasData" :canvasStyle="canvasStyle"/>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Falling-Snow-Sound-Effect-Amplified.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Session1_Page46.mp3" ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: "Session1Page32",
  components: {DrawingCanvas,ImageComponent},
  data() {
    return {
      canvasStyle: {
        width: 0.98,
        height: 0.74,
        isPicture: false,
      },
      canvasData: null,
    }
  },
  methods: {
    animateText() {
      let mainContentAnimation = anime.timeline({easing: 'linear', duration: 500});
      mainContentAnimation
        .add({targets: '.draw', opacity: 1}, 500)
        .add({targets: '.canvas', opacity: 1}, 500)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    init() {
      this.canvasData = this.$store.getters.getPage38Data;
    },
    updateCanvas(canvasData) {
      this.$store.commit('setPage38Data', canvasData);
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
    this.setAudioVolumeLevel(0.6);
  },
};
</script>

<style scoped>
.main-content {
  position: absolute;
  left: 1.3vh;
  top: 1vh;
  width: 130.4vh;
  z-index: 50;
}
.main-content h1 {
  background-color: #000000;
  color: #ffffff;
  font-size: 4vh;
  width: 100%;
  height: auto;
  padding: .2vh;
  opacity: 0;
  text-align: center;
}
.canvas {
  position: absolute;
  top: 7vh;
  left: 1.3vh;
  z-index: 100;
  opacity: 0;
}
</style>