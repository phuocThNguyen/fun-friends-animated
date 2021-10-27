<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/Shaunti_Dog-resized.jpg" alt="body-clues" class="session-background">
    <div class="text-box">
      <p>Shaunti the dog is learning to swim in the
       new creek, she is a bit worried.</p>
      <p>What might be her body clues? Connect the
       clues to her body.</p>
    </div>
    <div class="clues-sources">
      <draggable class="clues" v-model="ear" group="ear">
        <div class="clue" v-for="(clue, index) in ear" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="tail" group="tail">
        <div class="clue" v-for="(clue, index) in tail" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="head" group="head">
        <div class="clue" v-for="(clue, index) in head" :key="index">{{clue}}</div>
      </draggable>
    </div>

    <draggable class="answers" @change="handleChange('ear')" id="ear" v-model="earAns" group="ear">
      <div class="clue" v-for="(clue, index) in earAns" v-bind:id="clue" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('tail')" id="tail" v-model="tailAns" group="tail">
      <div class="clue" v-for="(clue, index) in tailAns" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('head')" id="head" v-model="headAns" group="head">
      <div class="clue" v-for="(clue, index) in headAns" :key="index">{{clue}}</div>
    </draggable>

    <green-tick class="small-tick" id="green-tick-1"/>
    <green-tick class="small-tick" id="green-tick-2"/>
    <green-tick class="small-tick" id="green-tick-3"/>

    <!--  Well done  -->
    <svg class="reward" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.7 198.83">
      <g class="cls-1">
        <g id="Layer_2" data-name="Layer 2">
          <g id="OBJECTS">
            <path class="cls-2"
                  d="M231.63,103a10,10,0,0,0-5.32-7.81l-6.59-3.47a10.06,10.06,0,0,0-4-14.27l2.06-5.52a10.06,10.06,0,0,0-14.75-12.05l-20.4,12.76a10,10,0,0,0-8.5-4.68,9.93,9.93,0,0,0-2.49.31l-4.62-11.68a10,10,0,0,0-9.34-6.35c-.21,0-.43,0-.64,0a9.79,9.79,0,0,0-2.87.61,70.62,70.62,0,0,0-10.36-12.5,10.65,10.65,0,0,0,0-5.23A10.81,10.81,0,0,0,133.35,25h0a10.65,10.65,0,0,0-4.47,1,8.05,8.05,0,0,1-1.76.45,71,71,0,0,0-32.28-7.79h-1a20.47,20.47,0,0,0-12.15-3.94h0a21.74,21.74,0,0,0-8.15,1.59A22.16,22.16,0,0,0,62.34,26.6a70.91,70.91,0,0,0-34.9,41.28l-.06.2s0,.1-.05.15q-.3,1-.57,1.92l-.1.35,0,.11c-.28,1-.54,2-.8,3.17l-.06.25c-.08.33-.15.67-.22,1-.11.5-.21,1-.3,1.51v0c0,.17-.07.33-.1.5l-.09.59c-.15.89-.28,1.77-.39,2.61,0,.27-.07.54-.11.82-.1.88-.19,1.79-.27,2.7,0,.21,0,.42,0,.62a10.21,10.21,0,0,0-1.56.29,11.59,11.59,0,0,0-3.88,1.83l-.3.22-14,10.87a11.61,11.61,0,0,0-2.35,15.86,11.41,11.41,0,0,0,.29,4.14,11.61,11.61,0,0,0,6.24,7.61,11.51,11.51,0,0,0,.52,8.82c.11.23.23.46.36.68l4.07,7h0a.35.35,0,0,0,0,.08,11.45,11.45,0,0,0,3.48,3.71,12,12,0,0,0,.8,2,9.78,9.78,0,0,0,1.34,2l5.15,6.06,0,.05a11.4,11.4,0,0,0,3.84,2.93,10.34,10.34,0,0,0,.94,1.46A9.57,9.57,0,0,0,31,161.9L37.08,167l.07.05,0,0a11.47,11.47,0,0,0,7.25,2.59,11.17,11.17,0,0,0,2.17-.22,11.49,11.49,0,0,0,6.64,7.32L56.31,178a20.1,20.1,0,0,0,13.55.64,19.72,19.72,0,0,0,12.38,6.71,20.71,20.71,0,0,0,2.62.17,19.66,19.66,0,0,0,8.7-2,11.56,11.56,0,0,0,14.31,0,11.61,11.61,0,0,0,4.51.91,11.09,11.09,0,0,0,1.52-.1h0l.16,0a8.54,8.54,0,0,0,1.42-.3,11.71,11.71,0,0,0,1.75-.65,11.58,11.58,0,0,0,2.29-1.42,11.72,11.72,0,0,0,1.33.09,11.56,11.56,0,0,0,3.2-.45c.24-.07.47-.14.7-.23l7.68-2.82h0a11.52,11.52,0,0,0,7.14-13.82,30.68,30.68,0,0,0,14.77,3.81,30.17,30.17,0,0,0,4.34-.31A91.09,91.09,0,0,0,177,163.32l.76-.28c1.19-.32,3.81-1.29,13-6,11.41-5.8,12.45-6.9,13.55-8.06a13.63,13.63,0,0,0,3.79-9.45,12.72,12.72,0,0,0,2.9-4.29c2.77-2.08,3.68-2.72,3.94-2.9a10.45,10.45,0,0,0,5-11.13,11.58,11.58,0,0,0-.64-2.06l8.79-7.41A10.07,10.07,0,0,0,231.63,103Z" />
            <path class="cls-3"
                  d="M234.65,100a10.09,10.09,0,0,0-5.32-7.82l-6.6-3.46a10,10,0,0,0-4-14.28l2.07-5.52a10.05,10.05,0,0,0-14.75-12l-20.4,12.75a10.05,10.05,0,0,0-8.5-4.68,10.42,10.42,0,0,0-2.49.31l-4.62-11.67a10.06,10.06,0,0,0-9.35-6.36l-.63,0a9.93,9.93,0,0,0-2.88.61,69.76,69.76,0,0,0-10.36-12.5,10.61,10.61,0,0,0,0-5.22A10.81,10.81,0,0,0,136.37,22h0a10.79,10.79,0,0,0-4.46,1,7.42,7.42,0,0,1-1.76.45,71.11,71.11,0,0,0-32.28-7.79h-1a20.41,20.41,0,0,0-12.14-3.93h0a21.55,21.55,0,0,0-8.15,1.59A22.14,22.14,0,0,0,65.36,23.58a70.86,70.86,0,0,0-34.9,41.29,1.18,1.18,0,0,0-.07.2,1.55,1.55,0,0,0,0,.15c-.21.64-.4,1.27-.58,1.91l-.1.36,0,.1c-.28,1-.55,2-.81,3.17l-.05.25c-.08.34-.16.68-.23,1s-.2,1-.29,1.51v0c0,.17-.07.34-.1.51a5.81,5.81,0,0,0-.09.58c-.15.9-.29,1.78-.4,2.62,0,.27-.07.54-.1.81-.11.89-.2,1.8-.27,2.7,0,.21,0,.42-.05.63a12.17,12.17,0,0,0-1.56.28,11.45,11.45,0,0,0-3.87,1.83l-.3.22L7.5,94.64a11.54,11.54,0,0,0-4.12,12,11.76,11.76,0,0,0,1.77,3.83,11.39,11.39,0,0,0,.3,4.14,11.54,11.54,0,0,0,6.23,7.61,11.51,11.51,0,0,0,.52,8.82q.17.34.36.69l4.08,7h0l.05.08a11.28,11.28,0,0,0,3.49,3.71,10.89,10.89,0,0,0,.8,2,10.12,10.12,0,0,0,1.34,2l5.14,6.05.05,0a11.34,11.34,0,0,0,3.83,2.93,12.62,12.62,0,0,0,.94,1.47A10.61,10.61,0,0,0,34,158.89L40.1,164l.07.06,0,0a11.51,11.51,0,0,0,7.26,2.59,11.9,11.9,0,0,0,2.16-.22,11.53,11.53,0,0,0,6.65,7.32L59.33,175A20.12,20.12,0,0,0,67,176.51a19.78,19.78,0,0,0,5.87-.89,19.69,19.69,0,0,0,12.37,6.71,19.23,19.23,0,0,0,2.62.18,19.87,19.87,0,0,0,8.71-2,11.49,11.49,0,0,0,7.11,2.48,11.67,11.67,0,0,0,1.56-.1,11.5,11.5,0,0,0,5.64-2.39,11.57,11.57,0,0,0,4.5.92,12.79,12.79,0,0,0,1.52-.1h0l.17,0a11.57,11.57,0,0,0,1.42-.3,12.16,12.16,0,0,0,1.75-.66,12.34,12.34,0,0,0,2.29-1.41,11.73,11.73,0,0,0,1.33.08,11.49,11.49,0,0,0,3.19-.45,5.88,5.88,0,0,0,.71-.23l7.68-2.82h0a11.53,11.53,0,0,0,7.14-13.83,30.54,30.54,0,0,0,14.77,3.81,29.93,29.93,0,0,0,4.33-.31A89.33,89.33,0,0,0,180,160.3l.76-.27c1.2-.32,3.82-1.3,13.05-6,11.41-5.81,12.44-6.91,13.54-8.07a13.62,13.62,0,0,0,3.8-9.45,12.56,12.56,0,0,0,2.89-4.28c2.78-2.09,3.69-2.73,3.95-2.9a10.48,10.48,0,0,0,5-11.14,11,11,0,0,0-.65-2.06l8.8-7.41A10.06,10.06,0,0,0,234.65,100Z" />
            <path class="cls-4"
                  d="M204,85.23l7.43-19.87-31.66,19.8L177.19,75l-6.62,7.18-9.84-24.9L149.82,99.82,136.4,89.14l12.08,35.07-10.75,1.18,16.52,17.78,21.29,6s34.81-27.11,37.25-28.48-8.62-2.42-8.62-2.42L224.65,101,206.5,91.51l7.7-8.15Z" />
            <path class="cls-5"
                  d="M150.67,97.13c3.83-3.56,6.27.26,5.09,4.35s-6.23,9.35-2.43,10.93S178,86.89,181.23,86.52c2.76-.31,3.56.58,3.2,2.9s-13.12,20.14-12.31,20.65,18.43-16,21.84-16a3.27,3.27,0,0,1,3.46,3.34c0,1.39-19.72,18.5-18.65,19.47s17.27-16.7,18.71-16.78c2.14-.13,3.72,3.41,2.43,5.11-.88,1.16-17.22,19.67-16.32,20s13.27-12.83,14.33-13.41c1.54-.85,3.05,1.09,2.09,3.53C199.32,117.16,185.4,133,183.9,134c-.88.6-6.68,6.56-14.64,11.18a21.1,21.1,0,0,1-27.35-5.75h0a20.78,20.78,0,0,1-4.24-12.11C137.61,124,131.16,115.28,150.67,97.13Z" />
            <circle class="cls-6" cx="97.88" cy="86.46" r="60.76"
                    transform="translate(-17.94 26.1) rotate(-13.93)" />
            <path class="cls-7"
                  d="M90,130.61a60.74,60.74,0,0,0,68.52-41.45,61.43,61.43,0,0,1-.86,7.92A60.76,60.76,0,0,1,38.06,75.84,60,60,0,0,1,40,68.1,60.74,60.74,0,0,0,90,130.61Z" />
            <path class="cls-8"
                  d="M156.68,71.21a17.91,17.91,0,0,0-3.69.2c-6.43,1-11.11,5.21-10.45,9.34s6.41,6.65,12.84,5.62a17.59,17.59,0,0,0,3.25-.84A60.2,60.2,0,0,0,156.68,71.21Z" />
            <ellipse class="cls-8" cx="71.19" cy="77.34" rx="7.57" ry="11.79"
                     transform="translate(-11.2 142.62) rotate(-85.76)" />
            <path class="cls-9"
                  d="M78.53,54.32A35.26,35.26,0,0,0,82,64.09c1.37,2.53,3.12,5.16,6,6.06s6.61-.37,9-2.26c2.71-2.13,2.82-5.54,2.67-8.73-.19-4-.48-8.69-3-12a1.45,1.45,0,0,0-2.67.72c0,3.83,1.45,7.45,1.83,11.27.16,1.59.55,3.67,0,5.21a5.68,5.68,0,0,1-3.19,2.74,5.62,5.62,0,0,1-4.64.2A8.67,8.67,0,0,1,84.75,64a43.78,43.78,0,0,1-4.7-10,.79.79,0,0,0-1.52.41Z" />
            <path class="cls-9"
                  d="M141.06,48.58a24.62,24.62,0,0,1-.34,10.6,3.67,3.67,0,0,1-3.3,3,6.36,6.36,0,0,1-4-1c-2.45-1.52-3.95-4.2-4.93-6.84-.59-1.58-1.05-3.2-1.54-4.81-.55-1.77-1.19-3.47-1.89-5.18a1.24,1.24,0,0,0-2.43.31,25.9,25.9,0,0,0,1.83,9.79c1.06,2.86,2.42,5.7,4.82,7.68a9.77,9.77,0,0,0,7.6,2.35,6.13,6.13,0,0,0,3.63-1.77,7.32,7.32,0,0,0,1.54-3.64,26.07,26.07,0,0,0-.16-10.7c-.12-.55-.93-.32-.83.22Z" />
            <path class="cls-9"
                  d="M128.2,76.82c-5.66,2.5-12.09.1-15.93-4.42-1-1.22-2.7.35-2.09,1.63a12.2,12.2,0,0,0,8.12,6.51,13.38,13.38,0,0,0,10.83-2.13.92.92,0,0,0-.93-1.59Z" />
            <path class="cls-9"
                  d="M136,32.15a11.12,11.12,0,0,1-3.58,1c-1.15.15-2.28.41-3.44.51-2.5.22-5-.25-7.43.34a1.41,1.41,0,0,0-.33,2.56,7.16,7.16,0,0,0,4.21.84,26.76,26.76,0,0,0,4.07-.66,15.07,15.07,0,0,0,3.76-1.35c.58-.33,1.13-.7,1.7-1s1.18-.64,1.76-1c.8-.47.1-1.6-.72-1.22Z" />
            <path class="cls-9"
                  d="M73,38c-.09-5.19,2-11.08,7-13.48,4-2,9.64-.82,12.11,3.1a.8.8,0,0,0,1.38-.82c-2.42-5-9.09-6.08-13.81-3.83-5.51,2.62-7.9,9.27-7.61,15,0,.6,1,.62.94,0Z" />
            <path class="cls-6"
                  d="M161.12,103.67c4.88-1.87,5.71,2.59,3.09,5.94s-9.28,6.33-6.36,9.22,32.44-14.43,35.57-13.55c2.67.74,3.08,1.87,1.89,3.89s-19.71,13.75-19.16,14.53,23.09-7.94,26.25-6.64a3.26,3.26,0,0,1,1.95,4.39c-.56,1.27-25.21,9.76-24.58,11.06s22.26-9,23.63-8.55c2,.69,2.17,4.56.33,5.66-1.24.74-23.32,11.78-22.64,12.46s17.11-6.92,18.32-7.07c1.74-.21,2.42,2.15.62,4.06-1.31,1.39-20.16,10.88-21.93,11.26-1,.22-8.65,3.57-17.77,4.87a21.08,21.08,0,0,1-23.2-15.57h0a20.82,20.82,0,0,1,.61-12.82C139,123.66,136.23,113.18,161.12,103.67Z" />
            <text class="cls-10" transform="matrix(0.25, 0.97, -0.97, 0.25, 10.94, 95.58)">W</text><text
              class="cls-10" transform="translate(19.32 123.39) rotate(59.89)">E</text><text class="cls-10"
                                                                                             transform="matrix(0.66, 0.75, -0.75, 0.66, 28.28, 138.29)">L</text><text class="cls-10"
                                                                                                                                                                      transform="matrix(0.79, 0.61, -0.61, 0.79, 39.51, 150.71)">L</text><text class="cls-10"
                                                                                                                                                                                                                                               transform="translate(52.45 160.17) rotate(29.51)"> </text><text class="cls-10"
                                                                                                                                                                                                                                                                                                               transform="translate(59.91 164.85) rotate(19.19)">D</text><text class="cls-10"
                                                                                                                                                                                                                                                                                                                                                                               transform="translate(82.45 172.22) rotate(3.39)">O</text><text class="cls-10"
                                                                                                                                                                                                                                                                                                                                                                                                                                              transform="matrix(0.98, -0.22, 0.22, 0.98, 106.83, 173.1)">N</text><text class="cls-10"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       transform="matrix(0.9, -0.44, 0.44, 0.9, 129.04, 167.53)">E</text>
          </g>
        </g>
      </g>
    </svg>

    <audio ref="correct" src="../../assets/sounds/all/correct-ans.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
    <audio ref="celebrate" src="../../assets/sounds/all/kids-cheering.mp3">
      Your browser does not support the
      <code>audio</code> element.</audio>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import anime from "animejs";
import GreenTick from "@/components/feelingsQuestion/ticks/GreenTick";

export default {
  name: 'Session4Page18',
  components: {GreenTick, draggable},
  data() {
    return {
      ear: ['Ears are standing up and alert'],
      earAns: [],
      tail: ['Tail between the legs'],
      tailAns: [],
      head: ['Head down low'],
      headAns: [],
      correctAns: 0
    }
  },
  methods: {
    handleChange(id) {
      switch (id) {
        case 'ear':
          anime({
            targets: '#green-tick-1',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          this.$refs.correct.play();
          this.correctAns++;
          break;
        case 'tail':
          anime({
            targets: '#green-tick-2',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          this.$refs.correct.play();
          this.correctAns++;
          break;
        case 'head':
          anime({
            targets: '#green-tick-3',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          this.$refs.correct.play();
          this.correctAns++;
          break;
      }
    }
  },
  watch: {
    correctAns: function () {
      if (this.correctAns === 3) {
        document.querySelector('.reward').style.opacity = '1';
        anime({
          targets: '.reward',
          scale: 20,
          duration: 1000,
        })
        this.$refs.celebrate.play()
      }
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 930px) {
  .clues {
    width: 30vh !important;
  }
  .clue {
    border-radius: 4px !important;
  }
  .answers {
    width: 30vh !important;
    border-radius: 4px !important;
  }
  #green-tick-2 {
    left: 44% !important
  }
}
.reward {
  position: absolute;
  height: auto;
  width: 1%;
  top: 36vh;
  left: 20%;
  opacity: 0;
}
.small-tick {
  position: absolute;
  width: 4.2vh !important;
  z-index: 50;
}
#green-tick-1 {
  right: 24%;
  top: 23vh;
}
#green-tick-2 {
  left: 42%;
  top: 63vh;
}
#green-tick-3 {
  right: 12%;
  top: 43vh;
}
#ear {
  right: 25%;
  top: 17vh;
  height: 10.3vh;
}
#tail {
  left: 23%;
  top: 60vh;
}
#head {
  right: 13%;
  top: 41vh;
}
.answers {
  position: absolute;
  width: 21%;
  height: 6.55vh;
  background-color: rgba(255,255,255,0.6);
  border-radius: 10px;
}
.clues {
  width: 29.4vh;
}
.clues-sources {
  position: absolute;
  top: 30vh;
  left: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.clue {
  background-color: #000000;
  color: #ffffff;
  width: 100%;
  font-size: 2.6vh;
  border-radius: 10px;
  text-align: center;
  padding: 1.4vh;
  margin-bottom: 1vh;
}
h1 {font-size: 3.5vh; margin-bottom: 2vh}
p {font-size: 2.52vh; margin-bottom: 0}
.text-box {
  position: absolute;
  width: 80%;
  padding: 2.1vh;
  top: 5vh;
  left: 10%;
  background-color: rgba(255,255,255,0.9);
  font-weight: bold;
  text-align: center;
}
.cls-1 {isolation: isolate;}
.cls-2,
.cls-7 {fill: #bcbec0;mix-blend-mode: multiply;}
.cls-3 {fill: #fff;}
.cls-4 {fill: #1dd3b0;}
.cls-5 {fill: #e6ac00;}
.cls-6 {fill: #ffc800;}
.cls-7 {opacity: 0.84;}
.cls-8 {fill: #ea643b;}
.cls-10,
.cls-9 {fill: #4a0f00;}
.cls-10 {font-size: 30.16px;font-family: AntipastoPro-DemiBold, AntipastoPro DemiBold,serif;font-weight: 300;}
</style>