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
    let animations = anime.timeline();
    animations
      .add({
        targets: ".left-bar",
        translateX: 300,
        duration: 500,
        delay: 1000,
      })
      .add({
        targets: ".text-1",
        duration: 1000,
        color: '#fff',
        webkitTextStroke: '1px black',
        delay: 1000
      })
      .add({
        targets: ".text-2",
        duration: 1000,
        color: '#fff',
        webkitTextStroke: '1px black',
      })
      .add({
        targets: ".text-3",
        duration: 1000,
        color: '#fff',
        webkitTextStroke: '1px black',
      })
      .add({
        targets: ".text-4",
        duration: 1000,
        color: '#fff',
        webkitTextStroke: '1px black',
      })
      .add({
        targets: ".text-5",
        duration: 1000,
        color: '#fff',
        webkitTextStroke: '1px black',
      })
      .add({
        targets: ".text-6",
        duration: 1000,
        color: '#fff',
        webkitTextStroke: '1px black',
      })
      .add({
        targets: ".text-7",
        duration: 1000,
        color: '#fff',
        webkitTextStroke: '1px black',
      });
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');
.left-bar {
  font-family: 'Sigmar One', cursive;
  position: absolute;
  left: -300px;
  width: 300px;
  height: 100%;
  background-color: #74CC80;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: baseline;
}
.left-bar p {
  margin-left: 5px;
  text-transform: uppercase;
  color: #74CC80;
  font-size: 34px;
}
#letter-f {
  color: #A3C042;
  -webkit-text-stroke: 1px black;
}
#letter-r {
  color: #C95288;
  -webkit-text-stroke: 1px black;
}
#letter-i {
  color: #D89022;
  -webkit-text-stroke: 1px black;
}
#letter-e {
  color: #F9E836;
  -webkit-text-stroke: 1px black;
}
#letter-n {
  color: #A9D3EB;
  -webkit-text-stroke: 1px black;
}
#letter-d {
  color: #A3C042;
  -webkit-text-stroke: 1px black;
}
#letter-s {
  color: #C95288;
  -webkit-text-stroke: 1px black;
}
</style>