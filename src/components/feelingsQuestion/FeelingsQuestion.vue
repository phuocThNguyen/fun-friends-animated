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
    isSmall: Boolean,
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
    },
    animateGreenTick(target) {
      anime({
        targets: target,
        easing: 'linear',
        opacity: 1,
        duration: 500
      })
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
    setSmallSize() {
      if (this.isSmall) {
        let classNames = document.querySelector('.content-container').className;
        document.querySelector('.content-container').setAttribute('class',classNames + ' small-content');
        document.querySelector('.emotes-container').setAttribute('class','emotes-container small-emotes');
        document.querySelector('.tips-container').setAttribute('class','tips-container small-tips');
        document.querySelector('.answers-container').setAttribute('class','answers-container small-answers');
        document.querySelector('.masks-container').setAttribute('class','masks-container small-masks');
      }
    },
  },
  mounted() {
    anime({
      targets: '.content-container',
      opacity: 1,
      easing: 'linear',
      delay: 1000,
      duration: 1000
    })
    this.setMasksClassName();
    this.setSmallSize();
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
  font-size: 3.2vh;
  font-weight: bold;
  margin: 0 1vw;
  text-align: center;
}
.tips-container p {
  margin-bottom: 0;
  display: inline-block;
  width: 11.2vh;
}
.content-container {
  background-color: rgba(0, 206, 124, 0.8);
  border-radius: 30px;
  padding-top: 1vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  opacity: 0;
}
.content-container h1 {
  text-align: center;
  font-size: 4.9vh;
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

/*  Small size  */
.small-content {
  width: 34vw !important;
}
.small-content h1 {
  font-size: 2vw !important;
}
.small-emotes {
  margin: 0 .5vw !important;
}
.small-emotes svg {
  width: 5vw !important;
}
.small-tips {
  font-size: 1.5vw !important;
  margin: 0 .5vw !important;
}
.small-answers {
  margin: 0 .5vw .5vh .5vw !important;
}
.small-answers svg {
  width: 3vw !important;
}
.small-masks {
  padding: 0 .5vw !important;
  top: 4.9vh !important;
}
.small-masks div {
  width: 5vw !important;
  height: 5vw !important;
}
</style>