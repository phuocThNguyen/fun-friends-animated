<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/1605-resized.jpg" alt="boy-with-bubbles" class="session-background">
    <div class="text-box">
      <h1><strong>2. Boblepusteri</strong></h1>
      <p>Endnu en sjov leg der kan bruges til at puste vores bekymringer bort er
        at bruge en Magisk Boble Tryllestav. Disse bobler findes i mange former
        og størrelser. Nogle er formet som stjerner, nogle som kærlighedshjerter
        og nogle er cirkelformede. Du kan indånde rolige, glade følelser gennem
        din næse og puste dine vrede, triste og bekymrede følelser langt væk fra dig,
        indtil de brister og forsvinder.</p>
      <br>
      <p>Læg mærke til hvordan boblerne glider langsomt bort inden de brister med et
        ”pop” - det er det samme der sker med vores følelser. Følelser bliver ikke
        ved i al evighed, følelser forandrer sig. At bruge en Magisk Boble Tryllestav
        til at falde til ro, er et “thumbs up” valg.</p>
    </div>
    <div class="bubble" id="bubble-1"/>
    <div class="bubble" id="bubble-2"/>
    <div class="bubble" id="bubble-3"/>
    <div class="bubble" id="bubble-4"/>
    <div class="bubble" id="bubble-5"/>
    <div class="bubble" id="bubble-6"/>
    <div class="bubble" id="bubble-7"/>
    <div class="bubble" id="bubble-8"/>
    <div class="bubble" id="bubble-9"/>
    <div class="bubble" id="bubble-10"/>
    <audio ref="audio" autoplay src="../../assets/sounds/session3/bubbles.mp3"/>
    <audio src="../../assets/sounds/session3/Page82.mp3" ref="voice"/>
    <div class="page-number" id="page-light">82</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session3Page12",
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[0], opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 2000)
        .add({targets: text[3], opacity: 1}, 29200)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    },
  },
  mounted() {
    this.animateText();
    this.setAudioVolumeLevel(0.4);
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 35%;
  height: 100%;
  background-color: rgba(255,255,255, 0.7);
  padding: 1vh;
  opacity: 0;
}
.text-box h1 {
  font-size: 3vh;
  margin-bottom: 1vh;
  opacity: 0;
}
.text-box p {
  font-size: 2.6vh;
  margin-bottom: 0;
  opacity: 0;
}
.bubble {
  height: 1px;
  width: 1px;
  position: absolute;

  border-radius: 50%;
  transform: translateX(-50%);
}
.bubble:after {
  content: "";
  position: absolute;
  height: 85%;
  width: 85%;
  border-top: 1px solid rgba(255,255,255,0.63);
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0) rotateZ(-45deg);
}
#bubble-1 {
  background-color: rgba(255, 89, 94,0.9);
  bottom: -11vh;
  left: 57%;
  animation: bubble-movement 8s infinite ease-in -0.76s;
  -webkit-animation: bubble-movement 8s infinite ease-in -0.76s;
}
#bubble-2 {
  background-color: rgba(25, 130, 196,0.9);
  bottom: -10vh;
  left: 37%;
  animation: bubble-movement 9s infinite ease-in -0.96s;
  -webkit-animation: bubble-movement 9s infinite ease-in -0.96s;
}
#bubble-3 {
  background-color: rgba(255, 202, 58,0.9);
  bottom: -12vh;
  left: 77%;
  animation: bubble-movement 12s infinite ease-in -1.76s;
  -webkit-animation: bubble-movement 12s infinite ease-in -1.76s;
}
#bubble-4 {
  background-color: rgba(255, 89, 94,0.9);
  bottom: -13vh;
  left: 67%;
  animation: bubble-movement 6s infinite ease-in -3.76s;
  -webkit-animation: bubble-movement 6s infinite ease-in -3.76s;
}
#bubble-5 {
  background-color: rgba(138, 201, 38,0.9);
  bottom: -12vh;
  left: 97%;
  animation: bubble-movement 7s infinite ease-in -5.5s;
  -webkit-animation: bubble-movement 7s infinite ease-in -5.5s;
}
#bubble-6 {
  background-color: rgba(255, 89, 94,0.9);
  bottom: -11vh;
  left: 43%;
  animation: bubble-movement 7.5s infinite ease-in -6s;
  -webkit-animation: bubble-movement 7.5s infinite ease-in -6s;
}
#bubble-7 {
  background-color: rgba(25, 130, 196,0.9);
  bottom: -14vh;
  left: 50%;
  animation: bubble-movement 8.5s infinite ease-in -3.3s;
  -webkit-animation: bubble-movement 8.5s infinite ease-in -3.3s;
}
#bubble-8 {
  background-color: rgba(255, 202, 58,0.9);
  bottom: -10vh;
  left: 88%;
  animation: bubble-movement 5s infinite ease-in -14.2s;
  -webkit-animation: bubble-movement 5s infinite ease-in -14.2s;
}
#bubble-9 {
  background-color: rgba(138, 201, 38,0.9);
  bottom: -18vh;
  left: 75%;
  animation: bubble-movement 10s infinite ease-in -6s;
  -webkit-animation: bubble-movement 10s infinite ease-in -6s;
}
#bubble-10 {
  background-color: rgba(255, 202, 58,0.9);
  bottom: -16vh;
  left: 47%;
  animation: bubble-movement 5.5s infinite ease-in -17.76s;
  -webkit-animation: bubble-movement 5.5s infinite ease-in -17.76s;
}
@keyframes bubble-movement {
  0% {
    transform: translate3d(-50%, 0, 0);
    height: 1px;
    width: 1px;
  }
  100% {
    transform: translate3d(-50%, -110vh, 0);
    height: 10vh;
    width: 10vh;
  }
}
@-webkit-keyframes bubble-movement {
  0% {
    transform: translate3d(-50%, 0, 0);
    height: 1px;
    width: 1px;
  }
  100% {
    transform: translate3d(-50%, -110vh, 0);
    height: 10vh;
    width: 10vh;
  }
}
</style>