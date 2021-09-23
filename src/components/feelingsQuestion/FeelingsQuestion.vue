<template>
  <div class="content-container">
    <h1>What could he be feeling?</h1>
    <div class="emotes-container">
      <component v-for="(emote, index) in emotes" :key="index" :is="emote" :class="ans[`${index}`]"/>
    </div>
    <div class="tips-container">
      <p v-for="(answer, index) in ans" :key="index" :class="answer">{{tips[index]}}</p>
    </div>
    <div class="answer-container">
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
    'laugh': () => import("@/components/feelingsQuestion/emotes/EmoteLaugh"),
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
          break;
        case 'incorrect-2':
          this.animateRedTick(document.querySelectorAll('.red-tick')[5]);
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
        document.querySelector('.content-container').setAttribute('id','small-content');
        document.querySelector('.emotes-container').setAttribute('id','small-emotes');
        document.querySelector('.tips-container').setAttribute('id','small-tips');
        document.querySelector('.answer-container').setAttribute('id','small-answers');
        document.querySelector('.masks-container').setAttribute('id','small-masks');
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
  padding: 0 1vw;
  top: 8.7vh;
}
.masks-container div {
  width: 10vw;
  height: 10vw;
}
.tips-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #ffffff;
  font-size: 2vw;
  font-weight: bold;
  margin: 0 1vw;
  text-align: center;
}
.tips-container p {
  margin-bottom: 0;
  display: inline-block;
  width: 7vw;
}
.content-container {
  background-color: rgba(0, 206, 124, 0.8);
  border-radius: 30px;
  padding-top: 1vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  opacity: 0;
}
.content-container h1 {
  text-align: center;
  font-size: 3.5vw;
  color: #ffffff;
}
.emotes-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 1vw;
}
.answer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin: 1vw;
}

/*  Small size  */
#small-content {
  width: 34vw;
}
#small-content h1 {
  font-size: 2vw;
}
#small-emotes {
  margin: 0 .5vw;
}
#small-emotes svg {
  width: 5vw;
}
#small-tips {
  font-size: 1.5vw;
  margin: 0 .5vw;
}
#small-answers {
  margin: 0 .5vw .5vh .5vw;
}
#small-answers svg {
  width: 3vw;
}
#small-masks {
  padding: 0 .5vw;
  top: 4.9vh;
}
#small-masks div {
  width: 5vw;
  height: 5vw;
}
</style>