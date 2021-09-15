<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/510-resized.jpg" alt="water" class="images">
    <img src="../../assets/images/session4/five-senses-resized.jpg" alt="five-senses" class="images">
    <div class="text-bars">
      <p>The water <strong>looks</strong> blue</p>
      <p>The water <strong>feels</strong> fresh</p>
      <p>The <strong>sound</strong> of the splashing water</p>
      <p>The <strong>smell</strong> of salt water</p>
      <p>The water <strong>tastes</strong> cool</p>
    </div>
    <div class="text-circles">
      <p>Sight</p>
      <p>Touch</p>
      <p>Hearing</p>
      <p>Smell</p>
      <p>Taste</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page12',
  mounted() {
    let bars = document.getElementsByClassName('text-bars')[0].children;
    let circles = document.getElementsByClassName('text-circles')[0].children;
    let animation = anime.timeline({
      easing: 'linear',
      duration: 700
    });
    animation
      .add({
        targets: bars[0],
        opacity: 1,
        delay: 700
      })
      .add({
        targets: circles[0],
        opacity: 1,
      }, 700)
      .add({
        targets: bars[1],
        opacity: 1,
        delay: 700
      })
      .add({
        targets: circles[1],
        opacity: 1,
      }, 700 * 3)
      .add({
        targets: bars[2],
        opacity: 1,
        delay: 700
      })
      .add({
        targets: circles[2],
        opacity: 1,
      }, 700 * 5)
      .add({
        targets: bars[3],
        opacity: 1,
        delay: 700
      })
      .add({
        targets: circles[3],
        opacity: 1,
      }, 700 * 7)
      .add({
        targets: bars[4],
        opacity: 1,
        delay: 700
      })
      .add({
        targets: circles[4],
        opacity: 1,
      }, 700 * 9)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');
.text-circles {
  position: absolute;
  font-family: 'Kalam', cursive;
  width: 49vw;
  height: 100%;
  right: 0;
}
.text-circles p {
  position: absolute;
  display: block;
  width: 17vw;
  height: 17vw;
  line-height: 17vw;
  text-align: center;
  font-size: 4vw;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.7);
  opacity: 0;
}
.text-circles p:nth-of-type(1) {
  top: 10vh;
  right: 15vw;
}
.text-circles p:nth-of-type(2) {
  bottom: 10vh;
  right: 5vw;
}
.text-circles p:nth-of-type(3) {
  top: 27vh;
  left: 2vw;
}
.text-circles p:nth-of-type(4) {
  top: 31vh;
  right: 3vw;
}
.text-circles p:nth-of-type(5) {
  bottom: 10vh;
  left: 1vw;
}
.text-bars {
  position: absolute;
  left: 4.5vw;
  top: 5vh;
}
.text-bars p {
  display: block;
  padding: 1vw;
  background-color: #ffffff;
  width: 40vw;
  font-size: 2vw;
  text-align: center;
  margin-bottom: 8vh;
  opacity: 0;
}
.text-bars p:nth-of-type(2) {
 margin-bottom: 22vh;
}
.images {
  position: absolute;
  width: 49vw;
  height: 100%;
}
.images:nth-of-type(2) {
  right: 0;
}
</style>