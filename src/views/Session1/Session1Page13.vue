<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/476-resized.jpg" alt="family-enjoy-picnic">
    <div class="text-box">
      <p class="mb-0">This family enjoys sharing picnics.</p>
    </div>
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Relaxing-Forest-Sound-Effect.mp3" ref="audio" autoplay loop/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/20Animated_Book_Page19.mp3" ref="voice"/>
    <div class="page-number" id="page-light">19</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page13",
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
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {
    this.setAudioVolumeLevel(0.4);
  }
}
</script>

<style scoped>
.text-box {
  width: 84%;
  background-color: #00ce7c;
  position: absolute;
  bottom: 6vh;
  left: 8%;
  opacity: 0;
  text-align: center;
  padding: 1vh
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  font-size: 7vh;
}
</style>