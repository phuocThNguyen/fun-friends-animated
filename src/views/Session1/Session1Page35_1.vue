<template>
  <div class="interactive-container">
    <div class="title">
      <h1>What activities do you like?</h1>
      <p>Tick your choices:</p>
    </div>
    <div class="choice-container" id="choice-1">
      <div class="image" @click="toggleChoice(1)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/many-different-kids-boys-girls-running-park-sunny-summer-day-casual-clothes.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/many-different-kids-boys-girls-running-park-sunny-summer-day-casual-clothes.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Running</div>
    </div>
    <div class="choice-container" id="choice-2">
      <div class="image" @click="toggleChoice(2)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/mother-daughter-kick-scooter-park-kids-learn-skate-roller-board-little-girl-skating-sunny-summer-day.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/mother-daughter-kick-scooter-park-kids-learn-skate-roller-board-little-girl-skating-sunny-summer-day.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Riding a scooter</div>
    </div>
    <div class="choice-container" id="choice-3">
      <div class="image" @click="toggleChoice(3)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/group-diverse-kids-playing-field-together.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/group-diverse-kids-playing-field-together.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Playing outside</div>
    </div>
    <div class="choice-container" id="choice-4">
      <div class="image" @click="toggleChoice(4)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/kids-having-fun-with-traditional-games.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/kids-having-fun-with-traditional-games.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Playing hide and seek</div>
    </div>
    <div class="choice-container" id="choice-5">
      <div class="image" @click="toggleChoice(5)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/full-shot-kid-hugging-dog.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/full-shot-kid-hugging-dog.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Loving animals</div>
    </div>
    <div class="choice-container" id="choice-6">
      <div class="image" @click="toggleChoice(6)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/young-girl-enjoy-activity-plantation-organic-farm.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/young-girl-enjoy-activity-plantation-organic-farm.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Planting trees</div>
    </div>
    <audio src="" ref="voice"/>
    <audio src="../../assets/sounds/all/crowd-cheer-applause.mp3" id="cheer1"/>
    <audio src="../../assets/sounds/all/crowd-cheer-applause-2.mp3" id="cheer2"/>
    <audio src="../../assets/sounds/all/kids-cheering.mp3" id="cheer3"/>
    <div class="page-number" id="page-light">52</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
export default {
  name: 'Session1Page35_1',
  components: {ImageComponent},
  data() {
    return {
      page: 0,
      choices: [],
      cheers: ['#cheer1','#cheer2','#cheer3'],
      currentVoice: null,
    }
  },
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$ref.voice.play()}, 500)
    },
    playCheerVoice() {
      if (this.currentVoice !== null) {
        this.currentVoice.pause();
        this.currentVoice.currentTime = 0;
      }
      let cheerVoiceId = this.cheers[Math.floor(Math.random() * this.cheers.length)];
      let voice = document.querySelector(cheerVoiceId);
      voice.play();
      this.currentVoice = voice;
    },
    toggleChoice(id) {
      let choiceContainer = document.querySelector('#choice-'+id);
      if (!this.choices[id-1]) {
        choiceContainer.classList.add('green-container');
        this.playCheerVoice();
      }
      else choiceContainer.classList.remove('green-container')
      this.choices[id-1] = !this.choices[id-1];
      this.$store.commit('setPage43Data', this.choices);
    },
    setChoiceBackground() {
      for (let i = 1; i < this.choices.length+1; i++) {
        let choiceContainer = document.querySelector('#choice-'+i);
        if (this.choices[i-1]) choiceContainer.classList.add('green-container')
      }
    },
    init() {
      this.choices = this.$store.getters.getPage43Data;
    }
  },
  created() {
    this.init();
  },
  mounted() {
    this.setChoiceBackground();
  },
}
</script>

<style scoped>
.choice-container {
  position: absolute;
  width: 40vh;
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
#choice-1 {top: 11vh;left: 2vh}
#choice-2 {top: 11vh;left: 46.5vh}
#choice-3 {top: 11vh;left: 91vh}
#choice-4 {bottom: 12vh;left: 2vh}
#choice-5 {bottom: 12vh;left: 46.5vh}
#choice-6 {bottom: 12vh;left: 91vh}
.choice-container .image {
  width: 94%;
  padding: 1vh 0 .5vh 0;
  border-radius: 3vh
}
.image img {width: 100%; height: 26vh; border-radius: 3vh}
.choice-container .text {
  text-align: center;
  line-height: 4.5vh;
  font-size: 3.7vh;
  font-weight: 600;
  margin-bottom: .5vh;
}
.title {
  position: absolute;
  width: 100%;
  text-align: center;
  top: .5vh;
  font-weight: 600;
}
.title h1 {font-size: 5vh;margin-bottom: 0}
.title p {font-size: 3vh;}
</style>