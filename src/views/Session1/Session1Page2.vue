<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/2350-resized.jpg" alt="children">
    <div class="left-bar">
      <p class="text-1"><span id="letter-f">F</span>eelings</p>
      <p class="text-2"><span id="letter-r">R</span>elax</p>
      <p class="text-3"><span id="letter-i">I</span> can try</p>
      <p class="text-4"><span id="letter-e">E</span>xplore</p>
      <p class="text-5"><span id="letter-n">N</span>ice work</p>
      <p class="text-6"><span id="letter-d">D</span>on't forget</p>
      <p class="text-7"><span id="letter-s">S</span>tay brave</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "Session1Page2",
  mounted() {
    let vw = document.querySelector('.interactive-container').clientWidth;
    let animations = anime.timeline({
      duration: 1000
    });
    animations
      .add({
        targets: ".left-bar",
        translateX: 0.32*vw,
        duration: 500,
        delay: 1000,
      })
      .add({
        targets: ".text-1",
        color: '#fff',
        webkitTextStroke: '0.1vw black',
        delay: 1000
      })
      .add({
        targets: ".text-2",
        color: '#fff',
        webkitTextStroke: '0.1vw black',
      })
      .add({
        targets: ".text-3",
        color: '#fff',
        webkitTextStroke: '0.1vw black',
      })
      .add({
        targets: ".text-4",
        color: '#fff',
        webkitTextStroke: '0.1vw black',
      })
      .add({
        targets: ".text-5",
        color: '#fff',
        webkitTextStroke: '0.1vw black',
      })
      .add({
        targets: ".text-6",
        color: '#fff',
        webkitTextStroke: '0.1vw black',
      })
      .add({
        targets: ".text-7",
        color: '#fff',
        webkitTextStroke: '0.1vw black',
      });
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');
.left-bar {
  font-family: 'Sigmar One', cursive;
  position: absolute;
  top: 0;
  left: -32%;
  width: 32%;
  height: 100%;
  background-color: #00ce7c;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  padding-bottom: 7vh;
}
.left-bar p {
  text-transform: uppercase;
  color: #00ce7c;
  font-size: 4.4vh;
  margin: 1.5vh 1vw;
}
#letter-f {
  color: #A3C042;
  -webkit-text-stroke: 0.1vw black;
}
#letter-r {
  color: #C95288;
  -webkit-text-stroke: 0.1vw black;
}
#letter-i {
  color: #D89022;
  -webkit-text-stroke: 0.1vw black;
}
#letter-e {
  color: #F9E836;
  -webkit-text-stroke: 0.1vw black;
}
#letter-n {
  color: #A9D3EB;
  -webkit-text-stroke: 0.1vw black;
}
#letter-d {
  color: #A3C042;
  -webkit-text-stroke: 0.1vw black;
}
#letter-s {
  color: #C95288;
  -webkit-text-stroke: 0.1vw black;
}
</style>