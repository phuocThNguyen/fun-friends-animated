<template>
  <div class="interactive-container">
    <div class="choice-container" id="choice-1" @click="toggleChoice(1)">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session12/rewards/playing-music.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session12/rewards/playing-music.jpg"
        alt="" class="image"
      />
      <div class="text">Playing music</div>
    </div>
    <div class="choice-container" id="choice-2" @click="toggleChoice(2)">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session12/rewards/swimming.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session12/rewards/swimming.jpg"
        alt="" class="image"
      />
      <div class="text">Swimming</div>
    </div>
    <div class="choice-container" id="choice-3" @click="toggleChoice(3)">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session12/rewards/reading.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session12/rewards/reading.jpg"
        alt="" class="image"
      />
      <div class="text">Reading books</div>
    </div>
    <div class="choice-container" id="choice-4" @click="toggleChoice(4)">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session12/rewards/drawing.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session12/rewards/drawing.jpg"
        alt="" class="image"
      />
      <div class="text">Drawing</div>
    </div>

    <div class="js-container animation-container"/>
    <svg class="balloons" id="blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 188 358" width="188" height="358">
      <g id="Layer 1">
        <g id="balloon-blue">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-blue" d="M97.47 183.88C94.03 194.31 95.79 202.81 100.56 212.51C109.21 230.14 110.25 243.63 107.92 262.91C104.16 293.97 112.32 326.42 114.74 357.26C114.79 357.85 116.04 357.55 115.99 356.93C113.66 327.18 107.85 297.71 108.82 267.74C109.2 256.16 112.06 245.55 110.29 233.91C107.56 215.9 92.23 203.53 98.67 184.03C98.9 183.33 97.65 183.33 97.47 183.88Z" />
          </g>
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp1-blue" d="M188.02 101.98C188.02 153.82 155.47 196.57 106.12 202.48C105.07 202.6 103.99 202.72 102.91 202.81C100.09 203.05 97.21 203.17 94.3 203.17C93.04 203.17 91.78 203.15 90.55 203.11C36.76 201.14 0.61 156.61 0.61 101.98C0.61 46.09 38.44 0.76 94.3 0.76C98.41 0.76 102.4 1 106.27 1.48C155.53 7.45 188.02 50.17 188.02 101.98Z" />
            <path id="&lt;Path&gt;" class="shp1-blue" d="M117.13 214.12C113.59 215.74 109.57 214.87 105.94 216.17C105.91 216.17 105.85 216.19 105.82 216.22C102.76 217.33 100.3 219.52 96.76 219.14C93.73 218.8 91.27 216.52 88.24 216.37C88.39 216.37 79.15 216.61 81.04 215.02C85.18 211.57 88.6 209.53 90.31 204.07C90.4 203.77 90.46 203.44 90.55 203.11C90.88 201.04 90.88 198.28 92.59 197.2C95.08 197.53 100.54 196.93 103.21 199.09C103.93 199.72 104.53 200.42 105.1 201.1C105.46 201.55 105.82 202 106.12 202.48C109.12 206.77 110.59 211.48 117.13 214.12Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp2-blue" d="M106.12 202.48C109.12 206.77 110.59 211.48 117.13 214.12C113.59 215.74 109.57 214.87 105.94 216.17C105.91 216.17 105.85 216.19 105.82 216.22C105.34 215.23 104.89 214.24 104.47 213.22C102.13 207.19 100.9 204.97 102.91 202.81C103.42 202.27 104.14 201.7 105.1 201.1C106 200.53 107.11 199.93 108.46 199.21C135.97 185.71 161.47 161.71 167.95 130.21C174.46 98.23 169.96 59.23 145.81 33.22C134.29 20.83 121.24 9.89 106.27 1.48C155.53 7.45 188.02 50.17 188.02 101.98C188.02 153.82 155.47 196.57 106.12 202.48Z" />
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp3-blue" d="M31.33 65.03C30.04 65.03 28.74 64.7 27.55 64.01C23.97 61.92 22.77 57.32 24.86 53.75C35.01 36.4 47.52 25.94 66.7 18.79C70.59 17.34 74.9 19.32 76.35 23.2C77.79 27.08 75.82 31.4 71.94 32.85C56.06 38.76 46.18 47.01 37.81 61.32C36.41 63.71 33.9 65.03 31.33 65.03Z" />
            <path id="&lt;Path&gt;" class="shp3-blue" d="M14.81 76.64C14.9 72.19 18.59 68.65 23.04 68.74C27.49 68.83 31.03 72.51 30.94 76.97C30.86 81.42 27.17 84.96 22.72 84.87C18.26 84.78 14.73 81.1 14.81 76.64Z" />
          </g>
        </g>
      </g>
    </svg>
    <svg class="balloons" id="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 381" width="160" height="381">
      <g id="Layer 1">
        <g id="balloon-green">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-green" d="M81.58 206.49C76.18 218.38 78.77 228.1 83.41 239.92C89.71 255.99 87.25 269.99 83.49 286.2C76.41 316.67 81.04 349.67 80.13 380.61C80.11 381.28 81.38 381.11 81.4 380.53C82.28 350.66 79.66 320.69 83.86 290.96C85.46 279.66 90.43 269.16 88.94 257.48C86.7 239.86 74.67 224.5 82.78 206.65C83.08 205.99 81.81 205.97 81.58 206.49Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp1-green" d="M159.27 89.49C153 166.77 100.17 197.34 84.24 204.81C83.85 204.99 83.49 205.18 83.16 205.32C81.42 206.1 80.31 206.55 79.89 206.71C79.44 206.52 78.09 206.01 76.08 205.08C60.87 198.03 6.87 167.68 0.51 89.49C-3.54 39.69 27.99 8.82 64.47 2.13C69.45 1.2 74.61 0.72 79.89 0.72C85.17 0.72 90.33 1.2 95.31 2.13C97.35 2.49 99.36 2.94 101.34 3.48C135.18 12.3 163.11 42.45 159.27 89.49Z" />
          <path id="&lt;Path&gt;" class="shp1-green" d="M101.67 221.37C99.78 223.23 97.56 223.89 95.04 224.49C93.99 224.73 92.94 224.76 91.89 224.68C90.15 224.58 88.41 224.25 86.64 224.22C80.43 224.22 74.49 225.67 68.4 223.69C67.92 223.53 61.98 221.46 62.67 220.62L76.08 205.08L76.92 204.12C78.96 203.95 80.7 204 82.2 204.27C82.95 204.39 83.61 204.57 84.24 204.81C92.31 207.72 92.58 217.71 101.67 221.37Z" />
          <path id="&lt;Path&gt;" class="shp2-green" d="M159.27 89.49C153 166.77 100.17 197.34 84.24 204.81C92.31 207.72 92.58 217.71 101.67 221.37C99.78 223.23 97.56 223.89 95.04 224.49C93.99 224.73 92.94 224.76 91.89 224.68C90.03 220.32 89.07 215.61 87.15 211.26C86.49 209.79 84.42 206.88 83.16 205.32C82.68 204.75 82.35 204.36 82.2 204.27C82.18 204.25 82.16 204.24 82.14 204.24L82.86 203.71C100.65 190.14 114.78 168.67 124.86 149.05C136.29 126.82 144.18 101.7 143.91 76.53C143.7 53.79 136.59 30.51 119.28 14.94C113.85 10.08 107.79 6.33 101.34 3.48C135.18 12.3 163.11 42.45 159.27 89.49Z" />
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp3-green" d="M26.89 54.7C25.59 54.7 24.28 54.37 23.08 53.65C19.51 51.54 18.34 46.94 20.45 43.38C28.79 29.31 42.22 18.99 58.27 14.33C62.26 13.18 66.41 15.47 67.57 19.44C68.72 23.42 66.43 27.58 62.46 28.74C50.08 32.33 39.74 40.25 33.35 51.03C31.95 53.39 29.46 54.7 26.89 54.7Z" />
            <path id="&lt;Path&gt;" class="shp3-green" d="M11.9 65.41C11.9 61.27 15.26 57.91 19.4 57.91C23.54 57.91 26.9 61.27 26.9 65.41C26.9 69.55 23.54 72.91 19.4 72.91C15.26 72.91 11.9 69.55 11.9 65.41Z" />
          </g>
        </g>
      </g>
    </svg>
    <svg class="balloons" id="orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 360" width="270" height="360">
      <g id="Layer 1">
        <g id="balloon-orange">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-orange" d="M133.43 184.85C128.78 197.05 131.96 206.57 137.33 218.09C144.57 233.63 143.03 247.97 140.3 264.28C135.15 295.07 141.82 327.85 142.84 358.72C142.86 359.39 144.13 359.2 144.11 358.63C143.12 328.77 138.65 299.01 140.98 269.09C141.88 257.53 145.21 247.06 143.97 235.35C142.03 217.01 127.22 204.44 134.63 185C134.89 184.32 133.64 184.31 133.43 184.85Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp1-orange" d="M154.62 198.6C150.75 200.4 146.31 199.41 142.35 200.82C142.32 200.82 142.29 200.85 142.26 200.85C138.84 202.08 136.17 204.51 132.24 204.09C128.91 203.76 126.21 201.24 122.88 201.06C123.06 201.06 112.89 201.33 114.99 199.56C119.52 195.78 123.3 193.56 125.16 187.53C125.43 186.66 125.52 185.55 125.7 184.41C125.94 182.64 126.3 180.87 127.65 180C130.38 180.36 136.38 179.73 139.32 182.1C139.68 182.43 140.04 182.76 140.34 183.09C140.67 183.42 140.94 183.75 141.21 184.08C145.47 189.18 146.52 195.33 154.62 198.6Z" />
          <path id="&lt;Path&gt;" class="shp1-orange" d="M269.1 58.77C269.1 71.61 264.9 84.39 256.71 94.89C252.72 101.28 231.42 121.05 216.72 134.37C212.22 138.54 207.54 142.77 202.68 146.94C202.58 147.02 202.49 147.09 202.41 147.15C190.38 157.47 177.42 167.43 164.7 175.11L164.7 174.87C157.47 179.7 149.46 182.79 141.21 184.08C140.49 184.2 139.8 184.29 139.08 184.38C136.77 184.65 134.43 184.8 132.12 184.8C129.96 184.8 127.83 184.68 125.7 184.41C118.02 183.6 110.52 181.2 103.59 177.36L103.59 177.42C103.35 177.27 103.11 177.09 102.87 176.94C101.61 176.22 100.41 175.47 99.21 174.63C66.54 153.45 33.33 118.68 18.87 102.75C-4.53 80.91 -6.15 44.25 15.39 20.43C37.17 -3.6 74.31 -5.46 98.34 16.32L108.69 25.65L109.02 25.65C122.14 41.69 137.78 42.53 155.94 28.17L172.11 14.28C190.56 -1.59 216.06 -3.96 236.58 6.24C243.39 9.63 249.66 14.43 254.91 20.55C264.42 31.62 269.1 45.24 269.1 58.77Z" />
          <path id="&lt;Path&gt;" class="shp2-orange" d="M269.1 58.77C269.1 71.61 264.9 84.39 256.71 94.89C252.72 101.28 231.42 121.05 216.72 134.37C212.22 138.54 207.54 142.77 202.68 146.94C202.58 147.02 202.49 147.09 202.41 147.15C190.38 157.47 177.42 167.43 164.7 175.11L164.7 174.87C157.47 179.7 149.46 182.79 141.21 184.08C145.47 189.18 146.52 195.33 154.62 198.6C150.75 200.4 146.31 199.41 142.35 200.82C142.32 200.82 142.29 200.85 142.26 200.85C139.23 195.06 136.83 189.69 137.16 187.65C137.31 186.72 138 185.61 139.08 184.38C139.44 183.96 139.86 183.51 140.34 183.09C146.04 177.51 157.74 170.43 161.16 168.15C178.41 154.65 195.66 141.15 211.41 124.65C235.41 99.9 262.41 74.4 253.41 36.9C250.41 25.38 244.71 14.85 236.58 6.24C243.39 9.63 249.66 14.43 254.91 20.55C264.42 31.62 269.1 45.24 269.1 58.77Z" />
          <g id="&lt;Group&gt;" style="opacity: 0.702">
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp3-orange" d="M181.01 35.21C179.45 35.21 177.88 34.73 176.53 33.73C173.21 31.25 172.52 26.55 175 23.23C181.62 14.34 191.77 8.61 202.85 7.53C206.97 7.15 210.64 10.14 211.04 14.26C211.45 18.38 208.43 22.05 204.31 22.46C197.43 23.13 191.13 26.68 187.03 32.19C185.56 34.17 183.29 35.21 181.01 35.21Z" />
              <path id="&lt;Path&gt;" class="shp3-orange" d="M159.91 42.67C159.91 38.4 163.38 34.93 167.66 34.93C171.94 34.93 175.41 38.4 175.41 42.67C175.41 46.95 171.94 50.42 167.66 50.42C163.38 50.42 159.91 46.95 159.91 42.67Z" />
            </g>
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp3-orange" d="M24.84 41.35C23.61 41.35 22.37 41.05 21.22 40.42C17.59 38.42 16.28 33.86 18.27 30.23C23.63 20.52 32.91 13.47 43.74 10.9C47.77 9.93 51.81 12.43 52.77 16.46C53.73 20.49 51.24 24.53 47.21 25.49C40.49 27.09 34.73 31.46 31.41 37.48C30.04 39.95 27.48 41.35 24.84 41.35Z" />
              <path id="&lt;Path&gt;" class="shp3-orange" d="M8.41 50.65C8.41 46.37 11.88 42.9 16.16 42.9C20.44 42.9 23.91 46.37 23.91 50.65C23.91 54.93 20.44 58.4 16.16 58.4C11.88 58.4 8.41 54.93 8.41 50.65Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
    <svg class="balloons" id="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 375" width="160" height="375">
      <g id="Layer 1">
        <g id="red-balloon">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-red" d="M80.84 200.16C87.5 216.29 78.36 226.96 74.67 242.08C71.4 255.5 72.75 266.59 76.95 279.65C81.87 294.93 86.41 308.7 86.32 325.02C86.24 341.45 84.52 357.83 84.42 374.27C84.41 374.94 85.68 374.76 85.68 374.18C85.78 357.74 87.17 341.36 87.59 324.93C87.95 310.66 84.37 297.68 79.85 284.23C73.78 266.16 72.09 251.39 79.03 233.16C83.53 221.34 87.2 212.2 82.09 199.82C81.86 199.25 80.62 199.6 80.84 200.16Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp1-red" d="M159.58 89.21C153.31 166.49 100.48 197.06 84.55 204.53C84.16 204.71 83.8 204.89 83.47 205.04C81.73 205.82 80.62 206.27 80.2 206.42C79.75 206.24 78.4 205.73 76.39 204.8C61.18 197.75 7.18 167.39 0.82 89.21C-3.23 39.41 28.3 8.54 64.78 1.85C69.76 0.92 74.92 0.44 80.2 0.44C85.48 0.44 90.64 0.92 95.62 1.85C97.66 2.21 99.67 2.66 101.65 3.2C135.49 12.02 163.42 42.17 159.58 89.21Z" />
          <path id="&lt;Path&gt;" class="shp1-red" d="M101.98 221.09C100.09 222.95 97.87 223.61 95.35 224.21C94.3 224.45 93.25 224.48 92.2 224.39C90.46 224.3 88.72 223.97 86.95 223.94C80.74 223.94 74.8 225.38 68.71 223.4C68.23 223.25 62.29 221.18 62.98 220.34L76.39 204.8L77.23 203.84C79.27 203.66 81.01 203.72 82.51 203.99C83.26 204.11 83.92 204.29 84.55 204.53C92.62 207.44 92.89 217.43 101.98 221.09Z" />
          <path id="&lt;Path&gt;" class="shp2-red" d="M159.58 89.21C153.31 166.49 100.48 197.06 84.55 204.53C92.62 207.44 92.89 217.43 101.98 221.09C100.09 222.95 97.87 223.61 95.35 224.21C94.3 224.45 93.25 224.48 92.2 224.39C90.34 220.04 89.38 215.33 87.46 210.98C86.8 209.51 84.73 206.6 83.47 205.04C82.99 204.47 82.66 204.08 82.51 203.99C82.49 203.97 82.47 203.96 82.45 203.96L83.17 203.42C100.96 189.86 115.09 168.38 125.17 148.76C136.6 126.53 144.49 101.42 144.22 76.25C144.01 53.51 136.9 30.23 119.59 14.66C114.16 9.8 108.1 6.05 101.65 3.2C135.49 12.02 163.42 42.17 159.58 89.21Z" />
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp3-red" d="M25.56 52.57C24.26 52.57 22.95 52.23 21.75 51.52C18.18 49.4 17.01 44.8 19.12 41.24C27.46 27.17 40.89 16.86 56.94 12.2C60.93 11.04 65.08 13.33 66.24 17.31C67.39 21.29 65.1 25.45 61.13 26.6C48.75 30.19 38.41 38.11 32.02 48.89C30.62 51.25 28.13 52.57 25.56 52.57Z" />
            <path id="&lt;Path&gt;" class="shp3-red" d="M10.57 63.27C10.57 59.13 13.93 55.77 18.07 55.77C22.21 55.77 25.57 59.13 25.57 63.27C25.57 67.41 22.21 70.77 18.07 70.77C13.93 70.77 10.57 67.41 10.57 63.27Z" />
          </g>
        </g>
      </g>
    </svg>
    <svg class="balloons" id="yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203 367" width="203" height="367">
      <g id="Layer 1">
        <g id="balloon-yellow">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-yellow" d="M102.45 192.19C109.36 207.4 101.85 219.69 97.78 234.31C94.18 247.22 96.96 259.54 101.38 271.77C106.84 286.88 111.86 300.5 112.36 316.78C112.85 333.2 111.71 349.63 112.19 366.07C112.21 366.74 113.48 366.55 113.46 365.98C112.98 349.54 113.79 333.13 113.62 316.69C113.48 302.43 109.43 289.54 104.45 276.29C97.75 258.46 95.57 243.62 101.82 225.28C105.9 213.31 109.24 204.04 103.7 191.85C103.45 191.29 102.21 191.65 102.45 192.19Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp1-yellow" d="M202.37 101.92C202.37 153.8 163.3 196.55 113.01 202.39C111.81 202.53 110.64 202.64 109.44 202.75C106.73 202.97 103.98 203.08 101.22 203.08C99.96 203.08 98.68 203.05 97.43 203C43.34 201 0.07 156.53 0.07 101.92C0.07 46.07 45.36 0.77 101.22 0.77C104.44 0.77 107.61 0.91 110.75 1.21C110.77 1.23 110.77 1.24 110.77 1.24C162.16 6.04 202.37 49.29 202.37 101.92Z" />
          <path id="&lt;Path&gt;" class="shp1-yellow" d="M124.02 214.02C120.49 215.66 116.48 214.76 112.85 216.07C112.63 216.16 112.39 216.23 112.17 216.34C109.33 217.52 106.98 219.4 103.65 219.04C100.62 218.72 98.19 216.43 95.16 216.29C95.3 216.29 86.04 216.51 87.95 214.93C92.07 211.46 95.51 209.44 97.21 203.98C97.29 203.68 97.37 203.35 97.43 203C97.78 200.95 97.81 198.19 99.5 197.1C101.98 197.45 107.42 196.85 110.12 199.01C110.47 199.33 110.8 199.64 111.1 199.96C111.84 200.76 112.47 201.57 113.01 202.39C115.99 206.68 117.49 211.4 124.02 214.02Z" />
          <path id="&lt;Path&gt;" class="shp2-yellow" d="M113.01 202.39C115.99 206.68 117.49 211.4 124.02 214.02C120.49 215.66 116.48 214.76 112.85 216.07C112.63 216.16 112.39 216.23 112.17 216.34C111.81 214.98 111.46 213.58 111.13 212.2C110.5 209.63 108.86 205.73 109.44 202.75C109.66 201.65 110.12 200.73 111.08 199.99C111.09 199.99 111.1 199.98 111.1 199.96C115.64 196.5 121.94 195 127.1 192.62C155.8 179.32 176.3 158.71 182.55 126.99C188.45 97.18 182.2 64.69 164.45 39.87C154.87 26.49 142.01 16.58 127.51 8.99C122.08 6.13 116.45 3.59 110.77 1.24C162.16 6.04 202.37 49.29 202.37 101.92C202.37 153.8 163.3 196.55 113.01 202.39Z" />
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp3-yellow" d="M32.85 64.58C31.56 64.58 30.26 64.25 29.07 63.55C25.49 61.46 24.29 56.87 26.38 53.29C36.53 35.94 49.04 25.49 68.22 18.34C72.1 16.89 76.42 18.86 77.87 22.74C79.31 26.63 77.34 30.94 73.46 32.39C57.58 38.31 47.69 46.56 39.33 60.87C37.93 63.25 35.42 64.58 32.85 64.58Z" />
            <path id="&lt;Path&gt;" class="shp3-yellow" d="M16.33 76.19C16.42 71.74 20.11 68.2 24.56 68.29C29.01 68.38 32.55 72.06 32.46 76.51C32.37 80.97 28.69 84.51 24.24 84.42C19.78 84.33 16.24 80.64 16.33 76.19Z" />
          </g>
        </g>
      </g>
    </svg>
    <svg class="balloons" id="pink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 223 384" width="223" height="384">
      <g id="Layer 1">
        <g id="balloon-pink">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-pink" d="M114.22 208.72C108.81 220.61 111.41 230.32 116.05 242.15C122.35 258.22 119.89 272.22 116.12 288.43C109.05 318.9 113.68 351.89 112.77 382.84C112.75 383.51 114.02 383.33 114.04 382.75C114.91 352.88 112.3 322.92 116.5 293.19C118.09 281.89 123.07 271.39 121.58 259.71C119.34 242.09 107.3 226.72 115.41 208.88C115.71 208.21 114.45 208.2 114.22 208.72Z" />
          </g>
          <path id="&lt;Path&gt;" class="shp1-pink" d="M222.34 111.48C222.34 168.48 179.41 215.46 124.15 221.88C122.83 222.03 121.54 222.15 120.22 222.27C117.25 222.51 114.22 222.63 111.19 222.63C109.81 222.63 108.4 222.6 107.02 222.54C47.59 220.35 0.04 171.48 0.04 111.48C0.04 50.1 49.81 0.33 111.19 0.33C114.73 0.33 118.21 0.48 121.66 0.81C121.68 0.83 121.69 0.84 121.69 0.84C178.15 6.12 222.34 53.64 222.34 111.48Z" />
          <path id="&lt;Path&gt;" class="shp1-pink" d="M136.24 234.66C132.37 236.46 127.96 235.47 123.97 236.91C123.73 237 123.46 237.09 123.22 237.21C120.1 238.5 117.52 240.57 113.86 240.18C110.53 239.82 107.86 237.3 104.53 237.15C104.68 237.15 94.51 237.39 96.61 235.65C101.14 231.84 104.92 229.62 106.78 223.62C106.87 223.29 106.96 222.93 107.02 222.54C107.41 220.29 107.44 217.26 109.3 216.06C112.03 216.45 118 215.79 120.97 218.16C121.36 218.52 121.72 218.85 122.05 219.21C122.86 220.08 123.55 220.98 124.15 221.88C127.42 226.59 129.07 231.78 136.24 234.66Z" />
          <path id="&lt;Path&gt;" class="shp2-pink" d="M124.15 221.88C127.42 226.59 129.07 231.78 136.24 234.66C132.37 236.46 127.96 235.47 123.97 236.91C123.73 237 123.46 237.09 123.22 237.21C122.83 235.71 122.44 234.18 122.08 232.65C121.39 229.83 119.59 225.54 120.22 222.27C120.46 221.07 120.97 220.05 122.02 219.24C122.04 219.24 122.05 219.23 122.05 219.21C127.03 215.4 133.96 213.75 139.63 211.14C171.16 196.53 193.69 173.88 200.56 139.02C207.04 106.26 200.17 70.56 180.67 43.29C170.14 28.59 156.01 17.7 140.08 9.36C134.11 6.21 127.93 3.42 121.69 0.84C178.15 6.12 222.34 53.64 222.34 111.48C222.34 168.48 179.41 215.46 124.15 221.88Z" />
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp3-pink" d="M34.47 65.84C33.23 65.84 31.98 65.53 30.82 64.88C27.2 62.86 25.91 58.3 27.93 54.68C37.73 37.13 50.03 26.43 69.06 18.89C72.91 17.37 77.27 19.26 78.8 23.11C80.32 26.96 78.44 31.32 74.58 32.84C58.83 39.08 49.11 47.52 41.02 61.99C39.65 64.45 37.1 65.84 34.47 65.84Z" />
            <path id="&lt;Path&gt;" class="shp3-pink" d="M18.34 77.77C18.34 73.32 21.96 69.71 26.41 69.71C30.86 69.71 34.48 73.32 34.48 77.77C34.48 82.23 30.86 85.84 26.41 85.84C21.96 85.84 18.34 82.23 18.34 77.77Z" />
          </g>
        </g>
      </g>
    </svg>

    <button class="btn-style" @click="revealBalloons">Complete</button>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/sand-castle.mp3"/>
    <audio ref="music" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/polka.mp3" loop />
    <audio src="../../assets/sounds/all/crowd-cheer-applause-2.mp3" ref="cheer"/>
    <audio @loadeddata="playVoiceOver" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session12/Session12_Page11.mp3" ref="voice"/>
    <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound" />
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session12Page10',
  components: {ImageComponent},
  data() {return {choices: []}},
  methods: {
    animateSvg() {
      let vw = document.querySelector('.interactive-container').clientWidth;
      let vh = window.innerHeight;
      const Confettiful = function (el) {
        this.el = el;
        this.containerEl = null;

        this.confettiFrequency = 7;
        this.confettiColors = ['#a864fd', '#29cdff', '#78ff44', '#ff718d' , '#fdff6a'];
        this.confettiAnimations = ['slow', 'medium', 'fast'];

        this._setupElements();
        this._renderConfetti();
      };
      Confettiful.prototype._setupElements = function () {
        const containerEl = document.createElement('div');
        const elPosition = this.el.style.position;

        if (elPosition !== 'relative' || elPosition !== 'absolute') {
          this.el.style.position = 'absolute';
        }

        containerEl.classList.add('confetti-container');

        this.el.appendChild(containerEl);

        this.containerEl = containerEl;
      };
      Confettiful.prototype._renderConfetti = function () {
        this.confettiInterval = setInterval(() => {
          const confettiEl = document.createElement('div');
          const confettiSize = Math.floor(Math.random() * 3) + (0.02*vw) + 'px';
          const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
          const confettiLeft = Math.floor(Math.random() * this.el.offsetWidth) + 'px';
          const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];

          confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
          confettiEl.style.left = confettiLeft;
          confettiEl.style.width = confettiSize;
          confettiEl.style.height = confettiSize;
          confettiEl.style.backgroundColor = confettiBackground;

          confettiEl.removeTimeout = setTimeout(function () {
            confettiEl.parentNode.removeChild(confettiEl);
          }, 3000);

          this.containerEl.appendChild(confettiEl);
        }, 25);
      };
      window.confettiful = new Confettiful(document.querySelector('.js-container'));

      let balloons = document.querySelectorAll('.balloons');
      balloons.forEach(balloon => {
        anime({
          targets: balloon,
          easing: 'easeInCubic',
          translateY: -1.1 * vh,
          duration: Math.random() * 300 + 5000,
          delay: Math.random() * 1000,
          loop: true
        })
      })
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    toggleChoice(id) {
      this.$refs.clickSound.play();
      let choiceContainer = document.querySelector('#choice-'+id);
      if (!this.choices[id-1]) choiceContainer.classList.add('green-container')
      else choiceContainer.classList.remove('green-container')
      this.choices[id-1] = !this.choices[id-1];
      this.$store.commit('setPage223Array', this.choices);
    },
    setChoiceBackground() {
      for (let i = 1; i < this.choices.length+1; i++) {
        let choiceContainer = document.querySelector('#choice-'+i);
        if (this.choices[i-1]) choiceContainer.classList.add('green-container')
      }
    },
    revealBalloons() {
      document.querySelector('.btn-style').style.visibility = 'hidden';
      this.animateSvg();
      this.$refs.voice.pause();
      this.$refs.audio.pause();
      this.$refs.music.play();
      this.$refs.cheer.play();
    }
  },
  created() {
    this.choices = this.$store.getters.getPage223Array;
  },
  mounted() {
    this.setChoiceBackground();
    this.setAudioVolumeLevel(0.3);
  }
}
</script>

<style scoped>
.balloons {
  position: absolute;
  width: auto;
  height: 20vh;
  bottom: -22vh;
}
#blue {right: 5%;}
#green {right: 25%;}
#orange {right: 45%;}
#red {right: 55%;}
#yellow {right: 85%;}
#pink {right: 60%;}
.animation-container {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0);
}
.btn-style {
  position: absolute;
  bottom: 3vh;
  left: 55vh;
  width: 23vh;
  background-color: #00ce7c;
  border: none;
  height: 5vh;
  border-radius: 5px;
  color: #ffffff;
  font-size: 3vh;
  font-weight: bold;
  box-shadow: 0 9px #999;
}
.btn-style:focus,
.btn-style:active {
  outline: 0 !important;
}
.btn-style:active {
  background-color: #009c5d;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.choice-container {
  position: absolute;
  width: 52vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.green-container {
  background: #00CE7C;
  border-radius: 3vh;
  color: #fff;
  box-shadow: 0 9px #999;
}
.green-container img {}
#choice-1 {top: 1vh;left: 14vh}
#choice-2 {top: 1vh;right: 14vh}
#choice-3 {bottom: 10vh;left: 14vh}
#choice-4 {bottom: 10vh;right: 14vh}
.choice-container .image {
  width: 94%;
  padding: 1vh 0 .5vh 0;
  border-radius: 3vh
}
.choice-container .text {
  text-align: center;
  line-height: 4.5vh;
  font-size: 3.7vh;
  font-weight: 600;
  margin-bottom: .5vh;
}
tspan { white-space:pre }
.shp0-pink { fill: #414042 }
.shp1-pink { fill: #ce0283 }
.shp2-pink { fill: #a3167b }
.shp3-pink { fill: #ff92e5 }
.shp0-yellow { fill: #414042 }
.shp1-yellow { fill: #fedc02 }
.shp2-yellow { fill: #eac218 }
.shp3-yellow { fill: #fcfbf5 }
.shp0-red { fill: #414042 }
.shp1-red { fill: #c5161e }
.shp2-red { fill: #9b1222 }
.shp3-red { fill: #fc8694 }
.shp0-orange { fill: #414042 }
.shp1-orange { fill: #f15a29 }
.shp2-orange { fill: #d63e16 }
.shp3-orange { fill: #fff200 }
.shp0-green { fill: #414042 }
.shp1-green { fill: #7fc241 }
.shp2-green { fill: #6da032 }
.shp3-green { fill: #e1fcbb }
.shp0-blue { fill: #414042 }
.shp1-blue { fill: #41c9bc }
.shp2-blue { fill: #35aa99 }
.shp3-blue { fill: #b3f4ea }
</style>
