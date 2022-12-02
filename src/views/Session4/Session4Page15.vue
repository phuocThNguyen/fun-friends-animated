<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/398-resized.jpg" alt="exploring" class="session-background">
    <div class="text-box">
      <h1>3. Sight</h1>
      <p>We see with our eyes. What can we see?</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page15.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">101</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page15',
  methods: {
    animateText() {
      anime({
        targets: '.text-box',
        opacity: 1,
        duration: 500,
        delay: 500,
        easing: 'linear'
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
h1 { font-size: 5vh;margin-bottom: 0; }
p { font-size: 4vh;margin-bottom: 0; }
.text-box {
  position: absolute;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.5vh 2vh;
  bottom: 6vh;
  left: 10%;
  opacity: 0;
}
</style>