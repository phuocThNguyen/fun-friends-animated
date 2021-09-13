<template>
  <div class="interactive-container green-background">
    <div class="images">
      <img src="../../assets/images/session1/213-resized.jpg" alt="bears">
      <img src="../../assets/images/session1/3877-resized.jpg" alt="giraffe">
      <img src="../../assets/images/session1/15-resized.jpg" alt="elephants">
      <img src="../../assets/images/session1/336-resized.jpg" alt="koalas">
    </div>
    <div class="text-box">
      <p class="text">
        <span>
          We have families.
        </span>
        <span>
          We all love our families and we all share the same feelings.
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page21",
  mounted() {
    let vh = window.innerHeight;
    let images = document.getElementsByClassName('images')[0];
    let texts = document.getElementsByClassName('text')[0];
    let animation = anime.timeline({
      delay: 500,
      duration: 1000
    });
    animation
      .add({
        targets: images.children[0],
        translateY: -0.1*vh,
        opacity: 1,
      })
      .add({
        targets: images.children[1],
        translateY: -0.1*vh,
        opacity: 1,
      })
      .add({
        targets: images.children[2],
        translateY: -0.1*vh,
        opacity: 1,
      })
      .add({
        targets: images.children[3],
        translateY: -0.1*vh,
        opacity: 1,
      })
      .add({
        targets: texts.children[0],
        color: '#fff',
      })
      .add({
        targets: texts.children[1],
        color: '#fff',
      })
  }
}
</script>

<style scoped>
.green-background {
  background-color: #00ce7c;
}
.images {
  position: absolute;
  top: 10vh;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: grid;
  grid-template-columns: auto auto;
}
.images img {
  width: 45vw;
  height: 41vh;
  margin: 2vw;
  opacity: 0;
}
.text-box {
  position: absolute;
  left: 12vw;
  top: 48%;
  z-index: 20;
}
.text {
  font-weight: bold;
  color: #00ce7c;
  font-size: 2vw;
}
</style>