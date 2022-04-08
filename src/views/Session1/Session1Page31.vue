<template>
  <div class="interactive-container">
    <div class="images">
      <img src="../../assets/images/session1/30164-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/13202-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/172-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/1217-resized.jpg" alt="house" />
    </div>
    <div class="text-box">
      <p class="text">
        <span>Forskellighed og det at være anderledes / ikke at ligne hinanden er sjovt!</span>
      </p>
    </div>
    <audio src="../../assets/sounds/session1/Page37.mp3" ref="voice"/>
    <div class="page-number" id="page-light">37</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page31",
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
  left: 10%;
  top: 42vh;
  z-index: 20;
  background-color: #00CE7C;
  width: auto;
  height: auto;
  padding: 1vh 2vh;
  opacity: 0;
}
.text {
  font-weight: bold;
  color: #ffffff;
  font-size: 3vh;
  margin-bottom: 0;
}
</style>
