<template>
  <div class="interactive-container">
    <img src="../../assets/images/session11/311.jpg" alt="kids" class="session-background">
    <div class="text-box">
      <p>Talk about who you think are in Annie's and Tom's
      Support Teams. Who is in your support team?</p>
      <p>They could be people from:</p>
      <p>&bull;&nbsp;School/kindergarten/playgroup</p>
      <p>&bull;&nbsp;Where you live</p>
      <p>&bull;&nbsp;Community</p>
      <p>&bull;&nbsp;Religious/spiritual group</p>
      <p>&bull;&nbsp;Sporting clubs</p>
      <p>&bull;&nbsp;Family</p>
      <p>&bull;&nbsp;Friends</p>
    </div>
    <audio src="../../assets/sounds/session11/Session11_Page4.mp3" ref="voice"/>
    <div class="page-number" id="page-light">207</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session11Page4',
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[0], opacity: 1}, 800)
        .add({targets: text[1], opacity: 1}, 9800)
        .add({targets: text[2], opacity: 1}, 11400)
        .add({targets: text[3], opacity: 1}, 15600)
        .add({targets: text[4], opacity: 1}, 17100)
        .add({targets: text[5], opacity: 1}, 18600)
        .add({targets: text[6], opacity: 1}, 21500)
        .add({targets: text[7], opacity: 1}, 23100)
        .add({targets: text[8], opacity: 1}, 24100)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;
  width: 40%;
  height: 100vh;
  padding: 2vh;
  opacity: 0;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
  opacity: 0;
}
.text-box p:nth-child(n+3) {
  padding-left: 2vh;
}
.text-box p:nth-child(3) {
  font-size: 3.5vh !important;
}
</style>
