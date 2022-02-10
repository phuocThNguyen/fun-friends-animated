<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/126256-resized.jpg" alt="butterflies-in-the-tummy" class="session-background">
    <div class="text-box">
      <h1>Butterflies in the tummy</h1>
      <p>What happens to you when you feel nervous?</p>
      <p>Act, dance or draw what happens in your body.</p>
      <p>How do your friends show they are nervous?</p>
      <p>Ask your friends what helps them to calm down?</p>
      <p>Remember – It is normal to be worried, but you
        can choose thumbs down or thumbs up actions.</p>
    </div>
    <audio src="../../assets/sounds/session4/Session4_Page3.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">89</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session4Page3",
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
      });
      animation
        .add({
          targets: text[1],
          opacity: 1
        }, 3432)
        .add({
          targets: text[2],
          opacity: 1,
        }, 7049)
        .add({
          targets: text[3],
          opacity: 1,
        }, 11254)
        .add({
          targets: text[4],
          opacity: 1,
        }, 15129)
        .add({
          targets: text[5],
          opacity: 1,
        }, 18797)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 0)
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
  z-index: 10;
  background-color: #ffffff;
  width: 45%;
  height: 100%;
  padding: 1.5vh;
}
.text-box h1 {
  font-size: 5vh;
  font-weight: bold;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
  opacity: 0;
}
.text-box p:nth-of-type(2) {
  color: #FF0000;
}
</style>