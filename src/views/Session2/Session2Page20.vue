<template>
  <div class="interactive-container">
    <img src="../../assets/images/session2/OBCADV0-resized.jpg" alt="sad" class="image" id="left">
    <img src="../../assets/images/session2/514-resized.jpg" alt="angry" class="image" id="right">

    <div class="content-container" id="content-left">
      <h1>What could he be feeling?</h1>
      <div class="emotes-container">
        <emote-happy class="emotes incorrect"/>
        <emote-angry class="emotes"/>
        <emote-cool class="emotes incorrect"/>
      </div>
      <div class="tips-container">
        <p class="incorrect" id="tip-1-left">Happy</p>
        <p id="tip-2-left">Angry</p>
        <p class="incorrect" id="tip-3-left">Relaxing</p>
      </div>
      <div class="answer-container">
        <svg class="small-tick" id="red-tick-1-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
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
        <svg class="small-tick" id="green-tick-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
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
        <svg class="small-tick" id="red-tick-2-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
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
      <div class="masks-container">
        <div id="incorrect-1" class="incorrect" @click="answerHandler"></div>
        <div id="correct-1" @click="answerHandler"></div>
        <div id="incorrect-2" class="incorrect" @click="answerHandler"></div>
      </div>
    </div>
    <div class="content-container" id="content-right">
      <h1>What could he be feeling?</h1>
      <div class="emotes-container">
        <emote-angry class="emotes incorrect-2"/>
        <emote-cool class="emotes incorrect-2"/>
        <emote-crying class="emotes"/>
      </div>
      <div class="tips-container">
        <p class="incorrect-2" id="tip-1-right">Angry</p>
        <p class="incorrect-2" id="tip-2-right">Relaxing</p>
        <p id="tip-3-right">Sad</p>
      </div>
      <div class="answer-container">
        <svg class="small-tick" id="red-tick-1-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
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
        <svg class="small-tick" id="red-tick-2-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
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
        <svg class="small-tick" id="green-tick-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
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
      <div class="masks-container">
        <div id="incorrect-3" class="incorrect-2" @click="answerHandler"></div>
        <div id="incorrect-4" class="incorrect-2" @click="answerHandler"></div>
        <div id="correct-2" @click="answerHandler"></div>
      </div>
    </div>

    <!--  Awesome  -->
    <svg class="reward" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.29 198.09">
      <defs>
        <clipPath id="clip-path">
          <ellipse class="cls-1" cx="67.53" cy="107.56" rx="18.99" ry="19.85"
                   transform="translate(-53.23 146.91) rotate(-75.93)" />
        </clipPath>
        <clipPath id="clip-path-2">
          <ellipse class="cls-1" cx="127.79" cy="107.56" rx="19.85" ry="18.99"
                   transform="translate(-22.32 34.3) rotate(-14.07)" />
        </clipPath>
      </defs>
      <g class="cls-2">
        <g id="Layer_2" data-name="Layer 2">
          <g id="OBJECTS">
            <path class="cls-3"
                  d="M186.07,66.21l-1.93-1.77.37-2.59a9.7,9.7,0,0,0-14.37-9.8l-1.21.69a9.82,9.82,0,0,0-3.07-11.22l-6.51-5.16a9.86,9.86,0,0,0-5.81-2.13,9.5,9.5,0,0,0-1.06-1.82,7.34,7.34,0,0,0-.59-.76,9.89,9.89,0,0,0-7.37-3.31,9.74,9.74,0,0,0-3.08.5,9.91,9.91,0,0,0-5-5.54,10,10,0,0,0-4.33-1,9.65,9.65,0,0,0-3.37.6,9.44,9.44,0,0,0-1.76.83,18.37,18.37,0,0,0-23.29-4.46,15.42,15.42,0,0,0-10.52-3.92h-.56A15.37,15.37,0,0,0,85,17.69a9.79,9.79,0,0,0-4.48-1.1,10,10,0,0,0-2,.21l-8.14,1.73a9.91,9.91,0,0,0-4.25,2,10,10,0,0,0-2.33-.29A9.84,9.84,0,0,0,56,24a10,10,0,0,0-4.24,1,9.69,9.69,0,0,0-2.51,1.76,9.85,9.85,0,0,0-6.3,3.63,10,10,0,0,0-4.26,1,9.88,9.88,0,0,0-5.21,6.45,9.9,9.9,0,0,0-5.72,2.27,9.75,9.75,0,0,0-3.12,10.35l.17.58a10,10,0,0,0-2.39.95l-2.27,1.29-2.35-1.15a9.81,9.81,0,0,0-4.26-1A9.7,9.7,0,0,0,4,62.82l.52,2.57L2.73,67.27A9.69,9.69,0,0,0,8.59,83.63l2.6.3,1.23,2.31A9.66,9.66,0,0,0,27.2,89.11a75.58,75.58,0,0,0-6.72,22.46l-.06.36,0,.29c-.16,1.26-.29,2.51-.38,3.7l0,.31c0,.33-.05.66-.07,1s-.05.93-.07,1.41c-.05,1-.09,2.1-.09,3.27a76.2,76.2,0,0,0,152.39,0c0-1,0-2-.09-3.26,0-.49,0-1-.07-1.45,0-.3,0-.63-.07-1l0-.31c-.09-1.19-.22-2.44-.38-3.7l0-.29-.06-.36a75.38,75.38,0,0,0-5.93-20.75,9.63,9.63,0,0,0,12-5.09l1.09-2.38,2.57-.45a9.7,9.7,0,0,0,4.89-16.69Z" />
            <path class="cls-4"
                  d="M188.14,63.09l-1.92-1.76.36-2.59a9.69,9.69,0,0,0-14.36-9.8l-1.21.68a9.8,9.8,0,0,0-3.07-11.21l-6.51-5.17a10,10,0,0,0-5.82-2.13,9.45,9.45,0,0,0-1.05-1.82,7.15,7.15,0,0,0-.6-.76,9.7,9.7,0,0,0-3-2.29,9.91,9.91,0,0,0-4.35-1,9.8,9.8,0,0,0-3.09.5,9.92,9.92,0,0,0-14.41-5.12,18.37,18.37,0,0,0-10.8-6.48,19.18,19.18,0,0,0-3.53-.34,18.26,18.26,0,0,0-9,2.36,15.42,15.42,0,0,0-10.52-3.92h-.56a15.35,15.35,0,0,0-7.68,2.34,9.62,9.62,0,0,0-4.48-1.11,10,10,0,0,0-2,.21l-8.15,1.74a9.82,9.82,0,0,0-4.24,2,10.07,10.07,0,0,0-2.34-.3,9.86,9.86,0,0,0-4.33,1,9.74,9.74,0,0,0-3.4,2.74,9.83,9.83,0,0,0-6.75,2.76,9.86,9.86,0,0,0-2.91.91A9.72,9.72,0,0,0,45,27.32a10,10,0,0,0-4.26,1,9.81,9.81,0,0,0-5.21,6.45,9.83,9.83,0,0,0-8.84,12.62l.17.58a9.47,9.47,0,0,0-2.39.95l-2.28,1.28-2.34-1.14A9.69,9.69,0,0,0,6.11,59.71l.52,2.56L4.81,64.15a9.69,9.69,0,0,0,5.86,16.37l2.6.3,1.22,2.31A9.67,9.67,0,0,0,29.28,86a75.33,75.33,0,0,0-6.73,22.45c0,.12,0,.25-.05.37l0,.28c-.16,1.27-.29,2.51-.39,3.7l0,.31c0,.33,0,.66-.07,1s-.06.93-.08,1.41c0,1-.08,2.1-.08,3.26a76.19,76.19,0,0,0,152.38,0c0-1,0-2-.08-3.26,0-.48,0-1-.07-1.45,0-.3-.05-.63-.08-.95l0-.31c-.09-1.19-.22-2.44-.38-3.71a2.89,2.89,0,0,0,0-.29c0-.12,0-.24,0-.36a75.14,75.14,0,0,0-5.94-20.75,9.61,9.61,0,0,0,12-5.09l1.09-2.38,2.57-.45a9.69,9.69,0,0,0,4.88-16.69Z" />
            <circle class="cls-5" cx="98.02" cy="118.78" r="67.88" />
            <path class="cls-6"
                  d="M49.75,116a16.28,16.28,0,0,1-3.59-14.27A18.87,18.87,0,0,1,49.84,94a21.56,21.56,0,0,1,25.57-6,20.73,20.73,0,0,1,6.47,4.72,16.53,16.53,0,0,1,3.43,6.53l-.31.15A20.33,20.33,0,0,0,58.64,90.7a18.25,18.25,0,0,0-8.58,25.11Z" />
            <path class="cls-7"
                  d="M86.11,104.54c-1.45-8.76-10-14.4-19.18-12.6s-15.4,10.37-14,19.13a14.92,14.92,0,0,0,1.2,3.87c1.34-3.59,5.32-11.74,14.21-12.2,7.29-.37,14,2.58,17.9,4.76A15.54,15.54,0,0,0,86.11,104.54Z" />
            <g class="cls-8">
              <ellipse class="cls-9" cx="67.53" cy="107.56" rx="18.99" ry="19.85"
                       transform="translate(-53.23 146.91) rotate(-75.93)" />
              <ellipse class="cls-10" cx="69.45" cy="107.8" rx="16.03" ry="15.12"
                       transform="translate(-40.81 42.33) rotate(-26.51)" />
              <path class="cls-11"
                    d="M55.81,106.08c.17-1.17,3.92-1.88,4.12-.21s1.83,15.41,12.25,11,5.45-11.21,6.85-12,5.16-1.5,5-.26-.91,14.49-11.35,16.51S54.36,116.21,55.81,106.08Z" />
              <ellipse class="cls-12" cx="69.45" cy="107.8" rx="8.15" ry="7.69"
                       transform="translate(-40.82 42.33) rotate(-26.51)" />
              <path class="cls-9"
                    d="M53.29,102.3c-2.78,3.08-2.51,4.45-1.09,5.07s11.19-.63,10.49-2.62S55.87,99.43,53.29,102.3Z" />
            </g>
            <path class="cls-6"
                  d="M145.57,116a16.28,16.28,0,0,0,3.59-14.27A18.87,18.87,0,0,0,145.48,94a21.56,21.56,0,0,0-25.57-6,20.89,20.89,0,0,0-6.48,4.72A16.64,16.64,0,0,0,110,99.17l.31.15a20.33,20.33,0,0,1,26.36-8.62,18.27,18.27,0,0,1,8.58,25.11Z" />
            <path class="cls-7"
                  d="M109.21,104.54c1.45-8.76,10-14.4,19.18-12.6s15.4,10.37,14,19.13a14.92,14.92,0,0,1-1.2,3.87c-1.34-3.59-5.33-11.74-14.21-12.2-7.29-.37-14,2.58-17.91,4.76A16.42,16.42,0,0,1,109.21,104.54Z" />
            <g class="cls-13">
              <ellipse class="cls-9" cx="127.79" cy="107.56" rx="19.85" ry="18.99"
                       transform="translate(-22.32 34.3) rotate(-14.07)" />
              <ellipse class="cls-10" cx="125.86" cy="107.8" rx="15.12" ry="16.03"
                       transform="translate(-26.78 172.32) rotate(-63.49)" />
              <path class="cls-11"
                    d="M139.51,106.08c-.17-1.17-3.92-1.88-4.12-.21s-1.83,15.41-12.25,11-5.45-11.21-6.85-12-5.16-1.5-5-.26.91,14.49,11.35,16.51S141,116.21,139.51,106.08Z" />
              <path class="cls-12"
                    d="M117.9,106.23a8.24,8.24,0,0,0,6.71,9.2,7.64,7.64,0,0,0,9.22-6.06,8.24,8.24,0,0,0-6.71-9.19A7.63,7.63,0,0,0,117.9,106.23Z" />
              <path class="cls-9"
                    d="M142,102.3c2.78,3.08,2.51,4.45,1.09,5.07s-11.2-.63-10.49-2.62S139.45,99.43,142,102.3Z" />
            </g>
            <path class="cls-6"
                  d="M48.92,82c5-8.23,17.46-12.7,26.31-8.14a1.63,1.63,0,0,0,2-2.56c-8.53-10.58-24.66,1.54-29.36,10.07a.63.63,0,0,0,1.09.63Z" />
            <path class="cls-6"
                  d="M141.86,75.42c-4.71-8.54-20.85-20.64-29.37-10a1.63,1.63,0,0,0,2,2.54c8.85-4.57,21.26-.08,26.31,8.14a.63.63,0,0,0,1.09-.63Z" />
            <path class="cls-6"
                  d="M106.83,155.7A48.29,48.29,0,0,0,108,145c0-7-1.38-13.31-3.56-17.5a10.72,10.72,0,0,1-12.8,0c-2.17,4.19-3.56,10.47-3.56,17.5a47.68,47.68,0,0,0,1.16,10.68,13.52,13.52,0,0,1,17.61,0Z" />
            <path class="cls-9"
                  d="M104.42,127.52c-1.73-3.33-4-5.34-6.4-5.34s-4.67,2-6.4,5.34a10.72,10.72,0,0,0,12.8,0Z" />
            <path class="cls-11"
                  d="M98,167.86c3.82,0,7.13-4.93,8.81-12.16a13.52,13.52,0,0,0-17.61,0C90.89,162.93,94.2,167.86,98,167.86Z" />
            <path class="cls-14"
                  d="M98,168.88a67.88,67.88,0,0,1-67.28-59,67.87,67.87,0,1,0,135.16,8.89,68.54,68.54,0,0,0-.59-8.89A67.88,67.88,0,0,1,98,168.88Z" />
            <path class="cls-11"
                  d="M50.14,138.27q1.71-1.8,3.57-3.44c.61-.53,1.24-1.06,1.87-1.57s1.26-1.1,1.89-1.64-.19-1.54-.86-1.11A24.37,24.37,0,0,0,54.48,132c-.65.53-1.28,1.08-1.9,1.64-1.24,1.12-2.43,2.31-3.56,3.54-.69.75.42,1.86,1.12,1.11Z" />
            <path class="cls-11"
                  d="M56.22,139.56a89.55,89.55,0,0,1,9.28-7.65c.7-.51,0-1.69-.7-1.19a64.93,64.93,0,0,0-9.47,8c-.58.57.31,1.44.89.88Z" />
            <path class="cls-11"
                  d="M64.29,139.64a41,41,0,0,1,3.43-3.29c.57-.48,1.15-.94,1.75-1.38s1.3-1.05,2-1.58-.18-1.39-.82-1a15.39,15.39,0,0,0-2,1.24c-.66.52-1.32,1-2,1.6a39.19,39.19,0,0,0-3.41,3.41c-.63.72.41,1.77,1.07,1Z" />
            <path class="cls-11"
                  d="M120.1,137.15a69.13,69.13,0,0,1,9.42-8.34c.58-.45.08-1.41-.59-1a23,23,0,0,0-2.69,1.75c-.86.68-1.69,1.39-2.5,2.12a49.31,49.31,0,0,0-4.48,4.66c-.48.58.33,1.4.84.83Z" />
            <path class="cls-11"
                  d="M126.91,137.77a32.66,32.66,0,0,1,3.66-4c.65-.61,1.33-1.17,2-1.73s1.36-1.18,2.07-1.73.08-1.37-.57-1a24.49,24.49,0,0,0-2.36,1.54,25,25,0,0,0-2.11,1.87,34.57,34.57,0,0,0-3.71,4.23c-.43.57.55,1.32,1,.76Z" />
            <path class="cls-11"
                  d="M132.06,138.73a26.77,26.77,0,0,1,3.93-3.44,25.55,25.55,0,0,1,2.15-1.4c.79-.46,1.54-.95,2.32-1.42a.83.83,0,1,0-.84-1.43,13.47,13.47,0,0,0-2.41,1.26c-.77.53-1.51,1.1-2.23,1.69a28.44,28.44,0,0,0-3.82,3.86c-.5.61.33,1.48.9.88Z" />
            <text class="cls-15" transform="matrix(0.77, -0.64, 0.64, 0.77, 40.85, 64.58)">A</text><text
              class="cls-15" transform="translate(52.86 53.56) rotate(-25.11)">W</text><text class="cls-15"
                                                                                             transform="translate(75.78 43.51) rotate(-11.54)">E</text><text class="cls-15"
                                                                                                                                                             transform="matrix(1, -0.01, 0.01, 1, 89.99, 40.6)">S</text><text class="cls-15"
                                                                                                                                                                                                                              transform="translate(104.31 40.07) rotate(12.4)">O</text><text class="cls-15"
                                                                                                                                                                                                                                                                                             transform="translate(124.14 43.99) rotate(28.38)">M</text><text class="cls-15"
                                                                                                                                                                                                                                                                                                                                                             transform="translate(144.9 55.72) rotate(42.19)">E</text>
            <path class="cls-16"
                  d="M34.1,71.6l-6.16,1.08a1.4,1.4,0,0,0-1,.79l-2.6,5.69a1.39,1.39,0,0,1-2.49.07L18.9,73.71A1.4,1.4,0,0,0,17.83,73l-6.21-.71a1.39,1.39,0,0,1-.84-2.35l4.35-4.49a1.38,1.38,0,0,0,.36-1.24l-1.24-6.13a1.39,1.39,0,0,1,2-1.52l5.62,2.75a1.4,1.4,0,0,0,1.29,0l5.44-3.07a1.39,1.39,0,0,1,2.06,1.4l-.88,6.19A1.38,1.38,0,0,0,30.19,65l4.6,4.23A1.39,1.39,0,0,1,34.1,71.6Z" />
            <path class="cls-17"
                  d="M181.82,71.6l-6.15,1.08a1.42,1.42,0,0,0-1,.79L172,79.16a1.38,1.38,0,0,1-2.48.07l-2.93-5.52a1.41,1.41,0,0,0-1.07-.73l-6.21-.71a1.39,1.39,0,0,1-.84-2.35l4.35-4.49a1.41,1.41,0,0,0,.36-1.24L162,58.06a1.39,1.39,0,0,1,2-1.52l5.62,2.75a1.4,1.4,0,0,0,1.29,0l5.44-3.07a1.39,1.39,0,0,1,2.06,1.4l-.88,6.19a1.38,1.38,0,0,0,.44,1.21l4.6,4.23A1.39,1.39,0,0,1,181.82,71.6Z" />
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import anime from "animejs";
import EmoteCrying from "@/components/feelingsQuestion/emotes/EmoteCrying";
import EmoteAngry from "@/components/feelingsQuestion/emotes/EmoteAngry";
import EmoteHappy from "@/components/feelingsQuestion/emotes/EmoteHappy";
import EmoteCool from "@/components/feelingsQuestion/emotes/EmoteCool";

export default {
  name: "Session2Page20",
  components: {EmoteCool, EmoteCrying, EmoteAngry, EmoteHappy},
  data() {
    return {
      correctAns: []
    }
  },
  methods: {
    animateRedTick(target) {
      anime({
        targets: target,
        easing: 'linear',
        opacity: [
          {value: 1, duration: 200},
          {value: 0, duration: 100},
          {value: 1, duration: 200},
          {value: 0, duration: 100, delay: 500},
        ]
      })
    },
    animateGreenTick(target) {
      anime({
        targets: target,
        easing: 'linear',
        opacity: 1,
        duration: 500
      })
    },
    hideElements(className) {
      let elements = document.querySelectorAll(className);
      elements.forEach(element => {
        element.style.visibility = 'hidden';
      })
    },
    checkComplete(arg) {
      if (!this.correctAns.includes(arg)) {
        this.correctAns.push(arg);
        if (this.correctAns.length === 2) {
          document.querySelector('.reward').style.opacity = '1';
          anime({
            targets: '.reward',
            scale: 20,
            duration: 1000,
          })
        }
      }
    },
    answerHandler(e) {
      let id = e.target.id;
      switch (id) {
        case 'incorrect-1':
          this.animateRedTick('#red-tick-1-left');
          break;
        case 'incorrect-2':
          this.animateRedTick('#red-tick-2-left');
          break;
        case 'incorrect-3':
          this.animateRedTick('#red-tick-1-right');
          break;
        case 'incorrect-4':
          this.animateRedTick('#red-tick-2-right');
          break;
        case 'correct-1':
          this.animateGreenTick('#green-tick-left');
          this.hideElements('.incorrect');
          this.checkComplete(id);
          break;
        case 'correct-2':
          this.animateGreenTick('#green-tick-right');
          this.hideElements('.incorrect-2');
          this.checkComplete(id);
          break;
      }
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
  },
}
</script>

<style scoped>
@media screen and (max-width: 930px) {
  .content-container {
    border-radius: 8px !important;
    bottom: 10vh !important;
  }
}
.image {
  position: absolute;
  top: 2vh;
  width: 40%;
  height: calc(70vh - 60px);
}
#left {
  left: 5%;
}
#right {
  right: 5%;
}
.reward {
  position: absolute;
  height: auto;
  width: 1%;
  left: 50%;
  bottom: 35vh;
  opacity: 0;
}
.masks-container {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 .7vh;
  top: 5.5vh;
}
.masks-container div {
  width: 7vh;
  height: 7vh;
  background-color: rgba(0,0,0,0.5);
}
.tips-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #ffffff;
  font-size: 2.1vh;
  font-weight: bold;
  margin: 0 .7vh;
  text-align: center;
}
.tips-container p {
  margin-bottom: 0;
  display: inline-block;
  width: 9.8vh;
}
.content-container {
  position: absolute;
  background-color: rgba(0, 206, 124, 0.8);
  border-radius: 30px;
  padding-top: 1vh;
  width: 34%;
  bottom: 4vh;
  display: flex;
  flex-direction: column;
  opacity: 0;
}
.content-container h1 {
  text-align: center;
  font-size: 2.8vh;
  color: #ffffff;
}
.emotes-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 .7vh;
}
.emotes {
  height: auto;
  width: 7vh;
}
.answer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin: 0 .7vh .5vh .7vh;
}
.small-tick {
  width: 4.2vh;
  height: auto;
  opacity: 0;
}
#content-left {
  left: 8%;
}
#content-right {
  right: 8%;
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