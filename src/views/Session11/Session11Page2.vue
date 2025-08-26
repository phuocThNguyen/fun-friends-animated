<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session11/46140.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session11/46140.jpg"
      class="session-background"
      style="left:33vh"
    />
    <div class="text-box">
      <p>These children are helping each other to be strong.</p>
      <p>Look around or think about your family.</p>
      <p>What do you do to help your family?</p>
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
    <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session11/Session11_Page233.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session11Page2',
  data() {
    return {
      data: ['Washing the dishes','Buying groceries',
        'Helping in the garden','Cleaning up your room',
        'Taking out rubbish'],
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
        .add({targets: text[0],opacity: 1}, 500)
        .add({targets: text[1],opacity: 1}, 4900)
        .add({targets: text[2],opacity: 1}, 8500)
        .add({targets: text[3],opacity: 1}, 11500)
        .add({targets: '.question-container',opacity: 1}, 14200)
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
  watch: {
    answers: function() {
      this.$refs.clickSound.play();
      this.$store.commit('setPage211Data', this.answers)
    }
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  width: 66.5vh;
  padding: 1.5vh 2vh;
  font-size: 4vh;
  height: 100%;
  background: #fff;
}
.text-box p {margin-bottom: .5vh;opacity: 0;}
.text-box p:last-child {margin-bottom: 0;}
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
  margin-bottom: 1.5vh;
  cursor: pointer;
  font-size: 4vh;
  line-height: 5.5vh;
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
