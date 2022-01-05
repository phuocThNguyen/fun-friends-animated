<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/1605-resized.jpg" alt="boy-with-bubbles" class="session-background">
    <div class="text-box">
      <h1><strong>2. Bubble blowing</strong></h1>
      <p>Another fun game to blow our worries away
      is getting a Magic Bubble Wand. Breathe in calm, happy feelings
      and blow away your angry, sad and worried feelings.</p>
      <br>
      <p>Notice how the bubbles float away and fade,
      the same with our feelings. Feelings don't stay
      forever, feelings change. Using a Magic Bubble Wand
      to calm down is a 'thumbs up' choice.</p>
    </div>
    <div class="bubble" id="bubble-1"></div>
    <div class="bubble" id="bubble-2"></div>
    <div class="bubble" id="bubble-3"></div>
    <div class="bubble" id="bubble-4"></div>
    <div class="bubble" id="bubble-5"></div>
    <div class="bubble" id="bubble-6"></div>
    <div class="bubble" id="bubble-7"></div>
    <div class="bubble" id="bubble-8"></div>
    <div class="bubble" id="bubble-9"></div>
    <div class="bubble" id="bubble-10"></div>
    <div class="star-container">
      <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1320 1258" width="1320" height="1258">
        <title>Star</title>
        <g id="Object">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-star" d="M678.99 12.07L866.54 392.07C869.62 398.32 875.59 402.66 882.48 403.66L1301.84 464.6C1319.21 467.12 1326.15 488.47 1313.58 500.73L1010.13 796.52C1005.14 801.38 1002.86 808.39 1004.04 815.26L1075.67 1232.93C1078.64 1250.23 1060.48 1263.42 1044.94 1255.26L669.86 1058.06C663.69 1054.82 656.31 1054.82 650.14 1058.06L275.06 1255.26C259.52 1263.42 241.36 1250.23 244.33 1232.93L315.96 815.26C317.14 808.39 314.86 801.38 309.87 796.52L6.42 500.73C-6.15 488.47 0.79 467.12 18.16 464.6L437.51 403.66C444.41 402.66 450.38 398.32 453.46 392.07L641.01 12.07C648.77 -3.67 671.22 -3.67 678.99 12.07Z" />
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp1-star" d="M660 99.85L492.87 423.56C484.11 440.54 467.28 451.87 448.25 453.61L85.38 486.73L468.76 504.66C493.11 505.8 515.39 491.04 523.85 468.17L660 99.85Z" />
            </g>
            <path id="&lt;Path&gt;" class="shp2-star" d="M252.57 1184.87L244.33 1232.93C241.36 1250.23 259.52 1263.43 275.06 1255.25L650.14 1058.06C656.31 1054.82 663.69 1054.82 669.86 1058.06L1044.94 1255.25C1060.48 1263.43 1078.64 1250.23 1075.67 1232.93L1004.04 815.26C1002.86 808.39 1005.14 801.38 1010.13 796.51L1313.58 500.73C1326.15 488.47 1319.21 467.12 1301.84 464.6L1161.38 444.19C934.2 851.89 586.33 1066.55 252.57 1184.87Z" />
          </g>
        </g>
      </svg>
      <div class="star-text">
        <p><strong>Bright Star Idea</strong></p>
        <p>Say what you
          <br>are blowing away
          <br>as your
          <br>bubbles pop.
        </p>
      </div>
    </div>
    <audio ref="audio" autoplay src="../../assets/sounds/session3/bubbles.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
    <div class="page-number" id="page-dark">82</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session3Page12",
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({
        delay: 500,
        duration: 500,

      });
      animation
        .add({
          targets: '.text-box',
          opacity: 1,
          easing: 'linear'
        })
        .add({
          targets: text[0],
          opacity: 1,
          easing: 'linear'
        })
        .add({
          targets: text[1],
          opacity: 1,
          easing: 'linear'
        })
        .add({
          targets: text[3],
          opacity: 1,
          delay: 3000,
          easing: 'linear'
        })
        .add({
          targets: '.star-container',
          opacity: 1,
          easing: 'linear'
        }, 7000)
        .add({
          targets: '.star-container',
          scale: 14,
          delay: 0,
          duration: 1000,
        })
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    }
  },
  mounted() {
    this.animateText();
    this.setAudioVolumeLevel(0.4)
  }
}
</script>

<style scoped>
.star-container {
  position: absolute;
  height: 4vh;
  width: 4%;
  right: 20%;
  top: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  z-index: 10;
  background-color: rgba(0,0,0,0);
}
.star {
  position: absolute;
  width: auto;
  height: 100%;
  z-index: 50;
}
.star-text {
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 10%;
  z-index: 55;
}
.star-text p {
  font-size: .25vh;
  margin-bottom: 0;
}
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 35%;
  height: 100%;
  background-color: rgba(255,255,255, 0.7);
  padding: 1vh;
  opacity: 0;
}
.text-box h1 {
  font-size: 4vh;
  margin-bottom: 1vh;
  opacity: 0;
}
.text-box p {
  font-size: 3.3vh;
  margin-bottom: 0;
  opacity: 0;
}
.bubble {
  height: 1px;
  width: 1px;
  position: absolute;

  border-radius: 50%;
  transform: translateX(-50%);
}
.bubble:after {
  content: "";
  position: absolute;
  height: 85%;
  width: 85%;
  border-top: 1px solid rgba(255,255,255,0.63);
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0) rotateZ(-45deg);
}
#bubble-1 {
  background-color: rgba(255, 89, 94,0.9);
  bottom: -11vh;
  left: 57%;
  animation: bubble-movement 8s infinite ease-in -0.76s;
  -webkit-animation: bubble-movement 8s infinite ease-in -0.76s;
}
#bubble-2 {
  background-color: rgba(25, 130, 196,0.9);
  bottom: -10vh;
  left: 37%;
  animation: bubble-movement 9s infinite ease-in -0.96s;
  -webkit-animation: bubble-movement 9s infinite ease-in -0.96s;
}
#bubble-3 {
  background-color: rgba(255, 202, 58,0.9);
  bottom: -12vh;
  left: 77%;
  animation: bubble-movement 12s infinite ease-in -1.76s;
  -webkit-animation: bubble-movement 12s infinite ease-in -1.76s;
}
#bubble-4 {
  background-color: rgba(255, 89, 94,0.9);
  bottom: -13vh;
  left: 67%;
  animation: bubble-movement 6s infinite ease-in -3.76s;
  -webkit-animation: bubble-movement 6s infinite ease-in -3.76s;
}
#bubble-5 {
  background-color: rgba(138, 201, 38,0.9);
  bottom: -12vh;
  left: 97%;
  animation: bubble-movement 7s infinite ease-in -5.5s;
  -webkit-animation: bubble-movement 7s infinite ease-in -5.5s;
}
#bubble-6 {
  background-color: rgba(255, 89, 94,0.9);
  bottom: -11vh;
  left: 43%;
  animation: bubble-movement 7.5s infinite ease-in -6s;
  -webkit-animation: bubble-movement 7.5s infinite ease-in -6s;
}
#bubble-7 {
  background-color: rgba(25, 130, 196,0.9);
  bottom: -14vh;
  left: 50%;
  animation: bubble-movement 8.5s infinite ease-in -3.3s;
  -webkit-animation: bubble-movement 8.5s infinite ease-in -3.3s;
}
#bubble-8 {
  background-color: rgba(255, 202, 58,0.9);
  bottom: -10vh;
  left: 88%;
  animation: bubble-movement 5s infinite ease-in -14.2s;
  -webkit-animation: bubble-movement 5s infinite ease-in -14.2s;
}
#bubble-9 {
  background-color: rgba(138, 201, 38,0.9);
  bottom: -18vh;
  left: 75%;
  animation: bubble-movement 10s infinite ease-in -6s;
  -webkit-animation: bubble-movement 10s infinite ease-in -6s;
}
#bubble-10 {
  background-color: rgba(255, 202, 58,0.9);
  bottom: -16vh;
  left: 47%;
  animation: bubble-movement 5.5s infinite ease-in -17.76s;
  -webkit-animation: bubble-movement 5.5s infinite ease-in -17.76s;
}
@keyframes bubble-movement {
  0% {
    transform: translate3d(-50%, 0, 0);
    height: 1px;
    width: 1px;
  }
  100% {
    transform: translate3d(-50%, -110vh, 0);
    height: 10vh;
    width: 10vh;
  }
}
@-webkit-keyframes bubble-movement {
  0% {
    transform: translate3d(-50%, 0, 0);
    height: 1px;
    width: 1px;
  }
  100% {
    transform: translate3d(-50%, -110vh, 0);
    height: 10vh;
    width: 10vh;
  }
}
.shp0-star { fill: #f3cc30 }
.shp1-star { fill: #f7db5e }
.shp2-star { fill: #edbd31 }
</style>