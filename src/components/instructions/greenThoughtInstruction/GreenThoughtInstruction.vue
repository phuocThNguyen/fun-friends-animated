<template>
  <div class="instruction-container">
    <p><strong>Tap on the 'green' thought bubble.</strong></p>
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
  padding: 1vh;
}
.instruction-container p {
  color: #ffffff;
  margin-bottom: 0;
  font-size: 2.5vh;
}
.instruction-container p:first-child {
  font-size: 3vh;
  font-weight: bold;
}
.instruction-container p:nth-child(2) {
  padding-left: 1.8vh;
}
</style>