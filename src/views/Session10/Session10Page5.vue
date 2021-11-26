<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/623178-PNWC48-947.jpg" alt="dad-helps-Tom" class="session-background">
    <div class="text-box-green">My dad helps me write a story.</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session10Page5',
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
  left: 3%;
  padding: 1vh 2.8vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 4vh;
  font-weight: bold;
  opacity: 0;
}
</style>
