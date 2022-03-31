<template>
  <div class="interactive-container">
    <img src="../../assets/images/session1/grass-background.jpg" alt="background" class="session-background">
    <div class="text-box">
      <h1>Husk hver dag at:</h1>
      <p>- kom ud og leg</p>
      <p>- få rigeligt med søvn</p>
      <p>-øve dig på at afspænde  / slappe af
        i 5 minutter uden TV eller anden elektronik</p>
      <p>- udvise opmærksomhed overfor glade oplevelser </p>
      <p>- sige tak for glade oplevelser</p>
    </div>
    <div class="image-container">
      <img class="action-image" src="../../assets/images/session1/811-resized.jpg" alt="play-outside">
      <img class="action-image" src="../../assets/images/session5/85693.jpg" alt="sleep-early">
      <img class="action-image" src="../../assets/images/session1/4082-resized.jpg" alt="relaxing">
      <img class="action-image" src="../../assets/images/session1/2749-resized.jpg" alt="happy-things">
      <img class="action-image" src="../../assets/images/session1/thank-you.jpg" alt="thank-you">
    </div>
    <audio ref="audio" autoplay loop src="../../assets/sounds/session1/530415__klankbeeld__forest-summer-roond-020-200619-0186.mp3"/>
    <audio src="../../assets/sounds/session1/45Animated_Book_Page44.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">44</div>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: "Session1Page38",
  methods: {
    animateText() {
      let images = document.querySelectorAll('.action-image');
      let texts = document.querySelector('.text-box').children;
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
      });
      animation
        .add({
          targets: ".text-box",
          opacity: 0.95,
        }, 1)
        .add({
          targets: texts[1],
          opacity: 1,
        }, 1)
        .add({
          targets: images[0],
          opacity: 1,
        }, 1)
        .add({
          targets: texts[2],
          opacity: 1,
        }, 1)
        .add({
          targets: images[1],
          opacity: 1,
        }, 1)
        .add({
          targets: texts[3],
          opacity: 1,
        }, 1)
        .add({
          targets: images[2],
          opacity: 1,
        }, 1)
        .add({
          targets: texts[4],
          opacity: 1,
        }, 1)
        .add({
          targets: images[3],
          opacity: 1,
        }, 1)
        .add({
          targets: texts[5],
          opacity: 1,
        }, 1)
        .add({
          targets: images[4],
          opacity: 1,
        }, 1)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateText();
    this.setAudioVolumeLevel(0.4);
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.action-image {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.image-container {
  position: absolute;
  top: 7vh;
  right: 2%;
  width: 44%;
  height: 40vh;
}
.text-box {
  position: absolute;
  width: 50%;
  background-color: #ffffff;
  opacity: 0;
  padding: 2.8vh;
  top: 2vh;
  left: 2%;
}
.text-box h1 {
  margin-bottom: 1vh;
  font-size: 5vh;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 1vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>