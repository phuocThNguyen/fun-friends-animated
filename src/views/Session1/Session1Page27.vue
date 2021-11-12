<template>
  <div class="interactive-container">
    <div class="images">
      <img src="../../assets/images/session1/3748-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/71023-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/1114-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/333-resized.jpg" alt="house" />
    </div>
    <div class="text-box">
      <p class="text">
        <span>Our food may be different,</span>
        <span> but it is all yummy.</span>
      </p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page27",
  mounted() {
    let animation = anime.timeline();
    animation
      .add({
        targets: ".text-box",
        opacity: 1,
        duration: 500,
        delay: 500,
        easing: "linear",
      })
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
  width: 64vh;
  height: 43vh;
  opacity: 1;
  align-self: center;
  justify-self: center;
}
.text-box {
  position: absolute;
  left: 1%;
  top: 42vh;
  z-index: 20;
  background-color: #00CE7C;
  width: auto;
  height: auto;
  padding: 1vh 4vh;
  opacity: 0;
}
.text {
  font-weight: bold;
  color: #ffffff;
  font-size: 6vh;
  margin-bottom: 0;
}
</style>
