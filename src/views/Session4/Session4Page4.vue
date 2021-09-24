<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/background-monkey.jpg" alt="background" class="session-background">
    <h1 class="position-absolute title">Body Clues</h1>
    <p class="position-absolute text">Worries grow</p>
    <p class="position-absolute text">Head hurts</p>
    <p class="position-absolute text">Sweaty</p>
    <p class="position-absolute text">Butterflies in tummy</p>
    <p class="position-absolute text">Breathing fast</p>
    <p class="position-absolute text">Dizzy</p>
    <p class="position-absolute text">Crying</p>
    <p class="position-absolute text">Red Face</p>
    <p class="position-absolute text">Knee shaking</p>
    <p class="position-absolute text">Toilet please!</p>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page4',
  mounted() {
    let text = document.getElementsByClassName('text');
    let animation = anime.timeline({
      easing: 'linear',
      delay: 400,
      duration: 400
    });
    animation
      .add({
        targets: text[0],
        opacity: 1,
      })
      .add({
        targets: text[1],
        opacity: 1
      })
      .add({
        targets: text[2],
        opacity: 1
      })
      .add({
        targets: text[3],
        opacity: 1
      })
      .add({
        targets: text[4],
        opacity: 1
      })
      .add({
        targets: text[5],
        opacity: 1
      })
      .add({
        targets: text[6],
        opacity: 1
      })
      .add({
        targets: text[7],
        opacity: 1
      })
      .add({
        targets: text[8],
        opacity: 1
      })
      .add({
        targets: text[9],
        opacity: 1
      })
  }
}
</script>

<style scoped>
.title {
  font-size: 5vw;
  color: #173368;
  top: 3vh;
  left: 37vw;
}
.text {
  color: #173368;
  font-size: 3.5vw;
  margin-bottom: 0;
  opacity: 0;
}
.text:nth-of-type(1) {
  top: 10vh;
  left: 2vw;
}
.text:nth-of-type(2) {
  top: 20vh;
  left: 20vw;
}
.text:nth-of-type(3) {
  top: 32vh;
  left: 5vw;
}
.text:nth-of-type(4) {
  width: 15vw;
  top: 45vh;
  left: 8vw;
}
.text:nth-of-type(5) {
  top: 70vh;
  left: 3vw;
}
.text:nth-of-type(6) {
  top: 12vh;
  right: 20vw;
}
.text:nth-of-type(7) {
  top: 26vh;
  right: 22vw;
}
.text:nth-of-type(8) {
  top: 38vh;
  right: 10vw;
}
.text:nth-of-type(9) {
  top: 52vh;
  right: 15vw;
  width: 10vw;
}
.text:nth-of-type(10) {
  top: 72vh;
  right: 4vw;
}
</style>