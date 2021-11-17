<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/4082-resized.jpg" alt="zoe-and-dad">
    <div class="text-box">
      <p class="mb-0">Zoe's dad also plays with her on the swing.</p>
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
  background-color: rgba(0, 206, 124, 0.95);
  position: absolute;
  top: 2vh;
  left: 2%;
  opacity: 0;
  padding: 2vh;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  display: flex;
  font-size: 6vh;

}
</style>