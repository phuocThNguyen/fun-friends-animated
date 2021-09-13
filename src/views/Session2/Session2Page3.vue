<template>
  <div class="interactive-container">
    <img class="image" src="../../assets/images/session2/11-resized.jpg" alt="sad">
    <div class="text-box">
      <h1>Feelings</h1>
      <p>What do you do when you feel angry, worried, happy or sad?</p>
      <p>Get in a group and act out one feeling word of your choice.</p>
      <p>Don't say what feeling word you are doing, let your classmates
      guess and then guess what feeling word they are acting out!</p>
      <p>You can also use a role-play mask!</p>

      <p class="extra-box">
        All feelings are OK
      </p>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: "Session2Page3",
  mounted() {
    let para = document.getElementsByClassName('text-box')[0].children;
    let animation = anime.timeline({
      duration: 500,
      delay: 1000,
      easing: 'linear'
    });
    animation
    .add({
      targets: para[1],
      color: "#000",
    })
    .add({
      targets: para[2],
      color: "#000"
    })
    .add({
      targets: para[3],
      color: "#000"
    })
    .add({
      targets: para[4],
      color: "#000"
    })
    .add({
      targets: para[5],
      opacity: 1
    })
  }
}
</script>

<style scoped>
.image {
  position: absolute;
  width: 60vw;
  height: 100%;
  left: 40vw;
}
.text-box {
  position: absolute;
  padding: 3vw;
  width: 40vw;
}
.text-box h1 {
  font-weight: bold;
  font-size: 4vw;
  margin-bottom: 5vh;
}
.text-box p {
  font-size: 2vw;
  margin-bottom: 3vh;
  color: #ffffff;
}
.extra-box {
  display: block;
  background-color: #00ce7c;
  opacity: 0;
  font-weight: bold;
  font-size: 2.5vw !important;
  padding: 1.5vw;
  text-align: center;
  margin-top: 15vh;
}
</style>