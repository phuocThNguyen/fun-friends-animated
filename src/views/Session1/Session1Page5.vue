<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/2749-resized.jpg" alt="annie">
    <div class="text-box">
      <p class="mb-0">Pil elsker at gynge.</p>
      <p class="mb-0">Hvad kan du li’ at lege med, når du er udenfor?</p>
    </div>
    <audio ref="audio" autoplay src="../../assets/sounds/session1/playground.mp3"/>
    <audio src="../../assets/sounds/session1/Page11.mp3" ref="voice"/>
    <div class="page-number" id="page-light">11</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page5",
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear',})
      animation
        .add({targets: ".text-box", opacity: 1}, 200)
        .add({targets: text[0], opacity: 1,}, 600)
        .add({targets: text[1], opacity: 1}, 3400)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 0)
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
.text-box {
  height: auto;
  width: auto;
  background-color: rgba(0, 206, 124, 0.95);
  position: absolute;
  top: 2vh;
  left: 2%;
  opacity: 0;
  padding: 2vh;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  display: flex;
  font-size: 4vh;
  opacity: 0;
}
</style>