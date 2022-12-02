<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/background-monkey.jpg" alt="background" class="session-background">
    <h1 class="position-absolute title">Body Clues</h1>
    <p class="position-absolute text">Worries grow</p>
    <p class="position-absolute text">Head hurts</p>
    <p class="position-absolute text">Sweaty</p>
    <p class="position-absolute text">Butterflies in tummy</p>
    <p class="position-absolute text">Fast breathing</p>
    <p class="position-absolute text">Dizzy</p>
    <p class="position-absolute text">Crying</p>
    <p class="position-absolute text">Red Face</p>
    <p class="position-absolute text">Knee shaking</p>
    <p class="position-absolute text">Toilet please!</p>
    <audio ref="swoosh" src="../../assets/sounds/session4/swoosh9.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page4.mp3" ref="voice"/>
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
      let animation = anime.timeline({
        easing: 'linear',
        duration: 400
      });
      animation
        .add({
          targets: text[0],
          opacity: 1,
        }, 2565)
        .add({
          targets: text[1],
          opacity: 1
        }, 4265)
        .add({
          targets: text[2],
          opacity: 1
        }, 6101)
        .add({
          targets: text[3],
          opacity: 1
        }, 7544)
        .add({
          targets: text[4],
          opacity: 1
        }, 10032)
        .add({
          targets: text[5],
          opacity: 1
        }, 12690)
        .add({
          targets: text[6],
          opacity: 1
        }, 13939)
        .add({
          targets: text[7],
          opacity: 1
        }, 15400)
        .add({
          targets: text[8],
          opacity: 1
        }, 17018)
        .add({
          targets: text[9],
          opacity: 1
        }, 18688);
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
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {
    this.playSoundEffect();
  }
}
</script>

<style scoped>
.title {
  font-size: 7vh;
  color: #173368;
  top: 3vh;
  left: 37%;
}
.text {
  color: #173368;
  font-size: 5.2vh;
  margin-bottom: 0;
  opacity: 0;
}
.text:nth-of-type(1) {
  top: 10vh;
  left: 2%;
}
.text:nth-of-type(2) {
  top: 20vh;
  left: 20%;
}
.text:nth-of-type(3) {
  top: 32vh;
  left: 5%;
}
.text:nth-of-type(4) {
  width: 16%;
  top: 45vh;
  left: 8%;
}
.text:nth-of-type(5) {
  top: 70vh;
  left: 3%;
}
.text:nth-of-type(6) {
  top: 12vh;
  right: 20%;
}
.text:nth-of-type(7) {
  top: 26vh;
  right: 22%;
}
.text:nth-of-type(8) {
  top: 38vh;
  right: 10%;
}
.text:nth-of-type(9) {
  top: 52vh;
  right: 15%;
  width: 10%;
}
.text:nth-of-type(10) {
  top: 72vh;
  right: 4%;
}
</style>