<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session3/4479-resized.jpg" alt="friends-playing">
    <div class="text-box">
      <h1>Our friends playing</h1>
      <p>What are your friends feeling today?</p>
      <p>Pay attention to each friend's face. What is each friend feeling?</p>
      <p>How do you feel today?</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session3Page2",
  mounted() {
    anime({
      targets: ".text-box",
      opacity: 1,
      easing: 'linear',
      delay: 500,
      duration: 500
    })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  padding: 2vw;
  top: 2vh;
  left: 2vw;
  background-color: rgba(255,255,255,0.8);
  opacity: 0;
}
.text-box h1 {
  font-size: 3vw;
  margin-bottom: 2vh;
}
.text-box p {
  font-size: 1.8vw;
  margin-bottom: 1vh;
}
</style>