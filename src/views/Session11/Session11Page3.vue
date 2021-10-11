<template>
  <div class="interactive-container">
    <img src="../../assets/images/session11/palmtree.png" alt="background" class="session-background">
    <div class="text-box">
      <p>We help each other by saying kind words and by listening
      to each other.</p>
      <p>Talk to your friends about how to help each other.</p>
      <p>How can you help animals?</p>
      <p>How can you look after natural places like the bush,
       parks, beaches and rainforest?</p>
      <p>How does it feel to be helpful?</p>
      <p>Is there an activity you can do together to help even more?</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session11Page3',
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
  padding: 2vh 2vw;
  top: 30vh;
  left: 13vw;
  text-align: center;
  opacity: 0;
}
.text-box p {
  font-size: 2vw;
  margin-bottom: 1vh;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>
