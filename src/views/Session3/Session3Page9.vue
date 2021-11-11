<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/12014-resized.jpg" alt="grandpa-and-grandma-and-annie" class="session-background">
    <div class="text-box">
      <p>Grandma is coming home after
      a day out and she is tired.</p>
      <p>&nbsp;&nbsp;-&nbsp;How do you think she is feeling?</p>
      <p>&nbsp;&nbsp;-&nbsp;How can Annie help?</p>
      <p>Helping others is great</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session3Page9",
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
      .add({
        targets: text[4],
        opacity: 1
      })
      .add({
        targets: text[5],
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
  background-color: rgba(255,255,255,0.9);
  padding: 1vh;
  opacity: 0;
}
.text-box p {
  font-size: 2.66vh;
  opacity: 0;
}
.text-box p:first-child {
  margin-top: 2vh;
}
.text-box p:last-child {
  display: inline-block;
  text-align: center;
  background-color: #00ce7c;
  width: 96%;
  color: #ffffff;
  font-weight: bold;
  padding: 2vh 0;
  margin-top: 2vh;
}
</style>