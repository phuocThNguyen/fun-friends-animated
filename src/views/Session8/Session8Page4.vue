<template>
  <div class="interactive-container">
    <div class="text-box">
      <p>Erika er lige kommet hjem fra badeferie. Her er nogle billeder.</p>
      <p>Hvad tror du Erika lavede imens hun var på ferie?</p>
      <p>Hvad kan du gøre eller sige, for at vise at du er glad på Erikas vegne?</p>
    </div>
    <img src="../../assets/images/session8/135407-OSAV2U-882.jpg" alt="Annie" class="images">
    <img src="../../assets/images/session8/135348-OSAU2M-875.jpg" alt="family" class="images">
    <audio autoplay loop src="../../assets/sounds/session1/beach-sound.mp3" ref="audio"/>
    <audio src="../../assets/sounds/session8/Page160.mp3" ref="voice"/>
    <div class="page-number" id="page-light">160</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session8Page4',
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear', duration: 500});
      animation
        .add({targets: text[0], opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 6200)
        .add({targets: text[2], opacity: 1}, 11000)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    }
  },
  mounted() {
    this.setAudioVolumeLevel(0.4);
    this.animateText();
    this.playVoiceOver();
  },
}
</script>

<style scoped>
.text-box {
  position: absolute;
  padding: 1vh;
  width: 100%;
  top: 1vh;
}
.text-box h1 {
  font-size: 4vh;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 3vh;
  opacity: 0;
  margin-bottom: .5vh;
}
.images {
  position: absolute;
  height: 80vh;
  width: 50%;
  bottom: -7vh;
}
.images:nth-child(2) {
  right: 0;
}
</style>