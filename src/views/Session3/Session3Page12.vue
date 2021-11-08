<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/1605-resized.jpg" alt="boy-with-bubbles" class="session-background">
    <div class="text-box">
      <h1><strong>2. Bubble blowing</strong></h1>
      <p>Another fun game to blow our worries away
      is getting a Magic Bubble Wand. There are many
       shapes and sizes for these bubbles, some are
      shapes of stars, some are love hearts, and some
      are circles. Breathe in calm, happy feelings in
      through your nose and blow away your angry, sad
      and worried feelings far away from you until
      they pop and go away.</p>
      <p>Notice how the bubbles float away and fade,
      the same with our feelings. Feelings don't stay
      forever, feelings change. Using a Magic Bubble Wand
      to calm down is a 'thumbs up' choice.</p>
      <p>If you want to, say what you are blowing away
      as your bubbles pop.</p>
      <audio autoplay src="../../assets/sounds/session3/bubbles.mp3">
        Your browser does not support the
        <code>audio</code> element.</audio>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session3Page12",
  mounted() {
    let text = document.getElementsByClassName('text-box')[0].children;
    let animation = anime.timeline({
      delay: 500,
      duration: 500,
      easing: 'linear'
    });
    animation
      .add({
        targets: '.text-box',
        opacity: 1
      })
      .add({
        targets: text[0],
        opacity: 1
      })
      .add({
        targets: text[1],
        opacity: 1
      })
      .add({
        targets: text[2],
        opacity: 1,
        delay: 3000,
      })
      .add({
        targets: text[3],
        opacity: 1,
        delay: 2000,
      })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 35%;
  height: 100%;
  background-color: rgba(255,255,255, 0.7);
  padding: 2.6vh;
  opacity: 0;
}
.text-box h1 {
  font-size: 3.36vh;
  margin: 1vh 0;
  opacity: 0;
}
.text-box p {
  font-size: 2.38vh;
  margin-bottom: 1vh;
  opacity: 0;
}
.text-box p:last-child {
  display: inline-block;
  text-align: center;
  background-color: #00ce7c;
  width: 90%;
  color: #ffffff;
  font-weight: bold;
  padding: 1.5vh;
  margin-top: 2vh;
}
</style>