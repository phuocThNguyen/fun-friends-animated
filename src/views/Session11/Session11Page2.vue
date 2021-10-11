<template>
  <div class="interactive-container">
    <img src="../../assets/images/session11/46140.png" alt="children" class="session-background">
    <p class="text">Support Teams</p>
    <div class="text-box">
      <p>These children are helping are other to be strong.</p>
      <p>Look around or think about your family. What do people
      do to help you an how do you help them?</p>
      <p>Compare your ideas with a friends, ask them what they
      think we can do to help each other.</p>
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
.text {
  position: absolute;
  top: 3vh;
  left: 2vw;
  color: #ffffff;
  font-size: 3vw;
  font-weight: bold;
}
.text-box {
  position: absolute;
  background-color: rgba(255,255,255,0.9);
  width: 90vw;
  bottom: 5vh;
  left: 5vw;
  padding: 1.5vh 2vw;
  font-size: 2vw;
  opacity: 0;
}
.text-box p {
  margin-bottom: .5vh;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>
