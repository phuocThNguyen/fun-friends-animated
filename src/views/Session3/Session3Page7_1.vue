<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/2906714-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/2906714-resized.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Grandpa would like some company</h1>
      <p>How do you think Grandpa is feeling?</p>
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
    <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound" />
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session3/Session3_Page92%2B1.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">95</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session3Page7",
  components: {ImageComponent},
  data() {
    return {
      data: ['Lonely','Sad','Happy','Thankful'],
      answers: [],
    }
  },
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: ".text-box", opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 3700)
        .add({targets: text[2], opacity: 1}, 6900)
        .add({targets: '.question-container', opacity: 1}, 8900)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    init() {
      this.answers = this.$store.getters.getPage93Data;
    },
  },
  created() {this.init();},
  mounted() {},
  watch: {
    answers: function() {
      this.$refs.clickSound.play();
      this.$store.commit('setPage93Data', this.answers)
    }
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 1vh;
  left: 1%;
  width: 43%;
  padding: 1vh;
  background-color: rgba(255,255,255,0.9);
  opacity: 0;
}
.text-box h1 {
  font-size: 3.5vh;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: 1.5vh;
  opacity: 0;
}
.question-container {
  width: 100%;
  padding-left: 2vh;
  margin-top: 0;
  opacity: 0;
}
.checkbox-containers {padding: 0}
#long-checkbox label {width: 100%;}
#short-checkbox label {width: 33%;}
/* The container */
.checkbox-container {
  display: inline-block;
  position: relative;
  padding-left: 6vh;
  margin-bottom: 2vh;
  cursor: pointer;
  font-size: 3vh;
  line-height: 4.5vh;
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