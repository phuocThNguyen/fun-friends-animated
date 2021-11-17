<template>
  <div class="content-container">
    <h1>{{question}}</h1>
    <div class="emotes-container">
      <component v-for="(emote, index) in emotes" :key="index" :is="emote" :class="ans[`${index}`]"/>
    </div>
    <div class="tips-container">
      <p v-for="(answer, index) in ans" :key="index" :class="answer">{{tips[index]}}</p>
    </div>
    <div class="answers-container">
      <component v-for="(answer, index) in ans" :key="index" :is="answer"/>
    </div>
    <div class="masks-container">
      <div v-for="emote in emotes" :key="emote" @click="answerHandler"/>
    </div>
    <audio ref="correct" src="../../assets/sounds/all/correct-ans.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
    <audio ref="wrong" src="../../assets/sounds/all/wrong-ans.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
    <audio ref="celebrate" src="../../assets/sounds/all/kids-cheering.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "FeelingQuestion",
  props: {
    question: String,
    emotes: Array,
    tips: Array,
    ans: Array,
    delay: Number,
  },
  components: {
    'angry': () => import("@/components/feelingsQuestion/emotes/EmoteAngry"),
    'cool': () => import("@/components/feelingsQuestion/emotes/EmoteCool"),
    'crying': () => import("@/components/feelingsQuestion/emotes/EmoteCrying"),
    'happy': () => import("@/components/feelingsQuestion/emotes/EmoteHappy"),
    'sad': () => import("@/components/feelingsQuestion/emotes/EmoteSad"),
    'tear': () => import("@/components/feelingsQuestion/emotes/EmoteTear"),
    'worried': () => import("@/components/feelingsQuestion/emotes/EmoteWorried"),
    'red-tick': () => import("@/components/feelingsQuestion/ticks/RedTick"),
    'green-tick': () => import("@/components/feelingsQuestion/ticks/GreenTick"),
  },
  data() {
    return {
      correctAnsId: null,
    }
  },
  methods: {
    animateRedTick(target) {
      anime({
        targets: target,
        easing: 'linear',
        opacity: [
          {value: 1, duration: 200},
          {value: 0, duration: 100},
          {value: 1, duration: 200},
          {value: 0, duration: 100, delay: 500},
        ]
      })
      this.$refs.wrong.play();
    },
    animateGreenTick(target) {
      anime({
        targets: target,
        easing: 'linear',
        opacity: 1,
        duration: 500
      })
      Math.random() < 0.5 ? this.$refs.correct.play() : this.$refs.celebrate.play()
    },
    hideElements(className) {
      let elements = document.querySelectorAll(className);
      elements.forEach(element => {
        element.style.visibility = 'hidden';
      })
      document.querySelector('.masks-container').style.visibility = 'hidden';
    },
    answerHandler(e) {
      let maskId = e.target.id;
      switch (maskId) {
        case 'incorrect-1':
          this.animateRedTick(document.querySelectorAll('.red-tick')[4]);
          this.$emit('wrongAnswer');
          break;
        case 'incorrect-2':
          this.animateRedTick(document.querySelectorAll('.red-tick')[5]);
          this.$emit('wrongAnswer');
          break;
        case 'correct':
          this.animateGreenTick(document.querySelectorAll('.green-tick')[2]);
          this.hideElements('.red-tick');

          this.$emit('correctAnsChosen');
          break;
      }
    },
    setMasksClassName() {
      this.correctAnsId = this.ans.indexOf('green-tick');
      let masks = document.getElementsByClassName('masks-container')[0].children;
      let counter = 1;
      for (let i = 0;i < 3;i++) {
        if (i !== this.correctAnsId) {
          masks[i].setAttribute('class','incorrect');
          masks[i].setAttribute('id','incorrect-' + counter++);
        } else {
          masks[i].setAttribute('id','correct')
        }
      }
    },
  },
  mounted() {
    anime({
      targets: '.content-container',
      opacity: 1,
      easing: 'linear',
      delay: this.delay,
      duration: 700
    })
    this.setMasksClassName();
  },
}
</script>

<style scoped>
.masks-container {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 1.7vh;
  top: 9vh;
}
.masks-container div {
  width: 14vh;
  height: 14vh;
}
.tips-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #ffffff;
  font-size: 5vh;
  font-weight: bold;
  padding: 0 1.7vh;
  text-align: center;
}
.tips-container p {
  margin-bottom: 0;
  display: inline-block;
  width: 14vh;
}
.content-container {
  background-color: rgba(0, 206, 124, 0.9);
  border-radius: 30px;
  padding-top: 1vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  opacity: 0;
}
.content-container h1 {
  text-align: center;
  font-size: 5.5vh;
  color: #ffffff;
}
.emotes-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 1.4vh;
}
.answers-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin: 1.4vh;
}
</style>