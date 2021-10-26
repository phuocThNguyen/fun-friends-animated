<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/2206-resized.jpg" alt="boy-with-bubbles" class="session-background">
    <div class="text-box">
      <h1>Fun Bubble Activities</h1>
      <p>We are now going to play two games.</p>
      <h1><strong>1. Bubble breathing</strong></h1>
      <p>Take five deep slow breaths, in through
       your nose and out through your mouth. We are
       going to blow bubbles with a straw and a cup
       with water. Blow out all our angry, sad, and worried
       feelings into the water. Once we stop breathing out,
       the bubbles go away.</p>
      <p>The same happens with our feelings. We can blow them
       away by doing deep slow calm breathing. Feelings come
       and go, remember all feelings are okay. It is what
       we choose to do with our feelings that counts. Bubble
       breathing is a 'thumbs up' choice.</p>
      <audio autoplay loop src="../../assets/sounds/session3/bubbles.mp3">
        Your browser does not support the
        <code>audio</code> element.</audio>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session3Page11",
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
        opacity: 1
      })
      .add({
        targets: text[3],
        opacity: 1,
      })
      .add({
        targets: text[4],
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
  font-size: 2.4vh;
  margin-bottom: 2vh;
  opacity: 0;
}

</style>