<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/3750-resized.jpg" alt="josh">
    <div class="text-box">
      <p class="mt-3 mb-0">Josh is climbing on the rainbow</p>
      <p class="mb-0">tyres. He loves walking barefoot</p>
      <p>on the grass</p>
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
  height: 110px;
  width: 270px;
  background-color: #00ce7c;
  position: absolute;
  top: 20px;
  right: 20px;
  opacity: 0;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  display: flex;
  margin-left: 15px;
}
</style>