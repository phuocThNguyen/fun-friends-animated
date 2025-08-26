<template>
  <div class="interactive-container">
    <div class="images-container">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/1605-resized.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/1605-resized.jpg"
        class="page-image" id="image-step-1"
      />
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/ImageStep2BubbleBlowing.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/ImageStep2BubbleBlowing.jpg"
        class="page-image" id="image-step-2"
      />
      <div class="mask"/>
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/ImageStep3BubbleBlowing.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/ImageStep3BubbleBlowing.jpg"
        class="page-image" id="image-step-3"
      />
    </div>
    <div class="text-box">
      <h1 id="title"><strong>2. Bubble blowing</strong></h1>
      <p class="mb-2" id="step-1"><strong>Step 1:</strong> Breathe in calm,
        happy feelings and blow away your angry, sad, and worried feelings.</p>
      <p class="mb-2" id="step-2"><strong>Step 2:</strong> Notice how the
        bubbles float away and fade, the same with our feelings.</p>
      <p class="mb-2" id="step-3"><strong>Step 3:</strong> Feelings don’t
        stay forever, feelings change. Using a Magic Bubble Wand to calm
        down is a ‘thumbs up’ choice.</p>
    </div>
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
        <p>Say what
          <br>feeling you are
          <br>blowing away.
        </p>
      </div>
    </div>
    <button class="btn-style" @click="displayStep">Click here for the next step</button>
    <div class="audios">
      <audio ref="click" src="../../assets/sounds/session7/click-sound.mp3"/>
      <audio @loadeddata="playSoundText"
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session3/Session3_Page104.mp3" ref="voice"/>
      <audio id="audio-step-1" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session3/104-step-1.mp3"></audio>
      <audio id="audio-step-2" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session3/104-step-2.mp3"></audio>
      <audio id="audio-step-3" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session3/104-step-3.mp3"></audio>
    </div>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session3Page12",
  components: {ImageComponent},
  data() {
    return {
      currentStep: 0,
      currentAudio: null,
      video: null
    }
  },
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
      this.currentAudio = this.$refs.voice;
    },
    playSoundText() {
      this.playVoiceOver();
    },
    displayStep() {
      this.$refs.click.play();
      if (this.currentStep < 3) {
        this.currentAudio.pause();
        this.currentStep++;
        if (this.currentStep === 2) {anime({targets: '.mask', opacity: 1, duration: 500, easing: 'linear'})}
        let animation = anime.timeline({duration: 500, easing: 'linear'});
        animation
          .add({targets: "#step-"+this.currentStep, opacity: 1}, 0)
          .add({targets: "#image-step-"+this.currentStep, opacity: 1}, 0);
        this.currentAudio = document.querySelector('#audio-step-'+this.currentStep);
        this.currentAudio.play();
      }
    },
  },
  mounted() {}
}
</script>

<style scoped>
.page-image {position: absolute;height: 100%;opacity: 0}
.mask {position: absolute;height: 100%; background: #fff; width: 50vh;right: 60.5vh;opacity: 0;}
#image-step-1 {left: 28vh}
#image-step-2 {right: 0}
#image-step-3 {left: 25vh}
.btn-style {
  position: absolute;
  bottom: 3.5vh;
  left: 14vh;
  background-color: #00ce7c;
  border: none;
  width: 41vh;
  text-align: center;
  height: 6vh;
  border-radius: 5px;
  color: #ffffff;
  font-size: 2.5vh;
  font-weight: bold;
  box-shadow: 0 9px #999;
}
.btn-style:focus,
.btn-style:active {
  outline: 0 !important;
}
.btn-style:active {
  background-color: #009c5d;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.star-container {
  position: absolute;
  width: 40%;
  height: 17vh;
  right: 1vh;
  top: 18vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  z-index: 10;
  background-color: rgba(0,0,0,0);
}
.star {
  position: absolute;
  width: 100%;
  z-index: 50;
}
.star-text {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 0;
  z-index: 55;
}
.star-text p {
  font-size: 4vh;
  margin-bottom: 0;
}
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 59vh;
  height: 100%;
  background-color: #fff;
  padding: 1vh;
  opacity: 1;
}
.text-box h1 {
  font-size: 4vh;
  margin-bottom: 1vh;
  opacity: 1;
}
.text-box p {
  font-size: 3.3vh;
  margin-bottom: 0;
  opacity: 0;
}
.shp0-star { fill: #f3cc30 }
.shp1-star { fill: #f7db5e }
.shp2-star { fill: #edbd31 }
</style>