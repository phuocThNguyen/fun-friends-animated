<template>
  <div class="interactive-container">
    <img class="session-background" id="pic" src="../../assets/images/session1/282-resized.jpg" alt="josh-and-poppy">
    <div class="left-bar">
      <p id="para-1">Jon og hunden Karla elsker at lege med en bold i parken.</p>

      <p id="para-2">Hvad kan du lide at lege i parken?</p>

      <div class="text-box">
        <p id="para-3">Det er sjovt at lege med vores dyrevenner.</p>
      </div>

    </div>
    <audio ref="audio" autoplay src="../../assets/sounds/session1/dog.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
    <audio src="../../assets/sounds/session1/11Animated_Book_Page10.mp3" ref="voice"></audio>
    <div class="page-number" id="page-light">10</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page4",
  methods: {
    animateText() {
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear',
      });
      animation
        .add({
          targets: ".left-bar",
          opacity: 1,
          delay: 500,
        })
        .add({
          targets: '#para-1',
          opacity: 1,
        }, 1)
        .add({
          targets: '#para-2',
          opacity: 1,
        }, 1)
        .add({
          targets: ".text-box",
          opacity: 1,
        }, 1);
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1500)
    }
  },
  mounted() {
    this.animateText();
    this.setAudioVolumeLevel(0.2);
    this.playVoiceOver();
  }
}
</script>

<style scoped>
@media screen and (max-width: 930px) {
  .left-bar {
    width: 30% !important;
  }
}
#pic {
  left: 25vh;
}
.left-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background-color: rgba(255,255,255,1);
  z-index: 10;
  opacity: 1;
  padding: 0 1vh;
}
.left-bar p {
  width: 100%;
  opacity: 0;
  font-size: 3vh;
}
.left-bar p:first-child {margin-top: 1vh}
#para-3 {opacity: 1 !important}
.text-box {
  height: auto;
  width: 90%;
  padding: 1vh;
  background-color: #00ce7c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15vh;
  left: 5%;
  opacity: 0;

}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0;
  font-size: 3vh;
  text-align: center;
}
</style>