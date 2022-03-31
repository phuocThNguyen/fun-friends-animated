<template>
  <div class="interactive-container">
    <div class="images">
      <img src="../../assets/images/session1/3748-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/71023-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/1114-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/333-resized.jpg" alt="house" />
    </div>
    <div class="text-box">
      <p class="text">
        <span>Det kan være vi spiser noget forskelligt,</span>
        <span> men det er lækkert alt sammen.</span>
      </p>
    </div>
    <audio src="../../assets/sounds/session1/34Animated_Book_Page33.mp3" ref="voice"/>
    <div class="page-number" id="page-light">33</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page27",
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
  width: 64vh;
  height: 43vh;
  opacity: 1;
  align-self: center;
  justify-self: center;
}
.text-box {
  position: absolute;
  left: 8vh;
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
