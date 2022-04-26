<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/23391-resized.jpg" alt="friends" class="session-background">
    <emotion-pick-instruction class="instruction"/>
    <feeling-question
      class="question"
      question="Hvilken følelse oplever han?"
      :emotes="['happy','worried','angry']"
      :tips="['Glad','Bekymret','Sur']"
      :ans="['green-tick','red-tick','red-tick']"
      :isSmall="false"
      :delay="500"
      v-on:correctAnsChosen="handleCorrectAnswer"
      v-on:wrongAnswer="handleWrongAnswer"
    />

    <audio src="../../assets/sounds/all/Correct.mp3" ref="goodJob"/>
    <audio src="../../assets/sounds/all/GoodTry_TryAgain.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/session3/Page74.mp3" ref="voice"/>
  </div>
</template>

<script>
import EmotionPickInstruction from "@/components/instructions/emotionPickInstruction/EmotionPickInstruction";
import FeelingQuestion from "@/components/feelingsQuestion/FeelingsQuestion";

export default {
  name: "Session3Page4",
  components: {FeelingQuestion, EmotionPickInstruction},
  methods: {
    handleCorrectAnswer() {
      this.$refs.goodTry.pause();
      setTimeout(() => {this.$refs.goodJob.play()}, 1)
    },
    handleWrongAnswer() {
      setTimeout(() => {this.$refs.goodTry.play()}, 500)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.instruction {
  position: absolute;
  top: 2vh;
  right: 2%;
}

.question {
  position: absolute;
  bottom: 1vh;
  left: 20%;
}
</style>