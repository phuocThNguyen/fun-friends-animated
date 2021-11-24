<template>
  <div class="interactive-container">
    <img src="../../assets/images/session8/67.png" alt="creek" class="session-background">
    <div class="text-box">
      <h1>Additional Activity &ndash; Being kind friends</h1>
      <p>The creek is full of life when it rains. The birds
       start singing, water trickles down the stream and
       the trees glow bright green. Zoe, Matilda and Daniel
       want to cross the creek by themselves. Poppy explained
       it is more fun to do it as a team and help each other.
       If one of them slips in the water everyone can help.
       Play "I spy with my little eye" by paying attention
       with your five senses. Do you think Zoe, Matilda and
       Daniel are kind friends? Do you think that these are
       '<span class="red">red</span>' or
       '<span class="span green">green</span>' actions?</p>
    </div>
    <audio autoplay ref="audio" src="../../assets/sounds/session1/Water-Stream-Sound-Effect-Amplified.mp3"></audio>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session8Page11',
  mounted() {
    anime({
      targets: '.text-box',
      opacity: 1,
      easing: 'linear',
      duration: 500,
      delay: 500
    })
    this.$refs.audio.volume = 0.6;
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
  background-color: rgba(255,255,255,0.9);
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
}
.green {color: #00CE7C}
.red {color: #ff0000}
</style>