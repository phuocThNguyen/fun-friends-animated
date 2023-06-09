<template>
  <div class="interactive-container">
    <div class="title">
      <h1>What do you need to grow?</h1>
      <p>Instruction: Tap your choices.</p>
    </div>
    <div class="choice-container" id="choice-1">
      <div class="image" @click="toggleChoice(1)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/happy-family-silhouette-sunset.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/happy-family-silhouette-sunset.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Love</div>
    </div>
    <div class="choice-container" id="choice-2">
      <div class="image" @click="toggleChoice(2)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/full-shot-kid-hugging-dog.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/full-shot-kid-hugging-dog.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Animal friends</div>
    </div>
    <div class="choice-container" id="choice-3">
      <div class="image" @click="toggleChoice(3)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/cute-little-boy-with-soccer-ball-park-sunny-day.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/cute-little-boy-with-soccer-ball-park-sunny-day.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Playing sports</div>
    </div>
    <div class="choice-container" id="choice-4">
      <div class="image" @click="toggleChoice(4)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/many-different-kids-boys-girls-running-park-sunny-summer-day-casual-clothes.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/many-different-kids-boys-girls-running-park-sunny-summer-day-casual-clothes.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Having fun</div>
    </div>
    <audio src="" ref="voice"/>
    <audio src="../../assets/sounds/all/crowd-cheer-applause.mp3" id="cheer1"/>
    <audio src="../../assets/sounds/all/crowd-cheer-applause-2.mp3" id="cheer2"/>
    <audio src="../../assets/sounds/all/kids-cheering.mp3" id="cheer3"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
export default {
  name: 'Session1Page34',
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
      this.$store.commit('setPage42Data', this.choices);
    },
    setChoiceBackground() {
      for (let i = 1; i < this.choices.length+1; i++) {
        let choiceContainer = document.querySelector('#choice-'+i);
        if (this.choices[i-1]) choiceContainer.classList.add('green-container')
      }
    },
    init() {
      this.choices = this.$store.getters.getPage42Data;
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
  width: 50vh;
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
#choice-1 {top: 12vh;left: 16vh}
#choice-2 {top: 12vh;right: 16vh}
#choice-3 {bottom: 2vh;left: 16vh}
#choice-4 {bottom: 2vh;right: 16vh}
.choice-container .image {
  width: 94%;
  padding: 1vh 0 .5vh 0;
  border-radius: 3vh
}
.image-component {width: 100%; height: 31vh; border-radius: 3vh}
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