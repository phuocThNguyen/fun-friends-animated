<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session2/640-resized.jpg" alt="swimming">
    <div class="text-box">
      <p>Swimming makes me feel happy.</p>
    </div>
    <audio src="../../assets/sounds/session2/Session2_Page1.mp3" ref="voice"/>
    <div class="page-number" id="page-light">46</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session2Page1",
  methods: {
    animateTextBox() {
      anime({
        targets: '.text-box',
        opacity: 1,
        duration: 500,
        delay: 8435,
        easing: 'linear'
      })
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    }
  },
  mounted() {
    this.playVoiceOver();
    this.animateTextBox();
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 5vh;
  background-color: #00CE7C;
  width: 70%;
  text-align: center;
  padding: 1vh;
  left: 15%;
  opacity: 0;
}
.text-box p {
  color: white;
  font-size: 6vh;
  font-weight: bold;
  margin-bottom: 0;
}
</style>