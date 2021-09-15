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

    <svg class="small-tick" id="green-tick-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
      <title>Correct</title>
      <g id="Correct">
        <g id="&lt;Group&gt;">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-green" d="M315.04 166.87C315.04 248.9 248.55 315.4 166.52 315.4C84.5 315.4 18 248.9 18 166.87C18 84.85 84.5 18.35 166.52 18.35C248.55 18.35 315.04 84.85 315.04 166.87Z" />
            <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="shp1-green" d="M166.52 333.03C74.9 333.03 0.36 258.49 0.36 166.87C0.36 75.26 74.9 0.72 166.52 0.72C258.14 0.72 332.68 75.26 332.68 166.87C332.68 258.49 258.14 333.03 166.52 333.03ZM166.52 35.99C94.35 35.99 35.64 94.7 35.64 166.87C35.64 239.04 94.35 297.76 166.52 297.76C238.69 297.76 297.41 239.04 297.41 166.87C297.41 94.7 238.69 35.99 166.52 35.99Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp2-green" d="M254.12 118.26C247.24 111.37 236.07 111.37 229.18 118.26L158.81 188.64L113.73 143.55C106.84 136.67 95.67 136.67 88.78 143.55C81.9 150.44 81.89 161.61 88.78 168.5L146.33 226.05C149.78 229.49 154.29 231.21 158.81 231.21C163.32 231.21 167.83 229.49 171.28 226.05C171.59 225.73 171.88 225.4 172.16 225.07C172.49 224.78 172.82 224.5 173.13 224.19L254.12 143.2C261.01 136.31 261.01 125.15 254.12 118.26Z" />
        </g>
      </g>
    </svg>
    <svg class="small-tick" id="green-tick-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
      <title>Correct</title>
      <g id="Correct">
        <g id="&lt;Group&gt;">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-green" d="M315.04 166.87C315.04 248.9 248.55 315.4 166.52 315.4C84.5 315.4 18 248.9 18 166.87C18 84.85 84.5 18.35 166.52 18.35C248.55 18.35 315.04 84.85 315.04 166.87Z" />
            <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="shp1-green" d="M166.52 333.03C74.9 333.03 0.36 258.49 0.36 166.87C0.36 75.26 74.9 0.72 166.52 0.72C258.14 0.72 332.68 75.26 332.68 166.87C332.68 258.49 258.14 333.03 166.52 333.03ZM166.52 35.99C94.35 35.99 35.64 94.7 35.64 166.87C35.64 239.04 94.35 297.76 166.52 297.76C238.69 297.76 297.41 239.04 297.41 166.87C297.41 94.7 238.69 35.99 166.52 35.99Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp2-green" d="M254.12 118.26C247.24 111.37 236.07 111.37 229.18 118.26L158.81 188.64L113.73 143.55C106.84 136.67 95.67 136.67 88.78 143.55C81.9 150.44 81.89 161.61 88.78 168.5L146.33 226.05C149.78 229.49 154.29 231.21 158.81 231.21C163.32 231.21 167.83 229.49 171.28 226.05C171.59 225.73 171.88 225.4 172.16 225.07C172.49 224.78 172.82 224.5 173.13 224.19L254.12 143.2C261.01 136.31 261.01 125.15 254.12 118.26Z" />
        </g>
      </g>
    </svg>
    <svg class="small-tick" id="green-tick-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
      <title>Correct</title>
      <g id="Correct">
        <g id="&lt;Group&gt;">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-green" d="M315.04 166.87C315.04 248.9 248.55 315.4 166.52 315.4C84.5 315.4 18 248.9 18 166.87C18 84.85 84.5 18.35 166.52 18.35C248.55 18.35 315.04 84.85 315.04 166.87Z" />
            <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="shp1-green" d="M166.52 333.03C74.9 333.03 0.36 258.49 0.36 166.87C0.36 75.26 74.9 0.72 166.52 0.72C258.14 0.72 332.68 75.26 332.68 166.87C332.68 258.49 258.14 333.03 166.52 333.03ZM166.52 35.99C94.35 35.99 35.64 94.7 35.64 166.87C35.64 239.04 94.35 297.76 166.52 297.76C238.69 297.76 297.41 239.04 297.41 166.87C297.41 94.7 238.69 35.99 166.52 35.99Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp2-green" d="M254.12 118.26C247.24 111.37 236.07 111.37 229.18 118.26L158.81 188.64L113.73 143.55C106.84 136.67 95.67 136.67 88.78 143.55C81.9 150.44 81.89 161.61 88.78 168.5L146.33 226.05C149.78 229.49 154.29 231.21 158.81 231.21C163.32 231.21 167.83 229.49 171.28 226.05C171.59 225.73 171.88 225.4 172.16 225.07C172.49 224.78 172.82 224.5 173.13 224.19L254.12 143.2C261.01 136.31 261.01 125.15 254.12 118.26Z" />
        </g>
      </g>
    </svg>
    <svg class="small-tick" id="green-tick-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
      <title>Correct</title>
      <g id="Correct">
        <g id="&lt;Group&gt;">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-green" d="M315.04 166.87C315.04 248.9 248.55 315.4 166.52 315.4C84.5 315.4 18 248.9 18 166.87C18 84.85 84.5 18.35 166.52 18.35C248.55 18.35 315.04 84.85 315.04 166.87Z" />
            <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="shp1-green" d="M166.52 333.03C74.9 333.03 0.36 258.49 0.36 166.87C0.36 75.26 74.9 0.72 166.52 0.72C258.14 0.72 332.68 75.26 332.68 166.87C332.68 258.49 258.14 333.03 166.52 333.03ZM166.52 35.99C94.35 35.99 35.64 94.7 35.64 166.87C35.64 239.04 94.35 297.76 166.52 297.76C238.69 297.76 297.41 239.04 297.41 166.87C297.41 94.7 238.69 35.99 166.52 35.99Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp2-green" d="M254.12 118.26C247.24 111.37 236.07 111.37 229.18 118.26L158.81 188.64L113.73 143.55C106.84 136.67 95.67 136.67 88.78 143.55C81.9 150.44 81.89 161.61 88.78 168.5L146.33 226.05C149.78 229.49 154.29 231.21 158.81 231.21C163.32 231.21 167.83 229.49 171.28 226.05C171.59 225.73 171.88 225.4 172.16 225.07C172.49 224.78 172.82 224.5 173.13 224.19L254.12 143.2C261.01 136.31 261.01 125.15 254.12 118.26Z" />
        </g>
      </g>
    </svg>
    <svg class="small-tick" id="green-tick-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
      <title>Correct</title>
      <g id="Correct">
        <g id="&lt;Group&gt;">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-green" d="M315.04 166.87C315.04 248.9 248.55 315.4 166.52 315.4C84.5 315.4 18 248.9 18 166.87C18 84.85 84.5 18.35 166.52 18.35C248.55 18.35 315.04 84.85 315.04 166.87Z" />
            <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="shp1-green" d="M166.52 333.03C74.9 333.03 0.36 258.49 0.36 166.87C0.36 75.26 74.9 0.72 166.52 0.72C258.14 0.72 332.68 75.26 332.68 166.87C332.68 258.49 258.14 333.03 166.52 333.03ZM166.52 35.99C94.35 35.99 35.64 94.7 35.64 166.87C35.64 239.04 94.35 297.76 166.52 297.76C238.69 297.76 297.41 239.04 297.41 166.87C297.41 94.7 238.69 35.99 166.52 35.99Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp2-green" d="M254.12 118.26C247.24 111.37 236.07 111.37 229.18 118.26L158.81 188.64L113.73 143.55C106.84 136.67 95.67 136.67 88.78 143.55C81.9 150.44 81.89 161.61 88.78 168.5L146.33 226.05C149.78 229.49 154.29 231.21 158.81 231.21C163.32 231.21 167.83 229.49 171.28 226.05C171.59 225.73 171.88 225.4 172.16 225.07C172.49 224.78 172.82 224.5 173.13 224.19L254.12 143.2C261.01 136.31 261.01 125.15 254.12 118.26Z" />
        </g>
      </g>
    </svg>

  </div>
</template>

<script>
import draggable from "vuedraggable";
import anime from "animejs";

export default {
  name: 'Session4Page18',
  components: {draggable},
  data() {
    return {
      ear: ['Ears are standing up and alert'],
      earAns: [],
      tail: ['Tail between the legs'],
      tailAns: [],
      head: ['Head down low'],
      headAns: [],
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
          break;
        case 'tail':
          anime({
            targets: '#green-tick-2',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          break;
        case 'head':
          anime({
            targets: '#green-tick-3',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          break;
      }
    }
  }
}
</script>

<style scoped>
.small-tick {
  position: absolute;
  height: auto;
  width: 4vw;
  z-index: 50;
  opacity: 0;
}
#green-tick-1 {
  right: 24vw;
  top: 23vh;
}
#green-tick-2 {
  left: 40vw;
  top: 66vh;
}
#green-tick-3 {
  right: 12vw;
  top: 43vh;
}
#ear {
  right: 25vw;
  top: 17vh;
}
#tail {
  left: 23vw;
  top: 60vh;
}
#head {
  right: 13vw;
  top: 41vh;
  height: 6.55vh;
}
.answers {
  position: absolute;
  width: 20vw;
  height: 10.49vh;
  background-color: rgba(255,255,255,0.6);
  border-radius: 10px;
}
.clues {
  width: 20vw;
}
.clues-sources {
  position: absolute;
  top: 30vh;
  left: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.clue {
  background-color: #000000;
  color: #ffffff;
  width: 100%;
  font-size: 2vw;
  border-radius: 10px;
  text-align: center;
  padding: 1vw;
  margin-bottom: 1vh;
}
h1 {font-size: 2.5vw; margin-bottom: 2vh}
p {font-size: 1.8vw; margin-bottom: 0}
.text-box {
  position: absolute;
  width: 80vw;
  padding: 1.5vw;
  top: 5vh;
  left: 10vw;
  background-color: rgba(255,255,255,0.9);
  font-weight: bold;
  text-align: center;
}
</style>