<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session10/Blurred-BG.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session10/Blurred-BG.png"
      class="session-background"
    />
    <div class="text-box">
      <h1>Beautiful hands</h1>
      <p><strong>Click on each hand.</strong></p>
    </div>
    <div class="hands-container">
      <div class="hand-container short-text" id="hand-1">
        <svg class="hand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 538 691" width="538" height="691">
          <path id="&lt;Path&gt;" class="shp0-green" d="M497.35 172.88C465.98 172.88 452.19 202.82 442.94 228.49C430.88 261.99 420.32 296 407.94 329.41C417.42 270.59 429.28 212.19 440.38 153.67C447.47 116.26 466 36.09 400.19 44.04C356.33 49.34 357.62 110 351.21 142.5C339.73 200.74 327.38 259.01 317.28 317.51C321.02 234.47 317.35 150.49 317.35 67.37C317.35 55.76 317.35 44.16 317.35 32.56C317.35 -3.77 259.21 -8.36 239.72 12.45C227.04 26 227.83 47.44 227.94 64.7C228.1 89.93 228.53 115.17 228.75 140.4C229.26 196.76 230.5 253.13 229.22 309.48C216.92 245.89 202.38 182.51 191.49 118.66C185.25 82.06 168.63 20.31 116.72 49.9C94.72 62.44 95.17 91.83 97.81 113.7C102 148.45 109.28 182.96 113.96 217.71C123.54 288.88 133.76 359.97 142.44 431.26C128.02 403.15 116.36 373.61 102.6 345.15C92.85 324.97 83.74 294.83 59.33 288.16C38.18 282.38 6.79 294.47 1.51 317.61C-4.36 343.32 15.66 377.98 24.52 401.32C64.66 507.07 97.1 660.45 226.89 686.55C348.98 711.1 478.94 624.44 476.25 493.88C475.67 465.76 470.62 437.4 477.93 409.71C486.77 376.25 501.62 344.34 512.37 311.46C523.46 277.51 569.53 172.88 497.35 172.88Z" />
        </svg>
        <p id="text-1">I can try</p>
        <div class="mask" @click="revealText(1)" id="mask-1"/>
      </div>
      <div class="hand-container short-text" id="hand-2">
        <svg class="hand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 538 691" width="538" height="691">
          <path id="&lt;Path&gt;" class="shp0-blue" d="M497.35 172.88C465.98 172.88 452.19 202.82 442.94 228.49C430.88 261.99 420.32 296 407.94 329.41C417.42 270.59 429.28 212.19 440.38 153.67C447.47 116.26 466 36.09 400.19 44.04C356.33 49.34 357.62 110 351.21 142.5C339.73 200.74 327.38 259.01 317.28 317.51C321.02 234.47 317.35 150.49 317.35 67.37C317.35 55.76 317.35 44.16 317.35 32.56C317.35 -3.77 259.21 -8.36 239.72 12.45C227.04 26 227.83 47.44 227.94 64.7C228.1 89.93 228.53 115.17 228.75 140.4C229.26 196.76 230.5 253.13 229.22 309.48C216.92 245.89 202.38 182.51 191.49 118.66C185.25 82.06 168.63 20.31 116.72 49.9C94.72 62.44 95.17 91.83 97.81 113.7C102 148.45 109.28 182.96 113.96 217.71C123.54 288.88 133.76 359.97 142.44 431.26C128.02 403.15 116.36 373.61 102.6 345.15C92.85 324.97 83.74 294.83 59.33 288.16C38.18 282.38 6.79 294.47 1.51 317.61C-4.36 343.32 15.66 377.98 24.52 401.32C64.66 507.07 97.1 660.45 226.89 686.55C348.98 711.1 478.94 624.44 476.25 493.88C475.67 465.76 470.62 437.4 477.93 409.71C486.77 376.25 501.62 344.34 512.37 311.46C523.46 277.51 569.53 172.88 497.35 172.88Z" />
        </svg>
        <p id="text-2">Caring</p>
        <div class="mask" @click="revealText(2)" id="mask-2"/>
      </div>
      <div class="hand-container short-text" id="hand-3">
        <svg class="hand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 538 691" width="538" height="691">
          <path id="&lt;Path&gt;" class="shp0-red" d="M497.35 172.88C465.98 172.88 452.19 202.82 442.94 228.49C430.88 261.99 420.32 296 407.94 329.41C417.42 270.59 429.28 212.19 440.38 153.67C447.47 116.26 466 36.09 400.19 44.04C356.33 49.34 357.62 110 351.21 142.5C339.73 200.74 327.38 259.01 317.28 317.51C321.02 234.47 317.35 150.49 317.35 67.37C317.35 55.76 317.35 44.16 317.35 32.56C317.35 -3.77 259.21 -8.36 239.72 12.45C227.04 26 227.83 47.44 227.94 64.7C228.1 89.93 228.53 115.17 228.75 140.4C229.26 196.76 230.5 253.13 229.22 309.48C216.92 245.89 202.38 182.51 191.49 118.66C185.25 82.06 168.63 20.31 116.72 49.9C94.72 62.44 95.17 91.83 97.81 113.7C102 148.45 109.28 182.96 113.96 217.71C123.54 288.88 133.76 359.97 142.44 431.26C128.02 403.15 116.36 373.61 102.6 345.15C92.85 324.97 83.74 294.83 59.33 288.16C38.18 282.38 6.79 294.47 1.51 317.61C-4.36 343.32 15.66 377.98 24.52 401.32C64.66 507.07 97.1 660.45 226.89 686.55C348.98 711.1 478.94 624.44 476.25 493.88C475.67 465.76 470.62 437.4 477.93 409.71C486.77 376.25 501.62 344.34 512.37 311.46C523.46 277.51 569.53 172.88 497.35 172.88Z" />
        </svg>
        <p id="text-3">Helping</p>
        <div class="mask" @click="revealText(3)" id="mask-3"/>
      </div>
      <div class="hand-container short-text" id="hand-4">
        <svg class="hand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 538 691" width="538" height="691">
          <path id="&lt;Path&gt;" class="shp0-yellow" d="M497.35 172.88C465.98 172.88 452.19 202.82 442.94 228.49C430.88 261.99 420.32 296 407.94 329.41C417.42 270.59 429.28 212.19 440.38 153.67C447.47 116.26 466 36.09 400.19 44.04C356.33 49.34 357.62 110 351.21 142.5C339.73 200.74 327.38 259.01 317.28 317.51C321.02 234.47 317.35 150.49 317.35 67.37C317.35 55.76 317.35 44.16 317.35 32.56C317.35 -3.77 259.21 -8.36 239.72 12.45C227.04 26 227.83 47.44 227.94 64.7C228.1 89.93 228.53 115.17 228.75 140.4C229.26 196.76 230.5 253.13 229.22 309.48C216.92 245.89 202.38 182.51 191.49 118.66C185.25 82.06 168.63 20.31 116.72 49.9C94.72 62.44 95.17 91.83 97.81 113.7C102 148.45 109.28 182.96 113.96 217.71C123.54 288.88 133.76 359.97 142.44 431.26C128.02 403.15 116.36 373.61 102.6 345.15C92.85 324.97 83.74 294.83 59.33 288.16C38.18 282.38 6.79 294.47 1.51 317.61C-4.36 343.32 15.66 377.98 24.52 401.32C64.66 507.07 97.1 660.45 226.89 686.55C348.98 711.1 478.94 624.44 476.25 493.88C475.67 465.76 470.62 437.4 477.93 409.71C486.77 376.25 501.62 344.34 512.37 311.46C523.46 277.51 569.53 172.88 497.35 172.88Z" />
        </svg>
        <p id="text-4">Smiling</p>
        <div class="mask" @click="revealText(4)" id="mask-4"/>
      </div>
      <div class="hand-container short-text" id="hand-5">
        <svg class="hand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 538 691" width="538" height="691">
          <path id="&lt;Path&gt;" class="shp0-pink" d="M497.35 172.88C465.98 172.88 452.19 202.82 442.94 228.49C430.88 261.99 420.32 296 407.94 329.41C417.42 270.59 429.28 212.19 440.38 153.67C447.47 116.26 466 36.09 400.19 44.04C356.33 49.34 357.62 110 351.21 142.5C339.73 200.74 327.38 259.01 317.28 317.51C321.02 234.47 317.35 150.49 317.35 67.37C317.35 55.76 317.35 44.16 317.35 32.56C317.35 -3.77 259.21 -8.36 239.72 12.45C227.04 26 227.83 47.44 227.94 64.7C228.1 89.93 228.53 115.17 228.75 140.4C229.26 196.76 230.5 253.13 229.22 309.48C216.92 245.89 202.38 182.51 191.49 118.66C185.25 82.06 168.63 20.31 116.72 49.9C94.72 62.44 95.17 91.83 97.81 113.7C102 148.45 109.28 182.96 113.96 217.71C123.54 288.88 133.76 359.97 142.44 431.26C128.02 403.15 116.36 373.61 102.6 345.15C92.85 324.97 83.74 294.83 59.33 288.16C38.18 282.38 6.79 294.47 1.51 317.61C-4.36 343.32 15.66 377.98 24.52 401.32C64.66 507.07 97.1 660.45 226.89 686.55C348.98 711.1 478.94 624.44 476.25 493.88C475.67 465.76 470.62 437.4 477.93 409.71C486.77 376.25 501.62 344.34 512.37 311.46C523.46 277.51 569.53 172.88 497.35 172.88Z" />
        </svg>
        <p id="text-5">Sharing</p>
        <div class="mask" @click="revealText(5)" id="mask-5"/>
      </div>
      <div class="hand-container short-text" id="hand-6">
        <svg class="hand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 538 691" width="538" height="691">
          <path id="&lt;Path&gt;" class="shp0-orange" d="M497.35 172.88C465.98 172.88 452.19 202.82 442.94 228.49C430.88 261.99 420.32 296 407.94 329.41C417.42 270.59 429.28 212.19 440.38 153.67C447.47 116.26 466 36.09 400.19 44.04C356.33 49.34 357.62 110 351.21 142.5C339.73 200.74 327.38 259.01 317.28 317.51C321.02 234.47 317.35 150.49 317.35 67.37C317.35 55.76 317.35 44.16 317.35 32.56C317.35 -3.77 259.21 -8.36 239.72 12.45C227.04 26 227.83 47.44 227.94 64.7C228.1 89.93 228.53 115.17 228.75 140.4C229.26 196.76 230.5 253.13 229.22 309.48C216.92 245.89 202.38 182.51 191.49 118.66C185.25 82.06 168.63 20.31 116.72 49.9C94.72 62.44 95.17 91.83 97.81 113.7C102 148.45 109.28 182.96 113.96 217.71C123.54 288.88 133.76 359.97 142.44 431.26C128.02 403.15 116.36 373.61 102.6 345.15C92.85 324.97 83.74 294.83 59.33 288.16C38.18 282.38 6.79 294.47 1.51 317.61C-4.36 343.32 15.66 377.98 24.52 401.32C64.66 507.07 97.1 660.45 226.89 686.55C348.98 711.1 478.94 624.44 476.25 493.88C475.67 465.76 470.62 437.4 477.93 409.71C486.77 376.25 501.62 344.34 512.37 311.46C523.46 277.51 569.53 172.88 497.35 172.88Z" />
        </svg>
        <p id="text-6">Paying attention</p>
        <div class="mask" @click="revealText(6)" id="mask-6"/>
      </div>
      <div class="hand-container short-text" id="hand-7">
        <svg class="hand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 538 691" width="538" height="691">
          <path id="&lt;Path&gt;" class="shp0-purple" d="M497.35 172.88C465.98 172.88 452.19 202.82 442.94 228.49C430.88 261.99 420.32 296 407.94 329.41C417.42 270.59 429.28 212.19 440.38 153.67C447.47 116.26 466 36.09 400.19 44.04C356.33 49.34 357.62 110 351.21 142.5C339.73 200.74 327.38 259.01 317.28 317.51C321.02 234.47 317.35 150.49 317.35 67.37C317.35 55.76 317.35 44.16 317.35 32.56C317.35 -3.77 259.21 -8.36 239.72 12.45C227.04 26 227.83 47.44 227.94 64.7C228.1 89.93 228.53 115.17 228.75 140.4C229.26 196.76 230.5 253.13 229.22 309.48C216.92 245.89 202.38 182.51 191.49 118.66C185.25 82.06 168.63 20.31 116.72 49.9C94.72 62.44 95.17 91.83 97.81 113.7C102 148.45 109.28 182.96 113.96 217.71C123.54 288.88 133.76 359.97 142.44 431.26C128.02 403.15 116.36 373.61 102.6 345.15C92.85 324.97 83.74 294.83 59.33 288.16C38.18 282.38 6.79 294.47 1.51 317.61C-4.36 343.32 15.66 377.98 24.52 401.32C64.66 507.07 97.1 660.45 226.89 686.55C348.98 711.1 478.94 624.44 476.25 493.88C475.67 465.76 470.62 437.4 477.93 409.71C486.77 376.25 501.62 344.34 512.37 311.46C523.46 277.51 569.53 172.88 497.35 172.88Z" />
        </svg>
        <p id="text-7">Being kind</p>
        <div class="mask" @click="revealText(7)" id="mask-7"/>
      </div>
      <div class="hand-container short-text" id="hand-8">
        <svg class="hand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 538 691" width="538" height="691">
          <path id="&lt;Path&gt;" class="shp0-lightgreen" d="M497.35 172.88C465.98 172.88 452.19 202.82 442.94 228.49C430.88 261.99 420.32 296 407.94 329.41C417.42 270.59 429.28 212.19 440.38 153.67C447.47 116.26 466 36.09 400.19 44.04C356.33 49.34 357.62 110 351.21 142.5C339.73 200.74 327.38 259.01 317.28 317.51C321.02 234.47 317.35 150.49 317.35 67.37C317.35 55.76 317.35 44.16 317.35 32.56C317.35 -3.77 259.21 -8.36 239.72 12.45C227.04 26 227.83 47.44 227.94 64.7C228.1 89.93 228.53 115.17 228.75 140.4C229.26 196.76 230.5 253.13 229.22 309.48C216.92 245.89 202.38 182.51 191.49 118.66C185.25 82.06 168.63 20.31 116.72 49.9C94.72 62.44 95.17 91.83 97.81 113.7C102 148.45 109.28 182.96 113.96 217.71C123.54 288.88 133.76 359.97 142.44 431.26C128.02 403.15 116.36 373.61 102.6 345.15C92.85 324.97 83.74 294.83 59.33 288.16C38.18 282.38 6.79 294.47 1.51 317.61C-4.36 343.32 15.66 377.98 24.52 401.32C64.66 507.07 97.1 660.45 226.89 686.55C348.98 711.1 478.94 624.44 476.25 493.88C475.67 465.76 470.62 437.4 477.93 409.71C486.77 376.25 501.62 344.34 512.37 311.46C523.46 277.51 569.53 172.88 497.35 172.88Z" />
        </svg>
        <p id="text-8">Staying calm</p>
        <div class="mask" @click="revealText(8)" id="mask-8"/>
      </div>
    </div>
    <div class="audios">
      <audio ref="clickSound" src="../../assets/sounds/session7/click-sound.mp3"/>
      <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session10/Session10_Page243.mp3" ref="voice"/>
      <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session10/caring.mp3" id="item-2"/>
      <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session10/green.mp3" id="item-1"/>
      <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session10/helpful.mp3" id="item-3"/>
      <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session10/smiling.mp3" id="item-4"/>
      <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session10/sharing.mp3" id="item-5"/>
    </div>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";
export default {
  name: 'Session10Page11',
  components: {ImageComponent},
  props: {
    startPage: Number,
    pageNum: Number,
  },
  created (){
    this.setPageNumber()
  },
  methods: {
    setPageNumber() {
      this.page = this.pageNum + this.startPage - 1;
    },
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: text[1], opacity: 1}, 5000)
        .add({targets: text[2], opacity: 1}, 12300)
        .add({targets: '.hands-container', opacity: 1}, 17500)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    revealText(id) {
      this.$refs.voice.pause();
      this.$refs.clickSound.play();
      document.querySelector('#item-'+id).play();
      anime({
        targets: '#text-'+id,
        opacity: 1,
        duration: 200,
        easing: 'linear'
      })
      document.querySelector('#mask-'+id).style.visibility = 'hidden';
    },
  },
  mounted() {},
}
</script>

<style scoped>
.mask {position: absolute;width: 105%;height: 105%;}
#hand-1 {left: 2%;top: 15vh;}
#hand-2 {left: 26%;top: 15vh;}
#hand-3 {right: 28%;top: 15vh;}
#hand-4 {right: 4%;top: 15vh;}
#hand-5 {left: 5%;bottom: 5vh;}
#hand-6 {left: 28%;bottom: 5vh;}
#hand-7 {right: 30%;bottom: 5vh;}
#hand-8 {right: 7%;bottom: 5vh;}
.hands-container {position: absolute; width: 100%; height: 100%; opacity: 1}
.hand-container {
  position: absolute;
  width: 20%;
  height: 34vh;
  opacity: 1;
}
.hand-container p {
  color: #ffffff;
  width: 100%;
  font-size: 3.6vh;
  font-weight: bold;
  position: absolute;
  left: 1vh;
  text-align: center;
  text-transform: uppercase;
  opacity: 1;
}
.long-text p {bottom: 2vh;}
.short-text p {bottom: 4vh;}
.hand {
  position: absolute;
  height: auto;
  width: 28vh;
}
.text-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  padding: 1vh;
}
.text-box h1 {
  font-size: 6vh;
}
.text-box p {
  font-size: 3.5vh;
  margin-bottom: 1vh;
  opacity: 1;
}
tspan { white-space:pre }
.shp0-red { fill: #C32C42 }
.shp0-blue { fill: #04ABDE }
.shp0-pink { fill: #F2ADC9 }
.shp0-yellow { fill: #FAB800 }
.shp0-green { fill: #4DB847 }
.shp0-orange { fill: #F77F00 }
.shp0-purple { fill: #8E44AD }
.shp0-lightgreen { fill: #A3D977 }
</style>
