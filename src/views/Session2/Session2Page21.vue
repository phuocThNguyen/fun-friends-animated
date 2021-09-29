<template>
  <div class="interactive-container cloud-background">
    <div class="text-box">
      <h1>Additional Activity - Feelings Thermometer</h1>
      <p>We all have feelings that vary from weak to strong, about different situations.</p>
      <p>Sometimes we may feel happy and relaxed. Other times we may feel angry and intensive.
        <br><strong>All feelings are okay.</strong></p>
    </div>
    <div class="intensify">
      <p>Strong Feeling</p>
      <p>Weak Feeling</p>
    </div>
    <emotion-thermometer class="thermometer-container"/>
    <div class="emotion-descriptions">
      <p>Angry, Frustrated</p>
      <p>Crying, Upset</p>
      <p>Worried, Uncomfortable</p>
      <p>Ok, Neutral</p>
      <p>Happy, Positive, Optimistic</p>
    </div>
    <thermo-instruction class="thermo-instruction"/>
  </div>
</template>

<script>
import emotionThermometer from "@/components/EmotionThermometer/emotionThermometer";
import ThermoInstruction from "@/components/instructions/thermoInstruction/ThermoInstruction";
export default {
  name: "Session2Page21",
  components: {
    ThermoInstruction,
    emotionThermometer
  }
}
</script>

<style scoped>
.thermo-instruction {
  position: absolute;
  right: 2vw;
  top: 25vh;
}
.intensify {
  position: absolute;
  height: 63vh;
  top: 24vh;
  left: 43vw;
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
  top: 30vh;
  left: 20vw;
  background: rgb(0,212,255);
  background: linear-gradient(0deg, rgba(0,212,255,1) 0%, rgba(255,160,0,1) 85%);
}
.emotion-descriptions p {
  margin-bottom: 0;
  border: 3px solid #000000;
  border-bottom: none;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 2vw;
  color: #ffffff;
}
.emotion-descriptions p:nth-child(5) {
  border-bottom: 3px solid #000000;
}
.thermometer-container {
  position: absolute;
  top: 30vh;
  left: 50vw;
}
.cloud-background {
  background-color: rgb(200, 229, 243);
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