<template>
  <div class="interactive-container">
    <div class="title">
      <h1>Where do you like to play with your friends?</h1>
      <p>Tap your choices:</p>
    </div>
    <div class="choice-container" id="choice-1">
      <div class="image-container" @click="toggleChoice(1)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/pexels-kindelmedia-8301491.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/pexels-kindelmedia-8301491.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Beach</div>
    </div>
    <div class="choice-container" id="choice-2">
      <div class="image-container" @click="toggleChoice(2)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/pexels-lii-chun-2055475500-32672313.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/pexels-lii-chun-2055475500-32672313.jpg"
          class="image-component" style="top: -32vh"
        />
      </div>
      <div class="text">Park</div>
    </div>
    <div class="choice-container" id="choice-3">
      <div class="image-container" @click="toggleChoice(3)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/pexels-vika-glitter-392079-1094069.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/pexels-vika-glitter-392079-1094069.jpg"
          class="image-component" style="width: 200%;top:-30vh;left:-10vh"
        />
      </div>
      <div class="text">Bush</div>
    </div>
    <div class="choice-container" id="choice-4">
      <div class="image-container" @click="toggleChoice(4)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/pexels-marctutorials-298692-870170.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/pexels-marctutorials-298692-870170.jpg"
          class="image-component" style="width: 150%;top:-10vh;left:-10vh"
        />
      </div>
      <div class="text">Pool</div>
    </div>
    <div class="page-number" id="page-light">25</div>
    <audio src="../../assets/sounds/all/crowd-cheer-applause.mp3" id="cheer1"/>
    <audio src="../../assets/sounds/all/crowd-cheer-applause-2.mp3" id="cheer2"/>
    <audio src="../../assets/sounds/all/kids-cheering.mp3" id="cheer3"/>
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Session1_Page25.mp3" ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
export default {
  name: 'Session1Page14_1',
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
      setTimeout(() => {this.$refs.voice.play()}, 500)
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
      this.$refs.voice.pause();
      let choiceContainer = document.querySelector('#choice-'+id);
      if (!this.choices[id-1]) {
        choiceContainer.classList.add('green-container');
        this.playCheerVoice();
      }
      else choiceContainer.classList.remove('green-container')
      this.choices[id-1] = !this.choices[id-1];
      this.$store.commit('setPage26Data', this.choices);
    },
    setChoiceBackground() {
      for (let i = 1; i < this.choices.length+1; i++) {
        let choiceContainer = document.querySelector('#choice-'+i);
        if (this.choices[i-1]) choiceContainer.classList.add('green-container')
      }
    },
    init() {
      this.choices = this.$store.getters.getPage26Data;
    }
  },
  created() {
    this.init();
  },
  mounted() {
    this.playVoiceOver();
    this.setChoiceBackground();
  },
}
</script>

<style scoped>
.choice-container {
  position: absolute;
  width: 50vh;
  height: 37vh;
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
#choice-1 {top: 12vh;left: 13vh}
#choice-2 {top: 12vh;right: 13vh}
#choice-3 {bottom: 2vh;left: 13vh}
#choice-4 {bottom: 2vh;right: 13vh}
.choice-container .image-container {
  position: relative;
  width: 94%;
  height: 80%;
  padding: 1vh 0 .5vh 0;
  border-radius: 3vh;
  overflow: hidden;
}
.image-component {
  position: absolute;
  width: 100%;
  height: auto;
  border-radius: 3vh;
}
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