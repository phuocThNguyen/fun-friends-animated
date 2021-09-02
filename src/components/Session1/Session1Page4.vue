<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/282-resized.jpg" alt="josh-and-poppy">
    <div class="left-bar">
      <p class="mb-0" id="para-1">Josh and Poppy the dog</p>
      <p class="mb-0" id="para-2">love playing ball in the</p>
      <p class="mb-3" id="para-3">park.</p>

      <p class="mb-0" id="para-4">What games do you like</p>
      <p class="mb-3" id="para-5">playing in the park?</p>

      <div class="text-box">
        <p class="mb-0" id="para-6">It is fun playing with</p>
        <p class="mb-0" id="para-7">our animal friends.</p>
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
    let para3 = new Letterize({targets: "#para-3"});
    let para4 = new Letterize({targets: "#para-4"});
    let para5 = new Letterize({targets: "#para-5"});

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
        targets: para3.listAll,
        color: '#000',
        delay: anime.stagger(50)
      },'-=700')
      .add({
        targets: para4.listAll,
        color: '#000',
        delay: anime.stagger(50)
      })
      .add({
        targets: para5.listAll,
        color: '#000',
        delay: anime.stagger(50)
      },'-=700')
      .add({
        targets: ".text-box",
        opacity: 1,
        duration: 1000
      }, '+=50');
  }
}
</script>

<style scoped>
.left-bar {
  position: absolute;
  width: 26vw;
  height: 100%;
  background-color: #ffffff;
  z-index: 10;
  opacity: 0;
  padding: 4vh
}
.left-bar p {
  color: #ffffff;
  font-size: 1.9vw;
}
.text-box {
  height: 15vh;
  width: 20vw;
  background-color: #00ce7c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 11vh;
  left: 3vw;
  opacity: 0;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  margin-left: 0;
}
</style>