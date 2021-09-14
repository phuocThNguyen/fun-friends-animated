<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/126256-resized.jpg" alt="butterflies-in-the-tummy" class="session-background">
    <div class="text-box">
      <h1>Body Clues</h1>
      <p>How is she feeling?</p>
      <p>How can you tell?</p>
      <p>Sometimes when children feel
        nervous their heart starts beating fast,
        there are butterflies in their tummy,
        their legs get shaky, they get red in
        the face or get sweaty.</p>
      <p>My body is my friend. It tells
        me when I need to relax.</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session4Page3",
  mounted() {
    let text = document.getElementsByClassName('text-box')[0].children;
    let animation = anime.timeline({
      easing: 'linear',
      duration: 700,
      delay: 700
    });
    animation
        .add({
          targets: text[1],
          opacity: 1
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
          delay: 2000
        })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  z-index: 10;
  background-color: #ffffff;
  width: 35vw;
  height: 100%;
  padding: 2vw;
}
.text-box h1 {
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 3vh;
}
.text-box p {
  font-size: 1.8vw;
  opacity: 0;
}
.text-box p:nth-child(2) {
  margin-bottom: 0;
}
.text-box p:last-child {
  display: inline-block;
  background-color: #00ce7c;
  width: 90%;
  color: #ffffff;
  font-weight: bold;
  padding: 1vw;
  text-align: center;
  margin-top: 32vh;
}
</style>