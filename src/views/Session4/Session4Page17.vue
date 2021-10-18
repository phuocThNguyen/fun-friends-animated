<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/4473-resized.jpg" alt="exploring" class="session-background">
    <div class="text-box">
      <h1>5. Touch</h1>
      <p>We feel with our skin. What can we feel?</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page17',
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
h1 { font-size: 3.5vh; }
p { font-size: 2.52vh;margin-bottom: 0; }
.text-box {
  position: absolute;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 2vh 2.8vh;
  bottom: 5vh;
  left: 7%;
  opacity: 0;
}
</style>