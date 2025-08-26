<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/2749-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/2749-resized.jpg"
      class="session-background"
    />
    <div class="text-box">
      <p class="mb-0">Charlie loves playing on the swing.</p>
      <p class="mb-0">What do you do when you play outside?</p>
    </div>
    <div class="question-text-box">
      <p>Tick your choices:</p>
      <div class="question-container">
        <div class="checkbox-containers" id="long-checkbox">
          <label class="checkbox-container" v-for="(name, index) in data" :key="index">{{name}}
            <input type="checkbox" v-model="answers" :value="name">
            <span class="checkmark"/>
          </label>
        </div>
      </div>
    </div>
    <audio ref="audio" autoplay src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/playground.mp3"/>
    <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/12Animated_Book_Page11.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session1Page5",
  components: {ImageComponent},
  data() {
    return {
      data: ['Play ball with friends','Climb a tree',
        'Play hide and seek','Rope skipping',
        'Go to a playground','Ride a bike'],
      answers: [],
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
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear',})
      animation
        .add({targets: ".text-box", opacity: 1, delay: 500})
        .add({targets: text[0], opacity: 1}, 1048)
        .add({targets: text[1], opacity: 1}, 3543)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1000)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    init() {
      this.answers = this.$store.getters.getPage11Data;
    },
  },
  created() {
    this.init();
    this.setPageNumber()
  },
  mounted() {
    this.setAudioVolumeLevel(0.4);
  },
  watch: {
    answers: function() {
      this.$refs.clickSound.play();
      this.$store.commit('setPage11Data', this.answers)
    }
  }
}
</script>

<style scoped>
.text-box {
  height: auto;
  width: auto;
  background-color: rgba(0, 206, 124, 0.95);
  position: absolute;
  top: 2vh;
  left: 2%;
  opacity: 0;
  padding: 2vh;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  display: flex;
  font-size: 6vh;
  opacity: 0;
}
.question-text-box {
  position: absolute;
  top: 27vh;
  width: 40%;
  left: 2%;
  background-color: rgba(255,255,255,0.9);
  padding: 2vh;
  font-size: 5.5vh;
  visibility: hidden;
}
.question-text-box p {
  margin-bottom: 0;
  font-size: 4vh;
}
.question-container {
  width: 100%;
  padding-left: 2vh;
  margin-top: 1vh;
  opacity: 1;
}
#long-checkbox label {width: 100%;}
#short-checkbox label {width: 33%;}
.checkbox-containers {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
}
/* The container */
.checkbox-container {
  display: inline-block;
  position: relative;
  padding-left: 6vh;
  margin-bottom: 0;
  cursor: pointer;
  font-size: 4vh;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 4.8vh;
  width: 4.8vh;
  border: .2vh solid #000;
  background-color: #eee;
}

/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 1.2vh;
  top: 0.1vh;
  width: 2vh;
  height: 3.5vh;
  border: solid white;
  border-width: 0 0.7vh 0.7vh 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>