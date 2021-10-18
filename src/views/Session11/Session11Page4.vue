<template>
  <div class="interactive-container">
    <img src="../../assets/images/session11/311.png" alt="kids" class="session-background">
    <div class="text-box">
      <h1>Annie's and Tom's support teams</h1>
      <p>Talk about who you think are in Annie's and Tom's
      Support Teams. Who is in your support team?</p>
      <p>They could be people from:</p>
      <p>&bull;&nbsp;&nbsp;School/kindergarten/playgroup</p>
      <p>&bull;&nbsp;&nbsp;Where you live</p>
      <p>&bull;&nbsp;&nbsp;Community</p>
      <p>&bull;&nbsp;&nbsp;Religious/spiritual group</p>
      <p>&bull;&nbsp;&nbsp;Sporting clubs</p>
      <p>&bull;&nbsp;&nbsp;Family</p>
      <p>&bull;&nbsp;&nbsp;Friends</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session11Page4',
  mounted() {
    anime({
      targets: '.text-box',
      opacity: 1,
      duration: 500,
      delay: 500,
      easing: 'linear'
    })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;
  width: 40%;
  height: 100vh;
  padding: 3vh 2.8vh;
  opacity: 0;
}
.text-box h1 {
  font-size: 4vh;
  font-weight: bold;
  margin-bottom: 2vh;
}
.text-box p {
  font-size: 2.8vh;
  margin-bottom: 1.5vh;
}
</style>
