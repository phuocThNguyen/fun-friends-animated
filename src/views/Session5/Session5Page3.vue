<template>
  <div class="interactive-container">
    <img src="../../assets/images/session5/447.jpg" alt="red" class="session-background">
    <div class="text-box">
      <h1>At begynde i en ny skole</h1>
      <p>Mor følger Sille hen i sin nye skole.
        På dette billede føler hun sig trist og bange.
        Hvorfor tror du at hun føler sig trist og bange?
        Hvad tror du hendes mor føler (hvordan tror du hendes mor har det)?</p>
      <p>Er Silles tanker ”røde” eller ”grønne”?</p>
    </div>

    <traffic-lights-vertical
      correctAns="red"
      class="traffic-light"
      v-on:wrongAnswer="handleWrongAnswer"
      v-on:correctAnswer="handleCorrectAnswer"
    />

    <audio src="../../assets/sounds/all/Correct.mp3" ref="greatWork"/>
    <audio src="../../assets/sounds/all/GoodTry_TryAgain.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/session5/Page113.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">113</div>
  </div>
</template>

<script>
import TrafficLightsVertical from "@/components/trafficLights/TrafficLightsVertical";
import anime from "animejs";

export default {
  name: 'Session5Page3',
  components: {TrafficLightsVertical},
  methods: {
    handleWrongAnswer() {
      setTimeout(() => {this.$refs.goodTry.play()}, 500)
    },
    handleCorrectAnswer() {
      this.$refs.goodTry.pause();
      setTimeout(() => {this.$refs.greatWork.play()}, 500)
    },
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[0], opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 3400)
        .add({targets: text[2], opacity: 1}, 18500)
        .add({targets: '.traffic-light', opacity: 1}, 22100);
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.traffic-light {
  position: absolute;
  right: 30vh;
  top: 22vh;
  opacity: 0;
}
.text-box {
  position: absolute;
  width: calc(0.32 * 133vh);
  padding: 1vh;
  top: 1vh;
  left: 1vh;
  background-color: rgba(255,255,255, 0.9);
  opacity: 0;
}
.text-box h1 { font-size: 4vh; margin-bottom: 2vh }
.text-box p { font-size: 3vh;margin-bottom: 0;opacity: 0; }
.text-box p:nth-child(3) { margin-bottom: 2vh }
</style>