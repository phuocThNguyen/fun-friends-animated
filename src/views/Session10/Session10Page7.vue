<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/1243.png" alt="Tom-reading-book" class="session-background">
    <div class="text-box-green">My mum helps me be brave
      when I meet new people.</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session10Page7',
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
  bottom: 5vh;
  left: 10%;
  padding: 1vh 2vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 2.8vh;
  font-weight: bold;
  text-align: center;
  opacity: 0;
}
</style>
