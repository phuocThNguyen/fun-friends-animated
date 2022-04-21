<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Ekstra aktivitet - "Gæt en følelse"</h1>
      <p>Ella, Daniel og Mathilde oplever / mærker forskellige følelser
        i forskellige situationer. Alle følelser er OK. Det er det vi vælger
        at gøre med vores følelser der er det vigtige. Vi kan træffe “thumbs down”
        valg og “thumbs up” valg. Hvilke følelser tror du børnene oplever? Hvad får
        dig til at føle dig sådan?</p>
    </div>
    <img src="../../assets/images/session2/Happy_Boy-resized.jpg" alt="happy" class="image" id="left">
    <img src="../../assets/images/session2/Worried_Girl-resized.jpg" alt="worried" class="image" id="right">

    <div class="content-container" id="content-left">
      <h1>Hvad tror du at han føler?</h1>
      <div class="emotes-container">
        <emote-tear class="emotes incorrect"/>
        <emote-happy class="emotes"/>
        <emote-worried class="emotes incorrect"/>
      </div>
      <div class="tips-container">
        <p class="incorrect" id="tip-1-left">Trist</p>
        <p id="tip-2-left">Glad</p>
        <p class="incorrect" id="tip-3-left">Bekymret</p>
      </div>
      <div class="answer-container">
        <svg class="small-tick" id="red-tick-1-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
          <g class="cls-1-red-mark">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path class="cls-2-red-mark" d="M47.86,89.76H46.12A43.64,43.64,0,0,1,2.48,46.12h0A43.64,43.64,0,0,1,46.12,2.48h1.74A43.64,43.64,0,0,1,91.5,46.12h0A43.64,43.64,0,0,1,47.86,89.76Z" />
                <path class="cls-2-red-mark" d="M47.86,89.76H46.12A43.64,43.64,0,0,1,2.48,46.12h0A43.64,43.64,0,0,1,46.12,2.48h1.74A43.64,43.64,0,0,1,91.5,46.12h0A43.64,43.64,0,0,1,47.86,89.76Z" />
                <path class="cls-2-red-mark" d="M47.86,92.25H46.12A46.13,46.13,0,0,1,46.12,0h1.74a46.13,46.13,0,0,1,0,92.25ZM46.12,5a41.16,41.16,0,0,0,0,82.31h1.74A41.16,41.16,0,0,0,47.86,5Z" />
                <path class="cls-3-red-mark" d="M47.86,13a33.17,33.17,0,0,1,0,66.34H46.12a33.17,33.17,0,0,1,0-66.34h1.74m0-1.54H46.12a34.72,34.72,0,1,0,0,69.43h1.74a34.72,34.72,0,1,0,0-69.43Z" />
                <polygon class="cls-4-red-mark" points="53.74 47.31 65.46 35.58 58.8 28.91 47.07 40.64 35.35 28.91 28.68 35.58 40.4 47.31 28.68 59.03 35.35 65.7 47.07 53.98 58.8 65.7 65.47 59.03 53.74 47.31" />
              </g>
            </g>
          </g>
        </svg>
        <svg class="small-tick" id="green-tick-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
          <g class="cls-1-green-mark">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect class="cls-2-green-mark" x="2.48" y="2.48" width="89.01" height="87.28" rx="43.64" />
                <rect class="cls-2-green-mark" x="2.48" y="2.48" width="89.01" height="87.28" rx="43.64" />
                <path class="cls-2-green-mark" d="M47.86,92.25H46.12A46.13,46.13,0,0,1,46.12,0h1.74a46.13,46.13,0,0,1,0,92.25ZM46.12,5a41.16,41.16,0,0,0,0,82.31h1.74A41.16,41.16,0,0,0,47.86,5Z" />
                <path class="cls-4-green-mark" d="M47.86,13a33.17,33.17,0,0,1,0,66.34H46.12a33.17,33.17,0,0,1,0-66.34h1.74m0-1.54H46.12a34.72,34.72,0,1,0,0,69.43h1.74a34.72,34.72,0,1,0,0-69.43Z" />
                <polygon class="cls-5-green-mark" points="65.83 28.23 41.58 52.48 31.98 42.88 25.31 49.55 41.58 65.82 72.5 34.9 65.83 28.23" />
              </g>
            </g>
          </g>
        </svg>
        <svg class="small-tick" id="red-tick-2-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
          <g class="cls-1-red-mark">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path class="cls-2-red-mark" d="M47.86,89.76H46.12A43.64,43.64,0,0,1,2.48,46.12h0A43.64,43.64,0,0,1,46.12,2.48h1.74A43.64,43.64,0,0,1,91.5,46.12h0A43.64,43.64,0,0,1,47.86,89.76Z" />
                <path class="cls-2-red-mark" d="M47.86,89.76H46.12A43.64,43.64,0,0,1,2.48,46.12h0A43.64,43.64,0,0,1,46.12,2.48h1.74A43.64,43.64,0,0,1,91.5,46.12h0A43.64,43.64,0,0,1,47.86,89.76Z" />
                <path class="cls-2-red-mark" d="M47.86,92.25H46.12A46.13,46.13,0,0,1,46.12,0h1.74a46.13,46.13,0,0,1,0,92.25ZM46.12,5a41.16,41.16,0,0,0,0,82.31h1.74A41.16,41.16,0,0,0,47.86,5Z" />
                <path class="cls-3-red-mark" d="M47.86,13a33.17,33.17,0,0,1,0,66.34H46.12a33.17,33.17,0,0,1,0-66.34h1.74m0-1.54H46.12a34.72,34.72,0,1,0,0,69.43h1.74a34.72,34.72,0,1,0,0-69.43Z" />
                <polygon class="cls-4-red-mark" points="53.74 47.31 65.46 35.58 58.8 28.91 47.07 40.64 35.35 28.91 28.68 35.58 40.4 47.31 28.68 59.03 35.35 65.7 47.07 53.98 58.8 65.7 65.47 59.03 53.74 47.31" />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="masks-container">
        <div id="incorrect-1" class="incorrect" @click="answerHandler"></div>
        <div id="correct-1" @click="answerHandler"></div>
        <div id="incorrect-2" class="incorrect" @click="answerHandler"></div>
      </div>
    </div>
    <div class="content-container" id="content-right">
      <h1>Hvad tror du at hun føler?</h1>
      <div class="emotes-container">
        <emote-worried class="emotes"/>
        <emote-angry class="emotes incorrect-2"/>
        <emote-cool class="emotes incorrect-2"/>
      </div>
      <div class="tips-container">
        <p id="tip-1-right">Bekymret</p>
        <p class="incorrect-2" id="tip-2-right">Vred</p>
        <p class="incorrect-2" id="tip-3-right">Afslappet</p>
      </div>
      <div class="answer-container">
        <svg class="small-tick" id="green-tick-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
          <g class="cls-1-green-mark">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect class="cls-2-green-mark" x="2.48" y="2.48" width="89.01" height="87.28" rx="43.64" />
                <rect class="cls-2-green-mark" x="2.48" y="2.48" width="89.01" height="87.28" rx="43.64" />
                <path class="cls-2-green-mark" d="M47.86,92.25H46.12A46.13,46.13,0,0,1,46.12,0h1.74a46.13,46.13,0,0,1,0,92.25ZM46.12,5a41.16,41.16,0,0,0,0,82.31h1.74A41.16,41.16,0,0,0,47.86,5Z" />
                <path class="cls-4-green-mark" d="M47.86,13a33.17,33.17,0,0,1,0,66.34H46.12a33.17,33.17,0,0,1,0-66.34h1.74m0-1.54H46.12a34.72,34.72,0,1,0,0,69.43h1.74a34.72,34.72,0,1,0,0-69.43Z" />
                <polygon class="cls-5-green-mark" points="65.83 28.23 41.58 52.48 31.98 42.88 25.31 49.55 41.58 65.82 72.5 34.9 65.83 28.23" />
              </g>
            </g>
          </g>
        </svg>
        <svg class="small-tick" id="red-tick-1-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
          <g class="cls-1-red-mark">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path class="cls-2-red-mark" d="M47.86,89.76H46.12A43.64,43.64,0,0,1,2.48,46.12h0A43.64,43.64,0,0,1,46.12,2.48h1.74A43.64,43.64,0,0,1,91.5,46.12h0A43.64,43.64,0,0,1,47.86,89.76Z" />
                <path class="cls-2-red-mark" d="M47.86,89.76H46.12A43.64,43.64,0,0,1,2.48,46.12h0A43.64,43.64,0,0,1,46.12,2.48h1.74A43.64,43.64,0,0,1,91.5,46.12h0A43.64,43.64,0,0,1,47.86,89.76Z" />
                <path class="cls-2-red-mark" d="M47.86,92.25H46.12A46.13,46.13,0,0,1,46.12,0h1.74a46.13,46.13,0,0,1,0,92.25ZM46.12,5a41.16,41.16,0,0,0,0,82.31h1.74A41.16,41.16,0,0,0,47.86,5Z" />
                <path class="cls-3-red-mark" d="M47.86,13a33.17,33.17,0,0,1,0,66.34H46.12a33.17,33.17,0,0,1,0-66.34h1.74m0-1.54H46.12a34.72,34.72,0,1,0,0,69.43h1.74a34.72,34.72,0,1,0,0-69.43Z" />
                <polygon class="cls-4-red-mark" points="53.74 47.31 65.46 35.58 58.8 28.91 47.07 40.64 35.35 28.91 28.68 35.58 40.4 47.31 28.68 59.03 35.35 65.7 47.07 53.98 58.8 65.7 65.47 59.03 53.74 47.31" />
              </g>
            </g>
          </g>
        </svg>
        <svg class="small-tick" id="red-tick-2-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
          <g class="cls-1-red-mark">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path class="cls-2-red-mark" d="M47.86,89.76H46.12A43.64,43.64,0,0,1,2.48,46.12h0A43.64,43.64,0,0,1,46.12,2.48h1.74A43.64,43.64,0,0,1,91.5,46.12h0A43.64,43.64,0,0,1,47.86,89.76Z" />
                <path class="cls-2-red-mark" d="M47.86,89.76H46.12A43.64,43.64,0,0,1,2.48,46.12h0A43.64,43.64,0,0,1,46.12,2.48h1.74A43.64,43.64,0,0,1,91.5,46.12h0A43.64,43.64,0,0,1,47.86,89.76Z" />
                <path class="cls-2-red-mark" d="M47.86,92.25H46.12A46.13,46.13,0,0,1,46.12,0h1.74a46.13,46.13,0,0,1,0,92.25ZM46.12,5a41.16,41.16,0,0,0,0,82.31h1.74A41.16,41.16,0,0,0,47.86,5Z" />
                <path class="cls-3-red-mark" d="M47.86,13a33.17,33.17,0,0,1,0,66.34H46.12a33.17,33.17,0,0,1,0-66.34h1.74m0-1.54H46.12a34.72,34.72,0,1,0,0,69.43h1.74a34.72,34.72,0,1,0,0-69.43Z" />
                <polygon class="cls-4-red-mark" points="53.74 47.31 65.46 35.58 58.8 28.91 47.07 40.64 35.35 28.91 28.68 35.58 40.4 47.31 28.68 59.03 35.35 65.7 47.07 53.98 58.8 65.7 65.47 59.03 53.74 47.31" />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="masks-container">
        <div id="correct-2" @click="answerHandler"></div>
        <div id="incorrect-3" class="incorrect-2" @click="answerHandler"></div>
        <div id="incorrect-4" class="incorrect-2" @click="answerHandler"></div>
      </div>
    </div>

    <audio ref="correct" src="../../assets/sounds/all/correct-ans.mp3"/>
    <audio ref="wrong" src="../../assets/sounds/all/wrong-ans.mp3"/>
    <audio ref="celebrate" src="../../assets/sounds/all/kids-cheering.mp3"/>
    <audio src="../../assets/sounds/all/Correct.mp3" ref="goodJob"/>
    <audio src="../../assets/sounds/all/GoodTry.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/session2/Page64.mp3" ref="voice"/>
    <div class="page-number" id="page-light">64</div>
  </div>
</template>

<script>
import anime from "animejs";
import EmoteTear from "@/components/feelingsQuestion/emotes/EmoteTear";
import EmoteHappy from "@/components/feelingsQuestion/emotes/EmoteHappy";
import EmoteWorried from "@/components/feelingsQuestion/emotes/EmoteWorried";
import EmoteAngry from "@/components/feelingsQuestion/emotes/EmoteAngry";
import EmoteCool from "@/components/feelingsQuestion/emotes/EmoteCool";

export default {
  name: "Session2Page18",
  components: {EmoteCool, EmoteAngry, EmoteWorried, EmoteHappy, EmoteTear},
  data() {
    return {
      correctAns: []
    }
  },
  methods: {
    animateRedTick(target) {
      anime({
        targets: target,
        easing: 'linear',
        opacity: [
          {value: 1, duration: 200},
          {value: 0, duration: 100},
          {value: 1, duration: 200},
          {value: 0, duration: 100, delay: 500},
        ]
      })
      this.$refs.wrong.play();
      setTimeout(() => {this.$refs.goodTry.play()}, 100);
    },
    animateGreenTick(target) {
      anime({
        targets: target,
        easing: 'linear',
        opacity: 1,
        duration: 500
      })
      this.$refs.wrong.pause();
      this.$refs.correct.play();
      setTimeout(() => {this.$refs.goodJob.play()}, 100);
    },
    hideElements(className) {
      let elements = document.querySelectorAll(className);
      elements.forEach(element => {
        element.style.visibility = 'hidden';
      })
    },
    checkComplete(arg) {
      if (!this.correctAns.includes(arg)) {
        this.correctAns.push(arg);
        if (this.correctAns.length === 2) {
          this.$refs.celebrate.play();
        }
      }
    },
    answerHandler(e) {
      let id = e.target.id;
      switch (id) {
        case 'incorrect-1':
          this.animateRedTick('#red-tick-1-left');
          break;
        case 'incorrect-2':
          this.animateRedTick('#red-tick-2-left');
          break;
        case 'incorrect-3':
          this.animateRedTick('#red-tick-1-right');
          break;
        case 'incorrect-4':
          this.animateRedTick('#red-tick-2-right');
          break;
        case 'correct-1':
          this.animateGreenTick('#green-tick-left');
          this.hideElements('.incorrect');
          this.hideElements('#correct-1');
          this.checkComplete(id);
          break;
        case 'correct-2':
          this.animateGreenTick('#green-tick-right');
          this.hideElements('.incorrect-2');
          this.hideElements('#correct-2');
          this.checkComplete(id);
          break;
      }
    },
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: text[0], opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 4400)
        .add({targets: text[1], opacity: 0, duration: 1}, 30300)
        .add({targets: '#content-left', opacity: 1}, 31700)
        .add({targets: '#content-right', opacity: 1}, 40400)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  },
}
</script>

<style scoped>
@media screen and (max-width: 930px) {
  .content-container {
    border-radius: 8px !important;
  }
}
.image {
  position: absolute;
  width: 58vh;
  height: 60vh;
  top: 0;
}
#left { left: 3.5%; }
#right { right: 3.5%; }

.text-box {
  position: absolute;
  width: calc(0.86*133vh);
  bottom: 8%;
  left: calc(0.08*133vh);
  padding: 0 1vh;
}
.text-box h1 {
  font-size: 4vh;
  margin: 1vh 0 0 0;
  opacity: 0;
  text-align: center;
}
.text-box p {
  font-size: 2.8vh;
  opacity: 0;
}
.masks-container {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 0.7vh;
  top: 5.4vh;
}
.masks-container div {
  width: 7vh;
  height: 7vh;
}
.tips-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #ffffff;
  padding: 0 0.7vh;
  text-align: center;
}
.tips-container p {
  font-size: 3vh;
  font-weight: bold;
  margin-bottom: 0;
  display: inline-block;
  width: 13vh;
}
.content-container {
  position: absolute;
  background-color: rgba(0, 206, 124, 0.9);
  border-radius: 30px;
  padding-top: 1vh;
  width: 34%;
  bottom: 1vh;
  display: flex;
  flex-direction: column;
  opacity: 0;
}
.content-container h1 {
  text-align: center;
  font-size: 3.5vh;
  color: #ffffff;
}
.emotes-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 .7vw;
}
.emotes {
  height: auto;
  width: 7vh;
}
.answer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin: 0 .7vh .5vh .7vh;
}
.small-tick {
  width: 5vh;
  height: auto;
  opacity: 0;
}
#content-left { left: 9%; }
#content-right { right: 9%; }
</style>