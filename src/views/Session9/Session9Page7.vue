<template>
  <div class="interactive-container">
    <div class="image-container">
      <img src="../../assets/images/session9/92230.jpg" alt="Annie">
      <p>2. Modige Jakob <br>Lærer at dyrke grøntsager</p>
    </div>
    <div class="image-container">
      <img src="../../assets/images/session9/3100.jpg" alt="Annie">
      <p>Jakobs belønning <br>En sjov køretur</p>
    </div>
    <audio src="../../assets/sounds/session9/Session9_Page7.mp3" ref="voice"/>
    <div class="page-number" id="page-light">179</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session9Page7',
  methods: {
    animateText() {},
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    let images = document.querySelectorAll('.image-container');
    let animation = anime.timeline({easing: 'linear', duration: 500})
    animation
      .add({targets: images[0], opacity: 1}, 800)
      .add({targets: images[1], opacity: 1}, 4100)
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