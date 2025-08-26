<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/creek_girl_and_boy.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/creek_girl_and_boy.jpg"
      class="page-image"
    />
    <div class="text-box">
      <h1>Paying attention with five senses</h1>
      <p>The children are paying careful attention with
       their five senses while playing in the creek. What
       do you think they can hear?</p>
      <p>Tap your choices:</p>
    </div>
    <div class="choices-container">
      <div class="choice-container" id="choice-1" @click="toggleChoice(1)">
        <div class="image">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/river-near-forest-norway.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/river-near-forest-norway.jpg"
            class="image-component"
          />
        </div>
        <div class="text">Water flowing</div>
      </div>
      <div class="choice-container" id="choice-2" @click="toggleChoice(2)">
        <div class="image">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/olivebacked-sunbirds-feeding-child-cinnyris-jugularis.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/olivebacked-sunbirds-feeding-child-cinnyris-jugularis.jpg"
            class="image-component"
          />
        </div>
        <div class="text">Birds chirping</div>
      </div>
      <div class="choice-container" id="choice-3" @click="toggleChoice(3)">
        <div class="image">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/pexels-tung-vu-4506528.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/pexels-tung-vu-4506528.jpg"
            class="image-component"
          />
        </div>
        <div class="text">Wind blowing</div>
      </div>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page124.mp3" ref="voice"/>
    <audio ref="water" id="sound-1" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/water.mp3"/>
    <audio ref="bird" id="sound-2" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/bird.mp3"/>
    <audio ref="wind" id="sound-3" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/wind.mp3"/>
    <audio src="../../assets/sounds/all/Correct_2.mp3" ref="correctVoice"/>
    <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session4Page20_1',
  components: {ImageComponent},
  data() {
    return {
      choices: [],
      voicePlaying: null,
    }
  },
  props: {
    startPage: Number,
    pageNum: Number,
  },
  methods: {
    setPageNumber() {
      this.page = this.pageNum + this.startPage - 1;
    },
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
      });
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 4600)
        .add({targets: text[2], opacity: 1}, 13500)
        .add({targets: '.choices-container', opacity: 1}, 15600)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    stopSound() {
      if (this.voicePlaying !== null) {
        this.voicePlaying.pause();
        this.voicePlaying.currentTime = 0;
      }
    },
    toggleChoice(id) {
      this.$refs.voice.pause();
      let choiceContainer = document.querySelector('#choice-'+id);
      if (!this.choices[id-1]) {
        this.stopSound();
        choiceContainer.classList.add('green-container');
        this.voicePlaying = document.querySelector('#sound-'+id);
        this.voicePlaying.play();
        this.$refs.clickSound.play();
        this.$refs.correctVoice.play();
      }
      else {
        choiceContainer.classList.remove('green-container');
        this.stopSound();
        this.voicePlaying = null;
      }
      this.choices[id-1] = !this.choices[id-1];
      this.$store.commit('setPage124Data', this.choices);
    },
    setChoiceBackground() {
      for (let i = 1; i < this.choices.length+1; i++) {
        let choiceContainer = document.querySelector('#choice-'+i);
        if (this.choices[i-1]) choiceContainer.classList.add('green-container')
      }
    },
    init() {
      this.choices = this.$store.getters.getPage124Data;
    }
  },
  created() {
    this.init();
    this.setPageNumber();
  },
  mounted() {
    this.setChoiceBackground();
  }
}
</script>

<style scoped>
.choices-container {
  position: absolute;
  width: 56.5%;
  height: 77%;
  top: 21vh;
  opacity: 0;
}
.choice-container {
  position: absolute;
  left: 2vh;
  width: 94%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.green-container {
  background: #00CE7C;
  border-radius: 3vh;
  color: #fff;
  box-shadow: 0 9px #999;
}
.green-container img {}
#choice-1 {top: 0;}
#choice-2 {top: 23.5vh;}
#choice-3 {top: 47vh;}
.choice-container .image {
  width: 95%;
  padding: 1vh 0 .5vh 0;
  border-radius: 3vh
}
.image-component {width: 100%; height: 15vh; border-radius: 3vh}
.choice-container .text {
  text-align: center;
  line-height: 4.5vh;
  font-size: 3.7vh;
  font-weight: 600;
  margin-bottom: .5vh;
}
.page-image {
  position: absolute;
  height: 100%;
  right: -45vh;
}
.text-box {
  position: absolute;
  width: 75vh;
  background-color: #fff;
  padding: 2vh;
  height: 110%;
  top: -2vh;
}
.text-box h1 {
  font-size: 4vh;
  line-height: 4.5vh;
  margin-bottom: .5vh;
}
.text-box p {
  font-size: 3vh;
  line-height: 3.8vh;
  margin-bottom: 0vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>