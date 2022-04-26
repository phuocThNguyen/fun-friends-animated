%<template>
  <div class="interactive-container">
    <img src="../../assets/images/session2/37-resized.jpg" alt="worried" class="session-background">
    <emotion-pick-instruction class="instruction"/>
    <feeling-question
      class="question"
      question="Hvad tror du at han føler?"
      :emotes="['sad','happy','worried']"
      :tips="['Ked af det','Glad','Bekymret']"
      :ans="['red-tick','green-tick','red-tick']"
      :isSmall="false"
      :delay="500"
      v-on:correctAnsChosen="handleCorrectAnswer"
      v-on:wrongAnswer="handleWrongAnswer"
    />

    <audio src="../../assets/sounds/all/GreatWork.mp3" ref="awesome"/>
    <audio src="../../assets/sounds/all/GoodTry.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/session2/Page59.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">59</div>
  </div>
</template>

<script>
import EmotionPickInstruction from "@/components/instructions/emotionPickInstruction/EmotionPickInstruction";
import FeelingQuestion from "@/components/feelingsQuestion/FeelingsQuestion";

export default {
  name: "Session2Page13",
  components: {FeelingQuestion, EmotionPickInstruction},
  methods: {
    handleCorrectAnswer() {
      this.$refs.goodTry.pause();
      setTimeout(() => {this.$refs.awesome.play()}, 500);
    },
    handleWrongAnswer() {
      setTimeout(() => {this.$refs.goodTry.play()}, 500);
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
  bottom: 12vh;
  left: calc(0.005*133vh);
}
</style>