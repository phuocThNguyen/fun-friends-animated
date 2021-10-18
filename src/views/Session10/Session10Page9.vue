<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/1354.png" alt="background" class="session-background">
    <img src="../../assets/images/session10/superhero-kids.png" alt="kids" class="kids">
    <div class="text-box">
      <p>Pretend you are a Superhero. Make yourself as big as you
      can by stretching your neck, arms, legs, fingers or toes.</p>
      <p>What does a superhero do to help everybody?</p>
      <p>What can you do to be a superhero</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session10Page9',
  mounted() {
    let animation = anime.timeline();
    animation
      .add({
        targets: '.kids',
        scale: 100,
        duration: 1000,
        delay: 500
      })
      .add({
        targets: '.text-box',
        opacity: 1,
        easing: 'linear',
        duration: 500,
        delay: 200
      })
  }
}
</script>

<style scoped>
.kids {
  position: absolute;
  width: 1%;
  bottom: 20vh;
  left: 65vh;
}
.text-box {
  position: absolute;
  background-color: rgba(255,255,255,0.8);
  width: 66%;
  text-align: center;
  left: 17%;
  top: 13vh;
  font-size: 3vh;
  padding: 2vh;
  opacity: 0;
}
.text-box p {
  margin-bottom: 1vh;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>
