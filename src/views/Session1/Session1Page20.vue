<template>
  <div class="interactive-container green-background">
    <div class="images">
      <img src="../../assets/images/session1/18-resized.jpg" alt="bears">
      <img src="../../assets/images/session1/30402-cropped-resized.jpg" alt="giraffe">
      <img src="../../assets/images/session1/215-resized.jpg" alt="elephants">
      <img src="../../assets/images/session1/168-resized.jpg" alt="koalas">
    </div>
    <div class="text-box">
      <p class="text">
        <span>
          We have different bodies and different languages,
        </span>
        <span>
          but we all love the same way.
        </span>
      </p>
    </div>
    <audio id="bear" src="../../assets/sounds/session1/bear-cut.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
    <audio id="elephant" src="../../assets/sounds/session1/elephant.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page20",
  mounted() {
    let vh = window.innerHeight;
    let images = document.getElementsByClassName('images')[0].children;
    let texts = document.getElementsByClassName('text')[0].children;

    let animation = anime.timeline({
      delay: 500,
      duration: 1000,
    });
     setTimeout(() => { document.getElementById('bear').play() }, 500);
     setTimeout(() => { document.getElementById('elephant').play() }, 6000);

    animation
      .add({
        targets: images[0],
        translateY: -0.1*vh,
        opacity: 1,
        endDelay: 2500,
      })
      .add({
        targets: images[1],
        translateY: -0.1*vh,
        opacity: 1,
      })
      .add({
        targets: images[2],
        translateY: -0.1*vh,
        opacity: 1,
        endDelay: 1500
      })
      .add({
        targets: images[3],
        translateY: -0.1*vh,
        opacity: 1,
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