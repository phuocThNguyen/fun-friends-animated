<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session8/33261.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session8/33261.jpg"
      class="session-background"
      id="alt-pos"
    />
    <div class="mask"/>
    <div class="text-box">
      <p style="opacity: 1"><strong>Tom has fallen off his bike</strong></p>
      <p>He has only just learnt to ride without training wheels.</p>
      <p>How do you think he is feeling?</p>
      <p>What can you do to be a kind friend to Tom?</p>
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
    <audio autoplay src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/all/BodyFallOnDirt.mp3" ref="audio"/>
    <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/Session8_Page182.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session8Page3',
  data() {
    return {
      data: ['Helping him get up','Asking if he is ok',
          'Giving him some water',
        'Looking for help','Helping him get home',
        'Asking his family to help'],
      answers: [],
    }
  },
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 3500)
        .add({targets: text[2], opacity: 1}, 7500)
        .add({targets: text[3], opacity: 1}, 10000)
        .add({targets: text[4], opacity: 1}, 13500)
        .add({targets: '.question-container', opacity: 1}, 15700)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    init() {
      this.answers = this.$store.getters.getPage168Data;
    },
  },
  created() {
    this.init();
  },
  mounted() {},
  watch: {
    answers: function() {
      this.$refs.clickSound.play();
      this.$store.commit('setPage168Data', this.answers)
    }
  }
}
</script>

<style scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 61vh;
  background: #fff;
  z-index: 5;
}
.text-box {
  position: absolute;
  top: 0;
  left: 1vh;
  width: 60vh;
  padding: 1vh;
  opacity: 0;
  z-index: 10;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: 1vh;
  opacity: 0;
}
#alt-pos {
  left: 55vh;
  z-index: 1;
}
.question-container {
  width: 100%;
  padding-left: 2vh;
  margin-top: 3vh;
  opacity: 0;
}
#long-checkbox label {width: 100%;}
#short-checkbox label {width: 33%;}
/* The container */
.checkbox-container {
  display: inline-block;
  position: relative;
  padding-left: 5vh;
  margin-bottom: 2vh;
  cursor: pointer;
  font-size: 3vh;
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
  height: 3.5vh;
  width: 3.5vh;
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
  top: 0.4vh;
  width: 1.2vh;
  height: 2.1vh;
  border: solid white;
  border-width: 0 0.5vh 0.5vh 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>