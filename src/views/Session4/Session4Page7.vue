<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/717-resized.jpg" alt="playing-sand" class="session-background">
    <div class="text-box">
      Does playing in the sand make you feel calm?
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
  left: 13%;
  width: 74%;
  font-size: 4.5vh;
  font-weight: bold;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.4vh;
  text-align: center;
  opacity: 0;
}
</style>