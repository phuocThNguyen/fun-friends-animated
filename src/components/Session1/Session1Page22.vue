<template>
  <div class="interactive-container">
    <div class="images">
      <img src="../../assets/images/session1/3051-resized.jpg" alt="house">
      <img src="../../assets/images/session1/13204-resized.jpg" alt="house">
      <img src="../../assets/images/session1/11185-resized.jpg" alt="house">
      <img src="../../assets/images/session1/290-resized.jpg" alt="house">
    </div>
    <div class="text-box">
      <p class="text">
        <span>
          We may live in different homes,
        </span>
        <span>
          but inside we all have families.
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page22",
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
  top: 66px;
  z-index: 20;
  background-color: #00CE7C;
  width: 650px;
  height: 60px;
  padding: 15px 40px 15px 40px;
  opacity: 0;
}
.text {
  font-weight: bold;
  color: #00ce7c;
  font-size: 19px;
  margin-bottom: 0;
}
</style>