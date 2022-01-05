<template>
  <div class="interactive-container">
    <div class="images">
      <img src="../../assets/images/session1/30164-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/13202-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/172-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/1217-resized.jpg" alt="house" />
    </div>
    <div class="text-box">
      <p class="text">
        <span>It is okay that our clothes are different!</span>
      </p>
    </div>
    <div class="page-number" id="page-light">39</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page31",
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
  },
};
</script>

<style scoped>
.images {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: grid;
  grid-template-columns: auto auto;
}
.images img {
  width: 62vh;
  height: 43vh;
  opacity: 1;
  align-self: center;
  justify-self: center;
}
.text-box {
  position: absolute;
  left: 7%;
  top: 36vh;
  z-index: 20;
  background-color: #00CE7C;
  width: auto;
  height: auto;
  padding: 2vh 4.6vh;
  opacity: 0;
}
.text {
  font-weight: bold;
  color: #ffffff;
  font-size: 6vh;
  margin-bottom: 0;
}
</style>
