<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/2749-resized.jpg" alt="annie">
    <div class="text-box">
      <p class="mt-2 mb-3">Annie loves playing on the swing.</p>

      <p class="mb-0">What do you like playing with</p>
      <p>when you are outside?</p>
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
      duration: 1000,
      easing: 'linear',
    })
  }
}
</script>

<style scoped>
.text-box {
  height: 110px;
  width: 300px;
  background-color: #00ce7c;
  position: absolute;
  top: 20px;
  left: 20px;
  opacity: 0;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  display: flex;
  margin-left: 20px;
}
</style>