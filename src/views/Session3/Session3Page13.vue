<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <div class="white-background">
      <div class="text-box">
        <p>Hvis du har lyst, sig hvad det er du puster bort imens dine bobler brister med et ”pop”.
          <br>Hvis ikke du har lyst til at sige det højt, kan du tegne dine følelser i boblerne herunder.</p>
      </div>
    </div>
    <audio ref="audio" autoplay loop src="../../assets/sounds/children-background-music/children-s-music-no-copyright-royalty-free-happy-upbeat-kids-barroom-ballet.mp3"/>
    <audio src="../../assets/sounds/session3/Session3_Page14.mp3" ref="voice"/>
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
      }
    }
  },
  methods: {
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
  width: 100%;
  background-color: #000000;
  padding: 1vh;
  opacity: 0;
  text-align: center;
  position: absolute;
  top: 0;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-box p {
  color: #ffffff;
  font-size: 3vh;
  margin-bottom: 0;
}
</style>