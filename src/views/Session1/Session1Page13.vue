<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/476-resized.jpg" alt="family-enjoy-picnic">
    <div class="text-box">
      <p class="mb-0">Familien nyder at dele en lækker madpakke.</p>
    </div>
    <audio src="../../assets/sounds/session1/Relaxing-Forest-Sound-Effect.mp3" ref="audio" autoplay loop/>
    <audio src="../../assets/sounds/session1/Page19.mp3" ref="voice"/>
    <div class="page-number" id="page-light">19</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page13",
  methods: {
    animateText() {
      anime({
        targets: ".text-box",
        opacity: 1,
        delay: 500,
        duration: 500,
        easing: 'linear',
      })
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    }
  },
  mounted() {
    this.setAudioVolumeLevel(0.2);
    this.animateText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.text-box {
  width: 100vh;
  background-color: #00ce7c;
  position: absolute;
  bottom: 6vh;
  left: 16vh;
  opacity: 0;
  text-align: center;
  padding: 1vh
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  font-size: 3.5vh;
}
</style>