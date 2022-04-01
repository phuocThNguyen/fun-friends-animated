<template>
  <div class="interactive-container">
    <img src="../../assets/images/session11/palmtree.png" alt="background" class="session-background">
    <div class="text-box">
      <p>Vi hjælper hinanden ved at sige venlige / omsorgsfulde ord og ved at lytte til hinanden.</p>
      <p>Tal med dine venner / klassekammerater om hvordan I kan hjælpe hinanden.</p>
      <p>Hvordan kan du / I hjælpe dyr?</p>
      <p>Hvordan kan du / I passe på naturen? For eksempel: rabatterne (langs vejkanten),
        skoven, parken, stranden og regnskovene?</p>
      <p>Hvordan føles det at være hjælpsom?</p>
      <p>Er der en aktivitet I kan lave sammen for at hjælpe endnu mere til?</p>
    </div>
    <audio src="../../assets/sounds/session11/Session11_Page3.mp3" ref="voice"/>
    <div class="page-number" id="page-light">206</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session11Page3',
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box',opacity: 1}, 500)
        .add({targets: text[0],opacity: 1}, 500)
        .add({targets: text[1],opacity: 1}, 6500)
        .add({targets: text[2],opacity: 1}, 11000)
        .add({targets: text[3],opacity: 1}, 13500)
        .add({targets: text[4],opacity: 1}, 21500)
        .add({targets: text[5],opacity: 1}, 25100)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  background-color: rgba(255,255,255,0.9);
  padding: 2vh;
  top: 20vh;
  width: 96%;
  left: 2%;
  opacity: 0;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
  opacity: 0;
}
</style>
