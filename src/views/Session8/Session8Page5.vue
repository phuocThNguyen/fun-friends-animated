<template>
  <div class="interactive-container">
    <div class="text-box">
      Share ideas for fun games you can play at the beach.
    </div>
    <!--  Delete the right image, left image go to the right, content from previous page go to the left  -->
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session8/135443-OSAV8P-846.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session8/135443-OSAV8P-846.jpg"
      class="images"
    />
    <div class="white-text-box">
      <p><strong>How can you be kind to Shaunti?</strong></p>
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
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/beach-sound.mp3" ref="audio" autoplay loop/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/Session8_Page5.mp3" ref="voice"/>
    <div class="page-number" id="page-light">199</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session8Page5',
  components: {ImageComponent},
  data() {
    return {
      data: ['Jump the waves with Shaunti',
        'Spend time with Shaunti',
        'Make a drawing for Shaunti',
        'Play ball with Shaunti',
        'Build sand castles with Shaunti',
        'Swim with Shaunti',
        'Surf with Shaunti',
      ],
      answers: [],
    }
  } ,
  methods: {
    animateText() {
      anime({
        targets: '.text-box',
        opacity: 1,
        easing: 'linear',
        duration: 500,
        delay: 500
      })
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    init() {
      this.answers = this.$store.getters.getPage169Data;
    },
  },
  created() {
    this.init();
  },
  mounted() {}
}
</script>

<style scoped>
.white-text-box {
  position: absolute;
  top: 0;
  left: 1vh;
  width: 82vh;
  padding: 1vh;
  opacity: 1;
  z-index: 10;
}
.white-text-box p {
  font-size: 3vh;
  opacity: 1;
  margin-bottom: 0;
}
.text-box {
  position: absolute;
  width: 48%;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.5vh 2vh;
  right: 1%;
  top: 1vh;
  font-size: 4.8vh;
  font-weight: bold;
  z-index: 10;
  text-align: center;
  opacity: 0;
}
.images {
  position: absolute;
  height: 100vh;
  width: 50%;
  right: 0
}
.question-container {
  width: 100%;
  padding-left: 2vh;
  margin-top: 3vh;
  opacity: 1 !important;
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
  border: .1vh solid black;
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