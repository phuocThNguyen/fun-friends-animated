<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/16503-resized.jpg" alt="exploring" class="session-background">
    <div class="text-box">
      <h1>1. Smelling</h1>
      <p>We smell with our nose. What can we smell?</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page14',
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
.text-box {
  position: absolute;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 2vh 2vw 2vh 2vw;
  top: 5vh;
  right: 7vw;
  opacity: 0;
}
</style>