<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/3750-resized.jpg" alt="josh">
    <div class="text-box">
      <p class="mb-0">Josh is climbing on the rainbow tyres.</p>
      <p class="mb-0"> He loves walking barefoot on the grass.</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page8",
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
  right: 3vw;
  opacity: 0;
  padding: 1.5vh;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  display: flex;
  font-size: 2.45vh;
}
</style>