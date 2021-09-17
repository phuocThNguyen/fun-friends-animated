<template>
  <div class="interactive-container">
    <img src="../../assets/images/session2/623182-PNWC4R-119-resized.jpg" alt="worried" class="session-background">
    <div class="content-container">
      <h1>What could he be feeling?</h1>
      <div class="emotes-container">
        <svg class="emotes" @click="clickedCrying" id="crying" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 171" width="172" height="171">
          <title>Crying</title>
          <g id="Object">
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp0-crying" d="M0.98 85.4C0.87 38.33 38.95 0.08 86.03 -0.02C133.1 -0.12 171.35 37.96 171.45 85.03C171.55 132.11 133.47 170.35 86.4 170.45C39.32 170.56 1.08 132.48 0.98 85.4Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp1-crying" d="M130.65 12.37C139.17 25.61 144.12 41.35 144.16 58.26C144.26 105.33 106.18 143.57 59.11 143.68C42.76 143.71 27.48 139.14 14.48 131.18C29.68 154.8 56.23 170.42 86.4 170.35C133.47 170.25 171.55 132.01 171.45 84.93C171.38 54.21 155.06 27.32 130.65 12.37Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp2-crying" d="M12.58 94.37C12.49 50.66 47.84 15.16 91.55 15.06C117.09 15.01 139.83 27.07 154.34 45.82C140.63 22.13 114.98 6.21 85.64 6.28C41.93 6.37 6.58 41.88 6.67 85.58C6.71 103.74 12.87 120.46 23.18 133.79C16.47 122.19 12.61 108.73 12.58 94.37Z" />
                  </g>
                </g>
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp3-crying" d="M101.6 105.54C101.6 119.95 94.71 131.63 86.21 131.63C77.71 131.63 70.82 119.95 70.82 105.54C70.82 91.13 77.71 79.44 86.21 79.44C94.71 79.44 101.6 91.13 101.6 105.54Z" />
                <path id="&lt;Path&gt;" class="shp4-crying" d="M99.2 119.52C87.97 113.35 78.83 116.85 73.54 120.35C76.32 127.16 80.96 131.63 86.21 131.63C91.68 131.63 96.47 126.8 99.2 119.52Z" />
              </g>
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp5-crying" d="M59.86 68.27L37.43 82.55L37.98 155.5C44.65 160.09 52.01 163.75 59.86 166.3L59.86 68.27Z" />
                  <path id="&lt;Path&gt;" class="shp5-crying" d="M112.6 68.27L135.03 82.55L134.48 155.5C127.81 160.09 120.45 163.75 112.6 166.3L112.6 68.27Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp6-crying" d="M40.24 85.09C39.16 85.09 38.1 84.61 37.38 83.69C36.16 82.12 36.44 79.85 38.01 78.62L50.31 69.04L37.6 61.57C35.88 60.56 35.3 58.34 36.32 56.62C37.33 54.9 39.54 54.33 41.26 55.34L58.55 65.51C59.59 66.12 60.25 67.2 60.33 68.39C60.41 69.59 59.89 70.74 58.94 71.48L42.45 84.32C41.79 84.84 41.01 85.09 40.24 85.09Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp6-crying" d="M132.19 85.09C131.41 85.09 130.63 84.84 129.97 84.32L113.48 71.48C112.54 70.74 112.02 69.59 112.1 68.39C112.18 67.2 112.84 66.12 113.87 65.51L131.16 55.34C132.88 54.33 135.09 54.9 136.11 56.62C137.12 58.34 136.55 60.56 134.83 61.57L122.12 69.04L134.41 78.62C135.99 79.85 136.27 82.12 135.04 83.69C134.33 84.61 133.26 85.09 132.19 85.09Z" />
                  </g>
                </g>
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
        <svg class="emotes" @click="clickedWorried" id="worried" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171 171" width="171" height="171">
          <title>Worried</title>
          <g id="Object">
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp0-worried" d="M0.13 85.22C0.13 38.14 38.29 -0.02 85.36 -0.02C132.44 -0.02 170.6 38.14 170.6 85.22C170.6 132.29 132.44 170.45 85.36 170.45C38.29 170.45 0.13 132.29 0.13 85.22Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp1-worried" d="M129.96 12.47C138.45 25.72 143.37 41.48 143.37 58.38C143.37 105.46 105.21 143.62 58.13 143.62C41.78 143.62 26.51 139.01 13.54 131.03C28.69 154.68 55.19 170.35 85.36 170.35C132.44 170.35 170.6 132.19 170.6 85.12C170.6 54.39 154.34 27.47 129.96 12.47Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp2-worried" d="M11.71 94.21C11.71 50.5 47.14 15.07 90.85 15.07C116.4 15.07 139.11 27.18 153.58 45.97C139.91 22.25 114.3 6.28 84.96 6.28C41.25 6.28 5.82 41.71 5.82 85.41C5.82 103.57 11.94 120.3 22.23 133.65C15.54 122.04 11.71 108.57 11.71 94.21Z" />
                  </g>
                </g>
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <g id="&lt;Group&gt;">
                      <path id="&lt;Path&gt;" class="shp3-worried" d="M60.24 64.54C60.24 70.39 57.43 75.12 53.96 75.12C50.49 75.12 47.68 70.39 47.68 64.54C47.68 58.69 50.49 53.95 53.96 53.95C57.43 53.95 60.24 58.69 60.24 64.54Z" />
                    </g>
                    <g id="&lt;Group&gt;">
                      <path id="&lt;Path&gt;" class="shp3-worried" d="M123.05 64.54C123.05 70.39 120.23 75.12 116.77 75.12C113.3 75.12 110.48 70.39 110.48 64.54C110.48 58.69 113.3 53.95 116.77 53.95C120.23 53.95 123.05 58.69 123.05 64.54Z" />
                    </g>
                  </g>
                </g>
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp4-worried" d="M135.71 46.67C134.79 46.4 133.9 46.15 133.03 45.91C131.12 45.37 129.31 44.87 127.56 44.26C124.95 43.38 122.6 42.38 120.38 41.21C118.04 39.97 115.92 38.59 113.88 37C111.67 35.27 109.6 33.26 107.71 31.33C107.6 31.23 107.44 31.19 107.3 31.26C107.15 31.32 107.07 31.46 107.07 31.61C107.22 34.52 108.37 37.53 110.4 40.31C112.27 42.83 114.76 44.95 117.62 46.45C120.3 47.86 123.3 48.72 126.33 48.95C126.44 48.96 126.56 48.97 126.68 48.97C130.06 49.15 133.12 48.61 135.77 47.36C135.9 47.29 135.99 47.15 135.98 47C135.96 46.84 135.86 46.71 135.71 46.67Z" />
                <path id="&lt;Path&gt;" class="shp4-worried" d="M35.02 46.67C35.93 46.4 36.82 46.15 37.7 45.91C39.61 45.37 41.42 44.87 43.17 44.26C45.78 43.38 48.13 42.38 50.35 41.21C52.69 39.97 54.81 38.59 56.84 37C59.06 35.27 61.12 33.26 63.02 31.33C63.13 31.23 63.29 31.19 63.43 31.26C63.57 31.32 63.66 31.46 63.65 31.61C63.51 34.52 62.36 37.53 60.32 40.31C58.46 42.83 55.97 44.95 53.11 46.45C50.43 47.86 47.42 48.72 44.4 48.95C44.28 48.96 44.17 48.97 44.05 48.97C40.66 49.15 37.61 48.61 34.96 47.36C34.82 47.29 34.74 47.15 34.75 47C34.76 46.84 34.87 46.71 35.02 46.67Z" />
              </g>
              <path id="&lt;Path&gt;" class="shp5-worried" d="M53.13 121.9C52.24 122 51.73 120.9 51.74 120.07C51.78 116.29 52.79 112.42 54.74 108.57C56.6 105.04 59.24 101.77 62.42 99.08C68.7 93.82 77.06 90.79 85.36 90.76C93.8 90.6 102.23 93.64 108.46 99.03C114.92 104.57 118.86 112.42 118.99 120.05C119 120.92 118.41 122.04 117.44 121.87C116.64 121.73 115.99 120.64 115.4 120.15C114.49 119.39 113.55 118.68 112.58 118C110.65 116.63 108.63 115.41 106.54 114.3C98.87 110.21 90.16 108 81.44 108.76C75.89 109.24 70.5 110.91 65.55 113.44C62.57 114.97 59.76 116.79 57.11 118.82C56.1 119.58 54.45 121.65 53.21 121.89C53.19 121.89 53.16 121.89 53.13 121.9Z" />
            </g>
          </g>
        </svg>
      </div>
      <div class="tips-container">
        <p id="tip-1">Crying</p>
        <p id="tip-2">Happy</p>
        <p id="tip-3">Worried</p>
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
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session2Page8",
  methods: {
    clickedCrying() {
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
        targets: '#green-tick-1',
        easing: 'linear',
        opacity: 1,
        duration: 500
      })
      document.querySelector('#crying').style.visibility = 'hidden';
      document.querySelector('#worried').style.visibility = 'hidden';
      document.querySelector('#tip-1').style.visibility = 'hidden';
      document.querySelector('#tip-3').style.visibility = 'hidden';
    },
    clickedWorried() {
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
  width: 8vw;
}
.content-container {
  position: absolute;
  background-color: #00ce7c;
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