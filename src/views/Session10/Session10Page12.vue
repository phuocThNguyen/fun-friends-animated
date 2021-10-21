<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/Dogs&People-swimming.png" alt="kids-and-dogs" class="session-background">
    <div class="text-box">
      <h1>Additional Activity &ndash; Someone to look up to who can help</h1>
      <p>Eliza, Josh and Lucy are learning to jump the waves
        and body surf at Straddie Island. Chilli and Pepper
        also really love playing in the water. Chilli and Pepper
        are showing them how to have a fun and safe time, enjoying
        the waves.</p>
    </div>
    <div class="green-box">
      We love having fun in the ocean.
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session10Page12',
  mounted() {
    anime({
      targets: '.green-box',
      opacity: 1,
      duration: 500,
      delay: 500,
      easing: 'linear'
    })
  }
}
</script>

<style scoped>
.green-box {
  position: absolute;
  bottom: 8vh;
  left: 3%;
  background-color: #00CE7C;
  color: #ffffff;
  width: 25%;
  padding: 1vh 2.8vh;
  text-align: center;
  font-size: 3vh;
  opacity: 0;
}
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;
  padding: 2.6vh;
}
.text-box h1 {
  font-size: 4vh;
}
.text-box p {
  font-size: 2.7vh;
  margin-bottom: 0;
}
.session-background {
  top: 10vh;
}
</style>
