<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/32267-resized.jpg" alt="family-enjoy-water">
    <div class="text-box">
      <p class="mb-0">There are many countries and different languages.</p>
    </div>
    <div class="page-number" id="page-light">24</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page17",
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
  width: 84%;
  background-color: #00ce7c;
  position: absolute;
  bottom: 6vh;
  left: 8%;
  opacity: 0;
  text-align: center;
  padding: 1vh
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  font-size:4.5vh;
}
</style>