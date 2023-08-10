<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session8/sky-background-1.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session8/sky-background-1.jpg"
      class="session-background"
    />
    <div class="text-box">
      <p>Talk to your classmates about ideas on how to make new friends.</p>
      <p>Click on each balloon to find ideas to make new friends:</p>
    </div>
    <div class="balloons-container">
      <div class="balloon-container" @click="revealBalloon(5)" id="balloon-5">
        <svg class="balloon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.12 264.23">
          <g id="Background_2">
            <g>
              <path class="cls-pink-2-7" d="M61.05,113.36s-.9,20.13,15.31,36.21c16.21,16.08,10.75,36.75-4.21,54.96-14.96,18.21-12.01,42.71-2.49,58.71" />
              <path class="cls-pink-2-5" d="M65.82,116.8l-7.8,1.6c-2.35,.48-4.64-1.03-5.12-3.38h0c-.48-2.35,1.03-4.64,3.38-5.12l7.8-1.6c2.35-.48,4.64,1.03,5.12,3.38h0c.48,2.35-1.03,4.64-3.38,5.12Z" />
              <path class="cls-pink-2-5" d="M94.14,38.01C88.89,12.47,64.09-4.05,38.56,.87,12.82,5.82-4.32,31.46,.95,57.14c3.25,15.82,14.01,28.18,27.8,34.12,4.72,2.03,8.8,5.31,11.68,9.57l.2,.3c3.44,5.09,9.13,8.21,15.27,8.36h0c2.88,.07,5.74-.52,8.36-1.72h0c5.59-2.56,9.59-7.66,10.74-13.69l.07-.35c.97-5.08,3.47-9.71,7.02-13.47,10.29-10.89,15.29-26.46,12.05-42.25Z" />
              <path class="cls-pink-2-1" d="M70,102.03h0c-2.62,1.2-5.48,1.79-8.36,1.72-6.14-.15-11.83-3.26-15.27-8.36l-.2-.3c-2.88-4.26-6.95-7.54-11.68-9.57-13.79-5.94-24.55-18.3-27.8-34.12-3.03-14.76,1.35-29.49,10.51-40.3C4.24,22.01-2.65,39.56,.95,57.14c3.25,15.82,14.01,28.18,27.8,34.12,4.72,2.03,8.8,5.31,11.68,9.57l.2,.3c3.44,5.09,9.13,8.21,15.27,8.36,2.88,.07,5.74-.52,8.36-1.72,3.36-1.54,6.14-4,8.07-7.02-.74,.48-1.52,.91-2.33,1.28Z" />
              <path class="face face-5 cls-pink-2-4" d="M56.36,65.45h0c-8.28,1.7-16.37-3.64-18.07-11.92l-.35-1.72c-.36-1.74,.76-3.43,2.5-3.79l23.7-4.87c1.74-.36,3.43,.76,3.79,2.5l.35,1.72c1.7,8.28-3.64,16.37-11.92,18.07Z" />
              <path class="cls-pink-2-2" d="M7.17,33.15s5.83-13.85,12-15.48,5.69,6.6,2.31,11.27-7.11,11.13-7.7,17.08c-.59,5.95-4.02,6.84-6.39,4.07-2.37-2.77-2.88-9.95-.22-16.94Z" />
              <path class="cls-pink-2-2" d="M78.73,76.23s4.95-4.63,7.48-9.37c2.52-4.73,3.07-10.89-.35-9.93-3.19,.9-4.55,5.34-9.16,9.35-8.9,7.73-2.8,15.31,2.04,9.94Z" />
              <path class="face face-5 cls-pink-2-3" d="M64.13,43.16l-23.7,4.87c-1.74,.36-2.85,2.05-2.5,3.79l.35,1.72s0,.01,0,.02c.17,.85,1.03,1.38,1.88,1.2l26.86-5.51c.85-.17,1.42-1,1.25-1.85,0,0,0-.01,0-.02l-.35-1.72c-.36-1.74-2.05-2.86-3.79-2.5Z" />
              <g class="face face-5">
                <path class="cls-pink-2-6" d="M40.21,40.6c.59,2.87-1.26,5.68-4.13,6.27-2.87,.59-5.68-1.26-6.27-4.13-.59-2.87,1.26-5.68,4.13-6.27,2.87-.59,5.68,1.26,6.27,4.13Z" />
                <path class="cls-pink-2-3" d="M33.78,39.46c.16,.78-.34,1.55-1.13,1.71-.78,.16-1.55-.34-1.71-1.13-.16-.78,.34-1.55,1.13-1.71,.78-.16,1.55,.34,1.71,1.13Z" />
              </g>
              <g class="face face-5">
                <path class="cls-pink-2-6" d="M72.64,33.94c.59,2.87-1.26,5.68-4.13,6.27-2.87,.59-5.68-1.26-6.27-4.13-.59-2.87,1.26-5.68,4.13-6.27,2.87-.59,5.68,1.26,6.27,4.13Z" />
                <path class="cls-pink-2-3" d="M66.21,32.81c.16,.78-.34,1.55-1.13,1.71-.78,.16-1.55-.34-1.71-1.13-.16-.78,.34-1.55,1.13-1.71,.78-.16,1.55,.34,1.71,1.13Z" />
              </g>
            </g>
          </g>
        </svg>
        <div class="balloon-text" id="text-5">Smile</div>
      </div>
      <div class="balloon-container" @click="revealBalloon(2)" id="balloon-2">
        <svg class="balloon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.12 264.23">
          <g id="Background_2">
            <g>
              <path class="cls-pink-1-7" d="M34.07,113.36s.9,20.13-15.31,36.21c-16.21,16.08-10.75,36.75,4.21,54.96,14.96,18.21,12.01,42.71,2.49,58.71" />
              <path class="cls-pink-1-5" d="M29.29,116.8l7.8,1.6c2.35,.48,4.64-1.03,5.12-3.38h0c.48-2.35-1.03-4.64-3.38-5.12l-7.8-1.6c-2.35-.48-4.64,1.03-5.12,3.38h0c-.48,2.35,1.03,4.64,3.38,5.12Z" />
              <path class="cls-pink-1-5" d="M.98,38.01C6.22,12.47,31.03-4.05,56.56,.87c25.74,4.96,42.88,30.6,37.61,56.27-3.25,15.82-14.01,28.18-27.8,34.12-4.72,2.03-8.8,5.31-11.68,9.57l-.2,.3c-3.44,5.09-9.13,8.21-15.27,8.36h0c-2.88,.07-5.74-.52-8.36-1.72h0c-5.59-2.56-9.59-7.66-10.74-13.69l-.07-.35c-.97-5.08-3.47-9.71-7.02-13.47C2.74,69.37-2.26,53.8,.98,38.01Z" />
              <path class="cls-pink-1-1" d="M25.12,102.03h0c2.62,1.2,5.48,1.79,8.36,1.72,6.14-.15,11.83-3.26,15.27-8.36l.2-.3c2.88-4.26,6.95-7.54,11.68-9.57,13.79-5.94,24.55-18.3,27.8-34.12,3.03-14.76-1.35-29.49-10.51-40.3,12.96,10.92,19.86,28.47,16.25,46.05-3.25,15.82-14.01,28.18-27.8,34.12-4.72,2.03-8.8,5.31-11.68,9.57l-.2,.3c-3.44,5.09-9.13,8.21-15.27,8.36-2.88,.07-5.74-.52-8.36-1.72-3.36-1.54-6.14-4-8.07-7.02,.74,.48,1.52,.91,2.33,1.28Z" />
              <path class="face face-2 cls-pink-1-4" d="M38.76,65.45h0c8.28,1.7,16.37-3.64,18.07-11.92l.35-1.72c.36-1.74-.76-3.43-2.5-3.79l-23.7-4.87c-1.74-.36-3.43,.76-3.79,2.5l-.35,1.72c-1.7,8.28,3.64,16.37,11.92,18.07Z" />
              <path class="cls-pink-1-2" d="M87.94,33.15s-5.83-13.85-12-15.48c-6.17-1.63-5.69,6.6-2.31,11.27,3.38,4.67,7.11,11.13,7.7,17.08,.59,5.95,4.02,6.84,6.39,4.07,2.37-2.77,2.88-9.95,.22-16.94Z" />
              <path class="cls-pink-1-2" d="M16.39,76.23s-4.95-4.63-7.48-9.37c-2.52-4.73-3.07-10.89,.35-9.93,3.19,.9,4.55,5.34,9.16,9.35,8.9,7.73,2.8,15.31-2.04,9.94Z" />
              <path class="face face-2 cls-pink-1-3" d="M30.98,43.16l23.7,4.87c1.74,.36,2.85,2.05,2.5,3.79l-.35,1.72s0,.01,0,.02c-.18,.85-1.03,1.38-1.88,1.2l-26.86-5.51c-.85-.17-1.42-1-1.25-1.85,0,0,0-.01,0-.02l.35-1.72c.36-1.74,2.05-2.85,3.79-2.5Z" />
              <g class="face face-2">
                <path class="cls-pink-1-6" d="M54.91,40.6c-.59,2.87,1.26,5.68,4.13,6.27,2.87,.59,5.68-1.26,6.27-4.13,.59-2.87-1.26-5.68-4.13-6.27-2.87-.59-5.68,1.26-6.27,4.13Z" />
                <path class="cls-pink-1-3" d="M61.34,39.46c-.16,.78,.34,1.55,1.13,1.71,.78,.16,1.55-.34,1.71-1.13,.16-.78-.34-1.55-1.13-1.71-.78-.16-1.55,.34-1.71,1.13Z" />
              </g>
              <g class="face face-2">
                <path class="cls-pink-1-6" d="M22.48,33.94c-.59,2.87,1.26,5.68,4.13,6.27,2.87,.59,5.68-1.26,6.27-4.13,.59-2.87-1.26-5.68-4.13-6.27-2.87-.59-5.68,1.26-6.27,4.13Z" />
                <path class="cls-pink-1-3" d="M28.91,32.81c-.16,.78,.34,1.55,1.13,1.71,.78,.16,1.55-.34,1.71-1.13s-.34-1.55-1.13-1.71c-.78-.16-1.55,.34-1.71,1.13Z" />
              </g>
            </g>
          </g>
        </svg>
        <div class="balloon-text" id="text-2">Speak to a <br>new friend</div>
      </div>
      <div class="balloon-container" @click="revealBalloon(7)" id="balloon-7">
        <svg class="balloon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.13 228.48">
          <g id="Background_2">
            <g>
              <path class="cls-green-1-5" d="M54.05,113.62s-3.68,12.33,7.62,23.57c11.3,11.24,23.45,28.86,10.62,51.05-12.82,22.19,5.5,39.25,5.5,39.25" />
              <path class="cls-green-1-3" d="M48.78,119.15l7.95-.58c2.39-.17,4.18-2.25,4.01-4.64h0c-.17-2.39-2.25-4.18-4.64-4.01l-7.95,.58c-2.39,.17-4.18,2.25-4.01,4.64h0c.17,2.39,2.25,4.18,4.64,4.01Z" />
              <path class="cls-green-1-3" d="M.13,51.01C-1.77,25.01,17.62,2.37,43.52,.17c26.12-2.22,49.58,17.8,51.48,43.94,1.17,16.11-5.83,30.93-17.48,40.39-3.99,3.24-7.03,7.5-8.64,12.39l-.11,.34c-1.92,5.83-6.55,10.38-12.42,12.19h0c-2.75,.85-5.66,1.06-8.51,.62h0c-6.07-.94-11.31-4.77-14.06-10.26l-.16-.32c-2.31-4.62-5.98-8.4-10.41-11.05C10.34,80.72,1.3,67.09,.13,51.01Z" />
              <g class="cls-green-1-2">
                <path class="cls-green-1-4" d="M40.18,102.04h0c2.85,.44,5.76,.23,8.51-.62h0c5.87-1.81,10.5-6.35,12.42-12.19l.11-.34c1.61-4.88,4.64-9.15,8.64-12.39,11.66-9.47,18.65-24.28,17.48-40.39-.68-9.38-4.15-17.95-9.51-25.01,9.64,8.01,16.19,19.71,17.16,33.01,1.17,16.11-5.83,30.93-17.48,40.39-3.99,3.24-7.03,7.5-8.64,12.39l-.11,.34c-1.92,5.83-6.55,10.38-12.42,12.19h0c-2.75,.85-5.66,1.06-8.51,.62-6.05-.94-11.27-4.74-14.03-10.2,1.95,1.09,4.1,1.85,6.37,2.2Z" />
              </g>
              <path class="cls-green-1-1" d="M79.25,17.35s-9.37-11.74-15.76-11.63-3.68,7.9,.84,11.48c4.52,3.58,9.87,8.77,12.05,14.34,2.18,5.57,5.72,5.49,7.26,2.18,1.53-3.31,.07-10.36-4.39-16.37Z" />
              <path class="cls-green-1-1" d="M25.34,83.61s-6.02-3.11-9.74-6.98c-3.71-3.87-5.91-9.64-2.36-9.65,3.31,0,5.82,3.9,11.36,6.51,10.66,5.02,6.85,13.98,.74,10.12Z" />
              <g class="face face-7">
                <path class="cls-green-1-6" d="M63.32,38.08c-.21-2.93-2.76-5.12-5.68-4.91-2.93,.21-5.12,2.76-4.91,5.68" />
              </g>
              <g class="face face-7">
                <path class="cls-green-1-6" d="M30.31,40.49c-.21-2.93-2.76-5.12-5.68-4.91-2.93,.21-5.12,2.76-4.91,5.68" />
              </g>
              <path class="face face-7 cls-green-1-6" d="M30.15,53.4c2.39,4.55,7.3,7.49,12.75,7.09h0c4.85-.35,8.88-3.27,10.92-7.31" />
            </g>
          </g>
        </svg>
        <div class="balloon-text" id="text-7">Play with an <br>animal friend <br>together</div>
      </div>
      <div class="balloon-container" @click="revealBalloon(4)" id="balloon-4">
        <svg class="balloon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.35 208.89">
          <g id="Background_2">
            <g>
              <path class="cls-orange-2-7" d="M67.32,100.42s-7.77,17.39,2.75,29.29c10.51,11.9,19.79-5.37,10.86-11.4-8.93-6.03-29.99,7.54-17.53,26.69s26.95,46.9,11.96,62.88" />
              <path class="cls-orange-2-2" d="M96.92,5.57c-13.9-9.27-32.18-6.62-42.95,5.39-1.99,2.22-5.17,2.91-7.89,1.71C31.3,6.21,13.57,11.37,4.76,25.58-4.66,40.78,.41,61.41,15.44,71.08l33.62,21.63c11.89,7.65,27.73,4.21,35.38-7.68l21.63-33.62c9.67-15.04,5.72-35.91-9.15-45.84Z" />
              <path class="cls-orange-2-1" d="M55.07,85.46L21.44,63.83C6.45,54.19,1.38,33.66,10.68,18.47c-2.24,2.03-4.24,4.4-5.92,7.11C-4.66,40.78,.41,61.41,15.44,71.08l33.62,21.63c11.89,7.65,27.73,4.21,35.38-7.68l.99-1.53c-8.36,7.07-20.67,8.2-30.36,1.97Z" />
              <path class="cls-orange-2-4" d="M25.46,34.81c-3.67,5.73-10.25,8.06-14.69,5.21-4.44-2.85-5.07-9.8-1.4-15.52,3.67-5.73,10.25-8.06,14.69-5.22,4.44,2.85,5.07,9.8,1.4,15.52Z" />
              <path class="cls-orange-2-4" d="M84.4,82.12c-2.76,4.31-7.71,6.06-11.05,3.92s-3.81-7.37-1.05-11.67c2.76-4.31,7.71-6.06,11.05-3.92,3.34,2.14,3.81,7.37,1.05,11.67Z" />
              <path class="cls-orange-2-2" d="M73.05,103.36l-7.17,1.56c-2.16,.47-4.29-.9-4.75-3.06h0c-.47-2.16,.9-4.29,3.06-4.75l7.17-1.56c2.16-.47,4.29,.9,4.75,3.06h0c.47,2.16-.9,4.29-3.06,4.75Z" />
              <g class="face face-4">
                <path class="cls-orange-2-6" d="M47,34.9c.36,2.91-1.71,5.56-4.62,5.92-2.91,.36-5.56-1.71-5.92-4.62-.36-2.91,1.71-5.56,4.62-5.92s5.56,1.71,5.92,4.62Z" />
                <path class="cls-orange-2-3" d="M40.68,33.26c.1,.79-.47,1.52-1.26,1.61-.79,.1-1.52-.47-1.61-1.26-.1-.79,.47-1.52,1.26-1.61,.79-.1,1.52,.47,1.61,1.26Z" />
              </g>
              <g class="face face-4">
                <path class="cls-orange-2-6" d="M73.04,29.73c.36,2.91-1.71,5.56-4.62,5.92s-5.56-1.71-5.92-4.62c-.36-2.91,1.71-5.56,4.62-5.92,2.91-.36,5.56,1.71,5.92,4.62Z" />
                <path class="cls-orange-2-3" d="M66.72,28.09c.1,.79-.47,1.52-1.26,1.61-.79,.1-1.52-.47-1.61-1.26-.1-.79,.47-1.52,1.26-1.61,.79-.1,1.52,.47,1.61,1.26Z" />
              </g>
              <g class="face face-4">
                <path class="cls-orange-2-5" d="M66.97,50.35c.88,4.56-1.56,8.86-5.45,9.61-3.89,.75-7.75-2.34-8.63-6.9-.88-4.56,1.56-8.86,5.45-9.61,3.89-.75,7.75,2.34,8.63,6.9Z" />
                <path class="cls-orange-2-3" d="M55.14,50.3l8.73-1.68c1.23-.24,1.81-1.73,.98-2.68-1.68-1.94-4.09-2.96-6.51-2.49-2.38,.46-4.21,2.25-5.08,4.61-.45,1.23,.58,2.49,1.87,2.24Z" />
              </g>
            </g>
          </g>
        </svg>
        <div class="balloon-text" id="text-4">Play in <br>the water <br>together</div>
      </div>
      <div class="balloon-container" @click="revealBalloon(1)" id="balloon-1">
        <svg class="balloon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.12 223.18">
          <g id="Background_2">
            <g>
              <path class="cls-yellow-1-7" d="M41.76,114.47s8.49,17.05-1.51,29.38c-10,12.33-20-4.53-11.33-10.93,8.67-6.4,30.28,6.26,18.64,25.93-11.64,19.67-24.94,48-9.29,63.33" />
              <path class="cls-yellow-1-4" d="M37.42,118.45l7.94,.69c2.39,.21,4.49-1.56,4.7-3.95h0c.21-2.39-1.56-4.49-3.95-4.7l-7.94-.69c-2.39-.21-4.49,1.56-4.7,3.95h0c-.21,2.39,1.56,4.49,3.95,4.7Z" />
              <path class="cls-yellow-1-4" d="M.18,43.46C2.43,17.48,25.16-1.8,51.09,.13c26.14,1.95,46.13,25.43,43.86,51.54-1.4,16.09-10.66,29.61-23.66,37.11-4.45,2.57-8.13,6.3-10.49,10.86l-.17,.32c-2.82,5.46-8.12,9.21-14.2,10.07h0c-2.85,.4-5.76,.15-8.5-.74h0c-5.84-1.89-10.41-6.5-12.25-12.36l-.11-.34c-1.55-4.93-4.57-9.24-8.53-12.56C5.55,74.4-1.21,59.52,.18,43.46Z" />
              <g class="cls-yellow-1-2">
                <path class="cls-yellow-1-5" d="M80.23,13.21c6.67,9.01,10.25,20.34,9.22,32.22-1.4,16.09-10.66,29.61-23.66,37.11-4.45,2.57-8.13,6.3-10.49,10.86l-.17,.32c-2.82,5.46-8.12,9.21-14.2,10.07-2.85,.4-5.76,.15-8.5-.74h0c-1.92-.62-3.7-1.54-5.3-2.7,2.3,4.21,6.14,7.44,10.8,8.95h0c2.74,.89,5.65,1.14,8.5,.74,6.08-.86,11.37-4.61,14.2-10.07l.17-.32c2.36-4.57,6.04-8.29,10.49-10.86,13.01-7.5,22.27-21.02,23.66-37.11,1.29-14.83-4.61-28.8-14.72-38.47Z" />
              </g>
              <path class="cls-yellow-1-1" d="M86,28.57s-7.39-13.08-13.71-13.98c-6.32-.9-4.89,7.22-.99,11.46,3.9,4.25,8.35,10.23,9.62,16.07,1.27,5.84,4.78,6.32,6.82,3.3s1.71-10.22-1.74-16.85Z" />
              <path class="cls-yellow-1-1" d="M19.91,79.64s-5.46-4.03-8.51-8.44-4.31-10.46-.8-9.9c3.27,.52,5.13,4.78,10.19,8.23,9.73,6.65,4.55,14.89-.88,10.11Z" />
              <g class="face face-1">
                <path class="cls-yellow-1-6" d="M54.04,39.79c-.25,2.92,1.91,5.5,4.83,5.75s5.5-1.91,5.75-4.83c.25-2.92-1.91-5.5-4.83-5.75-2.92-.25-5.5,1.91-5.75,4.83Z" />
                <path class="cls-yellow-1-3" d="M60.3,37.92c-.07,.8,.52,1.5,1.32,1.57,.8,.07,1.5-.52,1.57-1.32,.07-.8-.52-1.5-1.32-1.57-.8-.07-1.5,.52-1.57,1.32Z" />
              </g>
              <g class="face face-1">
                <path class="cls-yellow-1-6" d="M21.06,36.93c-.25,2.92,1.91,5.5,4.83,5.75,2.92,.25,5.5-1.91,5.75-4.83s-1.91-5.5-4.83-5.75-5.5,1.91-5.75,4.83Z" />
                <path class="cls-yellow-1-3" d="M27.32,35.06c-.07,.8,.52,1.5,1.32,1.57s1.5-.52,1.57-1.32c.07-.8-.52-1.5-1.32-1.57-.8-.07-1.5,.52-1.57,1.32Z" />
              </g>
              <path class="face face-1 cls-yellow-1-8" d="M29.45,50.57c1.64,4.87,6.02,8.55,11.46,9.02h0c4.84,.42,9.29-1.82,11.94-5.49" />
            </g>
          </g>
        </svg>
        <div class="balloon-text" id="text-1">Bike ride together</div>
      </div>
      <div class="balloon-container" @click="revealBalloon(6)" id="balloon-6">
        <svg class="balloon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.11 223.93">
          <g id="Background_2">
            <g>
              <path class="cls-red-1-7" d="M33.39,113.21s4.3,7.72-4.81,18.22c-9.11,10.5-19.77,20.11-9.11,36.8,10.67,16.69,15.87,35.7,5.68,54.7" />
              <path class="cls-red-1-4" d="M28.58,116.61l7.79,1.68c2.34,.51,4.65-.98,5.16-3.32h0c.51-2.34-.98-4.65-3.32-5.16l-7.79-1.68c-2.34-.51-4.65,.98-5.16,3.32h0c-.51,2.34,.98,4.65,3.32,5.16Z" />
              <path class="cls-red-1-4" d="M1.08,37.53C6.59,12.05,31.56-4.22,57.04,.96c25.68,5.22,42.56,31.04,37.03,56.65-3.41,15.79-14.3,28.03-28.15,33.84-4.74,1.99-8.85,5.22-11.77,9.45l-.21,.3c-3.49,5.06-9.21,8.11-15.35,8.2h0c-2.88,.04-5.73-.58-8.34-1.8h0c-5.56-2.61-9.51-7.76-10.6-13.8l-.06-.35c-.92-5.09-3.37-9.74-6.88-13.54C2.51,68.91-2.32,53.29,1.08,37.53Z" />
              <g class="cls-red-1-2">
                <path class="cls-red-1-6" d="M87.55,22.11c3.1,8.23,3.98,17.38,2.01,26.5-3.41,15.79-14.3,28.03-28.15,33.84-4.74,1.99-8.85,5.22-11.77,9.45l-.21,.3c-3.49,5.06-9.21,8.11-15.35,8.2h0c-2.88,.04-5.73-.58-8.34-1.8-2.33-1.09-4.36-2.63-6.03-4.49,1.17,5.91,5.07,10.92,10.53,13.49,2.61,1.23,5.46,1.84,8.34,1.8h0c6.14-.09,11.86-3.14,15.35-8.2l.21-.3c2.92-4.23,7.03-7.47,11.77-9.45,13.85-5.8,24.74-18.05,28.15-33.84,2.73-12.62,0-25.28-6.51-35.5Z" />
              </g>
              <path class="cls-red-1-1" d="M88.09,33.56s-5.69-13.91-11.84-15.6c-6.15-1.69-5.76,6.54-2.43,11.25,3.33,4.7,7,11.2,7.52,17.15,.52,5.96,3.95,6.88,6.35,4.14s2.99-9.92,.4-16.94Z" />
              <path class="cls-red-1-1" d="M16.09,75.91s-4.9-4.68-7.38-9.44c-2.47-4.76-2.95-10.92,.45-9.92,3.18,.93,4.49,5.38,9.07,9.44,8.82,7.82,2.64,15.34-2.14,9.92Z" />
              <g class="face face-6">
                <path class="cls-red-1-5" d="M40.36,67.07h0c-8.87-1.94-14.48-10.7-12.54-19.57l.54-2.47c.37-1.71,2.06-2.79,3.77-2.42l25.92,5.68c1.71,.37,2.79,2.06,2.42,3.77l-.54,2.47c-1.94,8.87-10.7,14.48-19.57,12.54Z" />
                <path class="cls-red-1-3" d="M57.68,48.2l-25.17-5.51c-1.92-.42-3.81,.79-4.23,2.71l-.38,1.74h0c-.3,1.36,.56,2.7,1.92,3l27.19,5.95c1.36,.3,2.7-.56,3-1.92h0l.38-1.74c.42-1.92-.79-3.81-2.71-4.23Z" />
                <polyline class="cls-red-1-8" points="30.8 28.48 37.39 34.07 30.07 36.34" />
                <polyline class="cls-red-1-8" points="60.22 35.14 51.86 37.35 57.49 42.55" />
              </g>
            </g>
          </g>
        </svg>
        <div class="balloon-text" id="text-6">Play ball together</div>
      </div>
      <div class="balloon-container" @click="revealBalloon(3)" id="balloon-3">
        <svg class="balloon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.13 228.49">
          <g id="Background_2">
            <g>
              <path class="cls-green-2-5" d="M41.07,113.62s3.68,12.33-7.62,23.57c-11.3,11.24-23.45,28.86-10.62,51.05,12.82,22.19-5.5,39.25-5.5,39.25" />
              <path class="cls-green-2-3" d="M46.34,119.15l-7.95-.58c-2.39-.17-4.18-2.25-4.01-4.64h0c.17-2.39,2.25-4.18,4.64-4.01l7.95,.58c2.39,.17,4.18,2.25,4.01,4.64h0c-.17,2.39-2.25,4.18-4.64,4.01Z" />
              <path class="cls-green-2-3" d="M95,51.01C96.89,25.01,77.51,2.37,51.61,.17,25.49-2.05,2.03,17.96,.13,44.1c-1.17,16.11,5.83,30.93,17.48,40.39,3.99,3.24,7.03,7.5,8.64,12.39l.11,.34c1.92,5.83,6.55,10.38,12.42,12.19h0c2.75,.85,5.66,1.06,8.51,.62h0c6.07-.94,11.31-4.77,14.06-10.26l.16-.32c2.31-4.62,5.98-8.4,10.41-11.05,12.86-7.69,21.9-21.31,23.08-37.39Z" />
              <g class="cls-green-2-2">
                <path class="cls-green-2-4" d="M54.95,102.04h0c-2.85,.44-5.76,.23-8.51-.62h0c-5.87-1.81-10.5-6.35-12.42-12.19l-.11-.34c-1.61-4.88-4.64-9.15-8.64-12.39C13.61,67.03,6.61,52.22,7.78,36.1c.68-9.38,4.15-17.95,9.51-25.01C7.65,19.1,1.1,30.81,.13,44.1c-1.17,16.11,5.83,30.93,17.48,40.39,3.99,3.24,7.03,7.5,8.64,12.39l.11,.34c1.92,5.83,6.55,10.38,12.42,12.19h0c2.75,.85,5.66,1.06,8.51,.62,6.05-.94,11.27-4.74,14.03-10.2-1.95,1.09-4.1,1.85-6.37,2.2Z" />
              </g>
              <path class="cls-green-2-1" d="M15.88,17.35S25.26,5.61,31.64,5.72s3.68,7.9-.84,11.48c-4.52,3.58-9.87,8.77-12.05,14.34-2.18,5.57-5.72,5.49-7.26,2.18-1.53-3.31-.07-10.36,4.39-16.37Z" />
              <path class="cls-green-2-1" d="M69.79,83.61s6.02-3.11,9.74-6.98c3.71-3.87,5.91-9.64,2.36-9.65-3.31,0-5.82,3.9-11.36,6.51-10.66,5.02-6.85,13.98-.74,10.12Z" />
              <g class="face face-3">
                <path class="cls-green-2-6" d="M31.81,38.08c.21-2.93,2.76-5.12,5.68-4.91,2.93,.21,5.12,2.76,4.91,5.68" />
              </g>
              <g class="face face-3">
                <path class="cls-green-2-6" d="M64.82,40.49c.21-2.93,2.76-5.12,5.68-4.91,2.93,.21,5.12,2.76,4.91,5.68" />
              </g>
              <path class="face face-3 cls-green-2-6" d="M64.97,53.4c-2.39,4.55-7.3,7.49-12.75,7.09h0c-4.85-.35-8.88-3.27-10.92-7.31" />
            </g>
          </g>
        </svg>
        <div class="balloon-text" id="text-3">Play in <br>the park <br>together</div>
      </div>
      <div class="balloon-container" @click="revealBalloon(8)" id="balloon-8">
        <svg class="balloon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.11 230.53">
          <g id="Background_2">
            <g>
              <path class="cls-purple-1-7" d="M34.61,113.21s-6.16,11.29,2.55,24.64c8.71,13.34,16.93,33.11-.23,52.14-17.16,19.04-2.78,39.54-2.78,39.54" />
              <path class="cls-purple-1-6" d="M28.58,116.61l7.79,1.68c2.34,.51,4.65-.98,5.16-3.32h0c.51-2.34-.98-4.65-3.32-5.16l-7.79-1.68c-2.34-.51-4.65,.98-5.16,3.32h0c-.51,2.34,.98,4.65,3.32,5.16Z" />
              <path class="cls-purple-1-6" d="M1.08,37.53C6.59,12.05,31.56-4.22,57.04,.96c25.68,5.22,42.56,31.04,37.03,56.65-3.41,15.79-14.3,28.03-28.15,33.84-4.74,1.99-8.85,5.22-11.77,9.45l-.21,.3c-3.49,5.06-9.21,8.11-15.35,8.2h0c-2.88,.04-5.73-.58-8.34-1.8h0c-5.56-2.61-9.51-7.76-10.6-13.8l-.06-.35c-.92-5.09-3.37-9.74-6.88-13.54C2.51,68.91-2.32,53.29,1.08,37.53Z" />
              <g class="cls-purple-1-2">
                <path class="cls-purple-1-5" d="M86.22,20.14c4.35,9.15,5.86,19.7,3.59,30.23-3.41,15.79-14.3,28.03-28.15,33.84-4.74,1.99-8.85,5.22-11.77,9.45l-.21,.3c-3.49,5.06-9.21,8.11-15.35,8.2h0c-2.88,.04-5.73-.58-8.34-1.8-2.2-1.04-4.15-2.47-5.76-4.2,1.58,5.01,5.19,9.18,10.01,11.45,2.61,1.23,5.46,1.84,8.34,1.8h0c6.14-.09,11.86-3.14,15.35-8.2l.21-.3c2.92-4.23,7.03-7.47,11.77-9.45,13.85-5.8,24.74-18.05,28.15-33.84,2.9-13.44-.37-26.93-7.84-37.48Z" />
              </g>
              <path class="cls-purple-1-1" d="M88.09,33.56s-5.69-13.91-11.84-15.6c-6.15-1.69-5.76,6.54-2.43,11.25,3.33,4.7,7,11.2,7.52,17.15s3.95,6.88,6.35,4.14c2.4-2.74,2.99-9.92,.4-16.94Z" />
              <path class="cls-purple-1-1" d="M16.09,75.91s-4.9-4.68-7.38-9.44c-2.47-4.76-2.95-10.92,.45-9.92,3.18,.93,4.49,5.38,9.07,9.44,8.82,7.82,2.64,15.34-2.14,9.92Z" />
              <g class="face face-8">
                <g>
                  <path class="cls-purple-1-8" d="M23.32,33.66c.73-3.32,4-5.42,7.32-4.69,3.32,.73,5.42,4,4.69,7.32" />
                  <path class="cls-purple-1-8" d="M54.44,41.12c.73-3.32,4-5.42,7.32-4.69,3.32,.73,5.42,4,4.69,7.32" />
                </g>
                <path class="cls-purple-1-4" d="M39.1,72.82h0c-8.87-1.94-14.48-10.7-12.54-19.57l1.72-7.85c.42-1.92,2.31-3.13,4.23-2.71l25.17,5.51c1.92,.42,3.13,2.31,2.71,4.23l-1.72,7.85c-1.94,8.87-10.7,14.48-19.57,12.54Z" />
                <path class="cls-purple-1-3" d="M57.68,48.2l-25.17-5.51c-1.92-.42-3.81,.79-4.23,2.71l-.38,1.74s0,.02,0,.03c-.29,1.36,.61,2.68,1.96,2.98l27.11,5.94c1.35,.3,2.73-.53,3.03-1.89,0,0,0-.02,0-.03l.38-1.74c.42-1.92-.79-3.81-2.71-4.23Z" />
              </g>
            </g>
          </g>
        </svg>
        <div class="balloon-text" id="text-8">Ride <br>scooters together</div>
      </div>
      <div class="balloon-container" @click="revealBalloon(9)" id="balloon-9">
        <svg class="balloon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.11 230.53">
          <g id="Background_2">
            <g>
              <path class="cls-orange-1-7" d="M34.61,113.21s-6.16,11.29,2.55,24.64c8.71,13.34,16.93,33.11-.23,52.14-17.16,19.04-2.78,39.54-2.78,39.54" />
              <path class="cls-orange-1-4" d="M28.58,116.61l7.79,1.68c2.34,.51,4.65-.98,5.16-3.32h0c.51-2.34-.98-4.65-3.32-5.16l-7.79-1.68c-2.34-.51-4.65,.98-5.16,3.32h0c-.51,2.34,.98,4.65,3.32,5.16Z" />
              <path class="cls-orange-1-4" d="M1.08,37.53C6.59,12.05,31.56-4.22,57.04,.96c25.68,5.22,42.56,31.04,37.03,56.65-3.41,15.79-14.3,28.03-28.15,33.84-4.74,1.99-8.85,5.22-11.77,9.45l-.21,.3c-3.49,5.06-9.21,8.11-15.35,8.2h0c-2.88,.04-5.73-.58-8.34-1.8h0c-5.56-2.61-9.51-7.76-10.6-13.8l-.06-.35c-.92-5.09-3.37-9.74-6.88-13.54C2.51,68.91-2.32,53.29,1.08,37.53Z" />
              <g class="cls-orange-1-2">
                <path class="cls-orange-1-6" d="M86.22,20.14c4.35,9.15,5.86,19.7,3.59,30.23-3.41,15.79-14.3,28.03-28.15,33.84-4.74,1.99-8.85,5.22-11.77,9.45l-.21,.3c-3.49,5.06-9.21,8.11-15.35,8.2h0c-2.88,.04-5.73-.58-8.34-1.8-2.2-1.04-4.15-2.47-5.76-4.2,1.59,5.01,5.19,9.18,10.01,11.45,2.61,1.23,5.46,1.84,8.34,1.8h0c6.14-.09,11.86-3.14,15.35-8.2l.21-.3c2.92-4.23,7.03-7.47,11.77-9.45,13.85-5.8,24.74-18.05,28.15-33.84,2.9-13.44-.37-26.93-7.84-37.48Z" />
              </g>
              <path class="cls-orange-1-1" d="M88.09,33.56s-5.69-13.91-11.84-15.6c-6.15-1.69-5.76,6.54-2.43,11.25s7,11.2,7.52,17.15c.52,5.96,3.95,6.88,6.35,4.14,2.4-2.74,2.99-9.92,.4-16.94Z" />
              <path class="cls-orange-1-1" d="M16.09,75.91s-4.91-4.68-7.38-9.44c-2.47-4.76-2.95-10.92,.45-9.92,3.18,.93,4.49,5.38,9.07,9.44,8.82,7.82,2.64,15.34-2.14,9.92Z" />
              <g class="face face-9">
                <g>
                  <path class="cls-orange-1-8" d="M23.32,33.66c.73-3.32,4-5.42,7.32-4.69,3.32,.73,5.42,4,4.69,7.32" />
                  <path class="cls-orange-1-8" d="M54.44,41.12c.73-3.32,4-5.42,7.32-4.69,3.32,.73,5.42,4,4.69,7.32" />
                </g>
                <path class="cls-orange-1-5" d="M39.1,72.82h0c-8.87-1.94-14.48-10.7-12.54-19.57l1.72-7.85c.42-1.92,2.31-3.13,4.23-2.71l25.17,5.51c1.92,.42,3.13,2.31,2.71,4.23l-1.72,7.85c-1.94,8.87-10.7,14.48-19.57,12.54Z" />
                <path class="cls-orange-1-3" d="M57.68,48.2l-25.17-5.51c-1.92-.42-3.81,.79-4.23,2.71l-.38,1.74s0,.02,0,.03c-.29,1.35,.61,2.68,1.96,2.98l27.11,5.94c1.35,.3,2.73-.53,3.03-1.89,0,0,0-.02,0-.03l.38-1.74c.42-1.92-.79-3.81-2.71-4.23Z" />
              </g>
            </g>
          </g>
        </svg>
        <div class="balloon-text" id="text-9">Watch <br>a movie together</div>
      </div>
    </div>
    <div class="audios">
      <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/Session8_Page190.mp3" ref="voice"/>
      <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/children-s-music-no-copyright-royalty-free-happy-upbeat-kids-barroom-ballet.mp3"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/balloon_1.mp3" id="balloon-audio-5"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/balloon_2.mp3" id="balloon-audio-2"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/balloon_3.mp3" id="balloon-audio-7"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/balloon_4.mp3" id="balloon-audio-4"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/balloon_5.mp3" id="balloon-audio-1"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/balloon_6.mp3" id="balloon-audio-6"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/balloon_7.mp3" id="balloon-audio-3"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/balloon_8.mp3" id="balloon-audio-8"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/balloon_9.mp3" id="balloon-audio-9"/>
      <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound"/>
      <audio src="../../assets/sounds/all/crowd-cheer-applause-2.mp3" ref="cheer"/>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";

export default {
  name: 'Session8Page10',
  data() {
    return {
      balloonArray: [],
      currentAudio: null,
    }
  },
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box',opacity: 1}, 500)
        .add({targets: text[0],opacity: 1}, 500)
        .add({targets: text[1],opacity: 1}, 5700)
        .add({targets: '.balloons-container',opacity: 1}, 6500)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    readText(id) {
      if (this.currentAudio !== null) this.currentAudio.pause();
      this.currentAudio = document.querySelector('#balloon-audio-'+id);
      this.currentAudio.play();
    },
    revealBalloon(id) {
      if (!this.balloonArray.includes(id)) {
        this.$refs.voice.pause();
        let face = document.querySelectorAll('.face-'+id);
        let text = document.querySelector('#text-'+id);
        anime({targets: face, duration: 50, opacity: 0, easing: 'linear'});
        anime({targets: text, duration: 200, opacity: 1, easing: 'linear'});
        this.$refs.clickSound.play();
        this.readText(id);
        this.balloonArray.push(id);
        this.playRewardSound();
      }
    },
    playRewardSound() {
      if (this.balloonArray.length === 9) this.$refs.cheer.play();
    },
    init() {
      this.canvasData = this.$store.getters.getPage167Data;
    },
    updateCanvas(canvasData) {
      this.$store.commit('setPage167Data', canvasData);
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  created() {
    this.init();
  },
  mounted() {
    this.setAudioVolumeLevel(0.2);
  }
}
</script>

<style scoped>
.balloons-container {position: absolute;opacity: 0;}
.balloon-container {
  position: absolute;
  width: 28vh;
  opacity: 1;
}
.balloon-container .balloon-text {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 4vh;
  line-height: 5vh;
  font-weight: bold;
  color: #fff;
  opacity: 0;
}
#balloon-5 .balloon-text {transform: rotate(-11deg); margin-top: 12vh}
#balloon-2 .balloon-text {transform: rotate(12deg); margin-top: 9vh}
#balloon-7 .balloon-text {transform: rotate(-3deg); margin-top: 7vh}
#balloon-4 .balloon-text {transform: rotate(-11deg); margin-top: 3vh}
#balloon-1 .balloon-text {transform: rotate(7deg); margin-top: 9vh}
#balloon-6 .balloon-text {transform: rotate(13deg); margin-top: 9vh}
#balloon-3 .balloon-text {transform: rotate(3deg); margin-top: 7vh}
#balloon-8 .balloon-text {transform: rotate(13deg); margin-top: 5vh}
#balloon-9 .balloon-text {transform: rotate(13deg); margin-top: 5vh}
.balloon {
  position: absolute;
  width: 100%;
}
.face {
  opacity: 1;
}
#balloon-5 {top: 12vh; left: 2vh}
#balloon-2 {top: 12vh; left: 45vh}
#balloon-7 {top: 3vh; left: 86vh}
#balloon-4 {top: 38vh; left: 23vh}
#balloon-1 {top: 28vh; left: 70vh}
#balloon-6 {top: 28vh; left: 104vh}
#balloon-3 {top: 52vh; left: 2vh}
#balloon-8 {top: 53vh; left: 48vh}
#balloon-9 {top: 57vh; left: 86vh}
.text-box {
  position: absolute;
  padding: 1vh;
  opacity: 0;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: .5vh;
  opacity: 0;
}
.cls-purple-1-1,
.cls-purple-1-2 {
  opacity: .1;
}

.cls-purple-1-1,
.cls-purple-1-3 {
  fill: #fff;
}

.cls-purple-1-4 {
  fill: #e84c3d;
}

.cls-purple-1-5 {
  fill: #0c0002;
}

.cls-purple-1-6 {
  fill: #8a66b0;
}

.cls-purple-1-7 {
  stroke: #c2c2c2;
  stroke-width: 2px;
}

.cls-purple-1-7,
.cls-purple-1-8 {
  fill: none;
  stroke-linecap: round;
  stroke-miterlimit: 10;
}

.cls-purple-1-8 {
  stroke: #543319;
  stroke-width: 2.37px;
}
.cls-green-1-1 {
  fill: #fff;
}

.cls-green-1-1,
.cls-green-1-2 {
  opacity: .1;
}

.cls-green-1-3 {
  fill: #63cba6;
}

.cls-green-1-4 {
  fill: #0c0002;
}

.cls-green-1-5 {
  stroke: #c2c2c2;
  stroke-width: 2px;
}

.cls-green-1-5,
.cls-green-1-6 {
  fill: none;
  stroke-linecap: round;
  stroke-miterlimit: 10;
}

.cls-green-1-6 {
  stroke: #543319;
  stroke-width: 3.13px;
}
.cls-pink-2-1 {
  fill: #0c0002;
}

.cls-pink-2-1,
.cls-pink-2-2 {
  opacity: .1;
}

.cls-pink-2-2,
.cls-pink-2-3 {
  fill: #fff;
}

.cls-pink-2-4 {
  fill: #e84c3d;
}

.cls-pink-2-5 {
  fill: #fe93d5;
}

.cls-pink-2-6 {
  fill: #543319;
}

.cls-pink-2-7 {
  fill: none;
  stroke: #c2c2c2;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  stroke-width: 2px;
}
.cls-orange-2-1 {
  fill: #0c0002;
  opacity: .1;
}

.cls-orange-2-2 {
  fill: #f8af3e;
}

.cls-orange-2-3,
.cls-orange-2-4 {
  fill: #fff;
}

.cls-orange-2-5 {
  fill: #e84c3d;
}

.cls-orange-2-6 {
  fill: #543319;
}

.cls-orange-2-7 {
  fill: none;
  stroke: #c2c2c2;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  stroke-width: 2px;
}

.cls-orange-2-4 {
  opacity: .2;
}
.cls-green-2-1 {
  fill: #fff;
}

.cls-green-2-1,
.cls-green-2-2 {
  opacity: .1;
}

.cls-green-2-3 {
  fill: #63cba6;
}

.cls-green-2-4 {
  fill: #0c0002;
}

.cls-green-2-5 {
  stroke: #c2c2c2;
  stroke-width: 2px;
}

.cls-green-2-5,
.cls-green-2-6 {
  fill: none;
  stroke-linecap: round;
  stroke-miterlimit: 10;
}

.cls-green-2-6 {
  stroke: #543319;
  stroke-width: 3.13px;
}
.cls-yellow-1-1,
.cls-yellow-1-2 {
  opacity: .1;
}

.cls-yellow-1-1,
.cls-yellow-1-3 {
  fill: #fff;
}

.cls-yellow-1-4 {
  fill: #fadd43;
}

.cls-yellow-1-5 {
  fill: #0c0002;
}

.cls-yellow-1-6 {
  fill: #543319;
}

.cls-yellow-1-7 {
  stroke: #c2c2c2;
  stroke-width: 2px;
}

.cls-yellow-1-7,
.cls-yellow-1-8 {
  fill: none;
  stroke-linecap: round;
  stroke-miterlimit: 10;
}

.cls-yellow-1-8 {
  stroke: #543319;
  stroke-width: 3.13px;
}

.cls-pink-1-1 {
  fill: #0c0002;
}

.cls-pink-1-1,
.cls-pink-1-2 {
  opacity: .1;
}

.cls-pink-1-2,
.cls-pink-1-3 {
  fill: #fff;
}

.cls-pink-1-4 {
  fill: #e84c3d;
}

.cls-pink-1-5 {
  fill: #fe93d5;
}

.cls-pink-1-6 {
  fill: #543319;
}

.cls-pink-1-7 {
  fill: none;
  stroke: #c2c2c2;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  stroke-width: 2px;
}
.cls-red-1-1,
.cls-red-1-2 {
  opacity: .1;
}

.cls-red-1-1,
.cls-red-1-3 {
  fill: #fff;
}

.cls-red-1-4 {
  fill: #e84266;
}

.cls-red-1-5 {
  fill: #ae324d;
}

.cls-red-1-6 {
  fill: #0c0002;
}

.cls-red-1-7 {
  stroke: #c2c2c2;
  stroke-miterlimit: 10;
  stroke-width: 2px;
}

.cls-red-1-7,
.cls-red-1-8 {
  fill: none;
  stroke-linecap: round;
}

.cls-red-1-8 {
  stroke: #543319;
  stroke-linejoin: round;
  stroke-width: 2.37px;
}
.cls-orange-1-1,
.cls-orange-1-2 {
  opacity: .1;
}

.cls-orange-1-1,
.cls-orange-1-3 {
  fill: #fff;
}

.cls-orange-1-4 {
  fill: #f8af3e;
}

.cls-orange-1-5 {
  fill: #e84c3d;
}

.cls-orange-1-6 {
  fill: #0c0002;
}

.cls-orange-1-7 {
  stroke: #c2c2c2;
  stroke-width: 2px;
}

.cls-orange-1-7,
.cls-orange-1-8 {
  fill: none;
  stroke-linecap: round;
  stroke-miterlimit: 10;
}

.cls-orange-1-8 {
  stroke: #543319;
  stroke-width: 2.37px;
}
</style>