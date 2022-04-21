<template>
  <div class="interactive-container">
    <img src="../../assets/images/session2/399-resized.jpg" alt="worried" class="session-background">
    <emotion-pick-instruction class="instruction"/>
    <feeling-question
      class="question"
      question="Hvad tror du at hun føler?"
      :emotes="['angry','cool','happy']"
      :tips="['Vred','Afslappet','Glad']"
      :ans="['green-tick','red-tick','red-tick']"
      :isSmall="false"
      :delay="500"
      v-on:correctAnsChosen="handleCorrectAnswer"
      v-on:wrongAnswer="handleWrongAnswer"
    />

    <audio src="../../assets/sounds/all/GreatWork.mp3" ref="veryGood"/>
    <audio src="../../assets/sounds/all/GoodTry.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/session2/Page58.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">58</div>
  </div>
</template>

<script>
import EmotionPickInstruction from "@/components/instructions/emotionPickInstruction/EmotionPickInstruction";
import FeelingQuestion from "@/components/feelingsQuestion/FeelingsQuestion";

export default {
  name: "Session2Page12",
  components: {FeelingQuestion, EmotionPickInstruction},
  methods: {
    handleCorrectAnswer() {
      this.$refs.goodTry.pause();
      setTimeout(() => {this.$refs.veryGood.play()}, 500)
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
  bottom: 4vh;
  left: 20%;
}
</style>