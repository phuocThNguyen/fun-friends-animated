<template>
  <div class="interactive-container">
    <div class="image-container">
      <img src="../../assets/images/session9/fish_feeding_pond.jpg" alt="feeding-fish">
      <p id="para-1">At fodre fiskene</p>
    </div>
    <div class="image-container">
      <img src="../../assets/images/session9/swimming_lake_children.jpg" alt="swimming">
      <p id="para-2">At svømme i søen</p>
    </div>
    <audio src="../../assets/sounds/session9/Session9_Page10.mp3" ref="voice"/>
    <div class="page-number" id="page-light">182</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session9Page10',
  methods: {
    animateElements() {
      let images = document.querySelectorAll('.image-container');
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: images[0], opacity: 1}, 1)
        .add({targets: images[1], opacity: 1}, 1)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateElements();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.image-container {
  position: absolute;
  bottom: 0;
  width: 49%;
  height: 100vh;
  opacity: 0;
}
.image-container img {
  width: 100%;
  height: 100%;
}
.image-container p {
  display: block;
  position: absolute;
  bottom: 2vh;
  width: 70%;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1vh;
  text-align: center;
  font-size: 3vh;
  font-weight: bold;
  margin-bottom: 0;
}
#para-1 {left: 19%}
#para-2 {right: 19%}
.image-container:nth-of-type(2) {
  right: 0;
}
</style>