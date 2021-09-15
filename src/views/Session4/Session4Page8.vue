<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/354870-PAPUF2-370-resized.jpg" alt="drawing" class="session-background">
    <div class="text-box">
      Art is relaxing
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session4Page8",
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
  left: 5vw;
  width: 25vw;
  font-size: 2vw;
  font-weight: bold;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1vw;
  text-align: center;
  opacity: 0;
}
</style>