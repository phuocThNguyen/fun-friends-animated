<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/43-resized.jpg" alt="family-enjoy-water">
    <div class="text-box">
      <p class="mb-0">This family has fun playing in the water.</p>
    </div>
    <audio src="../../assets/sounds/session1/21Animated_Book_Page20.mp3" ref="voice"/>
    <div class="page-number" id="page-light">20</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page14",
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
      setTimeout(() => {this.$refs.voice.play()}, 500)
    }
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.text-box {
  width: 84%;
  background-color: #00ce7c;
  position: absolute;
  bottom: 6vh;
  left: 8%;
  opacity: 0;
  text-align: center;
  padding: 1vh
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  font-size: 6vh;
}
</style>