<template>
  <div class="interactive-container">
    <img src="../../assets/images/session1/grass-background.jpg" alt="background" class="session-background">
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
        <p>Share a kind
          <br>thumbs up
          <br>choice.</p>
      </div>
    </div>
    <audio src="../../assets/sounds/session1/46Animated_Book_Page45.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">45</div>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: "Session1Page39",
  methods: {
    animateText() {
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
        delay: 500,
      });
      animation
        .add({
          targets: '.star-container',
          opacity: 1
        })
        .add({
          targets: ".star",
          keyframes: [
            {rotate: '-20deg'},
            {rotate: '20deg'},
            {rotate: '-20deg'},
            {rotate: '0deg'},
          ],
          delay: 0,
        })
        .add({
          targets: ".star-text",
          keyframes: [
            {rotate: '-20deg'},
            {rotate: '20deg'},
            {rotate: '-20deg'},
            {rotate: '0deg'},
          ],
          delay: 0,
        }, 1000)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1500)
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.star-container {
  position: absolute;
  bottom: 10vh;
  right: 22%;
  width: 56%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: 10;
}
.star {
  position: absolute;
  width: auto;
  height: 100%;
}
.star-text {
  position: absolute;
  margin-top: 6%;
  width: 100%;
  text-align: center;
}
.star-text p {
  margin-bottom: 0;
  font-size: 5vh;
}
.star-text p:first-child {
  font-size: 5.5vh;
}
tspan { white-space:pre }
.shp0-star { fill: #f3cc30 }
.shp1-star { fill: #f7db5e }
.shp2-star { fill: #edbd31 }
</style>