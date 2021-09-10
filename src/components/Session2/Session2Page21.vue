<template>
  <div class="interactive-container cloud-background">
    <div class="text-box">
      <h1>Additional Activity - Feelings Thermometer</h1>
      <p>We all have feelings that vary from weak to strong, about different situations.</p>
      <p>Sometimes we may feel happy or relaxed. Other times we may feel angry or sad.
        <strong>All feelings are okay.</strong></p>
    </div>
    <div class="test">
      <input type="range" min="0" max="100" step="10">
    </div>
  </div>
</template>

<script>
export default {
  name: "Session2Page21",

}
</script>

<style scoped>
.test {
  position: absolute;
  top: 50vh;
  left: 30vw;
}
.cloud-background {
  background-color: rgba(149, 213, 238, 0.6);
}
.text-box {
  position: absolute;
  width: 90vw;
  top: 2vh;
  left: 5vw;
  padding: 1vw;
}
.text-box h1 {
  font-size: 3vw;
  margin-bottom: 4vh;
}
.text-box p {
  font-size: 1.8vw;
}
</style>