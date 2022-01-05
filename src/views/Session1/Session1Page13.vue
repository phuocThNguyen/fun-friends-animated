<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/476-resized.jpg" alt="family-enjoy-picnic">
    <div class="text-box">
      <p class="mb-0">This family enjoys sharing picnics.</p>
    </div>
    <div class="page-number" id="page-light">20</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page13",
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
  font-size: 7vh;
}
</style>