<template>
  <div class="interactive-container">
    <img src="../../assets/images/session2/295-resized.jpg" id="bg-alt" alt="worried" class="session-background">
    <emotion-pick-instruction class="instruction"/>
    <feeling-question
      class="question"
      question="Hvad tror du at hun føler?"
      :emotes="['angry','happy','tear']"
      :tips="['Vred','Glad','Trist']"
      :ans="['red-tick','red-tick','green-tick']"
      :isSmall="false"
      :delay="500"
      v-on:correctAnsChosen="handleCorrectAnswer"
      v-on:wrongAnswer="handleWrongAnswer"
    />

    <audio src="../../assets/sounds/all/Correct.mp3" ref="goodJob"/>
    <audio src="../../assets/sounds/all/GoodTry_TryAgain.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/session2/Page60.mp3" ref="voice"/>
  </div>
</template>

<script>
import EmotionPickInstruction from "@/components/instructions/emotionPickInstruction/EmotionPickInstruction";
import FeelingQuestion from "@/components/feelingsQuestion/FeelingsQuestion";

export default {
  name: "Session2Page14",
  components: {FeelingQuestion, EmotionPickInstruction},
  methods: {
    handleCorrectAnswer() {
      this.$refs.goodTry.pause();
      setTimeout(() => {this.$refs.goodJob.play()}, 500)
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
#bg-alt {left: 17.5vh}
.instruction {
  position: absolute;
  top: 1vh;
  right: 2%;
}
.question {
  position: absolute;
  bottom: 1vh;
  left: calc(0.085*133vh);
}
</style>