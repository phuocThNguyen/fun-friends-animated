<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/3903-resized.jpg" alt="friends" class="session-background">
    <div class="content-container">
      <h1>What is each friend feeling?</h1>
      <div class="emotes-container">
        <svg class="emotes" @click="clickedAngry" id="angry" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171 171" width="171" height="171">
          <title>Angry</title>
          <g id="Angry">
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp0-angry" d="M0.4 85.18C0.4 38.11 38.56 -0.05 85.64 -0.05C132.71 -0.05 170.87 38.11 170.87 85.18C170.87 132.26 132.71 170.42 85.64 170.42C38.56 170.42 0.4 132.26 0.4 85.18Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1-angry" d="M130.23 12.43C138.72 25.68 143.64 41.44 143.64 58.34C143.64 105.42 105.48 143.58 58.4 143.58C42.06 143.58 26.78 138.97 13.81 130.99C28.96 154.64 55.47 170.32 85.64 170.32C132.71 170.32 170.87 132.16 170.87 85.08C170.87 54.36 154.61 27.43 130.23 12.43Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp2-angry" d="M11.99 94.17C11.99 50.47 47.42 15.04 91.12 15.04C116.67 15.04 139.38 27.15 153.85 45.93C140.19 22.21 114.57 6.24 85.23 6.24C41.53 6.24 6.09 41.67 6.09 85.38C6.09 103.54 12.22 120.26 22.5 133.62C15.81 122.01 11.99 108.54 11.99 94.17Z" />
                </g>
              </g>
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp3-angry" d="M60.51 69.32C60.51 75.17 57.7 79.91 54.23 79.91C50.77 79.91 47.95 75.17 47.95 69.32C47.95 63.47 50.77 58.73 54.23 58.73C57.7 58.73 60.51 63.47 60.51 69.32Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp3-angry" d="M123.32 69.32C123.32 75.17 120.51 79.91 117.04 79.91C113.57 79.91 110.76 75.17 110.76 69.32C110.76 63.47 113.57 58.73 117.04 58.73C120.51 58.73 123.32 63.47 123.32 69.32Z" />
                  </g>
                </g>
              </g>
              <path id="&lt;Path&gt;" class="shp4-angry" d="M120.57 123.06C122.77 125.2 126.29 122.84 125.15 120C118.85 104.26 103.47 93.14 85.48 93.14C67.8 93.14 52.63 103.89 46.14 119.21C44.95 122.01 48.5 124.43 50.68 122.31C63.15 110.22 89.64 93.01 120.57 123.06Z" />
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp3-angry" d="M71.94 54.59L66.22 60.3L47.15 41.23L52.87 35.52L71.94 54.59Z" />
                <path id="&lt;Path&gt;" class="shp3-angry" d="M105.05 60.3L99.34 54.59L118.41 35.52L124.12 41.23L105.05 60.3Z" />
              </g>
            </g>
          </g>
        </svg>
        <svg class="emotes" @click="clickedSad" id="sad" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 171" width="172" height="171">
          <title>Sad</title>
          <g id="Object">
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp0-sad" d="M0.7 85.15C0.7 38.07 38.86 -0.09 85.94 -0.09C133.01 -0.09 171.18 38.07 171.18 85.15C171.18 132.22 133.01 170.38 85.94 170.38C38.86 170.38 0.7 132.22 0.7 85.15Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp1-sad" d="M130.53 12.4C139.02 25.65 143.94 41.4 143.94 58.31C143.94 105.38 105.78 143.54 58.71 143.54C42.36 143.54 27.09 138.94 14.11 130.96C29.26 154.61 55.77 170.28 85.94 170.28C133.01 170.28 171.18 132.12 171.18 85.04C171.18 54.32 154.92 27.39 130.53 12.4Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp2-sad" d="M12.29 94.14C12.29 50.43 47.72 15 91.42 15C116.97 15 139.69 27.11 154.15 45.9C140.49 22.17 114.88 6.2 85.53 6.2C41.83 6.2 6.4 41.63 6.4 85.34C6.4 103.5 12.52 120.23 22.8 133.58C16.11 121.97 12.29 108.5 12.29 94.14Z" />
                  </g>
                </g>
              </g>
              <path id="&lt;Path&gt;" class="shp3-sad" d="M103.93 119.41C99.08 115.21 92.51 112.84 85.94 112.97C79.47 112.99 72.96 115.35 68.06 119.45C65.59 121.54 63.52 124.1 62.08 126.85C60.56 129.84 59.77 132.86 59.74 135.81C59.73 136.52 60.18 137.15 60.84 137.38C61.51 137.61 62.25 137.39 62.68 136.83C64.45 134.55 66.12 132.74 67.79 131.3C69.59 129.77 71.51 128.49 73.48 127.5C77.4 125.54 81.74 124.49 86.02 124.47C90.41 124.44 94.57 125.43 98.41 127.42C102.36 129.45 105.99 132.61 109.19 136.82C109.5 137.24 109.99 137.47 110.5 137.47C110.67 137.47 110.86 137.44 111.03 137.38C111.7 137.15 112.15 136.51 112.14 135.8C112.05 129.86 108.98 123.73 103.93 119.41Z" />
              <g id="&lt;Group&gt;">
                <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="shp4-sad" d="M147.29 98.95C147.29 98.95 147.29 98.95 147.29 98.95C146.17 98.63 145.08 98.32 143.97 98.01C141.67 97.37 139.49 96.76 137.38 96.03C134.22 94.96 131.39 93.75 128.7 92.34C125.88 90.84 123.32 89.18 120.86 87.25C118.17 85.16 115.68 82.72 113.39 80.39C113.15 80.15 112.78 80.08 112.47 80.22C112.15 80.36 111.96 80.67 111.97 81.01C112.15 84.63 113.58 88.36 116.1 91.8C118.4 94.91 121.47 97.53 125 99.37C128.3 101.11 132.02 102.18 135.74 102.46L136.17 102.49C136.69 102.51 137.2 102.53 137.71 102.53C141.28 102.53 144.54 101.84 147.41 100.49C147.72 100.34 147.9 100.02 147.88 99.68C147.85 99.34 147.61 99.05 147.29 98.95ZM147.18 99.31L147.18 99.31L147.18 99.31Z" />
                <path id="&lt;Path&gt;" class="shp4-sad" d="M59.41 80.22C59.1 80.08 58.73 80.15 58.49 80.39C56.2 82.72 53.7 85.16 51.01 87.25C48.56 89.18 45.99 90.84 43.17 92.34C40.49 93.75 37.65 94.96 34.49 96.03C32.39 96.76 30.21 97.37 27.86 98.03C26.79 98.32 25.71 98.63 24.59 98.95C24.59 98.95 24.59 98.95 24.59 98.95C24.26 99.05 24.03 99.34 24 99.68C23.97 100.02 24.16 100.34 24.47 100.49C27.34 101.84 30.6 102.53 34.17 102.53C34.68 102.53 35.19 102.51 35.7 102.49L36.14 102.46C39.86 102.18 43.58 101.11 46.88 99.37C50.41 97.53 53.48 94.91 55.78 91.8C58.3 88.36 59.73 84.63 59.9 81.01C59.92 80.67 59.72 80.36 59.41 80.22Z" />
              </g>
            </g>
          </g>
        </svg>
        <svg class="emotes" @click="clickedHappy" id="happy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 171" width="172" height="171">
          <title>Happy</title>
          <g id="Object">
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp0-happy" d="M0.7 85.22C0.7 38.14 38.86 -0.02 85.94 -0.02C133.01 -0.02 171.18 38.14 171.18 85.22C171.18 132.29 133.01 170.45 85.94 170.45C38.86 170.45 0.7 132.29 0.7 85.22Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1-happy" d="M130.53 12.47C139.02 25.72 143.94 41.48 143.94 58.38C143.94 105.46 105.78 143.62 58.71 143.62C42.36 143.62 27.09 139.01 14.11 131.03C29.26 154.68 55.77 170.35 85.94 170.35C133.01 170.35 171.18 132.19 171.18 85.12C171.18 54.39 154.92 27.47 130.53 12.47Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp2-happy" d="M12.29 94.21C12.29 50.5 47.72 15.07 91.42 15.07C116.97 15.07 139.69 27.18 154.15 45.97C140.49 22.25 114.88 6.28 85.53 6.28C41.83 6.28 6.4 41.71 6.4 85.41C6.4 103.57 12.52 120.3 22.8 133.65C16.11 122.04 12.29 108.57 12.29 94.21Z" />
                </g>
              </g>
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp3-happy" d="M60.82 64.54C60.82 70.39 58.01 75.12 54.54 75.12C51.07 75.12 48.26 70.39 48.26 64.54C48.26 58.69 51.07 53.95 54.54 53.95C58.01 53.95 60.82 58.69 60.82 64.54Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp3-happy" d="M123.62 64.54C123.62 70.39 120.81 75.12 117.34 75.12C113.87 75.12 111.06 70.39 111.06 64.54C111.06 58.69 113.87 53.95 117.34 53.95C120.81 53.95 123.62 58.69 123.62 64.54Z" />
                  </g>
                </g>
              </g>
              <path id="&lt;Path&gt;" class="shp4-happy" d="M28.66 93.28C31.91 122.04 56.31 144.4 85.94 144.4C115.57 144.4 139.97 122.04 143.21 93.28L28.66 93.28Z" />
              <path id="&lt;Path&gt;" class="shp5-happy" d="M46.38 128.66C56.7 138.41 70.61 144.4 85.94 144.4C100.6 144.4 113.98 138.92 124.15 129.9L123.62 128.66C85.16 109.91 46.9 128.4 46.38 128.66Z" />
            </g>
          </g>
        </svg>
      </div>
      <div class="tips-container">
        <p id="tip-1">Angry</p>
        <p id="tip-2">Sad</p>
        <p id="tip-3">Happy</p>
      </div>
      <div class="answer-container">
        <svg class="big-tick" id="red-tick-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
          <g class="cls-1-red-mark">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path class="cls-2-red-mark"
                      d="M47.86,89.76H46.12A43.64,43.64,0,0,1,2.48,46.12h0A43.64,43.64,0,0,1,46.12,2.48h1.74A43.64,43.64,0,0,1,91.5,46.12h0A43.64,43.64,0,0,1,47.86,89.76Z" />
                <path class="cls-2-red-mark"
                      d="M47.86,89.76H46.12A43.64,43.64,0,0,1,2.48,46.12h0A43.64,43.64,0,0,1,46.12,2.48h1.74A43.64,43.64,0,0,1,91.5,46.12h0A43.64,43.64,0,0,1,47.86,89.76Z" />
                <path class="cls-2-red-mark"
                      d="M47.86,92.25H46.12A46.13,46.13,0,0,1,46.12,0h1.74a46.13,46.13,0,0,1,0,92.25ZM46.12,5a41.16,41.16,0,0,0,0,82.31h1.74A41.16,41.16,0,0,0,47.86,5Z" />
                <path class="cls-3-red-mark"
                      d="M47.86,13a33.17,33.17,0,0,1,0,66.34H46.12a33.17,33.17,0,0,1,0-66.34h1.74m0-1.54H46.12a34.72,34.72,0,1,0,0,69.43h1.74a34.72,34.72,0,1,0,0-69.43Z" />
                <polygon class="cls-4-red-mark"
                         points="53.74 47.31 65.46 35.58 58.8 28.91 47.07 40.64 35.35 28.91 28.68 35.58 40.4 47.31 28.68 59.03 35.35 65.7 47.07 53.98 58.8 65.7 65.47 59.03 53.74 47.31" />
              </g>
            </g>
          </g>
        </svg>
        <svg class="big-tick" id="red-tick-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
          <g class="cls-1-red-mark">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path class="cls-2-red-mark"
                      d="M47.86,89.76H46.12A43.64,43.64,0,0,1,2.48,46.12h0A43.64,43.64,0,0,1,46.12,2.48h1.74A43.64,43.64,0,0,1,91.5,46.12h0A43.64,43.64,0,0,1,47.86,89.76Z" />
                <path class="cls-2-red-mark"
                      d="M47.86,89.76H46.12A43.64,43.64,0,0,1,2.48,46.12h0A43.64,43.64,0,0,1,46.12,2.48h1.74A43.64,43.64,0,0,1,91.5,46.12h0A43.64,43.64,0,0,1,47.86,89.76Z" />
                <path class="cls-2-red-mark"
                      d="M47.86,92.25H46.12A46.13,46.13,0,0,1,46.12,0h1.74a46.13,46.13,0,0,1,0,92.25ZM46.12,5a41.16,41.16,0,0,0,0,82.31h1.74A41.16,41.16,0,0,0,47.86,5Z" />
                <path class="cls-3-red-mark"
                      d="M47.86,13a33.17,33.17,0,0,1,0,66.34H46.12a33.17,33.17,0,0,1,0-66.34h1.74m0-1.54H46.12a34.72,34.72,0,1,0,0,69.43h1.74a34.72,34.72,0,1,0,0-69.43Z" />
                <polygon class="cls-4-red-mark"
                         points="53.74 47.31 65.46 35.58 58.8 28.91 47.07 40.64 35.35 28.91 28.68 35.58 40.4 47.31 28.68 59.03 35.35 65.7 47.07 53.98 58.8 65.7 65.47 59.03 53.74 47.31" />
              </g>
            </g>
          </g>
        </svg>
        <svg class="big-tick" id="green-tick-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
          <g class="cls-1-green-mark">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect class="cls-2-green-mark" x="2.48" y="2.48" width="89.01" height="87.28" rx="43.64" />
                <rect class="cls-2-green-mark" x="2.48" y="2.48" width="89.01" height="87.28" rx="43.64" />
                <path class="cls-2-green-mark"
                      d="M47.86,92.25H46.12A46.13,46.13,0,0,1,46.12,0h1.74a46.13,46.13,0,0,1,0,92.25ZM46.12,5a41.16,41.16,0,0,0,0,82.31h1.74A41.16,41.16,0,0,0,47.86,5Z" />
                <path class="cls-4-green-mark"
                      d="M47.86,13a33.17,33.17,0,0,1,0,66.34H46.12a33.17,33.17,0,0,1,0-66.34h1.74m0-1.54H46.12a34.72,34.72,0,1,0,0,69.43h1.74a34.72,34.72,0,1,0,0-69.43Z" />
                <polygon class="cls-5-green-mark"
                         points="65.83 28.23 41.58 52.48 31.98 42.88 25.31 49.55 41.58 65.82 72.5 34.9 65.83 28.23" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session3Page3",
  methods: {
    clickedHappy() {
      anime({
        targets: '#green-tick-1',
        easing: 'linear',
        opacity: 1,
        duration: 500
      })
      document.querySelector('#sad').style.visibility = 'hidden';
      document.querySelector('#angry').style.visibility = 'hidden';
      document.querySelector('#tip-1').style.visibility = 'hidden';
      document.querySelector('#tip-2').style.visibility = 'hidden';
    },
    clickedAngry() {
      anime({
        targets: '#red-tick-1',
        easing: 'linear',
        opacity: [
          {value: 1, duration: 200},
          {value: 0, duration: 100},
          {value: 1, duration: 200},
          {value: 0, duration: 100, delay: 500},
        ]
      })
    },
    clickedSad() {
      anime({
        targets: '#red-tick-2',
        easing: 'linear',
        opacity: [
          {value: 1, duration: 200},
          {value: 0, duration: 100},
          {value: 1, duration: 200},
          {value: 0, duration: 100, delay: 500},
        ]
      })
    },
  },
  mounted() {
    anime({
      targets: '.content-container',
      opacity: 1,
      easing: 'linear',
      delay: 1000,
      duration: 1000
    })
  }
}
</script>

<style scoped>
.tips-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #ffffff;
  font-size: 2vw;
  font-weight: bold;
  margin: 0 1vw;
  text-align: center;
}
.tips-container p {
  margin-bottom: 0;
  display: inline-block;
  width: 7vw;
}
.content-container {
  position: absolute;
  background-color: rgba(0, 206, 124, 0.75);
  border-radius: 30px;
  padding-top: 1vh;
  width: 60vw;
  bottom: 4vh;
  left: 20vw;
  display: flex;
  flex-direction: column;
  opacity: 0;
}
.content-container h1 {
  text-align: center;
  font-size: 3.5vw;
  color: #ffffff;
}
.emotes-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 1vw;
}
.emotes {
  height: auto;
  width: 10vw;
}
.answer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin: 1vw;
}
</style>