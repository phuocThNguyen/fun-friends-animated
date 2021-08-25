<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/129493-ORFK4F-127-resized.jpg" alt="mia">
    <div class="text-box">
      <p class="mt-2 mb-0">Mia loves climbing trees</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page9",
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
  height: 40px;
  width: 210px;
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
  margin-left: 15px;
}
</style>