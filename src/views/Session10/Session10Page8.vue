<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/370.jpg" alt="Tom-reading-book" class="session-background">
    <div class="text-box-green">My mum helps me be brave
      <br>when I learn to ride my bike.</div>
    <div class="page-number" id="page-light">193</div>
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
  top: 3vh;
  right: 3%;
  padding: 1vh 2vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 4vh;
  font-weight: bold;
  text-align: center;
  opacity: 0;
}
</style>
