<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Additional Activity &ndash; Red and Green Thoughts</h1>
      <p>Daniel and Matilda are sledding in the snow for the first time.
        What are some ‘red’ and ‘green’ thoughts Daniel
        and Matilda might be having? Share what you felt like,
        when you tried something new for the first time.</p>
      <p>Everybody has ‘red’ thoughts when trying something new.
        We can all try to replace our ‘red’ thoughts with
        ‘green’ thoughts. Shout out a ‘green’ thought that
        makes you feel brave!</p>
    </div>
    <img src="../../assets/images/session5/1552.png" alt="afraid" class="images">
    <img src="../../assets/images/session5/1550.png" alt="afraid" class="images">
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session5Page13',
  mounted() {
    let text = document.getElementsByClassName('text-box')[0].children;
    let animation = anime.timeline({
      easing: 'linear',
      duration: 500
    })
    animation
      .add({
        targets: text[1],
        delay: 500,
        opacity: 1
      })
      .add({
        targets: text[2],
        delay: 1500,
        opacity: 1
      })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  padding: 2vh 2vw;
}
.text-box h1 {
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 1.5vh;
}
.text-box p {
  font-size: 2vw;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
.images {
  position: absolute;
  bottom: 0;
  height: 67vh;
  width: 49vw;
}
.images:nth-of-type(2) {
  right: 0;
}
</style>