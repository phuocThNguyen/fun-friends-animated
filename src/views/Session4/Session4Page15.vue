<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/398-resized.jpg" alt="exploring" class="session-background">
    <div class="text-box">
      <h1>3. Sight</h1>
      <p>We see with our eyes. What can we see?</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page15',
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
  bottom: 5vh;
  left: 10%;
  opacity: 0;
}
</style>