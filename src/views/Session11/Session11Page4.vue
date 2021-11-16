<template>
  <div class="interactive-container">
    <img src="../../assets/images/session11/311.png" alt="kids" class="session-background">
    <div class="text-box">
      <p>Talk about who you think are in Annie's and Tom's
      Support Teams. Who is in your support team?</p>
      <p>They could be people from:</p>
      <p>&bull;&nbsp;School/kindergarten/playgroup</p>
      <p>&bull;&nbsp;Where you live</p>
      <p>&bull;&nbsp;Community</p>
      <p>&bull;&nbsp;Religious/spiritual group</p>
      <p>&bull;&nbsp;Sporting clubs</p>
      <p>&bull;&nbsp;Family</p>
      <p>&bull;&nbsp;Friends</p>
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
  padding: 2vh;
  opacity: 0;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
}
.text-box p:nth-child(n+3) {
  padding-left: 2vh;
}
.text-box p:nth-child(3) {
  font-size: 3.5vh !important;
}
</style>
