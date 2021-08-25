<template>
  <div class="interactive-container">
    <img class="session-background" id="page-11" src="../../assets/images/session1/18722-resized.jpg" alt="our-families">
    <div class="left-bar">
      <h1 class="mt-3 mb-4">Our families</h1>
      <p id="para-1">Talk about your family and what you like to do.</p>
      <p id="para-2">What games do you like to play?</p>
      <p id="para-3">What do you enjoy doing with your family?</p>

      <div class="text-box">
        <p>We love going to the park</p>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page",
  mounted() {
    let animation = anime.timeline();
    animation
      .add({
        targets: "#para-1",
        color: "#000",
        delay: 1000,
        duration: 500
      })
      .add({
        targets: "#para-2",
        color: "#000",
        duration: 500
      })
      .add({
        targets: "#para-3",
        color: "#000",
        duration: 500
      })
      .add({
        targets: ""
      })
  }
}
</script>

<style scoped>
.left-bar {
  position: absolute;
  background-color: #ffffff;
  width: 200px;
  padding: 10px 10px 10px 10px;
  height: 100%;
}
#page-11 {
  left: 200px;
}
.left-bar h1 {
  font-size: 24px;
  font-weight: bolder;
}
.left-bar p {
  margin-bottom: 30px;
  color: #ffffff;
}
.text-box {
  position: absolute;
  background-color: #00CE7C;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0;
  padding: 10px 15px 10px 15px;
}
</style>