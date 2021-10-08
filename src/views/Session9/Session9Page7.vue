<template>
  <div class="interactive-container">
    <div class="image-container">
      <img src="../../assets/images/session9/92230.png" alt="Annie">
      <p>2. Brave Tom &ndash; Learning to garden</p>
    </div>
    <div class="image-container">
      <img src="../../assets/images/session9/3100.png" alt="Annie">
      <p>Tom's Reward &ndash; Fun ride</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Session9Page7'
}
</script>

<style scoped>
.image-container {
  position: absolute;
  bottom: 0;
  width: 49vw;
  height: 100vh;
}
.image-container img {
  width: 100%;
  height: 100%;
}
.image-container p {
  display: block;
  position: absolute;
  bottom: 7vh;
  left: 2vw;
  width: 45vw;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1vh 1vw;
  text-align: center;
  font-size: 2vw;
  font-weight: bold;
}
.image-container:nth-of-type(2) {
  right: 0;
}
</style>