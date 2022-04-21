<template>
  <div class="interactive-container">
    <div class="images">
      <img src="../../assets/images/session2/700-resized.jpg" alt="sad" />
      <img src="../../assets/images/session2/12594-resized.jpg" alt="angry" />
      <img src="../../assets/images/session2/27475-resized.jpg" alt="worried" />
      <img src="../../assets/images/session2/607-resized.jpg" alt="happy" />
    </div>
    <div class="text-box">
      Placer hver følelse på det rigtige ansigt med musen eller din finger.
    </div>

    <draggable class="emotions" id="emotions-source" v-model="emotions" group="emotions">
      <div class="emotions-item" v-for="(emotion, index) in emotions" v-bind:id="emotion.id" :key="index">{{emotion.name}}</div>
    </draggable>
    <draggable class="emotions" @change="updateSadEmotion" id="emotion-sad" v-model="emotionSad" group="emotions">
      <div class="emotions-item" v-for="(emotion, index) in emotionSad" v-bind:id="emotion.id" :key="index">{{emotion.name}}</div>
    </draggable>
    <div class="emotions-item mask" id="mask-sad">Trist/Ked af det</div>
    <draggable class="emotions" @change="updateAngryEmotion" id="emotion-angry" v-model="emotionAngry" group="emotions">
      <div class="emotions-item" v-for="(emotion, index) in emotionAngry" v-bind:id="emotion.id" :key="index">{{emotion.name}}</div>
    </draggable>
    <div class="emotions-item mask" id="mask-angry">Vred</div>
    <draggable class="emotions" @change="updateWorriedEmotion" id="emotion-worried" v-model="emotionWorried" group="emotions">
      <div class="emotions-item" v-for="(emotion, index) in emotionWorried" v-bind:id="emotion.id" :key="index">{{emotion.name}}</div>
    </draggable>
    <div class="emotions-item mask" id="mask-worried">Bekymret</div>
    <draggable class="emotions" @change="updateHappyEmotion" id="emotion-happy" v-model="emotionHappy" group="emotions">
      <div class="emotions-item" v-for="(emotion, index) in emotionHappy" v-bind:id="emotion.id" :key="index">{{emotion.name}}</div>
    </draggable>
    <div class="emotions-item mask" id="mask-happy">Glad</div>

    <div class="emotions-mask"></div>

    <svg class="tick" id="green-tick-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
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
    <svg class="tick" id="green-tick-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
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
    <svg class="tick" id="green-tick-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
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
    <svg class="tick" id="green-tick-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
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

    <svg class="tick" id="red-tick-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
      <title>Incorrect</title>
      <g id="Incorrect">
        <g id="&lt;Group&gt;">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-red" d="M315 166.87C315 248.9 248.5 315.4 166.48 315.4C84.45 315.4 17.96 248.9 17.96 166.87C17.96 84.85 84.45 18.35 166.48 18.35C248.5 18.35 315 84.85 315 166.87Z" />
            <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="shp1-red" d="M166.48 333.03C74.86 333.03 0.32 258.49 0.32 166.87C0.32 75.26 74.86 0.72 166.48 0.72C258.1 0.72 332.64 75.26 332.64 166.87C332.64 258.49 258.1 333.03 166.48 333.03ZM166.48 35.99C94.31 35.99 35.59 94.7 35.59 166.87C35.59 239.04 94.31 297.76 166.48 297.76C238.65 297.76 297.36 239.04 297.36 166.87C297.36 94.7 238.65 35.99 166.48 35.99Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp2-red" d="M191.42 166.87L230 128.29C236.89 121.4 236.89 110.24 230 103.35C223.12 96.46 211.95 96.46 205.06 103.35L166.48 141.93L127.89 103.35C121.01 96.46 109.84 96.46 102.95 103.35C96.06 110.24 96.06 121.4 102.95 128.29L141.54 166.87L102.95 205.46C96.06 212.35 96.06 223.51 102.95 230.4C106.4 233.85 110.91 235.57 115.42 235.57C119.94 235.57 124.45 233.85 127.89 230.4L166.48 191.82L205.06 230.4C208.51 233.85 213.02 235.57 217.53 235.57C222.05 235.57 226.56 233.85 230 230.4C236.89 223.51 236.89 212.35 230 205.46L191.42 166.87Z" />
        </g>
      </g>
    </svg>
    <svg class="tick" id="red-tick-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
      <title>Incorrect</title>
      <g id="Incorrect">
        <g id="&lt;Group&gt;">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-red" d="M315 166.87C315 248.9 248.5 315.4 166.48 315.4C84.45 315.4 17.96 248.9 17.96 166.87C17.96 84.85 84.45 18.35 166.48 18.35C248.5 18.35 315 84.85 315 166.87Z" />
            <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="shp1-red" d="M166.48 333.03C74.86 333.03 0.32 258.49 0.32 166.87C0.32 75.26 74.86 0.72 166.48 0.72C258.1 0.72 332.64 75.26 332.64 166.87C332.64 258.49 258.1 333.03 166.48 333.03ZM166.48 35.99C94.31 35.99 35.59 94.7 35.59 166.87C35.59 239.04 94.31 297.76 166.48 297.76C238.65 297.76 297.36 239.04 297.36 166.87C297.36 94.7 238.65 35.99 166.48 35.99Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp2-red" d="M191.42 166.87L230 128.29C236.89 121.4 236.89 110.24 230 103.35C223.12 96.46 211.95 96.46 205.06 103.35L166.48 141.93L127.89 103.35C121.01 96.46 109.84 96.46 102.95 103.35C96.06 110.24 96.06 121.4 102.95 128.29L141.54 166.87L102.95 205.46C96.06 212.35 96.06 223.51 102.95 230.4C106.4 233.85 110.91 235.57 115.42 235.57C119.94 235.57 124.45 233.85 127.89 230.4L166.48 191.82L205.06 230.4C208.51 233.85 213.02 235.57 217.53 235.57C222.05 235.57 226.56 233.85 230 230.4C236.89 223.51 236.89 212.35 230 205.46L191.42 166.87Z" />
        </g>
      </g>
    </svg>
    <svg class="tick" id="red-tick-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
      <title>Incorrect</title>
      <g id="Incorrect">
        <g id="&lt;Group&gt;">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-red" d="M315 166.87C315 248.9 248.5 315.4 166.48 315.4C84.45 315.4 17.96 248.9 17.96 166.87C17.96 84.85 84.45 18.35 166.48 18.35C248.5 18.35 315 84.85 315 166.87Z" />
            <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="shp1-red" d="M166.48 333.03C74.86 333.03 0.32 258.49 0.32 166.87C0.32 75.26 74.86 0.72 166.48 0.72C258.1 0.72 332.64 75.26 332.64 166.87C332.64 258.49 258.1 333.03 166.48 333.03ZM166.48 35.99C94.31 35.99 35.59 94.7 35.59 166.87C35.59 239.04 94.31 297.76 166.48 297.76C238.65 297.76 297.36 239.04 297.36 166.87C297.36 94.7 238.65 35.99 166.48 35.99Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp2-red" d="M191.42 166.87L230 128.29C236.89 121.4 236.89 110.24 230 103.35C223.12 96.46 211.95 96.46 205.06 103.35L166.48 141.93L127.89 103.35C121.01 96.46 109.84 96.46 102.95 103.35C96.06 110.24 96.06 121.4 102.95 128.29L141.54 166.87L102.95 205.46C96.06 212.35 96.06 223.51 102.95 230.4C106.4 233.85 110.91 235.57 115.42 235.57C119.94 235.57 124.45 233.85 127.89 230.4L166.48 191.82L205.06 230.4C208.51 233.85 213.02 235.57 217.53 235.57C222.05 235.57 226.56 233.85 230 230.4C236.89 223.51 236.89 212.35 230 205.46L191.42 166.87Z" />
        </g>
      </g>
    </svg>
    <svg class="tick" id="red-tick-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
      <title>Incorrect</title>
      <g id="Incorrect">
        <g id="&lt;Group&gt;">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-red" d="M315 166.87C315 248.9 248.5 315.4 166.48 315.4C84.45 315.4 17.96 248.9 17.96 166.87C17.96 84.85 84.45 18.35 166.48 18.35C248.5 18.35 315 84.85 315 166.87Z" />
            <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="shp1-red" d="M166.48 333.03C74.86 333.03 0.32 258.49 0.32 166.87C0.32 75.26 74.86 0.72 166.48 0.72C258.1 0.72 332.64 75.26 332.64 166.87C332.64 258.49 258.1 333.03 166.48 333.03ZM166.48 35.99C94.31 35.99 35.59 94.7 35.59 166.87C35.59 239.04 94.31 297.76 166.48 297.76C238.65 297.76 297.36 239.04 297.36 166.87C297.36 94.7 238.65 35.99 166.48 35.99Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp2-red" d="M191.42 166.87L230 128.29C236.89 121.4 236.89 110.24 230 103.35C223.12 96.46 211.95 96.46 205.06 103.35L166.48 141.93L127.89 103.35C121.01 96.46 109.84 96.46 102.95 103.35C96.06 110.24 96.06 121.4 102.95 128.29L141.54 166.87L102.95 205.46C96.06 212.35 96.06 223.51 102.95 230.4C106.4 233.85 110.91 235.57 115.42 235.57C119.94 235.57 124.45 233.85 127.89 230.4L166.48 191.82L205.06 230.4C208.51 233.85 213.02 235.57 217.53 235.57C222.05 235.57 226.56 233.85 230 230.4C236.89 223.51 236.89 212.35 230 205.46L191.42 166.87Z" />
        </g>
      </g>
    </svg>

    <audio ref="wrong" src="../../assets/sounds/all/wrong-ans.mp3"/>
    <audio ref="correct" src="../../assets/sounds/all/correct-ans.mp3"/>
    <audio ref="celebrate" src="../../assets/sounds/all/kids-cheering.mp3"/>
    <audio src="../../assets/sounds/all/GreatWork.mp3" ref="greatWork"/>
    <audio src="../../assets/sounds/all/GoodTry.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/all/Correct.mp3" ref="correctVoice"/>
    <audio src="../../assets/sounds/session2/Page49.mp3" ref="voice"/>
    <div class="page-number" id="page-light">49</div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import anime from "animejs";

export default {
  name: "Session2Page4",
  components: {
    draggable,
  },
  data() {
    return {
      emotions: [
        {name:'Glad', id:'Happy'},
        {name:'Bekymret', id:'Worried'},
        {name:'Trist/Ked af det', id:'Sad'},
        {name:'Vred', id:'Angry'}],
      emotionSad: [],
      emotionHappy: [],
      emotionAngry: [],
      emotionWorried: [],
      correctAns: 0
    }
  },
  methods: {
    animateWrongAnswer(target) {
      anime({
        targets: target,
        easing: 'linear',
        opacity: [
          {value: 1, duration: 200},
          {value: 0, duration: 100},
          {value: 1, duration: 200},
          {value: 0, duration: 100, delay: 500},
        ]
      });
      this.$refs.wrong.play();
      setTimeout(() => {this.$refs.goodTry.play()}, 100);
    },
    animateCorrectAnswer(target) {
      anime({
        targets: target,
        easing: 'linear',
        opacity: 1,
        duration: 500
      })
      this.$refs.correct.play();
      setTimeout(() => {this.$refs.correctVoice.play()}, 100);
    },
    updateSadEmotion(args) {
      if (args.added) {
        let item = JSON.parse(JSON.stringify(args.added.element));
        let answer = {name:'Trist/Ked af det', id:'Sad'}
        if (!this.equals(item, answer)) {
          this.emotionSad.pop();
          this.emotions.push(item);
          this.animateWrongAnswer('#red-tick-1')
        }
        else {
          document.querySelector('#emotion-sad').style.visibility = 'hidden';
          document.querySelector('#mask-sad').style.visibility = 'visible';
          this.animateCorrectAnswer('#green-tick-1');
          this.correctAns++;
        }
      }
    },
    updateAngryEmotion(args) {
      if (args.added) {
        let item = JSON.parse(JSON.stringify(args.added.element));
        let answer = {name:'Vred', id:'Angry'};
        if (!this.equals(item, answer)) {
          this.emotionAngry.pop();
          this.emotions.push(item);
          this.animateWrongAnswer('#red-tick-2')
        }
        else {
          document.querySelector('#emotion-angry').style.visibility = 'hidden';
          document.querySelector('#mask-angry').style.visibility = 'visible';
          this.animateCorrectAnswer('#green-tick-2');
          this.correctAns++;
        }
      }
    },
    updateWorriedEmotion(args) {
      if (args.added) {
        let item = JSON.parse(JSON.stringify(args.added.element));
        let answer = {name:'Bekymret', id:'Worried'};
        if (!this.equals(item, answer)) {
          this.emotionWorried.pop();
          this.emotions.push(item);
          this.animateWrongAnswer('#red-tick-3')
        }
        else {
          document.querySelector('#emotion-worried').style.visibility = 'hidden';
          document.querySelector('#mask-worried').style.visibility = 'visible';
          this.animateCorrectAnswer('#green-tick-3');
          this.correctAns++;
        }
      }
    },
    updateHappyEmotion(args) {
      if (args.added) {
        let item = JSON.parse(JSON.stringify(args.added.element));
        let answer = {name:'Glad', id:'Happy'};
        if (!this.equals(item, answer)) {
          this.emotionHappy.pop();
          this.emotions.push(item);
          this.animateWrongAnswer('#red-tick-4')
        }
        else {
          document.querySelector('#emotion-happy').style.visibility = 'hidden';
          document.querySelector('#mask-happy').style.visibility = 'visible';
          this.animateCorrectAnswer('#green-tick-4');
          this.correctAns++;
        }
      }
    },
    animateText() {
      let vh = window.innerHeight;
      anime({
        targets: '.emotions-mask',
        translateY: 0.4 * vh,
        duration: 2500,
        delay: 8000,
        easing: 'linear'
      })
    },
    afterCorrectFunctions() {
      this.$refs.celebrate.play();
      setTimeout(() => {this.$refs.greatWork.play()}, 500)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    },
    equals (a, b) {
      if (a === b) return true;
      if (a instanceof Date && b instanceof Date)
        return a.getTime() === b.getTime();
      if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
        return a === b;
      if (a.prototype !== b.prototype) return false;
      const keys = Object.keys(a);
      if (keys.length !== Object.keys(b).length) return false;
      return keys.every(k => this.equals(a[k], b[k]));
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  },
  watch: {
    correctAns: function() {
      if (this.emotions.length === 0 && this.correctAns === 4) {
          this.afterCorrectFunctions();
      }
    }
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  font-size: 3vh;
  background-color: rgba(0, 206, 124, 0.9);
  top: 1vh;
  left: 1%;
  color: #ffffff;
  width: 28%;
  padding: 1vh;
}
.tick {
  position: absolute;
  z-index: 50;
  width: 7%;
  height: auto;
  opacity: 0;
}
#red-tick-1 {
  left: 41%;
  top: 32vh;
}
#red-tick-2 {
  left: 77%;
  top: 32vh;
}
#red-tick-3 {
  left: 41%;
  top: 79vh;
}
#red-tick-4 {
  left: 77%;
  top: 79vh;
}

#green-tick-1 {
  left: 53%;
  top: 32vh;
}
#green-tick-2 {
  left: 88%;
  top: 32vh;
}
#green-tick-3 {
  left: 53%;
  top: 79vh;
}
#green-tick-4 {
  left: 88%;
  top: 79vh;
}
.emotions-mask {
  position: absolute;
  width: 25%;
  height: 40vh;
  top: 38vh;
  left: 0.5%;
  background-color: rgba(255,255,255,1);
  z-index: 10;
}
.emotions {
  position: absolute;
  width: 25%;
  height: 36vh;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
}
.emotions-item {
  font-size: 3vh;
  padding: 1vh;
  text-align: center;
  color: #ffffff;
  background-color: #00ce7c;
  margin: 1.3vh;
  width: 25vh;
}
#emotions-source {
  top: 40vh;
}
#emotion-sad {
  left: 32%;
  top: 2vh;
}
#emotion-angry {
  left: 67%;
  top: 2vh;
}
#emotion-worried {
  left: 32%;
  top: 49vh;
}
#emotion-happy {
  left: 67%;
  top: 49vh;
}
#Happy {
  background-color: #ffd300;
}
#Worried {
  background-color: #147df5;
}
#Sad {
  background-color: #be0aff;
}
#Angry {
  background-color: #ff0000;
}
.mask {
 position: absolute;
  z-index: 7;
}
#mask-sad {
  background-color: #be0aff;
  top: 31vh;
  left: 34%;
  visibility: hidden;
}
#mask-angry {
  background-color: #ff0000;
  top: 31vh;
  left: 69%;
  visibility: hidden;
}
#mask-worried {
  background-color: #147df5;
  top: 78vh;
  left: 34%;
  visibility: hidden;
}
#mask-happy {
  background-color: #ffd300;
  top: 78vh;
  left: 69%;
  visibility: hidden;
}
.images {
  position: absolute;
  left: 27%;
  top: -7vh;
  width: 70%;
  height: 100%;
  z-index: 5;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1.8vh;
}
.images img {
  width: 36vh;
  height: 30vh;
  opacity: 1;
  align-self: center;
  justify-self: center;
}

.shp0-red { fill: #e57373 }
.shp1-red { fill: #d24a43 }
.shp2-red { fill: #ffffff }
.shp0-green { fill: #8bc34a }
.shp1-green { fill: #74b65f }
.shp2-green { fill: #ffffff }
</style>