<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/289258-P6O0D3-288-resized.jpg" alt="family-enjoy-water">
    <div class="text-box">
      <p class="mb-0">We are born in different country.</p>
      <p>Where were you born?</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page17",
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
  height: 80px;
  width: 400px;
  background-color: #00ce7c;
  position: absolute;
  bottom: 20px;
  left: 200px;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text-box p {
  display: block;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0;
}
</style>