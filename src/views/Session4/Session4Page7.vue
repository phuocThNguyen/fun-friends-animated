<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/717-resized.jpg" alt="playing-sand" class="session-background">
    <div class="text-box">
      Playing in the sand makes some kids feel calm
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session4Page7",
  mounted() {
    anime({
      targets: '.text-box',
      delay: 700,
      duration: 700,
      easing: 'linear',
      opacity: 1
    })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  bottom: 5vh;
  left: 15%;
  width: 70%;
  font-size: 2.8vh;
  font-weight: bold;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.4vh;
  text-align: center;
  opacity: 0;
}
</style>