<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/282-resized.jpg" alt="josh-and-poppy">
    <div class="left-bar">
      <p id="para-1">Josh and Poppy the dog
        <br>love playing ball in the park.</p>

      <p id="para-2">What games do you like
        <br>playing in the park?</p>

      <div class="text-box">
        <p id="para-3">It is fun playing with
          our animal friends.</p>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import Letterize from "letterizejs";
export default {
  name: "Session1Page4",
  mounted() {
    let para1 = new Letterize({targets: "#para-1"});
    let para2 = new Letterize({targets: "#para-2"});

    let animation = anime.timeline();
    animation
      .add({
        targets: ".left-bar",
        opacity: 0.97,
        delay: 500,
        easing: 'linear',
        duration: 500,
      })
      .add({
        targets: para1.listAll,
        color: '#000',
        delay: anime.stagger(50, {start: 500})
      })
      .add({
        targets: para2.listAll,
        color: '#000',
        delay: anime.stagger(50)
      },'-=700')
      .add({
        targets: ".text-box",
        opacity: 1,
        duration: 1000
      }, '+=55');
  }
}
</script>

<style scoped>
@media screen and (max-width: 930px) {
  .left-bar {
    width: 30% !important;
  }
}
.left-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 28%;
  height: 100%;
  background-color: #ffffff;
  z-index: 10;
  opacity: 0;
  padding: 3vh
}
.left-bar p {
  width: 100%;
  color: #ffffff;
  font-size: 2.7vh;
}
.text-box {
  height: auto;
  width: 90%;
  padding: 2vh;
  background-color: #00ce7c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15vh;
  left: 5%;
  opacity: 0;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0;
}
</style>