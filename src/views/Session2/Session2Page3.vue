<template>
  <div class="interactive-container">
    <img class="image" src="../../assets/images/session2/11-resized.jpg" alt="sad">
    <div class="text-box">
      <h1>Feelings</h1>
      <p>What do you do when you feel angry, worried, happy or sad?</p>
      <p>Get into a group and act out one feeling.</p>
      <p>Don't say what feeling you are doing, let your classmates
      guess and then guess what feeling they are acting out!</p>
      <p>Try using a role-play mask!</p>

      <p class="extra-box">All feelings are OK</p>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: "Session2Page3",
  methods: {
    animateText() {
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
  },
  mounted() {
    this.animateText();
  }
}
</script>

<style scoped>
.image {
  position: absolute;
  width: 60%;
  height: 100%;
  left: 40%;
}
.text-box {
  position: absolute;
  padding: .5vh 1vh;
  width: 40%;
}
.text-box h1 {
  font-weight: bold;
  font-size: 8vh;
  margin-bottom: .5vh;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 1vh;
  color: #ffffff;
}
.extra-box {
  display: block;
  background-color: #00ce7c;
  opacity: 0;
  font-weight: bold;
  font-size: 4vh !important;
  padding: 2vh;
  text-align: center;
  margin-top: 2vh;
}
</style>