<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session11/311.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session11/311.jpg"
      class="session-background" id="alt-pos"
    />
    <div class="text-box">
      <p>Who is in your support team?</p>
      <p>They could be people from:</p>
      <p class="instruction-p">Tick your choices:</p>
      <div class="question-container">
        <div class="checkbox-containers" id="long-checkbox">
          <label class="checkbox-container" v-for="(name, index) in data" :key="index">{{name}}
            <input type="checkbox" v-model="answers" :value="name">
            <span class="checkmark"/>
          </label>
        </div>
      </div>
    </div>
    <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound"/>
    <audio autoplay ref="audio" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/ambient/playground.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session11/Session11_Page237.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session11Page4',
  data() {
    return {
      data: ['School/kindergarten/playgroup','Neighbourhood',
        'Religious/spiritual group','Sporting clubs',
        'Family','Friends'],
      answers: [],
    }
  },
  components: {ImageComponent},
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
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[0], opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 3300)
        .add({targets: text[2], opacity: 1}, 5500)
        .add({targets: '.question-container', opacity: 1}, 7600)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    init() {
      this.answers = this.$store.getters.getPage224Data;
    },
  },
  created() {
    this.init();
    this.setPageNumber();
  },
  mounted() {
    this.$refs.audio.volume = 0.3;
  },
  watch: {
    answers: function() {
      this.$refs.clickSound.play();
      this.$store.commit('setPage224Data', this.answers)
    }
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;
  width: 66.5vh;
  height: 100vh;
  padding: 2vh;
  opacity: 0;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
  opacity: 0;
}
#alt-pos {left: 35vh}
.question-container {
  width: 100%;
  padding-left: 2vh;
  margin-top: 1vh;
  opacity: 0;
}
#long-checkbox label {width: 100%;}
#short-checkbox label {width: 33%;}
/* The container */
.checkbox-container {
  display: inline-block;
  position: relative;
  padding-left: 6vh;
  margin-bottom: 3vh;
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
