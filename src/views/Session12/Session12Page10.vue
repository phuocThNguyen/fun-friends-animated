<template>
  <div class="interactive-container">
    <div class="choice-container" id="choice-1" @click="toggleChoice(1)">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session12/rewards/playing-music.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session12/rewards/playing-music.jpg"
        alt="" class="image"
      />
      <div class="text">Playing music</div>
    </div>
    <div class="choice-container" id="choice-2" @click="toggleChoice(2)">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session12/rewards/swimming.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session12/rewards/swimming.jpg"
        alt="" class="image"
      />
      <div class="text">Swimming</div>
    </div>
    <div class="choice-container" id="choice-3" @click="toggleChoice(3)">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session12/rewards/reading.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session12/rewards/reading.jpg"
        alt="" class="image"
      />
      <div class="text">Reading books</div>
    </div>
    <div class="choice-container" id="choice-4" @click="toggleChoice(4)">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session12/rewards/drawing.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session12/rewards/drawing.jpg"
        alt="" class="image"
      />
      <div class="text">Drawing</div>
    </div>

    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/sand-castle.mp3"/>
    <audio @loadeddata="playVoiceOver" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session12/Session12_Page11.mp3" ref="voice"/>
    <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound" />
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";

export default {
  name: 'Session12Page10',
  components: {ImageComponent},
  data() {return {choices: []}},
  methods: {
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    toggleChoice(id) {
      this.$refs.clickSound.play();
      let choiceContainer = document.querySelector('#choice-'+id);
      if (!this.choices[id-1]) choiceContainer.classList.add('green-container')
      else choiceContainer.classList.remove('green-container')
      this.choices[id-1] = !this.choices[id-1];
      this.$store.commit('setPage223Array', this.choices);
    },
    setChoiceBackground() {
      for (let i = 1; i < this.choices.length+1; i++) {
        let choiceContainer = document.querySelector('#choice-'+i);
        if (this.choices[i-1]) choiceContainer.classList.add('green-container')
      }
    },
  },
  created() {
    this.choices = this.$store.getters.getPage223Array;
  },
  mounted() {
    this.setChoiceBackground();
    this.setAudioVolumeLevel(0.3);
  }
}
</script>

<style scoped>
.choice-container {
  position: absolute;
  width: 52vh;
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
#choice-1 {top: 1vh;left: 14vh}
#choice-2 {top: 1vh;right: 14vh}
#choice-3 {bottom: 10vh;left: 14vh}
#choice-4 {bottom: 10vh;right: 14vh}
.choice-container .image {
  width: 94%;
  padding: 1vh 0 .5vh 0;
  border-radius: 3vh
}
.choice-container .text {
  text-align: center;
  line-height: 4.5vh;
  font-size: 3.7vh;
  font-weight: 600;
  margin-bottom: .5vh;
}
</style>
