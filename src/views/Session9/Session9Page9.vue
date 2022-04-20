<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Beløn dig selv</h1>
      <p>Der findes mange måder at belønne sig selv for at have prøvet at gøre sit bedste.</p>
    </div>
    <div class="image-container" id="left">
      <img src="../../assets/images/session9/Beach_Children.jpg" alt="beach-children">
      <p id="para-1">At tilbringe dagen med at have det sjovt på stranden</p>
    </div>
    <div class="image-container" id="right">
      <img src="../../assets/images/session9/healthy_eating_child.jpg" alt="healthy-eating">
      <p id="para-2">At spise <br>sin yndlingsret</p>
    </div>
    <audio src="../../assets/sounds/session9/Page181.mp3" ref="voice"/>
    <div class="page-number" id="page-light">181</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session9Page9',
  methods: {
    animateElements() {
      let text = document.querySelector('.text-box').children;
      let images = document.querySelectorAll('.image-container');
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: text[1],opacity: 1}, 2300)
        .add({targets: images[0],opacity: 1}, 9300)
        .add({targets: images[1],opacity: 1}, 13100)
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
@media screen and (max-width: 930px) {
  .text-box p {
    font-size: 2.6vh !important;
  }
}
.text-box {
  position: absolute;
  top: 1vh;
  left: 0;
  padding: .5vh;
}
.text-box h1 {
  font-size: 4vh;
  margin-bottom: 0;
  font-weight: bold;
}
.text-box p {
  font-size: 3vh;
  opacity: 0;
}
.image-container {
  position: absolute;
  bottom: 0;
  width: 49%;
  height: 78vh;
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
  width: 70%;
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
#right {
  right: 0;
}
</style>