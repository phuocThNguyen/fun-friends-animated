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
       'red' or 'green' actions?</p>
    </div>
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
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  width: 60vw;
  left: 20vw;
  top: 20vh;
  text-align: center;
  padding: 4vh 3vw;
  background-color: rgba(255,255,255,0.9);
  opacity: 0;
}
.text-box h1 {
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 3vh;
}
.text-box p {
  font-size: 2vw;
  margin-bottom: 0;
}
.landscape {
  position: absolute;
  height: auto;
  width: 113vw;
  left: -2vw;
}
</style>