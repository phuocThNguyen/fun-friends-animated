<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/22061-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/22061-resized.jpg"
      class="session-background"
    />
    <div class="text-box">
      <p>Zoe is playing on the new playground,
       she is feeling excited but also scared.</p>
      <p>What might be her body clues? Drag the
       clues to her body.</p>
    </div>
    <div class="clues-sources">
      <draggable class="clues" v-model="dizzy" group="dizzy">
        <div class="clue" v-for="(clue, index) in dizzy" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="stomach" group="stomach">
        <div class="clue" v-for="(clue, index) in stomach" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="skin" group="skin">
        <div class="clue" v-for="(clue, index) in skin" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="heart" group="heart">
        <div class="clue" v-for="(clue, index) in heart" :key="index">{{clue}}</div>
      </draggable>
      <draggable class="clues" v-model="knees" group="knees">
        <div class="clue" v-for="(clue, index) in knees" :key="index">{{clue}}</div>
      </draggable>
    </div>

    <draggable class="answers" @change="handleChange('dizzy')" id="dizzy" v-model="dizzyAns" group="dizzy">
      <div class="clue" v-for="(clue, index) in dizzyAns" v-bind:id="clue" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('stomach')" id="stomach" v-model="stomachAns" group="stomach">
      <div class="clue" v-for="(clue, index) in stomachAns" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('skin')" id="skin" v-model="skinAns" group="skin">
      <div class="clue" v-for="(clue, index) in skinAns" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('heart')" id="heart" v-model="heartAns" group="heart">
      <div class="clue" v-for="(clue, index) in heartAns" :key="index">{{clue}}</div>
    </draggable>
    <draggable class="answers" @change="handleChange('knees')" id="knees" v-model="kneesAns" group="knees">
      <div class="clue" v-for="(clue, index) in kneesAns" :key="index">{{clue}}</div>
    </draggable>

    <green-tick class="small-tick" id="green-tick-1"/>
    <green-tick class="small-tick" id="green-tick-2"/>
    <green-tick class="small-tick" id="green-tick-3"/>
    <green-tick class="small-tick" id="green-tick-4"/>
    <green-tick class="small-tick" id="green-tick-5"/>

    <!--  Very Good  -->
    <svg class="reward" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 178.71 248.07">
      <defs>
        <clipPath id="clip-path">
          <path class="cls-1" d="M128.28,102.54c-.34,8,4.14,17.86,10.28,20.82,6.4,3.08,10.57-3.13,9.27-12.46-1.1-8-5.9-15.19-10.71-17C132.46,92.06,128.57,95.6,128.28,102.54Z" />
        </clipPath>
        <clipPath id="clip-path-2">
          <path class="cls-1" d="M109.24,101.58c2.49,8.22-1.61,17.7-9.87,20-8.69,2.45-16.46-4.41-16.88-13.87-.36-8.09,5-14.9,11.63-16.17C100.53,90.35,107.1,94.48,109.24,101.58Z" />
        </clipPath>
      </defs>
      <g class="cls-2">
        <g id="Layer_2" data-name="Layer 2">
          <g id="OBJECTS">
            <path class="cls-3" d="M160.57,134.72q0-.63,0-1.23v-.1q0-.25,0-.48v0q0-.94-.12-2.07v-.15c-.07-.89-.15-1.72-.23-2.42l0-.21-.06-.54c0-.15,0-.28,0-.41l0-.15c0-.13,0-.27,0-.4l0-.25-.62-4.87-.25,0a68.15,68.15,0,0,0-11.47-25.77,8.16,8.16,0,0,0,.82-7.56l-.61-1.61c-1.46-3.94-3.46-9.33-8.5-12.74A15.59,15.59,0,0,0,130.56,71a14.91,14.91,0,0,0-9,3c-1.57-.75-3.18-1.41-4.8-2a9.49,9.49,0,0,0,4-4.21l2.48-5.13,5.63-.85a9.51,9.51,0,0,0,5.16-16.26l-4.1-4,.92-5.62a9.5,9.5,0,0,0-9.38-11h0A9.51,9.51,0,0,0,117.08,26l-5,2.69L107,26a9.49,9.49,0,0,0-11.67,2.35,9.06,9.06,0,0,0-1.13,1.69,16.64,16.64,0,0,0-.76-1.76,16,16,0,0,0,.71-4.86c0-8.81-11.61-19.64-21.06-19.64a12.94,12.94,0,0,0-1.77.12,10.75,10.75,0,0,0-1.87.41,14,14,0,0,0-3.57-.48,12,12,0,0,0-3.23.44,13.94,13.94,0,0,0-5.42,2.9A16.15,16.15,0,0,0,48.78,13a14,14,0,0,0-3.55,3.69c-3.64,5.47-3.72,13.18-3,21.2a8,8,0,0,0-.45-.68l-1-1.39.55-1.64A8.74,8.74,0,0,0,33,22.65a8.6,8.6,0,0,0-2.84.48l-1.64.56-1.39-1a8.65,8.65,0,0,0-5.2-1.72,8.79,8.79,0,0,0-6.24,2.62,8.66,8.66,0,0,0-2.5,6.27l0,1.73-1.41,1A8.74,8.74,0,0,0,14.29,48l1.65.5.29.9A9.4,9.4,0,0,0,10.3,52.2a9.23,9.23,0,0,0-2.66,6.67l.07,4.68-3.8,2.71A9.31,9.31,0,0,0,6.58,82.74l4.47,1.37,1.41,4.46A9.3,9.3,0,0,0,29,91.12l2.68-3.82,3.28,0c-.82,4.72-1.66,9.78-2.54,15.21a68.44,68.44,0,0,0-7.94,23.87h0v.18l0,.13h0c-.17,1.3-.31,2.64-.41,4v.1l0,.28c0,.67-.08,1.34-.1,2,0,.11,0,.22,0,.32v.1c0,1.15-.05,2.33,0,3.5v.19c0,.23,0,.46,0,.7,0,.57.05,1.14.08,1.71l0,.42a9,9,0,0,0-2.7,1.61L7.83,153.13a9.06,9.06,0,0,0-2.95,9.2l0,.21.07.21,0,.1,0,.09,0,.08A9.15,9.15,0,0,0,11.55,169a9.07,9.07,0,0,0-.46,8.8l.12.26.15.25,4.07,7h0l0,0,0,.05a9,9,0,0,0,3.81,3.54,9,9,0,0,0,2.1,4.42,9.11,9.11,0,0,0,4,2.67,9.1,9.1,0,0,0,9,7.46,8.62,8.62,0,0,0,1.14-.08A9.12,9.12,0,0,0,52.07,208l2.45-3.46,1.59-.6a17.42,17.42,0,0,0,12.54,20.13,17.74,17.74,0,0,0,4.51.6A16.44,16.44,0,0,0,82,222.12a17.31,17.31,0,0,0,12.22,5h.48a17.43,17.43,0,0,0,12.58-5.89,17.3,17.3,0,0,0,13.86,1.25,17.41,17.41,0,0,0,9.21-7.2,9.11,9.11,0,0,0,8.49-.92l2.75-1.85a17.51,17.51,0,0,0,7.41-11,17.23,17.23,0,0,0-7.81-18.13l.38-.39c.41-.43.81-.86,1.21-1.3l.18-.2c.23-.26.47-.52.7-.79.43-.48.84-1,1.25-1.47l.2-.24.63-.77c.56-.71,1.11-1.43,1.64-2.15l.66-.93.18-.27.05-.07.83-1.2.86-1.33c.25-.4.5-.8.74-1.21s.57-.94.84-1.41l.64-1.16,0-.07c.26-.48.52-1,.77-1.44.13-.26.26-.51.38-.77l.13-.26c1-2,1.86-4,2.63-6l.09-.22c.07-.21.15-.41.23-.62.23-.62.44-1.25.65-1.88l.3-.91c.2-.64.39-1.28.58-1.92.07-.25.13-.5.2-.75l0-.1c.16-.59.35-1.3.53-2.05l.09-.39,0-.12c.42-1.8.76-3.63,1-5.45l.26-.06.35-5.77,0-.73v-.42a5.49,5.49,0,0,0,0-.58c0-.17,0-.34,0-.51v-.28c0-.15,0-.3,0-.45v-.2c0-.52,0-1,0-1.54Z" />
            <path class="cls-4" d="M163.43,130.91c0-.43,0-.83,0-1.23v-.11l0-.47v0c0-.64-.07-1.32-.12-2.07v-.15c-.07-.9-.15-1.72-.23-2.42l0-.22-.06-.53c0-.15,0-.28,0-.41l0-.16c0-.13,0-.26-.05-.39l0-.25-.62-4.87-.25,0a68.15,68.15,0,0,0-11.47-25.77,8.16,8.16,0,0,0,.82-7.56l-.61-1.62c-1.46-3.93-3.46-9.32-8.5-12.73a15.51,15.51,0,0,0-8.74-2.73,14.91,14.91,0,0,0-9,3c-1.57-.75-3.18-1.42-4.8-2a9.44,9.44,0,0,0,4-4.21l2.48-5.12,5.63-.86A9.5,9.5,0,0,0,137,41.65l-4.1-3.95.92-5.62A9.51,9.51,0,0,0,124.42,21h0a9.52,9.52,0,0,0-4.48,1.13l-5,2.68-5.06-2.61a9.48,9.48,0,0,0-12.8,4,16.64,16.64,0,0,0-.76-1.76A16,16,0,0,0,97,19.64C97,10.83,85.39,0,76,0a12.94,12.94,0,0,0-1.77.12,11.73,11.73,0,0,0-1.87.4A14.42,14.42,0,0,0,68.74.05a11.94,11.94,0,0,0-3.23.44,13.94,13.94,0,0,0-5.42,2.9,16.09,16.09,0,0,0-8.45,5.79,13.88,13.88,0,0,0-3.55,3.69c-3.64,5.47-3.72,13.17-3,21.2-.15-.23-.28-.47-.45-.69l-1-1.38.55-1.64a8.74,8.74,0,0,0-8.28-11.52,8.86,8.86,0,0,0-2.84.47l-1.64.57-1.39-1a8.65,8.65,0,0,0-5.2-1.72,8.82,8.82,0,0,0-6.24,2.61A8.7,8.7,0,0,0,16,26l0,1.74-1.41,1a8.73,8.73,0,0,0,2.51,15.47l1.65.51.28.9a9.39,9.39,0,0,0-5.92,2.75,9.24,9.24,0,0,0-2.66,6.68l.07,4.67-3.8,2.72A9.31,9.31,0,0,0,9.44,78.93l4.47,1.37,1.41,4.46a9.31,9.31,0,0,0,16.5,2.55l2.68-3.83,3.28,0q-1.23,7.08-2.54,15.22A68.37,68.37,0,0,0,27.3,122.6h0v.17l0,.13h0c-.17,1.3-.31,2.64-.41,4V127l0,.29c0,.67-.08,1.34-.1,2,0,.11,0,.22,0,.33v.1c0,1.15,0,2.33,0,3.5v.19c0,.23,0,.46,0,.69,0,.57.05,1.14.08,1.72l0,.42a8.8,8.8,0,0,0-2.7,1.61L10.69,149.32a9,9,0,0,0-2.95,9.19l0,.22.07.21,0,.1,0,.08,0,.09a9.16,9.16,0,0,0,6.46,5.93A9.06,9.06,0,0,0,14,174l.12.25.15.25,4.06,7h0l0,0,0,0a9,9,0,0,0,3.8,3.54,9.1,9.1,0,0,0,6.15,7.1,9.12,9.12,0,0,0,9,7.46,10.92,10.92,0,0,0,1.14-.08,9.12,9.12,0,0,0,16.52,4.59l2.45-3.46,1.59-.61a17.39,17.39,0,0,0,17,20.73,16.43,16.43,0,0,0,8.81-2.54,17.31,17.31,0,0,0,12.22,5h.48a17.39,17.39,0,0,0,12.57-5.89,17.41,17.41,0,0,0,23.08-6,9,9,0,0,0,3.38.66,9.08,9.08,0,0,0,5.11-1.57l2.75-1.85a17.46,17.46,0,0,0,7.4-11,17,17,0,0,0-2.58-13.12,17.45,17.45,0,0,0-5.22-5c.12-.13.25-.25.38-.38.41-.43.81-.87,1.2-1.3l.19-.2c.23-.26.47-.52.7-.79.43-.48.84-1,1.25-1.47l.2-.25.63-.77c.56-.7,1.11-1.43,1.64-2.14l.65-.93.19-.27,0-.08c.28-.4.56-.79.83-1.2l.86-1.33c.25-.39.5-.8.74-1.2s.57-.94.84-1.42.43-.77.64-1.15l0-.07c.26-.48.52-1,.77-1.44l.38-.77.13-.26c1-2,1.86-4,2.63-6l.09-.22c.07-.2.15-.41.23-.61.23-.63.44-1.25.65-1.88l.3-.91q.3-1,.57-1.92l.21-.75,0-.1c.16-.59.35-1.3.53-2.05l.09-.39,0-.12c.42-1.8.76-3.63,1-5.46l.26-.05.35-5.77,0-.73v-.42c0-.19,0-.39,0-.58s0-.34,0-.51v-.29c0-.15,0-.29,0-.44v-.21q0-.76,0-1.53Z" />
            <circle class="cls-5" cx="95.05" cy="131.86" r="60.76" transform="translate(-65.4 105.83) rotate(-45)" />
            <circle class="cls-5" cx="95.05" cy="131.86" r="60.76" transform="translate(-65.4 105.83) rotate(-45)" />
            <path class="cls-6" d="M143.58,129.87c0,3.25,4.11,5.89,9.19,5.89a13.77,13.77,0,0,0,2.93-.32,59.45,59.45,0,0,0-.38-11.22,14,14,0,0,0-2.55-.24C147.69,124,143.58,126.62,143.58,129.87Z" />
            <path class="cls-7" d="M118.56,171.69a60.76,60.76,0,0,1-83.72-47.9,60.75,60.75,0,1,0,120.42-.05A60.68,60.68,0,0,1,118.56,171.69Z" />
            <path class="cls-8" d="M82.36,107.78a13.88,13.88,0,0,1,1.86-11.13,15.36,15.36,0,0,1,4.12-4.28,15.05,15.05,0,0,1,5.52-2.31,13.23,13.23,0,0,1,10.59,2.55,14.26,14.26,0,0,1,3.39,3.94,13.06,13.06,0,0,1,1.51,5l-.21,0a14.88,14.88,0,0,0-5.69-7.9,12.3,12.3,0,0,0-9.3-2,13.73,13.73,0,0,0-8.46,5.57,16.89,16.89,0,0,0-3.08,10.4Z" />
            <g class="cls-9">
              <path class="cls-4" d="M128.28,102.54c-.34,8,4.14,17.86,10.28,20.82,6.4,3.08,10.57-3.13,9.27-12.46-1.1-8-5.9-15.19-10.71-17C132.46,92.06,128.57,95.6,128.28,102.54Z" />
              <ellipse class="cls-10" cx="135.12" cy="110.86" rx="8.25" ry="11.78" transform="translate(-3.74 4.72) rotate(-1.98)" />
              <path class="cls-11" d="M142.18,113.26c.15-.87-1.55-2.37-2-1.24s-4,10.4-8.26,4.53-.41-9.36-.93-10.29-2.24-2.42-2.41-1.5-2.5,10.47,2.22,14.66S140.83,120.8,142.18,113.26Z" />
              <path class="cls-12" d="M131.52,107.64c-1.19,2.79-.55,6.5,1.43,8.27s4.57,1,5.77-1.83.55-6.49-1.43-8.27S132.72,104.85,131.52,107.64Z" />
              <path class="cls-13" d="M143.47,104.45c2.09,1.68,2.25,2.7,1.66,3.4s-5.83,1.61-5.9.07S141.54,102.89,143.47,104.45Z" />
            </g>
            <path class="cls-8" d="M147.93,110.94a22.27,22.27,0,0,0-3.14-11.17,21.38,21.38,0,0,0-3.54-4.61,13.37,13.37,0,0,0-4.2-2.79c-2.84-1.08-5.47-.35-6.94,1.6a9.59,9.59,0,0,0-1.71,3.64,15.45,15.45,0,0,0-.2,4.89l.16.07c.15-3.15,1.06-5.81,2.63-7.41A5.42,5.42,0,0,1,137.13,94c2.42.91,4.93,3.33,6.76,6.28a27.64,27.64,0,0,1,3.85,10.56Z" />
            <g class="cls-14">
              <path class="cls-4" d="M109.24,101.58c2.49,8.22-1.61,17.7-9.87,20-8.69,2.45-16.46-4.41-16.88-13.87-.36-8.09,5-14.9,11.63-16.17C100.53,90.35,107.1,94.48,109.24,101.58Z" />
              <path class="cls-10" d="M86,101.19c-3.21,5.37-2.09,12.71,2.51,16.38s10.93,2.31,14.15-3,2.1-12.7-2.5-16.38S89.2,95.83,86,101.19Z" />
              <path class="cls-11" d="M102.86,110.59c.24-.87-1.77-2.44-2.37-1.33s-5.57,10.19-10.43,4.12.06-9.37-.54-10.31-2.6-2.53-2.88-1.63S83,111.79,88.52,116.2,100.76,118.05,102.86,110.59Z" />
              <path class="cls-12" d="M90.08,104.47a6.58,6.58,0,0,0,1.27,8.33c2.34,1.87,5.56,1.17,7.2-1.56a6.6,6.6,0,0,0-1.28-8.33A4.75,4.75,0,0,0,90.08,104.47Z" />
              <path class="cls-13" d="M105,101.85c2.46,1.78,2.6,2.81,1.84,3.47s-7.27,1.33-7.27-.21S102.68,100.2,105,101.85Z" />
            </g>
            <path class="cls-6" d="M116.8,151.27c-8.83-.79-14.45-3.64-17.8-7.15,11.1-.32,21.36,1.73,29.28,5.66A26.4,26.4,0,0,1,116.8,151.27Z" />
            <path class="cls-15" d="M97,128c3.65-3.45,15.91,8.67,24.19,9.62s17.59-6.6,20.15-2.65c1.9,2.92-3.49,11.29-13,14.79-7.92-3.93-18.18-6-29.28-5.66C93.13,138,94.63,130.24,97,128Z" />
            <path class="cls-16" d="M118.91,141.52c-13.79-1.7-19.49-8.13-21-14,4.49-1.29,15.6,9.23,23.3,10.11,7.42.86,15.46-4.95,19-3.6A24.67,24.67,0,0,1,118.91,141.52Z" />
            <path class="cls-17" d="M82,79.92a33.39,33.39,0,0,1,11-7.74c4-1.8,9.15-3.07,12.74.25a1.26,1.26,0,0,0,2-1.52C104.9,65.16,97.52,66.9,93,69A32.13,32.13,0,0,0,81,79.16c-.43.58.52,1.28,1,.76Z" />
            <path class="cls-5" d="M56.07,41.33c-6,3.5-18.43,92.56-18.43,92.56l14.93-2c1.91-28,22.88-84.81,22.56-86.71S62.11,37.84,56.07,41.33Z" />
            <g class="cls-18">
              <path class="cls-19" d="M64,80a326.22,326.22,0,0,0-12.12,50,.6.6,0,0,0,1.19.2,323.71,323.71,0,0,1,12-49.68c.24-.73-.86-1.24-1.1-.5Z" />
            </g>
            <g class="cls-18">
              <path class="cls-19" d="M42.39,101.42Q39.84,112.67,38,124.06a.54.54,0,0,0,1.06.18q1.69-11.4,4.15-22.67c.12-.55-.74-.69-.86-.15Z" />
            </g>
            <path class="cls-5" d="M87.14,24.73s2.24-.92,2.24-5.09S81,6.9,75.19,7.67a4.81,4.81,0,0,0-2.44,1.16c-1.87-.94-3.68-1.42-5.18-1A6.17,6.17,0,0,0,64,10.32a10.47,10.47,0,0,0-1.46.29,8.38,8.38,0,0,0-5.5,4.19,6.3,6.3,0,0,0-2.64,2.29c-4.47,6.72-.36,23.78-.36,32.58H72.8s9.49-5.48,13.09-7.15,4.54-6.9,4.54-10.84S87.14,24.73,87.14,24.73Z" />
            <g class="cls-18">
              <path class="cls-19" d="M58.15,24.69a7.06,7.06,0,0,0,3.78,4c.45.2.78-.52.32-.71a6.36,6.36,0,0,1-3.59-3.48.27.27,0,0,0-.51.18Z" />
            </g>
            <path class="cls-7" d="M87.38,23.65a9.14,9.14,0,0,1-5.55-.21c.08-.15.16-.3.23-.45,2.14-4.59-1-8-3.9-11.43-.52-.6-1.54.12-1,.7,1.72,1.9,4.08,4.16,4.65,6.73a7.16,7.16,0,0,1-1.61,5.56,24.32,24.32,0,0,0-4.07,1.28c-.08,0-.16-.08-.24-.12a7.86,7.86,0,0,0,.63-2.62c.3-4.86-4-7.58-7-10.58-.39-.38-.93.27-.54.65,2,1.95,4.44,3.63,5.73,6.13a6.88,6.88,0,0,1-.77,7.6,11.19,11.19,0,0,0-2.93,2,6.44,6.44,0,0,1-1.11.28c1.25-4.33-2.62-9.44-6.16-11.87-.53-.36-1.18.4-.65.77,3,2.08,5.94,5,5.86,8.93A6.32,6.32,0,0,1,66.58,32a5.22,5.22,0,0,1-2.69,1c-1.74.08-7.45-2.05-3.62-5.53a.5.5,0,1,0-.67-.74c-4.73,4.52,3.75,9.2,7.86,5.92a7.15,7.15,0,0,0,1.9-2.21c.23,0,.46,0,.68-.06a3.29,3.29,0,0,0-.23,1c-.34,5.07,6.44,4.91,9.45,3.21.48-.28.16-1-.36-1a25.29,25.29,0,0,1-4.24.58,3.71,3.71,0,0,1-3-1.37,2.19,2.19,0,0,1,.39-3,7.51,7.51,0,0,0,2.54-1.89,18.6,18.6,0,0,1,2-1.05A5.27,5.27,0,0,0,80,25.56c.86-.23,1.73-.42,2.6-.57a8.08,8.08,0,0,0,5.14.09C88.45,24.8,88.22,23.48,87.38,23.65Z" />
            <ellipse class="cls-6" cx="75.14" cy="128" rx="9.19" ry="5.89" />
            <path class="cls-20" d="M99.5,50.57l8.63,1.2a1.88,1.88,0,0,1,1.43,1l3.91,7.79a1.88,1.88,0,0,0,3.37,0l3.81-7.84a1.87,1.87,0,0,1,1.41-1l8.62-1.31a1.89,1.89,0,0,0,1-3.23l-6.28-6a1.88,1.88,0,0,1-.56-1.66l1.42-8.6a1.89,1.89,0,0,0-2.75-2L115.85,33a1.89,1.89,0,0,1-1.76,0l-7.74-4a1.88,1.88,0,0,0-2.72,2l1.53,8.58a1.85,1.85,0,0,1-.53,1.67l-6.19,6.13A1.87,1.87,0,0,0,99.5,50.57Z" />
            <path class="cls-6" d="M25.58,82.93l4.47-6.38a1.69,1.69,0,0,1,1.4-.72l7.8.07a1.69,1.69,0,0,0,1.36-2.7L35.92,67a1.68,1.68,0,0,1-.25-1.55L38.15,58A1.69,1.69,0,0,0,36,55.9l-7.37,2.53a1.68,1.68,0,0,1-1.55-.24l-6.27-4.64a1.69,1.69,0,0,0-2.69,1.39l.13,7.79a1.66,1.66,0,0,1-.71,1.4L11.2,68.66a1.68,1.68,0,0,0,.48,3l7.45,2.29A1.69,1.69,0,0,1,20.25,75l2.34,7.44A1.69,1.69,0,0,0,25.58,82.93Z" />
            <path class="cls-21" d="M28.57,44.4l3-4.22a1.13,1.13,0,0,1,.92-.48l5.16,0a1.11,1.11,0,0,0,.9-1.78l-3.1-4.12a1.15,1.15,0,0,1-.17-1l1.64-4.89a1.11,1.11,0,0,0-1.42-1.4L30.59,28.2a1.12,1.12,0,0,1-1-.16L25.42,25a1.12,1.12,0,0,0-1.78.92L23.73,31a1.13,1.13,0,0,1-.47.93l-4.2,3a1.11,1.11,0,0,0,.32,2l4.93,1.52a1.1,1.1,0,0,1,.74.73l1.55,4.91A1.11,1.11,0,0,0,28.57,44.4Z" />
            <text class="cls-22" transform="matrix(0.29, 0.96, -0.96, 0.29, 12.51, 148.23)">V</text>
            <text class="cls-22" transform="translate(18.69 167) rotate(60.15)">E</text>
            <text class="cls-22" transform="translate(27.63 182.28) rotate(46.99)">R</text>
            <text class="cls-22" transform="translate(40.57 195.93) rotate(34.83)">Y</text>
            <text class="cls-22" transform="translate(55.98 205.96) rotate(25.56)"> </text>
            <text class="cls-22" transform="translate(63.78 210.11) rotate(15.06)">G</text>
            <text class="cls-22" transform="translate(86.31 215.71) rotate(-1.14)">O</text>
            <text class="cls-22" transform="translate(110.92 214.66) rotate(-17.93)">O</text>
            <text class="cls-22" transform="translate(134.11 206.51) rotate(-34.57)">D</text>
            <path class="cls-17" d="M144.17,87c-1.37-3.52-2.53-7.78-5.57-10.27a8.24,8.24,0,0,0-5.44-2,7.26,7.26,0,0,0-5.14,2.4,1.49,1.49,0,0,0,2.12,2.09,4.18,4.18,0,0,1,3.39-.68c-.33,0,.38.06.35,0l.64.07c-.26,0,.33.06.32.06l.49.12a8.18,8.18,0,0,1,1.86.73c3,1.63,4.57,4.76,5.8,7.77.29.72,1.47.43,1.18-.32Z" />
          </g>
        </g>
      </g>
    </svg>
    <audio ref="correct" src="../../assets/sounds/all/correct-ans.mp3"/>
    <audio ref="celebrate" src="../../assets/sounds/all/kids-cheering.mp3"/>
    <audio src="../../assets/sounds/all/Correct_2.mp3" ref="correctVoice"/>
    <audio src="../../assets/sounds/all/Very_Good.mp3" ref="veryGood"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page18.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">130</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import draggable from "vuedraggable";
import anime from "animejs";
import GreenTick from "@/components/feelingsQuestion/ticks/GreenTick";

export default {
  name: 'Session4Page18',
  components: {GreenTick, draggable, ImageComponent},
  data() {
    return {
      dizzy: ['Dizziness'],
      dizzyAns: [],
      stomach: ['Butterflies in the stomach'],
      stomachAns: [],
      skin: ['Cold tingly skin'],
      skinAns: [],
      heart: ['Racing heart'],
      heartAns: [],
      knees: ['Shaky knees'],
      kneesAns: [],
      correctAns: 0
    }
  },
  methods: {
    animateText() {
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
      })
      animation
        .add({
          targets: '.text-box',
          opacity: 1,
        }, 500)
        .add({
          targets: '.clues-sources',
          opacity: 1,
        }, 13500)
        .add({
          targets: '.answers',
          opacity: 1,
        }, 15000);
    },
    handleChange(id) {
      switch (id) {
        case 'dizzy':
          anime({
            targets: '#green-tick-1',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          this.$refs.correct.play();
          this.correctAns++;
          break;
        case 'stomach':
          anime({
            targets: '#green-tick-2',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          this.$refs.correct.play();
          this.correctAns++;
          break;
        case 'skin':
          anime({
            targets: '#green-tick-3',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          this.$refs.correct.play();
          this.correctAns++;
          break;
        case 'heart':
          anime({
            targets: '#green-tick-4',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          this.$refs.correct.play();
          this.correctAns++;
          break;
        case 'knees':
          anime({
            targets: '#green-tick-5',
            opacity: 1,
            delay: 100,
            duration: 100,
            easing: 'linear'
          });
          this.$refs.correct.play();
          this.correctAns++;
          break;
      }
    },
    afterFinishFunctions() {
      document.querySelector('.reward').style.opacity = '1';
      anime({
        targets: '.reward',
        scale: 20,
        duration: 1000,
      })
      this.$refs.celebrate.play();
      setTimeout(() => {this.$refs.veryGood.play()}, 500)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {},
  watch: {
    correctAns: function () {
      if (this.correctAns === 5) {
        this.afterFinishFunctions();
      } else {
        setTimeout(() => {this.$refs.correctVoice.play()}, 500)
      }
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 930px) {
  .clues {
    width: 27vh !important;
  }
  .clue {
    border-radius: 4px !important;
  }
  .answers {
    width: 27vh !important;
    border-radius: 4px !important;
  }
}
.reward {
  position: absolute;
  height: auto;
  width: 1%;
  bottom: 30vh;
  left: 30%;
  opacity: 0;
}
.small-tick {
  position: absolute;
  width: 3% !important;
  z-index: 50;
}
#green-tick-1 {
  right: 29%;
  top: 30vh;
}
#green-tick-2 {
  right: 26%;
  top: 57vh;
}
#green-tick-3 {
  right: 28%;
  top: 44vh;
}
#green-tick-4 {
  right: 6%;
  top: 45vh;
}
#green-tick-5 {
  right: 1%;
  top: 71vh;
}
#dizzy {
  right: 30%;
  top: 27vh;
}
#stomach {
  right: 27%;
  top: 50vh;
  height: 10.49vh;
}
#skin {
  right: 30%;
  top: 41vh;
}
#heart {
  right: 7%;
  top: 42vh;
}
#knees {
  right: 2%;
  top: 68vh;
}
.answers {
  position: absolute;
  width: 23.8vh;
  height: 6.55vh;
  background-color: rgba(255,255,255,0.6);
  border-radius: 10px;
  opacity: 0;
}
.clues {
  width: 23.8vh;
}
.clues-sources {
  position: absolute;
  top: 30vh;
  left: 17%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
}
.clue {
  background-color: #000000;
  color: #ffffff;
  width: 100%;
  font-size: 3.2vh;
  border-radius: 10px;
  text-align: center;
  padding: 1.4vh;
  margin-bottom: 1vh;
}
p { font-size: 3.5vh;margin-bottom: 0; }
.text-box {
  position: absolute;
  width: 90%;
  padding: 2.1vh;
  top: 1vh;
  left: 5%;
  background-color: rgba(255,255,255,0.8);
  opacity: 0;
}
.cls-1 {fill: none;}
.cls-2 {isolation: isolate;}
.cls-19,
.cls-3,
.cls-7 {fill: #bcbec0;}
.cls-18,
.cls-3,
.cls-7 {mix-blend-mode: multiply;}
.cls-4 {fill: #fff;}
.cls-5 {fill: #ffc800;}
.cls-6 {fill: #ea643b;}
.cls-18,
.cls-7 {opacity: 0.84;}
.cls-8 {fill: #262320;}
.cls-9 {clip-path: url(#clip-path);}
.cls-10 {fill: #753bb0;}
.cls-11 {fill: #8e48d7;}
.cls-12 {fill: #3b1e5a;}
.cls-13 {fill: #f0ffe6;}
.cls-14 {clip-path: url(#clip-path-2);}
.cls-15 {fill: #10011e;}
.cls-16 {fill: #efefef;}
.cls-17 {fill: #1c0f12;}
.cls-20 {fill: #affc41;}
.cls-21 {fill: #1dd3b0;}
.cls-22 {font-size: 30.16px;fill: #4a0f00;font-family: AntipastoPro-DemiBold, AntipastoPro DemiBold,serif;font-weight: 300;}
</style>