<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/1143-resized.jpg" alt="cool-water" class="session-background">
    <div class="text-box">The water feels cool and
     fresh on our skin.</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page21',
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
.text-box {
  position: absolute;
  bottom: 5vh;
  width: 70%;
  left: 15%;
  padding: 1.4vh;
  color: #ffffff;
  background-color: #00ce7c;
  text-align: center;
  font-size: 3.5vh;
  font-weight: bold;
  opacity: 0;
}
</style>