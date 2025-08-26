<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session8/2612199.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session8/2612199.jpg"
      class="session-background"
    />
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
        <p>Tom is playing with
          <br>his friend at
          <br>the beach.</p>
      </div>
    </div>
    <audio autoplay src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/ambient/ocean.mp3" ref=""/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/Session8_Page8.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session8Page8',
  components: {ImageComponent},
  methods: {
    animateText() {
      anime({
        targets: '.star-container',
        opacity: 1,
        easing: 'linear',
        duration: 500,
        delay: 500
      })
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {}
}
</script>

<style scoped>
.star-container {
  position: absolute;
  right: 0;
  top: 1vh;
  width: 40%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}
.star {
  position: absolute;
  height: 100%;
  width: auto;
}
.star-text {
  position: absolute;
  text-align: center;
}
.star-text p {
  font-size: 4vh;
  margin-top: 5.5vh;
  margin-bottom: 0;
}
tspan { white-space:pre }
.shp0-star { fill: #f3cc30 }
.shp1-star { fill: #f7db5e }
.shp2-star { fill: #edbd31 }
</style>