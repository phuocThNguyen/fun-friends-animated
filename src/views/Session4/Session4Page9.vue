<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/25203-resized.jpg" alt="playing-sand" class="session-background">
    <div class="text-box">
      Water makes us feel calm
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session4Page9",
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
  top: 5vh;
  right: 5vw;
  width: 40vw;
  font-size: 2vw;
  font-weight: bold;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1vw;
  text-align: center;
  opacity: 0;
}
</style>