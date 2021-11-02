<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/5183-resized.jpg" class="images" alt="riding-scooter">
    <img src="../../assets/images/session4/2778146-resized.jpg" class="images" alt="riding-scooter2">
    <div class="text-box">
      <h1>Relaxing Together</h1>
      <p>What are these children doing to relax and calm down?</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page5',
  mounted() {
    let images = document.getElementsByClassName('images');
    let animation = anime.timeline({
      easing: 'linear',
      delay: 700,
      duration: 700,
    });
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
.text-box {
  position: absolute;
  padding: 1.5vh;
}
.text-box h1 {
  font-size: 4.9vh;
  font-weight: bold;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 3.5vh;
}
.images {
  position: absolute;
  width: 49.5%;
  height: 75vh;
  bottom: 0;
  opacity: 0;
}
.images:nth-of-type(2) {
  right: 0;
}
</style>