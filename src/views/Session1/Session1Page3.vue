<template>
  <div class="interactive-container">
    <img class="session-background" id="pic" src="../../assets/images/session1/4161-resized.jpg" alt="tom-and-mum">
    <div class="left-bar">
      <h1>Meet Tom</h1>
      <p id="para-2">Today is Tom’s birthday.</p>
      <p id="para-3">He is adopting two rescue dogs, Chilli and Pepper.</p>
      <p id="para-4">Tom wants to give Chilli and Pepper a loving home.</p>
      <p id="para-5">Would you like to adopt a rescue animal for
        your birthday?</p>
    </div>
    <audio autoplay src="../../assets/sounds/session1/dog.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "Session1Page3",
  mounted() {
    let para = document.getElementsByClassName('left-bar')[0].children;
    let initAnimation = anime.timeline({
      easing: 'linear'
    });
    initAnimation
      .add({
        targets: ".left-bar",
        opacity: 1,
        delay: 500,
        duration: 500,
      })
      .add({
        targets: para[0],
        opacity: 1,
        duration: 500,
        delay: 500,
      })
      .add({
        targets: para[1],
        opacity: 1,
        duration: 300,
        delay: 500,
      })
      .add({
        targets: para[2],
        opacity: 1,
        duration: 300,
        delay: 1000,
      })
      .add({
        targets: para[3],
        opacity: 1,
        duration: 300,
        delay: 1000,
      })
      .add({
        targets: para[4],
        opacity: 1,
        duration: 300,
        delay: 1000,
      })
  }
}
</script>

<style scoped>
.left-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  background-color: rgba(255,255,255,0.85);
  z-index: 10;
  opacity: 0;
  padding: 1vh;
}
.left-bar p,
.left-bar h1 {
  opacity: 0;
}
.left-bar p {
  font-size: 5.5vh;
  margin-bottom: 0;
}
.left-bar h1 {
  font-size: 8vh;
  margin: 0;
}
</style>