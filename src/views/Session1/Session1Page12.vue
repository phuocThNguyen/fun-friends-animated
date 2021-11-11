<template>
  <div class="interactive-container">
    <img class="session-background" id="page-11" src="../../assets/images/session1/18722-resized.jpg" alt="our-families">

    <div class="left-bar">
      <h1>Our families</h1>
      <p id="para-1">Talk about your family.</p>
      <p id="para-2">What games do you like to play together?</p>
      <p id="para-3">How do you have fun together?</p>

      <div class="text-box">
        <p>We love going to the park</p>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page12",
  mounted() {
    let animation = anime.timeline();
    animation
      .add({
        targets: ".left-bar",
        opacity: 0.90,
        delay: 500,
        duration: 1000,
        easing: 'linear'
      })
      .add({
        targets: "#para-1",
        color: "#000",
        delay: 1000,
        duration: 1000
      })
      .add({
        targets: "#para-2",
        color: "#000",
        duration: 1000
      })
      .add({
        targets: "#para-3",
        color: "#000",
        duration: 1000
      })
      .add({
        targets: ".text-box",
        opacity: 1,
        duration: 1000,
      })
  }
}
</script>

<style scoped>
.left-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 26%;
  height: 100%;
  background-color: #ffffff;
  z-index: 10;
  opacity: 0;
  padding: 3vh 2vh;
}
.left-bar h1 {
  font-size: 5vh;
  margin-bottom: 3vh;
}
.left-bar p {
  color: #ffffff;
  font-size: 2.8vh;
}
.text-box {
  height: auto;
  width: 70%;
  padding: 1.5vh;
  background-color: #00ce7c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15vh;
  left: 15%;
  opacity: 0;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0;
  text-align: center;
}
</style>