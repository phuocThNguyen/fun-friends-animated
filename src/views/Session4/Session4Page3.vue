<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/126256-resized.jpg" alt="butterflies-in-the-tummy" class="session-background">
    <div class="text-box">
      <h1>Butterflies in the tummy</h1>
      <p>What happens to you when you feel nervous?</p>
      <p>Act, dance or draw what happens in your body.</p>
      <p>How do your friends show they are nervous?</p>
      <p>Ask your friends what helps them to calm down?</p>
      <p>Remember - It is normal to be worried, what
       you do about it can be a thumbs-up or thumbs-down
       choice.</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session4Page3",
  mounted() {
    let text = document.getElementsByClassName('text-box')[0].children;
    let animation = anime.timeline({
      easing: 'linear',
      duration: 700,
      delay: 700
    });
    animation
      .add({
        targets: text[1],
        opacity: 1
      })
      .add({
        targets: text[2],
        opacity: 1,
        delay: 1500
      })
      .add({
        targets: text[3],
        opacity: 1,
        delay: 1500
      })
      .add({
        targets: text[4],
        opacity: 1,
        delay: 1500
      })
      .add({
        targets: text[5],
        opacity: 1,
        delay: 1500
      })
      .add({
        targets: text[6],
        opacity: 1,
        delay: 2500
      })
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