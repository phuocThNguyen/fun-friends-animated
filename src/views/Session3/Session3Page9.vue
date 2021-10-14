<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/12014-resized.jpg" alt="grandpa-and-grandma-and-annie" class="session-background">
    <div class="text-box">
      <h1>Grandma and Grandpa walking home</h1>
      <p>Grandma and Grandpa are coming home after
      a day out and they are tired.</p>
      <p>&nbsp;&nbsp;-&nbsp;How do you think they are feeling?</p>
      <p>&nbsp;&nbsp;-&nbsp;How can Annie help?</p>
      <p>Talk to those you're with about how they
      think Annie is feeling in the pictures.
      Did you all have the same ideas?</p>
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
  width: 30vw;
  height: 100%;
  background-color: rgba(255,255,255,0.7);
  padding: 2vw;
  opacity: 0;
}
.text-box h1 {
  font-size: 2.4vw;
  font-weight: bold;
  margin: 3vh 0;
  opacity: 0;
}
.text-box p {
  font-size: 1.9vw;
  margin-bottom: 2vh;
  opacity: 0;
}
.text-box p:last-child {
  display: inline-block;
  background-color: #00ce7c;
  width: 90%;
  color: #ffffff;
  font-weight: bold;
  padding: 1.5vw;
  margin-top: 12vh;
}
</style>