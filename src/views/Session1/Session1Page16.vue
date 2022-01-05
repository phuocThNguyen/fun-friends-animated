<template>
  <div class="interactive-container cloud-background">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <div class="text">
      <div class="para">
        <p> - Mark the country that you live in.</p>
        <p> - Mark where you and your friends want to visit and connect these places.</p>
        <p><strong>We may be in different places and want different things,
          but we are all joined together by lines of belonging and love.</strong></p>
      </div>
    </div>
    <audio ref="audio" autoplay loop src="../../assets/sounds/children-background-music/sand-castle.mp3"></audio>
    <div class="page-number" id="page-light">23</div>
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
        height: 0.55,
        isPicture: true,
        pictureUrl: "session1/World-Map-ai.jpg",
        backgroundSize: 'contain'
      },
    }
  },
  methods: {
    saveToDatabase(data) {
      console.log(data)
    },
    animateText() {
      let para = document.getElementsByClassName('para')[0].children;
      let animation = anime.timeline({
        delay: 700,
        duration: 700,
      });
      animation
        .add({
          targets: "#first",
          color: "#000",
        })
        .add({
          targets: "#second",
          color: "#000",
        })
        .add({
          targets: para[0],
          color: "#d00000",
        })
        .add({
          targets: para[1],
          color: "#d00000",
        })
        .add({
          targets: para[2],
          color: "#000",
        })
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    }
  },
  mounted() {
    this.animateText();
    this.setAudioVolumeLevel(0.2)
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
}
.para p {
  font-size: 3.5vh;
  color: #ffffff;
  margin-bottom: 0;
}
.canvas {
  position: absolute;
  top: 22vh;
  left: 5%;
}
</style>