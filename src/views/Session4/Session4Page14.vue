<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/16503-resized.jpg" alt="exploring" class="session-background">
    <div class="text-box">
      <h1>2. Smelling</h1>
      <p>We smell with our nose. What can we smell?</p>
    </div>
    <div class="page-number" id="page-dark">100</div>
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
h1 { font-size: 5vh;margin-bottom: 0; }
p { font-size: 4vh;margin-bottom: 0; }
.text-box {
  position: absolute;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.5vh 2vh;
  top: 2vh;
  right: 2%;
  opacity: 0;
}
</style>