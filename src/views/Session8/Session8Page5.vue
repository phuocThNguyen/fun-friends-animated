<template>
  <div class="interactive-container">
    <div class="text-box">
      Share ideas for fun games you can play at the beach.
    </div>
    <img src="../../assets/images/session8/135443-OSAV8P-846.png" alt="Annie" class="images">
    <img src="../../assets/images/session8/135428-OSAV5N-454.png" alt="Annie" class="images">
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session8Page5',
  mounted() {
    anime({
      targets: '.text-box',
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
  width: 40vw;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.5vh 3vw;
  right: 3vw;
  top: 4vh;
  font-size: 2.2vw;
  font-weight: bold;
  z-index: 10;
  text-align: center;
  opacity: 0;
}
.images {
  position: absolute;
  height: 100vh;
  width: 49.5vw;
}
.images:nth-child(2) {
  right: 0;
}
</style>