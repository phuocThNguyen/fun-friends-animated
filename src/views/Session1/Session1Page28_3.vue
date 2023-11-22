<template>
  <div class="interactive-container">
    <div class="title">Tap on the foods that are similar to yours:</div>
    <div class="choice-container" id="choice-1">
      <div class="image" @click="toggleChoice(1)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/closeup-man-hands-african-american-cuts-vegetables-fry-salad-pepper-mushrooms-tomato-kitchen-recipe-book-table-vegan-healthy-food.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/closeup-man-hands-african-american-cuts-vegetables-fry-salad-pepper-mushrooms-tomato-kitchen-recipe-book-table-vegan-healthy-food.jpg"
          class="image-component"
        />
      </div>
    </div>
    <div class="choice-container" id="choice-2">
      <div class="image" @click="toggleChoice(2)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/delicious-healthy-white-bean-salad-with-cod-black-olives.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/delicious-healthy-white-bean-salad-with-cod-black-olives.jpg"
          class="image-component"
        />
      </div>
    </div>
    <div class="choice-container" id="choice-3">
      <div class="image" @click="toggleChoice(3)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/bowl-food-with-black-bean-black-bean-salad.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/bowl-food-with-black-bean-black-bean-salad.jpg"
          class="image-component"
        />
      </div>
    </div>
    <div class="choice-container" id="choice-4">
      <div class="image" @click="toggleChoice(4)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/fried-pasta-with-tomato-slices-black-pan-generative-ai.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/fried-pasta-with-tomato-slices-black-pan-generative-ai.jpg"
          class="image-component"
        />
      </div>
    </div>
    <div class="page-number" id="page-light">42</div>
    <audio src="../../assets/sounds/all/crowd-cheer-applause.mp3" id="cheer1"/>
    <audio src="../../assets/sounds/all/crowd-cheer-applause-2.mp3" id="cheer2"/>
    <audio src="../../assets/sounds/all/kids-cheering.mp3" id="cheer3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Session1_Page40-42.mp3" ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
export default {
  name: 'Session1Page28_3',
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
      let choiceContainer = document.querySelector('#choice-'+id);
      if (!this.choices[id-1]) {
        choiceContainer.classList.add('green-container');
        this.playCheerVoice();
      }
      else choiceContainer.classList.remove('green-container')
      this.choices[id-1] = !this.choices[id-1];
      this.$store.commit('setPage35_3Data', this.choices);
    },
    setChoiceBackground() {
      for (let i = 1; i < this.choices.length+1; i++) {
        let choiceContainer = document.querySelector('#choice-'+i);
        if (this.choices[i-1]) choiceContainer.classList.add('green-container')
      }
    },
    init() {
      this.choices = this.$store.getters.getPage35_3Data;
    },
    playSoundText() {
      this.playVoiceOver();
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
  width: 49vh;
  height: 34vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.green-container {
  background: #00CE7C;
  border-radius: 3vh;
  color: #fff;
}
.green-container img {}
#choice-1 {top: 6.5vh;left: 17vh}
#choice-2 {top: 6.5vh;right: 17vh}
#choice-3 {bottom: 15.5vh;left: 17vh}
#choice-4 {bottom: 15.5vh;right: 17vh}
.choice-container .image {
  width: 95%;
  height: 92%;
}
.image-component {width: 100%; height: 100%; border-radius: 2.5vh}
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
  font-size: 5vh;
  top: -1vh;
  font-weight: 600;
}
</style>