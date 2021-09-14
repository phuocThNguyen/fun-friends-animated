<template>
  <div class="interactive-container">
    <img src="../../assets/images/session3/27622-resized.jpg" alt="grandpa-and-Tom" class="session-background">
    <div class="text-box">
      <h1>Grandma loves help in the garden</h1>
      <p>Grandma and Annie enjoy spending time together
      gardening and laughing.</p>
      <p>&nbsp;&nbsp;-&nbsp;How do you think Grandma is feeling?</p>
      <div class="content-container">
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
          <svg class="small-tick" id="red-tick-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
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
        </div>
      </div>
      <p>&nbsp;&nbsp;-&nbsp;How do you think Annie is feeling?</p>
      <div class="content-container">
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
          <svg class="small-tick" id="red-tick-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
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
        </div>
      </div>
      <p>&nbsp;&nbsp;-&nbsp;How can Annie help her Grandma?</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session3Page8",
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
    let animation = anime.timeline({
      delay: 500,
      duration: 500,
      easing: 'linear'
    });
    animation
        .add({
          targets: ".text-box",
          opacity: 1
        })
        .add({
          targets: ".notice-box",
          delay: 2000,
          opacity: 1
        })
  }
}
</script>

<style scoped>

.text-box {
  position: absolute;
  top: 5vh;
  left: 2vw;
  width: 35vw;
  padding: 1vw;
  background-color: rgba(255,255,255,0.8);
  opacity: 0;
}
.text-box h1 {
  font-size: 2.5vw;
  margin-bottom: 3vh;
}
.text-box p {
  font-size: 1.8vw;
  margin-bottom: 1.5vh;
}
.small-tick {
  height: auto;
  width: 3vw;
  opacity: 0;
  margin: 1vh 0;
}
.tips-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.tips-container p {
  color: #000000;
  font-weight: bold;
  font-size: 1vw;
  margin-bottom: 0;
}
.content-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.emotes-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}
.emotes {
  height: auto;
  width: 3vw;
}
.answer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
}
.shp0-calm { fill: #ffd05d }
.shp1-calm { fill: #fdc453 }
.shp2-calm { fill: #ffd77f }
.shp3-calm { fill: #5e4939 }
.shp4-calm { fill: #303030 }
</style>