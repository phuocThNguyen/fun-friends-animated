<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/1827-resized.jpg" alt="relaxing" class="session-background">
    <div class="text-box">What do you do to relax and calm down?</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session4Page6",
  mounted() {
    anime({
      targets: '.text-box',
      opacity: 1,
      delay: 700,
      duration: 700,
      easing: 'linear'
    })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 5vh;
  left: 5vw;
  padding: 2vw;
  background-color: rgba(255,255,255,0.8);
  font-size: 2vw;
  opacity: 0;
}
</style>