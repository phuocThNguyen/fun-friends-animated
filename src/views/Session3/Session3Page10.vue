<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/4829-resized.jpg" alt="little-plants" class="session-background">
    <div class="text-box">
      <h1>Friends and Families</h1>
      <p>What do you think makes kids helpful
       and kind?</p>
      <p>Share your ideas with a friend in your
      class. Listen to your friend's opinion.
       It is ok to be different.</p>
      <p>We plant more trees to be kind to planet Earth</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session3Page10",
  mounted() {
    let text = document.getElementsByClassName('text-box')[0].children;
    let animation = anime.timeline({
      delay: 500,
      duration: 500,
      easing: 'linear'
    });
    animation
      .add({
        targets: '.text-box',
        opacity: 1
      })
      .add({
        targets: text[0],
        opacity: 1
      })
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
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background-color: rgba(255,255,255, 0.7);
  padding: 2.8vh;
  opacity: 0;
}
.text-box h1 {
  font-size: 3.36vh;
  font-weight: bold;
  margin: 3vh 0;
  opacity: 0;
}
.text-box p {
  font-size: 2.6vh;
  margin-bottom: 2vh;
  opacity: 0;
}
.text-box p:last-child {
  display: inline-block;
  text-align: center;
  background-color: #00ce7c;
  width: 98%;
  color: #ffffff;
  font-weight: bold;
  padding: 2vh 1vh;
  margin-top: 30vh;
}
</style>