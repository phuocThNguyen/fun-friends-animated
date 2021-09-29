<template>
  <div class="instruction-container">
    <p>Instruction:</p>
    <p>- Tap on the correct feeling face.</p>
    <p>- The green tick will appear when</p>
    <p>you choose the correct answer
    <span>
      <svg class="tiny-tick" id="green-tick-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
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
    </span>
    .</p>
  </div>
</template>

<script>
export default {
  name: "EmotionPickInstruction"
}
</script>

<style scoped>
.instruction-container {
  background-color: #00ce7c;
  padding: 1vw;
}
.instruction-container p {
  color: #ffffff;
  margin-bottom: 0;
  font-size: 1.5vw;
}
.instruction-container p:first-child {
  font-size: 2vw;
  font-weight: bold;
}
.instruction-container p:nth-child(2),
.instruction-container p:nth-child(3) {
  padding-left: 1vw;
}
.tiny-tick {
  display: inline-block;
  height: auto;
  width: 2vw;
}
</style>