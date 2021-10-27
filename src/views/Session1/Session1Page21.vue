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
    <audio id="duck" src="../../assets/sounds/session1/duck-cut.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
    <audio id="cow" src="../../assets/sounds/session1/cow-cut.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
    <audio id="pig" src="../../assets/sounds/session1/pig-cut.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
    <audio id="sheep" src="../../assets/sounds/session1/sheep-cut.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page21",
  mounted() {
    let vh = window.innerHeight;
    let images = document.getElementsByClassName('images')[0].children;
    let texts = document.getElementsByClassName('text')[0].children;
    let animation = anime.timeline({
      duration: 1000
    });
    setTimeout(() => { document.getElementById('duck').play() }, 500);
    setTimeout(() => { document.getElementById('cow').play() }, 5000);
    setTimeout(() => { document.getElementById('pig').play() }, 9500);
    setTimeout(() => { document.getElementById('sheep').play() }, 14500);
    animation
      .add({
        targets: images[0],
        translateY: -0.1*vh,
        opacity: 1,
        delay: 500
      })
      .add({
        targets: images[1],
        translateY: -0.1*vh,
        opacity: 1,
        delay: 3500
      })
      .add({
        targets: images[2],
        translateY: -0.1*vh,
        opacity: 1,
        delay: 3500,
      })
      .add({
        targets: images[3],
        translateY: -0.1*vh,
        opacity: 1,
        delay: 4000,
      })
      .add({
        targets: texts[0],
        opacity: 1,
      })
      .add({
        targets: texts[1],
        opacity: 1,
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
  top: 8vh;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: grid;
  grid-template-columns: auto auto;
}
.images img {
  width: 62vh;
  height: 41vh;
  margin: 2.5vh;
  opacity: 0;
}
.text-box {
  position: absolute;
  left: 8%;
  top: 46%;
  z-index: 20;
}
@media screen and (max-width: 930px) {
  .text-box {
    top: 44.5% !important;
  }
}
.text span {
  font-weight: bold;
  color: #ffffff;
  font-size: 3vh;
  opacity: 0;
}
</style>