<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/126256-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/126256-resized.jpg"
      class="session-background"
      style="left: 10vh"
    />
    <div class="text-box">
      <h1>Butterflies in the tummy</h1>
      <p>What happens to you when you feel nervous?</p>
      <p class="mb-3">Tick your choices:</p>
      <div class="question-container">
        <div class="checkbox-containers" id="long-checkbox">
          <label class="checkbox-container" v-for="(name, index) in data" :key="index">{{name}}
            <input type="checkbox" v-model="answers" :value="name">
            <span class="checkmark"/>
          </label>
        </div>
      </div>
      <p>Ask your friends what helps them to calm down.</p>
      <p>Remember – It is normal to be worried, but you
        can choose thumbs down or thumbs up actions.</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page107.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session4Page3",
  components: {ImageComponent},
  data() {
    return {
      data: ['Sweat','Butterflies in the tummy',
        'Need to go to toilet','Shaky knees'],
      answers: [],
    }
  },
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({easing: 'linear', duration: 500});
      animation
        .add({targets: text[1], opacity: 1}, 3200)
        .add({targets: text[2], opacity: 1}, 6700)
        .add({targets: '.question-container', opacity: 1}, 9000)
        .add({targets: text[4], opacity: 1}, 17000)
        .add({targets: text[5], opacity: 1}, 20500)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 0)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    init() {
      this.answers = this.$store.getters.getPage107Data;
    },
  },
  created() {this.init();},
  mounted() {},
  watch: {
    answers: function() {
      this.$store.commit('setPage107Data', this.answers)
    }
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #ffffff;
  width: 65vh;
  height: 100%;
  padding: 1.5vh;
}
.text-box h1 {
  font-size: 4vh;
  font-weight: bold;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: 0;
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