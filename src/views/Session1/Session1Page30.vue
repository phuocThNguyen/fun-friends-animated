<template>
  <div class="interactive-container">
    <div class="images">
      <img src="../../assets/images/session1/40364-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/1745-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/9221-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/3229-resized.jpg" alt="house" />
    </div>
    <div class="text-box">
      <p class="text">
        <span>Det kan være vi går i forskelligt tøj, men det er alt sammen vildt sejt.</span>
      </p>
    </div>
    <audio src="../../assets/sounds/session1/Page36.mp3" ref="voice"/>
    <div class="page-number" id="page-light">36</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page30",
  methods: {
    animateText() {
      anime({
        targets: ".text-box",
        opacity: 1,
        delay: 1500,
        duration: 500,
        easing: 'linear',
      })
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1000)
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
  left: 12vh;
  top: 42vh;
  z-index: 20;
  background-color: #00CE7C;
  width: auto;
  height: auto;
  padding: 1vh;
  opacity: 0;
}
.text {
  font-weight: bold;
  color: #ffffff;
  font-size: 3.5vh;
  margin-bottom: 0;
}
</style>
