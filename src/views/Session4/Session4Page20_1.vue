<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/creek_girl_and_boy.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/creek_girl_and_boy.jpg"
      class="page-image"
    />
    <div class="text-box">
      <p>What do you think they can see?</p>
      <p>Tap your choices:</p>
    </div>
    <div class="choices-container">
      <div class="choice-container" id="choice-1">
        <div class="image" @click="toggleChoice(1)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/beautiful-scenery-river-surrounded-by-greenery-during-daytime.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/beautiful-scenery-river-surrounded-by-greenery-during-daytime.jpg"
            class="image-component"
          />
        </div>
        <div class="text">Water</div>
      </div>
      <div class="choice-container" id="choice-2">
        <div class="image" @click="toggleChoice(2)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/grove-summer.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/grove-summer.jpg"
            class="image-component"
          />
        </div>
        <div class="text">Trees</div>
      </div>
      <div class="choice-container" id="choice-3">
        <div class="image" @click="toggleChoice(3)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/pebble-rocks-texture-pattern-wallpaper.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/pebble-rocks-texture-pattern-wallpaper.jpg"
            class="image-component"
          />
        </div>
        <div class="text">Rocks</div>
      </div>
      <div class="choice-container" id="choice-4">
        <div class="image" @click="toggleChoice(4)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/colorful-exotic-fish-swimming-deep-blue-water-aquarium-with-green-tropical-plants.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/colorful-exotic-fish-swimming-deep-blue-water-aquarium-with-green-tropical-plants.jpg"
            class="image-component"
          />
        </div>
        <div class="text">Fishes</div>
      </div>
      <div class="choice-container" id="choice-5">
        <div class="image" @click="toggleChoice(5)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/spotted-ladybug-crawling-green-leaf-outdoors-generated-by-ai.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/spotted-ladybug-crawling-green-leaf-outdoors-generated-by-ai.jpg"
            class="image-component"
          />
        </div>
        <div class="text">Insects</div>
      </div>
      <div class="choice-container" id="choice-6">
        <div class="image" @click="toggleChoice(6)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/joyful-children-different-ethnicities-playing-together-happily-generated-by-ai.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/joyful-children-different-ethnicities-playing-together-happily-generated-by-ai.jpg"
            class="image-component"
          />
        </div>
        <div class="text">Your friends</div>
      </div>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Water-Stream-Sound-Effect-Amplified.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page124%2B1.mp3" ref="voice"/>
    <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session4Page20',
  components: {ImageComponent},
  data() {
    return {
      choices: [],
    }
  },
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({easing: 'linear', duration: 500});
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[0], opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 3500)
        .add({targets: '.choices-container', opacity: 1}, 6000)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    toggleChoice(id) {
      this.$refs.voice.pause();
      let choiceContainer = document.querySelector('#choice-'+id);
      if (!this.choices[id-1]) {
        choiceContainer.classList.add('green-container');
        this.$refs.clickSound.play();
      }
      else {
        choiceContainer.classList.remove('green-container');
      }
      this.choices[id-1] = !this.choices[id-1];
      this.$store.commit('setPage125Data', this.choices);
    },
    setChoiceBackground() {
      for (let i = 1; i < this.choices.length+1; i++) {
        let choiceContainer = document.querySelector('#choice-'+i);
        if (this.choices[i-1]) choiceContainer.classList.add('green-container')
      }
    },
    init() {
      this.choices = this.$store.getters.getPage125Data;
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
  height: 77%;
  top: 11vh;
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
.image-component {width: 100%; height: 18.5vh; border-radius: 3vh}
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
.text-box p {
  font-size: 3vh;
  line-height: 4vh;
  margin-bottom: 1vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>