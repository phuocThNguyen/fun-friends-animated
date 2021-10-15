<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session2/640-resized.jpg" alt="swimming">
    <div class="text-box">
      <p>Swimming makes me feel happy</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Session2Page1",
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 5vh;
  background-color: #00CE7C;
  width: 70%;
  text-align: center;
  padding: 1vh;
  left: 15%;
}
.text-box p {
  color: white;
  font-size: 3.8vh;
  font-weight: bold;
  margin-bottom: 0;
}
</style>