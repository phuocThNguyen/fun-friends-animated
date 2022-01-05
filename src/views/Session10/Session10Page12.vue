<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/Dogs&People-swimming.jpg" alt="kids-and-dogs" class="session-background">
    <div class="text-box">
      <h1>Additional Activity &ndash; Someone to look up to who can help</h1>
      <p>Eliza, Josh and Lucy are learning to jump the waves
        and body surf at Straddie Island. Chilli and Pepper
        also really love playing in the water. Chilli and Pepper
        are showing them how to have a fun and safe time, enjoying
        the waves.</p>
    </div>
    <div class="green-box">
      <strong>We love having fun <br>in the ocean.</strong>
    </div>
    <div class="page-number" id="page-light">197</div>
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
  bottom: 1vh;
  left: 9%;
  background-color: #00CE7C;
  color: #ffffff;
  width: 36%;
  padding: 1vh;
  text-align: center;
  font-size: 4.5vh;
  opacity: 0;
}
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;
  padding: 1vh;
}
.text-box h1 {
  font-size: 5vh;
  margin-bottom: 0;
}
.text-box p {
  font-size: 3.5vh;
  margin-bottom: 0;
}
.session-background {
  top: 10vh;
}
</style>
