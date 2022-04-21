<template>
  <div class="interactive-container">
    <img src="../../assets/images/session2/237-resized.jpg" alt="worried" class="session-background">
    <emotion-pick-instruction class="instruction"/>
    <feeling-question
      class="question"
      question="Hvad tror du at hun føler?"
      :emotes="['happy','angry','sad']"
      :tips="['Glad','Vred','Trist']"
      :ans="['green-tick','red-tick','red-tick']"
      :isSmall="false"
      :delay="500"
      v-on:correctAnsChosen="handleCorrectAnswer"
      v-on:wrongAnswer="handleWrongAnswer"
    />

    <audio src="../../assets/sounds/all/GreatWork.mp3" ref="wellDone"/>
    <audio src="../../assets/sounds/all/GoodTry.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/session2/Page61.mp3" ref="voice"/>
  </div>
</template>

<script>
import EmotionPickInstruction from "@/components/instructions/emotionPickInstruction/EmotionPickInstruction";
import FeelingQuestion from "@/components/feelingsQuestion/FeelingsQuestion";

export default {
  name: "Session2Page15",
  components: {FeelingQuestion, EmotionPickInstruction},
  methods: {
    handleCorrectAnswer() {
      this.$refs.goodTry.pause();
      setTimeout(() => {this.$refs.wellDone.play()}, 500)
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
  top: 1vh;
  left: calc(0.01*133vh);
}
.question {
  position: absolute;
  bottom: 1vh;
  left: 20%;
}
</style>