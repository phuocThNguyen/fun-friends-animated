<template>
  <div class="interactive-container">
    <div class="title">Tap on activities you can do to feel calm:</div>
    <div class="choice-container" id="choice-1">
      <div class="image" @click="toggleChoice(1)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/cute-little-boy-drinking-lemonade.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/cute-little-boy-drinking-lemonade.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Drinking water</div>
    </div>
    <div class="choice-container" id="choice-2">
      <div class="image" @click="toggleChoice(2)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/peaceful-kid-with-raised-hands-meditating-feeling-calm-kid-practice-yoga-relaxed-nature-child.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/peaceful-kid-with-raised-hands-meditating-feeling-calm-kid-practice-yoga-relaxed-nature-child.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Taking deep breaths</div>
    </div>
    <div class="choice-container" id="choice-3">
      <div class="image" @click="toggleChoice(3)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/father-with-kid-park.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/father-with-kid-park.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Going for a walk</div>
    </div>
    <div class="choice-container" id="choice-4">
      <div class="image" @click="toggleChoice(4)">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/close-up-boy-kissing-cute-cat.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/close-up-boy-kissing-cute-cat.jpg"
          class="image-component"
        />
      </div>
      <div class="text">Cuddling animal friends</div>
    </div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";
export default {
  name: 'Session3Page14_1',
  components: {ImageComponent},
  data() {
    return {
      page: 0,
      choices: [],
    }
  },
  methods: {
    playVoiceOver() {
      // setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    toggleChoice(id) {
      // this.$refs.clickSound.play();
      let choiceContainer = document.querySelector('#choice-'+id);
      if (!this.choices[id-1]) choiceContainer.classList.add('green-container')
      else choiceContainer.classList.remove('green-container')
      this.choices[id-1] = !this.choices[id-1];
      this.$store.commit('setPage88Data', this.choices);
    },
    setChoiceBackground() {
      for (let i = 1; i < this.choices.length+1; i++) {
        let choiceContainer = document.querySelector('#choice-'+i);
        if (this.choices[i-1]) choiceContainer.classList.add('green-container')
      }
    },
    init() {
      this.choices = this.$store.getters.getPage88Data;
    },
    animateText() {
      anime({
        targets: ".text-box",
        opacity: 0.98,
        duration: 500,
        delay: 500,
        easing: 'linear',
      })
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
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
}
.green-container img {}
#choice-1 {top: 10vh;left: 15vh}
#choice-2 {top: 10vh;right: 15vh}
#choice-3 {bottom: 3vh;left: 15vh}
#choice-4 {bottom: 3vh;right: 15vh}
.choice-container .image {
  width: 94%;
  padding: 1vh 0 .5vh 0;
  border-radius: 3vh
}
.image img {width: 100%; height: 100%; border-radius: 2.5vh}
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
  top: 0;
  font-weight: 600;
}
.text-box {
  position: absolute;
  left: 12.5vh;
  bottom: 1vh;
  z-index: 20;
  background-color: #00CE7C;
  width: auto;
  height: auto;
  padding: 1vh 2vh;
  opacity: 0;
  text-align: center;
}
.text-box .text {
  font-weight: bold;
  color: #ffffff;
  font-size: 4vh;
  margin-bottom: 0;
}
</style>