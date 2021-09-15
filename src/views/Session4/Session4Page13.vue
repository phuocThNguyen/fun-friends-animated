<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/41068-resized.jpg" alt="exploring" class="session-background">
    <div class="title">
      <h1>Exploring the World with Five Senses</h1>
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
h1 {font-size: 2.5vw;}
p {
  font-size: 1.8vw;
  margin-bottom: 0;
}
.title {
  position: absolute;
  top: 2vh;
  left: 2vw;
  padding: 1vw;
}
.text-box {
  position: absolute;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 2vh 2vw 2vh 2vw;
  bottom: 5vh;
  right: 7vw;
  opacity: 0;
}
</style>