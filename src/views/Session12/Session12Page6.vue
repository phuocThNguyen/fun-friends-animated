<template>
  <div class="interactive-container">
    <img src="../../assets/images/session12/2108.jpg" alt="friends" class="session-background">
    <div class="text-box">Vi er glade for at have lært FRIENDS færdighederne.</div>
    <audio src="../../assets/sounds/children-background-music/children-s-music-no-copyright-royalty-free-happy-upbeat-kids-barroom-ballet.mp3" autoplay loop ref="audio"/>
    <audio src="../../assets/sounds/session12/Page219.mp3" ref="voice"/>
    <div class="page-number" id="page-light">219</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session12Page6',
  methods: {
    animateText() {
      anime({
        targets: '.text-box',
        opacity: 1,
        duration: 500,
        delay: 500,
        easing: 'linear'
      })
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    }
  },
  mounted() {
    this.setAudioVolumeLevel(0.4);
    this.animateText();
    this.playVoiceOver()
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 1vh;
  width: calc(0.8*133vh);
  left: calc(0.1*133vh);
  padding: 1vh 2vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 4vh;
  font-weight: bold;
  text-align: center;
  opacity: 0;
}
</style>
