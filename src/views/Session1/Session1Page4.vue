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
    <audio autoplay src="../../assets/sounds/session1/dog.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page4",
  mounted() {
    let animation = anime.timeline({
      delay: 500,
      duration: 500,
      easing: 'linear',
    });
    animation
      .add({
        targets: ".left-bar",
        opacity: 1,
      })
      .add({
        targets: '#para-1',
        opacity: 1,
      })
      .add({
        targets: '#para-2',
        opacity: 1,
      })
      .add({
        targets: ".text-box",
        opacity: 1,
      });
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
  width: 50%;
  height: 100%;
  background-color: rgba(255,255,255,0.85);
  z-index: 10;
  opacity: 0;
  padding: 0 0 0 1vh;
}
.left-bar p {
  width: 100%;
  opacity: 0;
  font-size: 5vh;
}
#para-3 {opacity: 1 !important}
.text-box {
  height: auto;
  width: 90%;
  padding: 1vh;
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
  font-size: 5vh;
  text-align: center;
}
</style>