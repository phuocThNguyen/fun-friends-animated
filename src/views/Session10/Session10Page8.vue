<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/370.png" alt="Tom-reading-book" class="session-background">
    <div class="text-box-green">My mum helps me be brave
      when I learn to ride my bike.</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session10Page8',
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
.text-box-green {
  position: absolute;
  width: 34%;
  top: 5vh;
  right: 5%;
  padding: 1vh 2vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 2.8vh;
  font-weight: bold;
  text-align: center;
  opacity: 0;
}
</style>
