<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/Dogs&People-swimming.jpg" alt="kids-and-dogs" class="session-background">
    <div class="text-box">
      <h1>Additional Activity &ndash; Someone to look up to who can help</h1>
      <p class="text"><span>Eliza, Josh and Lucy are learning to jump the waves
        and body surf at Straddie Island.</span><span> Chilli and Pepper
        also really love playing in the water.</span><span> Chilli and
        Pepper are showing them how to have a fun and safe time, enjoying
        the waves.</span></p>
    </div>
    <div class="green-box">
      <strong>We love having fun <br>in the ocean.</strong>
    </div>
    <audio src="../../assets/sounds/session10/Session10_Page12.mp3" ref="voice"/>
    <div class="page-number" id="page-light">198</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session10Page12',
  methods: {
    animateText() {
      let text = document.querySelector('.text').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: text[0],color: '#000'}, 8000)
        .add({targets: text[1],color: '#000'}, 15900)
        .add({targets: text[2],color: '#000'}, 21200)
        .add({targets: '.green-box',opacity: 1}, 28500)
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
.green-box {
  position: absolute;
  bottom: 1vh;
  left: 9%;
  background-color: #00CE7C;
  color: #ffffff;
  width: 36%;
  padding: 1vh;
  text-align: center;
  font-size: 4.5vh;
  opacity: 0;
}
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;
  padding: 1vh;
}
.text-box h1 {
  font-size: 5vh;
  margin-bottom: 0;
}
.text-box p {
  font-size: 3.5vh;
  margin-bottom: 0;
  color: #ffffff;
}
.session-background {
  top: 10vh;
}
</style>
