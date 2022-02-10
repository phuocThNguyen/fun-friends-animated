<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/25203-resized.jpg" alt="playing-sand" class="session-background">
    <div class="text-box">
      Water makes us feel calm.
    </div>
    <audio src="../../assets/sounds/session4/Session4_Page9.mp3" ref="voice"/>
    <div class="page-number" id="page-light">95</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session4Page9",
  methods: {
    animateElements() {
      anime({
        targets: '.text-box',
        delay: 500,
        duration: 500,
        easing: 'linear',
        opacity: 1
      });
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateElements();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 5vh;
  right: 5%;
  width: 45%;
  font-size: 4.5vh;
  font-weight: bold;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.4vh;
  text-align: center;
  opacity: 0;
}
</style>