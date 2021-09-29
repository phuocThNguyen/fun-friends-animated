<template>
  <div class="instruction-container">
    <p>Instruction:</p>
    <p>Tap on the thermometer bar to
      <br>change the feeling faces on the left.</p>
  </div>
</template>

<script>
export default {
  name: 'ThermoInstruction'
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
.instruction-container p:nth-child(2) {
  padding-left: 1vw;
}
</style>