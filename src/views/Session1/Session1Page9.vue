<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/129493-ORFK4F-127-resized.jpg" alt="mia">
    <div class="text-box">
      <p class="mb-0">Mia loves climbing trees.</p>
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
  padding: 1.5vh;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  display: flex;
  font-size: 3.5vh;
}
</style>