<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/623039-PNWBPK-723.jpg" alt="Tom-reading-book" class="session-background">
    <div class="text-box-green">My dad helps me read a book.</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session10Page4',
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
