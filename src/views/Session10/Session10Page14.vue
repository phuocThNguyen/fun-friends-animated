<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session10/1408.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session10/1408.jpg"
      class="session-background"
    />
    <div class="text-box">
      <span>Who showed you how to do something before?</span>
      <span> Who has helped you feel happy?</span>
      <span> Give them a big thank you by clicking on the button below.</span>
    </div>
    <div class="text-box-2">
      <p class="instruction-p">Instructions: Choose from the options below:</p>
      <div class="question-container">
        <div class="checkbox-containers" id="long-checkbox">
          <label class="checkbox-container" v-for="(name, index) in data" :key="index">{{name}}
            <input type="checkbox" v-model="answers" :value="name">
            <span class="checkmark"/>
          </label>
        </div>
      </div>
    </div>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session10/Session10_Page14.mp3" ref="voice"/>
    <div class="page-number" id="page-light">227</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session10Page14',
  data() {
    return {
      data: ['Your mum/dad','Your grandma/grandpa','Your sister/brother',
      'Your aunt/uncle','Your teacher','Your sports coach/music teacher'],
      answers: [],
    }
  },
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: '.text-box',opacity: 1}, 200)
        .add({targets: text[0],color: '#fff'}, 600)
        .add({targets: text[1],color: '#fff'}, 4400)
        .add({targets: text[2],color: '#fff'}, 7300)
        .add({targets: '.text-box-2',opacity: 1}, 10000)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    init() {
      this.answers = this.$store.getters.getPage211Data;
    },
  },
  created() {
    this.init();
  },
  mounted() {},
  watch: {
    answers: function() {
      this.$store.commit('setPage211Data', this.answers)
    }
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 1vh;
  left: 2vh;
  width: 129vh;
  background-color: #000000;
  padding: 1vh;
  font-size: 3.9vh;
  color: #000000;
  font-weight: bold;
  opacity: 0;
}
.text-box-2 {
  position: absolute;
  top: 22vh;
  width: 68vh;
  left: 2vh;
  background-color: rgba(255,255,255,0.9);
  padding: 2vh;
  font-size: 5.5vh;
  opacity: 0;
}
.text-box-2 p {
  margin-bottom: 0;
  opacity: 1;
  font-size: 3vh;
}
.question-container {
  width: 100%;
  padding-left: 2vh;
  margin-top: 0;
}
.checkbox-containers {padding: 0}
#long-checkbox label {width: 100%;}
#short-checkbox label {width: 33%;}
/* The container */
.checkbox-container {
  display: inline-block;
  position: relative;
  padding-left: 6vh;
  margin-bottom: 1vh;
  cursor: pointer;
  font-size: 4vh;
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
