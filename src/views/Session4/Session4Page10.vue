<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/324483-P9A8QQ-419-resized.jpg"
         alt="lying-on-grass" class="session-background" id="adjust">
    <div class="text-box">
      <h1>'Bubble' Breathing</h1>
      <p>Practise 'bubble' breathing with a straw.
        Blow slowly out of the straw for a long time.
        Slow and deep breathing calms you down.</p>
      <p>After, practise ‘bubble’ breathing by
        lying down without the straw. Imagine
        yourself in a special space.</p>
      <p>If you want to, you can describe or
        draw a picture of your peaceful, quiet
        place in the next page.</p>
      <p>Breathing deeply and
        slowly calms us down</p>
    </div>
    <div class="page-number" id="page-light">96</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session4Page10",
  mounted() {
    let text = document.getElementsByClassName('text-box')[0].children;
    let animation = anime.timeline({
      easing: 'linear',
      duration: 700,
      delay: 2000
    });
    animation
      .add({
        targets: text[1],
        opacity: 1,
        delay: 500
      })
      .add({
        targets: text[2],
        opacity: 1
      })
      .add({
        targets: text[3],
        opacity: 1
      })
      .add({
        targets: text[4],
        opacity: 1,
      })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #ffffff;
  width: 48%;
  height: 100%;
  padding: 1.5vh;
}
.text-box h1 {
  font-size: 5vh;
  font-weight: bold;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 1vh;
  opacity: 0;
}
.text-box p:last-child {
  display: inline-block;
  background-color: #00ce7c;
  width: 96%;
  color: #ffffff;
  font-weight: bold;
  padding: 1vh;
  text-align: center;
  margin-top: 5%;
}
#adjust {
  left: 12%;
}
</style>