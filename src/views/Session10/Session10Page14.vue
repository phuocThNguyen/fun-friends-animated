<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session10/1408.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session10/1408.jpg"
      class="page-image"
    />
    <div class="text-box">Who helps you?</div>
    <div class="text-box-2">
      <p><strong>Tick your choices:</strong></p>
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
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session10/Session10_Page227.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session10Page14',
  data() {
    return {
      data: ['Your mum','Your dad','Your grandma','Your grandpa','Your sister',
        'Your brother','Your animal friend','Your aunt','Your uncle','Your teacher','Your sports coach',
        'Your music teacher'],
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
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: '.text-box',opacity: 1}, 500)
        .add({targets: text[0],color: '#fff'}, 500)
        .add({targets: text[2],color: '#fff'}, 4700)
        .add({targets: '.text-box-2',opacity: 1}, 7500)
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
    this.setPageNumber();
  },
  mounted() {},
  watch: {
    answers: function() {
      this.$refs.clickSound.play();
      this.$store.commit('setPage211Data', this.answers)
    }
  }
}
</script>

<style scoped>
.page-image {
  position: absolute;
  height: 110%;
}
.text-box {
  position: absolute;
  top: 1vh;
  left: 2vh;
  background-color: #000000;
  padding: 1.5vh;
  font-size: 3.5vh;
  color: white;
  font-weight: bold;
  opacity: 0;
}
.text-box-2 {
  position: absolute;
  top: 10vh;
  left: 2vh;
  background-color: rgba(255,255,255,0.9);
  padding: 0 2vh;
  opacity: 1;
  width: 27%;
}
.text-box-2 p {
  margin-bottom: 0;
  opacity: 1;
  font-size: 3.5vh;
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
  padding-left: 5vh;
  margin-bottom: 1vh;
  cursor: pointer;
  font-size: 2.9vh;
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
  left: -1vh;
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