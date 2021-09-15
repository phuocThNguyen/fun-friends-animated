<template>
  <div class="interactive-container">
    <img src="../../assets/images/session4/22061-resized.jpg" alt="body-clues" class="session-background">
    <div class="text-box">
      <h1>Additional Activity &ndash; Body Clues</h1>
      <p>Zoe is playing on the new playground,
       she is feeling excited but also scared.</p>
      <p>What might be her body clues? Drag the
       clues to her body.</p>
    </div>
    <div class="clues-sources">
      <draggable class="clues" v-model="dizzy" group="dizzy">
        <div class="clue" v-for="(clue, index) in dizzy" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="stomach" group="stomach">
        <div class="clue" v-for="(clue, index) in stomach" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="skin" group="skin">
        <div class="clue" v-for="(clue, index) in skin" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="heart" group="heart">
        <div class="clue" v-for="(clue, index) in heart" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="knees" group="knees">
        <div class="clue" v-for="(clue, index) in knees" :key="index">{{clue}}</div>
      </draggable>
    </div>

    <draggable class="answers" @change="handleChange('dizzy')" id="dizzy" v-model="dizzyAns" group="dizzy">
      <div class="clue" v-for="(clue, index) in dizzyAns" v-bind:id="clue" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('stomach')" id="stomach" v-model="stomachAns" group="stomach">
      <div class="clue" v-for="(clue, index) in stomachAns" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('skin')" id="skin" v-model="skinAns" group="skin">
      <div class="clue" v-for="(clue, index) in skinAns" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('heart')" id="heart" v-model="heartAns" group="heart">
      <div class="clue" v-for="(clue, index) in heartAns" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('knees')" id="knees" v-model="kneesAns" group="knees">
      <div class="clue" v-for="(clue, index) in kneesAns" :key="index">{{clue}}</div>
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
      dizzy: ['Dizziness'],
      dizzyAns: [],
      stomach: ['Butterflies in the stomach'],
      stomachAns: [],
      skin: ['Cold tingly skin'],
      skinAns: [],
      heart: ['Racing heart'],
      heartAns: [],
      knees: ['Shaky knees'],
      kneesAns: []
    }
  },
  methods: {
    handleChange(id) {
      switch (id) {
        case 'dizzy':
          anime({
            targets: '#green-tick-1',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          break;
        case 'stomach':
          anime({
            targets: '#green-tick-2',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          break;
        case 'skin':
          anime({
            targets: '#green-tick-3',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          break;
        case 'heart':
          anime({
            targets: '#green-tick-4',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          break;
        case 'knees':
          anime({
            targets: '#green-tick-5',
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
  width: 3vw;
  z-index: 50;
  opacity: 0;
}
#green-tick-1 {
  right: 29vw;
  top: 30vh;
}
#green-tick-2 {
  right: 26vw;
  top: 57vh;
}
#green-tick-3 {
  right: 29vw;
  top: 44vh;
}
#green-tick-4 {
  right: 6vw;
  top: 45vh;
}
#green-tick-5 {
  right: 1vw;
  top: 71vh;
}
#dizzy {
  right: 30vw;
  top: 27vh;
}
#stomach {
  right: 27vw;
  top: 50vh;
  height: 10.49vh;
}
#skin {
  right: 30vw;
  top: 41vh;
}
#heart {
  right: 7vw;
  top: 42vh;
}
#knees {
  right: 2vw;
  top: 68vh;
}
.answers {
  position: absolute;
  width: 17vw;
  height: 6.55vh;
  background-color: rgba(255,255,255,0.6);
  border-radius: 10px;
}
.clues {
  width: 17vw;
}
.clues-sources {
  position: absolute;
  top: 45vh;
  left: 9vw;
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
  width: 24vw;
  padding: 1.5vw;
  top: 5vh;
  left: 5vw;
  background-color: rgba(255,255,255,0.8);
}
.text-box p:nth-of-type(1) {
  margin-bottom: 2vh;
}
</style>