<template>
  <div class="interactive-container">
    <img src="../../assets/images/session8/67.png" alt="creek" class="session-background">
    <div class="text-box">
      <h1>Ekstra Aktivitet - At være en omsorgsfuld og venlig ven</h1>
      <p class="text"><span>Vandløbet vækkes til live når det regner. Fuglene begynder at synge,
        vandet løber langsomt og træerne står lysende grønne. </span><span>Sille, Mathilde og
        Daniel vil gerne krydse vandløbet på egen hånd. Alberte forklarer at det er sjovere
        at gøre det sammen som et hold hvor man hjælper hinanden. </span><span>De kan hjælpe
        hinanden hvis én af dem snubler i vandet. Brug legen ”Skibet er ladet med ...” til
        at udvise opmærksomhed ved hjælp af dine fem sanser. </span><span>Synes du at Sille,
        Mathilde og Daniel opfører sig som omsorgsfulde venner? Synes du at følgende er
        ”røde” eller ”grønne” handlinger?</span></p>
    </div>
    <audio autoplay ref="audio" src="../../assets/sounds/session1/Water-Stream-Sound-Effect-Amplified.mp3"/>
    <audio src="../../assets/sounds/session8/Session8_Page11.mp3" ref="voice"/>
    <div class="page-number" id="page-light">167</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session8Page11',
  methods: {
    animateText() {
      let text = document.querySelector('.text').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box', opacity: 0.9}, 1)
        .add({targets: text[0], color: '#000'}, 1)
        .add({targets: text[1], color: '#000'}, 1)
        .add({targets: text[2], color: '#000'}, 1)
        .add({targets: text[3], color: '#000'}, 1)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
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
.text-box {
  position: absolute;
  width: calc(0.9*133vh);
  left: calc(0.05*133vh);
  bottom: 12vh;
  padding: 2vh 3vh;
  background-color: #ffffff;
  opacity: 0;
  text-align: center;
}
.text-box h1 {
  font-size: 4vh;
  font-weight: bold;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: 0;
  color: #ffffff;
}
</style>