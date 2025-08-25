<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session2/background.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session2/background.jpg"
      class="page-image"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session2/stem.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session2/stem.png"
      id="stem"
    />
    <div class="sources-container">
      <draggable
        class="images-container" id="source-1" v-model="source1" :group="{name: 'petals',put: false}">
        <img class="image" v-for="(source, index) in source1" :src="source" alt="petal" :key="index">
      </draggable>
      <draggable
        class="images-container" id="source-2" v-model="source2" :group="{name: 'petals',put: false}">
        <img class="image" v-for="(source, index) in source2" :src="source" alt="petal" :key="index">
      </draggable>
      <draggable
        class="images-container" id="source-3" v-model="source3" :group="{name: 'petals',put: false}">
        <img class="image" v-for="(source, index) in source3" :src="source" alt="petal" :key="index">
      </draggable>
      <draggable
        class="images-container" id="source-4" v-model="source4" :group="{name: 'petals',put: false}">
        <img class="image" v-for="(source, index) in source4" :src="source" alt="petal" :key="index">
      </draggable>
      <draggable
        class="images-container" id="source-5" v-model="source5" :group="{name: 'petals',put: false}">
        <img class="image" v-for="(source, index) in source5" :src="source" alt="petal" :key="index">
      </draggable>
      <draggable
        class="images-container" id="source-6" v-model="source6" :group="{name: 'petals',put: false}">
        <img class="image" v-for="(source, index) in source6" :src="source" alt="petal" :key="index">
      </draggable>
      <draggable
        class="images-container" id="source-7" v-model="source7" :group="{name: 'petals',put: false}">
        <img class="image" v-for="(source, index) in source7" :src="source" alt="petal" :key="index">
      </draggable>
    </div>
    <div class="answers-container">
      <div class="outer-container images-container" id="answer-1">
        <draggable
          class="answer-container"
          v-model="answer1"
          @change="handleChange(1)"
          :group="{name: 'petals'}">
          <img class="image" v-for="(source, index) in answer1" :src="source" alt="petal" :key="index">
        </draggable>
        <div class="mask" id="mask-1"/>
      </div>
      <div class="outer-container images-container" id="answer-2">
        <draggable
          class="answer-container"
          v-model="answer2"
          @change="handleChange(2)"
          :group="{name: 'petals'}">
          <img class="image" v-for="(source, index) in answer2" :src="source" alt="petal" :key="index">
        </draggable>
        <div class="mask" id="mask-2"/>
      </div>
      <div class="outer-container images-container" id="answer-3">
        <draggable
          class="answer-container"
          v-model="answer3"
          @change="handleChange(3)"
          :group="{name: 'petals'}">
          <img class="image" v-for="(source, index) in answer3" :src="source" alt="petal" :key="index">
        </draggable>
        <div class="mask" id="mask-3"/>
      </div>
      <div class="outer-container images-container" id="answer-4">
        <draggable
          class="answer-container"
          v-model="answer4"
          @change="handleChange(4)"
          :group="{name: 'petals'}">
          <img class="image" v-for="(source, index) in answer4" :src="source" alt="petal" :key="index">
        </draggable>
        <div class="mask" id="mask-4"/>
      </div>
      <div class="outer-container images-container" id="answer-5">
        <draggable
          class="answer-container"
          v-model="answer5"
          @change="handleChange(5)"
          :group="{name: 'petals'}">
          <img class="image" v-for="(source, index) in answer5" :src="source" alt="petal" :key="index">
        </draggable>
        <div class="mask" id="mask-5"/>
      </div>
      <div class="outer-container images-container" id="answer-6">
        <draggable
          class="answer-container"
          v-model="answer6"
          @change="handleChange(6)"
          :group="{name: 'petals'}">
          <img class="image" v-for="(source, index) in answer6" :src="source" alt="petal" :key="index">
        </draggable>
        <div class="mask" id="mask-6"/>
      </div>
      <div class="outer-container images-container" id="answer-7">
        <draggable
          class="answer-container"
          v-model="answer7"
          @change="handleChange(7)"
          :group="{name: 'petals'}">
          <img class="image" v-for="(source, index) in answer7" :src="source" alt="petal" :key="index">
        </draggable>
        <div class="mask" id="mask-7"/>
      </div>
    </div>
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session2/smileyface.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session2/smileyface.png"
      id="pistil"
    />
    <div class="star-container">
      <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1320 1258" width="1320" height="1258">
        <title>Star</title>
        <g id="Object">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-star" d="M678.99 12.07L866.54 392.07C869.62 398.32 875.59 402.66 882.48 403.66L1301.84 464.6C1319.21 467.12 1326.15 488.47 1313.58 500.73L1010.13 796.52C1005.14 801.38 1002.86 808.39 1004.04 815.26L1075.67 1232.93C1078.64 1250.23 1060.48 1263.42 1044.94 1255.26L669.86 1058.06C663.69 1054.82 656.31 1054.82 650.14 1058.06L275.06 1255.26C259.52 1263.42 241.36 1250.23 244.33 1232.93L315.96 815.26C317.14 808.39 314.86 801.38 309.87 796.52L6.42 500.73C-6.15 488.47 0.79 467.12 18.16 464.6L437.51 403.66C444.41 402.66 450.38 398.32 453.46 392.07L641.01 12.07C648.77 -3.67 671.22 -3.67 678.99 12.07Z" />
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp1-star" d="M660 99.85L492.87 423.56C484.11 440.54 467.28 451.87 448.25 453.61L85.38 486.73L468.76 504.66C493.11 505.8 515.39 491.04 523.85 468.17L660 99.85Z" />
            </g>
            <path id="&lt;Path&gt;" class="shp2-star" d="M252.57 1184.87L244.33 1232.93C241.36 1250.23 259.52 1263.43 275.06 1255.25L650.14 1058.06C656.31 1054.82 663.69 1054.82 669.86 1058.06L1044.94 1255.25C1060.48 1263.43 1078.64 1250.23 1075.67 1232.93L1004.04 815.26C1002.86 808.39 1005.14 801.38 1010.13 796.51L1313.58 500.73C1326.15 488.47 1319.21 467.12 1301.84 464.6L1161.38 444.19C934.2 851.89 586.33 1066.55 252.57 1184.87Z" />
          </g>
        </g>
      </svg>
      <div class="star-text">
        <p><strong>Bright Star Idea</strong></p>
        <p>Build a happy flower. <br>Click and drag each <br>petal around the <br>happy face.</p>
      </div>
    </div>
    <!--  Awesome  -->
    <svg class="reward-sticker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.29 198.09">
      <defs>
        <clipPath id="clip-path">
          <ellipse class="cls-1" cx="67.53" cy="107.56" rx="18.99" ry="19.85" transform="translate(-53.23 146.91) rotate(-75.93)" />
        </clipPath>
        <clipPath id="clip-path-2">
          <ellipse class="cls-1" cx="127.79" cy="107.56" rx="19.85" ry="18.99" transform="translate(-22.32 34.3) rotate(-14.07)" />
        </clipPath>
      </defs>
      <g class="cls-2">
        <g id="Layer_2" data-name="Layer 2">
          <g id="OBJECTS">
            <path class="cls-3" d="M186.07,66.21l-1.93-1.77.37-2.59a9.7,9.7,0,0,0-14.37-9.8l-1.21.69a9.82,9.82,0,0,0-3.07-11.22l-6.51-5.16a9.86,9.86,0,0,0-5.81-2.13,9.5,9.5,0,0,0-1.06-1.82,7.34,7.34,0,0,0-.59-.76,9.89,9.89,0,0,0-7.37-3.31,9.74,9.74,0,0,0-3.08.5,9.91,9.91,0,0,0-5-5.54,10,10,0,0,0-4.33-1,9.65,9.65,0,0,0-3.37.6,9.44,9.44,0,0,0-1.76.83,18.37,18.37,0,0,0-23.29-4.46,15.42,15.42,0,0,0-10.52-3.92h-.56A15.37,15.37,0,0,0,85,17.69a9.79,9.79,0,0,0-4.48-1.1,10,10,0,0,0-2,.21l-8.14,1.73a9.91,9.91,0,0,0-4.25,2,10,10,0,0,0-2.33-.29A9.84,9.84,0,0,0,56,24a10,10,0,0,0-4.24,1,9.69,9.69,0,0,0-2.51,1.76,9.85,9.85,0,0,0-6.3,3.63,10,10,0,0,0-4.26,1,9.88,9.88,0,0,0-5.21,6.45,9.9,9.9,0,0,0-5.72,2.27,9.75,9.75,0,0,0-3.12,10.35l.17.58a10,10,0,0,0-2.39.95l-2.27,1.29-2.35-1.15a9.81,9.81,0,0,0-4.26-1A9.7,9.7,0,0,0,4,62.82l.52,2.57L2.73,67.27A9.69,9.69,0,0,0,8.59,83.63l2.6.3,1.23,2.31A9.66,9.66,0,0,0,27.2,89.11a75.58,75.58,0,0,0-6.72,22.46l-.06.36,0,.29c-.16,1.26-.29,2.51-.38,3.7l0,.31c0,.33-.05.66-.07,1s-.05.93-.07,1.41c-.05,1-.09,2.1-.09,3.27a76.2,76.2,0,0,0,152.39,0c0-1,0-2-.09-3.26,0-.49,0-1-.07-1.45,0-.3,0-.63-.07-1l0-.31c-.09-1.19-.22-2.44-.38-3.7l0-.29-.06-.36a75.38,75.38,0,0,0-5.93-20.75,9.63,9.63,0,0,0,12-5.09l1.09-2.38,2.57-.45a9.7,9.7,0,0,0,4.89-16.69Z" />
            <path class="cls-4" d="M188.14,63.09l-1.92-1.76.36-2.59a9.69,9.69,0,0,0-14.36-9.8l-1.21.68a9.8,9.8,0,0,0-3.07-11.21l-6.51-5.17a10,10,0,0,0-5.82-2.13,9.45,9.45,0,0,0-1.05-1.82,7.15,7.15,0,0,0-.6-.76,9.7,9.7,0,0,0-3-2.29,9.91,9.91,0,0,0-4.35-1,9.8,9.8,0,0,0-3.09.5,9.92,9.92,0,0,0-14.41-5.12,18.37,18.37,0,0,0-10.8-6.48,19.18,19.18,0,0,0-3.53-.34,18.26,18.26,0,0,0-9,2.36,15.42,15.42,0,0,0-10.52-3.92h-.56a15.35,15.35,0,0,0-7.68,2.34,9.62,9.62,0,0,0-4.48-1.11,10,10,0,0,0-2,.21l-8.15,1.74a9.82,9.82,0,0,0-4.24,2,10.07,10.07,0,0,0-2.34-.3,9.86,9.86,0,0,0-4.33,1,9.74,9.74,0,0,0-3.4,2.74,9.83,9.83,0,0,0-6.75,2.76,9.86,9.86,0,0,0-2.91.91A9.72,9.72,0,0,0,45,27.32a10,10,0,0,0-4.26,1,9.81,9.81,0,0,0-5.21,6.45,9.83,9.83,0,0,0-8.84,12.62l.17.58a9.47,9.47,0,0,0-2.39.95l-2.28,1.28-2.34-1.14A9.69,9.69,0,0,0,6.11,59.71l.52,2.56L4.81,64.15a9.69,9.69,0,0,0,5.86,16.37l2.6.3,1.22,2.31A9.67,9.67,0,0,0,29.28,86a75.33,75.33,0,0,0-6.73,22.45c0,.12,0,.25-.05.37l0,.28c-.16,1.27-.29,2.51-.39,3.7l0,.31c0,.33,0,.66-.07,1s-.06.93-.08,1.41c0,1-.08,2.1-.08,3.26a76.19,76.19,0,0,0,152.38,0c0-1,0-2-.08-3.26,0-.48,0-1-.07-1.45,0-.3-.05-.63-.08-.95l0-.31c-.09-1.19-.22-2.44-.38-3.71a2.89,2.89,0,0,0,0-.29c0-.12,0-.24,0-.36a75.14,75.14,0,0,0-5.94-20.75,9.61,9.61,0,0,0,12-5.09l1.09-2.38,2.57-.45a9.69,9.69,0,0,0,4.88-16.69Z" />
            <circle class="cls-5" cx="98.02" cy="118.78" r="67.88" />
            <path class="cls-6" d="M49.75,116a16.28,16.28,0,0,1-3.59-14.27A18.87,18.87,0,0,1,49.84,94a21.56,21.56,0,0,1,25.57-6,20.73,20.73,0,0,1,6.47,4.72,16.53,16.53,0,0,1,3.43,6.53l-.31.15A20.33,20.33,0,0,0,58.64,90.7a18.25,18.25,0,0,0-8.58,25.11Z" />
            <path class="cls-7" d="M86.11,104.54c-1.45-8.76-10-14.4-19.18-12.6s-15.4,10.37-14,19.13a14.92,14.92,0,0,0,1.2,3.87c1.34-3.59,5.32-11.74,14.21-12.2,7.29-.37,14,2.58,17.9,4.76A15.54,15.54,0,0,0,86.11,104.54Z" />
            <g class="cls-8">
              <ellipse class="cls-9" cx="67.53" cy="107.56" rx="18.99" ry="19.85" transform="translate(-53.23 146.91) rotate(-75.93)" />
              <ellipse class="cls-10" cx="69.45" cy="107.8" rx="16.03" ry="15.12" transform="translate(-40.81 42.33) rotate(-26.51)" />
              <path class="cls-11" d="M55.81,106.08c.17-1.17,3.92-1.88,4.12-.21s1.83,15.41,12.25,11,5.45-11.21,6.85-12,5.16-1.5,5-.26-.91,14.49-11.35,16.51S54.36,116.21,55.81,106.08Z" />
              <ellipse class="cls-12" cx="69.45" cy="107.8" rx="8.15" ry="7.69" transform="translate(-40.82 42.33) rotate(-26.51)" />
              <path class="cls-9" d="M53.29,102.3c-2.78,3.08-2.51,4.45-1.09,5.07s11.19-.63,10.49-2.62S55.87,99.43,53.29,102.3Z" />
            </g>
            <path class="cls-6" d="M145.57,116a16.28,16.28,0,0,0,3.59-14.27A18.87,18.87,0,0,0,145.48,94a21.56,21.56,0,0,0-25.57-6,20.89,20.89,0,0,0-6.48,4.72A16.64,16.64,0,0,0,110,99.17l.31.15a20.33,20.33,0,0,1,26.36-8.62,18.27,18.27,0,0,1,8.58,25.11Z" />
            <path class="cls-7" d="M109.21,104.54c1.45-8.76,10-14.4,19.18-12.6s15.4,10.37,14,19.13a14.92,14.92,0,0,1-1.2,3.87c-1.34-3.59-5.33-11.74-14.21-12.2-7.29-.37-14,2.58-17.91,4.76A16.42,16.42,0,0,1,109.21,104.54Z" />
            <g class="cls-13">
              <ellipse class="cls-9" cx="127.79" cy="107.56" rx="19.85" ry="18.99" transform="translate(-22.32 34.3) rotate(-14.07)" />
              <ellipse class="cls-10" cx="125.86" cy="107.8" rx="15.12" ry="16.03" transform="translate(-26.78 172.32) rotate(-63.49)" />
              <path class="cls-11" d="M139.51,106.08c-.17-1.17-3.92-1.88-4.12-.21s-1.83,15.41-12.25,11-5.45-11.21-6.85-12-5.16-1.5-5-.26.91,14.49,11.35,16.51S141,116.21,139.51,106.08Z" />
              <path class="cls-12" d="M117.9,106.23a8.24,8.24,0,0,0,6.71,9.2,7.64,7.64,0,0,0,9.22-6.06,8.24,8.24,0,0,0-6.71-9.19A7.63,7.63,0,0,0,117.9,106.23Z" />
              <path class="cls-9" d="M142,102.3c2.78,3.08,2.51,4.45,1.09,5.07s-11.2-.63-10.49-2.62S139.45,99.43,142,102.3Z" />
            </g>
            <path class="cls-6" d="M48.92,82c5-8.23,17.46-12.7,26.31-8.14a1.63,1.63,0,0,0,2-2.56c-8.53-10.58-24.66,1.54-29.36,10.07a.63.63,0,0,0,1.09.63Z" />
            <path class="cls-6" d="M141.86,75.42c-4.71-8.54-20.85-20.64-29.37-10a1.63,1.63,0,0,0,2,2.54c8.85-4.57,21.26-.08,26.31,8.14a.63.63,0,0,0,1.09-.63Z" />
            <path class="cls-6" d="M106.83,155.7A48.29,48.29,0,0,0,108,145c0-7-1.38-13.31-3.56-17.5a10.72,10.72,0,0,1-12.8,0c-2.17,4.19-3.56,10.47-3.56,17.5a47.68,47.68,0,0,0,1.16,10.68,13.52,13.52,0,0,1,17.61,0Z" />
            <path class="cls-9" d="M104.42,127.52c-1.73-3.33-4-5.34-6.4-5.34s-4.67,2-6.4,5.34a10.72,10.72,0,0,0,12.8,0Z" />
            <path class="cls-11" d="M98,167.86c3.82,0,7.13-4.93,8.81-12.16a13.52,13.52,0,0,0-17.61,0C90.89,162.93,94.2,167.86,98,167.86Z" />
            <path class="cls-14" d="M98,168.88a67.88,67.88,0,0,1-67.28-59,67.87,67.87,0,1,0,135.16,8.89,68.54,68.54,0,0,0-.59-8.89A67.88,67.88,0,0,1,98,168.88Z" />
            <path class="cls-11" d="M50.14,138.27q1.71-1.8,3.57-3.44c.61-.53,1.24-1.06,1.87-1.57s1.26-1.1,1.89-1.64-.19-1.54-.86-1.11A24.37,24.37,0,0,0,54.48,132c-.65.53-1.28,1.08-1.9,1.64-1.24,1.12-2.43,2.31-3.56,3.54-.69.75.42,1.86,1.12,1.11Z" />
            <path class="cls-11" d="M56.22,139.56a89.55,89.55,0,0,1,9.28-7.65c.7-.51,0-1.69-.7-1.19a64.93,64.93,0,0,0-9.47,8c-.58.57.31,1.44.89.88Z" />
            <path class="cls-11" d="M64.29,139.64a41,41,0,0,1,3.43-3.29c.57-.48,1.15-.94,1.75-1.38s1.3-1.05,2-1.58-.18-1.39-.82-1a15.39,15.39,0,0,0-2,1.24c-.66.52-1.32,1-2,1.6a39.19,39.19,0,0,0-3.41,3.41c-.63.72.41,1.77,1.07,1Z" />
            <path class="cls-11" d="M120.1,137.15a69.13,69.13,0,0,1,9.42-8.34c.58-.45.08-1.41-.59-1a23,23,0,0,0-2.69,1.75c-.86.68-1.69,1.39-2.5,2.12a49.31,49.31,0,0,0-4.48,4.66c-.48.58.33,1.4.84.83Z" />
            <path class="cls-11" d="M126.91,137.77a32.66,32.66,0,0,1,3.66-4c.65-.61,1.33-1.17,2-1.73s1.36-1.18,2.07-1.73.08-1.37-.57-1a24.49,24.49,0,0,0-2.36,1.54,25,25,0,0,0-2.11,1.87,34.57,34.57,0,0,0-3.71,4.23c-.43.57.55,1.32,1,.76Z" />
            <path class="cls-11" d="M132.06,138.73a26.77,26.77,0,0,1,3.93-3.44,25.55,25.55,0,0,1,2.15-1.4c.79-.46,1.54-.95,2.32-1.42a.83.83,0,1,0-.84-1.43,13.47,13.47,0,0,0-2.41,1.26c-.77.53-1.51,1.1-2.23,1.69a28.44,28.44,0,0,0-3.82,3.86c-.5.61.33,1.48.9.88Z" />
            <text class="cls-15" transform="matrix(0.77, -0.64, 0.64, 0.77, 40.85, 64.58)">A</text>
            <text class="cls-15" transform="translate(52.86 53.56) rotate(-25.11)">W</text>
            <text class="cls-15" transform="translate(75.78 43.51) rotate(-11.54)">E</text>
            <text class="cls-15" transform="matrix(1, -0.01, 0.01, 1, 89.99, 40.6)">S</text>
            <text class="cls-15" transform="translate(104.31 40.07) rotate(12.4)">O</text>
            <text class="cls-15" transform="translate(124.14 43.99) rotate(28.38)">M</text>
            <text class="cls-15" transform="translate(144.9 55.72) rotate(42.19)">E</text>
            <path class="cls-16" d="M34.1,71.6l-6.16,1.08a1.4,1.4,0,0,0-1,.79l-2.6,5.69a1.39,1.39,0,0,1-2.49.07L18.9,73.71A1.4,1.4,0,0,0,17.83,73l-6.21-.71a1.39,1.39,0,0,1-.84-2.35l4.35-4.49a1.38,1.38,0,0,0,.36-1.24l-1.24-6.13a1.39,1.39,0,0,1,2-1.52l5.62,2.75a1.4,1.4,0,0,0,1.29,0l5.44-3.07a1.39,1.39,0,0,1,2.06,1.4l-.88,6.19A1.38,1.38,0,0,0,30.19,65l4.6,4.23A1.39,1.39,0,0,1,34.1,71.6Z" />
            <path class="cls-17" d="M181.82,71.6l-6.15,1.08a1.42,1.42,0,0,0-1,.79L172,79.16a1.38,1.38,0,0,1-2.48.07l-2.93-5.52a1.41,1.41,0,0,0-1.07-.73l-6.21-.71a1.39,1.39,0,0,1-.84-2.35l4.35-4.49a1.41,1.41,0,0,0,.36-1.24L162,58.06a1.39,1.39,0,0,1,2-1.52l5.62,2.75a1.4,1.4,0,0,0,1.29,0l5.44-3.07a1.39,1.39,0,0,1,2.06,1.4l-.88,6.19a1.38,1.38,0,0,0,.44,1.21l4.6,4.23A1.39,1.39,0,0,1,181.82,71.6Z" />
          </g>
        </g>
      </g>
    </svg>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Water-Stream-Sound-Effect-Amplified.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session2/Session2_Page84.mp3" ref="voice"/>
    <audio src="../../assets/sounds/all/crowd-cheer-applause.mp3" ref="celebrate"/>
    <audio src="../../assets/sounds/all/correct-ans.mp3" ref="correct"/>
    <audio src="../../assets/sounds/all/Awesome.mp3" ref="celebrateVoice"/>
    <div class="page-number" id="page-light">86</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";
import draggable from "vuedraggable";

export default {
  name: 'Session2Page23',
  components: {ImageComponent,draggable},
  data() {
    return {
      count: 0,
      source1: [require('../../assets/images/session2/petal1.png')],
      source2: [require('../../assets/images/session2/petal2.png')],
      source3: [require('../../assets/images/session2/petal3.png')],
      source4: [require('../../assets/images/session2/petal4.png')],
      source5: [require('../../assets/images/session2/petal5.png')],
      source6: [require('../../assets/images/session2/petal6.png')],
      source7: [require('../../assets/images/session2/petal7.png')],
      answer1: [], answer2: [], answer3: [], answer4: [], answer5: [], answer6: [], answer7: [],
    }
  },
  methods: {
    animateText() {
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
        delay: 1000,
      });
      animation
        .add({targets: '.star-container', opacity: 1})
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 2000)
    },
    init() {
      this.canvasData = this.$store.getters.getPage70Data;
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    handleChange(id) {
      this.$refs.correct.pause();
      this.$refs.correct.currentTime = 0;
      document.querySelector('#mask-'+id).style.display = 'block';
      this.count++;
      this.$refs.correct.play();
    },
    rewardFunction() {
      document.querySelector('.reward-sticker').style.opacity = '1';
      anime({
        targets: '.reward-sticker',
        scale: 25,
        duration: 1000,
      })
      this.$refs.celebrate.play();
      setTimeout(() => this.$refs.celebrateVoice.play(), 200);
    },
  },
  created() {
    this.init();
  },
  mounted() {
    this.setAudioVolumeLevel(0.3);
  },
  watch: {
    count() {
      if (this.count === 7) this.rewardFunction();
    },
  }
}
</script>

<style scoped>
.mask {position: absolute;width: 100%;height: 100%;display: none}
.sources-container {position: absolute;width: 100%;height: 100%;}
.outer-container {position: absolute;height: 21vh;}
.answers-container {position: absolute;}
.answer-container {position: absolute;width: 100%;height: 100%;}
#answer-1 {top: 7vh; left: 82vh;}
#answer-2 {top: 14vh; left: 96.7vh; transform: rotate(51.5deg)}
#answer-3 {top: 29.5vh; left: 100.5vh; transform: rotate(98.5deg)}
#answer-4 {top: 42.5vh; left: 90.6vh; transform: rotate(153deg)}
#answer-5 {top: 43vh; left: 74.5vh; transform: rotate(202deg)}
#answer-6 {top: 30.5vh; left: 63.5vh; transform: rotate(255deg)}
#answer-7 {top: 14.8vh; left: 67.2vh; transform: rotate(306deg)}
.images-container {position: absolute;width: 17vh;}
#source-1 {bottom: 22vh;left: 5vh;}
#source-2 {top: 25vh;left: 40vh;}
#source-3 {top: 2vh;left: 50vh;}
#source-4 {bottom: 5vh;left: 28vh;}
#source-5 {bottom: 23vh;left: 46vh;}
#source-6 {top: 5vh;right: 3vh;}
#source-7 {top: 52vh;right: 4vh}
#pistil {
  position: absolute;
  top: 24vh;
  right: 30vh;
  width: 25vh;
}
#stem {
  position: absolute;
  bottom: 0;
  right: 8vh;
  height: 49vh;
}
.page-image {
  position: absolute;
  top: -2vh;
  left: -40vh;
  width: 160%;
}
.star-container {
  position: absolute;
  top: 2vh;
  left: -2%;
  width: 35%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}
.star-text {
  position: absolute;
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.star-text p {
  font-size: 3vh;
}
.star-text p:first-child {
  margin-top: 8vh;
  margin-bottom: 0;
}
.star {
  position: absolute;
  height: auto;
  width: 100%;
}
.shp0-star { fill: #f3cc30 }
.shp1-star { fill: #f7db5e }
.shp2-star { fill: #edbd31 }
.reward-sticker {
  position: absolute;
  height: auto;
  width: 1%;
  bottom: 25vh;
  left: 20vh;
  opacity: 0;
}
.cls-1 {fill: none;}
.cls-2 {isolation: isolate;}
.cls-3 {fill: #bcbec0; mix-blend-mode: multiply;}
.cls-4 {fill: #fff;}
.cls-5 {fill: #ffc800;}
.cls-6 {fill: #4a0f00;}
.cls-7 {fill: #6c2825;}
.cls-8 {clip-path: url(#clip-path);}
.cls-9 {fill: #e6f9ff;}
.cls-10 {fill: #b0413b;}
.cls-11 {fill: #d74f48;}
.cls-12,
.cls-15 {fill: #5a211e;}
.cls-13 {clip-path: url(#clip-path-2);}
.cls-14 {fill: #f0b000;}
.cls-15 {font-size: 31.16px; font-family: AntipastoPro-DemiBold, AntipastoPro DemiBold,serif; font-weight: 300;}
.cls-16 {fill: #affc41;}
.cls-17 {fill: #1dd3b0;}
</style>