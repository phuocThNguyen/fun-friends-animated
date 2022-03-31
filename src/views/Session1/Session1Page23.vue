<template>
  <div class="interactive-container">
    <div class="images">
      <img src="../../assets/images/session1/3051-resized.jpg" alt="house">
      <img src="../../assets/images/session1/13204-resized.jpg" alt="house">
      <img src="../../assets/images/session1/11185-resized.jpg" alt="house">
      <img src="../../assets/images/session1/290-resized.jpg" alt="house">
    </div>
    <div class="text-box">
      <p class="text">
        <span>Det kan godt være vi bor forskelligt, men indenfor har vi alle en familie.</span>
      </p>
    </div>
    <audio src="../../assets/sounds/session1/30Animated_Book_Page29.mp3" ref="voice"/>
    <div class="page-number" id="page-light">29</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page23",
  methods: {
    animateText() {
      anime({
        targets: ".text-box",
        opacity: 0.98,
        duration: 500,
        delay: 1,
        easing: 'linear',
      })
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.images {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: grid;
  grid-template-columns: auto auto;
}
.images img {
  width: 66vh;
  height: 43vh;
  opacity: 1;
  align-self: center;
  justify-self: center;
}
.text-box {
  position: absolute;
  left: 6vh;
  top: 42vh;
  z-index: 20;
  background-color: #00CE7C;
  width: auto;
  height: auto;
  padding: 1vh 4vh;
  opacity: 0;
  text-align: center;
}
.text {
  font-weight: bold;
  color: #ffffff;
  font-size: 3.5vh;
  margin-bottom: 0;
}
</style>