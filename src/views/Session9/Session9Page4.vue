<template>
  <div class="interactive-container">
    <div class="image-container">
      <img src="../../assets/images/session9/770.png" alt="Annie">
      <p id="para-1">2. Brave Annie <br>Trying to read a new book</p>
    </div>
    <div class="image-container">
      <img src="../../assets/images/session9/2338.png" alt="Annie">
      <p id="para-2">Annie's Reward <br>Special time with her mom</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session9Page4',
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
  width: 78%;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1vh;
  text-align: center;
  font-size: 4vh;
  font-weight: bold;
  margin-bottom: 0;
}
#para-1 {left: 18%;}
#para-2 {right: 18%;}
.image-container:nth-of-type(2) {
  right: 0;
}
</style>