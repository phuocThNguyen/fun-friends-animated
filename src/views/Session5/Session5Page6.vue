<template>
  <div class="interactive-container">
    <img src="../../assets/images/session5/85693.jpg" alt="red" class="session-background">
    <div class="text-box">
      <p>Det er også Nalas første nat med at sove i sin egen seng.</p>
      <p>Hvordan har hun det / hvad føler hun på billedet? Er Nalas tanker ”røde” eller ”grønne”?</p>
    </div>
    <traffic-lights-vertical
      correctAns="green"
      class="traffic-light"
      v-on:wrongAnswer="handleWrongAnswer"
      v-on:correctAnswer="handleCorrectAnswer"
    />

    <audio src="../../assets/sounds/all/GreatWork.mp3" ref="wellDone"/>
    <audio src="../../assets/sounds/all/GoodTry.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/session5/Page116.mp3" ref="voice"/>
    <div class="page-number" id="page-light">116</div>
  </div>
</template>

<script>
import TrafficLightsVertical from "@/components/trafficLights/TrafficLightsVertical";
import anime from "animejs";

export default {
  name: 'Session5Page6',
  components: {TrafficLightsVertical},
  methods: {
    handleWrongAnswer() {
      setTimeout(() => {this.$refs.goodTry.play()}, 500)
    },
    handleCorrectAnswer() {
      this.$refs.goodTry.pause();
      setTimeout(() => {this.$refs.wellDone.play()}, 500)
    },
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[0], opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 4900)
        .add({targets: '.traffic-light', opacity: 1}, 8700);
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
  left: 0.5vh;
  top: 23vh;
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