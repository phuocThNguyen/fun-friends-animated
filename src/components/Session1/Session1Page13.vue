<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/43-resized.jpg" alt="family-enjoy-water">
    <div class="text-box">
      <p>This family has fun playing in the water.</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page13",
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
  width: 600px;
  background-color: #00ce7c;
  position: absolute;
  bottom: 20px;
  left: 80px;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0;
}
</style>