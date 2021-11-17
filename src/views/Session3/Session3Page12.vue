<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/1605-resized.jpg" alt="boy-with-bubbles" class="session-background">
    <div class="text-box">
      <h1><strong>2. Bubble blowing</strong></h1>
      <p>Another fun game to blow our worries away
      is getting a Magic Bubble Wand. Breathe in calm, happy feelings
      and blow away your angry, sad and worried feelings.</p>
      <p>Notice how the bubbles float away and fade,
      the same with our feelings. Feelings don't stay
      forever, feelings change. Using a Magic Bubble Wand
      to calm down is a 'thumbs up' choice.</p>
      <p>If you want to, say what you are blowing away
      as your bubbles pop.</p>
      <audio autoplay src="../../assets/sounds/session3/bubbles.mp3">
        Your browser does not support the
        <code>audio</code> element.</audio>
    </div>
    <div class="bubble" id="bubble-1"></div>
    <div class="bubble" id="bubble-2"></div>
    <div class="bubble" id="bubble-3"></div>
    <div class="bubble" id="bubble-4"></div>
    <div class="bubble" id="bubble-5"></div>
    <div class="bubble" id="bubble-6"></div>
    <div class="bubble" id="bubble-7"></div>
    <div class="bubble" id="bubble-8"></div>
    <div class="bubble" id="bubble-9"></div>
    <div class="bubble" id="bubble-10"></div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session3Page12",
  mounted() {
    let text = document.getElementsByClassName('text-box')[0].children;
    let animation = anime.timeline({
      delay: 500,
      duration: 500,
      easing: 'linear'
    });
    animation
      .add({
        targets: '.text-box',
        opacity: 1
      })
      .add({
        targets: text[0],
        opacity: 1
      })
      .add({
        targets: text[1],
        opacity: 1
      })
      .add({
        targets: text[2],
        opacity: 1,
        delay: 3000,
      })
      .add({
        targets: text[3],
        opacity: 1,
        delay: 2000,
      })
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
  font-size: 4vh;
  margin-bottom: 1vh;
  opacity: 0;
}
.text-box p {
  font-size: 3.3vh;
  margin-bottom: 0;
  opacity: 0;
}
.text-box p:last-child {
  display: inline-block;
  text-align: center;
  background-color: #00ce7c;
  width: 90%;
  color: #ffffff;
  font-weight: bold;
  padding: 1.5vh;
  margin-top: 2vh;
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
  background-color: rgba(106, 76, 147,0.9);
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
  background-color: rgba(106, 76, 147,0.9);
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