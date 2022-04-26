<template>
  <div class="interactive-container">
    <img src="../../assets/images/session2/13705-resized.jpg" id="bg-alt" alt="worried" class="session-background">
    <emotion-pick-instruction class="instruction"/>
    <feeling-question
      class="question"
      question="Hvad tror du at han føler?"
      :emotes="['angry','worried','happy']"
      :tips="['Sur','Bekymret','Glad']"
      :ans="['red-tick','green-tick','red-tick']"
      :isSmall="false"
      :delay="500"
      v-on:correctAnsChosen="handleCorrectAnswer"
      v-on:wrongAnswer="handleWrongAnswer"
    />

    <audio src="../../assets/sounds/all/Correct.mp3" ref="goodJob"/>
    <audio src="../../assets/sounds/all/GoodTry.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/session2/Page52.mp3" ref="voice"/>
    <div class="page-number" id="page-light">52</div>
  </div>
</template>

<script>
import EmotionPickInstruction from "@/components/instructions/emotionPickInstruction/EmotionPickInstruction";
import FeelingQuestion from "@/components/feelingsQuestion/FeelingsQuestion";

export default {
  name: "Session2Page7",
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
#bg-alt {left:-28vh}
.instruction {
  position: absolute;
  top: 2vh;
  right: .5vh;
  opacity: 1;
}
.question {
  position: absolute;
  top: 35vh;
  right: .5vh;
}
</style>