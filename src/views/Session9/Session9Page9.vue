<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Reward Yourself</h1>
      <p>There are many ways to reward ourselves for
       trying our best.</p>
    </div>
    <div class="image-container" id="left">
      <img src="../../assets/images/session9/Beach_Children.png" alt="beach-children">
      <p id="para-1">Spending the day <br>having fun at the beach</p>
    </div>
    <div class="image-container" id="right">
      <img src="../../assets/images/session9/healthy_eating_child.png" alt="healthy-eating">
      <p id="para-2">Eating your <br>favourite healthy meal</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session9Page9',
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
@media screen and (max-width: 930px) {
  .text-box p {
    font-size: 2.6vh !important;
  }
}
.text-box {
  position: absolute;
  top: -.5vh;
  left: 0;
  padding: .5vh;
}
.text-box h1 {
  font-size: 6vh;
  margin-bottom: 0;
  font-weight: bold;
}
.text-box p {
  font-size: 4vh;
}
.image-container {
  position: absolute;
  bottom: 0;
  width: 49%;
  height: 78vh;
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
  width: 70%;
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
#right {
  right: 0;
}
</style>