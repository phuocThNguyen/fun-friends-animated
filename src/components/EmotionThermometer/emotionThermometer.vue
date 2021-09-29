<template>
  <div class="emotions-meter-container">
    <div class="thermometer">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div class="thermo-mask">
      <div class="bar bar-mask" @click="handleClick" id="fifth"></div>
      <div class="bar bar-mask" @click="handleClick" id="fourth"></div>
      <div class="bar bar-mask" @click="handleClick" id="third"></div>
      <div class="bar bar-mask" @click="handleClick" id="second"></div>
      <div class="bar bar-mask" @click="handleClick" id="first"></div>
    </div>
    <div class="emotions-container">
      <svg class="emotions" id="angry" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171 171" width="171" height="171">
        <title>Angry</title>
        <g id="Object">
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
      <svg class="emotions" id="crying" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 171" width="172" height="171">
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
      <svg class="emotions" id="worried" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171 171" width="171" height="171">
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
      <svg class="emotions" id="ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 171" width="172" height="171">
        <title>OK</title>
        <g id="Object">
          <g id="&lt;Group&gt;">
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp0-ok" d="M0.7 85.16C0.7 38.09 38.86 -0.07 85.94 -0.07C133.01 -0.07 171.18 38.09 171.18 85.16C171.18 132.24 133.01 170.4 85.94 170.4C38.86 170.4 0.7 132.24 0.7 85.16Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1-ok" d="M130.53 12.41C139.02 25.67 143.94 41.42 143.94 58.33C143.94 105.4 105.78 143.56 58.71 143.56C42.36 143.56 27.09 138.96 14.11 130.98C29.26 154.62 55.77 170.3 85.94 170.3C133.01 170.3 171.18 132.14 171.18 85.06C171.18 54.34 154.92 27.41 130.53 12.41Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp2-ok" d="M12.29 94.16C12.29 50.45 47.72 15.02 91.42 15.02C116.97 15.02 139.69 27.13 154.15 45.92C140.49 22.19 114.88 6.22 85.53 6.22C41.83 6.22 6.4 41.65 6.4 85.36C6.4 103.52 12.52 120.24 22.8 133.6C16.11 121.99 12.29 108.52 12.29 94.16Z" />
                </g>
              </g>
              <path id="&lt;Path&gt;" class="shp3-ok" d="M51 98.06C48.81 95.93 45.29 98.29 46.43 101.13C52.72 116.86 68.11 127.98 86.09 127.98C103.78 127.98 118.95 117.23 125.44 101.91C126.62 99.12 123.08 96.7 120.9 98.81C108.42 110.9 81.94 128.11 51 98.06Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp4-ok" d="M60.82 69.91C60.82 75.76 58.01 80.5 54.54 80.5C51.07 80.5 48.26 75.76 48.26 69.91C48.26 64.06 51.07 59.32 54.54 59.32C58.01 59.32 60.82 64.06 60.82 69.91Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp4-ok" d="M123.62 69.91C123.62 75.76 120.81 80.5 117.34 80.5C113.87 80.5 111.06 75.76 111.06 69.91C111.06 64.06 113.87 59.32 117.34 59.32C120.81 59.32 123.62 64.06 123.62 69.91Z" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <svg class="emotions" id="happy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 171" width="172" height="171">
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
  </div>
</template>

<script>
export default {
  name: "emotionThermometer",
  methods: {
    handleClick(e) {
      switch (e.target.id) {
        case 'first':
          this.changeOpacities(['1','1','1','1','0'])
          this.toggleEmotions(document.getElementById('happy'));
          break;
        case 'second':
          this.changeOpacities(['1','1','1','0','0'])
          this.toggleEmotions(document.getElementById('ok'));
          break;
        case 'third':
          this.changeOpacities(['1','1','0','0','0'])
          this.toggleEmotions(document.getElementById('worried'));
          break;
        case 'fourth':
          this.changeOpacities(['1','0','0','0','0'])
          this.toggleEmotions(document.getElementById('crying'));
          break;
        case 'fifth':
          this.changeOpacities(['0','0','0','0','0'])
          this.toggleEmotions(document.getElementById('angry'));
          break;
      }
    },
    toggleEmotions(target) {
      let emotions = document.getElementsByClassName('emotions');
      emotions.forEach(emotion => {
        emotion.style.opacity = '0.2';
      })
      target.style.opacity = '1';
    },
    changeOpacities(opacitiesArray) {
      let thermoBars = document.getElementsByClassName('thermo-mask')[0].children;
      for(let i = 0; i < thermoBars.length; i++) {
        thermoBars[i].style.opacity = opacitiesArray[i];
      }
    }
  },
}
</script>

<style scoped>
.thermo-mask {
  position: absolute;
  background-color: rgba(0,0,0,0);
  opacity: 1;
}
.thermometer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background: rgb(0,212,255);
  background: linear-gradient(0deg, rgba(0,212,255,1) 0%, rgba(255,160,0,1) 85%);
  border-radius: 70px;
}
.bar {
  width: 5vw;
  height: 10vh;
  border: 2px solid #000000;
  border-bottom: transparent;
}
.bar-mask {
  background-color: rgb(200, 229, 243);
}
.bar:nth-of-type(1) {
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
}
.bar:nth-of-type(5) {
  border-bottom: 2px solid #000000;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
}
#fifth {
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
}
#fourth {}
#third {}
#second {}
#first {
  border-bottom: 2px solid #000000;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
}
.emotions {
  height: auto;
  width: 5vw;
  opacity: 0.2;
}
.emotions-container {
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.emotions-meter-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 15vw;
}
tspan { white-space:pre }
.shp0-angry { fill: #f16d24 }
.shp1-angry { fill: #ef6421 }
.shp2-angry { fill: #f2824e }
.shp3-angry { fill: #303030 }
.shp4-angry { fill: #5e4939 }
.shp0-crying { fill: #ffd05d }
.shp1-crying { fill: #fdc453 }
.shp2-crying { fill: #ffd77f }
.shp3-crying { fill: #695342 }
.shp4-crying { fill: #f06669 }
.shp5-crying { fill: #7cc4e8 }
.shp6-crying { fill: #303030 }
.shp0-worried { fill: #ffd05d }
.shp1-worried { fill: #fdc453 }
.shp2-worried { fill: #ffd77f }
.shp3-worried { fill: #303030 }
.shp4-worried { fill: #414042 }
.shp5-worried { fill: #5e4939 }
.shp0-ok { fill: #ffd05d }
.shp1-ok { fill: #fdc453 }
.shp2-ok { fill: #ffd77f }
.shp3-ok { fill: #5e4939 }
.shp4-ok { fill: #303030 }
.shp0-happy { fill: #ffd05d }
.shp1-happy { fill: #fdc453 }
.shp2-happy { fill: #ffd77f }
.shp3-happy { fill: #303030 }
.shp4-happy { fill: #695342 }
.shp5-happy { fill: #f06669 }
</style>