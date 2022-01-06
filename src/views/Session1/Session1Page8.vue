<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/3750-resized.jpg" alt="josh">
    <div class="text-box">
      <p class="mb-0">Josh is climbing on the rainbow tyres.</p>
      <p class="mb-0"> He loves walking barefoot on the grass.</p>
    </div>
    <audio src="../../assets/sounds/session1/15Animated_Book_Page14.mp3" ref="voice"/>
    <div class="page-number" id="page-light">14</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page8",
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
        }, 1063)
        .add({
          targets: text[1],
          opacity: 1
        }, 3916)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1000)
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
  height: auto;
  width: auto;
  background-color: rgba(0, 206, 124, 0.95);
  position: absolute;
  top: 2vh;
  left: 2%;
  opacity: 0;
  padding: 1.5vh;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  display: flex;
  font-size: 6vh;
  opacity: 0;
}
</style>