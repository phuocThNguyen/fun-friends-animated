<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/289258-P6O0D3-288-resized.jpg" alt="family-enjoy-water">
    <div class="text-box">
      <p class="mb-0">Some families are born in the same country.</p>
      <p class="mb-0">Some families are born in different countries.</p>
      <p class="mb-0">Where were you born?</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/25Animated_Book_Page24.mp3" ref="voice"/>
    <div class="page-number" id="page-light">24</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page18",
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: ".text-box", opacity: 1}, 500)
        .add({targets: text[0], opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 4000)
        .add({targets: text[2], opacity: 1}, 8000)
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
  width: 80%;
  background-color: #00ce7c;
  position: absolute;
  bottom: 6vh;
  left: 10%;
  opacity: 0;
  text-align: center;
  padding: 1vh
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  font-size: 5vh;
  opacity: 0;
}
</style>