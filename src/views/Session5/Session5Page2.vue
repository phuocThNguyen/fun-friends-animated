<template>
  <div class="interactive-container">
    <img src="../../assets/images/session5/traffic-light-poster-danish.jpg" alt="traffic-light" class="session-background">
    <div class="text-box">
      <p>Vi kan <strong>vælge</strong> vores tanker.</p>
      <p>Røde, ikke-hjælpsomme, tanker gør at vi føler os triste og bange.</p>
      <p>Grønne, hjælpsomme, tanker gør vi føler os modige og rolige.</p>
    </div>
    <div class="light-box" id="red">Rød tanke</div>
    <div class="light-box" id="green">Grøn tanke</div>
    <audio src="../../assets/sounds/session5/Session5_Page2.mp3" ref="voice"/>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session5Page2',
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 2700)
        .add({targets: text[2], opacity: 1}, 8000)
        .add({targets: '#red', opacity: 1}, 14800)
        .add({targets: '#green', opacity: 1}, 19300)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
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
  width: 28%;
  left: 1%;
  top: 20vh;
  padding: 1.5vh;
  background-color: #ffffff;
  opacity: 0;
}
.text-box p {
  font-size: 3.2vh;
  margin-bottom: 4vh;
}
.text-box p:nth-child(2),
.text-box p:last-child {
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
.light-box {
  position: absolute;
  right: 7%;
  width: 20%;
  font-size: 4vh;
  font-weight: bold;
  color: #ffffff;
  padding: 2.5vh 2.1vh;
  text-align: center;
  opacity: 0;
}
#red {
  background-color: #ff0000;
  top: 22vh;
}
#green {
  background-color: #00ce7c;
  bottom: 10vh;
}
</style>