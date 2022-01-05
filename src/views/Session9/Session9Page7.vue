<template>
  <div class="interactive-container">
    <div class="image-container">
      <img src="../../assets/images/session9/92230.jpg" alt="Annie">
      <p>2. Brave Tom <br>Learning to garden</p>
    </div>
    <div class="image-container">
      <img src="../../assets/images/session9/3100.jpg" alt="Annie">
      <p>Tom's Reward <br>Fun ride</p>
    </div>
    <div class="page-number" id="page-light">178</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session9Page7',
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
.image-container {
  position: absolute;
  bottom: 0;
  width: 49%;
  height: 100vh;
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