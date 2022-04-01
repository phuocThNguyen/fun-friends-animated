<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Ekstra Aktivitet - Dine støttehold</h1>
      <p id="para">Støttehold er der altid til at hjælpe dig. Se på billederne
        herunder - hvordan kan Ella, Daniel og Mathilde søge hjælp hos deres støttehold?</p>
    </div>
    <div class="image-container">
      <img src="../../assets/images/session11/surfing_child.jpg" alt="surfing" class="images">
      <div class="text" id="para-1">Mor hjælper Ella med at surfe.</div>
    </div>
    <div class="image-container" id="right">
      <img src="../../assets/images/session11/Hugging_Lama_Girl.jpg" alt="hugging-lama" class="images">
      <div class="text" id="para-2">Mathilde giver Alpaka et knus.</div>
    </div>
    <audio src="../../assets/sounds/session11/Session11_Page5.mp3" ref="voice"/>
    <div class="page-number" id="page-light">208</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session11Page5',
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text');
      let animation = anime.timeline({easing: 'linear', duration: 500,})
      animation
        .add({targets: '#para',opacity: 1}, 4200)
        .add({targets: text[0], opacity: 1}, 15500)
        .add({targets: text[1], opacity: 1}, 18700)
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
.image-container {
  position: absolute;
  bottom: 0;
  width: 49.5%;
  height: 70vh;
}
.text {
  position: absolute;
  bottom: 2vh;
  background-color: #00CE7C;
  padding: .5vh;
  color: #ffffff;
  font-size: 4vh;
  font-weight: bold;
  text-align: center;
  opacity: 0;
}
#para-1 {left: 18%;font-size: 4vh;width: 79%;}
#para-2 {right: 18%;font-size: 4vh;}
.images {
  width: 100%;
  height: 100%;
}
#right {
  right: 0;
}
.text-box {
  position: absolute;
  padding: 1vh;
}
.text-box h1 {
  font-size: 5vh;
  margin-bottom: 0;
  font-weight: bold;
}
.text-box p {
  font-size: 4vh;
  opacity: 0;
}
</style>
