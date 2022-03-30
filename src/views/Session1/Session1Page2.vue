<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/2350-resized.jpg" alt="children">
    <div class="left-bar">
      <p class="text-1"><span id="letter-f">F</span>eelings</p>
      <p class="support-text">(FØLELSER)</p>
      <p class="text-2"><span id="letter-r">R</span>elax</p>
      <p class="support-text">(AFSPÆND & SLAP AF)</p>
      <p class="text-3"><span id="letter-i">I</span> can try</p>
      <p class="support-text">(JEG KAN PRØVE <br>- JEG KAN GIVE DET ET FORSØG!)</p>
      <p class="text-4"><span id="letter-e">E</span>xplore</p>
      <p class="support-text">(VÆR NYSGERRIG & UDFORSK)</p>
      <p class="text-5"><span id="letter-n">N</span>ice work</p>
      <p class="support-text">(GODT ARBEJDET)</p>
      <p class="text-6"><span id="letter-d">D</span>on't forget</p>
      <p class="support-text">(HUSK)</p>
      <p class="text-7"><span id="letter-s">S</span>tay brave</p>
      <p class="support-text">(FORBLIV MODIG)</p>
    </div>
    <audio src="../../assets/sounds/session1/9Animated_Book_Page8.mp3" autoplay></audio>
    <div class="page-number" id="page-dark">8</div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "Session1Page2",
  methods: {
    animateText() {
      let vw = document.querySelector('.interactive-container').clientWidth;
      let supportText = document.querySelectorAll('.support-text');
      let animations = anime.timeline({
        duration: 3000
      });
      animations
        .add({
          targets: ".left-bar",
          translateX: 0.5*vw,
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
          targets: supportText[0],
          color: '#fff',
          webkitTextStroke: '0.1vh black'
        }, 2500)
        .add({
          targets: ".text-2",
          color: '#fff',
          webkitTextStroke: '0.1vw black',
        })
        .add({
          targets: supportText[1],
          color: '#fff',
          webkitTextStroke: '0.1vh black'
        }, 5500)
        .add({
          targets: ".text-3",
          color: '#fff',
          webkitTextStroke: '0.1vw black',
        })
        .add({
          targets: supportText[2],
          color: '#fff',
          webkitTextStroke: '0.1vh black'
        }, 8500)
        .add({
          targets: ".text-4",
          color: '#fff',
          webkitTextStroke: '0.1vw black',
        })
        .add({
          targets: supportText[3],
          color: '#fff',
          webkitTextStroke: '0.1vh black'
        }, 11500)
        .add({
          targets: ".text-5",
          color: '#fff',
          webkitTextStroke: '0.1vw black',
        })
        .add({
          targets: supportText[4],
          color: '#fff',
          webkitTextStroke: '0.1vh black'
        }, 14500)
        .add({
          targets: ".text-6",
          color: '#fff',
          webkitTextStroke: '0.1vw black',
        })
        .add({
          targets: supportText[5],
          color: '#fff',
          webkitTextStroke: '0.1vh black'
        }, 17500)
        .add({
          targets: ".text-7",
          color: '#fff',
          webkitTextStroke: '0.1vw black',
        })
        .add({
          targets: supportText[6],
          color: '#fff',
          webkitTextStroke: '0.1vh black'
        }, 20500)
    }
  },
  mounted() {
    this.animateText();
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');
.left-bar {
  font-family: 'Sigmar One', cursive;
  position: absolute;
  top: 0;
  left: -50%;
  width: 50%;
  height: 100%;
  background-color: rgba(0, 206, 124, 0.95);
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
  font-size: 5vh;
  margin: .1vh .5vh 0;
  line-height: 4.5vh;
}
.support-text {
  font-size: 3vh !important;
  margin: 0 0 2vh 4.5vh!important;
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