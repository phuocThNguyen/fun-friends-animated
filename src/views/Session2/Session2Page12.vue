<template>
  <div class="interactive-container">
    <img src="../../assets/images/session2/399-resized.jpg" alt="worried" class="session-background">
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
        <svg class="emotes" @click="clickedCool" id="cool" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 171" width="172" height="171">
          <title>Cool</title>
          <g id="Object">
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp0-cool" d="M0.7 85.18C0.7 38.11 38.86 -0.05 85.94 -0.05C133.01 -0.05 171.18 38.11 171.18 85.18C171.18 132.26 133.01 170.42 85.94 170.42C38.86 170.42 0.7 132.26 0.7 85.18Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp1-cool" d="M130.53 12.43C139.02 25.68 143.94 41.44 143.94 58.34C143.94 105.42 105.78 143.58 58.71 143.58C42.36 143.58 27.09 138.97 14.11 130.99C29.26 154.64 55.77 170.32 85.94 170.32C133.01 170.32 171.18 132.16 171.18 85.08C171.18 54.36 154.92 27.43 130.53 12.43Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp2-cool" d="M12.29 94.17C12.29 50.47 47.72 15.04 91.42 15.04C116.97 15.04 139.69 27.15 154.15 45.93C140.49 22.21 114.88 6.24 85.53 6.24C41.83 6.24 6.4 41.67 6.4 85.38C6.4 103.54 12.52 120.26 22.8 133.62C16.11 122.01 12.29 108.54 12.29 94.17Z" />
                  </g>
                </g>
                <path id="&lt;Path&gt;" class="shp3-cool" d="M51 103.08C48.81 100.94 45.29 103.3 46.43 106.15C52.72 121.88 68.11 133 86.09 133C103.78 133 118.95 122.25 125.44 106.93C126.62 104.13 123.08 101.72 120.9 103.83C108.42 115.92 81.94 133.13 51 103.08Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp4-cool" d="M146.1 52.84L111.49 55.71C111.08 55.71 110.67 55.73 110.26 55.78C109.95 55.81 98.8 57.14 86.38 57.87C86.09 57.89 85.79 57.89 85.5 57.87C73.08 57.14 61.92 55.81 61.6 55.77C61.2 55.73 60.8 55.71 60.39 55.71L25.78 52.84C18.97 52.71 15.21 56.06 15.57 61.98C15.57 62.14 16.39 66.7 18.01 75.69C18.8 80.31 19.67 84.11 22.5 88.29C23.97 90.47 26.16 92.1 28.5 93.3C29.69 93.91 30.95 94.38 32.25 94.69C33.35 94.95 34.55 94.94 35.72 95.01C36.75 95.06 38.44 95.14 39.47 95.14L47.37 95.14C49.59 95.14 50.4 95.14 50.66 95.14C54.31 95.14 58.04 94.28 61.31 92.65C66.45 90.08 69.43 85.84 71.57 80.68C73.58 75.81 77.61 72.12 81.91 69.31C84.36 67.7 87.52 67.7 89.97 69.31C92.29 70.83 94.44 72.62 96.3 74.67C97.67 76.18 98.78 78.08 99.9 79.83C101.16 81.8 101.97 84.14 103.28 86.14C104.61 88.16 106.07 89.81 108.1 91.21C111.5 93.54 115.62 94.81 119.72 95.09C120.22 95.13 120.72 95.14 121.22 95.14C121.48 95.14 122.29 95.14 124.5 95.14L132.41 95.14C133.44 95.14 135.13 95.06 136.16 95.01C137.33 94.94 138.53 94.95 139.62 94.69C140.93 94.38 142.19 93.91 143.38 93.3C145.72 92.1 147.91 90.47 149.38 88.29C152.21 84.11 153.07 80.31 153.87 75.69C155.49 66.7 156.3 62.14 156.31 61.98C156.67 56.06 152.91 52.71 146.1 52.84Z" />
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp5-cool" d="M121.22 95.14C121.48 95.14 122.29 95.14 124.5 95.14L132.41 95.14C133.44 95.14 135.13 95.06 136.16 95.01C137.33 94.94 138.53 94.95 139.62 94.69C140.93 94.38 142.19 93.91 143.38 93.3C145.72 92.1 147.91 90.47 149.38 88.29C152.21 84.11 153.07 80.31 153.87 75.69C155.49 66.7 156.3 62.14 156.31 61.98C156.36 61.16 156.32 60.39 156.22 59.66C140.27 84.35 120.94 90.31 108.52 91.47C111.84 93.63 115.78 94.82 119.72 95.09C120.22 95.13 120.72 95.14 121.22 95.14Z" />
                  <path id="&lt;Path&gt;" class="shp5-cool" d="M28.5 93.3C29.69 93.91 30.95 94.38 32.25 94.69C33.35 94.95 34.55 94.94 35.72 95.01C36.75 95.06 38.44 95.14 39.47 95.14L47.37 95.14C49.59 95.14 50.4 95.14 50.66 95.14C54.31 95.14 58.04 94.28 61.31 92.65C66.45 90.08 69.43 85.84 71.57 80.68C72.64 78.09 74.29 75.85 76.23 73.88C53.18 89.16 33.99 91.56 26.05 91.83C26.83 92.38 27.66 92.87 28.5 93.3Z" />
                </g>
              </g>
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
        <p id="tip-1">Angry</p>
        <p id="tip-2">Relaxed</p>
        <p id="tip-3">Excited</p>
      </div>
      <div class="answer-container">
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
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session2Page12",
  methods: {
    clickedAngry() {
      anime({
        targets: '#green-tick-1',
        easing: 'linear',
        opacity: 1,
        duration: 500
      })
      document.querySelector('#laugh').style.visibility = 'hidden';
      document.querySelector('#cool').style.visibility = 'hidden';
      document.querySelector('#tip-3').style.visibility = 'hidden';
      document.querySelector('#tip-2').style.visibility = 'hidden';
    },
    clickedCool() {
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
  margin: 0 .5vw;
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