<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/kids-spending-time-together-nature.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/kids-spending-time-together-nature.jpg"
      class="page-image"
    />
    <div class="text-box">
      <p><strong>The children are enjoying the park.</strong></p>
      <p>What can they smell?</p>
      <p><strong>Tap your choices:</strong></p>
    </div>
    <div class="choices-container">
      <div class="choice-container" id="choice-1" @click="toggleChoice(1)">
        <div class="image">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/east-verde-river-near-north-sycamore-creek-apache-sitgreaves-national-forest-arizona.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/east-verde-river-near-north-sycamore-creek-apache-sitgreaves-national-forest-arizona.jpg"
            class="image-component"
          />
        </div>
        <div class="text">The creek</div>
      </div>
      <div class="choice-container" id="choice-2" @click="toggleChoice(2)">
        <div class="image">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/beautiful-pine-trees-mountains.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/beautiful-pine-trees-mountains.jpg"
            class="image-component"
          />
        </div>
        <div class="text">The trees</div>
      </div>
      <div class="choice-container" id="choice-3" @click="toggleChoice(3)">
        <div class="image">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/pexels-freddie-ramm-51548.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/pexels-freddie-ramm-51548.jpg"
            class="image-component"
          />
        </div>
        <div class="text">The flowers</div>
      </div>
      <div class="choice-container" id="choice-4" @click="toggleChoice(4)">
        <div class="image">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/weather-effects-composition.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/weather-effects-composition.jpg"
            class="image-component"
          />
        </div>
        <div class="text">The rain</div>
      </div>
    </div>
    <div class="page-number" id="page-light">135</div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Water-Stream-Sound-Effect-Amplified.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page124%2B3.mp3" ref="voice"/>
    <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound"/>
    <audio src="../../assets/sounds/all/Correct_1.mp3" ref="correctVoice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session4Page20_3',
  components: {ImageComponent},
  data() {
    return {
      choices: [],
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
        .add({targets: text[1], opacity: 1}, 3500)
        .add({targets: '.choices-container', opacity: 1}, 5700)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    toggleChoice(id) {
      let choiceContainer = document.querySelector('#choice-'+id);
      if (!this.choices[id-1]) {
        choiceContainer.classList.add('green-container');
        this.$refs.clickSound.play();
        this.$refs.correctVoice.play();
      }
      else {
        choiceContainer.classList.remove('green-container');
      }
      this.choices[id-1] = !this.choices[id-1];
      this.$store.commit('setPage127Data', this.choices);
    },
    setChoiceBackground() {
      for (let i = 1; i < this.choices.length+1; i++) {
        let choiceContainer = document.querySelector('#choice-'+i);
        if (this.choices[i-1]) choiceContainer.classList.add('green-container')
      }
    },
    init() {
      this.choices = this.$store.getters.getPage127Data;
    }
  },
  created() {
    this.init();
  },
  mounted() {
    this.setChoiceBackground();
    this.$refs.audio.volume = 0.6;
  }
}
</script>

<style scoped>
.choices-container {
  position: absolute;
  width: 56.5%;
  height: 70%;
  top: 14vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1vh;
  opacity: 0;
}
.choice-container {
  left: 2vh;
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: .5vh;
}
.green-container {
  background: #00CE7C;
  border-radius: 3vh;
  color: #fff;
  box-shadow: 0 9px #999;
}
.green-container img {}
.choice-container .image {
  width: 95%;
  padding: 1vh 0 .5vh 0;
  border-radius: 3vh
}
.image-component {width: 100%; border-radius: 3vh}
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
</style>