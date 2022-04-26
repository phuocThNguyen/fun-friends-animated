<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/21944-resized.jpg" alt="friends" class="session-background">
    <emotion-pick-instruction class="instruction"/>
    <div class="content-container" id="girl">
      <h1>Hvad tror du at hun føler?</h1>
      <div class="emotes-container">
        <emote-angry class="incorrect"/>
        <emote-calm/>
      </div>
      <div class="tips-container">
        <p class="incorrect">Sur, Bekymret</p>
        <p>Glad, Afslappe</p>
      </div>
      <div class="answer-container">
        <svg class="big-tick" id="red-tick-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
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
        <svg class="big-tick" id="green-tick-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
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
      </div>
      <div class="masks-container">
        <div id="incorrect-1" class="incorrect" @click="answerHandler"></div>
        <div id="correct-1" @click="answerHandler"></div>
      </div>
    </div>
    <div class="content-container" id="dog">
      <h1>Hvad tror du at han føler?</h1>
      <div class="emotes-container">
        <emote-angry class="incorrect-2"/>
        <emote-calm/>
      </div>
      <div class="tips-container">
        <p class="incorrect-2">Sur, Bekymret</p>
        <p>Glad, Afslappe</p>
      </div>
      <div class="answer-container">
        <svg class="big-tick" id="red-tick-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
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
        <svg class="big-tick" id="green-tick-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
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
      </div>
      <div class="masks-container">
        <div id="incorrect-2" class="incorrect-2" @click="answerHandler"></div>
        <div id="correct-2" @click="answerHandler"></div>
      </div>
    </div>

    <audio ref="correct" src="../../assets/sounds/all/correct-ans.mp3"/>
    <audio ref="wrong" src="../../assets/sounds/all/wrong-ans.mp3"/>
    <audio ref="celebrate" src="../../assets/sounds/all/kids-cheering.mp3"/>
    <audio src="../../assets/sounds/all/GreatWork.mp3" ref="awesome"/>
    <audio src="../../assets/sounds/all/GoodTry.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/session3/Page76.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">76</div>
  </div>
</template>

<script>
import anime from "animejs";
import EmoteCalm from "@/components/feelingsQuestion/emotes/EmoteCalm";
import EmoteAngry from "@/components/feelingsQuestion/emotes/EmoteAngry";
import EmotionPickInstruction from "@/components/instructions/emotionPickInstruction/EmotionPickInstruction";

export default {
  name: "Session3Page6",
  components: {EmotionPickInstruction, EmoteAngry, EmoteCalm},
  data() {return {correctAns: []}},
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
      setTimeout(() => {this.$refs.goodTry.play()}, 500)
    },
    animateGreenTick(target) {
      anime({
        targets: target,
        easing: 'linear',
        opacity: 1,
        duration: 500
      })
      this.$refs.goodTry.pause();
      this.$refs.correct.play();
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
          setTimeout(() => {this.$refs.awesome.play()}, 500)
        }
      }
    },
    answerHandler(e) {
      let id = e.target.id;
      switch (id) {
        case 'incorrect-1':
          this.animateRedTick('#red-tick-top');
          break;
        case 'incorrect-2':
          this.animateRedTick('#red-tick-bottom');
          break;
        case 'correct-1':
          this.animateGreenTick('#green-tick-top');
          this.hideElements('.incorrect');
          this.hideElements('#correct-1')
          this.checkComplete(id);
          break;
        case 'correct-2':
          this.animateGreenTick('#green-tick-bottom');
          this.hideElements('.incorrect-2');
          this.hideElements('#correct-2')
          this.checkComplete(id);
          break;
      }
    },
    animateText() {
      let animation = anime.timeline({duration: 500, easing: 'linear',})
      animation
        .add({targets: '#girl', opacity: 1}, 500)
        .add({targets: '#dog', opacity: 1}, 8700)
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
.instruction {
  position: absolute;
  top: 2vh;
  right: 2%;
}
#girl {
  top: 5vh;
  left: 2%;
}
#dog {
  top: 45vh;
  left: 2%;
}
.masks-container {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 1.4vh;
  top: 9.6vh;
}
.masks-container div {
  width: 14vh;
  height: 14vh;
}
.tips-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.tips-container p {
  color: #ffffff;
  font-weight: bold;
  font-size: 3.5vh;
  margin-bottom: 0;
  width: 25vh;
  text-align: center;
}
.content-container {
  position: absolute;
  background-color: rgba(0, 206, 124, 0.75);
  border-radius: 30px;
  padding-top: 1vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  opacity: 0;
}
.content-container h1 {
  text-align: center;
  font-size: 4.9vh;
  color: #ffffff;
}
.emotes-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 1.4vh;
}
.answer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin: 1.4vh;
}
.big-tick {
  width: 7vh;
  height: auto;
  opacity: 0;
}
</style>