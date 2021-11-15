<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/12014-resized.jpg" alt="grandpa-and-grandma-and-annie" class="session-background">
    <div class="text-box">
      <p>Grandma is coming home after
      a day out and she is tired.</p>
      <p>&nbsp;&nbsp;-&nbsp;How do you think she is feeling?</p>
      <p>&nbsp;&nbsp;-&nbsp;How can Annie help?</p>
    </div>
    <div class="notice-box">Helping others is great</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session3Page9",
  mounted() {
    let animation = anime.timeline({
      delay: 500,
      duratiom: 500,
      easing: 'linear'
    })
    animation
      .add({
        targets: ".text-box",
        opacity: 1,
      })
      .add({
        targets: '.notice-box',
        opacity: 1
      })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 1%;
  left: 1%;
  width: 50%;
  background-color: rgba(255,255,255,0.9);
  padding: 1vh;
  opacity: 0;
}
.text-box p {
  font-size: 4vh;
  opacity: 1;
}
.text-box p:first-child {
  margin-top: 2vh;
}
.notice-box {
  position: absolute;
  bottom: 5vh;
  width: 70%;
  left: 15%;
  text-align: center;
  color: #ffffff;
  background-color: rgba(0, 206, 124, 1);
  font-size: 4vh;
  font-weight: bold;
  padding: .7vh;
  opacity: 0;
}
</style>