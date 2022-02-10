<template>
  <div class="interactive-container">
    <img src="../../assets/images/session8/67.png" alt="creek" class="session-background">
    <div class="text-box">
      <h1>Additional Activity &ndash; Being kind friends</h1>
      <p class="text"><span>The creek is full of life when it rains. The birds
       start singing, water trickles down the stream and
       the trees glow bright green. </span><span>Zoe, Matilda and Daniel
       want to cross the creek by themselves. Poppy explained
       it is more fun to do it as a team and help each other.
       </span><span>If one of them slips in the water everyone can help.
       Play "I spy with my little eye" by paying attention
       with your five senses. </span><span>Do you think Zoe, Matilda and
       Daniel are kind friends? Do you think that these are
       'red' or 'green' actions?</span></p>
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
        .add({targets: '.text-box', opacity: 0.9}, 1000)
        .add({targets: text[0], color: '#000'}, 5100)
        .add({targets: text[1], color: '#000'}, 16700)
        .add({targets: text[2], color: '#000'}, 27500)
        .add({targets: text[3], color: '#000'}, 38400)
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
  width: 80%;
  left: 10%;
  top: 10vh;
  padding: 3.5vh;
  background-color: #ffffff;
  opacity: 0;
}
.text-box h1 {
  text-align: center;
  font-size: 5vh;
  font-weight: bold;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
  color: #ffffff;
}
.green {color: #00CE7C}
.red {color: #ff0000}
</style>