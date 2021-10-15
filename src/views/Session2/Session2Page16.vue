<template>
  <div class="interactive-container">
    <img src="../../assets/images/session2/46933-resized.jpg" alt="background" class="session-background">
    <div class="text-box">
      We are kind when we pay attention to the teacher.
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session2Page16",
  mounted() {
    anime({
      targets: ".text-box",
      delay: 250,
      duration: 500,
      opacity: 1,
      easing: 'linear'
    })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.5vh;
  text-align: center;
  bottom: 5vh;
  width: 70%;
  left: 15%;
  font-size: 3.5vh;
  font-weight: bold;
  opacity: 1;
}
</style>