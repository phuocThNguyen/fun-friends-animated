<template>
  <div class="interactive-container">
    <h1 class="title">Annie is brave and rewards herself</h1>
    <div class="image-container">
      <img src="../../assets/images/session9/1489.png" alt="Annie">
      <p>1. Brave Annie <br>Trying to roller-blade</p>
    </div>
    <div class="image-container">
      <img src="../../assets/images/session9/1551.png" alt="Annie">
      <p>Annie's Reward <br>Cooking with mum</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session9Page3',
  mounted() {
    let images = document.querySelectorAll('.image-container');
    let animation = anime.timeline({
      easing: 'linear',
      delay: 500,
      duration: 500
    })
    animation
      .add({
        targets: images[0],
        opacity: 1
      })
      .add({
        targets: images[1],
        opacity: 1
      })
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  font-weight: bold;
  font-size: 6vh;
  top: 0;
  left: 1%;
}
.image-container {
  position: absolute;
  bottom: 0;
  width: 49%;
  height: 80vh;
  opacity: 0;
}
.image-container img {
  width: 100%;
  height: 100%;
}
.image-container p {
  display: block;
  position: absolute;
  bottom: 1vh;
  left: 18%;
  width: 64%;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1vh;
  text-align: center;
  font-size: 4vh;
  font-weight: bold;
  margin-bottom: 0;
}
.image-container:nth-of-type(2) {
  right: 0;
}
</style>