<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/cute-boy-sit-grass-park.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/cute-boy-sit-grass-park.jpg"
      class="session-background"
    />
    <div class="content-container">
      <h1>Click on the feelings you have today.</h1>
      <div class="emotes-container">
        <emote-happy class="emotes"/>
        <emote-sad class="emotes"/>
        <emote-worried class="emotes"/>
        <emote-angry class="emotes"/>
      </div>
      <div class="tips-container">
        <p class="answer-1">Happy</p>
        <p class="answer-2">Sad</p>
        <p class="answer-3">Worried</p>
        <p class="answer-4">Angry</p>
      </div>
      <div class="masks-container">
        <div class="answer-1" @click="toggleEmote(1)"/>
        <div class="answer-2" @click="toggleEmote(2)"/>
        <div class="answer-3" @click="toggleEmote(3)"/>
        <div class="answer-4" @click="toggleEmote(4)"/>
      </div>
    </div>
    <div class="text-box">
      <p class="text">
        <span>Talk about it with your parents.</span>
        <br><span>You can have many feelings in one day.</span>
      </p>
    </div>
    <audio src="../../assets/sounds/session7/click-sound.mp3" ref="click"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import EmoteWorried from "@/components/feelingsQuestion/emotes/EmoteWorried.vue";
import EmoteSad from "@/components/feelingsQuestion/emotes/EmoteSad.vue";
import EmoteAngry from "@/components/feelingsQuestion/emotes/EmoteAngry.vue";
import EmoteHappy from "@/components/feelingsQuestion/emotes/EmoteHappy.vue";

export default {
  name: "Session3Page11_1.vue",
  components: {EmoteWorried, EmoteSad, EmoteAngry, EmoteHappy, ImageComponent},
  data() {
    return {
      answerClasses: ['.answer-1','.answer-2','.answer-3','.answer-4'],
    }
  },
  methods: {
    init() {
      // this.answers = this.$store.getters.getPage85Data;
    },
    unhighlightEmote(name) {
      let chosenEmote = document.querySelectorAll(name);
      chosenEmote[1].style.opacity = '1';
      chosenEmote[0].style.color = '#c7c7c7';
    },
    highlightEmote(name) {
      let chosenEmote = document.querySelectorAll(name);
      chosenEmote[1].style.opacity = '0';
      chosenEmote[0].style.color = '#ffffff';
    },
    toggleEmote(id) {
      this.$refs.click.pause();
      this.$refs.click.currentTime = 0;
      let answerClass = '.answer-'+id;
      this.highlightEmote(answerClass)
      let otherAnswers = this.answerClasses.filter(ele => ele !== answerClass);
      otherAnswers.forEach(answer => {
        this.unhighlightEmote(answer);
      })
      this.$refs.click.play();
    },
  },
  created() {
    this.init();
  },
  watch: {
    answers: function () {
      // this.$store.commit('setPage85Data', this.answers);
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 930px) {
  .content-container {
    border-radius: 8px !important;
    bottom: 10vh !important;
  }
}
.content-container {
  position: absolute;
  background-color: rgba(0, 206, 124, 0.9);
  border-radius: 30px;
  padding: 1vh 0;
  width: 72vh;
  top: 3vh;
  left: 2vh;
  display: flex;
  flex-direction: column;
  opacity: 1;
}
.content-container h1 {
  text-align: center;
  font-size: 4vh;
  color: #ffffff;
  margin: 1vh 0;
}
.emotes-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 2vh 0;
}
.emotes {
  height: auto;
  width: 12vh;
}
.tips-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1vh;
}
.tips-container p {
  font-size: 3.5vh;
  font-weight: bold;
  margin-bottom: 0;
  display: inline-block;
  width: 12vh;
}
.masks-container {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  top: 9.75vh;
}
.masks-container div {
  width: 12vh;
  height: 12vh;
  background: rgba(0,0,0,0.3);
  opacity: 0;
  border-radius: 50%;
}
.text-box {
  position: absolute;
  left: 25vh;
  bottom: 1vh;
  z-index: 20;
  background-color: #00CE7C;
  width: auto;
  height: auto;
  padding: 1vh 4vh;
  opacity: 1;
  text-align: center;
}
.text-box .text {
  font-weight: bold;
  color: #ffffff;
  font-size: 4vh;
  margin-bottom: 0;
}
</style>