<template>
  <div class="interactive-container">
    <img src="../../assets/images/session2/11382-resized.jpg" alt="worried" class="session-background">
    <div class="content-container">
      <h1>What could she be feeling?</h1>
      <div class="emotes-container">
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
        <svg class="emotes" @click="clickedLaugh" id="laugh" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 171" width="202" height="171">
          <title>LOL</title>
          <g id="Object">
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp0-lol" d="M15.82 85.2C15.82 38.13 53.99 -0.04 101.06 -0.04C148.14 -0.04 186.3 38.13 186.3 85.2C186.3 132.27 148.14 170.44 101.06 170.44C53.99 170.44 15.82 132.27 15.82 85.2Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp1-lol" d="M145.66 12.45C154.14 25.7 159.07 41.46 159.07 58.36C159.07 105.44 120.9 143.6 73.83 143.6C57.48 143.6 42.21 138.99 29.23 131.01C44.38 154.66 70.89 170.34 101.06 170.34C148.14 170.34 186.3 132.17 186.3 85.1C186.3 54.37 170.04 27.45 145.66 12.45Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp2-lol" d="M27.41 94.19C27.41 50.49 62.84 15.06 106.55 15.06C132.09 15.06 154.81 27.16 169.28 45.95C155.61 22.23 130 6.26 100.66 6.26C56.95 6.26 21.52 41.69 21.52 85.39C21.52 103.55 27.64 120.28 37.92 133.63C31.24 122.02 27.41 108.55 27.41 94.19Z" />
                  </g>
                </g>
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp3-lol" d="M55.08 86.58C54.01 86.58 52.95 86.1 52.23 85.18C51.01 83.61 51.29 81.34 52.86 80.11L65.16 70.54L52.45 63.06C50.73 62.05 50.15 59.83 51.17 58.12C52.18 56.4 54.39 55.82 56.11 56.83L73.4 67C74.43 67.61 75.1 68.69 75.18 69.88C75.25 71.08 74.74 72.23 73.79 72.97L57.3 85.81C56.64 86.33 55.86 86.58 55.08 86.58Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp3-lol" d="M147.04 86.58C146.26 86.58 145.48 86.33 144.82 85.81L128.33 72.97C127.39 72.23 126.87 71.08 126.95 69.88C127.02 68.69 127.69 67.61 128.72 67L146.01 56.83C147.73 55.82 149.94 56.39 150.96 58.12C151.97 59.83 151.39 62.05 149.67 63.06L136.97 70.54L149.26 80.11C150.83 81.34 151.12 83.61 149.89 85.18C149.18 86.1 148.11 86.58 147.04 86.58Z" />
                  </g>
                </g>
              </g>
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp4-lol" d="M154.92 82.73C150.72 107.95 152.31 124.77 159.7 133.18C166.22 143.73 180.05 147 190.59 140.48C201.14 133.97 204.41 120.13 197.9 109.59C193.68 99.21 179.36 90.26 154.92 82.73Z" />
                  <path id="&lt;Path&gt;" class="shp5-lol" d="M172.49 142.92C178.38 144.65 184.96 143.96 190.59 140.48C201.14 133.97 204.41 120.13 197.9 109.59C196.12 105.23 191.28 100.49 183.38 95.37C194.87 122.47 182.1 136.59 172.49 142.92Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp4-lol" d="M46.28 82.18C22.03 90.29 7.92 99.58 3.95 110.05C-2.31 120.75 1.28 134.5 11.98 140.76C22.68 147.02 36.43 143.43 42.7 132.73C49.89 124.15 51.08 107.3 46.28 82.18Z" />
                  <path id="&lt;Path&gt;" class="shp5-lol" d="M1.34 125.91C2.58 131.93 6.27 137.41 11.98 140.76C22.68 147.02 36.43 143.43 42.7 132.73C45.71 129.12 47.63 122.62 48.45 113.24C29.9 136.1 11.44 131.43 1.34 125.91Z" />
                </g>
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp6-lol" d="M52.23 96.49C55 121.01 75.8 140.07 101.06 140.07C126.32 140.07 147.12 121.01 149.89 96.49L52.23 96.49Z" />
                <path id="&lt;Path&gt;" class="shp7-lol" d="M67.33 126.65C76.13 134.97 88 140.07 101.06 140.07C113.56 140.07 124.97 135.4 133.64 127.71L133.19 126.66C100.4 110.67 67.78 126.44 67.33 126.65Z" />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="tips-container">
        <p id="tip-1">Happy</p>
        <p id="tip-2">Worried</p>
        <p id="tip-3">Excited</p>
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
  name: "Session2Page11",
  methods: {
    clickedHappy() {
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
    clickedWorried() {
      anime({
        targets: '#green-tick-1',
        easing: 'linear',
        opacity: 1,
        duration: 500
      })
      document.querySelector('#laugh').style.visibility = 'hidden';
      document.querySelector('#happy').style.visibility = 'hidden';
      document.querySelector('#tip-3').style.visibility = 'hidden';
      document.querySelector('#tip-1').style.visibility = 'hidden';

    },
    clickedLaugh() {
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
#laugh {
  height: auto;
  width: 12vw;
}
#tip-3 {
  width: 9vw;
}
#red-tick-2 {
  margin: 0 1vw;
}
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