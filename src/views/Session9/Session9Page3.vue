<template>
  <div class="interactive-container">
    <h1 class="title">Mia er modig og belønner sig selv</h1>
    <div class="image-container">
      <img src="../../assets/images/session9/1489.jpg" alt="Annie">
      <p>1. Modige Mia <br>Prøver at løbe på inlinere</p>
    </div>
    <div class="image-container">
      <img src="../../assets/images/session9/1551.jpg" alt="Annie">
      <p>Mias belønning <br>At lave mad med Mor</p>
    </div>
    <audio src="../../assets/sounds/session9/Page175.mp3" ref="voice"/>
    <div class="page-number" id="page-light">175</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session9Page3',
  methods: {
    animateElements() {
      let images = document.querySelectorAll('.image-container');
      let animation = anime.timeline({easing: 'linear', duration: 1})
      animation
        .add({targets: images[0], opacity: 1}, 4200)
        .add({targets: images[1], opacity: 1}, 9200)
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
.title {
  position: absolute;
  font-weight: bold;
  font-size: 4vh;
  top: 2vh;
  left: 1%;
}
.image-container {
  position: absolute;
  bottom: 0;
  width: 49%;
  height: 80vh;
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
  left: 18%;
  width: 64%;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1vh;
  text-align: center;
  font-size: 3vh;
  font-weight: bold;
  margin-bottom: 0;
}
.image-container:nth-of-type(2) {
  right: 0;
}
</style>