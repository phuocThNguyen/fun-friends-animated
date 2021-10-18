<template>
  <div class="interactive-container">
    <img id="left-pad-img" src="../../assets/images/session4/27475-resized.jpg" alt="worried" class="session-background">
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
  name: "Session4Page2",
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
#left-pad-img {
  left: 15%;
}
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #ffffff;
  width: 35%;
  height: 100%;
  padding: 2.8vh;
}
.text-box h1 {
  font-size: 4.2vh;
  font-weight: bold;
  margin-bottom: 3vh;
}
.text-box p {
  font-size: 2.52vh;
  opacity: 0;
}
.text-box p:nth-child(2) {
  margin-bottom: 0;
}
.text-box p:last-child {
  display: inline-block;
  background-color: #00ce7c;
  width: 96%;
  color: #ffffff;
  font-weight: bold;
  padding: 1vh;
  text-align: center;
  margin-top: 50%;
}
</style>