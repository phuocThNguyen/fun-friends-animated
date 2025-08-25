<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/five-year-old-little-boy-lies-green-grass-summer-park.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/five-year-old-little-boy-lies-green-grass-summer-park.jpg"
      class="page-image"
    />
    <div class="text-box">
      <p><strong>What do you do to relax and calm down?</strong></p>
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
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/ukulele-beach-doug-maxwell-children-s-music-no-copyright-music.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page110.mp3" ref="voice"/>
    <div class="page-number" id="page-light">118</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session4Page6",
  components: {ImageComponent},
  data() {
    return {
      data: ['Riding a bike','Riding a scooter','Playing outside',
        'Drawing a picture','Breathing slowly', 'Playing lego',
        'Talking to a friend','Drinking water','Going to the park'],
      answers: [],
    }
  },
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing:'linear',duration: 500});
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[0], opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 5300)
        .add({targets: '.question-container', opacity: 1}, 7500)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    init() {
      this.answers = this.$store.getters.getPage110Data;
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  created() {this.init();},
  mounted() {
    this.setAudioVolumeLevel(0.2);
    },
  watch: {
    answers: function() {
      this.$store.commit('setPage110Data', this.answers)
    }
  }
}
</script>

<style scoped>
.page-image {
  position: absolute;
  height: 124%;
  transform: scaleX(-1);
}
.text-box {
  position: absolute;
  top: 2vh;
  left: 2vh;
  padding: 1.5vh;
  background-color: rgba(255,255,255,0.95);
  opacity: 0;
  width: 52vh;
}
.text-box p {font-size: 4vh;opacity: 1; margin-bottom: 2vh; line-height: 5vh}
.question-container {
  width: 100%;
  padding-left: 2vh;
  margin-top: 0;
  opacity: 1;
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
  font-size: 3.5vh;
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