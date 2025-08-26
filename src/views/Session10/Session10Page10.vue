<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session10/1354.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session10/1354.jpg"
      class="session-background"
    />
    <drawing-canvas class="canvas" v-on:updateCanvas="updateCanvas" :data="canvasData" :canvasStyle="canvasStyle"/>
    <div class="text-box">
      <p>Give yourself a superhero name and draw a picture of your costume.</p>
      <p>Share it with your classmates</p>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/children-s-music-no-copyright-royalty-free-happy-upbeat-kids-barroom-ballet.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session10/Session10_Page10.mp3" ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";
import anime from "animejs";
export default {
  name: 'Session10Page10',
  components: {DrawingCanvas,ImageComponent},
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
  props: {
    startPage: Number,
    pageNum: Number,
  },
  methods: {
    setPageNumber() {
      this.page = this.pageNum + this.startPage - 1;
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
    init() {
      this.canvasData = this.$store.getters.getPage197Data;
    },
    updateCanvas(canvasData) {
      this.$store.commit('setPage197Data', canvasData);
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  created() {
    this.init();
    this.setPageNumber();
  },
  mounted() {
    this.setAudioVolumeLevel(0.3);
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
