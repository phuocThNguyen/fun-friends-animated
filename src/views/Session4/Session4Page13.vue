<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/41068-resized.jpg" alt="exploring" class="session-background">
    <div class="title">
      <p>Practise exploring with your five senses, everywhere you go.</p>
    </div>
    <div class="text-box">
      <h1>1. Hearing</h1>
      <p>We listen with our ears. What can we hear?</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page13',
  mounted() {
    anime({
      targets: '.text-box',
      opacity: 1,
      duration: 700,
      delay: 700,
      easing: 'linear'
    })
  }
}
</script>

<style scoped>
p {margin-bottom: 0;}
.title {
  position: absolute;
  top: 1vh;
  left: 1%;
  padding: 1.4vh;
  font-size: 3.8vh
}
.text-box {
  position: absolute;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.5vh 2vh;
  bottom: 5vh;
  right: 10%;
  opacity: 0;
  font-size: 3.2vh;
  margin-bottom: 0;
}
</style>