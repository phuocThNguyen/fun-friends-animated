<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/Shaunti_Dog-resized.jpg" alt="body-clues" class="session-background">
    <div class="text-box">
      <p>Hunden Karla er ved at lære at svømme i et vandløb.
        Hun er lidt bekymret.</p>
      <p>Hvad kunne hendes kropssignaler være?
        Forbind signalerne med hendes krop.</p>
    </div>
    <div class="clues-sources">
      <draggable class="clues" v-model="ear" group="ear">
        <div class="clue" v-for="(clue, index) in ear" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="tail" group="tail">
        <div class="clue" v-for="(clue, index) in tail" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="head" group="head">
        <div class="clue" v-for="(clue, index) in head" :key="index">{{clue}}</div>
      </draggable>
    </div>

    <draggable class="answers" @change="handleChange('ear')" id="ear" v-model="earAns" group="ear">
      <div class="clue" v-for="(clue, index) in earAns" v-bind:id="clue" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('tail')" id="tail" v-model="tailAns" group="tail">
      <div class="clue" v-for="(clue, index) in tailAns" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('head')" id="head" v-model="headAns" group="head">
      <div class="clue" v-for="(clue, index) in headAns" :key="index">{{clue}}</div>
    </draggable>

    <green-tick class="small-tick" id="green-tick-1"/>
    <green-tick class="small-tick" id="green-tick-2"/>
    <green-tick class="small-tick" id="green-tick-3"/>

    <audio ref="correct" src="../../assets/sounds/all/correct-ans.mp3"/>
    <audio ref="celebrate" src="../../assets/sounds/all/kids-cheering.mp3"/>
    <audio src="../../assets/sounds/all/Correct.mp3" ref="correctVoice"/>
    <audio src="../../assets/sounds/all/GreatWork.mp3" ref="wellDone"/>
    <audio src="../../assets/sounds/session4/Page105.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">105</div>
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
      ear: ['Ørerne står lige op i luften og er opmærksomme '],
      earAns: [],
      tail: ['Halen hænge mellem benene'],
      tailAns: [],
      head: ['Hovedet holdes nede'],
      headAns: [],
      correctAns: 0
    }
  },
  methods: {
    animateElements() {
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: '.text-box', opacity: 500})
        .add({targets: '.clues-sources', opacity: 1}, 13000)
        .add({targets: '.answers', opacity: 1}, 13000);
    },
    handleChange(id) {
      switch (id) {
        case 'ear':
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
        case 'tail':
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
        case 'head':
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
      }
    },
    afterFinishFunctions() {
      this.$refs.celebrate.play()
      setTimeout(() => {this.$refs.wellDone.play()}, 500)
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
      if (this.correctAns === 3) {
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
    width: 30vh !important;
  }
  .clue {
    border-radius: 4px !important;
  }
  .answers {
    width: 30vh !important;
    border-radius: 4px !important;
  }
  #green-tick-2 {
    left: 44% !important
  }
}
.small-tick {
  position: absolute;
  width: 4.2vh !important;
  z-index: 50;
}
#green-tick-1 {
  right: 30%;
  top: 30vh;
}
#green-tick-2 {
  left: 48%;
  top: 65vh;
}
#green-tick-3 {
  right: 16%;
  top: 45vh;
}
#ear {
  right: 32%;
  top: 18vh;
  height: 14.25vh;
}
#tail {
  left: 27%;
  top: 57vh;
  height: 10.3vh;
}
#head {
  right: 18%;
  top: 41vh;
}
.answers {
  position: absolute;
  width: 29.4vh;
  height: 6.55vh;
  background-color: rgba(255,255,255,0.6);
  border-radius: 10px;
  opacity: 0;
}
.clues {
  width: 29.4vh;
}
.clues-sources {
  position: absolute;
  top: 30vh;
  left: 2%;
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
  font-size: 2.5vh;
  border-radius: 10px;
  text-align: center;
  padding: 1.5vh 1.8vh;
  margin-bottom: 1vh;
}
.text-box {
  position: absolute;
  width: 90%;
  padding: 1.5vh;
  top: 2vh;
  left: 5%;
  background-color: rgba(255,255,255,0.9);
  opacity: 0;
}
.text-box p {font-size: 3vh;margin-bottom: 0;}
</style>