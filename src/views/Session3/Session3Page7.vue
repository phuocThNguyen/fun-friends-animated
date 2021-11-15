<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/2906714-resized.jpg" alt="grandpa-and-Tom" class="session-background">
    <div class="text-box">
      <h1>Grandpa would like some company</h1>
      <p>Tom wants to help Grandpa feel happier.</p>
      <p>&nbsp;&nbsp;-&nbsp;How do you think Grandpa is feeling?</p>
      <p>&nbsp;&nbsp;-&nbsp;How do you think Tom is feeling?</p>
      <p>&nbsp;&nbsp;-&nbsp;How can Tom help his Grandpa?</p>
    </div>
    <div class="notice-box">Be kind and helpful</div>

  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session3Page7",
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
  },
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 1vh;
  left: 1%;
  width: 51%;
  padding: 1.4vh;
  background-color: rgba(255,255,255,0.8);
  opacity: 0;
}
.text-box h1 {
  font-size: 4.2vh;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 3.5vh;
  margin-bottom: 1.5vh;
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