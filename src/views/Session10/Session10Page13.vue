<template>
  <div class="interactive-container" id="alt-bg">
    <div class="text-box">
      <p>Who has shown you how to do something
        before? Who has helped you feel happy?</p>
      <p>Draw their faces in the space below or give them
        a big thank you.</p>
    </div>
    <drawing-canvas class="canvas" v-on:updateCanvas="updateCanvas" :data="canvasData" :canvasStyle="canvasStyle" />
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/no-copyright-music-funny-children-kids-music-by-mokka-kids.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session10/Session10_Page13.mp3" ref="voice"/>
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
        isPicture: false,
      },
      canvasData: null,
    }
  },
  methods: {
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
    init() {
      this.canvasData = this.$store.getters.getPage200Data;
    },
    updateCanvas(canvasData) {
      this.$store.commit('setPage200Data', canvasData);
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
    this.setAudioVolumeLevel(0.3);
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