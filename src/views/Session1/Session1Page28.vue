<template>
  <div class="interactive-container">
    <div class="images">
      <img src="../../assets/images/session1/938-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/1200-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/189-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/6796-resized.jpg" alt="house" />
    </div>
    <div class="text-box">
      <p class="text">
        <span>
          Trying different foods is fun
        </span>
      </p>
    </div>
    <audio src="../../assets/sounds/session1/35Animated_Book_Page34.mp3" ref="voice"/>
    <div class="page-number" id="page-light">34</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page28",
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
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  },
};
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
  width: 62vh;
  height: 43vh;
  opacity: 1;
  align-self: center;
  justify-self: center;
}
.text-box {
  position: absolute;
  left: 18%;
  top: 39vh;
  z-index: 20;
  background-color: #00CE7C;
  width: auto;
  height: auto;
  padding: 2vh 4.6vh;
  opacity: 0;
}
.text {
  font-weight: bold;
  color: #ffffff;
  font-size: 6vh;
  margin-bottom: 0;
}
</style>
