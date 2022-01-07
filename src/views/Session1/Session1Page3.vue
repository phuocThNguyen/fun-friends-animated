<template>
  <div class="interactive-container">
    <img class="session-background" id="pic" src="../../assets/images/session1/4161-resized.jpg" alt="tom-and-mum">
    <div class="left-bar">
      <h1>Meet Tom</h1>
      <p id="para-2">Today is Tom’s birthday.</p>
      <p id="para-3">He is adopting two rescue dogs,</p>
      <p id="para-4">Chilli and Pepper.</p>
      <p id="para-5">Tom wants to give Chilli and Pepper a loving home.</p>
      <p id="para-6">Would you like to adopt a rescue animal for
        your birthday?</p>
    </div>
    <audio ref="audio" autoplay src="../../assets/sounds/session1/dog.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
    <audio src="../../assets/sounds/session1/10Animated_Book_Page9.mp3" ref="voice"/>
    <div class="page-number" id="page-light">9</div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "Session1Page3",
  methods: {
    animateText() {
      let para = document.getElementsByClassName('left-bar')[0].children;
      let initAnimation = anime.timeline({
        easing: 'linear'
      });
      initAnimation
        .add({
          targets: ".left-bar",
          opacity: 1,
          delay: 500,
          duration: 500,
        })
        .add({
          targets: para[0],
          opacity: 1,
          duration: 500,
        }, 1500)
        .add({
          targets: para[1],
          opacity: 1,
          duration: 300,
        }, 3500)
        .add({
          targets: para[2],
          opacity: 1,
          duration: 300,
        }, 7149)
        .add({
          targets: para[3],
          opacity: 1,
          duration: 300,
        }, 10835)
        .add({
          targets: para[4],
          opacity: 1,
          duration: 300,
        }, 13545)
        .add({
          targets: para[5],
          opacity: 1,
          duration: 300,
        }, 18456)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1500)
    }
  },
  mounted() {
    this.animateText();
    this.setAudioVolumeLevel(0.2);
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.left-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  background-color: rgba(255,255,255,0.85);
  z-index: 10;
  opacity: 0;
  padding: 1vh;
}
.left-bar p,
.left-bar h1 {
  opacity: 0;
}
.left-bar p {
  font-size: 5.5vh;
  margin-bottom: 0;
}
.left-bar h1 {
  font-size: 8vh;
  margin: 0;
}
</style>