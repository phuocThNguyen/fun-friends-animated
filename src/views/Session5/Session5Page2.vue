<template>
  <div class="interactive-container">
    <img src="../../assets/images/session5/traffic-light-poster.png" alt="traffic-light" class="session-background">
    <div class="text-box">
      <p>We can <strong>choose</strong> our thoughts.</p>
      <p>Red, unhelpful thoughts makes us feel sad and scared.</p>
      <p>Green helpful thoughts makes us feel brave and calm.</p>
    </div>
    <div class="light-box" id="red">Red thought</div>
    <div class="light-box" id="green">Green thought</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session5Page2',
  mounted() {
    let text = document.getElementsByClassName('text-box')[0].children;
    let animation = anime.timeline({
      easing: 'linear',
      delay: 1000,
      duration: 700
    })
    animation
      .add({
        targets: '.text-box',
        opacity: 1,
        delay: 700,
        duration: 700
      })
      .add({
        targets: text[1],
        opacity: 1
      })
      .add({
        targets: '#red',
        opacity: 1
      }, 1400)
      .add({
        targets: text[2],
        opacity: 1
      })
      .add({
        targets: '#green',
        opacity: 1
      }, 3100)
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  width: 23vw;
  left: 3vw;
  top: 30vh;
  padding: 1.5vh 1vw;
  background-color: #ffffff;
  font-size: 2vw;
  opacity: 0;
}
.text-box p:nth-child(2),
.text-box p:last-child {
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
.light-box {
  position: absolute;
  right: 6vw;
  width: 20vw;
  font-size: 2.5vw;
  font-weight: bold;
  color: #ffffff;
  padding: 2.5vh 1.5vw;
  opacity: 0;
}
#red {
  background-color: #ff0000;
  top: 27vh;
}
#green {
  background-color: #00ce7c;
  bottom: 7vh;
}
</style>