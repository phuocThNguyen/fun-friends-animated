<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/4082-resized.jpg" alt="zoe-and-dad">
    <div class="text-box">
      <p class="mt-4 mb-0">Zoe's dad also plays with her on</p>
      <p class="mb-3">the swing.</p>

      <p class="mb-0">It is so much fun!</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page6",
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
  height: 130px;
  width: 300px;
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
  margin-left: 20px;
}
</style>