<template>
  <div class="interactive-container">
    <img src="../../assets/images/session10/Dogs&People-swimming.jpg" alt="kids-and-dogs" class="session-background">
    <div class="text-box">
      <h1>Ekstra aktivitet - Nogen at se op til som kan hjælpe os</h1>
      <p class="text"><span>Luna, Jon og Gry øver sig på at hoppe over bølgerne
        og lærer hvordan man ”body surfer” ved stranden på Orø.</span>
        <span> Hundene Karla og Otto er også helt vilde med at lege i vandet.</span>
        <span> Karla og Otto viser børnene hvordan man kan have det sjovt og
          sikkert imens man nyder bølgerne.</span></p>
    </div>
    <div class="green-box">
      <strong>Vi elsker at<br>hoppe i bølgerne.</strong>
    </div>
    <audio src="../../assets/sounds/session10/Session10_Page12.mp3" ref="voice"/>
    <div class="page-number" id="page-light">198</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session10Page12',
  methods: {
    animateText() {
      let text = document.querySelector('.text').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: text[0],color: '#000'}, 8000)
        .add({targets: text[1],color: '#000'}, 15900)
        .add({targets: text[2],color: '#000'}, 21200)
        .add({targets: '.green-box',opacity: 1}, 28500)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.green-box {
  position: absolute;
  bottom: 1vh;
  left: 9%;
  background-color: #00CE7C;
  color: #ffffff;
  width: 36%;
  padding: 1vh;
  text-align: center;
  font-size: 4.5vh;
  opacity: 0;
}
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;
  padding: 1vh;
}
.text-box h1 {
  font-size: 5vh;
  margin-bottom: 0;
}
.text-box p {
  font-size: 3.5vh;
  margin-bottom: 0;
  color: #ffffff;
}
.session-background {
  top: 10vh;
}
</style>
