<template>
  <div class="interactive-container">
    <img src="../../assets/images/session2/4729-resized.jpg" alt="worried" class="session-background">
    <div class="content-container">
      <h1>What could she be feeling?</h1>
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
        <svg class="emotes" @click="clickedTear" id="tear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 171" width="172" height="171">
          <title>Tear</title>
          <g id="Object">
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp0-tear" d="M0.55 85.22C0.55 38.14 38.71 -0.02 85.79 -0.02C132.86 -0.02 171.02 38.14 171.02 85.22C171.02 132.29 132.86 170.45 85.79 170.45C38.71 170.45 0.55 132.29 0.55 85.22Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp1-tear" d="M130.38 12.47C138.87 25.72 143.79 41.48 143.79 58.38C143.79 105.46 105.63 143.62 58.56 143.62C42.21 143.62 26.94 139.01 13.96 131.03C29.11 154.68 55.62 170.35 85.79 170.35C132.86 170.35 171.02 132.19 171.02 85.12C171.02 54.39 154.76 27.47 130.38 12.47Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp2-tear" d="M12.14 94.21C12.14 50.5 47.57 15.07 91.27 15.07C116.82 15.07 139.53 27.18 154 45.97C140.34 22.25 114.73 6.28 85.38 6.28C41.68 6.28 6.25 41.71 6.25 85.41C6.25 103.57 12.37 120.3 22.65 133.65C15.96 122.04 12.14 108.57 12.14 94.21Z" />
                  </g>
                </g>
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <g id="&lt;Group&gt;">
                      <path id="&lt;Path&gt;" class="shp3-tear" d="M60.67 64.54C60.67 70.39 57.85 75.12 54.39 75.12C50.92 75.12 48.11 70.39 48.11 64.54C48.11 58.69 50.92 53.95 54.39 53.95C57.85 53.95 60.67 58.69 60.67 64.54Z" />
                    </g>
                    <g id="&lt;Group&gt;">
                      <path id="&lt;Path&gt;" class="shp3-tear" d="M123.47 64.54C123.47 70.39 120.66 75.12 117.19 75.12C113.72 75.12 110.91 70.39 110.91 64.54C110.91 58.69 113.72 53.95 117.19 53.95C120.66 53.95 123.47 58.69 123.47 64.54Z" />
                    </g>
                  </g>
                </g>
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp4-tear" d="M136.14 46.67C135.22 46.4 134.33 46.15 133.45 45.91C131.54 45.37 129.73 44.87 127.98 44.26C125.37 43.38 123.02 42.38 120.8 41.21C118.46 39.97 116.34 38.59 114.31 37C112.09 35.27 110.03 33.26 108.13 31.33C108.02 31.23 107.86 31.19 107.72 31.26C107.58 31.32 107.49 31.46 107.5 31.61C107.64 34.52 108.79 37.53 110.83 40.31C112.69 42.83 115.18 44.95 118.04 46.45C120.73 47.86 123.73 48.72 126.75 48.95C126.87 48.96 126.99 48.97 127.1 48.97C130.49 49.15 133.55 48.61 136.19 47.36C136.33 47.29 136.41 47.15 136.4 47C136.39 46.84 136.28 46.71 136.14 46.67Z" />
                <path id="&lt;Path&gt;" class="shp4-tear" d="M35.44 46.67C36.36 46.4 37.25 46.15 38.12 45.91C40.04 45.37 41.84 44.87 43.59 44.26C46.2 43.38 48.55 42.38 50.77 41.21C53.11 39.97 55.23 38.59 57.27 37C59.49 35.27 61.55 33.26 63.44 31.33C63.55 31.23 63.72 31.19 63.86 31.26C64 31.32 64.08 31.46 64.08 31.61C63.93 34.52 62.78 37.53 60.75 40.31C58.88 42.83 56.39 44.95 53.54 46.45C50.85 47.86 47.85 48.72 44.82 48.95C44.71 48.96 44.59 48.97 44.47 48.97C41.09 49.15 38.03 48.61 35.39 47.36C35.25 47.29 35.16 47.15 35.17 47C35.19 46.84 35.29 46.71 35.44 46.67Z" />
              </g>
              <path id="&lt;Path&gt;" class="shp5-tear" d="M103.78 98.14C98.93 93.94 92.36 91.57 85.78 91.7C79.32 91.72 72.81 94.08 67.91 98.18C65.43 100.27 63.37 102.82 61.93 105.58C60.41 108.57 59.62 111.59 59.59 114.54C59.58 115.25 60.02 115.88 60.69 116.11C61.36 116.34 62.1 116.12 62.53 115.56C64.3 113.28 65.97 111.47 67.64 110.03C69.44 108.5 71.36 107.22 73.33 106.23C77.25 104.27 81.59 103.22 85.87 103.2C90.26 103.17 94.42 104.16 98.26 106.15C102.21 108.18 105.84 111.34 109.03 115.55C109.35 115.97 109.84 116.2 110.34 116.2C110.52 116.2 110.7 116.17 110.88 116.11C111.55 115.88 112 115.24 111.99 114.53C111.9 108.59 108.83 102.46 103.78 98.14Z" />
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp6-tear" d="M124.7 80.62C107.87 99.87 100.39 115.01 102.26 126.05C102.26 138.45 112.31 148.5 124.7 148.5C137.1 148.5 147.15 138.45 147.15 126.05C149.02 115.01 141.54 99.87 124.7 80.62Z" />
                <path id="&lt;Path&gt;" class="shp7-tear" d="M108.02 141.06C112.12 145.63 118.08 148.5 124.7 148.5C137.1 148.5 147.15 138.45 147.15 126.05C147.93 121.41 146.3 114.84 142.27 106.33C137.8 135.43 119.53 140.72 108.02 141.06Z" />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="tips-container">
        <p id="tip-1">Angry</p>
        <p id="tip-2">Happy</p>
        <p id="tip-3">Sad</p>
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
  name: "Session2Page10",
  methods: {
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
    clickedHappy() {
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
    clickedTear() {
      anime({
        targets: '#green-tick-1',
        easing: 'linear',
        opacity: 1,
        duration: 500
      })
      document.querySelector('#angry').style.visibility = 'hidden';
      document.querySelector('#happy').style.visibility = 'hidden';
      document.querySelector('#tip-2').style.visibility = 'hidden';
      document.querySelector('#tip-1').style.visibility = 'hidden';
    }
  },
  mounted() {
    anime({
      targets: '.content-container',
      opacity: 0.95,
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
  background-color: #00ce7c;
  border-radius: 30px;
  padding-top: 1vh;
  width: 60vw;
  top: 45vh;
  left: 1vw;
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