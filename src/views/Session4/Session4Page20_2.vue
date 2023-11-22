<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/creek_girl_and_boy.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/creek_girl_and_boy.jpg"
      class="page-image"
    />
    <div class="text-box">
      <p>What do you think they can feel?</p>
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
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Water-Stream-Sound-Effect-Amplified.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page124%2B2.mp3" ref="voice"/>
    <audio src="../../assets/sounds/all/Correct_2.mp3" ref="correctVoice"/>
    <div class="page-number" id="page-dark">134</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session4Page20_2',
  components: {ImageComponent},
  data() {
    return {
      data: ['Cold water on their feet', 'Wind on their skin',
        'Sunshine on their face','Rocks in their hands'],
      answers: [],
    }
  },
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
      });
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[0], opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 3600)
        .add({targets: '.question-container', opacity: 1}, 5900)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    init() {
      this.answers = this.$store.getters.getPage126Data;
    },
  },
  created() {this.init();},
  mounted() {
    this.setAudioVolumeLevel(0.6);
  },
  watch: {
    answers: function() {
      if (this.answers.length > this.$store.getters.getPage126Data.length) {
        this.$refs.correctVoice.play();
      }
      this.$store.commit('setPage126Data', this.answers)
    }
  }
}
</script>

<style scoped>
.page-image {
  position: absolute;
  height: 100%;
  right: -45vh;
}
.text-box {
  position: absolute;
  width: 62vh;
  background-color: #fff;
  padding: 2vh;
  height: 100%;
}
.text-box h1 {
  font-size: 4vh;
  line-height: 4.5vh;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 3vh;
  line-height: 4vh;
  margin-bottom: 1.5vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
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