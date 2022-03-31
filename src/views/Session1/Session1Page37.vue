<template>
  <div class="interactive-container">
    <img src="../../assets/images/session1/grass-background.jpg" alt="" class="session-background">
    <div class="text-box">
      <h1>Prøv dagligt</h1>
      <p>- Hvis du var voksen for en dag, hvad ville du gøre?</p>
      <p>- Del dit svar med en voksen og bed ham / hende om at
        fortælle om dengang han / hun var barn - hvad kunne
        han / hun li’ at lave, spise og lege?</p>
      <p>- Bed ham / hende om at tegne sit barndomshjem.</p>
      <p>- Husk hver aften at fortælle hinanden om én ting / oplevelse der gjorde jer glad for dagen. </p>
      <p>- Øv dig dagligt på at være MODIG:</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Kig folk i øjnene og smil.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Brug en modig stemme og gør dig selv stor.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Prøv at gøre dit bedste og give tingene et forsøg.</p>
    </div>
    <audio ref="audio" autoplay loop src="../../assets/sounds/session1/530415__klankbeeld__forest-summer-roond-020-200619-0186.mp3"/>
    <audio src="../../assets/sounds/session1/44Animated_Book_Page43.mp3" ref="voice"/>
    <div class="page-number" id="page-light">43</div>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: "Session1Page37",
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500
      })
      animation
        .add({
          targets: ".text-box",
          opacity: 0.9,
        }, 1)
        .add({
          targets: text[1],
          opacity: 1,
        }, 1)
        .add({
          targets: text[2],
          opacity: 1
        }, 1)
        .add({
          targets: text[3],
          opacity: 1
        }, 1)
        .add({
          targets: text[4],
          opacity: 1
        }, 1)
        .add({
          targets: text[5],
          opacity: 1
        }, 1)
        .add({
          targets: text[6],
          opacity: 1
        }, 1)
        .add({
          targets: text[7],
          opacity: 1
        }, 1)
        .add({
          targets: text[8],
          opacity: 1
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
.text-box {
  position: absolute;
  width: 90%;
  left: 5%;
  top: 1vh;
  background-color: #ffffff;
  opacity: 0;
  padding: 2vh 3vh;
}
.text-box h1 {
  text-align: center;
  margin-bottom: 1vh;
  font-size: 5vh;
}
.text-box p {
  font-size: 3.5vh;
  margin-bottom: 2vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>