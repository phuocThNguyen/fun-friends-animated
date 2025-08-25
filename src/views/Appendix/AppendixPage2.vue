<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/appendix-bg-page-2.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/appendix/appendix-bg-page-2.jpg"
      class="session-background"
    />
    <div class="title">Someone who is
    brave and kind!</div>
    <div class="text"><strong>Click on each cloud and choose someone who is brave and kind.</strong></div>
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
        <p><strong>I try to be BRAVE <br>and KIND!</strong></p>
      </div>
    </div>
    <div class="cloud-container" id="cloud-1">
      <svg class="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93 62" width="93" height="62">
        <g id="Layer 2">
          <g id="&lt;Group&gt;">
            <path id="&lt;Compound Path&gt;" class="shp0-cloud" d="M92.33 34.73C92.33 29.03 87.75 24.41 82.07 24.33C82.07 24.2 82.09 24.07 82.09 23.94C82.09 18.11 77.36 13.38 71.53 13.38C70.73 13.38 69.95 13.48 69.2 13.65C66.82 6.21 59.85 0.82 51.62 0.82C44.27 0.82 37.92 5.12 34.95 11.34C32.56 9.81 29.72 8.93 26.68 8.93C18.17 8.93 11.28 15.82 11.28 24.33C11.28 25.27 11.37 26.18 11.53 27.08C5.13 28.45 0.33 34.14 0.33 40.94C0.33 48.78 6.68 55.13 14.52 55.13C16.65 55.13 18.67 54.65 20.49 53.81C22.64 58.51 27.39 61.78 32.9 61.78C36.24 61.78 39.31 60.57 41.68 58.57C43.21 60.56 45.61 61.85 48.31 61.85C52.06 61.85 55.23 59.38 56.29 55.98C59.02 58.63 62.74 60.27 66.84 60.27C75.2 60.27 81.98 53.49 81.98 45.13L81.98 45.13C87.7 45.1 92.33 40.46 92.33 34.73Z" />
          </g>
        </g>
      </svg>
      <div class="cloud-text" style="top: 9vh">In my family</div>
      <select v-model="answer1" @click="readText(1)">
        <option v-for="option in options1" v-bind:key="option">{{ option }}</option>
      </select>
    </div>
    <div class="cloud-container" id="cloud-3">
      <svg class="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93 62" width="93" height="62">
        <g id="Layer 2">
          <g id="&lt;Group&gt;">
            <path id="&lt;Compound Path&gt;" class="shp0-cloud" d="M92.33 34.73C92.33 29.03 87.75 24.41 82.07 24.33C82.07 24.2 82.09 24.07 82.09 23.94C82.09 18.11 77.36 13.38 71.53 13.38C70.73 13.38 69.95 13.48 69.2 13.65C66.82 6.21 59.85 0.82 51.62 0.82C44.27 0.82 37.92 5.12 34.95 11.34C32.56 9.81 29.72 8.93 26.68 8.93C18.17 8.93 11.28 15.82 11.28 24.33C11.28 25.27 11.37 26.18 11.53 27.08C5.13 28.45 0.33 34.14 0.33 40.94C0.33 48.78 6.68 55.13 14.52 55.13C16.65 55.13 18.67 54.65 20.49 53.81C22.64 58.51 27.39 61.78 32.9 61.78C36.24 61.78 39.31 60.57 41.68 58.57C43.21 60.56 45.61 61.85 48.31 61.85C52.06 61.85 55.23 59.38 56.29 55.98C59.02 58.63 62.74 60.27 66.84 60.27C75.2 60.27 81.98 53.49 81.98 45.13L81.98 45.13C87.7 45.1 92.33 40.46 92.33 34.73Z" />
          </g>
        </g>
      </svg>
      <div class="cloud-text">Someone who is <br>kind to everyone</div>
      <select v-model="answer3" @click="readText(3)">
        <option v-for="option in options3" v-bind:key="option">{{ option }}</option>
      </select>
    </div>
    <div class="cloud-container" id="cloud-2">
      <svg class="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93 62" width="93" height="62">
        <g id="Layer 2">
          <g id="&lt;Group&gt;">
            <path id="&lt;Compound Path&gt;" class="shp0-cloud" d="M92.33 34.73C92.33 29.03 87.75 24.41 82.07 24.33C82.07 24.2 82.09 24.07 82.09 23.94C82.09 18.11 77.36 13.38 71.53 13.38C70.73 13.38 69.95 13.48 69.2 13.65C66.82 6.21 59.85 0.82 51.62 0.82C44.27 0.82 37.92 5.12 34.95 11.34C32.56 9.81 29.72 8.93 26.68 8.93C18.17 8.93 11.28 15.82 11.28 24.33C11.28 25.27 11.37 26.18 11.53 27.08C5.13 28.45 0.33 34.14 0.33 40.94C0.33 48.78 6.68 55.13 14.52 55.13C16.65 55.13 18.67 54.65 20.49 53.81C22.64 58.51 27.39 61.78 32.9 61.78C36.24 61.78 39.31 60.57 41.68 58.57C43.21 60.56 45.61 61.85 48.31 61.85C52.06 61.85 55.23 59.38 56.29 55.98C59.02 58.63 62.74 60.27 66.84 60.27C75.2 60.27 81.98 53.49 81.98 45.13L81.98 45.13C87.7 45.1 92.33 40.46 92.33 34.73Z" />
          </g>
        </g>
      </svg>
      <div class="cloud-text">At school</div>
      <select v-model="answer2" @click="readText(2)">
        <option v-for="option in options2" v-bind:key="option">{{ option }}</option>
      </select>
    </div>
    <div class="cloud-container" id="cloud-4">
      <svg class="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93 62" width="93" height="62">
        <g id="Layer 2">
          <g id="&lt;Group&gt;">
            <path id="&lt;Compound Path&gt;" class="shp0-cloud" d="M92.33 34.73C92.33 29.03 87.75 24.41 82.07 24.33C82.07 24.2 82.09 24.07 82.09 23.94C82.09 18.11 77.36 13.38 71.53 13.38C70.73 13.38 69.95 13.48 69.2 13.65C66.82 6.21 59.85 0.82 51.62 0.82C44.27 0.82 37.92 5.12 34.95 11.34C32.56 9.81 29.72 8.93 26.68 8.93C18.17 8.93 11.28 15.82 11.28 24.33C11.28 25.27 11.37 26.18 11.53 27.08C5.13 28.45 0.33 34.14 0.33 40.94C0.33 48.78 6.68 55.13 14.52 55.13C16.65 55.13 18.67 54.65 20.49 53.81C22.64 58.51 27.39 61.78 32.9 61.78C36.24 61.78 39.31 60.57 41.68 58.57C43.21 60.56 45.61 61.85 48.31 61.85C52.06 61.85 55.23 59.38 56.29 55.98C59.02 58.63 62.74 60.27 66.84 60.27C75.2 60.27 81.98 53.49 81.98 45.13L81.98 45.13C87.7 45.1 92.33 40.46 92.33 34.73Z" />
          </g>
        </g>
      </svg>
      <div class="cloud-text">Someone I <br>look up to</div>
      <select v-model="answer4" @click="readText(4)">
        <option v-for="option in options4" v-bind:key="option">{{ option }}</option>
      </select>
    </div>
    <div id="mask"/>
    <div class="audios">
      <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/twinkle-twinkle-little-star.mp3"/>
      <audio @loadeddata="playVoiceOver" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/Session12_Page256.mp3" ref="voice"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/cloud-1.mp3" id="voice-1"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/cloud-2.mp3" id="voice-3"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/cloud-3.mp3" id="voice-2"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/cloud-4.mp3" id="voice-4"/>
      <audio src="../../assets/sounds/all/kids-cheering.mp3" ref="celebrate"/>
    </div>
    <div class="page-number" id="page-dark">277</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";
export default {
  name: "AppendixPage2",
  components: {ImageComponent},
  data() {
    return {
      options1: ['My mum','My dad','My aunt','My uncle','My sibling'],
      options2: ['My teacher','My principal','My classmate','My sports coach'],
      options3: ['A family member','A teacher','A friend','A neighbour'],
      options4: ['A musician','A singer','A writer','An artist'],
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      playing: null,
      ids: [1,2,3,4],
    }
  },
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500);
      this.animateText();
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    animateText() {
      let animation = anime.timeline({easing: 'linear', duration: 500});
      animation
        .add({targets: '#cloud-1', opacity: 1}, 12600)
        .add({targets: '#cloud-2', opacity: 1}, 15500)
        .add({targets: '#cloud-3', opacity: 1}, 19000)
        .add({targets: '#cloud-4', opacity: 1}, 22300)
        .add({targets: '.star-container', opacity: 1}, 24600)
      setTimeout(()=>document.querySelector("#mask").style.visibility = 'hidden',24600)
    },
    readText(id) {
      if (this.ids.includes(id)) {
        this.playVoice(id);
        this.ids = this.ids.filter(x => x !== id);
      }
    },
    playVoice(id) {
      if (this.playing !== null) this.playing.pause();
      this.playing = document.querySelector('#voice-'+id);
      this.playing.play();
    },
    playCelebrate() {
      this.$refs.celebrate.pause();
      this.$refs.celebrate.currentTime = 0;
      this.$refs.celebrate.play();
    }
  },
  mounted() {
    this.setAudioVolumeLevel(.3);
  },
  watch: {
    answer1: function() {this.playCelebrate();},
    answer2: function() {this.playCelebrate();},
    answer3: function() {this.playCelebrate();},
    answer4: function() {this.playCelebrate();},
  }
}
</script>

<style scoped>
#mask {
  position: absolute;
  top: 14vh;
  width: 100%;
  height: 80vh;
  z-index: 100;
}
.text {
  position: absolute;
  width: 100%;
  top: 6vh;
  font-size: 4vh;
  text-align: center;
  color: #fff;
}
.title {
  position: absolute;
  font-size: 4.7vh;
  line-height: 5vh;
  font-weight: bold;
  width: 100%;
  text-align: center;
  top: 0;
  color: #ffffff;
  opacity: 1;
}
.cloud-container {
  position: absolute;
  width: 34%;
  height: 30vh;
  opacity: 0;
}
.cloud {
  position: absolute;
  width: 100%;
  height: 100%;
}
.cloud-text {
  position: absolute;
  text-align: center;
  font-size: 4vh;
  line-height: 5vh;
  width: 100%;
  z-index: 10;
  top: 6vh;
}
.cloud-container select {
  position: absolute;
  width: 70%;
  font-size: 3.5vh !important;
  line-height: 4vh !important;
  padding: .5vh;
  outline: none;
  margin-right: 18vh;
  text-align: center;
  top: 17vh;
  left: 15%;
}
select option {
  font-size: 3vh !important;
}
#cloud-1 {
  top: 16%;
  left: 4%;
}
#cloud-2 {
  bottom: 8%;
  left: 4%;
}
#cloud-3 {
  top: 16%;
  right: 4%
}
#cloud-4 {
  bottom: 8%;
  right: 4%;
}
.star-container {
  position: absolute;
  top: 17vh;
  left: 25%;
  width: 50%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  opacity: 0;
}
.star {
  position: absolute;
  width: auto;
  height: 100%;
}
.star-text {
  position: absolute;
  margin-top: 0;
  font-size: 5.5vh;
  width: 100%;
  text-align: center;
}
.star-text p {
  margin-bottom: 0;
}
tspan { white-space:pre }
.shp0-cloud { fill: #ffffff }
.shp0-star { fill: #f3cc30 }
.shp1-star { fill: #f7db5e }
.shp2-star { fill: #edbd31 }
</style>