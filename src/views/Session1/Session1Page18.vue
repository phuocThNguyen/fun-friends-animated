<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/289258-P6O0D3-288-resized.jpg" alt="family-enjoy-water">
    <div class="text-box">
      <p class="mb-0">We are born in different country.&nbsp;</p>
      <p class="mb-0">Where were you born?</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page18",
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
  width: 80%;
  background-color: #00ce7c;
  position: absolute;
  bottom: 5vh;
  left: 10%;
  opacity: 0;
  text-align: center;
  padding: 1vh
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  font-size: 6vh;
}
</style>