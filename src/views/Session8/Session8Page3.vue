<template>
  <div class="interactive-container">
    <img src="../../assets/images/session8/33261.png" alt="Tom" class="session-background">
    <div class="text-box">
      <h1>Tom falls off</h1>
      <p>Tom has fallen off his bike. He has only just learnt
      to ride without training wheels.</p>
      <p>How do you think he is feeling?
        <br>What can you do to be a kind friend to Tom?
      </p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session8Page3',
  mounted() {
    anime({
      targets: '.text-box',
      opacity: 1,
      easing: 'linear',
      duration: 300,
      delay: 500
    })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 2vh;
  left: 2%;
  width: 46%;
  background-color: rgba(255,255,255,0.9);
  padding: 2vh 2.6vh;
  opacity: 0;
}
.text-box h1 {
  font-size: 4vh;
}
.text-box p {
  font-size: 2.6vh;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>