<template>
  <div class="interactive-container">
    <img src="../../assets/images/session5/128.jpg" alt="green" class="session-background">
    <div class="text-box">
      <p>På billedet er børnene på vej til en ny skole sammen med deres far.</p>
      <p>Hvilke følelser har de mon?</p>
      <p>Tror du deres tanker er ”røde” eller ”grønne”?</p>
    </div>
    <traffic-light-vertical
      correctAns="green"
      class="traffic-light"
      v-on:wrongAnswer="handleWrongAnswer"
      v-on:correctAnswer="handleCorrectAnswer"
    />

    <audio src="../../assets/sounds/all/GoodTry.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/all/GreatWork.mp3" ref="goodJob"/>
    <audio src="../../assets/sounds/session5/Page114.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">114</div>
  </div>
</template>

<script>
import anime from "animejs";
import TrafficLightVertical from "@/components/trafficLights/TrafficLightsVertical";

export default {
  name: 'Session5Page4',
  components: {TrafficLightVertical},
  methods: {
    handleWrongAnswer() {
      setTimeout(() => {this.$refs.goodTry.play()}, 500)
    },
    handleCorrectAnswer() {
      this.$refs.goodTry.pause();
      setTimeout(() => {this.$refs.goodJob.play()}, 500)
    },
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[0], opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 5700)
        .add({targets: text[2], opacity: 1}, 8200)
        .add({targets: '.traffic-light', opacity: 1}, 12600);
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1);
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
  right: 30.5vh;
  top: 2vh;
  opacity: 0;
}
.text-box {
  position: absolute;
  width: 40vh;
  padding: 1.5vh;
  top: .5vh;
  left: .5vh;
  background-color: rgba(255,255,255, 0.9);
  opacity: 0;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: 1vh;
  opacity: 0;
}
.text-box p:last-child { margin-bottom: 0 !important }
</style>