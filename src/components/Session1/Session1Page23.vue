<template>
  <div class="interactive-container">
    <div class="images">
      <img src="../../assets/images/session1/2350878-resized.jpg" alt="house">
      <img src="../../assets/images/session1/73-resized.jpg" alt="house">
      <img src="../../assets/images/session1/253433-P46W90-433-resized.jpg" alt="house">
      <img src="../../assets/images/session1/9528-resized.jpg" alt="house">
    </div>
    <div class="text-box">
      <p class="text">
        <span>
          Houses are different,
        </span>
        <span>
          but inside we are all the same.
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page23",
  mounted() {
    let texts = document.getElementsByClassName('text')[0];
    let animation = anime.timeline();
    animation
        .add({
          targets: ".text-box",
          opacity: 0.95,
          duration: 1000,
          delay: 1000,
          easing: 'linear',
        })
        .add({
          targets: texts.children[0],
          color: '#fff',
          duration: 1000,
          delay: 500,
        })
        .add({
          targets: texts.children[1],
          color: '#fff',
          duration: 1000,
          delay: 500,
        })
  }
}
</script>

<style scoped>
.images {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10px;
  row-gap: 10px;
}
.images img {
  width: 370px;
  height: 250px;
  opacity: 1;
  align-self: center;
  justify-self: center;
}
.text-box {
  position: absolute;
  left: 65px;
  bottom: 66px;
  z-index: 20;
  background-color: #00CE7C;
  width: 650px;
  height: 60px;
  padding: 15px 85px 15px 85px;
  opacity: 0;
}
.text {
  font-weight: bold;
  color: #00ce7c;
  font-size: 19px;
  margin-bottom: 0;
}
</style>