<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/22061-resized.jpg" alt="body-clues" class="session-background">
    <div class="text-box">
      <h1>Ekstra Aktivitet - Kropssignaler</h1>
      <p>Caroline leger på den nye legeplads - hun føler sig spændt, men også bange.</p>
      <p>Hvad kunne hendes kropssignaler være?</p>
    </div>
    <div class="clues-sources">
      <draggable class="clues" v-model="dizzy" group="dizzy">
        <div class="clue" v-for="(clue, index) in dizzy" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="stomach" group="stomach">
        <div class="clue" v-for="(clue, index) in stomach" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="skin" group="skin">
        <div class="clue" v-for="(clue, index) in skin" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="heart" group="heart">
        <div class="clue" v-for="(clue, index) in heart" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="knees" group="knees">
        <div class="clue" v-for="(clue, index) in knees" :key="index">{{clue}}</div>
      </draggable>
    </div>

    <draggable class="answers" @change="handleChange('dizzy')" id="dizzy" v-model="dizzyAns" group="dizzy">
      <div class="clue" v-for="(clue, index) in dizzyAns" v-bind:id="clue" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('stomach')" id="stomach" v-model="stomachAns" group="stomach">
      <div class="clue" v-for="(clue, index) in stomachAns" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('skin')" id="skin" v-model="skinAns" group="skin">
      <div class="clue" v-for="(clue, index) in skinAns" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('heart')" id="heart" v-model="heartAns" group="heart">
      <div class="clue" v-for="(clue, index) in heartAns" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('knees')" id="knees" v-model="kneesAns" group="knees">
      <div class="clue" v-for="(clue, index) in kneesAns" :key="index">{{clue}}</div>
    </draggable>

    <green-tick class="small-tick" id="green-tick-1"/>
    <green-tick class="small-tick" id="green-tick-2"/>
    <green-tick class="small-tick" id="green-tick-3"/>
    <green-tick class="small-tick" id="green-tick-4"/>
    <green-tick class="small-tick" id="green-tick-5"/>

    <audio ref="correct" src="../../assets/sounds/all/correct-ans.mp3"/>
    <audio ref="celebrate" src="../../assets/sounds/all/kids-cheering.mp3"/>
    <audio src="../../assets/sounds/all/Correct.mp3" ref="correctVoice"/>
    <audio src="../../assets/sounds/all/GreatWork.mp3" ref="veryGood"/>
    <audio src="../../assets/sounds/session4/Page104.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">104</div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import anime from "animejs";
import GreenTick from "@/components/feelingsQuestion/ticks/GreenTick";

export default {
  name: 'Session4Page18',
  components: {GreenTick, draggable},
  data() {
    return {
      dizzy: ['Svimmelhed'],
      dizzyAns: [],
      stomach: ['Sommerfugle i maven'],
      stomachAns: [],
      skin: ['Kuldegysninger'],
      skinAns: [],
      heart: ['Hjertebanken'],
      heartAns: [],
      knees: ['Rystende knæ'],
      kneesAns: [],
      correctAns: 0
    }
  },
  methods: {
    animateElements() {
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: '.clues-sources', opacity: 1}, 15000)
        .add({targets: '.answers', opacity: 1}, 15000);
    },
    handleChange(id) {
      switch (id) {
        case 'dizzy':
          anime({
            targets: '#green-tick-1',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          this.$refs.correct.play();
          this.correctAns++;
          break;
        case 'stomach':
          anime({
            targets: '#green-tick-2',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          this.$refs.correct.play();
          this.correctAns++;
          break;
        case 'skin':
          anime({
            targets: '#green-tick-3',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          this.$refs.correct.play();
          this.correctAns++;
          break;
        case 'heart':
          anime({
            targets: '#green-tick-4',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          this.$refs.correct.play();
          this.correctAns++;
          break;
        case 'knees':
          anime({
            targets: '#green-tick-5',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          this.$refs.correct.play();
          this.correctAns++;
          break;
      }
    },
    afterFinishFunctions() {
      this.$refs.celebrate.play();
      setTimeout(() => {this.$refs.veryGood.play()}, 500)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    },
  },
  mounted() {
    this.animateElements();
    this.playVoiceOver();
  },
  watch: {
    correctAns: function () {
      if (this.correctAns === 5) {
        this.afterFinishFunctions();
      } else {
        setTimeout(() => {this.$refs.correctVoice.play()}, 500)
      }
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 930px) {
  .clues {
    width: 27vh !important;
  }
  .clue {
    border-radius: 4px !important;
  }
  .answers {
    width: 27vh !important;
    border-radius: 4px !important;
  }
}
.small-tick {
  position: absolute;
  width: 3% !important;
  z-index: 50;
}
#green-tick-1 {
  right: 29%;
  top: 30vh;
}
#green-tick-2 {
  right: 26%;
  top: 57vh;
}
#green-tick-3 {
  right: 28%;
  top: 44vh;
}
#green-tick-4 {
  right: 6%;
  top: 45vh;
}
#green-tick-5 {
  right: 1%;
  top: 71vh;
}
#dizzy {
  right: 30%;
  top: 27vh;
}
#stomach {
  right: 27%;
  top: 50vh;
  height: 10.49vh;
}
#skin {
  right: 30%;
  top: 41vh;
}
#heart {
  right: 7%;
  top: 42vh;
}
#knees {
  right: 2%;
  top: 68vh;
}
.answers {
  position: absolute;
  width: 23.8vh;
  height: 6.55vh;
  background-color: rgba(255,255,255,0.6);
  border-radius: 10px;
  opacity: 0;
}
.clues {
  width: 23.8vh;
}
.clues-sources {
  position: absolute;
  top: 30vh;
  left: 17%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
}
.clue {
  background-color: #000000;
  color: #ffffff;
  width: 100%;
  font-size: 3.2vh;
  border-radius: 10px;
  text-align: center;
  padding: 1.4vh;
  margin-bottom: 1vh;
}
.text-box {
  position: absolute;
  width: calc(0.96*133vh);
  padding: 2.1vh;
  top: 1vh;
  left: calc(0.02*133vh);
  background-color: rgba(255,255,255,0.8);
  opacity: 0;
}
.text-box p { font-size: 3vh;margin-bottom: 0; }
.text-box h1 { font-size: 4vh;margin-bottom: 0; }
</style>