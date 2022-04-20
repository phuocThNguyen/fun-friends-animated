<template>
  <div class="interactive-container">
    <div class="image-container">
      <img src="../../assets/images/session9/770.jpg" alt="Annie">
      <p id="para-1">2. Modige Mia <br>Prøver at læse en ny bog</p>
    </div>
    <div class="image-container">
      <img src="../../assets/images/session9/2338.jpg" alt="Annie">
      <p id="para-2">Mias belønning <br>Hyggestunder med Mor</p>
    </div>
    <audio src="../../assets/sounds/session9/Page176.mp3" ref="voice"/>
    <div class="page-number" id="page-light">176</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session9Page4',
  methods: {
    animateElements() {
      let images = document.querySelectorAll('.image-container');
      let animation = anime.timeline({easing: 'linear', duration: 1})
      animation
        .add({targets: images[0], opacity: 1}, 500)
        .add({targets: images[1], opacity: 1}, 6100)
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
  width: 78%;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1vh;
  text-align: center;
  font-size: 3vh;
  font-weight: bold;
  margin-bottom: 0;
}
#para-1 {left: 18%;}
#para-2 {right: 18%;}
.image-container:nth-of-type(2) {
  right: 0;
}
</style>