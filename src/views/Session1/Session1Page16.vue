<template>
  <div class="interactive-container cloud-background">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
    <div class="text">
      <div class="para">
        <p>Hvor bor du henne?</p>
        <p>Hvor kunne du tænke dig at tage hen på besøg?</p>
        <p>Kig efter venner der har lyst til at besøge forskellige steder. Gå sammen med din ven(inde) og sæt kryds på
          kortet ved det land I bor i. Sæt kryds på kortet der hvor din ven(inde) har lyst til at tage hen og der hvor
          du har lyst til at tage hen. Det kan godt være at vi befinder os forskellige steder og ønsker forskellige ting, men vi er
          alle forbundet med hinanden på kryds og tværs af tilhørs- og kærlighedsbånd.</p>
      </div>
    </div>
    <audio ref="audio" autoplay loop src="../../assets/sounds/children-background-music/sand-castle.mp3"/>
    <audio src="../../assets/sounds/session1/Page22.mp3" ref="voice"/>
    <div class="page-number" id="page-light">22</div>
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
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: para[0], color: "#000"}, 700)
        .add({targets: para[1], color: "#000"}, 3500)
        .add({targets: para[2], color: "#000"}, 7400)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    }
  },
  mounted() {
    this.animateText();
    this.setAudioVolumeLevel(0.2);
    this.playVoiceOver();
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
  font-size: 2.5vh;
  color: #ffffff;
  margin-bottom: 0;
}
.para p:first-child,
.para p:nth-child(2) {
  text-align: center;
  font-weight: bold;
}
.canvas {
  position: absolute;
  top: 22vh;
  left: 5%;
}
</style>