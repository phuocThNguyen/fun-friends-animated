<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/creek_girl_and_boy.jpg" alt="creek-boys-girl" class="session-background">
    <div class="text-box">
      <h1>Additional Activity &ndash; Paying attention
       with five senses</h1>
      <p>The children are paying careful attention with
       their five senses while playing in the creek. What
       do you think they can hear, see, feel, and taste?</p>
    </div>
    <audio loop autoplay src="../../assets/sounds/session1/Water-Stream-Sound-Effect-Amplified.mp3"></audio>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page20',
  mounted() {
    let text = document.getElementsByClassName('text-box')[0].children;
    let animation = anime.timeline({
      easing: 'linear',
      delay: 2000,
      duration: 500,
    });
    animation
      .add({
        targets: '.text-box',
        opacity: 1,
        delay: 1000
      })
      .add({
        targets: text[1],
        opacity: 1,
        delay: 1000
      })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  width: 96%;
  left: 2%;
  top: 58vh;
  background-color: rgba(255,255,255,0.85);
  padding: 2.1vh;
  opacity: 0;
}
.text-box h1 {
  font-size: 5vh;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 1.5vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>