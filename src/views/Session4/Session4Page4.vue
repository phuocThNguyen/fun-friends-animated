<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/background-monkey.jpg" alt="background" class="session-background">
    <h1 class="position-absolute title">Kropssignaler</h1>
    <p class="position-absolute text">Bekymringerne vokser</p>
    <p class="position-absolute text">Ondt i hovedet</p>
    <p class="position-absolute text">Svedig</p>
    <p class="position-absolute text">Sommerfugle i <br>maven - ikke de <br>gode</p>
    <p class="position-absolute text">Hurtig <br>vejrtrækning</p>
    <p class="position-absolute text">Svimmel</p>
    <p class="position-absolute text">Gråd</p>
    <p class="position-absolute text">Rød i ansigtet</p>
    <p class="position-absolute text">Rystende knæ</p>
    <p class="position-absolute text">Hvor er WC’et!</p>
    <audio ref="swoosh" src="../../assets/sounds/session4/swoosh9.mp3"/>
    <audio src="../../assets/sounds/session4/Session4_Page4.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">90</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page4',
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text');
      let animation = anime.timeline({easing: 'linear', duration: 400});
      animation
        .add({targets: text[0], opacity: 1,}, 1)
        .add({targets: text[1], opacity: 1}, 1)
        .add({targets: text[2], opacity: 1}, 1)
        .add({targets: text[3], opacity: 1}, 1)
        .add({targets: text[4], opacity: 1}, 1)
        .add({targets: text[5], opacity: 1}, 1)
        .add({targets: text[6], opacity: 1}, 1)
        .add({targets: text[7], opacity: 1}, 1)
        .add({targets: text[8], opacity: 1}, 1)
        .add({targets: text[9], opacity: 1}, 1);
    },
    playSoundEffect() {
      setTimeout(() => {this.$refs.swoosh.play()}, 2565);
      setTimeout(() => {this.$refs.swoosh.play()}, 4265);
      setTimeout(() => {this.$refs.swoosh.play()}, 6101);
      setTimeout(() => {this.$refs.swoosh.play()}, 7544);
      setTimeout(() => {this.$refs.swoosh.play()}, 10032);
      setTimeout(() => {this.$refs.swoosh.play()}, 12690);
      setTimeout(() => {this.$refs.swoosh.play()}, 13939);
      setTimeout(() => {this.$refs.swoosh.play()}, 15400);
      setTimeout(() => {this.$refs.swoosh.play()}, 17018);
      setTimeout(() => {this.$refs.swoosh.play()}, 18688);
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    },
  },
  mounted() {
    this.animateText();
    this.playSoundEffect();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.title {
  font-size: 8vh;
  color: #173368;
  top: 0;
  left: 37%;
}
.text {
  color: #173368;
  font-size: 6vh;
  margin-bottom: 0;
  opacity: 0;
  text-align: center;
}
.text:nth-of-type(1) {
  top: 10vh;
  left: 10vh;
}
.text:nth-of-type(2) {
  top: 20vh;
  left: 31vh;
}
.text:nth-of-type(3) {
  top: 32vh;
  left: 16vh;
}
.text:nth-of-type(4) {
  top: 43vh;
  left: 9vh;
  width: 40vh;
}
.text:nth-of-type(5) {
  top: 72vh;
  left: 20vh;
}
.text:nth-of-type(6) {
  top: 10vh;
  right: 25vh;
}
.text:nth-of-type(7) {
  top: 26vh;
  right: 32vh;
}
.text:nth-of-type(8) {
  top: 42vh;
  right: 10vh;
}
.text:nth-of-type(9) {
  top: 58vh;
  right: 8vh;
}
.text:nth-of-type(10) {
  top: 72vh;
  right: 6vh;
}
</style>