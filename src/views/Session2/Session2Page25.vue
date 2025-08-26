<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session2/background.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session2/background.jpg"
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
        <p><strong>Bright Star Idea</strong></p>
        <p>Draw a great big
          <br>happy flower. Colour in
          <br>each petal with a
          <br>different colour.</p>
      </div>
    </div>
    <drawing-canvas class="canvas" v-on:updateCanvas="updateCanvas" :data="canvasData" :canvasStyle="canvasStyle"/>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Water-Stream-Sound-Effect-Amplified.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session2/Session2_Page84.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";
import anime from "animejs";

export default {
  name: 'Session2Page23',
  components: {DrawingCanvas,ImageComponent},
  data() {
    return {
      canvasStyle: {
        width: 0.55,
        height: 0.7,
        isPicture: false
      },
      canvasData: null,
    }
  },
  props: {
    startPage: Number,
    pageNum: Number,
  },
  methods: {
    setPageNumber() {
      this.page = this.pageNum + this.startPage - 1;
    },
    animateText() {
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
        delay: 1000,
      });
      animation
        .add({targets: '.star-container', opacity: 1})
        .add({targets: ".canvas", opacity: 1})
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 2000)
    },
    init() {
      this.canvasData = this.$store.getters.getPage70Data;
    },
    updateCanvas(canvasData) {
      this.$store.commit('setPage70Data', canvasData);
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  created() {
    this.init();
    this.setPageNumber();
  },
  mounted() {
    this.setAudioVolumeLevel(0.3);
  }
}
</script>

<style scoped>
.canvas {
  position: absolute;
  top: 1vh;
  right: 1%;
  opacity: 0;
  z-index: 100;
}
.star-container {
  position: absolute;
  top: 10vh;
  left: -2%;
  width: 45%;
  height: 57vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}
.star-text {
  position: absolute;
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.star-text p {
  font-size: 3.5vh;
}
.star-text p:first-child {
  margin-top: 10vh;
  margin-bottom: 0;
}
.star {
  position: absolute;
  height: auto;
  width: 100%;
}
.landscape {
  position: absolute;
  height: auto;
  width: 120%;
  left: -12%;
  top: -7vh;
}
.shp0-star { fill: #f3cc30 }
.shp1-star { fill: #f7db5e }
.shp2-star { fill: #edbd31 }
.shp0 { fill: #bfedef }
.shp1 { fill: #def9f9 }
.shp2 { fill: #d3f4f3 }
.shp3 { fill: #94bfbe }
.shp4 { fill: #7db2af }
.shp5 { fill: #9fd3d3 }
.shp6 { fill: #8bc9c7 }
.shp7 { fill: #387b82 }
.shp8 { fill: #296e72 }
.shp9 { fill: #48838c }
.shp10 { fill: #96d2dc }
.shp11 { fill: #76bcc4 }
.shp12 { fill: #7ec144 }
.shp13 { fill: #71b72c }
.shp14 { fill: #6bad15 }
.shp15 { fill: #564e52 }
.shp16 { fill: #4c4448 }
.shp17 { fill: #76b737 }
.shp18 { fill: #99d36c }
.shp19 { fill: #8fce57 }
.shp20 { fill: #a6dde2 }
.shp21 { fill: #bbecef }
.shp22 { fill: #85c64b }
.shp23 { fill: #6aa300 }
.shp24 { fill: #79ad07 }
.shp25 { fill: #94c871 }
.shp26 { fill: #7ca851 }
.shp27 { fill: #749e43 }
.shp28 { fill: #90c165 }
.shp29 { fill: #81b252 }
.shp30 { fill: #8acc52 }
.shp31 { fill: #f4c0ba }
.shp32 { fill: #f4d6d1 }
.shp33 { fill: #51792d }
.shp34 { fill: #eeefe6 }
.shp35 { fill: #f9faf4 }
.shp36 { fill: #f8c362 }
.shp37 { fill: #f4b44d }
.shp38 { fill: #efb1ac }
.shp39 { fill: #e89e34 }
.shp40 { fill: #fffc8f }
.shp41 { fill: #eced10 }
.shp42 { fill: #73a225 }
.shp43 { fill: #598911 }
.shp44 { fill: #86b230 }
</style>