<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/1034.jpg" alt="Annie" class="session-background">
    <div class="text-box">Annie learns from <br>someone she looks up to.</div>
    <div class="text-box-green">My mum helps me learn to swim.</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session10Page6',
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
  top: 3vh;
  left: 3%;
  background-color: rgba(255,255,255,0.8);
  font-weight: bold;
  font-size: 4vh;
  padding: 2vh;
}
.text-box-green {
  position: absolute;
  bottom: 5vh;
  left: 10%;
  padding: 1vh 2.8vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 4vh;
  font-weight: bold;
  opacity: 0;
}
</style>
