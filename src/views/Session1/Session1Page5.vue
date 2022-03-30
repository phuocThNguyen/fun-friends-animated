<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/2749-resized.jpg" alt="annie">
    <div class="text-box">
      <p class="mb-0">Pil elsker at gynge.</p>
      <p class="mb-0">Hvad kan du li’ at lege med, når du er udenfor?</p>
      <audio ref="audio" autoplay src="../../assets/sounds/session1/playground.mp3"></audio>
    </div>
    <audio src="../../assets/sounds/session1/12Animated_Book_Page11.mp3" ref="voice"></audio>
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
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear',
      })
      animation
        .add({
          targets: ".text-box",
          opacity: 1,
          delay: 500,
        })
        .add({
          targets: text[0],
          opacity: 1,
        }, 1048)
        .add({
          targets: text[1],
          opacity: 1
        }, 3543)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1000)
    }
  },
  mounted() {
    this.animateText();
    this.setAudioVolumeLevel(0.4);
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
  font-size: 6vh;
  opacity: 0;
}
</style>