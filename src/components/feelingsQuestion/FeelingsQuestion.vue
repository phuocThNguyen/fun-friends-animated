<template>
  <div class="content-container">
    <h1>What could he be feeling?</h1>
    <div class="emotes-container">
      <component :is="emotes[0]" :class="ans[0]"/>
      <component :is="emotes[1]" :class="ans[1]"/>
      <component :is="emotes[2]" :class="ans[2]"/>
    </div>
    <div class="tips-container">
      <p id="tip-1" :class="ans[0]">{{tips[0]}}</p>
      <p id="tip-2" :class="ans[1]">{{tips[1]}}</p>
      <p id="tip-3" :class="ans[2]">{{tips[2]}}</p>
    </div>
    <div class="answer-container">
      <component :is="ans[0]"/>
      <component :is="ans[1]"/>
      <component :is="ans[2]"/>
    </div>
    <div class="masks">
      <div @click="answerHandler"></div>
      <div @click="answerHandler"></div>
      <div @click="answerHandler"></div>
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
  },
  components: {
    'happy': () => import("@/components/feelingsQuestion/emotes/EmoteHappy"),
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
          break;
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
    this.correctAnsId = this.ans.indexOf('green-tick');
    this.$nextTick(() => {
      let masks = document.getElementsByClassName('masks')[0].children;
      let counter = 1;
      for (let i = 0;i < 3;i++) {
        if (i !== this.correctAnsId) {
          masks[i].setAttribute('class','incorrect');
          masks[i].setAttribute('id','incorrect-' + counter++);
        } else {
          masks[i].setAttribute('id','correct')
        }
      }
    })
  },
}
</script>

<style scoped>
.masks {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 1vw;
  top: 8.7vh;
}
.masks div {
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
</style>