<template>
  <div class="interactive-container">
    <div class="text-box">
      <p style="opacity: 1;"><strong>Annie loves the beach</strong></p>
      <p>Annie is just back from a holiday at the beach.</p>
      <p>What fun activities did she do?</p>
      <p>What can you say to Annie?</p>
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
    <div class="mask"/>
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session8/135348-OSAU2M-875.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session8/135348-OSAU2M-875.jpg"
      class="session-background"
      id="alt-pos"
    />
    <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound"/>
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/beach-sound.mp3" ref="audio" autoplay loop/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/Session8_Page183.mp3" ref="voice"/>
    <div class="page-number" id="page-light">197</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session8Page4',
  components: {ImageComponent},
  data() {
    return {
      data: ['Invite Annie for a play date',
        'Ask Annie to share holiday photos',
        'Make a welcome back card or drawing',
        'Ask Annie about her favourite activity',
        'Tell Annie you miss playing fun games with her',
        'Play in the park with Annie',
        'Bake a cake with Annie'
      ],
      answers: [],
    }
  } ,
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear', duration: 500});
      animation
        .add({targets: text[1], opacity: 1}, 3300)
        .add({targets: text[2], opacity: 1}, 6800)
        .add({targets: text[3], opacity: 1}, 9600)
        .add({targets: text[4], opacity: 1}, 11900)
        .add({targets: '.question-container', opacity: 1}, 13900)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
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
  mounted() {
    this.setAudioVolumeLevel(1);
  },
  watch: {
    answers: function() {
      this.$refs.clickSound.play();
      this.$store.commit('setPage169Data', this.answers)
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
  width: 77vh;
  background: #fff;
  z-index: 5;
}
.text-box {
  position: absolute;
  top: 0;
  left: 1vh;
  width: 82vh;
  padding: 1vh;
  opacity: 1;
  z-index: 10;
}
.text-box p {
  font-size: 3vh;
  opacity: 0;
  margin-bottom: 0;
}
#alt-pos {
  left: 40vh;
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