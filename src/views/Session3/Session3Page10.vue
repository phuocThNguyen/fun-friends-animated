<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/4829-resized.jpg" alt="little-plants" class="session-background">
    <div class="text-box">
      <h1>Friends and Families</h1>
      <p>What makes kids helpful and kind?</p>
      <p>Share your ideas with a friend in your class.
        <br>Listen to your friend's opinion.
       It is ok to be different.</p>
    </div>
    <div class="notice-box">We plant trees to be kind to planet Earth</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session3Page10",
  mounted() {
    let animation = anime.timeline({
      delay: 500,
      duratiom: 500,
      easing: 'linear'
    })
    animation
      .add({
        targets: ".text-box",
        opacity: 1,
      })
      .add({
        targets: '.notice-box',
        opacity: 1
      })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 1%;
  left: 1%;
  width: 70%;
  background-color: rgba(255,255,255, 0.9);
  padding: 0 1vh;
  opacity: 0;
}
.text-box h1 {
  font-size: 6vh;
  font-weight: bold;
  margin-bottom: 1vh;
  opacity: 1;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
  opacity: 1;
}
.notice-box {
  position: absolute;
  bottom: 5vh;
  width: 70%;
  left: 15%;
  text-align: center;
  color: #ffffff;
  background-color: rgba(0, 206, 124, 1);
  font-size: 4vh;
  font-weight: bold;
  padding: .7vh;
  opacity: 0;
}
</style>