<template>
  <div class="interactive-container">
    <img class="session-background" id="page-11" src="../../assets/images/session1/18722-resized.jpg" alt="our-families">

    <div class="left-bar">
      <h1>Our families</h1>
      <p id="para-1">Tell us about your family.</p>
      <p id="para-2">What games do you like to play together?</p>
      <p id="para-3">How do you have fun together?</p>

      <div class="text-box">
        <p>We love going to the park.</p>
      </div>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/19Animated_Book_Page18.mp3" ref="voice"/>
    <div class="page-number" id="page-light">18</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page12",
  methods: {
    animateText() {
      let text = document.querySelector('.left-bar').children;
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear'
      });
      animation
        .add({
          targets: ".left-bar",
          opacity: 1,
          delay: 500
        })
        .add({
          targets: text[0],
          opacity: 1
        }, 1102)
        .add({
          targets: text[1],
          opacity: 1,
        }, 2400)
        .add({
          targets: text[2],
          opacity: 1,
        }, 5500)
        .add({
          targets: text[3],
          opacity: 1,
        }, 8600)
        .add({
          targets: ".text-box",
          opacity: 1,
        }, 11000)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1000)
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
.left-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(255,255,255,0.9);
  z-index: 10;
  opacity: 0;
  padding: 3vh 2vh;
}
.left-bar h1 {
  font-size: 7vh;
  margin-bottom: 3vh;
  opacity: 0;
}
.left-bar p {
  opacity: 0;
  font-size: 5vh;
}
.text-box {
  height: auto;
  width: 98%;
  padding: 1.5vh;
  background-color: #00ce7c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15vh;
  left: 1%;
  opacity: 0;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0;
  text-align: center;
  opacity: 1 !important;
}
</style>