<template>
  <div class="interactive-container">
    <img class="session-background" id="pic" src="../../assets/images/session1/4161-resized.jpg" alt="tom-and-mum">
    <div class="left-bar">
      <h1>Her ser du Tom</h1>
      <p id="para-2">Her har vi Tom!</p>
      <p id="para-3">Tom har fødselsdag i dag.</p>
      <p id="para-4">Han fylder 5 år.</p>
      <p id="para-5">I fødselsdagsgave har han fået lov til
        at adoptere to hunde fra dyreinternatet: Karla og Otto.</p>
      <p id="para-6">Tom vil gerne give Karla og Otto et kærligt hjem.</p>
      <p id="para-7">Hvis du og din familie skulle have et dyr,
        ville I så adoptere et dyr fra dyreinternatet?</p>
    </div>
    <audio ref="audio" autoplay src="../../assets/sounds/session1/dog.mp3"/>
    <audio src="../../assets/sounds/session1/Page9.mp3" ref="voice"/>
    <div class="page-number" id="page-light">9</div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "Session1Page3",
  methods: {
    animateText() {
      let para = document.getElementsByClassName('left-bar')[0].children;
      let initAnimation = anime.timeline({duration: 300, easing: 'linear'});
      initAnimation
        .add({targets: ".left-bar", opacity: 1},500)
        .add({targets: para[1], opacity: 1,}, 1100)
        .add({targets: para[2], opacity: 1,}, 3300)
        .add({targets: para[3], opacity: 1,}, 5900)
        .add({targets: para[4], opacity: 1,}, 9000)
        .add({targets: para[5], opacity: 1,}, 18200)
        .add({targets: para[6], opacity: 1,}, 22800)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 0)
    }
  },
  mounted() {
    this.animateText();
    this.setAudioVolumeLevel(0.1);
    this.playVoiceOver();
  }
}
</script>

<style scoped>
#pic {
  left: 25vh
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
  padding: 1vh;
}
.left-bar p {opacity: 0;}
.left-bar p {font-size: 3vh;margin-bottom: 2vh;}
.left-bar h1 {font-size: 4vh;margin-bottom: 3vh;}
</style>