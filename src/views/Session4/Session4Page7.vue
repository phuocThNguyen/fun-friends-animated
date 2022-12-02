<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/717-resized.jpg" alt="playing-sand" class="session-background">
    <div class="text-box">
      Does playing in the sand make you feel calm?
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page7.mp3" ref="voice"/>
    <div class="page-number" id="page-light">93</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session4Page7",
  methods: {
    animateText() {
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
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {}
}
</script>

<style scoped>
.text-box {
  position: absolute;
  bottom: 6vh;
  left: 13%;
  width: 74%;
  font-size: 4.5vh;
  font-weight: bold;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.4vh;
  text-align: center;
  opacity: 0;
}
</style>