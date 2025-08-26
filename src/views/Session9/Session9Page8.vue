<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session7/background_73.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session7/background_73.jpg"
      class="page-image"
    />
    <div class="text-box">
      <p>Draw your ideas for rewards with a friend!</p>
      <p>If it's a game, teach your friend how to play it!</p>
    </div>
    <drawing-canvas class="canvas" v-on:updateCanvas="updateCanvas" :data="canvasData" :canvasStyle="canvasStyle"/>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/ukulele-beach-doug-maxwell-children-s-music-no-copyright-music.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session9/Session9_Page8.mp3" ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";
import anime from "animejs";
export default {
  name: 'Session9Page8',
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
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: '.text-box',opacity: 1}, 500)
        .add({targets: text[0],opacity: 1}, 1100)
        .add({targets: text[1],opacity: 1}, 4600)
    },
    saveToDatabase(data) {
      console.log(data)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1000)
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
    this.setPageNumber();
  },
  mounted() {
    this.setAudioVolumeLevel(0.2);
  }
}
</script>

<style scoped>
.page-image {
  position: absolute;
  height: 100%;
  left: -15vh;
}
.text-box {
  display: block;
  position: absolute;
  top: 1vh;
  left: 1%;
  width: 98%;
  background-color: #000000;
  padding: 1vh 1.4vh;
  z-index: 50;
  opacity: 0;
}
.text-box p {
  color: #ffffff;
  text-align: center;
  font-size: 4vh;
  opacity: 0;
}
.canvas {
  position: absolute;
  left: 1%;
  top: 1vh;
}
</style>