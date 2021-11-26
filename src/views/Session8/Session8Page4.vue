<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Annie on holiday</h1>
      <p>Annie is just back from holiday at the beach.
        What do you think Annie did on her holiday?
        What can you do or say to be happy for Annie?</p>
    </div>
    <img src="../../assets/images/session8/135407-OSAV2U-882.jpg" alt="Annie" class="images">
    <img src="../../assets/images/session8/135348-OSAU2M-875.jpg" alt="family" class="images">
    <audio autoplay loop src="../../assets/sounds/session1/beach-sound.mp3"></audio>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session8Page4',
  mounted() {
    let text = document.querySelector('.text-box').children;
    let animation = anime.timeline({
      easing: 'linear',
      delay: 500,
      duration: 500
    });
    animation
      .add({
        targets: text[0],
        opacity: 1
      })
      .add({
        targets: text[1],
        opacity: 1
      })
  },
}
</script>

<style scoped>
.text-box {
  position: absolute;
  padding: 1vh;
  width: 100%;
}
.text-box h1 {
  font-size: 5vh;
  margin-bottom: 0;
  opacity: 0;
}
.text-box p {
  font-size: 4vh;
  opacity: 0;
}
.images {
  position: absolute;
  height: 72vh;
  width: 50%;
  bottom: 0;
}
.images:nth-child(2) {
  right: 0;
}
</style>