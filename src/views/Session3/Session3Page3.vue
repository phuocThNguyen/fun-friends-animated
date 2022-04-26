<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/3903-resized.jpg" alt="friends" class="session-background">
    <emotion-pick-instruction class="instruction"/>
    <feeling-question
      class="question"
      question="Hvilke(n) følelse(r) oplever de?"
      :emotes="['sad','happy','worried']"
      :tips="['Ked af det','Glad','Bekymret']"
      :ans="['red-tick','green-tick','red-tick']"
      :isSmall="false"
      :delay="9600"
      v-on:correctAnsChosen="handleCorrectAnswer"
      v-on:wrongAnswer="handleWrongAnswer"
    />

    <audio src="../../assets/sounds/all/GreatWork.mp3" ref="greatWork"/>
    <audio src="../../assets/sounds/all/GoodTry.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/session3/Page73.mp3" ref="voice"/>
  </div>
</template>

<script>
import anime from "animejs";
import FeelingQuestion from "@/components/feelingsQuestion/FeelingsQuestion";
import EmotionPickInstruction from "@/components/instructions/emotionPickInstruction/EmotionPickInstruction";

export default {
  name: "Session3Page3",
  components: {EmotionPickInstruction, FeelingQuestion},
  methods: {
    animeText() {
      anime({
        targets: '.instruction',
        opacity: 1,
        delay: 500,
        duration: 500,
        easing: 'linear'
      })
    },
    handleCorrectAnswer() {
      this.$refs.goodTry.pause();
      setTimeout(() => {this.$refs.greatWork.play()}, 1)
    },
    handleWrongAnswer() {
      setTimeout(() => {this.$refs.goodTry.play()}, 500)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animeText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.instruction {
  position: absolute;
  top: 2vh;
  right: 2%;
  opacity: 0;
}
.question {
   position: absolute;
   bottom: 1vh;
   left: 20%;
  opacity: 0;
}
</style>