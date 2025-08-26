<template>
  <div class="interactive-container">
    <div class="title">
      <h1>What are your favourite animals?</h1>
      <p>Tap your choices:</p>
    </div>
    <div class="row-container" id="row-1">
      <div class="choice-container" id="choice-1">
        <div class="image" @click="toggleChoice(1)">
          <ImageComponent
              src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/kangaroo-baby-begins-study-world.jpg"
              srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/kangaroo-baby-begins-study-world.jpg"
              class="image-component" style="width: 115%;left:-2vh;top:-1.5vh"
          />
        </div>
        <div class="text">Kangaroos</div>
      </div>
      <div class="choice-container" id="choice-2">
        <div class="image" @click="toggleChoice(2)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/closeup-shot-elephants-standing-near-lake-sunset.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/closeup-shot-elephants-standing-near-lake-sunset.jpg"
            class="image-component" style="width: 130%;left:-2vh;top:-1.5vh"
          />
        </div>
        <div class="text">Elephants</div>
      </div>
      <div class="choice-container" id="choice-3">
        <div class="image" @click="toggleChoice(3)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/closeup-shot-rooster-sitting-ground.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/closeup-shot-rooster-sitting-ground.jpg"
            class="image-component"
          />
        </div>
        <div class="text">Roosters</div>
      </div>
      <div class="choice-container" id="choice-4">
        <div class="image" @click="toggleChoice(4)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/closeup-shot-mother-cow-with-adorable-calf-grassy-field.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/closeup-shot-mother-cow-with-adorable-calf-grassy-field.jpg"
            class="image-component" style="top:-.3vh"
          />
        </div>
        <div class="text">Cows</div>
      </div>
    </div>
    <div class="row-container" id="row-2">
      <div class="choice-container" id="choice-5">
        <div class="image" @click="toggleChoice(5)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/cute-little-tiger-playing-grass.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/cute-little-tiger-playing-grass.jpg"
            class="image-component" style="width: 120%;left:-4vh;top:-1.5vh"
          />
        </div>
        <div class="text">Tigers</div>
      </div>
      <div class="choice-container" id="choice-6">
        <div class="image" @click="toggleChoice(6)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/dolphin-while-jumping-deep-blue-sea-sunset.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/dolphin-while-jumping-deep-blue-sea-sunset.jpg"
            class="image-component" style="width: 200%;left:-11vh;top:-10vh"
          />
        </div>
        <div class="text">Dolphins</div>
      </div>
      <div class="choice-container" id="choice-7">
        <div class="image" @click="toggleChoice(7)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/goats-field.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/goats-field.jpg"
            class="image-component" style="width: 123%;left:-7vh"
          />
        </div>
        <div class="text">Goats</div>
      </div>
      <div class="choice-container" id="choice-8">
        <div class="image" @click="toggleChoice(8)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/humpback-whales-photographed-from-with-aerial-drone-off-coast-kapalua-hawaii.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/humpback-whales-photographed-from-with-aerial-drone-off-coast-kapalua-hawaii.jpg"
            class="image-component"
          />
        </div>
        <div class="text">Whales</div>
      </div>
    </div>
    <div class="row-container" id="row-3">
      <div class="choice-container" id="choice-9">
        <div class="image" @click="toggleChoice(9)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/little-pink-piglets-run-freely-through-garden-piglets-farm-open-air.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/little-pink-piglets-run-freely-through-garden-piglets-farm-open-air.jpg"
            class="image-component" style="width: 150%;left:-8vh;top:-4vh"
          />
        </div>
        <div class="text">Pigs</div>
      </div>
      <div class="choice-container" id="choice-10">
        <div class="image" @click="toggleChoice(10)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/pexels-mikhail-nilov-7709882.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/pexels-mikhail-nilov-7709882.jpg"
            class="image-component" style="width: 150%;left:-8vh;top:-6vh"
          />
        </div>
        <div class="text">Monkeys</div>
      </div>
      <div class="choice-container" id="choice-11">
        <div class="image" @click="toggleChoice(11)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/mother-baby-koalas-tree.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/mother-baby-koalas-tree.jpg"
            class="image-component" style="width: 150%;left:-2vh;top:-5vh"
          />
        </div>
        <div class="text">Koalas</div>
      </div>
      <div class="choice-container" id="choice-12">
        <div class="image" @click="toggleChoice(12)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/pexels-francesco-ungaro-96428.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/pexels-francesco-ungaro-96428.jpg"
            class="image-component" style="width: 150%;left:-6vh;top:-7vh"
          />
        </div>
        <div class="text">Cats</div>
      </div>
    </div>
    <div class="page-number" id="page-light">{{ page }}</div>
    <div class="audios">
      <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound"/>
      <audio id="audio-1" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/kangaroo.mp3" ref="kangaroo"/>
      <audio id="audio-2" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/elephant.mp3" ref="elephant"/>
      <audio id="audio-3" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/rooster.mp3" ref="rooster"/>
      <audio id="audio-4" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/cow.mp3" ref="cow"/>
      <audio id="audio-5" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/tiger.mp3" ref="tiger"/>
      <audio id="audio-6" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/dolphin.mp3" ref="dolphin"/>
      <audio id="audio-7" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/goat.mp3" ref="goat"/>
      <audio id="audio-8" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/whale.mp3" ref="whale"/>
      <audio id="audio-9" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/pig.mp3" ref="pig"/>
      <audio id="audio-10" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/monkey.mp3" ref="monkey"/>
      <audio id="audio-11" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/koala.mp3" ref="koala"/>
      <audio id="audio-12" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/cat.mp3" ref="cat"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Session1_Page25.mp3" ref="voice"/>
    </div>
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
      currentVoice: null,
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
    playVoiceOver() {
      // setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playAnimalVoice(id) {
      if (this.currentVoice !== null) {
        this.currentVoice.pause();
        this.currentVoice.currentTime = 0;
      }
      this.currentVoice = document.querySelector('#audio-'+id);
      this.currentVoice.play();
    },
    toggleChoice(id) {
      this.$refs.voice.pause();
      let choiceContainer = document.querySelector('#choice-'+id);
      this.$refs.clickSound.play();
      if (!this.choices[id-1]) {
        choiceContainer.classList.add('green-container');
        this.playAnimalVoice(id);
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
    this.setPageNumber();
  },
  mounted() {
    this.playVoiceOver();
    this.setChoiceBackground();
  },
}
</script>

<style scoped>
.choice-container {
  width: 24%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1vh .5vh .5vh .5vh;
}
.green-container {
  background: #00CE7C;
  border-radius: 3vh;
  color: #fff;
  box-shadow: 0 9px #999;
}
.row-container {
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
#row-1 {top: 9vh;}
#row-2 {top: 36vh;}
#row-3 {top: 63vh;}
.choice-container .image {
  position: relative;
  width: 94%;
  height: 20vh;
  border-radius: 3vh;
  overflow: hidden;
  margin-bottom: 1vh;
}
.image-component {position: absolute;width: 110%; height: auto; border-radius: 3vh; top:-1vh}
.choice-container .text {
  text-align: center;
  font-size: 3vh;
  line-height: 3vh;
  font-weight: 600;
}
.title {
  position: absolute;
  width: 100%;
  text-align: center;
  top: .5vh;
  font-weight: 600;
}
.title h1 {font-size: 4vh;margin-bottom: 0;line-height: 3.5vh}
.title p {font-size: 3vh;}
</style>