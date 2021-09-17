<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/21944-resized.jpg" alt="friends" class="session-background">
    <div class="content-container" id="girl">
      <h1>What is the girl feeling?</h1>
      <div class="emotes-container">
        <svg class="emotes" @click="clickedAngry1" id="angry-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171 171" width="171" height="171">
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
        <svg class="emotes" @click="clickedHappy1" id="calm-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 171" width="172" height="171">
          <title>Calm</title>
          <g id="Object">
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp0-calm" d="M0.55 85.2C0.55 38.13 38.71 -0.04 85.79 -0.04C132.86 -0.04 171.02 38.13 171.02 85.2C171.02 132.27 132.86 170.44 85.79 170.44C38.71 170.44 0.55 132.27 0.55 85.2Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp1-calm" d="M130.38 12.45C138.87 25.7 143.79 41.46 143.79 58.36C143.79 105.44 105.63 143.6 58.56 143.6C42.21 143.6 26.94 138.99 13.96 131.01C29.11 154.66 55.62 170.34 85.79 170.34C132.86 170.34 171.02 132.17 171.02 85.1C171.02 54.37 154.76 27.45 130.38 12.45Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp2-calm" d="M12.14 94.19C12.14 50.49 47.57 15.06 91.27 15.06C116.82 15.06 139.53 27.16 154 45.95C140.34 22.23 114.73 6.26 85.38 6.26C41.68 6.26 6.25 41.69 6.25 85.39C6.25 103.55 12.37 120.28 22.65 133.63C15.96 122.02 12.14 108.55 12.14 94.19Z" />
                  </g>
                </g>
                <path id="&lt;Path&gt;" class="shp3-calm" d="M50.85 98.1C48.66 95.96 45.14 98.32 46.27 101.16C52.57 116.9 67.96 128.02 85.94 128.02C103.63 128.02 118.8 117.27 125.29 101.95C126.47 99.15 122.92 96.73 120.74 98.85C108.27 110.94 81.79 128.15 50.85 98.1Z" />
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp4-calm" d="M63.78 72.98C61.37 66.95 55.62 63.06 49.12 63.06C42.77 63.06 37.06 66.84 34.58 72.69C34.1 73.82 34.48 75.08 35.48 75.77C36.49 76.46 37.81 76.35 38.68 75.5C43.41 70.92 50.89 67.24 59.65 75.75C60.15 76.23 60.79 76.48 61.43 76.48C61.92 76.48 62.41 76.33 62.84 76.04C63.85 75.37 64.24 74.11 63.78 72.98Z" />
                  <path id="&lt;Path&gt;" class="shp4-calm" d="M137.01 72.98C134.6 66.95 128.85 63.06 122.35 63.06C116 63.06 110.29 66.84 107.81 72.69C107.33 73.81 107.71 75.08 108.71 75.77C109.72 76.46 111.04 76.35 111.91 75.5C116.64 70.92 124.12 67.24 132.89 75.75C133.38 76.23 134.02 76.48 134.66 76.48C135.15 76.48 135.64 76.33 136.07 76.04C137.08 75.37 137.47 74.11 137.01 72.98Z" />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="tips-container">
        <p id="tip-1">Angry, Tensed</p>
        <p>Happy, Calm</p>
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
      </div>
    </div>
    <div class="content-container" id="dog">
      <h1>What is the dog feeling?</h1>
      <div class="emotes-container">
        <svg class="emotes" @click="clickedAngry2" id="angry-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171 171" width="171" height="171">
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
        <svg class="emotes" @click="clickedHappy2" id="calm-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 171" width="172" height="171">
          <title>Calm</title>
          <g id="Object">
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp0-calm" d="M0.55 85.2C0.55 38.13 38.71 -0.04 85.79 -0.04C132.86 -0.04 171.02 38.13 171.02 85.2C171.02 132.27 132.86 170.44 85.79 170.44C38.71 170.44 0.55 132.27 0.55 85.2Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp1-calm" d="M130.38 12.45C138.87 25.7 143.79 41.46 143.79 58.36C143.79 105.44 105.63 143.6 58.56 143.6C42.21 143.6 26.94 138.99 13.96 131.01C29.11 154.66 55.62 170.34 85.79 170.34C132.86 170.34 171.02 132.17 171.02 85.1C171.02 54.37 154.76 27.45 130.38 12.45Z" />
                  </g>
                  <g id="&lt;Group&gt;">
                    <path id="&lt;Path&gt;" class="shp2-calm" d="M12.14 94.19C12.14 50.49 47.57 15.06 91.27 15.06C116.82 15.06 139.53 27.16 154 45.95C140.34 22.23 114.73 6.26 85.38 6.26C41.68 6.26 6.25 41.69 6.25 85.39C6.25 103.55 12.37 120.28 22.65 133.63C15.96 122.02 12.14 108.55 12.14 94.19Z" />
                  </g>
                </g>
                <path id="&lt;Path&gt;" class="shp3-calm" d="M50.85 98.1C48.66 95.96 45.14 98.32 46.27 101.16C52.57 116.9 67.96 128.02 85.94 128.02C103.63 128.02 118.8 117.27 125.29 101.95C126.47 99.15 122.92 96.73 120.74 98.85C108.27 110.94 81.79 128.15 50.85 98.1Z" />
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp4-calm" d="M63.78 72.98C61.37 66.95 55.62 63.06 49.12 63.06C42.77 63.06 37.06 66.84 34.58 72.69C34.1 73.82 34.48 75.08 35.48 75.77C36.49 76.46 37.81 76.35 38.68 75.5C43.41 70.92 50.89 67.24 59.65 75.75C60.15 76.23 60.79 76.48 61.43 76.48C61.92 76.48 62.41 76.33 62.84 76.04C63.85 75.37 64.24 74.11 63.78 72.98Z" />
                  <path id="&lt;Path&gt;" class="shp4-calm" d="M137.01 72.98C134.6 66.95 128.85 63.06 122.35 63.06C116 63.06 110.29 66.84 107.81 72.69C107.33 73.81 107.71 75.08 108.71 75.77C109.72 76.46 111.04 76.35 111.91 75.5C116.64 70.92 124.12 67.24 132.89 75.75C133.38 76.23 134.02 76.48 134.66 76.48C135.15 76.48 135.64 76.33 136.07 76.04C137.08 75.37 137.47 74.11 137.01 72.98Z" />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="tips-container">
        <p id="tip-2">Angry, Tensed</p>
        <p>Happy, Calm</p>
      </div>
      <div class="answer-container">
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
        <svg class="big-tick" id="green-tick-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
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
  name: "Session3Page6",
  methods: {
    clickedHappy1() {
      anime({
        targets: '#green-tick-1',
        easing: 'linear',
        opacity: 1,
        duration: 500
      })
      document.querySelector('#tip-1').style.visibility = 'hidden';
      document.querySelector('#angry-1').style.visibility = 'hidden';
    },
    clickedAngry1() {
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
    clickedHappy2() {
      anime({
        targets: '#green-tick-2',
        easing: 'linear',
        opacity: 1,
        duration: 500
      })
      document.querySelector('#tip-2').style.visibility = 'hidden';
      document.querySelector('#angry-2').style.visibility = 'hidden';
    },
    clickedAngry2() {
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
#girl {
  top: 5vh;
  left: 2vw;
}
#dog {
  top: 45vh;
  left: 2vw;
}
.tips-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.tips-container p {
  color: #ffffff;
  font-weight: bold;
  font-size: 2vw;
  margin-bottom: 0;
}
.content-container {
  position: absolute;
  background-color: rgba(0, 206, 124, 0.75);
  border-radius: 30px;
  padding-top: 1vh;
  width: 50vw;
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
.shp0-calm { fill: #ffd05d }
.shp1-calm { fill: #fdc453 }
.shp2-calm { fill: #ffd77f }
.shp3-calm { fill: #5e4939 }
.shp4-calm { fill: #303030 }
</style>