<template>
  <div class="interactive-container">
    <img src="../../assets/images/session11/46140.jpg" alt="children" class="session-background">
    <div class="text-box">
      <p>These children are helping each other to be strong.</p>
      <p>Look around or think about your family.
        <br>What do people do to help you and how do you help them?</p>
      <p>Compare your ideas with friends.</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session11Page2',
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
  background-color: rgba(255,255,255,0.9);
  width: 80%;
  bottom: 3vh;
  left: 10%;
  padding: 1.5vh 2vh;
  font-size: 4vh;
  opacity: 0;
}
.text-box p {
  margin-bottom: .5vh;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>
