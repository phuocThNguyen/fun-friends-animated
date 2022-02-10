<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Tom's reward</h1>
      <p>When Tom is brave, he rewards himself by doing fun
      activities with his family and friends.</p>
      <p>What are some activities that you think are fun?<p/>
      <p>How can you use these activities to reward yourself?</p>
    </div>
    <div class="image-container" id="left">
      <img src="../../assets/images/session9/21368.jpg" alt="Tom">
      <p id="para-1">1. Brave Tom <br>Sleeping in his own bed</p>
    </div>
    <div class="image-container" id="right">
      <img src="../../assets/images/session9/623020-PNWBO6-422.jpg" alt="Tom-reward">
      <p id="para-2">Tom's Reward <br>Special time with his dad</p>
    </div>
    <audio src="../../assets/sounds/session9/Session9_Page6.mp3" ref="voice"/>
    <div class="page-number" id="page-light">178</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session9Page6',
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let images = document.querySelectorAll('.image-container');
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: text[1], opacity: 1}, 2300)
        .add({targets: text[2], opacity: 1}, 10500)
        .add({targets: text[3], opacity: 1}, 14700)
        .add({targets: images[0], opacity: 1}, 19500)
        .add({targets: images[1], opacity: 1}, 23000)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  },
}
</script>

<style scoped>
@media screen and (max-width: 930px) {
  .text-box p {
    font-size: 2.4vh !important;
  }
}
.text-box {
  position: absolute;
  padding: .5vh 1vh;
}
.text-box h1 {
  font-size: 5vh;
  margin-bottom: 0;
  font-weight: bold;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: 0;
  opacity: 0;
}
.image-container {
  position: absolute;
  bottom: 0;
  width: 50%;
  height: 74vh;
  opacity: 0;
}
.image-container img {
  width: 100%;
  height: 100%;
}
.image-container p {
  display: block;
  position: absolute;
  bottom: 1vh;
  width: 74%;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1vh;
  text-align: center;
  font-size: 4vh;
  font-weight: bold;
  margin-bottom: 0;
}
#para-1 {left: 18%;}
#para-2 {right: 18%;}
#right {
  right: 0;
}
</style>