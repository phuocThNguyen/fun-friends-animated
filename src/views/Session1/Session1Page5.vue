<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/2749-resized.jpg" alt="annie">
    <div class="text-box">
      <p class="mb-0">Annie loves playing on the swing.</p>
      <p class="mb-0">How do you have fun when playing outside?</p>
      <audio ref="audio" autoplay src="../../assets/sounds/session1/playground.mp3"></audio>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page5",
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
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    }
  },
  mounted() {
    this.animateText();
    this.setAudioVolumeLevel(0.4);
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
  font-size: 6vh;
}
</style>