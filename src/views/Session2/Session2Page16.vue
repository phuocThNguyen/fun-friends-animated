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
  padding: 1.5vh 5vw 1.5vh 5vw;
  top: 78vh;
  left: 15vw;
  font-size: 2.5vw;
  font-weight: bold;
  opacity: 0;
}
</style>