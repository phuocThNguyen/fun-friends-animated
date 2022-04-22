<template>
  <div class="interactive-container">
    <img src="../../assets/images/session5/86.jpg" alt="red" class="session-background">
    <div class="text-box">
      <p><strong>At sove på sit eget værelse</strong></p>
      <p>Det er Mathildes første nat alene i sin egen seng.</p>
      <p>Hvordan har hun det på dette billede (hvad føler hun)?
        Har Mathilde ”røde” eller ”grønne” tanker?</p>
    </div>
    <traffic-lights-vertical
      correctAns="red"
      class="traffic-light"
      v-on:wrongAnswer="handleWrongAnswer"
      v-on:correctAnswer="handleCorrectAnswer"
    />

    <audio src="../../assets/sounds/all/GoodTry_TryAgain.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/all/Correct.mp3" ref="veryGood"/>
    <audio src="../../assets/sounds/session5/Page115.mp3" ref="voice"/>
    <div class="page-number" id="page-light">115</div>
  </div>
</template>

<script>
import TrafficLightsVertical from "@/components/trafficLights/TrafficLightsVertical";
import anime from "animejs";
export default {
  name: 'Session5Page5',
  components: {TrafficLightsVertical},
  methods: {
    handleWrongAnswer() {
      setTimeout(() => {this.$refs.goodTry.play()}, 500)
    },
    handleCorrectAnswer() {
      this.$refs.goodTry.pause();
      setTimeout(() => {this.$refs.veryGood.play()}, 500)
    },
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[0], opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 3100)
        .add({targets: text[2], opacity: 1}, 8000)
        .add({targets: '.traffic-light', opacity: 1}, 16400)
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
  right: 38.5vh;
  top: 35vh;
  opacity: 0;
}
.text-box {
  position: absolute;
  width: calc(0.98 * 133vh);
  padding: 1.5vh;
  top: 1vh;
  left: calc(0.01 * 133vh);
  background-color: rgba(255,255,255, 0.9);
  opacity: 0;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: 0;
  opacity: 0;
}
</style>