<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session3/4479-resized.jpg" alt="friends-playing">
    <div class="text-box">
      <h1>Our friends playing</h1>
      <p>How are your friends feeling today?</p>
      <p>Pay attention to each friend's face. How is each friend feeling?</p>
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
  padding: 2.8vh;
  top: 2vh;
  left: 2%;
  background-color: rgba(255,255,255,0.8);
  opacity: 0;
}
.text-box h1 {
  font-size: 4.2vh;
  margin-bottom: 2vh;
}
.text-box p {
  font-size: 2.5vh;
  margin-bottom: 1vh;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>