<template>
  <div class="interactive-container">
    <img src="../../assets/images/session2/13664-resized.jpg" alt="worried" class="session-background" id="alt-pos">
    <emotion-pick-instruction class="instruction"/>
    <feeling-question
      class="question"
      question="Hvad tror du at han føler?"
      :emotes="['angry','sad','worried']"
      :tips="['Vred','Trist ','Bekymret']"
      :ans="['green-tick','red-tick','red-tick']"
      :isSmall="false"
      :delay="500"
      v-on:correctAnsChosen="handleCorrectAnswer"
      v-on:wrongAnswer="handleWrongAnswer"
    />

    <audio src="../../assets/sounds/all/Correct.mp3" ref="goodJob"/>
    <audio src="../../assets/sounds/all/GoodTry.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/session2/Page54.mp3" ref="voice"/>
    <div class="page-number" id="page-light">54</div>
  </div>
</template>

<script>
import EmotionPickInstruction from "@/components/instructions/emotionPickInstruction/EmotionPickInstruction";
import FeelingQuestion from "@/components/feelingsQuestion/FeelingsQuestion";

export default {
  name: "Session2Page9",
  components: {FeelingQuestion, EmotionPickInstruction},
  methods: {
    handleCorrectAnswer() {
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
.instruction {
  position: absolute;
  top: 2vh;
  right: 2%;
}
#alt-pos {
  left: -10%;
}
.question {
  position: absolute;
  top: 30vh;
  left: 38%;
}
</style>