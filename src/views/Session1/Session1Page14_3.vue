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
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/pexels-hilaryh-37987.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/pexels-hilaryh-37987.jpg"
            class="image-component"
          />
        </div>
        <div class="text">Horses</div>
      </div>
      <div class="choice-container" id="choice-2">
        <div class="image" @click="toggleChoice(2)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/pexels-jurgen-32247829-16634597.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/pexels-jurgen-32247829-16634597.jpg"
            class="image-component" style="width: 150%;top:-7vh;left:-4vh"
          />
        </div>
        <div class="text">Ducks</div>
      </div>
      <div class="choice-container" id="choice-3">
        <div class="image" @click="toggleChoice(3)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/pexels-monkeytactics-769433.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/pexels-monkeytactics-769433.jpg"
            class="image-component" style="width: 150%;top:0;left:-8vh"
          />
        </div>
        <div class="text">Crocodiles</div>
      </div>
      <div class="choice-container" id="choice-4">
        <div class="image" @click="toggleChoice(4)">
          <ImageComponent
              src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/pexels-neemapix-23696154.jpg"
              srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/pexels-neemapix-23696154.jpg"
              class="image-component" style="width: 150%;top:-8vh;left:-6vh"
          />
        </div>
        <div class="text">Giraffes</div>
      </div>
    </div>
    <div class="row-container" id="row-2">
      <div class="choice-container" id="choice-5">
        <div class="image" @click="toggleChoice(5)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/pexels-pixabay-326900.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/pexels-pixabay-326900.jpg"
            class="image-component"
          />
        </div>
        <div class="text">Birds</div>
      </div>
      <div class="choice-container" id="choice-6">
        <div class="image" @click="toggleChoice(6)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/pexels-kamilzubrzycki-1394938.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/pexels-kamilzubrzycki-1394938.jpg"
            class="image-component" style="width: 150%;top:0;left:0"
          />
        </div>
        <div class="text">Snakes</div>
      </div>
      <div class="choice-container" id="choice-7">
        <div class="image" @click="toggleChoice(7)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/pexels-pixabay-247376.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/pexels-pixabay-247376.jpg"
            class="image-component" style="width: 200%;left:-16vh;top:-9vh"
          />
        </div>
        <div class="text">Zebras</div>
      </div>
      <div class="choice-container" id="choice-8">
        <div class="image" @click="toggleChoice(8)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/turtle-5201848.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/turtle-5201848.jpg"
            class="image-component" style="width: 200%;top:-10vh;left:-24vh"
          />
        </div>
        <div class="text">Turtles</div>
      </div>
    </div>
    <div class="row-container" id="row-3">
      <div class="choice-container" id="choice-9">
        <div class="image" @click="toggleChoice(9)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/view-cute-dog-enjoying-time-nature-park.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/view-cute-dog-enjoying-time-nature-park.jpg"
            class="image-component" style="width: 120%;top:-2vh;left:-6vh"
          />
        </div>
        <div class="text">Dogs</div>
      </div>
      <div class="choice-container" id="choice-10">
        <div class="image" @click="toggleChoice(10)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/wombat-7200056.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/wombat-7200056.jpg"
            class="image-component" style="width: 150%;top:-7vh;left:-6vh"
          />
        </div>
        <div class="text">Wombats</div>
      </div>
      <div class="choice-container" id="choice-11">
        <div class="image" @click="toggleChoice(11)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/pexels-wwarby-19613749.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/pexels-wwarby-19613749.jpg"
            class="image-component"
          />
        </div>
        <div class="text">Rabbits</div>
      </div>
      <div class="choice-container" id="choice-12">
        <div class="image" @click="toggleChoice(12)">
          <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/sheep-5078377.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/sheep-5078377.jpg"
            class="image-component" style="width: 140%;top:-3vh;left:-6vh"
          />
        </div>
        <div class="text">Sheep</div>
      </div>
    </div>
    <div class="page-number" id="page-light">{{ page }}</div>
    <div class="audios">
      <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound"/>
      <audio id="audio-1" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/horse.mp3" ref="kangaroo"/>
      <audio id="audio-2" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/duck.mp3" ref="elephant"/>
      <audio id="audio-3" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/crocodile.mp3" ref="rooster"/>
      <audio id="audio-4" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/giraffe.mp3" ref="cow"/>
      <audio id="audio-5" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/birds.mp3" ref="tiger"/>
      <audio id="audio-6" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/snake.mp3" ref="dolphin"/>
      <audio id="audio-7" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/zebra.mp3" ref="goat"/>
      <audio id="audio-8" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/turtle.mp3" ref="whale"/>
      <audio id="audio-9" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/dog.mp3" ref="lion"/>
      <audio id="audio-10" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/wombat.mp3" ref="pig"/>
      <audio id="audio-11" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/rabbit.mp3" ref="koala"/>
      <audio id="audio-12" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/animals/sheep.mp3" ref="cat"/>
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