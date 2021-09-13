<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/811-resized.jpg" alt="lucy">
    <div class="text-box">
      <p class="mb-0">Lucy loves playing with the old</p>
      <p class="mb-0">wheelbarrow in the garden.</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page7",
  mounted() {
    anime({
      targets: ".text-box",
      opacity: 1,
      delay: 500,
      duration: 1000,
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
  top: 5vh;
  left: 3vw;
  opacity: 0;
  padding: 2vh;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  display: flex;
  font-size: 2.45vh;
}
</style>