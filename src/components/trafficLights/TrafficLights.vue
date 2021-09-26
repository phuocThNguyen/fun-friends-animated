<template>
  <div class="traffic-light-container">
    <svg @click="handleClick" class="light" id="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.18 262.15">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path class="cls-1-green" d="M131.09,262.15A131.08,131.08,0,1,1,262.18,131.08,131.1,131.1,0,0,1,131.09,262.15Z" />
          <path class="cls-2-green"
                d="M131.09,250.41a119.31,119.31,0,1,1,119.3-119.33A119.31,119.31,0,0,1,131.09,250.41Z" />
          <path class="cls-3-green"
                d="M111.71,131.1c0,46.21,12.54,88.07,32.88,118.55a119.31,119.31,0,0,0,0-237.09C124.25,43.06,111.71,84.93,111.71,131.1Z" />
          <path class="cls-4-green"
                d="M191.9,192.72c-23.05,0-41.7-27.58-41.7-61.64s18.65-61.66,41.7-61.66,41.75,27.63,41.75,61.66S214.94,192.72,191.9,192.72Z" />
          <path class="cls-3-green"
                d="M34,147.67c-6.2,0-11.22-7.43-11.22-16.6s5-16.6,11.22-16.6,11.24,7.44,11.24,16.6S40.23,147.67,34,147.67Z" />
        </g>
      </g>
    </svg>
    <svg @click="handleClick" class="light" id="yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.18 262.15">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path class="cls-1-yellow" d="M131.09,262.15A131.08,131.08,0,1,1,262.18,131.08,131.1,131.1,0,0,1,131.09,262.15Z" />
          <path class="cls-2-yellow" d="M131.09,250.41a119.31,119.31,0,1,1,119.3-119.33A119.3,119.3,0,0,1,131.09,250.41Z" />
          <path class="cls-3-yellow"
                d="M34.84,147.67c-6.2,0-11.23-7.43-11.23-16.6s5-16.6,11.23-16.6,11.24,7.44,11.24,16.6S41,147.67,34.84,147.67Z" />
          <path class="cls-3-yellow"
                d="M111.71,131.1c0,46.21,12.55,88.07,32.88,118.55a119.31,119.31,0,0,0,0-237.09C124.25,43.06,111.71,84.93,111.71,131.1Z" />
          <path class="cls-4-yellow"
                d="M191.91,192.72c-23,0-41.71-27.58-41.71-61.64s18.66-61.66,41.71-61.66,41.75,27.63,41.75,61.66S215,192.72,191.91,192.72Z" />
        </g>
      </g>
    </svg>
    <svg @click="handleClick" class="light" id="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.18 262.15">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path class="cls-1-red" d="M131.09,262.15A131.08,131.08,0,1,1,262.18,131.08,131.1,131.1,0,0,1,131.09,262.15Z" />
          <path class="cls-2-red" d="M131.09,250.41a119.31,119.31,0,1,1,119.3-119.33A119.3,119.3,0,0,1,131.09,250.41Z" />
          <path class="cls-3-red"
                d="M34.56,147.67c-6.2,0-11.22-7.43-11.22-16.6s5-16.6,11.22-16.6,11.24,7.44,11.24,16.6S40.77,147.67,34.56,147.67Z" />
          <path class="cls-3-red"
                d="M111.71,131.1c0,46.21,12.55,88.07,32.88,118.55a119.31,119.31,0,0,0,0-237.09C124.25,43.06,111.71,84.93,111.71,131.1Z" />
          <path class="cls-4-red"
                d="M191.91,192.72c-23,0-41.71-27.58-41.71-61.64s18.66-61.66,41.71-61.66,41.75,27.63,41.75,61.66S215,192.72,191.91,192.72Z" />
        </g>
      </g>
    </svg>
    <svg class="traffic-light-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1221.66 386.58">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="traffic-no-light">
            <path class="cls-1"
                  d="M1100.39,350a34.62,34.62,0,0,1-34.6-34.67V71.14a34.6,34.6,0,0,1,34.6-34.59H1187a34.61,34.61,0,0,1,34.67,34.59V315.36A34.64,34.64,0,0,1,1187,350Z" />
            <path class="cls-1"
                  d="M34.61,350A34.63,34.63,0,0,1,0,315.36V71.14A34.61,34.61,0,0,1,34.61,36.55H121.2a34.61,34.61,0,0,1,34.67,34.59V315.36A34.64,34.64,0,0,1,121.2,350Z" />
            <path class="cls-1"
                  d="M346.57,322.86a28.63,28.63,0,0,1-28.63-28.66V92.31a28.6,28.6,0,0,1,28.63-28.59h71.6a28.6,28.6,0,0,1,28.61,28.59V294.2a28.62,28.62,0,0,1-28.61,28.66Z" />
            <rect class="cls-2" x="44.35" width="1130.78" height="386.58" rx="5.46" />
            <g>
              <rect class="cls-3" x="804.14" y="12.36" width="361.86" height="361.86" rx="5.46" />
              <path class="cls-4"
                    d="M985.06,363.73c-93.7,0-169.68-76-169.68-169.66A169.69,169.69,0,1,1,985.06,363.73Z" />
              <path class="cls-5" d="M1145.09,45a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1145.09,45Z" />
              <path class="cls-5" d="M826.28,45a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,826.28,45Z" />
              <path class="cls-5" d="M1145.09,363.73a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1145.09,363.73Z" />
              <path class="cls-5" d="M826.28,363.73a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,826.28,363.73Z" />
              <path class="cls-2"
                    d="M985.06,339.71a145.66,145.66,0,1,1,145.68-145.64A145.68,145.68,0,0,1,985.06,339.71Z" />
              <path id="r" class="cls-4"
                    d="M985.06,325.13a131.08,131.08,0,1,1,131.1-131.07A131.1,131.1,0,0,1,985.06,325.13Z" />
              <path id="r-2" data-name="r" class="cls-1"
                    d="M985.07,313.4a119.31,119.31,0,1,1,119.3-119.34A119.31,119.31,0,0,1,985.07,313.4Z" />
              <path id="r-3" data-name="r" class="cls-6"
                    d="M888.54,210.65c-6.2,0-11.23-7.43-11.23-16.6s5-16.59,11.23-16.59,11.24,7.43,11.24,16.59S894.74,210.65,888.54,210.65Z" />
              <path id="r-4" data-name="r" class="cls-7"
                    d="M965.69,194.08c0,46.21,12.54,88.07,32.88,118.55a119.31,119.31,0,0,0,0-237.08C978.23,106.05,965.69,147.91,965.69,194.08Z" />
              <path id="r-5" data-name="r" class="cls-6"
                    d="M1045.88,255.71c-23.05,0-41.7-27.59-41.7-61.65s18.65-61.66,41.7-61.66,41.75,27.63,41.75,61.66S1068.92,255.71,1045.88,255.71Z" />
            </g>
            <g>
              <rect class="cls-3" x="429.43" y="12.36" width="361.86" height="361.86" rx="5.46" />
              <path class="cls-4"
                    d="M610.36,363.73c-93.7,0-169.69-76-169.69-169.66A169.69,169.69,0,1,1,610.36,363.73Z" />
              <path class="cls-5" d="M770.38,45a10.9,10.9,0,1,1,10.91-10.9A10.9,10.9,0,0,1,770.38,45Z" />
              <path class="cls-5" d="M451.57,45a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,451.57,45Z" />
              <path class="cls-5" d="M770.38,363.73a10.9,10.9,0,1,1,10.91-10.9A10.9,10.9,0,0,1,770.38,363.73Z" />
              <path class="cls-5" d="M451.57,363.73a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,451.57,363.73Z" />
              <path class="cls-2"
                    d="M610.36,339.71A145.66,145.66,0,1,1,756,194.07,145.68,145.68,0,0,1,610.36,339.71Z" />
              <path id="y" class="cls-4"
                    d="M610.36,325.13A131.08,131.08,0,1,1,741.45,194.06,131.1,131.1,0,0,1,610.36,325.13Z" />
              <path id="y-2" data-name="y" class="cls-1"
                    d="M610.36,313.4a119.31,119.31,0,1,1,119.3-119.34A119.31,119.31,0,0,1,610.36,313.4Z" />
              <path id="y-3" data-name="y" class="cls-8"
                    d="M514.11,210.65c-6.21,0-11.23-7.43-11.23-16.6s5-16.59,11.23-16.59,11.24,7.43,11.24,16.59S520.31,210.65,514.11,210.65Z" />
              <path id="y-4" data-name="y" class="cls-7"
                    d="M591,194.08c0,46.21,12.54,88.07,32.88,118.55a119.31,119.31,0,0,0,0-237.08C603.52,106.05,591,147.91,591,194.08Z" />
              <path id="y-5" data-name="y" class="cls-8"
                    d="M671.17,255.71c-23,0-41.7-27.59-41.7-61.65s18.66-61.66,41.7-61.66,41.75,27.63,41.75,61.66S694.21,255.71,671.17,255.71Z" />
            </g>
            <g>
              <rect class="cls-3" x="54.72" y="12.36" width="361.86" height="361.86" rx="5.46" />
              <path class="cls-4"
                    d="M235.65,363.73C142,363.73,66,287.74,66,194.07A169.69,169.69,0,1,1,235.65,363.73Z" />
              <path class="cls-5" d="M395.68,45a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,395.68,45Z" />
              <path class="cls-5" d="M76.86,45a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,76.86,45Z" />
              <path class="cls-5" d="M395.68,363.73a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,395.68,363.73Z" />
              <path class="cls-5" d="M76.86,363.73a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,76.86,363.73Z" />
              <path class="cls-2"
                    d="M235.65,339.71A145.66,145.66,0,1,1,381.32,194.07,145.68,145.68,0,0,1,235.65,339.71Z" />
              <path id="g" class="cls-4"
                    d="M235.65,325.13A131.08,131.08,0,1,1,366.74,194.06,131.1,131.1,0,0,1,235.65,325.13Z" />
              <path id="g-2" data-name="g" class="cls-1"
                    d="M235.65,313.4A119.31,119.31,0,1,1,355,194.06,119.31,119.31,0,0,1,235.65,313.4Z" />
              <path id="g-3" data-name="g" class="cls-7"
                    d="M216.27,194.08c0,46.21,12.55,88.07,32.88,118.55a119.31,119.31,0,0,0,0-237.08C228.81,106.05,216.27,147.91,216.27,194.08Z" />
              <path id="g-4" data-name="g" class="cls-8"
                    d="M296.47,255.71c-23.05,0-41.71-27.59-41.71-61.65s18.66-61.66,41.71-61.66,41.74,27.63,41.74,61.66S319.5,255.71,296.47,255.71Z" />
              <path id="g-5" data-name="g" class="cls-8"
                    d="M138.59,210.65c-6.21,0-11.23-7.43-11.23-16.6s5-16.59,11.23-16.59,11.24,7.43,11.24,16.59S144.79,210.65,138.59,210.65Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
    <red-tick class="tick" id="red-tick"/>
    <green-tick class="tick" id="green-tick"/>
  </div>
</template>

<script>
import anime from "animejs";
import GreenTick from "@/components/feelingsQuestion/ticks/GreenTick";
import RedTick from "@/components/feelingsQuestion/ticks/RedTick";

export default {
  name: 'TrafficLight',
  components: {RedTick, GreenTick},
  props: {
    correctAns: String
  },
  methods: {
    handleClick(e) {
      let targetLight = e.target.farthestViewportElement.id;
      switch (targetLight) {
        case 'green':
          this.checkCorrectAns(document.querySelector('#green'))
          break;
        case 'yellow':
          this.checkCorrectAns(document.querySelector('#yellow'))
          break;
        case 'red':
          this.checkCorrectAns(document.querySelector('#red'))
          break;
      }
    },
    animateRedTick() {
      anime({
        targets: '#red-tick',
        easing: 'linear',
        opacity: [
          {value: 1, duration: 200},
          {value: 0, duration: 100},
          {value: 1, duration: 200},
          {value: 0, duration: 100, delay: 500},
        ]
      })
    },
    animateGreenTick() {
      anime({
        targets: '#green-tick',
        easing: 'linear',
        opacity: 1,
        duration: 500
      })
    },
    animateLightIncorrect(target) {
      anime({
        targets: target,
        opacity: 1,
        duration: 200,
        direction: 'alternate',
        easing: 'linear'
      })
    },
    animateLightCorrect(target) {
      anime({
        targets: target,
        opacity: 1,
        duration: 100,
        easing: 'linear'
      })
    },
    checkCorrectAns(target) {
      if (target.id === this.correctAns) {
        this.animateGreenTick();
        this.animateLightCorrect(target)
      } else {
        this.animateRedTick();
        this.animateLightIncorrect(target)
      }
    }
  }
}
</script>

<style scoped>
.tick {
  position: absolute;
  top: 4vh;
  left: 40.5vw;
  z-index: 20;
}
.traffic-light-svg {
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  width: 40vw;
}
.light {
  position: absolute;
  top: 1.83vh;
  height: auto;
  width: 10vw;
  opacity: 0;
  z-index: 10;
}
#green {
  left: 2.75vw;
}
#yellow {
  left: 15vw;
}
#red {
  left: 27.25vw;
}

.cls-1 {fill: #36333b;}
.cls-2 {fill: #2c2b2e;}
.cls-3 {fill: #3d3c40;}
.cls-4 {fill: #4c4a4f;}
.cls-5 {fill: #6d6971;}
.cls-6 {fill: #535157;}
.cls-7 {fill: #3e3b43;}
.cls-8 {fill: #535056;}

.cls-1-green {fill: #008245;}
.cls-2-green {fill: #00994d;}
.cls-3-green {fill: #31a749;}
.cls-4-green {fill: #7fc45f;}
.cls-1-red {fill: #b41f24;}
.cls-2-red {fill: #eb1f25;}
.cls-3-red {fill: #ed412b;}
.cls-4-red {fill: #f37660;}
.cls-1-yellow {fill: #f2a418;}
.cls-2-yellow {fill: #ffc40c;}
.cls-3-yellow {fill: #ffd33a;}
.cls-4-yellow {fill: #ffeb67;}
</style>