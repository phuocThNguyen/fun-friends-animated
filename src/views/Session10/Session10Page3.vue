<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/72896.png" alt="Tom" class="session-background">
    <div class="text-box">Tom learns from <br>someone he looks up to.</div>
    <div class="text-box-green">My dad helps me learn to cook.</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session10Page3',
  mounted() {
    anime({
      targets: '.text-box-green',
      opacity: 1,
      easing: 'linear',
      duration: 500,
      delay: 500
    })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 1vh;
  left: 1%;
  background-color: rgba(255,255,255,0.95);
  font-weight: bold;
  font-size: 4vh;
  padding: 2vh;
}
.text-box-green {
  position: absolute;
  bottom: 5vh;
  left: 10%;
  padding: 1vh 2.4vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 4vh;
  font-weight: bold;
  opacity: 0;
}
</style>
