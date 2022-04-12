<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/5183-resized.jpg" class="images" alt="riding-scooter">
    <img src="../../assets/images/session4/2778146-resized.jpg" class="images" alt="riding-scooter2">
    <div class="text-box">
      <h1>At slappe af sammen</h1>
      <p>What are these children doing to relax and calm down?</p>
    </div>
    <audio src="../../assets/sounds/session4/Session4_Page5.mp3" ref="voice"/>
    <div class="page-number" id="page-light">91</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session4Page5',
  methods: {
    animateElements() {
      let images = document.getElementsByClassName('images');
      let animation = anime.timeline({easing: 'linear', duration: 500, delay: 500});
      animation
        .add({targets: images[0], opacity: 1})
        .add({targets: images[1], opacity: 1});
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    },
  },
  mounted() {
    this.animateElements();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.text-box {
  top: -1vh;
  position: absolute;
  padding: 1.5vh;
}
.text-box h1 {
  font-size: 4vh;
  font-weight: bold;
  margin-bottom: .5vh;
}
.text-box p {
  font-size: 3vh;
}
.images {
  position: absolute;
  width: 49.5%;
  height: 80vh;
  bottom: 0;
  opacity: 0;
}
.images:nth-of-type(2) {
  right: 0;
}
</style>