<template>
  <div class="interactive-container">
    <div class="images">
      <img src="../../assets/images/session1/2350878-resized.jpg" alt="house">
      <img src="../../assets/images/session1/73-resized.jpg" alt="house">
      <img src="../../assets/images/session1/253433-P46W90-433-resized.jpg" alt="house">
      <img src="../../assets/images/session1/9528-resized.jpg" alt="house">
    </div>
    <div class="text-box">
      <p class="text">
        <span>Houses may be different,</span>
        <span> but inside we all feel happiness and sadness sometimes.</span>
      </p>
    </div>
    <audio src="../../assets/sounds/session1/31Animated_Book_Page30.mp3" ref="voice"/>
    <div class="page-number" id="page-light">30</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page24",
  methods: {
    animateText() {
      anime({
        targets: ".text-box",
        opacity: 0.98,
        duration: 500,
        delay: 500,
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
  left: 8%;
  width: 84%;
  top: 37vh;
  z-index: 20;
  background-color: #00CE7C;
  height: auto;
  padding: 1vh;
  opacity: 0;
}
.text {
  font-weight: bold;
  color: #ffffff;
  font-size: 5vh;
  margin-bottom: 0;
  text-align: center;
}
</style>