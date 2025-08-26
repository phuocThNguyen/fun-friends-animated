<template>
  <div class="interactive-container">
    <drawing-canvas class="canvas" v-on:updateCanvas="updateCanvas" :data="canvasData" :canvasStyle='canvasStyle'/>
    <div class="white-background">
      <div class="text-box">
        <p>As your bubbles pop, share what feelings
          <br>you are blowing away or draw your feelings below.</p>
      </div>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/children-s-music-no-copyright-royalty-free-happy-upbeat-kids-barroom-ballet.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session3/Session3_Page14.mp3" ref="voice"/>
  </div>
</template>

<script>
import anime from "animejs";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: "Session3Page13",
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 1,
        height: 0.7,
        isPicture: true,
        pictureUrl: 'session3/bubbles-background2.jpg',
        backgroundSize: 'cover'
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
    saveToDatabase(data) {
      console.log(data)
    },
    animateText() {
      anime({
        targets: ".text-box",
        opacity: 1,
        duration: 500,
        delay: 500,
        easing: 'linear'
      })
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    init() {
      this.canvasData = this.$store.getters.getPage83Data;
    },
    updateCanvas(canvasData) {
      this.$store.commit('setPage83Data', canvasData);
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
    this.setAudioVolumeLevel(0.4);
  }
}
</script>

<style scoped>
.canvas {
  position: absolute;
  top: 10vh;
  left: 0;
}
.white-background {
  position: absolute;
  width: 100%;
  height: 15vh;
  background-color: #ffffff;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-box {
  width: 70%;
  background-color: #000000;
  padding: 1vh;
  opacity: 0;
  text-align: center;
}
.text-box p {
  color: #ffffff;
  font-size: 4vh;
  margin-bottom: 0;
}
</style>