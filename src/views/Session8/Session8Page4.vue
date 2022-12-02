<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Annie loves the beach</h1>
      <p>Annie is just back from holiday at the beach.</p>
      <p>What do you think Annie did on her holiday?</p>
      <p>What can you do or say to be happy for Annie?</p>
    </div>
    <img src="../../assets/images/session8/135407-OSAV2U-882.jpg" alt="Annie" class="images">
    <img src="../../assets/images/session8/135348-OSAU2M-875.jpg" alt="family" class="images">
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/beach-sound.mp3" ref="audio" autoplay loop/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/Session8_Page4.mp3" ref="voice"/>
    <div class="page-number" id="page-light">161</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session8Page4',
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear', duration: 500});
      animation
        .add({targets: text[1], opacity: 1}, 2700)
        .add({targets: text[2], opacity: 1}, 6500)
        .add({targets: text[3], opacity: 1}, 9800)
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
    this.setAudioVolumeLevel(0.4);},
}
</script>

<style scoped>
.text-box {
  position: absolute;
  padding: 1vh;
  width: 100%;
}
.text-box h1 {
  font-size: 5vh;
  margin-bottom: 0;
}
.text-box p {
  font-size: 4vh;
  opacity: 0;
  margin-bottom: 0;
}
.images {
  position: absolute;
  height: 72vh;
  width: 50%;
  bottom: -7vh;
}
.images:nth-child(2) {
  right: 0;
}
</style>