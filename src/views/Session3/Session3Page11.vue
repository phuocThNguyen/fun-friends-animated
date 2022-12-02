<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/2206-resized.jpg" alt="boy-with-bubbles" class="session-background">
    <div class="text-box">
      <h1><strong>Fun Bubble Activities</strong></h1>
      <p>We are now going to play two games.</p>
      <p><strong>1. Bubble breathing</strong></p>
      <p>Take five deep slow breaths, in through
       your nose and out through your mouth. We are
       going to blow bubbles with a straw and a cup
       of water. Blow out any angry, sad, and worried
       feelings into the water. Notice how once we stop
       breathing out, the bubbles go away.</p>
      <p>The same happens with our feelings. We can blow them
       away by doing deep slow calm breathing. Feelings come
       and go, remember all feelings are okay. It is what
       we choose to do with our feelings that counts. Bubble
       breathing is a 'thumbs up' choice.</p>
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
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session3/Session3_Page11.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">81</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session3Page11",
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear'
      });
      animation
        .add({
          targets: '.text-box',
          opacity: 1
        }, 500)
        .add({
          targets: text[0],
          opacity: 1
        }, 738)
        .add({
          targets: text[1],
          opacity: 1
        }, 3376)
        .add({
          targets: text[2],
          opacity: 1
        }, 7318)
        .add({
          targets: text[3],
          opacity: 1,
        }, 10538)
        .add({
          targets: text[4],
          opacity: 1,
        }, 41283)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {
    this.setAudioVolumeLevel(0.4);
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
  font-size: 3.36vh;
  margin-bottom: 1vh;
  opacity: 0;
}
.text-box p {
  font-size: 2.8vh;
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
  background-color: rgba(255, 202, 58,0.9);
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
  background-color: rgba(255, 89, 94,0.9);
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