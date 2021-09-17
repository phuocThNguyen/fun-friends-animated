<template>
  <div class="interactive-container">
    <img src="../../assets/images/session2/13705-resized.jpg" alt="worried" class="session-background">
    <div class="content-container">
      <h1>What could he be feeling?</h1>
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
      </div>
      <div class="tips-container">
        <p id="tip-1">Happy</p>
        <p id="tip-2">Worried</p>
        <p id="tip-3">Angry</p>
      </div>
      <div class="answer-container">
        <svg class="big-tick" id="red-tick-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
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
        <svg class="big-tick" id="green-tick-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
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
        <svg class="big-tick" id="red-tick-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 333" width="333" height="333">
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
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session2Page7",
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
      document.querySelector('#happy').style.visibility = 'hidden';
      document.querySelector('#angry').style.visibility = 'hidden';
      document.querySelector('#tip-1').style.visibility = 'hidden';
      document.querySelector('#tip-3').style.visibility = 'hidden';
    },
    clickedAngry() {
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