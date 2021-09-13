<template>
  <div class="interactive-container cloud-background">
    <div class="text-box">
      <h1>Additional Activity - Feelings Thermometer</h1>
      <p>We all have feelings that vary from weak to strong, about different situations.</p>
      <p>Sometimes we may feel happy and relaxed. Other times we may feel angry and intensive.
        <strong>All feelings are okay.</strong></p>
      <p>(Instruction: Tap on thermometer bars to changes the feelings.)</p>
    </div>
    <div class="intensify">
      <p>Strong</p>
      <p>Weak</p>
    </div>
    <emotion-thermometer class="thermometer"/>
    <div class="emotion-descriptions">
      <p>Angry, Frustrated</p>
      <p>Crying, Upset</p>
      <p>Worried, Uncomfortable</p>
      <p>Ok, Neutral</p>
      <p>Happy, Positive, Optimistic</p>
    </div>

  </div>
</template>

<script>
import emotionThermometer from "@/components/EmotionThermometer/emotionThermometer";
export default {
  name: "Session2Page21",
  components: {
    emotionThermometer
  }
}
</script>

<style scoped>
.intensify {
  position: absolute;
  height: 63vh;
  top: 29vh;
  left: 49vw;
  font-size: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.emotion-descriptions {
  position: absolute;
  height: 50vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 35vh;
  left: 20vw;
}
.emotion-descriptions p {
  margin-bottom: 0;
  display: block;
  border: 3px solid #000000;
  border-bottom: none;
  width: 100%;
  height: 10vh;
  line-height: 10vh;
  text-align: center;
  font-size: 1.5vw;
}
.emotion-descriptions p:nth-child(1) {
  background-color: #FF000090;
}
.emotion-descriptions p:nth-child(2) {
  background-color: #F8A41B90;
}
.emotion-descriptions p:nth-child(3) {
  background-color: #FAE93E90;
}
.emotion-descriptions p:nth-child(4) {
  background-color: #04CA1F90;
}
.emotion-descriptions p:nth-child(5) {
  background-color: #23C4FA90;
  border-bottom: 3px solid #000000;
}
.thermometer {
  position: absolute;
  top: 35vh;
  left: 50vw;
}
.cloud-background {
  background-color: rgba(149, 213, 238, 0.6);
}
.text-box {
  position: absolute;
  width: 80vw;
  top: 2vh;
  left: 5vw;
  padding: 1vw;
}
.text-box h1 {
  font-size: 3vw;
  margin-bottom: 2vh;
}
.text-box p {
  font-size: 1.8vw;
}
</style>