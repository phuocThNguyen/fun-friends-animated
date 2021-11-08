<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/2749-resized.jpg" alt="annie">
    <div class="text-box">
      <p class="mb-3">Annie loves playing on the swing.</p>
      <p class="mb-0">What do you like playing with</p>
      <p class="mb-0">when you are outside?</p>
      <audio autoplay src="../../assets/sounds/session1/playground.mp3"></audio>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page5",
  mounted() {
    anime({
      targets: ".text-box",
      opacity: 1,
      delay: 500,
      duration: 500,
      easing: 'linear',
    })
  }
}
</script>

<style scoped>
.text-box {
  height: auto;
  width: auto;
  background-color: #00ce7c;
  position: absolute;
  top: 2vh;
  left: 2%;
  opacity: 0;
  padding: 2vh;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  display: flex;
  font-size: 3.5vh;
}
</style>