<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/811-resized.jpg" alt="lucy">
    <div class="text-box">
      <p class="mb-0">Lucy loves playing with the old</p>
      <p class="mb-0">wheelbarrow in the garden.</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page7",
  methods: {
    animateText() {
      anime({
        targets: ".text-box",
        opacity: 1,
        delay: 500,
        duration: 500,
        easing: 'linear',
      })
    }
  },
  mounted() {
    this.animateText();
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