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
  name: "Session1Page20",
  mounted() {
    let images = document.getElementsByClassName('images')[0];
    let texts = document.getElementsByClassName('text')[0];
    let animation = anime.timeline({
      delay: 500,
    });
    animation
        .add({
          targets: images.children[0],
          translateY: -100,
          opacity: 1,
          duration: 2000
        })
        .add({
          targets: images.children[1],
          translateY: -100,
          opacity: 1,
          duration: 2000
        })
        .add({
          targets: images.children[2],
          translateY: -100,
          opacity: 1,
          duration: 2000
        })
        .add({
          targets: images.children[3],
          translateY: -100,
          opacity: 1,
          duration: 2000
        })
        .add({
          targets: texts.children[0],
          color: '#fff',
          delay: 500,
          duration: 1000,
        })
        .add({
          targets: texts.children[1],
          color: '#fff',
          delay: 500,
          duration: 1000,
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
  top: 100px;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: grid;
  grid-template-columns: auto auto;
}
.images img {
  width: 320px;
  height: 220px;
  margin: 30px;
  opacity: 0;
}
.text-box {
  position: absolute;
  left: 25px;
  top: 266px;
  z-index: 20;
}
.text {
  font-weight: bold;
  color: #00ce7c;
  font-size: 19px;
}
</style>